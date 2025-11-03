# 个人主页 - 简约风格

一个现代化的、响应式的个人主页，采用欧美简约风格设计。

## 功能特点

- ✨ 简约优雅的欧美风格设计
- 📱 完全响应式，支持各种设备
- 🎨 流畅的动画效果和交互
- ⚡ 快速加载，轻量级
- 🔍 SEO友好
- 🌐 易于部署和维护

## 项目结构

```
.
├── index.html          # 主HTML文件
├── styles.css          # 样式文件
├── script.js           # JavaScript交互文件
├── package.json        # 项目配置
├── vercel.json         # Vercel部署配置
└── README.md          # 项目说明文档
```

## 本地预览

1. 克隆或下载项目到本地
2. 打开 `index.html` 文件在浏览器中查看

或者使用本地服务器：

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js serve
npx serve .

# 使用npm脚本
npm start
```

然后在浏览器中访问 `http://localhost:8000`

## 自定义内容

### 修改个人信息

1. **个人简介**：编辑 `index.html` 中的 hero 部分
   - 修改 `<span class="name">你的名字</span>`
   - 修改 `<p class="hero-subtitle">` 中的标题
   - 修改 `<p class="hero-description">` 中的描述

2. **关于我部分**：在 `index.html` 的 `#about` 部分修改文本内容

3. **技能**：调整 `#about` 部分的技能条和百分比

4. **项目**：修改 `#projects` 部分的项目卡片内容

5. **联系方式**：更新 `#contact` 部分的邮箱、GitHub、LinkedIn链接

### 修改样式

编辑 `styles.css` 文件来自定义：
- 颜色主题（修改 `:root` 变量）
- 字体大小和间距
- 动画效果

### 修改头像

将你的头像图片放在项目根目录，命名为 `avatar.jpg` 或 `avatar.png`，然后在 `index.html` 中找到：

```html
<div class="avatar-placeholder">
```

替换为：

```html
<img src="avatar.jpg" alt="头像" class="avatar">
```

并在 `styles.css` 中添加：

```css
.avatar {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}
```

## 部署指南

### 方式一：GitHub Pages（免费）

1. **创建GitHub仓库**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **启用GitHub Pages**
   - 进入仓库的 Settings
   - 找到 Pages 选项
   - 在 Source 中选择 `main` 分支和 `/ (root)` 目录
   - 点击 Save
   - 几分钟后，你的网站将在 `https://yourusername.github.io/your-repo-name` 上线

### 方式二：Vercel（推荐，免费且快速）

1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **部署**
   ```bash
   vercel
   ```
   按照提示完成部署，你的网站会得到一个 `vercel.app` 域名

3. **通过网页部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 导入你的GitHub仓库
   - 点击 Deploy

### 方式三：Netlify（免费）

1. **通过网页部署**
   - 访问 [netlify.com](https://netlify.com)
   - 使用GitHub账号登录
   - 点击 "Add new site" > "Import an existing project"
   - 选择你的GitHub仓库
   - 点击 Deploy

2. **通过CLI部署**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   netlify deploy --prod  # 生产环境部署
   ```

### 方式四：其他平台

项目是纯静态HTML/CSS/JS，可以部署到任何静态网站托管服务：
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- 自己的服务器

## 浏览器支持

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）
- 移动端浏览器

## 技术栈

- HTML5
- CSS3（Flexbox, Grid, Animations）
- Vanilla JavaScript（ES6+）
- Google Fonts (Inter)

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

## 更新日志

### v1.0.0
- 初始版本
- 简约风格设计
- 响应式布局
- 流畅动画效果


