// Demirdöğen Cam Balkon - JavaScript Etkileşimleri

// Mobil Menü İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Menü aç/kapa
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Menü linkine tıklandığında menüyü kapat
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Menü dışına tıklandığında menüyü kapat
    document.addEventListener('click', function(event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Smooth scroll düzeltmesi (sticky header nedeniyle)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Google Ads Olay Takibi (Hazır, henüz aktif değil)
  initTracking();
});

// Google Ads ve Analytics İçin Olay Takibi
function initTracking() {
  // dataLayer'i başlat (henüz aktif değilse)
  if (typeof window.dataLayer === 'undefined') {
    window.dataLayer = [];
  }

  // Telefon ve WhatsApp tıklamalarını takip et
  const trackedElements = document.querySelectorAll('[data-track]');
  
  trackedElements.forEach(element => {
    element.addEventListener('click', function(e) {
      const trackType = this.getAttribute('data-track');
      
      if (trackType === 'phone') {
        trackPhoneClick();
      } else if (trackType === 'whatsapp') {
        trackWhatsAppClick();
      }
    });
  });
}

// Telefon tıklama olayı
function trackPhoneClick() {
  // Google Ads etkin olduğunda aktif olacak
  if (window.SITE_CONFIG && window.SITE_CONFIG.googleAds.trackingEnabled) {
    window.dataLayer.push({
      event: window.SITE_CONFIG.googleAds.events.phoneClick,
      phone_number: window.SITE_CONFIG.phoneInternational
    });
  }
  
  // Konsola bilgi yaz (test için)
  console.log('Phone click tracked');
}

// WhatsApp tıklama olayı
function trackWhatsAppClick() {
  // Google Ads etkin olduğunda aktif olacak
  if (window.SITE_CONFIG && window.SITE_CONFIG.googleAds.trackingEnabled) {
    window.dataLayer.push({
      event: window.SITE_CONFIG.googleAds.events.whatsappClick,
      phone_number: window.SITE_CONFIG.phoneInternational
    });
  }
  
  // Konsola bilgi yaz (test için)
  console.log('WhatsApp click tracked');
}

// Escape tuşu ile menüyü kapat
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.focus();
    }
  }
});

// Sayfa yüklendiğinde header'ın pozisyonunu kontrol et
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
  }
}, { passive: true });
