// Demirdöğen Cam Balkon - Site Yapılandırması
// Bu dosyada işletme bilgileri merkezi olarak tutulur
// Değerleri değiştirdiğinizde tüm site otomatik güncellenir

const SITE_CONFIG = {
  // İşletme Bilgileri
  businessName: 'Demirdöğen Cam Balkon',
  phone: '0543 526 47 92',
  phoneInternational: '+905435264792',
  phoneLink: 'tel:+905435264792',
  whatsappLink: 'https://wa.me/905435264792',
  whatsappMessage: 'Merhaba, Demirdöğen Cam Balkon hizmetleriniz hakkında bilgi almak istiyorum.',
  
  // Hizmet Bölgesi
  serviceArea: {
    city: 'Kahramanmaraş',
    primaryDistricts: ['Onikişubat', 'Dulkadiroğlu'],
    otherAreas: 'Çevre ilçelerde hizmet verilebilir'
  },
  
  // Hizmetler
  services: [
    {
      id: 'cam-balkon',
      name: 'Cam Balkon',
      description: 'Cam balkon montajı ve tamiratı hizmeti. Evinizin balkonunu kullanılabilir bir alan haline getiriyoruz.'
    },
    {
      id: 'pvc-pencere-kapi',
      name: 'PVC Pencere ve Kapı',
      description: 'PVC pencere ve kapı montajı ile tamiratı. Yüksek izolasyon ve uzun ömürlü kullanım.'
    },
    {
      id: 'aluminyum-korkuluk',
      name: 'Alüminyum Korkuluk',
      description: 'Teras ve balkon alüminyum korkuluk montajı. Dayanıklı ve estetik çözümler.'
    },
    {
      id: 'sineklik',
      name: 'Sineklik',
      description: 'Pencere ve kapı sineklik montajı ile tamiratı. Böcek koruması için pratik çözümler.'
    },
    {
      id: 'duşakabin',
      name: 'Duşakabin',
      description: 'Duşakabin montajı ve tamiratı. Banyonuz için modern ve su geçirmez çözümler.'
    },
    {
      id: 'plicell-perde',
      name: 'Plicell Perde',
      description: 'Plicell perde montajı. Pratik ve hijyenik perde çözümleri.'
    },
    {
      id: 'tamirat-bakim',
      name: 'Tamirat ve Bakım',
      description: 'Cam balkon, PVC pencere, sineklik ve diğer sistemlerin bakım, ayar ve tamirat hizmetleri.'
    }
  ],
  
  // SEO Meta Bilgileri
  seo: {
    title: 'Demirdöğen Cam Balkon | Kahramanmaraş Cam Balkon, PVC ve Tamirat Hizmetleri',
    description: 'Kahramanmaraş Onikişubat ve Dulkadiroğlu\'da cam balkon, PVC pencere-kapı, sineklik, duşakabin, alüminyum korkuluk montajı ve tamirat hizmetleri. WhatsApp ve telefonla iletişim.',
    keywords: 'cam balkon kahramanmaraş, pvc pencere kahramanmaraş, sineklik onikişubat, duşakabin dulkadiroğlu, cam balkon tamiratı, pvc tamirat'
  },
  
  // Google Ads Hazırlık (Henüz kullanılmıyor)
  googleAds: {
    trackingEnabled: false,
    gtagId: '', // Google Tag ID buraya eklenecek: AW-XXXXXXXXX
    conversionId: '', // Dönüşüm kimliği buraya eklenecek
    events: {
      phoneClick: 'phone_click',
      whatsappClick: 'whatsapp_click'
    }
  }
};

// dataLayer için hazır fonksiyonlar (Google Ads entegrasyonu için)
function trackEvent(eventName, additionalParams = {}) {
  if (window.dataLayer && SITE_CONFIG.googleAds.trackingEnabled) {
    window.dataLayer.push({
      event: eventName,
      ...additionalParams
    });
  }
}

// Export (Node.js ortamında kullanım için)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
