# Lipodem Turkiye -- Next.js + Vercel Performans ve Mimari Rehberi

**Tarih:** 24 Mayis 2026
**Referans:** product-marketing.md, site-architecture-output.md, web-design-output.md, pricing-output.md, Vercel React Best Practices (70 kural)
**Teknoloji:** Next.js 15 (App Router) + React 19 + Tailwind CSS 4 + Vercel + TypeScript 5.x
**Hedef:** LCP <2.5s, INP <200ms, CLS <0.1 -- tum sayfa tiplerinde

---

## 0. Paket Bagimliliklari (package.json)

```json
{
  "name": "lipodem-turkiye",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "postinstall": "prisma generate",
    "analyze": "ANALYZE=true next build",
    "lighthouse": "lhci autorun"
  },
  "dependencies": {
    "next": "^15.3.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",

    "@prisma/client": "^6.6.0",
    "prisma": "^6.6.0",

    "next-auth": "^5.0.0",
    "@auth/prisma-adapter": "^2.8.0",

    "@hookform/resolvers": "^5.0.0",
    "react-hook-form": "^7.54.0",
    "zod": "^3.24.0",

    "zustand": "^5.0.0",
    "swr": "^2.3.0",

    "@next/mdx": "^15.3.0",
    "@mdx-js/loader": "^3.1.0",
    "@mdx-js/react": "^3.1.0",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.1.0",
    "rehype-pretty-code": "^0.14.0",
    "remark-gfm": "^4.0.0",
    "gray-matter": "^4.0.3",

    "lucide-react": "^0.475.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^3.0.0",

    "@vercel/analytics": "^1.5.0",
    "@vercel/speed-insights": "^1.2.0",

    "@sentry/nextjs": "^9.0.0",

    "lru-cache": "^11.0.0",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.0",
    "@types/node": "^22.0.0",

    "tailwindcss": "^4.1.0",
    "@tailwindcss/postcss": "^4.1.0",

    "eslint": "^9.0.0",
    "eslint-config-next": "^15.3.0",
    "@eslint/js": "^9.0.0",
    "typescript-eslint": "^8.0.0",
    "eslint-plugin-react-hooks": "^5.0.0",

    "prettier": "^3.5.0",
    "prettier-plugin-tailwindcss": "^0.6.0",

    "husky": "^9.1.0",
    "lint-staged": "^15.4.0",

    "vitest": "^3.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.6.0",
    "@vitejs/plugin-react": "^4.3.0",

    "@playwright/test": "^1.50.0",

    "@storybook/react": "^8.5.0",
    "@storybook/nextjs": "^8.5.0",

    "@next/bundle-analyzer": "^15.3.0",
    "@lhci/cli": "^0.14.0"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,mdx,css}": [
      "prettier --write"
    ]
  }
}
```

---

## 1. Proje Yapisi

### 1.1 Tam Dizin Yapisi

```
lipodem-turkiye/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Lint + typecheck + test + Lighthouse CI
│       └── playwright.yml            # E2E testleri (PR bazli)
│
├── .husky/
│   └── pre-commit                    # lint-staged calistirma
│
├── prisma/
│   ├── schema.prisma                 # Veritabani semasi
│   ├── seed.ts                       # Seed verileri (klinikler, doktorlar, sehirler)
│   └── migrations/                   # Prisma migration dosyalari
│
├── public/
│   ├── fonts/                        # Self-hosted font dosyalari (varsa)
│   ├── images/
│   │   ├── og/                       # Statik OG gorselleri
│   │   ├── icons/                    # Favicon, app icons
│   │   └── illustrations/            # SVG illustrasyonlar
│   ├── robots.txt                    # (Next.js app/robots.ts kullanilacak)
│   └── manifest.json                 # PWA manifest (gelecek)
│
├── src/
│   ├── app/
│   │   ├── (marketing)/              # Pazarlama route grubu
│   │   │   ├── layout.tsx            # Marketing layout (header + footer)
│   │   │   ├── page.tsx              # Ana sayfa /
│   │   │   ├── lipodem-nedir/
│   │   │   │   └── page.tsx          # Pillar: Tani & Farkindalik
│   │   │   ├── lipodem-tedavisi/
│   │   │   │   └── page.tsx          # Pillar: Tedavi
│   │   │   ├── lipodem-beslenme/
│   │   │   │   └── page.tsx          # Pillar: Beslenme
│   │   │   ├── lipodem-egzersiz/
│   │   │   │   └── page.tsx          # Pillar: Egzersiz
│   │   │   ├── lipodem-ruh-sagligi/
│   │   │   │   └── page.tsx          # Pillar: Ruh Sagligi
│   │   │   ├── lipodem-turkiye-rehberi/
│   │   │   │   └── page.tsx          # Pillar: Turkiye Rehberi
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx          # Cluster makaleleri (duz yapi)
│   │   │   ├── blog/
│   │   │   │   ├── page.tsx          # Blog listesi
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Blog yazisi
│   │   │   ├── hikayeler/
│   │   │   │   ├── page.tsx          # Hasta hikayeleri listesi
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Bireysel hikaye
│   │   │   ├── klinikler/
│   │   │   │   ├── page.tsx          # Klinik bulucu ana
│   │   │   │   └── [sehir]/
│   │   │   │       └── page.tsx      # Sehir klinik sayfasi (x81)
│   │   │   ├── doktorlar/
│   │   │   │   ├── page.tsx          # Doktor dizini
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Doktor profili
│   │   │   ├── karsilastirma/
│   │   │   │   ├── page.tsx          # Karsilastirma ana
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx      # Tekil karsilastirma
│   │   │   ├── araclar/
│   │   │   │   ├── page.tsx          # Araclar ana
│   │   │   │   ├── semptom-testi/
│   │   │   │   │   └── page.tsx      # Semptom testi
│   │   │   │   ├── evre-degerlendirme/
│   │   │   │   │   └── page.tsx      # Evre degerlendirme
│   │   │   │   ├── maliyet-hesaplayici/
│   │   │   │   │   └── page.tsx      # Maliyet hesaplayici
│   │   │   │   └── beslenme-planlayici/
│   │   │   │       └── page.tsx      # Beslenme planlayici [PREMIUM]
│   │   │   ├── premium/
│   │   │   │   ├── page.tsx          # Premium ana (fiyatlandirma)
│   │   │   │   ├── ozellikler/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── sss/
│   │   │   │       └── page.tsx
│   │   │   ├── hakkimizda/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── misyon/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── ekip/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── bilimsel-kaynaklar/
│   │   │   │       └── page.tsx
│   │   │   ├── iletisim/
│   │   │   │   └── page.tsx
│   │   │   ├── gizlilik-politikasi/
│   │   │   │   └── page.tsx
│   │   │   ├── kullanim-sartlari/
│   │   │   │   └── page.tsx
│   │   │   ├── cerez-politikasi/
│   │   │   │   └── page.tsx
│   │   │   └── tibbi-sorumluluk-reddi/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (app)/                    # Uygulama route grubu (auth-gated)
│   │   │   ├── layout.tsx            # App layout (sidebar, nav)
│   │   │   ├── topluluk/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [kategori]/
│   │   │   │       └── page.tsx
│   │   │   └── hesap/
│   │   │       ├── profil/
│   │   │       │   └── page.tsx
│   │   │       ├── abonelik/
│   │   │       │   └── page.tsx
│   │   │       ├── kaydedilenler/
│   │   │       │   └── page.tsx
│   │   │       └── ilerleme/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (auth)/                   # Auth route grubu
│   │   │   ├── layout.tsx            # Auth layout (minimal, centered)
│   │   │   ├── giris/
│   │   │   │   └── page.tsx
│   │   │   ├── kayit/
│   │   │   │   └── page.tsx
│   │   │   └── sifre-sifirla/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts      # NextAuth API route
│   │   │   ├── newsletter/
│   │   │   │   └── route.ts          # Newsletter kayit
│   │   │   ├── contact/
│   │   │   │   └── route.ts          # Iletisim formu
│   │   │   ├── search/
│   │   │   │   └── route.ts          # Arama API
│   │   │   ├── revalidate/
│   │   │   │   └── route.ts          # On-demand revalidation webhook
│   │   │   └── og/
│   │   │       └── route.tsx         # Dinamik OG image generation
│   │   │
│   │   ├── layout.tsx                # Root layout
│   │   ├── not-found.tsx             # 404 sayfasi
│   │   ├── error.tsx                 # Genel hata sayfasi
│   │   ├── global-error.tsx          # Root hata sayfasi
│   │   ├── loading.tsx               # Root loading UI
│   │   ├── sitemap.ts                # Dinamik sitemap
│   │   ├── robots.ts                 # Dinamik robots.txt
│   │   └── manifest.ts              # PWA manifest (gelecek)
│   │
│   ├── components/
│   │   ├── ui/                       # Temel UI komponentleri (atomik)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── radio.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── separator.tsx
│   │   │   └── spinner.tsx
│   │   │
│   │   ├── layout/                   # Layout komponentleri
│   │   │   ├── header.tsx            # SC: Ana header
│   │   │   ├── footer.tsx            # SC: Ana footer
│   │   │   ├── mobile-nav.tsx        # CC: Mobil navigasyon (hamburger)
│   │   │   ├── mega-menu.tsx         # CC: Desktop mega menu
│   │   │   ├── bottom-bar.tsx        # CC: Mobil bottom navigation
│   │   │   ├── sticky-cta.tsx        # CC: Mobil sticky CTA bar
│   │   │   ├── sidebar.tsx           # SC/CC: Icerik sidebar
│   │   │   └── section.tsx           # SC: Section wrapper
│   │   │
│   │   ├── marketing/                # Pazarlama komponentleri
│   │   │   ├── hero.tsx              # SC: Hero bolumu
│   │   │   ├── feature-grid.tsx      # SC: Ozellik grid
│   │   │   ├── testimonial-card.tsx  # SC: Hasta hikayesi karti
│   │   │   ├── stat-block.tsx        # SC: Istatistik blogu
│   │   │   ├── cta-banner.tsx        # SC: CTA banner
│   │   │   ├── newsletter-form.tsx   # CC: Newsletter kayit formu
│   │   │   ├── pricing-card.tsx      # SC: Fiyat karti
│   │   │   └── trust-signals.tsx     # SC: Guven sinyalleri
│   │   │
│   │   ├── content/                  # Icerik komponentleri
│   │   │   ├── article-layout.tsx    # SC: Makale layout
│   │   │   ├── toc.tsx               # CC: Icerik tablosu (Table of Contents)
│   │   │   ├── mdx-components.tsx    # MDX ozel komponentleri
│   │   │   ├── info-box.tsx          # SC: Bilgi kutusu
│   │   │   ├── comparison-table.tsx  # SC: Karsilastirma tablosu
│   │   │   ├── source-citation.tsx   # SC: Kaynak referansi
│   │   │   ├── related-content.tsx   # SC: Ilgili icerikler widget
│   │   │   ├── reading-progress.tsx  # CC: Okuma ilerleme cubugu
│   │   │   └── share-buttons.tsx     # CC: Sosyal paylasim butonlari
│   │   │
│   │   ├── clinic/                   # Klinik/Doktor komponentleri
│   │   │   ├── clinic-card.tsx       # SC: Klinik karti
│   │   │   ├── clinic-filter.tsx     # CC: Klinik filtreleme
│   │   │   ├── clinic-map.tsx        # CC: Klinik harita (dinamik import)
│   │   │   ├── doctor-card.tsx       # SC: Doktor karti
│   │   │   └── appointment-cta.tsx   # CC: Randevu CTA
│   │   │
│   │   ├── tools/                    # Interaktif arac komponentleri
│   │   │   ├── symptom-test/
│   │   │   │   ├── symptom-wizard.tsx    # CC: Ana wizard
│   │   │   │   ├── question-step.tsx     # CC: Soru adimi
│   │   │   │   ├── result-display.tsx    # CC: Sonuc gosterimi
│   │   │   │   └── pdf-report.tsx        # CC: PDF rapor olusturma
│   │   │   ├── stage-assessment.tsx      # CC: Evre degerlendirme
│   │   │   ├── cost-calculator.tsx       # CC: Maliyet hesaplayici
│   │   │   └── nutrition-planner.tsx     # CC: Beslenme planlayici
│   │   │
│   │   ├── auth/                     # Auth komponentleri
│   │   │   ├── login-form.tsx        # CC: Giris formu
│   │   │   ├── register-form.tsx     # CC: Kayit formu
│   │   │   ├── social-login.tsx      # CC: Google OAuth butonu
│   │   │   └── premium-gate.tsx      # SC: Premium icerik kapisi
│   │   │
│   │   ├── community/               # Topluluk komponentleri
│   │   │   ├── post-card.tsx         # SC: Forum gonderi karti
│   │   │   ├── post-editor.tsx       # CC: Gonderi editoru
│   │   │   ├── comment-thread.tsx    # CC: Yorum dizisi
│   │   │   └── user-badge.tsx        # SC: Kullanici rozeti
│   │   │
│   │   └── seo/                      # SEO komponentleri
│   │       ├── json-ld.tsx           # SC: JSON-LD schema injection
│   │       ├── breadcrumbs.tsx       # SC: Breadcrumb navigasyon
│   │       └── canonical.tsx         # SC: Canonical URL
│   │
│   ├── lib/
│   │   ├── db.ts                     # Prisma client singleton
│   │   ├── auth.ts                   # NextAuth konfigurasyonu
│   │   ├── auth-options.ts           # Auth providers ve callbacks
│   │   ├── utils.ts                  # Genel utility fonksiyonlari (cn, formatDate)
│   │   ├── constants.ts              # Sabit degerler (site URL, meta defaults)
│   │   ├── validations.ts            # Zod schemalari (form, API)
│   │   ├── fetchers.ts               # Veri cekim fonksiyonlari (server-side)
│   │   ├── actions.ts                # Server Actions (form submission, vb.)
│   │   ├── cache.ts                  # React.cache ve LRU cache yardimcilari
│   │   ├── mdx.ts                    # MDX icerik yukleme ve isleme
│   │   ├── search.ts                 # Arama fonksiyonlari
│   │   ├── analytics.ts              # Analytics event helper'lari
│   │   ├── iyzico.ts                 # iyzico odeme entegrasyonu
│   │   └── seo.ts                    # SEO yardimci fonksiyonlari (metadata, schema)
│   │
│   ├── hooks/
│   │   ├── use-media-query.ts        # Responsive breakpoint hook
│   │   ├── use-scroll-position.ts    # Scroll pozisyon takibi
│   │   ├── use-intersection.ts       # IntersectionObserver hook
│   │   ├── use-local-storage.ts      # localStorage hook (versiyonlu)
│   │   ├── use-debounce.ts           # Debounce hook
│   │   ├── use-toast.ts              # Toast bildirim hook
│   │   └── use-lock-body-scroll.ts   # Body scroll kilitleme (modal)
│   │
│   ├── types/
│   │   ├── index.ts                  # Genel type export'lari
│   │   ├── clinic.ts                 # Klinik ve doktor tipleri
│   │   ├── content.ts                # Icerik (blog, makale) tipleri
│   │   ├── user.ts                   # Kullanici ve abonelik tipleri
│   │   ├── tool.ts                   # Interaktif arac tipleri
│   │   └── api.ts                    # API response tipleri
│   │
│   ├── styles/
│   │   └── globals.css               # Tailwind directives + CSS custom properties
│   │
│   └── middleware.ts                 # Next.js middleware (auth, redirect, locale)
│
├── content/
│   ├── blog/                         # Blog MDX dosyalari
│   │   └── lipodem-farkindalik-ayi-2026.mdx
│   ├── pages/                        # Pillar + cluster MDX dosyalari
│   │   ├── lipodem-nedir.mdx
│   │   ├── lipodem-belirtileri.mdx
│   │   └── ...
│   └── stories/                      # Hasta hikayeleri MDX
│       └── ayse-34-yas-istanbul.mdx
│
├── data/
│   ├── cities.json                   # 81 il verisi (slug, konum, bolge)
│   ├── clinics.json                  # Klinik verileri (seed)
│   ├── doctors.json                  # Doktor verileri (seed)
│   ├── symptom-questions.json        # Semptom testi sorulari
│   └── navigation.ts                 # Navigasyon yapisi
│
├── tests/
│   ├── unit/                         # Vitest unit testleri
│   ├── e2e/                          # Playwright E2E testleri
│   └── setup.ts                      # Test setup dosyasi
│
├── .env.local                        # Yerel environment degiskenleri
├── .env.example                      # Ornek env dosyasi
├── .eslintrc.json                    # ESLint konfigurasyonu
├── .prettierrc                       # Prettier konfigurasyonu
├── .prettierignore                   # Prettier ignore
├── next.config.ts                    # Next.js konfigurasyonu
├── tailwind.config.ts                # Tailwind CSS konfigurasyonu (v4 icin opsiyonel)
├── postcss.config.mjs                # PostCSS konfigurasyonu
├── tsconfig.json                     # TypeScript konfigurasyonu
├── vitest.config.ts                  # Vitest konfigurasyonu
├── playwright.config.ts              # Playwright konfigurasyonu
├── vercel.json                       # Vercel konfigurasyonu
├── sentry.client.config.ts           # Sentry client konfigurasyonu
├── sentry.server.config.ts           # Sentry server konfigurasyonu
└── instrumentation.ts               # Next.js instrumentation (Sentry init)
```

### 1.2 Naming Conventions (Isimlendirme Kurallari)

| Kategori | Kural | Ornek |
|----------|-------|-------|
| **Dosya (komponent)** | kebab-case | `clinic-card.tsx`, `symptom-wizard.tsx` |
| **Dosya (util/lib)** | kebab-case | `auth-options.ts`, `use-media-query.ts` |
| **Komponent** | PascalCase | `ClinicCard`, `SymptomWizard` |
| **Hook** | camelCase, `use` prefix | `useMediaQuery`, `useScrollPosition` |
| **Utility fonksiyon** | camelCase | `formatDate`, `slugify`, `cn` |
| **Type/Interface** | PascalCase | `ClinicData`, `BlogPost`, `UserSession` |
| **Constant** | SCREAMING_SNAKE_CASE | `SITE_URL`, `DEFAULT_REVALIDATE` |
| **Enum** | PascalCase (tip + deger) | `UserRole.Admin`, `Stage.Early` |
| **CSS custom property** | kebab-case, `--` prefix | `--color-primary`, `--font-sans` |
| **Route parametresi** | kebab-case, `[param]` | `[slug]`, `[sehir]` |
| **Server Action** | camelCase, fiil ile basla | `submitContact`, `subscribeNewsletter` |

### 1.3 Barrel Exports vs Direct Imports

**Karar: Direct imports tercih edilir. Barrel files KULLANILMAZ.**

Vercel React Best Practices kuralina gore (`bundle-barrel-imports`): Barrel dosyalari (index.ts ile toplu export) 200-800ms import maliyeti olusturabilir. Next.js 13.5+ `optimizePackageImports` destegini sunsa da, proje ici barrel files gereksiz karmasiklik ekler.

```typescript
// YANLIS: barrel export
// src/components/ui/index.ts
export { Button } from './button'
export { Input } from './input'
export { Card } from './card'

// Kullanim
import { Button, Input, Card } from '@/components/ui'

// DOGRU: direct import
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
```

**Istisna:** `src/types/index.ts` -- Tip tanimlari runtime bundle'a etki etmez, bu nedenle barrel export kullanilabilir.

### 1.4 Path Aliases

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/content/*": ["./content/*"],
      "@/data/*": ["./data/*"]
    }
  }
}
```

Kullanim:

```typescript
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useMediaQuery } from '@/hooks/use-media-query'
import type { ClinicData } from '@/types/clinic'
```

---

## 2. Server Components vs Client Components Stratejisi

### 2.1 Temel Kural

**Default: Her sey Server Component (SC).** `"use client"` sadece tarayici API'sine ihtiyac duyan komponentlerde kullanilir.

Vercel kuralina gore (`server-serialization`): Client Component sinirina gecen veriyi minimize edin. SC'den CC'ye sadece goruntuleme icin gereken minimum veri gonderilmelidir.

### 2.2 Client Component Gereklilik Kriterleri

Su durumlardan biri varsa `"use client"` kullanin:
1. **useState / useReducer** -- Interaktif state yonetimi
2. **useEffect** -- Tarayici side-effect'leri
3. **Event handlers** -- onClick, onChange, onSubmit
4. **Browser API'leri** -- localStorage, IntersectionObserver, window
5. **Third-party client kutuphaneleri** -- Harita, editor, animasyon

### 2.3 Sayfa Tipi Bazinda SC/CC Ayrim Tablosu

| Sayfa Tipi | Layout | Icerik | Interaktif Elemanlar | Strateji |
|------------|--------|--------|---------------------|----------|
| **Ana Sayfa** | SC | SC | CC: Newsletter form, sticky CTA | SC dominant, CC yaprak |
| **Pillar Sayfalar** | SC | SC | CC: TOC, reading progress, share | SC dominant |
| **Blog Makale** | SC | SC (MDX) | CC: TOC, okuma ilerleme, yorum | SC dominant |
| **Klinik Sayfasi** | SC | SC | CC: Harita, filtre, randevu CTA | SC + CC karmasik |
| **Doktor Profili** | SC | SC | CC: Randevu CTA | SC dominant |
| **Semptom Testi** | SC (shell) | -- | CC: Tam wizard | CC dominant |
| **Klinik Bulucu** | SC (shell) | -- | CC: Harita, filtre, arama | CC dominant |
| **Beslenme Planlayici** | SC (shell) | -- | CC: Form, hesaplama | CC dominant |
| **Topluluk** | SC | SC (gonderi listesi) | CC: Editor, yorum, oy | SC + CC dengeli |
| **Hesap** | SC (shell) | -- | CC: Formlar, abonelik yonetimi | CC dominant |
| **Auth (Giris/Kayit)** | SC | -- | CC: Formlar | CC dominant |
| **Fiyatlandirma** | SC | SC | CC: Plan secimi, odeme | SC dominant |
| **Karsilastirma** | SC | SC | CC: Tab secimi | SC dominant |

### 2.4 Client Component Sinir Cizimi Ornekleri

**Kural:** CC sinirini mumkun olan en dar yere cizelim. Buyuk bir sayfayi tamamen CC yapmak yerine, sadece interaktif kismi CC yapin.

```tsx
// YANLIS: Tum sayfa client
'use client'

export default function ClinicPage({ params }) {
  const [filter, setFilter] = useState('')
  // ... tum sayfa client-side

  return (
    <div>
      <h1>Istanbul Lipodem Klinikleri</h1>
      <p>Uzun aciklama metni...</p>
      <FilterInput value={filter} onChange={setFilter} />
      <ClinicList filter={filter} />
    </div>
  )
}

// DOGRU: Sadece interaktif kisim client
// app/(marketing)/klinikler/[sehir]/page.tsx (Server Component)
export default async function ClinicPage({ params }: { params: Promise<{ sehir: string }> }) {
  const { sehir } = await params
  const clinics = await getClinics(sehir)
  const cityData = await getCityData(sehir)

  return (
    <div>
      <h1>{cityData.name} Lipodem Klinikleri</h1>
      <p>{cityData.description}</p>
      {/* Sadece interaktif kisim CC */}
      <ClinicExplorer clinics={clinics} cityCenter={cityData.mapCenter} />
    </div>
  )
}

// components/clinic/clinic-explorer.tsx (Client Component)
'use client'

import { useState } from 'react'
import type { ClinicData } from '@/types/clinic'

interface ClinicExplorerProps {
  clinics: ClinicData[]     // SC'den minimum veri
  cityCenter: { lat: number; lng: number }
}

export function ClinicExplorer({ clinics, cityCenter }: ClinicExplorerProps) {
  const [filter, setFilter] = useState('')
  const [view, setView] = useState<'list' | 'map'>('list')

  const filtered = clinics.filter(c =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <ClinicFilter value={filter} onChange={setFilter} />
      <ViewToggle view={view} onChange={setView} />
      {view === 'list'
        ? <ClinicList clinics={filtered} />
        : <ClinicMap clinics={filtered} center={cityCenter} />
      }
    </div>
  )
}
```

### 2.5 Streaming ve Suspense Kullanim Yerleri

Vercel kuralina gore (`async-suspense-boundaries`): Suspense sinirlari ile wrapper UI'yi hemen gosterin, veri akisini bekleyen kisimlari ayri stream edin.

```tsx
// app/(marketing)/klinikler/[sehir]/page.tsx
import { Suspense } from 'react'
import { ClinicListSkeleton } from '@/components/ui/skeleton'

export default async function ClinicPage({ params }: { params: Promise<{ sehir: string }> }) {
  const { sehir } = await params

  return (
    <div>
      {/* Bu kisim hemen render edilir */}
      <Breadcrumbs items={[
        { label: 'Ana Sayfa', href: '/' },
        { label: 'Klinikler', href: '/klinikler' },
        { label: sehir }
      ]} />
      <h1>Lipodem Klinikleri</h1>

      {/* Veri bekleyen kisim stream edilir */}
      <Suspense fallback={<ClinicListSkeleton count={5} />}>
        <ClinicData sehir={sehir} />
      </Suspense>
    </div>
  )
}

// Async Server Component -- Suspense sinirinda stream edilir
async function ClinicData({ sehir }: { sehir: string }) {
  const clinics = await getClinics(sehir) // Bu fetch tamamlaninca render edilir
  return <ClinicExplorer clinics={clinics} />
}
```

**Suspense kullanim yerleri:**

| Sayfa | Suspense Alani | Fallback |
|-------|----------------|----------|
| Klinik sayfasi | Klinik listesi | ClinicListSkeleton |
| Doktor dizini | Doktor kartlari | DoctorCardSkeleton |
| Blog listesi | Makale kartlari | ArticleCardSkeleton |
| Hasta hikayeleri | Hikaye listesi | StoryCardSkeleton |
| Ana sayfa | Istatistik blogu, son icerikler | StatBlockSkeleton |

### 2.6 Server Actions

Server Actions, form submission ve mutation islemleri icin API route'lara tercih edilir. Her Server Action icinde auth kontrolu zorunludur (`server-auth-actions` kurali).

```typescript
// src/lib/actions.ts
'use server'

import { z } from 'zod'
import { verifySession } from '@/lib/auth'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

// --- Newsletter Kayit (auth gerektirmez) ---
const newsletterSchema = z.object({
  email: z.string().email('Gecerli bir email adresi girin'),
})

export async function subscribeNewsletter(formData: FormData) {
  const validated = newsletterSchema.parse({
    email: formData.get('email'),
  })

  await db.subscriber.create({
    data: { email: validated.email },
  })

  return { success: true, message: 'Basariyla kaydoldunuz!' }
}

// --- Icerik Kaydetme (auth gerektirir) ---
const saveContentSchema = z.object({
  contentId: z.string(),
  contentType: z.enum(['article', 'story', 'clinic']),
})

export async function saveContent(data: unknown) {
  // 1. Auth kontrolu -- ZORUNLU
  const session = await verifySession()
  if (!session) {
    throw new Error('Giris yapmaniz gerekiyor')
  }

  // 2. Input dogrulama
  const validated = saveContentSchema.parse(data)

  // 3. Islem
  await db.savedContent.create({
    data: {
      userId: session.user.id,
      contentId: validated.contentId,
      contentType: validated.contentType,
    },
  })

  revalidatePath('/hesap/kaydedilenler')
  return { success: true }
}

// --- Iletisim Formu ---
const contactSchema = z.object({
  name: z.string().min(2, 'Isim en az 2 karakter olmali'),
  email: z.string().email('Gecerli bir email adresi girin'),
  subject: z.string().min(5),
  message: z.string().min(20, 'Mesaj en az 20 karakter olmali'),
})

export async function submitContact(formData: FormData) {
  const validated = contactSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  })

  await db.contactMessage.create({ data: validated })

  // Non-blocking islemler icin after() kullan (server-after-nonblocking kurali)
  // after(() => sendNotificationEmail(validated))

  return { success: true, message: 'Mesajiniz iletildi.' }
}
```

---

## 3. Data Fetching & Caching

### 3.1 fetch() Konfigurasyonu

```typescript
// ISR ile veri cekim ornekleri

// Blog makaleleri: 1 gun revalidation
const posts = await fetch('https://api.example.com/posts', {
  next: { revalidate: 86400, tags: ['posts'] },
})

// Klinik verileri: 7 gun revalidation
const clinics = await fetch('https://api.example.com/clinics', {
  next: { revalidate: 604800, tags: ['clinics'] },
})

// Statik sayfalar: 30 gun revalidation
const pageData = await fetch('https://api.example.com/pages/about', {
  next: { revalidate: 2592000, tags: ['pages'] },
})

// Dinamik, cache'lenmemesi gereken veri (kullanici profili)
const profile = await fetch(`https://api.example.com/users/${userId}`, {
  cache: 'no-store',
})
```

### 3.2 ISR Stratejisi (Sayfa Tipine Gore)

| Sayfa Tipi | Revalidation | Gerekcesi |
|------------|-------------|-----------|
| Ana sayfa | 3600 (1 saat) | Istatistikler, son icerikler guncellenir |
| Pillar sayfalar | 2592000 (30 gun) | Nadiren degisir, SEO kritik |
| Blog makaleleri | 86400 (1 gun) | Duzenli guncelleme, yeni yorumlar |
| Hasta hikayeleri | 604800 (7 gun) | Yayinlandiktan sonra nadiren degisir |
| Klinik sayfasi | 604800 (7 gun) | Fiyat ve bilgi guncellemeleri |
| Doktor profili | 604800 (7 gun) | Nadiren degisir |
| Karsilastirma | 2592000 (30 gun) | Statik icerik |
| Araclar | `dynamic = 'force-dynamic'` | Tamamen client-side |
| Topluluk | `dynamic = 'force-dynamic'` | Canli veri |
| Hesap | `dynamic = 'force-dynamic'` | Kullanici bazli |

### 3.3 On-Demand Revalidation

```typescript
// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-revalidate-secret')

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { type, slug } = body

  switch (type) {
    case 'blog':
      revalidateTag('posts')
      if (slug) revalidatePath(`/blog/${slug}`)
      revalidatePath('/blog')
      break
    case 'clinic':
      revalidateTag('clinics')
      if (slug) revalidatePath(`/klinikler/${slug}`)
      revalidatePath('/klinikler')
      break
    case 'doctor':
      revalidateTag('doctors')
      if (slug) revalidatePath(`/doktorlar/${slug}`)
      revalidatePath('/doktorlar')
      break
    case 'all':
      revalidateTag('posts')
      revalidateTag('clinics')
      revalidateTag('doctors')
      revalidateTag('pages')
      break
    default:
      return NextResponse.json({ error: 'Unknown type' }, { status: 400 })
  }

  return NextResponse.json({ revalidated: true, type, slug })
}
```

### 3.4 generateStaticParams

```typescript
// Blog sayfalari
// app/(marketing)/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getAllBlogSlugs()
  return posts.map((post) => ({ slug: post.slug }))
}

// Klinik sayfalari (81 il)
// app/(marketing)/klinikler/[sehir]/page.tsx
export async function generateStaticParams() {
  const cities = await import('@/data/cities.json')
  return cities.default.map((city) => ({ sehir: city.slug }))
}

// Doktor profilleri
// app/(marketing)/doktorlar/[slug]/page.tsx
export async function generateStaticParams() {
  const doctors = await getAllDoctorSlugs()
  return doctors.map((doc) => ({ slug: doc.slug }))
}

// Karsilastirma sayfalari
// app/(marketing)/karsilastirma/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: 'vaser-vs-tumescent' },
    { slug: 'konservatif-vs-cerrahi' },
    { slug: 'liposuction-teknikleri-karsilastirma' },
  ]
}

// Cluster makaleleri (duz yapi)
// app/(marketing)/[slug]/page.tsx
export async function generateStaticParams() {
  const articles = await getAllClusterSlugs()
  return articles.map((article) => ({ slug: article.slug }))
}
```

### 3.5 API Routes vs Server Actions

| Senaryo | Tercih | Gerekce |
|---------|--------|---------|
| Form submission (newsletter, iletisim) | Server Action | Progressive enhancement, JavaScript devre disi kalsa bile calisir |
| Veri mutation (kaydet, sil, guncelle) | Server Action | revalidatePath/revalidateTag ile dogrudan cache invalidation |
| Harici webhook (CMS guncellemesi) | API Route | Harici sistemler HTTP endpoint'e istek atar |
| Uc. parti entegrasyon (iyzico, email) | API Route | Webhook callback'leri |
| Client-side arama (debounced) | API Route + SWR | Tekrarlayan istekler, SWR dedup ve cache |
| Dinamik OG gorsel | API Route | ImageResponse Edge Runtime |
| Dosya yukleme | API Route | Multipart form data isleme |

### 3.6 Veritabani Baglantisi (Prisma)

```typescript
// src/lib/db.ts
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
```

### 3.7 Cache Stratejisi

**React.cache -- Per-request deduplication (`server-cache-react` kurali):**

```typescript
// src/lib/cache.ts
import { cache } from 'react'
import { db } from '@/lib/db'

// Ayni request icinde birden fazla komponent ayni veriyi isterse
// sadece 1 veritabani sorgusu yapilir
export const getClinicBySlug = cache(async (slug: string) => {
  return db.clinic.findUnique({
    where: { slug },
    include: { doctors: true, treatments: true },
  })
})

export const getCurrentUser = cache(async () => {
  const session = await auth()
  if (!session?.user?.id) return null
  return db.user.findUnique({ where: { id: session.user.id } })
})
```

**LRU Cache -- Cross-request caching (`server-cache-lru` kurali):**

```typescript
// src/lib/cache.ts
import { LRUCache } from 'lru-cache'

// Sehir verileri (81 il -- nadiren degisir)
const cityCache = new LRUCache<string, CityData>({
  max: 100,
  ttl: 24 * 60 * 60 * 1000, // 24 saat
})

export async function getCityData(slug: string): Promise<CityData> {
  const cached = cityCache.get(slug)
  if (cached) return cached

  const city = await db.city.findUnique({ where: { slug } })
  if (city) cityCache.set(slug, city)
  return city!
}

// Navigasyon verisi (tum uygulamada ayni)
const navCache = new LRUCache<string, NavigationItem[]>({
  max: 1,
  ttl: 60 * 60 * 1000, // 1 saat
})

export async function getNavigation(): Promise<NavigationItem[]> {
  const cached = navCache.get('main')
  if (cached) return cached

  const nav = await db.navigation.findMany({ orderBy: { order: 'asc' } })
  navCache.set('main', nav)
  return nav
}
```

### 3.8 unstable_cache (Next.js)

```typescript
import { unstable_cache } from 'next/cache'

// Blog listesi -- cross-request cache + ISR tag invalidation
export const getCachedBlogPosts = unstable_cache(
  async (page: number = 1, limit: number = 10) => {
    return db.post.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { publishedAt: 'desc' },
      where: { status: 'published' },
    })
  },
  ['blog-posts'],
  { revalidate: 86400, tags: ['posts'] }
)
```

---

## 4. Performans Optimizasyonu

### 4.1 Core Web Vitals Hedefleri

| Metrik | Hedef | Kritik Sayfalar |
|--------|-------|-----------------|
| **LCP** | <2.5s | Ana sayfa, pillar sayfalar, blog |
| **INP** | <200ms | Semptom testi, klinik bulucu, formlar |
| **CLS** | <0.1 | Tum sayfalar |

### 4.2 Image Optimization

```tsx
// src/components/marketing/hero.tsx
import Image from 'next/image'

// Hero gorseli -- LCP kritik, priority kullan
export function Hero() {
  return (
    <section className="relative py-12 md:py-16 lg:py-24">
      <Image
        src="/images/hero-lipodem.webp"
        alt="Lipodem farkindalik gorseli"
        width={1280}
        height={720}
        priority                          // LCP icin preload
        sizes="100vw"                     // Tam genislik
        placeholder="blur"               // Blur placeholder (CLS onleme)
        blurDataURL="data:image/jpeg;base64,/9j/4AAQ..." // Base64 blur
        className="object-cover rounded-2xl"
        quality={85}
      />
    </section>
  )
}

// Blog gorsel -- lazy load (varsayilan)
export function ArticleImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={450}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 720px, 800px"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      className="rounded-xl"
      quality={80}
    />
  )
}

// Avatar -- kucuk, sabit boyut
export function DoctorAvatar({ src, name }: { src: string; name: string }) {
  return (
    <Image
      src={src}
      alt={`Dr. ${name} profil fotografi`}
      width={64}
      height={64}
      sizes="64px"
      className="rounded-full"
      quality={75}
    />
  )
}
```

**next.config.ts gorsel formati:**

```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com', // Google OAuth avatar
      },
    ],
  },
}
```

### 4.3 Font Optimization

```tsx
// src/app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],   // latin-ext: Turkce karakterler (o, u, s, c, g, i)
  display: 'swap',                    // FOUT tercih (FOIT yerine)
  variable: '--font-inter',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased bg-stone-50 text-stone-700">
        {children}
      </body>
    </html>
  )
}
```

### 4.4 Bundle Optimization

**Dynamic imports -- agir komponentler (`bundle-dynamic-imports` kurali):**

```tsx
import dynamic from 'next/dynamic'

// Harita komponentleri -- sadece gerektiginde yukle (~300KB)
const ClinicMap = dynamic(
  () => import('@/components/clinic/clinic-map').then(m => m.ClinicMap),
  {
    ssr: false,
    loading: () => <div className="h-96 bg-stone-100 animate-pulse rounded-xl" />,
  }
)

// PDF rapor olusturma -- agir kutuphane
const PdfReport = dynamic(
  () => import('@/components/tools/symptom-test/pdf-report').then(m => m.PdfReport),
  { ssr: false }
)

// Rich text editor (topluluk post editoru)
const PostEditor = dynamic(
  () => import('@/components/community/post-editor').then(m => m.PostEditor),
  {
    ssr: false,
    loading: () => <div className="h-48 bg-stone-100 animate-pulse rounded-lg" />,
  }
)
```

**Third-party script'leri geciktirme (`bundle-defer-third-party` kurali):**

```tsx
// src/app/layout.tsx
import dynamic from 'next/dynamic'

// Analytics -- hydration sonrasi yukle
const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(m => m.Analytics),
  { ssr: false }
)

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(m => m.SpeedInsights),
  { ssr: false }
)
```

**Preload on hover (`bundle-preload` kurali):**

```tsx
// Klinik haritasi -- hover'da preload et
function MapToggleButton({ onClick }: { onClick: () => void }) {
  const preload = () => {
    if (typeof window !== 'undefined') {
      void import('@/components/clinic/clinic-map')
    }
  }

  return (
    <button
      onMouseEnter={preload}
      onFocus={preload}
      onClick={onClick}
      className="px-5 py-2.5 text-[15px] font-semibold bg-teal-600 text-white rounded-lg hover:bg-teal-700"
    >
      Haritada Gor
    </button>
  )
}
```

### 4.5 Third-Party Scripts

```tsx
// src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}

        {/* GA4 -- afterInteractive (hydration sonrasi) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Cerez Banner -- lazyOnload */}
        <Script
          src="/scripts/cookie-consent.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
```

### 4.6 Link Prefetch Stratejisi

```tsx
import Link from 'next/link'

// Varsayilan: Link viewport'a girdiginde prefetch edilir
<Link href="/lipodem-nedir">Lipodem Nedir</Link>

// Buyuk/dinamik sayfalar: prefetch devre disi
<Link href="/klinikler/istanbul" prefetch={false}>Istanbul Klinikleri</Link>

// Programatic prefetch (ornegin hover'da)
'use client'
import { useRouter } from 'next/navigation'

function ClinicCard({ slug }: { slug: string }) {
  const router = useRouter()

  return (
    <div
      onMouseEnter={() => router.prefetch(`/klinikler/${slug}`)}
      className="..."
    >
      <Link href={`/klinikler/${slug}`}>Detay</Link>
    </div>
  )
}
```

### 4.7 Edge Runtime

Edge Runtime, dusuk latency gerektiren hafif islemler icin kullanilir:

```typescript
// Middleware -- Edge'de calisir (varsayilan)
// src/middleware.ts
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

// Dinamik OG gorsel -- Edge'de calisir
// src/app/api/og/route.tsx
export const runtime = 'edge'

// Arama API -- Edge'de calisir (dusuk latency)
// src/app/api/search/route.ts
export const runtime = 'edge'
```

**Edge Runtime KULLANILMAYACAK yerler:**
- Prisma/veritabani islemleri (Node.js runtime gerekli)
- Dosya sistemi islemleri (fs modulu)
- Server Actions (Node.js runtime)

### 4.8 Loading UI (Streaming SSR)

```tsx
// src/app/(marketing)/blog/loading.tsx
import { Skeleton } from '@/components/ui/skeleton'

export default function BlogLoading() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <Skeleton className="h-10 w-48 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
            <Skeleton className="aspect-[16/9]" />
            <div className="p-5">
              <Skeleton className="h-4 w-24 mb-3" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// src/app/(marketing)/klinikler/[sehir]/loading.tsx
export default function ClinicLoading() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <Skeleton className="h-6 w-64 mb-2" />
      <Skeleton className="h-10 w-96 mb-4" />
      <Skeleton className="h-4 w-full max-w-2xl mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-48 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-96 rounded-xl" />
      </div>
    </div>
  )
}
```

---

## 5. Icerik Yonetimi (MDX)

### 5.1 MDX Entegrasyonu

```typescript
// next.config.ts
import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypePrettyCode, { theme: 'github-light' }],
    ],
  },
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // ... diger config
}

export default withMDX(nextConfig)
```

### 5.2 Frontmatter Yapisi

**Blog makalesi:**

```yaml
---
title: "Lipodem Belirtileri: 12 Kritik Isaret"
slug: "lipodem-belirtileri"
description: "Lipodem hastaliginin 12 kritik belirtisini taniyin. Erken tani, dogru tedavi icin ilk adimdir."
publishedAt: "2026-05-15"
updatedAt: "2026-05-20"
author: "Dr. Ahmet Okyay"
category: "tani"
pillar: "lipodem-nedir"
tags: ["belirtiler", "tani", "farkindalik"]
readingTime: 8
featuredImage: "/images/blog/lipodem-belirtileri-hero.webp"
featuredImageAlt: "Lipodem belirtileri infografik"
seoTitle: "Lipodem Belirtileri: 12 Kritik Isaret (2026 Guncel)"
seoDescription: "Lipodem hastaliginin 12 kritik belirtisini taniyin. Orantisiz yag birikimi, kolay morarma, agri -- erken tani icin kontrol edin."
access: "free"
status: "published"
---
```

**Hasta hikayesi:**

```yaml
---
title: "Ayse'nin Hikayesi: 10 Yil Sonra Tani"
slug: "ayse-34-yas-istanbul"
patientName: "Ayse"
age: 34
city: "Istanbul"
stage: 2
diagnosis_year: 2024
treatments: ["kompresyon", "mld", "beslenme"]
quote: "Sonunda birisi beni duydu."
publishedAt: "2026-05-10"
access: "free"
status: "published"
---
```

### 5.3 MDX Icerik Yukleme

```typescript
// src/lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface ContentMeta {
  title: string
  slug: string
  description: string
  publishedAt: string
  updatedAt?: string
  author?: string
  category?: string
  pillar?: string
  tags?: string[]
  readingTime?: number
  featuredImage?: string
  featuredImageAlt?: string
  access: 'free' | 'basic_premium' | 'full_premium'
  status: 'draft' | 'published'
}

export async function getContentBySlug(
  type: 'blog' | 'pages' | 'stories',
  slug: string
): Promise<{ meta: ContentMeta; content: string } | null> {
  // Statik analiz icin path'leri acikca belirtin (bundle-analyzable-paths kurali)
  const dir =
    type === 'blog'
      ? path.join(CONTENT_DIR, 'blog')
      : type === 'pages'
        ? path.join(CONTENT_DIR, 'pages')
        : path.join(CONTENT_DIR, 'stories')

  const filePath = path.join(dir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    meta: data as ContentMeta,
    content,
  }
}

export async function getAllContent(
  type: 'blog' | 'pages' | 'stories'
): Promise<ContentMeta[]> {
  const dir =
    type === 'blog'
      ? path.join(CONTENT_DIR, 'blog')
      : type === 'pages'
        ? path.join(CONTENT_DIR, 'pages')
        : path.join(CONTENT_DIR, 'stories')

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))

  const items = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
    const { data } = matter(raw)
    return data as ContentMeta
  })

  return items
    .filter((item) => item.status === 'published')
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export async function getAllBlogSlugs(): Promise<{ slug: string }[]> {
  const posts = await getAllContent('blog')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function getAllClusterSlugs(): Promise<{ slug: string }[]> {
  const pages = await getAllContent('pages')
  return pages.map((page) => ({ slug: page.slug }))
}
```

### 5.4 MDX Ozel Komponentleri

```tsx
// src/components/content/mdx-components.tsx
import Image from 'next/image'
import Link from 'next/link'
import { InfoBox } from '@/components/content/info-box'
import { ComparisonTable } from '@/components/content/comparison-table'
import { SourceCitation } from '@/components/content/source-citation'

export const mdxComponents = {
  // HTML elemanlarini override
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl md:text-4xl font-bold leading-snug tracking-tight text-stone-800 mt-12 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl md:text-3xl font-bold leading-snug text-stone-800 mt-10 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base leading-relaxed text-stone-700 mb-4" {...props} />
  ),
  a: ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline underline-offset-2" {...props} />
    }
    return <Link href={href ?? '#'} className="text-teal-600 hover:text-teal-700 underline underline-offset-2" {...props} />
  },
  img: ({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <Image
      src={src ?? ''}
      alt={alt ?? ''}
      width={800}
      height={450}
      sizes="(max-width: 768px) 100vw, 720px"
      className="rounded-xl my-6"
      {...(props as any)}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-stone-700" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-stone-700" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-teal-300 pl-4 py-2 my-6 italic text-stone-600 bg-teal-50 rounded-r-lg" {...props} />
  ),
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse" {...props} />
    </div>
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-stone-100 px-4 py-3 text-left font-semibold text-stone-800 border border-stone-200" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border border-stone-200 text-stone-700" {...props} />
  ),

  // Ozel MDX komponentleri
  InfoBox,
  ComparisonTable,
  SourceCitation,
}
```

```tsx
// src/components/content/info-box.tsx
import { AlertCircle, Info, AlertTriangle, CheckCircle } from 'lucide-react'

type InfoBoxVariant = 'info' | 'warning' | 'success' | 'medical'

interface InfoBoxProps {
  variant?: InfoBoxVariant
  title?: string
  children: React.ReactNode
}

const variantConfig = {
  info: {
    icon: Info,
    className: 'bg-teal-50 border-teal-200 text-teal-800',
    iconClassName: 'text-teal-500',
  },
  warning: {
    icon: AlertTriangle,
    className: 'bg-amber-50 border-amber-200 text-amber-800',
    iconClassName: 'text-amber-500',
  },
  success: {
    icon: CheckCircle,
    className: 'bg-green-50 border-green-200 text-green-800',
    iconClassName: 'text-green-500',
  },
  medical: {
    icon: AlertCircle,
    className: 'bg-purple-50 border-purple-200 text-purple-800',
    iconClassName: 'text-purple-500',
  },
}

export function InfoBox({ variant = 'info', title, children }: InfoBoxProps) {
  const config = variantConfig[variant]
  const Icon = config.icon

  return (
    <div className={`rounded-lg border p-4 my-6 flex items-start gap-3 ${config.className}`}>
      <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${config.iconClassName}`} />
      <div>
        {title && <p className="font-medium mb-1">{title}</p>}
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
```

### 5.5 Arama

Lansman icin lightweight Pagefind (statik site arama) kullanilacaktir. Algolia, trafik arttikca degerlendirilebilir.

```typescript
// next.config.ts -- build sonrasi Pagefind index olusturma
// package.json'a eklenir:
// "postbuild": "npx pagefind --site .next --output-path public/pagefind"
```

```tsx
// src/components/layout/search-dialog.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import { useDebounce } from '@/hooks/use-debounce'

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) {
      setResults([])
      return
    }

    async function search() {
      // Pagefind lazy load
      const pagefind = await import(/* webpackIgnore: true */ '/pagefind/pagefind.js')
      await pagefind.init()
      const searchResults = await pagefind.search(debouncedQuery)
      const items = await Promise.all(
        searchResults.results.slice(0, 8).map((r: any) => r.data())
      )
      setResults(items)
    }

    search()
  }, [debouncedQuery])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full mx-4">
        <input
          autoFocus
          type="search"
          placeholder="Lipodem hakkinda ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-6 py-4 text-lg border-b border-stone-200 rounded-t-2xl focus:outline-none"
        />
        <div className="max-h-96 overflow-y-auto p-2">
          {results.map((result, i) => (
            <a
              key={i}
              href={result.url}
              onClick={onClose}
              className="block px-4 py-3 hover:bg-stone-50 rounded-lg"
            >
              <p className="font-medium text-stone-800">{result.meta?.title}</p>
              <p className="text-sm text-stone-500 line-clamp-2" dangerouslySetInnerHTML={{ __html: result.excerpt }} />
            </a>
          ))}
          {debouncedQuery.length >= 2 && results.length === 0 && (
            <p className="px-4 py-8 text-center text-stone-500">Sonuc bulunamadi.</p>
          )}
        </div>
      </div>
    </div>
  )
}
```

---

## 6. Authentication & Authorization

### 6.1 NextAuth.js (Auth.js) Konfigurasyonu

```typescript
// src/lib/auth-options.ts
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Resend from 'next-auth/providers/resend'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Resend({
      apiKey: process.env.RESEND_API_KEY!,
      from: 'Lipodem Turkiye <noreply@lipodemturkiye.com>',
    }),
  ],
  session: {
    strategy: 'database', // Database sessions (Prisma adapter ile)
    maxAge: 30 * 24 * 60 * 60, // 30 gun
  },
  pages: {
    signIn: '/giris',
    newUser: '/kayit',
    error: '/giris',
  },
  callbacks: {
    async session({ session, user }) {
      // Session'a kullanici rolu ve abonelik bilgisi ekle
      const dbUser = await db.user.findUnique({
        where: { id: user.id },
        select: { role: true, subscriptionTier: true, subscriptionStatus: true },
      })

      session.user.id = user.id
      session.user.role = dbUser?.role ?? 'free'
      session.user.subscriptionTier = dbUser?.subscriptionTier ?? 'free'
      session.user.subscriptionStatus = dbUser?.subscriptionStatus ?? 'inactive'

      return session
    },
  },
})
```

```typescript
// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/lib/auth-options'

export const { GET, POST } = handlers
```

### 6.2 Session Stratejisi

**Karar: Database sessions tercih edilir (JWT degil).**

Gerekce:
- Premium abonelik durumu anlik kontrol edilebilir (JWT'de stale data riski)
- Token blacklisting gereksiz (session DB'den silinir)
- Prisma adapter ile dogal entegrasyon
- Vercel Postgres/Neon ile dusuk latency

### 6.3 Middleware Auth Kontrolu

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from '@/lib/auth-options'

// Premium route'lari
const PREMIUM_ROUTES = [
  '/topluluk',
  '/hesap',
  '/araclar/beslenme-planlayici',
]

// Auth gerektiren route'lar
const AUTH_ROUTES = [
  ...PREMIUM_ROUTES,
  '/hesap/profil',
  '/hesap/abonelik',
  '/hesap/kaydedilenler',
  '/hesap/ilerleme',
]

export default auth((req) => {
  const { pathname } = req.nextUrl

  // 1. Trailing slash redirect
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 308)
  }

  // 2. Auth kontrolu
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route))
  if (isAuthRoute && !req.auth) {
    const url = req.nextUrl.clone()
    url.pathname = '/giris'
    url.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(url)
  }

  // 3. Premium kontrolu
  const isPremiumRoute = PREMIUM_ROUTES.some((route) => pathname.startsWith(route))
  if (isPremiumRoute && req.auth) {
    const tier = (req.auth as any).user?.subscriptionTier
    if (!tier || tier === 'free') {
      const url = req.nextUrl.clone()
      url.pathname = '/premium'
      url.searchParams.set('upgrade', 'true')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|fonts|pagefind).*)',
  ],
}
```

### 6.4 Role-Based Access

```typescript
// src/types/user.ts
export type UserRole = 'free' | 'basic_premium' | 'full_premium' | 'admin'

export type SubscriptionTier = 'free' | 'basic' | 'full'
export type SubscriptionStatus = 'active' | 'inactive' | 'cancelled' | 'past_due'

// Icerik erisim kontrol fonksiyonu
export function hasAccess(
  userTier: SubscriptionTier,
  requiredAccess: 'free' | 'basic_premium' | 'full_premium'
): boolean {
  const tierLevel: Record<SubscriptionTier, number> = {
    free: 0,
    basic: 1,
    full: 2,
  }

  const accessLevel: Record<string, number> = {
    free: 0,
    basic_premium: 1,
    full_premium: 2,
  }

  return tierLevel[userTier] >= accessLevel[requiredAccess]
}
```

```tsx
// src/components/auth/premium-gate.tsx
import { auth } from '@/lib/auth-options'
import { hasAccess } from '@/types/user'
import Link from 'next/link'

interface PremiumGateProps {
  requiredAccess: 'basic_premium' | 'full_premium'
  children: React.ReactNode
  fallback?: React.ReactNode
}

export async function PremiumGate({
  requiredAccess,
  children,
  fallback,
}: PremiumGateProps) {
  const session = await auth()
  const userTier = (session?.user as any)?.subscriptionTier ?? 'free'

  if (hasAccess(userTier, requiredAccess)) {
    return <>{children}</>
  }

  return (
    fallback ?? (
      <div className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8 text-center border border-purple-100">
        <h3 className="text-xl font-bold text-stone-800 mb-3">
          Premium Icerik
        </h3>
        <p className="text-stone-600 mb-6 max-w-md mx-auto">
          Bu icerige erismek icin premium uyelik gereklidir.
          Kisisellestirilmis programlar, uzman erisimi ve daha fazlasi.
        </p>
        <Link
          href="/premium"
          className="inline-flex px-7 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-purple-800 shadow-lg"
        >
          Premium Uyelik
        </Link>
      </div>
    )
  )
}
```

---

## 7. State Management & Forms

### 7.1 State Katmanlari

| Katman | Arac | Kullanim Alani |
|--------|------|----------------|
| **Server state** | Server Components + React.cache | Veritabani verileri, icerik, klinikler |
| **Client server cache** | SWR | Debounced arama, canli guncellenen veriler |
| **Global client state** | Zustand | Toast bildirimleri, kullanici tercihleri, modal durumu |
| **Local client state** | useState | Form alanlari, toggle, UI state |
| **URL state** | useSearchParams | Filtre, siralama, sayfalama |
| **Form state** | React Hook Form + Zod | Tum formlar |

### 7.2 Zustand Store

```typescript
// src/lib/stores/ui-store.ts
import { create } from 'zustand'

interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
}

interface UIState {
  // Mobile menu
  isMobileMenuOpen: boolean
  openMobileMenu: () => void
  closeMobileMenu: () => void

  // Search dialog
  isSearchOpen: boolean
  openSearch: () => void
  closeSearch: () => void

  // Toast notifications
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => void
  removeToast: (id: string) => void

  // Cookie consent
  cookieConsent: boolean | null
  setCookieConsent: (consent: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isMobileMenuOpen: false,
  openMobileMenu: () => set({ isMobileMenuOpen: true }),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),

  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  toasts: [],
  addToast: (toast) => {
    const id = crypto.randomUUID()
    set((state) => ({ toasts: [...state.toasts, { ...toast, id }] }))
    // Otomatik kaldir (5 saniye)
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
    }, 5000)
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),

  cookieConsent: null,
  setCookieConsent: (consent) => set({ cookieConsent: consent }),
}))
```

### 7.3 React Hook Form + Zod

```tsx
// src/components/marketing/newsletter-form.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { subscribeNewsletter } from '@/lib/actions'
import { useUIStore } from '@/lib/stores/ui-store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTransition } from 'react'

const schema = z.object({
  email: z.string().email('Gecerli bir email adresi girin'),
})

type FormData = z.infer<typeof schema>

export function NewsletterForm() {
  const [isPending, startTransition] = useTransition()
  const addToast = useUIStore((s) => s.addToast)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    startTransition(async () => {
      const formData = new FormData()
      formData.set('email', data.email)

      const result = await subscribeNewsletter(formData)
      if (result.success) {
        addToast({ type: 'success', title: 'Basariyla kaydoldunuz!' })
        reset()
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3 max-w-md">
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Email adresiniz"
          {...register('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Kaydediliyor...' : 'Abone Ol'}
      </Button>
    </form>
  )
}
```

### 7.4 Semptom Testi Multi-Step Form

```tsx
// src/components/tools/symptom-test/symptom-wizard.tsx
'use client'

import { useState, useCallback } from 'react'
import { QuestionStep } from './question-step'
import { ResultDisplay } from './result-display'
import type { SymptomQuestion, SymptomAnswer } from '@/types/tool'

interface SymptomWizardProps {
  questions: SymptomQuestion[]  // SC'den prop olarak gelir
}

export function SymptomWizard({ questions }: SymptomWizardProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Map<number, SymptomAnswer>>(new Map())
  const [isComplete, setIsComplete] = useState(false)

  const handleAnswer = useCallback((questionId: number, answer: SymptomAnswer) => {
    setAnswers((prev) => {
      const next = new Map(prev)
      next.set(questionId, answer)
      return next
    })
  }, [])

  const handleNext = useCallback(() => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((s) => s + 1)
    } else {
      setIsComplete(true)
    }
  }, [currentStep, questions.length])

  const handleBack = useCallback(() => {
    setCurrentStep((s) => Math.max(0, s - 1))
  }, [])

  if (isComplete) {
    return <ResultDisplay questions={questions} answers={answers} />
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <div className="max-w-2xl mx-auto">
      {/* Ilerleme cubugu */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-stone-600 mb-2">
          <span>Soru {currentStep + 1}/{questions.length}</span>
          <span>%{Math.round(progress)}</span>
        </div>
        <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-teal-500 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Soru */}
      <QuestionStep
        question={questions[currentStep]}
        answer={answers.get(questions[currentStep].id)}
        onAnswer={(answer) => handleAnswer(questions[currentStep].id, answer)}
      />

      {/* Navigasyon */}
      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-5 py-2.5 text-[15px] font-semibold text-stone-600 hover:bg-stone-100 rounded-lg disabled:opacity-50"
        >
          Geri
        </button>
        <button
          onClick={handleNext}
          disabled={!answers.has(questions[currentStep].id)}
          className="px-7 py-3 text-base font-semibold bg-teal-600 text-white rounded-lg hover:bg-teal-700 disabled:opacity-50"
        >
          {currentStep === questions.length - 1 ? 'Sonucu Gor' : 'Sonraki'}
        </button>
      </div>
    </div>
  )
}
```

---

## 8. SEO & Metadata

### 8.1 generateMetadata

```typescript
// src/lib/seo.ts
import type { Metadata } from 'next'

const SITE_URL = 'https://lipodemturkiye.com'
const SITE_NAME = 'Lipodem Turkiye'
const DEFAULT_DESCRIPTION = 'Turkiye nin ilk kapsamli lipodem hasta platformu. Bilimsel bilgi, interaktif araclar, uzman doktor rehberi.'

export function createMetadata({
  title,
  description,
  path = '',
  image,
  type = 'website',
  noIndex = false,
}: {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/api/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description: description ?? DEFAULT_DESCRIPTION,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: description ?? DEFAULT_DESCRIPTION,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'tr_TR',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description ?? DEFAULT_DESCRIPTION,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  }
}

// Layout bazinda title template
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lipodem Turkiye | Turkiye nin Kapsamli Lipodem Platformu',
    template: '%s | Lipodem Turkiye',
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    'lipodem', 'lipödem', 'lipodem nedir', 'lipodem tedavisi',
    'lipodem belirtileri', 'lipodem ameliyati', 'lipodem diyeti',
    'lipodem doktoru', 'lipodem klinigi',
  ],
  authors: [{ name: 'Lipodem Turkiye' }],
  creator: 'Lipodem Turkiye',
  publisher: 'Lipodem Turkiye',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
```

**Her sayfa tipi icin metadata ornekleri:**

```typescript
// Ana sayfa
// app/(marketing)/page.tsx
export const metadata = createMetadata({
  title: 'Lipodem Turkiye | Turkiye nin Kapsamli Lipodem Platformu',
  description: 'Lipodem hakkinda bilimsel bilgi, semptom testi, klinik bulucu ve kisisellestirilmis programlar. Yalniz degilsiniz.',
  path: '/',
})

// Blog makalesi (dinamik)
// app/(marketing)/blog/[slug]/page.tsx
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getContentBySlug('blog', slug)
  if (!post) return {}

  return createMetadata({
    title: post.meta.seoTitle ?? post.meta.title,
    description: post.meta.seoDescription ?? post.meta.description,
    path: `/blog/${slug}`,
    image: post.meta.featuredImage,
    type: 'article',
  })
}

// Klinik sayfasi (dinamik)
// app/(marketing)/klinikler/[sehir]/page.tsx
export async function generateMetadata({ params }: { params: Promise<{ sehir: string }> }): Promise<Metadata> {
  const { sehir } = await params
  const cityData = await getCityData(sehir)
  if (!cityData) return {}

  return createMetadata({
    title: `Lipodem Doktoru ${cityData.name}: Uzman Listesi (2026)`,
    description: `${cityData.name} sehrinde lipodem tedavisi yapan uzman doktorlar ve klinikler. Fiyatlar, tedavi secenekleri, hasta yorumlari.`,
    path: `/klinikler/${sehir}`,
  })
}
```

### 8.2 Dinamik OG Image Generation

```tsx
// src/app/api/og/route.tsx
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

// Modül seviyesinde font yukleme (server-hoist-static-io kurali)
const interBold = fetch(
  new URL('../../../public/fonts/Inter-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'Lipodem Turkiye'
  const subtitle = searchParams.get('subtitle') ?? 'Turkiye nin Kapsamli Lipodem Platformu'

  const fontData = await interBold

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #F0FDFA 0%, #FAF5FF 50%, #FFF7ED 100%)',
          padding: '60px 80px',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: '#0D9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            LT
          </div>
          <span style={{ fontSize: 24, fontWeight: 600, marginLeft: 16, color: '#0D9488' }}>
            Lipodem Turkiye
          </span>
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#292524',
            lineHeight: 1.2,
            maxWidth: 900,
            marginBottom: 20,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 24,
            color: '#78716C',
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          {subtitle}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
```

### 8.3 Sitemap

```typescript
// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getAllContent } from '@/lib/mdx'

const SITE_URL = 'https://lipodemturkiye.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Statik sayfalar
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/lipodem-nedir`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/lipodem-tedavisi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/lipodem-beslenme`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/lipodem-egzersiz`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/lipodem-ruh-sagligi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/lipodem-turkiye-rehberi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/klinikler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/doktorlar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/araclar`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/araclar/semptom-testi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: `${SITE_URL}/hikayeler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/premium`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/iletisim`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  // Blog makaleleri
  const blogPosts = await getAllContent('blog')
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Cluster makaleleri
  const clusterPages = await getAllContent('pages')
  const clusterSitemap: MetadataRoute.Sitemap = clusterPages.map((page) => ({
    url: `${SITE_URL}/${page.slug}`,
    lastModified: new Date(page.updatedAt ?? page.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Sehir klinik sayfalari (81 il)
  const cities = (await import('@/data/cities.json')).default
  const cityPages: MetadataRoute.Sitemap = cities.map((city: { slug: string }) => ({
    url: `${SITE_URL}/klinikler/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...clusterSitemap, ...cityPages]
}
```

### 8.4 robots.ts

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/hesap/', '/api/', '/topluluk/'],
      },
    ],
    sitemap: 'https://lipodemturkiye.com/sitemap.xml',
  }
}
```

### 8.5 JSON-LD Schema

```tsx
// src/components/seo/json-ld.tsx

// Genel Organization schema (tum sayfalarda)
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Lipodem Turkiye',
    url: 'https://lipodemturkiye.com',
    logo: 'https://lipodemturkiye.com/images/logo.png',
    description: 'Turkiye nin ilk kapsamli lipodem hasta platformu.',
    sameAs: [
      'https://instagram.com/lipodemturkiye',
      'https://youtube.com/@lipodemturkiye',
    ],
    medicalSpecialty: 'Lipedema',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Blog makalesi icin Article schema
export function ArticleSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  author,
  image,
  url,
}: {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  image?: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lipodem Turkiye',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lipodemturkiye.com/images/logo.png',
      },
    },
    image: image ?? `https://lipodemturkiye.com/api/og?title=${encodeURIComponent(title)}`,
    mainEntityOfPage: url,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ schema
export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb schema
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// LocalBusiness schema (klinik sayfalari)
export function ClinicSchema({
  name,
  address,
  phone,
  url,
  geo,
  priceRange,
}: {
  name: string
  address: string
  phone: string
  url: string
  geo: { lat: number; lng: number }
  priceRange: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address,
      addressCountry: 'TR',
    },
    telephone: phone,
    url,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.lat,
      longitude: geo.lng,
    },
    priceRange,
    medicalSpecialty: 'PlasticSurgery',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### 8.6 Gelecek Ingilizce Desteği Icin Hazirlik

```tsx
// src/app/layout.tsx -- hreflang hazirlik
// Simdilik sadece Turkce, gelecekte eklenir:
// <link rel="alternate" hreflang="tr" href="https://lipodemturkiye.com/..." />
// <link rel="alternate" hreflang="en" href="https://lipodemturkiye.com/en/..." />
// <link rel="alternate" hreflang="x-default" href="https://lipodemturkiye.com/..." />
```

---

## 9. Monitoring & Analytics

### 9.1 Vercel Analytics + Speed Insights

```tsx
// src/app/layout.tsx -- dynamic import ile geciktirilmis yukleme
import dynamic from 'next/dynamic'

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(m => m.Analytics),
  { ssr: false }
)
const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(m => m.SpeedInsights),
  { ssr: false }
)

// Layout icinde:
<Analytics />
<SpeedInsights />
```

### 9.2 Custom Event Tracking

```typescript
// src/lib/analytics.ts

// Event type-safe tanimlari
type AnalyticsEvent =
  | { name: 'symptom_test_start' }
  | { name: 'symptom_test_complete'; properties: { score: number; stage: string } }
  | { name: 'clinic_click'; properties: { clinicSlug: string; city: string } }
  | { name: 'doctor_click'; properties: { doctorSlug: string } }
  | { name: 'pdf_download'; properties: { type: 'symptom_report' | 'nutrition_plan' } }
  | { name: 'newsletter_signup' }
  | { name: 'premium_cta_click'; properties: { source: string; tier: string } }
  | { name: 'search_query'; properties: { query: string; resultCount: number } }
  | { name: 'article_share'; properties: { slug: string; platform: string } }
  | { name: 'tool_use'; properties: { tool: string } }

export function trackEvent(event: AnalyticsEvent) {
  // Vercel Analytics
  if (typeof window !== 'undefined' && (window as any).va) {
    ;(window as any).va('event', event)
  }

  // GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event.name, 'properties' in event ? event.properties : {})
  }
}
```

### 9.3 Sentry Entegrasyonu

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,       // %10 performance tracing
  replaysSessionSampleRate: 0,  // Session replay devre disi (performans)
  replaysOnErrorSampleRate: 1.0, // Hata aninda replay
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === 'production',
})
```

```typescript
// sentry.server.config.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
  enabled: process.env.NODE_ENV === 'production',
})
```

```typescript
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config')
  }
}

export const onRequestError = Sentry.captureRequestError
```

---

## 10. Deployment & CI/CD

### 10.1 vercel.json

```json
{
  "framework": "nextjs",
  "regions": ["fra1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(self)" },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com https://*.sentry.io; frame-src 'none';"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=86400, stale-while-revalidate=604800" }
      ]
    }
  ]
}
```

### 10.2 Environment Variables

```bash
# .env.example

# --- App ---
NEXT_PUBLIC_SITE_URL=https://lipodemturkiye.com

# --- Database ---
DATABASE_URL=postgresql://user:pass@host:5432/lipodem?sslmode=require

# --- Auth ---
NEXTAUTH_URL=https://lipodemturkiye.com
NEXTAUTH_SECRET=your-secret-here
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
RESEND_API_KEY=

# --- Analytics ---
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# --- Sentry ---
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_DSN=
SENTRY_AUTH_TOKEN=

# --- Payment ---
IYZICO_API_KEY=
IYZICO_SECRET_KEY=
IYZICO_BASE_URL=https://api.iyzipay.com

# --- Revalidation ---
REVALIDATION_SECRET=your-webhook-secret
```

### 10.3 next.config.ts (Tam)

```typescript
// next.config.ts
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

const nextConfig: NextConfig = {
  // Sayfa uzantilari
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // Gorsel optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.googleusercontent.com' },
    ],
  },

  // Bundle analyzer (gelistirme)
  ...(process.env.ANALYZE === 'true' && {
    experimental: {},
  }),

  // Paket import optimizasyonu (bundle-barrel-imports kurali)
  // Next.js 13.5+ otomatik optimize eder, ek config gerekirse:
  optimizePackageImports: [
    'lucide-react',
    'date-fns',
  ],

  // Redirect'ler
  async redirects() {
    return [
      // www -> non-www (Vercel otomatik yapar, yedek)
      // Eski URL'lerden yenilere
      {
        source: '/lipodem-hakkinda',
        destination: '/lipodem-nedir',
        permanent: true,
      },
    ]
  },

  // Rewrite'lar
  async rewrites() {
    return [
      // Ozel rewrites gerekirse
    ]
  },

  // Webpack konfigurasyonu
  webpack: (config, { isServer }) => {
    // SVG import desteği (gerekirse)
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  // Sentry entegrasyonu
  // Sentry Next.js SDK otomatik yapilandirir

  // Strict mode
  reactStrictMode: true,

  // Powered by header'i kaldır
  poweredByHeader: false,

  // Compression (Vercel otomatik yapar)
  compress: true,
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})

export default withMDX(nextConfig)
```

### 10.4 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci

      - name: TypeScript check
        run: npm run typecheck

      - name: ESLint
        run: npm run lint

      - name: Prettier check
        run: npm run format:check

      - name: Unit tests
        run: npm run test

  build:
    runs-on: ubuntu-latest
    needs: quality
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci
      - run: npm run build

  lighthouse:
    runs-on: ubuntu-latest
    needs: build
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci
      - run: npm run build

      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v12
        with:
          configPath: './lighthouserc.json'
          uploadArtifacts: true
```

---

## 11. Testing Stratejisi

### 11.1 Vitest Konfigurasyonu

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}', 'tests/unit/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        'src/types/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

```typescript
// tests/setup.ts
import '@testing-library/jest-dom/vitest'
```

### 11.2 Ornek Unit Test

```typescript
// src/lib/__tests__/utils.test.ts
import { describe, it, expect } from 'vitest'
import { cn, formatDate, slugify } from '@/lib/utils'

describe('cn (className merger)', () => {
  it('iki sinifi birlestirmeli', () => {
    expect(cn('text-red-500', 'bg-white')).toBe('text-red-500 bg-white')
  })

  it('cakisan Tailwind siniflarinda sonuncuyu secmeli', () => {
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('falsy degerleri filtrelemeli', () => {
    expect(cn('text-red-500', false && 'hidden', null, undefined)).toBe('text-red-500')
  })
})

describe('slugify', () => {
  it('Turkce karakterleri donusturmeli', () => {
    expect(slugify('Lipödem Nedir')).toBe('lipodem-nedir')
    expect(slugify('İstanbul Klinikleri')).toBe('istanbul-klinikleri')
    expect(slugify('Şehir Rehberı')).toBe('sehir-rehberi')
  })
})

describe('formatDate', () => {
  it('Turkce tarih formatlama', () => {
    expect(formatDate('2026-05-15')).toBe('15 Mayis 2026')
  })
})
```

```tsx
// src/components/ui/__tests__/button.test.tsx
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('render edilmeli', () => {
    render(<Button>Tikla</Button>)
    expect(screen.getByRole('button', { name: 'Tikla' })).toBeInTheDocument()
  })

  it('click handler calistirmali', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Tikla</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('disabled durumunda tiklanamamali', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick} disabled>Tikla</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('loading durumunda aria-busy olmali', () => {
    render(<Button loading>Yukle</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })
})
```

### 11.3 Playwright E2E

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ...(process.env.CI ? [['github' as const]] : []),
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run build && npm start',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
})
```

```typescript
// tests/e2e/homepage.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Ana Sayfa', () => {
  test('basarili yuklenme ve hero goruntulenmeli', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Lipodem Turkiye/)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('semptom testi CTA linki calismali', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /semptom testi/i }).click()
    await expect(page).toHaveURL('/araclar/semptom-testi')
  })

  test('mobil navigasyon acilip kapanmali', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: /menu/i })
    await menuButton.click()

    const nav = page.getByRole('navigation')
    await expect(nav).toBeVisible()

    const closeButton = page.getByRole('button', { name: /kapat/i })
    await closeButton.click()
    await expect(nav).not.toBeVisible()
  })

  test('newsletter formu calismali', async ({ page }) => {
    await page.goto('/')
    const emailInput = page.getByPlaceholder(/email/i)
    await emailInput.fill('test@example.com')
    await page.getByRole('button', { name: /abone/i }).click()
    await expect(page.getByText(/basariyla/i)).toBeVisible()
  })
})

test.describe('Semptom Testi', () => {
  test('tum adimlari tamamlayabilmeli', async ({ page }) => {
    await page.goto('/araclar/semptom-testi')

    // Ilk soru
    await expect(page.getByText(/soru 1/i)).toBeVisible()
    await page.getByRole('radio').first().click()
    await page.getByRole('button', { name: /sonraki/i }).click()

    // Ilerleme cubugu guncellendigini kontrol et
    await expect(page.getByText(/soru 2/i)).toBeVisible()
  })
})
```

### 11.4 Lighthouse CI

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/lipodem-nedir",
        "http://localhost:3000/araclar/semptom-testi",
        "http://localhost:3000/klinikler/istanbul"
      ],
      "numberOfRuns": 3,
      "startServerCommand": "npm start"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["warn", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.95 }],
        "first-contentful-paint": ["warn", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["warn", { "maxNumericValue": 200 }]
      }
    }
  }
}
```

---

## 12. Kod Kalitesi

### 12.1 ESLint Konfigurasyonu

```json
// .eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "next/typescript"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error",
    "no-var": "error",
    "import/no-duplicates": "error"
  },
  "overrides": [
    {
      "files": ["*.test.ts", "*.test.tsx"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "off"
      }
    }
  ]
}
```

### 12.2 Prettier Konfigurasyonu

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

```
// .prettierignore
node_modules
.next
out
build
coverage
public/pagefind
prisma/migrations
```

### 12.3 TypeScript Strict Mode

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/content/*": ["./content/*"],
      "@/data/*": ["./data/*"]
    },
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 12.4 Husky + lint-staged

```bash
# .husky/pre-commit
npx lint-staged
```

lint-staged konfigurasyonu package.json icinde tanimli (Bolum 0'da gosterildi).

### 12.5 Utility Fonksiyonlari

```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind sinif birlestirici (cakisan siniflari akilli birlestirme)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Turkce slug olusturma
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/İ/g, 'i')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Turkce tarih formatlama
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Okuma suresi hesaplama
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200 // Turkce icin biraz daha dusuk
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Fiyat formatlama (TL)
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// URL guvenli Turkce karakter kontrolu
export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)
}
```

---

## 13. Tailwind CSS Konfigurasyonu

```css
/* src/styles/globals.css */
@import "tailwindcss";

/* CSS Custom Properties -- Dark mode hazirlik */
:root {
  --color-primary: #0D9488;
  --color-primary-light: #14B8A6;
  --color-primary-dark: #0F766E;
  --color-secondary: #A855F7;
  --color-accent: #22C55E;
  --color-warm: #F59E0B;
  --color-bg: #FAFAF9;
  --color-text: #44403C;
  --color-text-heading: #292524;
  --color-text-muted: #78716C;
  --color-border: #E7E5E4;
  --font-sans: var(--font-inter), system-ui, -apple-system, sans-serif;
  --container-max: 1280px;
}

/* Turkce karakter render optimizasyonu */
body {
  font-feature-settings: "kern" 1, "liga" 1;
  text-rendering: optimizeLegibility;
}

/* Sayfa transitionlari icin smooth scroll */
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Uzun listelerde content-visibility optimizasyonu (rendering-content-visibility kurali) */
.content-visibility-auto {
  content-visibility: auto;
  contain-intrinsic-size: auto 200px;
}

/* Focus-visible global stil */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip navigation link (erisilebilirlik) */
.skip-nav {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 0.5rem 1rem;
  background: var(--color-primary);
  color: white;
  font-weight: 600;
  border-radius: 0 0 0.5rem 0;
}

.skip-nav:focus {
  left: 0;
}
```

```typescript
// tailwind.config.ts (Tailwind v4 ile cogu config CSS icinde tanimlanir,
// ancak uyumluluk ve araclarin gerektirdigi durumlarda JS config kullanilabilir)
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        xs: '320px',
      },
      colors: {
        primary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
          950: '#042F2E',
        },
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
        'slide-down': 'slideDown 200ms ease-out',
        'scale-up': 'scaleUp 200ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
}

export default config
```

---

## 14. Vercel React Best Practices -- Proje Ozel Uygulama Ozeti

### Kritik Kurallar (Her PR'da Kontrol Edilmeli)

| Kural | Uygulama | Etki |
|-------|----------|------|
| `async-parallel` | Birden fazla veri cekiminde Promise.all() kullan | 2-10x hizlanma |
| `async-suspense-boundaries` | Layout parcalarini hemen goster, veriyi stream et | Daha hizli FCP |
| `bundle-barrel-imports` | Direct import kullan, barrel files olusturma | 200-800ms tasarruf |
| `bundle-dynamic-imports` | Harita, PDF, editor gibi agir komponentleri lazy load et | TTI iyilestirme |
| `bundle-defer-third-party` | Analytics, Sentry hydration sonrasi yukle | LCP iyilestirme |
| `server-auth-actions` | Her Server Action icinde auth kontrolu | Guvenlik |
| `server-serialization` | SC'den CC'ye minimum veri gonder | Bundle boyutu |
| `server-cache-react` | React.cache() ile per-request dedup | DB sorgu azaltma |
| `server-no-shared-module-state` | Module-level mutable state kullanma | Guvenlik |

### Orta Oncelikli Kurallar

| Kural | Uygulama |
|-------|----------|
| `rerender-no-inline-components` | Komponentleri baska komponentlerin icinde tanimlama |
| `rerender-derived-state-no-effect` | State turetmeyi render sirasinda yap, useEffect icinde degil |
| `rerender-functional-setstate` | setState(prev => ...) kalibini kullan |
| `rendering-content-visibility` | Uzun listelerde `content-visibility: auto` kullan |
| `rendering-conditional-render` | `condition && <X />` yerine `condition ? <X /> : null` kullan |
| `client-passive-event-listeners` | Scroll event listener'larinda passive: true kullan |
| `js-early-exit` | Fonksiyonlarda erken return kullan |
| `js-set-map-lookups` | Tekrarlayan lookup'larda Set/Map kullan |

---

## 15. Proje Baslatma Kontrol Listesi

```
[ ] Node.js 20+ kurulumu
[ ] npm install
[ ] .env.local dosyasi olustur (.env.example'dan kopyala)
[ ] PostgreSQL veritabani olustur (Vercel Postgres veya Neon)
[ ] DATABASE_URL'yi .env.local'a ekle
[ ] npx prisma db push (schema uygula)
[ ] npx prisma db seed (ornek veri yukle)
[ ] Google OAuth Client ID/Secret al
[ ] Resend API Key al
[ ] npm run dev (gelistirme sunucusu)
[ ] http://localhost:3000 adresini kontrol et
[ ] npm run build (hatasiz derlenmeli)
[ ] npm run lint (hata olmamali)
[ ] npm run typecheck (hata olmamali)
[ ] Vercel'e deploy et (vercel CLI veya GitHub entegrasyonu)
[ ] Environment degiskenlerini Vercel dashboard'a ekle
[ ] Custom domain bagla (lipodemturkiye.com)
[ ] SSL otomatik (Vercel)
[ ] Sentry DSN olustur ve ekle
[ ] GA4 Measurement ID olustur ve ekle
```
