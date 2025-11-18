// Vercel Serverless Function - 博客 API
// 使用 GitHub Gist 作为存储后端（免费）
// 需要在 Vercel 环境变量中设置 GITHUB_TOKEN 和 GITHUB_GIST_ID

export default async function handler(req, res) {
    // 设置 CORS 头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // 处理 OPTIONS 请求
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
    const GITHUB_GIST_ID = process.env.GITHUB_GIST_ID || '';
    
    // 如果没有配置 GitHub token，返回错误
    if (!GITHUB_TOKEN || !GITHUB_GIST_ID) {
        console.error('环境变量未配置:', {
            hasToken: !!GITHUB_TOKEN,
            hasGistId: !!GITHUB_GIST_ID
        });
        return res.status(500).json({ 
            error: '服务器未配置 GitHub token 和 Gist ID。请在 Vercel 环境变量中设置 GITHUB_TOKEN 和 GITHUB_GIST_ID。',
            debug: {
                hasToken: !!GITHUB_TOKEN,
                hasGistId: !!GITHUB_GIST_ID
            }
        });
    }
    
    const GIST_API_URL = `https://api.github.com/gists/${GITHUB_GIST_ID}`;
    
    try {
        // GET - 获取所有博客
        if (req.method === 'GET') {
            console.log('GET 请求: 获取博客列表');
            const response = await fetch(GIST_API_URL, {
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'web-resume-blog-api'
                }
            });
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error('GitHub API 错误:', response.status, errorText);
                throw new Error(`GitHub API 错误: ${response.status} - ${errorText.substring(0, 200)}`);
            }
            
            const data = await response.json();
            const content = data.files['blogs.json']?.content || '[]';
            let blogs = [];
            
            try {
                blogs = JSON.parse(content);
                
                // 验证 blogs 是数组
                if (!Array.isArray(blogs)) {
                    console.warn('blogs 不是数组，尝试转换:', typeof blogs);
                    blogs = [];
                }
                
                // 过滤掉无效的博客条目
                blogs = blogs.filter(blog => {
                    if (!blog || typeof blog !== 'object') {
                        console.warn('发现无效的博客条目:', blog);
                        return false;
                    }
                    return true;
                });
                
            } catch (parseError) {
                console.error('JSON 解析错误:', parseError);
                console.error('原始内容:', content.substring(0, 500));
                // 尝试修复常见的 JSON 错误
                try {
                    // 尝试修复未闭合的 JSON
                    let fixedContent = content.trim();
                    if (!fixedContent.endsWith(']')) {
                        // 查找最后一个完整的对象
                        const lastCompleteIndex = fixedContent.lastIndexOf('}');
                        if (lastCompleteIndex > 0) {
                            fixedContent = fixedContent.substring(0, lastCompleteIndex + 1) + ']';
                            blogs = JSON.parse(fixedContent);
                            console.log('已修复 JSON 格式错误');
                        }
                    }
                } catch (fixError) {
                    console.error('无法修复 JSON，返回空数组:', fixError);
                    blogs = [];
                }
            }
            
            console.log('成功获取博客，数量:', blogs.length);
            return res.status(200).json({ blogs });
        }
        
        // POST/PUT - 保存博客
        if (req.method === 'POST' || req.method === 'PUT') {
            const { blogs } = req.body;
            
            if (!Array.isArray(blogs)) {
                return res.status(400).json({ error: 'blogs 必须是数组' });
            }
            
            console.log('POST/PUT 请求: 保存博客，数量:', blogs.length);
            
            const response = await fetch(GIST_API_URL, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json',
                    'User-Agent': 'web-resume-blog-api'
                },
                body: JSON.stringify({
                    files: {
                        'blogs.json': {
                            content: JSON.stringify(blogs, null, 2)
                        }
                    }
                })
            });
            
            if (!response.ok) {
                const errorData = await response.text();
                console.error('GitHub API 保存错误:', response.status, errorData);
                throw new Error(`GitHub API 错误: ${response.status} - ${errorData.substring(0, 200)}`);
            }
            
            console.log('成功保存博客到 GitHub Gist');
            return res.status(200).json({ success: true });
        }
        
        // DELETE - 删除博客
        if (req.method === 'DELETE') {
            const { blogId } = req.body;
            
            if (!blogId) {
                return res.status(400).json({ error: 'blogId 是必需的' });
            }
            
            console.log('DELETE 请求: 删除博客 ID', blogId);
            
            // 先获取现有博客
            const getResponse = await fetch(GIST_API_URL, {
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'User-Agent': 'web-resume-blog-api'
                }
            });
            
            if (!getResponse.ok) {
                const errorText = await getResponse.text();
                throw new Error(`GitHub API 错误: ${getResponse.status} - ${errorText.substring(0, 200)}`);
            }
            
            const data = await getResponse.json();
            const content = data.files['blogs.json']?.content || '[]';
            let blogs = [];
            
            try {
                blogs = JSON.parse(content);
            } catch (parseError) {
                console.error('JSON 解析错误:', parseError);
                blogs = [];
            }
            
            // 过滤掉要删除的博客
            const originalLength = blogs.length;
            const filteredBlogs = blogs.filter(blog => String(blog.id) !== String(blogId));
            
            console.log('删除前:', originalLength, '删除后:', filteredBlogs.length);
            
            // 保存更新后的博客列表
            const saveResponse = await fetch(GIST_API_URL, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json',
                    'User-Agent': 'web-resume-blog-api'
                },
                body: JSON.stringify({
                    files: {
                        'blogs.json': {
                            content: JSON.stringify(filteredBlogs, null, 2)
                        }
                    }
                })
            });
            
            if (!saveResponse.ok) {
                const errorText = await saveResponse.text();
                throw new Error(`GitHub API 错误: ${saveResponse.status} - ${errorText.substring(0, 200)}`);
            }
            
            console.log('成功删除博客');
            return res.status(200).json({ success: true });
        }
        
        return res.status(405).json({ error: '不支持的请求方法' });
    } catch (error) {
        console.error('API 错误:', error);
        return res.status(500).json({ 
            error: error.message,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
}
