// Main JavaScript functionality for CV website
class CVWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupTypewriter();
        this.setupScrollAnimations();
        this.setupParticleBackground();
        this.setupMobileMenu();
        this.setupSkillBars();
        this.setupSmoothScrolling();
    }

    // Typewriter effect for hero section
    setupTypewriter() {
        // Name typing effect
        if (document.getElementById('typed-name')) {
            new Typed('#typed-name', {
                strings: ['Your Name'],
                typeSpeed: 100,
                startDelay: 500,
                showCursor: false,
                onComplete: () => {
                    // Start title typing after name is complete
                    this.setupTitleTypewriter();
                }
            });
        }
    }

    setupTitleTypewriter() {
        if (document.getElementById('typed-title')) {
            new Typed('#typed-title', {
                strings: ['Computer Science Graduate', 'AI Enthusiast', 'Problem Solver'],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Special handling for timeline items
                    if (entry.target.classList.contains('timeline-item')) {
                        entry.target.classList.add('animate');
                    }
                    
                    // Trigger skill bars animation
                    if (entry.target.classList.contains('skill-bar')) {
                        this.animateSkillBar(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal, .timeline-item').forEach(el => {
            observer.observe(el);
        });

        // Stagger timeline animations
        this.setupTimelineAnimations();
    }

    setupTimelineAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            setTimeout(() => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                entry.target.classList.add('animate');
                            }, index * 200);
                        }
                    });
                }, { threshold: 0.3 });
                
                observer.observe(item);
            }, 100);
        });
    }

    // Particle background using p5.js
    setupParticleBackground() {
        if (document.getElementById('particle-container')) {
            new p5((p) => {
                let particles = [];
                let numParticles = 50;

                p.setup = () => {
                    const container = document.getElementById('particle-container');
                    const canvas = p.createCanvas(container.offsetWidth, container.offsetHeight);
                    canvas.parent('particle-container');
                    
                    // Create particles
                    for (let i = 0; i < numParticles; i++) {
                        particles.push({
                            x: p.random(p.width),
                            y: p.random(p.height),
                            vx: p.random(-0.5, 0.5),
                            vy: p.random(-0.5, 0.5),
                            size: p.random(2, 6),
                            opacity: p.random(0.1, 0.3)
                        });
                    }
                };

                p.draw = () => {
                    p.clear();
                    
                    // Update and draw particles
                    particles.forEach(particle => {
                        // Update position
                        particle.x += particle.vx;
                        particle.y += particle.vy;
                        
                        // Wrap around edges
                        if (particle.x < 0) particle.x = p.width;
                        if (particle.x > p.width) particle.x = 0;
                        if (particle.y < 0) particle.y = p.height;
                        if (particle.y > p.height) particle.y = 0;
                        
                        // Draw particle
                        p.fill(139, 154, 122, particle.opacity * 255);
                        p.noStroke();
                        p.ellipse(particle.x, particle.y, particle.size);
                    });
                    
                    // Draw connections
                    particles.forEach((particle, i) => {
                        particles.slice(i + 1).forEach(other => {
                            const distance = p.dist(particle.x, particle.y, other.x, other.y);
                            if (distance < 100) {
                                p.stroke(139, 154, 122, (1 - distance / 100) * 50);
                                p.strokeWeight(1);
                                p.line(particle.x, particle.y, other.x, other.y);
                            }
                        });
                    });
                };

                p.windowResized = () => {
                    const container = document.getElementById('particle-container');
                    if (container) {
                        p.resizeCanvas(container.offsetWidth, container.offsetHeight);
                    }
                };
            });
        }
    }

    // Mobile menu functionality
    setupMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                    mobileMenu.classList.add('hidden');
                }
            });
        }
    }

    // Skill bar animations
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillBar(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    animateSkillBar(skillBar) {
        const targetWidth = skillBar.style.width;
        skillBar.style.width = '0%';
        
        anime({
            targets: skillBar,
            width: targetWidth,
            duration: 1500,
            easing: 'easeOutCubic',
            delay: anime.stagger(100)
        });
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Utility function to add staggered animations
    static staggerAnimation(elements, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate');
            }, index * delay);
        });
    }

    // Counter animation for statistics
    static animateCounter(element, target, duration = 2000) {
        anime({
            targets: { count: 0 },
            count: target,
            duration: duration,
            easing: 'easeOutCubic',
            update: function(anim) {
                element.textContent = Math.floor(anim.animatables[0].target.count);
            }
        });
    }

    // Text splitting animations
    setupTextAnimations() {
        // Initialize Splitting.js for text animations
        if (typeof Splitting !== 'undefined') {
            Splitting();
            
            // Animate split text on scroll
            document.querySelectorAll('.splitting').forEach(element => {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const chars = entry.target.querySelectorAll('.char');
                            anime({
                                targets: chars,
                                opacity: [0, 1],
                                translateY: [20, 0],
                                delay: anime.stagger(50),
                                duration: 600,
                                easing: 'easeOutCubic'
                            });
                        }
                    });
                });
                
                observer.observe(element);
            });
        }
    }
}

// Project filter functionality (for projects page)
class ProjectFilter {
    constructor() {
        this.projects = [];
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupFilterButtons();
        this.setupProjectCards();
    }

    setupFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.filterProjects(filter);
                this.updateActiveButton(e.target);
            });
        });
    }

    setupProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        this.projects = Array.from(projectCards).map(card => ({
            element: card,
            categories: card.dataset.categories.split(',')
        }));
    }

    filterProjects(filter) {
        this.currentFilter = filter;
        
        this.projects.forEach(project => {
            const shouldShow = filter === 'all' || project.categories.includes(filter);
            
            if (shouldShow) {
                project.element.style.display = 'block';
                anime({
                    targets: project.element,
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    duration: 400,
                    easing: 'easeOutCubic'
                });
            } else {
                anime({
                    targets: project.element,
                    opacity: [1, 0],
                    scale: [1, 0.8],
                    duration: 300,
                    easing: 'easeInCubic',
                    complete: () => {
                        project.element.style.display = 'none';
                    }
                });
            }
        });
    }

    updateActiveButton(activeBtn) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
}

// Skills radar chart (for skills page)
class SkillsRadar {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (this.container) {
            this.chart = echarts.init(this.container);
            this.setupChart();
        }
    }

    setupChart() {
        const option = {
            title: {
                text: 'Technical Skills',
                left: 'center',
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            radar: {
                indicator: [
                    { name: 'Python', max: 100 },
                    { name: 'C++', max: 100 },
                    { name: 'Java', max: 100 },
                    { name: 'Machine Learning', max: 100 },
                    { name: 'Data Analysis', max: 100 },
                    { name: 'GUI Development', max: 100 },
                    { name: 'Database Design', max: 100 },
                    { name: 'Problem Solving', max: 100 }
                ],
                radius: '60%',
                axisName: {
                    color: '#666',
                    fontSize: 12
                },
                splitLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            },
            series: [{
                name: 'Skills',
                type: 'radar',
                data: [{
                    value: [85, 75, 70, 80, 85, 75, 70, 90],
                    name: 'Current Level',
                    areaStyle: {
                        color: 'rgba(139, 154, 122, 0.3)'
                    },
                    lineStyle: {
                        color: '#8B9A7A',
                        width: 2
                    },
                    itemStyle: {
                        color: '#8B9A7A'
                    }
                }],
                animationDuration: 2000,
                animationEasing: 'cubicOut'
            }]
        };

        this.chart.setOption(option);
        
        // Responsive resize
        window.addEventListener('resize', () => {
            this.chart.resize();
        });
    }
}

// Contact form validation and submission
class ContactForm {
    constructor(formId) {
        this.form = document.getElementById(formId);
        if (this.form) {
            this.setupValidation();
            this.setupSubmission();
        }
    }

    setupValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            message = 'This field is required';
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
        }

        this.updateFieldStatus(field, isValid, message);
        return isValid;
    }

    updateFieldStatus(field, isValid, message) {
        const errorElement = field.parentNode.querySelector('.error-message');
        
        if (isValid) {
            field.classList.remove('error');
            field.classList.add('success');
            if (errorElement) {
                errorElement.textContent = '';
            }
        } else {
            field.classList.remove('success');
            field.classList.add('error');
            if (errorElement) {
                errorElement.textContent = message;
            }
        }
    }

    setupSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = this.form.querySelectorAll('input, textarea');
            let isFormValid = true;
            
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });
            
            if (isFormValid) {
                this.submitForm();
            }
        });
    }

    async submitForm() {
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            this.showMessage('Message sent successfully!', 'success');
            this.form.reset();
            
        } catch (error) {
            // Show error message
            this.showMessage('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        this.form.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main CV website
    new CVWebsite();
    
    // Initialize project filter if on projects page
    if (document.querySelector('.filter-btn')) {
        new ProjectFilter();
    }
    
    // Initialize skills radar if on skills page
    if (document.getElementById('skills-radar')) {
        new SkillsRadar('skills-radar');
    }
    
    // Initialize contact form if on contact page
    if (document.getElementById('contact-form')) {
        new ContactForm('contact-form');
    }
    
    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Animate elements on load
        anime({
            targets: '.reveal',
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutCubic'
        });
    });
});

// Export classes for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CVWebsite,
        ProjectFilter,
        SkillsRadar,
        ContactForm
    };
}