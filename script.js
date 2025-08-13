// رقم واتساب (يجب تغييره لرقمك الحقيقي)
const WHATSAPP_NUMBER = "+201275379958"; // ضع رقمك هنا بدون + أو 00

// متغيرات اللغة والوضع
let currentLanguage = 'ar';
let currentTheme = 'light';

// النصوص بالعربية والإنجليزية
const translations = {
    ar: {
        orderMessage: (productName, price) => `${productName} مرحباً، أريد طلب شراء `,
        contactMessage: "مرحباً، أريد الاستفسار عن شدات",
        themeToggleTitle: "تبديل الوضع الليلي",
        languageToggleTitle: "تغيير اللغة"
    },
    en: {
        orderMessage: (productName, price) => `Hello, I want to order ${productName} for ${price} L.E`,
        contactMessage: "Hello, I would like to inquire about your US",
        themeToggleTitle: "Toggle Dark Mode",
        languageToggleTitle: "Change Language"
    }
};
const translation = {
    ar: {
        ordeRMessage: (productName, price) => `${productName} مرحباً، أريد طلب شراء `,
        contactMessage: "مرحباً، أريد الاستفسار عن شدات",
        themeToggleTitle: "تبديل الوضع الليلي",
        languageToggleTitle: "تغيير اللغة"
    },
    en: {
        orderMessage: (productName, price) => `Hello, I want to order ${productName} for ${price} L.E`,
        contactMessage: "Hello, I would like to inquire about your US",
        themeToggleTitle: "Toggle Dark Mode",
        languageToggleTitle: "Change Language"
    }
};
// وظيفة طلب منتج عبر واتساب
function orderProduct(productName, price) {
    const message = translations[currentLanguage].orderMessage(productName, price);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// وظيفة التواصل العام عبر واتساب
function contactWhatsApp() {
    const message = translations[currentLanguage].contactMessage;
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// وظيفة تبديل الوضع الليلي
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        icon.className = 'fas fa-sun';
        currentTheme = 'dark';
        localStorage.setItem('theme', 'dark');
    } else {
        body.removeAttribute('data-theme');
        icon.className = 'fas fa-moon';
        currentTheme = 'light';
        localStorage.setItem('theme', 'light');
    }
    
    // تحديث عنوان الزر
    themeToggle.title = translations[currentLanguage].themeToggleTitle;
}

// وظيفة تغيير اللغة
function toggleLanguage() {
    const html = document.documentElement;
    const languageToggle = document.getElementById('languageToggle');
    const langText = languageToggle.querySelector('.lang-text');
    
    if (currentLanguage === 'ar') {
        currentLanguage = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langText.textContent = 'ع';
        localStorage.setItem('language', 'en');
    } else {
        currentLanguage = 'ar';
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langText.textContent = 'EN';
        localStorage.setItem('language', 'ar');
    }
    
    // تحديث النصوص في الصفحة
    updatePageTexts();
    
    // تحديث عناوين الأزرار
    updateButtonTitles();
}

// وظيفة تحديث النصوص في الصفحة
function updatePageTexts() {
    const elements = document.querySelectorAll('[data-ar][data-en]');
    
    elements.forEach(element => {
        const arText = element.getAttribute('data-ar');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'ar') {
            element.textContent = arText;
        } else {
            element.textContent = enText;
        }
    });
}

// وظيفة تحديث عناوين الأزرار
function updateButtonTitles() {
    const themeToggle = document.getElementById('themeToggle');
    const languageToggle = document.getElementById('languageToggle');
    
    themeToggle.title = translations[currentLanguage].themeToggleTitle;
    languageToggle.title = translations[currentLanguage].languageToggleTitle;
}

// وظيفة تحميل الإعدادات المحفوظة
function loadSavedSettings() {
    // تحميل الوضع المحفوظ
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').querySelector('i').className = 'fas fa-sun';
        currentTheme = 'dark';
    }
    
    // تحميل اللغة المحفوظة
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        currentLanguage = 'en';
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        document.getElementById('languageToggle').querySelector('.lang-text').textContent = 'ع';
        updatePageTexts();
    }
    
    // تحديث عناوين الأزرار
    updateButtonTitles();
}

// تأثير التمرير السلس للروابط
document.addEventListener('DOMContentLoaded', function() {
    // تحميل الإعدادات المحفوظة
    loadSavedSettings();
    
    // إضافة مستمعي الأحداث لأزرار التحكم
    document.getElementById("themeToggle").addEventListener("click", toggleTheme);
    document.getElementById("languageToggle").addEventListener("click", toggleLanguage);

    // إضافة مستمع الحدث لزر الهامبرغر
    const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
    
    // إغلاق قائمة الهامبرغر عند النقر على رابط
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
    
    // إضافة تأثير التمرير السلس للروابط الداخلية
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // إضافة تأثير الظهور عند التمرير
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
    
    // مراقبة بطاقات المنتجات
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // إضافة تأثير hover للبطاقات
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // تأثير النقر على الأزرار
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // إضافة تأثير الموجة
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // إضافة تأثير التمرير للهيدر
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // التمرير لأسفل - إخفاء الهيدر
            header.style.transform = 'translateY(-100%)';
        } else {
            // التمرير لأعلى - إظهار الهيدر
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // إضافة تأثير الشفافية للهيدر عند التمرير
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        if (scrolled > 50) {
            if (currentTheme === 'dark') {
                header.style.backgroundColor = 'rgba(74, 85, 104, 0.95)';
            } else {
                header.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
            }
            header.style.backdropFilter = 'blur(10px)';
        } else {
            if (currentTheme === 'dark') {
                header.style.backgroundColor = 'rgba(74, 85, 104, 1)';
            } else {
                header.style.backgroundColor = 'rgba(102, 126, 234, 1)';
            }
            header.style.backdropFilter = 'none';
        }
    });
});

// إضافة CSS للتأثيرات الديناميكية
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .header {
        transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .product-card {
        transition: all 0.3s ease;
    }
    
    /* تأثيرات انتقال اللغة */
    [data-ar], [data-en] {
        transition: opacity 0.2s ease;
    }
    
    /* تحسينات للوضع الليلي */
    [data-theme="dark"] .control-btn {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
    }
    
    [data-theme="dark"] .control-btn:hover {
        background: rgba(255, 255, 255, 0.25);
    }
`;
document.head.appendChild(style);

// وظيفة لتحديث رقم واتساب (يمكن استخدامها لاحقاً)
function updateWhatsAppNumber(newNumber) {
    WHATSAPP_NUMBER = newNumber;
    console.log('تم تحديث رقم واتساب إلى:', newNumber);
}

// إضافة رسالة ترحيب عند تحميل الصفحة
window.addEventListener('load', function() {
    console.log('مرحباً بك في متجرنا البسيط!');
    console.log('لتغيير رقم واتساب، استخدم: updateWhatsAppNumber("رقمك الجديد")');
    console.log('الميزات الجديدة: الوضع الليلي وتغيير اللغة');
});

