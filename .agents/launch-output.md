# Lipödem Türkiye -- Kapsamlı Lansman Planı

**Tarih:** 24 Mayıs 2026
**Referanslar:** product-marketing.md, directory-submissions-output.md, social-output.md, ads-output.md, emails-output.md, pricing-output.md, co-marketing-output.md, community-marketing-output.md, analytics-output.md, lead-magnets-output.md
**Lansman tarihi:** 6-7 Haziran 2026 (1. Ulusal Lipödem Kongresi, Ankara)
**Platform:** lipodemturkiye.com -- Next.js 15 + Vercel
**Lansman tipi:** Kongre-senkronize hibrit lansman (fiziksel + dijital eş zamanlı)

---

## İÇİNDEKİLER

1. [Lansman Stratejisi ve Hedefleri](#1-lansman-stratejisi-ve-hedefleri)
2. [Pre-Launch Fazı (T-30 → T-0)](#2-pre-launch-fazı-t-30--t-0)
3. [Lansman Haftası Detaylı Takvimi (D-1 → D+7)](#3-lansman-haftası-detaylı-takvimi-d-1--d7)
4. [Kongre Entegrasyonu](#4-kongre-entegrasyonu)
5. [Dijital Lansman](#5-dijital-lansman)
6. [PR ve Medya Planı](#6-pr-ve-medya-planı)
7. [Kurucu Üyelik Kampanyası](#7-kurucu-üyelik-kampanyası)
8. [Post-Launch İlk 30 Gün](#8-post-launch-ilk-30-gün)
9. [Kriz Senaryoları ve B Planları](#9-kriz-senaryoları-ve-b-planları)
10. [Launch Metrics Dashboard](#10-launch-metrics-dashboard)

---
---

## 1. Lansman Stratejisi ve Hedefleri

### 1.1 Lansman Tipi: Kongre-Senkronize Hibrit Lansman

Bu lansman klasik bir dijital ürün lansmanı değildir. 1. Ulusal Lipödem Kongresi (6-7 Haziran 2026, Ankara) ile eş zamanlı gerçekleştirilerek fiziksel ve dijital kanalları birleştiren hibrit bir lansman stratejisi uygulanır.

**Neden bu strateji?**

| Avantaj | Açıklama |
|---------|----------|
| Otorite transferi | Kongre katılımı platformun bilimsel ciddiyetini kanıtlar |
| Yoğunlaştırılmış hedef kitle | Lipödem ilgilileri (doktorlar, hastalar, medya) tek yerde toplanır |
| PR fırsatı | Kongre haberleri platformun medya görünürlüğünü artırır |
| Ortaklık hızlandırması | Klinikler, doktorlar, dernekler ile yüz yüze temas imkanı |
| Çift dalgalı etki | Kongre günü fiziksel dalga + dijital lansman ikinci dalga yaratır |

### 1.2 ORB Kanal Çerçevesi

Lansman stratejisi ORB (Owned-Rented-Borrowed) çerçevesine dayanır. Tüm kanallar sonuçta owned kanallara (email listesi, platform) yönlendirir.

```
OWNED (Ana kanallar)                RENTED (Erişim kanalları)         BORROWED (Otorite kanalları)
━━━━━━━━━━━━━━━━━━━                ━━━━━━━━━━━━━━━━━━━━━━            ━━━━━━━━━━━━━━━━━━━━━━━━━
Email listesi (birincil)            Instagram (P0)                    Kongre stant + sunum
Blog / site içerikleri              TikTok (P0)                       Doktor/KOL işbirlikleri
Platform araçları                   Facebook Grubu (P1)               Basın haberleri
WhatsApp topluluk                   Twitter/X (P2)                    Podcast röportajları
                                    YouTube (P2)                      Guest post'lar
                                    Product Hunt (tek seferlik)       Dernek işbirlikleri
```

### 1.3 Lansman Fazları

```
PRE-LAUNCH             SOFT LAUNCH           KONGRE LANSMAN          DİJİTAL LANSMAN         POST-LAUNCH
T-30 → T-7             T-7 → T-1             D-Day (6-7 Haz)        D+1 → D+7               D+7 → D+30
━━━━━━━━━━━            ━━━━━━━━━━━           ━━━━━━━━━━━━━━          ━━━━━━━━━━━━━            ━━━━━━━━━━━
Waitlist toplama        Beta erişim            Stant + sunum          Product Hunt             Momentum koruma
Teaser içerik           İlk kullanıcılar       Canlı demo            Email blast              Feedback döngüsü
PR hazırlığı            Bug düzeltme           Networking             Sosyal medya storm       İçerik üretimi
Ortaklık temas          Basın bülteni hazır    Basın temas            Influencer paylaşım      Hata düzeltme
Kongre lojistik         Lansman asset'leri     Email toplama          Dizin kayıtları          Erken A/B testleri
```

### 1.4 Başarı Metrikleri

#### Birincil KPI'lar (İlk 30 Gün)

| Metrik | Hedef | Ölçüm Aracı |
|--------|-------|--------------|
| Tekil ziyaretçi | 5.000 | GA4 |
| Email kayıt | 1.000 | Resend / ESP |
| Semptom testi tamamlama | 500 | GA4 custom event |
| Premium deneme başlatma | 100 | Stripe / iyzico |
| Premium ödeme (aktif abone) | 50 | Stripe / iyzico |
| Klinik yönlendirme tıklaması | 100 | GA4 custom event |
| Kurucu üyelik satışı | 50/100 kontenjan | Ödeme sistemi |

#### İkincil KPI'lar

| Metrik | Hedef | Ölçüm Aracı |
|--------|-------|--------------|
| Sosyal medya takipçi (toplam) | 2.000 | Platform native |
| Product Hunt upvote | 200+ | Product Hunt |
| Basın haberi sayısı | 5+ | Manuel takip |
| Kongre stant lead toplama | 200 kart/email | Manuel |
| WhatsApp/Telegram grup üye | 100 | Platform native |
| Ortalama oturum süresi | >3 dakika | GA4 |
| Bounce rate | <%55 | GA4 |
| Email açılma oranı (lansman) | >%40 | Resend |

#### Stretch Hedefler (Optimistik Senaryo)

| Metrik | Stretch Hedef |
|--------|---------------|
| Tekil ziyaretçi | 10.000 |
| Email kayıt | 2.000 |
| Premium abone | 100 |
| Kurucu üyelik | 100/100 (tükendi) |
| Basın haberi | 10+ |

### 1.5 Lansman Bütçesi

| Kalem | Tutar (TL) | Not |
|-------|-----------|-----|
| Kongre stant / katılım | 15.000-25.000 | Stant boyutuna göre |
| Basılı materyal (broşür, kartvizit, roll-up) | 3.000-5.000 | 500 broşür, 500 kartvizit, 2 roll-up |
| Google Ads (lansman haftası boost) | 5.000 | High-intent arama + brand |
| Meta Ads (lansman haftası) | 5.000 | Farkındalık + retargeting |
| PR ajansı / basın dağıtım | 3.000-5.000 | Basın bülteni dağıtımı |
| Influencer / KOL hediye | 2.000-3.000 | Mikro-influencer ürün deneyimi |
| QR kod standları / tanıtım materyali | 1.000-2.000 | Kongre alanında |
| Acil durum rezervi | 3.000 | Beklenmeyen harcamalar |
| **TOPLAM** | **37.000-53.000 TL** | |

---

## 2. Pre-Launch Fazı (T-30 → T-0)

### 2.1 Genel Zaman Çizelgesi

```
T-30 (7 Mayıs)         T-21 (16 Mayıs)        T-14 (23 Mayıs)        T-7 (30 Mayıs)         T-0 (6 Haziran)
━━━━━━━━━━━━━           ━━━━━━━━━━━━━          ━━━━━━━━━━━━━          ━━━━━━━━━━━━           ━━━━━━━━━━━━
Strateji kesinleştirme  Waitlist sayfası canlı  Beta kullanıcı davet   Basın bülteni gönder   LANSMAN GÜNÜ
Kongre lojistik başla   Sosyal medya teaser     İlk email toplama      Product Hunt hazırlık  Kongre stant açık
Ortaklık outreach       İçerik hazırlığı        PR medya listesi       Final QA + bug fix     Dijital + fiziksel
Asset üretimi başla     Domain ısınma başla     Influencer temas       Lansman email hazır    GO LIVE
```

### 2.2 Hafta 1: T-30 → T-23 (7-14 Mayıs)

#### Teknik Hazırlık

| Görev | Sorumlu | Tamamlanma |
|-------|---------|------------|
| Site son QA -- tüm sayfalar, araçlar, formlar test edilir | Geliştirici | T-28 |
| Vercel production deploy + custom domain doğrulama | Geliştirici | T-28 |
| SSL sertifikası + güvenlik taraması | Geliştirici | T-28 |
| GA4 + GTM + Vercel Analytics kurulumu doğrulama | Geliştirici | T-27 |
| Email domain kurulumu (SPF/DKIM/DMARC) | Geliştirici | T-27 |
| Email domain ısınma başlangıcı (günde 50 email) | Otomatik | T-27 başlar |
| Ödeme sistemi (iyzico) test modu doğrulama | Geliştirici | T-26 |
| Staging ortamında load test (1.000 eş zamanlı kullanıcı) | Geliştirici | T-25 |
| CDN cache stratejisi optimizasyonu | Geliştirici | T-25 |
| Core Web Vitals kontrolü (LCP <2.5s, CLS <0.1, INP <200ms) | Geliştirici | T-24 |
| Mobil responsive son kontrol (iOS Safari, Android Chrome) | Geliştirici | T-24 |

#### Kongre Lojistik

| Görev | Tamamlanma |
|-------|------------|
| Kongre stant başvurusu / onay teyidi | T-30 |
| Stant boyutu ve konum teyidi | T-28 |
| Roll-up banner tasarım briefi | T-28 |
| Broşür içerik ve tasarım briefi | T-27 |
| Kartvizit tasarımı (QR kodlu, semptom testine yönlendiren) | T-27 |
| Stant ekipman listesi (tablet, monitör, internet) | T-26 |
| Ankara otel ve ulaşım rezervasyonu | T-25 |
| Demo cihaz hazırlığı (2 tablet + 1 laptop) | T-24 |

#### Ortaklık Outreach

| Hedef Ortak | Outreach Aksiyonu | Şablon Ref. |
|-------------|-------------------|-------------|
| Lenfödem Derneği | Resmi tanışma emaili + kongre görüşme talebi | co-marketing-output.md #10 |
| İlk 5-10 klinik (İstanbul, Ankara, İzmir) | Pilot klinik ortaklık teklifi emaili | co-marketing-output.md #2.4 |
| DoktorTakvimi | Platform entegrasyon görüşme talebi | co-marketing-output.md #7 |
| Kompresyon markaları (medi, Juzo) | İşbirliği teklif emaili | co-marketing-output.md #4 |
| 3-5 lipödem doktoru (kongre konuşmacıları) | Kişisel tanışma + platform tanıtım emaili | co-marketing-output.md #3 |

#### Asset Üretimi Başlangıcı

| Asset | Format | Kullanım | Tamamlanma |
|-------|--------|----------|------------|
| Lansman videosu (60 sn) | MP4 | Product Hunt, sosyal medya, kongre | T-14 |
| Lansman videosu (15 sn) | MP4 | Instagram Reel, TikTok, Story | T-14 |
| Product Hunt hero görseli | PNG 1270x760 | Product Hunt listing | T-10 |
| 5 ekran görüntüsü (platform) | PNG 1920x1080 | Product Hunt, dizinler, basın kiti | T-14 |
| Mobil ekran görüntüsü (3 adet) | PNG 1080x1920 | Sosyal medya, App dizinleri | T-14 |
| Basın kiti (logo + screenshots + bülten) | ZIP | Medya dağıtımı | T-10 |
| Kongre broşürü (2 sayfa) | PDF + baskı | Kongre dağıtım | T-10 |
| Roll-up banner (2 adet) | Baskı | Kongre stant | T-10 |
| QR kod standı (masa üstü) | Baskı | Kongre demo masası | T-10 |
| OG image (sosyal paylaşım) | JPG 1200x630 | Site meta, paylaşımlar | T-21 |

### 2.3 Hafta 2: T-23 → T-16 (14-21 Mayıs)

#### Waitlist / Coming Soon Sayfası

**URL:** lipodemturkiye.com/yakinda (veya ana sayfanın pre-launch versiyonu)

**Sayfa elementleri:**

```
┌──────────────────────────────────────────────────┐
│  [Logo: Lipödem Türkiye]                         │
│                                                  │
│  Türkiye'nin İlk Kapsamlı                        │
│  Lipödem Hasta Platformu                         │
│  ──────────────────────                          │
│  Bilimsel bilgi. İnteraktif araçlar.             │
│  Sizi anlayan bir topluluk.                      │
│                                                  │
│  6 Haziran 2026'da yayında.                      │
│                                                  │
│  [Countdown Timer: GG:SS:DD:SN]                  │
│                                                  │
│  Lansman gününde ilk haberdar olun:              │
│  [Email adresi]  [Beni Haberdar Et]              │
│                                                  │
│  ✓ Ücretsiz semptom testi                        │
│  ✓ Klinik bulucu                                 │
│  ✓ Anti-inflamatuar beslenme planı               │
│  ✓ Hasta topluluğu                               │
│                                                  │
│  ────────────────────────────                    │
│  İLK 100 KURUCU ÜYE                              │
│  %40 indirimli ömür boyu fiyat                   │
│  [Detayları Gör]                                 │
│                                                  │
│  ────────────────────────────                    │
│  "Lipödem kadınların %6-11'ini etkiler.          │
│   Türk doktorların sadece %51'i biliyor."        │
│  ── 2025 Phlebology, n=508                       │
│                                                  │
│  [Instagram] [TikTok] [X]                        │
└──────────────────────────────────────────────────┘
```

**Teknik detaylar:**
- Countdown timer: 6 Haziran 2026 09:00 TSİ'ye sayan
- Email toplama: Resend API entegrasyonu
- Double opt-in: KVKK uyumlu onay emaili
- UTM tracking: tüm kaynaklardan gelen trafik ayrıştırılır
- Conversion event: `waitlist_signup` (GA4)

#### Sosyal Medya Teaser Kampanyası

**Instagram (T-21 → T-0, günlük paylaşım):**

| Gün | Format | İçerik | CTA |
|-----|--------|--------|-----|
| T-21 | Reel (15sn) | "Yakında..." -- logo reveal, platform önizleme | Bio link |
| T-20 | Carousel | "Lipödem nedir? 5 temel bilgi" -- farkındalık içeriği | Kaydet |
| T-19 | Story | Countdown sticker -- lansman tarihine geri sayım | Swipe up |
| T-18 | Reel (30sn) | "Türkiye'de 2.5 milyon kadın..." -- istatistik hook | Bio link |
| T-17 | Tek görsel | "Bu obezite değil." -- tipografi, stigma karşıtı | Paylaş |
| T-16 | Carousel | "Semptom testi sneak peek" -- araç önizlemesi | Bio link |
| T-15 | Story | Anket: "Lipödem kelimesini daha önce duydunuz mu?" | Etkileşim |
| T-14 | Reel (45sn) | "10 yıl yanlış tanı" -- duygusal hasta hikayesi teaserı | Bio link |
| T-13 | Carousel | "Anti-inflamatuar beslenme: 3 altın kural" | Kaydet |
| T-12 | Story serisi | "Platform arkası: böyle inşa ediyoruz" -- backstage | Countdown |
| T-11 | Tek görsel | Countdown: "11 gün kaldı" | Bio link |
| T-10 | Reel (30sn) | "Doktorunuz bilmiyor olabilir -- %51 istatistiği" | Bio link |
| T-9 | Carousel | "Klinik bulucu nasıl çalışır?" -- araç tanıtım | Bio link |
| T-8 | Story | "Kurucu üyelik nedir?" -- swipe up waitlist | Waitlist |
| T-7 | Reel (60sn) | Platform tam demo videosu (hızlandırılmış) | Bio link |
| T-6 | Carousel | "Kongrede buluşuyoruz!" -- kongre bilgisi | Kaydet |
| T-5 | Story | Team tanıtımı -- kim yapıyor bu platformu? | Etkileşim |
| T-4 | Tek görsel | Countdown: "4 gün kaldı" + kurucu üyelik hatırlatma | Bio link |
| T-3 | Reel (15sn) | "Son 3 gün" -- heyecan teaserı | Bio link |
| T-2 | Story | Son anket: "En çok hangi aracı merak ediyorsunuz?" | Etkileşim |
| T-1 | Carousel | "Yarın yayındayız! İşte sizi neler bekliyor" | Waitlist |

**TikTok (T-21 → T-0, haftada 4 video):**

| Hafta | Video 1 | Video 2 | Video 3 | Video 4 |
|-------|---------|---------|---------|---------|
| Hafta 1 | "Bacakların neden incelmiyor biliyor musun?" (hook) | "Lipödem gerçekleri #1" | "Doktor kilo ver dedi ama..." | Platform teaser |
| Hafta 2 | "2.5 milyon kadın bunu bilmiyor" | "Anti-inflamatuar beslenme nedir?" | "Semptom testi sneak peek" | Countdown videosu |
| Hafta 3 | "15 yıl kendimi suçladım" (duygusal) | "Kongrede buluşalım!" | "Son 3 gün" heyecan | "Yarın yayında!" |

**Twitter/X (T-14 → T-0):**

- Günlük 1-2 tweet + haftalık 1 thread
- Kongre doktorlarını mention et
- Bilimsel istatistik paylaşımları
- Lansman geri sayımı

### 2.4 Hafta 3: T-16 → T-9 (21-28 Mayıs)

#### Email Toplama Yoğunlaştırma

**Trafik kaynakları → Waitlist sayfasına yönlendirme:**

| Kaynak | Taktik | Hedef Kayıt |
|--------|--------|-------------|
| Instagram bio | Link-in-bio waitlist sayfasına | 100-200 |
| TikTok bio | Waitlist linki | 50-100 |
| Google Ads (pre-launch) | "Lipödem nedir" aramaları → waitlist LP | 100-200 |
| Meta Ads (pre-launch) | Farkındalık + lead gen kampanyası | 100-200 |
| Kongre web sitesi (varsa) | Banner veya sponsorluk linki | 30-50 |
| Doktor referansı | Klinik ortaklarının hastalarına duyuru | 30-50 |
| Cross-post (Facebook grupları) | Mevcut lipödem gruplarında dikkatli paylaşım | 50-100 |
| **TOPLAM PRE-LAUNCH EMAIL HEDEFİ** | | **460-900** |

#### İçerik Hazırlığı (Lansman Günü İçin)

| İçerik | Durum | Yayın Tarihi |
|--------|-------|--------------|
| Ana sayfa (final copy) | Hazır (copywriting-output.md) | T-0 |
| "Lipödem Nedir?" pillar page | Hazır (lipedema-expert output) | T-0 |
| Semptom testi (10 soru) | Hazır (free-tools-output.md) | T-0 |
| Klinik bulucu (temel) | Hazır | T-0 |
| Beslenme planlayıcı (temel) | Hazır | T-0 |
| 5 lead magnet PDF | Hazır (lead-magnets-output.md) | T-0 |
| Blog: Lansman duyuru yazısı | Yazılacak | T-3 |
| Blog: "Lipödem Kongresinden Notlar" (taslak) | Şablon hazır | D+1 |
| Email: Lansman duyuru (waitlist'e) | Yazılacak | T-3 |
| Email: Hoşgeldin dizisi (5 email) | Hazır (emails-output.md) | T-0 otomatik |

#### Beta Kullanıcı Programı

**T-14 → T-7:** İlk 20-30 beta kullanıcıya erişim verilir.

**Beta kullanıcı kaynakları:**
- Waitlist'ten en erken kaydolan 10 kişi
- Ortaklık görüşmelerindeki doktor/uzman 5 kişi
- Lipödem Facebook gruplarından gönüllü 10 kişi
- Takım üyeleri ve yakın çevre 5 kişi

**Beta kullanıcı görevleri:**
1. Tüm sayfaları ziyaret et, kırık link bildir
2. Semptom testini tamamla, UX geri bildirimi ver
3. Klinik bulucuyu dene, sonuçları değerlendir
4. Mobilde tüm akışları test et (iOS + Android)
5. Premium deneme başlat, ödeme akışını test et
6. 3 dakikalık ses kaydı geri bildirim (opsiyonel)

**Beta feedback toplama:**
- Google Form (yapılandırılmış sorular)
- WhatsApp grubu (anlık geri bildirim)
- Hotjar session replay (kullanım gözlemi)

### 2.5 Hafta 4: T-9 → T-1 (28 Mayıs - 5 Haziran)

#### Final QA ve Bug Fix Sprint

| Gün | Odak | Kabul Kriteri |
|-----|------|---------------|
| T-9 | Beta feedback triage + önceliklendirme | Kritik bug listesi hazır |
| T-8 | Kritik bug düzeltme sprint | Tüm P0 buglar kapanmış |
| T-7 | Ödeme akışı son test (iyzico production) | 3 test ödeme başarılı |
| T-6 | Email otomasyon son test (Resend production) | Hoşgeldin + semptom dizisi tetikleniyor |
| T-5 | Yük testi (500 eş zamanlı kullanıcı) | Yanıt süresi <2sn |
| T-4 | Mobil son kontrol (5 farklı cihaz) | Tüm araçlar çalışıyor |
| T-3 | Staging → Production deploy | Canlı site sorunsuz |
| T-2 | Kongre materyalleri son kontrol + paketleme | Tüm baskılar hazır |
| T-1 | Ankara'ya ulaşım + stant kurulumu | Stant fiziksel olarak hazır |

#### Lansman Email'i Hazırlığı

**Waitlist'e gönderilecek lansman duyuru emaili:**

**Gönderici:** Lipödem Türkiye <bilgi@lipodemturkiye.com>
**Konu satırı A:** Bugün yayındayız -- Türkiye'nin ilk lipödem platformu
**Konu satırı B:** [Ad], beklediğiniz gün geldi
**Preview text:** Semptom testi, klinik bulucu ve daha fazlası hazır (50 karakter)
**Gönderim zamanı:** 6 Haziran 2026, 09:00 TSİ

**Gövde:**

```
Merhaba [Ad],

Bugün çok özel bir gün.

Lipödem Türkiye, Türkiye'nin ilk ve tek kapsamlı lipödem hasta platformu 
olarak bugün yayına başlıyor.

Siz bu yolculuğa en başından destek verdiniz. Teşekkür ederiz.

İŞTE SİZİ NELER BEKLİYOR:

[Semptom Testi] -- 2 dakikada kendinizi değerlendirin
Sonuçları doktorunuza gösterebileceğiniz bir rapor alın.

[Klinik Bulucu] -- Şehrinizde lipödem uzmanı bulun
81 ilde uzman doktor ve klinik rehberi.

[Beslenme Planlayıcı] -- Lipödeme özel beslenme planı
Anti-inflamatuar, Türk mutfağına uygun, kişiselleştirilmiş.

[Lipödem Nedir? Rehberi] -- Bilmeniz gereken her şey
2025 Delphi Konsensüsü referanslı, kapsamlı bilgi.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KURUCU ÜYELİK -- SADECE İLK 100 KİŞİ

İlk 100 kurucu üyeye özel:
- Ömür boyu %40 indirimli fiyat
- "Kurucu Üye" rozeti (toplulukta)
- Tüm gelecek özellikler dahil
- Fiyat artışlarından ömür boyu koruma

Temel Premium: 79 TL → 47 TL/ay (ömür boyu)
Tam Premium: 149 TL → 89 TL/ay (ömür boyu)

[KURUCU ÜYE OL -- XX/100 KALDI]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bu platform, yıllardır "kilo ver" denilerek yalnız bırakılmış kadınlar 
için yapıldı. Lipödem bir kilo sorunu değil, kronik bir hastalık. Ve bu 
hastalık yönetilebilir.

Bugün sadece bir platform lansman yapmıyoruz. Türkiye'de lipödem 
farkındalığını değiştirmeye başlıyoruz.

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Bugün aynı zamanda Ankara'da 1. Ulusal Lipödem Kongresi 
başlıyor. Oradaysanız standımıza bekleriz!
```

#### Basın Bülteni Gönderimi

- T-3: Basın bülteni son onay
- T-2: Embargo'lu basın bülteni gönderimi (6 Haziran sabahı embargo)
- T-1: Medya listesindeki kişilere bire bir hatırlatma

#### Product Hunt Hazırlık

- T-7: Product Hunt listing draft oluştur
- T-5: Maker profile ve tagline son kontrol
- T-3: Hunter ile iletişim (ideal: Türk tech community'den biri)
- T-1: Listing son onay, gallery görselleri yükle
- Lansman: D+1 (Cumartesi veya Pazar -- düşük rekabet günü) veya D+3 (Pazartesi -- yüksek trafik günü)

---

## 3. Lansman Haftası Detaylı Takvimi (D-1 → D+7)

### D-1: 5 Haziran 2026 (Perşembe) -- Son Hazırlık

| Saat | Görev | Sorumlu |
|------|-------|---------|
| 08:00 | Production deploy son kontrol -- tüm sistemler canlı mı? | Geliştirici |
| 09:00 | GA4 + GTM event'leri son doğrulama (realtime view) | Geliştirici |
| 10:00 | Ödeme sistemi canlı ortam son test (1 TL test ödemesi) | Geliştirici |
| 11:00 | Email otomasyon trigger testleri (her dizi için 1 test) | Geliştirici |
| 12:00 | Lansman email'i ESP'ye yükleme ve planlama (6 Haziran 09:00 TSİ) | Pazarlama |
| 13:00 | Sosyal medya lansman postlarını planlama (Buffer/Later) | Pazarlama |
| 14:00 | Ankara'ya yolculuk | Tüm ekip |
| 17:00 | Kongre alanına ulaşım, stant yeri keşfi | Tüm ekip |
| 18:00 | Stant kurulumuna başlama (izin varsa) | Tüm ekip |
| 20:00 | Son ekip briefing: yarınki plan, roller, acil iletişim | Tüm ekip |
| 21:00 | Site monitoring alert'lerini aç (UptimeRobot / Vercel) | Geliştirici |

### D-Day 1: 6 Haziran 2026 (Cuma) -- LANSMAN GÜNÜ

| Saat | Görev | Kanal | Sorumlu |
|------|-------|-------|---------|
| 07:00 | Stant son hazırlık: tablet, monitör, internet testi | Kongre | Tüm ekip |
| 07:30 | Site canlı mı son kontrol, monitoring dashboard aç | Teknik | Geliştirici |
| 08:00 | Waitlist sayfasını kapat → Ana sayfa canlıya geçir | Site | Geliştirici |
| 08:30 | Coming soon → Live geçiş doğrulama (tüm URL'ler) | Site | Geliştirici |
| 09:00 | **LANSMAN EMAİL'İ GÖNDERİLİR** (waitlist'e) | Email | Otomatik |
| 09:00 | Kongre açılış -- stant açılır, ziyaretçi karşılama başlar | Kongre | Stant ekibi |
| 09:15 | Instagram lansman postu: "Bugün yayındayız!" (carousel) | Instagram | Pazarlama |
| 09:20 | TikTok lansman videosu: platform demo (60sn) | TikTok | Pazarlama |
| 09:30 | Twitter/X lansman thread'i (5-7 tweet) | Twitter | Pazarlama |
| 09:30 | Facebook sayfası + grup duyurusu | Facebook | Pazarlama |
| 09:45 | LinkedIn duyurusu (kurumsal + kişisel) | LinkedIn | Kurucu |
| 10:00 | Basın bülteni embargo kalkar -- haber siteleri yayınlar | PR | PR ajansı |
| 10:00-12:00 | Kongre: Stant ziyaretçilerine demo, email toplama | Kongre | Stant ekibi |
| 10:30 | Instagram Story: Kongre backstage + stant turu | Instagram | Pazarlama |
| 11:00 | GA4 realtime dashboard kontrolü -- trafik akışı izleme | Analytics | Geliştirici |
| 12:00-13:00 | Öğle arası: Kongre networking, doktor görüşmeleri | Kongre | Kurucu |
| 13:00 | Instagram Story: "İlk 4 saatte X kişi semptom testi yaptı" | Instagram | Pazarlama |
| 13:00-17:00 | Kongre: Sunumlar arası stant aktivasyonu devam | Kongre | Stant ekibi |
| 14:00 | Platform sunum/demo (kongre programında yer varsa) | Kongre | Kurucu |
| 15:00 | TikTok: Kongreden canlı görüntüler + platform tanıtım | TikTok | Pazarlama |
| 16:00 | Influencer/KOL'lere platforma erişim + DM ile bilgilendirme | Sosyal | Pazarlama |
| 17:00 | Kongre 1. gün kapanış -- günün metrikleri değerlendirme | İç | Tüm ekip |
| 18:00 | Instagram Story: "Günün özeti -- X kayıt, X semptom testi" | Instagram | Pazarlama |
| 19:00 | Kongre akşam etkinliği networking (varsa) | Kongre | Kurucu |
| 20:00 | GA4 gün sonu raporu: ziyaretçi, kayıt, dönüşüm | Analytics | Geliştirici |
| 20:30 | Acil bug/issue triage -- kritik sorunlar gece düzeltilir | Teknik | Geliştirici |
| 21:00 | Email: Gün 1 tamamlanmadı ise tetiklenmeyen otomasyon kontrolü | Email | Geliştirici |

### D-Day 2: 7 Haziran 2026 (Cumartesi) -- KONGRE 2. GÜN

| Saat | Görev | Kanal |
|------|-------|-------|
| 08:00 | Gece düzeltilen bug'ların deploy doğrulaması | Teknik |
| 09:00 | Kongre stant açılış -- 2. gün | Kongre |
| 09:00 | Instagram: "2. gün başlıyor!" Story | Instagram |
| 10:00-12:00 | Stant + demo devam, yoğun doktor görüşmeleri | Kongre |
| 10:30 | Twitter/X: Kongre sunumlarından öne çıkan notlar (canlı tweet) | Twitter |
| 12:00 | Instagram carousel: "Kongreden 5 önemli not" | Instagram |
| 13:00-16:00 | Son stant aktivasyonu, kapanış networking | Kongre |
| 14:00 | TikTok: "Kongrede öğrendiklerimiz" videosu | TikTok |
| 16:00 | Kongre kapanış -- stant sökümü | Kongre |
| 17:00 | Kongre toplanan lead'lerin dijitalleştirilmesi (excel/CRM) | Operasyon |
| 18:00 | Instagram: Kongre teşekkür postu | Instagram |
| 19:00 | Kongre lead'lerine teşekkür emaili planlaması | Email |
| 20:00 | 2 günlük kongre metrikleri özeti | Analytics |
| 21:00 | Product Hunt lansman kararı (D+1 Pazar mı, D+3 Pazartesi mi?) | Strateji |

### D+1: 8 Haziran 2026 (Pazar) -- Kongre Sonrası Momentum

| Saat | Görev |
|------|-------|
| 10:00 | Blog yayını: "1. Ulusal Lipödem Kongresinden Notlar" -- SEO + link bait |
| 11:00 | Kongre lead'lerine kişiselleştirilmiş teşekkür emaili gönderimi |
| 12:00 | Instagram carousel: "Kongre özeti -- lipödemde son gelişmeler" |
| 13:00 | TikTok: "Bu hafta sonu neler oldu?" kongre vlog tarzı |
| 14:00 | Twitter thread: "Kongrede öğrendiğimiz 10 şey" |
| 15:00 | Facebook grubunda kongre tartışması başlatma |
| 16:00 | Mevcut lipödem Facebook gruplarında (izinle) platform duyurusu |
| 18:00 | Product Hunt listing final kontrol (Pazartesi lansmanı için) |

### D+2: 9 Haziran 2026 (Pazartesi) -- PRODUCT HUNT LANSMANI

| Saat | Görev |
|------|-------|
| 00:01 PST / 10:01 TSİ | Product Hunt listing canlı |
| 10:15 | İlk yorum: Maker comment (kurucu hikayesi + ürün vizyonu) |
| 10:30 | Sosyal medya: "Product Hunt'tayız! Destek olun" -- tüm platformlar |
| 10:30 | Email: Waitlist + kongre lead'lerine "Product Hunt'tayız" duyurusu |
| 11:00-19:00 | Product Hunt yorumlarına gerçek zamanlı yanıt (tüm gün) |
| 12:00 | Instagram Story: Product Hunt sıralaması güncellemesi |
| 14:00 | İkinci sosyal medya dalgası: "Top X'teyiz!" |
| 16:00 | Influencer/KOL'lere Product Hunt linki ile DM |
| 18:00 | TikTok: "Product Hunt'ta ne oldu?" videosu |
| 20:00 | Gün sonu PH sıralaması + metrik raporu |

### D+3 → D+7: 10-14 Haziran (Salı-Cumartesi) -- Dalga 2

| Gün | Ana Görev | İkincil Görev |
|-----|-----------|---------------|
| D+3 (Salı) | İlk haftalık bülten gönderimi (tüm listeye) | Dizin kayıtları başlar (Tier 1-4) |
| D+4 (Çarşamba) | Google Ads kampanyaları aktif (pre-launch'tan geçiş) | Retargeting pixel verisi yeterli mi kontrol |
| D+5 (Perşembe) | Meta Ads kampanyaları aktif (farkındalık + dönüşüm) | Blog: İlk eğitim içeriği yayını |
| D+6 (Cuma) | Haftalık metrik raporu + strateji gözden geçirme | Influencer paylaşım takibi |
| D+7 (Cumartesi) | İlk hafta blog özeti: "Lansman haftasında neler oldu?" | Topluluk moderasyon gözden geçirme |

---

## 4. Kongre Entegrasyonu

### 4.1 Stant Tasarımı ve Deneyimi

**Stant boyutu:** Minimum 3x3m (ideal 3x4m)

**Stant layout:**

```
┌─────────────────────────────────────────────┐
│  [ROLL-UP 1]                  [ROLL-UP 2]   │
│  "Türkiye'nin                 "Semptom       │
│   İlk Lipödem                  Testini        │
│   Platformu"                   Şimdi Yapın"   │
│                                              │
│  ┌──────────┐   ┌──────────┐                │
│  │ TABLET 1 │   │ TABLET 2 │  [MONITÖR]     │
│  │ Semptom  │   │ Serbest  │  Demo video    │
│  │ testi    │   │ dolaşım  │  döngüde       │
│  └──────────┘   └──────────┘                │
│                                              │
│  ┌─────────────────────────┐                │
│  │     MASA (kartvizit,    │                │
│  │   broşür, QR standı)    │                │
│  └─────────────────────────┘                │
│                                              │
│  [KARTVIZIT]  [BROŞÜR]  [QR KODU]           │
│                                              │
└─────────────────────────────────────────────┘
```

**Stant elementleri:**

| Element | Detay | Amaç |
|---------|-------|------|
| Roll-up 1 | Platform tanıtım: logo, tagline, 3 ana özellik | Marka bilinirliği |
| Roll-up 2 | Semptom testi CTA: "2 dakikada kendinizi değerlendirin" + QR | Dönüşüm |
| Tablet 1 | Semptom testi açık -- ziyaretçi kendi başına denesin | Hands-on deneyim |
| Tablet 2 | Platform serbest dolaşım -- klinik bulucu, beslenme planı | Keşif |
| Monitör | 60 sn demo videosu döngüde | Passive attraction |
| Broşür | 2 sayfalık, QR kodlu, semptom kontrol listesi arkasında | Take-away |
| Kartvizit | QR kodlu, semptom testine yönlendiren | Networking |
| QR standı | Masa üstü, "Semptom Testini Başlat" yazılı | Mobil erişim |

### 4.2 Kongre Stant Konuşma Senaryosu

**Doktor yaklaştığında:**

> "Merhaba, Lipödem Türkiye platformundan. Türkiye'nin ilk kapsamlı lipödem hasta bilgi platformunu kuruyoruz. Hastalarınızı bilimsel temelli bilgiye yönlendirebileceğiniz, semptom testi yapabilecekleri ve Türkçe kaynaklara ulaşabilecekleri bir platform. Kliniğinizi de platformumuza eklemek ister misiniz? İlk 10 klinik ortağımıza 6 ay ücretsiz premium listeleme sunuyoruz."

**Hasta / ilgili kişi yaklaştığında:**

> "Merhaba, lipödem hakkında bilgi mi arıyorsunuz? 2 dakikada yapabileceğiniz ücretsiz bir semptom testi var -- sonuçları doktorunuza gösterebileceğiniz bir rapor alıyorsunuz. İsterseniz şurada tabletten deneyebilirsiniz."

**Basın mensubu yaklaştığında:**

> "Merhaba, Lipödem Türkiye platformunun kurucusuyum. Türkiye'de tahminen 2.5-4.5 milyon kadını etkileyen lipödem hastalığında Türkçe bilgi boşluğunu kapatmak için bir platform kuruyoruz. Size basın kitimizi verebilir miyim? İsterseniz kısa bir röportaj da yapabiliriz."

### 4.3 Stant Lead Toplama Sistemi

**Dijital lead toplama (birincil):**

1. QR kod → lipodemturkiye.com/kongre (özel landing page)
2. Landing page: Ad, email, rol (doktor/hasta/medya/diğer) formu
3. Form doldurana özel: Kongre katılımcılarına 7 gün ekstra premium deneme
4. Otomatik etiketleme: `kayit_kaynagi: kongre_2026`

**Fiziksel yedek:**

- Kartvizit toplama kutusu (WiFi kesintisi durumunda)
- Not defteri (acil durum -- el ile email kaydı)
- Kartvizitlerde QR kod (sonradan tarama imkanı)

**Kongre-özel UTM:**
```
?utm_source=kongre&utm_medium=stant&utm_campaign=lansman_2026&utm_content=qr_brosur
?utm_source=kongre&utm_medium=sunum&utm_campaign=lansman_2026
?utm_source=kongre&utm_medium=kartvizit&utm_campaign=lansman_2026
```

### 4.4 Sunum / Demo (Kongre Programında Yer Varsa)

**Sunum başlığı önerisi:** "Dijital Sağlık ve Hasta Güçlendirme: Lipödem Türkiye Platformu"

**Sunum yapısı (15-20 dakika):**

| Bölüm | Süre | İçerik |
|-------|------|--------|
| Problem | 3 dk | Türkiye'de lipödem farkındalık krizi -- %51 doktor bilinci, 10+ yıl tanı gecikmesi |
| Çözüm | 3 dk | Platform vizyonu -- bilgi + araçlar + topluluk + yönlendirme |
| Canlı demo | 5 dk | Semptom testi + klinik bulucu canlı gösterimi |
| İşbirliği | 3 dk | Doktor işbirliği programı, klinik listeleme fırsatı |
| Veri | 2 dk | Lansman günü metrikleri (varsa) |
| CTA | 1 dk | QR kod ile platforma erişim, işbirliği formu |

**Sunum materyali:**
- Slayt (max 15 slayt, görsel ağırlıklı)
- Canlı demo yedek olarak ekran kaydı videosu (internet kesilirse)
- El ilanı (sunumda QR kodlu)

### 4.5 Kongre Networking Hedefleri

| Hedef Kişi/Kurum | Amaç | Başarı Kriteri |
|------------------|------|----------------|
| 3-5 lipödem cerrahı | Klinik ortaklık görüşmesi | İletişim bilgisi + takip toplantı takvimi |
| 2-3 diyetisyen/fizyoterapist | İçerik işbirliği | Uzman Q&A oturumu taahhüdü |
| Lenfödem Derneği yönetimi | Resmi işbirliği protokolü | Karşılıklı link + ortak etkinlik planı |
| 2-3 medya mensubu | Röportaj + haber | Lansman haberi yayınlanması |
| Kongre organizatörü | Gelecek etkinliklerde işbirliği | 2027 kongresi sponsorluk bilgisi |
| 5-10 hasta/hasta yakını | Kullanıcı deneyimi + feedback | Platform kaydı + hikaye paylaşım izni |

### 4.6 Kongre Sonrası Takip Protokolü

**D+1 (Pazar):**
- Toplanan tüm lead'ler CRM'e girilir
- Segmentasyon: doktor / hasta / medya / diğer

**D+2 (Pazartesi):**
- Doktorlara kişiselleştirilmiş teşekkür emaili:

```
Konu: Kongreden selamlar -- Lipödem Türkiye işbirliği

Sayın Dr. [Soyad],

1. Ulusal Lipödem Kongresi'nde tanıştığımız için çok memnunum.

Konuştuğumuz [klinik listeleme / içerik işbirliği / uzman Q&A] konusunda 
detayları paylaşmak isterim. Size uygun bir zamanda 15 dakikalık bir 
online görüşme ayarlayabilir miyiz?

İlk 10 klinik partnerimize 6 ay ücretsiz Premium Listeleme sunuyoruz.

[Klinik Ortaklık Detayları]

Saygılarımla,
[Ad Soyad]
Lipödem Türkiye
```

- Hastalara platform hoşgeldin emaili (kongre özel versiyon)
- Medyaya basın kiti + takip emaili

**D+7 (hafta sonu):**
- Yanıt gelmeyenlere tek hatırlatma emaili

---

## 5. Dijital Lansman

### 5.1 Product Hunt Lansmanı

**Lansman günü:** 9 Haziran 2026 (Pazartesi) -- Kongre ertesi, taze momentum ile

**Listing detayları:**

| Element | İçerik |
|---------|--------|
| **Ürün adı** | Lipödem Türkiye |
| **Tagline** | Turkey's first comprehensive lipedema patient platform (İngilizce -- PH kitlesi için) |
| **Kategori** | Health & Fitness > Digital Health |
| **Kısa açıklama** | Free symptom assessment, clinic finder, nutrition planner, and patient community for 2.5-4.5M Turkish women affected by lipedema -- a chronically underdiagnosed condition. |
| **Maker comment** | Kurucu hikayesi + neden bu platformu kurduğumuz (aşağıda) |
| **Görseller** | 5 screenshot + 1 demo video (60sn) |
| **İlk teklif** | "Upvote for 7-day extended premium trial" |

**Maker Comment (İngilizce):**

```
Hi Product Hunt! 

I'm [Ad], founder of Lipödem Türkiye.

Here's a shocking stat: lipedema affects 6-11% of women worldwide, yet 
in Turkey, only 51% of doctors even know what it is. The average 
diagnosis takes 10+ years. During that time, women are told "just lose 
weight" -- but lipedema fat doesn't respond to diet.

We built Turkey's first comprehensive lipedema platform to change this:

- Free symptom assessment (2 min, science-based)
- Clinic finder (81 cities, verified specialists)
- Personalized nutrition planner (anti-inflammatory, Turkish cuisine)
- Patient community (moderated, safe space)
- Premium programs (personalized nutrition + exercise, $3-5/mo)

We launched yesterday at Turkey's 1st National Lipedema Congress in 
Ankara. The response from doctors and patients has been incredible.

Everything is evidence-based (2025 Delphi Consensus, German S2k 
Guidelines). We don't sell miracle cures -- we empower patients with 
knowledge and tools.

I'd love your feedback. AMA! 
```

**Product Hunt gün planı:**

| Saat (TSİ) | Aksiyon |
|------------|---------|
| 10:00 | Listing canlı -- ilk yorum (maker comment) |
| 10:15 | Tüm sosyal medya kanallarından PH duyurusu |
| 10:30 | Email listesine "Product Hunt'tayız" duyurusu |
| 11:00-20:00 | Her yoruma 15 dakika içinde yanıt |
| 12:00 | Sıralama güncellemesi paylaşımı (sosyal medya) |
| 14:00 | İkinci sosyal medya dalgası |
| 16:00 | Influencer/KOL'lere PH linki DM |
| 20:00 | Gün sonu raporu |

**Product Hunt başarı hedefi:**
- Minimum: Top 10 (daily)
- Hedef: Top 5 (daily)
- Stretch: Product of the Day (#1)

### 5.2 Sosyal Medya Lansman Storm (D-Day)

**Instagram (6 Haziran, saat saat):**

| Saat | Format | İçerik |
|------|--------|--------|
| 09:15 | Carousel (10 slayt) | "Bugün yayındayız! İşte Lipödem Türkiye" -- platform özellikleri |
| 09:20 | Story (5 kare) | Countdown bitti! + lansman kutlama + semptom testi linki |
| 10:30 | Story | Kongre stant açıldı -- arkası |
| 12:00 | Reel (30sn) | Hızlı platform demo -- semptom testi akışı |
| 13:00 | Story | "İlk X saatte X kişi semptom testi yaptı!" -- canlı metrik |
| 15:00 | Story | Kongreden görüntüler -- doktor etkileşimleri |
| 18:00 | Tek görsel | "Gün 1 tamamlandı" -- günün sayıları |
| 20:00 | Story | Teşekkür + yarın ne olacak |

**TikTok (6 Haziran):**

| Saat | Video | İçerik |
|------|-------|--------|
| 09:30 | Video 1 (60sn) | "Bugün Türkiye'de ilk kez..." -- platform tanıtım + duygusal hook |
| 14:00 | Video 2 (30sn) | Kongreden canlı -- doktorlar ne diyor? |
| 18:00 | Video 3 (45sn) | "İlk günümüzde neler oldu?" -- gün özeti |

**Twitter/X (6 Haziran):**

```
THREAD: Bugün Lipödem Türkiye yayında.

1/ Türkiye'de 2.5-4.5 milyon kadın lipödemle yaşıyor olabilir.
Doktorların %51'i bu hastalığı biliyor.
Ortalama tanı süresi: 10+ yıl.

2/ Bugün bunu değiştirmeye başlıyoruz.
lipodemturkiye.com -- Türkiye'nin ilk kapsamlı lipödem hasta platformu.

3/ Ne sunuyoruz:
- Ücretsiz semptom testi (2 dk)
- 81 ilde klinik bulucu
- Anti-inflamatuar beslenme planlayıcı
- Bilimsel bilgi (2025 Delphi Konsensüsü referanslı)
- Hasta topluluğu

4/ Aynı zamanda Ankara'da 1. Ulusal Lipödem Kongresi'ndeyiz.
Stantımıza bekleriz.

5/ Bu platform, yıllardır "kilo ver" denilerek yalnız bırakılmış 
kadınlar için yapıldı.

Lipödem bir kilo sorunu değil. Kronik bir hastalık.
Ve bu hastalık yönetilebilir.

lipodemturkiye.com
```

### 5.3 Email Blast Stratejisi

**Segmentlere göre lansman email planı:**

| Segment | Email | Gönderim Zamanı | Özel İçerik |
|---------|-------|-----------------|-------------|
| Waitlist (tüm) | Lansman duyuru | D-Day 09:00 | Kurucu üyelik CTA prominent |
| Kongre lead'leri | Kongre teşekkür | D+2 | Kongre fotoğrafları + özel deneme |
| Waitlist (açmadı) | Hatırlatma | D+3 | "Kaçırdınız mı?" konu satırı |
| Tüm liste | İlk haftalık bülten | D+3 (Salı) | Lansman özeti + en popüler araç |
| Waitlist (kayıt ama dönüşüm yok) | Premium teşvik | D+7 | Kurucu üyelik son X kişi kaldı |

### 5.4 Dizin Kayıtları (D+1 → D+14)

**Hemen (D+1 → D+3):**

| Dizin | Öncelik | Aksiyon |
|-------|---------|---------|
| Product Hunt | P0 | D+2'de listing canlı |
| BetaList | P0 | D+1'de başvuru |
| Crunchbase | P0 | D+1'de profil oluştur |
| AngelList/Wellfound | P0 | D+1'de profil oluştur |
| Indie Hackers | P0 | D+1'de proje paylaşımı |
| Webrazzi | P0 | D+1'de haber gönder |
| Startups.watch | P0 | D+1'de kayıt |

**Hafta 1 (D+3 → D+7):**

| Dizin | Aksiyon |
|-------|---------|
| HONcode başvurusu | Sertifikasyon süreci başlat |
| Lipedema Foundation | İletişim + kaynak listesine eklenme talebi |
| Lipedema Project | İletişim + link talebi |
| AlternativeTo | Profil oluştur |
| SaaSHub | Profil oluştur |
| F6S | Profil oluştur |
| Ekşi Sözlük | "lipödem" başlığına katkı |

**Hafta 2 (D+7 → D+14):**
- Tier 2-4 dizinlerinin tamamı (directory-submissions-output.md referans)
- Topluluk varlık oluşturma (Reddit, Quora TR, Medium TR)
- Entity platformları (Wikidata, LinkedIn Company)

### 5.5 Influencer / KOL Aktivasyonu

**Lansman haftası influencer planı:**

| Influencer Tipi | Hedef Sayı | Aksiyon | Zamanlama |
|-----------------|-----------|---------|-----------|
| Lipödem hastaları (mikro, 1-10K) | 5-10 | Ücretsiz premium + deneyim paylaşım talebi | D-7 → D-Day |
| Sağlık influencer (10-50K) | 3-5 | Basın kiti + platform erişimi + röportaj teklifi | D-7 → D+3 |
| Kadın sağlığı hesapları (50K+) | 2-3 | Bilgi paylaşım içerik işbirliği teklifi | D-Day → D+7 |
| Diyetisyen/doktor hesapları | 3-5 | Platform tanıtım + uzman Q&A davet | D-Day → D+14 |

**Influencer outreach şablonu:**

```
Konu: Lipödem farkındalığı için işbirliği teklifi

Merhaba [Ad],

Ben [Kurucu Ad], Lipödem Türkiye platformunun kurucusu.

Türkiye'de 2.5 milyon kadını etkileyebilen ama doktorların sadece 
%51'inin bildiği lipödem hastalığı için Türkiye'nin ilk kapsamlı 
platformunu kurduk.

Sizin [kitle/hesap tanımı] ile bu farkındalığı artırabileceğimizi 
düşünüyorum.

Teklif:
- 6 ay ücretsiz Tam Premium üyelik
- Platformun arkasındaki hikayeyi paylaşabileceğimiz röportaj
- Takipçileriniz için özel indirim kodu

İlgilenirseniz hızlı bir tanışma görüşmesi yapalım.

[Kurucu Ad]
Lipödem Türkiye
```

---

## 6. PR ve Medya Planı

### 6.1 Basın Bülteni

**Başlık:** Türkiye'nin İlk Kapsamlı Lipödem Hasta Platformu Yayında: 2.5 Milyon Kadına Bilimsel Bilgi ve Ücretsiz Araçlar

**Alt başlık:** lipodemturkiye.com, 1. Ulusal Lipödem Kongresi ile eş zamanlı olarak lansman yapıyor

**Bülten gövdesi:**

```
ANKARA, 6 Haziran 2026 -- Türkiye'de tahminen 2.5-4.5 milyon kadını 
etkileyen ancak doktorların sadece %51'inin bildiği lipödem hastalığı 
için Türkiye'nin ilk ve tek kapsamlı hasta platformu bugün yayına 
başladı.

lipodemturkiye.com, lipödem şüphesi veya tanısı olan kadınlara bilimsel 
temelli bilgi, ücretsiz interaktif araçlar ve hasta topluluğu sunuyor.

PROBLEM: GÖRÜNMEYEN SALGIN

Lipödem, kadınlarda bacaklarda ve kollarda simetrik, orantısız yağ 
birikimine neden olan kronik bir hastalıktır. Dünyada kadınların %6-11'ini 
etkilemesine rağmen, Türkiye'de sistematik tanı ve tedavi altyapısı 
bulunmamaktadır.

2025 yılında Phlebology dergisinde yayınlanan ve 508 Türk doktoru 
kapsayan araştırmaya göre:
- Doktorların sadece %51'i lipödem terimini bilmektedir
- %50.9'u tedavi seçenekleri hakkında bilgi sahibi değildir
- Ortalama tanı süresi 10 yılı aşmaktadır

ÇÖZÜM: LİPÖDEM TÜRKİYE PLATFORMU

Platform şu özellikleri ücretsiz sunmaktadır:
- 2 Dakikalık Semptom Testi: Bilimsel temelli 10 soruluk değerlendirme, 
  doktora götürülebilecek rapor
- 81 İlde Klinik Bulucu: Lipödem konusunda deneyimli uzman ve klinik 
  rehberi
- Beslenme Planlayıcı: Anti-inflamatuar, Türk mutfağına uygun beslenme 
  programı
- Kapsamlı Bilgi Kaynağı: 2025 Delphi Konsensüsü ve 2024 Alman S2k 
  Kılavuzu referanslı Türkçe içerikler

BİLİMSEL TEMEL

Platform içerikleri, 71 uzmanın katılımıyla 19 ülkede gerçekleştirilen 
2025 Delphi Konsensüsü (Nature Communications), 2024 Alman Lipödem S2k 
Kılavuzu ve 20'den fazla peer-reviewed araştırmaya dayanmaktadır.

KONGRE İLE EŞ ZAMANLI LANSMAN

Platform, 6-7 Haziran 2026 tarihlerinde Ankara'da düzenlenen 1. Ulusal 
Lipödem Kongresi ile eş zamanlı olarak lansman yapmaktadır.

KURUCU ÜYELİK

İlk 100 kullanıcıya özel "Kurucu Üye" statüsü ile premium özelliklere 
ömür boyu %40 indirimli erişim sunulmaktadır.

HAKKIMIZDA

Lipödem Türkiye, lipödem hastalığı konusunda Türkçe, bilimsel temelli, 
kapsamlı bilgi ve araçlar sunan bağımsız bir dijital sağlık platformudur.

İletişim:
[Kurucu Ad Soyad]
[Telefon]
basin@lipodemturkiye.com
lipodemturkiye.com

Basın kiti: lipodemturkiye.com/basin-kiti
```

### 6.2 Medya Listesi ve Hedefleme

**Tier 1 -- Ulusal Medya (P0):**

| Medya | Bölüm | İletişim Stratejisi |
|-------|-------|---------------------|
| Hürriyet Sağlık | Sağlık haberi | Basın bülteni + kişisel email |
| Sabah Sağlık | Sağlık haberi | Basın bülteni + kişisel email |
| Milliyet Sağlık | Sağlık haberi | Basın bülteni + kişisel email |
| NTV Sağlık | Online sağlık | Basın bülteni |
| CNN Türk Sağlık | Online sağlık | Basın bülteni |
| TRT Haber | Sağlık/sosyal sorumluluk | Basın bülteni + röportaj teklifi |
| Sözcü Sağlık | Sağlık haberi | Basın bülteni |

**Tier 2 -- Teknoloji / Startup Medyası (P0):**

| Medya | Bölüm | İletişim Stratejisi |
|-------|-------|---------------------|
| Webrazzi | Girişim haberi | Haber gönder + röportaj teklifi |
| Startups.watch | Startup ekosistemi | Profil + haber |
| BtHaber | Dijital sağlık | Basın bülteni + görüşme |
| TechInside | Startup haberi | Basın bülteni |
| Girişim Haber | Girişim haberi | Basın bülteni |

**Tier 3 -- Kadın / Yaşam Tarzı Medyası (P1):**

| Medya | Bölüm | İletişim Stratejisi |
|-------|-------|---------------------|
| Elele | Kadın sağlığı | Makale teklifi / röportaj |
| Cosmopolitan TR | Sağlık | Kısa haber + infografik |
| InStyle TR | Wellness | Farkındalık yazısı |
| Kadınca.com | Sağlık | Online haber + backlink |
| Uplifers | Wellness | İçerik işbirliği |

**Tier 4 -- Podcast / YouTube (P2):**

| Platform | Kanal | Teklif |
|----------|-------|--------|
| Podcast | Kadın sağlığı podcast'leri | Konuk konuşmacı |
| Podcast | Girişimcilik podcast'leri | Kurucu hikayesi |
| YouTube | Sağlık kanalları | Bilgi paylaşım videosu |

### 6.3 Röportaj Hazırlık -- Anahtar Mesajlar

**Her röportajda verilecek 3 ana mesaj:**

1. **Problem:** "Türkiye'de 2.5-4.5 milyon kadın lipödemden etkileniyor olabilir, ama doktorların sadece %51'i bu hastalığı biliyor. Kadınlar yıllarca 'kilo ver' denilerek yanlış yönlendiriliyor."

2. **Çözüm:** "Lipödem Türkiye, bu boşluğu bilimsel bilgi ve ücretsiz araçlarla kapatıyor. 2 dakikalık semptom testimiz, kadınların yaşadıklarına isim vermesine ve doğru doktoru bulmasına yardımcı oluyor."

3. **Vizyon:** "Hedefimiz, Türkiye'de lipödem tanı süresini 10 yıldan 2 yılın altına indirmek. Bu bir sağlık okuryazarlığı projesi."

**Hazır istatistikler (röportajda kullanmak için):**
- Kadınların %6-11'ini etkiler (~370-400M dünyada)
- Türkiye'de tahminen 2.5-4.5 milyon kadın
- Doktorların %51'i biliyor (2025, n=508)
- Ortalama tanı gecikmesi 10+ yıl
- Depresyon prevalansı %31-59
- Cerrahi maliyet 25.000-485.000 TL, SGK karşılamıyor

**Kaçınılacak konular:**
- Kesin tedavi vaatleri ("şunu yaparsanız geçer" demeyin)
- Kilo verme/zayıflama dili
- Doktorları suçlama ("bilmiyorlar" yerine "farkındalık düşük" deyin)
- Rakip klinik/platform eleştirisi

### 6.4 Basın Kiti İçeriği

**lipodemturkiye.com/basin-kiti (indirilebilir ZIP):**

| Dosya | Format | İçerik |
|-------|--------|--------|
| basin-bulteni.pdf | PDF | Tam basın bülteni |
| kurucu-ozgecmis.pdf | PDF | Kurucu biyografisi + profesyonel fotoğraf |
| logo-paket.zip | SVG + PNG | Logo varyasyonları (açık/koyu/tek renk) |
| ekran-goruntuleri.zip | PNG | 5 platform screenshot (1920x1080) |
| infografik-lipodem.png | PNG | "Türkiye'de Lipödem: Rakamlarla" infografiği |
| demo-video.mp4 | MP4 | 60 sn platform demo |
| istatistikler.pdf | PDF | Anahtar istatistikler + kaynaklar |
| SSS-basin.pdf | PDF | Basın için sık sorulan sorular |

---

## 7. Kurucu Üyelik Kampanyası

### 7.1 Kampanya Yapısı

**Teklif:** İlk 100 kurucu üyeye, premium aboneliklerde ömür boyu %40 indirimli sabit fiyat.

| Plan | Normal Fiyat | Kurucu Fiyat | Aylık Tasarruf | Yıllık Tasarruf |
|------|-------------|-------------|----------------|-----------------|
| Temel Premium (aylık) | 79 TL/ay | 47 TL/ay | 32 TL | 384 TL |
| Temel Premium (yıllık) | 699 TL/yıl (58 TL/ay) | 419 TL/yıl (35 TL/ay) | 23 TL | 280 TL |
| Tam Premium (aylık) | 149 TL/ay | 89 TL/ay | 60 TL | 720 TL |
| Tam Premium (yıllık) | 1.299 TL/yıl (108 TL/ay) | 779 TL/yıl (65 TL/ay) | 43 TL | 520 TL |

**Kurucu üye ek ayrıcalıkları:**
- "Kurucu Üye" rozeti (toplulukta kalıcı, altın rengi)
- Tüm gelecek özellikler kurucu fiyatla dahil (fiyat artışlarından koruma)
- Kurucu üyeler özel alt grubu (toplulukta)
- İlk uzman Q&A oturumuna VIP erişim
- Platform geliştirme kararlarında oy hakkı (yıllık anket)
- Kurucu üye teşekkür sayfasında isim (izinle)

### 7.2 FOMO ve Kıtlık Mekaniği

**Gerçek kıtlık (sahte değil):**
- 100 kontenjan gerçektir -- sistem 100'de otomatik kapatır
- Sayaç gerçek zamanlı güncellenir (kalan kontenjan gösterimi)
- Kampanya bitiminde kurucu fiyat asla tekrarlanmaz

**Görsel elementler:**

```
┌─────────────────────────────────────────────┐
│  KURUCU ÜYELİK -- SADECE İLK 100 KİŞİ      │
│                                              │
│  ██████████████████░░░░░░  72/100 KALDI      │
│                                              │
│  Temel Premium: 79 TL → 47 TL/ay            │
│  Tam Premium: 149 TL → 89 TL/ay             │
│  Ömür boyu sabit fiyat garantisi             │
│                                              │
│  [KURUCU ÜYE OL]                             │
│                                              │
│  ⏰ Bu fiyat bir daha tekrarlanmayacak        │
└─────────────────────────────────────────────┘
```

**Psikolojik tetikleyiciler (marketing-psychology-output.md referans):**
- Kayıptan kaçınma: "Bu fiyat bir daha tekrarlanmayacak"
- Sosyal kanıt: "28 kişi bugün kurucu üye oldu"
- Kıtlık: "72/100 kaldı" (gerçek zamanlı)
- Endowment etkisi: "Kurucu üye statünüz size özel -- kalıcı"
- Karşılıklılık: Ücretsiz araçlar → premium dönüşüm

### 7.3 Kurucu Üyelik Dönüşüm Akışı

```
Ziyaretçi → Ücretsiz araç kullanır (semptom testi) → Sonuç sayfasında 
kurucu üyelik banner → Premium faydaları + kurucu indirimi → 
Ödeme sayfası (iyzico) → Onay + hoşgeldin email → Kurucu rozeti aktif
```

**Temas noktaları (kurucu üyelik CTA'larının gösterildiği yerler):**

| Yer | Tetikleyici | Gösterim |
|-----|-------------|----------|
| Ana sayfa | Sayfa yükleme | Kurucu üyelik banner (hero altı) |
| Semptom testi sonuç sayfası | Test tamamlama | İnline CTA: "Kişiselleştirilmiş plan için kurucu üye olun" |
| Pricing sayfası | Sayfa ziyareti | Kurucu fiyat karşılaştırma tablosu |
| Blog makaleleri | Scroll %50 | Sticky banner |
| Çıkış intent popup | Sayfa terk | "100 kurucu üyeden X kişi kaldı" |
| Hoşgeldin email dizisi (Email 1.5) | Gün 14 | Kurucu üyelik soft sell |
| Lansman duyuru emaili | D-Day | Prominent CTA |

### 7.4 Kurucu Üyelik Zaman Çizelgesi

| Dönem | Hedef Satış | Taktik |
|-------|-------------|--------|
| D-Day (lansman günü) | 10-15 | Lansman email + kongre stant + sosyal medya |
| D+1 → D+7 | 15-20 | Product Hunt + sosyal medya storm + email hatırlatma |
| D+8 → D+14 | 10-15 | "Yarısı doldu" email + FOMO artışı |
| D+15 → D+21 | 5-10 | "Son 20 kontenjan" push |
| D+22 → D+30 | 10-15 | "Son 10/5 kişi" aciliyet + final push |
| **TOPLAM** | **50-75** | (Stretch: 100/100) |

**Milestone email'leri:**

| Milestone | Email Konu Satırı | Gönderim |
|-----------|-------------------|----------|
| %25 doldu (25/100) | "25 kadın kurucu üye oldu -- siz de katılın" | Otomatik |
| %50 doldu (50/100) | "Kurucu üyelik yarısı doldu -- 50 kontenjan kaldı" | Otomatik |
| %75 doldu (75/100) | "Son 25 kurucu üyelik -- kaçırmayın" | Otomatik |
| %90 doldu (90/100) | "Son 10 kurucu üyelik -- bu fiyat bir daha yok" | Otomatik |
| %100 doldu | "Kurucu üyelik tükendi -- tebrikler kurucu üyelerimiz!" | Otomatik |

### 7.5 Kurucu Üyelik Ödeme Sonrası Deneyim

**Onay sayfası:**
```
Tebrikler [Ad]! Kurucu Üye #[Sıra] oldunuz!

Kurucu üye olarak şunlara sahipsiniz:
✓ Ömür boyu %40 indirimli sabit fiyat
✓ Kurucu Üye rozeti (toplulukta)
✓ Tüm gelecek özellikler dahil
✓ Özel kurucu alt grubu erişimi

[Platformu Keşfetmeye Başla]

Bu anınızı paylaşın:
[Twitter] [Instagram] [WhatsApp]
"Lipödem Türkiye'nin Kurucu Üyesi #[Sıra] oldum! 
Türkiye'nin ilk lipödem platformu artık yayında."
```

**Kurucu üye hoşgeldin emaili (özel versiyon):**
- Normal premium hoşgeldin emailinden farklı, daha sıcak, daha kişisel
- Kurucu sıra numarası belirtilir
- Kurucu üye ayrıcalıkları listelenir
- Paylaşım CTA'sı eklenir

---

## 8. Post-Launch İlk 30 Gün

### 8.1 Hafta 1 (D+1 → D+7): Momentum Koruma

| Gün | Ana Görev | Destekleyici Görevler |
|-----|-----------|----------------------|
| D+1 | Blog: "Kongre Notları" yayını | Kongre lead takibi, sosyal medya devam |
| D+2 | Product Hunt lansmanı | PH tam gün etkileşim, email duyurusu |
| D+3 | İlk haftalık bülten | Dizin kayıtları (Tier 1-2), Google Ads aktif |
| D+4 | Meta Ads kampanyaları aktif | Retargeting pixel kontrolü, bug fix sprint |
| D+5 | İlk hafta metrik raporu | Strateji gözden geçirme toplantısı |
| D+6 | İkinci blog içeriği | Influencer paylaşım takibi |
| D+7 | Hafta özet blog/sosyal medya | Topluluk moderasyon gözden geçirme |

**Hafta 1 kontrol listesi:**
- [ ] Tüm otomatik email dizileri doğru çalışıyor
- [ ] Ödeme akışında hata yok
- [ ] Semptom testi sonuç PDF'leri doğru oluşuyor
- [ ] Klinik bulucu verileri güncel
- [ ] Mobil deneyimde kritik bug yok
- [ ] GA4 event'leri doğru tetikleniyor
- [ ] Sosyal medya günlük paylaşım devam ediyor
- [ ] Topluluk moderasyonu aktif
- [ ] Kurucu üyelik sayacı doğru çalışıyor

### 8.2 Hafta 2 (D+8 → D+14): Feedback Döngüsü

**Kullanıcı feedback toplama:**

| Kanal | Yöntem | Hedef |
|-------|--------|-------|
| Site içi | Hotjar feedback widget (emoji + metin) | Sürekli |
| Email | NPS anketi (Gün 7'de tetiklenen) | Tüm kayıtlar |
| Topluluk | "İlk izlenimler" sabitlenmiş paylaşım | Premium üyeler |
| Doğrudan | 5-10 kullanıcı ile 15 dk görüntülü görüşme | Aktif kullanıcılar |
| Analytics | GA4 funnel analizi -- tıkanma noktaları | Otomatik |

**Feedback önceliklendirme matrisi:**

| Kategori | Aksiyon Süresi | Örnek |
|----------|---------------|-------|
| Kritik bug (kullanılamaz) | 24 saat | Ödeme hatası, test sonucu gösterilmiyor |
| UX sorunu (kullanılabilir ama zor) | 3-5 gün | Mobilde buton tıklanamıyor, yavaş yükleme |
| Özellik talebi (sık tekrarlanan) | Sprint planı | "Ağrı günlüğü olsa iyi olurdu" |
| Nice-to-have | Backlog | Renk tercihi, font boyutu |

**Hafta 2 içerik planı:**
- Blog: Kullanıcı hikayesi / testimonial (izinle)
- Blog: SEO odaklı eğitim makalesi
- Sosyal medya: Günlük paylaşım devam (azaltılmış yoğunluk)
- Email: Hoşgeldin dizisi otomatik devam

### 8.3 Hafta 3 (D+15 → D+21): Optimizasyon

**İlk A/B testleri:**

| Test | Varyant A | Varyant B | Hedef Metrik |
|------|-----------|-----------|-------------|
| Ana sayfa CTA | "Semptom Testini Başlat" | "2 Dakikada Kendinizi Değerlendirin" | CTA tıklama oranı |
| Popup zamanlaması | 30 sn sonra | Exit intent | Email kayıt oranı |
| Pricing sayfası | Normal fiyat gösterimi | "Günde 2,63 TL" framing | Premium dönüşüm |
| Semptom testi sonuç CTA | "Premium'u Deneyin" | "Kişisel Planınızı Oluşturun" | Premium deneme başlatma |

**İçerik üretim hızlandırma:**
- Haftada 2 blog makalesi hedefi
- SEO odaklı uzun kuyruk anahtar kelimeler
- Hasta hikayeleri serisi başlatma
- Video içerik üretimi (ilk egzersiz videoları)

**Ortaklık takibi:**
- Kongre görüşmelerinden klinik ortaklık anlaşması kapatma (hedef: 3-5 klinik)
- Diyetisyen/fizyoterapist ağı ilk üyeleri
- Kompresyon marka pilot görüşme

### 8.4 Hafta 4 (D+22 → D+30): Büyüme Hızlandırma

**30 günlük performans değerlendirmesi:**

| Metrik | Hedef | Gerçekleşen | Durum | Aksiyon |
|--------|-------|-------------|-------|---------|
| Tekil ziyaretçi | 5.000 | [Gerçek] | [Yeşil/Sarı/Kırmızı] | [Aksiyon] |
| Email kayıt | 1.000 | [Gerçek] | | |
| Semptom testi | 500 | [Gerçek] | | |
| Premium deneme | 100 | [Gerçek] | | |
| Premium abone | 50 | [Gerçek] | | |
| Kurucu üyelik | 50/100 | [Gerçek] | | |

**30 günlük retrospektif soruları:**
1. En iyi performans gösteren edinim kanalı hangisi?
2. Semptom testi tamamlama oranı nedir? Tıkanma noktası var mı?
3. Ücretsiz → Premium dönüşüm oranı nedir?
4. En çok okunan/ziyaret edilen içerik hangisi?
5. Kullanıcılardan en sık gelen feedback/talep ne?
6. Hangi sosyal medya platformu en çok trafik getirdi?
7. Google Ads / Meta Ads CPA hedeflere uyuyor mu?
8. Kurucu üyelik kontenjanı nerede? Hız yeterli mi?
9. Klinik ortaklık pipeline durumu ne?
10. Teknik altyapı (uptime, hız, hata) nasıl performans gösterdi?

**Ay 2 planı belirleme:**
- Başarılı taktikleri ölçeklendirme
- Başarısız taktikleri durdurma/pivot
- İçerik takvimini 3 aylık olarak planlama
- Reklam bütçesini performansa göre yeniden dağıtma
- İkinci ortaklık dalgası başlatma

### 8.5 Otomatik Süreçler (30 Gün Boyunca Çalışan)

| Süreç | Tetikleyici | Aksiyon |
|-------|-------------|---------|
| Hoşgeldin email dizisi (5 email) | Yeni email kaydı | 14 gün boyunca otomatik |
| Semptom testi sonuç dizisi (3 email) | Test tamamlama | 7 gün boyunca otomatik |
| Premium deneme dizisi (5 email) | Deneme başlatma | 14 gün boyunca otomatik |
| Haftalık bülten | Her Salı | Otomatik gönderim |
| Kurucu üyelik milestone emaili | Kontenjan eşikleri | Otomatik tetikleme |
| NPS anketi | Kayıttan 7 gün sonra | Otomatik email |
| Yeniden etkileşim | 14 gün inaktivite | Otomatik email |
| Site monitoring | 1 dk aralıklarla | UptimeRobot alert |
| Günlük metrik raporu | Her gün 08:00 | GA4 otomatik email raporu |

---

## 9. Kriz Senaryoları ve B Planları

### 9.1 Senaryo 1: Site Çökmesi / Performans Sorunları

| Durum | Tetikleyici | B Planı |
|-------|-------------|---------|
| Site tamamen erişilemez | Vercel outage veya DNS sorunu | 1. Vercel status page kontrol 2. DNS alternatif (Cloudflare) 3. Sosyal medyadan duyuru: "Teknik bakımdayız, kısa süre içinde döneceğiz" |
| Aşırı yavaşlama (>5sn) | Trafik spike | 1. Vercel Edge fonksiyonları ile caching artır 2. Statik sayfaları CDN'den sun 3. Gerekirse semptom testini basitleştir |
| Ödeme sistemi hatası | iyzico kesintisi | 1. Ödeme sayfasına "geçici sorun" mesajı 2. Alternatif: Stripe backup (pre-configured) 3. Email ile manuel kayıt alımı |
| Database hatası | Supabase/DB kesintisi | 1. Statik içerikler çalışmaya devam eder 2. Araçları geçici olarak devre dışı bırak 3. "Yakında geri döneceğiz" mesajı |

**Teknik hazırlık:**
- UptimeRobot: 1 dakika aralıklarla ping, SMS + email alert
- Vercel: Preview deployment her zaman hazır (hızlı rollback)
- Status sayfası: lipodemturkiye.com/durum (basit statik sayfa)
- İletişim zinciri: Geliştirici → Kurucu → Pazarlama (10 dakika içinde)

**İletişim şablonu (site çökmesi):**

```
Instagram/Twitter:
"Teknik bir sorun nedeniyle sitemize erişimde geçici bir kesinti 
yaşanıyor. Ekibimiz çözüm üzerinde çalışıyor. Kısa süre içinde 
tekrar yayında olacağız. Anlayışınız için teşekkür ederiz."
```

### 9.2 Senaryo 2: Düşük Trafik / İlgi

| Durum | Tanım | B Planı |
|-------|-------|---------|
| Lansman günü <200 ziyaretçi | Beklentinin çok altında trafik | 1. Acil paid boost: Google Ads + Meta Ads bütçesini 2x artır 2. Influencer DM seferi: 20+ kişiye platform erişimi sun 3. Facebook lipödem gruplarına (izinle) duyuru yoğunlaştır |
| İlk hafta <1.000 ziyaretçi | Organik çekiş yok | 1. SEO content sprint: haftalık 5 makale 2. Reddit/Quora/Ekşi Sözlük içerik dağıtımı 3. Doktor/klinik referansı aktive et |
| Email kayıt <200 (ilk hafta) | Lead magnet çekici değil | 1. Lead magnet değiştir (farklı açı dene) 2. Popup stratejisi revize (daha agresif timing) 3. Sosyal medyadan doğrudan "email'e kaydol" kampanyası |
| Kurucu üyelik 0 (ilk 3 gün) | Fiyat/değer algısı sorunu | 1. İlk 10 kişiye ekstra %20 indirim (toplam %60) 2. "7 gün ücretsiz premium" vurgusunu artır 3. Kurucu üyelik değerini vurgulayan video testimonial |

### 9.3 Senaryo 3: Negatif Geri Bildirim / Basın

| Durum | Olası Kaynak | B Planı |
|-------|-------------|---------|
| "Bu para tuzağı" algısı | Sosyal medya yorumları | 1. Sakin, şeffaf yanıt: ücretsiz özellikleri vurgula 2. "Premium opsiyonel, temel araçlar her zaman ücretsiz" mesajı 3. Ücretsiz araçların değerini gösteren içerik |
| "Tıbbi tavsiye veriyor" eleştirisi | Doktor/uzman çevresi | 1. Her sayfadaki disclaimer'ı vurgula 2. "Bilgi platformuyuz, tanı koymuyoruz" resmi açıklama 3. Danışma kurulu oluşturma hızlandır |
| "Veri güvenliği endişesi" | KVKK hassasiyeti | 1. KVKK uyum belgelerini yayınla 2. "Verileriniz güvendedir" blog yazısı 3. Bağımsız güvenlik denetimi planla |
| Rakip klinik tepkisi | Klinik siteleri | 1. "Tarafsız platformuz, herhangi bir kliniğin reklamını yapmıyoruz" açıklaması 2. Klinik ortaklık programını tanıt 3. Karşılıklı fayda vurgula |
| Yanlış tıbbi bilgi iddiası | Uzman eleştirisi | 1. Kaynak göster (Delphi, S2k, peer-reviewed) 2. İçeriği bağımsız uzmana gözden geçirt 3. Hata varsa hemen düzelt + şeffaf güncelleme notu |

**Kriz iletişim prensipleri:**
1. 1 saat içinde ilk yanıt (sosyal medya)
2. Savunmacı olmak yerine şeffaf ve yapıcı ol
3. Eleştiriyi kişisel alma, kurumsal yanıt ver
4. Haklı eleştirileri kabul et ve düzeltme planını paylaş
5. Tüm kriz iletişimini tek kişi yönetsin (tutarlılık)

### 9.4 Senaryo 4: Kongre İptali / Değişikliği

| Durum | B Planı |
|-------|---------|
| Kongre tamamen iptal olursa | 1. Dijital lansmana odaklan 2. Sanal kongre/webinar düzenle (kendi etkinliğimiz) 3. Bütçeyi dijitale kaydır |
| Kongre ertelenirse | 1. Pre-launch süresini uzat, daha fazla email topla 2. Stant bütçesini reklama kaydır 3. "Biz hazırız, kongrede de buluşacağız" mesajı |
| Stant alanı alamazsak | 1. Kongre katılımcısı olarak networking yap 2. Kongre yakınında bağımsız etkinlik düzenle 3. Dijital lansman planını öne çek |
| Kongrede internet yoksa | 1. Offline demo hazırla (ekran kaydı videoları) 2. Semptom testinin offline versiyonu (basılı kontrol listesi) 3. QR kod → mobil veri ile erişim |

### 9.5 Senaryo 5: Teknik Altyapı Sorunları

| Durum | B Planı |
|-------|---------|
| iyzico entegrasyonu çalışmıyorsa | Stripe alternatif ödeme sistemi (pre-configured) |
| Email gönderim engeli (spam filtre) | 1. Gönderim hacmini azalt 2. Alternatif ESP (Loops) aktive et 3. Manuel WhatsApp/SMS ile iletişim |
| GA4 veri kaybı | 1. Vercel Analytics yedek veri 2. UTM parametreleri ile manuel takip 3. Hotjar session replay |
| Semptom testi algoritma hatası | 1. Basitleştirilmiş yedek versiyon (statik sonuç) 2. "Sonuçlarınız hazırlanıyor" mesajı ile zaman kazan 3. Hotfix deploy |

---

## 10. Launch Metrics Dashboard

### 10.1 Gerçek Zamanlı İzleme Panosu

**Dashboard aracı:** GA4 Explorations + Looker Studio (ücretsiz)

**Dashboard layoutu:**

```
┌─────────────────────────────────────────────────────────────────────┐
│  LİPÖDEM TÜRKİYE -- LANSMAN DASHBOARD        Son güncelleme: [saat]│
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ ZİYARETÇİ│  │ EMAİL    │  │ SEMPTOM  │  │ PREMİUM  │           │
│  │   [sayı]  │  │  [sayı]  │  │  [sayı]  │  │  [sayı]  │           │
│  │ Hedef:5K │  │ Hedef:1K │  │ Hedef:500│  │ Hedef:50 │           │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘           │
│                                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ KURUCU   │  │ KLİNİK   │  │ BOUNCE   │  │ ORT.SÜRE │           │
│  │ ÜYELİK   │  │ TIKLAMA  │  │ RATE     │  │          │           │
│  │ [X]/100  │  │  [sayı]  │  │  [%]     │  │ [dk:sn]  │           │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘           │
│                                                                     │
│  TRAFİK KAYNAKLARI (pasta grafik)                                  │
│  ┌────────────────────────────┐                                    │
│  │ Organik: %XX               │                                    │
│  │ Sosyal: %XX                │                                    │
│  │ Email: %XX                 │                                    │
│  │ Paid: %XX                  │                                    │
│  │ Referral: %XX              │                                    │
│  │ Direct: %XX                │                                    │
│  └────────────────────────────┘                                    │
│                                                                     │
│  SAATLIK TRAFİK (çizgi grafik, son 24 saat)                       │
│  ┌────────────────────────────────────────────────┐                │
│  │ ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  │                │
│  └────────────────────────────────────────────────┘                │
│                                                                     │
│  DÖNÜŞÜM FUNNELİ                                                  │
│  Ziyaretçi → Email Kayıt → Semptom Testi → Premium Deneme → Ödeme │
│  [sayı]    → [sayı] (%X) → [sayı] (%X)  → [sayı] (%X)  → [sayı]  │
│                                                                     │
│  EN POPÜLER SAYFALAR (son 24 saat)                                 │
│  1. /semptom-testi -- [ziyaret]                                    │
│  2. /lipodem-nedir -- [ziyaret]                                    │
│  3. / (ana sayfa) -- [ziyaret]                                     │
│  4. /klinik-bulucu -- [ziyaret]                                    │
│  5. /premium -- [ziyaret]                                          │
└─────────────────────────────────────────────────────────────────────┘
```

### 10.2 Günlük Rapor Şablonu

**Her gün 20:00'de ekibe gönderilen rapor:**

```
=== LİPÖDEM TÜRKİYE -- GÜNLÜK RAPOR ===
Tarih: [Tarih] | Lansman günü: D+[X]

BUGÜNKÜ SAYILAR:
- Tekil ziyaretçi: [sayı] (kümülatif: [sayı]/5.000)
- Email kayıt: [sayı] (kümülatif: [sayı]/1.000)
- Semptom testi: [sayı] (kümülatif: [sayı]/500)
- Premium deneme: [sayı] (kümülatif: [sayı]/100)
- Premium ödeme: [sayı] (kümülatif: [sayı]/50)
- Kurucu üyelik: [sayı] (kümülatif: [sayı]/100)
- Klinik tıklama: [sayı] (kümülatif: [sayı]/100)

DÖNÜŞÜM ORANLARI:
- Ziyaretçi → Email: %[X]
- Ziyaretçi → Semptom testi: %[X]
- Email → Premium deneme: %[X]
- Deneme → Ödeme: %[X]

TRAFİK KAYNAKLARI (bugün):
- Organik: [sayı] (%[X])
- Sosyal: [sayı] (%[X]) -- [en çok getiren platform]
- Email: [sayı] (%[X])
- Paid: [sayı] (%[X]) -- CPA: [TL]
- Referral: [sayı] (%[X])
- Direct: [sayı] (%[X])

REKLAM PERFORMANSI:
- Google Ads: [harcama] TL, [tıklama] tıklama, [dönüşüm] dönüşüm, CPA: [TL]
- Meta Ads: [harcama] TL, [gösterim] gösterim, [tıklama] tıklama, CPA: [TL]

SOSYAL MEDYA:
- Instagram: [yeni takipçi], [engagement rate]%
- TikTok: [yeni takipçi], [görüntülenme]
- Twitter/X: [yeni takipçi], [impression]

TEKNİK:
- Uptime: %[X]
- Ortalama yanıt süresi: [ms]
- Hata sayısı: [sayı]

NOT:
[Önemli gözlemler, bugün yapılan değişiklikler, yarın için planlar]
```

### 10.3 Haftalık Derinlemesine Rapor

**Her Cuma 17:00'de hazırlanan detaylı rapor:**

| Bölüm | İçerik |
|-------|--------|
| Özet | Haftanın öne çıkan sayıları, hedefe kıyasla ilerleme |
| Trafik analizi | Kaynak bazlı trafik, yeni vs geri dönen, cihaz dağılımı |
| Dönüşüm funnel | Her adımdaki drop-off oranları, iyileştirme önerileri |
| İçerik performansı | En çok okunan 10 sayfa, ortalama süre, bounce rate |
| Reklam ROI | Kanal bazlı maliyet/dönüşüm, bütçe optimizasyon önerisi |
| Sosyal medya | Platform bazlı büyüme, en iyi performans gösteren paylaşımlar |
| Kullanıcı feedback | Toplanan geri bildirimler, kategorize edilmiş |
| Teknik sağlık | Uptime, hız, hata raporları |
| Sonraki hafta planı | Öncelikli görevler, A/B testleri, içerik takvimi |

### 10.4 GA4 Custom Event'ler (Lansman Takibi)

| Event | Tetikleyici | Parametre |
|-------|-------------|-----------|
| `launch_page_view` | Lansman özel sayfaları | `page_title`, `traffic_source` |
| `waitlist_signup` | Waitlist formu gönderim | `source`, `medium` |
| `launch_email_open` | Lansman emaili açılma | `email_variant` |
| `launch_email_click` | Lansman emaili tıklama | `link_url`, `cta_type` |
| `founder_membership_view` | Kurucu üyelik sayfası görüntüleme | `remaining_spots` |
| `founder_membership_start` | Kurucu üyelik ödeme başlatma | `plan_type` |
| `founder_membership_complete` | Kurucu üyelik ödeme tamamlama | `plan_type`, `member_number` |
| `congress_lead_signup` | Kongre lead formu | `lead_type` (doktor/hasta/medya) |
| `product_hunt_referral` | Product Hunt'tan gelen trafik | `ph_rank` |

### 10.5 Alert Sistemi

| Alert | Koşul | Kanal | Aksiyon |
|-------|-------|-------|---------|
| Site down | 3 dakika yanıt yok | SMS + Email | Geliştirici hemen müdahale |
| Trafik spike | >500 eş zamanlı | Email | Performans izle, cache kontrol |
| Ödeme hatası | 3+ art arda hata | Email | iyzico kontrol, alternatif aktive |
| Conversion drop | Email kayıt oranı <%1 | Günlük rapor | CTA/form kontrol |
| Negatif mention | Sosyal medya/basın | Google Alert | Kriz iletişim protokolü |
| Kurucu üyelik %90 | 90/100 dolduğunda | Email | "Son 10" kampanya tetikle |
| Budget burn | Reklam bütçesi %80 harcandığında | Email | Bütçe yeniden değerlendirme |

---

## EK A: Lansman Checklist (Tek Sayfa Özet)

### Pre-Launch (T-30 → T-1)

- [ ] Site production deploy + QA tamamlandı
- [ ] GA4 + GTM + Vercel Analytics kuruldu ve doğrulandı
- [ ] Email domain ısınması tamamlandı (SPF/DKIM/DMARC)
- [ ] Ödeme sistemi (iyzico) canlı ortamda test edildi
- [ ] Waitlist sayfası canlı + email toplama aktif
- [ ] Sosyal medya hesapları açıldı ve teaser kampanyası başladı
- [ ] Kongre stant başvurusu onaylandı
- [ ] Basılı materyaller hazırlandı (broşür, kartvizit, roll-up)
- [ ] Lansman videosu hazır (60sn + 15sn versiyonlar)
- [ ] Product Hunt listing hazırlandı
- [ ] Basın bülteni yazıldı ve medya listesi hazır
- [ ] 5+ influencer/KOL'e erişim sağlandı
- [ ] Beta kullanıcı testi tamamlandı + kritik buglar düzeltildi
- [ ] Lansman email'i yazıldı ve ESP'ye yüklendi
- [ ] Kriz iletişim planı ve şablonları hazır
- [ ] Monitoring alert'ler kuruldu (UptimeRobot)
- [ ] Yedek planlar gözden geçirildi (internet, ödeme, site)

### Launch Day (D-Day)

- [ ] Waitlist → ana sayfa geçişi yapıldı
- [ ] Lansman email'i gönderildi (09:00 TSİ)
- [ ] Sosyal medya lansman postları yayınlandı
- [ ] Kongre stant açıldı
- [ ] GA4 realtime dashboard izleniyor
- [ ] Basın bülteni dağıtıldı
- [ ] Tüm email otomasyonları doğru tetikleniyor
- [ ] Ekip etkileşime hazır (yorum yanıtları, DM'ler)
- [ ] Gün sonu raporu hazırlandı

### Post-Launch (D+1 → D+30)

- [ ] Product Hunt lansmanı yapıldı
- [ ] Kongre lead'lerine takip emaili gönderildi
- [ ] Dizin kayıtları başladı
- [ ] Google Ads + Meta Ads kampanyaları aktif
- [ ] Haftalık bülten gönderimi başladı
- [ ] Kullanıcı feedback toplama mekanizması aktif
- [ ] İlk A/B testleri planlandı
- [ ] 30 günlük performans raporu hazırlandı
- [ ] Ay 2 planı belirlendi
- [ ] Kurucu üyelik kontenjan durumu değerlendirildi

---

## EK B: Kritik Tarihler Özeti

| Tarih | Gün | Olay |
|-------|-----|------|
| 7 Mayıs 2026 | T-30 | Pre-launch başlangıcı |
| 14 Mayıs 2026 | T-23 | Waitlist sayfası canlı |
| 16 Mayıs 2026 | T-21 | Sosyal medya teaser kampanyası başlangıcı |
| 23 Mayıs 2026 | T-14 | Beta kullanıcı daveti |
| 28 Mayıs 2026 | T-9 | Final QA sprint başlangıcı |
| 30 Mayıs 2026 | T-7 | Product Hunt listing hazırlık |
| 3 Haziran 2026 | T-3 | Basın bülteni embargo'lu gönderim |
| 5 Haziran 2026 | T-1 | Ankara'ya ulaşım + stant kurulumu |
| **6 Haziran 2026** | **D-Day** | **LANSMAN GÜNÜ -- Kongre 1. gün** |
| 7 Haziran 2026 | D+1 | Kongre 2. gün |
| 8 Haziran 2026 | D+2 | Kongre lead takibi + blog yayını |
| **9 Haziran 2026** | **D+3** | **Product Hunt lansmanı** |
| 10 Haziran 2026 | D+4 | İlk haftalık bülten + Google Ads aktif |
| 13 Haziran 2026 | D+7 | İlk hafta metrik raporu |
| 20 Haziran 2026 | D+14 | Feedback raporu + ilk A/B testleri |
| 6 Temmuz 2026 | D+30 | 30 günlük performans değerlendirmesi |

---

## EK C: Ekip Rol Dağılımı (Lansman Haftası)

| Rol | Sorumluluklar | Öncelik |
|-----|---------------|---------|
| **Kurucu** | Kongre networking, doktor görüşmeleri, sunum, basın röportajları, stratejik kararlar | Kongre odaklı |
| **Geliştirici** | Site monitoring, bug fix, deploy, teknik sorun çözme, analytics doğrulama | Teknik odaklı |
| **Pazarlama** | Sosyal medya paylaşımları, Product Hunt etkileşim, email gönderimi, influencer iletişim | Dijital odaklı |
| **Stant ekibi** | Ziyaretçi karşılama, demo, email toplama, broşür dağıtımı | Kongre odaklı |
| **Destek** | Kullanıcı soruları yanıtlama, email/DM takibi, topluluk moderasyon | Kullanıcı odaklı |

**Acil iletişim zinciri:**
1. Teknik sorun → Geliştirici (telefon) → Kurucu (bilgilendirme)
2. PR / medya → Kurucu (doğrudan) → Pazarlama (destek)
3. Kullanıcı şikayeti → Destek (ilk yanıt) → Kurucu (eskalasyon)
4. Sosyal medya krizi → Pazarlama (ilk değerlendirme) → Kurucu (onay)
