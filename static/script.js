// Lang tabs
function switchLang(lang) {
    document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.abstract-text').forEach(t => t.classList.add('hidden'));
    document.getElementById('abstract-' + lang).classList.remove('hidden');
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// Lightbox Data (ใช้ Bridge variable จาก HTML)
const imgs = {
    prepare: { 
        src: window.IMAGE_PATHS.prepare, 
        caption: 'Workflow 1 · Data Preparation' 
    },
    system: { 
        src: window.IMAGE_PATHS.system, 
        caption: 'Workflow 2 · System Overview' 
    }
};

function openLightbox(key) {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightbox = document.getElementById('lightbox');

    if (imgs[key]) {
        lightboxImg.src = imgs[key].src;
        lightboxCaption.textContent = imgs[key].caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox(e) {
    const lightbox = document.getElementById('lightbox');
    if (!e || e.target !== document.getElementById('lightbox-img')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});