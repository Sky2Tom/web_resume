# 博客在线同步功能配置指南

## 概述

博客功能已升级为在线同步版本。现在所有用户提交的博客记录都会同步到服务器，所有访问页面的用户都能看到。

## 技术实现

- **前端**：使用 `blog.js` 调用 API 进行数据同步
- **后端**：使用 Vercel Serverless Functions (`/api/blogs.js`)
- **存储**：使用 GitHub Gist 作为数据存储后端（免费）
- **降级方案**：如果在线 API 不可用，会自动降级到 localStorage

## 配置步骤

### 1. 创建 GitHub Gist

1. **访问 GitHub Gist**
   - 打开浏览器，访问 [https://gist.github.com/](https://gist.github.com/)
   - 登录你的 GitHub 账号

2. **创建新 Gist**
   - 点击页面上的 "Create a new gist" 或直接访问创建页面
   - **文件名**：输入 `blogs.json`
   - **内容**：输入 `[]`（空数组）
   - 选择 "Create public gist" 或 "Create secret gist"（推荐 secret，更安全）
   - 点击 **"Create public gist"** 或 **"Create secret gist"**

3. **复制 Gist ID**
   - 创建后，你会看到一个 URL，例如：`https://gist.github.com/username/abc123def456`
   - **Gist ID** 就是 URL 中的最后一部分：`abc123def456`
   - 复制这个 ID，稍后会用到

### 2. 创建 GitHub Personal Access Token

1. **访问 GitHub 设置**
   - 打开浏览器，访问 [https://github.com/settings/tokens](https://github.com/settings/tokens)
   - 或者：GitHub 首页 → 右上角头像 → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **生成新 Token**
   - 点击 **"Generate new token"** → **"Generate new token (classic)"**
   - 输入 Token 名称（例如：`web_resume_blog`）
   - 设置过期时间（建议选择 "No expiration" 或较长的期限）

3. **设置权限**
   - 勾选 **`gist`** 权限（Full control of gists）
   - 这会自动勾选所有 gist 相关权限

4. **生成并复制 Token**
   - 滚动到页面底部，点击 **"Generate token"**
   - ⚠️ **重要**：Token 只会显示一次，请立即复制并保存
   - Token 格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 3. 在 Vercel 中配置环境变量

1. **登录 Vercel Dashboard**
   - 访问 [https://vercel.com/dashboard](https://vercel.com/dashboard)
   - 登录你的账号

2. **进入项目设置**
   - 选择你的项目（`web_resume`）
   - 点击 **"Settings"** 标签页
   - 在左侧菜单中点击 **"Environment Variables"**

3. **添加环境变量**
   
   添加第一个变量：
   - **变量名**：`GITHUB_TOKEN`
   - **值**：粘贴你刚才复制的 GitHub Personal Access Token
   - **环境**：勾选 Production、Preview、Development（全部勾选）
   - 点击 **"Save"**
   
   添加第二个变量：
   - **变量名**：`GITHUB_GIST_ID`
   - **值**：粘贴你的 Gist ID（例如：`abc123def456`）
   - **环境**：勾选 Production、Preview、Development（全部勾选）
   - 点击 **"Save"**

4. **重新部署**
   - 环境变量添加后，Vercel 会自动触发重新部署
   - 如果没有自动部署，可以手动点击 **"Deployments"** → 选择最新的部署 → **"Redeploy"**

### 4. 验证配置

1. **访问网站**
   - 部署完成后，访问你的网站
   - 打开浏览器开发者工具（按 F12 键）→ **Console** 标签页

2. **测试添加博客**
   - 在网站的博客部分，点击 **"+"** 按钮添加新博客
   - 填写标题、日期和内容
   - 点击 **"保存"**
   - 在 Console 中应该看到 "✅ 博客已同步到服务器" 的日志

3. **验证同步**
   - 在不同设备或浏览器中访问网站
   - 确认可以看到刚才添加的博客
   - 这证明数据已成功同步到服务器

## 功能特性

### 在线同步
- ✅ 所有用户提交的博客都会同步到 GitHub Gist
- ✅ 所有访问页面的用户都能看到最新的博客列表
- ✅ 支持添加、删除博客操作
- ✅ 数据持久化存储，不会丢失

### 降级方案
- ✅ 如果在线 API 不可用，自动使用 localStorage 作为备份
- ✅ 数据会先保存到本地，然后尝试同步到服务器
- ✅ 即使网络断开，用户仍可以正常使用（使用本地数据）

### 自动同步
- ✅ 页面加载时自动从服务器获取最新数据
- ✅ 每 5 分钟自动检查服务器是否有更新
- ✅ 如果有新博客，自动同步到本地并更新显示

## 故障排除

### 问题 1：博客无法同步到服务器

**可能原因**：
1. GitHub Token 或 Gist ID 未正确配置
2. GitHub Token 权限不足
3. Gist ID 不正确
4. 项目未重新部署

**解决方法**：
1. 检查 Vercel 环境变量是否正确设置
2. 确认 GitHub Token 有 `gist` 权限
3. 确认 Gist ID 正确（可以从 Gist URL 中获取）
4. 在 Vercel Dashboard 中重新部署项目

### 问题 2：可以看到本地博客，但看不到其他用户的博客

**可能原因**：
1. API 调用失败
2. 服务器配置错误

**解决方法**：
1. 打开浏览器开发者工具 → **Network** 标签页
2. 查看 `/api/blogs` 请求是否成功（状态码应该是 200）
3. 检查 Console 中的错误信息
4. 查看 Vercel Functions 日志（Vercel Dashboard → Functions → `/api/blogs` → Logs）

### 问题 3：API 返回 500 错误

**可能原因**：
1. 环境变量未配置
2. GitHub Token 无效或过期
3. Gist ID 不正确

**解决方法**：
1. 检查 Vercel 环境变量中是否有 `GITHUB_TOKEN` 和 `GITHUB_GIST_ID`
2. 重新生成 GitHub Token 并更新环境变量
3. 确认 Gist ID 正确
4. 重新部署项目

### 问题 4：GitHub API 返回 401/403 错误

**可能原因**：
1. Token 权限不足
2. Token 格式错误
3. Gist 不存在或无权限访问

**解决方法**：
1. 确认 Token 有 `gist` 权限
2. 确认使用 `Bearer` 格式（代码中已自动处理）
3. 确认 Gist 存在且你有访问权限
4. 如果是 Secret Gist，确认 Token 有权限访问

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

### DELETE `/api/blogs`
删除指定博客

**请求体**：
```json
{
  "blogId": 1234567890
}
```

## GitHub Gist 说明

### 什么是 GitHub Gist？
GitHub Gist 是 GitHub 提供的免费代码片段和文本存储服务，非常适合存储小型 JSON 数据。

### 优势
- ✅ **完全免费**：无需付费
- ✅ **版本控制**：自动保存历史版本
- ✅ **易于访问**：可以通过 API 或网页访问
- ✅ **可靠稳定**：GitHub 基础设施保障

### 限制
- 单个 Gist 文件大小限制为 1MB
- 对于博客存储，这个限制通常足够使用

### 查看和管理数据
- 你可以直接访问 Gist URL 查看和编辑 `blogs.json` 文件
- 所有修改都会保存历史版本
- 如果数据丢失，可以从历史版本恢复

## 注意事项

1. **Token 安全**：
   - GitHub Token 应该妥善保管，不要泄露
   - 如果 Token 泄露，立即在 GitHub 设置中撤销它
   - 建议使用 Secret Gist 而不是 Public Gist

2. **数据备份**：
   - 虽然 Gist 会自动保存历史版本，但建议定期备份重要数据
   - 可以通过访问 Gist URL 直接查看和下载数据

3. **性能考虑**：
   - GitHub API 有速率限制（每小时 5000 次请求）
   - 对于博客功能，这个限制通常足够使用
   - 如果超过限制，会返回 403 错误，需要等待一段时间

4. **Gist 类型选择**：
   - **Public Gist**：任何人都可以查看
   - **Secret Gist**：只有有链接的人可以查看（推荐）
   - 对于博客数据，建议使用 Secret Gist

## 技术支持

如果遇到问题，请检查：
1. Vercel 部署日志（Dashboard → Deployments → 选择部署 → Logs）
2. Vercel Functions 日志（Dashboard → Functions → `/api/blogs` → Logs）
3. 浏览器 Console 错误信息（F12 → Console）
4. Network 请求状态（F12 → Network → 查看 `/api/blogs` 请求）
5. GitHub Gist 和 Token 配置

## 快速检查清单

- [ ] 已创建 GitHub Gist，包含 `blogs.json` 文件
- [ ] 已复制 Gist ID
- [ ] 已创建 GitHub Personal Access Token，有 `gist` 权限
- [ ] 已在 Vercel 中设置 `GITHUB_TOKEN` 环境变量
- [ ] 已在 Vercel 中设置 `GITHUB_GIST_ID` 环境变量
- [ ] 已重新部署项目
- [ ] 已测试添加博客功能
- [ ] 已验证博客可以同步

完成以上所有步骤后，博客在线同步功能应该可以正常工作了！
