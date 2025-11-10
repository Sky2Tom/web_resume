// 链接功能
document.addEventListener('DOMContentLoaded', function() {
    const addLinkBtn = document.getElementById('addLinkBtn');
    const linkUploadForm = document.getElementById('linkUploadForm');
    const linkList = document.getElementById('linkList');
    const saveLinkBtn = document.getElementById('saveLinkBtn');
    const cancelLinkBtn = document.getElementById('cancelLinkBtn');
    const linkTitleInput = document.getElementById('linkTitle');
    const linkUrlInput = document.getElementById('linkUrl');
    
    // 从localStorage加载链接
    function loadLinks() {
        const links = JSON.parse(localStorage.getItem('links') || '[]');
        displayLinks(links);
    }
    
    // 显示链接列表
    function displayLinks(links) {
        linkList.innerHTML = '';
        
        if (links.length === 0) {
            linkList.innerHTML = '<p class="blog-empty">还没有链接，点击 + 号添加第一个链接吧！</p>';
            return;
        }
        
        // 按添加时间排序（最新的在前）
        links.sort((a, b) => (b.id || 0) - (a.id || 0));
        
        links.forEach((link, index) => {
            const linkCard = document.createElement('div');
            linkCard.className = 'blog-card';
            linkCard.innerHTML = `
                <div class="blog-card-header">
                    <div>
                        <h3 class="blog-card-title">${escapeHtml(link.title)}</h3>
                        <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="blog-card-url">
                            ${escapeHtml(link.url)}
                        </a>
                    </div>
                    <button class="blog-delete-btn" data-link-id="${link.id || Date.now() + index}" title="删除链接">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            `;
            linkList.appendChild(linkCard);
        });
        
        // 为删除按钮添加事件监听
        document.querySelectorAll('.blog-delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const linkId = this.getAttribute('data-link-id');
                deleteLink(linkId);
            });
        });
    }
    
    // 保存链接
    function saveLink() {
        const title = linkTitleInput.value.trim();
        const url = linkUrlInput.value.trim();
        
        if (!title || !url) {
            alert('请填写标题和URL！');
            return;
        }
        
        // 验证URL格式
        try {
            new URL(url);
        } catch (e) {
            // 如果不是完整URL，尝试添加https://
            const urlWithProtocol = url.startsWith('http://') || url.startsWith('https://') 
                ? url 
                : 'https://' + url;
            try {
                new URL(urlWithProtocol);
                linkUrlInput.value = urlWithProtocol;
            } catch (e2) {
                alert('请输入有效的URL！');
                return;
            }
        }
        
        const links = JSON.parse(localStorage.getItem('links') || '[]');
        links.push({
            id: Date.now(),
            title: title,
            url: linkUrlInput.value.trim()
        });
        
        localStorage.setItem('links', JSON.stringify(links));
        
        // 清空表单
        linkTitleInput.value = '';
        linkUrlInput.value = '';
        
        // 隐藏表单
        linkUploadForm.style.display = 'none';
        
        // 重新加载链接列表
        loadLinks();
    }
    
    // 删除链接
    function deleteLink(linkId) {
        if (confirm('确定要删除这个链接吗？')) {
            const links = JSON.parse(localStorage.getItem('links') || '[]');
            const filteredLinks = links.filter(link => String(link.id) !== String(linkId));
            localStorage.setItem('links', JSON.stringify(filteredLinks));
            loadLinks();
        }
    }
    
    // 事件监听
    addLinkBtn.addEventListener('click', function() {
        linkUploadForm.style.display = linkUploadForm.style.display === 'none' ? 'block' : 'none';
    });
    
    saveLinkBtn.addEventListener('click', saveLink);
    
    cancelLinkBtn.addEventListener('click', function() {
        linkUploadForm.style.display = 'none';
        linkTitleInput.value = '';
        linkUrlInput.value = '';
    });
    
    // 工具函数
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // 初始化：加载链接
    loadLinks();
});

