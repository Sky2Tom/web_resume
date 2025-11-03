#!/bin/bash
# 推送脚本 - 使用个人访问令牌推送代码

echo "正在推送代码到 GitHub..."
echo ""
echo "如果你还没有个人访问令牌，请访问："
echo "https://github.com/settings/tokens"
echo "生成一个令牌（需要 repo 权限）"
echo ""
read -p "请输入你的 GitHub 个人访问令牌: " TOKEN

if [ -z "$TOKEN" ]; then
    echo "错误: 未输入令牌"
    exit 1
fi

# 使用令牌推送
git push https://${TOKEN}@github.com/Sky2Tom/web_resume.git main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo "访问你的仓库: https://github.com/Sky2Tom/web_resume"
else
    echo ""
    echo "❌ 推送失败，请检查令牌是否正确"
fi


