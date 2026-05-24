# Lipödem Türkiye -- Kayıt/Abonelik Akışı Tam Tasarımı

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, pricing-output.md, cro-output.md, web-design-output.md, marketing-psychology-output.md, site-architecture-output.md
**Teknoloji:** Next.js 15 (App Router) + NextAuth.js (Auth.js v5) + iyzico + Vercel
**Kapsam:** Kayıt yöntemleri, abonelik akışları, deneme süresi, sosyal giriş, yönlendirme, KVKK, hata yönetimi, mobil UX, analytics

---

## İÇİNDEKİLER

1. [Free Kayıt Akışı](#1-free-kayıt-akışı)
2. [Premium Abonelik Akışı](#2-premium-abonelik-akışı)
3. [Deneme Süresi Akışı](#3-deneme-süresi-akışı)
4. [Sosyal Giriş UX](#4-sosyal-giriş-ux)
5. [Kayıt Sonrası Yönlendirme](#5-kayıt-sonrası-yönlendirme)
6. [Güvenlik ve Gizlilik (KVKK)](#6-güvenlik-ve-gizlilik-kvkk)
7. [Hata Durumları](#7-hata-durumları)
8. [Mobil Kayıt UX](#8-mobil-kayıt-ux)
9. [Analytics Events](#9-analytics-events)
10. [Teknik Implementasyon Notları](#10-teknik-implementasyon-notları)

---
---

## 1. Free Kayıt Akışı

### 1.1 Kayıt Yöntemleri ve Öncelik Sırası

| Öncelik | Yöntem | Neden | Beklenen Kullanım Oranı |
|---------|--------|-------|------------------------|
| 1 | **Google One-Tap** | Tek tıkla kayıt, en düşük sürtünme, Türkiye'de yaygın Google kullanımı | %55-65 |
| 2 | **Email Magic Link** | Şifresiz giriş, güvenli, sağlık platformuna uygun (şifre yönetim yükü yok) | %30-40 |
| 3 | **Email + Şifre** | Yok -- kasıtlı olarak sunulmaz | %0 |

**Şifre neden yok:**
- Sağlık platformunda şifre yönetimi ek sürtünme yaratır
- Magic link, güvenlik açısından daha güçlü (phishing riski düşük)
- Şifre sıfırlama akışı gereksiz hale gelir
- Kullanıcı geri dönüşü kolaylaşır (email tıkla, gir)
- NextAuth.js v5 hem Google Provider hem Email Provider (magic link) destekler

---

### 1.2 Kayıt Formu: Minimum Alanlar

**Karar: Sadece email yeterlidir.**

| Alan | Zorunlu mu? | Ne Zaman İstenir | Gerekçe |
|------|-------------|-------------------|---------|
| **Email** | Evet (kayıtta) | Kayıt anı | Temel kimlik, iletişim, magic link gönderimi |
| **Ad** | Hayır (kayıtta) | Progressive profiling (giriş 2-3) | Toplulukta gösterim, email kişiselleştirme |
| **Şehir** | Hayır (kayıtta) | Progressive profiling (giriş 3-5) | Klinik bulucu kişiselleştirme |
| **Lipödem evresi** | Hayır (kayıtta) | Progressive profiling (giriş 5-7) veya semptom testi sonrası | İçerik kişiselleştirme |
| **Tanı durumu** | Hayır (kayıtta) | Progressive profiling (giriş 3-5) | Segmentasyon |

**Gerekçe:** Her ek alan dönüşüm oranını %10-15 düşürür. Sağlık platformunda hassas bilgi istemi ilk adımda güvensizlik yaratır. Progressive profiling ile zaman içinde bilgi toplanır.

---

### 1.3 Kayıt Ekran Akışı (Wireframe)

#### Ekran 1: Kayıt Sayfası (/kayit)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [← Geri]                              [Giriş Yap →]       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │           🌿  Lipödem Türkiye                       │    │
│  │                                                     │    │
│  │     Yalnız Değilsiniz.                              │    │
│  │     Türkiye'nin ilk lipödem platformuna              │    │
│  │     ücretsiz katılın.                               │    │
│  │                                                     │    │
│  │  ┌───────────────────────────────────────────────┐  │    │
│  │  │  [G] Google ile Devam Et                      │  │    │
│  │  └───────────────────────────────────────────────┘  │    │
│  │                                                     │    │
│  │  ──────────── veya ────────────                     │    │
│  │                                                     │    │
│  │  E-posta adresiniz                                  │    │
│  │  ┌───────────────────────────────────────────────┐  │    │
│  │  │  ornek@email.com                              │  │    │
│  │  └───────────────────────────────────────────────┘  │    │
│  │                                                     │    │
│  │  ┌───────────────────────────────────────────────┐  │    │
│  │  │        Giriş Bağlantısı Gönder                │  │    │
│  │  └───────────────────────────────────────────────┘  │    │
│  │                                                     │    │
│  │  ✓ Ücretsiz, kredi kartı gerekmez                   │    │
│  │  ✓ 2 saniyede kayıt, şifre yok                      │    │
│  │                                                     │    │
│  │  Devam ederek Kullanım Koşulları ve Gizlilik         │    │
│  │  Politikası'nı kabul etmiş olursunuz.                │    │
│  │  KVKK Aydınlatma Metni                              │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  "12.000+ kadın bu platformda başladı"                      │
│  (lansman sonrası, gerçek sayıya ulaşınca göster)           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Tasarım Notları:**
- Google butonu üstte, birincil konum (en düşük sürtünme)
- "veya" ayracı ile email alanı ayrılır
- Güven sinyalleri form altında: "Ücretsiz, kredi kartı gerekmez" + "Şifre yok"
- KVKK metinleri tıklanabilir link olarak (pop-up açar)
- Arka plan: neutral-50 (#FAFAF9), form kartı: beyaz, gölgeli
- Google butonu: Beyaz arka plan, Google renkli logo, siyah metin
- Magic link butonu: teal-600 dolgu, beyaz metin

---

#### Ekran 2a: Magic Link Gönderildi (Email Seçimi)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           ✉️  Giriş Bağlantısı Gönderildi                  │
│                                                             │
│     ahmet@email.com adresine                                │
│     giriş bağlantısı gönderdik.                            │
│                                                             │
│     E-postanızı kontrol edin ve                            │
│     bağlantıya tıklayın.                                   │
│                                                             │
│     ┌───────────────────────────────────────────────┐       │
│     │  Gmail'i Aç   │   Outlook'u Aç   │  Diğer   │       │
│     └───────────────────────────────────────────────┘       │
│                                                             │
│     Bağlantı 15 dakika geçerlidir.                         │
│     Spam/gereksiz klasörünü de kontrol edin.               │
│                                                             │
│     Gelmedi mi? [Tekrar Gönder] (60 sn bekleme)            │
│     Yanlış email mi yazdınız? [Email'i Değiştir]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Detaylar:**
- Email sağlayıcısı otomatik algılama: `@gmail.com` -> "Gmail'i Aç" butonu gösterilir
- "Tekrar Gönder" butonu 60 sn cooldown ile (spam önleme)
- "Email'i Değiştir" ile kayıt formuna geri dönüş
- Magic link süresi: 15 dakika (NextAuth.js varsayılanı, güvenlik için yeterli)
- Magic link tek kullanımlık (tıklandığında geçersiz olur)

---

#### Ekran 2b: Google One-Tap Akışı

```
Google One-Tap tetiklenme noktaları:
1. /kayit sayfasına geldiğinde (inline, tam buton)
2. Herhangi bir sayfada giriş yapmamış kullanıcı için
   (sağ üst köşe One-Tap popup -- sayfa yüklenmesinden 3 sn sonra)

Akış:
Kullanıcı Google butonuna tıklar
    │
    ▼
Google hesap seçici açılır (popup)
    │
    ▼
Kullanıcı hesabını seçer
    │
    ▼
NextAuth.js Google callback işlenir
    │
    ├── Yeni kullanıcı → Hesap oluşturulur → Hoşgeldin sayfası
    │
    └── Mevcut kullanıcı → Giriş yapılır → Son kaldığı yer veya ana sayfa
```

**Google One-Tap Popup (Sayfada Inline Değil):**

```
┌──────────────────────────────────┐
│  Google ile oturum açın          │
│                                  │
│  ┌────┐  ahmet@gmail.com        │
│  │foto│  Ahmet Ökyay             │
│  └────┘                          │
│                                  │
│  [Devam Et]  [İptal]            │
└──────────────────────────────────┘
```

**Gösterim Kuralları:**
- One-Tap popup sadece giriş yapmamış kullanıcılara gösterilir
- Kullanıcı "İptal" derse 24 saat gösterilmez (cooldown)
- Mobilde bottom sheet olarak gösterilir
- Premium sayfasında, semptom testi sonucunda ve klinik bulucu'da tetiklenir (dönüşüm yüksek sayfalar)

---

### 1.4 Email Doğrulama Akışı

**Strateji: Ertelenmiş Doğrulama (Delayed Verification)**

| Adım | Açıklama | Gerekçe |
|------|----------|---------|
| 1 | Magic link tıklanır → otomatik doğrulanmış kabul edilir | Magic link zaten email sahipliğini doğrular |
| 2 | Google OAuth → email otomatik doğrulanmış | Google hesabı zaten doğrulanmış |
| 3 | Doğrulanmamış durumda sınırlama | Topluluk yazma, premium satın alma gibi aksiyonlarda doğrulama istenir |

**Not:** Magic link ile kayıt zaten implicit email doğrulaması yapar. Ayrı bir doğrulama emaili göndermek gereksiz sürtünme yaratır.

**Doğrulama gerektiren aksiyonlar (magic link kullanılmadıysa):**
- Toplulukta yazı paylaşma
- Premium abonelik satın alma
- Klinik randevu talebi gönderme
- Profil bilgilerini dışa aktarma

---

### 1.5 Hoşgeldin Sayfası (/hosgeldin)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           🌿  Hoş Geldiniz!                                │
│                                                             │
│     Türkiye'nin ilk lipödem platformuna katıldınız.         │
│     Yalnız değilsiniz -- binlerce kadın bu yolculukta       │
│     birlikte.                                               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │   Sizin için en iyi başlangıç hangisi?              │    │
│  │                                                     │    │
│  │   ┌────────────────────────────────────────────┐    │    │
│  │   │ 📋  2 Dakikalık Semptom Testini Çözün      │    │    │
│  │   │     Belirtilerinizi değerlendirin,          │    │    │
│  │   │     sonucu doktorunuza götürün              │    │    │
│  │   │                              [Teste Başla →]│    │    │
│  │   └────────────────────────────────────────────┘    │    │
│  │                                                     │    │
│  │   ┌────────────────────────────────────────────┐    │    │
│  │   │ 📖  Lipödem Nedir? Rehberini Okuyun        │    │    │
│  │   │     Bilimsel, kapsamlı, anlaşılır           │    │    │
│  │   │     Türkçe kaynak                           │    │    │
│  │   │                           [Rehbere Git →]   │    │    │
│  │   └────────────────────────────────────────────┘    │    │
│  │                                                     │    │
│  │   ┌────────────────────────────────────────────┐    │    │
│  │   │ 🏥  Şehrinizdeki Uzmanı Bulun              │    │    │
│  │   │     81 ilde lipödem doktoru ve              │    │    │
│  │   │     klinik bilgisi                          │    │    │
│  │   │                        [Klinik Bulucu →]    │    │    │
│  │   └────────────────────────────────────────────┘    │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  [Ana Sayfaya Git]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Tasarım Notları:**
- 3 seçenek kartı: Semptom testi (birincil, vurgulu), Rehber, Klinik bulucu
- Semptom testi kartı teal-50 arka plan + teal-600 kenarlık (birincil vurgu)
- Diğer kartlar beyaz arka plan + stone-200 kenarlık
- "Ana Sayfaya Git" linki en altta, ghost buton (atlanabilir olduğunu gösterir)
- Bu sayfa kayıt sonrası otomatik yönlendirme hedefi

---

### 1.6 Progressive Profiling Stratejisi

**Prensip:** Bilgiyi değer karşılığında, doğal bağlamlarda, küçük parçalar halinde topla.

#### Profil Tamamlama Zamanlaması

| Giriş # | Ne İstenir | Bağlam | Format | Atlanabilir mi? |
|----------|-----------|--------|--------|-----------------|
| 1 (kayıt) | Email | Kayıt formu | Form alanı | Hayır |
| 2-3 | Ad | Hoşgeldin emaili veya ilk profil ziyareti | Top bar banner: "Adınızı ekleyin, topluluğu kişiselleştirelim" | Evet |
| 3-5 | Tanı durumu | Semptom testi sonrası veya profil sayfası | Radyo buton: "Tanı aldınız mı?" (3 seçenek) | Evet |
| 5-7 | Şehir | Klinik bulucu kullanımında veya profil sayfası | Autocomplete dropdown | Evet |
| 7-10 | Lipödem evresi | Evre değerlendirme aracı sonrası | Otomatik doldurma (araç sonucundan) | Evet |
| Herhangi | Telefon | Premium satın alma sırasında (iyzico gereksinimi) | Tel input | Hayır (ödeme için) |

#### Progressive Profiling UI: Top Bar Banner

```
┌─────────────────────────────────────────────────────────────┐
│  Profiliniz %30 tamamlandı · Adınızı ekleyin →  [Tamamla]  │  [X]
└─────────────────────────────────────────────────────────────┘
```

**Kurallar:**
- Banner her sayfada gösterilir (kapatılabilir)
- Kapatılırsa 7 gün gösterilmez
- Profil %100 olduğunda banner kaybolur
- Her tamamlama adımında teal tik animasyonu ile olumlu geri bildirim
- Agresif olmayan ton: "Daha kişisel bir deneyim için" gerekçesi

#### Profil Tamamlama Sayfası (/hesap/profil)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     Profilinizi Tamamlayın                                  │
│     Daha kişisel içerik ve öneriler için                    │
│                                                             │
│     ┌──────────── %40 ─────────────────────────────┐        │
│     │████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│        │
│     └──────────────────────────────────────────────┘        │
│                                                             │
│     Email ✓                                                 │
│     ahmet@email.com                                         │
│                                                             │
│     Ad                                                      │
│     ┌───────────────────────────────────────────────┐       │
│     │  Adınızı yazın                                │       │
│     └───────────────────────────────────────────────┘       │
│     Toplulukta bu isimle görünürsünüz                       │
│                                                             │
│     Şehir                                                   │
│     ┌───────────────────────────────────────────────┐       │
│     │  Şehrinizi seçin ▾                            │       │
│     └───────────────────────────────────────────────┘       │
│     Yakınızdaki klinik ve doktorları bulmanız için          │
│                                                             │
│     Tanı durumu (opsiyonel)                                 │
│     ○ Evet, lipödem tanım var                               │
│     ○ Şüpheleniyorum ama tanı almadım                      │
│     ○ Henüz bilmiyorum, araştırıyorum                      │
│                                                             │
│     Lipödem evresi (opsiyonel)                              │
│     ○ Evre 1   ○ Evre 2   ○ Evre 3   ○ Bilmiyorum          │
│                                                             │
│     ┌───────────────────────────────────────────────┐       │
│     │             Kaydet                             │       │
│     └───────────────────────────────────────────────┘       │
│                                                             │
│     [Şimdilik Atla]                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Not:** Tüm alanlar (email hariç) opsiyonel. "Şimdilik Atla" belirgin.

---
---

## 2. Premium Abonelik Akışı

### 2.1 Fiyatlandırma Sayfasından Ödeme Akışına Geçiş

**Genel Akış:**

```
Fiyatlandırma sayfası (/premium)
    │
    ├── [Ücretsiz Başla] → /kayit (giriş yapmamışsa) veya /hosgeldin
    │
    ├── [Planı Seç] (Temel Premium) → Ödeme akışı başlar
    │
    ├── [14 Gün Ücretsiz Deneyin] (Tam Premium) → Deneme akışı başlar
    │
    └── [Kurucu Üye Ol] → Kurucu üyelik akışı başlar
```

**Giriş kontrolü:**
- Kullanıcı giriş yapmamışsa: Plan seçimi tıklandığında önce kayıt/giriş ekranı gösterilir, ardından otomatik olarak ödeme adımına yönlendirilir
- Redirect URL korunur: `/kayit?redirect=/odeme?plan=tam-premium`

---

### 2.2 Ödeme Akışı: 3 Adımlı Yapı

**URL:** `/odeme` (tek sayfa, adımlar client-side)

#### Adım 1: Plan Onayı ve Periyot Seçimi

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Adım 1/3: Plan Seçimi       ━━━━━━━○─────○─────           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  ★ Tam Premium                                      │    │
│  │                                                     │    │
│  │  Ödeme periyodu:                                    │    │
│  │  ┌──────────────────┐  ┌──────────────────────┐     │    │
│  │  │   ○  Aylık       │  │   ●  Yıllık          │     │    │
│  │  │   149 TL/ay      │  │   108 TL/ay          │     │    │
│  │  │                  │  │   1.299 TL/yıl       │     │    │
│  │  │                  │  │   ┌────────────┐     │     │    │
│  │  │                  │  │   │ 2 AY HEDİYE│     │     │    │
│  │  │                  │  │   └────────────┘     │     │    │
│  │  └──────────────────┘  └──────────────────────┘     │    │
│  │                                                     │    │
│  │  Seçilen plan özeti:                                │    │
│  │  ─────────────────────────────────                  │    │
│  │  Tam Premium -- Yıllık                              │    │
│  │  Tutar: 1.299 TL/yıl (108,25 TL/ay)                │    │
│  │  İlk ödeme: [bugünün tarihi + 14 gün]               │    │
│  │  14 gün ücretsiz deneme dahil                       │    │
│  │                                                     │    │
│  │  Dahil olanlar:                                     │    │
│  │  ✓ Kişiselleştirilmiş beslenme planı                │    │
│  │  ✓ 8 haftalık video egzersiz programı               │    │
│  │  ✓ Aylık uzman Q&A oturumu                          │    │
│  │  ✓ Tam topluluk + mentor eşleştirme                 │    │
│  │  ✓ İlerleme takip araçları                          │    │
│  │  + 10 özellik daha                                  │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌───────────────────────────────────────────────────┐       │
│  │             Ödeme Bilgilerine Geç →               │       │
│  └───────────────────────────────────────────────────┘       │
│                                                             │
│  ✓ İstediğiniz zaman iptal   ✓ 30 gün iade garantisi       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Tasarım Notları:**
- Yıllık plan varsayılan olarak seçili (önerilen)
- "2 AY HEDİYE" etiketi amber-400 arka plan
- Plan özeti daima görünür (sağ sidebar desktop'ta, üst bölüm mobilde)
- Deneme dahilse "İlk ödeme tarihi" açıkça gösterilir -- sürpriz yok
- Güven sinyalleri: "İstediğiniz zaman iptal" + "30 gün iade garantisi"

---

#### Adım 2: Kişisel Bilgiler

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Adım 2/3: Bilgileriniz      ━━━━━━━━━━━━○─────           │
│                                                             │
│  Ad Soyad *                                                 │
│  ┌───────────────────────────────────────────────┐          │
│  │  Adınız Soyadınız                             │          │
│  └───────────────────────────────────────────────┘          │
│                                                             │
│  E-posta *                                                  │
│  ┌───────────────────────────────────────────────┐          │
│  │  ahmet@email.com                 ✓ doğrulandı │          │
│  └───────────────────────────────────────────────┘          │
│  (Giriş yapılmışsa otomatik doldurulur, salt okunur)        │
│                                                             │
│  Telefon *                                                  │
│  ┌────────┐ ┌────────────────────────────────────┐          │
│  │ +90  ▾ │ │ 5XX XXX XX XX                      │          │
│  └────────┘ └────────────────────────────────────┘          │
│  iyzico ödeme güvenliği için gereklidir                     │
│                                                             │
│  ┌───────────────────────────────────────────────┐          │
│  │             Ödeme Adımına Geç →                │          │
│  └───────────────────────────────────────────────┘          │
│                                                             │
│  [← Önceki Adım]                                           │
│                                                             │
│  🔒 Bilgileriniz 256-bit SSL ile şifrelenir                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Detaylar:**
- Email giriş yapılmışsa otomatik doldurulur (düzenlenemez)
- Ad Soyad Google OAuth'dan geliyorsa otomatik doldurulur (düzenlenebilir)
- Telefon: iyzico API'si zorunlu kılıyor -- nedenini açıkla
- Inline doğrulama: Her alan blur'da kontrol
- Autocomplete attribute'ları: `autocomplete="name"`, `autocomplete="email"`, `autocomplete="tel"`

---

#### Adım 3: Ödeme (iyzico Entegrasyonu)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Adım 3/3: Güvenli Ödeme     ━━━━━━━━━━━━━━━━━━━          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Plan Özeti                               │ Değiştir│    │
│  │  ─────────────────────────────────         │        │    │
│  │  Tam Premium -- Yıllık                     │        │    │
│  │  14 gün ücretsiz deneme                    │        │    │
│  │  İlk ödeme: 7 Haziran 2026                │        │    │
│  │  Tutar: 1.299 TL/yıl                      │        │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Kart Bilgileri                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  Kart numarası                                      │    │
│  │  ┌──────────────────────────────────────────────┐   │    │
│  │  │  0000 0000 0000 0000          [Visa][MC][Troy]│   │    │
│  │  └──────────────────────────────────────────────┘   │    │
│  │                                                     │    │
│  │  Kart üzerindeki isim                               │    │
│  │  ┌──────────────────────────────────────────────┐   │    │
│  │  │  AHMET OKYAY                                 │   │    │
│  │  └──────────────────────────────────────────────┘   │    │
│  │                                                     │    │
│  │  Son kullanma       CVV                             │    │
│  │  ┌────────────┐    ┌────────────┐                   │    │
│  │  │  AA / YY    │    │  ***       │                   │    │
│  │  └────────────┘    └────────────┘                   │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Taksit Seçenekleri (yıllık plan)                           │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  ● Tek çekim          1.299 TL                      │    │
│  │  ○ 3 taksit           433 TL x 3 ay                 │    │
│  │  ○ 6 taksit           216,50 TL x 6 ay              │    │
│  │  ○ 9 taksit           144,33 TL x 9 ay              │    │
│  │                                                     │    │
│  │  Vade farkı yoktur.                                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ☐ KVKK Açık Rıza Metni'ni okudum ve kabul ediyorum *      │
│  ☐ Ticari elektronik ileti almak istiyorum (opsiyonel)      │
│                                                             │
│  ┌───────────────────────────────────────────────────┐       │
│  │        🔒 Güvenli Ödeme Yap -- 1.299 TL           │       │
│  └───────────────────────────────────────────────────┘       │
│                                                             │
│  [← Önceki Adım]                                           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  🛡️ 30 Gün İade Garantisi                          │    │
│  │  Memnun kalmazsanız, ilk 30 gün tam iade            │    │
│  │                                                     │    │
│  │  🔒 iyzico Korumalı Ödeme                           │    │
│  │  256-bit SSL şifreleme ile güvenli                   │    │
│  │                                                     │    │
│  │  ↩️ İstediğiniz Zaman İptal                          │    │
│  │  Tek tıkla, soru sorulmaz                           │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  KVKK uyumlu | Gizlilik Politikası | Kullanım Koşulları     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Taksit Detayları:**

| Taksit | Temel Premium Yıllık (699 TL) | Tam Premium Yıllık (1.299 TL) | Kurucu Üye Yıllık (779 TL) |
|--------|-------------------------------|-------------------------------|----------------------------|
| Tek çekim | 699 TL | 1.299 TL | 779 TL |
| 3 taksit | 233 TL x 3 | 433 TL x 3 | 259,67 TL x 3 |
| 6 taksit | 116,50 TL x 6 | 216,50 TL x 6 | 129,83 TL x 6 |
| 9 taksit | 77,67 TL x 9 | 144,33 TL x 9 | 86,56 TL x 9 |

**Taksit gösterim kuralları:**
- Aylık planlarda taksit seçeneği gösterilmez (zaten aylık)
- Yıllık planlarda 3, 6, 9 taksit seçenekleri
- Vade farkı yok -- platform karşılar (iyzico komisyonu platform tarafında)
- Taksit seçenekleri kart numarası girildikten sonra dinamik olarak güncellenir (banka uyumluluğuna göre)
- iyzico API `installmentDetails` endpoint'i kullanılır

**iyzico Entegrasyon Detayları:**

| Parametre | Değer |
|-----------|-------|
| Entegrasyon tipi | iyzico API (sunucu taraflı) + iyzico.js (istemci taraflı kart formu) |
| Ödeme modeli | `Subscription` (tekrarlayan ödeme) |
| Taksit | `installmentDetails` API ile banka/taksit uyumluluğu kontrolü |
| 3D Secure | Zorunlu (Türkiye regülasyonu) |
| Para birimi | TRY |
| Callback URL | `/api/odeme/callback` |
| Webhook | `/api/odeme/webhook` (ödeme durumu bildirimi) |

**Kart formu UX:**
- Kart numarası otomatik formatlama: `0000 0000 0000 0000` (4'erli gruplama)
- Kart tipi otomatik algılama: İlk 4 rakamdan Visa/Mastercard/Troy logosu
- CVV alanı: `type="password"` ile gizleme
- Son kullanma: `AA/YY` formatı, otomatik `/` ekleme
- Tüm alanlar `inputmode="numeric"` (mobilde sayı klavyesi)

---

### 2.3 Ödeme Başarı Sayfası (/odeme/basarili)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           ✓  Ödemeniz Başarıyla Tamamlandı!                 │
│                                                             │
│     Tam Premium üyeliğiniz aktif.                           │
│     Sağlık yolculuğunuza hoş geldiniz.                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Abonelik Özeti                                     │    │
│  │  ─────────────────────────────────                  │    │
│  │  Plan: Tam Premium (Yıllık)                         │    │
│  │  Tutar: 1.299 TL/yıl                                │    │
│  │  Sonraki ödeme: 7 Haziran 2027                       │    │
│  │  Ödeme yöntemi: **** 1234 (Visa)                    │    │
│  │                                                     │    │
│  │  Fatura ahmet@email.com adresine gönderildi         │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│     Şimdi ne yapmak istersiniz?                             │
│                                                             │
│  ┌────────────────────────────────────────────┐             │
│  │ 📋  Kişisel Beslenme Planınızı Oluşturun   │             │
│  │     Evrenize özel anti-inflamatuar plan      │             │
│  │                          [Planımı Oluştur →] │             │
│  └────────────────────────────────────────────┘             │
│                                                             │
│  ┌────────────────────────────────────────────┐             │
│  │ 🏋️  Egzersiz Programına Başlayın            │             │
│  │     8 haftalık video rehberli program        │             │
│  │                          [Programa Başla →]  │             │
│  └────────────────────────────────────────────┘             │
│                                                             │
│  ┌────────────────────────────────────────────┐             │
│  │ 👥  Topluluğa Katılın                       │             │
│  │     Sizi anlayan kadınlarla tanışın          │             │
│  │                      [Topluluğa Katıl →]     │             │
│  └────────────────────────────────────────────┘             │
│                                                             │
│  [Hesabıma Git]                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Otomatik aksiyonlar (arka planda):**
- Hoşgeldin emaili gönderilir (fatura + başlangıç rehberi)
- Kullanıcı rolü `premium` olarak güncellenir
- Premium içeriklere erişim açılır
- Topluluk yazma izni aktifleşir
- Analytics event: `premium_purchase_complete`

---

### 2.4 Ödeme Hata Sayfası

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           ⚠️  Ödeme İşlemi Tamamlanamadı                    │
│                                                             │
│     Endişelenmeyin, kartınızdan herhangi bir                │
│     ücret çekilmedi.                                       │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  Olası nedenler:                                    │    │
│  │  • Kart limiti yetersiz olabilir                     │    │
│  │  • Online alışveriş izniniz kapalı olabilir          │    │
│  │  • 3D Secure onayı zaman aşımına uğramış olabilir   │    │
│  │                                                     │    │
│  │  Ne yapabilirsiniz:                                  │    │
│  │  1. Bankanızdan online alışveriş iznini kontrol edin │    │
│  │  2. Farklı bir kart deneyin                          │    │
│  │  3. Taksit seçeneğini değiştirin                     │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌───────────────────────────────────────────────────┐       │
│  │             Tekrar Dene                            │       │
│  └───────────────────────────────────────────────────┘       │
│                                                             │
│  Sorun devam ediyorsa: destek@lipodemturkiye.com            │
│                                                             │
│  Plan bilgileriniz kaydedildi -- istediğiniz zaman          │
│  geri dönüp tamamlayabilirsiniz.                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Hata yönetimi kuralları:**
- Kart bilgileri korunur (PCI uyumlu şekilde iyzico tarafında)
- Form sıfırlanmaz -- kullanıcı düzeltip tekrar deneyebilir
- Hata mesajı empatik ve çözüm odaklı
- "Kartınızdan ücret çekilmedi" güvencesi ilk satırda
- Destek iletişim bilgisi hata sayfasında görünür

---

### 2.5 Kurucu Üyelik Özel Akışı

**Kurucu üyelik akışı standart premium akışından şu noktalarda farklıdır:**

```
Fiyatlandırma sayfası → [Kurucu Üye Ol] tıklanır
    │
    ▼
Kurucu Üyelik Bilgi Sayfası (modal veya ayrı sayfa)
    │
    ▼
Ödeme akışı (standart 3 adım, farklı fiyat ile)
    │
    ▼
Kurucu üyelik onay sayfası (özel)
```

#### Kurucu Üyelik Bilgi Modalı

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     ★ Kurucu Üye Olun                                      │
│                                                             │
│     Türkiye'nin ilk lipödem platformunun                    │
│     kurucu topluluğuna katılın.                             │
│                                                             │
│     ┌──────────────────────────────────────────────┐        │
│     │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━░░░░░░░    │        │
│     │ 164/200 kurucu üye hakkı kullanıldı          │        │
│     │ Kalan: 36                                    │        │
│     └──────────────────────────────────────────────┘        │
│                                                             │
│     Kurucu üye avantajları:                                 │
│     ✓ Ömür boyu %40 indirim (89 TL/ay, normal 149 TL)      │
│     ✓ Fiyat artışlarından etkilenmezsiniz                   │
│     ✓ "Kurucu Üye" topluluk rozeti                         │
│     ✓ Yeni özelliklere 2 hafta erken erişim                │
│     ✓ Aylık kurucu toplantısı (platform ekibiyle)           │
│     ✓ Her yönlendirmede 1 ay ücretsiz                      │
│                                                             │
│     ┌───────────────────────────────────────────────┐       │
│     │  Kurucu Üye Ol -- 89 TL/ay (779 TL/yıl)      │       │
│     └───────────────────────────────────────────────┘       │
│     Amber/altın gradyan buton                               │
│                                                             │
│     14 gün deneme yok -- doğrudan başlar                    │
│     30 gün iade garantisi geçerlidir                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Kurucu üyelik farkları:**
- 14 gün ücretsiz deneme yok (doğrudan ödeme)
- 30 gün iade garantisi var
- Sayaç gerçek zamanlı güncellenir
- 200 kontenjan dolduğunda buton deaktif olur + "Kurucu üyelik tamamlandı" mesajı
- Kurucu üyelik CTA butonu amber gradyan (diğer butonlardan farklı renk)

---
---

## 3. Deneme Süresi Akışı

### 3.1 Deneme Modeli

| Parametre | Karar | Gerekçe |
|-----------|-------|---------|
| Süre | **14 gün** | 7 gün yetersiz (araçları denemek için), 30 gün aciliyet yok |
| Kredi kartı | **Gerekli değil** | Türk pazarında fiyat hassasiyeti yüksek, güven inşası öncelikli |
| Erişim seviyesi | **Tam Premium (Tier 2)** | En yüksek değeri denesin, farkı görsün |
| Deneme sonu | **Otomatik Free'ye düşme** | Kart alınmadığı için otomatik ücretlendirme yok |
| Aktivasyon | **Email ile kayıt yeterli** | Ek bilgi istenmez |

### 3.2 Deneme Başlatma Akışı

```
Kullanıcı [14 Gün Ücretsiz Deneyin] tıklar
    │
    ├── Giriş yapmamış → Kayıt ekranı → Kayıt sonrası deneme otomatik başlar
    │
    └── Giriş yapmış → Deneme onay ekranı → Tek tıkla başlat
```

#### Deneme Onay Ekranı (Giriş Yapmış Kullanıcı)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     14 Günlük Ücretsiz Denemenizi Başlatın                  │
│                                                             │
│     Tam Premium'un tüm özelliklerine                        │
│     14 gün boyunca ücretsiz erişin.                        │
│                                                             │
│     ✓ Kredi kartı gerekmez                                 │
│     ✓ Otomatik ücretlendirme yok                           │
│     ✓ İstediğiniz zaman sonlandırabilirsiniz               │
│                                                             │
│     Deneme süresinde erişeceğiniz:                          │
│     • Kişiselleştirilmiş beslenme planı                    │
│     • 8 haftalık video egzersiz programı                    │
│     • Aylık uzman Q&A oturumu                               │
│     • Tam topluluk erişimi + mentor eşleştirme              │
│     • İlerleme takip araçları                               │
│     • Premium makaleler ve video kütüphanesi                │
│                                                             │
│     ┌───────────────────────────────────────────────┐       │
│     │        Denemeyi Başlat -- Ücretsiz             │       │
│     └───────────────────────────────────────────────┘       │
│                                                             │
│     Deneme bitiş tarihi: 7 Haziran 2026                     │
│     Deneme sonunda Free plana geçersiniz.                   │
│     Devam etmek isterseniz Premium planı seçebilirsiniz.    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Not:** Deneme bitiş tarihi açıkça gösterilir. "Otomatik ücretlendirme yok" vurgusu güvensizliği azaltır.

---

### 3.3 Deneme Süresi Email Dizisi

| Gün | Email | Konu | Amaç |
|-----|-------|------|------|
| 0 | Hoşgeldin | "Premium denemeniz başladı -- ilk adım burada" | Onboarding: Beslenme planı oluşturmaya yönlendir |
| 1 | Değer teslimi | "Bugün deneyin: Kişisel beslenme planınız hazır" | Premium değer gösterimi |
| 3 | Topluluk daveti | "Sizi anlayan bir topluluk var -- katılın" | Bağlılık oluşturma |
| 5 | Araç hatırlatma | "Henüz denediniz mi? Egzersiz programınız sizi bekliyor" | Aktivasyon |
| 7 | Yarı yol | "7 gün oldu -- şu ana kadar neler başardınız" | İlerleme gösterimi |
| 10 | Uzman Q&A | "Bu ayki uzman Q&A: [konu] -- katılın" | Premium-only değer |
| 11 | 3 gün kaldı | "Premium denemeniz 3 gün sonra bitiyor" | Aciliyet, dönüşüm |
| 13 | 1 gün kaldı | "Son gün: Premium erişiminiz yarın sona eriyor" | Son CTA |
| 14 | Deneme bitti | "Premium denemeniz sona erdi -- ama yolculuğunuz bitmedi" | Dönüşüm veya ilişki sürdürme |
| 17 | Geri kazanım | "Sizi özledik -- Premium'a %20 indirimle geri dönün" | Win-back (sadece dönüşmeyenlere) |
| 30 | Son teklif | "Son şans: Özel fiyatla Premium'a geçin" | Son win-back |

---

### 3.4 Deneme Bitiş Bildirimi (In-App)

#### 3 Gün Kala -- Top Bar Banner

```
┌─────────────────────────────────────────────────────────────┐
│  ⏰ Premium denemeniz 3 gün sonra bitiyor.                  │
│  Kişisel programlarınız devam etsin mi?                     │
│                             [Premium'a Geç]  [Hatırlat]  [X]│
└─────────────────────────────────────────────────────────────┘
```

#### Deneme Bitiş Günü -- Modal

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     Premium Denemeniz Bugün Sona Eriyor                     │
│                                                             │
│     14 günde neler yaptınız:                                │
│     ✓ Beslenme planınızı oluşturdunuz                       │
│     ✓ 3 egzersiz videosunu tamamladınız                     │
│     ✓ Toplulukta 2 paylaşım yaptınız                       │
│     (dinamik -- kullanıcının gerçek aktivitesi)              │
│                                                             │
│     Devam etmek ister misiniz?                              │
│                                                             │
│     ┌───────────────────────────────────────────────┐       │
│     │  Tam Premium'a Geç -- 149 TL/ay               │       │
│     └───────────────────────────────────────────────┘       │
│     ┌───────────────────────────────────────────────┐       │
│     │  Temel Premium -- 79 TL/ay                     │       │
│     └───────────────────────────────────────────────┘       │
│                                                             │
│     [Ücretsiz plana geç]                                    │
│                                                             │
│     Ücretsiz planda da blog, semptom testi ve klinik        │
│     bulucu'ya erişiminiz devam eder.                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Kişiselleştirilmiş İlerleme Gösterimi:**
- Kullanıcının 14 gün içinde gerçekte kullandığı özellikleri dinamik olarak listele
- "14 günde X başardınız" -- kayıptan kaçınma psikolojisi (bunu kaybedeceksiniz)
- Kullanmadığı özellikleri de göster: "Henüz denemedikleriniz: Mentor eşleştirme, İlerleme takibi"

---

### 3.5 Deneme Sonrası Geçiş Matrisi

| Deneme Sonucu | Kullanıcı Aksiyonu | Sistem Davranışı |
|---------------|-------------------|------------------|
| Dönüşüm (Premium satın aldı) | "Premium'a Geç" tıklar | Ödeme akışına yönlendir, premium özelliklere kesintisiz devam |
| Geri düşme (aksiyonsuz) | Deneme süresi dolar, aksiyonsuz | Otomatik Free'ye düşürülür, premium içerikler kilitlenir |
| Erken sonlandırma | "Ücretsiz plana geç" tıklar | Hemen Free'ye düşürülür, 3 soruluk çıkış anketi göster |

**Free'ye düşme deneyimi:**
- Premium içerikler "bulanık" overlay ile gösterilir (içerik görünür ama okunamaz)
- Bulanık overlay üzerinde: "Bu içerik Premium üyelere özeldir. [Premium'a Geç]"
- Kişisel beslenme/egzersiz planları "dondurulur" -- Premium'a geçince aynı yerden devam
- Topluluk okuma devam eder, yazma kilitlenir

---
---

## 4. Sosyal Giriş UX

### 4.1 Google One-Tap Implementasyonu

**NextAuth.js v5 + Google Provider yapılandırması:**

| Parametre | Değer |
|-----------|-------|
| Provider | `GoogleProvider` (NextAuth.js) |
| Scope | `openid email profile` |
| Prompt | `select_account` (ilk giriş), `none` (tekrar giriş) |
| One-Tap | Google Identity Services (GIS) client-side SDK |
| Callback URL | `/api/auth/callback/google` |

**Google One-Tap Tetiklenme Noktaları:**

| Sayfa | Tetiklenme | Gecikme | Koşul |
|-------|-----------|---------|-------|
| Ana sayfa | Sayfa yüklenmesinde | 3 saniye | Giriş yapmamış + ilk ziyaret |
| Semptom testi sonucu | Sonuç gösterildikten sonra | 2 saniye | "Sonuçlarınızı kaydetmek ister misiniz?" |
| Premium sayfası | Sayfa yüklenmesinde | 1 saniye | Giriş yapmamış |
| Blog makaleleri | %50 scroll sonrası | -- | Giriş yapmamış + 2+ makale okumuş |
| Klinik bulucu | Filtre kullanıldığında | -- | Giriş yapmamış |

**One-Tap Popup Konumu:**
- Desktop: Sağ üst köşe (Google varsayılanı)
- Mobil: Bottom sheet olarak gösterilir (custom implementation)

**Cooldown Kuralları:**
- Kullanıcı kapatırsa: 24 saat gösterilmez
- 3 kez kapatırsa: 7 gün gösterilmez
- "Giriş Yap" sayfasında: Her zaman gösterilir (cooldown uygulanmaz)

---

### 4.2 "Email ile Devam Et" Fallback

**Google One-Tap başarısız olduğu durumlar:**
- Kullanıcının Google hesabı yok
- Popup engelleyici aktif
- GIS SDK yüklenemedi
- Kullanıcı Google ile paylaşım istemiyor

**Fallback akışı:**

```
Google One-Tap başarısız
    │
    ▼
Email kayıt formu otomatik odaklanır (autofocus)
    │
    ▼
"E-posta adresiniz" alanına yazma
    │
    ▼
"Giriş Bağlantısı Gönder" tıklanır
    │
    ▼
Magic link emaili gönderilir
    │
    ▼
Kullanıcı emaildeki linke tıklar
    │
    ▼
Otomatik giriş yapılır → Hoşgeldin sayfası
```

**Email alanı akıllı davranışlar:**
- Yaygın typo düzeltme: `gmial.com` -> "gmail.com mu demek istediniz?" önerisi
- Email sağlayıcısı algılama: `@gmail.com`, `@outlook.com`, `@hotmail.com`, `@yahoo.com`
- HTML5 `type="email"` + `autocomplete="email"` + `inputmode="email"`
- Enter tuşu ile form submit

---

### 4.3 Hesap Birleştirme (Account Linking)

**Senaryo:** Kullanıcı önce email ile kayıt olur, sonra Google ile giriş yapmak ister (veya tersi).

**NextAuth.js v5 hesap birleştirme stratejisi:**

| Senaryo | Sistem Davranışı | Kullanıcı Deneyimi |
|---------|------------------|-------------------|
| Google ile kayıt olmuş, email ile giriş dener (aynı email) | Magic link gönderilir, giriş yapılır, aynı hesaba bağlanır | Kullanıcı fark etmez -- sorunsuz giriş |
| Email ile kayıt olmuş, Google ile giriş dener (aynı email) | Google hesabı mevcut email hesabına bağlanır | "Google hesabınız e-posta hesabınızla birleştirildi. Artık ikisiyle de giriş yapabilirsiniz." |
| Farklı email'ler | Ayrı hesaplar oluşturulur | Normal akış |
| Google email'i değişmiş | Email eşleşmezse yeni hesap oluşturulur | Eski hesaba erişim için destek yönlendirmesi |

**Birleştirme onay ekranı:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     Bu e-posta adresiyle zaten bir hesap var                │
│                                                             │
│     ahmet@gmail.com adresiyle daha önce                     │
│     e-posta ile kayıt olmuşsunuz.                          │
│                                                             │
│     Google hesabınızı bu hesapla birleştirmek                │
│     ister misiniz? Böylece her iki yöntemle de               │
│     giriş yapabilirsiniz.                                   │
│                                                             │
│     ┌───────────────────────────────────────────────┐       │
│     │        Hesapları Birleştir                     │       │
│     └───────────────────────────────────────────────┘       │
│                                                             │
│     [Farklı bir hesap oluştur]                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Teknik implementasyon:**
```
// NextAuth.js v5 auth.ts konfigürasyonu
allowDangerousEmailAccountLinking: true
// VEYA
// callbacks.signIn() içinde email eşleştirme mantığı
```

**Önemli:** `allowDangerousEmailAccountLinking` sadece güvenilir provider'lar için kullanılmalı (Google OAuth email doğrulanmış kabul edilir). Email magic link de doğrulanmış kabul edilir.

---

### 4.4 Giriş Ekranı (/giris)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           🌿  Lipödem Türkiye                               │
│                                                             │
│           Tekrar Hoş Geldiniz                               │
│                                                             │
│  ┌───────────────────────────────────────────────┐          │
│  │  [G] Google ile Giriş Yap                     │          │
│  └───────────────────────────────────────────────┘          │
│                                                             │
│  ──────────── veya ────────────                             │
│                                                             │
│  E-posta adresiniz                                          │
│  ┌───────────────────────────────────────────────┐          │
│  │  ornek@email.com                              │          │
│  └───────────────────────────────────────────────┘          │
│                                                             │
│  ┌───────────────────────────────────────────────┐          │
│  │        Giriş Bağlantısı Gönder                │          │
│  └───────────────────────────────────────────────┘          │
│                                                             │
│  Hesabınız yok mu? [Ücretsiz Kayıt Olun]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Giriş vs Kayıt farkı:**
- Aynı form yapısı (email + Google)
- Giriş sayfasında "Hesabınız yok mu?" linki
- Kayıt sayfasında "Zaten hesabınız var mı?" linki
- Var olmayan email ile giriş denendiğinde: Otomatik kayıt yapılır (tek akış)
- NextAuth.js `signIn()` metodu hem kayıt hem giriş için aynı akışı kullanır

---
---

## 5. Kayıt Sonrası Yönlendirme

### 5.1 Yönlendirme Matrisi

| Kullanıcı Durumu | Yönlendirme Hedefi | Gerekçe |
|------------------|-------------------|---------|
| **Yeni kayıt (free, direkt)** | `/hosgeldin` | Üç seçenek sunulur: test, rehber, klinik |
| **Yeni kayıt (semptom testi sırasında)** | Teste geri dön (kaldığı yerden devam) | Akış kesintiye uğramamalı |
| **Yeni kayıt (blog okurken)** | Okumakta olduğu makaleye geri dön | İçerik deneyimi kesintiye uğramamalı |
| **Yeni kayıt (premium satın alma)** | `/odeme?plan=[seçilen-plan]` | Ödeme niyeti korunur |
| **Premium satın alma sonrası** | `/odeme/basarili` → onboarding checklist | Değer teslimi hızlandırılır |
| **Deneme başlatma sonrası** | `/hosgeldin-premium` (premium-özel hoşgeldin) | Premium özelliklere yönlendirme |
| **Geri dönen kullanıcı (free)** | Son ziyaret ettiği sayfa veya ana sayfa | Tanıdık deneyim |
| **Geri dönen kullanıcı (premium)** | Dashboard veya son kaldığı yer | Değer sunumu devam |
| **Magic link ile giriş** | `callbackUrl` parametresindeki sayfa | Link gönderildiği bağlam korunur |

**Redirect mantığı (NextAuth.js):**
- `callbackUrl` query parametresi ile hedef sayfa korunur
- Kayıt tetiklendiği sayfaya dönüşü sağlar
- Varsayılan: `/hosgeldin` (callbackUrl yoksa)

---

### 5.2 Premium Onboarding Checklist (/hesap/baslangic)

**Premium kullanıcılar için ilk 7 gün checklist:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     Başlangıç Rehberiniz                                    │
│     Premium yolculuğunuzun ilk adımları                     │
│                                                             │
│     ┌──────────── %40 tamamlandı ──────────────────┐        │
│     │████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│        │
│     └──────────────────────────────────────────────┘        │
│                                                             │
│     ✓ Hesabınızı oluşturdunuz                               │
│     ✓ Premium'u aktifleştirdiniz                            │
│                                                             │
│     ○ Profilinizi tamamlayın (evre, şehir)                  │
│       → Kişisel öneriler için gerekli                       │
│       [Profili Tamamla →]                                   │
│                                                             │
│     ○ Beslenme planınızı oluşturun                          │
│       → Evrenize özel anti-inflamatuar plan                 │
│       [Planımı Oluştur →]                                   │
│                                                             │
│     ○ Egzersiz programına başlayın                          │
│       → 8 haftalık video rehberli program                   │
│       [Programa Başla →]                                    │
│                                                             │
│     ○ Topluluğa kendinizi tanıtın                           │
│       → İlk paylaşımınızı yapın                            │
│       [Topluluğa Git →]                                     │
│                                                             │
│     ○ İlerleme takibini başlatın                            │
│       → Ölçülerinizi kaydedin                              │
│       [Takibe Başla →]                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Checklist davranışları:**
- Her adım tamamlandığında teal tik animasyonu + ilerleme barı güncellenmesi
- Tamamlanmamış adımlar her giriş yapıldığında hatırlatılır (top bar banner)
- 7 gün sonra checklist gizlenir (tamamlanmamış olsa bile -- agresif olmamak için)
- Tamamlanan adımlar profil sayfasında kalıcı olarak görünür

---

### 5.3 Geri Dönen Kullanıcı Deneyimi

**Son kaldığı yer takibi:**

| Veri | Kayıt Yeri | Kullanım |
|------|-----------|----------|
| Son ziyaret edilen sayfa | Cookie + DB | Giriş sonrası yönlendirme |
| Tamamlanmamış semptom testi | localStorage | "Testiniz sizi bekliyor" banner |
| Beslenme planı ilerlemesi | DB | "Planınızın 3. günündesiniz" |
| Egzersiz programı ilerlemesi | DB | "Bu haftaki egzersiziniz hazır" |
| Son okunan makale | Cookie | "Kaldığınız yerden devam edin" |

**Geri dönüş hoşgeldin banner'ı:**

```
┌─────────────────────────────────────────────────────────────┐
│  Tekrar hoş geldiniz, Ayşe! Son kaldığınız yer:            │
│  "Anti-İnflamatuar Beslenme Planınız" [Devam Et →]      [X] │
└─────────────────────────────────────────────────────────────┘
```

---
---

## 6. Güvenlik ve Gizlilik (KVKK)

### 6.1 KVKK Uyum Gereksinimleri

**6698 sayılı Kişisel Verilerin Korunması Kanunu zorunlulukları:**

| Gereksinim | Uygulama | Konum |
|-----------|----------|-------|
| **Aydınlatma metni** | Kayıt formunda tıklanabilir link | Kayıt formu altı |
| **Açık rıza** | Ödeme ve sağlık verisi işleme için checkbox | Ödeme formu (Adım 3) |
| **Veri sorumlusu bilgisi** | Şirket bilgileri, iletişim | Footer + Gizlilik Politikası |
| **Veri işleme amaçları** | Hangi veriler, neden, ne kadar süre | Aydınlatma metni içinde |
| **Veri saklama süreleri** | Her veri kategorisi için süre | Gizlilik Politikası |
| **Veri silme hakkı** | Hesap silme özelliği | Hesap ayarları |
| **Veri taşınabilirliği** | Verileri dışa aktarma | Hesap ayarları |
| **İtiraz hakkı** | Otomatik profilleme itirazı | Gizlilik Politikası + iletişim |

---

### 6.2 Rıza Toplama Noktaları

#### Kayıt Anında (Implicit + Bilgilendirme)

```
Devam ederek Kullanım Koşulları ve Gizlilik
Politikası'nı kabul etmiş olursunuz.
KVKK Aydınlatma Metni
```

**Not:** Kayıt butonu tıklandığında implicit kabul. Linkler pop-up olarak açılır. Bu, Türkiye'de yaygın uygulama (KVKK m.5/2 meşru menfaat veya sözleşmenin ifası kapsamında).

---

#### Ödeme Anında (Explicit Checkbox)

```
☐ KVKK Açık Rıza Metni'ni okudum, kişisel verilerimin
  işlenmesini kabul ediyorum. * (zorunlu)

☐ Lipödem Türkiye'den bilgilendirme ve kampanya
  e-postaları almak istiyorum. (opsiyonel)
```

**Gerekçe:** Ödeme işlemi sağlık verisi ve finansal veri işleme içerdiğinden açık rıza zorunludur (KVKK m.6 -- özel nitelikli kişisel veri).

---

#### Sağlık Verisi İşleme (Semptom Testi, Evre Değerlendirme)

```
┌─────────────────────────────────────────────────────────────┐
│  Bu araç sonuçlarını kaydetmek için giriş yapmanız          │
│  gerekmektedir.                                             │
│                                                             │
│  Sağlık bilgileriniz şifrelenerek saklanır ve               │
│  üçüncü taraflarla paylaşılmaz. Sadece size daha           │
│  kişisel öneriler sunmak için kullanılır.                   │
│                                                             │
│  Detaylı bilgi: KVKK Aydınlatma Metni                       │
│                                                             │
│  ☐ Sağlık verilerimin işlenmesini kabul ediyorum *          │
│                                                             │
│  [Sonuçlarımı Kaydet]   [Kaydetmeden Devam Et]              │
└─────────────────────────────────────────────────────────────┘
```

**Not:** Semptom testi giriş yapmadan da çözülebilir (sonuçlar localStorage'da). Kaydetme istendiğinde KVKK rızası istenir.

---

### 6.3 Aydınlatma Metni Özeti (Pop-up İçeriği)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  KİŞİSEL VERİLERİN İŞLENMESİNE İLİŞKİN                   │
│  AYDINLATMA METNİ                                           │
│                                                             │
│  Veri Sorumlusu: [Şirket Adı]                               │
│  İletişim: kvkk@lipodemturkiye.com                          │
│                                                             │
│  İşlenen Kişisel Veriler:                                   │
│  ─────────────────────────                                  │
│  • Kimlik bilgileri: Ad, soyad, e-posta                     │
│  • İletişim bilgileri: Telefon numarası                     │
│  • Sağlık verileri: Semptom testi sonuçları, evre           │
│    bilgisi, tedavi tercihleri (özel nitelikli veri)          │
│  • Finansal veriler: Ödeme bilgileri (iyzico aracılığıyla)  │
│  • Kullanım verileri: Sayfa görüntüleme, tercihler          │
│                                                             │
│  İşleme Amaçları:                                           │
│  ─────────────────                                          │
│  • Hesap oluşturma ve yönetimi                              │
│  • Kişiselleştirilmiş içerik ve program sunumu              │
│  • Ödeme işlemlerinin gerçekleştirilmesi                    │
│  • İletişim (hizmet bildirimleri)                           │
│  • Platform iyileştirme (anonim istatistikler)              │
│                                                             │
│  Saklama Süreleri:                                          │
│  ─────────────────                                          │
│  • Hesap bilgileri: Üyelik süresince + 1 yıl                │
│  • Sağlık verileri: Üyelik süresince + silme talebiyle      │
│  • Ödeme bilgileri: Yasal zorunluluk süresi (10 yıl)       │
│  • Kullanım verileri: 2 yıl (anonimleştirilerek)           │
│                                                             │
│  Haklarınız (KVKK m.11):                                    │
│  ─────────────────────────                                  │
│  • Verilerinizin işlenip işlenmediğini öğrenme              │
│  • Verilerinizin düzeltilmesini isteme                      │
│  • Verilerinizin silinmesini isteme                         │
│  • Verilerinizin aktarılmasını isteme                       │
│  • İşlemeye itiraz etme                                     │
│                                                             │
│  Başvuru: kvkk@lipodemturkiye.com                           │
│  Yanıt süresi: 30 gün içinde                                │
│                                                             │
│  [Tam Metni Oku (PDF)]                    [Kapat]           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

### 6.4 Çerez Politikası

**Çerez banner'ı (ilk ziyarette):**

```
┌─────────────────────────────────────────────────────────────┐
│  🍪 Bu site deneyiminizi iyileştirmek için çerezler         │
│  kullanmaktadır.                                            │
│                                                             │
│  [Tümünü Kabul Et]  [Sadece Gerekli]  [Çerez Ayarları]      │
└─────────────────────────────────────────────────────────────┘
```

**Çerez kategorileri:**

| Kategori | Varsayılan | Açıklama | Deaktif Edilebilir mi? |
|----------|-----------|----------|----------------------|
| **Zorunlu** | Aktif | Oturum, güvenlik, tercihler | Hayır |
| **Analitik** | Kapalı (onay bekler) | GA4, sayfa görüntüleme | Evet |
| **Pazarlama** | Kapalı (onay bekler) | Retargeting, reklam pikselleri | Evet |
| **İşlevsel** | Aktif | localStorage (test sonuçları), tema tercihi | Hayır |

---

### 6.5 Hesap Silme ve Veri Taşınabilirliği

**Konum:** Hesap Ayarları > Gizlilik ve Veri

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Verileriniz                                                │
│                                                             │
│  [Verilerimi İndir]                                         │
│  Tüm kişisel verilerinizin bir kopyasını JSON               │
│  formatında indirin. İşlem 24 saat sürebilir.               │
│                                                             │
│  [Hesabımı Sil]                                             │
│  Hesabınız ve tüm kişisel verileriniz kalıcı                │
│  olarak silinir. Bu işlem geri alınamaz.                    │
│                                                             │
│  Not: Aktif aboneliğiniz varsa önce iptal etmeniz            │
│  gerekmektedir.                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Hesap silme akışı:**
1. "Hesabımı Sil" tıklanır
2. Onay modalı: "Bu işlem geri alınamaz. Tüm verileriniz silinecektir."
3. Email doğrulama (magic link ile)
4. 30 gün bekleme süresi (geri alma imkanı)
5. 30 gün sonra kalıcı silme (yasal zorunluluk dışındaki veriler)

---
---

## 7. Hata Durumları

### 7.1 Kayıt ve Giriş Hataları

| Hata Durumu | Teknik Kod | Kullanıcı Mesajı (Türkçe, Empatik) | Çözüm Önerisi |
|-------------|-----------|-------------------------------------|----------------|
| Email zaten kayıtlı | `EMAIL_EXISTS` | "Bu e-posta adresiyle zaten bir hesap var. Giriş yapmayı denemek ister misiniz?" | [Giriş Yap] butonu göster |
| Geçersiz email formatı | `INVALID_EMAIL` | "Lütfen geçerli bir e-posta adresi giriniz. Örnek: isim@email.com" | Email alanını vurgula |
| Email typo algılama | `EMAIL_TYPO` | "gmail.com mu demek istediniz?" (satır altı öneri) | Tıklanabilir düzeltme önerisi |
| Magic link süresi dolmuş | `MAGIC_LINK_EXPIRED` | "Bu bağlantının süresi dolmuş. Yeni bir bağlantı göndermemizi ister misiniz?" | [Yeni Bağlantı Gönder] butonu |
| Magic link zaten kullanılmış | `MAGIC_LINK_USED` | "Bu bağlantı daha önce kullanılmış. Yeni bir bağlantı göndermemizi ister misiniz?" | [Yeni Bağlantı Gönder] butonu |
| Google OAuth hatası | `GOOGLE_AUTH_ERROR` | "Google ile giriş şu an gerçekleştirilemiyor. Lütfen e-posta ile devam edin." | Email formuna odaklan |
| Google popup engellendi | `POPUP_BLOCKED` | "Tarayıcınız açılır pencereyi engelledi. Lütfen izin verin veya e-posta ile devam edin." | Popup izin talimatı + email fallback |
| Rate limit aşıldı | `RATE_LIMIT` | "Çok fazla deneme yapıldı. Lütfen 5 dakika sonra tekrar deneyin." | Geri sayım sayacı göster |
| Sunucu hatası | `SERVER_ERROR` | "Bir sorun oluştu, ancak sizinle ilgili değil. Lütfen birkaç dakika sonra tekrar deneyin." | [Tekrar Dene] butonu + destek linki |
| Network hatası | `NETWORK_ERROR` | "İnternet bağlantınızı kontrol edin ve tekrar deneyin." | [Tekrar Dene] butonu |
| Hesap askıya alınmış | `ACCOUNT_SUSPENDED` | "Hesabınız geçici olarak askıya alınmıştır. Detaylar için destek@lipodemturkiye.com adresine yazın." | Destek linki |

---

### 7.2 Ödeme Hataları

| Hata Durumu | Teknik Kod | Kullanıcı Mesajı | Çözüm Önerisi |
|-------------|-----------|-------------------|----------------|
| Kart reddedildi (genel) | `CARD_DECLINED` | "Kartınız reddedildi. Bankanızla iletişime geçin veya farklı bir kart deneyin." | [Farklı Kart Dene] butonu |
| Yetersiz bakiye | `INSUFFICIENT_FUNDS` | "İşlem gerçekleştirilemedi. Kart limitinizi kontrol edin veya taksit seçeneğini değiştirin." | Taksit seçeneklerini göster |
| Online alışveriş kapalı | `ONLINE_DISABLED` | "Kartınızda online alışveriş izni kapalı olabilir. Bankanızın mobil uygulamasından açabilirsiniz." | Banka uygulama yönlendirmesi |
| 3D Secure başarısız | `3DS_FAILED` | "3D Secure doğrulaması tamamlanamadı. Lütfen bankanızın gönderdiği kodu doğru girdiğinizden emin olun." | [Tekrar Dene] butonu |
| 3D Secure zaman aşımı | `3DS_TIMEOUT` | "Doğrulama süresi doldu. Endişelenmeyin, kartınızdan ücret çekilmedi. Tekrar deneyebilirsiniz." | [Tekrar Dene] butonu |
| Geçersiz kart numarası | `INVALID_CARD` | "Kart numarasını kontrol edin. 16 haneli numarayı eksiksiz girdiğinizden emin olun." | Kart numarası alanını vurgula |
| Süresi dolmuş kart | `EXPIRED_CARD` | "Kartınızın son kullanma tarihi geçmiş. Lütfen geçerli bir kart ile deneyin." | SKT alanını vurgula |
| CVV hatası | `INVALID_CVV` | "CVV/CVC kodunu kontrol edin. Kartınızın arkasındaki 3 haneli numaradır." | CVV alanını vurgula + görsel yardım |
| iyzico genel hata | `PAYMENT_ERROR` | "Ödeme işleminde bir sorun oluştu. Kartınızdan herhangi bir ücret çekilmedi. Lütfen tekrar deneyin." | [Tekrar Dene] butonu |
| Çift ödeme önleme | `DUPLICATE_PAYMENT` | "Bu işlem zaten gerçekleştirilmiş. Hesabınızı kontrol edin." | [Hesabıma Git] butonu |
| Taksit uyumsuzluğu | `INSTALLMENT_UNAVAILABLE` | "Seçtiğiniz taksit seçeneği bu kart için geçerli değil. Farklı bir taksit seçeneği deneyin." | Uygun taksit seçeneklerini göster |

---

### 7.3 Genel Hata Tasarım İlkeleri

| İlke | Uygulama |
|------|----------|
| **Empatik ton** | "Bir hata oluştu" yerine "Bir sorun oluştu, ama çözeceğiz" |
| **Çözüm odaklı** | Her hatanın yanında en az 1 çözüm aksiyonu |
| **Suçlamayan** | "Yanlış girdiniz" yerine "Lütfen kontrol edin" |
| **Korkutmayan** | Kırmızı yerine amber uyarı rengi (sağlık platformu hassasiyeti) |
| **Form korunur** | Hata sonrası form sıfırlanmaz -- girilen veriler korunur |
| **Odaklama** | Hatalı alana otomatik scroll + focus |
| **Erişilebilirlik** | Hata mesajları `aria-live="polite"` ile ekran okuyuculara bildirilir |
| **Destek erişimi** | Çözülemeyen hatalarda destek iletişim bilgisi gösterilir |

**Hata mesajı görsel formatı:**

```
┌─────────────────────────────────────────────────────┐
│  ⚠️  [Hata başlığı]                                 │
│                                                     │
│  [Açıklama ve çözüm önerisi]                        │
│                                                     │
│  [Aksiyon Butonu]                                   │
└─────────────────────────────────────────────────────┘

Renk: amber-50 arka plan (#FFFBEB) + amber-700 metin (#B45309)
İkon: Amber üçgen uyarı ikonu
Kenarlık: amber-200 sol kenar (4px)
```

**Not:** Kritik hatalarda (ödeme başarısız, hesap askıda) kırmızı (error-50 + error-700) kullanılır. Giriş formu doğrulama hataları amber tonunda kalır.

---
---

## 8. Mobil Kayıt UX

### 8.1 Bottom Sheet Kayıt Formu

**Mobilde kayıt formu bottom sheet olarak açılır (sayfa navigasyonu yerine):**

```
┌─────────────────────────────────────────┐
│  ████████████████████████████████████████│  ← Arka plan overlay
│  ████████████████████████████████████████│    (%50 siyah opaklık)
│  ████████████████████████████████████████│
│  ████████████████████████████████████████│
│  ████████████████████████████████████████│
│  ████████████████████████████████████████│
│  ┌─────────────────────────────────────┐│
│  │          ═══ (drag handle)          ││  ← Drag handle
│  │                                     ││
│  │  Ücretsiz Katılın                   ││
│  │                                     ││
│  │  ┌─────────────────────────────┐    ││
│  │  │ [G] Google ile Devam Et     │    ││
│  │  └─────────────────────────────┘    ││
│  │                                     ││
│  │  ────── veya ──────                 ││
│  │                                     ││
│  │  E-posta                            ││
│  │  ┌─────────────────────────────┐    ││
│  │  │                             │    ││
│  │  └─────────────────────────────┘    ││
│  │                                     ││
│  │  ┌─────────────────────────────┐    ││  ← Thumb zone
│  │  │   Giriş Bağlantısı Gönder  │    ││    (kolay erişim)
│  │  └─────────────────────────────┘    ││
│  │                                     ││
│  │  KVKK · Gizlilik · Koşullar        ││
│  └─────────────────────────────────────┘│
└─────────────────────────────────────────┘
```

**Bottom Sheet Davranışları:**

| Özellik | Spesifikasyon |
|---------|---------------|
| Yükseklik | %55 ekran (email alanı dahil) |
| Açılma | Aşağıdan kayarak gelme, spring easing, 400ms |
| Kapatma | Aşağı sürükleme veya overlay tıklama |
| Drag handle | Üstte gri çizgi (4px x 40px, border-radius: 2px) |
| Arka plan | Overlay: siyah %50 opaklık |
| Köşeler | Üst köşeler 16px border-radius |

---

### 8.2 Thumb Zone Optimizasyonu

```
Mobil kayıt formunda öğe yerleşimi:

┌─────────────────────────────────┐
│                                 │
│  ZOR ERİŞİM (üst %30)          │
│  → Logo, başlık metni           │
│  → Bilgilendirme metni          │
│                                 │
│  ORTA ERİŞİM (orta %30)        │
│  → Google butonu                │
│  → "veya" ayracı                │
│  → Email input alanı            │
│                                 │
│  KOLAY ERİŞİM (alt %40)        │
│  → CTA butonu (Giriş Bağl.)    │ ← Birincil aksiyon burada
│  → Güven sinyalleri             │
│  → KVKK linkleri                │
│                                 │
└─────────────────────────────────┘
```

**Kurallar:**
- CTA butonu (Giriş Bağlantısı Gönder) alt %40'ta konumlanır
- Google butonu orta bölgede
- Tüm butonlar min 48px yükseklik (Apple HIG)
- Butonlar arası min 12px boşluk
- Tek el (sağ el başparmak) ile tüm aksiyonlara erişilebilir

---

### 8.3 Autofill ve Keyboard Yönetimi

| Özellik | Uygulama |
|---------|----------|
| **Email autofill** | `autocomplete="email"` + `inputmode="email"` |
| **İsim autofill** | `autocomplete="name"` |
| **Telefon autofill** | `autocomplete="tel"` + `inputmode="tel"` |
| **Kart numarası** | `autocomplete="cc-number"` + `inputmode="numeric"` |
| **CVV** | `autocomplete="cc-csc"` + `inputmode="numeric"` |
| **SKT** | `autocomplete="cc-exp"` + `inputmode="numeric"` |
| **Keyboard type** | `type="email"` → email klavyesi (@ ve . butonlu) |
| **Enter key hint** | `enterkeyhint="send"` (Gönder), `enterkeyhint="next"` (Sonraki) |
| **Auto-capitalize** | `autocapitalize="none"` (email), `autocapitalize="words"` (isim) |

**Keyboard açıkken form yönetimi:**
- `<meta name="viewport" content="width=device-width, initial-scale=1, interactive-widget=resizes-content">` -- viewport keyboard'a göre ayarlanır
- Form alanı focus'landığında, alan viewport ortasına scroll edilir
- CTA butonu keyboard üstünde görünür kalır (sticky)
- `visualViewport` API kullanılarak keyboard yüksekliği hesaplanır

---

### 8.4 Ödeme Formu Mobil Optimizasyonu

```
Mobilde ödeme formu tam ekran sayfadır (bottom sheet değil):

┌─────────────────────────────────┐
│  ← Geri         Adım 3/3       │
│                                 │
│  ┌─────────────────────────┐    │
│  │ Plan: Tam Premium Yıllık│    │
│  │ Tutar: 1.299 TL         │    │
│  │ [Değiştir]              │    │
│  └─────────────────────────┘    │
│                                 │
│  Kart numarası                  │
│  ┌─────────────────────────┐    │
│  │ [Visa]  **** **** ****  │    │
│  └─────────────────────────┘    │
│                                 │
│  ┌────────────┐ ┌──────────┐    │
│  │ AA / YY    │ │ CVV      │    │
│  └────────────┘ └──────────┘    │
│                                 │
│  Kart üzerindeki isim           │
│  ┌─────────────────────────┐    │
│  │ AHMET OKYAY             │    │
│  └─────────────────────────┘    │
│                                 │
│  Taksit: [Tek çekim ▾]         │
│                                 │
│  ☐ KVKK Açık Rıza Metni        │
│                                 │
│  ┌─────────────────────────┐    │
│  │ 🔒 Güvenli Ödeme Yap    │    │ ← Sticky bottom
│  │    1.299 TL              │    │
│  └─────────────────────────┘    │
│                                 │
│  🛡️ iyzico Korumalı | SSL 256  │
└─────────────────────────────────┘
```

**Mobil ödeme özel kuralları:**
- CTA butonu sticky bottom (her zaman görünür)
- Plan özeti daraltılabilir (varsayılan daraltılmış -- alan tasarrufu)
- Taksit seçimi native select (dropdown) -- custom dropdown değil
- 3D Secure: Banka uygulamasına yönlendirme (in-app browser değil, native redirect)
- Kart fotoğrafı ile okuma (NFC/OCR): iyzico SDK destekliyorsa aktif

---
---

## 9. Analytics Events

### 9.1 Kayıt Funnel Events

| Event Adı | Tetikleyici | Parametreler | Kategori |
|-----------|------------|--------------|----------|
| `signup_page_view` | /kayit sayfası görüntüleme | `referrer`, `utm_source`, `utm_medium` | Impression |
| `signup_form_start` | Email alanına ilk tıklama/focus | `method: 'email'` | Engagement |
| `signup_google_click` | Google butonu tıklama | `method: 'google'` | Engagement |
| `signup_google_success` | Google OAuth tamamlama | `method: 'google'`, `is_new_user: true/false` | Conversion |
| `signup_google_error` | Google OAuth hatası | `error_type`, `method: 'google'` | Error |
| `signup_magic_link_sent` | Magic link gönderildi | `method: 'email'`, `email_provider` | Engagement |
| `signup_magic_link_clicked` | Magic link tıklandı | `method: 'email'`, `time_to_click` (saniye) | Conversion |
| `signup_magic_link_expired` | Süresi dolmuş link tıklandı | `method: 'email'` | Error |
| `signup_magic_link_resend` | "Tekrar Gönder" tıklandı | `method: 'email'`, `resend_count` | Engagement |
| `signup_complete` | Kayıt tamamlandı (herhangi yöntem) | `method`, `is_new_user`, `referrer_page` | Conversion |
| `signup_abandon` | Sayfa terk edildi (form başlayıp tamamlamadan) | `method_started`, `last_field_interacted` | Drop-off |

---

### 9.2 Premium Dönüşüm Events

| Event Adı | Tetikleyici | Parametreler | Kategori |
|-----------|------------|--------------|----------|
| `premium_page_view` | /premium sayfası görüntüleme | `referrer`, `user_tier` | Impression |
| `plan_toggle_click` | Aylık/Yıllık toggle tıklama | `selected_period: 'monthly'/'yearly'` | Engagement |
| `plan_select` | Plan kartında CTA tıklama | `plan: 'temel'/'tam'/'kurucu'`, `period` | Intent |
| `trial_start_click` | "14 Gün Ücretsiz Deneyin" tıklama | `plan: 'tam'` | Intent |
| `trial_started` | Deneme başarıyla başladı | `plan`, `user_id` | Conversion |
| `checkout_step_1` | Plan onayı görüntüleme | `plan`, `period`, `amount` | Funnel |
| `checkout_step_2` | Kişisel bilgiler görüntüleme | `plan`, `period` | Funnel |
| `checkout_step_3` | Ödeme formu görüntüleme | `plan`, `period`, `amount` | Funnel |
| `checkout_card_entered` | Kart numarası girildi | `card_type: 'visa'/'mastercard'/'troy'` | Engagement |
| `installment_selected` | Taksit seçimi yapıldı | `installment_count: 1/3/6/9`, `plan`, `amount` | Engagement |
| `payment_attempted` | Ödeme butonu tıklandı | `plan`, `period`, `amount`, `installment` | Intent |
| `payment_3ds_redirect` | 3D Secure yönlendirmesi | `bank_name` | Funnel |
| `payment_success` | Ödeme başarılı | `plan`, `period`, `amount`, `installment`, `is_founder` | Conversion |
| `payment_failed` | Ödeme başarısız | `error_type`, `plan`, `amount` | Error |
| `payment_retry` | "Tekrar Dene" tıklandı | `retry_count`, `previous_error` | Engagement |
| `checkout_abandon` | Ödeme akışı terk edildi | `last_step`, `plan`, `period` | Drop-off |

---

### 9.3 Deneme Süresi Events

| Event Adı | Tetikleyici | Parametreler | Kategori |
|-----------|------------|--------------|----------|
| `trial_day_login` | Deneme süresindeki kullanıcı giriş yaptı | `trial_day_number`, `features_used_count` | Engagement |
| `trial_feature_used` | Premium özellik kullanıldı (ilk kez) | `feature_name`, `trial_day_number` | Activation |
| `trial_3day_warning_shown` | 3 gün kaldı banner gösterildi | `features_used_count` | Lifecycle |
| `trial_3day_warning_click` | Banner CTA tıklandı | `action: 'upgrade'/'remind_later'` | Intent |
| `trial_expiry_modal_shown` | Bitiş günü modalı gösterildi | `features_used_count`, `activity_score` | Lifecycle |
| `trial_to_premium` | Denemeden ücretli geçiş | `plan`, `period`, `amount`, `trial_day` | Conversion |
| `trial_to_free` | Denemeden ücretsiz düşme | `features_used_count`, `reason` (anketten) | Churn |
| `trial_early_cancel` | Erken deneme sonlandırma | `trial_day_number`, `reason` | Churn |

---

### 9.4 Yöntem Dağılımı ve Funnel Metrikleri

**Takip edilecek KPI'lar:**

| KPI | Formül | Hedef (İlk Ay) | Hedef (3. Ay) |
|-----|--------|-----------------|---------------|
| Kayıt tamamlama oranı | signup_complete / signup_page_view | %30-40 | %40-50 |
| Google vs Email dağılımı | google_success / signup_complete | %55-65 Google | Veri ile optimize |
| Magic link tıklama oranı | magic_link_clicked / magic_link_sent | %60-75 | %70-80 |
| Magic link süre (medyan) | time_to_click medyan | <120 saniye | <90 saniye |
| Premium deneme başlatma | trial_started / premium_page_view | %8-12 | %12-18 |
| Deneme dönüşüm oranı | trial_to_premium / trial_started | %25-35 | %30-40 |
| Ödeme tamamlama oranı | payment_success / checkout_step_1 | %50-65 | %60-75 |
| Ödeme hata oranı | payment_failed / payment_attempted | <%20 | <%15 |
| Taksit tercih oranı | installment(>1) / payment_success | %40-55 | Veri ile optimize |
| Checkout terk oranı | checkout_abandon / checkout_step_1 | <%40 | <%30 |
| Adım bazlı drop-off | step_N+1 / step_N | Her adımda <%20 | Her adımda <%15 |

---

### 9.5 GA4 + Custom Event Implementasyonu

```javascript
// Kayıt tamamlama event örneği
gtag('event', 'signup_complete', {
  method: 'google', // veya 'email'
  is_new_user: true,
  referrer_page: '/lipodem-nedir',
  user_id: 'hashed_user_id' // PII olmayan hash
});

// Ödeme başarı event örneği
gtag('event', 'payment_success', {
  plan: 'tam_premium',
  period: 'yearly',
  amount: 1299,
  currency: 'TRY',
  installment_count: 6,
  is_founder: false,
  payment_method: 'credit_card',
  card_type: 'visa'
});

// E-commerce tracking (GA4 enhanced ecommerce)
gtag('event', 'purchase', {
  transaction_id: 'TXN_12345',
  value: 1299,
  currency: 'TRY',
  items: [{
    item_id: 'tam_premium_yearly',
    item_name: 'Tam Premium Yıllık',
    price: 1299,
    quantity: 1,
    item_category: 'subscription'
  }]
});
```

---
---

## 10. Teknik Implementasyon Notları

### 10.1 NextAuth.js v5 Yapılandırması

**Dosya yapısı:**

```
/app
  /api
    /auth
      /[...nextauth]
        route.ts          ← NextAuth.js API routes
  /(auth)
    /kayit
      page.tsx            ← Kayıt sayfası
    /giris
      page.tsx            ← Giriş sayfası
    layout.tsx            ← Auth layout (minimal header)
  /(protected)
    /hesap
      page.tsx            ← Hesap paneli
    /odeme
      page.tsx            ← Ödeme akışı
      /basarili
        page.tsx          ← Başarı sayfası
    layout.tsx            ← Protected layout (tam header)
/auth.ts                  ← NextAuth.js konfigürasyonu
/auth.config.ts           ← Provider konfigürasyonu
```

**Provider yapılandırması (auth.config.ts):**

```typescript
// Kavramsal yapı -- implementasyon detayları
providers: [
  Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    allowDangerousEmailAccountLinking: true,
  }),
  Resend({
    // Magic link email gönderimi için
    apiKey: process.env.RESEND_API_KEY,
    from: 'giris@lipodemturkiye.com',
  }),
]
```

**Veritabanı adaptörü:** Drizzle ORM + PostgreSQL (Vercel Postgres)

---

### 10.2 iyzico Entegrasyon Mimarisi

```
İstemci (Next.js)              Sunucu (API Routes)           iyzico API
─────────────────              ────────────────────           ──────────
                                
Kart bilgileri →               POST /api/odeme/create →      CreatePayment
(iyzico.js ile                 (subscription oluştur)        (3DS yönlendir)
 tokenize)                                                   
                                                              
                               ← 3DS redirect URL             
← 3DS yönlendirme                                            
                                                              
3DS tamamlama →                POST /api/odeme/callback →     RetrievePayment
                               (ödeme sonucu kontrol)         (status check)
                                                              
                               ← Success / Failure            
← Başarı/Hata sayfası                                        
                                                              
                               Webhook /api/odeme/webhook ←   Subscription events
                               (yenileme, iptal, hata)        (recurring billing)
```

**Güvenlik notları:**
- Kart bilgileri asla sunucumuzda saklanmaz (iyzico PCI DSS uyumlu)
- iyzico.js client-side tokenization kullanılır
- API anahtarları sadece sunucu tarafında
- Webhook imza doğrulama zorunlu
- HTTPS zorunlu (Vercel varsayılan)

---

### 10.3 Veritabanı Şeması (Abonelik İlgili)

```sql
-- Kullanıcı tablosu (NextAuth.js User modeli genişletilmiş)
users
  id              UUID PRIMARY KEY
  name            VARCHAR(255) NULL
  email           VARCHAR(255) UNIQUE NOT NULL
  email_verified  TIMESTAMP NULL
  image           VARCHAR(500) NULL
  city            VARCHAR(100) NULL
  diagnosis       ENUM('yes', 'suspected', 'unknown') NULL
  stage           ENUM('1', '2', '3', 'unknown') NULL
  role            ENUM('free', 'trial', 'basic_premium', 'full_premium', 'founder') DEFAULT 'free'
  created_at      TIMESTAMP DEFAULT NOW()
  updated_at      TIMESTAMP DEFAULT NOW()

-- Abonelik tablosu
subscriptions
  id                    UUID PRIMARY KEY
  user_id               UUID REFERENCES users(id)
  plan                  ENUM('basic_premium', 'full_premium', 'founder')
  period                ENUM('monthly', 'yearly')
  status                ENUM('active', 'trial', 'past_due', 'canceled', 'paused')
  iyzico_subscription_id VARCHAR(255)
  trial_start           TIMESTAMP NULL
  trial_end             TIMESTAMP NULL
  current_period_start  TIMESTAMP
  current_period_end    TIMESTAMP
  cancel_at_period_end  BOOLEAN DEFAULT FALSE
  canceled_at           TIMESTAMP NULL
  cancel_reason         VARCHAR(500) NULL
  amount                DECIMAL(10,2)
  currency              VARCHAR(3) DEFAULT 'TRY'
  installment_count     INTEGER DEFAULT 1
  created_at            TIMESTAMP DEFAULT NOW()
  updated_at            TIMESTAMP DEFAULT NOW()

-- Ödeme geçmişi
payments
  id                UUID PRIMARY KEY
  subscription_id   UUID REFERENCES subscriptions(id)
  user_id           UUID REFERENCES users(id)
  iyzico_payment_id VARCHAR(255)
  amount            DECIMAL(10,2)
  currency          VARCHAR(3) DEFAULT 'TRY'
  status            ENUM('success', 'failed', 'refunded', 'pending')
  payment_method    VARCHAR(50)
  card_last_four    VARCHAR(4)
  card_type         VARCHAR(20)
  installment_count INTEGER DEFAULT 1
  error_code        VARCHAR(50) NULL
  error_message     VARCHAR(500) NULL
  created_at        TIMESTAMP DEFAULT NOW()

-- KVKK rıza kayıtları
consent_records
  id              UUID PRIMARY KEY
  user_id         UUID REFERENCES users(id)
  consent_type    ENUM('terms', 'privacy', 'kvkk_explicit', 'marketing_email', 'health_data')
  granted         BOOLEAN
  ip_address      VARCHAR(45)
  user_agent      TEXT
  granted_at      TIMESTAMP DEFAULT NOW()
  revoked_at      TIMESTAMP NULL
```

---

### 10.4 Rate Limiting

| Endpoint | Limit | Pencere | Aşıldığında |
|----------|-------|---------|-------------|
| POST /api/auth/signin/email (magic link) | 5 istek | 15 dakika | 429 + "5 dakika bekleyin" |
| POST /api/auth/signin/google | 10 istek | 15 dakika | 429 + mesaj |
| POST /api/odeme/create | 3 istek | 10 dakika | 429 + "Çok fazla deneme" |
| POST /api/auth/resend | 3 istek | 5 dakika | 429 + geri sayım |
| GET /api/auth/callback/* | 10 istek | 1 dakika | 429 |

**Implementasyon:** Vercel Edge Middleware + Upstash Redis rate limiter

---

### 10.5 Performans Hedefleri

| Sayfa | LCP Hedefi | FID Hedefi | CLS Hedefi | TTI Hedefi |
|-------|-----------|-----------|-----------|-----------|
| /kayit | <1.5 sn | <50 ms | <0.05 | <2 sn |
| /giris | <1.5 sn | <50 ms | <0.05 | <2 sn |
| /premium | <2.0 sn | <100 ms | <0.1 | <2.5 sn |
| /odeme | <2.0 sn | <100 ms | <0.05 | <2.5 sn |

**Optimizasyonlar:**
- Google Identity Services SDK: Lazy load (sayfa yüklendiğinde değil, 3 sn sonra)
- iyzico.js: Dynamic import (sadece ödeme adımında)
- Form bileşenleri: Client component, minimal bundle
- Plan kartları: SSG (statik oluşturma)
- Taksit seçenekleri: API çağrısı (kart girildiğinde dynamic)

---
---

## Ek A: Tam Akış Diyagramı

```
                          ZİYARETÇİ (giriş yapmamış)
                               │
                ┌──────────────┼──────────────┐
                │              │              │
          Direkt /kayit   Herhangi sayfa  Premium sayfa
                │         (One-Tap popup)     │
                │              │              │
                ▼              ▼              ▼
         ┌──────────────────────────────────────────┐
         │            KAYIT / GİRİŞ                  │
         │                                          │
         │    [Google ile Devam Et]                  │
         │         veya                              │
         │    [Email Magic Link]                     │
         └───────────────┬──────────────────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
         Google OAuth          Magic Link
              │                     │
              ▼                     ▼
         Google popup          Email gönderildi
         Hesap seç             ┌──────────────┐
              │                │ Link tıkla   │
              │                └──────┬───────┘
              │                       │
              └───────────┬───────────┘
                          │
                     KAYIT TAMAMLANDI
                          │
              ┌───────────┼───────────┐
              │           │           │
         Yeni kayıt  Deneme başlat  Ödeme niyetli
         (free)       (premium)     (premium)
              │           │           │
              ▼           ▼           ▼
         /hosgeldin  /hosgeldin   /odeme?plan=X
              │      -premium         │
              │           │           ▼
              │           │      3 Adımlı Ödeme
              │           │      ┌─────────┐
              │           │      │1. Plan   │
              │           │      │2. Bilgi  │
              │           │      │3. Ödeme  │
              │           │      └────┬────┘
              │           │           │
              │           │      ┌────┴────┐
              │           │      │         │
              │           │   Başarılı  Başarısız
              │           │      │         │
              │           │      ▼         ▼
              │           │   /basarili  Hata sayfası
              │           │      │      [Tekrar Dene]
              │           │      │         │
              │           │      └────┬────┘
              │           │           │
              └───────────┼───────────┘
                          │
                   PLATFORM KULLANIMI
                          │
              ┌───────────┼───────────┐
              │           │           │
         Progressive  Deneme süresi  Premium
         profiling    email dizisi   onboarding
         (free)       (14 gün)      checklist
              │           │           │
              │      ┌────┴────┐      │
              │      │         │      │
              │   Dönüşüm   Düşme   │
              │   (ödeme)   (free)   │
              │      │         │      │
              └──────┼─────────┘──────┘
                     │
              GERİ DÖNEN KULLANICI
              (son kaldığı yer)
```

---

## Ek B: Lansman Öncesi Kontrol Listesi

### Kritik (P0 -- Lansmandan Önce)

- [ ] NextAuth.js v5 Google + Email (Resend) provider'ları yapılandırıldı
- [ ] /kayit sayfası (Google + Email Magic Link) çalışıyor
- [ ] /giris sayfası çalışıyor
- [ ] Magic link email şablonu Türkçe, markaya uygun
- [ ] Google One-Tap /kayit sayfasında çalışıyor
- [ ] Hesap birleştirme (Google + Email aynı email) sorunsuz
- [ ] /hosgeldin sayfası 3 seçenek kartı ile hazır
- [ ] iyzico entegrasyonu tamamlandı (sandbox test geçti)
- [ ] 3 adımlı ödeme akışı çalışıyor
- [ ] 3D Secure yönlendirme ve callback çalışıyor
- [ ] Taksit seçenekleri dinamik olarak gösteriliyor
- [ ] Ödeme başarı ve hata sayfaları hazır
- [ ] KVKK aydınlatma metni, gizlilik politikası, kullanım koşulları yayında
- [ ] Çerez banner'ı çalışıyor
- [ ] Rate limiting aktif
- [ ] SSL sertifikası aktif (Vercel varsayılan)
- [ ] Analytics events (signup_complete, payment_success) tetikleniyor
- [ ] Mobil kayıt bottom sheet çalışıyor
- [ ] Hata mesajları Türkçe ve empatik

### Yüksek Öncelik (P1 -- İlk Hafta)

- [ ] Google One-Tap diğer sayfalarda tetikleniyor (premium, test sonucu)
- [ ] 14 gün deneme akışı çalışıyor
- [ ] Deneme email dizisi kuruldu (gün 0, 1, 3, 5, 7, 10, 11, 13, 14)
- [ ] Deneme bitiş banner'ı ve modalı çalışıyor
- [ ] Progressive profiling banner'ı aktif
- [ ] Kurucu üyelik sayacı gerçek zamanlı
- [ ] Kurucu üyelik ödeme akışı çalışıyor
- [ ] Premium onboarding checklist hazır
- [ ] Geri dönen kullanıcı yönlendirmesi aktif

### Orta Öncelik (P2 -- İlk Ay)

- [ ] Email typo algılama (gmial.com vb.) aktif
- [ ] Email sağlayıcısı algılama (Gmail/Outlook butonları)
- [ ] Deneme bitiş günü kişiselleştirilmiş ilerleme gösterimi
- [ ] Tüm analytics event'leri GA4'te doğrulandı
- [ ] Funnel analiz dashboard'u kuruldu
- [ ] İlk A/B test (kayıt form yapısı) başladı
- [ ] Win-back email dizisi (gün 17, 30) kuruldu
- [ ] Hesap silme akışı çalışıyor
- [ ] Veri dışa aktarma özelliği çalışıyor

---

## Ek C: A/B Test Hipotezleri (Kayıt Akışına Özel)

| # | Hipotez | Varyant A | Varyant B | Metrik | ICE |
|---|---------|-----------|-----------|--------|-----|
| 1 | Google-first layout daha yüksek kayıt oranı sağlar | Google üstte (kontrol) | Email üstte, Google altta | signup_complete rate | 8x7x9=504 |
| 2 | "Şifre yok" mesajı güveni artırır | Güven mesajı yok | "Şifre yok, email ile güvenli giriş" | signup_form_start rate | 7x6x10=420 |
| 3 | Bottom sheet mobil kayıt, tam sayfa'dan daha iyi dönüşüm sağlar | Bottom sheet | Tam sayfa | mobile signup_complete rate | 8x5x7=280 |
| 4 | Deneme bitiş modalında ilerleme gösterimi dönüşümü artırır | Standart modal | İlerleme gösterimli modal | trial_to_premium rate | 9x6x6=324 |
| 5 | Semptom testi sonrası One-Tap kayıt oranını artırır | One-Tap yok | One-Tap popup (2 sn sonra) | signup_complete rate | 7x5x8=280 |

---

## Kaynaklar

**Proje İçi Referanslar:**
- product-marketing.md -- Ürün konumlandırma, hedef kitle, dönüşüm hedefleri
- pricing-output.md -- Tier yapısı, fiyatlar, taksit, ödeme altyapısı, kurucu üyelik
- cro-output.md -- Form optimizasyonu, güven sinyalleri, CTA stratejisi, mobil UX, funnel
- web-design-output.md -- Renk sistemi, tipografi, buton varyantları, form tasarımı
- marketing-psychology-output.md -- Commitment merdiveni, kayıptan kaçınma, sosyal kanıt

**Harici Referanslar:**
- NextAuth.js v5 Documentation -- Provider yapılandırması, callback URL'ler, account linking
- iyzico API Documentation -- Subscription, installment, 3D Secure, webhook
- KVKK 6698 Sayılı Kanun -- Aydınlatma yükümlülüğü, açık rıza, özel nitelikli veri
- Google Identity Services -- One-Tap sign-in, FedCM API
- Baymard Institute -- Checkout UX best practices
- Apple Human Interface Guidelines -- Touch target sizes, bottom sheet patterns

---

*Son güncelleme: 24 Mayıs 2026*
