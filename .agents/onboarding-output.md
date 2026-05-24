# Lipödem Türkiye -- Kapsamlı Post-Signup Onboarding Sistemi

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, signup-output.md, emails-output.md, cro-output.md, free-tools-output.md, pricing-output.md, marketing-psychology-output.md, web-design-output.md, copywriting-output.md
**Teknoloji:** Next.js 15 (App Router) + React 19 + Zustand 5 + Tailwind CSS 4 + Vercel
**Kapsam:** Aktivasyon tanımı, ilk oturum akışı, onboarding checklist, empty states, progressive value unlock, segment bazlı yönlendirme, in-app + email koordinasyonu, stalled user recovery, premium dönüşüm, ölçüm çerçevesi

---

## İÇİNDEKİLER

1. [Aktivasyon Tanımı ve Aha Moment](#1-aktivasyon-tanımı-ve-aha-moment)
2. [Segment Bazlı Onboarding Yolları](#2-segment-bazlı-onboarding-yolları)
3. [İlk Oturum Akışı (0-5 Dakika)](#3-i̇lk-oturum-akışı-0-5-dakika)
4. [Onboarding Checklist Sistemi](#4-onboarding-checklist-sistemi)
5. [Empty States Tasarımı](#5-empty-states-tasarımı)
6. [Progressive Value Unlock](#6-progressive-value-unlock)
7. [In-App Tooltips ve Keşif Rehberi](#7-in-app-tooltips-ve-keşif-rehberi)
8. [Email + In-App Koordinasyonu](#8-email--in-app-koordinasyonu)
9. [Stalled User Recovery](#9-stalled-user-recovery)
10. [Premium Dönüşüm Entegrasyonu](#10-premium-dönüşüm-entegrasyonu)
11. [Analytics ve Ölçüm Çerçevesi](#11-analytics-ve-ölçüm-çerçevesi)
12. [A/B Test Planı](#12-ab-test-planı)
13. [Teknik Implementasyon](#13-teknik-implementasyon)

---
---

## 1. Aktivasyon Tanımı ve Aha Moment

### 1.1 Aha Moment Tanımı

Lipödem Türkiye'de aha moment iki katmanlıdır:

| Katman | Tanım | Duygusal Etki |
|--------|-------|---------------|
| **Katman 1 (Tanınma)** | "Bu benim -- yıllardır yaşadığım şeyin bir adı var" | Rahatlama + validasyon |
| **Katman 2 (Yalnız Değilim)** | "Bunu yaşayan başka kadınlar da var, yapılabilecek şeyler var" | Umut + bağlanma |

**Aha moment tetikleyici aksiyonlar (sırasıyla):**
1. Semptom testi tamamlama → risk skoru görme
2. İlk kişiselleştirilmiş öneri alma (evre bazlı içerik)
3. Hasta hikayesi okuma (benzer profildeki kadın)

### 1.2 Aktivasyon Metrikleri

| Metrik | Tanım | Hedef |
|--------|-------|-------|
| **Birincil aktivasyon** | Semptom testini tamamlama + sonuç sayfasını görme | İlk 7 gün içinde %60 |
| **İkincil aktivasyon** | Kişiselleştirilmiş içerik tüketme (evre bazlı makale veya araç) | İlk 14 gün içinde %40 |
| **Tam aktivasyon** | 2+ araç kullanma VEYA 3+ makale okuma + email açma | İlk 30 gün içinde %35 |
| **Premium aktivasyon** | Deneme başlatma | İlk 30 gün içinde %8-12 |

### 1.3 Retention Korelasyon Analizi

| Davranış | 30 Gün Retention Korelasyonu (tahmini) | Öncelik |
|----------|----------------------------------------|---------|
| Semptom testi tamamlama | Yüksek (~3.2x) | P0 |
| Profil bilgisi ekleme (ad + şehir) | Orta (~2.1x) | P1 |
| 2. araç kullanımı (evre değerlendirme veya beslenme planlayıcı) | Yüksek (~2.8x) | P0 |
| Hasta hikayesi okuma | Orta (~1.9x) | P1 |
| Topluluk ziyareti | Yüksek (~3.5x) | P0 |
| 3+ makale okuma (tek oturum) | Orta (~2.3x) | P1 |
| Email açma (ilk 7 gün) | Orta (~2.0x) | P2 |

---

## 2. Segment Bazlı Onboarding Yolları

### 2.1 Kayıt Noktası Tespiti

Kullanıcı platforma farklı noktalardan girer. Kayıt noktası, onboarding yolunu belirler:

| Kayıt Noktası | Segment | Onboarding Yolu | Aha Moment Stratejisi |
|----------------|---------|------------------|----------------------|
| Ana sayfa / Genel | **Keşifçi** | Genel akış (hoşgeldin → semptom testi) | Semptom testi ile tanınma |
| Semptom testi sayfası | **Şüpheci** | Teste devam → sonuç → evreye göre yönlendirme | Zaten aha moment'e yakın -- sonucu derinleştir |
| Klinik bulucu | **Tedavi Arayan** | Klinik sonuçları → tedavi yol haritası → premium teklif | Şehirde uzman bulma |
| Blog makalesi | **Bilgi Arayan** | İlgili araç → benzer makaleler → lead magnet | Konuyu derinleştirme |
| Lead magnet / PDF | **İçerik Odaklı** | PDF teslim → semptom testi → topluluk | Bilginin eyleme dönüşmesi |
| Premium / Fiyatlandırma | **Alıcı** | Deneme başlat → onboarding wizard → ilk program | Kişiselleştirilmiş değer |
| Referans (paylaşılan link) | **Sosyal** | Hoşgeldin → hasta hikayesi → topluluk | Topluluk bağlantısı |

### 2.2 Segment Algılama Mantığı

```typescript
type OnboardingSegment = 
  | 'explorer'      // Ana sayfa / genel kayıt
  | 'suspicious'    // Semptom testi sayfasından
  | 'treatment'     // Klinik bulucu'dan
  | 'info-seeker'   // Blog'dan
  | 'content'       // Lead magnet'ten
  | 'buyer'         // Premium sayfasından
  | 'social';       // Referans linkten

function detectSegment(referrer: string, utmSource?: string): OnboardingSegment {
  if (referrer.includes('/araclar/semptom-testi')) return 'suspicious';
  if (referrer.includes('/klinik-bul')) return 'treatment';
  if (referrer.includes('/blog/') || referrer.includes('/rehber/')) return 'info-seeker';
  if (referrer.includes('/premium') || referrer.includes('/fiyatlandirma')) return 'buyer';
  if (utmSource === 'lead-magnet') return 'content';
  if (utmSource === 'referral' || utmSource === 'share') return 'social';
  return 'explorer';
}
```

### 2.3 Segment Bazlı Hoşgeldin Sayfası Varyantları

#### Varyant A: Keşifçi (Varsayılan)

signup-output.md'deki mevcut `/hosgeldin` sayfası kullanılır:
- 3 kart: Semptom Testi (birincil) → Rehber → Klinik Bulucu
- Semptom testi kartı vurgulu (teal-50 arka plan)

#### Varyant B: Şüpheci (Semptom Testinden Gelen)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           Hoş Geldiniz!                                     │
│                                                             │
│     Semptom testiniz hazır -- kaldığınız yerden              │
│     devam edebilirsiniz.                                    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Semptom Testinize Devam Edin                       │    │
│  │  Sonucunuz kaydedildi -- daha detaylı               │    │
│  │  rapor almak için tamamlayın                        │    │
│  │                          [Teste Devam Et →]          │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │  Evre Değerlendirme   │  │  Hasta Hikayeleri    │        │
│  │  Aracını Deneyin      │  │  Benzer yolculuklar  │        │
│  │       [Başla →]        │  │      [Oku →]         │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Varyant C: Tedavi Arayan

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           Hoş Geldiniz!                                     │
│                                                             │
│     Şehrinizdeki lipödem uzmanlarını bulmanızı               │
│     kolaylaştıracağız.                                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Klinik Bulucu'ya Devam Edin                        │    │
│  │  81 ilde lipödem uzmanı ve klinik bilgisi            │    │
│  │                          [Klinik Bul →]              │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌──────────────────────┐  ┌──────────────────────┐        │
│  │  Tedavi Seçenekleri   │  │  Maliyet Hesaplayıcı │        │
│  │  Karşılaştırma        │  │  SGK + Özel          │        │
│  │      [İncele →]       │  │     [Hesapla →]       │        │
│  └──────────────────────┘  └──────────────────────┘        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Varyant D: Alıcı (Premium Sayfasından)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           Hoş Geldiniz!                                     │
│                                                             │
│     14 günlük ücretsiz denemenizi başlatmak                  │
│     için profilinizi tamamlayalım.                          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Hızlı Profil Kurulumu (2 dk)                       │    │
│  │                                                     │    │
│  │  Size özel beslenme ve egzersiz programı             │    │
│  │  oluşturabilmemiz için birkaç bilgiye ihtiyacımız    │    │
│  │  var.                                               │    │
│  │                                                     │    │
│  │  1. Lipödem evreniz (veya tahmini)                   │    │
│  │  2. Şehriniz                                        │    │
│  │  3. Beslenme tercihiniz                             │    │
│  │                                                     │    │
│  │                         [Kuruluma Başla →]            │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  [Şimdilik atla, platformu keşfedeyim]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. İlk Oturum Akışı (0-5 Dakika)

### 3.1 Saniye Saniye Akış

```
0 sn    Kayıt tamamlanır (Google One-Tap veya Magic Link)
        │
        ▼
0-2 sn  Confetti/particle animasyonu + kısa kutlama mikrokopy:
        "Harika! Artık Lipödem Türkiye ailesinin bir parçasısınız."
        │
        ▼
2-3 sn  Segment algılama (referrer + utm analizi)
        │
        ▼
3 sn    Segment bazlı /hosgeldin sayfası render
        │
        ├── Keşifçi → 3 kart (semptom testi vurgulu)
        ├── Şüpheci → Teste devam + 2 kart
        ├── Tedavi Arayan → Klinik bulucu + 2 kart
        ├── Alıcı → Premium profil kurulumu
        └── Diğer → Varsayılan 3 kart
        │
        ▼
10-30 sn Kullanıcı bir kart seçer → ilk değer aksiyonu başlar
         │
         ├── Semptom testi → 12 soru (~2 dk) → sonuç sayfası
         ├── Rehber → pillar article → inline CTA'lar
         ├── Klinik bulucu → şehir seçimi → sonuçlar
         └── Profil kurulumu → 3 adım (~1 dk) → dashboard
         │
         ▼
2-5 dk   İlk değer teslimi:
         ├── Semptom test sonucu + risk skoru + öneriler
         ├── Evre bazlı içerik önerisi
         ├── Şehirdeki uzman listesi
         └── Kişiselleştirilmiş program önizleme
         │
         ▼
5 dk     Onboarding checklist görünür hale gelir
         (sağ alt köşe, küçük widget olarak)
```

### 3.2 İlk Oturum Hedefleri

| Öncelik | Hedef | Süre | Başarı Kriteri |
|---------|-------|------|----------------|
| P0 | En az 1 araç kullanımı başlatma | 0-3 dk | Araç sayfasına navigasyon |
| P1 | Araç tamamlama (sonuç görme) | 3-5 dk | Sonuç sayfası view |
| P2 | İkinci bir sayfaya navigasyon | 5-10 dk | 2+ unique page view |
| P3 | Checklist farkındalığı | 5-10 dk | Checklist widget görüntüleme |

### 3.3 Hoşgeldin Sayfası Animasyonları

```typescript
// Sayfa yüklenme sırası (staggered reveal)
const animations = {
  logo: { delay: 0, duration: 600, type: 'fadeInDown' },
  headline: { delay: 200, duration: 500, type: 'fadeIn' },
  subheadline: { delay: 400, duration: 500, type: 'fadeIn' },
  cardPrimary: { delay: 600, duration: 400, type: 'slideInUp' },
  cardSecondary1: { delay: 750, duration: 400, type: 'slideInUp' },
  cardSecondary2: { delay: 900, duration: 400, type: 'slideInUp' },
  skipLink: { delay: 1100, duration: 300, type: 'fadeIn' },
};
```

**Confetti efekti:**
- Hafif, pastel tonlarda parçacıklar (teal, lavanta, amber)
- 1.5 saniye süre, ekranın üst yarısında
- `canvas-confetti` kütüphanesi (2KB gzip)
- Reduced motion tercihine saygı: `prefers-reduced-motion: reduce` → confetti devre dışı

---

## 4. Onboarding Checklist Sistemi

### 4.1 Checklist Öğeleri

| # | Öğe | Aksiyon | Tamamlama Kriteri | Değer Açıklaması | Puan |
|---|-----|---------|-------------------|-------------------|------|
| 1 | Semptom testini çöz | `/araclar/semptom-testi` | Test sonuç sayfası görüntüleme | "Belirtilerinizi değerlendirin" | 25 |
| 2 | Profilinizi tamamlayın | `/hesap/profil` | Ad + şehir ekleme | "Kişisel öneriler alın" | 15 |
| 3 | İlk makalenizi okuyun | Evre bazlı makale önerisi | Makale sayfasında 60+ sn | "Lipödem hakkında bilgilenin" | 15 |
| 4 | Evre değerlendirmesi yapın | `/araclar/evre-degerlendirme` | Araç tamamlama | "Evrenizi öğrenin" | 20 |
| 5 | Hasta hikayesi okuyun | `/hikayeler` | Hikaye sayfasında 30+ sn | "Yalnız olmadığınızı görün" | 10 |
| 6 | Beslenme planlayıcıyı deneyin | `/araclar/beslenme-planlayici` | Araç başlatma | "Evrenize özel menü" | 15 |

**Toplam:** 100 puan (yüzde olarak gösterilir)

### 4.2 Checklist UI: Floating Widget

```
Kapalı hali (sağ alt köşe):
┌──────────────────────────────┐
│  Başlangıç Rehberi  ●●○○○○  │  (%33)
└──────────────────────────────┘

Açık hali (tıklayınca genişler):
┌──────────────────────────────────────────┐
│                                          │
│  Başlangıç Rehberi                       │
│  ━━━━━━━━━━━━━━━━━━░░░░░░░░  %33        │
│                                          │
│  ✓ Semptom testini çözdünüz             │
│    Risk skorunuz: Orta-Yüksek            │
│                                          │
│  ✓ Profilinizi tamamladınız             │
│    Merhaba, Ayşe!                        │
│                                          │
│  → İlk makalenizi okuyun                │
│    Evre 2 lipödem hakkında bilgi         │
│                     [Makaleye Git →]      │
│                                          │
│  ○ Evre değerlendirmesi yapın            │
│  ○ Hasta hikayesi okuyun                │
│  ○ Beslenme planlayıcıyı deneyin        │
│                                          │
│  ─────────────────────────────────       │
│  Tamamlayın, ücretsiz                    │
│  "Doktorunuza Götürün" PDF               │
│  raporu kazanın!                         │
│                                          │
│  [Şimdilik Kapat]                        │
│                                          │
└──────────────────────────────────────────┘
```

### 4.3 Checklist Davranış Kuralları

| Kural | Detay |
|-------|-------|
| **İlk görünüm** | İlk oturum, hoşgeldin sayfasından çıkış sonrası (5 sn gecikme) |
| **Konum** | Masaüstü: sağ alt köşe, fixed. Mobil: bottom sheet (yarım ekran) |
| **Kapatma** | Kapatılırsa sadece widget küçülür (nokta göstergesi kalır), tamamen kaybolmaz |
| **Gizleme** | "7 gün gösterme" seçeneği mevcut |
| **Tamamlama** | Tüm öğeler tamamlandığında kutlama animasyonu + ödül |
| **Timeout** | 30 gün sonra tamamlanmamış checklist otomatik gizlenir |
| **Sıralama** | Dinamik -- tamamlananlar üste, sonraki adım vurgulu |
| **Kişiselleştirme** | Segment bazlı sıralama (tedavi arayanlar için klinik bulucu öne gelir) |

### 4.4 Tamamlama Ödülü

**Ödül:** "Doktorunuza Götürün" PDF raporu (ücretsiz)

Bu rapor:
- Semptom testi sonuçlarını özetler
- Evre değerlendirme sonucunu içerir
- Doktora sorulacak soruları listeler
- Lipödem tanı kriterlerini doktor için özetler
- Hastanın yazdırıp randevuya götürebileceği format

**Neden bu ödül:**
- Doğrudan eylem değeri var (doktor ziyaretinde kullanılır)
- Platform verilerini birleştirir (test + evre + profil)
- Premium'a köprü: "Detaylı tedavi yol haritası için premium'a geçin"
- Paylaşılabilir: WhatsApp/email ile doktora gönderilebilir

### 4.5 Checklist Tamamlama Kutlaması

```
┌──────────────────────────────────────────┐
│                                          │
│         ✨ Tebrikler!                    │
│                                          │
│     Başlangıç Rehberi'ni tamamladınız.   │
│                                          │
│     "Doktorunuza Götürün" PDF            │
│     raporunuz hazır!                     │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │       [PDF Raporu İndir]           │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │   WhatsApp ile Doktorunuza         │  │
│  │   Gönderin                         │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ─────────────────────────────────       │
│                                          │
│  Bir sonraki adım:                       │
│  Kişiselleştirilmiş beslenme ve          │
│  egzersiz programı ile tedavinize        │
│  destek olalım.                          │
│                                          │
│  [14 Gün Ücretsiz Dene →]               │
│                                          │
└──────────────────────────────────────────┘
```

---

## 5. Empty States Tasarımı

### 5.1 Dashboard / Ana Sayfa (Giriş Yapılmış)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Merhaba, [Ad]! 👋                                         │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Lipödem yolculuğunuza buradan başlayın              │    │
│  │                                                     │    │
│  │  Platformu keşfettikçe burası sizin kişisel          │    │
│  │  kontrol paneliniz olacak -- ilerlemeniz, öneriler    │    │
│  │  ve araçlarınız burada.                              │    │
│  │                                                     │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │    │
│  │  │ Semptom Testi │  │ Evre Değerl. │  │ Beslenme   │ │    │
│  │  │    [Başla]    │  │   [Başla]    │  │  [Başla]   │ │    │
│  │  └──────────────┘  └──────────────┘  └────────────┘ │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌──────── Önerilen İçerik ────────┐                        │
│  │                                  │                        │
│  │  Evre bilginiz henüz yok --      │                        │
│  │  evre değerlendirmesi yapın,     │                        │
│  │  size özel içerik önerelim.      │                        │
│  │                                  │                        │
│  │  [Evre Değerlendirmesi Yap →]    │                        │
│  └──────────────────────────────────┘                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Topluluk (İlk Ziyaret)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Lipödem Topluluk                                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  Türkiye'nin en büyük lipödem                        │    │
│  │  hasta topluluğuna hoş geldiniz.                     │    │
│  │                                                     │    │
│  │  [X] kadın burada birbirini destekliyor.             │    │
│  │                                                     │    │
│  │  ┌────────────────────────────────────────────┐     │    │
│  │  │  "Tanı almadan önce yıllarca kendimi       │     │    │
│  │  │   suçladım. Bu topluluk sayesinde ilk       │     │    │
│  │  │   defa anlaşıldığımı hissettim."            │     │    │
│  │  │                           -- Zeynep, Ankara │     │    │
│  │  └────────────────────────────────────────────┘     │    │
│  │                                                     │    │
│  │  Ücretsiz üyeler topluluk yazılarını okuyabilir.    │    │
│  │  Yazmak ve paylaşmak için Temel Premium             │    │
│  │  üyelik gerekir.                                    │    │
│  │                                                     │    │
│  │  [Topluluk Yazılarını İncele]    [Premium Ol →]     │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ─── En Son Paylaşımlar ───                                 │
│  (Okuma modunda -- son 5 paylaşım preview)                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.3 Kişisel İlerleme Sayfası (Boş)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  İlerleme Takibi                                            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │        [İlerleme grafiği placeholder]                │    │
│  │        (Gri, noktalı çizgi ile boş grafik)           │    │
│  │                                                     │    │
│  │  Henüz ilerleme veriniz yok.                        │    │
│  │                                                     │    │
│  │  Semptom testini çözerek başlayın --                  │    │
│  │  ilk veri noktanız otomatik kaydedilsin.             │    │
│  │                                                     │    │
│  │  [Semptom Testini Çöz →]                             │    │
│  │                                                     │    │
│  │  ─────────────────────────────────────               │    │
│  │  İlerleme takibi ile:                                │    │
│  │  • Semptom değişimlerinizi görün                     │    │
│  │  • Beslenme uyumunuzu takip edin                    │    │
│  │  • Egzersiz rutininizi kaydedin                     │    │
│  │  • Ölçümlerinizi karşılaştırın                      │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.4 Beslenme Planı (Kilitli - Ücretsiz Kullanıcı)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Kişisel Beslenme Planı                                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  ┌──── Örnek: Evre 2 Anti-İnflamatuar Plan ────┐   │    │
│  │  │                                               │   │    │
│  │  │  PAZARTESI                                    │   │    │
│  │  │  Kahvaltı: Avokadolu yumurta...               │   │    │
│  │  │  ████████████████████████████████████████████  │   │    │
│  │  │  ████████████████████████████████████████████  │   │    │
│  │  │  (Bulanıklaştırılmış devam içerik)            │   │    │
│  │  └───────────────────────────────────────────────┘   │    │
│  │                                                     │    │
│  │  Evrenize özel 7 günlük anti-inflamatuar            │    │
│  │  beslenme planı, alışveriş listesi ve               │    │
│  │  tarif kartları ile.                                │    │
│  │                                                     │    │
│  │  [14 Gün Ücretsiz Dene -- Planınızı Alın →]        │    │
│  │                                                     │    │
│  │  ✓ İstediğiniz zaman iptal                          │    │
│  │  ✓ Kredi kartı gerekmez (deneme için)               │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.5 Empty State Tasarım Kuralları

| Kural | Detay |
|-------|-------|
| Her empty state'te tek CTA | Kullanıcıyı doğru aksiyona yönlendir |
| Neye dönüşeceğini göster | Veriyle dolu halin preview'ı veya açıklaması |
| Empati tonu | "Henüz yok" yerine "Birlikte başlayalım" |
| Premium gating | Kilitli içerikte blur + CTA, tam gizleme değil |
| Sosyal kanıt | Empty state'lerde bile "[X] kadın bu aracı kullandı" |

---

## 6. Progressive Value Unlock

### 6.1 Değer Merdiveni Zaman Çizelgesi

```
GÜN 0          GÜN 1-3         GÜN 3-7         GÜN 7-14        GÜN 14-30
━━━━━━━         ━━━━━━━         ━━━━━━━          ━━━━━━━          ━━━━━━━
İlk Değer       Derinleştirme   Kişiselleştirme  Premium Tad      Alışkanlık
━━━━━━━         ━━━━━━━         ━━━━━━━          ━━━━━━━          ━━━━━━━

• Semptom testi  • 2. araç       • Profil bazlı   • Deneme teklifi  • Haftalık email
• Sonuç + skor   • Hasta hikayesi  içerik önerisi • Premium önizle  • Topluluk check
• Rehber erişimi • Email #2-3    • Email #3-4     • Klinik bulucu   • İlerleme takip
• Checklist       • Topluluk okuma • Beslenme ipucu • Email #4-5     • Araç tekrar
  başlar                          • Lead magnet                       kullanımı
```

### 6.2 Gün Bazlı Değer Teslimi

#### Gün 0: İlk Değer (Anında)

| Zaman | Değer | Kanal | Tetikleyici |
|-------|-------|-------|-------------|
| 0 sn | Hoşgeldin + yönlendirme | In-app | Kayıt tamamlama |
| 0-3 dk | Semptom testi sonucu | In-app | Kullanıcı aksiyonu |
| 3-5 dk | Risk skoru + ilk öneriler | In-app | Test tamamlama |
| 5-10 dk | Checklist görünür | In-app | Hoşgeldinden çıkış |
| +0 saat | Hoşgeldin emaili (#1.1) | Email | Tetikleyici bazlı |

#### Gün 1-3: Derinleştirme

| Zaman | Değer | Kanal | Tetikleyici |
|-------|-------|-------|-------------|
| Gün 1 | Evre değerlendirme önerisi | In-app (checklist pulse) | İlk girişte |
| Gün 1 | Email #1.2: Semptom testi + bilgi | Email | Zamanlı |
| Gün 2 | Hasta hikayesi önerisi (evre eşleşmeli) | In-app banner | Profil verisi |
| Gün 3 | Email #1.3: Beslenme lead magnet | Email | Zamanlı |
| Gün 3 | Beslenme planlayıcı ipucu | In-app tooltip | İlk ziyaret |

#### Gün 3-7: Kişiselleştirme

| Zaman | Değer | Kanal | Tetikleyici |
|-------|-------|-------|-------------|
| Gün 4-5 | Profil bazlı içerik önerisi | Dashboard widget | Profil verisi |
| Gün 5 | Email #1.4: Topluluk davet | Email | Zamanlı |
| Gün 6-7 | Beslenme ipuçları (evre bazlı) | In-app kart | Profil verisi |
| Gün 7 | Klinik bulucu önerisi (şehir bazlı) | In-app banner | Profil verisi |

#### Gün 7-14: Premium Tadımlık

| Zaman | Değer | Kanal | Tetikleyici |
|-------|-------|-------|-------------|
| Gün 7 | Premium içerik önizleme (blur + CTA) | In-app | Doğal keşif |
| Gün 8 | Email #1.5: Premium tanıtım | Email | Zamanlı |
| Gün 10 | Kişisel beslenme planı teaser | In-app | Beslenme planlayıcı kullanımı |
| Gün 12 | Topluluk yazı teaser (okuma modu) | In-app | Topluluk ziyareti |
| Gün 14 | Deneme teklifi (profil bazlı) | In-app modal | Etkileşim skoru > 5 |

### 6.3 Etkileşim Skoru Hesaplama

```typescript
interface EngagementScore {
  score: number;       // 0-100
  level: 'cold' | 'warm' | 'hot' | 'activated';
  premiumReady: boolean;
}

function calculateEngagement(user: UserActivity): EngagementScore {
  let score = 0;
  
  // Araç kullanımı (max 40 puan)
  if (user.completedSymptomTest) score += 15;
  if (user.completedStageAssessment) score += 12;
  if (user.usedNutritionPlanner) score += 8;
  if (user.usedClinicFinder) score += 5;
  
  // İçerik tüketimi (max 25 puan)
  score += Math.min(user.articlesRead * 3, 15);
  score += Math.min(user.patientStoriesRead * 5, 10);
  
  // Profil tamamlama (max 15 puan)
  if (user.hasName) score += 3;
  if (user.hasCity) score += 5;
  if (user.hasDiagnosisStatus) score += 4;
  if (user.hasStage) score += 3;
  
  // Geri dönüş (max 20 puan)
  score += Math.min(user.returnVisits * 4, 12);
  score += Math.min(user.emailOpens * 2, 8);
  
  const level = score < 15 ? 'cold' 
    : score < 35 ? 'warm'
    : score < 60 ? 'hot'
    : 'activated';
    
  return {
    score,
    level,
    premiumReady: score >= 35 && user.daysActive >= 3,
  };
}
```

---

## 7. In-App Tooltips ve Keşif Rehberi

### 7.1 Tooltip Stratejisi

Tooltips sadece ilk ziyarette ve yalnızca karmaşık UI elemanları için kullanılır. Self-evident aksiyonlar için tooltip gerekmez.

### 7.2 Tooltip Tetikleme Kuralları

| Tooltip | Sayfa | Tetikleyici | Gösterim Kuralı |
|---------|-------|-------------|-----------------|
| Dashboard yönlendirme | `/` (giriş yapılmış) | İlk dashboard ziyareti | 1 kez, kapatılınca bir daha gösterilmez |
| Araç sonuç kaydetme | Araç sonuç sayfaları | İlk araç tamamlama | 1 kez |
| Profil banner açıklama | Herhangi bir sayfa | Profil %50'den az | Profil tamamlanana kadar (7 gün gizle seçeneği) |
| Premium içerik ipucu | Premium kilitli sayfa | İlk kilitli içerik görme | 1 kez |
| Topluluk kuralları | `/topluluk` | İlk topluluk ziyareti | 1 kez |

### 7.3 Tooltip UI Şablonu

```
┌──────────────────────────────────┐
│  [Tooltip başlığı]               │
│                                  │
│  Kısa açıklama metni (max 2     │
│  satır, 80 karakter)             │
│                                  │
│  [Anladım]        Adım 1/3      │
└──────────────────────────────────┘
        ▲ (ok, hedef elemana işaret eder)
```

**Tasarım:**
- Arka plan: beyaz, shadow-lg, border-radius: 12px
- Ok: Hedef elemana işaret eden üçgen
- "Anladım" butonu: teal-600 text, underline yok
- Adım göstergesi: Birden fazla adımlı tour'larda (max 3 adım)
- Overlay: Sayfa yarı-karartılır (opacity-50), hedef eleman highlight

### 7.4 Contextual Nudge Sistemi

Tooltip'ler dışında, kullanıcı davranışına göre tetiklenen hafif hatırlatmalar:

| Nudge | Koşul | Format | CTA |
|-------|-------|--------|-----|
| "Testinizi tamamlamadınız" | Semptom testini yarıda bırakma (24 saat) | Dashboard info bar | "Devam Et" |
| "Evrenizi öğrenin" | Semptom testi tamamlanmış + evre değerlendirme yapılmamış (3 gün) | Checklist pulse + dashboard kart | "Evre Değerlendirmesi Yap" |
| "Size özel içerik var" | Profil %60+ tamamlanmış + 0 makale | Dashboard bölüm | "Önerilen Makale" |
| "Toplulukta neler oluyor" | 7+ gün aktif + topluluk hiç ziyaret edilmemiş | Dashboard kart | "Topluluk'a Göz At" |
| "Yeni araç: Beslenme Planlayıcı" | Semptom testi + evre değerlendirme tamamlanmış | In-app toast | "Deneyin" |

**Nudge kuralları:**
- Günde maksimum 1 nudge
- Aynı nudge maksimum 2 kez gösterilir
- Kapatılan nudge 7 gün boyunca tekrar gösterilmez
- Nudge'lar birbirini ezmez (öncelik sırası yukarıdaki tablodaki gibi)

---

## 8. Email + In-App Koordinasyonu

### 8.1 Koordinasyon Matrisi

Email dizileri (emails-output.md) ile in-app onboarding arasında çakışma ve çift bildirim olmamalı.

| Gün | Email | In-App | Koordinasyon Kuralı |
|-----|-------|--------|---------------------|
| 0 | Hoşgeldin email (#1.1) | Hoşgeldin sayfası + checklist | Email değer teslimi (lead magnet), in-app yönlendirme -- farklı içerik |
| 1 | Email #1.2 (semptom testi) | Checklist pulse (semptom testi) | Email test tamamlanmadıysa tetiklenir. Tamamlandıysa: evre değerlendirme konusu |
| 3 | Email #1.3 (beslenme LM) | Beslenme ipuçları tooltip | Email lead magnet verir, in-app araç gösterir -- tamamlayıcı |
| 5 | Email #1.4 (topluluk) | Topluluk nudge (eğer hiç ziyaret edilmediyse) | Topluluk ziyaret edildiyse email içeriği "hikayeler" olarak değişir |
| 8 | Email #1.5 (premium) | Premium teaser (eğer engagement score > 35) | Her ikisi de premium yönlendirme -- email daha detaylı, in-app hızlı CTA |

### 8.2 Davranış Bazlı Email Bastırma

```typescript
// Email gönderim kararı
function shouldSendEmail(user: User, emailId: string): boolean {
  // Kullanıcı aynı aksiyonu zaten in-app'te tamamladıysa
  if (emailId === 'welcome_1_2' && user.completedSymptomTest) {
    // Semptom testi emaili yerine sonraki adım emaili gönder
    return false; // Bu emaili atla, alternatif gönder
  }
  
  if (emailId === 'welcome_1_4' && user.visitedCommunity) {
    // Topluluk emaili yerine derinleştirme emaili gönder
    return false;
  }
  
  // Günlük limit kontrolü
  if (user.emailsSentToday >= 1) return false;
  
  // Hafta sonu kontrolü
  if (isWeekend()) return false;
  
  return true;
}
```

### 8.3 Deep Link Stratejisi

Emaillerden in-app'e geçişte kullanıcı bağlamını koruma:

| Email CTA | Deep Link | In-App Davranış |
|-----------|-----------|-----------------|
| "Semptom Testini Çöz" | `/araclar/semptom-testi?utm_source=email&utm_medium=welcome_1_2` | Test sayfası + giriş yapmamışsa otomatik login (magic link token) |
| "Beslenme Rehberini İndir" | `/kaynak/beslenme-rehberi?ref=email` | PDF indirme + checklist güncelleme |
| "Topluluk'a Katıl" | `/topluluk?ref=email&highlight=latest` | Topluluk sayfası, son yazı vurgulu |
| "Premium'u Dene" | `/premium?ref=email&plan=tam-premium` | Fiyatlandırma sayfası, Tam Premium vurgulu |

---

## 9. Stalled User Recovery

### 9.1 "Stalled" Tanımı

| Seviye | Koşul | Aksiyon |
|--------|-------|---------|
| **Yavaşlayan** | 3-7 gün inaktif + checklist < %50 | Hafif nudge (in-app + email) |
| **Durmuş** | 7-14 gün inaktif | Re-engagement email dizisi (#6) |
| **Kayıp** | 14-30 gün inaktif | Son şans email + push (opsiyonel) |
| **Soğuk** | 30+ gün inaktif | Yeniden etkileşim dizisi (emails-output #6) |

### 9.2 Yavaşlayan Kullanıcı Stratejisi (3-7 Gün)

**In-App (Geri geldiğinde):**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Tekrar hoş geldiniz! 👋                                   │
│                                                             │
│  Son ziyaretinizden bu yana platformda                      │
│  neler oldu:                                                │
│                                                             │
│  • 3 yeni hasta hikayesi eklendi                            │
│  • Beslenme planlayıcı güncellendi                         │
│  • [Şehriniz]'de yeni klinik eklendi                       │
│                                                             │
│  Kaldığınız yerden devam edin:                              │
│  ┌────────────────────────────────────────────────┐         │
│  │  [Checklist'teki sonraki adım -- dinamik]       │         │
│  │                              [Devam Et →]       │         │
│  └────────────────────────────────────────────────┘         │
│                                                             │
│  [Tamam, kendi başıma keşfedeceğim]                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Email:** emails-output.md Dizi 6'nın erken tetiklemesi (14 gün yerine 7 gün).

### 9.3 Durmuş Kullanıcı (7-14 Gün)

**Email: Re-engagement Özel Email**

**Konu:** [Ad], lipödem yolculuğunuzda yeni bir adım atın
**Preview:** Size özel bir ipucu hazırladık

**İçerik:**
- Kullanıcının tamamlamadığı checklist öğesine göre kişiselleştirilmiş
- Yeni eklenen içerik/araç güncelleme haberi
- Tek CTA: En yüksek değerli tamamlanmamış aksiyon

### 9.4 Welcome Back Modal (Geri Dönen Stalled User)

```typescript
function showWelcomeBack(user: User): boolean {
  const daysSinceLastVisit = daysBetween(user.lastVisit, now());
  const checklistCompletion = user.checklistProgress / 100;
  
  return daysSinceLastVisit >= 3 && checklistCompletion < 0.8;
}
```

---

## 10. Premium Dönüşüm Entegrasyonu

### 10.1 Onboarding'den Premium'a Doğal Köprüler

Premium teklifi onboarding sürecine organik olarak entegre edilir -- hiçbir zaman satış baskısı hissi vermez.

| Tetikleyici Moment | Premium Gösterim | Format | Ton |
|--------------------|-----------------|--------|-----|
| Semptom testi sonucu: Yüksek risk | "Evrenize özel tedavi yol haritası" | Sonuç sayfası alt bölüm | Bilgilendirici |
| Beslenme planlayıcı sınırı (şablon) | "Kişisel beslenme planı" blur + CTA | Araç içi | Değer gösterme |
| Topluluk okuma modu | "Topluluğa katılın, sorunuzu sorun" | Yazı altı banner | Davet edici |
| Checklist tamamlama | "Bir sonraki adım: kişiselleştirilmiş program" | Kutlama modalı | Kutlama + teklif |
| 3. makale okuma | "Premium üyeler [X] detaylı rehbere erişir" | Makale sonu kart | Keşif |
| Evre değerlendirme sonucu | "Evrenize özel egzersiz programı" | Sonuç sayfası CTA | Kişiselleştirme |
| 7. gün geri dönüş | "İlk 100 kurucu üyeye özel fiyat" | Dashboard banner | Aciliyet (kurucu) |

### 10.2 Premium Onboarding (Deneme Başlatan Kullanıcı)

Deneme başlatan kullanıcı için ayrı bir onboarding akışı devreye girer:

#### Premium Onboarding Wizard (3 Adım, ~2 Dakika)

```
ADIM 1/3: Profilinizi Tamamlayın
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Kişiselleştirilmiş programınızı oluşturabilmemiz için      │
│  birkaç bilgiye ihtiyacımız var.                            │
│                                                             │
│  Lipödem evreniz:                                           │
│  ○ Evre 1 (başlangıç)                                      │
│  ○ Evre 2 (orta)                                           │
│  ○ Evre 3 (ileri)                                           │
│  ○ Bilmiyorum (evre değerlendirme aracını kullanın)         │
│                                                             │
│  Tanı durumunuz:                                            │
│  ○ Resmi tanı aldım                                        │
│  ○ Şüpheleniyorum                                          │
│  ○ Araştırıyorum                                            │
│                                                             │
│  Şehriniz:                                                  │
│  ┌───────────────────────────────────────────────┐           │
│  │  Şehir seçin ▾                                │           │
│  └───────────────────────────────────────────────┘           │
│                                                             │
│  [Devam →]                                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘


ADIM 2/3: Beslenme Tercihleriniz
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Anti-inflamatuar beslenme planınızı oluşturmak için:       │
│                                                             │
│  Beslenme tarzınız:                                         │
│  ○ Her şeyi yerim                                           │
│  ○ Vejetaryen                                               │
│  ○ Vegan                                                    │
│  ○ Glutensiz                                                │
│  ○ Laktoz intoleransım var                                  │
│                                                             │
│  Alerji veya intoleranslarınız (opsiyonel):                 │
│  ┌───────────────────────────────────────────────┐           │
│  │  Ör: fındık, kabuklu deniz ürünü              │           │
│  └───────────────────────────────────────────────┘           │
│                                                             │
│  Günlük öğün sayısı tercihiniz:                             │
│  ○ 3 ana öğün                                               │
│  ○ 3 ana + 2 ara öğün                                       │
│  ○ 2 ana öğün (intermittent fasting)                        │
│                                                             │
│  [Devam →]                                       [← Geri]   │
│                                                             │
└─────────────────────────────────────────────────────────────┘


ADIM 3/3: Hareket Profiliniz
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Egzersiz programınızı kişiselleştirmek için:               │
│                                                             │
│  Mevcut aktivite seviyeniz:                                 │
│  ○ Sedanter (düzenli hareket yok)                           │
│  ○ Hafif aktif (haftada 1-2 yürüyüş)                       │
│  ○ Orta aktif (haftada 3-4 gün hareket)                    │
│  ○ Aktif (haftada 5+ gün düzenli egzersiz)                 │
│                                                             │
│  Hareket kısıtlamanız var mı?                               │
│  □ Diz ağrısı                                               │
│  □ Ayak bileği hassasiyeti                                  │
│  □ Sırt ağrısı                                              │
│  □ Lenfödem                                                 │
│  □ Kısıtlamam yok                                           │
│                                                             │
│  Tercih ettiğiniz egzersiz türleri:                         │
│  □ Su egzersizleri (yüzme, aqua)                            │
│  □ Yürüyüş                                                 │
│  □ Yoga / Pilates                                           │
│  □ Trampolin (rebounding)                                   │
│  □ Bisiklet                                                 │
│                                                             │
│  [Programımı Oluştur →]                          [← Geri]   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### Premium Onboarding Tamamlama

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│         ✨ Programınız Hazırlanıyor!                        │
│                                                             │
│     ┌──────────────────────────────────────────┐            │
│     │        [Yükleniyor animasyonu]            │            │
│     │        "Evrenize özel plan                │            │
│     │         oluşturuluyor..."                 │            │
│     └──────────────────────────────────────────┘            │
│                                                             │
│     (3 sn bekleme -- algılanan değer artırma)                │
│                                                             │
│     ┌──────────────────────────────────────────┐            │
│     │  Programınız Hazır!                       │            │
│     │                                          │            │
│     │  ✓ Evre 2'ye özel beslenme planı          │            │
│     │  ✓ 8 haftalık lenfatik egzersiz programı  │            │
│     │  ✓ Haftalık alışveriş listesi              │            │
│     │  ✓ İlerleme takip paneli                   │            │
│     │                                          │            │
│     │  [Programıma Git →]                       │            │
│     └──────────────────────────────────────────┘            │
│                                                             │
│     14 gün ücretsiz deneme aktif                             │
│     İlk ödeme: [tarih]                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Not:** "Programınız Hazırlanıyor" adımındaki 3 saniyelik bekleme kasıtlıdır. Araştırmalar, hesaplama/oluşturma süresi algılatan arayüzlerin, anlık sonuç verene kıyasla daha yüksek algılanan değer yarattığını gösterir (Labor Illusion etkisi).

### 10.3 Premium Deneme Sonrası Takip

| Gün | Aksiyon | Kanal | İçerik |
|-----|---------|-------|--------|
| 0 | Deneme başladı onayı | Email | Program özeti + ilk günkü plan |
| 1 | İlk gün check-in | In-app | "Bugünkü beslenme planınız hazır" nudge |
| 3 | Erken değer teslimi | Email | "İlk 3 günde neler başardınız" + ilerleme |
| 7 | Yarı yol | Email + in-app | İlerleme özeti + "Tam sonuçlar 14 günde" |
| 10 | Sosyal kanıt | Email | Başarı hikayesi + topluluk davet |
| 12 | Uyarı | Email + in-app | "Denemeniz 2 gün sonra bitiyor" |
| 13 | Son gün | Email + in-app | "Yarın son gün -- planınız devam etsin mi?" |
| 14 | Deneme bitti | Email + in-app | "Denemeniz bitti" + özel teklif (ilk ay %20 indirim) |

---

## 11. Analytics ve Ölçüm Çerçevesi

### 11.1 Onboarding Funnel Metrikleri

```
Kayıt Tamamlama ──► Hoşgeldin Görme ──► İlk Aksiyon ──► Aktivasyon ──► Geri Dönüş
     100%              95%                  65%             40%            25%
                       │                    │                │              │
                       Hedef: %98           Hedef: %75      Hedef: %50    Hedef: %35
```

### 11.2 Tracking Events

| Event | Parametre | Tetikleyici |
|-------|-----------|-------------|
| `onboarding_start` | segment, referrer, timestamp | Hoşgeldin sayfası görüntüleme |
| `onboarding_card_click` | card_type (symptom_test, guide, clinic_finder) | Hoşgeldin kartı tıklama |
| `onboarding_checklist_view` | completion_pct, items_completed | Checklist açılma |
| `onboarding_checklist_item_complete` | item_id, item_name, time_to_complete | Öğe tamamlama |
| `onboarding_checklist_complete` | total_time, days_to_complete | Tüm öğeler tamamlandığında |
| `onboarding_checklist_dismiss` | completion_pct, dismiss_type (temp, permanent) | Kapatma |
| `onboarding_nudge_show` | nudge_id, nudge_type | Nudge gösterimi |
| `onboarding_nudge_click` | nudge_id, nudge_type | Nudge tıklama |
| `onboarding_nudge_dismiss` | nudge_id | Nudge kapatma |
| `onboarding_tooltip_show` | tooltip_id, page | Tooltip gösterimi |
| `onboarding_tooltip_complete` | tooltip_id, step | Tooltip tamamlama |
| `onboarding_empty_state_cta` | page, cta_type | Empty state CTA tıklama |
| `onboarding_welcome_back` | days_away, checklist_pct | Welcome back modal gösterimi |
| `onboarding_premium_wizard_start` | step | Wizard başlatma |
| `onboarding_premium_wizard_complete` | total_time, diet_type, activity_level | Wizard tamamlama |
| `onboarding_premium_wizard_drop` | step, field | Wizard terk etme |
| `onboarding_pdf_download` | report_type | PDF rapor indirme |
| `onboarding_pdf_share` | share_method (whatsapp, email) | PDF paylaşma |

### 11.3 Segment Bazlı Dashboard

| Metrik | Explorer | Suspicious | Treatment | Info-Seeker | Buyer |
|--------|----------|------------|-----------|-------------|-------|
| İlk aksiyon oranı | Hedef: %65 | %80 | %75 | %60 | %85 |
| Aktivasyon oranı | Hedef: %40 | %55 | %45 | %35 | %60 |
| Premium dönüşüm | Hedef: %8 | %12 | %10 | %6 | %25 |
| Gün 7 retention | Hedef: %30 | %40 | %35 | %25 | %50 |

### 11.4 Kohort Analizi Yapısı

| Kohort Boyutu | Değerler |
|---------------|----------|
| Kayıt haftası | W1, W2, W3... |
| Kayıt segmenti | Explorer, Suspicious, Treatment, Info-Seeker, Buyer, Social |
| Kayıt kanalı | Organic, Email, Social, Referral, Ad |
| Checklist tamamlama | 0-25%, 25-50%, 50-75%, 75-100% |
| Aktivasyon durumu | Not activated, Partially, Fully |

---

## 12. A/B Test Planı

### 12.1 Öncelikli Testler (İlk 3 Ay)

| # | Test | Hipotez | Metrik | Öncelik |
|---|------|---------|--------|---------|
| 1 | **Hoşgeldin: 3 kart vs 1 kart** | Tek CTA (semptom testi) > 3 seçenekli kart | İlk aksiyon oranı, aktivasyon | P0 |
| 2 | **Checklist: Floating widget vs Sidebar** | Floating widget daha yüksek farkındalık + tamamlama | Checklist completion rate | P0 |
| 3 | **Segment bazlı vs Tek hoşgeldin** | Segment bazlı yönlendirme > genel hoşgeldin | Aktivasyon oranı, 7 gün retention | P0 |
| 4 | **Checklist ödülü: PDF vs Premium deneme** | PDF rapor > premium deneme (düşük sürtünme) | Checklist tamamlama, premium dönüşüm | P1 |
| 5 | **Premium wizard: 3 adım vs 5 adım** | 3 adım daha yüksek tamamlama, 5 adım daha iyi kişiselleştirme | Wizard tamamlama, 30 gün retention | P1 |
| 6 | **Confetti: Var vs Yok** | Confetti animasyonu > düz geçiş (pozitif duygusal etki) | İlk aksiyon oranı | P2 |
| 7 | **Nudge zamanlaması: 3 gün vs 5 gün** | 3 gün nudge > 5 gün nudge (erken müdahale) | Stalled user recovery oranı | P2 |
| 8 | **Empty state: Blur vs Full gate** | Blur preview > tam gating (merak etkisi) | Premium CTA tıklama oranı | P1 |

### 12.2 Test Parametreleri

| Parametre | Değer |
|-----------|-------|
| Minimum örneklem | 500 kullanıcı / varyant |
| İstatistiksel güven | %95 |
| Minimum etki büyüklüğü | %15 relatif iyileşme |
| Test süresi | Minimum 14 gün, maksimum 30 gün |
| Segment | Yeni kayıtlar (son 24 saat) |
| Atama | Deterministic (user_id hash) |

---

## 13. Teknik Implementasyon

### 13.1 State Management (Zustand)

```typescript
interface OnboardingState {
  // Segment
  segment: OnboardingSegment;
  
  // Checklist
  checklist: {
    items: ChecklistItem[];
    completionPct: number;
    isVisible: boolean;
    isExpanded: boolean;
    isCompleted: boolean;
    lastDismissed: Date | null;
  };
  
  // Tooltips
  tooltips: {
    seen: Set<string>;
    active: string | null;
  };
  
  // Nudges
  nudges: {
    shown: Map<string, number>;     // nudge_id → show count
    dismissed: Map<string, Date>;   // nudge_id → dismiss date
    lastShown: Date | null;
  };
  
  // Engagement
  engagement: EngagementScore;
  
  // Welcome back
  welcomeBack: {
    shouldShow: boolean;
    daysSinceLastVisit: number;
  };
  
  // Actions
  completeChecklistItem: (itemId: string) => void;
  dismissChecklist: (type: 'temp' | 'permanent') => void;
  markTooltipSeen: (tooltipId: string) => void;
  showNudge: (nudgeId: string) => void;
  dismissNudge: (nudgeId: string) => void;
  updateEngagement: () => void;
}
```

### 13.2 Persistence

| Veri | Depolama | TTL |
|------|----------|-----|
| Checklist durumu | Veritabanı (user tablo) | Süresiz |
| Tooltip görüntüleme | localStorage | 90 gün |
| Nudge geçmişi | Veritabanı | 30 gün |
| Engagement score | Hesaplanmış (her oturum başı) | Oturum |
| Segment | Veritabanı (ilk kayıtta set) | Süresiz |
| Welcome back durumu | Hesaplanmış (giriş anı) | Oturum |

### 13.3 Komponent Hiyerarşisi

```
app/
├── (auth)/
│   └── hosgeldin/
│       └── page.tsx                 # Segment bazlı hoşgeldin sayfası
│
├── components/
│   └── onboarding/
│       ├── OnboardingProvider.tsx    # Context + Zustand store
│       ├── ChecklistWidget.tsx      # Floating checklist widget
│       ├── ChecklistItem.tsx        # Tekil checklist öğesi
│       ├── CompletionCelebration.tsx # Tamamlama kutlama modalı
│       ├── WelcomeBackModal.tsx     # Geri dönüş modalı
│       ├── NudgeBanner.tsx          # Contextual nudge banner
│       ├── TooltipOverlay.tsx       # Tooltip tour overlay
│       ├── EmptyState.tsx           # Reusable empty state
│       ├── PremiumGate.tsx          # Blur + CTA gate
│       ├── ConfettiEffect.tsx       # Konfeti animasyonu
│       └── EngagementTracker.tsx    # Etkileşim izleme (headless)
│
├── lib/
│   └── onboarding/
│       ├── segment-detection.ts     # Segment algılama mantığı
│       ├── engagement-score.ts      # Etkileşim skoru hesaplama
│       ├── checklist-config.ts      # Checklist öğe tanımları
│       ├── nudge-rules.ts           # Nudge tetikleme kuralları
│       └── pdf-generator.ts         # "Doktorunuza Götürün" PDF
│
└── hooks/
    └── onboarding/
        ├── useOnboarding.ts         # Ana hook
        ├── useChecklist.ts          # Checklist state + actions
        ├── useNudges.ts             # Nudge gösterim mantığı
        └── useEngagement.ts         # Engagement tracking
```

### 13.4 Server Components vs Client Components

| Komponent | Tip | Gerekçe |
|-----------|-----|---------|
| Hoşgeldin sayfası layout | Server | SEO, hızlı FCP |
| Segment bazlı kart seçimi | Client | Dinamik segment algılama |
| ChecklistWidget | Client | İnteraktif, state yönetimi |
| EmptyState | Server | Statik içerik, CTA linki |
| PremiumGate | Server (wrapper) + Client (CTA) | Blur CSS server-side, CTA client-side |
| TooltipOverlay | Client | Pozisyon hesaplama, animasyon |
| NudgeBanner | Client | Zamanlı gösterim, state |
| ConfettiEffect | Client | Canvas animasyonu |
| EngagementTracker | Client | Event tracking, headless |

### 13.5 Performans Gereksinimleri

| Metrik | Hedef | Strateji |
|--------|-------|----------|
| Hoşgeldin sayfa FCP | < 1.2s | Server component, statik layout |
| Checklist widget TTI | < 500ms | Lazy load, skeleton UI |
| Tooltip render | < 100ms | Preloaded, CSS animasyon |
| Confetti | < 50ms başlangıç | canvas-confetti (2KB), lazy import |
| PDF oluşturma | < 3s | Server-side, react-pdf |
| Engagement hesaplama | < 50ms | Client-side, memoized |

### 13.6 Erişilebilirlik (a11y)

| Gereksinim | Uygulama |
|------------|----------|
| Checklist ARIA | `role="list"`, `aria-label="Başlangıç rehberi"`, öğeler `role="listitem"` |
| Tooltip focus trap | Tooltip açıkken focus tooltip içinde, Escape ile kapat |
| Nudge announcement | `role="status"`, `aria-live="polite"` |
| Modal focus | Modal açıkken arka plan `aria-hidden="true"`, ilk focusable elemana odaklan |
| Reduced motion | `prefers-reduced-motion: reduce` → tüm animasyonlar devre dışı |
| Keyboard nav | Checklist Tab ile gezilebilir, Enter ile aksiyon, Space ile genişletme |
| Screen reader | Tamamlama durumu: "6 öğeden 2'si tamamlandı, yüzde 33" |
| Renk kontrastı | Tüm metin WCAG AA (4.5:1 minimum) |

---

## UYGULAMA ÖNCELİK SIRASI

| Öncelik | Bileşen | Tahmini Süre | Bağımlılık |
|---------|---------|-------------|------------|
| P0 | Segment algılama + hoşgeldin varyantları | 2 gün | Kayıt akışı (signup-output) |
| P0 | Onboarding checklist (widget + öğeler) | 3 gün | Araçlar (free-tools-output) |
| P0 | Empty states (dashboard, topluluk, ilerleme) | 2 gün | Sayfa yapısı (site-architecture) |
| P1 | Progressive value unlock (nudge sistemi) | 2 gün | Checklist |
| P1 | Email + in-app koordinasyonu | 1 gün | Email sistemi (emails-output) |
| P1 | Premium onboarding wizard | 2 gün | Ödeme akışı (signup-output) |
| P2 | Tooltip tour sistemi | 1 gün | Sayfa UI |
| P2 | Stalled user recovery | 1 gün | Nudge sistemi |
| P2 | "Doktorunuza Götürün" PDF oluşturucu | 2 gün | Checklist, araçlar |
| P2 | Analytics event'leri | 1 gün | Tüm bileşenler |
| P3 | A/B test altyapısı | 1 gün | Analytics |
| P3 | Welcome back modal | 0.5 gün | Stalled user detection |
| P3 | Confetti animasyonu | 0.5 gün | Kayıt akışı |

**Toplam tahmini süre:** ~19 gün geliştirme

---

## BAĞLANTI HARİTASI

| Bu Çıktı | Bağlı Olduğu Çıktılar |
|----------|----------------------|
| Segment algılama | signup-output.md (kayıt noktaları) |
| Checklist öğeleri | free-tools-output.md (araçlar), content-pillar-articles.md (makaleler) |
| Email koordinasyonu | emails-output.md (8 email dizisi) |
| Premium dönüşüm | pricing-output.md (4 tier), signup-output.md (ödeme akışı) |
| Empty states | site-architecture-output.md (sayfa yapısı) |
| Nudge içerikleri | copywriting-output.md (mikrokopy tonu) |
| UI tasarım | web-design-output.md (renk sistemi, komponentler) |
| Analytics | cro-output.md (funnel metrikleri) |
| Psikoloji | marketing-psychology-output.md (labor illusion, reciprocity, social proof) |
