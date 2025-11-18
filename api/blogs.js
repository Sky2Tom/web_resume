// Vercel Serverless Function - 博客 API
// 这个 API 使用 GitHub Gist 作为存储后端
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
        return res.status(500).json({ 
            error: '服务器未配置 GitHub token 和 Gist ID。请在 Vercel 环境变量中设置 GITHUB_TOKEN 和 GITHUB_GIST_ID。' 
        });
    }
    
    const GIST_API_URL = `https://api.github.com/gists/${GITHUB_GIST_ID}`;
    
    try {
        // GET - 获取所有博客
        if (req.method === 'GET') {
            const response = await fetch(GIST_API_URL, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`GitHub API 错误: ${response.status}`);
            }
            
            const data = await response.json();
            const content = data.files['blogs.json']?.content || '[]';
            const blogs = JSON.parse(content);
            
            return res.status(200).json({ blogs });
        }
        
        // POST/PUT - 保存博客
        if (req.method === 'POST' || req.method === 'PUT') {
            const { blogs } = req.body;
            
            if (!Array.isArray(blogs)) {
                return res.status(400).json({ error: 'blogs 必须是数组' });
            }
            
            const response = await fetch(GIST_API_URL, {
                method: 'PATCH',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
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
                throw new Error(`GitHub API 错误: ${response.status} - ${errorData}`);
            }
            
            return res.status(200).json({ success: true });
        }
        
        // DELETE - 删除博客（通过 POST 请求，在 body 中指定要删除的博客 ID）
        if (req.method === 'DELETE') {
            // 先获取现有博客
            const getResponse = await fetch(GIST_API_URL, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            
            if (!getResponse.ok) {
                throw new Error(`GitHub API 错误: ${getResponse.status}`);
            }
            
            const data = await getResponse.json();
            const content = data.files['blogs.json']?.content || '[]';
            let blogs = JSON.parse(content);
            
            // 从请求体中获取要删除的博客 ID
            const { blogId } = req.body;
            blogs = blogs.filter(blog => String(blog.id) !== String(blogId));
            
            // 保存更新后的博客列表
            const saveResponse = await fetch(GIST_API_URL, {
                method: 'PATCH',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: {
                        'blogs.json': {
                            content: JSON.stringify(blogs, null, 2)
                        }
                    }
                })
            });
            
            if (!saveResponse.ok) {
                throw new Error(`GitHub API 错误: ${saveResponse.status}`);
            }
            
            return res.status(200).json({ success: true });
        }
        
        return res.status(405).json({ error: '不支持的请求方法' });
    } catch (error) {
        console.error('API 错误:', error);
        return res.status(500).json({ error: error.message });
    }
}

