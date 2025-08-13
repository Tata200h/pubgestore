// Language and theme management
class SiteManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar';
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.applyLanguage(this.currentLanguage);
        this.applyTheme(this.currentTheme);
        this.setupFormValidation();
    }

    setupEventListeners() {
        const languageToggle = document.getElementById('languageToggle');
        languageToggle.addEventListener('click', () => this.toggleLanguage());

        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());

        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('password');
        togglePassword.addEventListener('click', () => this.togglePasswordVisibility(passwordInput, togglePassword));

        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => this.handleLogin(e));

        // أزلنا أحداث forgot-password و signup-link لأنها محذوفة من HTML

        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => this.addInputFocus(input));
            input.addEventListener('blur', () => this.removeInputFocus(input));
        });
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
        this.applyLanguage(this.currentLanguage);
        localStorage.setItem('language', this.currentLanguage);
    }

    applyLanguage(language) {
        const html = document.documentElement;
        const languageToggle = document.getElementById('languageToggle');

        html.setAttribute('lang', language);
        html.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');

        const toggleText = languageToggle.querySelector('span');
        toggleText.textContent = language === 'ar' ? 'EN' : 'عر';

        const elements = document.querySelectorAll('[data-ar], [data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${language}`);
            if (text) {
                if (element.tagName === 'INPUT') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        const placeholderElements = document.querySelectorAll('[data-ar-placeholder], [data-en-placeholder]');
        placeholderElements.forEach(element => {
            const placeholder = element.getAttribute(`data-${language}-placeholder`);
            if (placeholder) {
                element.placeholder = placeholder;
            }
        });

        const title = document.querySelector('title');
        const titleText = title.getAttribute(`data-${language}`);
        if (titleText) {
            title.textContent = titleText;
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        const html = document.documentElement;
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');

        html.setAttribute('data-theme', theme);

        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
            themeToggle.title = this.currentLanguage === 'ar' ? 'الوضع النهاري' : 'Light mode';
        } else {
            themeIcon.className = 'fas fa-moon';
            themeToggle.title = this.currentLanguage === 'ar' ? 'الوضع الليلي' : 'Dark mode';
        }
    }

    togglePasswordVisibility(passwordInput, toggleButton) {
        const icon = toggleButton.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            icon.className = 'fas fa-eye';
        }
    }

    addInputFocus(input) {
        const wrapper = input.closest('.input-wrapper');
        wrapper.style.transform = 'translateY(-1px)';
        wrapper.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.15)';
    }

    removeInputFocus(input) {
        const wrapper = input.closest('.input-wrapper');
        wrapper.style.transform = 'translateY(0)';
        wrapper.style.boxShadow = 'none';
    }

    setupFormValidation() {
        const inputs = document.querySelectorAll('input[required]');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateInput(input));
            input.addEventListener('input', () => this.clearInputError(input));
        });
    }

    validateInput(input) {
        const value = input.value.trim();
        this.clearInputError(input);
        if (!value) return false;
        return true;
    }

    clearInputError(input) {
        const wrapper = input.closest('.input-wrapper');
        const errorElement = wrapper.parentNode.querySelector('.input-error');
        if (errorElement) {
            errorElement.remove();
        }
        input.style.borderColor = '';
    }

    handleLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === 'mostafa' && password === '592006') {
            window.location.href = 'dashboard.html';
        }
        else {
        message.style.cssText = `         
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 12px;
        font-size: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1rem;
        font-family: inherit;
        `;
        message.textContent = "اسم المستخدم أو كلمة المرور غير صحيحة ❌";
    }
    }
}

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupParticleEffect();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        const animatedElements = document.querySelectorAll('.login-card, .logo-section');
        animatedElements.forEach(el => observer.observe(el));
    }

    setupHoverEffects() {
        const buttons = document.querySelectorAll('button, .social-btn');
        buttons.forEach(button => {
            button.addEventListener('click', this.createRipple);
        });
    }

    createRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupParticleEffect() {
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        `;
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createParticle(particleContainer);
            }, i * 200);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const duration = Math.random() * 20 + 10;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 107, 53, 0.1);
            border-radius: 50%;
            left: ${x}px;
            top: 100vh;
            animation: float ${duration}s linear infinite;
        `;

        container.appendChild(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, duration * 1000);
    }
}

const additionalStyles = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

document.addEventListener('DOMContentLoaded', () => {
    const siteManager = new SiteManager();
    const animationManager = new AnimationManager();
});
