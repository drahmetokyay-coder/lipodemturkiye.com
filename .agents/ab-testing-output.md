# Lipödem Türkiye -- A/B Test Cercevesi ve Deney Planı

**Tarih:** 24 Mayıs 2026
**Referanslar:** cro-output.md, onboarding-output.md, popups-output.md, analytics-output.md, signup-output.md, emails-output.md, pricing-output.md
**Kapsam:** Deney kültürü, teknik altyapı, istatistiksel metodoloji, konsolidasyonlu deney backlog (30+ deney), 90 gün takvim, sayfa bazlı test planı, email A/B testleri, raporlama sablonu, KPI'lar

---

## ICINDEKILER

1. [Deney Kültürü ve Cerceve](#1-deney-kültürü-ve-cerceve)
2. [Teknik Altyapı](#2-teknik-altyapı)
3. [Istatistiksel Metodoloji](#3-istatistiksel-metodoloji)
4. [Konsolidasyonlu Deney Backlog (30+ Deney)](#4-konsolidasyonlu-deney-backlog)
5. [Ilk 90 Gün Deney Takvimi](#5-ilk-90-gün-deney-takvimi)
6. [Sayfa Bazlı Test Planı](#6-sayfa-bazlı-test-planı)
7. [Email A/B Test Planı](#7-email-ab-test-planı)
8. [Deney Raporlama Sablonu](#8-deney-raporlama-sablonu)
9. [Deney KPI'ları ve Basarı Metrikleri](#9-deney-kpıları-ve-basarı-metrikleri)

---
---

## 1. Deney Kültürü ve Cerceve

### 1.1 Deney Felsefesi

Lipödem Türkiye, sağlık platformu olarak hassas bir kitleye hizmet etmektedir. Deney programı su ilkelere dayanır:

| Ilke | Açıklama |
|------|----------|
| **Hasta güvenliği öncelikli** | Hiçbir test hasta güvenini, gizliliğini veya duygusal refahını riske atmaz |
| **Etik sınırlar** | Ruh sağlığı sayfasında agresif test yapılmaz; sağlık bilgisi doğruluğu test edilmez |
| **Veri odaklı kararlar** | "Hissediyorum" yerine "veri gösteriyor" -- her karar istatistiksel kanıta dayanır |
| **Hızlı öğrenme döngüsü** | Haftalık 1-2 eşzamanlı test; sonuçlar 48 saat içinde raporlanır |
| **Kaybedenler de kazanır** | Her "başarısız" test, kullanıcı davranışı hakkında değerli bilgi üretir |
| **Dokümantasyon zorunluluğu** | Her test hipotezden sonuca kadar kayıt altına alınır |

### 1.2 Hipotez Formatı

Her deney su formatta yazılır:

```
HIPOTEZ FORMATI:

"Eğer [değişken/değişiklik] yaparsak,
[hedef kitle] için
[birincil metrik] %[beklenen etki] [artacak/azalacak],
çünkü [davranışsal gerekçe / psikolojik ilke]."

Örnek:
"Eğer ana sayfa hero CTA metnini 'Bacaklarınızda Neler Olduğunu 2 Dakikada Öğrenin'
olarak değiştirirsek,
lipödem şüphesi olan yeni ziyaretçiler için
semptom testi başlama oranı %15-20 artacak,
çünkü sonuç odaklı mesaj (curiosity gap) eylem odaklı mesaja göre
daha güçlü motivasyon yaratır."
```

### 1.3 ICE Skorlama Sistemi

Her deney üç boyutta 1-10 arasında skorlanır:

| Boyut | Soru | 1-3 (Düsük) | 4-6 (Orta) | 7-10 (Yüksek) |
|-------|------|-------------|------------|----------------|
| **Impact (Etki)** | Kazanırsa gelire/dönüsüme ne kadar etki eder? | Mikro-iyilestirme, niş sayfa | Orta trafikli sayfa, tek metrik | Ana sayfa, funnel darboğazı, çoklu metrik |
| **Confidence (Güven)** | Hipotezin doğru olacağına ne kadar güveniyoruz? | Sezgisel, veri yok | Dolaylı veri, benzer test sonuçları | Kullanıcı araştırması, heatmap verisi, doğrudan kanıt |
| **Ease (Kolaylık)** | Implementasyon ne kadar kolay? | 3+ gün gelistirme, backend | 1-2 gün, frontend + config | Saatler içinde, copy/config değişikliği |

**ICE Skoru = Impact x Confidence x Ease**

| ICE Aralığı | Öncelik | Aksiyon |
|-------------|---------|---------|
| 500+ | P0 -- Hemen | Bu sprint'te başla |
| 350-499 | P1 -- Yakında | Sonraki 2 sprint içinde |
| 200-349 | P2 -- Planlı | Backlog'da, sıra geldiğinde |
| <200 | P3 -- Park | Kaydet ama şu an değil |

### 1.4 Deney Süreci (7 Adım)

```
1. HIPOTEZ OLUSTUR
   ↓ Hipotez formatında yaz, ICE skoru ver
2. TASARLA
   ↓ Varyantları tanımla, metrikleri belirle, örneklem hesapla
3. GÖZDEN GEÇIR
   ↓ Etik kontrol (sağlık hassasiyeti), teknik fizibilite
4. IMPLEMENT ET
   ↓ Feature flag ile deploy, QA kontrol
5. ÇALIŞTIR
   ↓ Min 7 gün, erken durdurma yok (peeking yasağı)
6. ANALIZ ET
   ↓ Istatistiksel anlamlılık kontrolü, segment analizi
7. KARARI UYGULA
   ↓ Kazanan: implement et | Beraberlik: kontrol kalır | Yeni test planla
```

### 1.5 Deney Yönetisim Kuralları

| Kural | Detay |
|-------|-------|
| **Eşzamanlı test limiti** | Aynı anda max 3 test (trafik bölme sorunu önlenir) |
| **Aynı sayfada çakışma** | Aynı sayfada aynı anda max 1 test (interaksiyon etkisi) |
| **Minimum süre** | 7 gün (hafta günü etkisini kapsar) |
| **Maksimum süre** | 28 gün (sonuçsuz kalırsa durdur, öğrenimlerini kaydet) |
| **Erken durdurma** | YASAK -- tam süre tamamlanmadan karar alınmaz |
| **Peeking yasağı** | Test süresince ara sonuçlara bakıp karar değiştirilmez |
| **Segment analizi** | Her test mobil vs desktop, yeni vs dönen ziyaretçi segmentlerinde ayrıca incelenir |
| **Winner implementasyonu** | Kazanan varyant 48 saat içinde %100 trafik alır |
| **Dokümantasyon** | Her test sonucu `.agents/experiments/` klasörüne kaydedilir |

---
---

## 2. Teknik Altyapı

### 2.1 Araç Seçimi: PostHog (Önerilen)

| Araç | Avantaj | Dezavantaj | Karar |
|------|---------|------------|-------|
| **PostHog** | Feature flags + A/B test + analytics tek araçta; self-hosted opsiyonu; Türkiye KVKK uyumu; ücretsiz tier yeterli | Öğrenme eğrisi | **Birincil seçim** |
| **Vercel Edge Config** | Vercel native, ultra-hızlı feature flags | A/B test ve istatistik yok, sadece flag | Feature flag fallback |
| **GA4 + Optimize** | GA4 zaten var, entegre | Google Optimize kapandı; Optimize yerine geçen yok | Kullanılmaz |
| **Custom çözüm** | Tam kontrol | Geliştirme maliyeti yüksek, istatistik riski | Son çare |

### 2.2 PostHog Entegrasyonu (Next.js 15 + Vercel)

```
Mimari:

[Kullanıcı] → [Next.js App] → [PostHog JS SDK (client)]
                                    ↓
                              [PostHog Cloud / Self-hosted]
                                    ↓
                              [Feature Flags]
                              [A/B Test Engine]
                              [Analytics Events]
                              [Session Replay (opsiyonel)]
```

**Kurulum:**

```typescript
// lib/posthog.ts
import posthog from 'posthog-js'

export function initPostHog() {
  if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
      capture_pageview: false, // Next.js App Router ile manuel
      capture_pageleave: true,
      persistence: 'localStorage+cookie',
      person_profiles: 'identified_only',
      // KVKK: Avrupa sunucusu kullan
    })
  }
}
```

```typescript
// app/providers.tsx
'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { initPostHog } from '@/lib/posthog'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    initPostHog()
  }, [])

  useEffect(() => {
    if (pathname) {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
      })
    }
  }, [pathname, searchParams])

  return <PHProvider client={posthog}>{children}</PHProvider>
}
```

### 2.3 Feature Flag Yapısı

```typescript
// lib/experiments.ts
import posthog from 'posthog-js'

// Feature flag isimlendirme konvansiyonu:
// exp-[alan]-[kısa-açıklama]-[tarih]
// Örnek: exp-hero-cta-text-2406

export function getExperimentVariant(experimentKey: string): string | boolean {
  return posthog.getFeatureFlag(experimentKey) ?? 'control'
}

// Kullanım:
// const variant = getExperimentVariant('exp-hero-cta-text-2406')
// if (variant === 'test') { /* Test varyantını göster */ }
```

**Flag isimlendirme kuralları:**

| Prefix | Kullanım | Örnek |
|--------|----------|-------|
| `exp-` | A/B test (geçici) | `exp-hero-cta-text-2406` |
| `ff-` | Feature flag (kalıcı) | `ff-premium-paywall-v2` |
| `rollout-` | Kademeli yayın | `rollout-clinic-reviews` |

### 2.4 Server-Side vs Client-Side Testler

| Test Tipi | Yöntem | Ne Zaman |
|-----------|--------|----------|
| **Copy değişikliği** | Client-side (PostHog JS) | CTA metni, başlık, alt metin |
| **Layout değişikliği** | Server-side (PostHog Node SDK + Next.js middleware) | Sayfa yapısı, bölüm sıralaması |
| **Redirect testi** | Edge middleware | Farklı sayfa versiyonları |
| **Fiyat testi** | Server-side | Fiyat kartı sıralaması |

**Flickering (titresim) önleme:**

```typescript
// middleware.ts -- Server-side A/B test
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // PostHog cookie'den varyant al veya ata
  const variant = request.cookies.get('exp-hero-cta')?.value
    || (Math.random() < 0.5 ? 'control' : 'test')
  
  const response = NextResponse.next()
  
  if (!request.cookies.has('exp-hero-cta')) {
    response.cookies.set('exp-hero-cta', variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 gün
      httpOnly: false,
      sameSite: 'lax',
    })
  }
  
  // Header ile varyant bilgisini sayfaya ilet
  response.headers.set('x-experiment-variant', variant)
  
  return response
}
```

### 2.5 KVKK Uyumu

| Gereksinim | Uygulama |
|------------|----------|
| Rıza | PostHog init sadece cookie onayı alındıktan sonra |
| Veri minimizasyonu | Yalnızca deney için gerekli event'ler toplanır |
| Anonimlik | Kayıtlı olmayan kullanıcılar anonim ID ile izlenir |
| Sunucu konumu | PostHog EU instance (eu.posthog.com) |
| Veri saklama | Event verileri max 12 ay |
| Silme hakkı | PostHog API ile kullanıcı verisi silinebilir |
| Aydınlatma | Gizlilik politikasında A/B test açıklaması |

---
---

## 3. Istatistiksel Metodoloji

### 3.1 Temel Parametreler

| Parametre | Değer | Gerekçe |
|-----------|-------|---------|
| **Güven düzeyi** | %95 (alpha = 0.05) | Endüstri standardı; sağlık platformu için yeterli |
| **Istatistiksel güç** | %80 (beta = 0.20) | Yanlış negatif riski %20 ile sınırlı |
| **MDE (Minimum Detectable Effect)** | %15-20 (relatif) | Düşük trafik döneminde; trafik arttıkça %10'a düşürülecek |
| **Tek/Çift kuyruk** | Çift kuyruk (two-tailed) | Her iki yönde etkiyi tespit et |
| **Çoklu karşılaştırma düzeltmesi** | Bonferroni (3+ varyant varsa) | Yanlış pozitif şişmesini önle |

### 3.2 Frequentist vs Bayesian Yaklaşım

| Parametre | Frequentist | Bayesian |
|-----------|-------------|----------|
| **Ne zaman** | Birincil karar testleri (CTA, layout, fiyat) | Keşif testleri, düşük trafikli sayfalar |
| **Araç** | PostHog (chi-squared / z-test) | PostHog Bayesian engine |
| **Karar kriteri** | p < 0.05 VE MDE aşıldı | %95+ "better than control" olasılığı |
| **Avantaj** | Kanıtlanmış, anlaşılır | Erken bilgi, küçük örneklemde daha esnek |
| **Dezavantaj** | Büyük örneklem gerektirir | Yorum zorluğu |

**Karar: Hibrit yaklaşım**
- **Hafta 1-8 (düşük trafik):** Bayesian -- küçük örneklemde bile bilgi verir
- **Hafta 9+ (trafik arttıkça):** Frequentist -- daha kesin kararlar

### 3.3 Minimum Örneklem Hesaplama

**Formül (Frequentist):**

```
n = (Z_alpha/2 + Z_beta)^2 * (p1*(1-p1) + p2*(1-p2)) / (p1-p2)^2

Burada:
- Z_alpha/2 = 1.96 (%95 güven)
- Z_beta = 0.84 (%80 güç)
- p1 = kontrol dönüşüm oranı
- p2 = beklenen test dönüşüm oranı
```

**Pratik örneklem tablosu (varyant başına):**

| Kontrol Oranı | MDE %15 | MDE %20 | MDE %25 | MDE %30 |
|---------------|---------|---------|---------|---------|
| %5 | 4.680 | 2.650 | 1.710 | 1.200 |
| %10 | 3.940 | 2.230 | 1.440 | 1.010 |
| %15 | 3.370 | 1.910 | 1.230 | 870 |
| %20 | 2.890 | 1.640 | 1.060 | 750 |
| %30 | 2.050 | 1.170 | 760 | 540 |

**Lipödem Türkiye için pratik rehber:**

| Trafik senaryosu | Aylık ziyaretçi | Test başına süre (MDE %20) | Eşzamanlı test |
|------------------|-----------------|---------------------------|----------------|
| Lansman ayı (Ay 1) | 5.000 | 3-4 hafta | 1-2 |
| Büyüme (Ay 2-3) | 10.000-15.000 | 2-3 hafta | 2-3 |
| Olgunluk (Ay 6+) | 30.000+ | 1-2 hafta | 3-4 |

### 3.4 Örneklem Kalitesi Kuralları

| Kural | Açıklama |
|-------|----------|
| **Randomizasyon** | Kullanıcı bazlı (user-level), oturum bazlı değil |
| **Tutarlılık** | Aynı kullanıcı her ziyarette aynı varyantı görür (cookie/ID bazlı) |
| **Yeni kullanıcı filtresi** | Test başlamadan önce siteye gelen kullanıcılar hariç tutulur |
| **Bot filtresi** | Bilinen botlar ve crawler'lar hariç tutulur |
| **Hafta günü etkisi** | Minimum 7 gün çalıştırma (hafta sonu vs hafta içi farkı) |
| **Seasonal etki** | Kongre/bayram dönemlerinde yeni test başlatılmaz |
| **Sample Ratio Mismatch (SRM)** | 50/50 bölmede %48-52 arası kabul edilir; dışında veri kalitesi sorgulanır |

### 3.5 Erken Durdurma ve Peeking Politikası

```
KESIN KURAL: Test süresi dolmadan istatistiksel karar alınmaz.

ISTISNALAR (yalnızca bu 3 durumda erken durdurma):
1. Ciddi UX hatası: Bir varyant %50+ bounce rate artışına neden oluyorsa
2. Teknik sorun: Tracking çalışmıyor, varyant düzgün render edilmiyor
3. Etik ihlal: Kullanıcıdan olumsuz geri bildirim, sağlık kaygısı

Bu istisnalar dışında PEEKING YAPILMAZ.
Ara sonuçlara bakıp "zaten kazanan belli" denilmez.
PostHog dashboard'a test bitene kadar sadece teknik kontrol amaçlı bakılır.
```

---
---

## 4. Konsolidasyonlu Deney Backlog

### 4.1 Tüm Kaynaklardan Toplanan Deneyler (ICE Skoruna Göre Sıralı)

Asağıdaki backlog, cro-output.md (10 test), onboarding-output.md (8 test), popups-output.md (3 test), signup-output.md (5 test) ve yeni eklenen testlerden olusturulmustur.

| # | Test Adı | Kaynak | Hipotez | Birincil Metrik | Varyant A (Kontrol) | Varyant B (Test) | ICE | Öncelik |
|---|----------|--------|---------|-----------------|---------------------|------------------|-----|---------|
| 1 | Email form yapısı (tek vs çift alan) | CRO | Tek alanlı form (email) çift alanlıya göre daha yüksek dönüşüm | Email kayıt oranı | Tek alan: email | Iki alan: ad + email | 640 | P0 |
| 2 | Semptom testi CTA metni (hero) | CRO | Sonuç odaklı CTA (curiosity gap) daha fazla test başlatma | Semptom testi başlama oranı | "2 Dakikalık Semptom Testini Çöz" | "Bacaklarınızda Neler Olduğunu 2 Dakikada Öğrenin" | 567 | P0 |
| 3 | Kayıt layout: Google-first vs Email-first | Signup | Google üstte layout daha yüksek kayıt oranı | signup_complete rate | Google üstte | Email üstte, Google altta | 504 | P0 |
| 4 | Premium anchoring (fiyat karşılaştırma) | CRO | Diyetisyen fiyat karşılaştırması dönüşümü artırır | Premium deneme başlatma | Fiyat kartları direkt | Anchoring + fiyat kartları | 441 | P0 |
| 5 | Semptom testi sonuç CTA metni | CRO | "PDF Olarak Indir" ifadesi "Email ile Al"a göre daha yüksek dönüşüm | Email kayıt oranı (test sonrası) | "Sonuçlarımı PDF Olarak Indir" | "Raporumu Email ile Al" | 432 | P0 |
| 6 | Signup güven mesajı | Signup | "Sifre yok" mesajı form başlatma oranını artırır | signup_form_start rate | Güven mesajı yok | "Sifre yok, email ile güvenli giris" | 420 | P1 |
| 7 | Sticky CTA bar gösterim zamanı | CRO | %25 scroll'da gösterim %50'ye göre daha etkili | Sticky bar CTA tıklama | %25 scroll'da görünür | %50 scroll'da görünür | 420 | P1 |
| 8 | Scroll-trigger popup format: Slide-in vs Modal | Popups | Slide-in popup modal'a göre düşük kapatma, yüksek dönüşüm | Email kayıt oranı | Slide-in (sağ alt) | Tam ekran modal | 392 | P1 |
| 9 | Lead magnet türü (beslenme sayfası) | CRO | Bağlam uyumlu LM (menü) genel LM'ye (rehber) göre daha etkili | Lead magnet indirme oranı | "Hasta Rehberini Indir" | "7 Günlük Menüyü Indir" | 392 | P1 |
| 10 | Premium plan sıralaması (ortada vurgulu) | CRO | Tam Premium ortada gösterildiğinde seçim oranı artar | Tam Premium seçim oranı | Ücretsiz → Temel → Tam | Ücretsiz → **Tam (vurgulu)** → Temel | 392 | P1 |
| 11 | Exit-intent popup içerik: LM vs Semptom testi | Popups/CRO | Semptom testi yönlendirme, LM indirmeye göre daha etkili | Popup CTA tıklama oranı | "Gitmeden önce -- rehberinizi alın" | "Gitmeden önce -- 2 dk semptom testi" | 378 | P1 |
| 12 | Newsletter popup zamanlaması | CRO | 45 sn gecikme 20 sn'ye göre daha yüksek dönüşüm | Popup email kayıt oranı | 20 sn sonra popup | 45 sn sonra popup | 360 | P1 |
| 13 | Hoşgeldin: 3 kart vs tek CTA | Onboarding | Tek CTA (semptom testi) 3 seçenekli karttan daha yüksek ilk aksiyon | Ilk aksiyon oranı, aktivasyon | 3 seçenek kartı | Tek CTA: semptom testi | 350* | P0 |
| 14 | Checklist widget: Floating vs Sidebar | Onboarding | Floating widget sidebar'a göre daha yüksek farkındalık ve tamamlama | Checklist completion rate | Sidebar checklist | Floating widget | 350* | P0 |
| 15 | Segment bazlı vs genel hoşgeldin | Onboarding | Segment bazlı yönlendirme genel hoşgeldinden daha iyi aktivasyon | Aktivasyon oranı, 7 gün retention | Genel hoşgeldin | Segment bazlı (3 varyant) | 350* | P0 |
| 16 | Timed popup soru formatı | Popups | Kişisel soru formatı doğrudan davetten daha etkili | Semptom testi başlatma oranı | "Lipödem Olabilir misiniz?" | "Kendinizi Tanıyor musunuz?" (kişisel soru) | 324 | P1 |
| 17 | Deneme bitiş modalında ilerleme gösterimi | Signup | Kişiselleştirilmiş ilerleme gösterimi dönüşümü artırır | trial_to_premium rate | Standart modal | Ilerleme gösterimli modal | 324 | P1 |
| 18 | Ana sayfa hero başlık: empati vs bilgi | CRO | Empati odaklı başlık daha düşük bounce ve daha yüksek CTA tıklama | Bounce rate + CTA tıklama | "Her Sey Tek Çatı Altında" | "Bacaklarınız Neden Incelmiyor? Cevap Burada." | 320 | P2 |
| 19 | Checklist ödülü: PDF vs Premium deneme | Onboarding | PDF rapor ödülü premium deneme ödülünden daha yüksek tamamlama | Checklist tamamlama oranı | Ödül: Premium deneme | Ödül: PDF rapor | 300* | P1 |
| 20 | Empty state: Blur vs Full gate | Onboarding | Blur preview tam kilitlemeye göre daha yüksek Premium CTA tıklama | Premium CTA tıklama oranı | Tam kilit (gating) | Blur preview (içerik görünür ama okunamaz) | 290* | P1 |
| 21 | Mobil kayıt: Bottom sheet vs Tam sayfa | Signup | Bottom sheet mobilde tam sayfadan daha yüksek dönüşüm | mobile signup_complete rate | Bottom sheet | Tam sayfa | 280 | P2 |
| 22 | Semptom testi sonrası One-Tap kayıt | Signup | Test sonrası One-Tap kayıt oranını artırır | signup_complete rate | One-Tap yok | One-Tap popup (2 sn sonra) | 280 | P2 |
| 23 | Premium wizard: 3 adım vs 5 adım | Onboarding | 3 adım daha yüksek tamamlama, 5 adım daha iyi kişiselleştirme | Wizard tamamlama + 30 gün retention | 3 adımlı wizard | 5 adımlı wizard | 270* | P1 |
| 24 | Blog inline CTA kişiselleştirme | Yeni | Makale kategorisine uygun LM genel bültene göre daha etkili | Inline CTA email kayıt oranı | Genel bülten kaydı | Kategori bazlı LM teklifi | 360 | P1 |
| 25 | Klinik profil: Hasta yorumu var vs yok | Yeni | Hasta yorumu olan profil daha yüksek randevu talebi | Randevu talep oranı | Yorum yok | 2-3 hasta yorumu göster | 336 | P1 |
| 26 | Premium "günlük maliyet" çerçeveleme | Yeni | "Günde 2,63 TL" gösterimi düz fiyata göre dönüşümü artırır | Premium deneme başlatma | "149 TL/ay" | "Günde sadece 4,97 TL" + "149 TL/ay" | 378 | P1 |
| 27 | Sosyal kanıt sayaç: Var vs yok | Yeni | "[X]+ kadın bu testi çözdü" CTA yakınında test başlatmayı artırır | Semptom testi başlama oranı | Sayaç yok | Dinamik sayaç CTA yanında | 336 | P1 |
| 28 | Confetti: Var vs yok | Onboarding | Confetti animasyonu (kayıtta) pozitif duygusal etki ve ilk aksiyon | Ilk aksiyon oranı | Düz geçiş | Confetti animasyonu | 210* | P2 |
| 29 | Nudge zamanlaması: 3 gün vs 5 gün | Onboarding | 3 gün nudge erken müdahale ile daha iyi recovery | Stalled user recovery oranı | 5 gün sonra nudge | 3 gün sonra nudge | 210* | P2 |
| 30 | WhatsApp paylaşım butonu konumu | Yeni | Test sonucu sayfasında üstte gösterim altta gösterime göre daha fazla paylaşım | whatsapp_share oranı | Sayfa altı | Sonuç kartının hemen altı (üst bölüm) | 294 | P2 |
| 31 | Bilgi sayfası TOC (içindekiler): Var vs yok | Yeni | Yapışkan içindekiler tablosu engagement ve scroll derinliğini artırır | scroll_depth_75 + sayfa süre | TOC yok | Sol sidebar yapışkan TOC | 252 | P2 |
| 32 | Sticky bar metin uzunluğu: Kısa vs uzun | Yeni | Kısa metin ("Semptom Testi -- 2 dk") uzun metne göre daha yüksek tıklama | Sticky bar CTA tıklama | Uzun: "Lipödem şüpheniz mi var? Testi çözün" | Kısa: "Semptom Testi -- 2 dk" | 280 | P2 |
| 33 | Ödeme sayfası güven sinyali konumu | Yeni | Güven sinyallerini ödeme formunun üstüne taşımak dönüşümü artırır | Ödeme tamamlama oranı | Güven sinyalleri form altında | Güven sinyalleri form üstünde | 315 | P2 |
| 34 | Premium fiyat toggle varsayılanı | Yeni | Yıllık varsayılan seçili olması yıllık plan tercihini artırır | Yıllık plan seçim oranı | Aylık varsayılan | Yıllık varsayılan (seçili) | 336 | P1 |
| 35 | Klinik bulucu: Harita vs Liste varsayılan | Yeni | Liste görünümü haritaya göre daha yüksek klinik profil tıklama | Klinik profil tıklama oranı | Harita varsayılan | Liste varsayılan | 252 | P2 |

*\* ICE skorları onboarding-output.md'de açıkça verilmediğinden, P0/P1/P2 önceliklerine göre tahmin edilmiştir.*

### 4.2 Backlog Özet Dağılımı

| Öncelik | Test Sayısı | Kategori Dağılımı |
|---------|-------------|-------------------|
| P0 (Hemen) | 7 | CRO: 3, Onboarding: 3, Signup: 1 |
| P1 (Yakında) | 17 | CRO: 6, Popups: 3, Onboarding: 3, Signup: 2, Yeni: 3 |
| P2 (Planlı) | 11 | CRO: 1, Onboarding: 2, Signup: 1, Yeni: 7 |

---
---

## 5. Ilk 90 Gün Deney Takvimi

### 5.1 Ay 1: Temel Testler (Hafta 1-4)

**Beklenen trafik:** ~5.000 tekil ziyaretçi/ay
**Eşzamanlı test limiti:** 1-2

| Hafta | Test # | Test Adı | Varyant | Sayfa | Trafik Bölme | Tahmini Örneklem |
|-------|--------|----------|---------|-------|-------------|------------------|
| 1-2 | #1 | Email form yapısı (tek vs çift alan) | A/B | Tüm email formları | 50/50 | ~800/varyant |
| 1-2 | #2 | Semptom testi CTA metni (hero) | A/B | Ana sayfa | 50/50 | ~600/varyant |
| 3-4 | #13 | Hosgeldin: 3 kart vs tek CTA | A/B | /hosgeldin | 50/50 | ~250/varyant |
| 3-4 | #7 | Sticky CTA bar gösterim zamanı | A/B | Bilgi sayfaları | 50/50 | ~500/varyant |

**Ay 1 hedefleri:**
- PostHog entegrasyonu tamamla ve QA yap
- Ilk 2 testi başlat, sonuçlarını al
- Feature flag altyapısını test et
- Baseline metrikleri belirle (1. hafta veri toplama)

### 5.2 Ay 2: Genişleme (Hafta 5-8)

**Beklenen trafik:** ~10.000-12.000 tekil ziyaretçi/ay
**Eşzamanlı test limiti:** 2-3

| Hafta | Test # | Test Adı | Varyant | Sayfa | Trafik Bölme | Tahmini Örneklem |
|-------|--------|----------|---------|-------|-------------|------------------|
| 5-6 | #4 | Premium anchoring | A/B | /premium | 50/50 | ~400/varyant |
| 5-6 | #5 | Semptom testi sonuç CTA | A/B | Test sonuç sayfası | 50/50 | ~300/varyant |
| 5-7 | #14 | Checklist widget: Floating vs Sidebar | A/B | Dashboard | 50/50 | ~350/varyant |
| 7-8 | #8 | Scroll-trigger popup format | A/B | Blog sayfaları | 50/50 | ~500/varyant |
| 7-8 | #11 | Exit-intent popup içerik | A/B | Bilgi sayfaları (desktop) | 50/50 | ~300/varyant |

**Ay 2 hedefleri:**
- Ay 1 test kazananlarını implement et
- Premium funnel testlerine başla
- Popup/overlay testlerini çalıştır
- Bayesian analiz ile erken bilgi topla

### 5.3 Ay 3: Optimizasyon (Hafta 9-12)

**Beklenen trafik:** ~15.000-20.000 tekil ziyaretçi/ay
**Eşzamanlı test limiti:** 2-3

| Hafta | Test # | Test Adı | Varyant | Sayfa | Trafik Bölme | Tahmini Örneklem |
|-------|--------|----------|---------|-------|-------------|------------------|
| 9-10 | #10 | Premium plan sıralaması | A/B | /premium | 50/50 | ~500/varyant |
| 9-10 | #18 | Hero başlık: empati vs bilgi | A/B | Ana sayfa | 50/50 | ~800/varyant |
| 9-10 | #24 | Blog inline CTA kişiselleştirme | A/B | Blog sayfaları | 50/50 | ~600/varyant |
| 11-12 | #26 | "Günlük maliyet" çerçeveleme | A/B | /premium | 50/50 | ~500/varyant |
| 11-12 | #34 | Fiyat toggle varsayılanı | A/B | /premium | 50/50 | ~500/varyant |
| 12 | -- | Ay 1-3 retrospektif + Ay 4-6 planlama | -- | -- | -- | -- |

**Ay 3 hedefleri:**
- Tüm P0 testleri tamamla
- P1 testlerin %50+'sını çalıştır
- Ilk 12 testin öğrenimlerini dokümante et
- Ay 4-6 deney backlog'unu güncelle

### 5.4 Takvim Özeti (Gantt Görünümü)

```
Hafta    1    2    3    4    5    6    7    8    9   10   11   12
─────────────────────────────────────────────────────────────────
Test #1  ████████
Test #2  ████████
Test #13           ████████
Test #7            ████████
Test #4                      ████████
Test #5                      ████████
Test #14                     ████████████
Test #8                                  ████████
Test #11                                 ████████
Test #10                                          ████████
Test #18                                          ████████
Test #24                                          ████████
Test #26                                                    ████████
Test #34                                                    ████████
─────────────────────────────────────────────────────────────────
Eşzamanlı: 2    2    2    2    3    3    3    3    3    3    2    2
```

---
---

## 6. Sayfa Bazlı Test Planı

### 6.1 Ana Sayfa (/)

| Sıra | Test | Hipotez | Metrik | ICE | Durum |
|------|------|---------|--------|-----|-------|
| 1 | Hero CTA metni (#2) | Sonuç odaklı CTA > eylem odaklı | Semptom testi başlama | 567 | Ay 1 |
| 2 | Hero başlık (#18) | Empati odaklı > bilgi odaklı | Bounce rate, CTA tıklama | 320 | Ay 3 |
| 3 | Sosyal kanıt sayaç (#27) | Dinamik sayaç CTA yakınında | Test başlama oranı | 336 | Ay 3-4 |
| 4 | Sticky bar zamanlaması (#7) | %25 scroll > %50 scroll | Sticky bar tıklama | 420 | Ay 1 |

**Ana sayfa test sıralaması gerekçesi:** Hero CTA en çok etkileşim alan öğe -- ilk test burada. Başlık ikincil çünkü CTA'yı etkiler. Sosyal kanıt ve sticky bar destekleyici.

### 6.2 Pillar/Bilgi Sayfaları (/lipodem-nedir, /lipodem-tedavisi, vb.)

| Sıra | Test | Hipotez | Metrik | ICE | Durum |
|------|------|---------|--------|-----|-------|
| 1 | Lead magnet türü (#9) | Bağlam uyumlu LM > genel | LM indirme oranı | 392 | Ay 2-3 |
| 2 | Scroll-trigger format (#8) | Slide-in > modal | Email kayıt oranı | 392 | Ay 2 |
| 3 | TOC var/yok (#31) | TOC engagement artırır | scroll_depth_75 | 252 | Ay 4 |
| 4 | Inline CTA kişiselleştirme (#24) | Kategori bazlı > genel | Inline CTA kayıt | 360 | Ay 3 |

### 6.3 Araçlar (/araclar/*)

| Sıra | Test | Hipotez | Metrik | ICE | Durum |
|------|------|---------|--------|-----|-------|
| 1 | Test sonuç CTA (#5) | "PDF Indir" > "Email ile Al" | Email kayıt oranı | 432 | Ay 2 |
| 2 | One-Tap sonrası kayıt (#22) | Test sonrası One-Tap artırır | signup_complete | 280 | Ay 3 |
| 3 | WhatsApp buton konumu (#30) | Üst konum > alt konum | whatsapp_share | 294 | Ay 4 |

### 6.4 Premium (/premium)

| Sıra | Test | Hipotez | Metrik | ICE | Durum |
|------|------|---------|--------|-----|-------|
| 1 | Fiyat anchoring (#4) | Diyetisyen karşılaştırma dönüşüm artırır | Deneme başlatma | 441 | Ay 2 |
| 2 | Plan sıralaması (#10) | Ortada vurgulu > soldan sağa sıralı | Tam Premium seçim | 392 | Ay 3 |
| 3 | "Günlük maliyet" (#26) | "Günde X TL" gösterim artırır | Deneme başlatma | 378 | Ay 3 |
| 4 | Fiyat toggle varsayılanı (#34) | Yıllık varsayılan artırır | Yıllık plan seçim | 336 | Ay 3 |
| 5 | Güven sinyali konumu (#33) | Üst konum dönüşüm artırır | Ödeme tamamlama | 315 | Ay 4 |

### 6.5 Kayıt/Signup (/kayit)

| Sıra | Test | Hipotez | Metrik | ICE | Durum |
|------|------|---------|--------|-----|-------|
| 1 | Google-first vs Email-first (#3) | Google üstte > Email üstte | signup_complete | 504 | Ay 1 |
| 2 | "Şifre yok" güven mesajı (#6) | Güven mesajı form başlatma artırır | form_start | 420 | Ay 1-2 |
| 3 | Mobil: Bottom sheet vs Tam sayfa (#21) | Bottom sheet > tam sayfa | mobil signup_complete | 280 | Ay 3 |

### 6.6 Onboarding (/hosgeldin, dashboard)

| Sıra | Test | Hipotez | Metrik | ICE | Durum |
|------|------|---------|--------|-----|-------|
| 1 | 3 kart vs tek CTA (#13) | Tek CTA > 3 seçenek | Ilk aksiyon oranı | 350 | Ay 1 |
| 2 | Segment bazlı hosgeldin (#15) | Segment bazlı > genel | Aktivasyon, 7 gün retention | 350 | Ay 1-2 |
| 3 | Checklist widget (#14) | Floating > sidebar | Tamamlama oranı | 350 | Ay 2 |
| 4 | Checklist ödülü (#19) | PDF > Premium deneme | Tamamlama oranı | 300 | Ay 2-3 |
| 5 | Empty state formatı (#20) | Blur preview > tam kilit | Premium CTA tıklama | 290 | Ay 3 |

---
---

## 7. Email A/B Test Planı

### 7.1 Konu Satırı Testleri

Email A/B testleri PostHog yerine ESP (Resend/Loops) üzerinden yönetilir. Her dizi için konu satırı A/B testi standart uygulamadır.

| # | Email Dizisi | Konu Satırı A | Konu Satırı B | Metrik | Beklenen Etki |
|---|-------------|---------------|---------------|--------|---------------|
| E1 | Hosgeldin #1 | "Hos geldiniz -- rehberiniz hazır" | "[Ad], lipödem rehberiniz burada" | Açılma oranı | Kişiselleştirme +%10-15 |
| E2 | Hosgeldin #2 (Semptom testi) | "2 dakikanız var mı? Semptom testiniz hazır" | "Yaşadıklarınızın bir açıklaması olabilir" | Açılma + tıklama | Merak odaklı +%8-12 |
| E3 | Hosgeldin #3 (Beslenme) | "Lipödem ve beslenme: en çok sorulan 3 soru" | "Diyetle bacaklarınız incelmiyorsa bunları bilin" | Açılma + tıklama | Problem odaklı +%10 |
| E4 | Hosgeldin #4 (Hikaye) | "15 yıl kendimi suçladım -- Elif'in hikayesi" | "Yalnız olmadığınızı biliyor musunuz?" | Açılma oranı | Hikaye başlık +%12-18 |
| E5 | Hosgeldin #5 (Premium) | "Lipödem yolculuğunuzda bir sonraki adım" | "[Ad], size özel bir program hazırladık" | Açılma + tıklama + deneme | Kişisel +%8-12 |
| E6 | Semptom testi sonuç | "Semptom testi sonucunuz hazır" | "[Ad], test sonuçlarınız burada" | Açılma oranı | Kişiselleştirme +%5-10 |
| E7 | Beslenme #1 (Zerdeçal) | "Bu hafta deneyin: zerdeçallı mercimek çorbası" | "Anti-inflamatuar mutfağınıza hos geldiniz" | Açılma oranı | Spesifik tarif +%8-12 |
| E8 | Yeniden etkileşim | "Sizi özledik" | "Lipödem araclarımız sizi bekliyor" | Açılma oranı | Empati vs fayda |

### 7.2 Gönderim Zamanı Testleri

| Test | Varyant A | Varyant B | Metrik | Kitle |
|------|-----------|-----------|--------|-------|
| Hafta içi zamanlama | 10:00 TSI | 20:00 TSI | Açılma oranı, tıklama | Tüm aboneler |
| Hafta sonu dahil etme | Sadece hafta içi | Pazar dahil | Açılma + unsubscribe | Tüm aboneler |
| Gün seçimi (bülten) | Salı | Persembe | Açılma + tıklama | Bülten aboneleri |

**Gönderim testi metodolojisi:**
- Her test minimum 2 hafta (4 gönderim)
- Minimum 500 alıcı/varyant
- Unsubscribe oranı da izlenir (olumsuz etki kontrolü)
- Türkiye zaman dilimine göre optimize

### 7.3 CTA Formatı Testleri

| Test | Varyant A | Varyant B | Metrik |
|------|-----------|-----------|--------|
| CTA buton vs metin link | Büyük teal buton | Alt çizgili metin link | Tıklama oranı |
| Tek CTA vs çoklu CTA | 1 ana CTA butonu | 1 ana + 2 metin link | Birincil CTA tıklama |
| CTA metni (Premium) | "14 Gün Ücretsiz Deneyin" | "Kisisel Planınızı Olusturun" | Premium deneme başlatma |
| P.S. bölümü etkisi | P.S. var | P.S. yok | Tıklama oranı |

### 7.4 Email A/B Test Uygulama Kuralları

| Kural | Detay |
|-------|-------|
| **Örneklem** | Minimum 500 alıcı/varyant (küçük listede %20/%20/%60 split) |
| **Split yöntemi** | %20 A + %20 B → 4 saat bekle → kazananı %60'a gönder |
| **Bekleme süresi** | 4 saat (Türkiye'de email açma alışkanlığı 2-6 saat arası) |
| **Kazanan kriteri** | Açılma testi: açılma oranı; Tıklama testi: tıklama oranı |
| **Minimum fark** | %5 mutlak fark (ör. %22 vs %27) -- altı "beraberlik" kabul edilir |
| **Beraberlik** | A ve B eşitse, daha kısa/net olan tercih edilir |
| **Paralel test** | Aynı emailde konu satırı + CTA aynı anda test edilmez |
| **Kayıt** | Her test sonucu experiments/ klasörüne loglanır |

---
---

## 8. Deney Raporlama Sablonu

### 8.1 Deney Rapor Sablonu

Her tamamlanan test için asağıdaki sablon doldurulur ve `.agents/experiments/EXP-[numara]-[kısa-ad].md` olarak kaydedilir.

```markdown
# EXP-[###]: [Test Adı]

## Özet
| Parametre | Değer |
|-----------|-------|
| Test numarası | EXP-### |
| Baslangiç tarihi | GG.AA.YYYY |
| Bitis tarihi | GG.AA.YYYY |
| Toplam süre | X gün |
| Durum | Tamamlandı / Erken durduruldu / Sonuçsuz |
| Sonuç | Varyant [A/B] kazandı / Beraberlik |
| Karar | Implement / Park / Yeni test |

## Hipotez
"Eğer [değişiklik] yaparsak, [kitle] için [metrik] %[beklenen] [artacak/azalacak],
çünkü [gerekçe]."

## Test Tasarımı
| Parametre | Değer |
|-----------|-------|
| Sayfa / Kanal | [Sayfa URL veya email dizisi] |
| Varyant A (Kontrol) | [Açıklama] |
| Varyant B (Test) | [Açıklama] |
| Trafik bölme | %50 / %50 |
| Birincil metrik | [Metrik adı] |
| Ikincil metrik(ler) | [Metrik adı] |
| MDE | %[değer] |
| Min örneklem / varyant | [sayı] |

## Sonuçlar

### Birincil Metrik
| Varyant | Örneklem | Dönüsüm | Oran | Fark | p-değeri | Anlamlı mı? |
|---------|----------|---------|------|------|----------|-------------|
| A (Kontrol) | [n] | [dönüsüm] | [%] | -- | -- | -- |
| B (Test) | [n] | [dönüsüm] | [%] | [+/-%] | [p] | [Evet/Hayır] |

### Ikincil Metrikler
| Metrik | A | B | Fark | Yorum |
|--------|---|---|------|-------|
| [Metrik 1] | [%] | [%] | [+/-%] | [Yorum] |
| [Metrik 2] | [%] | [%] | [+/-%] | [Yorum] |

### Segment Analizi
| Segment | A | B | Fark | Not |
|---------|---|---|------|-----|
| Mobil | [%] | [%] | [+/-%] | |
| Desktop | [%] | [%] | [+/-%] | |
| Yeni ziyaretçi | [%] | [%] | [+/-%] | |
| Dönen ziyaretçi | [%] | [%] | [+/-%] | |

## Öğrenimler
1. [Öğrenim 1]
2. [Öğrenim 2]
3. [Öğrenim 3]

## Sonraki Adımlar
- [ ] Kazanan varyantı implement et (sorumlu: [isim], deadline: [tarih])
- [ ] Sonraki test planla: [ilgili test numarası]
- [ ] Öğrenimleri [ilgili çıktı dosyasına] yansıt

## Ekran Görüntüleri
[Varyant A ve B ekran görüntüleri buraya eklenecek]
```

### 8.2 Haftalık Deney Dashboard

Her Pazartesi güncellenen özet tablo:

```markdown
# Haftalık Deney Durumu -- [Tarih]

## Aktif Testler
| Test | Başlangıç | Beklenen Bitiş | Örneklem (A/B) | Bayesian "Better" | Durum |
|------|-----------|---------------|----------------|-------------------|-------|
| [Ad] | [Tarih] | [Tarih] | [n/n] | [%] | Çalışıyor / Sonuç bekliyor |

## Bu Hafta Tamamlanan
| Test | Sonuç | Birincil Metrik Fark | Karar |
|------|-------|---------------------|-------|
| [Ad] | [A/B kazandı] | [+/-%] | [Implement / Park] |

## Bu Hafta Başlayacak
| Test | Hazırlık Durumu | Beklenen Başlangıç |
|------|----------------|-------------------|
| [Ad] | [QA tamamlandı / Geliştirme devam] | [Tarih] |

## Kümülatif Metrikler (Bu Ay)
| Metrik | Ay Başı | Şu An | Değişim |
|--------|---------|-------|---------|
| Semptom testi başlama oranı | [%] | [%] | [+/-%] |
| Email kayıt oranı | [%] | [%] | [+/-%] |
| Premium deneme başlatma | [%] | [%] | [+/-%] |
```

---
---

## 9. Deney KPI'ları ve Basarı Metrikleri

### 9.1 Deney Programı KPI'ları

| KPI | Hedef (Ay 1) | Hedef (Ay 3) | Hedef (Ay 6) | Ölçüm |
|-----|-------------|-------------|-------------|-------|
| **Deney hızı (velocity)** | 4 test/ay | 6 test/ay | 8 test/ay | Tamamlanan test sayısı |
| **Kazanma oranı (win rate)** | %25 | %30 | %35 | Anlamlı iyileşme sağlayan testler / toplam |
| **Uygulama hızı** | 3 gün | 2 gün | 1 gün | Karar → implementasyon süresi |
| **Kümülatif etki** | -- | +%15 email kayıt | +%30 email kayıt | Tüm kazananların birleşik etkisi |
| **Backlog boyutu** | 30+ | 40+ | 50+ | Aktif deney fikirleri havuzu |
| **Dokümantasyon oranı** | %100 | %100 | %100 | Raporlanan / tamamlanan test |

### 9.2 Sayfa Bazlı Dönüsüm Hedefleri (A/B Testlerle Optimize Edilecek)

| Sayfa | Birincil Metrik | Baslangiç Hedef | 3. Ay Hedef (Test Sonrası) | 6. Ay Hedef |
|-------|-----------------|-----------------|---------------------------|-------------|
| **Ana sayfa** | Semptom testi başlama | %8-12 | %12-18 | %15-22 |
| **Ana sayfa** | Bounce rate | <%55 | <%45 | <%40 |
| **Pillar sayfalar** | Email kayıt (form gören) | %12-18 | %18-25 | %22-30 |
| **Blog makaleleri** | Scroll %75+ | %25-35 | %35-45 | %40-50 |
| **Blog makaleleri** | Inline CTA tıklama | %3-5 | %5-8 | %7-10 |
| **Semptom testi** | Tamamlama (başlatan→biten) | %65-75 | %75-85 | %80-90 |
| **Semptom testi sonuç** | Email kayıt (PDF indirme) | %30-40 | %40-55 | %50-60 |
| **Premium sayfa** | Deneme başlatma | %5-8 | %8-14 | %12-18 |
| **Premium sayfa** | Yıllık plan seçim oranı | %30-40 | %40-55 | %50-60 |
| **Ödeme akışı** | Ödeme tamamlama | %60-70 | %70-80 | %75-85 |
| **Kayıt sayfası** | signup_complete | %25-35 | %35-50 | %45-60 |
| **Onboarding** | Aktivasyon (ilk hafta 2+ aksiyon) | %30-40 | %40-55 | %50-65 |
| **Klinik bulucu** | Klinik profil tıklama | %15-25 | %25-35 | %30-40 |
| **Klinik profil** | Randevu talep | %8-15 | %12-20 | %15-25 |

### 9.3 Email A/B Test Hedefleri

| Metrik | Baslangiç | 3. Ay Hedef | 6. Ay Hedef |
|--------|-----------|-------------|-------------|
| **Ortalama açılma oranı** | %35-40 | %40-50 | %45-55 |
| **Ortalama tıklama oranı (CTOR)** | %15-20 | %20-28 | %25-32 |
| **Unsubscribe oranı** | <%0.5 | <%0.3 | <%0.2 |
| **Spam şikayet oranı** | <%0.05 | <%0.02 | <%0.01 |
| **Hoşgeldin → test başlama** | %15-20 | %20-30 | %25-35 |
| **Hoşgeldin → premium deneme** | %3-5 | %5-10 | %8-15 |

### 9.4 Funnel Darboğaz Tespiti ve Test Önceliklendirme

Her hafta asağıdaki funnel analizi yapılır ve en büyük sızıntı noktasına göre test öncelikleri güncellenir:

```
FUNNEL DARBOĞAZ MATRISI:

Ziyaretçi → Mikro-dönüsüm (%50-70 beklenti)
  └─ Düsükse: Hero başlık, sayfa hızı, içerik kalitesi testleri

Mikro-dönüsüm → Lead (%15-25 beklenti)
  └─ Düsükse: CTA metni, form yapısı, lead magnet değeri testleri

Lead → MQL (%40-60 beklenti)
  └─ Düsükse: Email dizisi, onboarding, değer teslimi testleri

MQL → Premium Deneme (%15-20 beklenti)
  └─ Düsükse: Anchoring, paywall, premium teaser testleri

Deneme → Abonelik (%25-35 beklenti)
  └─ Düsükse: Onboarding email, deneme bitiş, save offer testleri

Aktif → Referral (%5-10 beklenti)
  └─ Düsükse: WhatsApp paylaşım, referral teşvik testleri
```

**Otomatik uyarı kuralları:**

| Metrik | Uyarı Esığı | Aksiyon |
|--------|-------------|---------|
| Bounce rate >%65 | Kırmızı alarm | Hero bölümü testi hemen başlat |
| Semptom testi tamamlama <%60 | Kırmızı alarm | Test UX incelemesi + localStorage kontrolü |
| Email kayıt <%8 | Sarı alarm | Form/LM A/B testi önceliklendir |
| Premium deneme <%3 | Sarı alarm | Premium sayfa anchoring testi |
| Popup kapatma >%90 | Bilgi | Popup zamanlaması ve içerik testi |
| Email açılma <%25 | Sarı alarm | Konu satırı A/B testi |

### 9.5 Deney Programı Olgunluk Modeli

| Seviye | Süre | Özellikler | Hedef |
|--------|------|------------|-------|
| **Seviye 1: Baslangıç** | Ay 1-2 | Tek kanal testleri (web), ICE skorlama, temel raporlama | Altyapı kur, kültür olustur |
| **Seviye 2: Genisleme** | Ay 3-4 | Çok kanallı (web + email), segment analizi, Bayesian + Frequentist | Haftalık 1-2 test, %25+ kazanma |
| **Seviye 3: Optimizasyon** | Ay 5-6 | Kişiselleştirme testleri, multivariate, server-side testler | Haftalık 2+ test, %30+ kazanma |
| **Seviye 4: Olgunluk** | Ay 7+ | Otomatik test önerileri, ML tabanlı kişiselleştirme, full-stack | Sürekli öğrenme döngüsü |

---
---

## EK A: Deney Fikri Toplama Süreci

### Fikir Kaynakları

| Kaynak | Yöntem | Sıklık |
|--------|--------|--------|
| **Kullanıcı geri bildirimi** | Destek emaillerı, topluluk mesajları | Sürekli |
| **Analytics verisi** | GA4/PostHog funnel analizi, heatmap | Haftalık |
| **Rakip analizi** | Rakip sitelerin A/B test tespiti (Wappalyzer, BuiltWith) | Aylık |
| **Sektör kaynakları** | CXL, ConversionXL, Baymard Institute | Aylık |
| **Takım beyin fırtınası** | Aylık deney toplantısı | Aylık |
| **Kazanan testlerin iterasyonu** | Kazanan varyantları daha da optimize et | Her kazanandan sonra |

### Fikir Değerlendirme Akışı

```
Fikir geldi
    │
    ▼
ICE skoru ver (Impact x Confidence x Ease)
    │
    ├── ICE >= 350 → Backlog'a ekle, sırala
    │
    ├── ICE 200-349 → Backlog'a ekle, beklemeye al
    │
    └── ICE < 200 → Park et, 3 ay sonra tekrar değerlendir
```

---

## EK B: Test Edilmeyecekler (Etik Sınırlar)

| Alan | Neden Test Edilmez |
|------|-------------------|
| **Tıbbi bilgi doğruluğu** | Bilimsel bilgi test edilmez -- doğru bilgi her zaman gösterilir |
| **Ruh sağlığı sayfasında agresif CTA** | Hasta ruh sağlığını riske atan testler yapılmaz |
| **Sahte aciliyet** | "Son 3 saat!" gibi sahte kıtlık mesajları test edilmez |
| **Dark pattern** | Kapatma butonunu gizleme, karışık opt-out gibi manipülasyonlar yasak |
| **Şişirilmiş sayılar** | Sosyal kanıt sayaçlarında gerçek olmayan rakamlar test edilmez |
| **Fiyat manipülasyonu** | Aynı kullanıcıya farklı fiyat gösterme yasak (plan/periyot farkı hariç) |
| **KVKK ihlali** | Rıza olmadan veri toplama veya izleme |
| **Sağlık kaygısı tetikleme** | "Tedavi olmazsan ilerler!" gibi korku mesajları test edilmez |

---

## EK C: PostHog Event Kataloğu (A/B Test Ilgili)

| Event Adı | Tetikleyici | Parametreler |
|-----------|------------|-------------|
| `experiment_viewed` | Kullanıcı deney varyantını gördü | `experiment_key`, `variant`, `page_url` |
| `experiment_conversion` | Birincil metrik dönüşüm | `experiment_key`, `variant`, `conversion_type` |
| `experiment_secondary` | Ikincil metrik olay | `experiment_key`, `variant`, `metric_name`, `value` |
| `feature_flag_evaluated` | Feature flag değerlendirildi | `flag_key`, `value`, `user_type` |

---

## EK D: Önerilen Okuma ve Kaynaklar

| Kaynak | Konu | URL |
|--------|------|-----|
| PostHog A/B Testing | PostHog'da test kurulumu | posthog.com/docs/experiments |
| Evan Miller Sample Size Calculator | Örneklem hesaplama | evanmiller.org/ab-testing |
| CXL Institute | CRO ve A/B test eğitimleri | cxl.com |
| Baymard Institute | E-ticaret UX araştırmaları | baymard.com |
| Statsig | Istatistiksel test yorumlama | statsig.com/blog |

---

*Son güncelleme: 24 Mayıs 2026*
