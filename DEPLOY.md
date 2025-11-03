# Vercel 部署指南

## 方法一：通过 Vercel 网页部署（推荐，最简单）

### 步骤：

1. **访问 Vercel 官网**
   - 打开浏览器，访问 [https://vercel.com](https://vercel.com)
   - 点击右上角的 "Sign Up" 或 "Log In"
   - 可以使用 GitHub、GitLab 或 Bitbucket 账号登录（推荐使用 GitHub）

2. **创建新项目**
   - 登录后，点击 "Add New..." → "Project"
   - 如果你已经连接了 GitHub 账号，可以直接导入仓库
   - 如果没有连接，可以先部署本地文件夹

3. **从 GitHub 部署**
   - 在项目列表中找到你的仓库
   - 点击 "Import"
   - Vercel 会自动检测配置
   - 点击 "Deploy" 按钮

4. **从本地文件夹部署（拖拽）**
   - 在 Vercel 控制台，点击 "Add New..." → "Project"
   - 选择 "Deploy" → 拖拽整个项目文件夹到页面上
   - 等待部署完成

5. **完成**
   - 部署完成后，你会得到一个 `your-project.vercel.app` 的域名
   - 点击 "Visit" 按钮查看你的网站

---

## 方法二：通过 Vercel CLI 部署（命令行）

### 前提条件：
- 需要先安装 Node.js（如果没有安装）
- 需要注册 Vercel 账号

### 步骤：

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```
   
   如果系统没有 npm，可以先安装 Node.js：
   - 访问 [https://nodejs.org](https://nodejs.org) 下载安装
   - 或使用 Homebrew: `brew install node`

2. **在项目目录中执行部署**
   ```bash
   cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
   vercel
   ```

3. **按照提示操作**
   - 第一次部署会要求登录，在浏览器中完成认证
   - 按照提示回答问题：
     - Set up and deploy? **Yes**
     - Which scope? 选择你的账号
     - Link to existing project? **No**（首次部署）
     - Project name? 输入项目名称（或直接回车使用默认）
     - Directory? **./**（直接回车）

4. **部署完成**
   - 等待部署完成
   - 你会得到项目的 URL

5. **后续更新**
   ```bash
   vercel --prod
   ```

---

## 方法三：通过 GitHub 集成部署（推荐，自动化）

### 步骤：

1. **初始化 Git 仓库**（如果还没有）
   ```bash
   cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **创建 GitHub 仓库**
   - 访问 [https://github.com/new](https://github.com/new)
   - 创建新仓库（不要初始化 README）
   - 复制仓库 URL

3. **推送到 GitHub**
   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   git branch -M main
   git push -u origin main
   ```

4. **在 Vercel 中导入**
   - 登录 Vercel
   - 点击 "Add New..." → "Project"
   - 在 "Import Git Repository" 中选择你的 GitHub 仓库
   - 点击 "Import"

5. **配置项目**
   - Framework Preset: **Other**
   - Root Directory: **./**
   - Build Command: 留空（静态站点不需要构建）
   - Output Directory: 留空
   - Install Command: 留空

6. **部署**
   - 点击 "Deploy"
   - 等待部署完成

7. **自动部署**
   - 之后每次你推送到 GitHub，Vercel 会自动重新部署

---

## 自定义域名（可选）

1. 在 Vercel 项目设置中，点击 "Domains"
2. 添加你的自定义域名
3. 按照提示配置 DNS 记录

---

## 常见问题

### Q: 部署后页面显示空白？
A: 检查 `index.html` 是否在项目根目录，确保路径正确。

### Q: CSS 样式没有加载？
A: 确保 `styles.css` 和 `script.js` 的路径在 HTML 中正确。

### Q: 如何更新网站？
- **方法一**：如果是通过 GitHub 连接的，直接推送代码，会自动部署
- **方法二**：使用 CLI，运行 `vercel --prod`
- **方法三**：在 Vercel 控制台点击 "Redeploy"

### Q: 如何查看部署日志？
在 Vercel 控制台的 "Deployments" 页面点击对应的部署记录。

---

## 快速部署命令总结

```bash
# 首次部署
vercel

# 生产环境部署
vercel --prod

# 查看部署信息
vercel ls

# 查看项目详情
vercel inspect
```


