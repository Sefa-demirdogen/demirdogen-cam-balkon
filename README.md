# Demirdöğen Cam Balkon Web Sitesi

Kahramanmaraş'ta cam balkon, PVC pencere-kapı, sineklik, duşakabin montajı ve tamirat hizmetleri için basit, hızlı ve mobil uyumlu web sitesi.

**Site yayında: https://demirdogen-cam-balkon.pages.dev**

## 📋 Özellikler

- **Statik Web Sitesi**: HTML5, CSS3 ve vanilla JavaScript ile oluşturulmuş
- **Mobil Uyumlu**: Tüm ekran boyutlarında düzgün çalışır
- **Hızlı**: Gereksiz bağımlılıklar yok, hızlı yüklenir
- **SEO Hazır**: Temel yerel SEO ve meta etiketleri içerir
- **Google Ads Hazır**: Dönüşüm takibi için altyapı hazır
- **WhatsApp ve Telefon Odaklı**: Müşterilerin kolayca iletişim kurması hedeflenmiş

## 🚀 Yerel Çalıştırma

Bu proje statik bir web sitesidir. Yerel olarak çalıştırmak için:

1. Projeyi klonlayın veya indirin
2. Herhangi bir web sunucusu kullanarak `index.html` dosyasını açın

### Basit HTTP Sunucusu (Python)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Tarayıcınızda `http://localhost:8000` adresini açın.

### VS Code Live Server

VS Code kullanıyorsanız "Live Server" eklentisini kurun ve `index.html` dosyasına sağ tıklayıp "Open with Live Server" seçeneğini seçin.

### Dosyayı Doğrudan Açma

`index.html` dosyasını çift tıklayarak tarayıcınızda doğrudan da açabilirsiniz.

## 📁 Dosya Yapısı

```
demirdogen-cam-balkon/
├── index.html          # Ana sayfa
├── styles.css          # CSS stilleri
├── script.js           # JavaScript etkileşimleri
├── site-config.js      # Site yapılandırması (merkezi ayarlar)
├── robots.txt          # Arama motoru yönergeleri
├── README.md           # Bu dosya
└── assets/
    └── demirdogen_logo.png  # Logo
```

## ⚙️ Yapılandırma

### İşletme Bilgilerini Değiştirme

Tüm işletme bilgileri `site-config.js` dosyasında merkezi olarak tutulur. Bu dosyayı düzenleyerek:

- Telefon numarası
- WhatsApp numarası
- Hizmet listesi
- SEO meta bilgileri
- Google Ads ayarları

gibi bilgileri kolayca güncelleyebilirsiniz.

```javascript
const SITE_CONFIG = {
  businessName: 'Demirdöğen Cam Balkon',
  phone: '0543 526 47 92',
  phoneInternational: '+905435264792',
  // ... diğer ayarlar
};
```

## 🧪 Test

### Manuel Testler

1. **HTML ve CSS Validasyonu**
   - W3C HTML Validator kullanarak HTML'yi kontrol edin
   - W3C CSS Validator kullanarak CSS'i kontrol edin

2. **Link Kontrolü**
   - Tüm linklerin çalıştığını kontrol edin
   - Telefon linki: `tel:+905435264792`
   - WhatsApp linki: `https://wa.me/905435264792`

3. **Mobil Test**
   - Chrome DevTools kullanarak mobil görünümü test edin
   - Farklı ekran boyutlarında kontrol edin
   - Mobil menünün açılıp kapandığını test edin

4. **Klavye Erişilebilirliği**
   - Tab tuşu ile navigasyonu test edin
   - Focus durumlarının görünür olduğunu kontrol edin
   - Escape tuşu ile menüyü kapatmayı test edin

5. **Cross-Browser Test**
   - Chrome, Firefox, Safari, Edge'de test edin
   - Mobil cihazlarda test edin

## 🌐 Yayınlama

### Ücretsiz Hosting Seçenekleri

#### 1. GitHub Pages (Önerilen)

1. GitHub'da yeni bir repository oluşturun
2. Projeyi bu repository'ye push edin
3. Repository ayarlarından "Pages" sekmesine gidin
4. Source olarak "main branch" seçin
5. Site `https://kullaniciadi.github.io/repo-adi` adresinde yayınlanır

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/kullaniciadi/repo-adi.git
git push -u origin main
```

#### 2. Netlify

1. Netlify.com hesabı oluşturun
2. "Drag and drop your site output folder here" bölümüne proje klasörünü sürükleyin
3. Site otomatik olarak yayınlanır
4. Ücretsiz subdomain alırsınız: `https://site-adi.netlify.app`

#### 3. Vercel

1. Vercel.com hesabı oluşturun
2. "Import Project" seçeneğini kullanın
3. GitHub repository'nizi bağlayın
4. Deploy butonuna tıklayın
5. Site otomatik olarak yayınlanır

#### 4. Cloudflare Pages

1. Cloudflare Pages hesabı oluşturun
2. "Create a project" seçeneğini seçin
3. GitHub repository'nizi bağlayın
4. Build ayarları (boş bırakılabilir, statik site)
5. Site yayınlanır

### Özel Alan Adı Bağlama

Özel alan adı (örn: `demirdogencambalkon.com`) satın aldıktan sonra:

1. Seçtiğiniz hosting platformunda domain ayarlarına gidin
2. "Custom domain" veya "Add domain" seçeneğini seçin
3. Alan adınızı girin
4. DNS ayarlarını platform'un belirttiği şekilde güncelleyin
5. SSL sertifikası otomatik olarak ayarlanır

## 📊 Google Ads Kurulumu

### 1. Google Ads Hesabı Oluşturma

1. [ads.google.com](https://ads.google.com) adresine gidin
2. Google hesabınızla giriş yapın
3. "Create an account" seçeneğini seçin
4. Hesap türü olarak "Organizations" seçin
5. İşletme bilgilerinizi girin
6. Faturalandırma bilgilerinizi ekleyin

### 2. Google Tag (GTag) Kurulumu

1. Google Ads hesabınıza gidin
2. "Tools & Settings" > "Measurement" > "Conversion actions"
3. "New conversion action" seçeneğini seçin
4. "Phone calls" veya "Website" conversion tipini seçin
5. Google Tag ID'yi (AW-XXXXXXXXX) kopyalayın

6. `index.html` dosyasında comment edilmiş Google Tag kodunu uncomment edin:

```html
<!-- 
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>
-->
```

7. `site-config.js` dosyasında ayarları güncelleyin:

```javascript
googleAds: {
  trackingEnabled: true,
  gtagId: 'AW-XXXXXXXXX', // Gerçek ID'yi buraya yapıştırın
  conversionId: '', // Dönüşüm kimliği (opsiyonel)
  events: {
    phoneClick: 'phone_click',
    whatsappClick: 'whatsapp_click'
  }
}
```

### 3. Dönüşüm Ölçümü Ayarlama

1. Google Ads hesabında "Tools & Settings" > "Measurement" > "Conversion actions"
2. Phone calls için conversion action oluşturun:
   - "Phone calls" > "Calls from ads" veya "Calls on your site"
   - Conversion name: "Phone Call"
   - Value: Opsiyonel
   - Count: "One" veya "Every"
3. WhatsApp için website conversion action oluşturun:
   - "Website" > "Click on a button or link"
   - Event category: "whatsapp"
   - Event action: "click"
4. Conversion tag'leri site'ye ekleyin

### 4. Arama Kampanyası Oluşturma

1. Google Ads hesabında "Campaigns" > "New Campaign"
2. Campaign type: "Search"
3. Campaign goal: "Leads" veya "Phone calls"
4. Hedef konumlar:
   - Kahramanmaraş (şehir)
   - Onikişubat ve Dulkadiroğlu (ilçeler)
5. Anahtar kelimeler (örnekler):
   - "cam balkon kahramanmaraş"
   - "pvc pencere onikişubat"
   - "sineklik dulkadiroğlu"
   - "duşakabin kahramanmaraş"
   - "cam balkon tamiratı"
6. Bütçe ve teklif ayarlarını yapın
7. Reklam metnini oluşturun
8. Kampanyayı başlatın

### 5. Dönüşüm Testi

1. Siteyi yayınlayın
2. Google Tag Assistant kullanarak tag'lerin çalıştığını test edin
3. Telefon ve WhatsApp düğmelerine tıklayın
4. Google Ads raporlarında conversion'ların kaydedildiğini kontrol edin

## 🔍 Google Search Console

### Kurulum

1. [search.google.com/search-console](https://search.google.com/search-console) adresine gidin
2. Google hesabınızla giriş yapın
3. "Add property" seçeneğini seçin
4. Site URL'nizi girin (örn: `https://demirdogencambalkon.com`)
5. Domain doğrulamasını yapın (DNS veya HTML meta tag ile)

### Sitemap Ekleme

Sitemap dosyası henüz oluşturulmadı. Gerekirse `sitemap.xml` oluşturulabilir. Tek sayfalı site olduğu için zorunlu değildir.

## 📱 Mobil İyileştirmeler

- Responsive tasarım
- Touch-friendly düğmeler
- Mobil menü
- Sabit iletişim çubuğu (mobilde)
- Optimize edilmiş görüntüler

## 🎨 Tasarım Notları

- Renk paleti: Mavi tonları (güven) ve nötr renkler
- Tipografi: Sistem fontları (hızlı yüklenme)
- Minimal ve sade tasarım
- Gerçek fotoğraflara odaklanma (logo hariç)

## 🔒 Gizlilik ve Çerezler

Şu anda aktif bir izleme sistemi yok. Google Ads veya Analytics eklendiğinde:

- GDPR/KVKK uyumluluğu sağlanmalı
- Çerez izni banner'ı eklenmeli
- Gizlilik politikası sayfası oluşturulmalı

## 📞 İletişim Bilgileri

- **Telefon**: 0543 526 47 92
- **WhatsApp**: https://wa.me/905435264792
- **Hizmet Bölgesi**: Kahramanmaraş (Onikişubat, Dulkadiroğlu ve çevre ilçeler)

## 🔄 Güncelleme Notları

- Telefon numarası değiştiğinde `site-config.js` dosyasını güncelleyin
- Yeni hizmet eklendiğinde `site-config.js` ve `index.html` dosyalarını güncelleyin
- Fotoğraflar eklendiğinde `assets/` klasörüne ekleyin ve HTML'de güncelleyin
- Google Ads hesabı oluşturulduğunda ilgili ayarları yapın

## 📄 Lisans

Bu proje Demirdöğen Cam Balkon için özel olarak oluşturulmuştur.

## 🤝 Destek

Sorularınız için işletme ile iletişime geçin:
- Telefon: 0543 526 47 92
- WhatsApp: https://wa.me/905435264792
