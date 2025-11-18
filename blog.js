// 初始化示例博客函数（需要在loadBlogs之前定义）
function initializeSampleBlogs() {
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    
    // 如果已经有博客，就不添加示例博客
    if (blogs.length > 0) {
        return;
    }
    
    const sampleBlogs = [
        {
            id: Date.now() - 1,
            title: '2024年AI技术发展趋势与市场前景分析',
            date: '2024-11-01',
            content: `# 2024年AI技术发展趋势与市场前景分析

## 执行摘要

人工智能技术在2024年迎来了前所未有的发展浪潮。从大语言模型到多模态AI，从边缘计算到AI芯片，整个行业正在经历快速变革。本报告深入分析了当前AI技术的主要发展趋势、市场机遇以及未来展望。

## 一、核心技术发展趋势

### 1.1 大语言模型（LLM）的演进

2024年，大语言模型继续向更大规模、更强能力的方向发展：

- **模型规模**：参数量从千亿级向万亿级迈进
- **多模态能力**：文本、图像、音频、视频的统一理解
- **推理能力**：从简单问答到复杂逻辑推理的突破
- **效率优化**：模型压缩、量化、蒸馏技术的成熟

### 1.2 生成式AI的广泛应用

生成式AI正在重塑多个行业：

- **内容创作**：文本、图像、视频的自动生成
- **代码开发**：AI辅助编程工具成为开发者标配
- **设计领域**：UI/UX设计的智能化辅助
- **教育培训**：个性化学习内容生成

### 1.3 边缘AI的兴起

随着计算能力的提升和模型优化技术的发展，AI推理正在向边缘设备迁移：

- **移动设备**：智能手机、平板电脑的本地AI能力
- **IoT设备**：智能家居、工业物联网的实时AI处理
- **自动驾驶**：车载AI系统的实时决策能力

## 二、市场机遇分析

### 2.1 企业AI应用市场

企业级AI应用市场预计将达到**$1500亿美元**的规模：

- **客户服务**：智能客服、聊天机器人
- **业务流程**：自动化流程、智能决策支持
- **数据分析**：预测分析、异常检测
- **安全防护**：威胁检测、欺诈识别

### 2.2 AI基础设施市场

AI基础设施包括硬件、软件和服务：

- **AI芯片**：GPU、TPU、专用AI芯片
- **云平台**：AI训练和推理平台
- **数据服务**：数据标注、数据管理
- **模型服务**：模型托管、API服务

### 2.3 垂直行业应用

不同行业的AI应用呈现差异化特点：

- **金融**：风控、量化交易、智能投顾
- **医疗**：影像诊断、药物研发、个性化治疗
- **制造**：质量检测、预测性维护、智能排产
- **零售**：推荐系统、库存优化、价格策略

## 三、技术挑战与解决方案

### 3.1 数据质量与隐私

**挑战**：
- 高质量训练数据稀缺
- 数据隐私保护要求
- 数据标注成本高昂

**解决方案**：
- 合成数据生成技术
- 联邦学习、差分隐私
- 自动化标注工具

### 3.2 模型可解释性

**挑战**：
- 黑盒模型难以理解
- 监管合规要求
- 用户信任问题

**解决方案**：
- 可解释AI（XAI）技术
- 模型可视化工具
- 规则与模型混合方法

### 3.3 计算资源需求

**挑战**：
- 训练成本高昂
- 推理延迟问题
- 能源消耗大

**解决方案**：
- 模型压缩与量化
- 分布式训练
- 专用AI芯片

## 四、未来展望

### 4.1 短期趋势（2024-2025）

- **多模态AI**将成为主流
- **AI Agent**将实现更复杂的任务自动化
- **边缘AI**将大幅提升设备智能化水平
- **AI安全**将成为重要关注点

### 4.2 中期趋势（2025-2027）

- **通用人工智能（AGI）**研究将取得重要进展
- **AI与机器人**的深度融合
- **AI治理**框架将逐步建立
- **AI教育**将普及到各个层次

### 4.3 长期愿景（2027+）

- **AGI**可能实现突破
- **人机协作**将成为新的工作模式
- **AI伦理**将形成全球共识
- **AI民主化**将使每个人都能使用AI

## 五、投资建议

### 5.1 技术投资方向

1. **基础模型研发**：投资于下一代大语言模型
2. **垂直应用**：深耕特定行业的AI解决方案
3. **基础设施**：AI芯片、云平台、工具链
4. **数据服务**：高质量数据获取和处理能力

### 5.2 市场进入策略

- **B2B市场**：企业级AI应用和服务
- **开发者工具**：降低AI应用开发门槛
- **平台生态**：构建AI应用生态系统
- **咨询服务**：AI转型咨询和实施

## 结论

AI技术正在经历快速发展期，市场机遇巨大，但也面临诸多挑战。企业需要：

1. **技术储备**：建立AI技术能力和团队
2. **数据战略**：制定数据获取和管理策略
3. **应用场景**：找到适合的AI应用场景
4. **风险管控**：关注AI伦理、安全、合规问题

未来属于那些能够有效利用AI技术、解决实际问题的企业和个人。

---

*报告日期：2024年11月1日*  
*作者：汤骁宇*  
*来源：个人研究分析*`
        },
        {
            id: Date.now(),
            title: '生成式AI在企业数字化转型中的应用实践',
            date: '2024-11-10',
            content: `# 生成式AI在企业数字化转型中的应用实践

## 报告概述

随着ChatGPT、Midjourney等生成式AI工具的爆火，企业开始重新审视AI在数字化转型中的价值。本报告基于实际项目经验，深入分析生成式AI在企业数字化转型中的应用场景、实施策略和最佳实践。

## 一、生成式AI的核心能力

### 1.1 内容生成能力

生成式AI可以自动生成多种类型的内容：

- **文本生成**：报告、邮件、文档、代码
- **图像生成**：设计稿、营销素材、产品图片
- **音频生成**：语音合成、音乐创作
- **视频生成**：宣传片、培训视频

### 1.2 内容理解与转换

- **文档理解**：自动提取关键信息
- **格式转换**：不同格式间的自动转换
- **语言翻译**：多语言实时翻译
- **内容摘要**：长文本自动摘要

### 1.3 智能对话与交互

- **智能客服**：7×24小时客户服务
- **知识问答**：企业内部知识库查询
- **任务助手**：日程安排、任务管理
- **决策支持**：数据分析和建议生成

## 二、企业应用场景分析

### 2.1 营销与销售

**应用场景**：

1. **内容营销**
   - 自动生成营销文案、社交媒体内容
   - 个性化邮件营销内容
   - 多语言营销材料本地化

2. **客户服务**
   - 智能客服机器人
   - 客户问题自动分类和路由
   - 服务知识库自动更新

3. **销售支持**
   - 销售话术生成
   - 客户画像分析
   - 销售预测和建议

**实施案例**：

某电商平台使用生成式AI：
- 商品描述自动生成，效率提升**80%**
- 客服响应时间缩短**60%**
- 营销内容制作成本降低**50%**

### 2.2 产品开发与设计

**应用场景**：

1. **需求分析**
   - 用户反馈自动分析
   - 需求文档自动生成
   - 竞品分析报告生成

2. **设计辅助**
   - UI/UX设计稿生成
   - 设计规范文档生成
   - 设计评审建议

3. **开发支持**
   - 代码自动生成
   - 代码审查和优化建议
   - 技术文档自动生成

**实施案例**：

某软件公司使用AI辅助开发：
- 代码生成效率提升**40%**
- Bug检测准确率提升**35%**
- 文档编写时间减少**70%**

### 2.3 运营与管理

**应用场景**：

1. **流程自动化**
   - 业务流程文档生成
   - 操作手册自动生成
   - 培训材料制作

2. **数据分析**
   - 数据报告自动生成
   - 数据洞察总结
   - 可视化图表生成

3. **知识管理**
   - 知识库自动构建
   - 知识检索和问答
   - 知识更新和维护

**实施案例**：

某制造企业使用AI知识管理：
- 知识检索效率提升**5倍**
- 新员工培训时间缩短**50%**
- 知识更新及时性提升**80%**

## 三、实施策略与路径

### 3.1 技术选型

**模型选择**：

1. **通用大模型**
   - 优势：能力强、开箱即用
   - 劣势：成本高、数据隐私风险
   - 适用：内容生成、通用对话

2. **行业专用模型**
   - 优势：专业性强、成本可控
   - 劣势：能力有限、需要定制
   - 适用：垂直领域应用

3. **自建模型**
   - 优势：数据安全、完全可控
   - 劣势：成本高、技术门槛高
   - 适用：大型企业、敏感数据

**部署方式**：

- **云端部署**：快速上线、弹性扩展
- **本地部署**：数据安全、低延迟
- **混合部署**：兼顾安全与成本

### 3.2 数据准备

**数据收集**：

- 历史文档和资料
- 业务流程数据
- 客户交互数据
- 行业知识库

**数据清洗**：

- 格式标准化
- 内容去重
- 质量筛选
- 隐私脱敏

**数据标注**：

- 自动标注工具
- 人工审核机制
- 持续优化迭代

### 3.3 系统集成

**API集成**：

- RESTful API
- GraphQL接口
- Webhook回调
- 消息队列

**平台集成**：

- 企业办公系统（OA、CRM、ERP）
- 云平台服务（AWS、Azure、GCP）
- 开发工具链（Git、CI/CD）
- 数据分析平台

## 四、最佳实践与经验

### 4.1 项目启动阶段

**关键步骤**：

1. **需求分析**
   - 明确业务目标和痛点
   - 评估AI适用性
   - 制定成功指标

2. **试点选择**
   - 选择低风险、高价值场景
   - 小范围试点验证
   - 快速迭代优化

3. **团队组建**
   - 业务专家
   - AI技术专家
   - 产品经理
   - 数据工程师

### 4.2 开发实施阶段

**开发流程**：

1. **原型开发**（2-4周）
   - 快速验证可行性
   - 用户反馈收集
   - 技术方案验证

2. **系统开发**（2-3个月）
   - 功能完整实现
   - 性能优化
   - 安全加固

3. **测试部署**（1-2周）
   - 功能测试
   - 性能测试
   - 安全测试
   - 灰度发布

### 4.3 运营优化阶段

**持续优化**：

- **模型优化**：定期更新模型、fine-tuning
- **数据优化**：持续收集高质量数据
- **体验优化**：基于用户反馈改进
- **成本优化**：寻找更经济的方案

## 五、风险与挑战

### 5.1 技术风险

- **模型准确性**：生成内容可能不准确
- **系统稳定性**：API调用失败、延迟问题
- **技术更新**：技术快速迭代带来的兼容性问题

**应对措施**：

- 建立内容审核机制
- 实现降级方案和容错机制
- 保持技术栈的灵活性

### 5.2 数据风险

- **数据隐私**：敏感数据泄露风险
- **数据质量**：低质量数据影响效果
- **数据合规**：法规合规要求

**应对措施**：

- 数据加密和访问控制
- 数据质量监控机制
- 合规性审查流程

### 5.3 业务风险

- **投资回报**：ROI不达预期
- **用户接受度**：用户不习惯AI工具
- **组织变革**：需要改变工作流程

**应对措施**：

- 设定合理的ROI目标
- 充分的用户培训和支持
- 渐进式组织变革

## 六、ROI分析

### 6.1 成本分析

**一次性成本**：

- 系统开发：$50,000 - $200,000
- 数据准备：$10,000 - $50,000
- 培训费用：$5,000 - $20,000

**持续成本**：

- 模型API调用：$1,000 - $10,000/月
- 系统维护：$5,000 - $20,000/月
- 人员成本：$20,000 - $50,000/月

### 6.2 收益分析

**效率提升**：

- 内容生成效率：提升**60-80%**
- 响应时间缩短：**50-70%**
- 人工成本节省：**30-50%**

**质量提升**：

- 内容一致性提升
- 错误率降低
- 客户满意度提升

**典型ROI**：

- 投资回收期：**6-12个月**
- 3年ROI：**200-400%**

## 七、未来展望

### 7.1 技术趋势

- **多模态能力**：文本、图像、音频的统一处理
- **Agent能力**：更复杂的任务自动化
- **个性化定制**：基于企业数据的定制化模型
- **边缘部署**：本地化部署降低成本

### 7.2 应用趋势

- **深度集成**：与业务系统深度集成
- **行业化**：垂直行业的专业解决方案
- **平台化**：AI能力平台化、服务化
- **生态化**：构建AI应用生态系统

## 结论与建议

生成式AI为企业数字化转型提供了新的可能性，但成功实施需要：

1. **战略规划**：制定清晰的AI应用战略
2. **场景选择**：选择适合的应用场景
3. **技术能力**：建立必要的技术能力
4. **组织变革**：推动组织适应AI工具
5. **持续优化**：建立持续改进机制

企业应该从**小规模试点**开始，逐步扩大应用范围，最终实现AI能力的全面赋能。

---

*报告日期：2024年11月10日*  
*作者：汤骁宇*  
*来源：基于NIO和创超科技项目实践经验*`
        }
    ];
    
    // 保存示例博客
    localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
    
    // 确保博客有ID
    sampleBlogs.forEach((blog, index) => {
        if (!blog.id) {
            blog.id = Date.now() - (sampleBlogs.length - index);
        }
    });
    
    // 重新保存
    localStorage.setItem('blogs', JSON.stringify(sampleBlogs));
}

// 博客功能 - 在线同步版本
// API 配置
const BLOG_API_URL = '/api/blogs'; // Vercel Serverless Function 路径
// 如果使用其他 API，可以修改这里，例如：
// const BLOG_API_URL = 'https://your-api-domain.com/api/blogs';

// Markdown 渲染函数（带降级处理）
function renderMarkdown(markdownText) {
    if (!markdownText || typeof markdownText !== 'string') {
        return '';
    }
    
    // 如果 marked 库已加载，使用它
    if (typeof marked !== 'undefined') {
        try {
            // 配置 marked 选项
            marked.setOptions({
                breaks: true, // 支持换行
                gfm: true, // 支持 GitHub Flavored Markdown
                headerIds: false, // 不生成 header ID
                mangle: false // 不混淆邮箱地址
            });
            return marked.parse(markdownText);
        } catch (e) {
            console.warn('Markdown 解析失败，使用纯文本:', e);
        }
    }
    
    // 降级：简单的文本处理
    return markdownText
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>');
}

// 博客功能
document.addEventListener('DOMContentLoaded', function() {
    const addBlogBtn = document.getElementById('addBlogBtn');
    const blogUploadForm = document.getElementById('blogUploadForm');
    const blogList = document.getElementById('blogList');
    const saveBlogBtn = document.getElementById('saveBlogBtn');
    const cancelBlogBtn = document.getElementById('cancelBlogBtn');
    const blogFileInput = document.getElementById('blogFile');
    const blogFormTitle = blogUploadForm ? blogUploadForm.querySelector('h3') : null;
    
    // 编辑模式状态
    let editingBlogId = null;
    
    // 检查必要的元素是否存在
    if (!blogList) {
        console.error('❌ 错误：找不到 blogList 元素！请检查 HTML 中是否有 <div id="blogList"></div>');
        return;
    }
    
    if (!addBlogBtn) {
        console.warn('⚠️ 警告：找不到 addBlogBtn 元素');
    }
    
    console.log('✅ 博客功能初始化完成，blogList 元素:', blogList);
    
    // 从在线 API 加载博客（带降级到 localStorage）
    async function loadBlogs() {
        try {
            // 先显示加载状态
            if (blogList) {
                blogList.innerHTML = '<p class="blog-empty">正在加载博客...</p>';
            }
            
            console.log('🔄 开始从 API 加载博客，URL:', BLOG_API_URL);
            
            // 尝试从在线 API 获取
            const response = await fetch(BLOG_API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            console.log('📡 API 响应状态:', response.status, response.statusText);
            
            if (response.ok) {
                const data = await response.json();
                const blogs = data.blogs || [];
                
                // 保存到 localStorage 作为缓存
                localStorage.setItem('blogs', JSON.stringify(blogs));
                localStorage.setItem('blogs_last_sync', Date.now().toString());
                
                console.log('✅ 成功从服务器加载博客，数量:', blogs.length);
                if (blogs.length > 0) {
                    console.log('博客列表:', blogs.map(b => ({ id: b.id, title: b.title })));
                }
                displayBlogs(blogs);
                return;
            } else {
                // 尝试获取错误详情
                let errorData = null;
                let errorText = '';
                try {
                    errorText = await response.text();
                    try {
                        errorData = JSON.parse(errorText);
                    } catch (e) {
                        errorData = { error: errorText.substring(0, 500) };
                    }
                } catch (e) {
                    errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
                }
                
                console.error('❌ 在线 API 获取失败！');
                console.error('状态码:', response.status);
                console.error('状态文本:', response.statusText);
                console.error('错误详情:', errorData);
                console.error('原始响应:', errorText.substring(0, 500));
                
                // 如果是配置错误，显示提示
                if (response.status === 500) {
                    if (errorData.error && errorData.error.includes('未配置')) {
                        console.error('❌ 服务器配置错误: GitHub Token 或 Gist ID 未配置');
                        console.error('请在 Vercel Dashboard 中设置环境变量:');
                        console.error('  - GITHUB_TOKEN');
                        console.error('  - GITHUB_GIST_ID');
                    } else if (errorData.error && errorData.error.includes('GitHub API')) {
                        console.error('❌ GitHub API 错误，可能的原因:');
                        console.error('  1. GitHub Token 无效或过期');
                        console.error('  2. Gist ID 不正确');
                        console.error('  3. Token 没有 gist 权限');
                    }
                } else if (response.status === 404) {
                    console.error('❌ API 端点不存在 (404)');
                    console.error('请检查:');
                    console.error('  1. API 文件是否存在: /api/blogs.js');
                    console.error('  2. Vercel 是否已正确部署');
                } else if (response.status === 0 || response.status === 'failed') {
                    console.error('❌ 网络错误或 CORS 问题');
                    console.error('请检查网络连接和 CORS 配置');
                }
            }
        } catch (error) {
            console.error('❌ 在线 API 获取时发生异常:');
            console.error('错误类型:', error.name);
            console.error('错误消息:', error.message);
            console.error('错误堆栈:', error.stack);
            
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                console.error('❌ 网络连接失败，可能的原因:');
                console.error('  1. API 端点不存在');
                console.error('  2. 服务器未运行');
                console.error('  3. CORS 配置问题');
                console.error('  4. 网络连接问题');
            }
        }
        
        // 降级：从 localStorage 加载
        console.log('🔄 降级到本地存储...');
        const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        console.log('📦 从本地存储加载博客，数量:', blogs.length);
        displayBlogs(blogs);
    }
    
    // 显示博客列表
    function displayBlogs(blogs) {
        console.log('displayBlogs 被调用，blogs:', blogs);
        
        if (!blogList) {
            console.error('❌ blogList 元素不存在！请检查 HTML 中是否有 id="blogList" 的元素');
            return;
        }
        
        blogList.innerHTML = '';
        
        if (!blogs || blogs.length === 0) {
            console.log('博客列表为空');
            blogList.innerHTML = '<p class="blog-empty">还没有博客，点击 + 号添加第一篇博客吧！</p>';
            return;
        }
        
        // 确保 blogs 是数组
        if (!Array.isArray(blogs)) {
            console.error('❌ blogs 不是数组:', typeof blogs, blogs);
            blogList.innerHTML = '<p class="blog-empty">数据格式错误：blogs 不是数组</p>';
            return;
        }
        
        console.log(`准备显示 ${blogs.length} 条博客`);
        
        // 按日期排序（最新的在前）
        blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        blogs.forEach((blog, index) => {
            // 验证博客数据
            if (!blog || !blog.title) {
                console.warn(`跳过无效的博客条目 ${index}:`, blog);
                return;
            }
            
            try {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
                
                // 确保日期格式正确
                const blogDate = blog.date || new Date().toISOString().split('T')[0];
                let blogContent = blog.content || '';
                
                // 如果内容是 URL，自动转换为链接格式
                if (blogContent && (blogContent.startsWith('http://') || blogContent.startsWith('https://'))) {
                    blogContent = `[${blogContent}](${blogContent})`;
                }
                
            blogCard.innerHTML = `
                <div class="blog-card-header">
                    <div class="blog-card-header-content">
                        <h3 class="blog-card-title">${escapeHtml(blog.title)}</h3>
                        <span class="blog-card-date">${formatDate(blogDate)}</span>
                    </div>
                    <div class="blog-card-actions">
                        <button class="blog-toggle-btn" data-blog-id="${blog.id || Date.now() + index}" title="展开/折叠">
                            <svg class="toggle-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <button class="blog-edit-btn" data-blog-id="${blog.id || Date.now() + index}" title="编辑博客">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                        </button>
                    <button class="blog-delete-btn" data-blog-id="${blog.id || Date.now() + index}" title="删除博客">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
                </div>
                <div class="blog-card-content markdown-body" data-blog-id="${blog.id || Date.now() + index}">
                    ${renderMarkdown(blogContent)}
                </div>
            `;
            
            // 恢复折叠状态（从 localStorage 读取用户偏好）
            const blogId = blog.id || Date.now() + index;
            const isCollapsed = localStorage.getItem(`blog_collapsed_${blogId}`) === 'true';
            const contentDiv = blogCard.querySelector('.blog-card-content');
            const toggleBtn = blogCard.querySelector('.blog-toggle-btn');
            const toggleIcon = toggleBtn.querySelector('.toggle-icon');
            
            // 默认展开，如果用户之前折叠过则保持折叠状态
            if (isCollapsed) {
                contentDiv.style.display = 'none';
                toggleIcon.style.transform = 'rotate(-90deg)';
            } else {
                contentDiv.style.display = 'block';
                toggleIcon.style.transform = 'rotate(0deg)';
            }
            blogList.appendChild(blogCard);
                console.log(`✅ 已添加博客: ${blog.title}`);
            } catch (error) {
                console.error(`❌ 添加博客时出错 (${blog.title}):`, error);
            }
        });
        
        console.log(`✅ 共显示 ${blogList.children.length} 条博客`);
        
        // 为删除按钮添加事件监听
        document.querySelectorAll('.blog-delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const blogId = this.getAttribute('data-blog-id');
                deleteBlog(blogId);
            });
        });
        
        // 为编辑按钮添加事件监听
        document.querySelectorAll('.blog-edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const blogId = this.getAttribute('data-blog-id');
                editBlog(blogId);
            });
        });
        
        // 为折叠/展开按钮添加事件监听
        document.querySelectorAll('.blog-toggle-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // 防止事件冒泡
                const blogId = this.getAttribute('data-blog-id');
                const contentDiv = document.querySelector(`.blog-card-content[data-blog-id="${blogId}"]`);
                const toggleIcon = this.querySelector('.toggle-icon');
                
                if (contentDiv) {
                    const isCollapsed = contentDiv.style.display === 'none' || 
                                       contentDiv.classList.contains('collapsed');
                    
                    if (isCollapsed) {
                        // 展开
                        contentDiv.style.display = 'block';
                        contentDiv.classList.remove('collapsed');
                        toggleIcon.style.transform = 'rotate(0deg)';
                        localStorage.setItem(`blog_collapsed_${blogId}`, 'false');
                    } else {
                        // 折叠
                        contentDiv.style.display = 'none';
                        contentDiv.classList.add('collapsed');
                        toggleIcon.style.transform = 'rotate(-90deg)';
                        localStorage.setItem(`blog_collapsed_${blogId}`, 'true');
                    }
                }
            });
        });
    }
    
    // 编辑博客
    function editBlog(blogId) {
        const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const blog = blogs.find(b => String(b.id) === String(blogId));
        
        if (!blog) {
            alert('找不到要编辑的博客');
            return;
        }
        
        // 设置编辑模式
        editingBlogId = blogId;
        
        // 更新表单标题
        if (blogFormTitle) {
            blogFormTitle.textContent = '编辑博客';
        }
        
        // 填充表单数据
        document.getElementById('blogTitle').value = blog.title || '';
        document.getElementById('blogDate').value = blog.date || new Date().toISOString().split('T')[0];
        
        // 如果内容是 Markdown 链接格式，还原为原始 URL
        let content = blog.content || '';
        const linkMatch = content.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch && linkMatch[2] === linkMatch[1]) {
            content = linkMatch[2]; // 还原为原始 URL
        }
        document.getElementById('blogContent').value = content;
        document.getElementById('blogFile').value = '';
        
        // 更新保存按钮文本
        saveBlogBtn.textContent = '更新';
        
        // 显示表单
        blogUploadForm.style.display = 'block';
        
        // 滚动到表单位置
        blogUploadForm.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // 聚焦到标题输入框
        setTimeout(() => {
            document.getElementById('blogTitle').focus();
        }, 100);
    }
    
    // 保存博客（在线同步）- 支持新建和编辑
    async function saveBlog() {
        const title = document.getElementById('blogTitle').value.trim();
        const date = document.getElementById('blogDate').value;
        const content = document.getElementById('blogContent').value.trim();
        
        if (!title || !date || !content) {
            alert('请填写所有必填字段');
            return;
        }
        
        // 显示保存状态
        const originalBtnText = saveBlogBtn.innerHTML;
        saveBlogBtn.disabled = true;
        saveBlogBtn.innerHTML = editingBlogId ? '更新中...' : '保存中...';
        
        // 先保存到本地（立即反馈）
        const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        
        if (editingBlogId) {
            // 编辑模式：更新现有博客
            const blogIndex = blogs.findIndex(b => String(b.id) === String(editingBlogId));
            if (blogIndex !== -1) {
                blogs[blogIndex] = {
                    id: editingBlogId,
                    title: title,
                    date: date,
                    content: content
                };
                console.log('更新博客:', blogs[blogIndex].title);
            } else {
                alert('找不到要编辑的博客');
                saveBlogBtn.disabled = false;
                saveBlogBtn.innerHTML = originalBtnText;
                return;
            }
        } else {
            // 新建模式：添加新博客
            const newBlog = {
            id: Date.now(),
            title: title,
            date: date,
            content: content
            };
            blogs.push(newBlog);
            console.log('添加新博客:', newBlog.title);
        }
        
        localStorage.setItem('blogs', JSON.stringify(blogs));
        
        // 立即显示更新后的博客（不等待服务器响应）
        console.log('保存博客到本地，博客数量:', blogs.length);
        displayBlogs(blogs);
        
        // 清空表单和编辑状态
        document.getElementById('blogTitle').value = '';
        document.getElementById('blogDate').value = '';
        document.getElementById('blogContent').value = '';
        document.getElementById('blogFile').value = '';
        editingBlogId = null;
        
        // 恢复表单标题和按钮文本
        if (blogFormTitle) {
            blogFormTitle.textContent = '添加新博客';
        }
        saveBlogBtn.textContent = '保存';
        
        // 隐藏表单
        blogUploadForm.style.display = 'none';
        
        // 恢复按钮状态（在显示博客后立即恢复，不等待 API）
        saveBlogBtn.disabled = false;
        saveBlogBtn.innerHTML = originalBtnText;
        
        // 尝试同步到在线 API（后台进行，不影响用户体验）
        (async () => {
            try {
                console.log('开始同步博客到服务器...');
                const response = await fetch(BLOG_API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ blogs: blogs })
                });
                
                if (response.ok) {
                    localStorage.setItem('blogs_last_sync', Date.now().toString());
                    console.log('✅ 博客已同步到服务器');
                    // 同步成功后，重新从服务器加载以确保数据一致性（延迟执行，避免覆盖刚显示的内容）
                    setTimeout(() => {
                        console.log('从服务器重新加载博客...');
        loadBlogs();
                    }, 1000); // 延迟1秒，确保服务器已更新
                } else {
                    const errorData = await response.json().catch(() => ({ error: '未知错误' }));
                    console.warn('⚠️ 在线同步失败，但已保存到本地:', response.status, errorData);
                    // 即使同步失败，本地数据已经显示，用户可以看到
                }
            } catch (error) {
                console.warn('⚠️ 在线同步失败，但已保存到本地:', error);
                // 即使同步失败，本地数据已经显示，用户可以看到
            }
        })();
    }
    
    // 删除博客（在线同步）
    async function deleteBlog(blogId) {
        if (!confirm('确定要删除这篇博客吗？')) {
            return;
        }
        
        // 先从本地删除（立即反馈）
            const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            const filteredBlogs = blogs.filter(blog => String(blog.id || blog.title) !== String(blogId));
            localStorage.setItem('blogs', JSON.stringify(filteredBlogs));
        
        try {
            // 尝试同步到在线 API
            const response = await fetch(BLOG_API_URL, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ blogId: blogId })
            });
            
            if (response.ok) {
                localStorage.setItem('blogs_last_sync', Date.now().toString());
                console.log('删除已同步到服务器');
            } else {
                console.warn('在线同步失败，但已从本地删除:', response.status);
            }
        } catch (error) {
            console.warn('在线同步失败，但已从本地删除:', error);
        }
        
        // 重新加载博客列表
        loadBlogs();
    }
    
    // 导出到全局作用域以便HTML中的onclick使用（如果需要）
    window.deleteBlog = deleteBlog;
    
    // 读取Markdown文件
    blogFileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const content = e.target.result;
                document.getElementById('blogContent').value = content;
                
                // 尝试从文件名提取标题
                const fileName = file.name.replace(/\.(md|markdown)$/i, '');
                if (!document.getElementById('blogTitle').value) {
                    document.getElementById('blogTitle').value = fileName;
                }
            };
            reader.readAsText(file);
        }
    });
    
    // 事件监听
    addBlogBtn.addEventListener('click', function() {
        // 重置编辑状态
        editingBlogId = null;
        if (blogFormTitle) {
            blogFormTitle.textContent = '添加新博客';
        }
        saveBlogBtn.textContent = '保存';
        
        // 切换表单显示
        blogUploadForm.style.display = blogUploadForm.style.display === 'none' ? 'block' : 'none';
        if (blogUploadForm.style.display === 'block') {
            // 清空表单
            document.getElementById('blogTitle').value = '';
            document.getElementById('blogDate').value = '';
            document.getElementById('blogContent').value = '';
            document.getElementById('blogFile').value = '';
            
            // 设置默认日期为今天
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('blogDate').value = today;
            
            // 聚焦到标题输入框
            setTimeout(() => {
                document.getElementById('blogTitle').focus();
            }, 100);
        }
    });
    
    saveBlogBtn.addEventListener('click', saveBlog);
    
    cancelBlogBtn.addEventListener('click', function() {
        // 重置编辑状态
        editingBlogId = null;
        if (blogFormTitle) {
            blogFormTitle.textContent = '添加新博客';
        }
        saveBlogBtn.textContent = '保存';
        
        // 隐藏表单并清空
        blogUploadForm.style.display = 'none';
        document.getElementById('blogTitle').value = '';
        document.getElementById('blogDate').value = '';
        document.getElementById('blogContent').value = '';
        document.getElementById('blogFile').value = '';
    });
    
    // 工具函数
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // 初始化示例博客（如果还没有博客）
    // 注意：只在本地没有博客时初始化，避免覆盖在线数据
    const localBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    if (localBlogs.length === 0) {
    initializeSampleBlogs();
    }
    
    // 初始化：加载博客（优先从在线 API 加载）
    loadBlogs();
    
    // 定期同步（每5分钟检查一次是否有更新）
    setInterval(async () => {
        try {
            const response = await fetch(BLOG_API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                const onlineBlogs = data.blogs || [];
                const localBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
                
                // 比较本地和在线数据，如果在线数据更新，则同步
                const lastSync = parseInt(localStorage.getItem('blogs_last_sync') || '0');
                const onlineBlogsStr = JSON.stringify(onlineBlogs);
                const localBlogsStr = JSON.stringify(localBlogs);
                
                // 如果在线数据与本地不同，且在线数据看起来更新（有更多博客或时间戳更新）
                if (onlineBlogsStr !== localBlogsStr && onlineBlogs.length >= localBlogs.length) {
                    localStorage.setItem('blogs', onlineBlogsStr);
                    localStorage.setItem('blogs_last_sync', Date.now().toString());
                    displayBlogs(onlineBlogs);
                    console.log('博客已从服务器同步更新');
                }
            }
        } catch (error) {
            // 静默失败，不影响用户体验
            console.debug('定期同步检查失败:', error);
        }
    }, 5 * 60 * 1000); // 5分钟
});
