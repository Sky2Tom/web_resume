# Vercel 快速部署指南

## 🚀 最快的方法：网页部署（3步完成）

### 步骤 1：访问 Vercel
打开浏览器，访问：**https://vercel.com**

### 步骤 2：登录账号
- 点击右上角 "Sign Up" 或 "Log In"
- **推荐使用 GitHub 账号登录**（如果代码在 GitHub 上更方便）

### 步骤 3：部署项目

#### 选项 A：如果代码在 GitHub 上（推荐）
1. 登录后，点击 **"Add New..."** → **"Project"**
2. 在 "Import Git Repository" 中找到你的仓库（如：`Sky2Tom/web_resume`）
3. 点击 **"Import"**
4. 配置（通常会自动检测）：
   - Framework Preset: **Other**
   - Root Directory: **./**
   - Build Command: **留空**（静态站点不需要构建）
   - Output Directory: **留空**
5. 点击 **"Deploy"**
6. 等待 1-2 分钟，部署完成！
7. 你会得到一个链接：`https://your-project.vercel.app`

#### 选项 B：从本地文件夹部署（如果代码还没上传到 GitHub）
1. 登录后，点击 **"Add New..."** → **"Project"**
2. 点击 **"Browse"** 或直接**拖拽项目文件夹**到页面上
3. 项目名称会自动填充（可以修改）
4. 点击 **"Deploy"**
5. 等待部署完成！

---

## 🎯 推荐流程（自动化部署）

如果你想实现自动部署（每次推送代码到 GitHub，Vercel 自动更新）：

1. **确保代码在 GitHub 上**
   - 仓库地址：`https://github.com/Sky2Tom/web_resume`

2. **在 Vercel 中导入 GitHub 仓库**
   - 登录 Vercel
   - Add New → Project
   - 选择你的 GitHub 仓库
   - 配置并部署

3. **以后每次更新**
   - 只需 `git push` 到 GitHub
   - Vercel 会自动重新部署！

---

## ✅ 部署检查清单

部署前确保：
- ✅ `index.html` 在项目根目录
- ✅ `styles.css` 和 `script.js` 路径正确
- ✅ `vercel.json` 配置文件存在（已有）
- ✅ 所有文件已提交到 Git

---

## 🔗 部署完成后

- **生产环境 URL**: `https://your-project.vercel.app`
- **预览部署**: 每次推送都会有预览链接
- **自定义域名**: 可在项目 Settings → Domains 中添加

---

## ❓ 常见问题

**Q: 部署后页面空白？**
A: 确保 `index.html` 在根目录，路径正确。

**Q: CSS 样式没加载？**
A: 检查 HTML 中的 CSS 文件路径是否正确（相对路径）。

**Q: 如何更新网站？**
A: 如果连接了 GitHub，推送代码即可自动部署。或手动在 Vercel 控制台点击 "Redeploy"。

---

## 📝 项目已准备就绪！

你的项目已配置好：
- ✅ `vercel.json` - Vercel 配置
- ✅ 所有必要的文件
- ✅ 可以直接部署

**现在就去部署吧！** → https://vercel.com

