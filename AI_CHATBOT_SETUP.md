# AI 客服助手配置指南

根据 TrendRadar 项目的推荐，本 AI 客服助手使用**硅基流动**作为 AI 模型服务。

## 📋 前置要求

1. **TrendRadar MCP 服务器**（可选，用于新闻查询功能）
   - 已启动 MCP 服务器：`uv run python -m mcp_server.server --transport http --port 3333`
   - 已启动代理服务器：`python3 mcp_proxy.py`

2. **硅基流动 API Key**（必需）

## 🚀 配置步骤

### 第一步：获取硅基流动 API Key

1. **注册账号**（推荐使用邀请链接获得免费额度）：
   - 访问：https://cloud.siliconflow.cn/i/fqnyVaIU
   - 使用邀请链接注册可获得 **2000万 tokens** 免费额度（约可询问 200+ 次）

2. **获取 API Key**：
   - 访问：https://cloud.siliconflow.cn/me/account/ak
   - 点击「新建 API 密钥」
   - 复制生成的密钥（请妥善保管）

### 第二步：配置 API Key

打开 `chatbot.html` 文件，找到以下代码：

```javascript
const AI_API_KEY = ''; // 请在此处填入您的硅基流动 API Key
```

将您的 API Key 填入引号中：

```javascript
const AI_API_KEY = 'sk-xxxxxxxxxxxxxxxxxxxxx'; // 您的 API Key
```

### 第三步：测试功能

1. **启动服务器**（如果尚未启动）：
   ```bash
   # 启动 HTTP 服务器
   python3 -m http.server 8000
   ```

2. **打开浏览器**：
   - 访问：http://localhost:8000/chatbot.html

3. **测试对话**：
   - 输入："你好" - 测试基础对话功能
   - 输入："给我看看最新的新闻" - 测试 MCP 工具集成（需要 MCP 服务器运行）

## ✅ 功能说明

### 基础对话功能
- 回答关于汤骁宇的个人信息
- 一般性对话和问答

### 新闻查询功能（需要 MCP 服务器）
- 查询最新新闻
- 按日期查询历史新闻
- 搜索特定关键词的新闻
- 分析话题热度趋势

## 🔧 故障排查

### 问题 1：提示 "AI API 未配置"
**解决方案**：检查 `chatbot.html` 中的 `AI_API_KEY` 是否已正确填写

### 问题 2：API 调用失败
**可能原因**：
- API Key 错误或已过期
- 网络连接问题
- API 额度已用完

**解决方案**：
1. 检查 API Key 是否正确
2. 访问 https://cloud.siliconflow.cn/me/bills 查看额度使用情况
3. 检查网络连接

### 问题 3：MCP 工具无法使用
**解决方案**：
1. 确保 MCP 服务器已启动
2. 确保代理服务器已启动
3. 查看浏览器控制台的错误信息

## 📚 参考文档

- [TrendRadar 项目主页](https://github.com/Sky2Tom/TrendRadar)
- [硅基流动官网](https://cloud.siliconflow.cn)
- [MCP 工具使用问答](https://github.com/Sky2Tom/TrendRadar/blob/master/README-MCP-FAQ.md)

