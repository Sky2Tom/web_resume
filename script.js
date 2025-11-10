// ============================================
// Navigation & Smooth Scroll
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('.section, .hero');
    const navItems = document.querySelectorAll('.nav-link');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.pageYOffset + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = sectionId;
            }
        });
        
        // 更新顶部导航
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
        
        // 更新左侧导航
        sidebarLinks.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-section') === current) {
                item.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();


    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinksContainer.classList.toggle('mobile-open');
            menuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinksContainer) {
            navLinksContainer.classList.remove('mobile-open');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const animatedElements = document.querySelectorAll('.section, .project-card, .honor-item, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Image hover effects
    const images = document.querySelectorAll('.profile-image, .conference-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.5s ease';
        });
    });

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Skill categories animation on scroll
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(20px)';
        category.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        skillObserver.observe(category);
    });

    // Contact form interactions (if any)
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.tagName === 'A') {
                // Add ripple effect
                const ripple = document.createElement('span');
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(0, 0, 0, 0.1)';
                ripple.style.width = '10px';
                ripple.style.height = '10px';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.left = e.offsetX + 'px';
                ripple.style.top = e.offsetY + 'px';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
            setTimeout(() => {
                    ripple.remove();
                }, 600);
            }
        });
    });

    // Add CSS animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links.mobile-open {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background-color: white;
                border-bottom: 1px solid #e5e5e5;
                padding: 1rem 0;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            
            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }
            
            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -6px);
            }
        }
    `;
    document.head.appendChild(style);

    // Scroll to top functionality (optional)
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: #000;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
        } else {
            scrollToTopBtn.style.opacity = '0';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true });

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ============================================
    // 浏览次数和点赞功能
    // ============================================
    // 浏览次数统计
    function updateViewCount() {
        // 检查localStorage中是否已有数据
        const storedViewCount = localStorage.getItem('viewCount');
        let viewCount;
        
        // 检查是否已经初始化过（使用新的key来标记）
        const isInitialized = localStorage.getItem('viewCountInitialized');
        
        if (!isInitialized || storedViewCount === null || storedViewCount === undefined) {
            // 首次访问或未初始化，设置为初始值6689
            viewCount = 6689;
            localStorage.setItem('viewCount', '6689');
            localStorage.setItem('viewCountInitialized', 'true');
        } else {
            // 如果已有数据，检查是否小于初始值6689
            viewCount = parseInt(storedViewCount);
            
            // 如果当前值小于6689，重置为6689（修复旧数据）
            if (viewCount < 6689) {
                viewCount = 6689;
                localStorage.setItem('viewCount', '6689');
            }
            
            // 每次访问增加1
            viewCount++;
            localStorage.setItem('viewCount', viewCount.toString());
        }
        
        // 更新显示
        const viewCountElement = document.getElementById('viewCountValue');
        if (viewCountElement) {
            viewCountElement.textContent = viewCount.toLocaleString();
        }
    }

    // 点赞功能
    function initLikeButton() {
        const likeButton = document.getElementById('likeButton');
        const likeCountElement = document.getElementById('likeCountValue');
        
        if (!likeButton || !likeCountElement) return;

        // 从 localStorage 读取点赞状态和数量
        let likeCount = parseInt(localStorage.getItem('likeCount') || '628');
        const hasLiked = localStorage.getItem('hasLiked') === 'true';
        
        // 如果localStorage中没有数据，设置为初始值628
        if (!localStorage.getItem('likeCount')) {
            likeCount = 628;
            localStorage.setItem('likeCount', '628');
        } else {
            // 如果已有数据，确保至少为628
            if (likeCount < 628) {
                likeCount = 628;
                localStorage.setItem('likeCount', '628');
            }
        }
        
        // 确保显示为628（如果当前值小于628）
        if (likeCount < 628) {
            likeCount = 628;
            localStorage.setItem('likeCount', '628');
        }
        
        // 更新显示
        likeCountElement.textContent = likeCount.toLocaleString();
        if (hasLiked) {
            likeButton.classList.add('liked');
        }

        // 点击事件
        likeButton.addEventListener('click', function() {
            const isLiked = likeButton.classList.contains('liked');
            
            if (isLiked) {
                // 取消点赞
                likeButton.classList.remove('liked');
                likeCount = Math.max(0, likeCount - 1);
                localStorage.setItem('hasLiked', 'false');
            } else {
                // 点赞
                likeButton.classList.add('liked');
                likeCount++;
                localStorage.setItem('hasLiked', 'true');
                
                // 添加点赞动画效果
                likeButton.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    likeButton.style.transform = 'scale(1)';
                }, 200);
            }
            
            // 更新数量
            likeCountElement.textContent = likeCount.toLocaleString();
            localStorage.setItem('likeCount', likeCount.toString());
        });
    }

    // 初始化
    updateViewCount();
    initLikeButton();
});
