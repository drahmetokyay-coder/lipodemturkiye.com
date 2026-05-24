# Lipödem Türkiye -- Kapsamlı Analytics ve Ölçüm Altyapısı

**Tarih:** 24 Mayıs 2026
**Referans:** signup-output.md, onboarding-output.md, cro-output.md, popups-output.md, emails-output.md, pricing-output.md, free-tools-output.md
**Teknoloji:** GA4 + GTM + Next.js 15 (App Router) + Vercel Analytics
**Kapsam:** Event taksonomisi, GA4 yapılandırması, GTM konteyner, e-ticaret tracking, funnel metrikleri, araç kullanım metrikleri, içerik performansı, kullanıcı segmentasyonu, dashboard, KVKK uyumu

---

## İÇİNDEKİLER

1. [Araç Seçimi ve Mimari](#1-araç-seçimi-ve-mimari)
2. [Event Taksonomisi ve Adlandırma](#2-event-taksonomisi-ve-adlandırma)
3. [Konsolidasyonlu Master Event Listesi](#3-konsolidasyonlu-master-event-listesi)
4. [GA4 Yapılandırması](#4-ga4-yapılandırması)
5. [GTM Konteyner Yapısı](#5-gtm-konteyner-yapısı)
6. [E-Ticaret ve Abonelik Tracking](#6-e-ticaret-ve-abonelik-tracking)
7. [Dönüşüm Funnel'ları](#7-dönüşüm-funnel-ları)
8. [İçerik Performans Metrikleri](#8-i̇çerik-performans-metrikleri)
9. [Araç Kullanım Metrikleri](#9-araç-kullanım-metrikleri)
10. [Kullanıcı Segmentasyonu](#10-kullanıcı-segmentasyonu)
11. [Dashboard ve Raporlama](#11-dashboard-ve-raporlama)
12. [KVKK ve Gizlilik Uyumu](#12-kvkk-ve-gizlilik-uyumu)
13. [Teknik Implementasyon](#13-teknik-i̇mplementasyon)
14. [Doğrulama ve QA](#14-doğrulama-ve-qa)

---
---

## 1. Araç Seçimi ve Mimari

### 1.1 Analytics Stack

| Araç | Rol | Maliyet | Öncelik |
|------|-----|---------|---------|
| **GA4** | Web analytics, funnel, e-ticaret, içerik | Ücretsiz | P0 |
| **GTM** | Tag management, event routing | Ücretsiz | P0 |
| **Vercel Analytics** | Core Web Vitals, sayfa performansı | Ücretsiz (Hobby) | P0 |
| **Google Search Console** | SEO performans, indeksleme | Ücretsiz | P0 |
| **Resend Analytics** | Email açılma, tıklama | ESP dahili | P1 |
| **Hotjar** (veya Microsoft Clarity) | Heatmap, session replay | Ücretsiz tier | P2 |

### 1.2 Veri Akış Mimarisi

```
Kullanıcı Etkileşimi
        │
        ▼
  ┌─────────────┐
  │  dataLayer   │ ← Next.js client components push
  └──────┬──────┘
         │
         ▼
  ┌─────────────┐
  │     GTM      │ ← Tag yönetimi, trigger'lar
  └──────┬──────┘
         │
    ┌────┼────┐
    ▼    ▼    ▼
  GA4  Resend  Hotjar
```

---

## 2. Event Taksonomisi ve Adlandırma

### 2.1 Adlandırma Kuralları

| Kural | Format | Örnek |
|-------|--------|-------|
| Küçük harf | `snake_case` | `signup_completed` |
| Object_Action | `{nesne}_{eylem}` | `tool_started`, `article_read` |
| Prefix kategorisi | `{kategori}_{nesne}_{eylem}` | `onboarding_checklist_completed` |
| Property isimleri | `snake_case` | `button_text`, `page_section` |
| Değerler | küçük harf, tire | `semptom-testi`, `evre-degerlendirme` |

### 2.2 Kategori Prefix'leri

| Prefix | Kapsam | Örnek |
|--------|--------|-------|
| `page_` | Sayfa görüntüleme | `page_view` (otomatik) |
| `cta_` | CTA tıklama | `cta_clicked` |
| `signup_` | Kayıt akışı | `signup_started`, `signup_completed` |
| `onboarding_` | Onboarding | `onboarding_checklist_item_complete` |
| `tool_` | İnteraktif araçlar | `tool_started`, `tool_completed` |
| `content_` | İçerik tüketimi | `content_article_read`, `content_scroll_depth` |
| `popup_` | Popup/modal | `popup_shown`, `popup_cta_clicked` |
| `premium_` | Premium/ödeme | `premium_trial_started`, `premium_payment_completed` |
| `community_` | Topluluk | `community_post_created` |
| `email_` | Email etkileşim | `email_signup`, `email_link_clicked` |
| `profile_` | Profil | `profile_field_completed` |
| `clinic_` | Klinik bulucu | `clinic_search`, `clinic_contact_clicked` |
| `error_` | Hata | `error_page_shown`, `error_payment_failed` |

---

## 3. Konsolidasyonlu Master Event Listesi

Tüm önceki çıktılardan (signup, onboarding, CRO, popups, emails) toplanan event'lerin birleştirilmiş ve tutarlı hale getirilmiş master listesi.

### 3.1 Kayıt ve Kimlik Doğrulama (signup-output.md kaynaklı)

| Event | Property'ler | Tetikleyici | Dönüşüm? |
|-------|-------------|-------------|-----------|
| `signup_page_view` | referrer, utm_source, utm_medium | /kayit görüntüleme | Hayır |
| `signup_method_selected` | method: google \| magic_link | Yöntem seçimi | Hayır |
| `signup_google_started` | - | Google butonu tıklama | Hayır |
| `signup_google_completed` | is_new_user | Google callback başarı | Evet |
| `signup_magic_link_sent` | email_domain | Magic link gönderildi | Hayır |
| `signup_magic_link_clicked` | is_new_user | Magic link tıklandı | Evet |
| `signup_completed` | method, referrer, segment | Hesap oluşturuldu | Evet (Key) |
| `login_completed` | method | Giriş yapıldı | Hayır |

### 3.2 Onboarding (onboarding-output.md kaynaklı)

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `onboarding_start` | segment, referrer | Hoşgeldin sayfası |
| `onboarding_card_click` | card_type | Hoşgeldin kart tıklama |
| `onboarding_checklist_view` | completion_pct | Checklist açılma |
| `onboarding_checklist_item_complete` | item_id, item_name, time_to_complete | Öğe tamamlama |
| `onboarding_checklist_complete` | total_time, days_to_complete | Tümü tamamlandı |
| `onboarding_checklist_dismiss` | completion_pct, dismiss_type | Kapatma |
| `onboarding_nudge_show` | nudge_id, nudge_type | Nudge gösterimi |
| `onboarding_nudge_click` | nudge_id | Nudge tıklama |
| `onboarding_tooltip_show` | tooltip_id, page | Tooltip gösterimi |
| `onboarding_welcome_back` | days_away, checklist_pct | Welcome back modal |
| `onboarding_premium_wizard_start` | step | Wizard başlatma |
| `onboarding_premium_wizard_complete` | total_time, diet_type, activity_level | Wizard tamamlama |
| `onboarding_pdf_download` | report_type | PDF indirme |
| `onboarding_pdf_share` | share_method | PDF paylaşma |

### 3.3 CTA ve Navigasyon (cro-output.md kaynaklı)

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `cta_clicked` | button_text, page, section, cta_type | CTA buton tıklama |
| `navigation_clicked` | menu_item, location: header \| footer \| sidebar | Nav tıklama |
| `internal_link_clicked` | link_text, source_page, target_page | İç link tıklama |
| `external_link_clicked` | link_url, link_text, page | Dış link tıklama |
| `scroll_depth` | depth_pct: 25 \| 50 \| 75 \| 100, page | Kaydırma derinliği |

### 3.4 İnteraktif Araçlar

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `tool_started` | tool_name, referrer | Araç başlatma |
| `tool_step_completed` | tool_name, step_number, step_total | Adım tamamlama |
| `tool_completed` | tool_name, total_time, result_score | Araç tamamlama |
| `tool_abandoned` | tool_name, last_step, time_spent | Terk etme (sayfa çıkışı) |
| `tool_result_view` | tool_name, result_category, risk_level | Sonuç görüntüleme |
| `tool_result_cta_click` | tool_name, cta_type, cta_target | Sonuç CTA tıklama |
| `tool_result_share` | tool_name, share_method | Sonuç paylaşma |
| `tool_result_print` | tool_name | Sonuç yazdırma |

**Araç bazlı özel event'ler:**

| Event | Araç | Property'ler |
|-------|------|-------------|
| `symptom_test_risk_score` | Semptom Testi | score, risk_level: low \| medium \| high |
| `stage_assessment_result` | Evre Değerlendirme | stage: 1 \| 2 \| 3 \| unknown |
| `clinic_finder_search` | Klinik Bulucu | city, treatment_type, result_count |
| `clinic_finder_contact` | Klinik Bulucu | clinic_name, city, contact_type |
| `nutrition_planner_plan_created` | Beslenme Planlayıcı | diet_type, stage, meal_count |
| `cost_calculator_result` | Maliyet Hesaplayıcı | treatment_type, city, estimated_cost |

### 3.5 Popup ve Modal (popups-output.md kaynaklı)

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `popup_shown` | popup_id, popup_type, trigger_type | Popup gösterimi |
| `popup_cta_clicked` | popup_id, cta_text | Popup CTA tıklama |
| `popup_closed` | popup_id, close_method: x \| overlay \| escape | Popup kapatma |
| `popup_form_submitted` | popup_id, form_type, email_domain | Form gönderildi |
| `popup_suppressed` | popup_id, reason | Kural nedeniyle gösterilmedi |

### 3.6 Premium ve Ödeme

| Event | Property'ler | Tetikleyici | Dönüşüm? |
|-------|-------------|-------------|-----------|
| `premium_page_view` | referrer, plan_highlighted | /premium görüntüleme | Hayır |
| `premium_plan_selected` | plan_name, billing_period | Plan seçimi | Hayır |
| `premium_trial_started` | plan_name, billing_period | Deneme başlatma | Evet (Key) |
| `premium_payment_started` | plan_name, amount, currency | Ödeme başlatma | Hayır |
| `premium_payment_completed` | plan_name, amount, currency, billing_period, transaction_id | Ödeme başarı | Evet (Key) |
| `premium_payment_failed` | plan_name, error_code, error_message | Ödeme başarısız | Hayır |
| `premium_plan_changed` | old_plan, new_plan, change_type: upgrade \| downgrade | Plan değişikliği | Hayır |
| `premium_trial_expired` | plan_name, converted: boolean | Deneme bitti | Hayır |
| `premium_cancelled` | plan_name, reason, days_active | İptal | Hayır |
| `premium_renewed` | plan_name, renewal_count, amount | Yenileme | Evet |

### 3.7 İçerik Tüketimi

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `content_article_view` | article_slug, pillar, category, word_count | Makale açılma |
| `content_article_read` | article_slug, read_time_sec, scroll_depth | 60+ sn + %75 scroll |
| `content_article_share` | article_slug, share_method | Paylaşma |
| `content_article_bookmark` | article_slug | Kaydetme |
| `content_story_view` | story_slug, patient_stage, patient_city | Hasta hikayesi açılma |
| `content_story_read` | story_slug, read_time_sec | 30+ sn okuma |
| `content_lead_magnet_download` | magnet_name, format | LM indirme |
| `content_search` | query, result_count | Site içi arama |
| `content_search_click` | query, result_position, result_url | Arama sonucu tıklama |

### 3.8 Profil ve Hesap

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `profile_field_completed` | field_name, completion_pct | Alan tamamlama |
| `profile_completed` | fields_count | %100 tamamlama |
| `profile_photo_uploaded` | - | Fotoğraf yükleme |
| `account_settings_changed` | setting_name | Ayar değişikliği |
| `account_deleted` | reason, days_active | Hesap silme |

### 3.9 Topluluk

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `community_page_view` | section | Topluluk ana sayfa |
| `community_post_view` | post_id, category | Yazı görüntüleme |
| `community_post_created` | category, word_count | Yazı oluşturma |
| `community_comment_created` | post_id | Yorum yapma |
| `community_reaction` | post_id, reaction_type | Tepki verme |

### 3.10 Email Etkileşim (Resend webhook → dataLayer)

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `email_delivered` | sequence_id, email_id | Teslim edildi |
| `email_opened` | sequence_id, email_id | Açıldı |
| `email_clicked` | sequence_id, email_id, link_url | Link tıklandı |
| `email_unsubscribed` | sequence_id, reason | Abonelik iptal |
| `email_bounced` | email_id, bounce_type: hard \| soft | Bounce |

### 3.11 Hata ve Performans

| Event | Property'ler | Tetikleyici |
|-------|-------------|-------------|
| `error_page_shown` | error_code: 404 \| 500, page_url | Hata sayfası |
| `error_form_validation` | form_name, field_name, error_type | Form doğrulama hatası |
| `error_payment` | error_code, payment_method | Ödeme hatası |
| `error_tool` | tool_name, error_type, step | Araç hatası |

**Toplam benzersiz event sayısı: ~85**

---

## 4. GA4 Yapılandırması

### 4.1 Property Ayarları

| Ayar | Değer |
|------|-------|
| Property adı | Lipödem Türkiye -- Production |
| Zaman dilimi | Europe/Istanbul (GMT+3) |
| Para birimi | TRY |
| Industry category | Health |
| Data retention | 14 ay |
| Reporting identity | Blended (User-ID + Device) |
| Cross-domain | Yok (tek domain) |
| Internal traffic | Ofis IP'leri + developer cihazları filtrele |

### 4.2 Data Streams

| Stream | Tip | Enhanced Measurement |
|--------|-----|---------------------|
| lipodemturkiye.com | Web | Page views, Scrolls, Outbound clicks, Site search, File downloads |

### 4.3 Custom Dimensions

| Dimension | Scope | Parameter | Kullanım |
|-----------|-------|-----------|----------|
| user_type | User | user_type | free \| trial \| basic_premium \| full_premium \| founder |
| user_segment | User | user_segment | explorer \| suspicious \| treatment \| info_seeker \| buyer |
| diagnosis_status | User | diagnosis_status | diagnosed \| suspected \| researching \| unknown |
| lipedema_stage | User | lipedema_stage | stage_1 \| stage_2 \| stage_3 \| unknown |
| user_city | User | user_city | Şehir adı |
| content_pillar | Event | content_pillar | tani \| tedavi \| beslenme \| egzersiz \| ruh_sagligi \| turkiye_rehberi |
| tool_name | Event | tool_name | semptom_testi \| evre_degerlendirme \| klinik_bulucu \| beslenme_planlayici \| maliyet_hesaplayici |
| risk_level | Event | risk_level | low \| medium \| high |
| popup_type | Event | popup_type | exit_intent \| scroll \| time \| lead_magnet \| premium |

### 4.4 Custom Metrics

| Metric | Scope | Parameter | Kullanım |
|--------|-------|-----------|----------|
| engagement_score | Event | engagement_score | 0-100 etkileşim skoru |
| tool_completion_time | Event | tool_completion_time | Araç tamamlama süresi (sn) |
| article_read_time | Event | article_read_time | Makale okuma süresi (sn) |
| checklist_completion | Event | checklist_completion_pct | Checklist tamamlama % |

### 4.5 Conversions (Key Events)

| Dönüşüm | Event | Counting | Değer |
|----------|-------|----------|-------|
| Kayıt tamamlama | `signup_completed` | Once per user | - |
| Semptom testi tamamlama | `tool_completed` (tool_name=semptom_testi) | Once per user | - |
| Premium deneme başlatma | `premium_trial_started` | Once per user | - |
| Premium ödeme tamamlama | `premium_payment_completed` | Every | amount (TRY) |
| Lead magnet indirme | `content_lead_magnet_download` | Once per user | - |
| Klinik iletişim tıklama | `clinic_finder_contact` | Every | - |
| Email kaydı | `email_signup` | Once per user | - |
| Onboarding tamamlama | `onboarding_checklist_complete` | Once per user | - |

### 4.6 Audiences (Kitleler)

| Kitle | Koşul | Kullanım |
|-------|-------|----------|
| Kayıtlı kullanıcılar | `signup_completed` event fired | Retention analizi |
| Aktive olmuş | `tool_completed` 2+ kez | Engagement analizi |
| Premium potansiyel | engagement_score >= 35 AND user_type = free | Remarketing |
| Deneme kullanıcıları | user_type = trial | Dönüşüm takibi |
| Premium üyeler | user_type IN (basic_premium, full_premium) | Churn analizi |
| Yüksek risk skoru | risk_level = high | İçerik kişiselleştirme |
| İnaktif (14 gün) | Son event > 14 gün | Re-engagement |
| Churn riski | Premium + son giriş > 7 gün | Retention |

---

## 5. GTM Konteyner Yapısı

### 5.1 Konteyner Organizasyonu

```
GTM Container: GTM-XXXXXXX
│
├── Tags (Etiketler)
│   ├── GA4 -- Configuration
│   ├── GA4 -- All Events (catch-all)
│   ├── GA4 -- Tool Events
│   ├── GA4 -- Premium Events
│   ├── GA4 -- Content Events
│   ├── GA4 -- E-Commerce
│   ├── Hotjar -- Configuration
│   └── Consent Mode -- Configuration
│
├── Triggers (Tetikleyiciler)
│   ├── Custom Event -- signup_completed
│   ├── Custom Event -- tool_*
│   ├── Custom Event -- premium_*
│   ├── Custom Event -- popup_*
│   ├── Custom Event -- onboarding_*
│   ├── Custom Event -- content_*
│   ├── Scroll Depth -- 25/50/75/100
│   ├── Timer -- 60 seconds (article read)
│   └── Consent -- Analytics Accepted
│
├── Variables (Değişkenler)
│   ├── DLV -- event_name
│   ├── DLV -- tool_name
│   ├── DLV -- plan_name
│   ├── DLV -- article_slug
│   ├── DLV -- popup_id
│   ├── DLV -- user_type
│   ├── DLV -- engagement_score
│   ├── Constant -- GA4 Measurement ID
│   └── Cookie -- consent_analytics
│
└── Folders (Klasörler)
    ├── 01 - Configuration
    ├── 02 - GA4 Events
    ├── 03 - Consent
    └── 04 - Third Party
```

### 5.2 Data Layer Push Örnekleri

```typescript
// Araç tamamlama
window.dataLayer?.push({
  event: 'tool_completed',
  tool_name: 'semptom_testi',
  total_time: 145,
  result_score: 32,
  risk_level: 'high',
});

// Premium ödeme
window.dataLayer?.push({
  event: 'premium_payment_completed',
  plan_name: 'tam_premium',
  amount: 149,
  currency: 'TRY',
  billing_period: 'monthly',
  transaction_id: 'iyz_abc123',
  ecommerce: {
    transaction_id: 'iyz_abc123',
    value: 149,
    currency: 'TRY',
    items: [{
      item_id: 'tam_premium_monthly',
      item_name: 'Tam Premium - Aylık',
      price: 149,
      quantity: 1,
      item_category: 'subscription',
    }],
  },
});

// İçerik okuma (60 sn + %75 scroll)
window.dataLayer?.push({
  event: 'content_article_read',
  article_slug: 'lipodem-nedir',
  read_time_sec: 342,
  scroll_depth: 85,
  content_pillar: 'tani',
});
```

---

## 6. E-Ticaret ve Abonelik Tracking

### 6.1 GA4 E-Commerce Event Eşleştirme

| Platform Aksiyonu | GA4 E-Commerce Event | Kullanım |
|-------------------|---------------------|----------|
| Fiyatlandırma sayfası görüntüleme | `view_item_list` | Ürün listesi görüntüleme |
| Plan seçimi | `select_item` + `view_item` | Ürün seçimi |
| Ödeme başlatma | `begin_checkout` | Checkout funnel |
| Ödeme bilgisi girişi | `add_payment_info` | Ödeme form tamamlama |
| Ödeme tamamlama | `purchase` | Gelir takibi |
| Deneme başlatma | `purchase` (value=0, coupon=trial) | Trial tracking |
| Plan yükseltme | `purchase` (new value) | Upgrade tracking |
| İptal | Custom: `premium_cancelled` | Churn tracking |
| Yenileme | `purchase` (recurring) | Retention geliri |

### 6.2 Abonelik Değer Hesaplaması

```typescript
// GA4'te lifetime value tahmini için
// Her yenileme bir purchase event olarak gönderilir
function trackRenewal(subscription: Subscription) {
  window.dataLayer?.push({
    event: 'purchase',
    ecommerce: {
      transaction_id: subscription.renewalId,
      value: subscription.amount,
      currency: 'TRY',
      items: [{
        item_id: subscription.planId,
        item_name: subscription.planName,
        price: subscription.amount,
        quantity: 1,
        item_category: 'subscription_renewal',
        item_category2: `month_${subscription.renewalCount}`,
      }],
    },
  });
}
```

### 6.3 İyzico Webhook → Analytics Pipeline

```
iyzico Webhook
    │
    ├── payment.success → DB güncelle → dataLayer push (purchase)
    ├── payment.failure → DB güncelle → dataLayer push (error_payment)
    ├── subscription.renewed → DB güncelle → dataLayer push (purchase)
    ├── subscription.cancelled → DB güncelle → dataLayer push (premium_cancelled)
    └── refund.completed → DB güncelle → GA4 Measurement Protocol (refund)
```

**Server-side event gönderimi (webhook'lar için):**

```typescript
// lib/analytics/server.ts
import { BetaAnalyticsDataClient } from '@google-analytics/data';

async function sendServerEvent(event: string, params: Record<string, unknown>) {
  await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA4_ID}&api_secret=${API_SECRET}`, {
    method: 'POST',
    body: JSON.stringify({
      client_id: params.client_id,
      events: [{ name: event, params }],
    }),
  });
}
```

---

## 7. Dönüşüm Funnel'ları

### 7.1 Ana Dönüşüm Funnel'ı

```
Ziyaret → Araç Kullanımı → Kayıt → Aktivasyon → Premium Deneme → Ödeme
  100%       35%              15%       8%            3%             1.5%
```

**GA4 Funnel Exploration yapılandırması:**

| Adım | Event | Koşul |
|------|-------|-------|
| 1. Ziyaret | `page_view` | İlk ziyaret |
| 2. Araç başlatma | `tool_started` | Herhangi bir araç |
| 3. Araç tamamlama | `tool_completed` | Herhangi bir araç |
| 4. Kayıt | `signup_completed` | - |
| 5. İkinci araç/içerik | `tool_completed` VEYA `content_article_read` | 2. unique event |
| 6. Premium sayfa | `premium_page_view` | - |
| 7. Plan seçimi | `premium_plan_selected` | - |
| 8. Deneme başlatma | `premium_trial_started` | - |
| 9. Ödeme | `premium_payment_completed` | - |

### 7.2 İçerik → Lead Funnel'ı

```
Makale Görüntüleme → Makale Okuma → 2. Makale → Email Kaydı → Araç Kullanımı
      100%               45%           25%          8%            12%
```

### 7.3 Araç → Premium Funnel'ı

```
Semptom Testi → Sonuç Görme → Evre Değerlendirme → Premium Görme → Deneme
    100%            85%              30%                 15%          5%
```

### 7.4 Klinik Bulucu Funnel'ı

```
Klinik Bulucu Açma → Şehir Seçimi → Sonuç Görme → Klinik Tıklama → İletişim
       100%              80%            70%            25%            8%
```

---

## 8. İçerik Performans Metrikleri

### 8.1 Makale Performans Kartı

Her makale için izlenecek metrikler:

| Metrik | Kaynak | Hesaplama |
|--------|--------|-----------|
| Sayfa görüntüleme | GA4 page_view | Toplam + tekil |
| Ortalama okuma süresi | content_article_read.read_time_sec | Ortalama |
| Scroll tamamlama oranı | scroll_depth=%100 / page_view | Yüzde |
| "Okunma" oranı | content_article_read / content_article_view | Yüzde |
| CTA tıklama oranı | cta_clicked (page=makale) / page_view | Yüzde |
| Paylaşım oranı | content_article_share / page_view | Yüzde |
| Kaydetme oranı | content_article_bookmark / page_view | Yüzde |
| Sonraki sayfa | page_view (sonraki) | Navigasyon akışı |
| Bounce rate | GA4 engagement_rate'in tersi | Yüzde |
| Organik trafik payı | GSC + GA4 organic | Yüzde |

### 8.2 Pillar Bazlı Performans

| Pillar | İzleme Metrikleri |
|--------|-------------------|
| Tanı ve Farkındalık | Giriş trafiği, semptom testi dönüşümü |
| Tedavi Yol Haritası | Klinik bulucu dönüşümü, premium dönüşüm |
| Beslenme | Beslenme planlayıcı kullanımı, LM indirme |
| Egzersiz | Video izleme, program başlatma |
| Ruh Sağlığı | Topluluk yönlendirmesi, hikaye okuma |
| Türkiye Rehberi | Klinik bulucu, şehir sayfası trafiği |

---

## 9. Araç Kullanım Metrikleri

### 9.1 Araç Bazlı Dashboard

| Metrik | Semptom Testi | Evre Değerl. | Klinik Bulucu | Beslenme | Maliyet |
|--------|--------------|-------------|---------------|----------|---------|
| Başlatma | tool_started | tool_started | tool_started | tool_started | tool_started |
| Tamamlama | tool_completed | tool_completed | clinic_search | nutrition_plan | cost_result |
| Tamamlama oranı | % | % | % | % | % |
| Ort. süre | sn | sn | sn | sn | sn |
| Terk etme adımı | step # | step # | - | step # | step # |
| Sonuç CTA tıklama | % | % | % | % | % |
| Premium dönüşüm | % | % | % | % | % |

### 9.2 Semptom Testi Özel Metrikleri

| Metrik | Hesaplama |
|--------|-----------|
| Risk dağılımı | Düşük/Orta/Yüksek yüzdeleri |
| Ortalama risk skoru | Tüm tamamlamaların ortalaması |
| Soru bazlı yanıt dağılımı | Her soru için seçenek yüzdeleri |
| Sonuç sayfası → kayıt dönüşümü | signup_completed / tool_result_view |
| Sonuç paylaşma oranı | tool_result_share / tool_completed |
| Tekrar kullanım oranı | 2+ tamamlama / toplam kullanıcı |

---

## 10. Kullanıcı Segmentasyonu

### 10.1 Davranış Bazlı Segmentler

| Segment | Tanım | GA4 Audience Koşulu |
|---------|-------|---------------------|
| **Keşifçi** | 1-2 sayfa, araç kullanmadı | page_view < 3 AND tool_started = 0 |
| **Araştırmacı** | 3+ makale okudu, araç başlattı | content_article_read >= 3 OR tool_started >= 1 |
| **Aktif** | 2+ araç tamamladı, kayıtlı | tool_completed >= 2 AND signup_completed |
| **Premium potansiyel** | Aktif + premium sayfası ziyaret | Aktif + premium_page_view |
| **Premium deneme** | Aktif deneme | user_type = trial |
| **Premium üye** | Ödeme yapan | user_type IN (basic_premium, full_premium) |
| **Churn riski** | Premium + 7 gün inaktif | Premium + last_event > 7 gün |
| **Savunucu** | Paylaşım + topluluk + referral | share >= 2 OR community_post >= 1 |

### 10.2 Hasta Yolculuğu Segmentleri

| Segment | Tanım | Tetikleyici |
|---------|-------|-------------|
| Farkındalık öncesi | Semptom bazlı arama ile geldi | referrer search query + bacak/diyet |
| Araştırma | Semptom testi + makaleler | tool_completed(semptom) + article_read >= 2 |
| Tanı sonrası | Evre değerlendirme + tedavi içerik | tool_completed(evre) + tedavi pillar |
| Tedavi arayan | Klinik bulucu + maliyet hesaplayıcı | clinic_search + cost_calculator |
| Tedavi sonrası | Bakım içerikleri + topluluk | beslenme/egzersiz + community |

---

## 11. Dashboard ve Raporlama

### 11.1 Günlük İzleme (Looker Studio)

| Widget | Metrik | Kaynak |
|--------|--------|--------|
| Toplam ziyaretçi (bugün) | Users | GA4 |
| Kayıt sayısı (bugün) | signup_completed | GA4 |
| Araç kullanımı (bugün) | tool_started, tool_completed | GA4 |
| Premium deneme (bugün) | premium_trial_started | GA4 |
| Gelir (bugün) | purchase revenue | GA4 |
| Hata sayısı | error_* events | GA4 |

### 11.2 Haftalık Rapor

| Bölüm | İçerik |
|-------|--------|
| Trafik özeti | Kullanıcı, oturum, sayfa görüntüleme, kaynak dağılımı |
| Dönüşüm | Kayıt, deneme, ödeme, email |
| İçerik | En çok okunan 10 makale, ortalama okuma süresi |
| Araçlar | Araç başlatma/tamamlama, risk dağılımı |
| Premium | MRR, deneme dönüşüm oranı, churn |
| SEO | Organik tıklama, impression, ortalama pozisyon |
| Email | Açılma oranı, tıklama oranı, unsubscribe |

### 11.3 Aylık İş Raporu

| KPI | Hedef (Ay 1) | Hedef (Ay 3) | Hedef (Ay 6) |
|-----|-------------|-------------|-------------|
| Aylık tekil ziyaretçi | 5.000 | 25.000 | 100.000 |
| Kayıt sayısı | 500 | 2.500 | 10.000 |
| Aktivasyon oranı | %40 | %50 | %55 |
| Premium deneme | 50 | 250 | 1.000 |
| Deneme → Ödeme dönüşüm | %15 | %20 | %25 |
| MRR (TL) | 1.000 | 15.000 | 75.000 |
| Churn oranı | - | %8 | %5 |
| NPS | - | 40+ | 50+ |

---

## 12. KVKK ve Gizlilik Uyumu

### 12.1 Consent Mode v2

```typescript
// GTM Consent Mode başlangıç ayarları
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'functionality_storage': 'granted',
  'security_storage': 'granted',
  'wait_for_update': 500,
  'region': ['TR'],
});

// Kullanıcı onay verdikten sonra
function acceptAnalytics() {
  gtag('consent', 'update', {
    'analytics_storage': 'granted',
  });
}
```

### 12.2 Cookie Banner Entegrasyonu

| Kategori | Çerezler | Varsayılan |
|----------|----------|-----------|
| Zorunlu | Session, CSRF, auth | Granted (izin gerekmez) |
| Analitik | GA4 (_ga, _ga_*), Hotjar | Denied (izin gerekli) |
| Pazarlama | Yok (şimdilik) | Denied |

### 12.3 Veri Minimizasyonu

| Kural | Uygulama |
|-------|----------|
| IP anonimizasyonu | GA4 varsayılan olarak anonimleştirir |
| PII yok | Event property'lerde email, telefon, ad soyad yok |
| User-ID hashlenmiş | Gerçek email/ID yerine hash kullanılır |
| Data retention | 14 ay (GA4 maksimum) |
| Silme hakkı | Talep üzerine GA4 User Explorer'dan silme |

---

## 13. Teknik Implementasyon

### 13.1 Next.js Analytics Provider

```typescript
// components/analytics/AnalyticsProvider.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      window.dataLayer?.push({
        event: 'page_view',
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      {children}
    </>
  );
}
```

### 13.2 Analytics Utility

```typescript
// lib/analytics/track.ts
type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === 'undefined') return;
  
  window.dataLayer?.push({
    event: eventName,
    ...params,
  });
}

// Kullanım örnekleri:
// trackEvent('tool_started', { tool_name: 'semptom_testi' });
// trackEvent('cta_clicked', { button_text: 'Teste Başla', page: '/lipodem-nedir', section: 'hero' });
```

### 13.3 Dosya Yapısı

```
src/
├── components/
│   └── analytics/
│       ├── AnalyticsProvider.tsx    // GTM + GA4 yükleme
│       ├── ConsentBanner.tsx        // KVKK cookie banner
│       └── TrackPageView.tsx        // SPA sayfa takibi
│
├── lib/
│   └── analytics/
│       ├── track.ts                // trackEvent utility
│       ├── ecommerce.ts            // E-commerce event helpers
│       ├── tools.ts                // Araç event helpers
│       └── server.ts               // Server-side Measurement Protocol
│
└── hooks/
    ├── useTrackEvent.ts            // React hook wrapper
    ├── useScrollDepth.ts           // Scroll depth tracking
    └── useReadTime.ts              // Okuma süresi tracking
```

---

## 14. Doğrulama ve QA

### 14.1 Test Checklist

| # | Kontrol | Araç | Durum |
|---|---------|------|-------|
| 1 | GTM konteyner yükleniyor | GTM Preview Mode | Beklemede |
| 2 | GA4 page_view her navigasyonda tetikleniyor | GA4 DebugView | Beklemede |
| 3 | Consent Mode varsayılan denied | GTM Preview | Beklemede |
| 4 | Consent kabul sonrası analytics_storage granted | GTM Preview | Beklemede |
| 5 | signup_completed doğru property'lerle | GA4 DebugView | Beklemede |
| 6 | tool_completed tüm araçlarda | GA4 DebugView | Beklemede |
| 7 | E-commerce purchase event doğru amount | GA4 DebugView | Beklemede |
| 8 | Custom dimensions GA4'te görünüyor | GA4 Realtime | Beklemede |
| 9 | Conversion'lar doğru sayılıyor | GA4 Reports | Beklemede |
| 10 | Internal traffic filtreleniyor | GA4 Realtime | Beklemede |
| 11 | Mobilde event'ler tetikleniyor | GA4 DebugView (mobil) | Beklemede |
| 12 | PII sızıntısı yok | Event inspector | Beklemede |

### 14.2 Lansman Sonrası İlk Hafta Kontrol

| Gün | Kontrol |
|-----|---------|
| Gün 1 | GA4 Realtime: veri akışı var mı? |
| Gün 1 | Conversion'lar: signup, tool_completed kaydediliyor mu? |
| Gün 2 | Funnel: adımlar arası geçişler mantıklı mı? |
| Gün 3 | E-commerce: test purchase doğru gelir gösteriyor mu? |
| Gün 5 | Custom dimensions: segment, pillar, tool_name doluyor mu? |
| Gün 7 | Tüm metriklerin doğruluğu: dashboard vs gerçek sayılar |

---

## BAĞLANTI HARİTASI

| Bu Çıktı | İlişkili Çıktılar |
|----------|-------------------|
| Kayıt event'leri | signup-output.md (30+ event) |
| Onboarding event'leri | onboarding-output.md (38 event) |
| CTA ve funnel event'leri | cro-output.md (funnel haritası) |
| Popup event'leri | popups-output.md (32 event) |
| Email event'leri | emails-output.md (ESP webhook) |
| E-commerce | pricing-output.md (4 tier, iyzico) |
| Araç metrikleri | free-tools-output.md (5 araç) |
| SEO metrikleri | seo-audit-output.md (GSC kurulumu) |
| AI izleme | ai-seo-output.md (AI görünürlük KPI) |
