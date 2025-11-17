#!/usr/bin/env python3
"""
MCP 代理服务器 - 解决 CORS 问题
将 MCP 服务器的响应头暴露给浏览器客户端
"""
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse
import json
import requests

class MCPProxyHandler(BaseHTTPRequestHandler):
    MCP_SERVER_URL = 'http://localhost:3333/mcp'
    
    def do_OPTIONS(self):
        """处理 CORS 预检请求"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Accept, mcp-session-id')
        self.send_header('Access-Control-Expose-Headers', 'mcp-session-id, Content-Type')
        self.end_headers()
    
    def do_POST(self):
        """代理 POST 请求到 MCP 服务器"""
        try:
            # 读取请求体
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            
            # 获取 session ID（如果有）
            session_id = self.headers.get('mcp-session-id')
            
            # 准备请求头
            headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json, text/event-stream',
            }
            if session_id:
                headers['mcp-session-id'] = session_id
            
            # 转发请求到 MCP 服务器
            response = requests.post(
                self.MCP_SERVER_URL,
                headers=headers,
                data=body,
                stream=True
            )
            
            # 设置 CORS 响应头
            self.send_response(response.status_code)
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type, Accept, mcp-session-id')
            self.send_header('Access-Control-Expose-Headers', 'mcp-session-id, Content-Type')
            
            # 转发响应头（特别是 mcp-session-id）
            for key, value in response.headers.items():
                if key.lower() in ['mcp-session-id', 'content-type', 'content-length']:
                    self.send_header(key, value)
            
            self.end_headers()
            
            # 转发响应体
            for chunk in response.iter_content(chunk_size=8192):
                if chunk:
                    self.wfile.write(chunk)
                    
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            error_response = json.dumps({
                'error': {
                    'code': -32603,
                    'message': f'代理服务器错误: {str(e)}'
                }
            })
            self.wfile.write(error_response.encode())
    
    def log_message(self, format, *args):
        """禁用默认日志输出"""
        pass

def run_proxy(port=3334):
    server = HTTPServer(('localhost', port), MCPProxyHandler)
    print(f'🚀 MCP 代理服务器已启动: http://localhost:{port}/mcp')
    print(f'   转发到: http://localhost:3333/mcp')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n🛑 代理服务器已停止')
        server.shutdown()

if __name__ == '__main__':
    run_proxy()

