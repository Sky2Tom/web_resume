# 博客在线同步功能配置指南

## 概述

博客功能已升级为在线同步版本。现在所有用户提交的博客记录都会同步到服务器，所有访问页面的用户都能看到。

## 技术实现

- **前端**：使用 `blog.js` 调用 API 进行数据同步
- **后端**：使用 Vercel Serverless Functions (`/api/blogs.js`)
- **存储**：使用 GitHub Gist 作为数据存储后端
- **降级方案**：如果在线 API 不可用，会自动降级到 localStorage

## 配置步骤

### 1. 创建 GitHub Gist

1. 访问 [GitHub Gist](https://gist.github.com/)
2. 创建一个新的 Gist，文件名设置为 `blogs.json`
3. 初始内容设置为：`[]`（空数组）
4. 选择 "Create public gist" 或 "Create secret gist"（推荐 secret）
5. 创建后，复制 Gist ID（URL 中的最后一部分，例如：`https://gist.github.com/username/abc123def456`，ID 是 `abc123def456`）

### 2. 创建 GitHub Personal Access Token

1. 访问 [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 设置以下权限：
   - ✅ `gist` (Full control of gists)
4. 生成并复制 token（格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`）

### 3. 在 Vercel 中配置环境变量

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目（web_resume）
3. 进入 "Settings" → "Environment Variables"
4. 添加以下环境变量：

   - **变量名**：`GITHUB_TOKEN`
   - **值**：你的 GitHub Personal Access Token
   - **环境**：Production, Preview, Development（全部勾选）

   - **变量名**：`GITHUB_GIST_ID`
   - **值**：你的 GitHub Gist ID
   - **环境**：Production, Preview, Development（全部勾选）

5. 保存后，Vercel 会自动重新部署

### 4. 验证配置

1. 部署完成后，访问你的网站
2. 打开浏览器开发者工具（F12）→ Console
3. 尝试添加一篇博客
4. 检查 Console 中是否有 "博客已同步到服务器" 的日志
5. 在不同设备/浏览器中访问网站，确认可以看到其他用户添加的博客

## 功能特性

### 在线同步
- ✅ 所有用户提交的博客都会同步到服务器
- ✅ 所有访问页面的用户都能看到最新的博客列表
- ✅ 支持添加、删除博客操作

### 降级方案
- ✅ 如果在线 API 不可用，自动使用 localStorage 作为备份
- ✅ 数据会先保存到本地，然后尝试同步到服务器
- ✅ 即使网络断开，用户仍可以正常使用（使用本地数据）

### 自动同步
- ✅ 页面加载时自动从服务器获取最新数据
- ✅ 每 5 分钟自动检查服务器是否有更新
- ✅ 如果有新博客，自动同步到本地并更新显示

## 故障排除

### 问题：博客无法同步到服务器

**可能原因**：
1. GitHub token 或 Gist ID 未正确配置
2. GitHub token 权限不足
3. Gist ID 不正确

**解决方法**：
1. 检查 Vercel 环境变量是否正确设置
2. 确认 GitHub token 有 `gist` 权限
3. 确认 Gist ID 正确（可以从 Gist URL 中获取）
4. 重新部署项目

### 问题：可以看到本地博客，但看不到其他用户的博客

**可能原因**：
1. API 调用失败
2. 服务器配置错误

**解决方法**：
1. 打开浏览器开发者工具 → Network
2. 查看 `/api/blogs` 请求是否成功
3. 检查 Console 中的错误信息
4. 确认 Vercel 环境变量已正确配置

### 问题：博客数据丢失

**解决方法**：
- 博客数据存储在 GitHub Gist 中，不会丢失
- 如果本地数据丢失，刷新页面会自动从服务器同步
- 可以在 GitHub Gist 中直接查看和编辑 `blogs.json` 文件

## API 端点

### GET `/api/blogs`
获取所有博客

**响应**：
```json
{
  "blogs": [
    {
      "id": 1234567890,
      "title": "博客标题",
      "date": "2024-01-01",
      "content": "博客内容（Markdown）"
    }
  ]
}
```

### POST `/api/blogs`
保存博客列表

**请求体**：
```json
{
  "blogs": [...]
}
```

### DELETE `/api/blogs`
删除指定博客

**请求体**：
```json
{
  "blogId": 1234567890
}
```

## 注意事项

1. **GitHub Gist 限制**：
   - 单个 Gist 文件大小限制为 1MB
   - 如果博客内容过多，可能需要考虑其他存储方案

2. **API 调用频率**：
   - 当前设置为每 5 分钟自动同步一次
   - 可以根据需要调整 `blog.js` 中的同步间隔

3. **数据安全**：
   - 建议使用 Secret Gist（私有 Gist）
   - GitHub token 应该妥善保管，不要泄露

4. **备份建议**：
   - 定期备份 GitHub Gist 中的 `blogs.json` 文件
   - 可以在 GitHub 上直接查看和编辑

## 技术支持

如果遇到问题，请检查：
1. Vercel 部署日志
2. 浏览器 Console 错误信息
3. Network 请求状态
4. GitHub Gist 和 Token 配置

