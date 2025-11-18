# 博客 API 调试指南

## 快速测试

1. **打开测试页面**
   - 在浏览器中访问：`http://localhost:3000/test_blog_api.html`（本地开发）
   - 或访问：`https://your-domain.vercel.app/test_blog_api.html`（生产环境）

2. **运行完整测试**
   - 点击"运行完整测试"按钮
   - 查看每个测试的结果

## 手动调试步骤

### 步骤 1: 检查 API 端点

在浏览器 Console 中运行：

```javascript
fetch('/api/blogs', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
.then(r => r.json())
.then(data => console.log('✅ 成功:', data))
.catch(err => console.error('❌ 错误:', err));
```

### 步骤 2: 检查环境变量

在 Vercel Dashboard 中：
1. 进入项目 → Settings → Environment Variables
2. 确认以下变量存在：
   - `GITHUB_TOKEN` = `ghp_...`（你的 token）
   - `GITHUB_GIST_ID` = `b36c2b6abeb4e1501020094a820d8cf5`（你的 Gist ID）
3. 确认已勾选所有环境（Production, Preview, Development）

### 步骤 3: 验证 GitHub Gist

1. 访问你的 Gist：
   ```
   https://gist.github.com/你的用户名/b36c2b6abeb4e1501020094a820d8cf5
   ```
2. 确认 Gist 存在且包含 `blogs.json` 文件
3. 如果不存在，创建一个新的 Gist：
   - 文件名：`blogs.json`
   - 内容：`[]`

### 步骤 4: 测试创建博客

在浏览器 Console 中运行：

```javascript
// 1. 先获取现有博客
fetch('/api/blogs')
  .then(r => r.json())
  .then(data => {
    console.log('当前博客:', data.blogs);
    
    // 2. 添加新博客
    const newBlog = {
      id: Date.now(),
      title: '测试博客',
      date: new Date().toISOString().split('T')[0],
      content: '# 测试\n\n这是一条测试博客。'
    };
    
    const blogs = [...(data.blogs || []), newBlog];
    
    // 3. 保存
    return fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blogs })
    });
  })
  .then(r => r.json())
  .then(data => {
    console.log('✅ 保存成功:', data);
    
    // 4. 验证保存
    return fetch('/api/blogs');
  })
  .then(r => r.json())
  .then(data => {
    console.log('✅ 验证成功，当前博客:', data.blogs);
  })
  .catch(err => console.error('❌ 错误:', err));
```

## 常见问题排查

### 问题 1: API 返回 500 错误

**可能原因**：
- 环境变量未配置
- GitHub Token 无效或过期
- Gist ID 不正确

**解决方法**：
1. 检查 Vercel 环境变量
2. 重新生成 GitHub Token
3. 确认 Gist ID 正确

### 问题 2: API 返回 404 错误

**可能原因**：
- API 路由不存在
- Vercel 部署未包含 `api/` 目录

**解决方法**：
1. 确认 `api/blogs.js` 文件存在
2. 重新部署到 Vercel
3. 检查 Vercel Functions 日志

### 问题 3: CORS 错误

**可能原因**：
- API 未设置 CORS 头

**解决方法**：
- 检查 `api/blogs.js` 中的 CORS 设置
- 确认 `Access-Control-Allow-Origin` 已设置

### 问题 4: GitHub API 返回 401/403

**可能原因**：
- Token 权限不足
- Token 格式错误
- Gist 不存在或无权限访问

**解决方法**：
1. 确认 Token 有 `gist` 权限
2. 确认使用 `Bearer` 格式（不是 `token`）
3. 确认 Gist 存在且你有访问权限

## 查看 Vercel 日志

1. 登录 Vercel Dashboard
2. 进入项目 → Functions
3. 点击 `/api/blogs`
4. 查看 "Logs" 标签页
5. 查看错误信息和堆栈跟踪

## 验证 GitHub Gist 内容

直接访问你的 Gist URL，查看 `blogs.json` 文件内容是否更新。

## 联系支持

如果问题仍然存在，请提供：
1. 浏览器 Console 的完整错误信息
2. Vercel Functions 日志
3. 测试页面的测试结果截图

