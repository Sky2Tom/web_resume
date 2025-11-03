# 快速上传到 GitHub

## 方法 1：使用脚本（最简单）

已创建一个自动推送脚本，执行以下命令：

```bash
cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
./push.sh
```

然后输入你的 GitHub 个人访问令牌即可。

## 方法 2：直接命令（如果你已有令牌）

如果你已经生成了个人访问令牌，直接执行：

```bash
cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
git push https://YOUR_TOKEN@github.com/Sky2Tom/web_resume.git main
```

将 `YOUR_TOKEN` 替换为你的个人访问令牌。

## 方法 3：生成令牌并推送（推荐）

### 步骤 1：生成个人访问令牌

1. 访问：https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. Note：填写 "web_resume"
4. 勾选：`repo`（Full control of private repositories）
5. 点击 "Generate token"
6. **立即复制令牌**（格式类似：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`）

### 步骤 2：推送代码

执行以下命令（将 YOUR_TOKEN 替换为你的令牌）：

```bash
cd /Users/lorentang/Desktop/tcaplusdb/cursor_project
git push https://YOUR_TOKEN@github.com/Sky2Tom/web_resume.git main
```

例如：
```bash
git push https://ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx@github.com/Sky2Tom/web_resume.git main
```

### 完成后

访问你的仓库：https://github.com/Sky2Tom/web_resume

---

**⚠️ 注意：** 
- 不要在公开场所分享你的令牌
- 令牌具有你账户的权限，请妥善保管
- 如果令牌泄露，立即在 GitHub 设置中撤销它


