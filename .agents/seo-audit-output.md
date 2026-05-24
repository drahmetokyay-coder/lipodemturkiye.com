# Lipödem Türkiye -- Pre-Launch Teknik SEO Audit ve Implementasyon Planı

**Tarih:** 24 Mayıs 2026
**Referans:** site-architecture-output.md, schema-output.md, programmatic-seo-output.md, content-strategy-output.md, react-best-practices-output.md, product-marketing.md
**Teknoloji:** Next.js 15 (App Router) + Vercel
**Domain:** lipodemturkiye.com (henüz yayında değil)
**Kapsam:** Crawlability, indexation, site speed, on-page SEO, URL yapısı, internal linking, mobile UX, YMYL/E-E-A-T, XML sitemap, robots.txt, canonical stratejisi, programmatic SEO teknik gereksinimleri, launch checklist

---

## İÇİNDEKİLER

1. [Yönetici Özeti](#1-yönetici-özeti)
2. [Crawlability ve Indexation](#2-crawlability-ve-indexation)
3. [URL Yapısı ve Canonical Stratejisi](#3-url-yapısı-ve-canonical-stratejisi)
4. [XML Sitemap Mimarisi](#4-xml-sitemap-mimarisi)
5. [Robots.txt Yapılandırması](#5-robotstxt-yapılandırması)
6. [Sayfa Hızı ve Core Web Vitals](#6-sayfa-hızı-ve-core-web-vitals)
7. [Mobil SEO Optimizasyonu](#7-mobil-seo-optimizasyonu)
8. [On-Page SEO Çerçevesi](#8-on-page-seo-çerçevesi)
9. [Internal Linking Stratejisi](#9-internal-linking-stratejisi)
10. [YMYL ve E-E-A-T Sinyalleri](#10-ymyl-ve-e-e-a-t-sinyalleri)
11. [Programmatic SEO Teknik Gereksinimleri](#11-programmatic-seo-teknik-gereksinimleri)
12. [Güvenlik ve HTTPS](#12-güvenlik-ve-https)
13. [Uluslararasılaşma Hazırlığı](#13-uluslararasılaşma-hazırlığı)
14. [Google Search Console Kurulumu](#14-google-search-console-kurulumu)
15. [Pre-Launch SEO Checklist](#15-pre-launch-seo-checklist)
16. [Post-Launch İlk 30 Gün SEO Takvimleri](#16-post-launch-i̇lk-30-gün-seo-takvimleri)

---
---

## 1. Yönetici Özeti

### Genel Değerlendirme

Lipödem Türkiye, **YMYL (Your Money or Your Life)** kategorisinde bir sağlık bilgi platformudur. Google bu kategoride E-E-A-T sinyallerini özellikle sıkı değerlendirir. Pre-launch aşamasında teknik altyapıyı doğru kurarak lansman sonrası hızlı indeksleme ve sıralama elde etmek hedeflenmektedir.

### Kritik Avantajlar

| Avantaj | Detay |
|---------|-------|
| **Sıfır rakip** | Türkçe'de kapsamlı lipödem platformu yok -- boş pazar |
| **Niş alan** | "Lipödem" aramaları düşük rekabet, yüksek niyet |
| **Next.js + Vercel** | SSR/SSG desteği, hızlı CDN, otomatik ISR |
| **Schema planı hazır** | MedicalCondition, Therapy, Clinic, Physician -- rich results potansiyeli |
| **Topic cluster yapısı** | 6 pillar + 75 cluster -- topical authority stratejisi |

### Öncelikli 5 Aksiyon

| # | Aksiyon | Etki | Zorluk | Öncelik |
|---|---------|------|--------|---------|
| 1 | Next.js metadata API ile tüm sayfa title/description/canonical yapılandırması | Yüksek | Orta | P0 |
| 2 | XML sitemap oluşturma (sayfa tipleri bazında bölünmüş) | Yüksek | Düşük | P0 |
| 3 | Internal linking otomasyon sistemi (pillar ↔ cluster) | Yüksek | Orta | P0 |
| 4 | Core Web Vitals optimizasyonu (LCP < 2.5s, CLS < 0.1) | Yüksek | Orta | P0 |
| 5 | E-E-A-T sinyalleri (yazar profili, kaynak gösterimi, tıbbi disclaimer) | Yüksek | Düşük | P0 |

---

## 2. Crawlability ve Indexation

### 2.1 Crawl Bütçesi Analizi

**Toplam tahmini sayfa sayısı:** ~250-300 sayfa (lansman + ilk 6 ay)

| Sayfa Tipi | Sayfa Sayısı | Crawl Önceliği | ISR Revalidation |
|------------|-------------|----------------|------------------|
| Ana sayfa | 1 | En yüksek | 1 saat |
| Pillar sayfalar | 6 | Çok yüksek | 24 saat |
| Cluster makaleler | 75 | Yüksek | 7 gün |
| Şehir klinik sayfaları | 81 | Orta | 30 gün |
| Doktor profilleri | ~30-50 | Orta | 30 gün |
| Karşılaştırma sayfaları | ~10 | Yüksek | 14 gün |
| Blog yazıları | ~20 (başlangıç) | Orta | 7 gün |
| Hasta hikayeleri | ~10 (başlangıç) | Orta | 30 gün |
| Araç sayfaları | 5 | Yüksek | 30 gün |
| Statik sayfalar (hakkımızda, iletişim, hukuk) | ~10 | Düşük | 90 gün |

**Crawl bütçesi tahmini:** ~300 sayfa -- küçük site, crawl bütçesi sorun olmaz. Ancak temiz URL yapısı ve sıfır duplicate, crawl verimini maksimize eder.

### 2.2 Render Stratejisi ve Googlebot Uyumluluğu

| Sayfa Tipi | Render Stratejisi | Googlebot Uyumu | Not |
|------------|-------------------|-----------------|-----|
| Pillar + Cluster | SSG (Static Site Generation) + ISR | Tam HTML yanıt -- mükemmel | `generateStaticParams` ile build-time render |
| Şehir sayfaları | SSG + ISR | Tam HTML yanıt -- mükemmel | 81 sayfa build-time |
| Araçlar (semptom testi vb.) | SSR + client hydration | Dikkat gerekli | Soru/cevap içeriği SSR'da render edilmeli |
| Topluluk | SSR (dinamik) | Orta | UGC, giriş gerektiren alanlar `noindex` |
| Dashboard/Hesap | Client-side | İndekslenmemeli | `noindex, nofollow` |

**Kritik kural:** İnteraktif araçlardaki (semptom testi, evre değerlendirme) açıklama metinleri, soru başlıkları ve sonuç sayfaları SSR ile render edilmelidir. Googlebot JavaScript render edebilir ama gecikmeye neden olabilir.

### 2.3 JavaScript SEO Kontrol Listesi

```typescript
// next.config.ts -- SEO kritik ayarlar
const nextConfig: NextConfig = {
  // Trailing slash tutarlılığı
  trailingSlash: false,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'index, follow' },
        ],
      },
      {
        source: '/hesap/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
  
  // Redirects (www → non-www, HTTP → HTTPS Vercel otomatik yapar)
  async redirects() {
    return [
      // Trailing slash redirect (tutarlılık)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
};
```

### 2.4 İndekslenmemesi Gereken Sayfalar

| Sayfa/Alan | Yöntem | Gerekçe |
|------------|--------|---------|
| `/hesap/*` | `noindex, nofollow` meta + robots.txt Disallow | Kullanıcı hesap sayfaları |
| `/hosgeldin` | `noindex, follow` meta | Onboarding sayfası, SEO değeri yok |
| `/odeme` | `noindex, nofollow` meta | Ödeme akışı |
| `/api/*` | robots.txt Disallow | API endpoint'leri |
| `/_next/*` | Vercel otomatik yönetir | Statik asset'ler |
| `/topluluk/*/yeni-yazi` | `noindex` meta | UGC oluşturma formu |
| Filtreli/sıralı URL'ler | `noindex` veya canonical → ana sayfa | Duplicate önleme |
| Arama sonuç sayfaları | `noindex, follow` meta | Thin content riski |

### 2.5 Soft 404 Önleme

```typescript
// app/not-found.tsx -- Doğru 404 yanıt kodu
export default function NotFound() {
  return (
    <main>
      <h1>Sayfa Bulunamadı</h1>
      <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link href="/">Ana Sayfaya Dön</Link>
      <Link href="/araclar/semptom-testi">Semptom Testini Çöz</Link>
    </main>
  );
}

// Dinamik route'larda 404 döndürme
// app/klinikler/[sehir]/page.tsx
export default async function CityPage({ params }: Props) {
  const city = await getCity(params.sehir);
  if (!city) notFound(); // Next.js otomatik 404 status döner
  // ...
}
```

---

## 3. URL Yapısı ve Canonical Stratejisi

### 3.1 URL Kuralları

| Kural | Uygulama | Örnek |
|-------|----------|-------|
| Küçük harf | Tüm URL'ler lowercase | `/lipodem-nedir` ✓ `/Lipodem-Nedir` ✗ |
| Tire ayırıcı | Kelimeler tire ile ayrılır | `/lipodem-belirtileri` ✓ `/lipodem_belirtileri` ✗ |
| Trailing slash yok | URL sonunda `/` yok | `/lipodem-nedir` ✓ `/lipodem-nedir/` ✗ |
| Türkçe karakter yok | URL'lerde ASCII | `/lipodem-turkiye-rehberi` ✓ `/lipödem-türkiye-rehberi` ✗ |
| Kısa ve anlamlı | Gereksiz kelimeler yok | `/lipodem-ameliyati` ✓ `/lipodem-ameliyati-hakkinda-bilgiler` ✗ |
| Hiyerarşik | Derinlik max 3 seviye | `/klinikler/istanbul` ✓ `/klinikler/turkiye/istanbul/kadikoy` ✗ |
| Parametre temiz | Filtreler canonical ile yönetilir | Canonical → parametresiz URL |

### 3.2 Canonical Tag Stratejisi

```typescript
// app/layout.tsx veya sayfa bazında metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    alternates: {
      canonical: `https://lipodemturkiye.com${pathname}`,
    },
  };
}
```

**Canonical kuralları:**

| Senaryo | Canonical | Örnek |
|---------|-----------|-------|
| Normal sayfa | Self-referencing | `/lipodem-nedir` → `/lipodem-nedir` |
| Sayfalandırma | Her sayfa self-canonical | `/blog?page=2` → `/blog?page=2` |
| Filtreli URL | Ana sayfaya canonical | `/klinikler/istanbul?tedavi=vaser` → `/klinikler/istanbul` |
| Sıralama parametresi | Ana sayfaya canonical | `/klinikler?sort=rating` → `/klinikler` |
| UTM parametreleri | Parametresiz URL'ye canonical | URL + `?utm_source=...` → URL |
| HTTP/HTTPS | HTTPS'e canonical | `http://` → `https://` |
| www/non-www | non-www'ye canonical | `www.` → root domain |
| AMP (yok) | N/A | AMP kullanılmıyor |

### 3.3 URL Redirect Haritası (Potansiyel)

Lansman öncesi redirect gerekmez (yeni site). Ancak gelecek için planlanan:

| Kaynak | Hedef | Tip | Koşul |
|--------|-------|-----|-------|
| `/lipodem` | `/lipodem-nedir` | 301 | Kısa URL yönlendirme |
| `/lipodem-ameliyat` | `/lipodem-ameliyati` | 301 | Yaygın yazım hatası |
| `/lipodem-diyet` | `/lipodem-diyeti` | 301 | Yaygın yazım hatası |
| `/istanbul-lipodem` | `/klinikler/istanbul` | 301 | Alternatif arama kalıbı |
| `/lipedema` | `/lipodem-nedir` | 301 | İngilizce yazım |

```typescript
// next.config.ts redirects
async redirects() {
  return [
    { source: '/lipodem', destination: '/lipodem-nedir', permanent: true },
    { source: '/lipodem-ameliyat', destination: '/lipodem-ameliyati', permanent: true },
    { source: '/lipodem-diyet', destination: '/lipodem-diyeti', permanent: true },
    { source: '/lipedema', destination: '/lipodem-nedir', permanent: true },
    { source: '/lipedema-:slug', destination: '/lipodem-:slug', permanent: true },
    // Şehir varyantları
    { source: '/:city-lipodem', destination: '/klinikler/:city', permanent: true },
    { source: '/:city-lipodem-tedavisi', destination: '/klinikler/:city', permanent: true },
  ];
}
```

---

## 4. XML Sitemap Mimarisi

### 4.1 Sitemap Index Yapısı

```xml
<!-- https://lipodemturkiye.com/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-main.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-articles.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-cities.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-doctors.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-comparisons.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-tools.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://lipodemturkiye.com/sitemap-stories.xml</loc>
    <lastmod>2026-05-24</lastmod>
  </sitemap>
</sitemapindex>
```

### 4.2 Sitemap Detayları

| Sitemap | İçerik | Tahmini URL Sayısı | changefreq | priority |
|---------|--------|-------------------|------------|----------|
| sitemap-main.xml | Ana sayfa, pillar sayfalar, araçlar, statik sayfalar | ~25 | weekly-monthly | 1.0-0.8 |
| sitemap-articles.xml | Cluster makaleler + blog yazıları | ~95 | weekly | 0.8-0.6 |
| sitemap-cities.xml | 81 il klinik sayfası | 81 | monthly | 0.7 |
| sitemap-doctors.xml | Doktor profil sayfaları | ~30-50 | monthly | 0.6 |
| sitemap-comparisons.xml | Tedavi karşılaştırma sayfaları | ~10 | monthly | 0.7 |
| sitemap-tools.xml | İnteraktif araç sayfaları | 5 | monthly | 0.8 |
| sitemap-stories.xml | Hasta hikayeleri | ~10 | monthly | 0.6 |

### 4.3 Next.js Sitemap Implementasyonu

```typescript
// app/sitemap.ts -- Sitemap index
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://lipodemturkiye.com/sitemap-main.xml' },
    { url: 'https://lipodemturkiye.com/sitemap-articles.xml' },
    { url: 'https://lipodemturkiye.com/sitemap-cities.xml' },
    { url: 'https://lipodemturkiye.com/sitemap-doctors.xml' },
    { url: 'https://lipodemturkiye.com/sitemap-comparisons.xml' },
    { url: 'https://lipodemturkiye.com/sitemap-tools.xml' },
    { url: 'https://lipodemturkiye.com/sitemap-stories.xml' },
  ];
}

// app/sitemap-cities.xml/route.ts -- Şehir sitemap
import { getAllCities } from '@/lib/data/cities';

export async function GET() {
  const cities = await getAllCities();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${cities.map(city => `
  <url>
    <loc>https://lipodemturkiye.com/klinikler/${city.slug}</loc>
    <lastmod>${city.updatedAt.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
```

### 4.4 Sitemap Kuralları

| Kural | Uygulama |
|-------|----------|
| Sadece canonical, indexable URL'ler | `noindex` sayfalar sitemap'te olmamalı |
| 200 status dönen URL'ler | Kırık URL'ler sitemap'ten çıkarılmalı |
| lastmod doğru olmalı | Gerçek içerik değişiklik tarihi, build tarihi değil |
| Sitemap → robots.txt referans | robots.txt'te sitemap URL'si belirtilmeli |
| Sitemap GSC'ye gönderilmeli | Launch günü manuel submit |
| UTF-8 encoding | Türkçe karakter URL'ler encode edilmeli |

---

## 5. Robots.txt Yapılandırması

### 5.1 robots.txt İçeriği

```
# Lipödem Türkiye - robots.txt
# https://lipodemturkiye.com/robots.txt

User-agent: *
Allow: /

# İndekslenmemesi gereken alanlar
Disallow: /hesap/
Disallow: /odeme
Disallow: /hosgeldin
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /preview/

# Arama ve filtreleme
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?page=0

# Sitemap
Sitemap: https://lipodemturkiye.com/sitemap.xml

# Crawl-delay (opsiyonel, Yandex için)
User-agent: Yandex
Crawl-delay: 2
```

### 5.2 Pre-Launch robots.txt (Geçici)

**Lansman öncesi:** Tüm crawl engellenmeli, erken indeksleme önlenmeli.

```
# PRE-LAUNCH -- Lansmana kadar geçici
User-agent: *
Disallow: /

# Sitemap henüz gönderilmemeli
```

**Lansman günü:** Yukarıdaki son haline geçilir + GSC'de sitemap submit edilir.

### 5.3 Next.js robots.txt Implementasyonu

```typescript
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isPreLaunch = process.env.PRE_LAUNCH === 'true';
  
  if (isPreLaunch) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    };
  }
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/hesap/', '/odeme', '/hosgeldin', '/api/', '/_next/', '/admin/', '/preview/'],
      },
      {
        userAgent: 'Yandex',
        crawlDelay: 2,
      },
    ],
    sitemap: 'https://lipodemturkiye.com/sitemap.xml',
  };
}
```

---

## 6. Sayfa Hızı ve Core Web Vitals

### 6.1 Hedef Metrikleri

| Metrik | Hedef | İyi | İyileştirilmeli | Kötü |
|--------|-------|-----|------------------|------|
| **LCP** (Largest Contentful Paint) | < 1.8s | < 2.5s | 2.5-4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 100ms | < 200ms | 200-500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.05 | < 0.1 | 0.1-0.25 | > 0.25 |
| **TTFB** (Time to First Byte) | < 200ms | < 400ms | 400-800ms | > 800ms |
| **FCP** (First Contentful Paint) | < 1.2s | < 1.8s | 1.8-3.0s | > 3.0s |

### 6.2 LCP Optimizasyon Stratejisi

**LCP elemanları sayfa bazında:**

| Sayfa | LCP Elemanı | Strateji |
|-------|-------------|----------|
| Ana sayfa | Hero başlık veya hero görseli | Text-based hero tercih et (anlık render) |
| Pillar sayfalar | H1 başlık | Text -- sorunsuz |
| Şehir sayfaları | H1 + klinik listesi | Text + SSG -- sorunsuz |
| Blog makaleleri | Hero görseli veya H1 | Görsel varsa `priority` + `fetchPriority="high"` |
| Araç sayfaları | Araç başlığı | Text -- sorunsuz |

**LCP optimizasyon kuralları:**

```typescript
// Hero görseli için Next.js Image optimizasyonu
import Image from 'next/image';

// Pillar sayfa hero (LCP elemanı olabilir)
<Image
  src="/images/lipodem-nedir-hero.webp"
  alt="Lipödem nedir - belirtiler ve tanı rehberi"
  width={1200}
  height={630}
  priority                    // Preload hint ekler
  fetchPriority="high"        // Browser'a öncelik ipucu
  sizes="(max-width: 768px) 100vw, 1200px"
  quality={85}
/>

// Fold altı görseller
<Image
  src="/images/doctor-profile.webp"
  alt="Dr. Yener Demirtaş"
  width={400}
  height={400}
  loading="lazy"              // Lazy load (varsayılan)
/>
```

### 6.3 CLS Önleme Stratejisi

| CLS Kaynağı | Önlem |
|-------------|-------|
| Görseller boyutsuz | `width` ve `height` her zaman belirt, `aspect-ratio` CSS |
| Font yükleme | `font-display: swap` + `next/font` (FOUT minimize) |
| Dinamik içerik ekleme | Skeleton UI ile yer ayır |
| Reklamlar | N/A (reklam yok) |
| Banner/popup | DOM'da yer ayrılmış, `transform` animasyonu |
| Progressive profiling banner | Sabit yükseklik, top-0 fixed positioning |

```typescript
// next/font ile font optimizasyonu (CLS sıfır)
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});
```

### 6.4 JavaScript Bundle Optimizasyonu

| Strateji | Uygulama | Kazanım |
|----------|----------|---------|
| **Route-based code splitting** | Next.js App Router otomatik | Her sayfa sadece kendi JS'ini yükler |
| **Dynamic imports** | İnteraktif araçlar lazy load | Araç kodu sadece araç sayfasında |
| **Tree shaking** | Kullanılmayan kodu eleme | Bundle boyutu azalması |
| **next/script** | Üçüncü parti scriptler `afterInteractive` | Analytics, chat widget geciktirilir |
| **Package analizi** | `@next/bundle-analyzer` | Büyük bağımlılıklar tespit |

```typescript
// Üçüncü parti script yükleme stratejisi
import Script from 'next/script';

// Analytics -- sayfa etkileşimden sonra
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
  strategy="afterInteractive"
/>

// İnteraktif araç -- sadece gerektiğinde
const SymptomTestTool = dynamic(
  () => import('@/components/tools/SymptomTest'),
  { loading: () => <ToolSkeleton /> }
);
```

### 6.5 Görsel Optimizasyon

| Kural | Uygulama |
|-------|----------|
| Format | WebP birincil, AVIF destekleyen tarayıcılar için AVIF |
| Responsive | `sizes` attribute ile viewport bazlı boyut |
| Lazy loading | Fold altı tüm görseller `loading="lazy"` |
| Boyutlar | Tam `width`/`height` her görselde |
| Alt text | Açıklayıcı Türkçe alt text (SEO + a11y) |
| Sıkıştırma | Quality 80-85 (kalite/boyut dengesi) |
| CDN | Vercel Image Optimization (otomatik) |
| Placeholder | `blurDataURL` ile blur-up efekti (CLS yok) |

### 6.6 Caching Stratejisi

```typescript
// Vercel Edge Cache headers
// next.config.ts
async headers() {
  return [
    // Statik asset'ler (1 yıl, immutable)
    {
      source: '/_next/static/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
      ],
    },
    // Görseller (30 gün)
    {
      source: '/images/(.*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
      ],
    },
    // HTML sayfalar (ISR ile yönetilir)
    {
      source: '/((?!api|_next).*)',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
      ],
    },
  ];
}
```

---

## 7. Mobil SEO Optimizasyonu

### 7.1 Mobile-First Indexing Kontrol Listesi

| Kontrol | Durum | Not |
|---------|-------|-----|
| Responsive tasarım (ayrı m. site yok) | Planlı ✓ | Tailwind CSS responsive |
| Viewport meta tag | Planlı ✓ | Next.js varsayılan |
| Aynı içerik mobil ve masaüstünde | Planlı ✓ | Tek codebase |
| Tıklama hedefleri min 48x48px | Kontrol gerekli | Tailwind min-h-12 min-w-12 |
| Yatay kaydırma yok | Kontrol gerekli | `overflow-x: hidden` root |
| Font minimum 14px | Planlı ✓ | web-design-output kuralı |
| Viewport-fit: cover | Planlı ✓ | Notch desteği |

### 7.2 Mobil Sayfa Hızı

| Strateji | Detay |
|----------|-------|
| AMP kullanılmıyor | Next.js SSR/SSG yeterli performans sağlar |
| Critical CSS inline | Next.js otomatik (`styled-jsx` veya Tailwind) |
| Above-the-fold öncelik | `priority` görseller + preload font |
| Touch delay yok | `touch-action: manipulation` |
| Skeleton UI | İnteraktif bileşenler için placeholder |

### 7.3 Mobil UX SEO Etkisi

| Faktör | Mobil Önlem | SEO Etkisi |
|--------|-------------|------------|
| Interstitial popup | Tam ekran popup yok (Google ceza) | Dolaylı |
| Cookie banner | Küçük bottom bar, dismiss ile kaybolur | Nötr |
| Scroll depth | Sticky nav ile navigasyon kolaylığı | Dolaylı (engagement) |
| Form usability | Büyük input'lar, otomatik klavye tipi | Dönüşüm (dolaylı) |

---

## 8. On-Page SEO Çerçevesi

### 8.1 Title Tag Stratejisi

**Format:** `{Birincil Anahtar Kelime} -- {Değer Vaadi} | Lipödem Türkiye`

| Sayfa Tipi | Title Format | Karakter Limiti | Örnek |
|------------|-------------|-----------------|-------|
| Ana sayfa | `Lipödem Türkiye -- Bilgi, Tedavi ve Topluluk Platformu` | 55 | -- |
| Pillar | `{Konu} -- Kapsamlı Türkçe Rehber | Lipödem Türkiye` | 60 | `Lipödem Nedir? Belirtileri, Evreleri ve Tedavisi | Lipödem Türkiye` |
| Cluster | `{Anahtar Kelime} -- {Açıklama} | Lipödem Türkiye` | 60 | `Lipödem Ameliyatı -- Teknikler, Fiyatlar, Sonuçlar | Lipödem Türkiye` |
| Şehir | `{Şehir} Lipödem Tedavisi -- Klinikler ve Doktorlar | Lipödem Türkiye` | 60 | `İstanbul Lipödem Tedavisi -- Klinikler ve Doktorlar | Lipödem Türkiye` |
| Blog | `{Başlık} | Lipödem Türkiye Blog` | 60 | -- |
| Araç | `{Araç Adı} -- Ücretsiz Online Test | Lipödem Türkiye` | 60 | `Lipödem Semptom Testi -- 2 Dakikada Ücretsiz Değerlendirme | Lipödem Türkiye` |
| Karşılaştırma | `{A} vs {B} -- Hangisi Sizin İçin Doğru? | Lipödem Türkiye` | 60 | -- |

### 8.2 Meta Description Stratejisi

**Format:** Değer vaadi + ana bilgi + CTA (150-160 karakter)

| Sayfa Tipi | Şablon | Örnek |
|------------|--------|-------|
| Pillar | `{Konu} hakkında bilimsel, kapsamlı Türkçe rehber. {2-3 alt konu listesi}. 2025 araştırmalarına dayalı.` | `Lipödem nedir? Belirtileri, evreleri, tanı kriterleri ve tedavi seçenekleri. 2025 Delphi Konsensüsü bazlı kapsamlı Türkçe rehber. Semptom testini çözün.` |
| Şehir | `{Şehir}'de lipödem tedavisi yapan klinikler ve doktorlar. {Tedavi türleri}. Fiyat bilgisi ve randevu.` | `İstanbul'da lipödem tedavisi yapan klinikler, doktorlar ve fiyatlar. Vaser liposuction, MLD, kompresyon tedavisi. Ücretsiz randevu talebi gönderin.` |
| Araç | `Ücretsiz {araç adı}. {Ne yapar}. Sonucunuzu doktorunuza götürün.` | `Lipödem semptom testi -- 12 soruda risk değerlendirmesi. Bilimsel kriterlere dayalı. Sonucunuzu yazdırıp doktorunuza götürün. Ücretsiz.` |

### 8.3 Heading Hiyerarşisi

| Kural | Detay |
|-------|-------|
| Sayfa başına 1 H1 | Her sayfada tek, benzersiz H1 |
| H1 = birincil anahtar kelime | Doğal, zorlama değil |
| Sıralı hiyerarşi | H1 → H2 → H3 (atlama yok) |
| H2'ler ana bölümler | İçindekiler tablosundaki öğeler |
| H3'ler alt bölümler | Detay paragrafları |
| Stilleme için heading kullanma | Görsel büyüklük CSS ile, heading semantik |

**Örnek hiyerarşi (Lipödem Nedir sayfası):**

```
H1: Lipödem Nedir? Belirtileri, Evreleri ve Tedavi Rehberi
  H2: Lipödem Nedir?
    H3: Lipödem Tanımı
    H3: Lipödem ve Obezite Farkı
  H2: Lipödem Belirtileri
    H3: 12 Temel Belirti
    H3: Kendinizi Nasıl Test Edersiniz
  H2: Lipödem Evreleri
    H3: Evre 1
    H3: Evre 2
    H3: Evre 3
  H2: Lipödem Tedavi Seçenekleri
    H3: Konservatif Tedavi
    H3: Cerrahi Tedavi
  H2: Sıkça Sorulan Sorular
```

### 8.4 Görsel Alt Text Stratejisi

| Görsel Tipi | Alt Text Format | Örnek |
|-------------|-----------------|-------|
| Bilgilendirme görseli | `{Ne gösteriliyor} -- {bağlam}` | `Lipödem evre 1-2-3 karşılaştırma diyagramı -- bacak kalınlığı ve doku değişimleri` |
| İnfografik | `{Konu} infografik -- {içerik özeti}` | `Anti-inflamatuar beslenme piramidi infografik -- lipödem hastaları için önerilen ve kaçınılması gereken besinler` |
| Doktor fotoğrafı | `{Unvan} {Ad} -- {Uzmanlık}, {Şehir}` | `Dr. Yener Demirtaş -- Lipödem cerrahisi uzmanı, İstanbul` |
| Dekoratif görsel | `alt=""` (boş) | Dekoratif görseller boş alt text |
| Screenshot/UI | `{Araç adı} ekran görüntüsü -- {ne gösteriyor}` | `Semptom testi sonuç ekranı -- risk skoru ve öneriler` |

### 8.5 Open Graph ve Twitter Card

```typescript
// Her sayfa için OG metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: 'Lipödem Nedir? Belirtileri, Evreleri ve Tedavisi',
    description: '...',
    openGraph: {
      title: 'Lipödem Nedir? -- Kapsamlı Türkçe Rehber',
      description: 'Lipödem belirtileri, evreleri, tedavi seçenekleri...',
      url: 'https://lipodemturkiye.com/lipodem-nedir',
      siteName: 'Lipödem Türkiye',
      locale: 'tr_TR',
      type: 'article',
      images: [
        {
          url: 'https://lipodemturkiye.com/og/lipodem-nedir.jpg',
          width: 1200,
          height: 630,
          alt: 'Lipödem Nedir? -- Lipödem Türkiye Rehberi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lipödem Nedir?',
      description: '...',
      images: ['https://lipodemturkiye.com/og/lipodem-nedir.jpg'],
    },
  };
}
```

---

## 9. Internal Linking Stratejisi

### 9.1 Topic Cluster Internal Linking Modeli

```
                    ┌──────────────────────┐
                    │   PILLAR SAYFA       │
                    │  /lipodem-nedir      │
                    │  (Hub -- yüksek DA)  │
                    └──────────┬───────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
   ┌──────────────┐   ┌──────────────┐   ┌──────────────┐
   │ CLUSTER 1    │   │ CLUSTER 2    │   │ CLUSTER 3    │
   │ /lipodem-    │   │ /lipodem-    │   │ /lipodem-    │
   │ belirtileri  │◄──► evreleri     │◄──► vs-obezite   │
   └──────────────┘   └──────────────┘   └──────────────┘
          │                    │                    │
          └────────────────────┼────────────────────┘
                               │
                    Cluster'lar arası çapraz linkler
```

### 9.2 Link Kuralları

| Kural | Detay |
|-------|-------|
| **Pillar → Cluster** | Her pillar, tüm cluster sayfalarına link verir (İçindekiler veya inline) |
| **Cluster → Pillar** | Her cluster, pillar'a en az 1 link verir (breadcrumb + inline) |
| **Cluster ↔ Cluster** | İlgili cluster'lar arası karşılıklı inline linkler |
| **Cross-Pillar** | Farklı pillar'ların ilgili cluster'ları arasında bağlam uygun linkler |
| **Araçlar → İçerik** | Araç sonuç sayfaları ilgili makalelere link verir |
| **İçerik → Araçlar** | Makaleler içinde "Semptom testini çözün" gibi CTA linkler |
| **Şehir ↔ Doktor** | Şehir sayfaları doktor profillerine, doktorlar şehir sayfalarına |

### 9.3 Anchor Text Stratejisi

| Tip | Oran | Örnek |
|-----|------|-------|
| **Tam eşleşme** | %20-30 | `lipödem belirtileri` |
| **Kısmi eşleşme** | %30-40 | `lipödemin 12 temel belirtisi` |
| **Marka** | %10-15 | `Lipödem Türkiye rehberi` |
| **Doğal/generik** | %15-20 | `detaylı rehberimiz`, `buradan okuyun` |
| **URL** | %5-10 | `lipodemturkiye.com/lipodem-belirtileri` |

### 9.4 Otomatik Internal Link Bileşeni

```typescript
// Makale içi otomatik ilgili bağlantılar
interface RelatedLink {
  title: string;
  url: string;
  type: 'tool' | 'article' | 'comparison' | 'clinic';
}

// Her makale sonunda
function RelatedContent({ links }: { links: RelatedLink[] }) {
  return (
    <nav aria-label="İlgili içerikler">
      <h2>İlgili İçerikler</h2>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

### 9.5 Breadcrumb Yapısı

```
Ana Sayfa > Lipödem Nedir > Lipödem Belirtileri
Ana Sayfa > Klinikler > İstanbul
Ana Sayfa > Araçlar > Semptom Testi
Ana Sayfa > Blog > Makale Başlığı
```

```typescript
// BreadcrumbList schema (schema-output.md ile senkronize)
// + görsel breadcrumb navigasyonu
function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone-500">
      <ol className="flex items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li key={item.url} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {i < items.length - 1 ? (
              <Link href={item.url} itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && <span aria-hidden="true"> &gt; </span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### 9.6 Orphan Page Önleme

Her sayfa en az 2 internal link almalıdır:
1. Breadcrumb'dan (üst sayfa)
2. İlgili içerik bölümünden (kardeş veya çapraz link)

**Kontrol mekanizması:** Build-time script ile tüm sayfaların iç link sayısını kontrol et. 0 link alan sayfa varsa uyarı ver.

---

## 10. YMYL ve E-E-A-T Sinyalleri

### 10.1 YMYL Uyumu

Lipödem Türkiye **sağlık bilgi** sitesidir -- Google'ın YMYL (Your Money or Your Life) kategorisinde en yüksek scrutiny seviyesindedir.

| YMYL Gereksinimi | Platform Uygulaması |
|------------------|---------------------|
| Doğru tıbbi bilgi | Tüm içerik `lipedema-expert.md` bilgi tabanından beslenir (2024-2026 peer-reviewed) |
| Kaynak gösterimi | Her makale sonunda kaynak listesi, inline kaynak numaraları |
| Güncellik | Son güncelleme tarihi her sayfada görünür |
| Tıbbi disclaimer | Her sayfada: "Bu içerik tıbbi tavsiye yerine geçmez. Tanı ve tedavi için doktorunuza danışın." |
| Yazar bilgisi | Tıbbi içerikler "Tıbbi Danışma Kurulu" veya imzalı yazar ile |

### 10.2 E-E-A-T Sinyal Haritası

#### Experience (Deneyim)

| Sinyal | Uygulama | Sayfa |
|--------|----------|-------|
| Hasta hikayeleri | Gerçek hasta deneyimleri, isim + şehir + evre | `/hikayeler/[slug]` |
| Deneyim tabanlı içerik | "Ameliyat sonrası ilk 30 gün" gibi yaşanmış içerik | Cluster makaleler |
| Fotoğraf/video | Gerçek hasta fotoğrafları (izinli) | İlgili makaleler |
| Topluluk | Kullanıcı tarafından oluşturulan içerik (UGC) | `/topluluk` |

#### Expertise (Uzmanlık)

| Sinyal | Uygulama | Konum |
|--------|----------|-------|
| Bilimsel kaynak gösterimi | Delphi 2025, Alman S2k Kılavuzu, peer-reviewed çalışmalar | Her makale altı |
| Kaynak sayısı ve kalitesi | "Bu içerik X araştırmaya dayanmaktadır" | Makale üstü bilgi kutusu |
| Tıbbi terimler + açıklama | Terimlerin yanında tooltip ile Türkçe açıklama | Inline |
| Uzman alıntıları | Doktor görüşleri, bilimsel atıflar | İçerik içi |
| Yazar/kurul profili | Tıbbi Danışma Kurulu üyeleri ve uzmanlıkları | `/hakkimizda/ekip` |

#### Authoritativeness (Otorite)

| Sinyal | Uygulama | Strateji |
|--------|----------|----------|
| Backlink'ler | Dizin kayıtları, kongre referansları, basın | FAZ 5.3'te ayrıntılı |
| Marka aramalar | "Lipödem Türkiye" branded search hacmi | İçerik pazarlama ile |
| Sosyal sinyal | Twitter/Instagram/YouTube paylaşımları | FAZ 6'da |
| Kongre bağlantısı | 1. Ulusal Lipödem Kongresi sponsorluğu/katılımı | Lansman ile |

#### Trustworthiness (Güvenilirlik)

| Sinyal | Uygulama | Konum |
|--------|----------|-------|
| HTTPS | Vercel otomatik SSL | Tüm site |
| İletişim bilgisi | Gerçek email, iletişim formu | `/iletisim` + footer |
| Gizlilik politikası | KVKK uyumlu detaylı politika | `/gizlilik-politikasi` |
| Tıbbi disclaimer | Her sağlık içeriği sayfasında | Sayfa üstü + altı |
| Tarafsızlık beyanı | "Bağımsız platform -- hiçbir kliniğin reklamı değiliz" | Ana sayfa + hakkımızda |
| Çerez politikası | KVKK uyumlu, kullanıcı onayı | Cookie banner |
| Şeffaf fiyatlandırma | Tüm premium planlar açıkça belirtilmiş | `/premium` |

### 10.3 Yazar Sayfası Yapısı

```
/hakkimizda/ekip

Tıbbi Danışma Kurulu
├── Dr. [Ad Soyad] -- [Uzmanlık], [Kurum]
│   - Uzmanlık alanı
│   - Yayınları / araştırmaları
│   - Lipödem deneyimi
│   - LinkedIn / ORCID profili
├── ...

İçerik Ekibi
├── [Ad] -- Tıbbi İçerik Editörü
│   - Arka plan
│   - İçerik yaklaşımı
├── ...
```

**Schema:** Her yazar için `Person` schema + `author` bağlantısı makale schema'sında.

### 10.4 Tıbbi Disclaimer Bileşeni

```tsx
function MedicalDisclaimer() {
  return (
    <aside 
      className="bg-amber-50 border-l-4 border-amber-400 p-4 my-8 text-sm text-stone-600"
      role="note"
      aria-label="Tıbbi sorumluluk reddi"
    >
      <p>
        <strong>Tıbbi Uyarı:</strong> Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tavsiye 
        yerine geçmez. Tanı, tedavi ve ilaç kararları için mutlaka bir sağlık profesyoneline 
        danışın. İçeriklerimiz düzenli olarak güncellenmektedir; son güncelleme tarihi sayfa 
        başında belirtilmiştir.
      </p>
    </aside>
  );
}
```

---

## 11. Programmatic SEO Teknik Gereksinimleri

### 11.1 Şehir Sayfaları (81 İl) SEO Gereksinimleri

| Gereksinim | Uygulama | Not |
|------------|----------|-----|
| Benzersiz içerik | Her şehir sayfasında şehre özel giriş metni (min 150 kelime) | Duplicate content önleme |
| Benzersiz H1 | `{Şehir} Lipödem Tedavisi -- Klinikler ve Doktorlar` | Her sayfa farklı |
| Benzersiz meta | Şehir adı + tedavi türleri + klinik sayısı | Her sayfa farklı |
| Klinik yoksa | "En yakın" alternatif şehirler gösterilir + bilgi içeriği | Thin content önleme |
| İç linkler | Komşu şehirler + doktor profilleri + pillar sayfalar | Orphan page önleme |
| Schema | `ItemList` + `MedicalClinic` (varsa) | Rich results |
| Canonical | Self-referencing | `/klinikler/istanbul` → `/klinikler/istanbul` |

### 11.2 Thin Content Önleme (Kliniksiz Şehirler)

81 ilin çoğunda lipödem kliniği olmayacak. Bu sayfalar thin content riski taşır.

**Strateji:** Kliniksiz şehir sayfalarında minimum 400 kelime içerik:

```
/klinikler/van

H1: Van'da Lipödem Tedavisi
---
- Genel lipödem bilgisi (şehre özel cümleler)
- "Van'da henüz kayıtlı lipödem kliniğimiz bulunmamaktadır"
- En yakın alternatifler: Ankara (XXX km), Diyarbakır (XXX km)
- Van'da genel cerrahi/estetik cerrahi klinikleri (sorgulanabilir)
- "Van'da lipödem uzmanı mısınız? Bize ulaşın" CTA
- Genel tedavi seçenekleri özeti
- Van için bölgesel sağlık bilgisi
- İlgili makaleler (internal link)
```

### 11.3 Doktor Profilleri SEO

| Alan | SEO Etkisi | Zorunluluk |
|------|------------|------------|
| Unvan + ad + soyad | Title tag, H1, schema | Zorunlu |
| Uzmanlık alanı | İçerik relevansi | Zorunlu |
| Şehir/kurum | Yerel arama, şehir sayfası bağlantısı | Zorunlu |
| Biyografi (200+ kelime) | Thin content önleme, E-E-A-T | Zorunlu |
| Tedavi türleri | Anahtar kelime relevansi | Zorunlu |
| Fiyat aralığı | Arama niyeti karşılama | Önerilen |
| Hasta yorumları | UGC, E-E-A-T deneyim sinyali | Önerilen |

---

## 12. Güvenlik ve HTTPS

### 12.1 Güvenlik Kontrol Listesi

| Kontrol | Uygulama | Durum |
|---------|----------|-------|
| HTTPS tüm sitede | Vercel otomatik SSL (Let's Encrypt) | Otomatik ✓ |
| HTTP → HTTPS redirect | Vercel otomatik 301 redirect | Otomatik ✓ |
| Mixed content yok | Tüm asset'ler HTTPS | Kontrol gerekli |
| HSTS header | Strict-Transport-Security | Eklenecek |
| CSP header | Content-Security-Policy (temel) | Eklenecek |
| X-Content-Type-Options | nosniff | Eklenecek |
| X-Frame-Options | DENY veya SAMEORIGIN | Eklenecek |

### 12.2 Güvenlik Headers

```typescript
// next.config.ts headers
{
  source: '/(.*)',
  headers: [
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
  ],
}
```

---

## 13. Uluslararasılaşma Hazırlığı

### 13.1 Mevcut Durum

Site şu anda yalnızca Türkçe. Gelecekte İngilizce desteği planlanıyor (CLAUDE.md'de belirtilmiş).

### 13.2 Şimdiden Yapılması Gerekenler

| Hazırlık | Detay | Öncelik |
|----------|-------|---------|
| `<html lang="tr">` | Root layout'ta dil belirtimi | P0 (lansman) |
| `<meta http-equiv="content-language" content="tr">` | Bing için ek sinyal | P1 |
| URL yapısı planlaması | Gelecekte `/en/` subdirectory stratejisi | P3 (kayıt) |
| İçerik yapısı | MDX/CMS'de dil alanı planlaması | P3 (kayıt) |
| Hreflang hazırlığı | Şimdilik self-referencing `hreflang="tr"` yeterli | P2 |

```typescript
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" dir="ltr">
      <head>
        <meta httpEquiv="content-language" content="tr" />
        <link rel="alternate" hrefLang="tr" href="https://lipodemturkiye.com" />
        <link rel="alternate" hrefLang="x-default" href="https://lipodemturkiye.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 14. Google Search Console Kurulumu

### 14.1 Lansman Günü GSC Checklist

| Adım | Aksiyon | Öncelik |
|------|---------|---------|
| 1 | GSC'de `lipodemturkiye.com` domain property oluştur | P0 |
| 2 | DNS TXT kaydı ile doğrulama | P0 |
| 3 | `www.lipodemturkiye.com` URL property de ekle | P0 |
| 4 | Sitemap submit: `https://lipodemturkiye.com/sitemap.xml` | P0 |
| 5 | robots.txt'i test et (GSC robots.txt tester) | P0 |
| 6 | URL Inspection ile ana sayfa ve 6 pillar'ı manuel crawl isteği gönder | P0 |
| 7 | Bing Webmaster Tools'a da ekle (import from GSC) | P1 |
| 8 | Yandex Webmaster'a ekle (Türk kullanıcılar küçük ama var) | P2 |

### 14.2 İlk Hafta İzleme

| Metrik | Nerede | Hedef |
|--------|--------|-------|
| İndekslenen sayfa sayısı | GSC > Coverage | İlk hafta: 30+ sayfa |
| Crawl istatistikleri | GSC > Settings > Crawl stats | Günlük 50+ crawl |
| Sitemap durumu | GSC > Sitemaps | "Success" status |
| Mobil uyumluluk | GSC > Mobile Usability | 0 hata |
| Core Web Vitals | GSC > Core Web Vitals | Tüm URL'ler "Good" |
| Rich results | GSC > Enhancements | FAQ, Article rich results |

### 14.3 Anahtar Kelime İzleme Listesi

**Birincil (yüksek hacim, düşük-orta rekabet):**

| Anahtar Kelime | Hedef Sayfa | Tahmini Hacim (TR) |
|----------------|-------------|-------------------|
| lipödem nedir | `/lipodem-nedir` | Yüksek |
| lipödem belirtileri | `/lipodem-belirtileri` | Yüksek |
| lipödem tedavisi | `/lipodem-tedavisi` | Yüksek |
| lipödem ameliyatı | `/lipodem-ameliyati` | Yüksek |
| lipödem ameliyat fiyatları | `/lipodem-ameliyat-fiyatlari` | Orta-Yüksek |

**İkincil (orta hacim):**

| Anahtar Kelime | Hedef Sayfa | Tahmini Hacim (TR) |
|----------------|-------------|-------------------|
| lipödem evreleri | `/lipodem-evreleri` | Orta |
| lipödem diyeti | `/lipodem-diyeti` | Orta |
| lipödem egzersiz | `/lipodem-egzersiz` | Orta |
| lipödem kompresyon | `/lipodem-kompresyon-tedavisi` | Orta |
| vaser liposuction | `/vaser-liposuction-lipodem` | Orta |

**Uzun kuyruk (düşük hacim, yüksek niyet):**

| Anahtar Kelime | Hedef Sayfa |
|----------------|-------------|
| bacaklarım neden incelmiyor | `/bacaklariniz-neden-incelmiyor` |
| diyet yapıyorum bacaklarım aynı | `/diyet-yapiyorum-bacaklarim-ayni` |
| lipödem ameliyatı yaptıranların yorumları | `/lipodem-ameliyat-deneyimleri` |
| lipödem SGK karşılıyor mu | `/lipodem-sgk-rehberi` |
| istanbul lipödem doktoru | `/klinikler/istanbul` |

**Yerel arama (şehir bazlı):**

| Anahtar Kelime Kalıbı | Hedef Sayfa Kalıbı |
|----------------------|-------------------|
| {şehir} lipödem tedavisi | `/klinikler/{sehir}` |
| {şehir} lipödem doktoru | `/klinikler/{sehir}` |
| {şehir} liposuction | `/klinikler/{sehir}` |

---

## 15. Pre-Launch SEO Checklist

### 15.1 Lansmandan 2 Hafta Önce

| # | Görev | Sorumlu | Durum |
|---|-------|---------|-------|
| 1 | Domain DNS yapılandırması (Vercel) | Teknik | Beklemede |
| 2 | SSL sertifikası aktif (Vercel otomatik) | Teknik | Beklemede |
| 3 | robots.txt: Disallow all (pre-launch) | Teknik | Beklemede |
| 4 | Tüm sayfa title/description yazımı | İçerik | Beklemede |
| 5 | Schema markup entegrasyonu | Teknik | Beklemede |
| 6 | Internal linking yapısı kurulumu | İçerik | Beklemede |
| 7 | Görsel alt text kontrolü | İçerik | Beklemede |
| 8 | Breadcrumb bileşeni + schema | Teknik | Beklemede |
| 9 | 404 sayfası (doğru HTTP status) | Teknik | Beklemede |
| 10 | Canonical tag'ler tüm sayfalarda | Teknik | Beklemede |
| 11 | OG image'ler tüm sayfa tipleri için | Tasarım | Beklemede |
| 12 | Favicon + web manifest | Tasarım | Beklemede |

### 15.2 Lansmandan 1 Hafta Önce

| # | Görev | Sorumlu | Durum |
|---|-------|---------|-------|
| 13 | PageSpeed Insights testi (mobil + masaüstü) | Teknik | Beklemede |
| 14 | Rich Results Test (schema doğrulama) | Teknik | Beklemede |
| 15 | Kırık link kontrolü (tüm internal linkler) | Teknik | Beklemede |
| 16 | Mobil uyumluluk testi | Teknik | Beklemede |
| 17 | Sitemap XML doğrulama | Teknik | Beklemede |
| 18 | Heading hiyerarşisi kontrolü (her sayfa) | İçerik | Beklemede |
| 19 | Güvenlik headers testi | Teknik | Beklemede |
| 20 | Font yükleme optimizasyonu (CLS) | Teknik | Beklemede |
| 21 | Lazy loading doğrulama (fold altı görseller) | Teknik | Beklemede |
| 22 | Preview/staging ortamda tam test | Teknik | Beklemede |

### 15.3 Lansman Günü (D-Day)

| # | Görev | Sıra | Not |
|---|-------|------|-----|
| 23 | robots.txt'i final haline geç (Allow) | 1 | `PRE_LAUNCH=false` |
| 24 | GSC property oluştur ve doğrula | 2 | DNS TXT |
| 25 | Sitemap'i GSC'ye gönder | 3 | Manuel submit |
| 26 | Ana sayfa + 6 pillar URL Inspection | 4 | Crawl isteği |
| 27 | Bing Webmaster Tools ekle | 5 | GSC'den import |
| 28 | Google Analytics 4 kontrol | 6 | Event akışı doğrulama |
| 29 | Social media paylaşımları (OG preview kontrolü) | 7 | Facebook Debugger |
| 30 | Backlink kampanyası başlat (dizinler) | 8 | FAZ 5.3 |

### 15.4 Lansman Sonrası (D+1 → D+7)

| # | Görev | Gün | Not |
|---|-------|-----|-----|
| 31 | GSC indeksleme durumu kontrol | D+1 | Coverage raporu |
| 32 | Crawl hataları kontrol | D+1 | GSC + server logları |
| 33 | Rich results görünürlüğü | D+3 | GSC Enhancements |
| 34 | Core Web Vitals field data (yeterli trafik sonrası) | D+7 | PageSpeed Insights |
| 35 | İlk organik trafik analizi | D+7 | GA4 + GSC |
| 36 | Mobile usability hataları | D+3 | GSC raporu |
| 37 | 404 hataları kontrol | D+7 | GSC + analytics |

---

## 16. Post-Launch İlk 30 Gün SEO Takvimleri

### 16.1 Hafta 1: Temel Kontrol

| Gün | Aktivite | Araç |
|-----|----------|------|
| 1 | robots.txt açma, GSC kurulumu, sitemap submit | GSC |
| 2 | İndeksleme takibi, crawl hataları | GSC |
| 3 | Rich results kontrol, mobil uyumluluk | GSC |
| 4 | PageSpeed Insights tüm sayfa tipleri | PSI |
| 5 | İlk organik impression verisi | GSC Performance |
| 6-7 | Hata düzeltme, eksik meta tamamlama | -- |

### 16.2 Hafta 2: Optimizasyon

| Gün | Aktivite |
|-----|----------|
| 8-9 | GSC'de "Excluded" sayfaları analiz, düzeltme |
| 10 | Crawl stats analizi -- crawl bütçesi verimliliği |
| 11-12 | Internal link eksiklerini tamamlama |
| 13-14 | İlk performans raporu hazırlama |

### 16.3 Hafta 3-4: Büyüme

| Gün | Aktivite |
|-----|----------|
| 15-18 | İlk organik anahtar kelime verisi analizi |
| 19-21 | Düşük performanslı sayfalar için on-page iyileştirme |
| 22-25 | Yeni blog içerikleri yayınlama (SEO odaklı) |
| 26-28 | Rakip SERP analizi -- eksik konular tespit |
| 29-30 | Ay sonu SEO raporu + sonraki ay planı |

### 16.4 İlk 30 Gün Hedef Metrikleri

| Metrik | Hedef | Ölçüm |
|--------|-------|-------|
| İndekslenen sayfa | 150+ / ~250 | GSC Coverage |
| Organik impression | 5.000+ | GSC Performance |
| Organik tıklama | 200+ | GSC Performance |
| Ortalama pozisyon (hedef kelimeler) | Top 30 | GSC Performance |
| Core Web Vitals "Good" | %95+ URL'ler | GSC CWV raporu |
| Crawl hataları | < 5 | GSC |
| Rich results | FAQ + Article aktif | GSC Enhancements |

---

## BAĞLANTI HARİTASI

| Bu Çıktı | İlişkili Çıktılar |
|----------|-------------------|
| URL yapısı | site-architecture-output.md (tam sitemap) |
| Schema markup | schema-output.md (20 bölüm, tüm schema tipleri) |
| Programmatic SEO | programmatic-seo-output.md (81 il, doktor, karşılaştırma) |
| İçerik SEO | content-strategy-output.md (6 sütun, 75 cluster) |
| Performans | react-best-practices-output.md (SC/CC stratejisi, bundle) |
| On-page copy | copywriting-output.md (meta description tonu) |
| E-E-A-T | marketing-psychology-output.md (güven sinyalleri) |
| OG görseller | image-output.md (OG şablonları) |
| Backlink stratejisi | FAZ 5.3: directory-submissions (henüz yapılacak) |
| AI SEO | FAZ 5.2: ai-seo (henüz yapılacak) |
