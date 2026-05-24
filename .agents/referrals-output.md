# Lipödem Türkiye -- Kapsamlı Referral (Yönlendirme) Programı

**Tarih:** 24 Mayıs 2026
**Referanslar:** product-marketing.md, pricing-output.md, co-marketing-output.md
**Kapsam:** 10 bölüm -- program yapısı, ödül mekanizması, paylaşım mekanikleri, viral loop, dashboard UI, hasta savunuculuğu, doktor yönlendirme, klinik referral tracking, tetikleyiciler, analytics/KPI
**Platform:** lipodemturkiye.com -- Türkiye'nin ilk kapsamlı lipödem hasta platformu

---

## ICINDEKILER

1. [Referral Program Yapısı](#1-referral-program-yapısı)
2. [Ödül Mekanizması](#2-ödül-mekanizması)
3. [Paylaşım Mekanikleri](#3-paylaşım-mekanikleri)
4. [Viral Loop Tasarımı](#4-viral-loop-tasarımı)
5. [Referral Dashboard UI](#5-referral-dashboard-ui)
6. [Hasta Savunuculuğu Programı](#6-hasta-savunuculuğu-programı)
7. [Doktor Yönlendirme Programı](#7-doktor-yönlendirme-programı)
8. [Klinik Referral Tracking](#8-klinik-referral-tracking)
9. [Email ve In-App Tetikleyiciler](#9-email-ve-in-app-tetikleyiciler)
10. [Analytics ve KPI'lar](#10-analytics-ve-kpilar)

---

## 1. Referral Program Yapısı

### 1.1 Neden Referral? -- Lipödem Bağlamında Viral Potansiyel

Lipödem, referral programı için ideal koşulları barındıran ender hastalık kategorilerinden biridir:

| Viral Faktör | Lipödem Bağlamı | Etki |
|-------------|-----------------|------|
| **Duygusal motivasyon** | "Bu bilgiyi başka kadınlara ulaştırmalıyım" -- hasta dayanışması son derece güçlü | Çok yüksek |
| **Tanınmama sorunu** | Doktorların sadece %51'i lipödemi biliyor. Tanı alan kadınlar "bunu herkes bilmeli" hisseder | Çok yüksek |
| **Aha anı paylaşımı** | Semptom testi sonucu: "Yıllardır hissettiğimin bir adı varmış!" -- doğal paylaşım dürtüsü | Çok yüksek |
| **Doğal ağ etkisi** | Lipödem genetik geçişli (%60+). Anne-kız, kız kardeşler arasında yayılım | Yüksek |
| **Kapalı topluluk dinamiği** | Facebook grupları, WhatsApp grupları -- hasta ağları halihazırda aktif | Yüksek |
| **Stigma kırma motivasyonu** | "Bu obezite değil, bir hastalık" mesajını yaymak isteyen hastalar | Yüksek |
| **Bilgi asimetrisi** | Türkçe güvenilir kaynak neredeyse yok -- bulanlar paylaşıyor | Orta-Yüksek |

**Sonuç:** Lipödem platformunda referral, ödül mekanizmasından bile önce misyon odaklı paylaşım motivasyonu ile çalışır. Ödüller bu doğal motivasyonu destekler ve hızlandırır; ama asıl motor "başka kadınlara yardım etme" duygusudur.

### 1.2 Program Felsefesi: "Birini Daha Aydınlat"

Program adı: **"Birini Daha Aydınlat"**

Alt mesaj: *"Lipödem hakkında öğrendiğiniz her şeyi bir kadına daha ulaştırın. Birlikte daha güçlüyüz."*

Bu isim:
- Ticari "davet et, kazan" dilinden kaçınır
- Hasta dayanışmasını ve misyon duygusunu ön plana çıkarır
- Farkındalık eksikliğine gönderme yapar (aydınlatma = bilgilendirme)
- "Bir kadın daha" somutluğu ile eyleme çağrı içerir

### 1.3 Program Katmanları

Platform üç ayrı referral mekanizmasını paralel çalıştırır:

```
KATMAN 1: HASTA → HASTA                KATMAN 2: DOKTOR → HASTA              KATMAN 3: KLİNİK → PLATFORM
━━━━━━━━━━━━━━━━━━━━━━                 ━━━━━━━━━━━━━━━━━━━━━━               ━━━━━━━━━━━━━━━━━━━━━━━━
B2C Referral                            B2B2C Yönlendirme                     B2B Komisyon Takibi
Hasta, tanıdığına paylaşır              Doktor, hastasına önerir              Klinik ortağı lead takibi
Ödül: Ücretsiz ay, özel içerik         Ödül: Profesyonel itibar             Ödül: Ticari komisyon
Kanal: WhatsApp, Instagram              Kanal: Reçete kartı, QR              Kanal: Platform entegrasyon
Hedef: K-factor > 0.3                   Hedef: 20+ doktor ağı               Hedef: CPA tracking %95+
```

### 1.4 Çift Taraflı (Two-Sided) Ödül Yapısı -- Genel Bakış

| Taraf | Ödül | Gerekçe |
|-------|------|---------|
| **Davet eden (Referrer)** | 1 ay ücretsiz Premium uzatma | Mevcut aboneliğe somut değer |
| **Davet edilen (Referred)** | 14 gün yerine 30 gün deneme süresi | Giriş bariyerini düşürür |

**Neden TL bazlı değil, değer bazlı:**
- Sağlık platformunda "para kazan" mesajı güven kırar
- "Arkadaşına yardım et, sen de kazan" daha etik ve misyon uyumlu
- TL bazlı ödüller fraud riskini artırır
- Değer bazlı ödüller (ücretsiz ay, özel içerik) platformla bağı güçlendirir, churn düşürür

### 1.5 Referral Döngüsü (The Loop)

```
              ┌────────────────────────────────────────────────────────┐
              │                                                        │
              ▼                                                        │
     Trigger Anı                                                       │
     (Aha moment, test sonucu,                                         │
      başarı, milestone)                                               │
              │                                                        │
              ▼                                                        │
     Paylaşım Aksiyonu                                                 │
     (WhatsApp butonu,                                                 │
      referral link, QR)                                               │
              │                                                        │
              ▼                                                        │
     Davet Edilen Gelir                                                │
     (30 gün deneme, özel                                              │
      landing page)                                                    │
              │                                                        │
              ▼                                                        │
     Dönüşüm                                                          │
     (Kayıt + deneme başlatma)                                         │
              │                                                        │
              ▼                                                        │
     Ödül Verilir                                                      │
     (Referrer'a 1 ay,                                                 │
      rozet, teşekkür)                                                 │
              │                                                        │
              ▼                                                        │
     Yeni Kullanıcının                                                 │
     Kendi Aha Moment'ı ──────────────────────────────────────────────┘
```

### 1.6 Lansman Fazları

| Faz | Dönem | Odak | Katılımcı |
|-----|-------|------|-----------|
| **Faz 0: Kurucu Referral** | Lansman öncesi (Ay -1) | İlk 200 kurucu üyeye özel referral linki | Kurucu üyeler |
| **Faz 1: Soft Launch** | Ay 0-2 | Temel referral mekanizması, WhatsApp paylaşım | Tüm Premium üyeler |
| **Faz 2: Tam Lansman** | Ay 3-5 | Referral Dashboard, rozet sistemi, doktor programı | Tüm kullanıcılar |
| **Faz 3: Ambassador** | Ay 6+ | Hasta savunuculuğu programı, tiered rewards | Seçilmiş ambassador'lar |

---

## 2. Ödül Mekanizması

### 2.1 Temel Ödül Tablosu -- Hasta Referral

| Koşul | Referrer (Davet Eden) Ödülü | Referred (Davet Edilen) Ödülü |
|-------|-------|-------|
| **Davet edilen ücretsiz kayıt olur** | -- (henüz ödül yok) | Platform erişimi |
| **Davet edilen deneme başlatır** | "Teşekkürler" bildirimi + ilerleme rozeti | 30 gün deneme (normalde 14 gün) |
| **Davet edilen Premium abone olur** | **1 ay ücretsiz Premium uzatma** | Ilk ay %25 indirim (Temel: 59 TL, Tam: 112 TL) |
| **Davet edilen 3. ayını tamamlar** | Premium özel içerik: "Lipödem Yönetim Rehberi" PDF (50+ sayfa) | -- |

**Neden bu yapı:**
- Ödül, dönüşüm gerçekleştiğinde verilir (kayıt değil, ödeme anında) -- fraud önlenir
- 3. ay bonusu, referrer'ın kaliteli kişileri davet etmesini teşvik eder
- Uzatılmış deneme (30 gün) davet edileni "zorunlu 14 gün" baskısından kurtarır

### 2.2 Kademeli (Tiered) Ödül Sistemi

Tekrarlayan referral'ı teşvik etmek için kademeli ödüller:

| Referral Sayısı | Ek Ödül | Rozet |
|----------------|---------|-------|
| **1. referral** | 1 ay ücretsiz | "Aydınlatan" rozeti (bronz) |
| **3. referral** | 2 ay ücretsiz + özel içerik paketi | "Yol Gösteren" rozeti (gümüş) |
| **5. referral** | 3 ay ücretsiz + uzman Q&A'da soru önceliği | "Işık Taşıyan" rozeti (altın) |
| **10. referral** | 6 ay ücretsiz + Ambassador programına davet | "Lipödem Elçisi" rozeti (platinyum) |
| **25+ referral** | Ömür boyu Premium erişim (üyelik aktif kaldığı sürece) | "Kurucu Elçi" rozeti (elmas) |

**Rozet gösterim yerleri:**
- Topluluk forumunda kullanıcı adı yanında
- Profil sayfasında
- Referral Dashboard'da ilerleme çubuğu olarak

### 2.3 Ücretsiz Kullanıcılar İçin Referral

Premium abonesi olmayan, ücretsiz katmandaki kullanıcılar da referral yapabilir:

| Koşul | Ücretsiz Kullanıcı Ödülü |
|-------|--------------------------|
| **1 kişiyi kayıt ettirdi** | 7 gün Premium deneme (ekstra) |
| **3 kişiyi kayıt ettirdi** | 14 gün Premium deneme (tam) |
| **5 kişiyi kayıt ettirdi** | 1 ay ücretsiz Premium erişim |

**Mantık:** Ücretsiz kullanıcılar platformun en büyük kitle tabanıdır. Referral mekanizması onları hem aktifleştirir hem Premium'a çeker.

### 2.4 Kurucu Üyelere Özel Referral Bonusu

Pricing-output.md'deki kurucu üyelik programı ile entegre:

| Kurucu Üye Referral | Ödül |
|---------------------|------|
| Her başarılı referral | 1 ay ücretsiz (standart) + **kurucu üye fiyatı ile abone olma hakkını davet edilene de tanıma** |
| 5+ referral | Ambassador programına otomatik davet |
| 10+ referral | Kurucu Üyeler Sayfasında "en aktif kurucu" olarak öne çıkarılma |

**Neden kurucu fiyatı paylaşma:** Kurucu üyeler (89 TL/ay, normalde 149 TL) bu avantajı yakınlarına da taşıyabilir. Bu, kıtlık ve ayrıcalık hissini güçlendirir ve referral'ı hızlandırır.

### 2.5 Özel İçerik Ödülleri (Referral-Only Content)

Sadece referral ile kazanılabilen, satın alınamayan özel içerikler:

| İçerik | Kazanım Koşulu | Değer |
|--------|----------------|-------|
| "Lipödem Yönetim Rehberi" (50+ sayfa PDF) | 1. Premium referral dönüşümü | Kapsamlı rehber |
| "Anti-İnflamatuar Türk Mutfağı Tarif Kitabı" (30 tarif) | 3. referral | Benzersiz içerik |
| "Uzman Doktorlarla Birebir Q&A" (özel oturum) | 5. referral | Sınırlı erişim |
| "Lipödem ve Psikoloji: Başa Çıkma Stratejileri" (e-kitap) | 10. referral | Derinlemesine rehber |

**Neden satın alınamaz:** "Bu içeriğe sadece başkalarına yardım ederek ulaşabilirsiniz" mesajı, misyon duygusunu ve sosyal kanıtı güçlendirir.

### 2.6 Mevsimsel ve Kampanya Bazlı Ödül Artırımları

| Dönem | Kampanya | Ek Ödül |
|-------|---------|---------|
| **Haziran (Lansman)** | "Kurucu Haftası" | Her referral = 2 ay ücretsiz (1 yerine) |
| **Ekim (Dünya Lipödem Günü)** | "Farkındalık Haftası" | Referral sayısına göre Lenfödem Derneği'ne bağış |
| **Mart (Kadınlar Günü)** | "Kadınlar İçin Kadınlar" | 3 referral = özel kadınlar günü hediye paketi |
| **Yılbaşı** | "Yeni Yıl, Yeni Başlangıç" | Yıllık plana geçişte çifte referral ödülü |

**Farkındalık Haftası bağış mekanizması:**
- Her referral başına platform Lenfödem Derneği'ne 10 TL bağış yapar
- Toplam bağış tutarı canlı olarak gösterilir
- "Birlikte 50.000 TL bağış topladık" sosyal kanıt olarak kullanılır

### 2.7 Ödül Ekonomisi ve Sürdürülebilirlik Analizi

| Metrik | Değer | Hesaplama |
|--------|-------|-----------|
| Ortalama Premium LTV (12 ay) | ~1.320 TL | 110 TL ARPU x 12 ay |
| 1 ay ücretsiz maliyeti (referrer ödülü) | ~110 TL | 1 ay ARPU |
| İlk ay indirim maliyeti (referred ödülü) | ~28-37 TL | %25 indirim |
| Toplam referral maliyeti / dönüşüm | ~138-147 TL | Referrer + referred ödülleri |
| Referral CAC | ~138-147 TL | Ödül maliyeti |
| Google Ads tahmini CAC | ~300-600 TL | Sağlık kategorisi CPC x dönüşüm |
| **Referral CAC tasarrufu** | **%50-75** | Google Ads'e göre |

**Sürdürülebilirlik:** Referral ile gelen kullanıcılar:
- %16-25 daha yüksek LTV (sektör ortalaması)
- %18-37 daha düşük churn (güven transferi etkisi)
- Kendi referral yapma olasılığı 2-3x daha yüksek (zincir etkisi)

Sonuç: 138-147 TL referral maliyeti, 1.320 TL LTV karşısında %10-11 oranında. Bu, son derece sağlıklı bir birim ekonomisi.

---

## 3. Paylaşım Mekanikleri

### 3.1 Paylaşım Kanalları Öncelik Sırası (Türkiye)

| Kanal | Kullanım Oranı (25-55 yaş kadın) | Referral Uygunluğu | Öncelik |
|-------|:-:|:-:|:-:|
| **WhatsApp** | ~%90+ | Birebir + grup paylaşımı, en yüksek güven | P0 |
| **Instagram DM** | ~%70 | DM ile birebir, Stories ile geniş | P0 |
| **Facebook Grupları** | ~%50 | Hasta gruplarında organik yayılım | P0 |
| **SMS** | ~%95 (sahip) | Düşük teknoloji bariyeri, yaş grubu uyumu | P1 |
| **Email** | ~%60 | Uzun form, PDF paylaşımı | P1 |
| **Link kopyalama** | Evrensel | Her platformda kullanılabilir | P1 |
| **QR Kod** | Büyüyen | Yüz yüze paylaşım, doktor muayenehanesi | P2 |
| **Telegram** | ~%15-20 | Sağlık gruplarında büyüyen kullanım | P2 |

### 3.2 WhatsApp Paylaşım Butonu (1. Öncelik)

WhatsApp, Türkiye'de dominant mesajlaşma platformudur. Referral'ın %60-70'i buradan gelecektir.

**Tek tıkla WhatsApp paylaşımı:**

```
[WhatsApp ile Paylaş] butonu tıklandığında açılan ön-doldurulmuş mesaj:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Merhaba! 

Sana çok önemli bir şey göstermek istiyorum. 
Lipödem hakkında Türkçe kapsamlı bir platform 
buldum -- semptom testi, beslenme planı, uzman 
doktor listesi var.

"Bacaklarım neden incelmiyor?" diye hiç 
düşündüysen, bu testi mutlaka yap:

[Kişisel referral link]

Her 9 kadından 1'ini etkileyen bu hastalığı 
bilmek çok önemli. 💜
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Teknik uygulama:**
```
WhatsApp API URL:
https://api.whatsapp.com/send?text={encoded_message_with_referral_link}
```

**Farklı bağlamlara göre ön-doldurulmuş mesaj varyantları:**

| Bağlam | Mesaj Tonu |
|--------|-----------|
| Semptom testi sonrası | "Ben bu testi yaptım, sonucumu gördüm. Sen de yap..." |
| Makale okuduktan sonra | "Bu makaleyi okumalısın -- lipödem hakkında bilmediğim çok şey varmış..." |
| Premium abone olduktan sonra | "Bu platforma üye oldum, beslenme planım harika. Sana da öneririm..." |
| Genel paylaşım | Yukarıdaki standart mesaj |

### 3.3 Benzersiz Referral Link Sistemi

Her kullanıcıya atanan benzersiz, kısa ve hatırlanabilir referral linki:

**Link formatı:**
```
lipodemturkiye.com/r/AYSE47
```

**Kurallar:**
- Kullanıcı adı bazlı (AYSE47, FATMA12 gibi) -- hatırlanabilir
- Özel istek ile değiştirilebilir (lipodemturkiye.com/r/drmelek)
- Her link UTM parametreleri ile otomatik etiketlenir
- Link tıklama, kayıt, dönüşüm takibi yapılır

**Link kopyalama UI:**
```
┌──────────────────────────────────────────┐
│  Sizin paylaşım linkiniz:               │
│                                          │
│  lipodemturkiye.com/r/AYSE47            │
│                                          │
│  [Kopyala]  [WhatsApp]  [Instagram]     │
│                                          │
│  Bu linki paylaşarak 1 ay ücretsiz      │
│  Premium kazanabilirsiniz.              │
└──────────────────────────────────────────┘
```

### 3.4 Instagram Paylaşım Mekanikleri

**Instagram Stories paylaşımı:**

Kullanıcılar semptom testi sonucunu veya bir makaleyi Instagram Stories'te paylaşabilir:

```
┌─────────────────────────────┐
│                             │
│  ┌─────────────────────┐    │
│  │  SEMPTOM TESTİ      │    │
│  │  SONUCUM             │    │
│  │                     │    │
│  │  Risk Seviyem:      │    │
│  │  ████████░░ %78     │    │
│  │                     │    │
│  │  "Her 9 kadından    │    │
│  │   1'ini etkiliyor"  │    │
│  │                     │    │
│  │  Sen de test yap:   │    │
│  │  lipodemturkiye.com │    │
│  │  /semptom-testi     │    │
│  └─────────────────────┘    │
│                             │
│  Yukarı kaydır: @user'ın   │
│  paylaşım linki            │
└─────────────────────────────┘
```

**Paylaşılabilir görsel template'ler:**
1. Semptom testi sonuç kartı (kişisel skor, anonim)
2. "Bugün öğrendiğim bir şey" bilgi kartları
3. "Yalnız değilsin" dayanışma kartı
4. "Her 9 kadından 1'i" farkındalık kartı

**Teknik:** Platform, kullanıcının paylaşabileceği önceden hazırlanmış Instagram Stories görseli oluşturur (canvas API veya sunucu taraflı image generation).

### 3.5 Facebook Grubu Paylaşım Stratejisi

Facebook lipödem grupları (Lipodemle Hayat, Lipodem Blog vb.) organik referral kaynağıdır.

**Paylaşım formatı:**

Platform, kullanıcının Facebook'ta paylaşabileceği hazır metin + görsel üretir:

```
Paylaşılabilir gönderi metni:

"Arkadaşlar, bir platform buldum ve çok faydalı olduğunu 
düşünüyorum. Lipödem hakkında Türkçe, bilimsel ve kapsamlı 
bir kaynak. Semptom testi, beslenme planı, doktor listesi var.

Ben de [X] öğrendim ve çok şaşırdım.

Merak edenler için: [Referral link]

#Lipödem #LipödemFarkındalığı #YalnızDeğilsin"
```

**Dikkat:** Facebook gruplarında aşırı tanıtım olumsuz algı yaratır. Bu nedenle:
- Ön-doldurulmuş metin kişisel deneyim tonu taşır
- Platform adı yerine "faydalı kaynak" ifadesi kullanılır
- Kullanıcı metni kendi sözleriyle değiştirebilir

### 3.6 QR Kod Paylaşım Sistemi

Yüz yüze paylaşım için QR kod -- özellikle doktor muayenehanesi, klinik, kongre ve hasta buluşmaları için kritik.

**Her kullanıcının kendi QR kodu:**

```
┌─────────────────────────────────┐
│                                 │
│     ┌─────────────┐            │
│     │  ▓▓▓▓▓▓▓▓▓  │            │
│     │  ▓▓▓▓▓▓▓▓▓  │            │
│     │  ▓▓▓▓▓▓▓▓▓  │  QR Kod   │
│     │  ▓▓▓▓▓▓▓▓▓  │            │
│     │  ▓▓▓▓▓▓▓▓▓  │            │
│     └─────────────┘            │
│                                 │
│  Lipödem Türkiye               │
│  Semptom testini yap           │
│  lipodemturkiye.com/r/AYSE47   │
│                                 │
│  [Kaydet]  [Paylaş]  [Yazdır] │
└─────────────────────────────────┘
```

**QR Kod kullanım senaryoları:**
- Hasta, doktor bekleme salonunda yanındaki kadına gösteriyor
- Doktor, hastasına QR kodlu kart veriyor (Bölüm 7)
- Kongrede stant ziyaretçisine kart veriliyor
- Hasta buluşmalarında katılımcılara dağıtılıyor

### 3.7 "Doktorunuza Götürün" PDF Paylaşımı

Mevcut araç olan "Doktorunuza Götürün" PDF'i referral mekanizmasına entegre edilir:

**PDF alt bilgisine referral ekleme:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Bu rapor [Kullanıcı Adı] tarafından 
Lipödem Türkiye platformunda oluşturulmuştur.

Siz de semptom testini yapın:
lipodemturkiye.com/r/[REFERRAL_CODE]

Lipödem Türkiye -- Türkiye'nin ilk kapsamlı 
lipödem hasta platformu
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Bu PDF doktora götürüldüğünde, doktor da platformu görür -- doktor yönlendirme programı ile çapraz etki.

### 3.8 Paylaşım Kolaylık Sıralaması

| Adım Sayısı | Mekanizma | Sürtünme |
|:-:|-----------|:-:|
| 1 tık | WhatsApp paylaş butonu (ön-doldurulmuş) | Minimal |
| 1 tık | Link kopyala | Minimal |
| 2 tık | Instagram Stories paylaş (görsel + link) | Düşük |
| 2 tık | Facebook paylaş (metin + link) | Düşük |
| 2 tık | SMS gönder (ön-doldurulmuş) | Düşük |
| 3 tık | QR kod kaydet/paylaş | Orta |
| 3+ tık | Email gönder | Orta |

**Tasarım ilkesi:** Her paylaşım aksiyonu maksimum 2 tıkla tamamlanmalı. Sürtünme arttıkça paylaşım oranı düşer.

---

## 4. Viral Loop Tasarımı

### 4.1 Birincil Viral Loop: Semptom Testi Sonuç Paylaşımı

Semptom testi, platformun en güçlü viral aracıdır. Test sonucu duygusal bir "aha anı" yaratır ve doğal paylaşım dürtüsü tetikler.

**Viral loop akışı:**

```
Kullanıcı A → Semptom Testi Yapar → Sonuç: "Risk seviyeniz yüksek"
     │
     ▼
Duygusal tetik: "Yıllardır hissettiğimin bir adı varmış!"
     │
     ▼
Paylaşım ekranı: "Bu testi tanıdıklarınıza da yaptırın"
     │
     ├── [WhatsApp ile Paylaş] ← 1 tık, ön-doldurulmuş mesaj
     ├── [Instagram'da Paylaş] ← Sonuç kartı görseli
     └── [Link Kopyala]
     │
     ▼
Kullanıcı B → Linke tıklar → Semptom Testine yönlendirilir (direkt)
     │
     ▼
Kullanıcı B → Testi tamamlar → Kendi sonucunu görür
     │
     ▼
Kullanıcı B → Kayıt olur (30 gün deneme) → Kendi aha moment'ı → Paylaşır
     │
     ▼
Kullanıcı A'ya bildirim: "Paylaştığınız kişi testi tamamladı! Teşekkürler."
```

**Sonuç ekranı tasarımı (paylaşım CTA'sı):**

```
┌──────────────────────────────────────────────┐
│                                              │
│  Semptom Testi Sonucunuz                     │
│                                              │
│  Risk Seviyeniz: YÜKSEK                      │
│  ██████████████████░░░░  %78                 │
│                                              │
│  Öneriler:                                   │
│  > Bir uzman doktora başvurun                │
│  > "Doktorunuza Götürün" PDF'ini indirin     │
│  > Kişiselleştirilmiş beslenme planı alın    │
│                                              │
│  ─────────────────────────────────────────    │
│                                              │
│  Bu bilgi başka kadınların da hayatını        │
│  değiştirebilir.                             │
│                                              │
│  Her 9 kadından 1'i lipödemden etkileniyor.  │
│  Tanıdığınız biri de bunlardan şikayet       │
│  ediyor olabilir.                            │
│                                              │
│  [WhatsApp ile Testi Paylaş]                 │
│  [Instagram'da Sonucu Paylaş]               │
│  [Link Kopyala]                              │
│                                              │
│  Şu ana kadar bu testi 3.400+ kadın          │
│  tamamladı.                                  │
│                                              │
└──────────────────────────────────────────────┘
```

**Kritik tasarım kararları:**
- Paylaşım CTA'sı sonucun hemen altında, "devam et" butonundan ÖNCE
- "Başka kadınların hayatını değiştirebilir" misyon motivasyonu
- "Her 9 kadından 1'i" istatistiği ile aciliyet
- Sosyal kanıt sayacı ("3.400+ kadın tamamladı")

### 4.2 İkincil Viral Loop: Hasta Hikayesi Paylaşımı

Hasta hikayeleri duygusal bağ kurar ve paylaşım motivasyonunu artırır.

**Akış:**

```
Hasta hikayesini okur → Duygusal etkilenme → "Bunu herkes okumalı"
     │
     ▼
Makale sonunda paylaşım CTA'sı:
"Bu hikaye sizi etkilediyse, aynı durumda olan 
bir tanıdığınıza ulaştırın."
     │
     ├── [WhatsApp ile Paylaş] (makale linki + referral kodu)
     └── [Instagram Stories] (hikaye özeti kartı)
     │
     ▼
Yeni ziyaretçi → Hikayeyi okur → Platformu keşfeder → Kayıt olur
```

### 4.3 Üçüncül Viral Loop: Topluluk Daveti

Premium topluluk, yalnızlık hisseden lipödem hastaları için güçlü bir çekim noktasıdır.

**Mekanizma:**

```
Topluluk üyesi → Anlamlı bir destek deneyimi yaşar
     │
     ▼
"Bu topluluğa ihtiyacı olan birini tanıyor musunuz?"
     │
     ▼
Topluluk davet linki (referral kodu ile) → Yeni üye katılır
     │
     ▼
Yeni üye topluluğa "hoş geldin" mesajı alır (mevcut üyelerden)
```

### 4.4 Viral Katsayı (K-Factor) Hedefleri

**K-factor formülü:** K = i x c
- i = ortalama davet sayısı (bir kullanıcının gönderdiği davet)
- c = dönüşüm oranı (davetin kayda dönüşme oranı)

| Dönem | Hedef i | Hedef c | K-Factor | Anlamı |
|-------|:-------:|:-------:|:--------:|--------|
| Ay 1-3 | 2.0 | 0.15 | **0.30** | Her 10 kullanıcı 3 yeni kullanıcı getiriyor |
| Ay 3-6 | 2.5 | 0.18 | **0.45** | Her 10 kullanıcı 4-5 yeni kullanıcı getiriyor |
| Ay 6-12 | 3.0 | 0.20 | **0.60** | Her 10 kullanıcı 6 yeni kullanıcı getiriyor |
| Hedef (olgun) | 3.5 | 0.25 | **0.88** | Organik büyüme hızla artıyor |

**Not:** K > 1.0 "viral" anlamına gelir (kullanıcı tabanı kendi kendine büyür). Sağlık niş platformu için K = 0.5-0.8 mükemmel bir hedeftir -- tam viral olmasa da organik büyümeye güçlü katkı sağlar.

### 4.5 Viral İçerik Formatları

Kullanıcıların organik olarak paylaşacağı, referral kodlu içerik formatları:

| Format | Paylaşılabilirlik | Referral Entegrasyon |
|--------|:-:|-------------------|
| **Semptom testi sonuç kartı** | Çok yüksek | Kart altında referral link |
| **"Bunu biliyor muydunuz?" bilgi kartları** | Yüksek | Kart altında "daha fazlası için" link |
| **Hasta hikayesi özeti** | Yüksek | Hikaye sonunda platform linki |
| **Anti-inflamatuar tarif kartı** | Orta-yüksek | Tarif kartında "50+ tarif için" link |
| **Lipödem vs Obezite karşılaştırma infografiği** | Yüksek | Infografik altında kaynak linki |
| **"Doktorunuz Bilmiyor Olabilir" istatistik kartı** | Çok yüksek | İstatistik kartında test linki |
| **Haftalık egzersiz programı önizleme** | Orta | Önizleme sonunda "tam program" linki |

**Her paylaşılabilir içerik üzerinde:**
- Kullanıcının referral kodu otomatik eklenir
- Platform logosu ve URL görünür
- Paylaşım butonları (WhatsApp, Instagram, Kopyala) hazır

### 4.6 Referred Kullanıcı Landing Page

Referral linki ile gelen kişinin gördüğü özel sayfa:

```
URL: lipodemturkiye.com/r/AYSE47

┌──────────────────────────────────────────────┐
│                                              │
│  [Ayşe] sizi Lipödem Türkiye'ye davet etti  │
│                                              │
│  "Bu platformu keşfettim ve çok faydalı      │
│   buldum. Senin de bilmen gerektiğini        │
│   düşündüm."                                │
│                                              │
│  ─────────────────────────────────────────    │
│                                              │
│  Lipödem, her 9 kadından 1'ini etkileyen     │
│  kronik bir hastalıktır. Bu obezite değildir.│
│                                              │
│  > Bacaklarınız diyetle incelmiyor mu?       │
│  > Dokunduğunuzda ağrı hissediyor musunuz?   │
│  > Kolayca morarıyor musunuz?               │
│                                              │
│  [2 Dakikada Semptom Testi Yap]              │
│                                              │
│  Ayşe'nin daveti ile 30 gün ücretsiz         │
│  Premium deneme hakkınız var (normalde 14).  │
│                                              │
│  ─────────────────────────────────────────    │
│                                              │
│  3.400+ kadın bu testi tamamladı.            │
│  Bilimsel kaynaklara dayalı. Ücretsiz.       │
│                                              │
└──────────────────────────────────────────────┘
```

**Landing page özellikleri:**
- Davet eden kişinin adı (kişiselleştirme + güven transferi)
- Doğrudan semptom testine yönlendirme (en yüksek dönüşüm aksiyonu)
- 30 gün ücretsiz deneme vurgusu (14 gün yerine)
- Sosyal kanıt sayacı
- Basit, tek CTA odaklı tasarım

---

## 5. Referral Dashboard UI

### 5.1 Dashboard Genel Görünümü

Premium üyelerin "Hesabım" altında eriştiği Referral Dashboard:

```
┌──────────────────────────────────────────────────────────┐
│  BİRİNİ DAHA AYDINLAT                                   │
│  Referral Paneli                                         │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Sizin Paylaşım Linkiniz:                         │  │
│  │                                                    │  │
│  │  lipodemturkiye.com/r/AYSE47                      │  │
│  │                                                    │  │
│  │  [Kopyala] [WhatsApp] [Instagram] [QR Kod]        │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐│
│  │ Tıklama  │  │ Kayıt    │  │ Premium  │  │ Kazanılan││
│  │    47    │  │    12   │  │    4     │  │  4 ay    ││
│  │ toplam   │  │ olan     │  │ abone    │  │ ücretsiz ││
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘│
│                                                          │
│  ─────────────────────────────────────────────────────    │
│                                                          │
│  ROZET İLERLEMENİZ                                       │
│                                                          │
│  [Aydınlatan]  [Yol Gösteren]  [ Işık Taşıyan ]         │
│      ✓ 1          ✓ 3           ○ 5                      │
│   ████████████  ████████████  ██████░░░░░░               │
│                                  Sonraki: 1 referral     │
│                                                          │
│  ─────────────────────────────────────────────────────    │
│                                                          │
│  DAVET DURUMU                                            │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ Fatma K.    Kayıt oldu    23 Mayıs    Deneme      │  │
│  │ Zeynep A.   Premium oldu  20 Mayıs    +1 ay ✓    │  │
│  │ Elif S.     Premium oldu  18 Mayıs    +1 ay ✓    │  │
│  │ Merve D.    Premium oldu  15 Mayıs    +1 ay ✓    │  │
│  │ Seda T.     Link tıkladı  22 Mayıs    Bekliyor   │  │
│  │ Gülşen B.   Premium oldu  10 Mayıs    +1 ay ✓    │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  ─────────────────────────────────────────────────────    │
│                                                          │
│  ÖZEL İÇERİKLER (Referral ile Kazanılan)                │
│                                                          │
│  ✓ Lipödem Yönetim Rehberi (PDF)          [İndir]       │
│  ✓ Anti-İnflamatuar Tarif Kitabı          [İndir]       │
│  ○ Uzman Q&A Önceliği             2 referral kaldı      │
│  ○ Lipödem ve Psikoloji E-Kitap   6 referral kaldı      │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### 5.2 Dashboard Bileşenleri Detayı

#### Paylaşım Linki Kartı (En Üst)
- Referral linki her zaman görünür ve kopyalanabilir
- Paylaşım butonları tek sıra halinde
- QR kod butonu tıklandığında modal ile QR görüntülenir
- "Paylaşım önerileri" tooltip (mouse üzerine gelince)

#### Özet Metrikleri (4 Kart)
| Kart | Metrik | Açıklama |
|------|--------|----------|
| Tıklama | Toplam link tıklama | Referral linkinin kaç kez tıklandığı |
| Kayıt | Kayıt olan | Linkten gelerek kayıt olan kişi sayısı |
| Premium | Premium abone | Ödeme yapan dönüşüm |
| Kazanılan | Ücretsiz ay | Toplam kazanılan ücretsiz Premium süresi |

#### Rozet İlerleme Çubuğu
- Mevcut rozet vurgulanır (aktif)
- Sonraki seviye hedefi gösterilir
- "1 referral kaldı" gibi somut mesaj
- Tamamlanan rozetler arasında animasyon (kutlama)

#### Davet Durumu Listesi
- Her davet edilenin durumu gerçek zamanlı güncellenir
- Durum etiketleri: "Link tıkladı" > "Kayıt oldu" > "Deneme" > "Premium oldu"
- Ödül verildiğinde onay ikonu
- Gizlilik: Sadece ilk isim + soyisim baş harfi gösterilir

#### Özel İçerikler Bölümü
- Kilidi açılmış içerikler indirilebilir
- Kilitli içerikler kaç referral kaldığını gösterir
- İlerleme motivasyonu sağlar

### 5.3 Mobil Dashboard

Mobil-öncelikli tasarım (platform hedef kitlesinin %80+ mobil kullanımı):

```
┌────────────────────────┐
│  BİRİNİ DAHA AYDINLAT │
│                        │
│  lipodemturkiye.com    │
│  /r/AYSE47             │
│                        │
│  [Kopyala] [WhatsApp]  │
│                        │
│  ┌──────┐ ┌──────┐    │
│  │  47  │ │  12  │    │
│  │ Tık  │ │ Kayıt│    │
│  └──────┘ └──────┘    │
│  ┌──────┐ ┌──────┐    │
│  │   4  │ │ 4 ay │    │
│  │ Abone│ │Ücretsiz│  │
│  └──────┘ └──────┘    │
│                        │
│  Rozet: Yol Gösteren   │
│  ██████████░░ 4/5      │
│  1 referral daha!      │
│                        │
│  [Davetlerimi Gör]     │
│  [Özel İçeriklerim]    │
│                        │
└────────────────────────┘
```

### 5.4 Bildirim Sistemi (Referral Events)

| Olay | Bildirim Türü | Mesaj |
|------|:-:|-------|
| Link tıklandı | In-app + push | "Birisi paylaşım linkinize tıkladı!" |
| Kayıt oldu | In-app + push + email | "Tebrikler! Paylaştığınız kişi kayıt oldu." |
| Premium abone oldu | In-app + push + email + kutlama | "1 ay ücretsiz Premium kazandınız! Hesabınıza eklendi." |
| Yeni rozet kazanıldı | In-app + kutlama animasyonu | "Yeni rozet: Yol Gösteren! 3 kadına ışık tuttunuz." |
| Özel içerik kilidi açıldı | In-app + email | "Lipödem Yönetim Rehberi kilidi açıldı. Hemen indirin." |

---

## 6. Hasta Savunuculuğu Programı (Ambassador)

### 6.1 Program Vizyonu

"Lipödem Elçisi" programı, en aktif ve tutkulu topluluk üyelerini platformun yüzü yapar. Bu salt bir referral programı değil, lipödem farkındalığını yayan bir hasta savunuculuğu hareketidir.

### 6.2 Seçim Kriterleri

| Kriter | Ağırlık | Ölçüm |
|--------|:-------:|-------|
| Referral performansı | %30 | Minimum 5 başarılı referral |
| Topluluk aktivitesi | %25 | Forum paylaşımları, yorum, yardım |
| İçerik kalitesi | %20 | Paylaştığı içeriklerin etkileşimi |
| Platform kullanım süresi | %15 | Minimum 3 ay aktif Premium üyelik |
| Kişisel motivasyon | %10 | Başvuru mektubundaki misyon uyumu |

**Kontenjan:** İlk yıl maksimum 50 Lipödem Elçisi.

### 6.3 Ambassador Seviyeleri

```
SEVİYE 1: ELÇİ                  SEVİYE 2: KIDEMLI ELÇİ           SEVİYE 3: BAŞ ELÇİ
━━━━━━━━━━━━━━━                  ━━━━━━━━━━━━━━━━━━━━━━           ━━━━━━━━━━━━━━━━━
5+ referral                      15+ referral                      30+ referral
3+ ay aktif                      6+ ay aktif                       12+ ay aktif
Standart avantajlar              Standart + ek avantajlar          Tüm avantajlar
```

### 6.4 Ambassador Avantajları

| Avantaj | Elçi | Kıdemli Elçi | Baş Elçi |
|---------|:----:|:------------:|:--------:|
| Ücretsiz Premium (süresiz) | -- | -- | Evet |
| Premium %50 indirimli | Evet | Evet | -- (zaten ücretsiz) |
| "Lipödem Elçisi" rozeti | Evet | Evet | Evet (özel) |
| Yeni özelliklere erken erişim | 1 hafta | 2 hafta | 1 ay |
| Aylık Ambassador toplantısı | Evet | Evet | Evet (moderatör) |
| Platform sosyal medyasında öne çıkarılma | 3 ayda 1 | Aylık | Aylık + highlight |
| Uzman Q&A'da soru önceliği | Evet | Evet | Evet + direkt soru hakkı |
| Kompresyon marka indirim kodu (ortaklık) | %10 | %15 | %20 |
| Kongre/etkinliklere davet | -- | Evet | Evet + VIP |
| Platform içerik ekibine feedback | -- | 3 ayda 1 | Aylık |
| Blog'da hasta hikayesi öne çıkarma | Talep ile | Öncelikli | Garantili |
| Klinik partner indirim kodu | -- | -- | Evet |

### 6.5 Ambassador Görevleri

| Görev | Frekans | Beklenti |
|-------|---------|----------|
| Sosyal medyada platform paylaşımı | Haftada 1+ | Instagram Stories, Facebook, WhatsApp |
| Toplulukta yeni üyeleri karşılama | Sürekli | "Hoş geldin" mesajı, rehberlik |
| Referral linkini aktif paylaşma | Sürekli | Minimum ayda 2 paylaşım |
| Aylık Ambassador toplantısına katılım | Aylık | Online, 45-60 dakika |
| Feedback ve öneri paylaşımı | Gerektiğinde | Platform geliştirme önerileri |
| Hasta hikayesi paylaşımı (opsiyonel) | İsteğe bağlı | Blog veya video için |

### 6.6 Ambassador Başvuru Süreci

```
Başvuru Formu (platform üzerinden)
     │
     ├── Temel bilgiler (isim, iletişim, şehir)
     ├── Platform kullanım geçmişi (otomatik çekilir)
     ├── Referral performansı (otomatik çekilir)
     ├── Motivasyon metni: "Neden Lipödem Elçisi olmak istiyorsunuz?" (min 100 karakter)
     └── Sosyal medya hesapları (opsiyonel)
     │
     ▼
İnceleme (1 hafta)
     │
     ├── Kriter puanlaması
     ├── Topluluk aktivite kontrolü
     └── İçerik kalitesi değerlendirmesi
     │
     ▼
Kabul / Red
     │
     ├── Kabul → Hoş geldin emaili + Ambassador kit (dijital)
     └── Red → Teşekkür + "Aktifliğinizi artırıp tekrar başvurun" mesajı
```

### 6.7 Ambassador Kit (Dijital)

Kabul edilen her Ambassador'a verilen dijital paket:

| Materyal | Format | İçerik |
|----------|--------|--------|
| Hoş Geldin Rehberi | PDF | Program kuralları, beklentiler, avantajlar |
| Marka Kılavuzu | PDF | Logo kullanımı, ton, mesaj çerçeveleri |
| Sosyal Medya Template'leri | Canva linkleri | 10+ paylaşım şablonu (Stories, post, carousel) |
| Paylaşım Mesaj Örnekleri | Metin dosyası | WhatsApp, Instagram, Facebook için hazır metinler |
| Özel Ambassador QR Kodu | Görsel | Kişiselleştirilmiş, indirilebilir |
| İstatistik Raporu | Dashboard | Aylık otomatik rapor |

### 6.8 Topluluk Liderliği Rolü

Ambassador'lar topluluk moderasyonunda da aktif rol alır:

| Rol | Görev | Yetki |
|-----|-------|-------|
| **Karşılayıcı** | Yeni üyelere "hoş geldin" mesajı ve rehberlik | Hoş geldin mesajı gönderme |
| **Yol Gösterici** | Soru soran üyelere doğru kaynağa yönlendirme | Içerik önerisi yapma |
| **Deneyim Paylaşıcı** | Kendi lipödem deneyimini anlatma | Blog yazısı oluşturma talebi |
| **Duygu Köprüsü** | Zor zamanlarda destek verme | Üyelere DM ile ulaşma |
| **Kural Koruyucu** | Topluluk kurallarına uymayan paylaşımları bildirme | Raporlama (silme yetkisi yok) |

**Not:** Moderasyon yetkisi sınırlıdır. Silme, banlama, uyarı verme gibi aksiyonlar platform ekibine aittir. Ambassador'lar sadece raporlar ve rehberlik eder.

---

## 7. Doktor Yönlendirme Programı

### 7.1 Program Yapısı: "Doktorlar İçin Lipödem Türkiye"

Doktorlar, lipödem hastaları ile ilk temas noktasıdır. Ancak Türkiye'de doktorların %51'i lipödemi bilmiyor. Bilen doktorlar ise hastalarını güvenilir kaynaklara yönlendirmek istiyor.

**Hedef:** Doktorların hastalarına Lipödem Türkiye platformunu önermesini sağlamak.

**Motivasyon analizi:**

| Doktor Motivasyonu | Platform Karşılığı |
|-------------------|-------------------|
| "Hastama güvenilir kaynak öneremiyorum" | Bilimsel, Türkçe, kapsamlı platform |
| "Hasta eğitimi seans süresini kısaltır" | Platform hastayı eğitir, doktora hazırlıklı gelir |
| "Lipödem konusundaki uzmanlığımı göstermek istiyorum" | Doktor profil sayfası, "Uzman Ağı" üyeliği |
| "Diğer uzmanlarla bağlantı kurmak istiyorum" | Referans ağı, kongre networking |

### 7.2 Doktor Yönlendirme Araçları

#### A. Reçete Kartı (Fiziksel + Dijital)

Doktorların hastalarına vereceği kartvizit boyutunda bilgilendirme kartı:

```
ÖN YÜZ:
┌──────────────────────────────────┐
│                                  │
│  Lipödem Türkiye                 │
│  lipodemturkiye.com              │
│                                  │
│  Semptom Testi Yapın             │
│  Beslenme Planı Alın             │
│  Uzman Desteği Bulun             │
│                                  │
│  ┌──────────┐                    │
│  │  QR Kod  │                    │
│  │          │                    │
│  └──────────┘                    │
│                                  │
│  Dr. [İsim Soyisim]             │
│  tarafından önerilmektedir       │
│                                  │
└──────────────────────────────────┘

ARKA YÜZ:
┌──────────────────────────────────┐
│                                  │
│  Lipödem Nedir?                  │
│                                  │
│  Simetrik, orantısız yağ         │
│  birikimi ile karakterize        │
│  kronik bir hastalıktır.         │
│                                  │
│  > Diyet ile gitmez              │
│  > Her 9 kadından 1'ini etkiler  │
│  > Erken tanı önemlidir          │
│                                  │
│  Bu platform bilimsel kaynaklara │
│  dayanır ve doktor yerine        │
│  geçmez.                        │
│                                  │
└──────────────────────────────────┘
```

**QR kod:** Doktora özel referral kodu ile (lipodemturkiye.com/dr/MELEK). Bu kod ile gelen her hasta, doktorun dashboard'ında sayılır.

**Fiziksel kart üretimi:**
- İlk 20 doktor partnerine 500'er adet ücretsiz basılı kart gönderilir
- Maliyet: ~200 TL/500 kart = toplam 4.000 TL (ilk parti)
- Dijital versiyonu PDF olarak indirilebilir, doktor kendi bastırabilir

#### B. Doktor Dashboard'u

Uzman Ağı üyesi doktorların eriştiği özel panel:

```
┌──────────────────────────────────────────────┐
│  DR. MELEK YILMAZ -- Doktor Paneliniz        │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Yönlen. │  │  Kayıt   │  │  Premium │  │
│  │    23    │  │    15   │  │    7     │  │
│  │  hastanız│  │  olan    │  │  abone   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                              │
│  Reçete Kartınız:                            │
│  [PDF İndir] [QR Kodunuz] [Kart Sipariş]    │
│                                              │
│  Son Yönlendirmeler:                         │
│  Hasta A. -- Kayıt oldu -- 22 Mayıs         │
│  Hasta B. -- Premium oldu -- 20 Mayıs       │
│  Hasta C. -- Test tamamladı -- 19 Mayıs     │
│                                              │
│  Profiliniz: lipodemturkiye.com/uzman/melek  │
│  [Profili Düzenle]                           │
│                                              │
└──────────────────────────────────────────────┘
```

#### C. Bekleme Salonu Posteri (Dijital)

Doktor bekleme salonunda asılabilecek A4 poster:

```
┌──────────────────────────────────────┐
│                                      │
│  Bacaklarınız Neden İncelmiyor?      │
│                                      │
│  Her 9 kadından 1'ini etkileyen      │
│  lipödem hakkında bilgilenin.        │
│                                      │
│  ┌──────────────┐                    │
│  │    QR Kod    │ Semptom testi      │
│  │              │ yapın.             │
│  └──────────────┘ 2 dakika sürer.    │
│                                      │
│  lipodemturkiye.com                  │
│                                      │
│  Bu afiş Dr. [İsim] tarafından      │
│  desteklenmektedir.                  │
│                                      │
└──────────────────────────────────────┘
```

### 7.3 Doktor Teşvikleri

| Teşvik | Detay | Ticari mi? |
|--------|-------|:-:|
| Profil sayfası SEO değeri | "Dr. X -- Lipödem Uzmanı İstanbul" organik sıralaması | Hayır |
| "Uzman Ağı Üyesi" rozeti | Platform ve doktor sitesinde kullanılabilir | Hayır |
| Hasta hacmi artışı | Bilinçli, motive hasta yönlendirmesi | Dolaylı |
| Aylık yönlendirme raporu | Kaç hastanın platformu kullandığı | Hayır |
| Uzman içerik fırsatı | Byline ile makale/video yayını | Hayır |
| Kongre ağı erişimi | Platform aracılığıyla uzman tanışma | Hayır |

**Not:** Doktor yönlendirme programında TL bazlı ödül veya komisyon YOKTUR. Bunun iki sebebi:
1. Tıbbi etik: Doktora hasta yönlendirme komisyonu vermek Türkiye'de etik ve yasal sorun yaratır
2. Güven: "Doktorum para aldığı için mi bunu öneriyor?" şüphesi güveni kırar

### 7.4 Doktor Onboarding Akışı

```
1. Co-marketing ekibi doktora ulaşır (email + kongre)
     │
     ▼
2. Doktor ilgisini gösterir → 15 dakika demo görüşmesi
     │
     ▼
3. Doktor "Uzman Ağı" üyelik başvurusu yapar
     │
     ├── Lisans doğrulama
     ├── Lipödem deneyimi kontrolü
     └── Profil bilgisi doldurma
     │
     ▼
4. Kabul → Doktor hesabı oluşturulur
     │
     ├── Doktor profil sayfası yayına alınır
     ├── Benzersiz doktor referral kodu (dr/MELEK)
     ├── Reçete kartı PDF'i gönderilir
     ├── İstenirse 500 adet basılı kart gönderilir
     └── Doktor Dashboard erişimi açılır
     │
     ▼
5. Aylık: Yönlendirme raporu + içerik katkısı daveti
```

### 7.5 Doktor Referral KPI'ları

| Metrik | Ay 3 | Ay 6 | Ay 12 |
|--------|:----:|:----:|:-----:|
| Uzman Ağı üyesi doktor | 5 | 10 | 20 |
| Doktor kaynaklı trafik/ay | 100 | 500 | 2.000 |
| Doktor kaynaklı kayıt/ay | 20 | 100 | 400 |
| Doktor kaynaklı Premium dönüşüm/ay | 5 | 25 | 100 |
| Reçete kartı dağıtılan | 2.500 | 5.000 | 10.000 |

---

## 8. Klinik Referral Tracking

### 8.1 Klinik Ortaklık Referral Sistemi

co-marketing-output.md ve pricing-output.md'deki klinik komisyon modeli ile entegre referral tracking sistemi.

**Klinik referral, hasta referral'dan farklıdır:**

| Boyut | Hasta Referral | Klinik Referral |
|-------|---------------|-----------------|
| Kim yönlendirir | Hasta → Hasta | Platform → Klinik |
| Motivasyon | Dayanışma + ödül | Ticari (CPA komisyonu) |
| Tracking | Referral link + kod | Lead form + doğrulama |
| Ödül | Ücretsiz ay, içerik | TL bazlı komisyon |
| Hacim | Yüksek (kitle) | Düşük (kaliteli lead) |

### 8.2 Klinik Lead Tracking Akışı

```
Hasta → Platform Klinik Bulucu → Klinik Profili Görüntüler
     │
     ▼
"Randevu Talep Et" tıklar
     │
     ├── Event: clinic_referral_click → GA4
     ├── UTM: source=platform, medium=referral, campaign=clinic_[ID]
     │
     ▼
Randevu Formu (isim, telefon, tercih tarih, şikayet özeti)
     │
     ├── Form submit → CRM kaydı oluşur (lead status: NEW)
     ├── Klinike gerçek zamanlı bildirim (email + SMS webhook)
     │
     ▼
Klinik 24 saat içinde hastayı arar (SLA)
     │
     ├── Randevu verildi → Lead status: APPOINTMENT_SCHEDULED
     │     │
     │     ▼
     │   Randevu gerçekleşti → Lead status: APPOINTMENT_COMPLETED
     │     │
     │     ├── CPA faturalanır (500 TL/verified lead)
     │     │
     │     ▼
     │   Ameliyat planlandı → Lead status: SURGERY_PLANNED (Faz 2)
     │     │
     │     └── Ameliyat komisyonu (%3-5) faturalanır
     │
     └── Randevu gerçekleşmedi
           │
           ├── Lead status: NO_SHOW veya CANCELLED
           └── Neden kaydedilir → CPA faturalanmaz
```

### 8.3 Klinik Komisyon Dashboard'u

Klinik partnerlerin eriştiği komisyon takip paneli:

```
┌──────────────────────────────────────────────────────┐
│  [KLİNİK ADI] -- Ortaklık Paneli                    │
│                                                      │
│  Bu Ay                         Toplam                │
│  ┌──────────┐ ┌──────────┐    ┌──────────┐          │
│  │  Lead    │ │ Randevu  │    │ Komisyon │          │
│  │   12    │ │    8    │    │ 4.000 TL │          │
│  │ gelen    │ │ gerçekleş│    │ kazanılan│          │
│  └──────────┘ └──────────┘    └──────────┘          │
│                                                      │
│  LEAD DETAYLARI                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │ Tarih    │ Hasta  │ Durum        │ Komisyon  │    │
│  │ 23 May   │ A.K.   │ Randevu ok   │ 500 TL   │    │
│  │ 22 May   │ F.S.   │ Bekliyor     │ --       │    │
│  │ 20 May   │ Z.T.   │ Randevu ok   │ 500 TL   │    │
│  │ 18 May   │ M.D.   │ İptal        │ --       │    │
│  │ 15 May   │ E.B.   │ Randevu ok   │ 500 TL   │    │
│  └──────────────────────────────────────────────┘    │
│                                                      │
│  Dönüşüm Oranı: %67 (lead → randevu)               │
│  Ortalama Lead Kalitesi: 4.2/5                       │
│                                                      │
│  [Fatura Geçmişi]  [Profil Ayarları]  [Destek]      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### 8.4 Lead Doğrulama Mekanizması

CPA komisyonunun faturalanması için randevunun gerçekleştiğinin doğrulanması gerekir:

| Doğrulama Yöntemi | Uygulama | Güvenilirlik |
|-------------------|----------|:-:|
| **Klinik onayı** | Klinik dashboard'dan "randevu gerçekleşti" butonu | Orta (klinik manipüle edebilir) |
| **Hasta onayı** | Hastaya email/SMS: "Randevunuz gerçekleşti mi?" | Yüksek |
| **Çift doğrulama** | Hem klinik hem hasta onayı | En yüksek |
| **Otomatik** | Klinik randevu sisteminden API entegrasyonu (ileri faz) | En yüksek |

**Önerilen:** İlk fazda çift doğrulama (klinik + hasta), ileri fazda API entegrasyonu.

### 8.5 Klinik Referral Fraud Önleme

| Risk | Önlem |
|------|-------|
| Klinik sahte lead oluşturma | Hasta tarafından form doldurulmalı (CAPTCHA + telefon doğrulama) |
| Klinik kendi hastalarını platform üzerinden gösterme | IP ve cookie kontrolü, yinelenen lead tespiti |
| Lead bilgisi manipülasyonu | Hasta onay mekanizması (çift doğrulama) |
| Aşırı düşük randevu gerçekleşme | %50 altı randevu gerçekleşme oranı → inceleme |

### 8.6 Klinik Referral Faturalandırma

| Parametre | Değer |
|-----------|-------|
| Faturalandırma döngüsü | Aylık |
| Ödeme vadesi | Fatura tarihinden 15 gün |
| Minimum fatura tutarı | 500 TL (1 verified lead) |
| Ödeme yöntemi | Banka havalesi / iyzico B2B |
| Fatura formatı | e-Fatura (GIB uyumlu) |
| İtiraz süresi | Fatura tarihinden 7 gün |

---

## 9. Email ve In-App Tetikleyiciler

### 9.1 Referral Tetikleyici Anlar (Trigger Moments)

| Tetikleyici An | Neden Etkili | Kanal | Mesaj Örneği |
|---------------|-------------|-------|-------------|
| **Semptom testi tamamlama** | Aha moment -- "bende bu varmış" | In-app + push | "Bu testi tanıdığınız birine de yaptırın" |
| **İlk Premium hafta** | Yüksek memnuniyet, değer keşfi | Email (Gün 5) | "Beğendiniz mi? Bir tanıdığınıza da 30 gün hediye edin" |
| **Beslenme planı alma** | Somut değer deneyimi | In-app | "Bu plan hayatınızı değiştiriyorsa, başkalarının da değiştirebilir" |
| **Toplulukta ilk etkileşim** | Aidiyet hissi, bağ kurma | In-app | "Bu toplulukta yalnız değilsiniz. Bir tanıdığınız da olmasın" |
| **1. ay tamamlama** | Alışkanlık oluşmuş, değer kanıtlanmış | Email | "1 aydır birlikteyiz! Birini daha aydınlatma zamanı" |
| **Egzersiz programı tamamlama** | Başarı hissi, milestone | In-app + push | "Tebrikler! 4 haftalık programı tamamladınız. Bu başarıyı paylaşın" |
| **İlerleme kaydı pozitif** | Somut sonuç görülmüş | In-app | "İlerlemeniz harika! Bu yolculuğu bir arkadaşınızla paylaşın" |
| **Yıllık plana geçiş** | Yüksek bağlılık göstergesi | Email | "Yıllık üye olarak topluluğumuzu büyütmeye yardımcı olun" |
| **Uzman Q&A sonrası** | Değerli deneyim yaşanmış | In-app | "Bu oturum faydalı olduysa, bir tanıdığınıza da fırsat verin" |
| **Hasta hikayesi okuma** | Duygusal bağ kurulmuş | In-app (makale sonu) | "Bu hikaye sizi etkilediyse, paylaşın" |

### 9.2 Email Referral Serisi

#### Email 1: Referral Programı Tanıtımı (Premium olduktan 3 gün sonra)

```
Konu: Lipödem bilgisini bir kadına daha ulaştırın -- 1 ay ücretsiz kazanın

Merhaba [İsim],

Lipödem Türkiye'ye hoş geldiniz. Siz bu bilgiye ulaştınız -- 
ama Türkiye'de milyonlarca kadın hala "neden bacaklarım 
incelmiyor?" diye soruyor.

"Birini Daha Aydınlat" programımızla tanıdığınız bir kadına 
bu platformu önerin:

> Siz: 1 ay ücretsiz Premium uzatma kazanın
> O: 30 gün ücretsiz deneme hakkı (normalde 14 gün)

Paylaşım linkiniz:
[REFERRAL_LINK]

[WhatsApp ile Paylaş]  [Link Kopyala]

Bir kadının hayatını değiştirebilirsiniz.

Sevgilerle,
Lipödem Türkiye Ekibi
```

#### Email 2: Hatırlatma (Premium olduktan 14 gün sonra)

```
Konu: Tanıdığınız birinin de bacakları incelmiyor olabilir

Merhaba [İsim],

Her 9 kadından 1'i lipödemden etkileniyor -- ama çoğu 
bunun adını bile bilmiyor.

Anneniz, kız kardeşiniz, arkadaşınız... Lipödem genetik 
geçişli bir hastalık. Eğer sizde varsa, ailenizde de 
olabilir.

Semptom testini onlara da gönderin:
[REFERRAL_LINK]

2 dakikalık bir test, yıllarca süren belirsizliğe 
son verebilir.

[WhatsApp ile Testi Paylaş]

Henüz kimseyi davet etmediniz -- ilk adımı bugün atın.

Sevgilerle,
Lipödem Türkiye Ekibi
```

#### Email 3: Sosyal Kanıt (Premium olduktan 30 gün sonra)

```
Konu: 247 kadın bu ay "Birini Daha Aydınlat" ile platforma katıldı

Merhaba [İsim],

Topluluğumuz büyüyor -- ve bunun en büyük sebebi sizin 
gibi üyelerin paylaşımları.

Bu ay:
> 247 kadın referral ile platforma katıldı
> 89 kadın ilk kez semptom testini tamamladı
> 34 kadın Premium üye oldu

Siz de bu harekete katılın:
[REFERRAL_LINK]

Her paylaşım, bir kadının lipödemi öğrenmesi demek.

[WhatsApp ile Paylaş]

Sevgilerle,
Lipödem Türkiye Ekibi
```

#### Email 4: Milestone Kutlama (İlk referral dönüşümü)

```
Konu: Tebrikler [İsim]! 1 ay ücretsiz Premium kazandınız

Merhaba [İsim],

Harika haber! Paylaştığınız [Davet Edilen İsim] Premium 
üye oldu.

Kazandınız:
> 1 ay ücretsiz Premium uzatma (hesabınıza eklendi)
> "Aydınlatan" rozeti (profilinizde görünüyor)

Bir sonraki hedef: 3 referral = "Yol Gösteren" rozeti + 
özel içerik paketi

Devam edin:
[REFERRAL_LINK]

Birini daha aydınlattınız. Teşekkürler!

Sevgilerle,
Lipödem Türkiye Ekibi
```

### 9.3 In-App Referral Prompt Tasarımları

#### Prompt A: Semptom Testi Sonrası (Tam Ekran Modal)

```
┌──────────────────────────────────────────────┐
│                                              │
│  Bu bilgi başka kadınların da hayatını        │
│  değiştirebilir.                             │
│                                              │
│  Anneniz, kız kardeşiniz, arkadaşınız...     │
│  Lipödem genetik geçişlidir.                 │
│  Eğer sizde varsa, onlarda da olabilir.      │
│                                              │
│  [WhatsApp ile Testi Paylaş]                 │
│  [Şimdi Değil]                               │
│                                              │
│  Bu ay 3.400+ kadın bu testi tamamladı.      │
│                                              │
└──────────────────────────────────────────────┘
```

#### Prompt B: Floating Action Button (Sürekli Görünür)

Sayfa sağ alt köşesinde sürekli görünen küçük buton:

```
┌───────────────────┐
│  [Birini Aydınlat] │  ← Tıklandığında paylaşım modalı açılır
└───────────────────┘
```

#### Prompt C: Banner (Milestone Sonrası)

Egzersiz programı tamamlama, ilerleme kaydı gibi başarı anlarında gösterilen banner:

```
┌──────────────────────────────────────────────────────────┐
│  Tebrikler! 4 haftalık programı tamamladınız.            │
│  Bu başarıyı bir kadına daha yaşatın.  [Paylaş]         │
└──────────────────────────────────────────────────────────┘
```

#### Prompt D: Topluluk İçi Hatırlatma (Haftada 1)

Topluluk ana sayfasında haftalık dönen kart:

```
┌──────────────────────────────────────────────┐
│  Bu hafta topluluğumuza 47 yeni kadın        │
│  katıldı. Birini siz de davet edin!          │
│                                              │
│  [Davet Linkimi Kopyala]                     │
└──────────────────────────────────────────────┘
```

### 9.4 Push Notification Referral Tetikleyicileri

| Tetik | Zamanlama | Mesaj | Frekans Limiti |
|-------|-----------|-------|:-:|
| Semptom testi tamamlama | Hemen | "Testi tamamladınız! Tanıdıklarınıza da gönderin." | 1 kez |
| 1 haftalık Premium | Gün 7 | "1 haftadır birlikteyiz. Birini daha aydınlatın!" | 1 kez |
| Yeni içerik yayını | Yayın + 2 saat | "Yeni: [Makale Başlığı]. Bu bilgiyi paylaşın." | Haftada max 1 |
| Referral linki hiç tıklanmadı | Gün 21 | "Henüz kimseyi davet etmediniz. 1 ay ücretsiz kazanın!" | 1 kez |
| Kampanya dönemi | Kampanya başlangıcı | "Farkındalık Haftası: Her referral = Derneğe 10 TL bağış" | Kampanya bazlı |

**Frekans kuralı:** Bir kullanıcıya referral ile ilgili maksimum haftada 1 push notification gönderilir. Spam hissi vermeyi önlemek kritiktir.

### 9.5 Tetikleyici Takvimi (Aylık Döngü)

```
GÜN 1-3:   Yeni üye hoş geldin → Referral programı tanıtımı (email)
GÜN 5:     İlk değer deneyimi → "Beğendiniz mi? Paylaşın" (in-app)
GÜN 7:     1 hafta milestone → Push notification
GÜN 14:    Genetik mesaj → "Ailenizde de olabilir" (email)
GÜN 21:    Referral yapmadıysa → "Henüz davet etmediniz" (push)
GÜN 30:    1 ay milestone → Sosyal kanıt emaili
GÜN 45+:   Milestone bazlı → Egzersiz/beslenme/topluluk tetikleyicileri
HER AY:    Topluluk büyüme raporu → Referral hatırlatma
KAMPANYA:  Farkındalık Haftası, Kadınlar Günü → Özel referral promosyonları
```

---

## 10. Analytics ve KPI'lar

### 10.1 Referral Funnel Metrikleri

```
REFERRAL FUNNEL:

Paylaşım   →   Tıklama   →   Kayıt   →   Deneme   →   Premium   →   Tutulan (3. ay)
Aksiyonu        Link          Formu       Başlatma      Ödeme         Aktif

  100%     →     60%     →    25%    →    15%     →     5%      →      3.5%
 (hedef)       (hedef)      (hedef)     (hedef)       (hedef)         (hedef)
```

| Funnel Adımı | Metrik | Hesaplama | Ay 3 Hedefi | Ay 6 Hedefi | Ay 12 Hedefi |
|-------------|--------|-----------|:-----------:|:-----------:|:------------:|
| Paylaşım | Toplam paylaşım aksiyonu | Paylaş butonu tıklaması | 500/ay | 2.000/ay | 8.000/ay |
| Tıklama | Referral link tıklama | Benzersiz tıklama | 300/ay | 1.200/ay | 4.800/ay |
| Kayıt | Referral kaynaklı kayıt | Referral link ile kayıt | 75/ay | 300/ay | 1.200/ay |
| Deneme | Deneme başlatma | 30 gün deneme aktifleştirme | 45/ay | 180/ay | 720/ay |
| Premium | Ödeme yapan | Referral kaynaklı Premium | 15/ay | 60/ay | 240/ay |
| Tutulan | 3. ayını tamamlayan | Referral Premium, 3+ ay aktif | 10/ay | 42/ay | 168/ay |

### 10.2 Viral Katsayı Metrikleri

| Metrik | Tanım | Formül | Hedef |
|--------|-------|--------|-------|
| **K-Factor** | Viral katsayı | i (ort. davet) x c (davet→kayıt dönüşümü) | >0.5 (Ay 6) |
| **Viral Coefficient** | Genişletilmiş viral katsayı | K-Factor x retention oranı | >0.4 |
| **Referral Rate** | Referral yapan kullanıcı oranı | Referral yapan / toplam aktif kullanıcı | >%15 (Ay 6) |
| **Invite Rate** | Ortalama davet sayısı | Toplam davet / referral yapan kullanıcı | >2.5 |
| **Referral Conversion Rate** | Davet → Premium dönüşüm | Premium olan / tıklama | >%5 |
| **Time to Referral** | İlk referral'a kadar geçen süre | Kayıt → ilk paylaşım (medyan) | <14 gün |

### 10.3 Kanal Bazlı Performans

| Kanal | İzleme Yöntemi | Hedef Metrikler |
|-------|----------------|-----------------|
| **WhatsApp** | api.whatsapp.com click tracking + UTM | Tıklama, kayıt, dönüşüm |
| **Instagram** | UTM parametreleri + Stories mention tracking | Tıklama, erişim, kayıt |
| **Facebook** | UTM + Facebook pixel (opsiyonel) | Tıklama, kayıt, grup paylaşım |
| **SMS** | Kısa link tracking | Tıklama, kayıt |
| **QR Kod** | QR dinamik link tracking | Tarama, kayıt, kaynak (doktor/kongre) |
| **Link kopyalama** | Referral link click tracking | Tıklama, kaynak belirsiz |
| **Doktor kartı** | dr/ prefix tracking | Tarama, kayıt, doktor bazlı |

### 10.4 Cohort Bazlı Referral Analizi

| Cohort | İzlenecek Metrikler |
|--------|---------------------|
| **Referral ile gelen vs organik** | LTV karşılaştırması, churn farkı, aktivasyon hızı |
| **Referrer aktiflik cohort'ları** | 1 referral yapanlar vs 3+ vs 10+ performans farkı |
| **Kanal cohort'ları** | WhatsApp'tan gelen vs Instagram'dan gelen davranış farkı |
| **Zaman cohort'ları** | Lansman dönemi vs Ay 3 vs Ay 6 referral kalitesi trendi |
| **Doktor referral vs hasta referral** | Dönüşüm oranı, LTV, aktivasyon karşılaştırması |

### 10.5 Referral Program Gelir Etkisi Projeksiyonu

| Dönem | Referral Kaynaklı Premium | ARPU | Aylık Gelir Etkisi | Referral Maliyeti | Net Etki |
|-------|:------------------------:|:----:|:------------------:|:-----------------:|:--------:|
| Ay 3 | 15/ay | 110 TL | 1.650 TL | 2.085 TL | -435 TL (yatırım) |
| Ay 6 | 60/ay | 110 TL | 6.600 TL | 8.340 TL | -1.740 TL (yatırım) |
| Ay 9 | 150/ay | 110 TL | 16.500 TL | 20.850 TL | -4.350 TL (yatırım) |
| Ay 12 | 240/ay | 110 TL | 26.400 TL | 33.360 TL | -6.960 TL (yatırım) |
| **Ay 12 kümülatif LTV etkisi** | 1.500+ referral toplam | 110 TL x 12 ay | **1.980.000 TL** | **208.500 TL** | **+1.771.500 TL** |

**Not:** Aylık net etki negatif görünür çünkü ücretsiz ay ödülü o ay için gelir kaybıdır. Ancak referral ile gelen kullanıcıların 12 aylık LTV'si hesaplandığında net etki son derece pozitiftir. Referral CAC (139 TL) / LTV (1.320 TL) oranı = %10.5 -- bu mükemmel bir oran.

### 10.6 Dashboard ve Raporlama Araçları

| Araç | Kullanım | Frekans |
|------|----------|---------|
| **GA4 + UTM** | Referral link tıklama, kayıt, dönüşüm attribution | Otomatik |
| **Dahili Referral DB** | Benzersiz kodlar, davet durumları, ödül takibi | Otomatik |
| **Metabase / Looker Studio** | Referral funnel görselleştirme, cohort analizi | Haftalık |
| **Aylık Referral Raporu** | Tüm KPI'ların özeti, trend analizi | Aylık |
| **A/B Test Dashboard** | Mesaj, zamanlama, ödül A/B testleri | Test bazlı |

### 10.7 Erken Uyarı Metrikleri

| Metrik | Kırmızı Bayrak | Aksiyon |
|--------|---------------|---------|
| K-Factor < 0.1 | Program etkisiz | Ödül yapısını revize et, paylaşım UX'i iyileştir |
| Referral Rate < %5 | Az kullanıcı paylaşıyor | Tetikleyici anları yeniden tasarla |
| Referral conversion < %2 | Davet edilenler dönmüyor | Landing page optimize et, ödülü artır |
| Fraud oranı > %3 | Sahte referral'lar | Doğrulama mekanizmalarını sıkılaştır |
| Time to Referral > 30 gün | Çok geç paylaşılıyor | Erken tetikleyiciler ekle |
| Churn (referral cohort) > genel churn | Referral kalitesi düşük | Davet mesajını ve hedeflemeyi iyileştir |

### 10.8 A/B Test Planı

| Test | Varyant A | Varyant B | Ölçüm | Öncelik |
|------|-----------|-----------|-------|:-------:|
| **Ödül yapısı** | 1 ay ücretsiz | 2 hafta ücretsiz + özel içerik | Referral rate, dönüşüm | P0 |
| **CTA metni** | "Birini Daha Aydınlat" | "1 Ay Ücretsiz Kazanın" | Paylaşım oranı | P0 |
| **WhatsApp mesaj tonu** | Misyon odaklı ("hayatını değiştirebilir") | Ödül odaklı ("1 ay ücretsiz") | Tıklama oranı | P1 |
| **Tetikleyici an** | Test sonrası hemen | Test sonrası + 1 gün email | Paylaşım oranı | P1 |
| **Landing page** | Semptom testine yönlendir | Genel platform tanıtımı | Kayıt dönüşüm | P1 |
| **Referred deneme süresi** | 30 gün (uzatılmış) | 14 gün (standart) + özel içerik | Premium dönüşüm | P2 |
| **Rozet sistemi** | Aktif (görünür) | Pasif (sadece Dashboard'da) | Tekrar referral oranı | P2 |

---

## UYGULAMA ONCELIK SIRASI

| # | Aksiyon | Süre | Dönem | Bağımlılık |
|---|---------|------|-------|------------|
| 1 | Referral link altyapısı (benzersiz kod + tracking) | 3 gün | Ay -1 | Backend geliştirme |
| 2 | WhatsApp paylaşım butonu + ön-doldurulmuş mesaj | 1 gün | Ay -1 | Frontend |
| 3 | Referred kullanıcı landing page | 2 gün | Ay -1 | Frontend + SEO |
| 4 | Semptom testi sonuç ekranına paylaşım CTA'sı | 1 gün | Ay 0 | Semptom testi hazır |
| 5 | Temel Referral Dashboard (link + metrikler) | 3 gün | Ay 0 | Backend + Frontend |
| 6 | Referral email serisi (4 email) | 1 gün | Ay 0 | Email altyapısı |
| 7 | Kurucu üyelere referral programı tanıtımı | 0.5 gün | Ay 0 | Kurucu üyelik aktif |
| 8 | Instagram Stories paylaşım template'leri | 2 gün | Ay 1 | Tasarım |
| 9 | Rozet sistemi + kademeli ödüller | 3 gün | Ay 1-2 | Backend + Dashboard |
| 10 | In-app referral prompt'ları (4 varyant) | 2 gün | Ay 1-2 | Frontend |
| 11 | Doktor reçete kartı tasarımı + PDF | 1 gün | Ay 1 | Tasarım |
| 12 | Doktor Dashboard (basit versiyon) | 3 gün | Ay 2-3 | Backend |
| 13 | Klinik komisyon tracking sistemi | 5 gün | Ay 2-3 | Klinik ortaklıkları |
| 14 | A/B test altyapısı (ödül, mesaj, zamanlama) | 3 gün | Ay 3 | Analytics |
| 15 | Ambassador program başvuru sistemi | 2 gün | Ay 4-5 | Yeterli üye tabanı |
| 16 | Ambassador kit hazırlığı (dijital) | 2 gün | Ay 5 | Tasarım + içerik |
| 17 | Mevsimsel kampanya otomasyonu | 2 gün | Ay 5-6 | Marketing automation |
| 18 | Cohort analizi ve optimizasyon döngüsü | Sürekli | Ay 6+ | Veri birikimi |

---

## REFERRAL PROGRAMI OZET

| Boyut | Durum |
|-------|-------|
| **Program adı** | "Birini Daha Aydınlat" |
| **Temel motivasyon** | Hasta dayanışması + ödül (misyon-öncelikli) |
| **Çift taraflı ödül** | Referrer: 1 ay ücretsiz / Referred: 30 gün deneme |
| **Kademeli ödüller** | 1 → 3 → 5 → 10 → 25+ referral seviyesi |
| **Birincil kanal** | WhatsApp (tek tık paylaşım) |
| **En güçlü viral loop** | Semptom testi sonuç paylaşımı |
| **K-Factor hedefi** | >0.5 (Ay 6), >0.8 (Ay 12) |
| **Referral CAC** | ~139 TL (Google Ads CAC'ın %50-75 altı) |
| **Doktor programı** | Reçete kartı + QR kod (komisyonsuz, itibar bazlı) |
| **Klinik tracking** | CPA bazlı, çift doğrulama, aylık faturalandırma |
| **Ambassador kontenjanı** | İlk yıl 50 Lipödem Elçisi |
| **Fraud önleme** | Telefon doğrulama, dönüşüm bazlı ödül, çift onay |
| **Etik kırmızı çizgi** | TL bazlı değil değer bazlı ödül, doktora komisyon yok |
| **Yıl 1 kümülatif referral LTV etkisi** | ~1.771.500 TL net pozitif |
