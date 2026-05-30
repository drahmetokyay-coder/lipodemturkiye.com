# Test Süiti — Tasarım Spec'i

**Tarih:** 2026-05-30
**Sahip:** drahmetokyay@gmail.com
**Durum:** Onay bekleniyor → writing-plans'a geçilecek

---

## 1. Amaç ve Bağlam

Lipödem Türkiye landing page'inde 10 self-assessment test vitrini var; sadece 2'si (Lipödem Semptom Testi, Evre Belirleme) çalışıyor. Eksik 8 test sayfası boş slug'lar olarak duruyor. Bu spec, 10 testin tamamını derinleştirip ayrı sayfalara taşımayı, landing'i premium animasyonlu bir TestHub ile yeniden tasarlamayı ve sonuçtan lead capture'ı kapsar.

**Gelir modeline bağ:** Hibrit eğitim+klinik yönlendirme. Her test sonucu (a) ilgili blog yazılarına, (b) bir sonraki teste, (c) uygun uzman kategorisine yönlendirir; PDF indirme anında e-posta toplanır (KVKK uyumlu).

## 2. Kapsam Kararları (özet)

| Karar | Seçim |
|---|---|
| Kapsam | 10 test (2 deepen + AEO upgrade, 8 yeni) |
| Klinik temel | Valide ölçeklerden uyarla (Schmeller, Földi, VAS, LYMPH-ICF, MDS, Borg, Halland vd.) |
| Sonuç akışı | Skor + 3-kart personalized recommendation (Öğren / Sıradaki test / Uzman) |
| Test mimarisi | **Her teste özel wizard** (shared engine yok — esneklik tercihi) |
| Landing UI | Tabs/filter + bento grid + premium animasyonlar (v4 mockup) |
| Route convention | SEO-long-slug (örn. `lipodem-semptom-testi`) |
| Persistence | localStorage (per-test last result) |
| AEO | Tam paket (Quiz schema + breadcrumb + meta + FAQ) |
| Lead capture | "Sonucu PDF indir" → e-posta gate → Vercel KV |
| PDF üretim | Server-side (Vercel function + pdf-lib) |
| KVKK | Açık rıza checkbox + gizlilik linki |
| Yürütme | Faz 1 ortak iskelet (ana ben) + Faz 2 4 paralel agent (2'şer test) |

## 3. Route Haritası

Her test `/araclar/<seo-slug>/` altında ayrı sayfa olur.

| # | Slug | Eski slug |
|---|---|---|
| 1 | `lipodem-semptom-testi` | `semptom-testi` (rename) |
| 2 | `lipodem-evre-belirleme` | `evre-degerlendirme` (rename) |
| 3 | `lipodem-lenfodem-ayirici-tani` | (yeni) |
| 4 | `agri-vas-skoru` | (yeni) |
| 5 | `lipodem-yasam-kalitesi` | (yeni) |
| 6 | `bel-kalca-orani-whr` | (yeni) |
| 7 | `anti-inflamatuar-diyet-skoru` | (yeni) |
| 8 | `kompresyon-ihtiyac-testi` | (yeni) |
| 9 | `egzersiz-tolerans-testi` | (yeni) |
| 10 | `cerrahi-adaylik-degerlendirmesi` | (yeni) |

**Redirect tablosu** (`next.config.ts` → `redirects()`):
- `/araclar/semptom-testi` → `/araclar/lipodem-semptom-testi` (301)
- `/araclar/evre-degerlendirme` → `/araclar/lipodem-evre-belirleme` (301)
- TestHub'taki tüm eski slug'lar yeni isimlere güncellenir.

## 4. Klinik Temel — Valide Ölçek Eşleştirmesi

| # | Test | Soru | Valide Ölçek | Skor Aralığı | Bantlar |
|---|---|---|---|---|---|
| 1 | Semptom | 12 | Schmeller-Cornely semptom listesi + Allen-Hines 5 kriter | 0-45 (+golden triangle bonus, unilateral/pitting penalty) | Düşük / Orta / Yüksek |
| 2 | Evre | 9 | Schmeller-Meier-Stutz evre sınıflaması | 9-27 | Evre I / II / III |
| 3 | Lipo/Lenfo Ayırıcı | 10 | Földi differential dx + Stemmer sign | −10 .. +10 | Lipödem dominant / Karışık / Lenfödem dominant |
| 4 | Ağrı VAS | 6 | VAS 0-10 + Brief Pain Inventory kısa form | 0-60 | Hafif / Orta / Şiddetli |
| 5 | Yaşam Kalitesi | 14 | LYMPH-ICF-LL + EQ-5D-3L uyarlaması | 0-70 | İyi / Orta / Düşük QoL |
| 6 | WHR | 3 | WHO cut-off (kadın >0.85) + bel-boy oranı | Hesaplama | Lipödem patern uyumlu / değil |
| 7 | Anti-İnflamatuar Diyet | 10 | Mediterranean Diet Score + AHEI-2010 uyarlaması | 0-30 | Düşük uyum / Orta / Yüksek |
| 8 | Kompresyon | 7 | Cornely-Schmeller endikasyon algoritması + CEAP-C | 0-21 | Önerilmez / Round-knit yeterli / Flat-knit gerekli |
| 9 | Egzersiz Tolerans | 8 | Borg RPE 6-20 + lipödeme uyarlı aktivite anketi | 0-32 | Yüksek / Orta / Düşük tolerans |
| 10 | Cerrahi Adaylık | 11 | Cornely endikasyon + ASA fizik durum + Halland kriterleri | 0-33 + 3 mutlak kontrendikasyon flag | Aday değil / Sınır aday / Güçlü aday |

**Klinik kırmızı bayraklar (flags):**
- Test 1 (Semptom): Q7=tek taraflı şişlik → `flag: "unilateral"` → recommendation engine'i Lipo/Lenfo Ayırıcı'ya yönlendirir
- Test 3 (Lipo/Lenfo): Stemmer pozitif → `flag: "stemmer-positive"` → band'i override edebilir, uzman önerisi FTR'ye sapar
- Test 10 (Cerrahi): aktif enfeksiyon / kontrolsüz koagülasyon → mutlak kontrendikasyon flag, "Güçlü aday" bandı bile olsa "Aday değil" sonucuna sapar

## 5. Klasör ve Dosya Yapısı

```
src/
  app/(marketing)/araclar/
    page.tsx                                  ← mevcut hub sayfa (güncellenir)
    <slug>/page.tsx                           ← her test için (10 sayfa)
  app/api/
    lead/route.ts                             ← e-posta gate POST
    result-pdf/route.ts                       ← server-side PDF üretim
  components/tools/
    <slug>/
      <slug>-wizard.tsx                       ← intro→soru→sonuç state machine
      <slug>-question.tsx
      <slug>-progress.tsx
      <slug>-result.tsx
    shared/
      email-capture-modal.tsx                 ← KVKK consent + email input
      recommendation-card.tsx                 ← 3-kart sonuç önerisi
      print-stylesheet.tsx                    ← @media print stilleri
  components/marketing/
    test-hub.tsx                              ← landing v4 redesign
  data/
    tests/
      <slug>.ts                               ← QUESTIONS + calculateResult + RESULT_CONTENT
  lib/
    recommendations.ts                        ← skor + slug + flags → {blogs, nextTest, expertCategory}
    test-storage.ts                           ← localStorage helper
    kv.ts                                     ← Vercel KV client wrapper
    pdf-generator.ts                          ← pdf-lib helper (server-side)
    schema/
      quiz.ts                                 ← Quiz JSON-LD builder
```

## 6. Wizard Patern (her testte aynı)

```
intro  →  question[1..N]  →  computing  →  result
  ↑                                          ↑
  └────────── "Yeniden başla" ──────────────┘
```

**Davranış:**
- Intro: test adı, valide ölçek referansı, süre/soru sayısı, "tanı koymaz" uyarısı, "Başla" CTA, varsa "Son sonucunuz: X · tarih" rozeti
- Soru: tek soru + 3-5 seçenek, seçince otomatik ileri, geri butonu cevabı korur
- Progress: `1 / 12` + dolan bar (testin renk paletinde)
- Computing: mikro loading (300ms) — fake olsa da sonucu "değerlendiriliyor" hissi
- Result: skor görselleştirme + klinik yorum + flag uyarı + 3-kart recommendation + indirme butonu + yeniden başlat

**Veri tipi (per-test data dosyası):**
```ts
export type RiskBand = "LOW" | "MODERATE" | "HIGH";
export interface QuestionOption { label: string; score: number; flag?: string; }
export interface Question { id: number; section?: string; text: string; options: QuestionOption[]; }
export interface TestResult {
  totalScore: number; maxScore: number; percentage: number;
  band: RiskBand;
  flags?: string[];
  bandReason?: string;
}
export const QUESTIONS: Question[];
export const RESULT_CONTENT: Record<RiskBand, {
  title: string; color: string; description: string;
  clinicalInterpretation: string; steps: string[];
}>;
export function calculateResult(answers: Record<number, number>): TestResult;
export const SCALE_REFERENCE: { name: string; citation: string; }; // ör. "Schmeller-Meier-Stutz 2018"
```

## 7. Sonuç Sayfası — 3-Kart Recommendation

**Yapı (yukarıdan aşağıya):**

1. **Skor görselleştirme** — büyük yüzde ringi (conic-gradient, band rengi), band etiketi, 2 paragraf klinik yorum, flag uyarı şeridi (varsa)
2. **3-kart "Sıradaki Adımlar"**
   - **Öğren** (📖 teal): 2-3 blog yazısı (band'a göre `src/data/blogs.ts`'ten filtre)
   - **Sıradaki test** (🧪 yeşil): `recommendations.ts` matrisinden seçilen test slug → "Testi başlat" CTA
   - **Uzman** (👤 turuncu): band + test → uygun uzman kategorisi → uzman dizinine derin link
3. **Eylem satırı**
   - **Birincil:** "Sonucu PDF indir" → e-posta gate modal
   - **İkincil:** "Tarayıcıdan yazdır" (gate yok, print dialog)
   - **Tersiyer link:** "Yeniden başla"
4. **Yasal uyarı:** "Bu test tanı aracı değildir."

**`recommendations.ts` mantığı:**
```ts
type RecommendInput = { slug: TestSlug; result: TestResult; };
type RecommendOutput = {
  blogs: BlogRef[];               // 2-3 öneri
  nextTest: { slug: TestSlug; rationale: string } | null;
  expertCategory: ExpertCategory;
};
function recommend(input: RecommendInput): RecommendOutput;
```

Routing matrisi (özet — tam spec implementation'da):
| Test | LOW | MODERATE | HIGH | Flag override |
|---|---|---|---|---|
| Semptom | yaşam-kalitesi | evre-belirleme | evre-belirleme | unilateral → lipo/lenfo |
| Evre | egzersiz | kompresyon | kompresyon | — |
| Lipo/Lenfo | diyet | ağrı-vas | evre | stemmer+ → uzman (FTR) |
| Ağrı-VAS | yaşam-kalitesi | qol | qol | — |
| QoL | egzersiz | kompresyon | cerrahi-aday | — |
| WHR | semptom | semptom | evre | — |
| Diyet | (yok) | (yok) | (yok) | — |
| Kompresyon | egzersiz | (yok) | (yok) | — |
| Egzersiz | diyet | diyet | qol | — |
| Cerrahi | qol | (uzmana yönlendir) | uzman (Plastik Cerrah) | mutlak kontrendikasyon → "aday değil" |

**Matristeki "(yok)" notu:** Bazı band'larda sıradaki test önerisi anlamlı değil (ör. Diyet LOW = uyum zaten yüksek, kullanıcıyı zorlamadan blog+uzman önerisiyle yetinilir). Bu durumda 3-kart'ta "Sıradaki test" yerine ikinci bir blog önerisi gösterilir. `recommendations.ts` `nextTest === null` döner.

## 8. Lead Capture Akışı

**Flow:**
```
[Sonucu PDF indir] tıklandı
  → email-capture-modal açılır (testler arası ortak komponent)
  → kullanıcı email + KVKK checkbox ile submit
  → POST /api/lead { email, testSlug, band, score, takenAt, consent: true }
      → Vercel KV: key=`lead:<email>`, value=lead obj (upsert)
  → POST /api/result-pdf { testSlug, result }
      → Server-side pdf-lib ile sonuç render → buffer döndür
  → Browser PDF blob download tetikler
```

**Endpoints:**
- `POST /api/lead`
  - Body: `{ email: string, testSlug: string, band: string, score: number, consent: boolean }`
  - Validation: email regex, consent === true, testSlug whitelist
  - Vercel KV: `lead:${email}` → JSON (testleri array olarak biriktir)
  - Response: `{ ok: true }` veya 400
- `POST /api/result-pdf`
  - Body: `{ testSlug: string, result: TestResult }`
  - Response: PDF buffer, `Content-Type: application/pdf`, `Content-Disposition: attachment; filename="<slug>-sonuc.pdf"`

**KVKK gerekleri:**
- Modal'da: `<input type="checkbox" id="consent" required>` etiketi: "Gizlilik politikasını okudum, sonucumu ve bilgilendirici e-postalar almayı onaylıyorum. Gizlilik politikası →"
- Gizlilik politikası sayfasına (`src/app/(marketing)/gizlilik-politikasi/page.tsx` — yoksa eklenir) "test sonuç e-postaları" maddesi yazılır.
- KV'de sadece email + minimum metadata; cevap tek tek soru saklanmaz.

**Çevre değişkenleri (deploy öncesi gerekli):**
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

**Graceful degradation:** Vercel KV env var'lar yoksa `/api/lead` 503 döner, modal UI "Hizmet şu an kullanılamıyor, sonucu yazdırabilirsiniz" gösterir. PDF endpoint KV'den bağımsız çalışır — email submit başarısız olsa bile PDF indirilebilir (KV down olsa platform işlemeye devam eder).

## 9. AEO Paketi (her test sayfası için)

Her `<slug>/page.tsx` şunları içerir:

1. **`metadata`** — title (anahtar kelimeli, ≤60 char) + description (≤155 char) + canonical
2. **Quiz JSON-LD** — `src/lib/schema/quiz.ts` helper:
   ```ts
   buildQuizSchema({
     name, description, url, numberOfQuestions, educationalLevel,
     about: { @type: "MedicalCondition", name: "Lipödem", code: "E88.2" },
     publisher: { name: "Lipödem Türkiye", url: "https://lipodemturkiye.com" }
   })
   ```
3. **Breadcrumb JSON-LD** — Ana sayfa → Araçlar → Test adı
4. **FAQ section** — sayfanın altında 4-6 SSS (test özelinde) + `FAQPage` JSON-LD
5. **Hreflang stub** — `<link rel="alternate" hreflang="tr-TR" href="<canonical-url>">` ve `<link rel="alternate" hreflang="x-default" href="<canonical-url>">`. EN dil sayfaları henüz yok, sonraki spec'te eklenecek.

**Hedef AEO skoru:** 90+/100 (`aeo-optimization` skill ile her sayfa için doğrulanır).

## 10. Landing TestHub Redesign — v4

Mockup referansı: `.superpowers/brainstorm/3640702-1780167361/content/landing-tabs-v4.html`

**Bileşenler:**
- **Aurora background:** 20s ease-in-out animasyonlu 2 gradient orb (#1A6B5A + #C46B3D), blur 80px
- **Noise texture:** SVG fractal noise, opacity 0.04, overlay blend
- **Bidirectional ticker:** üstte 2 capsule strip (biri sola, biri sağa kayar) — "214 kişi test çözüyor / 12.450 katılım"
- **Sound visualizer toggle:** sağ üst dekoratif 3-bar equalizer animasyonu — yalnızca görsel hint, gerçek audio yok (web'de autoplay friction ve KVKK gri alan riskleri var); ileride opsiyonel ambient soundtrack eklenirse buton state'i hazır olur
- **Custom cursor:** `cursor: none` + dot (8px) + ring (38px hover'da 64px); difference blend
- **Global spotlight:** fareyi takip eden 350px radial gradient
- **Hero counter row:** 12.450 toplam katılım / 10 bilimsel test / %92 memnuniyet (animasyonlu sayaç)
- **Filter pills:** Tümü·Tanı·Ölçüm·Tedavi·Cerrahi — aktif pill: gradient teal + 4px outer ring glow
- **Bento grid:** 6 col; hero `span 4 row 2`; diğerleri `span 2`
- **Hero kart:** gradient (#1A6B5A→#0E4A3E) + radial top-left + bottom-right colored noise; shimmer animasyonu; spinning star badge; progress orb sağ alt (conic %64)
- **Magnetic CTA:** hero butonu fareye 220px yakına gelince mıknatıslı follow (vector × 0.18)
- **Küçük kartlar:** beyaz, animated gradient border (CSS mask), 3D tilt on hover (rotateX 3° rotateY -3°, translateY -10px), iç parallax (ikon translateZ:50px, başlık translateZ:20px), spring arrow sağ alt
- **Peek preview:** hover'da kartın altından örnek soru balonu slide-up
- **Sparkline:** her kartta 8-bar engagement minigraph, hover'da scaleY shift
- **"Son sonuç" rozeti:** localStorage'tan okur, pulse animasyonlu chip
- **Card flip:** küçük kartlar tıklanınca 180° döner, arka yüz: tam soru + "Şimdi başla" CTA (opsiyonel — performansa göre)
- **Stagger reveal:** 10 kart 80ms aralıkla translateY 30px + scale 0.95 → 1 görünür
- **Journey strip:** alt, "Yolculuk önerisi: Semptom → Lipo/Lenfo → Evre" + "Önerilen sırayı başlat" CTA (3 testi otomatik sıralı başlatır)
- **Scroll cue:** alt-orta "DEVAM" + zıplayan diagonal ok

**Mevcut TestHub data güncellenir:** `src/components/marketing/test-hub.tsx` içindeki test array yeni slug'lara, kategori filtreleri için `category: "tani"|"olcum"|"tedavi"|"cerrahi"` alanı eklenir.

## 11. Yürütme Planı

### Faz 1 — Ortak İskelet (ana ben, seri)

1. **Route migration**
   - `semptom-testi` klasörünü `lipodem-semptom-testi` olarak rename
   - `evre-degerlendirme` klasörünü `lipodem-evre-belirleme` olarak rename
   - `next.config.ts`'e 301 redirect'ler ekle
   - TestHub data'sında tüm slug'ları yeni isimlere güncelle, 8 yeni testi kategorize ekle
2. **Shared infra**
   - `src/lib/test-storage.ts` (localStorage helper)
   - `src/lib/recommendations.ts` (matris + helper)
   - `src/lib/kv.ts` (Vercel KV client)
   - `src/lib/pdf-generator.ts` (pdf-lib helper)
   - `src/lib/schema/quiz.ts` (Quiz JSON-LD builder)
   - `src/components/tools/shared/email-capture-modal.tsx`
   - `src/components/tools/shared/recommendation-card.tsx`
   - `src/components/tools/shared/print-stylesheet.tsx`
   - `src/app/api/lead/route.ts`
   - `src/app/api/result-pdf/route.ts`
3. **Mevcut 2 testin upgrade'i**
   - Semptom + Evre testlerinin sonuç sayfalarını yeni `recommendation-card` ile yenile
   - Her ikisine Quiz schema + FAQ + breadcrumb ekle
   - PDF indirme gate'ini bağla
4. **Landing TestHub v4 redesign**
   - `test-hub.tsx` baştan yazılır (mockup referansı doğrultusunda)
   - Filter state + kategori bazlı görüntüleme
   - Aurora, noise, ticker, cursor, spotlight, bento, stagger, peek, magnetic CTA, journey, scroll cue
   - localStorage'ten "son sonuç" rozeti okuyup kartlarda göster

### Faz 2 — 4 Paralel Agent (her ajan 2 test yazar)

Her ajan brief'i:
- Klinik veri çıktısı (`.claude/skills/lipedema-expert.md`'nin ilgili bölümleri)
- Valide ölçek referansı (PMID/DOI varsa)
- Skeleton template (mevcut `lipodem-semptom-testi/` klasör yapısı kopyalanır)
- Bu spec'in 4-7. bölümleri
- Hedef AEO 90+/100, FAQ 4-6 soru

**Agent dağılımı:**
- **Agent A:** Lipödem/Lenfödem Ayırıcı Tanı + Ağrı VAS Skoru
- **Agent B:** Yaşam Kalitesi + Bel-Kalça Oranı (WHR)
- **Agent C:** Anti-İnflamatuar Diyet + Kompresyon İhtiyaç
- **Agent D:** Egzersiz Tolerans + Cerrahi Adaylık

Her ajan teslim ederken: `<slug>-wizard.tsx`, `<slug>-question.tsx`, `<slug>-progress.tsx`, `<slug>-result.tsx`, `data/tests/<slug>.ts`, `app/(marketing)/araclar/<slug>/page.tsx` (metadata + JSON-LD + FAQ). Recommendation matrix kendi testleri için ana spec'e dayanır (commit etmez, ana ben birleştirir).

### Faz 3 — Birleştirme & Validation

1. Ana ben `recommendations.ts` matrisini 10 test için tamamlar
2. TestHub'taki yeni test data tam doğrulanır (10/10 link canlı)
3. `tsc --noEmit` + `npm run lint` (baseline'ı geçmeme şartı)
4. Her testte smoke (intro → 1 soru → sonuç → PDF indirme akışı) tarayıcıda
5. AEO score her sayfa için kontrol (90+ hedefi). Ana ben `/aeo-optimization` skill ile 10 sayfayı sırayla geçirir (paralel ajanlar bunu çalıştırmaz — model erişimi farklı olabilir).
6. Vercel KV env var'lar setlenir, prod deploy

## 12. Validation / Acceptance Criteria

- [ ] 10 test sayfası canlı ve smoke geçer
- [ ] TestHub v4 landing'de filter çalışır, hover animasyonları akıcı
- [ ] Eski route'lar 301 ile yeni slug'lara yönlenir
- [ ] localStorage "son sonuç" hem intro hem landing kartında görünür
- [ ] PDF indirme gate'i KVKK consent zorunlu kıldıktan sonra çalışır
- [ ] Vercel KV'de lead kayıtları upsert olur
- [ ] Her test sayfası Quiz schema + breadcrumb + FAQ schema serve eder
- [ ] AEO score her sayfa için 90+/100
- [ ] `tsc --noEmit` clean, lint baseline'ı aşmaz
- [ ] Lighthouse mobile performance 90+ (animation reasonable)
- [ ] Hiç gerçek doktor / klinik / marka adı kullanılmaz (önceki temizlik korunur)

## 13. Riskler

- **Performance:** v4 mockup'taki canvas particle network + custom cursor + 3D tilt mobilde ağır olabilir. **Mitigasyon:** `prefers-reduced-motion` saygı duy, mobilde particle network'ü disable et, tilt'i kapat.
- **PDF üretim soğuk başlangıç:** Vercel function ilk çağrıda 1-2s gecikme. **Mitigasyon:** Loading state göster, "PDF hazırlanıyor" mikro animasyon.
- **KVKK denetim:** Açık rıza UI tasarımı net olmalı, ön-işaretli olmamalı. Gizlilik politikası güncel olmalı.
- **Klinik içerik doğruluğu:** Her test için valide ölçek tam citation ile. **Mitigasyon:** Her test sayfasında "Klinik referans: Schmeller-Meier-Stutz 2018" şeffaf gösterilir.
- **Paralel ajan tutarsızlığı:** 4 ajan farklı style tweak'leri yapabilir. **Mitigasyon:** Skeleton template + shared components zorunluluğu, sonra ana ben smoke + visual diff check.

## 14. Out of Scope (bu spec dışı)

- Authentication / kullanıcı hesabı
- Test sonuçlarını uzun süreli per-user history (sadece localStorage son sonuç)
- Email nurture sequence / automated marketing campaigns (lead sadece toplanır, sonraki spec)
- İngilizce dil desteği (hreflang stub var, içerik yok)
- A/B testing infrastructure
- Premium gating (test sonucu paywall yok)
