# TrendRadar MCP 客户端配置指南

根据 [TrendRadar 项目](https://github.com/Sky2Tom/TrendRadar) 的官方文档，以下是完整的配置步骤。

## 📋 前置要求

1. **已安装 `uv`**（Python 包管理器）
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   export PATH="$HOME/.local/bin:$PATH"
   ```

2. **已克隆 TrendRadar 项目**
   ```bash
   cd /Users/lorentang/Desktop/tcpls/TrendRadar
   ```

3. **已运行过爬虫**（确保有 `output` 目录和数据文件）

## 🚀 配置步骤

### 第一步：启动 TrendRadar MCP 服务器

在 TrendRadar 项目目录下运行：

```bash
cd /Users/lorentang/Desktop/tcpls/TrendRadar
export PATH="$HOME/.local/bin:$PATH"
uv run python -m mcp_server.server --transport http --port 3333
```

**验证服务器是否启动成功：**
- 看到类似以下输出表示成功：
  ```
  🖥️  Server name:     trendradar-news
  📦 Transport:       Streamable-HTTP
  🔗 Server URL:      http://0.0.0.0:3333/mcp
  ```

### 第二步：启动 CORS 代理服务器

由于浏览器 CORS 限制，需要启动代理服务器：

```bash
cd /Users/lorentang/Desktop/tcpls/web_resume
python3 mcp_proxy.py
```

**验证代理服务器是否启动成功：**
- 看到以下输出表示成功：
  ```
  🚀 MCP 代理服务器已启动: http://localhost:3334/mcp
     转发到: http://localhost:3333/mcp
  ```

### 第三步：测试连接

打开浏览器访问：
```
http://localhost:8000/chatbot.html
```

在浏览器控制台（F12）中应该看到：
- ✅ MCP 会话已建立
- ✅ MCP 已连接！可用工具: X 个

## 🔧 故障排查

### 问题 1：MCP 服务器无法启动

**检查：**
```bash
# 检查端口是否被占用
lsof -i :3333

# 如果被占用，可以更换端口
uv run python -m mcp_server.server --transport http --port 33333
```

**解决方案：**
- 确保已运行 `setup-mac.sh` 安装依赖
- 确保项目路径正确且无中文字符
- 查看详细错误日志

### 问题 2：代理服务器无法启动

**检查：**
```bash
# 检查端口是否被占用
lsof -i :3334

# 检查 Python 版本
python3 --version
```

**解决方案：**
- 确保已安装 `requests` 库：`pip3 install requests`
- 如果端口被占用，修改 `mcp_proxy.py` 中的端口号

### 问题 3：浏览器无法连接

**检查：**
1. 打开浏览器控制台（F12）
2. 查看 Network 标签页，检查请求是否发送
3. 查看 Console 标签页，查看错误信息

**常见错误：**
- `Failed to fetch`：检查 MCP 服务器和代理服务器是否都在运行
- `无法获取会话 ID`：检查代理服务器是否正确暴露响应头
- `CORS 错误`：确保代理服务器正在运行

## 📝 使用示例

配置成功后，可以在 AI 客服页面中尝试以下问题：

1. **查询最新新闻**
   - "给我看看最新的新闻"
   - "查询今天的热点新闻"

2. **搜索特定关键词**
   - "搜索包含'人工智能'的新闻"
   - "查找关于'特斯拉'的新闻"

3. **分析趋势**
   - "分析'人工智能'最近一周的热度趋势"
   - "看看'比特币'话题是昙花一现还是持续热点"

## ⚙️ 高级配置

### 修改 MCP 服务器端口

如果 3333 端口被占用，可以修改：

1. **修改 MCP 服务器启动命令：**
   ```bash
   uv run python -m mcp_server.server --transport http --port 33333
   ```

2. **修改代理服务器配置：**
   编辑 `mcp_proxy.py`，修改 `MCP_SERVER_URL`：
   ```python
   MCP_SERVER_URL = 'http://localhost:33333/mcp'
   ```

3. **修改客户端配置：**
   编辑 `chatbot.html`，确保 `MCP_SERVER_URL` 指向代理服务器（端口 3334）

### 修改代理服务器端口

如果 3334 端口被占用：

1. **修改代理服务器：**
   编辑 `mcp_proxy.py`，修改 `run_proxy(port=3334)` 为其他端口

2. **修改客户端配置：**
   编辑 `chatbot.html`，修改 `MCP_SERVER_URL` 为新的代理端口

## 📚 参考文档

- [TrendRadar 项目主页](https://github.com/Sky2Tom/TrendRadar)
- [MCP 工具使用问答](https://github.com/Sky2Tom/TrendRadar/blob/master/README-MCP-FAQ.md)
- [Cherry Studio 部署指南](https://github.com/Sky2Tom/TrendRadar/blob/master/README-Cherry-Studio.md)

