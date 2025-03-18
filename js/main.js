// Modal functionality
const modals = {
    'elderly-care': {
        title: 'Elderly Care: Addressing the Challenges of Aging in Modern China',
        content: `<section>
<div class="section-intro">
<h3><i class="fas fa-info-circle"></i> Why This Focus Area Matters</h3>
<p>China is experiencing one of the most rapid demographic shifts in the world, with over 18% of the population now aged 60 or above. This number is projected to reach 35% by 2050. As a health communicator, I've witnessed firsthand how this demographic transition creates unprecedented challenges:</p>
</div>

<ul>
    <li>Social isolation among elderly, particularly in urban centers where traditional family structures are changing</li>
    <li>Limited mental health resources specifically designed for older adults</li>
    <li>Growing digital divide that excludes seniors from essential services and family connections</li>
    <li>Intergenerational communication gaps that reduce quality of care and emotional support</li>
</ul>
</section>

<section>
<div class="solutions-section">
<h3><i class="fas fa-lightbulb"></i> Media-Based Solutions</h3>
<p>Through my work, I've developed several media approaches to address these challenges:</p>
</div>

<ol>
    <li><strong>Intergenerational Storytelling Platforms:</strong> Creating digital and in-person forums where elderly citizens can share their life experiences and wisdom with younger generations, preserving cultural knowledge while reducing isolation.</li>
    <li><strong>Digital Literacy Campaigns:</strong> Producing accessible video tutorials and workshops that teach seniors to use technology for health management, social connection, and accessing services.</li>
    <li><strong>Mental Health Awareness Content:</strong> Developing age-appropriate content that destigmatizes mental health issues among older adults and encourages help-seeking behaviors.</li>
    <li><strong>Family Communication Tools:</strong> Creating resources that help adult children and elderly parents navigate difficult conversations about care needs, health decisions, and end-of-life planning.</li>
</ol>
</section>

<section>
<div class="conclusion">
<h3><i class="fas fa-chart-line"></i> Research Findings</h3>
<p>My research indicates that media interventions in elderly care are most effective when they respect traditional values while acknowledging changing family dynamics. By creating content that bridges generational divides, we can support China's aging population while strengthening family bonds and community connections.</p>
</div>
</section>`
    },
    'middle-age': {
        title: 'Middle-aged Substance Use: Breaking the Silence on Workplace Drinking Culture',
        content: `<section>
<div class="section-intro">
<h3><i class="fas fa-info-circle"></i> Why This Focus Area Matters</h3>
<p>Middle-aged adults (40-60 years) in China face unique substance use challenges that often go unaddressed in public health communications. Through my research and fieldwork, I've identified several critical issues:</p>
</div>

<ul>
    <li>Entrenched business drinking culture that ties career advancement to alcohol consumption</li>
    <li>Rising rates of alcohol-related liver disease among middle-aged professionals</li>
    <li>Significant stigma around seeking help for substance dependency</li>
    <li>Lack of work-life balance contributing to self-medication with alcohol and tobacco</li>
    <li>Family impacts of parental substance use that affect multiple generations</li>
</ul>
</section>

<section>
<div class="solutions-section">
<h3><i class="fas fa-lightbulb"></i> Media-Based Solutions</h3>
<p>My approach to addressing middle-aged substance use focuses on culturally appropriate media interventions:</p>
</div>

<ol>
    <li><strong>Workplace Wellness Campaigns:</strong> Developing corporate communication strategies that normalize moderation and provide alternatives to traditional drinking-centered business interactions.</li>
    <li><strong>Personal Narrative Platforms:</strong> Creating spaces where recovered individuals can share their stories, reducing stigma and demonstrating that seeking help is a sign of strength, not weakness.</li>
    <li><strong>Family-Centered Content:</strong> Producing resources that help spouses and children understand addiction as a health issue and support recovery processes.</li>
    <li><strong>Professional Network Education:</strong> Developing industry-specific content that addresses the unique substance use challenges in different professional environments.</li>
</ol>
</section>

<section>
<div class="conclusion">
<h3><i class="fas fa-key"></i> Key Insights</h3>
<p>The most effective media approaches acknowledge the cultural context of business drinking while offering practical alternatives. By targeting both individual behavior change and organizational culture, we can create environments where middle-aged adults can maintain professional relationships without compromising their health.</p>
</div>
</section>`
    },
    'youth-vaping': {
        title: 'Youth E-cigarette & Drug Prevention: Innovative Approaches for the Digital Generation',
        content: `<section>
<div class="section-intro">
<h3><i class="fas fa-info-circle"></i> Why This Focus Area Matters</h3>
<p>The rise of e-cigarettes and changing patterns of substance use among Chinese youth present urgent public health challenges. My research has identified several concerning trends:</p>
</div>

<ul>
    <li>40% increase in e-cigarette usage among urban teenagers since 2022</li>
    <li>Average age of first e-cigarette use dropping to just 13 years old</li>
    <li>Widespread misconceptions about the safety of vaping products</li>
    <li>Growing normalization of substance use in youth-oriented social media</li>
    <li>Communication gaps between parents, educators, and youth about substance risks</li>
</ul>
</section>

<section>
<div class="solutions-section">
<h3><i class="fas fa-lightbulb"></i> Media-Based Solutions</h3>
<p>My work in youth substance prevention leverages media approaches that resonate with digital natives:</p>
</div>

<ol>
    <li><strong>Peer-Led Digital Campaigns:</strong> Training youth who have experienced substance issues to create authentic content that cuts through marketing glamorization and connects with their peers.</li>
    <li><strong>Interactive Educational Content:</strong> Developing gamified learning experiences and simulations that demonstrate the real effects of substances on developing brains and bodies.</li>
    <li><strong>Parent-Youth Communication Tools:</strong> Creating resources that help parents initiate effective conversations about substance use without triggering defensive reactions.</li>
    <li><strong>School Media Integration:</strong> Designing curriculum-integrated media that teachers can use to address substance prevention within existing educational frameworks.</li>
</ol>
</section>

<section>
<div class="conclusion">
<h3><i class="fas fa-check-circle"></i> Proven Approach</h3>
<p>The most successful youth prevention media acknowledges young people's agency and desire for authentic information. Rather than relying on fear tactics, my approach focuses on building critical thinking skills that help youth evaluate marketing messages and peer pressure around substance use. By combining scientific accuracy with engaging formats, we can empower young people to make informed health decisions.</p>
</div>
</section>`
    }
};

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(`${modalId}-modal`);
    const content = modal.querySelector('.transcript-content');
    const modalTitle = modal.querySelector('h2 span');
    const modalData = modals[modalId];
    
    if (modalData) {
        content.innerHTML = modalData.content;
        
        // 添加返回主页按钮
        const backButton = document.createElement('a');
        backButton.href = '#';
        backButton.className = 'back-to-home';
        backButton.innerHTML = '<i class="fas fa-home"></i> Back Homepage';
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal(modalId);
            window.scrollTo(0, 0);
        });
        content.appendChild(backButton);
        
        // 设置标题
        if (modalTitle) {
            modalTitle.textContent = modalData.title.split(':')[0]; // 只显示冒号前的主标题
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // 添加一个小延迟，确保模态框平滑显示
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(`${modalId}-modal`);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for modals
document.addEventListener('DOMContentLoaded', () => {
    // Close modal when clicking the close button
    document.querySelectorAll('.close-modal').forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            const modalId = modal.id.replace('-modal', '');
            closeModal(modalId);
        });
    });

    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                const modalId = modal.id.replace('-modal', '');
                closeModal(modalId);
            }
        });
    });

    // Open modal when clicking on focus cards or transcript buttons
    document.querySelectorAll('[data-modal]').forEach(element => {
        element.addEventListener('click', () => {
            const modalId = element.getAttribute('data-modal');
            openModal(modalId);
        });
    });
    
    // Open modal when clicking on focus buttons
    document.querySelectorAll('.focus-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // 阻止事件冒泡，避免触发两次
            e.stopPropagation();
            const modalId = button.closest('[data-modal]').getAttribute('data-modal');
            openModal(modalId);
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Language toggle
const languageBtn = document.getElementById('language-btn');
let isEnglish = true;

languageBtn.addEventListener('click', function() {
    isEnglish = !isEnglish;
    languageBtn.textContent = isEnglish ? '中文 / English' : 'English / 中文';
    // Here you would implement actual language switching logic
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile nav if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Podcast data
const podcasts = [
    {
        title: "Chinese youth e-cigarette recovery -- the power of the family",
        description: "Exploring the journey of Xiao Jie, a teenager who overcame e-cigarette addiction with family support, featuring expert insights on youth vaping prevention.",
        date: "March 15, 2024",
        duration: "42:15",
        viewers: "25,600+"
    },
    {
        title: "Recovery of alcohol dependence among Chinese adolescents: The road to family rebirth",
        description: "Following Li Yang's story of overcoming alcohol addiction, highlighting the crucial role of family support and professional guidance in teen recovery.",
        date: "March 10, 2024",
        duration: "38:47",
        viewers: "18,300+"
    },
    {
        title: "Melodies of Recovery: Family Stories of Teenage Drug Rehabilitation in China",
        description: "Sharing Liu Yu's journey through drug addiction recovery, demonstrating the power of family love and professional support in overcoming substance abuse.",
        date: "March 5, 2024",
        duration: "45:32",
        viewers: "32,100+"
    }
];

// Achievement data
const achievements = [
    {
        title: "Social Media Influence",
        description: "Health communication influencer on Xiaohongshu with 500,000+ followers",
        icon: "images/influence-icon.png"
    },
    {
        title: "Content Creation",
        description: "100+ health education articles reaching millions of readers",
        icon: "images/content-icon.png"
    },
    {
        title: "Community Impact",
        description: "Leading health education initiatives across multiple Chinese cities",
        icon: "images/community-icon.png"
    }
];

// Load content functions
function loadAchievements() {
    const achievementsGrid = document.querySelector('.achievements-grid');
    if (achievementsGrid) {
        achievements.forEach(achievement => {
            const achievementCard = document.createElement('div');
            achievementCard.className = 'achievement-card';
            achievementCard.innerHTML = `
                <img src="${achievement.icon}" alt="${achievement.title}">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            `;
            achievementsGrid.appendChild(achievementCard);
        });
    }
}

// Initialize content when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadAchievements();
});

// Transcript functionality
document.addEventListener('DOMContentLoaded', function() {
    const showTranscriptButtons = document.querySelectorAll('.show-transcript');
    
    showTranscriptButtons.forEach(button => {
        button.addEventListener('click', function() {
            const podcastCard = this.closest('.podcast-card');
            const transcriptId = podcastCard.getAttribute('data-transcript');
            // 跳转到文字记录页面
            window.location.href = `transcript.html?id=${transcriptId}`;
        });
    });
});

// Article functionality
document.addEventListener('DOMContentLoaded', function() {
    const viewArticleButtons = document.querySelectorAll('.view-article');
    
    viewArticleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const articleCard = this.closest('.article-card');
            const articleId = articleCard.getAttribute('data-article');
            
            if (articleId && articles[articleId]) {
                // Create modal overlay
                const overlay = document.createElement('div');
                overlay.className = 'article-overlay';
                
                // Create modal content
                const modal = document.createElement('div');
                modal.className = 'article-modal';
                
                // Create header
                const header = document.createElement('div');
                header.className = 'article-header';
                
                // 获取文章卡片的图标
                let iconClass = '';
                switch(articleId) {
                    case '1':
                        iconClass = 'fas fa-users';
                        break;
                    case '2':
                        iconClass = 'fas fa-smoking-ban';
                        break;
                    case '3':
                        iconClass = 'fas fa-glass-cheers';
                        break;
                    case '4':
                        iconClass = 'fas fa-comments';
                        break;
                    case '5':
                        iconClass = 'fas fa-tablet-alt';
                        break;
                    case '6':
                        iconClass = 'fas fa-brain';
                        break;
                    default:
                        iconClass = 'fas fa-file-alt';
                }
                
                // 创建图标元素
                const iconElement = document.createElement('div');
                iconElement.className = 'article-title-icon';
                iconElement.innerHTML = `<i class="${iconClass}"></i>`;
                
                // Create title
                const title = document.createElement('h2');
                title.textContent = articles[articleId].title;
                
                // Create close button
                const closeButton = document.createElement('button');
                closeButton.className = 'close-article';
                closeButton.innerHTML = '&times;';
                closeButton.addEventListener('click', function() {
                    document.body.removeChild(overlay);
                });
                
                // Add icon, title and close button to header
                header.appendChild(iconElement);
                header.appendChild(title);
                header.appendChild(closeButton);
                
                // Create body
                const body = document.createElement('div');
                body.className = 'article-body';
                
                // 创建特色图片容器
                const featuredImageContainer = document.createElement('div');
                featuredImageContainer.className = 'article-featured-image';
                
                // 创建图片元素
                const featuredImage = document.createElement('img');
                
                // 根据文章ID设置不同的图片
                switch(articleId) {
                    case '1':
                        featuredImage.src = '/Users/mac/Desktop/website2/article pic/1.png';
                        featuredImage.alt = 'Elderly Care Workshop';
                        break;
                    case '2':
                        featuredImage.src = '/Users/mac/Desktop/website2/article pic/2.png';
                        featuredImage.alt = 'Youth Vaping Prevention';
                        break;
                    case '3':
                        featuredImage.src = '/Users/mac/Desktop/website2/article pic/3.png';
                        featuredImage.alt = 'Workplace Drinking Culture';
                        break;
                    case '4':
                        featuredImage.src = '/Users/mac/Desktop/website2/article pic/4.png';
                        featuredImage.alt = 'Family Communication Workshop';
                        break;
                    case '5':
                        featuredImage.src = '/Users/mac/Desktop/website2/article pic/5.png';
                        featuredImage.alt = 'Digital Literacy for Elderly';
                        break;
                    case '6':
                        featuredImage.src = '/Users/mac/Desktop/website2/article pic/6.png';
                        featuredImage.alt = 'Youth Mental Health Campaign';
                        break;
                    default:
                        featuredImage.src = 'images/hero-bg-new.jpg';
                        featuredImage.alt = 'Health Communication Article';
                }
                
                // 将图片添加到容器中
                featuredImageContainer.appendChild(featuredImage);
                
                // 添加图片容器到文章内容前
                body.appendChild(featuredImageContainer);
                
                // 处理文章内容，高亮关键词
                let content = articles[articleId].content;
                const keywordsToHighlight = [
                    'intergenerational connection', 'digital literacy', 'mental health', 
                    'family support', 'substance use', 'e-cigarette', 'vaping', 
                    'workplace wellness', 'communication', 'elderly', 'youth', 
                    'addiction', 'recovery', 'health education', 'media intervention'
                ];
                
                keywordsToHighlight.forEach(keyword => {
                    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                    content = content.replace(regex, match => `<span class="highlight">${match}</span>`);
                });
                
                body.innerHTML += content;
                
                // 添加返回首页按钮
                const backButton = document.createElement('a');
                backButton.href = '#';
                backButton.className = 'back-to-home';
                backButton.innerHTML = '<i class="fas fa-home"></i> Back Homepage';
                backButton.style.color = 'white'; // 确保文字颜色为白色
                backButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.body.removeChild(overlay);
                    window.scrollTo(0, document.getElementById('articles').offsetTop - 100);
                });
                body.appendChild(backButton);
                
                // Add header and body to modal
                modal.appendChild(header);
                modal.appendChild(body);
                
                // Add modal to overlay
                overlay.appendChild(modal);
                
                // Add overlay to page
                document.body.appendChild(overlay);
                
                // Close modal when clicking outside
                overlay.addEventListener('click', function(event) {
                    if (event.target === overlay) {
                        document.body.removeChild(overlay);
                    }
                });
            }
        });
    });
});

// 导航菜单功能
document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // 汉堡菜单点击事件
    if (burger) {
        burger.addEventListener('click', function() {
            // 切换导航菜单
            nav.classList.toggle('nav-active');
            
            // 动画链接
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // 汉堡菜单动画
            burger.classList.toggle('toggle');
        });
    }
    
    // 滚动时导航栏样式变化
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});

// 音乐播放控制
let isMusicPlaying = false;

function initMusicPlayer() {
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bgMusic');
    
    if (musicToggle && bgMusic) {
        // 设置音频音量
        bgMusic.volume = 0.5; // 设置音量为50%
        
        // 添加音频加载事件监听
        bgMusic.addEventListener('loadeddata', function() {
            console.log('音频文件已加载');
            // 尝试自动播放
            autoPlayMusic();
        });

        bgMusic.addEventListener('error', function(e) {
            console.error('音频加载错误:', e);
        });

        // 点击切换播放/暂停
        musicToggle.addEventListener('click', function() {
            if (isMusicPlaying) {
                bgMusic.pause();
                isMusicPlaying = false;
            } else {
                playMusic();
            }
            updateMusicIcon();
        });
    } else {
        console.error('音乐播放器元素未找到');
    }
}

function autoPlayMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        // 尝试播放
        const playPromise = bgMusic.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('音乐自动播放成功');
                isMusicPlaying = true;
                updateMusicIcon();
            }).catch(error => {
                console.error('自动播放失败:', error);
                // 如果自动播放失败，添加点击事件监听器到整个文档
                document.addEventListener('click', function startMusic() {
                    playMusic();
                    document.removeEventListener('click', startMusic);
                }, { once: true });
            });
        }
    }
}

function playMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('音乐开始播放');
                isMusicPlaying = true;
                updateMusicIcon();
            }).catch(error => {
                console.error('播放失败:', error);
                isMusicPlaying = false;
                updateMusicIcon();
            });
        }
    }
}

function updateMusicIcon() {
    const musicIcon = document.getElementById('music-toggle').querySelector('i');
    if (musicIcon) {
        if (isMusicPlaying) {
            musicIcon.classList.remove('fa-music-slash');
            musicIcon.classList.add('fa-music');
        } else {
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-music-slash');
        }
    }
}

// 在页面加载完成后初始化音乐播放器
document.addEventListener('DOMContentLoaded', function() {
    initMusicPlayer();
    // ... 其他现有的DOMContentLoaded事件处理代码 ...
});

// 检查URL中的片段(hash)并滚动到相应部分
function checkAndScrollToSection() {
    const hash = window.location.hash;
    if (hash) {
        const section = document.querySelector(hash);
        if (section) {
            setTimeout(() => {
                section.scrollIntoView({behavior: 'smooth'});
            }, 300);
        }
    }
}

// 在页面加载后和hash变化时检查并滚动
window.addEventListener('load', checkAndScrollToSection);
window.addEventListener('hashchange', checkAndScrollToSection);

// 定期检查是否在Podcast页面（以防用户用其他方式进入页面）
setInterval(checkIfPodcastPage, 2000);

// 处理对话文本，添加对话气泡样式
function processTranscriptText() {
    const transcriptFullElements = document.querySelectorAll('.transcript-full');
    
    if (transcriptFullElements.length > 0) {
        transcriptFullElements.forEach(transcriptFull => {
            const paragraphs = transcriptFull.querySelectorAll('p');
            let lastSpeaker = '';
            
            paragraphs.forEach(paragraph => {
                const text = paragraph.textContent.trim();
                
                // 跳过音乐标记段落
                if (text.includes('🎶')) {
                    return;
                }
                
                // 检查是否是Emily的对话
                if (text.startsWith('Emily:')) {
                    paragraph.classList.add('emily-speech');
                    paragraph.textContent = text.replace('Emily:', '').trim();
                    lastSpeaker = 'emily';
                }
                // 检查是否是Rocho的对话
                else if (text.startsWith('Rocho:')) {
                    paragraph.classList.add('rocho-speech');
                    paragraph.textContent = text.replace('Rocho:', '').trim();
                    lastSpeaker = 'rocho';
                }
                // 处理连续对话（没有显式的说话者标记）
                else if (lastSpeaker && !text.includes('🎶') && !text.includes('<ul>') && !text.includes('<li>')) {
                    if (lastSpeaker === 'emily') {
                        paragraph.classList.add('emily-speech');
                    } else if (lastSpeaker === 'rocho') {
                        paragraph.classList.add('rocho-speech');
                    }
                }
                
                // 为重点内容添加标注
                if (paragraph.textContent.includes('Key Points:') || 
                    paragraph.textContent.includes('key steps:')) {
                    paragraph.innerHTML = paragraph.innerHTML.replace(/(Key Points:|key steps:)/g, '<strong>$1</strong>');
                }
            });
        });
        
        console.log('对话气泡样式已应用');
    }
}

// 在页面加载完成后处理对话文本
document.addEventListener('DOMContentLoaded', function() {
    // 延迟执行以确保内容已加载
    setTimeout(processTranscriptText, 500);
    
    // ... 其他现有的DOMContentLoaded事件处理代码 ...
});

// 在transcript.html页面脚本中检测内容加载
if (window.location.href.includes('transcript.html')) {
    // 监听文本内容加载完成
    document.addEventListener('DOMContentLoaded', function() {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // 当内容加载时处理对话文本
                    processTranscriptText();
                }
            });
        });
        
        // 观察transcript-full元素的变化
        const transcriptFull = document.getElementById('transcript-full');
        if (transcriptFull) {
            observer.observe(transcriptFull, { childList: true, subtree: true });
        }
    });
}

// 处理文字记录页面
function loadTranscriptPage() {
    // 如果在文字记录页面
    if (window.location.pathname.includes('transcript.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const transcriptId = urlParams.get('id');
        
        if (transcriptId) {
            // 根据ID设置不同的视频源
            const videoElement = document.getElementById('transcript-video');
            let videoSrc = '';
            
            if (transcriptId === '1') {
                videoSrc = 'https://www.youtube.com/embed/COGXH8sZZ2k';
            } else if (transcriptId === '2') {
                videoSrc = 'https://www.youtube.com/embed/another-video-id';
            } else if (transcriptId === '3') {
                videoSrc = 'https://www.youtube.com/embed/yet-another-video-id';
            }
            
            if (videoSrc && videoElement) {
                videoElement.src = videoSrc;
                console.log('Video source set to: ' + videoSrc);
            }
            
            // 在这里可以添加其他与文字记录相关的功能
        }
    }
}

// 页面加载时调用
document.addEventListener('DOMContentLoaded', function() {
    // ... 其他现有代码 ...
    
    loadTranscriptPage(); // 加载文字记录页面功能
    
    // 如果存在 processTranscriptText 函数，调用它
    if (typeof processTranscriptText === 'function') {
        // 延迟300毫秒，确保内容已加载
        setTimeout(function() {
            processTranscriptText();
        }, 300);
    }
}); 