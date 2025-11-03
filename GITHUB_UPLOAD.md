# 上传到 GitHub 的步骤

## 第一步：配置 Git 用户信息（如果还没配置）

在终端执行以下命令，替换为你的真实信息：

```bash
git config --global user.name "你的名字"
git config --global user.email "你的邮箱@example.com"
```

例如：
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 第二步：完成本地提交

执行以下命令：

```bash
cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
git commit -m "Initial commit - Personal Portfolio"
```

## 第三步：在 GitHub 上创建新仓库

1. 打开浏览器，访问 [https://github.com](https://github.com)
2. 登录你的 GitHub 账号
3. 点击右上角的 "+" 号，选择 "New repository"
4. 填写仓库信息：
   - Repository name: `personal-portfolio`（或你喜欢的名字）
   - Description: "个人主页 - 简约风格"
   - 选择 **Public** 或 **Private**
   - **不要**勾选 "Initialize this repository with a README"（因为我们已经有了文件）
5. 点击 "Create repository"

## 第四步：连接本地仓库并推送

在终端执行以下命令（将 `yourusername` 替换为你的 GitHub 用户名，`repository-name` 替换为你创建的仓库名）：

```bash
cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
git branch -M main
git remote add origin https://github.com/yourusername/repository-name.git
git push -u origin main
```

例如，如果你的用户名是 `john`，仓库名是 `personal-portfolio`：
```bash
git remote add origin https://github.com/john/personal-portfolio.git
git push -u origin main
```

## 第五步：输入 GitHub 凭据

- 如果使用 HTTPS，系统会要求输入 GitHub 用户名和密码（或个人访问令牌）
- 如果使用 SSH，需要先配置 SSH 密钥

### 使用个人访问令牌（推荐）

如果使用 HTTPS 且启用了双因素认证，需要：
1. 访问 GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token"
3. 选择权限（至少需要 `repo` 权限）
4. 复制生成的令牌
5. 推送时，用户名输入你的 GitHub 用户名，密码输入令牌

## 完成！

推送成功后，访问你的 GitHub 仓库页面：
`https://github.com/yourusername/repository-name`

你就可以看到你的项目了！

## 后续更新

以后要更新代码，执行：

```bash
git add .
git commit -m "更新描述"
git push
```


