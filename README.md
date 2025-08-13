# موقع تسجيل الدخول - أكاديمية الروبيك
## Rubik Academy Login Site

موقع تسجيل دخول متطور لأكاديمية تعليم الروبيك مع دعم اللغة العربية والإنجليزية والوضع الليلي.

A modern login site for Rubik Academy with Arabic/English language support and dark mode.

## المميزات / Features

### 🌐 دعم اللغات / Language Support
- العربية (Arabic) - RTL support
- الإنجليزية (English) - LTR support
- تبديل فوري بين اللغات / Instant language switching

### 🌙 الوضع الليلي / Dark Mode
- وضع نهاري وليلي / Light and dark themes
- حفظ تفضيلات المستخدم / User preference saving
- انتقالات سلسة / Smooth transitions

### 🎨 التصميم / Design
- تصميم متجاوب / Responsive design
- مكعب روبيك ثلاثي الأبعاد متحرك / Animated 3D Rubik's cube
- تأثيرات بصرية متقدمة / Advanced visual effects
- ألوان متدرجة وظلال / Gradients and shadows




### 🔐 الأمان / Security
- تذكر المستخدم / Remember user functionality
- التحقق من صحة البيانات / Form validation

### ⚡ الأداء / Performance
- تحميل سريع / Fast loading
- كود محسن / Optimized code
- متوافق مع جميع المتصفحات / Cross-browser compatibility

## الملفات / Files

```
rubik-login-site/
├── index.html          # الصفحة الرئيسية / Main page
├── styles.css          # ملف التنسيق / Stylesheet
├── script.js           # ملف JavaScript / JavaScript file
├── dashboard.html      # صفحة لوحة التحكم بعد تسجيل الدخول / Dashboard page after login
└── README.md           # ملف التوثيق / Documentation
```

## كيفية الاستخدام / How to Use

### 1. فتح الموقع / Opening the Site
قم بفتح ملف `index.html` في أي متصفح ويب.
Open `index.html` in any web browser.

### 2. تبديل اللغة / Language Switching
اضغط على زر "EN" أو "عر" في الزاوية العلوية اليمنى.
Click the "EN" or "عر" button in the top-right corner.

### 3. تبديل الوضع / Theme Switching
اضغط على أيقونة القمر/الشمس لتبديل الوضع الليلي/النهاري.
Click the moon/sun icon to toggle dark/light mode.

### 4. تسجيل الدخول / Login
استخدم البيانات التجريبية:
Use demo credentials:
- **اسم المستخدم / Username:** newuser
- **كلمة المرور / Password:** newpass

## اختصارات لوحة المفاتيح / Keyboard Shortcuts

- `Alt + L` - تبديل اللغة / Toggle language
- `Alt + T` - تبديل الوضع / Toggle theme

## المتطلبات التقنية / Technical Requirements

- متصفح ويب حديث / Modern web browser
- دعم JavaScript / JavaScript enabled
- دعم CSS3 / CSS3 support

## المتصفحات المدعومة / Supported Browsers

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## الميزات المتقدمة / Advanced Features

### 🎭 التأثيرات البصرية / Visual Effects
- تأثيرات الحركة والانتقال / Animation and transition effects
- جسيمات متحركة في الخلفية / Floating background particles
- تأثير الموجة عند الضغط / Ripple effect on click
- ظلال ديناميكية / Dynamic shadows

### 📱 التصميم المتجاوب / Responsive Design
- متوافق مع الهواتف الذكية / Mobile-friendly
- متوافق مع الأجهزة اللوحية / Tablet-friendly
- تخطيط مرن / Flexible layout
- أحجام خطوط متكيفة / Adaptive font sizes

### 🔧 إعدادات المطور / Developer Settings
- كود منظم وموثق / Clean and documented code
- متغيرات CSS للتخصيص / CSS variables for customization
- هيكل معياري / Modular structure
- سهولة التطوير والتعديل / Easy to develop and modify

## التخصيص / Customization

### تغيير الألوان / Changing Colors
يمكنك تعديل الألوان من خلال متغيرات CSS في بداية ملف `styles.css`:
You can modify colors through CSS variables at the beginning of `styles.css`:

```css
:root {
    --primary-color: #ff6b35;
    --secondary-color: #f7931e;
    --accent-color: #4ecdc4;
    /* ... المزيد من المتغيرات / More variables */
}
```

### إضافة لغات جديدة / Adding New Languages
1. أضف خصائص `data-[language]` للعناصر
   Add `data-[language]` attributes to elements
2. حدث دالة `applyLanguage()` في `script.js`
   Update `applyLanguage()` function in `script.js`

## الدعم / Support

للحصول على المساعدة أو الإبلاغ عن مشاكل:
For help or to report issues:

- 📧 البريد الإلكتروني / Email: support@rubikacademy.com
- 🌐 الموقع الرسمي / Official website: www.rubikacademy.com

## الترخيص / License

هذا المشروع مرخص تحت رخصة MIT.
This project is licensed under the MIT License.

---

**تم التطوير بواسطة / Developed by:** Manus AI
**التاريخ / Date:** ديسمبر 2024 / December 2024
**الإصدار / Version:** 1.0.0

