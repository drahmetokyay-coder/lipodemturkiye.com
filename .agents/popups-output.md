# Lipödem Türkiye -- Popup, Modal ve Banner Stratejisi

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, cro-output.md, lead-magnets-output.md, marketing-psychology-output.md, web-design-output.md, copywriting-output.md
**Kapsam:** 7 popup/modal/banner tipi, tam Türkçe copy, tasarım brief, mobil adaptasyon, A/B test varyantları, analytics event'ler, frekans ve öncelik kuralları

---

## İÇİNDEKİLER

1. [Frekans ve Öncelik Kuralları](#1-frekans-ve-öncelik-kuralları)
2. [Exit-Intent Popup (Desktop)](#2-exit-intent-popup-desktop)
3. [Scroll-Trigger Popup](#3-scroll-trigger-popup)
4. [Timed Popup](#4-timed-popup)
5. [Sticky Top Banner](#5-sticky-top-banner)
6. [Sticky Bottom CTA Bar (Mobil)](#6-sticky-bottom-cta-bar-mobil)
7. [Newsletter Inline CTA](#7-newsletter-inline-cta)
8. [Semptom Testi Sonuç Popup](#8-semptom-testi-sonuç-popup)
9. [Teknik Uygulama Notları](#9-teknik-uygulama-notları)
10. [Analytics Event Kataloğu](#10-analytics-event-kataloğu)
11. [Lansman Öncesi Kontrol Listesi](#11-lansman-öncesi-kontrol-listesi)

---
---

## 1. Frekans ve Öncelik Kuralları

### 1.1 Genel Frekans Kuralları

| Kural | Detay | Teknik Uygulama |
|-------|-------|-----------------|
| **Max popup / kullanıcı / 7 gün** | 1 | localStorage key: `lt_popup_last_shown` (Unix timestamp) |
| **Sticky bar** | Her oturumda gösterilebilir | Kapatma 7 gün hatırlanır: `lt_topbar_dismissed` |
| **Sticky bottom CTA** | Daima gösterilebilir | Popup değil, navigasyon öğesi -- frekans kuralı dışı |
| **Inline CTA** | Daima gösterilebilir | Sayfa içeriğinin parçası -- frekans kuralı dışı |
| **Semptom testi sonuç popup** | Her test tamamlamada 1 kez | Oturum bazlı -- `lt_test_result_popup_shown` |

### 1.2 Popup Öncelik Sırası

Aynı kullanıcıda birden fazla popup tetiklendiğinde hangi popup gösterilir:

| Öncelik | Popup Tipi | Gerekçe |
|---------|-----------|---------|
| 1 (En yüksek) | Semptom testi sonuç popup | Endowment effect -- kullanıcı zaten sonucu gördü, sahiplenme anı |
| 2 | Exit-intent popup | Son şans -- kullanıcı ayrılmak üzere |
| 3 | Scroll-trigger popup | İlgi göstermekte -- %50 scroll = okuma niyeti |
| 4 | Timed popup | Pasif ilgi -- zaman geçirme ilgiyi garanti etmez |

**Uygulama mantığı:**
```
function shouldShowPopup(popupType) {
  const lastShown = localStorage.getItem('lt_popup_last_shown');
  const now = Date.now();
  const sevenDays = 7 * 24 * 60 * 60 * 1000;
  
  // 7 gün kuralı
  if (lastShown && (now - parseInt(lastShown)) < sevenDays) {
    return false;
  }
  
  // Kayıtlı kullanıcı kontrolü
  if (isRegisteredUser() && popupType !== 'premium_upsell') {
    return false;
  }
  
  // Mobilde exit-intent gösterme
  if (isMobile() && popupType === 'exit_intent') {
    return false;
  }
  
  return true;
}
```

### 1.3 Kullanıcı Durumuna Göre Popup Gösterimi

| Kullanıcı Durumu | Gösterilecek Popup'lar | Gösterilmeyecek Popup'lar |
|------------------|----------------------|--------------------------|
| **Anonim ziyaretçi (ilk ziyaret)** | Tüm popup'lar (frekans kuralına uygun) | -- |
| **Anonim ziyaretçi (geri dönen)** | Scroll-trigger, exit-intent (farklı LM ile) | Aynı LM teklifi tekrarlanmaz |
| **Email kayıtlı (ücretsiz)** | Premium upsell popup'ları | Lead magnet / newsletter popup'ları |
| **Premium abonelik (deneme)** | Deneme→ücretli dönüşüm teaser | Email kayıt popup'ları |
| **Premium abonelik (aktif)** | Hiçbir popup gösterilmez | Tüm popup'lar |
| **Semptom testi tamamlamış** | Sonuç popup + klinik yönlendirme | Semptom testi davet popup'ları |

### 1.4 Sayfa Tipi Kısıtlamaları

| Sayfa Tipi | Exit-Intent | Scroll-Trigger | Timed | Sticky Top | Sticky Bottom |
|------------|:-----------:|:--------------:|:-----:|:----------:|:-------------:|
| Ana sayfa | ✓ | -- | ✓ | ✓ | ✓ |
| Blog makaleleri | ✓ | ✓ | -- | ✓ | ✓ |
| Pillar sayfalar | ✓ | ✓ | -- | ✓ | ✓ |
| Tedavi sayfası | ✓ | -- | ✓ | ✓ | ✓ |
| Beslenme sayfası | ✓ | ✓ | -- | ✓ | ✓ |
| Egzersiz sayfası | ✓ | ✓ | -- | ✓ | ✓ |
| Ruh sağlığı sayfası | -- | -- | -- | ✓ | -- |
| Semptom testi (devam eden) | -- | -- | -- | -- | -- |
| Semptom testi sonuç | -- | -- | -- | -- | ✓ |
| Premium sayfası | -- | -- | -- | ✓ | ✓ |
| Klinik profili | -- | -- | -- | ✓ | ✓ |
| Ödeme akışı | -- | -- | -- | -- | -- |

**Ruh sağlığı sayfası notu:** Agresif popup'lar bu sayfada kullanılmaz. Sayfanın tonu empatik ve düşük basınçlı olmalıdır. Yalnızca sticky top banner (kalıcı duyuru) gösterilebilir.

**Semptom testi devam ederken notu:** Test sırasında hiçbir popup, banner veya overlay gösterilmez. Kullanıcının odağı bozulmaz.

---
---

## 2. Exit-Intent Popup (Desktop)

### 2.1 Tetikleyici Tanımı

| Parametre | Değer |
|-----------|-------|
| **Platform** | Sadece masaüstü |
| **Tetikleyici** | Fare imleci tarayıcı penceresinin üst sınırına hareket ettiğinde (`mouseout` event, clientY < 0) |
| **Gecikme** | Yok -- anında gösterilir |
| **Minimum sayfa süresi** | 10 saniye (10 sn altında exit-intent tetiklenmez -- bounce ziyaretçilere popup göstermenin anlamı yok) |
| **Mobil davranış** | Gösterilmez (mobilde exit-intent çalışmaz) |
| **Oturum başına gösterim** | Max 1 kez |
| **7 gün kuralı** | Evet -- son 7 günde herhangi bir popup gördüyse gösterilmez |

### 2.2 Sayfa Tipine Göre Lead Magnet Eşleştirmesi

| Sayfa Tipi | Sunulacak Lead Magnet | Gerekçe |
|------------|----------------------|---------|
| Ana sayfa | Lipödem Hasta Rehberi (30 sayfa PDF) | Genel giriş -- en kapsamlı kaynak |
| Lipödem nedir sayfası | Lipödem Hasta Rehberi (30 sayfa PDF) | Bilgi arayan kullanıcıya tam rehber |
| Beslenme sayfası / beslenme blogu | 7 Günlük Anti-İnflamatuar Beslenme Planı | Bağlamsal uyum -- beslenme arayan beslenme alır |
| Egzersiz sayfası / egzersiz blogu | Lipödem Egzersiz Başlangıç Programı | Bağlamsal uyum |
| Tedavi sayfası | Doktorunuza Sormanız Gereken 20 Soru | Tedavi araştıran kullanıcıya doktor hazırlık kiti |
| Belirtiler / tanı blogu | Lipödem Evre Değerlendirme Kontrol Listesi | Semptom araştıran kullanıcıya öz-değerlendirme aracı |
| Türkiye rehberi / SGK sayfası | Doktorunuza Sormanız Gereken 20 Soru | Doktor arayan kullanıcıya hazırlık kiti |
| Ruh sağlığı sayfası | Gösterilmez | Agresif popup uygun değil |
| Genel blog makalesi | Lipödem Hasta Rehberi (30 sayfa PDF) | Fallback -- en kapsamlı kaynak |

### 2.3 Popup Yapısı ve Copy

#### Varyant A (Kontrol) -- Lead Magnet Odaklı

```
┌──────────────────────────────────────────────────────┐
│                                              [X]     │
│                                                      │
│  ┌──────────┐                                        │
│  │  [PDF    │   Gitmeden Önce --                     │
│  │  Görsel] │   Ücretsiz Rehberinizi Alın            │
│  │          │                                        │
│  └──────────┘                                        │
│                                                      │
│  Lipödem hakkında bilmeniz gereken her şey            │
│  30 sayfalık kapsamlı rehberimizde.                  │
│                                                      │
│  Belirtiler, tedavi seçenekleri, beslenme,            │
│  egzersiz ve doktorunuza sormanız gereken             │
│  20 soru -- tek PDF'te.                              │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │  E-posta adresinizi yazın                │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │       Ücretsiz Rehberi İndir             │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  Bilgileriniz gizlidir. Spam göndermeyiz.            │
│                                                      │
│  Hayır, şimdi değil                                  │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Copy detayları:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Gitmeden Önce -- Ücretsiz Rehberinizi Alın |
| **Alt metin** | Lipödem hakkında bilmeniz gereken her şey 30 sayfalık kapsamlı rehberimizde. |
| **Detay metin** | Belirtiler, tedavi seçenekleri, beslenme, egzersiz ve doktorunuza sormanız gereken 20 soru -- tek PDF'te. |
| **Form alanı placeholder** | E-posta adresinizi yazın |
| **CTA buton** | Ücretsiz Rehberi İndir |
| **Güven notu** | Bilgileriniz gizlidir. Spam göndermeyiz. |
| **Reddetme linki** | Hayır, şimdi değil |

**Bağlama göre değişen copy (beslenme sayfasında):**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Gitmeden Önce -- Beslenme Planınızı Alın |
| **Alt metin** | Türk mutfağına uygun 7 günlük anti-inflamatuar beslenme planı. |
| **Detay metin** | Her öğün detaylı, alışveriş listesi dahil. Lipödem semptomlarınızı beslenme ile yönetmeye hemen başlayın. |
| **CTA buton** | Beslenme Planını İndir |

**Bağlama göre değişen copy (egzersiz sayfasında):**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Gitmeden Önce -- Egzersiz Programınızı Alın |
| **Alt metin** | 4 haftalık lipödeme özel güvenli hareket rehberi. |
| **Detay metin** | Hangi egzersizleri yapmalı, hangilerinden kaçınmalısınız? Evrenize uygun başlangıç programı hazır. |
| **CTA buton** | Egzersiz Programını İndir |

**Bağlama göre değişen copy (tedavi sayfasında):**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Gitmeden Önce -- Doktor Hazırlık Kitinizi Alın |
| **Alt metin** | Doktorunuza sormanız gereken 20 kritik soru. |
| **Detay metin** | Tanı, tedavi, takip ve maliyet hakkında doğru soruları sorun. Randevunuza hazırlıklı gidin. |
| **CTA buton** | Soru Listesini İndir |

#### Varyant B (A/B Test) -- Semptom Testi Odaklı

```
┌──────────────────────────────────────────────────────┐
│                                              [X]     │
│                                                      │
│        Gitmeden Önce -- 2 Dakikanızı Alabilir miyiz? │
│                                                      │
│  Bacaklarınızda neler olduğunu öğrenmeye              │
│  hazır mısınız?                                      │
│                                                      │
│  Bilimsel temelli semptom testimiz 2 dakika sürüyor,  │
│  anonim ve tamamen ücretsiz.                         │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │     Semptom Testini Başlat               │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  500+ kadın bu testi tamamladı                       │
│                                                      │
│  Şimdi değil, teşekkürler                            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Copy detayları (Varyant B):**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Gitmeden Önce -- 2 Dakikanızı Alabilir miyiz? |
| **Alt metin** | Bacaklarınızda neler olduğunu öğrenmeye hazır mısınız? |
| **Detay metin** | Bilimsel temelli semptom testimiz 2 dakika sürüyor, anonim ve tamamen ücretsiz. |
| **CTA buton** | Semptom Testini Başlat |
| **Sosyal kanıt** | 500+ kadın bu testi tamamladı |
| **Reddetme linki** | Şimdi değil, teşekkürler |

### 2.4 Tasarım Brief

| Parametre | Değer |
|-----------|-------|
| **Boyut** | 520px genişlik x otomatik yükseklik (max 480px) |
| **Konum** | Ekranın ortası (vertically + horizontally centered) |
| **Arka plan** | Beyaz (#FFFFFF) |
| **Köşe yuvarlaklığı** | 16px (rounded-2xl) |
| **Gölge** | shadow-2xl (0 25px 50px -12px rgba(0, 0, 0, 0.25)) |
| **Overlay** | Siyah %50 opaklık (rgba(0,0,0,0.5)) |
| **Animasyon** | Fade-in (overlay 200ms) + scale-up (modal 300ms, ease-out, 0.95→1.0) |
| **Kapatma butonu (X)** | 32x32px, sağ üst, neutral-400, hover: neutral-600 |
| **PDF görseli** | Sol tarafta veya üst tarafta, 120x160px, hafif gölge, -3deg rotation (eğik kitap efekti) |
| **Başlık font** | Inter Bold (700), 24px, neutral-800 |
| **Alt metin font** | Inter Regular (400), 16px, neutral-600 |
| **Form alanı** | Tek satır email input, 48px yükseklik, neutral-200 kenarlık, focus: teal-500 kenarlık |
| **CTA buton** | Tam genişlik, 48px yükseklik, teal-600 arka plan, beyaz metin, Inter SemiBold 16px |
| **CTA hover** | teal-700 arka plan |
| **Güven notu** | Inter Regular (400), 12px, neutral-400, center align |
| **Reddetme linki** | Inter Regular (400), 14px, neutral-500, underline, center align |
| **Kapatma davranışı** | X butonu tıklama VEYA overlay tıklama VEYA ESC tuşu |

**Renk vurguları:**
- Başlıktaki "Ücretsiz" kelimesi: teal-600 renkte
- CTA butonu: teal-600 (#0D9488) dolgu
- PDF görseli çerçevesi: teal-100 arka plan üzerinde

### 2.5 Mobil Adaptasyon

Exit-intent popup mobilde GOSTERİLMEZ. Mobilde exit-intent teknolojisi güvenilir çalışmaz. Mobil kullanıcılar için scroll-trigger ve timed popup alternatifleri mevcuttur.

### 2.6 A/B Test Planı

| Parametre | Detay |
|-----------|-------|
| **Test adı** | Exit-Intent Popup İçerik Testi |
| **Hipotez** | Semptom testi yönlendirmeli exit popup (Varyant B), lead magnet indirme popup'ına (Varyant A) göre daha yüksek genel etkileşim sağlar |
| **Birincil metrik** | Popup CTA tıklama oranı (CTA tıklama / popup gösterim) |
| **İkincil metrik** | Nihai dönüşüm oranı (email kaydı VEYA test başlatma / popup gösterim) |
| **Varyant A** | Lead magnet indirme -- email karşılığı PDF |
| **Varyant B** | Semptom testi yönlendirme -- doğrudan test sayfasına git |
| **Trafik bölüşümü** | %50 / %50 |
| **Tahmini süre** | 2-3 hafta (min 500 popup gösterimi / varyant) |
| **MDE** | %15 (minimum detectable effect) |
| **ICE skoru** | 7 x 6 x 9 = 378 |

### 2.7 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `exit_popup_triggered` | Popup gösterim koşulları karşılandı | `page_type`, `lead_magnet_type`, `variant` |
| `exit_popup_shown` | Popup kullanıcıya gösterildi | `page_type`, `lead_magnet_type`, `variant` |
| `exit_popup_closed` | X, overlay veya ESC ile kapatıldı | `page_type`, `close_method`, `time_visible_sec` |
| `exit_popup_dismissed` | "Hayır" linki tıklandı | `page_type`, `variant` |
| `exit_popup_email_submitted` | Email formu gönderildi (Varyant A) | `page_type`, `lead_magnet_type` |
| `exit_popup_cta_clicked` | CTA butonu tıklandı (Varyant B) | `page_type`, `destination` |
| `exit_popup_conversion` | Nihai dönüşüm gerçekleşti | `page_type`, `conversion_type`, `variant` |

---
---

## 3. Scroll-Trigger Popup

### 3.1 Tetikleyici Tanımı

| Parametre | Değer |
|-----------|-------|
| **Platform** | Masaüstü ve mobil |
| **Tetikleyici** | Sayfa scroll derinliği %50'ye ulaştığında |
| **Gösterim sayfaları** | Blog makaleleri ve pillar sayfalar |
| **Minimum sayfa süresi** | 15 saniye (çok hızlı scroll eden kullanıcılara gösterme) |
| **Oturum başına gösterim** | Max 1 kez |
| **7 gün kuralı** | Evet -- son 7 günde herhangi bir popup gördüyse gösterilmez |

### 3.2 İçerik Eşleştirme Kuralları

Blog makale kategorisine göre sunulacak lead magnet:

| Makale Kategorisi | Sunulacak Lead Magnet | CTA Metni |
|-------------------|----------------------|-----------|
| Beslenme makaleleri | 7 Günlük Anti-İnflamatuar Beslenme Planı | "Beslenme Planını İndir" |
| Egzersiz makaleleri | Lipödem Egzersiz Başlangıç Programı | "Egzersiz Programını İndir" |
| Belirtiler / tanı makaleleri | Lipödem Evre Değerlendirme Kontrol Listesi | "Kontrol Listesini İndir" |
| Tedavi / ameliyat makaleleri | Doktorunuza Sormanız Gereken 20 Soru | "Soru Listesini İndir" |
| Ruh sağlığı makaleleri | Lipödem Hasta Rehberi (30 sayfa) | "Hasta Rehberini İndir" |
| SGK / doktor makaleleri | Doktorunuza Sormanız Gereken 20 Soru | "Doktor Hazırlık Kitini İndir" |
| Genel / kategorisiz | Haftalık bülten kaydı | "Ücretsiz Abone Ol" |

### 3.3 Popup Yapısı ve Copy -- Slide-In Formatı

**Format seçimi:** Slide-in (sağ alt köşe) -- modal değil. Blog okuma deneyimini bozmadan ilgi çeker, overlay ile sayfa içeriğini kapatmaz.

#### Varyant A (Kontrol) -- Lead Magnet Slide-In

**Beslenme makalesi örneği:**

```
                            ┌──────────────────────────────┐
                            │                       [X]    │
                            │                              │
                            │  Bu Tür İçerikleri           │
                            │  Kaçırmayın                  │
                            │                              │
                            │  Türk mutfağına uygun         │
                            │  7 günlük anti-inflamatuar   │
                            │  beslenme planını ücretsiz    │
                            │  indirin.                    │
                            │                              │
                            │  ┌────────────────────────┐  │
                            │  │ E-posta adresiniz      │  │
                            │  └────────────────────────┘  │
                            │  ┌────────────────────────┐  │
                            │  │ Beslenme Planını İndir │  │
                            │  └────────────────────────┘  │
                            │                              │
                            │  Spam yok. İstediğiniz       │
                            │  zaman çıkabilirsiniz.       │
                            │                              │
                            └──────────────────────────────┘
```

**Bağlama göre copy varyasyonları:**

**Beslenme makalesinde:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Bu İçeriği Beğendiyseniz |
| **Alt metin** | Türk mutfağına uygun 7 günlük anti-inflamatuar beslenme planını ücretsiz indirin. Alışveriş listesi dahil. |
| **Form alanı** | E-posta adresiniz |
| **CTA buton** | Beslenme Planını İndir |
| **Güven notu** | Spam yok. İstediğiniz zaman çıkabilirsiniz. |

**Egzersiz makalesinde:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Okumaya Devam Edin, Hareket Etmeye de Başlayın |
| **Alt metin** | 4 haftalık lipödeme özel egzersiz başlangıç programını ücretsiz indirin. Kompresyon tavsiyeleri dahil. |
| **CTA buton** | Egzersiz Programını İndir |

**Belirtiler / tanı makalesinde:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Kendinizi Değerlendirin |
| **Alt metin** | Lipödem evre değerlendirme kontrol listesini indirin. Sonuçlarınızı doktorunuza gösterebilirsiniz. |
| **CTA buton** | Kontrol Listesini İndir |

**Tedavi makalesinde:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Doktorunuza Hazırlıklı Gidin |
| **Alt metin** | Doktorunuza sormanız gereken 20 kritik soru. Tanı, tedavi, maliyet ve takip soruları tek listede. |
| **CTA buton** | Soru Listesini İndir |

**Genel / bülten kaydı (fallback):**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Bu Tür İçerikleri Kaçırmayın |
| **Alt metin** | Haftalık lipödem bilgisi, yeni araştırma özetleri ve pratik ipuçları. Bültenimize ücretsiz abone olun. |
| **CTA buton** | Ücretsiz Abone Ol |

#### Varyant B (A/B Test) -- Tam Ekran Modal

Blog sayfalarında slide-in yerine merkezi modal kullanımı test edilecek. Aynı copy, farklı sunum formatı.

### 3.4 Tasarım Brief

**Slide-in (Varyant A):**

| Parametre | Değer |
|-----------|-------|
| **Boyut** | 360px genişlik x otomatik yükseklik |
| **Konum** | Sağ alt köşe, ekran kenarından 24px iç boşluk |
| **Arka plan** | Beyaz (#FFFFFF) |
| **Köşe yuvarlaklığı** | 12px (rounded-xl) |
| **Gölge** | shadow-xl (0 20px 25px -5px rgba(0,0,0,0.1)) |
| **Overlay** | YOK -- slide-in overlay kullanmaz |
| **Animasyon** | Sağ alttan kayarak gelme (slide-up, 400ms, ease-out, transform: translateY(100%) → translateY(0)) |
| **Kapatma butonu (X)** | 28x28px, sağ üst, neutral-400 |
| **Başlık font** | Inter SemiBold (600), 20px, neutral-800 |
| **Alt metin font** | Inter Regular (400), 14px, neutral-600 |
| **CTA buton** | Tam genişlik, 44px yükseklik, teal-600, beyaz metin |
| **Sol kenarlık** | 4px teal-500 sol kenarlık (markalama aksan çizgisi) |

**Tam ekran modal (Varyant B):**

| Parametre | Değer |
|-----------|-------|
| **Boyut** | 480px genişlik x otomatik yükseklik |
| **Konum** | Ekranın ortası |
| **Overlay** | Siyah %40 opaklık |
| **Animasyon** | Fade-in + scale-up (300ms) |
| Diğer | Exit-intent popup ile aynı tasarım dili |

### 3.5 Mobil Adaptasyon

Mobilde slide-in yerine **bottom sheet** formatı kullanılır:

| Parametre | Değer |
|-----------|-------|
| **Sunum** | Ekranın altından yukarı kayarak gelir |
| **Yükseklik** | Ekranın %40'ı |
| **Drag handle** | Üstte 40px genişliğinde gri çizgi |
| **Kapatma** | X butonu VEYA aşağı sürükleme |
| **Overlay** | Siyah %30 opaklık |
| **Animasyon** | Spring easing, 400ms, alttan yukarı |
| **Genişlik** | %100 ekran genişliği |
| **Köşe yuvarlaklığı** | Üst köşeler 20px, alt köşeler 0 |

```
┌─────────────────────────────────┐
│          [drag handle]          │
│                          [X]    │
│                                 │
│  Bu Tür İçerikleri Kaçırmayın   │
│                                 │
│  7 günlük anti-inflamatuar      │
│  beslenme planını ücretsiz      │
│  indirin.                       │
│                                 │
│  ┌───────────────────────────┐  │
│  │ E-posta adresiniz         │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  Beslenme Planını İndir   │  │
│  └───────────────────────────┘  │
│                                 │
└─────────────────────────────────┘
```

### 3.6 A/B Test Planı

| Parametre | Detay |
|-----------|-------|
| **Test adı** | Scroll-Trigger Format Testi: Slide-In vs Modal |
| **Hipotez** | Slide-in popup (sağ alt), tam ekran modal'a göre daha düşük kapatma oranı ve daha yüksek email dönüşümü sağlar (okuma deneyimini bozmadığı için) |
| **Birincil metrik** | Email kayıt oranı (kayıt / popup gösterim) |
| **İkincil metrik** | Popup kapatma oranı (kapatma / popup gösterim) |
| **Varyant A** | Slide-in (sağ alt köşe) |
| **Varyant B** | Tam ekran modal (overlay ile) |
| **Trafik bölüşümü** | %50 / %50 |
| **Tahmini süre** | 2-3 hafta |
| **ICE skoru** | 7 x 7 x 8 = 392 |

### 3.7 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `scroll_popup_triggered` | %50 scroll derinliğine ulaşıldı | `page_url`, `article_category`, `format` (slide_in / modal) |
| `scroll_popup_shown` | Popup gösterildi | `page_url`, `lead_magnet_type`, `format`, `variant` |
| `scroll_popup_closed` | Kapatıldı | `page_url`, `close_method`, `time_visible_sec` |
| `scroll_popup_email_submitted` | Email gönderildi | `page_url`, `lead_magnet_type` |
| `scroll_popup_conversion` | İndirme/kayıt tamamlandı | `page_url`, `conversion_type` |

---
---

## 4. Timed Popup

### 4.1 Tetikleyici Tanımı

| Parametre | Değer |
|-----------|-------|
| **Platform** | Masaüstü ve mobil |
| **Tetikleyici** | Sayfada 30-45 saniye geçirdikten sonra |
| **Varsayılan süre** | 35 saniye (A/B test ile optimize edilecek) |
| **Gösterim sayfaları** | Ana sayfa, tedavi sayfası |
| **Oturum başına gösterim** | Max 1 kez |
| **7 gün kuralı** | Evet |
| **Öncelik** | En düşük -- exit-intent veya scroll-trigger gösterilmişse timed popup iptal edilir |

### 4.2 İçerik: Semptom Testi Daveti

Timed popup tek bir amaca hizmet eder: semptom testine yönlendirme. Lead magnet değil, etkileşim hedefli.

#### Popup Copy

```
┌──────────────────────────────────────────────────────┐
│                                              [X]     │
│                                                      │
│              Lipödem Olabilir misiniz?                │
│                                                      │
│      2 Dakikada Öğrenin -- Ücretsiz ve Anonim        │
│                                                      │
│  Bacaklarınız diyet yapmanıza rağmen incelmiyor mu?   │
│  Dokunduğunuzda ağrı hissediyor musunuz?             │
│  Kolay morarıyor musunuz?                            │
│                                                      │
│  Bilimsel temelli semptom testimiz size               │
│  yol gösterebilir.                                   │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │      Semptom Testini Başlat              │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  Kayıt gerektirmez. Sonuçlarınızı doktorunuza        │
│  gösterebilirsiniz.                                  │
│                                                      │
│  Belki daha sonra                                    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Copy detayları:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Lipödem Olabilir misiniz? |
| **Alt başlık** | 2 Dakikada Öğrenin -- Ücretsiz ve Anonim |
| **Soru listesi** | Bacaklarınız diyet yapmanıza rağmen incelmiyor mu? / Dokunduğunuzda ağrı hissediyor musunuz? / Kolay morarıyor musunuz? |
| **Geçiş metni** | Bilimsel temelli semptom testimiz size yol gösterebilir. |
| **CTA buton** | Semptom Testini Başlat |
| **Güven notu** | Kayıt gerektirmez. Sonuçlarınızı doktorunuza gösterebilirsiniz. |
| **Reddetme linki** | Belki daha sonra |

#### Varyant B (A/B Test) -- Kişisel Soru Formatı

| Öğe | Metin |
|-----|-------|
| **Başlık** | Kendinizi Tanıyor musunuz? |
| **Alt başlık** | Bu 3 soru size tanıdık geliyorsa, 2 dakikanızı ayırın |
| **Soru listesi** | "Ne kadar diyet yapsam bacaklarım incelmiyor" / "Doktor 'kilo ver' diyor ama işe yaramıyor" / "Vücudum orantısız, üstüm ince altım kalın" |
| **CTA buton** | Durumumu Değerlendir |
| **Güven notu** | Anonim, bilimsel temelli, 2 dakika |
| **Reddetme linki** | Şimdi değil |

### 4.3 Tasarım Brief

| Parametre | Değer |
|-----------|-------|
| **Boyut** | 480px genişlik x otomatik yükseklik (max 520px) |
| **Konum** | Ekranın ortası |
| **Arka plan** | Beyaz (#FFFFFF), üst bölümde teal-50 (#F0FDFA) bantı |
| **Köşe yuvarlaklığı** | 16px |
| **Gölge** | shadow-2xl |
| **Overlay** | Siyah %45 opaklık |
| **Animasyon** | Fade-in (200ms) + slide-down (300ms, yukarıdan aşağı) |
| **Başlık font** | Inter Bold (700), 28px, neutral-800 |
| **Alt başlık** | Inter SemiBold (600), 18px, teal-600 |
| **Soru listesi** | Inter Regular (400), 15px, neutral-700, satır başında teal-400 tik ikonu |
| **CTA buton** | 280px genişlik, 52px yükseklik, teal-600, beyaz metin, Inter SemiBold 18px, center |
| **CTA hover** | teal-700 + subtle scale (1.02) |
| **Güven notu** | Inter Regular (400), 13px, neutral-500, center |
| **Reddetme** | Inter Regular (400), 14px, neutral-500, underline, center |
| **Dekoratif öğe** | Başlığın üstünde küçük soru işareti veya stetoskop ikonu (teal-300, 40x40px) |

### 4.4 Mobil Adaptasyon

| Parametre | Masaüstü | Mobil |
|-----------|----------|-------|
| **Sunum** | Merkezi modal | Bottom sheet |
| **Boyut** | 480px genişlik | %100 ekran genişliği |
| **Yükseklik** | Otomatik | Ekranın %50'si |
| **Başlık font** | 28px | 22px |
| **CTA buton** | 280px genişlik | %100 genişlik (tam genişlik) |
| **Kapatma** | X + overlay + ESC | X + aşağı sürükleme |
| **Animasyon** | Fade-in + slide-down | Alttan yukarı kayma |

### 4.5 A/B Test Planı

| Parametre | Detay |
|-----------|-------|
| **Test adı** | Timed Popup: Soru Formatı vs Doğrudan Davet |
| **Hipotez** | Kişisel soru formatı (Varyant B -- "bu size tanıdık geliyorsa") doğrudan davet (Varyant A -- "Lipödem olabilir misiniz?") formatına göre daha yüksek test başlatma oranı sağlar |
| **Birincil metrik** | Semptom testi başlatma oranı (test başlatma / popup gösterim) |
| **İkincil metrik** | Popup kapatma hızı (kapatma / gösterimden sonra geçen saniye) |
| **Tahmini süre** | 3 hafta |
| **ICE skoru** | 6 x 6 x 9 = 324 |

### 4.6 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `timed_popup_triggered` | Zamanlayıcı doldu | `page_type`, `delay_seconds`, `variant` |
| `timed_popup_shown` | Popup gösterildi | `page_type`, `variant` |
| `timed_popup_closed` | Kapatıldı | `page_type`, `close_method`, `time_visible_sec` |
| `timed_popup_cta_clicked` | CTA tıklandı | `page_type`, `variant` |
| `timed_popup_test_started` | Semptom testi başlatıldı (popup'tan) | `page_type`, `variant` |

---
---

## 5. Sticky Top Banner

### 5.1 Davranış Tanımı

| Parametre | Değer |
|-----------|-------|
| **Konum** | Sayfanın en üstü, navigasyon barının üstünde |
| **Gösterim** | Kalıcı -- sayfa yüklendiğinde hemen görünür |
| **Kapatma** | Kullanıcı X butonu ile kapatabilir |
| **Kapatma hafızası** | 7 gün -- `lt_topbar_dismissed` localStorage key'i ile |
| **Frekans kuralı dışı** | Evet -- sticky bar popup değildir, popup frekans kuralını tüketmez |
| **İçerik güncellemesi** | CMS üzerinden haftalık güncellenebilir |
| **Platform** | Masaüstü ve mobil |

### 5.2 İçerik Senaryoları

#### Senaryo 1: Kurucu Üyelik Duyurusu (Lansman Dönemi)

**Masaüstü:**
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  ★ Kurucu Üyelik -- Sınırlı Kontenjan! İlk 100 üyeye özel %40 indirim.  [Detayları Gör →]  [X] │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

| Öğe | Metin |
|-----|-------|
| **İkon** | Yıldız (★) veya amber rozet ikonu |
| **Ana metin** | Kurucu Üyelik -- Sınırlı Kontenjan! İlk 100 üyeye özel %40 indirim. |
| **CTA link** | Detayları Gör → |
| **CTA hedef** | /premium?ref=topbar_founder |

**Mobil:**
```
┌──────────────────────────────────────────────────────────────┐
│  ★ Kurucu Üyelik: İlk 100 üyeye %40 indirim  [Gör →]  [X] │
└──────────────────────────────────────────────────────────────┘
```

#### Senaryo 2: Kongre Duyurusu (Kongre Öncesi Dönem)

**Masaüstü:**
```
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│  📅 1. Ulusal Lipödem Kongresi -- 6-7 Haziran 2026, Ankara. Türkiye'nin ilk bilimsel lipödem etkinliği!  [Bilgi Al →]  [X] │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
```

| Öğe | Metin |
|-----|-------|
| **Ana metin** | 1. Ulusal Lipödem Kongresi -- 6-7 Haziran 2026, Ankara. Türkiye'nin ilk bilimsel lipödem etkinliği! |
| **CTA link** | Bilgi Al → |
| **CTA hedef** | /blog/lipodem-kongresi-2026 |

**Mobil:**
```
┌──────────────────────────────────────────────────────────┐
│  1. Lipödem Kongresi: 6-7 Haz, Ankara  [Detay →]  [X]   │
└──────────────────────────────────────────────────────────┘
```

#### Senaryo 3: Önemli İçerik Güncellemesi

**Masaüstü:**
```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  🔬 Yeni: 2025 Delphi Konsensüsü yayınlandı -- lipödem tanı ve tedavi standartları güncellendi.  [Okuyun →]  [X] │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Mobil:**
```
┌────────────────────────────────────────────────────────────────┐
│  Yeni: Lipödem tedavi standartları güncellendi  [Oku →]  [X]  │
└────────────────────────────────────────────────────────────────┘
```

#### Senaryo 4: Varsayılan (Hiçbir özel duyuru yokken)

**Masaüstü:**
```
┌────────────────────────────────────────────────────────────────────────────────────┐
│  Lipödem şüpheniz mi var? 2 dakikalık ücretsiz semptom testimizi deneyin.  [Teste Başla →]  [X] │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Mobil:**
```
┌─────────────────────────────────────────────────────────────┐
│  Semptom testini 2 dakikada tamamlayın  [Başla →]  [X]     │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Tasarım Brief

| Parametre | Masaüstü | Mobil |
|-----------|----------|-------|
| **Yükseklik** | 44px | 36px |
| **Arka plan** | teal-800 (#115E59) | teal-800 |
| **Metin rengi** | Beyaz (#FFFFFF) | Beyaz |
| **Metin font** | Inter Medium (500), 14px | Inter Medium (500), 12px |
| **CTA link rengi** | amber-300 (#FCD34D) | amber-300 |
| **CTA font** | Inter SemiBold (600), 14px, underline | Inter SemiBold (600), 12px, underline |
| **Kapatma butonu** | 20x20px, beyaz, opacity 70%, hover: opacity 100% | 18x18px |
| **Padding** | 8px 24px (sol/sağ) | 6px 16px |
| **İkon** | 18px, amber-300 veya beyaz, sol tarafta | 14px |
| **Metin hizalama** | Center | Center |
| **Z-index** | 1000 (navigasyonun üstünde) | 1000 |

**Kurucu üyelik varyantı (özel tasarım):**

| Parametre | Değer |
|-----------|-------|
| **Arka plan** | Amber gradyan (gradient-founder: #FBBF24 → #F59E0B → #D97706) |
| **Metin rengi** | neutral-900 (#1C1917) |
| **CTA link rengi** | neutral-900, bold, underline |
| **İkon** | Yıldız (★), neutral-900 |

### 5.4 Animasyon

| Parametre | Değer |
|-----------|-------|
| **Gösterim** | Sayfa yüklendiğinde hemen, animasyon yok (anında görünür) |
| **Kapatma** | Yukarı kayarak kapanma (slide-up, 200ms, ease-in) + sayfa içeriği otomatik yukarı kayma |
| **Kapatma sonrası** | Navigasyon otomatik olarak en üste oturur |

### 5.5 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `topbar_shown` | Banner gösterildi | `content_type` (founder / congress / update / default), `page_type` |
| `topbar_cta_clicked` | CTA link tıklandı | `content_type`, `destination_url` |
| `topbar_dismissed` | X ile kapatıldı | `content_type`, `time_visible_sec` |

---
---

## 6. Sticky Bottom CTA Bar (Mobil)

### 6.1 Davranış Tanımı

| Parametre | Değer |
|-----------|-------|
| **Platform** | Birincil olarak mobil; masaüstünde opsiyonel (bilgi sayfalarında) |
| **Konum** | Ekranın en altı, bottom navigation'ın üstünde |
| **Gösterim tetikleyicisi** | %25 scroll derinliği sonrası (CRO çıktısına uyumlu) |
| **Gizleme** | Yukarı scroll yapıldığında gizlenir; aşağı scroll yapıldığında tekrar görünür |
| **Sayfa sonu davranışı** | Sayfanın son CTA bölümüne ulaşıldığında gizlenir (çift CTA çakışması önlenir) |
| **Frekans kuralı** | Popup değil, navigasyon öğesi -- frekans kuralı dışı, daima gösterilebilir |
| **Kapatma** | Yok -- kapatma butonu yoktur; scroll yönüne göre otomatik gizleme |

### 6.2 Sayfa Tipine Göre CTA İçeriği

| Sayfa Tipi | CTA Metni | CTA Hedefi | İkon |
|------------|-----------|-----------|------|
| **Blog makaleleri** | Semptom Testini Çöz | /araclar/semptom-testi | Soru işareti ikonu (teal) |
| **Lipödem nedir sayfası** | Semptom Testini Çöz | /araclar/semptom-testi | Soru işareti ikonu |
| **Beslenme sayfası** | Beslenme Planını İndir | /rehber/7-gunluk-beslenme-plani | İndirme ikonu |
| **Egzersiz sayfası** | Egzersiz Programını İndir | /rehber/egzersiz-programi | İndirme ikonu |
| **Tedavi sayfası** | Klinik Bul | /klinik-bulucu | Harita pin ikonu |
| **Türkiye rehberi** | Klinik Bul | /klinik-bulucu | Harita pin ikonu |
| **Premium sayfası** | Denemeye Başla | /premium/kayit | Yıldız ikonu |
| **Klinik profili** | Randevu Talep Et | Klinik iletişim formu | Telefon ikonu |
| **Semptom testi sonucu** | Uzman Bul | /klinik-bulucu | Harita pin ikonu |
| **Ruh sağlığı sayfası** | Gösterilmez | -- | -- |
| **Semptom testi (devam eden)** | Gösterilmez | -- | -- |
| **Ödeme akışı** | Gösterilmez | -- | -- |

**Test tamamlamış kullanıcı istisnası:** Test tamamlamış kullanıcılara blog ve bilgi sayfalarında "Semptom Testini Çöz" yerine "Uzman Bulun" gösterilir (localStorage: `lt_test_completed`).

### 6.3 Yapı ve Copy

```
┌─────────────────────────────────────────────────────┐
│  [?] Lipödem şüpheniz mi var?  [Semptom Testi -- 2 dk] │
└─────────────────────────────────────────────────────┘
```

**Blog sayfası detaylı copy:**

| Öğe | Metin |
|-----|-------|
| **Sol metin** | Lipödem şüpheniz mi var? |
| **CTA buton** | Semptom Testi -- 2 dk |

**Tedavi sayfası:**

| Öğe | Metin |
|-----|-------|
| **Sol metin** | Doğru uzmana ulaşın |
| **CTA buton** | Klinik Bul |

**Premium sayfası:**

| Öğe | Metin |
|-----|-------|
| **Sol metin** | Kişisel programınızı oluşturun |
| **CTA buton** | Denemeye Başla |

**Klinik profili (mobil özel):**

| Öğe | Metin |
|-----|-------|
| **Sol metin** | -- (buton tam genişlik) |
| **CTA buton** | Ara: 0XXX XXX XX XX |

### 6.4 Tasarım Brief

| Parametre | Değer |
|-----------|-------|
| **Yükseklik** | 56px |
| **Genişlik** | %100 ekran genişliği |
| **Arka plan** | Beyaz (#FFFFFF) |
| **Üst kenarlık** | 1px teal-200 (#99F6E4) |
| **Gölge** | shadow-md yukarı yönlü (0 -4px 6px -1px rgba(0,0,0,0.07)) |
| **Padding** | 8px 16px |
| **Sol metin** | Inter Regular (400), 14px, neutral-600 |
| **CTA buton** | teal-600 arka plan, beyaz metin, Inter SemiBold (600) 14px, 40px yükseklik, 8px border-radius |
| **İkon** | 18px, CTA butonunun solunda (buton içinde) |
| **Z-index** | 900 (bottom navigation altında, sayfa içeriğinin üstünde) |
| **Gösterim animasyonu** | Aşağıdan kayarak gelme (slide-up, 300ms, ease-out) |
| **Gizleme animasyonu** | Aşağıya kayarak gitme (slide-down, 200ms, ease-in) |
| **Scroll direction detection** | 50ms debounce ile scroll yönü algılama |

**Masaüstü varyantı (bilgi sayfalarında):**

| Parametre | Değer |
|-----------|-------|
| **Gösterim** | Sadece bilgi sayfalarında (lipödem nedir, tedavi, beslenme, egzersiz) |
| **Konum** | Ekranın altı, tam genişlik |
| **CTA buton genişliği** | Otomatik (metin genişliğine göre), min 200px |
| **Sol metin + CTA** | Merkeze hizalı |

### 6.5 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `sticky_bottom_shown` | Bar görünür oldu (%25 scroll) | `page_type`, `cta_text`, `device` |
| `sticky_bottom_cta_clicked` | CTA buton tıklandı | `page_type`, `cta_text`, `destination_url` |
| `sticky_bottom_hidden` | Bar gizlendi (yukarı scroll veya sayfa sonu) | `page_type`, `hide_reason` (scroll_up / page_end) |

---
---

## 7. Newsletter Inline CTA

### 7.1 Davranış Tanımı

| Parametre | Değer |
|-----------|-------|
| **Platform** | Masaüstü ve mobil |
| **Konum** | Blog makalelerinin ortasında (yaklaşık %50 scroll noktasında, doğal paragraf kırılmasında) |
| **Tetikleyici** | Yok -- statik içerik öğesi, her zaman görünür |
| **Frekans** | Popup değil -- her makale ziyaretinde gösterilir |
| **Hedef** | Email bülten kaydı |

### 7.2 Yapı ve Copy

```
───────────────────────────────────────────────
                (içerik devam ediyor)
───────────────────────────────────────────────

┌──────────────────────────────────────────────┐
│                                              │
│  Bu tür içerikleri kaçırmayın.               │
│                                              │
│  Haftalık lipödem bilgisi, yeni araştırma     │
│  özetleri ve pratik ipuçları -- doğrudan      │
│  e-posta kutunuza.                           │
│                                              │
│  ┌──────────────────────┐ ┌────────────────┐ │
│  │ E-posta adresiniz    │ │ Abone Ol       │ │
│  └──────────────────────┘ └────────────────┘ │
│                                              │
│  Spam yok, istediğiniz zaman çıkabilirsiniz. │
│                                              │
└──────────────────────────────────────────────┘

───────────────────────────────────────────────
                (içerik devam ediyor)
───────────────────────────────────────────────
```

**Copy detayları:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Bu tür içerikleri kaçırmayın. |
| **Alt metin** | Haftalık lipödem bilgisi, yeni araştırma özetleri ve pratik ipuçları -- doğrudan e-posta kutunuza. |
| **Form alanı placeholder** | E-posta adresiniz |
| **CTA buton** | Abone Ol |
| **Güven notu** | Spam yok, istediğiniz zaman çıkabilirsiniz. |

**Başarı durumu (form gönderildikten sonra):**

```
┌──────────────────────────────────────────────┐
│                                              │
│  ✓ Kaydınız alındı!                          │
│                                              │
│  Hoş geldiniz. İlk bülteniniz bu hafta       │
│  e-posta kutunuza ulaşacak.                  │
│                                              │
└──────────────────────────────────────────────┘
```

### 7.3 Tasarım Brief

| Parametre | Değer |
|-----------|-------|
| **Genişlik** | İçerik genişliği ile aynı (max 720px) |
| **Arka plan** | teal-50 (#F0FDFA) |
| **Kenarlık** | Sol kenarlık 4px teal-400 (#2DD4BF) |
| **Köşe yuvarlaklığı** | 8px (rounded-lg) |
| **Padding** | 24px (masaüstü), 16px (mobil) |
| **Başlık font** | Inter SemiBold (600), 18px, neutral-800 |
| **Alt metin font** | Inter Regular (400), 15px, neutral-600 |
| **Form layout** | Masaüstü: email + buton yan yana (inline) / Mobil: üst üste (stacked) |
| **Email input** | Beyaz arka plan, neutral-200 kenarlık, 44px yükseklik, focus: teal-500 kenarlık |
| **CTA buton** | teal-600 arka plan, beyaz metin, 44px yükseklik, Inter SemiBold 15px |
| **CTA hover** | teal-700 |
| **Güven notu** | Inter Regular (400), 12px, neutral-400 |
| **Margin (üst/alt)** | 32px (içerikten ayrılma) |
| **Gölge** | Yok -- içerikle uyumlu, bölücü değil |

**Mobil layout:**

```
┌─────────────────────────────────────┐
│                                     │
│  Bu tür içerikleri kaçırmayın.      │
│                                     │
│  Haftalık lipödem bilgisi ve         │
│  pratik ipuçları.                   │
│                                     │
│  ┌───────────────────────────────┐  │
│  │ E-posta adresiniz             │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │         Abone Ol              │  │
│  └───────────────────────────────┘  │
│                                     │
│  Spam yok, istediğiniz zaman        │
│  çıkabilirsiniz.                    │
│                                     │
└─────────────────────────────────────┘
```

### 7.4 İçerik Uyumu Kuralları

Inline CTA, makale konusuna göre hafif kişiselleştirilebilir:

| Makale Kategorisi | Başlık Varyantı | Alt Metin Varyantı |
|-------------------|----------------|-------------------|
| Beslenme | Bu tür beslenme içeriklerini kaçırmayın. | Haftalık anti-inflamatuar tarifler, besin önerileri ve beslenme ipuçları. |
| Egzersiz | Hareket etmeye devam edin. | Lipödeme uygun egzersiz rehberleri, yeni araştırmalar ve pratik ipuçları. |
| Genel | Bu tür içerikleri kaçırmayın. | Haftalık lipödem bilgisi, yeni araştırma özetleri ve pratik ipuçları. |

### 7.5 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `inline_cta_viewed` | CTA viewport'a girdi (IntersectionObserver) | `page_url`, `article_category` |
| `inline_cta_email_submitted` | Email gönderildi | `page_url`, `article_category` |
| `inline_cta_conversion` | Kayıt tamamlandı | `page_url` |

---
---

## 8. Semptom Testi Sonuç Popup

### 8.1 Tetikleyici Tanımı

| Parametre | Değer |
|-----------|-------|
| **Platform** | Masaüstü ve mobil |
| **Tetikleyici** | Semptom testi sonuç sayfası yüklendikten 3 saniye sonra |
| **Neden 3 saniye gecikme** | Kullanıcı önce sonucunu görsün, sindiremsin. Endowment effect oluşması için sonucu "sahiplenmesi" gerekir. |
| **Gösterim koşulu** | Kullanıcı henüz email vermemişse (anonim) |
| **Kayıtlı kullanıcıya** | Gösterilmez -- zaten emailini biliyoruz |
| **Oturum başına** | Max 1 kez |
| **7 gün kuralı** | Bu popup için geçerli DEĞİL -- her yeni test tamamlamada gösterilir (test tamamlama nadir bir olay) |

### 8.2 Psikolojik Temel: Endowment Effect

Kullanıcı semptom testini tamamladı ve sonucunu gördü. Bu noktada:

1. **Sunk cost (batık maliyet):** 2 dakika emek harcadı, 12 soru cevapladı
2. **Endowment effect (sahiplenme):** Sonuç "onun sonucu" -- kişiselleştirilmiş, ona özel
3. **Loss aversion (kayıptan kaçınma):** Sonucu kaybetmek istemez -- PDF ile kalıcı hale getirebilir
4. **Reciprocity (karşılıklılık):** Platform ona değerli bir sonuç verdi -- email vererek karşılık vermek doğal hisseder

Bu popup, tüm funnel'daki en yüksek dönüşüm oranına sahip olmalıdır. Hedef: %30-45 email dönüşümü.

### 8.3 Popup Yapısı ve Copy

#### Varyant A (Kontrol) -- PDF İndirme Odaklı

```
┌──────────────────────────────────────────────────────┐
│                                              [X]     │
│                                                      │
│         Sonucunuz Hazır!                             │
│                                                      │
│  Sonuçlarınızı PDF olarak kaydedin --                │
│  doktorunuza gösterebilirsiniz.                      │
│                                                      │
│  PDF raporunuzda:                                    │
│  ✓ Kişisel risk değerlendirmeniz                     │
│  ✓ Cevaplarınızın detaylı analizi                    │
│  ✓ Doktorunuza gösterebileceğiniz özet               │
│  ✓ Önerilen sonraki adımlar                          │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │  E-posta adresinizi yazın                │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  ┌──────────────────────────────────────────┐        │
│  │    Sonuçlarımı PDF Olarak Gönder         │        │
│  └──────────────────────────────────────────┘        │
│                                                      │
│  Raporunuz anında e-posta adresinize ulaşır.         │
│  Bilgileriniz güvendedir.                            │
│                                                      │
│  PDF istemiyorum, sonuçlarımı gördüm                 │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Copy detayları:**

| Öğe | Metin |
|-----|-------|
| **Başlık** | Sonucunuz Hazır! |
| **Alt metin** | Sonuçlarınızı PDF olarak kaydedin -- doktorunuza gösterebilirsiniz. |
| **Değer listesi** | Kişisel risk değerlendirmeniz / Cevaplarınızın detaylı analizi / Doktorunuza gösterebileceğiniz özet / Önerilen sonraki adımlar |
| **Form alanı placeholder** | E-posta adresinizi yazın |
| **CTA buton** | Sonuçlarımı PDF Olarak Gönder |
| **Güven notu** | Raporunuz anında e-posta adresinize ulaşır. Bilgileriniz güvendedir. |
| **Reddetme linki** | PDF istemiyorum, sonuçlarımı gördüm |

#### Varyant B (A/B Test) -- Detaylı Rapor Vurgusu

| Öğe | Metin |
|-----|-------|
| **Başlık** | Detaylı Raporunuzu Alın |
| **Alt metin** | Ekranda gördüğünüz özet sonuç. Detaylı raporunuzda çok daha fazlası var. |
| **Değer listesi** | Her soruya verdiğiniz cevabın detaylı açıklaması / Evrenize özel beslenme ve egzersiz önerileri / Doktorunuz için hazırlanmış klinik özet / Şehrinizdeki uzmanların listesi |
| **CTA buton** | Detaylı Raporumu İndir |
| **Reddetme linki** | Özet sonuç yeterli |

### 8.4 Tasarım Brief

| Parametre | Değer |
|-----------|-------|
| **Boyut** | 500px genişlik x otomatik yükseklik |
| **Konum** | Ekranın ortası |
| **Arka plan** | Beyaz (#FFFFFF) |
| **Üst dekorasyon** | teal-500 → teal-600 gradient şerit (4px yükseklik) üst kenarda |
| **Köşe yuvarlaklığı** | 16px |
| **Gölge** | shadow-2xl |
| **Overlay** | Siyah %40 opaklık |
| **Animasyon** | Fade-in (200ms) + scale-up (300ms, 0.9→1.0, spring easing) |
| **Başlık font** | Inter Bold (700), 26px, neutral-800 |
| **Başlık yanı ikon** | Teal tik ikonu (✓) veya belge ikonu, 28px |
| **Alt metin font** | Inter Regular (400), 16px, neutral-600 |
| **Değer listesi** | Inter Regular (400), 15px, neutral-700, sol tarafta teal-500 tik ikonu (✓) |
| **Liste öğeleri arası** | 8px boşluk |
| **CTA buton** | Tam genişlik, 52px yükseklik, teal-600, beyaz metin, Inter SemiBold 17px |
| **CTA hover** | teal-700 + hafif gölge artışı |
| **Güven notu** | Inter Regular (400), 13px, neutral-400, center |
| **Reddetme** | Inter Regular (400), 14px, neutral-500, underline, center |

### 8.5 Mobil Adaptasyon

| Parametre | Masaüstü | Mobil |
|-----------|----------|-------|
| **Sunum** | Merkezi modal | Bottom sheet (%60 ekran yüksekliği) |
| **Genişlik** | 500px | %100 |
| **Başlık font** | 26px | 22px |
| **CTA buton** | Tam genişlik, 52px | Tam genişlik, 48px |
| **Kapatma** | X + overlay + ESC | X + aşağı sürükleme |
| **Drag handle** | Yok | Üstte gri çizgi |

### 8.6 A/B Test Planı

| Parametre | Detay |
|-----------|-------|
| **Test adı** | Test Sonuç Popup: PDF Kaydetme vs Detaylı Rapor |
| **Hipotez** | "Detaylı rapor" vurgusu (Varyant B), basit "PDF kaydet" (Varyant A) vurgusuna göre daha yüksek email dönüşümü sağlar (daha fazla değer algısı) |
| **Birincil metrik** | Email kayıt oranı (email veren / popup gören) |
| **İkincil metrik** | PDF açma oranı (gönderilen email'deki PDF linkini tıklayan / email gönderilen) |
| **Trafik bölüşümü** | %50 / %50 |
| **Tahmini süre** | 3-4 hafta (min 200 test tamamlama / varyant) |
| **ICE skoru** | 9 x 7 x 8 = 504 |

### 8.7 Analytics Event'ler

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `test_result_popup_shown` | Popup gösterildi (3 sn sonra) | `risk_level` (low / medium / high), `variant` |
| `test_result_popup_closed` | Kapatıldı | `close_method`, `time_visible_sec` |
| `test_result_popup_dismissed` | Reddetme linki tıklandı | `risk_level`, `variant` |
| `test_result_email_submitted` | Email gönderildi | `risk_level`, `variant` |
| `test_result_pdf_sent` | PDF email'i gönderildi | `risk_level` |
| `test_result_pdf_opened` | PDF email'indeki link tıklandı | `risk_level` |

---
---

## 9. Teknik Uygulama Notları

### 9.1 localStorage Anahtar Yapısı

| Key | Değer Tipi | Açıklama |
|-----|-----------|----------|
| `lt_popup_last_shown` | Unix timestamp (ms) | Son popup gösterim zamanı -- 7 gün kuralı |
| `lt_popup_last_type` | string | Son gösterilen popup tipi (exit_intent / scroll / timed) |
| `lt_topbar_dismissed` | Unix timestamp (ms) | Sticky top banner kapatma zamanı -- 7 gün hatırlanır |
| `lt_test_completed` | boolean | Semptom testi tamamlandı mı |
| `lt_test_result_popup_shown` | boolean | Oturum bazlı -- test sonuç popup'ı gösterildi mi |
| `lt_user_registered` | boolean | Kullanıcı email kaydı yaptı mı |
| `lt_user_premium` | boolean | Kullanıcı premium abone mi |
| `lt_popup_variant` | string | A/B test varyant ataması (A veya B) |

### 9.2 Popup Gösterim Kontrol Akışı

```
Sayfa yüklendi
    │
    ├── lt_user_premium === true? → Hiçbir popup gösterme (ÇIKIŞ)
    │
    ├── Ödeme akışı veya semptom testi devam sayfası mı? → Hiçbir popup gösterme (ÇIKIŞ)
    │
    ├── Ruh sağlığı sayfası mı? → Sadece sticky top banner (popup'lar KAPALI)
    │
    ├── lt_popup_last_shown < 7 gün önce? → Popup gösterme (banner ve sticky bar hariç)
    │
    ├── lt_user_registered === true? → Sadece premium upsell popup gösterebilir
    │
    └── Popup öncelik sırası ile devam et:
        │
        ├── Semptom testi sonuç sayfası? → Test sonuç popup (3 sn sonra)
        │   └── Gösterildi → lt_popup_last_shown güncelle → ÇIKIŞ
        │
        ├── Masaüstü + Exit-intent tetiklendi? → Exit popup göster
        │   └── Gösterildi → lt_popup_last_shown güncelle → ÇIKIŞ
        │
        ├── Blog/pillar + %50 scroll? → Scroll-trigger popup göster
        │   └── Gösterildi → lt_popup_last_shown güncelle → ÇIKIŞ
        │
        └── Ana sayfa/tedavi + 35 sn geçti? → Timed popup göster
            └── Gösterildi → lt_popup_last_shown güncelle → ÇIKIŞ
```

### 9.3 A/B Test Altyapısı

| Parametre | Değer |
|-----------|-------|
| **Varyant ataması** | İlk ziyarette rastgele atanır, localStorage'da saklanır |
| **Tutarlılık** | Aynı kullanıcı her zaman aynı varyantı görür (sticky assignment) |
| **Analytics entegrasyonu** | Tüm popup event'lerine `variant` parametresi eklenir |
| **Raporlama** | Haftalık -- popup gösterim, tıklama, dönüşüm oranları varyant bazında |

### 9.4 Erişilebilirlik Kuralları

| Kural | Uygulama |
|-------|----------|
| **Odak tuzağı (focus trap)** | Modal açıkken Tab tuşu modal içinde kalır |
| **ESC ile kapatma** | Tüm modal/popup'lar ESC tuşu ile kapatılabilir |
| **ARIA rolleri** | `role="dialog"`, `aria-modal="true"`, `aria-labelledby` (başlık) |
| **Ekran okuyucu** | Modal açıldığında `aria-live="polite"` ile duyurulur |
| **Animasyon tercihi** | `prefers-reduced-motion: reduce` → animasyonlar devre dışı, anında gösterim |
| **Kontrast** | Tüm metin WCAG AA uyumlu (overlay dahil) |
| **Tap target** | Minimum 48x48px tıklama alanı (butonlar, kapatma, reddetme linki) |

### 9.5 Performans İlkeleri

| İlke | Uygulama |
|------|----------|
| **Lazy rendering** | Popup bileşenleri sayfa yüklemesinde değil, tetikleyici koşul sağlandığında render edilir |
| **Code splitting** | Popup bileşenleri ayrı chunk -- dynamic import |
| **Overlay optimization** | CSS backdrop-filter yerine basit opacity overlay (GPU performansı) |
| **Form validation** | Client-side inline validation (sunucu çağrısı olmadan) |
| **Bundle boyutu** | Popup modülü toplam < 15 KB (gzip) |

---
---

## 10. Analytics Event Kataloğu

### 10.1 Tüm Event'lerin Özeti

| Event Kategorisi | Event Sayısı | Önem |
|-----------------|-------------|------|
| Exit-intent popup | 7 event | Yüksek |
| Scroll-trigger popup | 5 event | Yüksek |
| Timed popup | 5 event | Orta |
| Sticky top banner | 3 event | Düşük |
| Sticky bottom CTA | 3 event | Orta |
| Newsletter inline CTA | 3 event | Orta |
| Semptom testi sonuç popup | 6 event | Çok Yüksek |
| **Toplam** | **32 event** | -- |

### 10.2 GA4 Custom Dimensions

Bu event'lerle birlikte gönderilecek custom dimension'lar:

| Dimension | Tip | Değerler |
|-----------|-----|---------|
| `popup_type` | string | exit_intent, scroll_trigger, timed, test_result |
| `popup_variant` | string | A, B |
| `page_type` | string | home, blog, pillar, treatment, nutrition, exercise, mental_health, tool, premium, clinic |
| `lead_magnet_type` | string | hasta_rehberi, beslenme_plani, egzersiz_programi, doktor_sorulari, evre_kontrol |
| `user_status` | string | anonymous, registered, premium_trial, premium_active |
| `device_type` | string | desktop, mobile, tablet |

### 10.3 Dönüşüm Funnel Takibi

Her popup tipi için izlenecek funnel:

```
Popup Triggered (koşullar sağlandı)
  → Popup Shown (gösterildi -- frekans kuralı geçti)
    → Popup Engaged (form alanına tıklandı / CTA'ya hover)
      → Popup Converted (email gönderildi / CTA tıklandı)
        → Ultimate Conversion (PDF indirildi / test başlatıldı / abonelik)
```

```
Popup Triggered
  → Popup Dismissed (reddetme linki tıklandı)
  → Popup Closed (X / overlay / ESC ile kapatıldı)
```

### 10.4 Haftalık Raporlama KPI'ları

| KPI | Formül | Hedef |
|-----|--------|-------|
| Popup gösterim oranı | Popup gösterim / uygun sayfa görüntüleme | %8-12 |
| Popup engagement oranı | (Dönüşüm + tıklama) / popup gösterim | %15-25 |
| Popup kapatma oranı | (Kapatma + reddetme) / popup gösterim | <%70 |
| Popup email dönüşüm oranı | Email gönderim / popup gösterim | %10-20 |
| Test sonuç popup dönüşüm oranı | Email / popup gösterim (test sonuç) | %30-45 |
| Sticky bar CTA tıklama oranı | CTA tıklama / bar gösterim | %3-6 |
| Inline CTA dönüşüm oranı | Email kayıt / CTA görüntüleme | %5-10 |
| Top banner CTA tıklama oranı | CTA tıklama / banner gösterim | %1-3 |

---
---

## 11. Lansman Öncesi Kontrol Listesi

### Kritik (P0 -- Lansmandan Önce)

- [ ] Popup frekans kontrol sistemi çalışıyor (7 gün kuralı, localStorage)
- [ ] Kayıtlı kullanıcılara popup gösterilmiyor (sadece premium upsell)
- [ ] Ruh sağlığı sayfasında popup devre dışı
- [ ] Semptom testi devam ederken popup devre dışı
- [ ] Ödeme akışında popup devre dışı
- [ ] Exit-intent popup mobilde devre dışı
- [ ] Sticky top banner gösteriliyor ve kapatma çalışıyor (7 gün hatırlama)
- [ ] Sticky bottom CTA bar sayfa tipine göre doğru CTA gösteriyor
- [ ] Tüm popup'larda ESC ile kapatma çalışıyor
- [ ] Tüm popup'larda ARIA rolleri doğru
- [ ] Analytics event'ler tüm popup'lar için aktif (en az: shown, closed, converted)

### Yüksek Öncelik (P1 -- İlk 2 Hafta)

- [ ] Exit-intent popup implemente edildi (lead magnet eşleştirmesi ile)
- [ ] Scroll-trigger popup implemente edildi (slide-in formatı)
- [ ] Timed popup implemente edildi (semptom testi daveti)
- [ ] Semptom testi sonuç popup implemente edildi (endowment effect)
- [ ] Newsletter inline CTA tüm blog makalelerine eklendi
- [ ] A/B test altyapısı kuruldu (varyant ataması çalışıyor)
- [ ] İlk A/B test başlatıldı (exit-intent içerik testi)

### Orta Öncelik (P2 -- İlk Ay)

- [ ] Scroll-trigger format testi başlatıldı (slide-in vs modal)
- [ ] Timed popup varyant testi başlatıldı
- [ ] Test sonuç popup varyant testi başlatıldı
- [ ] Haftalık popup KPI raporu oluşturuldu
- [ ] Bağlama göre lead magnet eşleştirmesi tüm blog kategorilerinde çalışıyor
- [ ] Mobil bottom sheet animasyonları düzgün çalışıyor
- [ ] prefers-reduced-motion desteği test edildi

### Düşük Öncelik (P3 -- 2-3. Ay)

- [ ] A/B test sonuçları analiz edildi, kazanan varyantlar implement edildi
- [ ] Popup dönüşüm oranları hedeflere yaklaşıyor mu değerlendirildi
- [ ] Yeni A/B testleri planlandı (copy, zamanlama, format)
- [ ] Popup performansının sayfa hızına etkisi ölçüldü (Core Web Vitals)
- [ ] Kullanıcı feedback'i (anket veya destek talepleri) analiz edildi
- [ ] Premium kullanıcılar için upsell popup stratejisi planlandı

---

## Kaynaklar

Bu strateji aşağıdaki proje dokümanlarına dayanmaktadır:

1. **product-marketing.md** -- Hedef kitle, dönüşüm hedefleri, marka sesi, kelime seçimi kuralları
2. **cro-output.md** -- Sayfa bazlı CTA hiyerarşisi, form optimizasyonu, sticky bar stratejisi, A/B test planı, frekans kuralları
3. **lead-magnets-output.md** -- 5 lead magnet içeriği, indirme sayfası copy'leri, teslim email'leri
4. **marketing-psychology-output.md** -- Endowment effect, reciprocity, commitment-consistency, loss aversion stratejileri
5. **web-design-output.md** -- Renk sistemi (teal-600, amber, neutral tonları), tipografi (Inter), buton varyantları, komponent spesifikasyonları
6. **copywriting-output.md** -- CTA metinleri, form placeholder'ları, güven notu metinleri

---

*Son güncelleme: 24 Mayıs 2026*
