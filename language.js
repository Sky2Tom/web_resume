// 语言数据
const translations = {
    zh: {
        // 导航栏
        nav: {
            home: '首页',
            about: '关于',
            skills: '技能',
            experience: '经历',
            projects: '项目',
            honors: '荣誉',
            contact: '联系',
            blog: '我的博客'
        },
        // 首页
        hero: {
            greeting: '你好，我是',
            title: 'AI产品经理',
            subtitle: '东南大学硕士研究生',
            description: '专注于AI软件产品、智能系统和数据驱动解决方案。致力于将复杂技术转化为优雅的用户体验。',
            getInTouch: '联系我',
            viewWork: '查看作品'
        },
        // 关于我
        about: {
            title: '关于我',
            intro1: '我是东南大学硕士研究生，专业为人工智能与信息系统设计。在AI产品管理和软件开发方面有丰富经验，曾在蔚来汽车和腾讯等知名企业工作。',
            intro2: '我的专长涵盖AI算法开发、数据分析、项目管理和产品设计。持有PMP认证，并在IROS 2024等顶级会议发表研究论文。',
            education: '教育背景',
            educationValue: '硕士（保送）- 东南大学',
            major: '专业',
            majorValue: '人工智能 + 信息系统设计',
            location: '位置',
            locationValue: '中国，南京',
            exchange: '国际交流',
            exchangeValue: '本科（国际交流）- 剑桥大学'
        },
        // 技能
        skills: {
            title: '技能与专长',
            technical: '技术技能',
            product: '产品与管理',
            languages: '语言与认证',
            techList: [
                'Python (PyTorch, Pandas, NumPy)',
                'C语言',
                'SQL与数据库管理',
                '嵌入式系统开发',
                'LLM与Transformer架构',
                '机器学习与深度学习'
            ],
            productList: [
                '产品设计与需求分析',
                '敏捷开发生命周期',
                '项目管理（PMP认证）',
                '系统设计与架构',
                'Figma与UI/UX设计',
                '飞书与协作工具'
            ],
            langList: [
                '英语：CET-4 (648), CET-6 (588)',
                'PMP国际项目管理',
                '计算机二级、三级认证',
                'Microsoft Office套件',
                '企业架构'
            ]
        },
        // 工作经历
        experience: {
            title: '工作经历',
            tencent: {
                date: '2025.08 - 2025.12',
                company: '腾讯科技（深圳）有限公司 - 深圳',
                position: 'AI产品经理（技术背景），IEG部门',
                details: [
                    '负责腾讯企业级分布式数据库TcaplusDB的产品规划和AI功能设计，专注于游戏行业NoSQL数据库设计',
                    '负责TcaplusDB新OMS数据库管理系统的产品迭代，包括存储层（智能数据存储分配、集群管理）、接入层（Proxy服务器分配、Server自动扩缩容）和交互层（UI界面设计、用户权限隔离）',
                    '利用腾讯河源平台（Agent+Cursor）重新设计TcaplusDB产品中心，实现智能搜索和智能客服等AI功能',
                    '开发全自动化多智能体工作流，覆盖"产品PRD → 页面设计 → 前端开发 → 部署"，节省80%开发工作量，产品迭代效率提升50%',
                    '在数据库行业进行深度访谈，协助米哈游等客户构建安全可靠的数据存储平台',
                    '负责新OMS页面优化，聚焦"数据监控"可视化指标的运营价值',
                    '技术栈：Python, SQL, Linux, TcaplusClient, 河源平台, Agent+Cursor'
                ]
            },
            chuangchao: {
                date: '2024.02 - 2025.02',
                company: '创潮科技有限公司',
                position: 'AI软件产品经理 + 嵌入式开发工程师',
                details: [
                    '开发智能装车系统，实现实时数据处理和Modbus (RTU)串口通信',
                    '构建装车系统数字孪生AI软件，基于机器学习的时序监控',
                    '集成硬件传感器（液位传感器、计轴器、激光雷达、RFID）进行信号采集',
                    '技术栈：Python (PyTorch), C, SQL Server, Excel, TIA Portal'
                ]
            },
            nio: {
                date: '2022.10 - 2023.10',
                company: '蔚来汽车 - 上海',
                position: '能源云AI软件产品经理（NIO Power）',
                details: [
                    '开发蔚来车辆智能运营助手，使用生成式对话预训练大模型和RAG技术',
                    '构建蔚来数据智能知识库系统，集成BERT、GPT、知识图谱和业务规则',
                    '实现与蔚来内部大模型的多模型并行集成',
                    '技术栈：Python, Figma, 飞书（PRD文档）'
                ]
            }
        },
        // 项目与研究
        projects: {
            title: '项目与研究',
            iros: {
                type: '研究',
                title: 'IROS 2024发表',
                description: '参与北京大学自动化学院AI自动驾驶项目，在顶级会议IROS 2024发表研究。'
            },
            cambridge: {
                type: '研究',
                title: '剑桥机器学习项目',
                description: '参与剑桥大学复杂系统实验室Pitro教授指导的机器学习项目。'
            },
            huawei: {
                type: '竞赛',
                title: '华为大数据挑战赛',
                description: '获得华为大数据挑战赛全国一等奖。使用Python (pandas, numpy, torch)开发数据分析解决方案。'
            },
            finance: {
                type: '研究',
                title: '金融数据分析',
                description: '第一作者发表金融数据分析论文，预测投资者投资组合行为。'
            },
            anomaly: {
                type: '专利',
                title: '多神经网络异常检测',
                description: '第一作者获得专利："基于多神经网络的运营数据异常检测方法"。'
            },
            unet: {
                type: '专利',
                title: 'U-Net图像分割',
                description: '第三作者获得专利："基于U-Net的辅助优化图像分割算法"。'
            },
            tags: {
                ai: 'AI',
                autonomous: '自动驾驶',
                research: '研究',
                ml: '机器学习',
                cambridge: '剑桥',
                data: '数据科学',
                python: 'Python',
                competition: '竞赛',
                finance: '金融',
                analysis: '数据分析',
                neural: '神经网络',
                detection: '异常检测',
                patent: '专利',
                image: '图像处理',
                unet: 'U-Net'
            }
        },
        // 荣誉
        honors: {
            title: '荣誉与成就',
            scholarship: {
                title: '国家奖学金',
                description: '国家级学术优秀认可'
            },
            outstanding: {
                title: '江苏省优秀学生',
                description: '省级认可'
            },
            graduate: {
                title: '江苏省优秀毕业生',
                description: '省级认可'
            },
            cambridge: {
                title: '剑桥大学交流',
                description: '国际交流项目优秀毕业生'
            },
            people: {
                title: '人民特别奖学金',
                description: '连续三年获得'
            },
            cadre: {
                title: '优秀学生干部',
                description: '校级领导力认可'
            }
        },
        // 联系方式
        contact: {
            title: '联系我',
            intro: '我始终对新的机会、有趣的项目或关于AI、技术和创新的讨论持开放态度。',
            resumeProduct: '下载简历（产品）',
            resumeGeneral: '下载简历（通用）'
        },
        // 博客
        blog: {
            title: '我的博客',
            addLink: '添加新链接',
            linkTitle: '标题',
            linkTitlePlaceholder: '输入链接标题',
            linkUrl: 'URL',
            linkUrlPlaceholder: 'https://example.com',
            save: '保存',
            cancel: '取消'
        },
        // 其他
        scroll: '滚动',
        footer: {
            copyright: '© 2025 汤骁宇。保留所有权利。',
            note: '精心设计'
        },
        // AI助手
        chatbot: {
            title: '汤骁宇的AI助手',
            back: '返回主页',
            welcome: {
                title: '👋 欢迎使用汤骁宇的AI助手',
                description: '我是基于 AI 大模型的智能助手，也是汤骁宇先生的私人助理。🤖<br>可以为您查询和分析金融、科技资讯。📊<br>请随时提问，我会尽力帮助您！💬'
            },
            placeholder: '输入您的问题...',
            send: '发送',
            thinking: '思考中...'
        }
    },
    en: {
        // 导航栏
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            honors: 'Honors',
            contact: 'Contact',
            blog: 'My Blog'
        },
        // 首页
        hero: {
            greeting: 'Hello, I\'m',
            title: 'AI Product Manager',
            subtitle: 'Master\'s Student at Southeast University',
            description: 'Specializing in AI software products, intelligent systems, and data-driven solutions. Passionate about transforming complex technologies into elegant user experiences.',
            getInTouch: 'Get in Touch',
            viewWork: 'View Work'
        },
        // 关于我
        about: {
            title: 'About Me',
            intro1: 'I am a Master\'s student at Southeast University, majoring in Artificial Intelligence and Information Systems Design. With a strong background in AI product management and software development, I have worked at leading companies like NIO and Tencent.',
            intro2: 'My expertise spans across AI algorithm development, data analysis, project management, and product design. I hold a PMP certification and have published research papers in top-tier conferences including IROS 2024.',
            education: 'Education',
            educationValue: 'Master\'s (保送) - Southeast University',
            major: 'Major',
            majorValue: 'AI + Information Systems Design',
            location: 'Location',
            locationValue: 'Nanjing, China',
            exchange: 'International Exchange',
            exchangeValue: 'Bachelor\'s (国际交流) - University of Cambridge'
        },
        // 技能
        skills: {
            title: 'Skills & Expertise',
            technical: 'Technical Skills',
            product: 'Product & Management',
            languages: 'Languages & Certifications',
            techList: [
                'Python (PyTorch, Pandas, NumPy)',
                'C Language',
                'SQL & Database Management',
                'Embedded Systems Development',
                'LLM & Transformer Architecture',
                'Machine Learning & Deep Learning'
            ],
            productList: [
                'Product Design & Requirements Analysis',
                'Agile Development Lifecycle',
                'Project Management (PMP Certified)',
                'System Design & Architecture',
                'Figma & UI/UX Design',
                'Feishu & Collaboration Tools'
            ],
            langList: [
                'English: CET-4 (648), CET-6 (588)',
                'PMP International Project Management',
                'Computer Level 2 & 3 Certifications',
                'Microsoft Office Suite',
                'Enterprise Architecture'
            ]
        },
        // 工作经历
        experience: {
            title: 'Work Experience',
            tencent: {
                date: '2025.08 - 2025.12',
                company: 'Tencent Technology (Shenzhen) Co., Ltd. - Shenzhen',
                position: 'AI Product Manager (Technical Background), IEG Department',
                details: [
                    'Led product planning and AI feature design for Tencent\'s enterprise-grade distributed database, TcaplusDB, focusing on NoSQL database design for the gaming industry',
                    'Responsible for product iterations of the new OMS database management system for TcaplusDB, including storage layer (intelligent data storage allocation, cluster management), access layer (Proxy server allocation, Server auto-scaling), and interaction layer (UI interface design, user permission isolation)',
                    'Utilized Tencent\'s HeYuan platform (Agent+Cursor) to redesign the TcaplusDB product center, implementing AI-powered features such as intelligent search and smart customer service',
                    'Developed a fully automated multi-agent workflow covering "Product PRD → Page Design → Front-End Development → Deployment," saving 80% of development effort and increasing product iteration efficiency by 50%',
                    'Conducted in-depth interviews within the database industry and assisted clients like miHoYo in building secure and reliable data storage platforms',
                    'Led page optimization for the new OMS, focusing on operational value of visualized metrics in "Data Monitoring"',
                    'Technologies: Python, SQL, Linux, TcaplusClient, HeYuan Platform, Agent+Cursor'
                ]
            },
            chuangchao: {
                date: '2024.02 - 2025.02',
                company: 'Chuangchao Technology Co., Ltd.',
                position: 'AI Software Product Manager + Embedded Development Engineer',
                details: [
                    'Developed intelligent train loading system with real-time data processing and Modbus (RTU) serial communication',
                    'Built digital twin AI software for train loading system with machine learning-based time series monitoring',
                    'Integrated hardware sensors (level sensors, axle counters, LiDAR, RFID) for signal acquisition',
                    'Technologies: Python (PyTorch), C, SQL Server, Excel, TIA Portal'
                ]
            },
            nio: {
                date: '2022.10 - 2023.10',
                company: 'NIO (蔚来汽车) - Shanghai',
                position: 'Energy Cloud AI Software Product Manager (NIO Power)',
                details: [
                    'Developed NIO Vehicle Intelligent Operations Assistant using generative dialogue pre-trained large models and RAG technology',
                    'Built NIO Data Intelligent Knowledge Base system integrating BERT, GPT, knowledge graphs, and business rules',
                    'Implemented multi-model parallel integration with NIO\'s internal large models',
                    'Technologies: Python, Figma, Feishu (PRD documentation)'
                ]
            }
        },
        // 项目与研究
        projects: {
            title: 'Projects & Research',
            iros: {
                type: 'Research',
                title: 'IROS 2024 Publication',
                description: 'Participated in AI autonomous driving project at Peking University\'s Automation School, published research in top-tier conference IROS 2024.'
            },
            cambridge: {
                type: 'Research',
                title: 'Cambridge ML Project',
                description: 'Participated in machine learning project at Cambridge University\'s Complex Systems Laboratory under Professor Pitro.'
            },
            huawei: {
                type: 'Competition',
                title: 'Huawei Big Data Challenge',
                description: 'Won National First Prize in Huawei Big Data Challenge. Developed data analysis solutions using Python (pandas, numpy, torch).'
            },
            finance: {
                type: 'Research',
                title: 'Financial Data Analysis',
                description: 'First-author published paper on financial data analysis, predicting investor portfolio behavior.'
            },
            anomaly: {
                type: 'Patent',
                title: 'Multi-Neural Network Anomaly Detection',
                description: 'First-author granted patent: "A Method for Anomaly Detection in Operations Data Based on Multiple Neural Networks".'
            },
            unet: {
                type: 'Patent',
                title: 'U-Net Image Segmentation',
                description: 'Third-author granted patent: "An Auxiliary Optimization Image Segmentation Algorithm Based on U-Net".'
            },
            tags: {
                ai: 'AI',
                autonomous: 'Autonomous Driving',
                research: 'Research',
                ml: 'Machine Learning',
                cambridge: 'Cambridge',
                data: 'Data Science',
                python: 'Python',
                competition: 'Competition',
                finance: 'Finance',
                analysis: 'Data Analysis',
                neural: 'Neural Networks',
                detection: 'Anomaly Detection',
                patent: 'Patent',
                image: 'Image Processing',
                unet: 'U-Net'
            }
        },
        // 荣誉
        honors: {
            title: 'Honors & Achievements',
            scholarship: {
                title: 'National Scholarship',
                description: 'National level recognition for academic excellence'
            },
            outstanding: {
                title: 'Outstanding Student of Jiangsu Province',
                description: 'Provincial level recognition'
            },
            graduate: {
                title: 'Outstanding Graduate of Jiangsu Province',
                description: 'Provincial level recognition'
            },
            cambridge: {
                title: 'Cambridge University Exchange',
                description: 'Outstanding graduate in international exchange program'
            },
            people: {
                title: 'People\'s Special Scholarship',
                description: 'Awarded for three consecutive years'
            },
            cadre: {
                title: 'Outstanding Student Cadre',
                description: 'University level recognition for leadership'
            }
        },
        // 联系方式
        contact: {
            title: 'Get In Touch',
            intro: 'I\'m always open to discussing new opportunities, interesting projects, or just having a conversation about AI, technology, and innovation.',
            resumeProduct: 'Download Resume (Product)',
            resumeGeneral: 'Download Resume (General)'
        },
        // 博客
        blog: {
            title: 'My Blog',
            addLink: '添加新链接',
            linkTitle: '标题',
            linkTitlePlaceholder: '输入链接标题',
            linkUrl: 'URL',
            linkUrlPlaceholder: 'https://example.com',
            save: '保存',
            cancel: '取消'
        },
        // 其他
        scroll: 'Scroll',
        footer: {
            copyright: '© 2025 Xiaoyu Tang. All rights reserved.',
            note: 'Designed with attention to detail'
        },
        // AI助手
        chatbot: {
            title: 'Xiaoyu Tang\'s AI Assistant',
            back: 'Back to Home',
            welcome: {
                title: '👋 Welcome to Xiaoyu Tang\'s AI Assistant',
                description: 'I am an AI-powered intelligent assistant and Mr. Xiaoyu Tang\'s personal assistant. 🤖<br>I can help you query and analyze financial and technology news. 📊<br>Feel free to ask me anything, and I\'ll do my best to help you! 💬'
            },
            placeholder: 'Type your question...',
            send: 'Send',
            thinking: 'Thinking...'
        }
    }
};

