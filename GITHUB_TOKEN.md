# GitHub 个人访问令牌设置指南

## 步骤 1：生成个人访问令牌

1. **打开浏览器，访问 GitHub**
   - 登录 https://github.com
   
2. **进入设置页面**
   - 点击右上角头像
   - 选择 "Settings"
   
3. **进入开发者设置**
   - 在左侧菜单最下方，点击 "Developer settings"
   
4. **创建令牌**
   - 点击 "Personal access tokens" → "Tokens (classic)"
   - 或者直接访问：https://github.com/settings/tokens
   - 点击 "Generate new token" → "Generate new token (classic)"
   
5. **配置令牌**
   - Note（备注）: 填写 "web_resume" 或任何描述性名称
   - Expiration（有效期）: 选择 "No expiration"（不过期）或设置一个较长的期限
   - **勾选以下权限：**
     - ✅ `repo` （Full control of private repositories）
       - 这会自动勾选所有 repo 相关权限
   - 点击页面底部的 "Generate token"
   
6. **复制令牌**
   - ⚠️ **重要：令牌只会显示一次！**
   - 立即复制生成的令牌，保存在安全的地方
   - 格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## 步骤 2：使用令牌推送代码

在终端中执行推送命令时：
- 用户名：输入你的 GitHub 用户名（Sky2Tom）
- 密码：**粘贴刚才复制的令牌**（而不是你的 GitHub 密码）

或者直接使用以下命令（替换 YOUR_TOKEN 为你的令牌）：

```bash
git push https://YOUR_TOKEN@github.com/Sky2Tom/web_resume.git main
```

## 步骤 3：避免每次输入令牌（可选）

### 方法 A：使用 Git Credential Manager（推荐）

macOS 系统通常会保存凭据到钥匙串中。下次推送时，系统可能会记住你的凭据。

### 方法 B：在 URL 中嵌入令牌（不推荐，但可用）

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/Sky2Tom/web_resume.git
```

⚠️ **注意：** 这会将令牌存储在 .git/config 中，不太安全。

### 方法 C：使用 SSH（最安全）

配置 SSH 密钥后，可以改用 SSH URL：

```bash
git remote set-url origin git@github.com:Sky2Tom/web_resume.git
```

## 现在立即推送

1. 复制你的个人访问令牌
2. 执行推送命令：
   ```bash
   git push -u origin main
   ```
3. 输入用户名：`Sky2Tom`
4. 输入密码：**粘贴你的个人访问令牌**


