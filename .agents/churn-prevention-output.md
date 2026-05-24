# Lipödem Türkiye -- Kapsamlı Churn Önleme Stratejisi

**Tarih:** 24 Mayıs 2026
**Referans:** pricing-output.md, emails-output.md, onboarding-output.md, signup-output.md, product-marketing.md
**Ödeme:** iyzico (birincil), PayTR (ikincil)
**Planlar:** Temel Premium 79 TL/ay (699 TL/yıl) | Tam Premium 149 TL/ay (1.299 TL/yıl) | Kurucu 89 TL/ay (779 TL/yıl)
**Deneme:** 14 gün, kredi kartı gerekmez, Tam Premium erişimi
**Kapsam:** Churn risk modeli, iptal akışı, dunning, win-back, retention taktikleri, pause/downgrade, segment bazlı önleme, analytics/KPI

---

## İÇİNDEKİLER

1. [Churn Risk Modeli](#1-churn-risk-modeli)
2. [İptal Akışı Tasarımı](#2-i̇ptal-akışı-tasarımı)
3. [Dunning -- Başarısız Ödeme Recovery](#3-dunning----başarısız-ödeme-recovery)
4. [Win-Back Stratejisi](#4-win-back-stratejisi)
5. [Retention Taktikleri](#5-retention-taktikleri)
6. [Pause / Downgrade Seçenekleri](#6-pause--downgrade-seçenekleri)
7. [Segment Bazlı Churn Önleme](#7-segment-bazlı-churn-önleme)
8. [Analytics ve KPI'lar](#8-analytics-ve-kpilar)

---

## 1. Churn Risk Modeli

### 1.1 Erken Uyarı Sinyalleri

Lipödem platformuna özel churn sinyalleri -- her sinyal ağırlıklı risk puanı ile skorlanır:

| Sinyal | Risk Seviyesi | Ağırlık | Zaman Aralığı | Algılama Yöntemi |
|--------|:------------:|:-------:|:--------------:|-------------------|
| Login sıklığı %50+ düştü | Yüksek | 20 | Son 14 gün vs önceki 14 gün | Oturum verisi |
| Beslenme planı/egzersiz programı 10+ gün açılmadı | Yüksek | 18 | Son 10 gün | Sayfa görüntüleme |
| Toplulukta yazma durdu (aktif yazıcıysa) | Yüksek | 15 | Son 14 gün | Topluluk aktivitesi |
| Email açma oranı %50 altına düştü | Orta | 12 | Son 4 email | ESP verisi |
| İlerleme takibi kullanımı durdu | Orta | 12 | Son 14 gün | Araç kullanımı |
| Hesap/abonelik sayfasını ziyaret etti | Yüksek | 15 | Son 7 gün | Sayfa görüntüleme |
| "İptal" veya "fiyat" araması yaptı | Kritik | 20 | Anlık | Site arama logu |
| Uzman Q&A oturumuna katılmayı bıraktı | Orta | 10 | Son 2 ay | Etkinlik katılımı |
| NPS skoru 6 veya altı | Orta | 12 | Son anket | NPS verisi |
| Destek talebi açıp yanıt sonrası sessizleşti | Yüksek | 15 | Son 14 gün | Destek sistemi |
| 14 gün ard arda hiç giriş yok | Kritik | 25 | Son 14 gün | Oturum verisi |

### 1.2 Churn Risk Skoru Hesaplama

```typescript
interface ChurnRiskScore {
  score: number;         // 0-100
  level: 'low' | 'medium' | 'high' | 'critical';
  primarySignals: string[];
  recommendedAction: string;
  daysToChurn: number;   // tahmini
}

function calculateChurnRisk(user: PremiumUser): ChurnRiskScore {
  let score = 0;
  const signals: string[] = [];

  // Login frekansı düşüşü (max 20)
  const loginDropPct = calculateLoginDrop(user, 14);
  if (loginDropPct >= 50) { score += 20; signals.push('login_drop'); }
  else if (loginDropPct >= 30) { score += 10; signals.push('login_slowdown'); }

  // İçerik etkileşimi (max 18)
  const daysSinceContentUse = daysSince(user.lastContentAccess);
  if (daysSinceContentUse >= 10) { score += 18; signals.push('content_inactive'); }
  else if (daysSinceContentUse >= 5) { score += 9; signals.push('content_declining'); }

  // Topluluk aktivitesi (max 15)
  if (user.wasCommunityWriter && daysSince(user.lastCommunityPost) > 14) {
    score += 15; signals.push('community_silent');
  }

  // Email etkileşimi (max 12)
  if (user.emailOpenRate30d < 0.3) { score += 12; signals.push('email_cold'); }
  else if (user.emailOpenRate30d < 0.5) { score += 6; signals.push('email_cooling'); }

  // İlerleme takibi (max 12)
  if (user.usedProgressTracker && daysSince(user.lastProgressEntry) > 14) {
    score += 12; signals.push('progress_stalled');
  }

  // Abonelik sayfası ziyareti (max 15)
  if (user.visitedSubscriptionPage7d) {
    score += 15; signals.push('billing_page_visit');
  }

  // Arama sinyalleri (max 20)
  if (user.searchedCancelTerms7d) {
    score += 20; signals.push('cancel_search');
  }

  // Q&A katılım düşüşü (max 10)
  if (user.missedConsecutiveQA >= 2) {
    score += 10; signals.push('qa_disengaged');
  }

  // Toplam giriş yokluğu (max 25)
  if (daysSince(user.lastLogin) >= 14) {
    score += 25; signals.push('no_login_14d');
  } else if (daysSince(user.lastLogin) >= 7) {
    score += 12; signals.push('no_login_7d');
  }

  // Normalize (max 100)
  const normalizedScore = Math.min(score, 100);

  const level = normalizedScore < 25 ? 'low'
    : normalizedScore < 50 ? 'medium'
    : normalizedScore < 75 ? 'high'
    : 'critical';

  return {
    score: normalizedScore,
    level,
    primarySignals: signals,
    recommendedAction: getRecommendedAction(level, signals),
    daysToChurn: estimateDaysToChurn(normalizedScore),
  };
}
```

### 1.3 Risk Seviyeleri ve Müdahale Planı

| Skor | Seviye | Renk | Müdahale | Zamanlama |
|------|--------|------|----------|-----------|
| 0-24 | Dusuk (Sağlıklı) | Yeşil | Upsell/çapraz satış fırsatı, değer derinleştirme | Proaktif, opsiyonel |
| 25-49 | Orta (Dikkat) | Sarı | Proaktif check-in emaili, değer hatırlatma, yeni içerik bildirimi | 48 saat içinde |
| 50-74 | Yüksek (Risk) | Turuncu | Kişiselleştirilmiş müdahale kampanyası, in-app nudge + email | 24 saat içinde |
| 75-100 | Kritik | Kırmızı | Acil kişisel outreach (kurucu/destek ekibinden), özel save offer | Aynı gün |

### 1.4 Önerilen Aksiyon Matrisi

| Risk Seviyesi | Birincil Sinyal | Aksiyon |
|:-------------:|-----------------|---------|
| Orta | login_slowdown | "Yeni eklenen [X] özelliğini denediniz mi?" in-app banner |
| Orta | email_cooling | Konu satırı A/B testi, gönderim saati değişikliği |
| Yüksek | content_inactive | "Beslenme planınız güncellendi -- yeni haftanın menüsü" push + email |
| Yüksek | billing_page_visit | "Planınızla ilgili bir sorunuz mu var?" destek chat tetikle |
| Yüksek | community_silent | "Topluluktaki son 3 paylaşım -- sizi etiketlediler" bildirimi |
| Kritik | cancel_search | 1 ay ücretsiz uzatma teklifi (in-app modal) |
| Kritik | no_login_14d | Kişisel email (kurucu/ekip): "Yardımcı olabilir miyiz?" |
| Kritik | billing + cancel | Save offer hazırla, iptal akışında göster |

### 1.5 Otomatik Tetikleme Mimarisi

```
Her gün 04:00 TSİ → Cron job çalışır
    │
    ├── Tüm premium kullanıcılar için risk skoru hesapla
    │
    ├── Skor değişimi > 15 puan artış → Alert tetikle
    │
    ├── Skor = "Orta" → Otomatik email dizisi başlat
    │   └── retention_check_in dizisi (2 email, 7 gün)
    │
    ├── Skor = "Yüksek" → Otomatik email + in-app nudge
    │   └── retention_intervention dizisi (3 email + 2 nudge, 10 gün)
    │
    └── Skor = "Kritik" → Admin dashboard'da alarm + kişisel outreach task
        └── retention_critical dizisi (1 kişisel email + save offer, anında)
```

---

## 2. İptal Akışı Tasarımı

### 2.1 Genel Akış

```
Kullanıcı "Aboneliğimi İptal Et" tıklar (Hesap > Abonelik sayfasında)
    │
    ▼
ADIM 1: Çıkış Anketi (tek soru, zorunlu değil)
    │
    ▼
ADIM 2: Dinamik Save Offer (ankete göre kişiselleştirilmiş)
    │
    ▼
ADIM 3: Fallback Teklif (save offer kabul edilmediyse)
    │
    ▼
ADIM 4: İptal Onayı + Bilgilendirme
    │
    ▼
ADIM 5: Post-İptal Deneyimi (erişim + win-back tetikle)
```

### 2.2 Adım 1: Çıkış Anketi

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Üzgünüz, gitmeyi düşünüyorsunuz.                          │
│                                                             │
│  Ayrılma nedeninizi bilmemiz,                               │
│  platformu daha iyi yapmamıza yardımcı olur.                │
│                                                             │
│  En önemli nedeniniz hangisi?                               │
│                                                             │
│  ○ Fiyatı bütçeme uymuyor                                  │
│  ○ Yeterince kullanmıyorum / vakit bulamıyorum              │
│  ○ Aradığım içerik veya özellik eksik                      │
│  ○ Programımı / tedavimi tamamladığımı hissediyorum         │
│  ○ Teknik sorun yaşıyorum                                  │
│  ○ Geçici olarak durdurmak istiyorum                       │
│  ○ Diğer: [________________]                               │
│                                                             │
│  [Devam Et]                                                 │
│  [Vazgeçtim, üyeliğimi sürdürmek istiyorum]                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Anket tasarım kuralları:**
- Tek soru, tek seçim + opsiyonel serbest metin
- 7 neden seçeneği (en yaygınlar üstte)
- "Vazgeçtim" linki her zaman görünür -- baskı hissi yaratmaz
- Zorunlu değil -- atlanabilir ama teşvik edilir
- Lipödeme özel neden: "Programımı tamamladığımı hissediyorum" -- bu sağlık platformlarına özgü bir churn nedenidir

### 2.3 Adım 2: Dinamik Save Offer (Neden-Bazlı)

Her iptal nedenine özel, tek bir birincil teklif + bir yedek teklif:

| İptal Nedeni | Birincil Save Offer | Yedek Teklif |
|-------------|---------------------|-------------|
| **Fiyat/bütçe** | "Önümüzdeki 3 ay %30 indirimle devam edin" (Tam: 104 TL/ay, Temel: 55 TL/ay) | "Temel Premium'a geçin -- 79 TL/ay" (downgrade) |
| **Yeterince kullanmıyorum** | "Hesabınızı 3 aya kadar dondurun -- geri döndüğünüzde aynı fiyattan devam" | "Temel Premium'a geçin -- daha az içerik, daha düşük fiyat" |
| **Eksik özellik/içerik** | "Hangi özelliği eklememizi istersiniz? Yol haritamıza ekleyelim + 1 ay ücretsiz hediye" | "Geri bildiriminiz çok değerli -- bize yazın" |
| **Programı tamamladım** | "Lipödem kronik bir hastalıktır -- aylık uzman Q&A ve yeni içeriklerle yolculuğunuz devam ediyor. 1 ay ücretsiz deneyin" | "Temel Premium'a geçin -- topluluk + güncellemeler" |
| **Teknik sorun** | "Destek ekibimiz 24 saat içinde sorununuzu çözsün -- 1 ay ücretsiz uzatma" | "Sorununuzu bildirin: [destek formu linki]" |
| **Geçici durdurma** | "Hesabınızı 1-3 ay dondurun -- verileriniz korunur, geri döndüğünüzde aynı fiyat" | -- (zaten pause istiyorlar) |
| **Diğer** | "1 ay ücretsiz devam edin -- bize bir şans daha verin" | "Düşüncelerinizi paylaşın: [geri bildirim formu]" |

### 2.4 Adım 2 UI: Save Offer Ekranı

**Örnek: "Fiyat" seçildiğinde:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Bütçenize uygun bir çözümümüz var.                         │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  Özel Teklif: 3 Ay %30 İndirim                      │    │
│  │                                                     │    │
│  │  Mevcut fiyatınız: 149 TL/ay                        │    │
│  │  İndirimli fiyat: 104 TL/ay                         │    │
│  │                                                     │    │
│  │  3 ayda toplam tasarruf: 135 TL                     │    │
│  │                                                     │    │
│  │  Bu teklif sadece şu anda geçerlidir.               │    │
│  │                                                     │    │
│  │  [İndirimli Devam Et]                               │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Veya: Temel Premium'a geçin -- 79 TL/ay →                 │
│                                                             │
│  [Hayır, yine de iptal etmek istiyorum]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Örnek: "Yeterince kullanmıyorum" seçildiğinde:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  İptal etmek yerine dondurabilirsiniz.                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  Hesap Dondurma -- 1 ile 3 Ay                        │    │
│  │                                                     │    │
│  │  Ne kadar süre dondurmak istersiniz?                 │    │
│  │  ○ 1 ay                                             │    │
│  │  ○ 2 ay                                             │    │
│  │  ○ 3 ay                                             │    │
│  │                                                     │    │
│  │  Dondurma süresinde:                                │    │
│  │  ✓ Ücret alınmaz                                   │    │
│  │  ✓ Verileriniz korunur (beslenme planı, ilerleme)   │    │
│  │  ✓ Aynı fiyattan devam edersiniz                    │    │
│  │  ✓ Topluluk okuma erişimi devam eder                │    │
│  │                                                     │    │
│  │  [Hesabımı Dondur]                                  │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  [Hayır, yine de iptal etmek istiyorum]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Örnek: "Programımı tamamladım" seçildiğinde:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Programınızı tamamlamanız harika!                           │
│  Ama lipödem yolculuğunuz devam ediyor.                     │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  Lipödem kronik bir hastalıktır --                    │    │
│  │  devam eden yönetim önemlidir.                       │    │
│  │                                                     │    │
│  │  Premium üyeliğiniz hala sağladığı değer:            │    │
│  │                                                     │    │
│  │  ✓ Her ay güncellenen beslenme planları              │    │
│  │  ✓ Aylık uzman Q&A oturumları (yeni konular)        │    │
│  │  ✓ İlerleme takibi ile uzun vadeli trend analizi     │    │
│  │  ✓ Yeni eklenen egzersiz videoları                  │    │
│  │  ✓ Topluluk desteği ve mentor olma fırsatı          │    │
│  │                                                     │    │
│  │  1 ay ücretsiz uzatma -- devam edin, yeni            │    │
│  │  içerikleri keşfedin.                                │    │
│  │                                                     │    │
│  │  [1 Ay Ücretsiz Devam Et]                           │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  Veya: Temel Premium'a geçin -- 79 TL/ay →                 │
│                                                             │
│  [Hayır, yine de iptal etmek istiyorum]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.5 Adım 3: İptal Onay Ekranı

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Üyeliğinizi iptal etmek istediğinize emin misiniz?         │
│                                                             │
│  İptal ettiğinizde:                                         │
│  • Mevcut dönem sonuna kadar erişiminiz devam eder          │
│    (Son erişim tarihi: [tarih])                             │
│  • Kişisel beslenme planınız ve ilerleme verileriniz         │
│    90 gün saklanır -- geri dönerseniz devam edebilirsiniz   │
│  • Toplulukta okumaya devam edebilirsiniz                   │
│  • 90 gün içinde geri dönerseniz aynı fiyattan devam        │
│    edebilirsiniz                                            │
│                                                             │
│  [Evet, İptal Et]                    [Üyeliğimi Sürdür]     │
│                                                             │
│  "İptal Et" butonu: Düz metin link (gri)                    │
│  "Sürdür" butonu: Teal, dolgu, vurgulu                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**UI kuralları:**
- "İptal Et" her zaman erişilebilir -- asla gizlenmez (FTC Click-to-Cancel uyumu)
- "İptal Et" düz metin link (gri), "Sürdür" teal dolgu buton (ama her ikisi de net)
- Suçluluk duygusu yaratacak copy KULLANILMAZ ("Bizi terk mi ediyorsunuz?" gibi)
- Dönem sonu tarihi açıkça belirtilir
- 90 gün veri saklama ve fiyat koruma net olarak iletilir

### 2.6 Adım 4: Post-İptal Ekranı

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Üyeliğiniz iptal edildi.                                   │
│                                                             │
│  [tarih] tarihine kadar premium erişiminiz devam eder.      │
│                                                             │
│  Sizinle olan yolculuğumuz değerliydi.                      │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Bilmeniz gerekenler:                                │    │
│  │                                                     │    │
│  │  • Ücretsiz blog, semptom testi ve klinik bulucu     │    │
│  │    her zaman erişiminizde                            │    │
│  │  • Haftalık bülten devam eder (isterseniz)           │    │
│  │  • 90 gün içinde geri dönerseniz, verileriniz        │    │
│  │    ve fiyatınız korunur                              │    │
│  │  • Geri dönmek tek tıkla: /premium                   │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  [Ana Sayfaya Git]                                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 2.7 Save Offer Kuralları

| Kural | Detay |
|-------|-------|
| **Offer sıklığı** | Aynı kullanıcıya 6 ayda 1 kez indirim, 12 ayda 1 kez ücretsiz ay |
| **İndirim limiti** | Maksimum %30 indirim, maksimum 3 ay süre |
| **Ücretsiz ay limiti** | Maksimum 1 ay, 12 ayda 1 kez |
| **Pause limiti** | Maksimum 3 ay, 12 ayda 1 kez |
| **Kurucu üyeler** | Zaten indirimli oldukları için indirim yerine pause veya ücretsiz ay |
| **Yıllık aboneler** | İptal yerine kalan süre iade teklifi (prorated) |
| **Tekrar iptal** | 2. iptal girişiminde farklı (daha hafif) save offer, 3. iptal girişiminde offer yok |
| **Dark pattern yasağı** | "İptal et" butonu asla gizlenmez, küçültülmez veya erişilemez yapılmaz |
| **LTV takibi** | Save edilen kullanıcının 30/60/90 gün sonrası retention'ı izlenir |

### 2.8 Save Offer Performans Hedefleri

| Metrik | Hedef (İlk 6 Ay) | Hedef (Olgunluk) |
|--------|:-----------------:|:-----------------:|
| İptal akışına giren kullanıcıların save oranı | %20-25 | %30-35 |
| İndirim kabul oranı (fiyat nedeni) | %30-40 | %40-50 |
| Pause kabul oranı (kullanmıyorum nedeni) | %50-60 | %60-70 |
| Save edilen kullanıcının 90 gün retention | %50+ | %60+ |
| Anket tamamlama oranı | %60+ | %70+ |

---

## 3. Dunning -- Başarısız Ödeme Recovery

### 3.1 iyzico Başarısız Ödeme Yönetimi

iyzico recurring (tekrarlayan) ödeme sistemi ile entegre dunning stratejisi:

**Ödeme başarısızlık türleri:**

| Tür | iyzico Hata Kodu Grubu | Yeniden Deneme | Kullanıcı Aksiyonu |
|-----|----------------------|:--------------:|-------------------|
| **Yetersiz bakiye** (soft decline) | Insufficient funds | Otomatik retry | Bilgilendirme emaili |
| **Kart süresi dolmuş** (hard decline) | Expired card | Retry yok | Kart güncelleme isteği |
| **Kart blokeli / çalıntı** (hard decline) | Stolen/restricted | Retry yok | Yeni kart isteği |
| **3D Secure başarısız** | Auth failure | 1 kez retry | 3D Secure onay isteği |
| **İşlem limiti aşıldı** | Limit exceeded | Retry (1 gün sonra) | Banka bilgilendirme |
| **Teknik hata** (geçici) | Timeout / network | Otomatik retry | Bilgilendirme yok (sessiz) |

### 3.2 Otomatik Yeniden Deneme (Smart Retry) Takvimi

```
Ödeme başarısız (Gün 0)
    │
    ▼ (+6 saat)
Retry 1: Aynı gün akşam (19:00 TSİ)
    → Maaş/yatırım sonrası bakiye kontrolü
    │
    ▼ (+24 saat)
Retry 2: Gün 1
    → Yeni gün, farklı saat (14:00 TSİ)
    │
    ▼ (+72 saat)
Retry 3: Gün 3
    → Maaş yatırma günü yakınsa bekle
    │
    ▼ (+120 saat)
Retry 4: Gün 5
    → Son otomatik deneme
    │
    ▼
Retry 5: Gün 7 (isteğe bağlı, sadece soft decline için)
    → Final retry
    │
    ▼
Grace period sonu: Gün 10
    → Hesap dondurulur (iptal DEĞİL)
```

**Smart retry kuralları:**
- Hard decline (süresi dolmuş, blokeli): Retry yapma, direkt kart güncelleme isteği
- Soft decline (bakiye, limit): 5 retry, farklı saat ve günlerde
- Teknik hata: 3 retry, 1 saat aralıkla (sessiz)
- Türkiye'de maaş günleri: 1. ve 15. ayın günleri -- bu tarihlere yakın retry öne çek
- iyzico webhook ile ödeme durumu takibi: `/api/odeme/webhook`

### 3.3 Dunning Email Dizisi

| Email | Gönderim | Ton | Konu Satırı | İçerik |
|-------|---------|-----|-------------|--------|
| **D1** | Gün 0 (başarısızlık anı) | Arkadaşça bilgilendirme | "Ödemeniz işlenemedi -- kartınızı kontrol edin" | Ne oldu + tek tıkla kart güncelleme linki |
| **D2** | Gün 3 | Nazik hatırlatma | "Hatırlatma: Ödeme bilgilerinizi güncelleyin" | Erişim durumu + kart güncelleme + sorun giderme ipuçları |
| **D3** | Gün 5 | Aciliyet | "Premium erişiminiz 5 gün sonra dondurulacak" | Kayıp gösterimi (beslenme planı, ilerleme, topluluk) + kart güncelleme |
| **D4** | Gün 8 | Son uyarı | "Son 2 gün: Hesabınız dondurulmak üzere" | "Verileriniz 90 gün korunur ama erişim kapanır" + acil kart güncelleme |

### 3.4 Dunning Email 1 (D1) -- Tam Metin

**Gönderim:** Ödeme başarısızlığı anı (otomatik)
**Gönderici:** Lipödem Türkiye <bilgi@lipodemturkiye.com>
**Konu satırı A:** Ödemeniz işlenemedi -- kartınızı kontrol edin
**Konu satırı B:** [Ad], ödeme bilginizi güncellemeniz gerekiyor
**Preview text:** Tek tıkla güncelleyin, erişiminiz devam etsin

---

Merhaba [Ad],

[Plan adı] aboneliğinizin aylık/yıllık ödemesi işlenemedi. Endişelenmeyin -- kartınızdan herhangi bir ücret kesilmedi ve premium erişiminiz şu anda devam ediyor.

**Olası nedenler:**
- Kart bakiyesi yetersiz olabilir
- Kart süresi dolmuş olabilir
- Online alışveriş izni kapalı olabilir

**Çözüm basit -- ödeme bilgilerinizi güncelleyin:**

**[Kartımı Güncelle]**
CTA Buton: Teal (#0D9488), büyük
URL: /hesap/odeme/guncelle?token=[secure_token]&utm_source=email&utm_medium=dunning&utm_campaign=d1

Bu link sizi doğrudan kart güncelleme sayfanıza götürür. 30 saniye sürer.

Ödeme bilgilerinizi güncellemezseniz 10 gün sonra premium erişiminiz otomatik olarak dondurulur.

Sorun yaşarsanız bu emaile yanıt verin -- yardımcı olalım.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### 3.5 Dunning Email 3 (D3) -- Kayıp Gösterimi

**Gönderim:** Gün 5
**Konu satırı:** Premium erişiminiz 5 gün sonra dondurulacak

---

Merhaba [Ad],

Ödeme bilgileriniz henüz güncellenmedi. 5 gün sonra premium erişiminiz dondurulacak.

**Dondurulduğunda erişemeyeceğiniz:**

| Özellik | Şu an | Dondurulursa |
|---------|:-----:|:------------:|
| Kişisel beslenme planınız | Erişim var | Erişim kapanır |
| Egzersiz programınız | [X]. haftadasınız | İlerleme durur |
| Toplulukta yazma | Aktif | Sadece okuma |
| Uzman Q&A | Katılım hakkı | Erişim kapanır |
| İlerleme takibi | [X] kayıt | Yeni kayıt eklenemez |

**Verileriniz 90 gün korunur.** Ödeme güncellediğiniz anda her şey kaldığınız yerden devam eder.

**[Kartımı Şimdi Güncelle]**
CTA Buton: Teal (#0D9488), büyük
URL: /hesap/odeme/guncelle?token=[secure_token]&utm_source=email&utm_medium=dunning&utm_campaign=d3

Ödeme sorununuz teknik bir nedense bize yazın: destek@lipodemturkiye.com

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### 3.6 Kart Süresi Dolma Ön Uyarıları (Pre-Dunning)

| Email | Gönderim | Konu | İçerik |
|-------|---------|------|--------|
| **Ön uyarı 1** | Kart süresinden 30 gün önce | "Kartınızın süresi dolmak üzere" | Kart güncelleme linki, yeni kart ekleme |
| **Ön uyarı 2** | Kart süresinden 14 gün önce | "Hatırlatma: Kart bilgilerinizi güncelleyin" | Süresi dolan kart bilgisi + güncelleme linki |
| **Ön uyarı 3** | Kart süresinden 3 gün önce | "Son 3 gün: Kartınız sona eriyor" | Acil güncelleme + "sorun yaşarsanız destek" |

**iyzico ile entegrasyon:**
- iyzico API üzerinden kart son kullanma tarihi sorgulanır
- Otomatik cron job ile 30/14/3 gün öncesinde email tetiklenir
- Kullanıcı kart güncellediğinde ön uyarılar iptal edilir

### 3.7 Grace Period (Ek Süre) Politikası

| Parametre | Değer |
|-----------|-------|
| Grace period süresi | 10 gün |
| Grace period'da erişim | Tam premium erişim devam eder |
| Grace period sonunda | Hesap "dondurulur" (iptal DEĞİL) |
| Dondurma süresi | 90 gün -- bu sürede kart güncellerse anında aktifleşir |
| 90 gün sonra | Otomatik iptal + veri silme uyarısı |

### 3.8 Dunning Recovery Hedefleri

| Metrik | Hedef (İlk 6 Ay) | Hedef (Olgunluk) |
|--------|:-----------------:|:-----------------:|
| Soft decline recovery oranı | %55+ | %70+ |
| Hard decline recovery oranı | %20+ | %35+ |
| Ortalama recovery süresi | 4 gün | 3 gün |
| Pre-dunning önleme oranı | %15+ | %25+ |
| Involuntary churn toplam oranı | <%3 aylık | <%2 aylık |
| Dunning email açılma oranı | %50+ | %60+ |

---

## 4. Win-Back Stratejisi

### 4.1 İptal Sonrası Email Dizisi

İptal eden kullanıcılara 30/60/90 gün aralıklı win-back dizisi. Mevcut Dizi 6 (yeniden etkileşim) ile koordineli çalışır ama farklıdır -- Dizi 6 inaktif free kullanıcılar için, bu dizi iptal etmiş premium kullanıcılar içindir.

```
İptal anı
    │
    ├── Post-iptal onay emaili (anında) → bilgilendirme, geri dönüş kolaylığı
    │
    ├── 7 gün sonra → "Yeni eklenen özellik/içerik" emaili (değer hatırlatma)
    │
    ├── 30 gün sonra → Win-Back Email 1: Özel teklif + ilerleme hatırlatma
    │
    ├── 60 gün sonra → Win-Back Email 2: Yeni özellik + topluluk haberi
    │
    ├── 90 gün sonra → Win-Back Email 3: Son teklif + fiyat koruma hatırlatma
    │
    └── 90 gün sonra → Fiyat koruma süresi dolar, bilgilendirme
```

### 4.2 Win-Back Email 1 (Gün 30)

**Konu satırı A:** [Ad], sizi özledik -- özel bir teklifimiz var
**Konu satırı B:** Premium'a geri dönün, %25 indirimle başlayın
**Preview text:** 90 gün içinde verileriniz ve fiyatınız korunuyor

---

Merhaba [Ad],

Premium üyeliğinizi iptal edeli 1 ay oldu. Umarız iyisinizdir.

**Bu 1 ayda platformda neler oldu:**

- [X] yeni makale yayınlandı
- [X] yeni egzersiz videosu eklendi
- Toplulukta [X] yeni paylaşım yapıldı
- [Varsa: Yeni araç/özellik tanıtımı]
- Bu ayki uzman Q&A konusu: "[konu]"

**Verileriniz hala burada:**

Kişiselleştirilmiş beslenme planınız, egzersiz ilerlemeniz ve topluluk geçmişiniz 60 gün daha korunuyor. Geri dönerseniz kaldığınız yerden devam edebilirsiniz.

**Özel geri dönüş teklifi:**

Önümüzdeki 3 ay %25 indirimle devam edin:

| Plan | Normal Fiyat | İndirimli Fiyat (3 ay) |
|------|-------------|----------------------|
| Temel Premium | 79 TL/ay | **59 TL/ay** |
| Tam Premium | 149 TL/ay | **112 TL/ay** |

**[%25 İndirimle Geri Dönün]**
CTA Buton: Teal (#0D9488), büyük
URL: /premium/geri-don?offer=winback30&token=[token]&utm_source=email&utm_medium=winback&utm_campaign=30d

Bu teklif 7 gün geçerlidir.

Geri dönmeseniz bile, ücretsiz içeriklerimiz ve haftalık bültenimiz devam ediyor. Lipödem yolculuğunuzda her zaman buradayız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### 4.3 Win-Back Email 2 (Gün 60)

**Konu satırı A:** Yeni özellik: [özellik adı] -- siz de deneyin
**Konu satırı B:** [Ad], bu ay toplulukta neler oldu?
**Preview text:** Verileriniz 30 gün daha korunuyor

---

Merhaba [Ad],

Premium üyeliğinizden ayrılalı 2 ay oldu. Verileriniz (beslenme planı, ilerleme kaydı, topluluk geçmişi) 30 gün daha korunuyor. Sonra kalıcı olarak silinecek.

**Bu ay eklenen yeni özellik/içerik:**

[Dinamik blok -- gerçekten yeni eklenen en önemli özellik]

Örnek:
> **Yeni: Aylık Uzman Webinarı**
> Her ay farklı bir uzmanla derinlemesine oturum. Bu ayki konuk: [Uzman Adı] -- Konu: "[Konu]"
> Bu özellik Tam Premium abonelerine özeldir.

**Topluluktan haberler:**

> "[Hasta adı]: 'Beslenme planını 3 aydır uyguluyorum -- uyluk ağrım %40 azaldı. Bu topluluk olmasa başlayamazdım.'"

**Geri dönüş teklifi:**

İlk ay %30 indirim + verileriniz korunmuş olarak başlayın.

**[%30 İndirimle Geri Dönün]**
CTA Buton: Teal (#0D9488)
URL: /premium/geri-don?offer=winback60&token=[token]&utm_source=email&utm_medium=winback&utm_campaign=60d

Bu teklif 7 gün geçerlidir.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### 4.4 Win-Back Email 3 (Gün 90) -- Son Teklif

**Konu satırı A:** Son gün: Verileriniz ve fiyat korumanız sona eriyor
**Konu satırı B:** [Ad], lipödem yolculuğunuzda son bir teklif
**Preview text:** Bugün geri dönün, verilerinizi ve fiyatınızı koruyun

---

Merhaba [Ad],

Bu, win-back dizimizin son emaili.

**Bugün iki şey sona eriyor:**

1. **Veri koruma:** Kişisel beslenme planınız, egzersiz ilerlemeniz ve topluluk geçmişiniz bugün silinecek. Geri dönerseniz sıfırdan başlamanız gerekir.

2. **Fiyat koruma:** Eski fiyatınız (kurucu/lansman fiyatı) bugün geçerliliğini kaybeder. Geri dönerseniz güncel fiyat uygulanır.

**Son teklif:**

Bugün geri dönün -- ilk ay %40 indirim + verileriniz korunmuş olarak devam edin.

| Plan | Normal Fiyat | Son Teklif (1 ay) |
|------|-------------|------------------|
| Tam Premium | 149 TL/ay | **89 TL** (ilk ay) |
| Temel Premium | 79 TL/ay | **47 TL** (ilk ay) |

**[Son Fırsat: %40 İndirimle Geri Dönün]**
CTA Buton: Amber (#F59E0B), koyu metin, büyük
URL: /premium/geri-don?offer=winback90&token=[token]&utm_source=email&utm_medium=winback&utm_campaign=90d

Bu teklif bugün gece 23:59'da sona erer.

---

Geri dönmeseniz bile:
- Ücretsiz blog içeriklerimiz her zaman burada
- Haftalık bülten devam ediyor
- Semptom testi ve klinik bulucu ücretsiz
- lipodemturkiye.com her zaman açık

Lipödem yolculuğunuzda yanınızda olmak güzeldi. Ne zaman ihtiyaç duyarsanız, buradayız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### 4.5 Win-Back Teklif Kuralları

| Kural | Detay |
|-------|-------|
| Teklif eskalasyonu | 30 gün: %25, 60 gün: %30, 90 gün: %40 -- artan indirim |
| İndirim süresi | 30 gün: 3 ay, 60 gün: 1 ay, 90 gün: 1 ay |
| Teklif geçerliliği | Her teklif 7 gün geçerli (90. gün: 24 saat) |
| Tekrar iptal | Win-back ile geri dönen ve 30 gün içinde tekrar iptal eden: 12 ay win-back yok |
| Kurucu üyeler | Kurucu fiyatı korunur, ek indirim yok -- ama pause teklifi var |
| Email sıklığı | Win-back dizisinde max 4 email (7+30+60+90), arada başka email yok |

---

## 5. Retention Taktikleri

### 5.1 Değer Hatırlatma Sistemi

Kullanıcıya düzenli olarak aldığı değeri somutlaştıran hatırlatmalar:

**Haftalık Değer Özeti (Her Pazartesi, in-app dashboard):**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Bu hafta sizin için:                                       │
│                                                             │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐  │
│  │ Beslenme       │ │ Egzersiz       │ │ Topluluk       │  │
│  │ Planınız       │ │ Programınız    │ │                │  │
│  │ güncellendi    │ │ 5. haftada     │ │ 3 yeni         │  │
│  │ [Görüntüle]    │ │ [Devam Et]     │ │ paylaşım       │  │
│  └────────────────┘ └────────────────┘ │ [Keşfet]       │  │
│                                         └────────────────┘  │
│                                                             │
│  Bu ay toplam: 4 beslenme planı kullandınız,                │
│  12 egzersiz tamamladınız, 2 topluluk paylaşımı yaptınız.   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Aylık Değer Raporu (Email, her ayın 1. günü):**

```
Konu: [Ad], Ocak ayında neler başardınız?

Bu ay premium üyeliğinizle:
- 4 kişiselleştirilmiş beslenme planı aldınız
  (Piyasa değeri: ~2.000-4.000 TL diyetisyen danışmanlığı)
- 12 egzersiz videosu tamamladınız
- 1 uzman Q&A oturumuna katıldınız
- Toplulukta 5 paylaşım yaptınız, 23 yorum aldınız
- İlerleme takibinde 8 kayıt girdiniz

Aylık maliyetiniz: 149 TL
Piyasa karşılığı: ~4.000+ TL

"Günde 4,97 TL ile sağlığınıza yatırım yapıyorsunuz."
```

### 5.2 İlerleme Gösterimi (Milestone Kutlamaları)

| Milestone | Tetikleyici | Bildirim | Ödül |
|-----------|-------------|----------|------|
| İlk hafta tamamlandı | 7 gün premium | In-app confetti + email | "İlk haftanızı tamamladınız" rozeti |
| 30 gün aktif | 30 gün ard arda giriş | Email + dashboard banner | "Kararlı Başlangıç" rozeti |
| 10 egzersiz tamamlandı | 10. video tamamlama | In-app kutlama | "Hareket Ustası" rozeti + ilerleme paylaşma |
| 4 haftalık beslenme planı | 4 ardışık hafta plan kullanımı | Email | "Sağlıklı Alışkanlık" rozeti |
| İlk topluluk paylaşımı | İlk yazı | In-app tebrik | "Topluluk Sesi" rozeti |
| 3 aylık üye | 90 gün premium | Email + özel teklif | "Sadık Üye" rozeti + yıllık plan teklifi |
| 6 aylık üye | 180 gün premium | Email + kişisel teşekkür | "Lipödem Savaşçısı" rozeti + 1 ay hediye |
| 1 yıllık üye | 365 gün premium | Kişisel email (kurucu) | "Yıl Dönümü" rozeti + özel hediye |
| Mentor oldu | Mentor eşleştirme tamamlama | In-app + topluluk duyuru | "Mentor" rozeti |

### 5.3 Yeni İçerik Bildirimi

| İçerik Türü | Bildirim Kanalı | Zamanlama | Segment |
|-------------|----------------|-----------|---------|
| Yeni egzersiz videosu | In-app badge + push | Yayınlandığında | Tüm premium |
| Beslenme planı güncellendi | Dashboard banner | Her Pazartesi | İlgili evre |
| Yeni makale (premium) | Email + in-app | Yayınlandığında | İlgili konu |
| Uzman Q&A tarihi açıklandı | Email + takvim daveti | 7 gün önce | Tüm Tam Premium |
| Yeni hasta hikayesi | Haftalık bültende | Salı | Tüm üyeler |
| Platform güncellemesi | In-app banner | Güncelleme sonrası | Tüm üyeler |

### 5.4 Topluluk Bağlılık Güçlendirme

| Strateji | Uygulama | Churn Etkisi |
|----------|----------|:------------:|
| **Mentor eşleştirme** | Deneyimli hasta + yeni tanı alan eşleştirme | Mentor churn %60 azalır |
| **Evre grupları** | Aynı evredeki kadınların özel grubu | Grup üyeleri %40 daha az iptal |
| **Haftalık konu** | Her hafta moderatör tarafından başlatılan tartışma | Etkileşim %35 artar |
| **Başarı paylaşımı** | "Bu hafta benim başarım" formatı | Topluluk bağlılığı artar |
| **Uzman AMA** | Aylık "Bana Her Şeyi Sor" oturumu | Premium-only değer algısı |
| **Canlı destek grubu** | Aylık Zoom buluşması (opsiyonel) | Duygusal bağ oluşturur |

### 5.5 "Değer Kaybedeceksiniz" Hatırlatmaları (Etik Sınırlar Dahilinde)

Kullanıcı iptal sayfasına yaklaştığında veya risk skoru yükseldiğinde, kaybedeceği somut değeri hatırlatan in-app mesajlar:

```
Abonelik sayfası ziyaretinde (risk: billing_page_visit):

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Premium üyeliğinizle bu ay:                                │
│                                                             │
│  🍽 4 kişisel beslenme planı kullandınız                    │
│  🏋️ 12 egzersiz videosu tamamladınız                       │
│  📊 İlerleme: Uyluk çevresi -2 cm (3 ayda)                 │
│  💬 Toplulukta 8 yorum aldınız                              │
│                                                             │
│  Sorularınız mı var? [Destek ile Konuşun]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Kural:** Bu mesaj sadece 1 kez gösterilir. Baskı veya suçluluk duygusu yaratmaz. Somut veri gösterir.

---

## 6. Pause / Downgrade Seçenekleri

### 6.1 Hesap Dondurma (Pause)

| Parametre | Değer |
|-----------|-------|
| Minimum süre | 1 ay |
| Maksimum süre | 3 ay |
| Yıllık limit | 12 ayda 1 kez (1 kez dondurma hakkı) |
| Ücret | Dondurma süresince ücret alınmaz |
| Erişim | Premium kapanır, ücretsiz tier'a düşer |
| Veri koruma | Tüm veriler (beslenme planı, ilerleme, topluluk) korunur |
| Fiyat koruma | Aynı fiyattan devam (kurucu fiyatı dahil) |
| Otomatik açılma | Süre dolduğunda otomatik aktifleşme + 3 gün öncesinde email uyarısı |
| Erken açma | Kullanıcı istediğinde tek tıkla aktifleştirebilir |

### 6.2 Dondurma Akışı

```
Kullanıcı "Hesabımı Dondur" seçer
    │
    ▼
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Hesabınızı Ne Kadar Süre Dondurmak İstiyorsunuz?           │
│                                                             │
│  ○ 1 ay (en kısa)                                          │
│  ○ 2 ay                                                    │
│  ○ 3 ay (en uzun)                                          │
│                                                             │
│  Dondurma süresinde:                                       │
│  ✓ Ücret alınmaz                                           │
│  ✓ Beslenme planınız ve ilerleme verileriniz korunur        │
│  ✓ Toplulukta okumaya devam edebilirsiniz                  │
│  ✓ Haftalık bülten devam eder                              │
│  ✓ Süre dolduğunda aynı fiyattan otomatik devam            │
│                                                             │
│  ✗ Yeni beslenme planı / egzersiz videosu erişimi durur     │
│  ✗ Toplulukta yazma hakkı durur                            │
│  ✗ Uzman Q&A katılım hakkı durur                           │
│                                                             │
│  Aktifleşme tarihi: [hesaplanan tarih]                      │
│  3 gün öncesinde email ile hatırlatacağız.                  │
│                                                             │
│  [Hesabımı Dondur]                   [Vazgeç]               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
    │
    ▼
Onay ekranı → Hesap donduruldu emaili gönderilir
    │
    ▼
Aktifleşme -3 gün: "Hesabınız 3 gün sonra aktifleşiyor" emaili
    │
    ▼
Aktifleşme günü: Otomatik aktifleşme + hoşgeldin emaili
```

### 6.3 Dondurma Sonrası Re-Activation

| Gönderim | Email İçeriği |
|----------|---------------|
| Aktifleşme -3 gün | "Hesabınız [tarih] tarihinde aktifleşiyor. Yeni eklenen [X] özelliğini keşfetmeye hazır olun!" |
| Aktifleşme günü | "Tekrar hoş geldiniz! Beslenme planınız güncellendi, toplulukta [X] yeni paylaşım var. Kaldığınız yerden devam edin." |
| Aktifleşme +3 gün | "Geri dönüşünüz nasıl? Yardıma ihtiyacınız varsa buradayız." |

### 6.4 Plan Düşürme (Downgrade)

**Tam Premium (149 TL) --> Temel Premium (79 TL) geçiş:**

| Parametre | Değer |
|-----------|-------|
| Geçiş zamanı | Mevcut dönem sonunda |
| Fark iadesi | Yıllık planlarda kalan süre prorated iade (opsiyonel: kredi olarak) |
| Veri koruma | Beslenme planları ve ilerleme verileri korunur (okuma modu) |
| Kişiselleştirme | Kişisel beslenme planı yerine 3 şablon erişimi |
| Topluluk | Tam erişim devam eder (Temel'de de yazma var) |
| Uzman Q&A | Erişim kapanır |
| Video kütüphanesi | Erişim kapanır |
| Mentor eşleştirme | Erişim kapanır |
| Geri yükseltme | İstediği zaman tek tıkla Tam Premium'a geçiş |

**Downgrade akışı:**

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Temel Premium'a Geçiş                                      │
│                                                             │
│  Mevcut planınız: Tam Premium (149 TL/ay)                    │
│  Yeni planınız: Temel Premium (79 TL/ay)                     │
│  Tasarruf: Ayda 70 TL                                       │
│                                                             │
│  Koruyacaklarınız:                                          │
│  ✓ Topluluk erişimi (okuma + yazma)                         │
│  ✓ Premium makaleler                                       │
│  ✓ 3 beslenme şablonu                                      │
│  ✓ 4 haftalık egzersiz programı                            │
│  ✓ Detaylı semptom testi + PDF                             │
│  ✓ Email desteği (48 saat)                                 │
│                                                             │
│  Kaybedeceğiniz:                                            │
│  ✗ Kişiselleştirilmiş haftalık beslenme planı              │
│  ✗ 8 haftalık video rehberli egzersiz programı             │
│  ✗ Aylık uzman Q&A oturumu                                 │
│  ✗ Mentor eşleştirme ve özel evre grupları                 │
│  ✗ İlerleme takip araçları                                 │
│  ✗ Video kütüphanesi                                       │
│  ✗ Öncelikli destek                                        │
│                                                             │
│  Geçiş tarihi: [mevcut dönem sonu]                          │
│                                                             │
│  [Temel Premium'a Geç]              [Tam Premium'da Kal]    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 6.5 Pause/Downgrade vs İptal Karşılaştırması

| | Pause | Downgrade | İptal |
|---|:-----:|:---------:|:-----:|
| Ücret | 0 TL (dondurma) | 79 TL/ay | 0 TL |
| Veriler korunur | Evet | Evet (okuma) | 90 gün |
| Fiyat korunur | Evet | Evet | 90 gün |
| Topluluk | Okuma | Okuma + yazma | Okuma |
| Beslenme planı | Mevcut plan korunur | 3 şablon | Yok |
| Süre sınırı | Max 3 ay | Süresiz | Süresiz |
| Geri yükseltme | Otomatik | Tek tıkla | Yeniden abone ol |
| Hedef churn segmenti | "Kullanmıyorum", "Geçici" | "Fiyat", "Tamamladım" | Tüm nedenler (son çare) |

---

## 7. Segment Bazlı Churn Önleme

### 7.1 Segment 1: Deneme --> Ödeme Geçişi (Gün 0-14)

**Churn riski:** En yüksek -- deneme kullanıcılarının ~65-75%'i ödemeye geçmez.

| Risk Faktörü | Gösterge | Müdahale |
|-------------|----------|----------|
| Düşük aktivasyon | Gün 3'te semptom testi veya beslenme planı kullanılmamış | Push: "Beslenme planınız sizi bekliyor -- 2 dakikada oluşturun" |
| Tek özellik kullanımı | Sadece 1 araç kullanılmış | Email: "Henüz denemedikleriniz: [2. ve 3. en değerli özellik]" |
| Giriş yok | Gün 5'ten sonra hiç giriş yok | Email: "Denemenizin yarısı geçti -- kaçırdıklarınız" |
| Topluluk etkileşimi yok | Hiç topluluk ziyareti yok | In-app: "Toplulukta bu hafta [X] kadın [konu] hakkında konuştu" |
| Deneme sonu yaklaşıyor | Gün 11-14, ödeme yapılmamış | emails-output Dizi 5 (5.4 ve 5.5) devreye girer |

**Deneme --> ödeme dönüşümü için özel taktikler:**

1. **Erken değer teslimi:** İlk 48 saatte en az 1 "aha moment" yaşatma (beslenme planı oluşturma veya semptom testi tamamlama)
2. **İlerleme gösterimi:** Gün 7'de "7 günde neler başardınız" email (onboarding-output Dizi 5.3)
3. **Kayıp gösterimi:** Gün 11'de "deneme bittiğinde erişemeyeceğiniz" tablo (pricing-output iptal akışı)
4. **Kurucu üyelik aciliyeti:** Gün 14'te kurucu üyelik kalan kontenjan hatırlatma
5. **Post-deneme nurture:** Dönüşmeyen kullanıcıya 17. ve 30. günde win-back email (emails-output Dizi 5 post-deneme)

**Hedefler:**

| Metrik | Kötümser | Gerçekçi | İyimser |
|--------|:--------:|:--------:|:-------:|
| Deneme --> ödeme oranı | %20 | %30 | %40 |
| Deneme --> Tam Premium | %12 | %18 | %25 |
| Deneme --> Temel Premium | %8 | %12 | %15 |

### 7.2 Segment 2: Yeni Abone (Ay 1-3)

**Churn riski:** Yüksek -- ilk 90 gün en kritik dönem. "Buyer's remorse" ve "değer algılayamama" riskleri.

| Risk Faktörü | Gösterge | Müdahale |
|-------------|----------|----------|
| İlk hafta aktivasyon düşük | Gün 7'de 2'den az araç kullanımı | Onboarding checklist pulse + kişisel email |
| Beslenme planı takip edilmiyor | 2+ hafta plan görüntülenmemiş | "Bu haftanın menüsü güncellendi" push |
| Topluluk sessizliği | 30 gün yazma yok | "Topluluğa kendinizi tanıtın" nudge |
| İlerleme kaydı yok | 30 gün hiç kayıt girilmemiş | "İlk kaydınızı girin -- ilerlemenizi görün" |
| İlk Q&A'ya katılmama | İlk aylık Q&A'ya katılmamış | Q&A kaydı + "bu ayın konusu size özel" email |

**Ay 1-3 retention stratejileri:**

1. **30-60-90 check-in:** Her 30 günde otomatik "nasıl gidiyor?" email + in-app survey (1 soru NPS)
2. **Milestone kutlamaları:** 30 gün, 10 egzersiz, ilk topluluk paylaşımı (bkz. 5.2)
3. **Buddy sistemi:** Yeni aboneyi deneyimli bir üyeyle eşleştirme (Tam Premium)
4. **İlerleme paylaşımı:** 60. günde "ilk 2 ayınızın özeti" kişisel rapor emaili
5. **Yıllık plan teklifi:** 90. günde yıllık plana geçiş teklifi (%27 tasarruf vurgusu)

**Hedefler:**

| Metrik | Hedef |
|--------|:-----:|
| 30 gün retention | %80+ |
| 60 gün retention | %70+ |
| 90 gün retention | %60+ |
| Yıllık plana geçiş (3. ayda) | %15-20 |

### 7.3 Segment 3: Yerleşik Abone (Ay 3-6)

**Churn riski:** Orta -- alışkanlık oluşmuş ama "değer tükendi" hissi başlayabilir.

| Risk Faktörü | Gösterge | Müdahale |
|-------------|----------|----------|
| İçerik tüketimi düşüyor | Haftalık sayfa görüntüleme %40 azaldı | Yeni içerik serisi başlatma + bildirim |
| Egzersiz programı bitti | 8 haftalık program tamamlandı, yeni başlamadı | "İleri seviye program" veya "farklı egzersiz türü" önerisi |
| Rutinleşme | Aynı özellikleri kullanıyor, yeni keşif yok | "Hiç denediniz mi?" serisini başlat (az kullanılan özellikler) |
| Ödeme şikayeti | Fatura konulu destek talebi | Yıllık plana geçiş teklifi (fiyat düşüşü) |

**Ay 3-6 retention stratejileri:**

1. **İçerik yenileme:** Her ay en az 2 yeni premium makale, 1 yeni video
2. **Sezon bazlı programlar:** "Yaz programı", "Ramazan beslenme planı" gibi zamanlı içerik
3. **Topluluk rolü:** 3+ aylık üyelere "deneyimli üye" rozeti + yeni üyelere yardım etme fırsatı
4. **Kişisel ilerleme raporu:** 6. ayda kapsamlı ilerleme özeti emaili
5. **Yıllık plan push:** 6. ayda yıllık plana geçiş kampanyası ("geri kalan 6 ayı %27 indirimle tamamlayın")

**Hedefler:**

| Metrik | Hedef |
|--------|:-----:|
| 90 --> 180 gün retention | %75+ |
| Yıllık plana geçiş (6. ayda) | %25-30 |

### 7.4 Segment 4: Sadık Abone (6+ Ay)

**Churn riski:** Düşük ama kayıp etkisi yüksek (yüksek LTV).

| Risk Faktörü | Gösterge | Müdahale |
|-------------|----------|----------|
| Fiyat artışı tepkisi | Fiyat artışı sonrası abonelik sayfası ziyareti | Sadık üye indirimi veya yıllık plan kilidi |
| Yaşam değişikliği | Uzun süre inaktiflik (tatil, doğum vb.) | Otomatik pause önerisi |
| Platform yorgunluğu | Etkileşim yavaş yavaş azalıyor | Kişisel outreach (kurucu email) |
| Rekabet | Yeni platform/uygulama | Farklılaştırma vurgusu + exclusive içerik |

**6+ ay retention stratejileri:**

1. **VIP muamelesi:** Özel badge, erken erişim, kurucu toplantılarına davet
2. **Ambassador programı:** Sadık üyeleri platform elçisi yapma (her referans = 1 ay ücretsiz)
3. **Kişisel teşekkür:** 1 yıl dönümünde kurucu/ekipten kişisel video veya email
4. **Fiyat sabitleme:** 1+ yıllık üyelere fiyat artışlarından muafiyet teklifi
5. **İçerik katkısı:** Deneyimli üyelerin hasta hikayesi yazma, Q&A'da konuşma fırsatı

**Hedefler:**

| Metrik | Hedef |
|--------|:-----:|
| 6 ay+ retention (aylık) | %92+ |
| 12 ay+ retention (aylık) | %95+ |
| Ambassador dönüşüm oranı | %10-15 (sadık üyelerden) |

---

## 8. Analytics ve KPI'lar

### 8.1 Churn KPI Dashboard

#### Birincil Metrikler (Haftalık Takip)

| Metrik | Formül | Hedef (Lansman) | Hedef (6. Ay) | Hedef (12. Ay) |
|--------|--------|:---------------:|:--------------:|:---------------:|
| **Aylık brüt churn oranı** | Kaybedilen abone / Ay başı abone | <%8 | <%6 | <%5 |
| **Aylık net churn oranı** | (Kayıp MRR - Genişleme MRR) / Ay başı MRR | <%5 | <%3 | Negatif (net genişleme) |
| **Gönüllü churn** | İptal eden abone / Toplam abone | <%5 | <%4 | <%3 |
| **Zorunlu churn (involuntary)** | Ödeme hatası iptal / Toplam abone | <%3 | <%2 | <%1.5 |
| **Deneme dönüşüm oranı** | Ödeme yapan / Deneme başlatan | %25+ | %30+ | %35+ |
| **Save oranı (iptal akışı)** | Save edilen / İptal girişimi | %20+ | %28+ | %32+ |
| **Dunning recovery oranı** | Recover edilen / Toplam başarısız ödeme | %45+ | %55+ | %65+ |
| **Win-back oranı** | Geri dönen / İptal eden (90 gün) | %8+ | %12+ | %15+ |
| **Pause reactivation oranı** | Aktifleşen / Dondurulan | %60+ | %70+ | %75+ |

#### İkincil Metrikler (Aylık Takip)

| Metrik | Formül | Hedef |
|--------|--------|:-----:|
| **ARPU** | Toplam MRR / Aktif abone | >110 TL |
| **LTV** | ARPU / Aylık churn oranı | >1.800 TL |
| **Payback period** | CAC / ARPU | <3 ay |
| **Save edilen LTV** | Save edilen kullanıcının 90 gün sonrası katkısı | Ölçümle |
| **İptal nedeni dağılımı** | Her neden / toplam iptal | Trend takibi |
| **Ortalama abone ömrü** | 1 / Aylık churn oranı | >16 ay |

### 8.2 Cohort Analizi Yapısı

**Cohort boyutları:**

| Boyut | Değerler | Analiz Amacı |
|-------|----------|-------------|
| Kayıt ayı | Ay 0, Ay 1, Ay 2... | Zaman bazlı retention trend |
| Plan tipi | Temel Premium, Tam Premium, Kurucu | Plan bazlı churn karşılaştırma |
| Ödeme periyodu | Aylık, yıllık | Aylık vs yıllık churn farkı |
| Kayıt kanalı | Organik, email, sosyal, referral, reklam | Kanal bazlı kalite ölçümü |
| Onboarding tamamlama | <%25, %25-50, %50-75, %75-100 | Aktivasyon - retention korelasyonu |
| Deneme geçişi | Deneme --> ödeme, direkt ödeme | Deneme etkisi ölçümü |
| İptal nedeni | Fiyat, kullanım, özellik, tamamlama, geçici | Neden bazlı trend |
| Save teklifi | İndirim, pause, downgrade, ücretsiz ay | Teklif etkinliği |

**Cohort tablosu örneği:**

```
         Ay 0    Ay 1    Ay 2    Ay 3    Ay 6    Ay 12
Haziran  100%    82%     74%     68%     55%     40%
Temmuz   100%    85%     78%     72%     --      --
Agustos  100%    80%     70%     --      --      --
```

### 8.3 Tracking Events (Churn-Spesifik)

| Event | Parametre | Tetikleyici |
|-------|-----------|-------------|
| `churn_risk_score_change` | user_id, old_score, new_score, level, signals | Günlük hesaplama |
| `cancel_flow_start` | user_id, plan, tenure_days, engagement_score | İptal butonu tıklama |
| `cancel_survey_submit` | user_id, reason, free_text | Anket gönderme |
| `save_offer_show` | user_id, offer_type, reason | Save offer gösterimi |
| `save_offer_accept` | user_id, offer_type, discount_pct, duration | Teklif kabul |
| `save_offer_decline` | user_id, offer_type | Teklif ret |
| `cancel_confirm` | user_id, plan, tenure_days, reason, mrr_lost | İptal onay |
| `pause_start` | user_id, duration_months, plan | Hesap dondurma |
| `pause_reactivate` | user_id, days_paused, reactivation_type (auto/manual) | Pause sonrası aktifleşme |
| `downgrade_complete` | user_id, old_plan, new_plan, mrr_change | Plan düşürme |
| `winback_email_open` | user_id, email_day (30/60/90) | Win-back email açma |
| `winback_offer_accept` | user_id, offer_day, discount_pct | Win-back teklif kabul |
| `winback_resubscribe` | user_id, days_since_cancel, plan, offer_used | Geri dönüş |
| `dunning_email_send` | user_id, email_number (d1-d4), decline_type | Dunning email gönderimi |
| `dunning_card_update` | user_id, days_since_failure | Kart güncelleme |
| `dunning_recovery` | user_id, days_to_recover, retry_count | Başarılı recovery |
| `dunning_hard_cancel` | user_id, days_in_grace, decline_type | Grace period sonrası iptal |

### 8.4 A/B Test Öncelikleri (Churn)

| # | Test | Hipotez | Metrik | Öncelik |
|---|------|---------|--------|:-------:|
| 1 | **Save offer: %20 vs %30 indirim** | %30 indirim save oranını artırır ama LTV etkisi test edilmeli | Save rate, 90-day retention, LTV | P0 |
| 2 | **Pause süresi: 1-2-3 ay vs sabit 3 ay** | Seçenek sunma reactivation oranını artırır | Reactivation rate | P0 |
| 3 | **Anket: Zorunlu vs opsiyonel** | Zorunlu anket save offer kişiselleştirmesini iyileştirir ama iptal sürtünmesi artabilir | Save rate, anket tamamlama | P1 |
| 4 | **Win-back zamanlama: 14/30/60 vs 30/60/90 gün** | Erken win-back daha yüksek geri dönüş | Win-back rate | P1 |
| 5 | **Dunning email tonu: Empatik vs doğrudan** | Empatik ton sağlık platformuna daha uygun | Recovery rate, card update rate | P1 |
| 6 | **Değer raporu: Aylık vs çeyreklik** | Aylık rapor churn'u azaltır | Monthly churn rate | P2 |
| 7 | **Milestone kutlama: Var vs yok** | Kutlama bağlılık artırır | 90-day retention | P2 |
| 8 | **Save offer sunumu: Modal vs full-page** | Full page daha yüksek dikkat | Save rate | P2 |

### 8.5 Raporlama Takvimi

| Rapor | Sıklık | İçerik | Alıcı |
|-------|--------|--------|-------|
| **Churn Günlük Alert** | Günlük (04:30 TSİ) | Kritik risk skoru artışları, dünkü iptaller | Kurucu / Ekip |
| **Haftalık Churn Özeti** | Pazartesi 09:00 | Haftalık churn oranı, save oranı, dunning recovery, win-back | Kurucu / Ekip |
| **Aylık Churn Analizi** | Her ayın 3'ü | Cohort analizi, neden dağılımı, LTV trendi, A/B test sonuçları | Kurucu / Yönetim |
| **Çeyreklik Churn Stratejisi** | 3 ayda 1 | Fiyat revizyon önerisi, save offer optimizasyonu, segment trendi | Kurucu / Strateji |

---

## UYGULAMA ÖNCELİK SIRASI

| Öncelik | Bileşen | Tahmini Süre | Bağımlılık |
|:-------:|---------|:------------:|------------|
| P0 | İptal akışı (anket + save offer + onay) | 3 gün | Abonelik sistemi (signup-output) |
| P0 | Dunning email dizisi (4 email) | 2 gün | iyzico webhook, email sistemi |
| P0 | iyzico retry mekanizması | 2 gün | iyzico API entegrasyonu |
| P0 | Kart süresi ön uyarı emaileri | 1 gün | iyzico kart verisi |
| P1 | Churn risk skoru hesaplama (cron) | 3 gün | Analytics altyapısı |
| P1 | Win-back email dizisi (4 email) | 2 gün | Email sistemi |
| P1 | Pause (dondurma) akışı | 2 gün | Abonelik sistemi |
| P1 | Downgrade akışı | 1 gün | Plan yönetimi |
| P1 | Değer raporu emaili (aylık) | 1 gün | Kullanıcı aktivite verisi |
| P2 | Milestone kutlama sistemi | 2 gün | Onboarding checklist (onboarding-output) |
| P2 | In-app retention nudge'lar | 2 gün | Risk skoru, nudge sistemi |
| P2 | Admin churn dashboard | 2 gün | Analytics |
| P3 | A/B test altyapısı (save offer) | 1 gün | PostHog / feature flags |
| P3 | Cohort analiz aracı | 1 gün | Analytics pipeline |
| P3 | Ambassador program altyapısı | 2 gün | Referral sistemi |

**Toplam tahmini süre:** ~27 gün geliştirme

---

## BAĞLANTI HARİTASI

| Bu Çıktı | Bağlı Olduğu Çıktılar |
|----------|----------------------|
| İptal akışı | pricing-output.md (iptal politikası, plan yapısı) |
| Dunning | signup-output.md (iyzico entegrasyonu, ödeme akışı) |
| Win-back email dizisi | emails-output.md (Dizi 5 post-deneme, Dizi 6 yeniden etkileşim) |
| Risk skoru | onboarding-output.md (engagement score, checklist) |
| Save offer fiyatları | pricing-output.md (plan fiyatları, indirim politikası) |
| Retention taktikleri | onboarding-output.md (nudge sistemi, tooltip) |
| Topluluk bağlılığı | community-marketing-output.md |
| Analytics | analytics-output.md (event tracking, funnel) |
| Değer raporu | cro-output.md (dönüşüm metrikleri) |

---

## KAYNAK VE REFERANSLAR

### Churn Benchmark'lar
- B2C SaaS ortalama aylık churn: %5-7 (ProfitWell, 2025)
- Sağlık/wellness SaaS churn: %6-10 aylık (Recurly Research)
- İyi cancel flow save oranı: %25-35 (Churnkey 2025 benchmark)
- Dunning recovery ortalaması: %50-60 (Stripe Smart Retries 2025)
- Pause reactivation oranı: %60-80 (ProfitWell)

### Türk Pazarı Özel Notlar
- Türkiye'de kart süresi dolma oranı yüksek (sık kart yenileme)
- iyzico "Korumalı Ödeme" güven rozeti kart güncelleme sayfasında gösterilmeli
- Taksitli yıllık planlar involuntary churn'ü azaltır (tek seferde yüksek tutar yerine)
- Türk tüketicisi "hesap dondurma" konseptine aşina (GSM operatörlerinden)
- Ramazan ve yaz tatili dönemleri pause taleplerini artırır -- proaktif teklif
- Ekonomik dalgalanma dönemlerinde fiyat hassasiyeti artar -- downgrade teklifi öne çıkar
