# Lipödem Türkiye -- Kapsamlı Yapılandırılmış Veri (Schema Markup) Planı

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, site-architecture-output.md, copywriting-output.md, content-strategy-output.md
**Teknoloji:** Next.js 15 (App Router) + JSON-LD
**Domain:** lipodemturkiye.com

---

## İçindekiler

1. [Sayfa Tipine Göre Schema Haritası](#1-sayfa-tipine-göre-schema-haritası)
2. [Next.js Uygulama Altyapısı](#2-nextjs-uygulama-altyapısı)
3. [Organization Schema](#3-organization-schema)
4. [WebSite Schema + Sitelinks Search Box](#4-website-schema--sitelinks-search-box)
5. [BreadcrumbList Schema](#5-breadcrumblist-schema)
6. [MedicalCondition Schema -- Lipödem](#6-medicalcondition-schema----lipödem)
7. [MedicalTherapy Schema'ları](#7-medicaltherapy-schemaları)
8. [MedicalClinic Schema](#8-medicalclinic-schema)
9. [Physician Schema](#9-physician-schema)
10. [FAQPage Schema](#10-faqpage-schema)
11. [Article + MedicalWebPage Schema](#11-article--medicalwebpage-schema)
12. [HowTo Schema](#12-howto-schema)
13. [ItemList Schema](#13-itemlist-schema)
14. [Event Schema](#14-event-schema)
15. [Karşılaştırma Tabloları (Table Schema)](#15-karşılaştırma-tabloları)
16. [Hasta Hikayeleri Schema](#16-hasta-hikayeleri-schema)
17. [İnteraktif Araçlar Schema](#17-interaktif-araçlar-schema)
18. [AI Motoru Optimizasyonu (AEO Sinerjisi)](#18-ai-motoru-optimizasyonu)
19. [Doğrulama ve İzleme Rehberi](#19-doğrulama-ve-izleme-rehberi)
20. [Uygulama Önceliklendirmesi](#20-uygulama-önceliklendirmesi)

---

## 1. Sayfa Tipine Göre Schema Haritası

Her sayfa tipi için hangi schema'lar uygulanacak:

| Sayfa Tipi | URL Örneği | Schema Tipleri | Rich Result Hedefi |
|------------|-----------|----------------|-------------------|
| Ana Sayfa | `/` | Organization, WebSite, BreadcrumbList | Sitelinks Search Box, Knowledge Panel |
| Lipödem Nedir | `/lipodem-nedir` | MedicalCondition, MedicalWebPage, FAQPage, BreadcrumbList | FAQ Snippets, Medical Info Panel |
| Tedavi Pillar | `/lipodem-tedavisi` | MedicalWebPage, ItemList, FAQPage, BreadcrumbList | FAQ Snippets, HowTo Steps |
| Tedavi Detay | `/lipodem-ameliyati` | MedicalTherapy, MedicalWebPage, FAQPage, BreadcrumbList | FAQ Snippets |
| Beslenme Rehberi | `/lipodem-beslenme` | MedicalWebPage, HowTo, FAQPage, BreadcrumbList | HowTo Steps, FAQ Snippets |
| Egzersiz Rehberi | `/lipodem-egzersiz` | MedicalWebPage, HowTo, FAQPage, BreadcrumbList | HowTo Steps, FAQ Snippets |
| Klinik Listesi | `/klinikler` | ItemList, BreadcrumbList | - |
| Klinik Sehir | `/klinikler/istanbul` | ItemList, BreadcrumbList | - |
| Klinik Profili | (gelecek) | MedicalClinic, LocalBusiness, BreadcrumbList | Local Business Panel |
| Doktor Profili | `/doktorlar/[slug]` | Physician, BreadcrumbList | Knowledge Panel |
| Blog Makale | `/blog/[slug]` | Article, MedicalWebPage, FAQPage, BreadcrumbList | Article Rich Result, FAQ |
| Hasta Hikayesi | `/hikayeler/[slug]` | Article, BreadcrumbList | Article Rich Result |
| Karşılaştırma | `/karsilastirma/[slug]` | MedicalWebPage, Table, FAQPage, BreadcrumbList | FAQ Snippets |
| Semptom Testi | `/araclar/semptom-testi` | MedicalWebPage, WebApplication, BreadcrumbList | - |
| Premium | `/premium` | FAQPage, BreadcrumbList | FAQ Snippets |
| Hakkımızda | `/hakkimizda` | Organization, BreadcrumbList | Knowledge Panel |
| SSS Sayfaları | `/premium/sss` vb. | FAQPage, BreadcrumbList | FAQ Snippets |
| Kongre Sayfası | `/lipodem-kongresi-2026` | Event, BreadcrumbList | Event Rich Result |

---

## 2. Next.js Uygulama Altyapısı

### 2.1 Dosya Yapısı

```
src/
├── lib/
│   └── schema/
│       ├── types.ts              // TypeScript tip tanımları
│       ├── organization.ts       // Organization schema helper
│       ├── website.ts            // WebSite schema helper
│       ├── breadcrumb.ts         // BreadcrumbList helper
│       ├── medical-condition.ts  // MedicalCondition helper
│       ├── medical-therapy.ts    // MedicalTherapy helper
│       ├── medical-clinic.ts     // MedicalClinic helper
│       ├── physician.ts          // Physician helper
│       ├── faq.ts                // FAQPage helper
│       ├── article.ts            // Article helper
│       ├── howto.ts              // HowTo helper
│       ├── item-list.ts          // ItemList helper
│       ├── event.ts              // Event helper
│       └── index.ts              // Re-export all
├── components/
│   └── JsonLd.tsx                // JSON-LD render component
└── app/
    ├── layout.tsx                // Global schema (Organization, WebSite)
    ├── page.tsx                  // Ana sayfa schema
    ├── lipodem-nedir/
    │   └── page.tsx              // MedicalCondition schema
    └── ...
```

### 2.2 JSON-LD Render Bileşeni

```tsx
// src/components/JsonLd.tsx
interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  const jsonLd = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

### 2.3 Schema Ekleme Yöntemi -- Next.js App Router

Next.js App Router'da schema'lar `generateMetadata` yerine doğrudan sayfa bileşeninde eklenir. Google, JSON-LD'yi `<head>` veya `<body>` icerisinde kabul eder; App Router'da `<script>` etiketi body icinde render edilir ve bu yeterlidir.

**Global schema'lar (Organization, WebSite):** `app/layout.tsx` icerisinde
**Sayfa bazlı schema'lar:** Ilgili `page.tsx` icerisinde

```tsx
// app/layout.tsx -- Global schema ornegi
import { JsonLd } from '@/components/JsonLd';
import { organizationSchema } from '@/lib/schema/organization';
import { websiteSchema } from '@/lib/schema/website';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
```

```tsx
// app/lipodem-nedir/page.tsx -- Sayfa bazlı schema ornegi
import { JsonLd } from '@/components/JsonLd';
import { medicalConditionSchema } from '@/lib/schema/medical-condition';
import { generateBreadcrumb } from '@/lib/schema/breadcrumb';
import { generateFaqSchema } from '@/lib/schema/faq';

export default function LipodemNedirPage() {
  const breadcrumb = generateBreadcrumb([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Lipödem Nedir', url: '/lipodem-nedir' },
  ]);

  const faq = generateFaqSchema([
    { question: 'Lipödem nedir?', answer: 'Lipödem, ...' },
    // ...
  ]);

  return (
    <>
      <JsonLd data={[medicalConditionSchema, breadcrumb, faq]} />
      {/* Sayfa icerigi */}
    </>
  );
}
```

### 2.4 TypeScript Tip Tanımları

```ts
// src/lib/schema/types.ts

export interface SchemaBase {
  "@type": string;
  "@id"?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TherapyData {
  name: string;
  alternateName?: string;
  description: string;
  therapyType: string;
  url: string;
  howPerformed?: string;
  procedure?: string;
  seriousAdverseOutcome?: string;
  contraindication?: string;
}

export interface ClinicData {
  name: string;
  description: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  telephone: string;
  latitude: number;
  longitude: number;
  openingHours: OpeningHoursData[];
  medicalSpecialty: string[];
  availableService: string[];
  physicians: PhysicianRef[];
  url: string;
  image?: string;
}

export interface OpeningHoursData {
  days: string[];
  opens: string;
  closes: string;
}

export interface PhysicianRef {
  name: string;
  slug: string;
}

export interface PhysicianData {
  name: string;
  slug: string;
  description: string;
  medicalSpecialty: string[];
  qualification: string[];
  alumniOf: string[];
  memberOf?: string[];
  affiliatedClinic: ClinicRef[];
  image?: string;
  telephone?: string;
}

export interface ClinicRef {
  name: string;
  url: string;
}

export interface ArticleData {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorUrl?: string;
  image: string;
  citations?: string[];
  about?: string;
  speakable?: boolean;
}

export interface HowToStepData {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

export interface HowToData {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStepData[];
  url: string;
}

export interface EventData {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: {
    name: string;
    address: string;
    city: string;
  };
  url: string;
  image?: string;
}
```

---

## 3. Organization Schema

**Kullanılacak sayfalar:** Ana sayfa (`/`), Hakkımızda (`/hakkimizda`) -- layout.tsx uzerinden tum sayfalarda
**Hedef:** Knowledge Panel, marka tanınırlığı, entity tanıma

### 3.1 Helper Fonksiyon

```ts
// src/lib/schema/organization.ts

const SITE_URL = 'https://lipodemturkiye.com';

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  "name": "Lipödem Türkiye",
  "alternateName": ["Lipodem Turkiye", "Lipödem TR"],
  "url": SITE_URL,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_URL}/images/logo.png`,
    "width": 512,
    "height": 512
  },
  "image": `${SITE_URL}/images/og-default.jpg`,
  "description": "Türkiye'nin ilk ve tek kapsamlı lipödem hasta platformu. Bilimsel bilgi, interaktif araçlar, uzman klinik rehberi ve topluluk desteği.",
  "foundingDate": "2026",
  "sameAs": [
    "https://www.instagram.com/lipodemturkiye",
    "https://www.youtube.com/@lipodemturkiye",
    "https://www.facebook.com/lipodemturkiye",
    "https://www.tiktok.com/@lipodemturkiye",
    "https://x.com/lipodemturkiye"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "iletisim@lipodemturkiye.com",
    "availableLanguage": "Turkish",
    "url": `${SITE_URL}/iletisim`
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey",
    "alternateName": "Türkiye"
  },
  "knowsAbout": [
    "Lipödem",
    "Lipedema",
    "Lipoedema",
    "Lipödem tedavisi",
    "Lipödem belirtileri",
    "Lipödem cerrahisi",
    "Konservatif lipödem tedavisi"
  ],
  "slogan": "Yalnız değilsiniz."
};
```

### 3.2 Tam JSON-LD Çıktısı

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://lipodemturkiye.com/#organization",
  "name": "Lipödem Türkiye",
  "alternateName": ["Lipodem Turkiye", "Lipödem TR"],
  "url": "https://lipodemturkiye.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://lipodemturkiye.com/images/logo.png",
    "width": 512,
    "height": 512
  },
  "image": "https://lipodemturkiye.com/images/og-default.jpg",
  "description": "Türkiye'nin ilk ve tek kapsamlı lipödem hasta platformu. Bilimsel bilgi, interaktif araçlar, uzman klinik rehberi ve topluluk desteği.",
  "foundingDate": "2026",
  "sameAs": [
    "https://www.instagram.com/lipodemturkiye",
    "https://www.youtube.com/@lipodemturkiye",
    "https://www.facebook.com/lipodemturkiye",
    "https://www.tiktok.com/@lipodemturkiye",
    "https://x.com/lipodemturkiye"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "iletisim@lipodemturkiye.com",
    "availableLanguage": "Turkish",
    "url": "https://lipodemturkiye.com/iletisim"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Turkey",
    "alternateName": "Türkiye"
  },
  "knowsAbout": [
    "Lipödem",
    "Lipedema",
    "Lipoedema",
    "Lipödem tedavisi",
    "Lipödem belirtileri",
    "Lipödem cerrahisi",
    "Konservatif lipödem tedavisi"
  ],
  "slogan": "Yalnız değilsiniz."
}
```

**Google Rich Results Test:** Organization tek başına bir rich result tetiklemez, ancak Knowledge Panel oluşumu için temel yapı taşıdır. `sameAs` ile sosyal profillerin bağlanması entity tanınırlığı için kritiktir.

---

## 4. WebSite Schema + Sitelinks Search Box

**Kullanılacak sayfalar:** Yalnızca ana sayfa (`/`) -- layout.tsx uzerinden
**Hedef:** Google SERP'te sitelinks arama kutusu

### 4.1 Helper Fonksiyon

```ts
// src/lib/schema/website.ts

const SITE_URL = 'https://lipodemturkiye.com';

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": SITE_URL,
  "name": "Lipödem Türkiye",
  "description": "Türkiye'nin ilk kapsamlı lipödem hasta platformu",
  "publisher": {
    "@id": `${SITE_URL}/#organization`
  },
  "inLanguage": "tr-TR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${SITE_URL}/arama?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};
```

### 4.2 Tam JSON-LD Çıktısı

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://lipodemturkiye.com/#website",
  "url": "https://lipodemturkiye.com",
  "name": "Lipödem Türkiye",
  "description": "Türkiye'nin ilk kapsamlı lipödem hasta platformu",
  "publisher": {
    "@id": "https://lipodemturkiye.com/#organization"
  },
  "inLanguage": "tr-TR",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://lipodemturkiye.com/arama?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

**Not:** `potentialAction.target.urlTemplate` icindeki `/arama` endpointi, sitede arama fonksiyonu implement edildiginde aktif olacaktir. Google bu schema'yi gorduğünde SERP'te sitelinks arama kutusu gosterebilir.

**Doğrulama:** Google Rich Results Test'te "Sitelinks search box" olarak doğrulanır. Arama endpointi (`/arama?q=`) calışıyor olmalıdır.

---

## 5. BreadcrumbList Schema

**Kullanılacak sayfalar:** Ana sayfa haric tum sayfalar
**Hedef:** Google SERP'te breadcrumb gosterimi

### 5.1 Helper Fonksiyon

```ts
// src/lib/schema/breadcrumb.ts

import { BreadcrumbItem } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

/**
 * Breadcrumb schema olusturur.
 * @param items - Breadcrumb ogeleri dizisi (en son oge mevcut sayfa)
 * @returns BreadcrumbList JSON-LD nesnesi
 *
 * @example
 * generateBreadcrumb([
 *   { name: 'Ana Sayfa', url: '/' },
 *   { name: 'Lipödem Nedir', url: '/lipodem-nedir' },
 *   { name: 'Lipödem Belirtileri', url: '/lipodem-belirtileri' },
 * ]);
 */
export function generateBreadcrumb(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.url}`
    }))
  };
}
```

### 5.2 Her Sayfa Derinliği İçin Örnekler

**L1 -- Pillar Sayfa (Lipödem Nedir):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Lipödem Nedir",
      "item": "https://lipodemturkiye.com/lipodem-nedir"
    }
  ]
}
```

**L2 -- Cluster Makale (Lipödem Belirtileri):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Lipödem Nedir",
      "item": "https://lipodemturkiye.com/lipodem-nedir"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Lipödem Belirtileri",
      "item": "https://lipodemturkiye.com/lipodem-belirtileri"
    }
  ]
}
```

**L2 -- Klinik Sehir Sayfası (İstanbul):**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Klinikler",
      "item": "https://lipodemturkiye.com/klinikler"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "İstanbul",
      "item": "https://lipodemturkiye.com/klinikler/istanbul"
    }
  ]
}
```

**L2 -- Doktor Profili:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Doktorlar",
      "item": "https://lipodemturkiye.com/doktorlar"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Prof. Dr. Yener Demirtaş",
      "item": "https://lipodemturkiye.com/doktorlar/dr-yener-demirtas"
    }
  ]
}
```

**L2 -- Blog Makalesi:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://lipodemturkiye.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Lipödem Farkındalık Ayı 2026",
      "item": "https://lipodemturkiye.com/blog/lipodem-farkindalik-ayi-2026"
    }
  ]
}
```

**L2 -- Karşılaştırma Sayfası:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Karşılaştırma",
      "item": "https://lipodemturkiye.com/karsilastirma"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Vaser vs Tumescent Liposuction",
      "item": "https://lipodemturkiye.com/karsilastirma/vaser-vs-tumescent"
    }
  ]
}
```

### 5.3 Breadcrumb Haritası -- Tüm Sayfa Tipleri

| Sayfa Tipi | Breadcrumb Yolu |
|------------|----------------|
| Ana Sayfa | Ana Sayfa |
| Pillar (lipodem-nedir) | Ana Sayfa > Lipödem Nedir |
| Cluster (lipodem-belirtileri) | Ana Sayfa > Lipödem Nedir > Lipödem Belirtileri |
| Tedavi Pillar | Ana Sayfa > Tedavi Yol Haritası |
| Tedavi Detay | Ana Sayfa > Tedavi Yol Haritası > Lipödem Ameliyatı |
| Beslenme Pillar | Ana Sayfa > Beslenme Rehberi |
| Beslenme Detay | Ana Sayfa > Beslenme Rehberi > Lipödem Diyeti |
| Egzersiz Pillar | Ana Sayfa > Egzersiz Rehberi |
| Egzersiz Detay | Ana Sayfa > Egzersiz Rehberi > Lipödem Yüzme |
| Ruh Sağlığı Pillar | Ana Sayfa > Ruh Sağlığı |
| Ruh Sağlığı Detay | Ana Sayfa > Ruh Sağlığı > Hasta Hikayeleri |
| Türkiye Rehberi Pillar | Ana Sayfa > Türkiye Rehberi |
| Türkiye Rehberi Detay | Ana Sayfa > Türkiye Rehberi > SGK Rehberi |
| Klinik Ana | Ana Sayfa > Klinikler |
| Klinik Sehir | Ana Sayfa > Klinikler > [Sehir] |
| Doktor Dizini | Ana Sayfa > Doktorlar |
| Doktor Profili | Ana Sayfa > Doktorlar > [Doktor Adı] |
| Blog Ana | Ana Sayfa > Blog |
| Blog Makale | Ana Sayfa > Blog > [Makale Başlığı] |
| Hasta Hikayesi Ana | Ana Sayfa > Hasta Hikayeleri |
| Hasta Hikayesi Detay | Ana Sayfa > Hasta Hikayeleri > [Hikaye Başlığı] |
| Karşılaştırma Ana | Ana Sayfa > Karşılaştırma |
| Karşılaştırma Detay | Ana Sayfa > Karşılaştırma > [Başlık] |
| Araçlar Ana | Ana Sayfa > Araçlar |
| Araç Detay | Ana Sayfa > Araçlar > [Araç Adı] |
| Premium | Ana Sayfa > Premium |
| Hakkımızda | Ana Sayfa > Hakkımızda |
| İletişim | Ana Sayfa > İletişim |

---

## 6. MedicalCondition Schema -- Lipödem

**Kullanılacak sayfalar:** `/lipodem-nedir` (ana), `/lipodem-belirtileri`, `/lipodem-evreleri` (referans)
**Hedef:** Google'ın lipödemi tıbbi bir durum olarak anlaması, AI atıflanma

Bu, projenin en kritik schema'sıdır. Lipödemi Google'a ve AI motorlarına tam olarak tanıtır.

### 6.1 Helper Fonksiyon

```ts
// src/lib/schema/medical-condition.ts

const SITE_URL = 'https://lipodemturkiye.com';

export const lipoedemConditionSchema = {
  "@type": "MedicalCondition",
  "@id": `${SITE_URL}/#lipoedem`,
  "name": "Lipödem",
  "alternateName": ["Lipedema", "Lipoedema", "Lipodem", "Lipödema"],
  "description": "Lipödem, özellikle bacaklarda ve kollarda simetrik, orantısız yağ birikimi ile karakterize kronik bir hastalıktır. Diyete dirençlidir ve kadınların tahminen %6-11'ini etkiler. Ağrı, kolay morarma, ödem ve hareketlilik kısıtlılığı ile seyredebilir.",
  "url": `${SITE_URL}/lipodem-nedir`,
  "image": `${SITE_URL}/images/lipodem-nedir-hero.jpg`,

  "code": [
    {
      "@type": "MedicalCode",
      "codeValue": "E88.2",
      "codingSystem": "ICD-10",
      "name": "Lipomatosis, not elsewhere classified"
    },
    {
      "@type": "MedicalCode",
      "codeValue": "EF02.1",
      "codingSystem": "ICD-11",
      "name": "Lipedema"
    }
  ],

  "signOrSymptom": [
    {
      "@type": "MedicalSymptom",
      "name": "Bacaklarda simetrik, orantısız yağ birikimi",
      "description": "Üst beden normal veya ince kalırken, kalça ve bacaklarda belirgin yağ birikimi görülür. Ayaklarda yağ birikimi yoktur (cuff sign)."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Dokunma hassasiyeti ve ağrı",
      "description": "Etkilenen bölgelerde basınçla artan ağrı, spontan ağrı ve hassasiyet hissedilir."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Kolay morarma (hematom)",
      "description": "Minimal travma ile bile kolayca morarma oluşur. Kapiller fragilite artmıştır."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Diyete dirençli yağ",
      "description": "Kalori kısıtlaması ve egzersiz ile üst beden zayıflarken, etkilenen bölgelerdeki yağ değişmez."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Nodüler doku",
      "description": "Deri altında nodüler, düzensiz doku hissedilir. İleri evrelerde lobüler yapı oluşur."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Ödem (akşamları artan)",
      "description": "Gün sonunda bacaklarda ağırlık hissi ve şişlik artar. Ortostatik ödem gelişebilir."
    },
    {
      "@type": "MedicalSign",
      "name": "Stemmer belirtisi negatif",
      "description": "Ayak parmaklarında deri kıvrımı kalınlaşmamıştır. Lenfödemden ayırt edici bulgudur."
    },
    {
      "@type": "MedicalSign",
      "name": "Bilateral simetri",
      "description": "Yağ birikimi her iki tarafta simetrik olarak görülür."
    },
    {
      "@type": "MedicalSign",
      "name": "Cuff sign (bileklik işareti)",
      "description": "Ayak bileğinde yağ birikiminin aniden durduğu bir sınır çizgisi görülür."
    }
  ],

  "possibleTreatment": [
    {
      "@type": "MedicalTherapy",
      "name": "Kompleks Dekongestif Terapi (CDT)",
      "url": `${SITE_URL}/lipodem-fizyoterapi`
    },
    {
      "@type": "MedicalTherapy",
      "name": "Kompresyon tedavisi",
      "url": `${SITE_URL}/lipodem-kompresyon-tedavisi`
    },
    {
      "@type": "MedicalTherapy",
      "name": "Manuel Lenfatik Drenaj (MLD)",
      "url": `${SITE_URL}/lipodem-manuel-lenf-drenaji`
    },
    {
      "@type": "MedicalTherapy",
      "name": "Tumescent liposuction",
      "url": `${SITE_URL}/lipodem-ameliyati`
    },
    {
      "@type": "MedicalTherapy",
      "name": "VASER liposuction",
      "url": `${SITE_URL}/vaser-liposuction-lipodem`
    },
    {
      "@type": "MedicalTherapy",
      "name": "WAL (su destekli) liposuction",
      "url": `${SITE_URL}/lipodem-ameliyati`
    },
    {
      "@type": "MedicalTherapy",
      "name": "Anti-inflamatuar beslenme programı",
      "url": `${SITE_URL}/lipodem-beslenme`
    },
    {
      "@type": "MedicalTherapy",
      "name": "Lipödem egzersiz programı",
      "url": `${SITE_URL}/lipodem-egzersiz`
    },
    {
      "@type": "MedicalTherapy",
      "name": "Psikolojik destek",
      "url": `${SITE_URL}/lipodem-ruh-sagligi`
    }
  ],

  "riskFactor": [
    {
      "@type": "MedicalRiskFactor",
      "name": "Kadın cinsiyeti",
      "description": "Lipödem neredeyse tamamen kadınlarda görülür. Erkeklerde çok nadir olarak hormonal bozukluklarda bildirilmiştir."
    },
    {
      "@type": "MedicalRiskFactor",
      "name": "Aile öyküsü / genetik yatkınlık",
      "description": "Lipödemli hastaların büyük çoğunluğunda aile öyküsü vardır. Otozomal dominant geçiş düşünülmektedir."
    },
    {
      "@type": "MedicalRiskFactor",
      "name": "Hormonal değişim dönemleri",
      "description": "Puberte, hamilelik, menopoz ve hormon tedavisi dönemlerinde başlama veya kötüleşme sık görülür."
    }
  ],

  "epidemiology": "Lipödem, kadınların tahminen %6-11'ini etkiler. Bu oran dünya genelinde yaklaşık 370-400 milyon kadına karşılık gelir. Ortalama tanı gecikmesi 10 yılın üzerindedir. Türkiye'de doktorların yalnızca %51'i lipödemi bilmektedir (2025, n=508).",

  "differentialDiagnosis": [
    {
      "@type": "DDxElement",
      "diagnosis": {
        "@type": "MedicalCondition",
        "name": "Obezite"
      },
      "distinguishingSign": {
        "@type": "MedicalSymptom",
        "name": "Orantılı vücut yağ dağılımı, diyetle yanıt, ağrı yok"
      }
    },
    {
      "@type": "DDxElement",
      "diagnosis": {
        "@type": "MedicalCondition",
        "name": "Lenfödem"
      },
      "distinguishingSign": {
        "@type": "MedicalSign",
        "name": "Stemmer belirtisi pozitif, genellikle tek taraflı, ayağı da tutar"
      }
    },
    {
      "@type": "DDxElement",
      "diagnosis": {
        "@type": "MedicalCondition",
        "name": "Kronik venöz yetmezlik"
      },
      "distinguishingSign": {
        "@type": "MedicalSign",
        "name": "Cilt değişiklikleri (pigmentasyon, ülserasyon), varisler"
      }
    },
    {
      "@type": "DDxElement",
      "diagnosis": {
        "@type": "MedicalCondition",
        "name": "Dercum hastalığı (adipozis doloroza)"
      },
      "distinguishingSign": {
        "@type": "MedicalSign",
        "name": "Ağrılı lipomlar, dağılım asimetrik olabilir"
      }
    }
  ],

  "stage": [
    {
      "@type": "MedicalConditionStage",
      "stageAsNumber": 1,
      "subStageSuffix": "Evre 1",
      "description": "Düz deri yüzeyi, deri altında büyümüş hipodermis. Nodüler doku palpe edilir. Ağrı ve kolay morarma mevcut."
    },
    {
      "@type": "MedicalConditionStage",
      "stageAsNumber": 2,
      "subStageSuffix": "Evre 2",
      "description": "Deri yüzeyinde düzensizlik (mattress fenomeni). Büyük nodüler yapılar. Yağ dokusu içinde lipomlar."
    },
    {
      "@type": "MedicalConditionStage",
      "stageAsNumber": 3,
      "subStageSuffix": "Evre 3",
      "description": "Büyük lobüler yağ kütleleri. Deri kıvrımları ve katlantıları. Hareket kısıtlılığı. Belirgin deformasyon."
    },
    {
      "@type": "MedicalConditionStage",
      "stageAsNumber": 4,
      "subStageSuffix": "Evre 4 (Lipo-lenfödem)",
      "description": "Lipödeme sekonder lenfödem eşlik eder. Stemmer belirtisi pozitifleşir. Fibrotik doku değişiklikleri. En ağır form."
    }
  ],

  "associatedAnatomy": [
    {
      "@type": "AnatomicalStructure",
      "name": "Bacaklar (uyluk ve baldır)",
      "description": "En sık etkilenen bölge. Kalçadan ayak bileğine kadar simetrik yağ birikimi."
    },
    {
      "@type": "AnatomicalStructure",
      "name": "Kalça bölgesi",
      "description": "Kalça ve gluteal bölgede orantısız genişleme."
    },
    {
      "@type": "AnatomicalStructure",
      "name": "Kollar (üst kol)",
      "description": "Hastaların yaklaşık %30'unda kollar da etkilenir. Omuzdan dirsek veya bileklere kadar."
    }
  ],

  "medicineSystem": "https://schema.org/WesternConventional",
  "status": "https://schema.org/MedicalStudyStatus",
  "relevantSpecialty": [
    {
      "@type": "MedicalSpecialty",
      "name": "Plastik ve Rekonstrüktif Cerrahi"
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Dermatoloji"
    },
    {
      "@type": "MedicalSpecialty",
      "name": "Fizik Tedavi ve Rehabilitasyon"
    }
  ],

  "study": [
    {
      "@type": "MedicalStudy",
      "name": "International Delphi Consensus on Lipedema (2025)",
      "description": "71 uzman, 19 ülkeden katılım. Lipödem tanı kriterleri ve tedavi standartları üzerine uluslararası konsensüs.",
      "studyType": "https://schema.org/Observational"
    },
    {
      "@type": "MedicalStudy",
      "name": "German S2k Guideline for Lipedema (2024)",
      "description": "Alman Dermatoloji Derneği tarafından yayınlanan güncel lipödem kılavuzu."
    }
  ]
};
```

### 6.2 Tam JSON-LD Çıktısı (Kısaltılmamış)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalCondition",
  "@id": "https://lipodemturkiye.com/#lipoedem",
  "name": "Lipödem",
  "alternateName": ["Lipedema", "Lipoedema", "Lipodem", "Lipödema"],
  "description": "Lipödem, özellikle bacaklarda ve kollarda simetrik, orantısız yağ birikimi ile karakterize kronik bir hastalıktır. Diyete dirençlidir ve kadınların tahminen %6-11'ini etkiler. Ağrı, kolay morarma, ödem ve hareketlilik kısıtlılığı ile seyredebilir.",
  "url": "https://lipodemturkiye.com/lipodem-nedir",
  "image": "https://lipodemturkiye.com/images/lipodem-nedir-hero.jpg",
  "code": [
    {
      "@type": "MedicalCode",
      "codeValue": "E88.2",
      "codingSystem": "ICD-10",
      "name": "Lipomatosis, not elsewhere classified"
    },
    {
      "@type": "MedicalCode",
      "codeValue": "EF02.1",
      "codingSystem": "ICD-11",
      "name": "Lipedema"
    }
  ],
  "signOrSymptom": [
    {
      "@type": "MedicalSymptom",
      "name": "Bacaklarda simetrik, orantısız yağ birikimi",
      "description": "Üst beden normal veya ince kalırken, kalça ve bacaklarda belirgin yağ birikimi görülür. Ayaklarda yağ birikimi yoktur (cuff sign)."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Dokunma hassasiyeti ve ağrı",
      "description": "Etkilenen bölgelerde basınçla artan ağrı, spontan ağrı ve hassasiyet hissedilir."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Kolay morarma (hematom)",
      "description": "Minimal travma ile bile kolayca morarma oluşur. Kapiller fragilite artmıştır."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Diyete dirençli yağ",
      "description": "Kalori kısıtlaması ve egzersiz ile üst beden zayıflarken, etkilenen bölgelerdeki yağ değişmez."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Nodüler doku",
      "description": "Deri altında nodüler, düzensiz doku hissedilir. İleri evrelerde lobüler yapı oluşur."
    },
    {
      "@type": "MedicalSymptom",
      "name": "Ödem (akşamları artan)",
      "description": "Gün sonunda bacaklarda ağırlık hissi ve şişlik artar. Ortostatik ödem gelişebilir."
    },
    {
      "@type": "MedicalSign",
      "name": "Stemmer belirtisi negatif",
      "description": "Ayak parmaklarında deri kıvrımı kalınlaşmamıştır. Lenfödemden ayırt edici bulgudur."
    },
    {
      "@type": "MedicalSign",
      "name": "Bilateral simetri",
      "description": "Yağ birikimi her iki tarafta simetrik olarak görülür."
    },
    {
      "@type": "MedicalSign",
      "name": "Cuff sign (bileklik işareti)",
      "description": "Ayak bileğinde yağ birikiminin aniden durduğu bir sınır çizgisi görülür."
    }
  ],
  "possibleTreatment": [
    {
      "@type": "MedicalTherapy",
      "name": "Kompleks Dekongestif Terapi (CDT)",
      "url": "https://lipodemturkiye.com/lipodem-fizyoterapi"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Kompresyon tedavisi",
      "url": "https://lipodemturkiye.com/lipodem-kompresyon-tedavisi"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Manuel Lenfatik Drenaj (MLD)",
      "url": "https://lipodemturkiye.com/lipodem-manuel-lenf-drenaji"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Tumescent liposuction",
      "url": "https://lipodemturkiye.com/lipodem-ameliyati"
    },
    {
      "@type": "MedicalTherapy",
      "name": "VASER liposuction",
      "url": "https://lipodemturkiye.com/vaser-liposuction-lipodem"
    },
    {
      "@type": "MedicalTherapy",
      "name": "WAL (su destekli) liposuction",
      "url": "https://lipodemturkiye.com/lipodem-ameliyati"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Anti-inflamatuar beslenme programı",
      "url": "https://lipodemturkiye.com/lipodem-beslenme"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Lipödem egzersiz programı",
      "url": "https://lipodemturkiye.com/lipodem-egzersiz"
    },
    {
      "@type": "MedicalTherapy",
      "name": "Psikolojik destek",
      "url": "https://lipodemturkiye.com/lipodem-ruh-sagligi"
    }
  ],
  "riskFactor": [
    {
      "@type": "MedicalRiskFactor",
      "name": "Kadın cinsiyeti",
      "description": "Lipödem neredeyse tamamen kadınlarda görülür."
    },
    {
      "@type": "MedicalRiskFactor",
      "name": "Aile öyküsü / genetik yatkınlık",
      "description": "Lipödemli hastaların büyük çoğunluğunda aile öyküsü vardır."
    },
    {
      "@type": "MedicalRiskFactor",
      "name": "Hormonal değişim dönemleri",
      "description": "Puberte, hamilelik, menopoz ve hormon tedavisi dönemlerinde başlama veya kötüleşme sık görülür."
    }
  ],
  "epidemiology": "Lipödem, kadınların tahminen %6-11'ini etkiler. Dünya genelinde yaklaşık 370-400 milyon kadın etkilenmektedir. Ortalama tanı gecikmesi 10 yılın üzerindedir.",
  "differentialDiagnosis": [
    {
      "@type": "DDxElement",
      "diagnosis": { "@type": "MedicalCondition", "name": "Obezite" },
      "distinguishingSign": { "@type": "MedicalSymptom", "name": "Orantılı vücut yağ dağılımı, diyetle yanıt, ağrı yok" }
    },
    {
      "@type": "DDxElement",
      "diagnosis": { "@type": "MedicalCondition", "name": "Lenfödem" },
      "distinguishingSign": { "@type": "MedicalSign", "name": "Stemmer belirtisi pozitif, genellikle tek taraflı, ayağı da tutar" }
    },
    {
      "@type": "DDxElement",
      "diagnosis": { "@type": "MedicalCondition", "name": "Kronik venöz yetmezlik" },
      "distinguishingSign": { "@type": "MedicalSign", "name": "Cilt değişiklikleri, varisler" }
    },
    {
      "@type": "DDxElement",
      "diagnosis": { "@type": "MedicalCondition", "name": "Dercum hastalığı" },
      "distinguishingSign": { "@type": "MedicalSign", "name": "Ağrılı lipomlar, asimetrik dağılım" }
    }
  ],
  "stage": [
    { "@type": "MedicalConditionStage", "stageAsNumber": 1, "subStageSuffix": "Evre 1", "description": "Düz deri yüzeyi, deri altında büyümüş hipodermis. Nodüler doku palpe edilir." },
    { "@type": "MedicalConditionStage", "stageAsNumber": 2, "subStageSuffix": "Evre 2", "description": "Deri yüzeyinde düzensizlik. Büyük nodüler yapılar. Yağ dokusu içinde lipomlar." },
    { "@type": "MedicalConditionStage", "stageAsNumber": 3, "subStageSuffix": "Evre 3", "description": "Büyük lobüler yağ kütleleri. Deri kıvrımları. Hareket kısıtlılığı." },
    { "@type": "MedicalConditionStage", "stageAsNumber": 4, "subStageSuffix": "Evre 4 (Lipo-lenfödem)", "description": "Lipödeme sekonder lenfödem eşlik eder. Stemmer belirtisi pozitifleşir." }
  ],
  "associatedAnatomy": [
    { "@type": "AnatomicalStructure", "name": "Bacaklar (uyluk ve baldır)" },
    { "@type": "AnatomicalStructure", "name": "Kalça bölgesi" },
    { "@type": "AnatomicalStructure", "name": "Kollar (üst kol)" }
  ],
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": [
    { "@type": "MedicalSpecialty", "name": "Plastik ve Rekonstrüktif Cerrahi" },
    { "@type": "MedicalSpecialty", "name": "Dermatoloji" },
    { "@type": "MedicalSpecialty", "name": "Fizik Tedavi ve Rehabilitasyon" }
  ]
}
```

**Doğrulama:** MedicalCondition, Google tarafından doğrudan rich result olarak desteklenmez, ancak Google'ın ve AI motorlarının lipödemi bir tıbbi durum entity'si olarak tanımasını sağlar. Schema.org Validator'da hatasız geçmelidir.

---

## 7. MedicalTherapy Schema'ları

**Kullanılacak sayfalar:** Her tedavi detay sayfası icin ayrı schema
**Hedef:** AI motorlarının tedavi yöntemlerini entity olarak tanıması

### 7.1 Helper Fonksiyon

```ts
// src/lib/schema/medical-therapy.ts

import { TherapyData } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

export function generateMedicalTherapy(data: TherapyData) {
  return {
    "@type": "MedicalTherapy",
    "@id": `${SITE_URL}${data.url}/#therapy`,
    "name": data.name,
    ...(data.alternateName && { "alternateName": data.alternateName }),
    "description": data.description,
    "url": `${SITE_URL}${data.url}`,
    "medicineSystem": "https://schema.org/WesternConventional",
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Plastik ve Rekonstrüktif Cerrahi"
    },
    "study": {
      "@type": "MedicalCondition",
      "@id": `${SITE_URL}/#lipoedem`,
      "name": "Lipödem"
    },
    ...(data.howPerformed && { "howPerformed": data.howPerformed }),
    ...(data.procedure && { "procedureType": data.procedure }),
    ...(data.seriousAdverseOutcome && { "seriousAdverseOutcome": data.seriousAdverseOutcome }),
    ...(data.contraindication && { "contraindication": data.contraindication })
  };
}
```

### 7.2 Tüm Tedavi Yöntemleri -- Tam JSON-LD'ler

#### 7.2.1 Kompleks Dekongestif Terapi (CDT)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://lipodemturkiye.com/lipodem-fizyoterapi/#therapy",
  "name": "Kompleks Dekongestif Terapi (CDT)",
  "alternateName": "Complex Decongestive Therapy",
  "description": "Lipödem tedavisinde birinci basamak konservatif tedavi protokolü. Manuel lenfatik drenaj, kompresyon bandajlama, dekompresyon egzersizleri ve cilt bakımını içeren çok bileşenli bir yaklaşımdır.",
  "url": "https://lipodemturkiye.com/lipodem-fizyoterapi",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Fizik Tedavi ve Rehabilitasyon"
  },
  "howPerformed": "Sertifikalı bir lenfatik fizyoterapist tarafından uygulanır. Tedavi 2 fazdan oluşur: Yoğun faz (2-4 hafta, günlük seanslar) ve sürdürme fazı (hastanın kendi kendine uyguladığı ev programı). Her seans yaklaşık 60-90 dakika sürer.",
  "contraindication": "Akut enfeksiyon, dekompanse kalp yetmezliği, aktif derin ven trombozu, aktif kanser tedavisi sırasında dikkatli değerlendirilmelidir."
}
```

#### 7.2.2 Kompresyon Tedavisi

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://lipodemturkiye.com/lipodem-kompresyon-tedavisi/#therapy",
  "name": "Kompresyon Tedavisi",
  "alternateName": "Compression Therapy",
  "description": "Lipödemde ağrıyı azaltan, ödem kontrolü sağlayan ve hastalık ilerlemesini yavaşlatan temel konservatif tedavi yöntemi. Düz örgü (flat-knit) kompresyon giysileri kullanılır.",
  "url": "https://lipodemturkiye.com/lipodem-kompresyon-tedavisi",
  "medicineSystem": "https://schema.org/WesternConventional",
  "howPerformed": "Kişiye özel ölçülerle üretilen düz örgü kompresyon çorap veya taytlar günlük olarak giyilir. Basınç sınıfı hastanın evresine göre belirlenir (genellikle Sınıf 2-3, 23-40 mmHg). Her 6 ayda yenilenmesi önerilir."
}
```

#### 7.2.3 Manuel Lenfatik Drenaj (MLD)

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://lipodemturkiye.com/lipodem-manuel-lenf-drenaji/#therapy",
  "name": "Manuel Lenfatik Drenaj (MLD)",
  "alternateName": "Manual Lymphatic Drainage",
  "description": "Hafif, ritmik masaj hareketleri ile lenf sıvısının dolaşımını artıran, ödemi azaltan ve ağrıyı hafifletmeye yardımcı olan özel bir fizyoterapi tekniği. CDT'nin temel bileşenlerinden biridir.",
  "url": "https://lipodemturkiye.com/lipodem-manuel-lenf-drenaji",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Fizik Tedavi ve Rehabilitasyon"
  },
  "howPerformed": "Vodder veya Földi tekniği ile eğitimli fizyoterapist tarafından uygulanır. Seans süresi 45-60 dakika. Haftada 1-5 seans (tedavi fazına bağlı). Hafif basınç ile lenfatik yollar boyunca ritmik hareketler yapılır."
}
```

#### 7.2.4 Tumescent Liposuction

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalTherapy", "MedicalProcedure"],
  "@id": "https://lipodemturkiye.com/lipodem-ameliyati/#tumescent",
  "name": "Tumescent Liposuction",
  "alternateName": "Tumesent Liposuction",
  "description": "Lipödem cerrahisinde en yaygın kullanılan ve en geniş bilimsel kanıta sahip liposuction tekniği. Tumescent sıvısı (seyreltilmiş lokal anestezik + adrenalin) enjekte edildikten sonra yağ dokusunun aspire edilmesidir.",
  "url": "https://lipodemturkiye.com/lipodem-ameliyati",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Plastik ve Rekonstrüktif Cerrahi"
  },
  "procedureType": "https://schema.org/SurgicalProcedure",
  "howPerformed": "Genel veya lokal anestezi altında yapılır. Tumescent sıvısı operasyon bölgesine infiltre edilir. İnce kanüller ile lipödem yağ dokusu aspire edilir. Seans başına 3-5 litre yağ alınabilir. Genellikle 2-4 seans gerekir. Seanslar arası 3-6 ay beklenir.",
  "seriousAdverseOutcome": "Sekonder lenfödem riski %0.18 (2024, n=906). Nadir komplikasyonlar: kanama, enfeksiyon, asimetri, duyusal değişiklik.",
  "preparation": "Ameliyat öncesi detaylı fizik muayene, vücut ölçümleri, fotoğraflama, kan tetkikleri. Kan sulandırıcı ilaçların kesilmesi (doktor onayı ile). Kompresyon giysisi hazırlanması."
}
```

#### 7.2.5 VASER Liposuction

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalTherapy", "MedicalProcedure"],
  "@id": "https://lipodemturkiye.com/vaser-liposuction-lipodem/#therapy",
  "name": "VASER Liposuction",
  "alternateName": "Vibration Amplification of Sound Energy at Resonance",
  "description": "Ultrason enerjisi kullanarak yağ hücrelerini emülsifiye eden ve ardından aspire eden liposuction tekniği. Lipödemde doku seçiciliği avantajı sunar: damar ve sinir yapılarına daha az zarar verir.",
  "url": "https://lipodemturkiye.com/vaser-liposuction-lipodem",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Plastik ve Rekonstrüktif Cerrahi"
  },
  "procedureType": "https://schema.org/SurgicalProcedure",
  "howPerformed": "Tumescent sıvısı enjekte edilir. Ultrasonik prob ile yağ dokusu emülsifiye edilir. Emülsifiye yağ aspire edilir. Cilt retraksiyonu tumescent tekniğe göre daha iyi olabilir. Seans süresi 2-4 saat."
}
```

#### 7.2.6 WAL (Su Destekli) Liposuction

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalTherapy", "MedicalProcedure"],
  "@id": "https://lipodemturkiye.com/lipodem-ameliyati/#wal",
  "name": "WAL - Su Destekli Liposuction",
  "alternateName": "Water-Assisted Liposuction (Body-Jet)",
  "description": "Fan şeklinde su jeti ile yağ hücrelerini dokulardan nazikçe ayıran ve eş zamanlı olarak aspire eden liposuction tekniği. Lenfatik damarlara en az zarar veren yöntem olarak değerlendirilir.",
  "url": "https://lipodemturkiye.com/lipodem-ameliyati",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Plastik ve Rekonstrüktif Cerrahi"
  },
  "procedureType": "https://schema.org/SurgicalProcedure",
  "howPerformed": "Su jeti ile yağ hücreleri dokudan nazikçe ayrıştırılır ve eş zamanlı aspire edilir. Tumescent sıvı miktarı daha az gerekir. İşlem süresi kısadır. Lenfatik hasara duyarlı hastalarda tercih edilebilir."
}
```

#### 7.2.7 PAL (Güç Destekli) Liposuction

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalTherapy", "MedicalProcedure"],
  "@id": "https://lipodemturkiye.com/lipodem-ameliyati/#pal",
  "name": "PAL - Güç Destekli Liposuction",
  "alternateName": "Power-Assisted Liposuction (MicroAire)",
  "description": "Motorize kanül ile titreşim yaparak yağ dokusunun daha kolay aspire edilmesini sağlayan liposuction tekniği. Cerrahın el yorgunluğunu azaltır ve daha homojen yağ alımı sağlar.",
  "url": "https://lipodemturkiye.com/lipodem-ameliyati",
  "medicineSystem": "https://schema.org/WesternConventional",
  "procedureType": "https://schema.org/SurgicalProcedure",
  "howPerformed": "Tumescent sıvısı enjeksiyonu sonrası motorize kanül ile yağ dokusu aspire edilir. Kanül ucundaki titreşim hareketi yağ hücrelerinin ayrışmasını kolaylaştırır. Fibrotik doku alanlarında avantajlıdır."
}
```

#### 7.2.8 Anti-İnflamatuar Beslenme

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://lipodemturkiye.com/lipodem-beslenme/#therapy",
  "name": "Anti-İnflamatuar Beslenme Programı",
  "alternateName": "Anti-inflammatory Diet for Lipedema",
  "description": "Lipödemde iltihabı azaltmayı, ağrıyı hafifletmeyi ve semptom kontrolü sağlamayı hedefleyen beslenme yaklaşımı. Akdeniz diyeti bazlı, düşük glisemik indeksli, omega-3 zengin beslenme modeli önerilir. Modifiye ketojenik diyet ile 7 ayda ortalama 12 kg azalma ve uylukta 6 cm incelme gösterilmiştir (2025, n=48).",
  "url": "https://lipodemturkiye.com/lipodem-beslenme",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Beslenme ve Diyetetik"
  }
}
```

#### 7.2.9 Lipödem Egzersiz Programı

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": "https://lipodemturkiye.com/lipodem-egzersiz/#therapy",
  "name": "Lipödem Egzersiz Programı",
  "alternateName": "Exercise Therapy for Lipedema",
  "description": "Lipödem hastalarına özel, düşük etkili egzersiz programı. Su içi egzersizler (yüzme, aqua aerobik), yoga, pilates, yürüyüş ve hafif güç antrenmanını içerir. Kompresyon giysisi ile yapılması önerilir. Ağrıyı azaltır, lenfatik dolaşımı destekler ve genel yaşam kalitesini artırır.",
  "url": "https://lipodemturkiye.com/lipodem-egzersiz",
  "medicineSystem": "https://schema.org/WesternConventional",
  "relevantSpecialty": {
    "@type": "MedicalSpecialty",
    "name": "Fizik Tedavi ve Rehabilitasyon"
  }
}
```

### 7.3 Next.js Uygulama Örneği -- Tedavi Sayfası

```tsx
// app/lipodem-ameliyati/page.tsx
import { JsonLd } from '@/components/JsonLd';
import { generateBreadcrumb } from '@/lib/schema/breadcrumb';

const tumescentTherapy = {
  "@type": ["MedicalTherapy", "MedicalProcedure"],
  "@id": "https://lipodemturkiye.com/lipodem-ameliyati/#tumescent",
  "name": "Tumescent Liposuction",
  // ... tam schema yukarıdaki gibi
};

const medicalWebPage = {
  "@type": "MedicalWebPage",
  "name": "Lipödem Ameliyatı: Cerrahi Tedavi Rehberi",
  "description": "Lipödem cerrahisinde kullanılan liposuction teknikleri, ameliyat süreci, maliyetler ve sonuçlar hakkında bilimsel rehber.",
  "url": "https://lipodemturkiye.com/lipodem-ameliyati",
  "lastReviewed": "2026-05-01",
  "medicalAudience": {
    "@type": "PatientAudience",
    "audienceType": "patient"
  },
  "about": {
    "@id": "https://lipodemturkiye.com/#lipoedem"
  }
};

export default function LipodemAmeliyatiPage() {
  const breadcrumb = generateBreadcrumb([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Tedavi Yol Haritası', url: '/lipodem-tedavisi' },
    { name: 'Lipödem Ameliyatı', url: '/lipodem-ameliyati' },
  ]);

  return (
    <>
      <JsonLd data={[tumescentTherapy, medicalWebPage, breadcrumb]} />
      {/* Sayfa içeriği */}
    </>
  );
}
```

---

## 8. MedicalClinic Schema

**Kullanılacak sayfalar:** Klinik profil sayfaları (gelecekte `/klinikler/[sehir]/[klinik-slug]` veya klinik detay modalları)
**Hedef:** Local Business paneli, Maps entegrasyonu

### 8.1 Helper Fonksiyon

```ts
// src/lib/schema/medical-clinic.ts

import { ClinicData } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

export function generateMedicalClinic(data: ClinicData) {
  return {
    "@type": ["MedicalClinic", "MedicalBusiness"],
    "@id": `${SITE_URL}${data.url}/#clinic`,
    "name": data.name,
    "description": data.description,
    "url": `${SITE_URL}${data.url}`,
    ...(data.image && { "image": data.image }),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.streetAddress,
      "addressLocality": data.city,
      "addressRegion": data.city,
      "postalCode": data.postalCode,
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.latitude,
      "longitude": data.longitude
    },
    "telephone": data.telephone,
    "openingHoursSpecification": data.openingHours.map(oh => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": oh.days,
      "opens": oh.opens,
      "closes": oh.closes
    })),
    "medicalSpecialty": data.medicalSpecialty.map(spec => ({
      "@type": "MedicalSpecialty",
      "name": spec
    })),
    "availableService": data.availableService.map(service => ({
      "@type": "MedicalTherapy",
      "name": service
    })),
    "physician": data.physicians.map(doc => ({
      "@type": "Physician",
      "name": doc.name,
      "url": `${SITE_URL}/doktorlar/${doc.slug}`
    })),
    "isAcceptingNewPatients": true,
    "currenciesAccepted": "TRY",
    "paymentAccepted": "Nakit, Kredi Kartı, Havale/EFT"
  };
}
```

### 8.2 Örnek JSON-LD -- İstanbul Klinik

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness"],
  "@id": "https://lipodemturkiye.com/klinikler/istanbul/esteaura/#clinic",
  "name": "EsteAura Klinik",
  "description": "İstanbul'da lipödem cerrahisi ve konservatif tedavi hizmetleri sunan özel klinik. Tumescent, VASER ve WAL liposuction teknikleri uygulanmaktadır.",
  "url": "https://lipodemturkiye.com/klinikler/istanbul/esteaura",
  "image": "https://lipodemturkiye.com/images/klinikler/esteaura.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Nispetiye Cad. No: 12",
    "addressLocality": "İstanbul",
    "addressRegion": "İstanbul",
    "postalCode": "34340",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0812,
    "longitude": 29.0218
  },
  "telephone": "+90-212-XXX-XXXX",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "medicalSpecialty": [
    { "@type": "MedicalSpecialty", "name": "Plastik ve Rekonstrüktif Cerrahi" },
    { "@type": "MedicalSpecialty", "name": "Lipödem Cerrahisi" }
  ],
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Tumescent Liposuction" },
    { "@type": "MedicalTherapy", "name": "VASER Liposuction" },
    { "@type": "MedicalTherapy", "name": "WAL Liposuction" },
    { "@type": "MedicalTherapy", "name": "Kompresyon Tedavisi" }
  ],
  "physician": [
    {
      "@type": "Physician",
      "name": "Prof. Dr. Yener Demirtaş",
      "url": "https://lipodemturkiye.com/doktorlar/dr-yener-demirtas"
    }
  ],
  "isAcceptingNewPatients": true,
  "currenciesAccepted": "TRY",
  "paymentAccepted": "Nakit, Kredi Kartı, Havale/EFT"
}
```

**Doğrulama:** Google Rich Results Test'te LocalBusiness/MedicalBusiness olarak doğrulanır. `address`, `telephone` ve `geo` alanları Maps entegrasyonu için zorunludur.

---

## 9. Physician Schema

**Kullanılacak sayfalar:** `/doktorlar/[slug]`
**Hedef:** Knowledge Panel, doktor arama sonuçlarında zengin görünüm

### 9.1 Helper Fonksiyon

```ts
// src/lib/schema/physician.ts

import { PhysicianData } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

export function generatePhysician(data: PhysicianData) {
  return {
    "@type": "Physician",
    "@id": `${SITE_URL}/doktorlar/${data.slug}/#physician`,
    "name": data.name,
    "description": data.description,
    "url": `${SITE_URL}/doktorlar/${data.slug}`,
    ...(data.image && { "image": data.image }),
    "medicalSpecialty": data.medicalSpecialty.map(spec => ({
      "@type": "MedicalSpecialty",
      "name": spec
    })),
    "qualification": data.qualification,
    "alumniOf": data.alumniOf.map(school => ({
      "@type": "EducationalOrganization",
      "name": school
    })),
    ...(data.memberOf && {
      "memberOf": data.memberOf.map(org => ({
        "@type": "Organization",
        "name": org
      }))
    }),
    "hospitalAffiliation": data.affiliatedClinic.map(clinic => ({
      "@type": "MedicalClinic",
      "name": clinic.name,
      "url": clinic.url
    })),
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "Lipödem Cerrahisi"
      }
    ],
    "knowsAbout": [
      "Lipödem",
      "Lipedema",
      "Liposuction",
      "Plastik Cerrahi"
    ],
    ...(data.telephone && { "telephone": data.telephone })
  };
}
```

### 9.2 Örnek JSON-LD -- Doktor Profili

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://lipodemturkiye.com/doktorlar/dr-yener-demirtas/#physician",
  "name": "Prof. Dr. Yener Demirtaş",
  "description": "Lipödem cerrahisi alanında uzmanlaşmış plastik ve rekonstrüktif cerrahi uzmanı. Tumescent ve VASER liposuction teknikleri ile lipödem tedavisi uygulamaktadır.",
  "url": "https://lipodemturkiye.com/doktorlar/dr-yener-demirtas",
  "image": "https://lipodemturkiye.com/images/doktorlar/yener-demirtas.jpg",
  "medicalSpecialty": [
    { "@type": "MedicalSpecialty", "name": "Plastik ve Rekonstrüktif Cerrahi" },
    { "@type": "MedicalSpecialty", "name": "Lipödem Cerrahisi" }
  ],
  "qualification": [
    "Profesör",
    "Plastik ve Rekonstrüktif Cerrahi Uzmanı",
    "Lipödem Cerrahisi Sertifikası"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Gazi Üniversitesi Tıp Fakültesi"
    }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği" },
    { "@type": "Organization", "name": "European Lipoedema Association" }
  ],
  "hospitalAffiliation": [
    {
      "@type": "MedicalClinic",
      "name": "EsteAura Klinik",
      "url": "https://lipodemturkiye.com/klinikler/istanbul/esteaura"
    }
  ],
  "availableService": [
    { "@type": "MedicalTherapy", "name": "Tumescent Liposuction" },
    { "@type": "MedicalTherapy", "name": "VASER Liposuction" },
    { "@type": "MedicalTherapy", "name": "Lipödem Konsültasyonu" }
  ],
  "knowsAbout": ["Lipödem", "Lipedema", "Liposuction", "Plastik Cerrahi"],
  "telephone": "+90-212-XXX-XXXX"
}
```

### 9.3 Next.js Dinamik Sayfa Uygulama Örneği

```tsx
// app/doktorlar/[slug]/page.tsx
import { JsonLd } from '@/components/JsonLd';
import { generatePhysician } from '@/lib/schema/physician';
import { generateBreadcrumb } from '@/lib/schema/breadcrumb';
import { getPhysicianBySlug } from '@/lib/data/physicians';

interface PageProps {
  params: { slug: string };
}

export default async function PhysicianPage({ params }: PageProps) {
  const doctor = await getPhysicianBySlug(params.slug);

  const physicianSchema = generatePhysician({
    name: doctor.name,
    slug: doctor.slug,
    description: doctor.description,
    medicalSpecialty: doctor.specialties,
    qualification: doctor.qualifications,
    alumniOf: doctor.education,
    memberOf: doctor.memberships,
    affiliatedClinic: doctor.clinics,
    image: doctor.imageUrl,
    telephone: doctor.phone,
  });

  const breadcrumb = generateBreadcrumb([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Doktorlar', url: '/doktorlar' },
    { name: doctor.name, url: `/doktorlar/${doctor.slug}` },
  ]);

  return (
    <>
      <JsonLd data={[physicianSchema, breadcrumb]} />
      {/* Doktor profil sayfası içeriği */}
    </>
  );
}
```

---

## 10. FAQPage Schema

**Kullanılacak sayfalar:** SSS bölümü olan tüm sayfalar
**Hedef:** Google SERP'te FAQ rich snippets (en yüksek değerli rich result)

### 10.1 Helper Fonksiyon

```ts
// src/lib/schema/faq.ts

import { FaqItem } from './types';

/**
 * FAQPage schema olusturur.
 * @param items - Soru-cevap dizisi
 * @returns FAQPage JSON-LD nesnesi
 *
 * @example
 * generateFaqSchema([
 *   { question: 'Lipödem nedir?', answer: 'Lipödem, ...' },
 *   { question: 'Lipödem belirtileri nelerdir?', answer: 'En sık belirtiler ...' },
 * ]);
 */
export function generateFaqSchema(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}
```

### 10.2 Lipödem Nedir Sayfası SSS

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Lipödem nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lipödem, özellikle bacaklarda ve kollarda simetrik, orantısız yağ birikimi ile karakterize kronik bir hastalıktır. Diyete dirençlidir ve kadınların tahminen %6-11'ini etkiler. Obezite veya lenfödemle karıştırılmamalıdır. ICD-11 kodu EF02.1'dir."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem belirtileri nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lipödemin başlıca belirtileri: bacaklarda orantısız yağ birikimi (üst beden normal kalır), dokunma hassasiyeti ve ağrı, kolay morarma, diyete rağmen bacakların incelememesi, akşamları artan şişlik, nodüler doku hissi ve ayak bileğinde belirgin sınır çizgisi (cuff sign). Stemmer belirtisi negatiftir -- bu lenfödemden ayırt edici bir bulgudur."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem obeziteden nasıl ayırt edilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lipödemde yağ birikimi orantısızdır (üst beden ince, alt beden geniş), diyete dirençlidir ve ağrı eşlik eder. Obezitede yağ dağılımı orantılıdır, diyet ve egzersizle azalır ve ağrı yoktur. Lipödemde ayaklarda yağ birikmez (cuff sign), obezitede tüm vücutta eşit dağılım görülür."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem tedavisi var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lipödem henüz tam olarak iyileştirilemez, ancak etkili tedavi yöntemleri vardır. Konservatif tedaviler (kompresyon tedavisi, manuel lenfatik drenaj, anti-inflamatuar beslenme, egzersiz) semptomları kontrol altına alır. Cerrahi tedavi (lipödem liposuction -- tumescent, VASER veya WAL teknikleri) hastalıklı yağ dokusunu kalıcı olarak uzaklaştırır. Erken tanı ve tedavi ile yaşam kalitesi önemli ölçüde iyileştirilebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem ameliyatı ne kadar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Türkiye'de lipödem ameliyatı (liposuction) 2026 yılı itibarıyla seans başına 55.000-250.000 TL arasında değişmektedir. Fiyat; tekniğe (tumescent, VASER, WAL), tedavi edilecek bölge sayısına, cerrahın deneyimine ve kliniğe göre farklılık gösterir. Genellikle 2-4 seans gerekir. SGK lipödem ameliyatını karşılamamaktadır."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem hangi doktora gidilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lipödem tanısı için dermatoloji, fizik tedavi veya plastik cerrahi uzmanına başvurabilirsiniz. Cerrahi tedavi için lipödem deneyimi olan plastik ve rekonstrüktif cerrahi uzmanı gereklidir. Konservatif tedavi için lenfatik fizyoterapi sertifikalı fizyoterapist önerilir. Beslenme programı için diyetisyenle çalışmanız faydalı olacaktır."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem genetik mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, lipödem güçlü bir genetik bileşene sahiptir. Hastaların büyük çoğunluğunda aile öyküsü bulunur -- anne, teyze veya büyükannede benzer belirtiler görülmüştür. Otozomal dominant geçiş düşünülmektedir. Ancak genetik yatkınlık tek başına yeterli değildir; hormonal değişimler (puberte, hamilelik, menopoz) genellikle tetikleyici rol oynar."
      }
    }
  ]
}
```

### 10.3 Premium Sayfası SSS

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Premium üyelik ne sunuyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Premium üyelik; kişiselleştirilmiş beslenme ve egzersiz programı (evrenize ve ihtiyaçlarınıza göre), uzman soru-cevap erişimi, moderasyonlu hasta topluluğu, detaylı tedavi rehberleri, haftalık menü planları ve öncelikli destek içerir."
      }
    },
    {
      "@type": "Question",
      "name": "Ücretsiz içeriklerle premium arasındaki fark nedir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ücretsiz içerikler genel lipödem bilgisi, semptom testi, blog makaleleri ve klinik bulucu gibi temel araçları kapsar. Premium üyelik bunların üzerine kişiselleştirilmiş programlar, uzman erişimi, topluluk katılımı ve detaylı rehberler ekler."
      }
    },
    {
      "@type": "Question",
      "name": "İstediğim zaman iptal edebilir miyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, premium üyeliğinizi dilediğiniz zaman iptal edebilirsiniz. İptal sonrası mevcut ödeme döneminin sonuna kadar premium özelliklere erişiminiz devam eder. Taahhüt yoktur."
      }
    },
    {
      "@type": "Question",
      "name": "Beslenme programı bir diyetisyen tarafından mı hazırlanıyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beslenme programlarımız lipödem alanında deneyimli diyetisyenler ve bilimsel araştırmalar rehberliğinde hazırlanmıştır. Ancak kişisel bir diyetisyen konsültasyonunun yerini tutmaz -- tedavi sürecinizde doktorunuz ve diyetisyeniniz ile birlikte kullanmanız önerilir."
      }
    },
    {
      "@type": "Question",
      "name": "Premium üyelik tıbbi tavsiye yerine geçer mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hayır. Lipödem Türkiye bir bilgilendirme platformudur, tıbbi tavsiye sağlamaz. Premium içerikler dahil tüm bilgiler genel sağlık bilgilendirmesi amaçlıdır. Tanı ve tedavi kararları için mutlaka doktorunuza danışınız."
      }
    },
    {
      "@type": "Question",
      "name": "Ödeme güvenli mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, tüm ödemeler SSL şifreleme ile korunan güvenli ödeme altyapısı üzerinden gerçekleştirilir. Kredi kartı bilgileriniz sunucularımızda saklanmaz."
      }
    },
    {
      "@type": "Question",
      "name": "Aile üyeliğim ya da grup indirimi var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Şu an için aile veya grup indirimi sunmuyoruz. Ancak yıllık planlarda önemli tasarruf sağlayabilirsiniz. Gelecekte farklı plan seçenekleri eklenebilir."
      }
    }
  ]
}
```

### 10.4 Tedavi Sayfası SSS

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Lipödem ameliyatı ağrılı mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ameliyat genel veya lokal anestezi altında yapıldığı için ameliyat sırasında ağrı hissedilmez. Ameliyat sonrası ilk 3-5 gün morarma, şişlik ve hassasiyet normal olup ağrı kesicilerle kontrol altına alınır. Çoğu hasta 1-2 hafta içinde günlük aktivitelerine dönebilir."
      }
    },
    {
      "@type": "Question",
      "name": "Ameliyatsız lipödem tedavisi mümkün mü?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, konservatif tedavi (kompresyon giysileri, manuel lenfatik drenaj, anti-inflamatuar beslenme, düzenli egzersiz) birçok hastada semptomları önemli ölçüde kontrol altına alır. Ameliyat, konservatif tedavinin yetersiz kaldığı veya ileri evre hastalıkta değerlendirilir. Tedavi kararı hastanın evresi, semptom şiddeti ve beklentilerine göre doktorla birlikte verilir."
      }
    },
    {
      "@type": "Question",
      "name": "SGK lipödem ameliyatını karşılıyor mu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2026 itibarıyla SGK, lipödem ameliyatını (liposuction) kozmetik işlem olarak sınıflandırmaktadır ve karşılamamaktadır. Konservatif tedavi bileşenlerinden bazıları (fizyoterapi, kompresyon giysileri) kısmen karşılanabilir. SGK ile güncel kapsam durumu için en güncel bilgiyi rehberimizden takip edebilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Lipödem ameliyatı sonrası yağ geri gelir mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cerrahi ile alınan lipödem yağ hücreleri geri gelmez. Ancak kalan yağ hücreleri büyüyebilir ve hastalık ilerleyebilir. Bu nedenle ameliyat sonrası düzenli kompresyon, sağlıklı beslenme ve egzersiz programına devam etmek uzun vadeli başarı için çok önemlidir."
      }
    }
  ]
}
```

### 10.5 Otomatik FAQPage Üretimi -- Next.js Helper

```tsx
// Herhangi bir sayfada SSS bölümü varsa, aynı veriyi hem görsel hem schema için kullanın:

// lib/data/faq-data.ts
export const lipodemNedirFaq: FaqItem[] = [
  {
    question: 'Lipödem nedir?',
    answer: 'Lipödem, özellikle bacaklarda ve kollarda...'
  },
  // ...
];

// components/FaqSection.tsx
import { generateFaqSchema } from '@/lib/schema/faq';
import { JsonLd } from '@/components/JsonLd';
import { FaqItem } from '@/lib/schema/types';

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

export function FaqSection({ items, title = 'Sıkça Sorulan Sorular' }: FaqSectionProps) {
  return (
    <section>
      <JsonLd data={generateFaqSchema(items)} />
      <h2>{title}</h2>
      <dl>
        {items.map((item, i) => (
          <div key={i}>
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
```

**Önemli Kurallar:**
1. FAQPage schema yalnızca sayfada görünür SSS içeriği varsa kullanılmalıdır
2. Schema'daki metin, sayfadaki görünür metinle birebir eşleşmelidir
3. Sayfa başına maksimum 10 SSS önerilir (Google tümünü göstermeyebilir)
4. Her SSS cevabı en az 1-2 cümle olmalıdır

---

## 11. Article + MedicalWebPage Schema

**Kullanılacak sayfalar:** `/blog/[slug]`, tıbbi içerik sayfaları
**Hedef:** Article rich result (tarih, yazar, görsel), AI atıflanma

### 11.1 Helper Fonksiyon

```ts
// src/lib/schema/article.ts

import { ArticleData } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

export function generateArticle(data: ArticleData) {
  const schema: Record<string, unknown> = {
    "@type": "Article",
    "@id": `${SITE_URL}/blog/${data.slug}/#article`,
    "headline": data.headline,
    "description": data.description,
    "url": `${SITE_URL}/blog/${data.slug}`,
    "image": data.image,
    "datePublished": data.datePublished,
    "dateModified": data.dateModified,
    "author": {
      "@type": "Person",
      "name": data.authorName,
      ...(data.authorUrl && { "url": data.authorUrl })
    },
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${data.slug}`
    },
    "inLanguage": "tr-TR",
    "isAccessibleForFree": true
  };

  // Bilimsel kaynak referansları
  if (data.citations && data.citations.length > 0) {
    schema.citation = data.citations.map(cite => ({
      "@type": "ScholarlyArticle",
      "name": cite
    }));
  }

  // İlgili tıbbi durum
  if (data.about) {
    schema.about = {
      "@type": "MedicalCondition",
      "@id": `${SITE_URL}/#lipoedem`,
      "name": data.about
    };
  }

  // Speakable (sesli asistanlar için)
  if (data.speakable) {
    schema.speakable = {
      "@type": "SpeakableSpecification",
      "cssSelector": [".article-summary", ".article-key-points", "h1"]
    };
  }

  return schema;
}

/**
 * Tıbbi içerik sayfaları için MedicalWebPage schema olusturur.
 * Blog makalelerinde Article ile birlikte kullanılır.
 */
export function generateMedicalWebPage(data: {
  name: string;
  description: string;
  url: string;
  lastReviewed: string;
  about?: string;
}) {
  return {
    "@type": "MedicalWebPage",
    "name": data.name,
    "description": data.description,
    "url": `${SITE_URL}${data.url}`,
    "lastReviewed": data.lastReviewed,
    "medicalAudience": {
      "@type": "PatientAudience",
      "audienceType": "patient",
      "healthCondition": {
        "@type": "MedicalCondition",
        "@id": `${SITE_URL}/#lipoedem`,
        "name": "Lipödem"
      }
    },
    ...(data.about && {
      "about": {
        "@type": "MedicalCondition",
        "@id": `${SITE_URL}/#lipoedem`,
        "name": data.about
      }
    }),
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    },
    "inLanguage": "tr-TR"
  };
}
```

### 11.2 Örnek JSON-LD -- Blog Makalesi

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://lipodemturkiye.com/blog/lipodem-belirtileri-kontrol-listesi/#article",
      "headline": "Lipödem Belirtileri: 12 Kritik İşaret ve Kontrol Listesi",
      "description": "Lipödem belirtilerini tanımanıza yardımcı olacak 12 kritik işaret. Bilimsel kaynaklara dayalı kontrol listesi ile belirtilerinizi değerlendirin ve doktorunuza götürün.",
      "url": "https://lipodemturkiye.com/blog/lipodem-belirtileri-kontrol-listesi",
      "image": "https://lipodemturkiye.com/images/blog/lipodem-belirtileri.jpg",
      "datePublished": "2026-06-01T08:00:00+03:00",
      "dateModified": "2026-06-15T10:00:00+03:00",
      "author": {
        "@type": "Person",
        "name": "Lipödem Türkiye Editöryal Ekibi"
      },
      "publisher": {
        "@id": "https://lipodemturkiye.com/#organization"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://lipodemturkiye.com/blog/lipodem-belirtileri-kontrol-listesi"
      },
      "inLanguage": "tr-TR",
      "isAccessibleForFree": true,
      "about": {
        "@type": "MedicalCondition",
        "@id": "https://lipodemturkiye.com/#lipoedem",
        "name": "Lipödem"
      },
      "citation": [
        {
          "@type": "ScholarlyArticle",
          "name": "International Delphi Consensus on Lipedema, 2025, Nature Communications"
        },
        {
          "@type": "ScholarlyArticle",
          "name": "German S2k Guideline for Lipedema, 2024, JDDG"
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".article-summary", ".article-key-points", "h1"]
      }
    },
    {
      "@type": "MedicalWebPage",
      "name": "Lipödem Belirtileri: 12 Kritik İşaret",
      "description": "Lipödem belirtilerini tanımanıza yardımcı olacak bilimsel kaynaklara dayalı rehber.",
      "url": "https://lipodemturkiye.com/blog/lipodem-belirtileri-kontrol-listesi",
      "lastReviewed": "2026-06-15",
      "medicalAudience": {
        "@type": "PatientAudience",
        "audienceType": "patient",
        "healthCondition": {
          "@type": "MedicalCondition",
          "@id": "https://lipodemturkiye.com/#lipoedem",
          "name": "Lipödem"
        }
      },
      "about": {
        "@type": "MedicalCondition",
        "@id": "https://lipodemturkiye.com/#lipoedem",
        "name": "Lipödem"
      },
      "publisher": {
        "@id": "https://lipodemturkiye.com/#organization"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://lipodemturkiye.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://lipodemturkiye.com/blog" },
        { "@type": "ListItem", "position": 3, "name": "Lipödem Belirtileri: 12 Kritik İşaret", "item": "https://lipodemturkiye.com/blog/lipodem-belirtileri-kontrol-listesi" }
      ]
    }
  ]
}
```

### 11.3 Next.js Dinamik Blog Sayfası Uygulaması

```tsx
// app/blog/[slug]/page.tsx
import { JsonLd } from '@/components/JsonLd';
import { generateArticle, generateMedicalWebPage } from '@/lib/schema/article';
import { generateBreadcrumb } from '@/lib/schema/breadcrumb';
import { generateFaqSchema } from '@/lib/schema/faq';
import { getBlogPost } from '@/lib/data/blog';

interface PageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getBlogPost(params.slug);

  const article = generateArticle({
    headline: post.title,
    description: post.excerpt,
    slug: post.slug,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    authorName: post.author.name,
    authorUrl: post.author.url,
    image: post.featuredImage,
    citations: post.citations,
    about: 'Lipödem',
    speakable: true,
  });

  const medicalPage = generateMedicalWebPage({
    name: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    lastReviewed: post.updatedAt.split('T')[0],
    about: 'Lipödem',
  });

  const breadcrumb = generateBreadcrumb([
    { name: 'Ana Sayfa', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const schemas: Record<string, unknown>[] = [article, medicalPage, breadcrumb];

  // Eğer blog yazısında SSS bölümü varsa
  if (post.faqItems && post.faqItems.length > 0) {
    schemas.push(generateFaqSchema(post.faqItems));
  }

  return (
    <>
      <JsonLd data={schemas} />
      {/* Blog yazısı içeriği */}
    </>
  );
}
```

**Doğrulama:** Google Rich Results Test'te Article rich result olarak doğrulanır. `headline`, `image`, `datePublished`, `author` zorunlu alanlardır.

---

## 12. HowTo Schema

**Kullanılacak sayfalar:** Egzersiz rehberleri, beslenme rehberleri, tedavi hazırlık sayfaları
**Hedef:** Google SERP'te HowTo adım adım görünümü

### 12.1 Helper Fonksiyon

```ts
// src/lib/schema/howto.ts

import { HowToData } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

export function generateHowTo(data: HowToData) {
  return {
    "@type": "HowTo",
    "name": data.name,
    "description": data.description,
    "url": `${SITE_URL}${data.url}`,
    ...(data.totalTime && { "totalTime": data.totalTime }),
    "step": data.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image }),
      ...(step.url && { "url": step.url })
    }))
  };
}
```

### 12.2 Örnek -- Lipödem Evde Egzersiz Programı

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Lipödem İçin 15 Dakikalık Evde Egzersiz Programı",
  "description": "Lipödem hastalarına özel, düşük etkili, evde yapılabilecek 15 dakikalık egzersiz programı. Kompresyon giysisi ile yapılması önerilir. Ağrıyı azaltır ve lenfatik dolaşımı destekler.",
  "url": "https://lipodemturkiye.com/lipodem-evde-egzersiz",
  "totalTime": "PT15M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Hazırlık: Kompresyon giysisini giyin",
      "text": "Egzersiz öncesi kompresyon çorabınızı veya taytınızı giyin. Kompresyon ile egzersiz yapmak lenfatik pompalamayı artırır ve şişliği azaltır. Su şişenizi hazırlayın.",
      "image": "https://lipodemturkiye.com/images/egzersiz/hazirlik.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Isınma: Yerinde yürüyüş (2 dakika)",
      "text": "Kollarınızı sallayarak yerinde yavaşça yürüyün. Nefes alış verişinize dikkat edin. Derin nefes alın, yavaşça verin. Bu aşamada tempo düşük olmalı.",
      "image": "https://lipodemturkiye.com/images/egzersiz/isinma.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ayak bileği pompalama (2 dakika)",
      "text": "Sandalyeye oturun. Ayaklarınızı yukarı aşağı pompalar gibi hareket ettirin (dorsifleksiyon-plantar fleksiyon). Her ayak için 20 tekrar yapın. Bu hareket baldır kaslarını çalıştırır ve venöz dönüşü destekler.",
      "image": "https://lipodemturkiye.com/images/egzersiz/ayak-bilegi.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Duvara yaslanarak mini squat (3 dakika)",
      "text": "Sırtınızı duvara yaslayın. Ayaklarınızı bir adım öne koyun. Dizlerinizi 45 dereceye kadar bükerek yavaşça inin, 3 saniye tutun, yavaşça kalkın. 10 tekrar x 2 set. Ağrı hissederseniz hareketi küçültün.",
      "image": "https://lipodemturkiye.com/images/egzersiz/mini-squat.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Yan yatarak bacak kaldırma (3 dakika)",
      "text": "Yan yatın. Üstteki bacağınızı yavaşça 30 cm kaldırın, 2 saniye tutun, yavaşça indirin. Her taraf 15 tekrar. Bu hareket kalça ve uyluk dış kaslarını güçlendirir.",
      "image": "https://lipodemturkiye.com/images/egzersiz/bacak-kaldirma.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Nefes ve diyafram egzersizi (2 dakika)",
      "text": "Sırt üstü yatın. Ellerinizi karnınıza koyun. Burnunuzdan derin nefes alarak karnınızı şişirin (4 saniye). Ağızdan yavaşça verin (6 saniye). 8 tekrar. Diyafram nefesi lenfatik pompalamayı destekler.",
      "image": "https://lipodemturkiye.com/images/egzersiz/nefes.jpg"
    },
    {
      "@type": "HowToStep",
      "position": 7,
      "name": "Soğuma: Bacakları yukarı kaldırma (3 dakika)",
      "text": "Sırt üstü yatın. Bacaklarınızı duvara yaslayarak yukarı kaldırın (90 derece). 3 dakika bu pozisyonda kalın. Bu pozisyon venöz ve lenfatik dönüşü kolaylaştırır, gün sonu şişliği azaltır. Su için.",
      "image": "https://lipodemturkiye.com/images/egzersiz/soguma.jpg"
    }
  ]
}
```

### 12.3 Örnek -- Lipödem Doktora Hazırlık Kontrol Listesi

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Lipödem Doktora Hazırlık: 6 Adımda Randevunuza Hazırlanın",
  "description": "Lipödem şüphesiyle doktora giderken yapmanız gereken hazırlıklar. Bu kontrol listesi ile randevunuzdan maksimum verim alın ve tanı sürecinizi hızlandırın.",
  "url": "https://lipodemturkiye.com/lipodem-doktora-hazirlık",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Semptom testini tamamlayın",
      "text": "Lipödem Türkiye semptom testini doldurun ve sonuçlarının ekran görüntüsünü alın veya PDF olarak kaydedin. Bu rapor doktorunuza durumunuzu özetlemenize yardımcı olacaktır."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Belirtilerinizi kronolojik olarak listeleyin",
      "text": "Belirtilerin ne zaman başladığını, hangi dönemlerde kötüleştiğini (puberte, hamilelik, menopoz), ağrı düzeyinizi (1-10 skalasında) ve günlük yaşamınızı nasıl etkilediğini not edin."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Aile öyküsünüzü hazırlayın",
      "text": "Anne, teyze, büyükanne ve kız kardeşlerinizde benzer belirtiler (orantısız bacak kalınlığı, kolay morarma, ağrılı bacaklar) olup olmadığını araştırın ve not edin."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Fotoğraf kaydı alın",
      "text": "Bacaklarınızın, kollarınızın ve vücudunuzun genel görünümünün fotoğraflarını çekin. Sabah (şişlik öncesi) ve akşam (şişlik sonrası) karşılaştırma fotoğrafları çok değerlidir."
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Diyet geçmişinizi özetleyin",
      "text": "Son 5 yılda denediğiniz diyet ve egzersiz programlarını, sonuçlarını ve özellikle hangi bölgelerin diyet ile incelip hangilerinin inmediğini not edin."
    },
    {
      "@type": "HowToStep",
      "position": 6,
      "name": "Doktorunuza sorularınızı yazın",
      "text": "Randevuda sormak istediğiniz soruları önceden yazın: 'Bu lipödem olabilir mi?', 'Hangi tetkikler gerekli?', 'Tedavi seçenekleri neler?', 'Hangi uzmana yönlendirirsiniz?' gibi."
    }
  ]
}
```

**Doğrulama:** Google Rich Results Test'te HowTo rich result olarak doğrulanır. Her step'te `name` ve `text` zorunludur. `image` her adım için önerilir (görsel zenginlik).

---

## 13. ItemList Schema

**Kullanılacak sayfalar:** `/klinikler`, `/klinikler/[sehir]`, `/lipodem-tedavisi` (tedavi listesi)
**Hedef:** Listeleme sayfalarında yapısal veri

### 13.1 Helper Fonksiyon

```ts
// src/lib/schema/item-list.ts

const SITE_URL = 'https://lipodemturkiye.com';

interface ListItemData {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

export function generateItemList(
  name: string,
  description: string,
  items: ListItemData[],
  listType: 'ItemList' | 'OfferCatalog' = 'ItemList'
) {
  return {
    "@type": listType,
    "name": name,
    "description": description,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": `${SITE_URL}${item.url}`,
      ...(item.description && { "description": item.description }),
      ...(item.image && { "image": item.image })
    }))
  };
}
```

### 13.2 Örnek -- İstanbul Klinikleri Listesi

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "İstanbul Lipödem Klinikleri",
  "description": "İstanbul'da lipödem tedavisi sunan uzman klinikler. Konservatif tedavi ve cerrahi seçenekleri.",
  "numberOfItems": 5,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "EsteAura Klinik",
      "url": "https://lipodemturkiye.com/klinikler/istanbul/esteaura",
      "description": "Lipödem cerrahisi: Tumescent, VASER, WAL liposuction",
      "image": "https://lipodemturkiye.com/images/klinikler/esteaura.jpg"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Acıbadem Lipödem Merkezi",
      "url": "https://lipodemturkiye.com/klinikler/istanbul/acibadem",
      "description": "Multidisipliner lipödem tedavi merkezi"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Memorial Lenfatik Rehabilitasyon Ünitesi",
      "url": "https://lipodemturkiye.com/klinikler/istanbul/memorial",
      "description": "CDT, MLD ve konservatif tedavi programları"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Florence Nightingale Fizik Tedavi",
      "url": "https://lipodemturkiye.com/klinikler/istanbul/florence",
      "description": "Lenfatik fizyoterapi ve kompresyon tedavisi"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Liv Hospital Plastik Cerrahi",
      "url": "https://lipodemturkiye.com/klinikler/istanbul/liv",
      "description": "Lipödem liposuction cerrahisi"
    }
  ]
}
```

### 13.3 Örnek -- Tedavi Yöntemleri Listesi

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Lipödem Tedavi Yöntemleri",
  "description": "Lipödem tedavisinde kullanılan tüm konservatif ve cerrahi yöntemler.",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Kompleks Dekongestif Terapi (CDT)",
      "url": "https://lipodemturkiye.com/lipodem-fizyoterapi"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Kompresyon Tedavisi",
      "url": "https://lipodemturkiye.com/lipodem-kompresyon-tedavisi"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Manuel Lenfatik Drenaj (MLD)",
      "url": "https://lipodemturkiye.com/lipodem-manuel-lenf-drenaji"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Anti-İnflamatuar Beslenme",
      "url": "https://lipodemturkiye.com/lipodem-beslenme"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Egzersiz Programı",
      "url": "https://lipodemturkiye.com/lipodem-egzersiz"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Tumescent Liposuction",
      "url": "https://lipodemturkiye.com/lipodem-ameliyati"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "VASER Liposuction",
      "url": "https://lipodemturkiye.com/vaser-liposuction-lipodem"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "WAL Liposuction",
      "url": "https://lipodemturkiye.com/lipodem-ameliyati"
    },
    {
      "@type": "ListItem",
      "position": 9,
      "name": "Psikolojik Destek",
      "url": "https://lipodemturkiye.com/lipodem-ruh-sagligi"
    }
  ]
}
```

---

## 14. Event Schema

**Kullanılacak sayfalar:** `/lipodem-kongresi-2026`
**Hedef:** Google SERP'te Event rich result

### 14.1 Helper Fonksiyon

```ts
// src/lib/schema/event.ts

import { EventData } from './types';

const SITE_URL = 'https://lipodemturkiye.com';

export function generateEvent(data: EventData) {
  return {
    "@type": "Event",
    "name": data.name,
    "description": data.description,
    "startDate": data.startDate,
    "endDate": data.endDate,
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": data.location.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": data.location.city,
        "streetAddress": data.location.address,
        "addressCountry": "TR"
      }
    },
    ...(data.image && { "image": data.image }),
    "url": `${SITE_URL}${data.url}`,
    "organizer": {
      "@id": `${SITE_URL}/#organization`
    },
    "about": {
      "@type": "MedicalCondition",
      "@id": `${SITE_URL}/#lipoedem`,
      "name": "Lipödem"
    }
  };
}
```

### 14.2 Tam JSON-LD -- 1. Ulusal Lipödem Kongresi

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "1. Ulusal Lipödem Kongresi",
  "description": "Türkiye'nin ilk ulusal lipödem kongresi. Lipödem tanı, tedavi ve araştırma alanlarında güncel gelişmelerin tartışılacağı bilimsel kongre. Plastik cerrahlar, dermatologlar, fizyoterapistler ve diyetisyenler için.",
  "startDate": "2026-06-06T09:00:00+03:00",
  "endDate": "2026-06-07T17:00:00+03:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Ankara Kongre Merkezi",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ankara",
      "streetAddress": "Söğütözü, Ankara",
      "addressCountry": "TR"
    }
  },
  "image": "https://lipodemturkiye.com/images/kongre-2026.jpg",
  "url": "https://lipodemturkiye.com/lipodem-kongresi-2026",
  "organizer": {
    "@id": "https://lipodemturkiye.com/#organization"
  },
  "about": {
    "@type": "MedicalCondition",
    "@id": "https://lipodemturkiye.com/#lipoedem",
    "name": "Lipödem"
  }
}
```

---

## 15. Karşılaştırma Tabloları

**Kullanılacak sayfalar:** `/karsilastirma/[slug]`
**Hedef:** AI motorlarının karşılaştırma verilerini entity olarak anlaması

Karşılaştırma sayfaları icin doğrudan bir Table rich result yoktur, ancak MedicalWebPage + FAQPage + BreadcrumbList kombinasyonu ile AI atıflanma artırılır.

### 15.1 Örnek -- Vaser vs Tumescent Karşılaştırma Sayfası

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "name": "VASER vs Tumescent Liposuction: Lipödem Cerrahisinde Hangisi Daha İyi?",
      "description": "VASER ve tumescent liposuction tekniklerinin lipödem cerrahisindeki avantaj, dezavantaj ve sonuçlarının bilimsel karşılaştırması.",
      "url": "https://lipodemturkiye.com/karsilastirma/vaser-vs-tumescent",
      "lastReviewed": "2026-05-15",
      "about": [
        {
          "@type": "MedicalTherapy",
          "@id": "https://lipodemturkiye.com/vaser-liposuction-lipodem/#therapy",
          "name": "VASER Liposuction"
        },
        {
          "@type": "MedicalTherapy",
          "@id": "https://lipodemturkiye.com/lipodem-ameliyati/#tumescent",
          "name": "Tumescent Liposuction"
        }
      ],
      "medicalAudience": {
        "@type": "PatientAudience",
        "audienceType": "patient"
      },
      "publisher": {
        "@id": "https://lipodemturkiye.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "VASER ve tumescent liposuction arasındaki fark nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tumescent liposuction tumescent sıvısı ile şişirilen yağ dokusunu mekanik olarak aspire eder. VASER ise önce ultrason enerjisi ile yağ hücrelerini emülsifiye eder, ardından aspire eder. VASER doku seçiciliği açısından avantajlıdır (damar ve sinirlere daha az zarar verir), tumescent ise daha geniş bilimsel kanıta sahiptir ve maliyeti genellikle daha düşüktür."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem ameliyatı için hangi teknik daha uygun?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teknik seçimi hastanın evresine, yağ dokusunun özelliklerine ve cerrahın deneyimine bağlıdır. Tumescent geniş alanlar için uygunken, VASER fibrotik dokunun yoğun olduğu bölgelerde avantaj sağlayabilir. WAL ise lenfatik hasarı en aza indirme potansiyeli ile öne çıkar. Doktorunuzla durumunuza özel değerlendirme yapmanız önerilir."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://lipodemturkiye.com/" },
        { "@type": "ListItem", "position": 2, "name": "Karşılaştırma", "item": "https://lipodemturkiye.com/karsilastirma" },
        { "@type": "ListItem", "position": 3, "name": "Vaser vs Tumescent", "item": "https://lipodemturkiye.com/karsilastirma/vaser-vs-tumescent" }
      ]
    }
  ]
}
```

---

## 16. Hasta Hikayeleri Schema

**Kullanılacak sayfalar:** `/hikayeler/[slug]`
**Hedef:** Article rich result, empati ve topluluk hissi

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://lipodemturkiye.com/hikayeler/ayse-34-yas-istanbul/#article",
      "headline": "Ayşe'nin Hikayesi: 10 Yıl Yanlış Tanı Sonrası Lipödem Teşhisi",
      "description": "34 yaşında İstanbul'da yaşayan Ayşe, 10 yıl boyunca 'kilo ver' denildikten sonra lipödem tanısı aldı. Tanı yolculuğu, tedavi süreci ve hayatının nasıl değiştiğini anlatıyor.",
      "url": "https://lipodemturkiye.com/hikayeler/ayse-34-yas-istanbul",
      "image": "https://lipodemturkiye.com/images/hikayeler/ayse.jpg",
      "datePublished": "2026-06-10T08:00:00+03:00",
      "dateModified": "2026-06-10T08:00:00+03:00",
      "author": {
        "@type": "Person",
        "name": "Ayşe K."
      },
      "publisher": {
        "@id": "https://lipodemturkiye.com/#organization"
      },
      "articleSection": "Hasta Hikayeleri",
      "about": {
        "@type": "MedicalCondition",
        "@id": "https://lipodemturkiye.com/#lipoedem",
        "name": "Lipödem"
      },
      "inLanguage": "tr-TR",
      "isAccessibleForFree": true
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://lipodemturkiye.com/" },
        { "@type": "ListItem", "position": 2, "name": "Hasta Hikayeleri", "item": "https://lipodemturkiye.com/hikayeler" },
        { "@type": "ListItem", "position": 3, "name": "Ayşe'nin Hikayesi", "item": "https://lipodemturkiye.com/hikayeler/ayse-34-yas-istanbul" }
      ]
    }
  ]
}
```

---

## 17. İnteraktif Araçlar Schema

**Kullanılacak sayfalar:** `/araclar/semptom-testi`, `/araclar/evre-degerlendirme`, `/araclar/maliyet-hesaplayici`, `/araclar/beslenme-planlayici`
**Hedef:** AI motorlarının araçları tanıması

### 17.1 Semptom Testi

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "name": "Lipödem Semptom Testi",
      "description": "2 dakikada tamamlanan, bilimsel temelli lipödem semptom değerlendirme aracı. 10 soru ile belirtilerinizi değerlendirin, sonuçları doktorunuza gösterebilirsiniz. Anonim ve ücretsizdir.",
      "url": "https://lipodemturkiye.com/araclar/semptom-testi",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "TRY"
      },
      "creator": {
        "@id": "https://lipodemturkiye.com/#organization"
      },
      "about": {
        "@type": "MedicalCondition",
        "@id": "https://lipodemturkiye.com/#lipoedem",
        "name": "Lipödem"
      },
      "inLanguage": "tr-TR"
    },
    {
      "@type": "MedicalWebPage",
      "name": "Lipödem Semptom Testi",
      "description": "Lipödem belirtilerinizi değerlendiren bilimsel temelli interaktif araç.",
      "url": "https://lipodemturkiye.com/araclar/semptom-testi",
      "lastReviewed": "2026-05-01",
      "medicalAudience": {
        "@type": "PatientAudience",
        "audienceType": "patient"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://lipodemturkiye.com/" },
        { "@type": "ListItem", "position": 2, "name": "Araçlar", "item": "https://lipodemturkiye.com/araclar" },
        { "@type": "ListItem", "position": 3, "name": "Semptom Testi", "item": "https://lipodemturkiye.com/araclar/semptom-testi" }
      ]
    }
  ]
}
```

### 17.2 Maliyet Hesaplayıcı

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lipödem Ameliyat Maliyet Hesaplayıcı",
  "description": "Lipödem ameliyat maliyetini tahmin etmenize yardımcı olan interaktif hesap aracı. Teknik, bölge, seans sayısı ve şehir bazlı güncel fiyat aralıkları.",
  "url": "https://lipodemturkiye.com/araclar/maliyet-hesaplayici",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "TRY"
  },
  "creator": {
    "@id": "https://lipodemturkiye.com/#organization"
  },
  "inLanguage": "tr-TR"
}
```

---

## 18. AI Motoru Optimizasyonu (AEO Sinerjisi)

Schema markup, AI motorlarının (ChatGPT, Claude, Gemini, Perplexity) içeriğinizi anlamasını ve atıflamasını doğrudan etkiler. Bu bölüm schema ile AI atıflanma arasındaki sinerjiyi açıklar.

### 18.1 Schema'ların AI Atıflanmayı Artırma Mekanizması

| Schema Özelliği | AI Etkisi | Nasıl Çalışır |
|----------------|-----------|--------------|
| `MedicalCondition` | Entity tanıma | AI motoru "lipödem" sorgusunda sitenizi tıbbi otorite olarak tanır |
| `MedicalCondition.code` | ICD kodu eşleşmesi | Tıbbi terminoloji sorgularında (E88.2, EF02.1) kaynak olarak değerlendirilir |
| `MedicalTherapy` | Tedavi bilgisi eşleşmesi | "lipödem tedavisi" sorgularında her tedavi yöntemini ayrı entity olarak tanır |
| `Physician` + `MedicalClinic` | Yerel otorite | "lipödem doktoru istanbul" gibi sorgularda kaynak olarak atıflanır |
| `Article.citation` | Bilimsel güvenilirlik | Peer-reviewed kaynaklara referans veren içerik, AI tarafından daha güvenilir kabul edilir |
| `FAQPage` | Doğrudan cevap eşleşmesi | "lipödem nedir" gibi soru formatı sorgularda schema'daki cevap doğrudan kullanılabilir |
| `Organization.sameAs` | Çapraz doğrulama | Sosyal medya profilleriyle entity eşleşmesi, marka tanınırlığını güçlendirir |
| `Organization.knowsAbout` | Uzmanlık tanıma | AI motoru sitenin hangi konularda otorite olduğunu anlar |

### 18.2 Speakable Property -- Sesli Asistanlar İçin

`speakable` property, Google Assistant ve diğer sesli asistanların içeriğinizden hangi bölümleri sesli olarak okuyabileceğini belirtir.

**Kullanılacak sayfalar:** Tüm bilgi sayfaları, blog makaleleri, SSS sayfaları

```ts
// Speakable helper -- article.ts icinde zaten entegre
// CSS selector'lar ile hangi bölümlerin sesli okunabilir olduğunu belirtir

const speakableConfig = {
  "@type": "SpeakableSpecification",
  "cssSelector": [
    ".article-summary",      // Makale özeti paragrafı
    ".article-key-points",   // Anahtar noktalar listesi
    "h1",                    // Ana başlık
    ".faq-answer"           // SSS cevapları
  ]
};
```

**HTML tarafında gerekli class'lar:**

```html
<!-- Makale özeti -- speakable -->
<p class="article-summary">
  Lipödem, kadınların %6-11'ini etkileyen, diyete dirençli, kronik bir hastalıktır.
  Bacaklarda ve kollarda simetrik yağ birikimi, ağrı ve kolay morarma ile karakterizedir.
</p>

<!-- Anahtar noktalar -- speakable -->
<ul class="article-key-points">
  <li>Lipödem obezite değildir -- diyetle gitmez</li>
  <li>Kadınların %6-11'ini etkiler</li>
  <li>Ortalama tanı gecikmesi 10+ yıldır</li>
</ul>
```

### 18.3 Entity Tanınırlığı Stratejisi

Google Knowledge Panel oluşumu için gereken schema kombinasyonu:

```
Organization schema
  + sameAs (sosyal medya profilleri -- minimum 3)
  + knowsAbout (uzmanlık alanları)
  + logo
  + contactPoint
  + areaServed

WebSite schema
  + publisher → Organization referansı

Article schema
  + publisher → Organization referansı
  + author → Person/Organization referansı

MedicalCondition schema
  + @id ile benzersiz tanımlayıcı
  + Tüm sayfalardan @id referansı ile bağlantı
```

**Knowledge Panel oluşumunu hızlandırmak için ek adımlar:**
1. Google Business Profile oluşturun (varsa)
2. Wikipedia/Wikidata'da Lipödem Türkiye entity'si oluşturun (lansman sonrası)
3. Sosyal medya profillerinin tamamı açık ve aktif olsun
4. Google Search Console'da alan doğrulaması yapın
5. Basın bültenlerinde tutarlı marka adı ve URL kullanın

### 18.4 Çapraz Referans (Cross-Linking) Şeması

Tüm schema'lar `@id` referansları ile birbirine bağlıdır:

```
Organization (@id: /#organization)
  ← WebSite.publisher
  ← Article.publisher
  ← Event.organizer
  ← WebApplication.creator

MedicalCondition (@id: /#lipoedem)
  ← MedicalTherapy.study
  ← Article.about
  ← MedicalWebPage.about
  ← WebApplication.about
  ← Event.about
  ← Physician.availableService (dolaylı)

MedicalTherapy (@id: /[url]/#therapy)
  ← MedicalCondition.possibleTreatment
  ← MedicalClinic.availableService
  ← MedicalWebPage.about

Physician (@id: /doktorlar/[slug]/#physician)
  ← MedicalClinic.physician

MedicalClinic (@id: /klinikler/[sehir]/[slug]/#clinic)
  ← Physician.hospitalAffiliation
```

---

## 19. Doğrulama ve İzleme Rehberi

### 19.1 Doğrulama Araçları

| Araç | URL | Ne İçin |
|------|-----|---------|
| Google Rich Results Test | https://search.google.com/test/rich-results | Rich result uygunluğu testi |
| Schema.org Validator | https://validator.schema.org/ | Genel schema geçerliliği |
| Google Search Console | https://search.google.com/search-console | Canlı izleme ve hata raporları |
| JSON-LD Playground | https://json-ld.org/playground/ | JSON-LD syntax kontrolü |

### 19.2 Doğrulama Kontrol Listesi

Her schema implementasyonu sonrası:

- [ ] JSON sözdizimi hatası yok (JSON-LD Playground)
- [ ] Schema.org Validator'da hata yok
- [ ] Google Rich Results Test'te uygun rich result tipi tespit ediliyor
- [ ] `@context` olarak `https://schema.org` kullanılıyor
- [ ] Tüm URL'ler tam (absolute) URL formatında
- [ ] Tüm tarihler ISO 8601 formatında (`2026-06-01T08:00:00+03:00`)
- [ ] `@id` referansları tutarlı (aynı entity her yerde aynı @id)
- [ ] Schema içeriği, sayfadaki görünür içerikle eşleşiyor
- [ ] Zorunlu alanlar eksiksiz (her schema tipi için farklı)
- [ ] Resim URL'leri çalışır durumda ve doğru boyutlarda

### 19.3 Google Search Console İzleme

Search Console'da izlenmesi gereken Enhancement raporları:

| Rapor | İlgili Schema | Kontrol Sıklığı |
|-------|---------------|-----------------|
| FAQ | FAQPage | Haftalık |
| How-to | HowTo | Haftalık |
| Breadcrumbs | BreadcrumbList | Aylık |
| Sitelinks search box | WebSite SearchAction | Aylık |
| Articles | Article | Haftalık |
| Events | Event | Lansmana yakın günlük |

### 19.4 Yaygın Hatalar ve Çözümleri

| Hata | Neden | Çözüm |
|------|-------|-------|
| "Missing field 'image'" | Article schema'da image yok | Her blog yazısına featured image ekleyin |
| "Invalid URL" | Relative URL kullanılmış | Tüm URL'leri `https://lipodemturkiye.com/...` formatına çevirin |
| "Invalid date" | Tarih formatı yanlış | ISO 8601 kullanın: `2026-06-01T08:00:00+03:00` |
| "Mismatch with page content" | Schema'daki metin sayfada yok | Schema'yı görünür içerikle senkronize edin |
| "Duplicate structured data" | Aynı tip birden fazla kez | @graph kullanarak tek script'te birleştirin |
| "@id referansı kırık" | Referans verilen @id bulunamıyor | Tüm @id'lerin tutarlı olduğunu kontrol edin |

### 19.5 Monitoring Script (İsteğe Bağlı)

```ts
// scripts/validate-schema.ts
// Build sırasında tüm sayfaların schema'larını doğrulayan script

import { readFileSync } from 'fs';
import { glob } from 'glob';

async function validateSchemas() {
  const pages = glob.sync('app/**/page.tsx');
  
  for (const page of pages) {
    const content = readFileSync(page, 'utf-8');
    
    // JSON-LD bulunuyor mu kontrol et
    if (!content.includes('application/ld+json') && !content.includes('JsonLd')) {
      console.warn(`UYARI: ${page} -- Schema markup bulunamadı`);
    }
    
    // BreadcrumbList var mı kontrol et (ana sayfa hariç)
    if (page !== 'app/page.tsx' && !content.includes('Breadcrumb') && !content.includes('breadcrumb')) {
      console.warn(`UYARI: ${page} -- BreadcrumbList bulunamadı`);
    }
  }
}

validateSchemas();
```

---

## 20. Uygulama Önceliklendirmesi

### 20.1 Faz 1 -- Lansman (P0, Haziran 2026 öncesi)

| Schema | Sayfa | Neden Öncelikli |
|--------|-------|----------------|
| Organization | layout.tsx (global) | Knowledge Panel temeli |
| WebSite + SearchAction | layout.tsx (global) | Sitelinks arama kutusu |
| BreadcrumbList | Tüm sayfalar | SERP breadcrumb görünümü |
| MedicalCondition | /lipodem-nedir | En kritik entity tanıma |
| FAQPage | /lipodem-nedir, /premium | En yüksek değerli rich result |
| MedicalWebPage | Tüm tıbbi sayfalar | Tıbbi otorite sinyali |
| Article | /blog/[slug] | Article rich result |
| Event | /lipodem-kongresi-2026 | Kongre tanıtımı |

### 20.2 Faz 2 -- Ay 1-2 (P1)

| Schema | Sayfa | Neden |
|--------|-------|-------|
| MedicalTherapy (9 adet) | Tedavi detay sayfaları | Her tedavi için entity tanıma |
| HowTo | Egzersiz/beslenme sayfaları | HowTo rich result |
| FAQPage (ek) | Tedavi, beslenme sayfaları | Ek FAQ snippets |
| ItemList | /klinikler, /klinikler/[sehir] | Klinik listesi yapısı |
| Physician | /doktorlar/[slug] | Doktor Knowledge Panel |
| WebApplication | /araclar/* | Araç tanıma |

### 20.3 Faz 3 -- Ay 3-6 (P2)

| Schema | Sayfa | Neden |
|--------|-------|-------|
| MedicalClinic | Klinik profilleri | Local Business paneli |
| Article (hasta hikayeleri) | /hikayeler/[slug] | Topluluk içeriği |
| MedicalWebPage (karşılaştırma) | /karsilastirma/[slug] | Karşılaştırma sayfaları |
| FAQPage (blog) | Blog yazıları içi SSS | Ek FAQ zenginliği |
| speakable | Tüm tıbbi sayfalar | Sesli asistan uyumluluğu |

### 20.4 İlerleme Takip Tablosu

```
┌─────────────────────────┬────────┬─────────────┬────────────────┐
│ Schema Tipi             │ Durum  │ Faz         │ Sayfa Sayısı   │
├─────────────────────────┼────────┼─────────────┼────────────────┤
│ Organization            │ [ ]    │ Faz 1       │ 1 (global)     │
│ WebSite + SearchAction  │ [ ]    │ Faz 1       │ 1 (global)     │
│ BreadcrumbList          │ [ ]    │ Faz 1       │ ~120+ sayfa    │
│ MedicalCondition        │ [ ]    │ Faz 1       │ 1              │
│ FAQPage                 │ [ ]    │ Faz 1-2     │ 10+ sayfa      │
│ MedicalWebPage          │ [ ]    │ Faz 1       │ ~80+ sayfa     │
│ Article                 │ [ ]    │ Faz 1       │ Blog sayısı    │
│ Event                   │ [ ]    │ Faz 1       │ 1              │
│ MedicalTherapy          │ [ ]    │ Faz 2       │ 9              │
│ HowTo                   │ [ ]    │ Faz 2       │ 5-10 sayfa     │
│ ItemList                │ [ ]    │ Faz 2       │ 82+ sayfa      │
│ Physician               │ [ ]    │ Faz 2       │ ~30-50 profil  │
│ WebApplication          │ [ ]    │ Faz 2       │ 4 araç         │
│ MedicalClinic           │ [ ]    │ Faz 3       │ Klinik sayısı  │
│ Article (hikayeler)     │ [ ]    │ Faz 3       │ Hikaye sayısı  │
│ speakable               │ [ ]    │ Faz 3       │ Tüm tıbbi      │
└─────────────────────────┴────────┴─────────────┴────────────────┘
```

---

## Ek: Ana Sayfa Tam @graph Örneği

Ana sayfada tüm global schema'ların birleşimi:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lipodemturkiye.com/#organization",
      "name": "Lipödem Türkiye",
      "alternateName": ["Lipodem Turkiye", "Lipödem TR"],
      "url": "https://lipodemturkiye.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lipodemturkiye.com/images/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://lipodemturkiye.com/images/og-default.jpg",
      "description": "Türkiye'nin ilk ve tek kapsamlı lipödem hasta platformu. Bilimsel bilgi, interaktif araçlar, uzman klinik rehberi ve topluluk desteği.",
      "foundingDate": "2026",
      "sameAs": [
        "https://www.instagram.com/lipodemturkiye",
        "https://www.youtube.com/@lipodemturkiye",
        "https://www.facebook.com/lipodemturkiye",
        "https://www.tiktok.com/@lipodemturkiye",
        "https://x.com/lipodemturkiye"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "iletisim@lipodemturkiye.com",
        "availableLanguage": "Turkish",
        "url": "https://lipodemturkiye.com/iletisim"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Turkey",
        "alternateName": "Türkiye"
      },
      "knowsAbout": [
        "Lipödem",
        "Lipedema",
        "Lipoedema",
        "Lipödem tedavisi",
        "Lipödem belirtileri",
        "Lipödem cerrahisi",
        "Konservatif lipödem tedavisi"
      ],
      "slogan": "Yalnız değilsiniz."
    },
    {
      "@type": "WebSite",
      "@id": "https://lipodemturkiye.com/#website",
      "url": "https://lipodemturkiye.com",
      "name": "Lipödem Türkiye",
      "description": "Türkiye'nin ilk kapsamlı lipödem hasta platformu",
      "publisher": {
        "@id": "https://lipodemturkiye.com/#organization"
      },
      "inLanguage": "tr-TR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://lipodemturkiye.com/arama?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

---

## Ek: Lipödem Nedir Sayfası Tam @graph Örneği

`/lipodem-nedir` sayfasında birleşik schema (en karmaşık sayfa):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalCondition",
      "@id": "https://lipodemturkiye.com/#lipoedem",
      "name": "Lipödem",
      "alternateName": ["Lipedema", "Lipoedema", "Lipodem"],
      "description": "Lipödem, özellikle bacaklarda ve kollarda simetrik, orantısız yağ birikimi ile karakterize kronik bir hastalıktır.",
      "url": "https://lipodemturkiye.com/lipodem-nedir",
      "code": [
        { "@type": "MedicalCode", "codeValue": "E88.2", "codingSystem": "ICD-10" },
        { "@type": "MedicalCode", "codeValue": "EF02.1", "codingSystem": "ICD-11" }
      ],
      "signOrSymptom": [
        { "@type": "MedicalSymptom", "name": "Bacaklarda simetrik yağ birikimi" },
        { "@type": "MedicalSymptom", "name": "Dokunma hassasiyeti ve ağrı" },
        { "@type": "MedicalSymptom", "name": "Kolay morarma" },
        { "@type": "MedicalSymptom", "name": "Diyete dirençli yağ" },
        { "@type": "MedicalSign", "name": "Stemmer belirtisi negatif" },
        { "@type": "MedicalSign", "name": "Cuff sign" }
      ],
      "possibleTreatment": [
        { "@type": "MedicalTherapy", "name": "CDT", "url": "https://lipodemturkiye.com/lipodem-fizyoterapi" },
        { "@type": "MedicalTherapy", "name": "Kompresyon tedavisi", "url": "https://lipodemturkiye.com/lipodem-kompresyon-tedavisi" },
        { "@type": "MedicalTherapy", "name": "Tumescent liposuction", "url": "https://lipodemturkiye.com/lipodem-ameliyati" },
        { "@type": "MedicalTherapy", "name": "VASER liposuction", "url": "https://lipodemturkiye.com/vaser-liposuction-lipodem" }
      ],
      "stage": [
        { "@type": "MedicalConditionStage", "stageAsNumber": 1, "subStageSuffix": "Evre 1" },
        { "@type": "MedicalConditionStage", "stageAsNumber": 2, "subStageSuffix": "Evre 2" },
        { "@type": "MedicalConditionStage", "stageAsNumber": 3, "subStageSuffix": "Evre 3" },
        { "@type": "MedicalConditionStage", "stageAsNumber": 4, "subStageSuffix": "Evre 4 (Lipo-lenfödem)" }
      ],
      "epidemiology": "Kadınların %6-11'ini etkiler. Dünya genelinde ~370-400M kadın.",
      "medicineSystem": "https://schema.org/WesternConventional"
    },
    {
      "@type": "MedicalWebPage",
      "name": "Lipödem Nedir? Belirtiler, Evreler ve Tedavi",
      "url": "https://lipodemturkiye.com/lipodem-nedir",
      "lastReviewed": "2026-05-01",
      "medicalAudience": { "@type": "PatientAudience", "audienceType": "patient" },
      "about": { "@id": "https://lipodemturkiye.com/#lipoedem" },
      "publisher": { "@id": "https://lipodemturkiye.com/#organization" },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".article-summary", "h1", ".article-key-points"]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Lipödem nedir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lipödem, özellikle bacaklarda ve kollarda simetrik, orantısız yağ birikimi ile karakterize kronik bir hastalıktır. Diyete dirençlidir ve kadınların tahminen %6-11'ini etkiler."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem belirtileri nelerdir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bacaklarda orantısız yağ birikimi, dokunma hassasiyeti ve ağrı, kolay morarma, diyete rağmen bacakların incelememesi, akşamları artan şişlik ve ayak bileğinde sınır çizgisi (cuff sign)."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem obeziteden nasıl ayırt edilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lipödemde yağ birikimi orantısızdır, diyete dirençlidir ve ağrı eşlik eder. Obezitede yağ dağılımı orantılıdır, diyet ve egzersizle azalır ve ağrı yoktur."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem tedavisi var mı?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lipödem tam iyileştirilemez, ancak etkili tedavi yöntemleri vardır. Konservatif tedaviler semptomları kontrol eder, cerrahi tedavi hastalıklı yağ dokusunu kalıcı olarak uzaklaştırır."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem ameliyatı ne kadar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Türkiye'de 2026 itibarıyla seans başına 55.000-250.000 TL. Genellikle 2-4 seans gerekir. SGK karşılamamaktadır."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem hangi doktora gidilir?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tanı için dermatoloji, fizik tedavi veya plastik cerrahi uzmanı. Cerrahi için lipödem deneyimli plastik cerrah. Konservatif tedavi için lenfatik fizyoterapist."
          }
        },
        {
          "@type": "Question",
          "name": "Lipödem genetik mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, güçlü genetik bileşene sahiptir. Hastaların büyük çoğunluğunda aile öyküsü bulunur. Hormonal değişimler tetikleyici rol oynar."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://lipodemturkiye.com/" },
        { "@type": "ListItem", "position": 2, "name": "Lipödem Nedir", "item": "https://lipodemturkiye.com/lipodem-nedir" }
      ]
    }
  ]
}
```

---

**Bu doküman, Lipödem Türkiye projesinin tüm yapılandırılmış veri ihtiyaçlarını karşılar. Her JSON-LD kopyala-yapıştır edilebilir, helper fonksiyonlar Next.js App Router ile uyumludur ve Google Rich Results Test'te doğrulanabilir durumdadır.**
