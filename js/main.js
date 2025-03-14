// Modal functionality
const modals = {
    'elderly-care': {
        title: 'Elderly Care: Addressing the Challenges of Aging in Modern China',
        content: `<h3>Why This Focus Area Matters</h3>
<p>China is experiencing one of the most rapid demographic shifts in the world, with over 18% of the population now aged 60 or above. This number is projected to reach 35% by 2050. As a health communicator, I've witnessed firsthand how this demographic transition creates unprecedented challenges:</p>

<ul>
    <li>Social isolation among elderly, particularly in urban centers where traditional family structures are changing</li>
    <li>Limited mental health resources specifically designed for older adults</li>
    <li>Growing digital divide that excludes seniors from essential services and family connections</li>
    <li>Intergenerational communication gaps that reduce quality of care and emotional support</li>
</ul>

<h3>Media-Based Solutions</h3>
<p>Through my work, I've developed several media approaches to address these challenges:</p>

<ol>
    <li><strong>Intergenerational Storytelling Platforms:</strong> Creating digital and in-person forums where elderly citizens can share their life experiences and wisdom with younger generations, preserving cultural knowledge while reducing isolation.</li>
    <li><strong>Digital Literacy Campaigns:</strong> Producing accessible video tutorials and workshops that teach seniors to use technology for health management, social connection, and accessing services.</li>
    <li><strong>Mental Health Awareness Content:</strong> Developing age-appropriate content that destigmatizes mental health issues among older adults and encourages help-seeking behaviors.</li>
    <li><strong>Family Communication Tools:</strong> Creating resources that help adult children and elderly parents navigate difficult conversations about care needs, health decisions, and end-of-life planning.</li>
</ol>

<p>My research indicates that media interventions in elderly care are most effective when they respect traditional values while acknowledging changing family dynamics. By creating content that bridges generational divides, we can support China's aging population while strengthening family bonds and community connections.</p>`
    },
    'middle-age': {
        title: 'Middle-aged Substance Use: Breaking the Silence on Workplace Drinking Culture',
        content: `<h3>Why This Focus Area Matters</h3>
<p>Middle-aged adults (40-60 years) in China face unique substance use challenges that often go unaddressed in public health communications. Through my research and fieldwork, I've identified several critical issues:</p>

<ul>
    <li>Entrenched business drinking culture that ties career advancement to alcohol consumption</li>
    <li>Rising rates of alcohol-related liver disease among middle-aged professionals</li>
    <li>Significant stigma around seeking help for substance dependency</li>
    <li>Lack of work-life balance contributing to self-medication with alcohol and tobacco</li>
    <li>Family impacts of parental substance use that affect multiple generations</li>
</ul>

<h3>Media-Based Solutions</h3>
<p>My approach to addressing middle-aged substance use focuses on culturally appropriate media interventions:</p>

<ol>
    <li><strong>Workplace Wellness Campaigns:</strong> Developing corporate communication strategies that normalize moderation and provide alternatives to traditional drinking-centered business interactions.</li>
    <li><strong>Personal Narrative Platforms:</strong> Creating spaces where recovered individuals can share their stories, reducing stigma and demonstrating that seeking help is a sign of strength, not weakness.</li>
    <li><strong>Family-Centered Content:</strong> Producing resources that help spouses and children understand addiction as a health issue and support recovery processes.</li>
    <li><strong>Professional Network Education:</strong> Developing industry-specific content that addresses the unique substance use challenges in different professional environments.</li>
</ol>

<p>The most effective media approaches acknowledge the cultural context of business drinking while offering practical alternatives. By targeting both individual behavior change and organizational culture, we can create environments where middle-aged adults can maintain professional relationships without compromising their health.</p>`
    },
    'youth-vaping': {
        title: 'Youth E-cigarette & Drug Prevention: Innovative Approaches for the Digital Generation',
        content: `<h3>Why This Focus Area Matters</h3>
<p>The rise of e-cigarettes and changing patterns of substance use among Chinese youth present urgent public health challenges. My research has identified several concerning trends:</p>

<ul>
    <li>40% increase in e-cigarette usage among urban teenagers since 2022</li>
    <li>Average age of first e-cigarette use dropping to just 13 years old</li>
    <li>Widespread misconceptions about the safety of vaping products</li>
    <li>Growing normalization of substance use in youth-oriented social media</li>
    <li>Communication gaps between parents, educators, and youth about substance risks</li>
</ul>

<h3>Media-Based Solutions</h3>
<p>My work in youth substance prevention leverages media approaches that resonate with digital natives:</p>

<ol>
    <li><strong>Peer-Led Digital Campaigns:</strong> Training youth who have experienced substance issues to create authentic content that cuts through marketing glamorization and connects with their peers.</li>
    <li><strong>Interactive Educational Content:</strong> Developing gamified learning experiences and simulations that demonstrate the real effects of substances on developing brains and bodies.</li>
    <li><strong>Parent-Youth Communication Tools:</strong> Creating resources that help parents initiate effective conversations about substance use without triggering defensive reactions.</li>
    <li><strong>School Media Integration:</strong> Designing curriculum-integrated media that teachers can use to address substance prevention within existing educational frameworks.</li>
</ol>

<p>The most successful youth prevention media acknowledges young people's agency and desire for authentic information. Rather than relying on fear tactics, my approach focuses on building critical thinking skills that help youth evaluate marketing messages and peer pressure around substance use. By combining scientific accuracy with engaging formats, we can empower young people to make informed health decisions.</p>`
    }
};

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(`${modalId}-modal`);
    const content = modal.querySelector('.transcript-content');
    const modalData = modals[modalId];
    
    if (modalData) {
        content.innerHTML = modalData.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
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
                
                // Add title and close button to header
                header.appendChild(title);
                header.appendChild(closeButton);
                
                // Create body
                const body = document.createElement('div');
                body.className = 'article-body';
                body.innerHTML = articles[articleId].content;
                
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