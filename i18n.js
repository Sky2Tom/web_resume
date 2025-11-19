// 国际化语言切换功能
(function() {
    'use strict';
    
    // 获取当前语言，默认为英文
    let currentLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // 获取翻译文本的辅助函数
    function getTranslation(key, lang) {
        const keys = key.split('.');
        let value = translations[lang];
        for (let k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                return null;
            }
        }
        return value;
    }
    
    // 更新单个元素的文本
    function updateElement(element, key, lang) {
        const translation = getTranslation(key, lang);
        if (translation !== null) {
            if (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'button') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    }
    
    // 更新所有带data-i18n属性的元素
    function updateAllElements(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            updateElement(element, key, lang);
        });
        
        // 特殊处理：更新section标题
        updateSectionTitles(lang);
        
        // 特殊处理：更新hero区域
        updateHeroSection(lang);
        
        // 特殊处理：更新about区域
        updateAboutSection(lang);
        
        // 特殊处理：更新skills区域
        updateSkillsSection(lang);
        
        // 特殊处理：更新experience区域
        updateExperienceSection(lang);
        
        // 特殊处理：更新projects区域
        updateProjectsSection(lang);
        
        // 特殊处理：更新honors区域
        updateHonorsSection(lang);
        
        // 特殊处理：更新contact区域
        updateContactSection(lang);
        
        // 特殊处理：更新blog区域
        updateBlogSection(lang);
        
        // 特殊处理：更新footer
        updateFooter(lang);
        
        // 更新HTML lang属性
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }
    
    // 更新section标题
    function updateSectionTitles(lang) {
        const sectionTitles = {
            'about': 'about.title',
            'skills': 'skills.title',
            'experience': 'experience.title',
            'projects': 'projects.title',
            'honors': 'honors.title',
            'contact': 'contact.title',
            'blog': 'blog.title'
        };
        
        Object.keys(sectionTitles).forEach(sectionId => {
            const section = document.querySelector(`#${sectionId}`);
            if (section) {
                const titleElement = section.querySelector('.section-title');
                if (titleElement) {
                    const translation = getTranslation(sectionTitles[sectionId], lang);
                    if (translation) {
                        titleElement.textContent = translation;
                    }
                }
            }
        });
    }
    
    // 更新hero区域
    function updateHeroSection(lang) {
        const hero = document.querySelector('#home');
        if (!hero) return;
        
        const greeting = hero.querySelector('.hero-greeting');
        const title = hero.querySelector('.hero-title');
        const subtitle = hero.querySelector('.hero-subtitle');
        const description = hero.querySelector('.hero-description');
        const getInTouch = hero.querySelector('.btn-primary');
        const viewWork = hero.querySelector('.btn-secondary');
        const scrollText = hero.querySelector('.scroll-indicator span');
        
        if (greeting) greeting.textContent = getTranslation('hero.greeting', lang) || greeting.textContent;
        if (title) title.textContent = getTranslation('hero.title', lang) || title.textContent;
        if (subtitle) subtitle.textContent = getTranslation('hero.subtitle', lang) || subtitle.textContent;
        if (description) description.textContent = getTranslation('hero.description', lang) || description.textContent;
        if (getInTouch) getInTouch.textContent = getTranslation('hero.getInTouch', lang) || getInTouch.textContent;
        if (viewWork) viewWork.textContent = getTranslation('hero.viewWork', lang) || viewWork.textContent;
        if (scrollText) scrollText.textContent = getTranslation('scroll', lang) || scrollText.textContent;
    }
    
    // 更新about区域
    function updateAboutSection(lang) {
        const about = document.querySelector('#about');
        if (!about) return;
        
        const intro = about.querySelectorAll('.about-intro p');
        if (intro.length >= 1) intro[0].textContent = getTranslation('about.intro1', lang) || intro[0].textContent;
        if (intro.length >= 2) intro[1].textContent = getTranslation('about.intro2', lang) || intro[1].textContent;
        
        const details = about.querySelectorAll('.detail-item');
        details.forEach((item, index) => {
            const label = item.querySelector('.detail-label');
            const value = item.querySelector('.detail-value');
            
            if (label && index === 0) {
                label.textContent = getTranslation('about.education', lang) || label.textContent;
                if (value) value.textContent = getTranslation('about.educationValue', lang) || value.textContent;
            } else if (label && index === 1) {
                label.textContent = getTranslation('about.major', lang) || label.textContent;
                if (value) value.textContent = getTranslation('about.majorValue', lang) || value.textContent;
            } else if (label && index === 2) {
                label.textContent = getTranslation('about.location', lang) || label.textContent;
                if (value) value.textContent = getTranslation('about.locationValue', lang) || value.textContent;
            } else if (label && index === 3) {
                label.textContent = getTranslation('about.exchange', lang) || label.textContent;
                if (value) value.textContent = getTranslation('about.exchangeValue', lang) || value.textContent;
            }
        });
    }
    
    // 更新skills区域
    function updateSkillsSection(lang) {
        const skills = document.querySelector('#skills');
        if (!skills) return;
        
        const categories = skills.querySelectorAll('.skill-category');
        categories.forEach((category, index) => {
            const title = category.querySelector('.skill-category-title');
            const list = category.querySelectorAll('.skill-list li');
            
            if (index === 0 && title) {
                title.textContent = getTranslation('skills.technical', lang) || title.textContent;
                const techList = getTranslation('skills.techList', lang);
                if (techList && Array.isArray(techList)) {
                    list.forEach((li, i) => {
                        if (techList[i]) li.textContent = techList[i];
                    });
                }
            } else if (index === 1 && title) {
                title.textContent = getTranslation('skills.product', lang) || title.textContent;
                const productList = getTranslation('skills.productList', lang);
                if (productList && Array.isArray(productList)) {
                    list.forEach((li, i) => {
                        if (productList[i]) li.textContent = productList[i];
                    });
                }
            } else if (index === 2 && title) {
                title.textContent = getTranslation('skills.languages', lang) || title.textContent;
                const langList = getTranslation('skills.langList', lang);
                if (langList && Array.isArray(langList)) {
                    list.forEach((li, i) => {
                        if (langList[i]) li.textContent = langList[i];
                    });
                }
            }
        });
    }
    
    // 更新experience区域
    function updateExperienceSection(lang) {
        const experience = document.querySelector('#experience');
        if (!experience) return;
        
        const items = experience.querySelectorAll('.timeline-item');
        const experienceKeys = ['tencent', 'chuangchao', 'nio']; // 按HTML中的顺序
        
        items.forEach((item, index) => {
            const date = item.querySelector('.timeline-date');
            const company = item.querySelector('.timeline-company');
            const position = item.querySelector('.timeline-position');
            const details = item.querySelectorAll('.timeline-details li');
            
            if (index < experienceKeys.length) {
                const key = experienceKeys[index];
                const data = getTranslation(`experience.${key}`, lang);
                if (data) {
                    if (date && data.date) date.textContent = data.date;
                    if (company && data.company) company.textContent = data.company;
                    if (position && data.position) position.textContent = data.position;
                    if (data.details && Array.isArray(data.details)) {
                        details.forEach((li, i) => {
                            if (data.details[i]) li.textContent = data.details[i];
                        });
                    }
                }
            }
        });
    }
    
    // 更新projects区域
    function updateProjectsSection(lang) {
        const projects = document.querySelector('#projects');
        if (!projects) return;
        
        const cards = projects.querySelectorAll('.project-card');
        const projectData = [
            getTranslation('projects.iros', lang),
            getTranslation('projects.cambridge', lang),
            getTranslation('projects.huawei', lang),
            getTranslation('projects.finance', lang),
            getTranslation('projects.anomaly', lang),
            getTranslation('projects.unet', lang)
        ];
        
        cards.forEach((card, index) => {
            if (projectData[index]) {
                const type = card.querySelector('.project-type');
                const title = card.querySelector('.project-title');
                const description = card.querySelector('.project-description');
                
                if (type && projectData[index].type) type.textContent = projectData[index].type;
                if (title && projectData[index].title) title.textContent = projectData[index].title;
                if (description && projectData[index].description) description.textContent = projectData[index].description;
            }
        });
    }
    
    // 更新honors区域
    function updateHonorsSection(lang) {
        const honors = document.querySelector('#honors');
        if (!honors) return;
        
        const items = honors.querySelectorAll('.honor-item');
        const honorData = [
            getTranslation('honors.scholarship', lang),
            getTranslation('honors.outstanding', lang),
            getTranslation('honors.graduate', lang),
            getTranslation('honors.cambridge', lang),
            getTranslation('honors.people', lang),
            getTranslation('honors.cadre', lang)
        ];
        
        items.forEach((item, index) => {
            if (honorData[index]) {
                const title = item.querySelector('.honor-title');
                const description = item.querySelector('.honor-description');
                
                if (title && honorData[index].title) title.textContent = honorData[index].title;
                if (description && honorData[index].description) description.textContent = honorData[index].description;
            }
        });
    }
    
    // 更新contact区域
    function updateContactSection(lang) {
        const contact = document.querySelector('#contact');
        if (!contact) return;
        
        const intro = contact.querySelector('.contact-intro');
        const resumeProduct = contact.querySelector('.resume-download .btn-primary');
        const resumeGeneral = contact.querySelector('.resume-download .btn-secondary');
        
        if (intro) intro.textContent = getTranslation('contact.intro', lang) || intro.textContent;
        if (resumeProduct) resumeProduct.textContent = getTranslation('contact.resumeProduct', lang) || resumeProduct.textContent;
        if (resumeGeneral) resumeGeneral.textContent = getTranslation('contact.resumeGeneral', lang) || resumeGeneral.textContent;
    }
    
    // 更新blog区域
    function updateBlogSection(lang) {
        const blog = document.querySelector('#blog');
        if (!blog) return;
        
        // Blog标题已通过section标题更新
        // 这里可以添加其他blog相关的翻译
    }
    
    // 更新footer
    function updateFooter(lang) {
        const footer = document.querySelector('.footer');
        if (!footer) return;
        
        const copyright = footer.querySelector('p:first-child');
        const note = footer.querySelector('p:last-child');
        
        if (copyright) copyright.textContent = getTranslation('footer.copyright', lang) || copyright.textContent;
        if (note) note.textContent = getTranslation('footer.note', lang) || note.textContent;
    }
    
    // 切换语言
    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        updateAllElements(lang);
        
        // 更新语言切换按钮的激活状态
        const zhBtn = document.getElementById('langBtnZh');
        const enBtn = document.getElementById('langBtnEn');
        
        if (lang === 'zh') {
            if (zhBtn) zhBtn.classList.add('active');
            if (enBtn) enBtn.classList.remove('active');
        } else {
            if (zhBtn) zhBtn.classList.remove('active');
            if (enBtn) enBtn.classList.add('active');
        }
    }
    
    // 设置语言切换按钮
    function setupLanguageToggle() {
        const zhBtn = document.getElementById('langBtnZh');
        const enBtn = document.getElementById('langBtnEn');
        
        if (!zhBtn || !enBtn) {
            console.warn('语言切换按钮未找到，将在DOM加载后重试');
            setTimeout(setupLanguageToggle, 100);
            return;
        }
        
        // 设置初始状态
        if (currentLang === 'zh') {
            zhBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            zhBtn.classList.remove('active');
            enBtn.classList.add('active');
        }
        
        // 点击中文按钮
        zhBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('切换到中文');
            switchLanguage('zh');
        });
        
        // 点击英文按钮
        enBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('切换到英文');
            switchLanguage('en');
        });
    }
    
    // 初始化
    function init() {
        // 确保translations对象已加载
        if (typeof translations === 'undefined') {
            console.error('translations对象未定义，请确保language.js已加载');
            setTimeout(init, 100);
            return;
        }
        
        // 更新所有元素
        updateAllElements(currentLang);
        
        // 设置语言切换按钮
        setupLanguageToggle();
    }
    
    // 导出函数供外部使用
    window.i18n = {
        switchLanguage: switchLanguage,
        getCurrentLang: function() { return currentLang; }
    };
    
    // 等待DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM已经加载完成，直接初始化
        setTimeout(init, 50);
    }
})();

