#!/bin/bash

# TrendRadar MCP 服务器启动脚本
# 此脚本会同时启动 MCP 服务器和 CORS 代理服务器

echo "╔════════════════════════════════════════════════════════╗"
echo "║     TrendRadar MCP 服务器启动脚本                      ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# 检查 uv 是否安装
if ! command -v uv &> /dev/null; then
    echo "❌ [错误] 未找到 uv 命令"
    echo "请先安装 uv："
    echo "  curl -LsSf https://astral.sh/uv/install.sh | sh"
    echo "  export PATH=\"\$HOME/.local/bin:\$PATH\""
    exit 1
fi

# 检查 TrendRadar 项目目录
TRENDRADAR_DIR="/Users/lorentang/Desktop/tcpls/TrendRadar"
if [ ! -d "$TRENDRADAR_DIR" ]; then
    echo "❌ [错误] TrendRadar 项目目录不存在: $TRENDRADAR_DIR"
    exit 1
fi

# 检查代理服务器脚本
PROXY_SCRIPT="$(dirname "$0")/mcp_proxy.py"
if [ ! -f "$PROXY_SCRIPT" ]; then
    echo "❌ [错误] 代理服务器脚本不存在: $PROXY_SCRIPT"
    exit 1
fi

# 检查端口是否被占用
check_port() {
    if lsof -i :$1 &> /dev/null; then
        echo "⚠️  警告: 端口 $1 已被占用"
        read -p "是否继续？(y/n) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
}

check_port 3333
check_port 3334

echo "🚀 启动 MCP 服务器（端口 3333）..."
cd "$TRENDRADAR_DIR"
export PATH="$HOME/.local/bin:$PATH"
uv run python -m mcp_server.server --transport http --port 3333 > /tmp/mcp_server.log 2>&1 &
MCP_PID=$!
echo "   MCP 服务器 PID: $MCP_PID"
echo "   日志文件: /tmp/mcp_server.log"

# 等待 MCP 服务器启动
sleep 3

echo ""
echo "🚀 启动 CORS 代理服务器（端口 3334）..."
cd "$(dirname "$0")"
python3 "$PROXY_SCRIPT" > /tmp/mcp_proxy.log 2>&1 &
PROXY_PID=$!
echo "   代理服务器 PID: $PROXY_PID"
echo "   日志文件: /tmp/mcp_proxy.log"

# 等待代理服务器启动
sleep 2

echo ""
echo "✅ 服务器启动完成！"
echo ""
echo "📋 服务信息："
echo "   - MCP 服务器: http://localhost:3333/mcp"
echo "   - 代理服务器: http://localhost:3334/mcp"
echo "   - MCP 服务器 PID: $MCP_PID"
echo "   - 代理服务器 PID: $PROXY_PID"
echo ""
echo "📝 查看日志："
echo "   - MCP 服务器: tail -f /tmp/mcp_server.log"
echo "   - 代理服务器: tail -f /tmp/mcp_proxy.log"
echo ""
echo "🛑 停止服务器："
echo "   kill $MCP_PID $PROXY_PID"
echo ""
echo "🌐 现在可以访问: http://localhost:8000/chatbot.html"

