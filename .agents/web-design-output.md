# Lipodem Turkiye -- Kapsamli Web Tasarim Sistemi

**Tarih:** 24 Mayis 2026
**Referans:** product-marketing.md, marketing-psychology-output.md, site-architecture-output.md, pricing-output.md, competitor-profiles-output.md, customer-research-output.md
**Teknoloji:** Next.js 15 (App Router) + Tailwind CSS 4 + Vercel
**Yaklasim:** Mobile-first, erisilebilir, performans oncelikli

---

## 1. Renk Sistemi

### 1.1 Ana Palet (Primary Palette)

Marketing psikoloji ciktisina uygun: teal + lavanta + nane + krem. Guven = mavi-yesil tonlari, umut = sicak aksan renkleri.

#### Birincil Renk (Teal -- Guven ve Tibbi Otorite)

| Token | HEX | RGB | HSL | Tailwind | Kullanim |
|-------|-----|-----|-----|----------|----------|
| `primary-50` | `#F0FDFA` | 240, 253, 250 | 166, 76%, 97% | `teal-50` | Arka plan vurgulari |
| `primary-100` | `#CCFBF1` | 204, 251, 241 | 167, 85%, 89% | `teal-100` | Hafif vurgu alanlari |
| `primary-200` | `#99F6E4` | 153, 246, 228 | 168, 84%, 78% | `teal-200` | Hover arka planlari |
| `primary-300` | `#5EEAD4` | 94, 234, 212 | 171, 77%, 64% | `teal-300` | Ikonlar, aksan cizgiler |
| `primary-400` | `#2DD4BF` | 45, 212, 191 | 173, 80%, 50% | `teal-400` | Ikincil butonlar |
| `primary-500` | `#14B8A6` | 20, 184, 166 | 173, 80%, 40% | `teal-500` | Ana marka rengi, linkler |
| `primary-600` | `#0D9488` | 13, 148, 136 | 175, 84%, 32% | `teal-600` | Birincil butonlar, CTA |
| `primary-700` | `#0F766E` | 15, 118, 110 | 175, 77%, 26% | `teal-700` | Hover durumu butonlar |
| `primary-800` | `#115E59` | 17, 94, 89 | 176, 69%, 22% | `teal-800` | Aktif durum, basliklar |
| `primary-900` | `#134E4A` | 19, 78, 74 | 176, 61%, 19% | `teal-900` | Koyu vurgu alanlari |
| `primary-950` | `#042F2E` | 4, 47, 46 | 179, 84%, 10% | `teal-950` | Footer arka plan |

**Ana marka rengi:** `primary-600` (#0D9488) -- WCAG AA buyuk metin gecerli beyaz uzerinde. Butonlar, CTA'lar, aktif navigasyon.

#### Ikincil Renk (Lavanta/Mor -- Empati ve Sicaklik)

| Token | HEX | RGB | HSL | Tailwind | Kullanim |
|-------|-----|-----|-----|----------|----------|
| `secondary-50` | `#FAF5FF` | 250, 245, 255 | 270, 100%, 98% | `purple-50` | Hafif arka planlar |
| `secondary-100` | `#F3E8FF` | 243, 232, 255 | 269, 100%, 95% | `purple-100` | Kart arka planlari |
| `secondary-200` | `#E9D5FF` | 233, 213, 255 | 269, 100%, 92% | `purple-200` | Badge arka planlari |
| `secondary-300` | `#D8B4FE` | 216, 180, 254 | 269, 97%, 85% | `purple-300` | Ikonlar |
| `secondary-400` | `#C084FC` | 192, 132, 252 | 270, 95%, 75% | `purple-400` | Aksan elemanlari |
| `secondary-500` | `#A855F7` | 168, 85, 247 | 271, 91%, 65% | `purple-500` | Premium vurgusu |
| `secondary-600` | `#9333EA` | 147, 51, 234 | 271, 81%, 56% | `purple-600` | Premium CTA |
| `secondary-700` | `#7E22CE` | 126, 34, 206 | 272, 72%, 47% | `purple-700` | Koyu vurgu |

**Kullanim:** Premium ozellikler, duygusal destek icerikleri, hasta hikayeleri arka planlari, topluluk bolumu.

#### Ucuncul Renk (Nane Yesili -- Umut ve Iyilesme)

| Token | HEX | RGB | HSL | Tailwind | Kullanim |
|-------|-----|-----|-----|----------|----------|
| `accent-50` | `#F0FDF4` | 240, 253, 244 | 138, 76%, 97% | `emerald-50` | Basari arka planlari |
| `accent-100` | `#DCFCE7` | 220, 252, 231 | 141, 84%, 93% | `emerald-100` | Pozitif mesaj alanlari |
| `accent-200` | `#BBF7D0` | 187, 247, 208 | 141, 79%, 85% | `emerald-200` | Ilerleme gostergesi |
| `accent-300` | `#86EFAC` | 134, 239, 172 | 142, 71%, 73% | `emerald-300` | Basari ikonlari |
| `accent-400` | `#4ADE80` | 74, 222, 128 | 142, 69%, 58% | `emerald-400` | Tamamlanmis durumlar |
| `accent-500` | `#22C55E` | 34, 197, 94 | 142, 71%, 45% | `emerald-500` | Basari bildirimi |
| `accent-600` | `#16A34A` | 22, 163, 74 | 142, 76%, 36% | `emerald-600` | Onay butonlari |

**Kullanim:** Ilerleme cubuklari, basari mesajlari, tamamlama animasyonlari, pozitif istatistikler.

#### Sicak Aksan (Amber -- Onemli Bilgi ve Dikkat)

| Token | HEX | RGB | HSL | Tailwind | Kullanim |
|-------|-----|-----|-----|----------|----------|
| `warm-50` | `#FFFBEB` | 255, 251, 235 | 48, 100%, 96% | `amber-50` | Bilgi kutusu arka plan |
| `warm-100` | `#FEF3C7` | 254, 243, 199 | 48, 96%, 89% | `amber-100` | Uyari arka plan |
| `warm-200` | `#FDE68A` | 253, 230, 138 | 48, 97%, 77% | `amber-200` | Aksan cizgiler |
| `warm-400` | `#FBBF24` | 251, 191, 36 | 43, 96%, 56% | `amber-400` | Kurucu uye rozeti |
| `warm-500` | `#F59E0B` | 245, 158, 11 | 38, 92%, 50% | `amber-500` | Onemli vurgular |
| `warm-600` | `#D97706` | 217, 119, 6 | 32, 95%, 44% | `amber-600` | Aktif uyari |

**Kullanim:** Kurucu uyelik rozeti, onemli bilgi kutulari, "yeni" etiketleri, fiyatlandirmada vurgu.

### 1.2 Semantik Renkler

| Anlam | Renk Tokeni | HEX | Tailwind | Kullanim |
|-------|-------------|-----|----------|----------|
| **Basari** | `success-500` | `#22C55E` | `green-500` | Form onay, test tamamlama, basarili islem |
| **Basari BG** | `success-50` | `#F0FDF4` | `green-50` | Basari mesaji arka plan |
| **Uyari** | `warning-500` | `#F59E0B` | `amber-500` | Dikkat ceken bilgi, eksik alan |
| **Uyari BG** | `warning-50` | `#FFFBEB` | `amber-50` | Uyari mesaji arka plan |
| **Hata** | `error-500` | `#EF4444` | `red-500` | Form hatasi, basarisiz islem |
| **Hata BG** | `error-50` | `#FEF2F2` | `red-50` | Hata mesaji arka plan |
| **Bilgi** | `info-500` | `#0D9488` | `teal-500` | Bilgilendirme mesajlari (primary ile ayni) |
| **Bilgi BG** | `info-50` | `#F0FDFA` | `teal-50` | Bilgi kutusu arka plan |

**UYARI:** Parlak kirmizi (#EF4444) SADECE hata durumlarinda kullanilir. Saglik kaygisi tetiklemekten kacinmak icin asla icerik ici vurgu olarak kullanilmamali.

### 1.3 Notr Tonlar

| Token | HEX | RGB | Tailwind | Kullanim |
|-------|-----|-----|----------|----------|
| `neutral-0` | `#FFFFFF` | 255, 255, 255 | `white` | Saf beyaz, kart arka plan |
| `neutral-50` | `#FAFAF9` | 250, 250, 249 | `stone-50` | Sayfa arka plani (sicak beyaz) |
| `neutral-100` | `#F5F5F4` | 245, 245, 244 | `stone-100` | Bolum arka plani (alternatif) |
| `neutral-200` | `#E7E5E4` | 231, 229, 228 | `stone-200` | Cizgiler, ayiricilar, input kenarliklari |
| `neutral-300` | `#D6D3D1` | 214, 211, 209 | `stone-300` | Deaktif kenarliklar |
| `neutral-400` | `#A8A29E` | 168, 162, 158 | `stone-400` | Placeholder metni, deaktif ikon |
| `neutral-500` | `#78716C` | 120, 113, 108 | `stone-500` | Yardimci metin, meta bilgi |
| `neutral-600` | `#57534E` | 87, 83, 78 | `stone-600` | Ikincil metin |
| `neutral-700` | `#44403C` | 68, 64, 60 | `stone-700` | Govde metni |
| `neutral-800` | `#292524` | 41, 37, 36 | `stone-800` | Basliklar |
| `neutral-900` | `#1C1917` | 28, 25, 23 | `stone-900` | En koyu metin |
| `neutral-950` | `#0C0A09` | 12, 10, 9 | `stone-950` | Footer koyu arka plan |

**Not:** Saf siyah (#000000) KULLANILMAZ. Siyah yerine `neutral-800` veya `neutral-900` tercih edilir -- soguk ve klinik algi yerine sicak ve insancil ton.

**Sicak notr secimi gecrekcesi:** `stone` serisi hafif sicak alt tona sahiptir. Bu, saglik platformunun "hastane soguklugundan" kacinmasini saglar. Krem/bej altyapi ile empati mesaji guclenir.

### 1.4 Gradyanlar

```css
/* Hero bolumu ana gradyan */
.gradient-hero {
  background: linear-gradient(135deg, #F0FDFA 0%, #FAF5FF 50%, #FFF7ED 100%);
}
/* Tailwind: bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50 */

/* Kart vurgu gradyani */
.gradient-card {
  background: linear-gradient(180deg, #FFFFFF 0%, #F0FDFA 100%);
}
/* Tailwind: bg-gradient-to-b from-white to-teal-50 */

/* Premium bolum gradyani */
.gradient-premium {
  background: linear-gradient(135deg, #FAF5FF 0%, #F0FDFA 100%);
}
/* Tailwind: bg-gradient-to-br from-purple-50 to-teal-50 */

/* CTA buton gradyani (ozel durumlar icin) */
.gradient-cta {
  background: linear-gradient(135deg, #0D9488 0%, #115E59 100%);
}
/* Tailwind: bg-gradient-to-br from-teal-600 to-teal-800 */

/* Kurucu uyelik ozel gradyan */
.gradient-founder {
  background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%);
}
/* Tailwind: bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 */

/* Footer gradyan */
.gradient-footer {
  background: linear-gradient(180deg, #134E4A 0%, #042F2E 100%);
}
/* Tailwind: bg-gradient-to-b from-teal-900 to-teal-950 */

/* Evre gostergesi gradyanlari */
.gradient-stage-1 { background: linear-gradient(90deg, #22C55E, #4ADE80); }
.gradient-stage-2 { background: linear-gradient(90deg, #FBBF24, #F59E0B); }
.gradient-stage-3 { background: linear-gradient(90deg, #F97316, #EA580C); }
.gradient-stage-4 { background: linear-gradient(90deg, #EF4444, #DC2626); }
```

### 1.5 Dark Mode Karari

**Karar: Dark mode LANSMANDA UYGULANMAYACAK.**

**Gerekce:**
- Saglik platformu gursel icerik yogun -- tibbi gorseller, infografikler, tablolar. Dark mode'da bunlarin uyumlulugu ek is yukudur.
- Hedef kitle (25-55 yas Turk kadinlar) dark mode talebinde dusuk oncelik.
- MVP icin gelistirme suresi kritik -- lansman 6-7 Haziran 2026.
- Oncelik: Erisilebilirlik (WCAG AA) ve performans.

**Gelecek plan:** Ay 6 sonrasi kullanici talebi ve analytics verilerine gore dark mode degerlendirmesi yapilacak. Hazirlik: Tum renk tokenleri CSS custom property olarak tanimlanacak, gecis kolayligi icin.

```css
:root {
  --color-primary: #0D9488;
  --color-bg: #FAFAF9;
  --color-text: #44403C;
  /* ... */
}
```

### 1.6 Erisilebilirlik (Kontrast Oranlari)

| Kombinasyon | Kontrast Orani | WCAG AA (Normal) | WCAG AA (Buyuk) | Kullanim |
|-------------|----------------|------------------|-----------------|----------|
| `primary-600` (#0D9488) uzerinde beyaz | 4.53:1 | GECER | GECER | Buton metni |
| `primary-700` (#0F766E) uzerinde beyaz | 5.71:1 | GECER | GECER | Hover buton metni |
| `primary-800` (#115E59) uzerinde beyaz | 7.56:1 | GECER | GECER | Baslik vurgusu |
| `neutral-700` (#44403C) uzerinde beyaz | 8.67:1 | GECER | GECER | Govde metni |
| `neutral-800` (#292524) uzerinde beyaz | 13.56:1 | GECER | GECER | Basliklar |
| `neutral-500` (#78716C) uzerinde beyaz | 4.54:1 | GECER | GECER | Yardimci metin |
| `error-500` (#EF4444) uzerinde beyaz | 3.94:1 | BASARISIZ | GECER | Sadece buyuk metin/ikon |
| `error-700` (#B91C1C) uzerinde beyaz | 6.05:1 | GECER | GECER | Hata metni icin kullan |

**Kural:** Metin icin asla `primary-400` veya daha acik tonlar kullanma. Minimum `primary-600` gerekli.

### 1.7 Renk Kullanim Kurallari

| Alan | Birincil Renk | Ikincil Renk | Aksan | Notr |
|------|---------------|--------------|-------|------|
| **Header/Nav** | Active link, logo | -- | -- | BG: beyaz, metin: neutral-800 |
| **Hero bolumu** | CTA butonu | -- | Istatistik vurgu | BG: gradient-hero |
| **Icerik govdesi** | Link rengi, in-text CTA | Bilgi kutusu kenarligi | Onemli vurgu | BG: neutral-50, metin: neutral-700 |
| **Kartlar** | Ikon, baslik hoveri | Premium kart kenarligi | Badge | BG: beyaz, kenarlik: neutral-200 |
| **Formlar** | Focus ring, submit buton | -- | Hata durumu | Input: neutral-200 kenarlik |
| **Footer** | Link hover | -- | -- | BG: teal-900/950, metin: teal-100 |
| **Premium** | -- | Ana renk, CTA | Kurucu rozet | BG: gradient-premium |
| **Semptom testi** | Ilerleme cubugu, butonlar | -- | Sonuc vurgusu | BG: beyaz |
| **Topluluk** | Aktiflestirme | Kategori etiketleri | Yeni icerik | BG: neutral-50 |

---

## 2. Tipografi

### 2.1 Font Aileleri

#### Basliklar: Inter

| Ozellik | Deger |
|---------|-------|
| Font | Inter |
| Kaynak | Google Fonts / next/font |
| Turler | Variable font (300-800) |
| Turkce destek | Tam (I/i, O/o, U/u, S/s, C/c, G/g) |
| Neden | Temiz, modern, tibbi ciddiyete uygun, mukemmel okunabilirlik, genis agirlik skalasi |

#### Govde Metni: Inter

| Ozellik | Deger |
|---------|-------|
| Font | Inter |
| Kaynak | Google Fonts / next/font |
| Turler | Variable font (300-800) |
| Turkce destek | Tam |
| Neden | Baslik ve govde icin tek font ailesi: tutarlilik, daha az font yukleme, performans |

**Not:** Tek font ailesi (Inter) hem basliklar hem govde icin kullanilir. Farklilik font-weight ve size ile saglanir. Bu yaklasim:
- Sayfa yukleme suresini kisaltir (tek font dosyasi)
- Gorsel tutarliligi arttirir
- Tailwind entegrasyonunu basitlestirir
- Inter'in genis agirlik skalasi (300-800) yeterli cesitliligi saglar

#### next/font Entegrasyonu

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'latin-ext'], // latin-ext Turkce karakterleri icerir
  display: 'swap',                 // FOUT yerine FOIT onleme
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
```

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
};
```

### 2.2 Type Scale

#### Desktop (>= 1024px)

| Eleman | Boyut (px) | Boyut (rem) | Satir Araligi | Harf Araligi | Agirlik | Tailwind |
|--------|-----------|-------------|---------------|-------------|---------|----------|
| H1 | 48px | 3rem | 1.2 (57.6px) | -0.025em | 800 | `text-5xl font-extrabold leading-tight tracking-tight` |
| H2 | 36px | 2.25rem | 1.25 (45px) | -0.02em | 700 | `text-4xl font-bold leading-snug tracking-tight` |
| H3 | 30px | 1.875rem | 1.3 (39px) | -0.015em | 700 | `text-3xl font-bold leading-snug` |
| H4 | 24px | 1.5rem | 1.35 (32.4px) | -0.01em | 600 | `text-2xl font-semibold leading-snug` |
| H5 | 20px | 1.25rem | 1.4 (28px) | -0.005em | 600 | `text-xl font-semibold leading-normal` |
| H6 | 18px | 1.125rem | 1.4 (25.2px) | 0 | 600 | `text-lg font-semibold leading-normal` |
| Body L | 18px | 1.125rem | 1.75 (31.5px) | 0 | 400 | `text-lg leading-relaxed` |
| Body | 16px | 1rem | 1.75 (28px) | 0 | 400 | `text-base leading-relaxed` |
| Body S | 14px | 0.875rem | 1.7 (23.8px) | 0 | 400 | `text-sm leading-relaxed` |
| Caption | 12px | 0.75rem | 1.5 (18px) | 0.02em | 400 | `text-xs leading-normal tracking-wide` |
| Overline | 12px | 0.75rem | 1.5 (18px) | 0.1em | 600 | `text-xs font-semibold uppercase tracking-widest` |

#### Mobil (< 768px)

| Eleman | Boyut (px) | Boyut (rem) | Satir Araligi | Tailwind |
|--------|-----------|-------------|---------------|----------|
| H1 | 32px | 2rem | 1.25 (40px) | `text-3xl md:text-5xl` |
| H2 | 28px | 1.75rem | 1.3 (36.4px) | `text-2xl md:text-4xl` |
| H3 | 24px | 1.5rem | 1.3 (31.2px) | `text-xl md:text-3xl` |
| H4 | 20px | 1.25rem | 1.35 (27px) | `text-lg md:text-2xl` |
| H5 | 18px | 1.125rem | 1.4 (25.2px) | `text-base md:text-xl` |
| H6 | 16px | 1rem | 1.4 (22.4px) | `text-base md:text-lg` |
| Body L | 17px | 1.0625rem | 1.75 (29.75px) | `text-base md:text-lg` |
| Body | 16px | 1rem | 1.75 (28px) | `text-base` (ayni) |
| Body S | 14px | 0.875rem | 1.7 (23.8px) | `text-sm` (ayni) |

### 2.3 Ozel Metin Stilleri

| Stil Adi | Kullanim | Desktop | Mobil | Tailwind |
|----------|----------|---------|-------|----------|
| **Stat Number** | Istatistik buyuk sayi ("370M+") | 56px / 800 / -0.03em | 40px / 800 | `text-6xl md:text-7xl font-extrabold tracking-tighter` |
| **Quote** | Hasta alintisi | 20px / 400 / italic / 1.8 | 18px | `text-xl md:text-2xl italic leading-loose text-neutral-600` |
| **Label** | Form etiketi, kucuk baslik | 14px / 500 / 0.02em | 14px | `text-sm font-medium tracking-wide` |
| **Badge Text** | Etiket, rozet icindeki metin | 12px / 600 / 0.05em | 12px | `text-xs font-semibold tracking-wider` |
| **Nav Item** | Navigasyon link metni | 15px / 500 | 16px / 500 | `text-[15px] md:text-base font-medium` |
| **Button Text** | Buton metni | 15px / 600 | 15px / 600 | `text-[15px] font-semibold` |
| **Hero Subtitle** | Hero alt basligi | 20px / 400 / 1.6 | 17px | `text-lg md:text-xl leading-relaxed text-neutral-600` |
| **Section Title** | Bolum ust etiket ("ARACLIAR") | 13px / 600 / 0.15em / uppercase | 12px | `text-xs font-semibold uppercase tracking-[0.15em] text-primary-600` |
| **Source Ref** | Kaynak referansi "[1]" | 12px / 500 / superscript | 12px | `text-xs font-medium align-super text-primary-600` |
| **Disclaimer** | Tibbi uyari metni | 13px / 400 / italic | 13px | `text-[13px] italic text-neutral-500` |

### 2.4 Font Agirlik Kullanimi

| Agirlik | Deger | Tailwind | Kullanim |
|---------|-------|----------|----------|
| Light | 300 | `font-light` | Dekoratif buyuk sayilar (cok sinirli kullanim) |
| Regular | 400 | `font-normal` | Govde metni, paragraflar, aciklamalar |
| Medium | 500 | `font-medium` | Form etiketleri, navigasyon, yardimci basliklar |
| Semi-Bold | 600 | `font-semibold` | Alt basliklar (H4-H6), buton metni, etiketler, vurgular |
| Bold | 700 | `font-bold` | Ana basliklar (H2-H3), kart basliklari |
| Extra Bold | 800 | `font-extrabold` | H1, istatistik buyuk sayilar, hero basligi |

### 2.5 Turkce Karakter Ozel Kontrol

```css
/* Turkce karakter render optimizasyonu */
body {
  font-feature-settings: "kern" 1, "liga" 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* Turkce buyuk I/kucuk i sorunu: Inter bu sorunu dogal olarak cozer.
   CSS text-transform: uppercase kullaniminda dikkat:
   - "istanbul" -> "ISTANBUL" degil "ISTANBUL" olmali
   - Tailwind uppercase class'i Turkce locale ile test edilmeli
*/
```

**Turkce locale uyarisi:** `text-transform: uppercase` CSS kuralinda Turkce `i` harfi `I` yerine `I` olarak render edilebilir. Cozum:
1. HTML `lang="tr"` ozniteligi kullanilmali (zaten kullaniyoruz)
2. Alternatif: Uppercase metinleri CSS yerine JavaScript `toLocaleUpperCase('tr')` ile donusturun
3. Font seviyesinde: Inter, Turkce locale'a uygun buyuk/kucuk harf eslestirmesi yapar

---

## 3. Grid ve Spacing

### 3.1 Grid Sistemi

```
Grid: 12 kolon
Gutter: 24px (mobil: 16px)
Container max-width: 1280px
Container padding: 16px (mobil), 24px (tablet), 32px (desktop)
```

**Tailwind container yapilandirmasi:**

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',    // 16px
        sm: '1rem',          // 16px
        md: '1.5rem',        // 24px
        lg: '2rem',          // 32px
        xl: '2rem',          // 32px
        '2xl': '2rem',       // 32px
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1280px',    // Max-width 1280px'de sabitlenir
      },
    },
  },
};
```

### 3.2 Breakpoints

| Isim | Aralik | Tailwind Prefix | Hedef Cihaz |
|------|--------|-----------------|-------------|
| `xs` | 0 -- 639px | (varsayilan) | Kucuk telefonlar |
| `sm` | 640 -- 767px | `sm:` | Buyuk telefonlar |
| `md` | 768 -- 1023px | `md:` | Tabletler (portrait) |
| `lg` | 1024 -- 1279px | `lg:` | Tabletler (landscape), kucuk dizustu |
| `xl` | 1280 -- 1535px | `xl:` | Dizustu, masaustu |
| `2xl` | 1536px+ | `2xl:` | Genis ekranlar |

**Ozel breakpoint:**

```javascript
// tailwind.config.ts ek
module.exports = {
  theme: {
    extend: {
      screens: {
        'xs': '320px',      // Minimum desteklenen genislik
        'tall': { 'raw': '(min-height: 800px)' }, // Uzun ekranlar
      },
    },
  },
};
```

### 3.3 Spacing Scale

Base unit: 4px.

| Token | Deger | Tailwind | Kullanim |
|-------|-------|----------|----------|
| `space-0.5` | 2px | `p-0.5` | Mikro bosluklar (ikon-metin arasi minimum) |
| `space-1` | 4px | `p-1` | Inline eleman ic boslugu |
| `space-1.5` | 6px | `p-1.5` | Badge ic bosluk |
| `space-2` | 8px | `p-2` | Yakin elemanlar arasi, kucuk kart ic |
| `space-3` | 12px | `p-3` | Kart ic bosluk (kucuk), liste itemi arasi |
| `space-4` | 16px | `p-4` | Kart ic bosluk (varsayilan), input padding |
| `space-5` | 20px | `p-5` | Ust duzey kart ic bosluk |
| `space-6` | 24px | `p-6` | Kart ic bosluk (buyuk), grid gutter |
| `space-8` | 32px | `p-8` | Bolumler arasi ic bosluk |
| `space-10` | 40px | `p-10` | Form gruplari arasi |
| `space-12` | 48px | `p-12` | Sayfa ici bolum ayirici |
| `space-16` | 64px | `p-16` | Buyuk bolumler arasi (desktop) |
| `space-20` | 80px | `p-20` | Section arasi bosluk (mobil) |
| `space-24` | 96px | `p-24` | Section arasi bosluk (desktop) |
| `space-32` | 128px | `p-32` | Hero bolumu dikey padding |

### 3.4 Section Spacing

| Sayfa Bolumu | Mobil (py) | Tablet (py) | Desktop (py) | Tailwind |
|--------------|-----------|-------------|-------------|----------|
| Hero | 48px / 48px | 64px / 64px | 96px / 96px | `py-12 md:py-16 lg:py-24` |
| Standart section | 48px / 48px | 64px / 64px | 80px / 80px | `py-12 md:py-16 lg:py-20` |
| Sikistirilmis section | 32px / 32px | 48px / 48px | 64px / 64px | `py-8 md:py-12 lg:py-16` |
| CTA banner | 32px / 32px | 48px / 48px | 48px / 48px | `py-8 md:py-12` |
| Footer | 48px / 32px | 64px / 48px | 80px / 48px | `pt-12 pb-8 md:pt-16 md:pb-12 lg:pt-20 lg:pb-12` |

### 3.5 Content Max-Width

| Icerik Tipi | Max-Width | Tailwind | Gerekce |
|-------------|-----------|----------|---------|
| Blog makalesi govde | 720px | `max-w-3xl` | Optimal okuma genisligi (60-80 karakter/satir) |
| Pillar page govde | 800px | `max-w-4xl` | Biraz daha genis, tablolar icin |
| Genel sayfa (tam icerik) | 1280px | `max-w-7xl` veya `container` | Standart container |
| Tam genislik bolumleri | 100% | `w-full` | Hero, CTA banner, harita |
| Sidebar genisligi | 320px | `w-80` | TOC sidebar, filtre paneli |
| Form genisligi | 480px | `max-w-lg` | Kayit, giris, newsletter |
| Modal/Dialog | 560px | `max-w-xl` | Bilgi modallari |
| Genis modal | 800px | `max-w-4xl` | Karsilastirma tablosu |

---

## 4. Komponent Kutuphanesi

### 4.1 Button (Buton)

#### Varyantlar

| Varyant | Kullanim | Tailwind Stilleri |
|---------|----------|-------------------|
| **Primary** | Ana CTA, form submit | `bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded-lg font-semibold transition-colors duration-150` |
| **Secondary** | Ikincil eylemler | `bg-white text-teal-600 border border-teal-600 hover:bg-teal-50 active:bg-teal-100 focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg font-semibold transition-colors duration-150` |
| **Ghost** | Ucuncul eylemler, menu | `text-teal-600 hover:bg-teal-50 active:bg-teal-100 rounded-lg font-medium transition-colors duration-150` |
| **CTA Gradient** | Hero CTA, ozel vurgu | `bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 shadow-lg hover:shadow-xl rounded-xl font-semibold transition-all duration-200` |
| **Premium** | Premium abone ol | `bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 rounded-xl font-semibold shadow-lg` |
| **Founder** | Kurucu uyelik | `bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 rounded-xl font-semibold shadow-lg` |
| **Destructive** | Silme, iptal | `bg-red-600 text-white hover:bg-red-700 rounded-lg font-semibold` |
| **Icon** | Sadece ikon (yuvarlak) | `p-2 rounded-full hover:bg-neutral-100 text-neutral-600 hover:text-neutral-800` |

#### Boyutlar

| Boyut | Padding | Font Size | Min Height | Tailwind |
|-------|---------|-----------|------------|----------|
| `sm` | 8px 16px | 13px | 32px | `px-4 py-2 text-[13px] min-h-[32px]` |
| `md` | 10px 20px | 15px | 40px | `px-5 py-2.5 text-[15px] min-h-[40px]` |
| `lg` | 12px 28px | 16px | 48px | `px-7 py-3 text-base min-h-[48px]` |
| `xl` | 16px 32px | 17px | 56px | `px-8 py-4 text-[17px] min-h-[56px]` |

#### Durumlar

| Durum | Gorsel Degisiklik |
|-------|-------------------|
| Default | Tanimli stiller |
| Hover | Arka plan koyu, golge artisi |
| Active/Pressed | Daha da koyu arka plan, golge azalmasi |
| Focus | `ring-2 ring-primary-500 ring-offset-2` (klavye navigasyonu icin) |
| Disabled | `opacity-50 cursor-not-allowed pointer-events-none` |
| Loading | Spinner ikon + metin soluk, `cursor-wait` |

**Erisilebilirlik:**
- Tum butonlarda `focus-visible` ring kullanilir (sadece klavye navigasyonunda gorunur)
- Minimum dokunma alani: 44x44px (mobil)
- Ikon butonlarda `aria-label` zorunlu
- Disabled butonlarda `aria-disabled="true"`
- Loading durumunda `aria-busy="true"` + spinner icin `aria-hidden="true"`

### 4.2 Input (Form Girisleri)

#### Text Input

```
Varsayilan:
- Yukseklik: 44px (mobil dokunma uyumlu)
- Padding: 12px 16px
- Border: 1px solid neutral-200
- Border radius: 8px (rounded-lg)
- Font: 16px (mobilde zoom onleme)
- Placeholder: neutral-400
```

**Tailwind:**
```
text-base px-4 py-3 border border-stone-200 rounded-lg 
bg-white text-stone-700 placeholder:text-stone-400
focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500
disabled:bg-stone-100 disabled:text-stone-400 disabled:cursor-not-allowed
```

**Hata durumu:**
```
border-red-500 focus:ring-red-500 focus:border-red-500
+ altinda: <p class="mt-1 text-sm text-red-600">Hata mesaji</p>
```

**Basari durumu:**
```
border-green-500 focus:ring-green-500
+ sag tarafta onay ikonu
```

#### Select / Dropdown

```
Ayni text input stilleri + sag tarafta chevron-down ikonu
appearance-none (native select stilini kaldirmak icin)
```

#### Checkbox

```
w-5 h-5 rounded border-stone-300 text-teal-600 
focus:ring-teal-500 focus:ring-2 focus:ring-offset-2
cursor-pointer
```

#### Radio

```
w-5 h-5 border-stone-300 text-teal-600 
focus:ring-teal-500 focus:ring-2 focus:ring-offset-2
cursor-pointer
```

#### Search Input

```
Ayni text input + sol tarafta arama ikonu (search icon)
pl-10 (sol padding arttirilir, ikon icin yer)
```

### 4.3 Card (Kart)

#### Icerik Karti (Blog, Makale)

```
Tailwind:
bg-white rounded-xl border border-stone-200 overflow-hidden
hover:shadow-lg hover:border-teal-200 transition-all duration-200
group cursor-pointer

Gorsel alani: aspect-[16/9] (veya 3:2)
Icerik padding: p-5 md:p-6
Baslik: text-lg font-bold text-stone-800 group-hover:text-teal-600 transition-colors
Ozet: text-sm text-stone-600 line-clamp-2
Meta: text-xs text-stone-500 (tarih, okuma suresi, kategori)
```

#### Klinik Karti

```
bg-white rounded-xl border border-stone-200 p-5 md:p-6
hover:shadow-lg hover:border-teal-200 transition-all duration-200

Ust: Klinik adi (font-bold) + Dogrulanmis rozeti (teal badge)
Orta: Adres + Tedavi turleri (badge/tag listesi) + Puan (yildizlar)
Alt: [Detay] butonu (ghost) + [Randevu Al] butonu (primary)
```

#### Doktor Karti

```
bg-white rounded-xl border border-stone-200 p-5 md:p-6
hover:shadow-lg transition-all duration-200

Sol: Avatar (64x64, rounded-full)
Sag: Isim + Unvan + Uzmanlik + Sehir + Tedavi sayisi
Alt: [Profili Gor] butonu
```

#### Fiyat Karti

```
Varsayilan:
bg-white rounded-2xl border border-stone-200 p-6 md:p-8

Vurgulu (En Populer):
bg-white rounded-2xl border-2 border-teal-500 p-6 md:p-8 shadow-xl
relative -- ust tarafta "En Populer" etiketi
ring-1 ring-teal-100

Kurucu:
bg-gradient-to-br from-amber-50 to-white rounded-2xl border-2 border-amber-400 p-6 md:p-8

Icerik yapisi:
- Plan adi (overline stili)
- Fiyat (stat-number stili) + /ay
- Aciklama (text-sm text-stone-600)
- Ozellik listesi (check ikonlu liste)
- CTA butonu (varyanta gore primary/secondary/founder)
```

#### Hasta Hikayesi Karti

```
bg-gradient-to-br from-purple-50 to-teal-50 rounded-xl p-6 md:p-8
border border-purple-100

Sol/Ust: Tirnak isareti ikonu (text-3xl text-purple-300)
Orta: Alinti metni (quote stili, text-lg italic text-stone-700)
Alt: Hasta adi, yas, sehir (text-sm font-medium) + evre badge
```

#### Istatistik Buyuk Sayi Karti

```
text-center p-6 md:p-8

Sayi: text-5xl md:text-6xl font-extrabold text-teal-600 tracking-tighter
Etiket: text-sm md:text-base text-stone-600 mt-2
Kaynak: text-xs text-stone-400 mt-1
```

### 4.4 Badge / Tag (Etiket)

| Varyant | Tailwind | Kullanim |
|---------|----------|----------|
| **Default** | `px-2.5 py-1 text-xs font-medium bg-stone-100 text-stone-700 rounded-full` | Genel etiketler |
| **Teal (Primary)** | `px-2.5 py-1 text-xs font-medium bg-teal-50 text-teal-700 rounded-full` | Tedavi turu, kategori |
| **Purple (Premium)** | `px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-700 rounded-full` | Premium icerik |
| **Amber (Yeni)** | `px-2.5 py-1 text-xs font-medium bg-amber-50 text-amber-700 rounded-full` | Yeni icerik, ozel teklif |
| **Green (Basari)** | `px-2.5 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full` | Dogrulanmis, tamamlanmis |
| **Red (Uyari)** | `px-2.5 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-full` | Dikkat gerektiren |
| **Evre 1** | `px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full` | Evre gostergesi |
| **Evre 2** | `px-2.5 py-1 text-xs font-semibold bg-amber-100 text-amber-800 rounded-full` | Evre gostergesi |
| **Evre 3** | `px-2.5 py-1 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full` | Evre gostergesi |
| **Evre 4** | `px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full` | Evre gostergesi |
| **Free** | `px-2 py-0.5 text-xs font-medium border border-stone-300 text-stone-600 rounded-full` | Ucretsiz icerik |
| **Kurucu** | `px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 rounded-full` | Kurucu uye rozeti |

### 4.5 Alert / Toast (Bildirim)

```
Genel yapi:
rounded-lg p-4 flex items-start gap-3
Sol: ikon (20x20)
Orta: baslik (font-medium) + mesaj (text-sm)
Sag: kapat butonu (opsiyonel)

Bilgi:
bg-teal-50 border border-teal-200 text-teal-800
Ikon: InformationCircle (teal-500)

Basari:
bg-green-50 border border-green-200 text-green-800
Ikon: CheckCircle (green-500)

Uyari:
bg-amber-50 border border-amber-200 text-amber-800
Ikon: ExclamationTriangle (amber-500)

Hata:
bg-red-50 border border-red-200 text-red-800
Ikon: XCircle (red-500)

Toast (gecici bildirim):
fixed bottom-4 right-4 z-50 (veya top-4 right-4)
shadow-xl max-w-sm
Otomatik kapanma: 5 saniye
Animasyon: slide-in-right, fade-out
```

### 4.6 Modal / Dialog

```
Overlay: fixed inset-0 bg-black/50 backdrop-blur-sm z-40
Animasyon: fade-in 200ms

Dialog:
fixed inset-0 z-50 flex items-center justify-center p-4
bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto
Animasyon: scale-up 200ms (0.95 -> 1.0) + fade-in

Header: px-6 pt-6 pb-4 (baslik + kapat butonu)
Body: px-6 py-2
Footer: px-6 pt-4 pb-6 (butonlar)

Erisilebilirlik:
- role="dialog"
- aria-modal="true"
- aria-labelledby (baslik ID'si)
- Focus trap (dialog ici tab dongusu)
- Escape ile kapatma
- Overlay tikla kapatma
```

### 4.7 Accordion / FAQ

```
Kapsayici:
divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden

Her item:
<details> veya custom component
<summary> / trigger: 
  px-5 py-4 flex items-center justify-between cursor-pointer
  hover:bg-stone-50 transition-colors
  text-base font-medium text-stone-800
  Sag: ChevronDown ikonu (rotate-180 acikken)

Icerik:
  px-5 pb-5 text-sm text-stone-600 leading-relaxed
  Animasyon: slide-down 200ms

Erisilebilirlik:
- aria-expanded="true/false"
- aria-controls (icerik paneli ID'si)
- Enter/Space ile acma/kapama
```

### 4.8 Tab / Segmented Control

```
Tab listesi:
flex border-b border-stone-200 gap-0

Her tab:
px-4 py-3 text-sm font-medium text-stone-500
hover:text-stone-700 hover:bg-stone-50
border-b-2 border-transparent
transition-all duration-150

Aktif tab:
text-teal-600 border-b-2 border-teal-600

Tab icerik:
pt-4 md:pt-6

Segmented control (mobil, yatay scroll):
flex gap-1 p-1 bg-stone-100 rounded-lg
Her segment: px-3 py-2 text-sm font-medium rounded-md
Aktif: bg-white text-teal-600 shadow-sm

Erisilebilirlik:
- role="tablist" / role="tab" / role="tabpanel"
- aria-selected="true/false"
- Ok tuslari ile tab arasi gecis
```

### 4.9 Progress Bar / Step Indicator

#### Ilerleme Cubugu (Semptom Testi)

```
Arka plan: h-2 bg-stone-200 rounded-full overflow-hidden
Dolgu: h-full bg-teal-500 rounded-full transition-all duration-500 ease-out

Ust etiket: text-sm font-medium text-stone-600
"Soru 5/10" veya "%50"

Animasyon: Dolgu genisligi smooth geecis (transition-all duration-500)
```

#### Step Indicator (Onboarding)

```
flex items-center gap-2 (yatay)

Her adim:
Daire: w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
  Tamamlanmis: bg-teal-600 text-white (+ check ikonu)
  Aktif: bg-teal-600 text-white (+ sayi)
  Bekleyen: bg-stone-200 text-stone-500 (+ sayi)

Cizgi (adimlar arasi):
  h-0.5 flex-1
  Tamamlanmis: bg-teal-600
  Bekleyen: bg-stone-200

Alt etiket: text-xs text-stone-500 mt-1 text-center
```

### 4.10 Breadcrumb

```
nav aria-label="Breadcrumb"
ol class="flex items-center gap-1.5 text-sm"

Her item:
  <li class="flex items-center gap-1.5">
    <a class="text-stone-500 hover:text-teal-600 transition-colors">Sayfa Adi</a>
    <ChevronRight class="w-3.5 h-3.5 text-stone-400" />
  </li>

Son item (aktif sayfa):
  <li class="text-stone-800 font-medium" aria-current="page">Sayfa Adi</li>

Mobil: Sadece "< Geri" linki gosterilir (yer tasarrufu)
```

### 4.11 Pagination

```
flex items-center gap-1

Her sayfa numarasi:
w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium
text-stone-600 hover:bg-stone-100 transition-colors

Aktif:
bg-teal-600 text-white hover:bg-teal-700

Onceki/Sonraki ok butonlari:
Ayni boyut, ChevronLeft/ChevronRight ikonu

Mobil: Sadece "Onceki" ve "Sonraki" butonlari + aktif sayfa numarasi
```

### 4.12 Tooltip

```
relative inline-block

Balon:
absolute z-10 px-3 py-2 text-xs font-medium text-white bg-stone-800 rounded-lg
shadow-lg max-w-xs
Animasyon: fade-in 150ms + scale 0.95->1.0

Ok isareti: 
w-2 h-2 bg-stone-800 transform rotate-45 (konuma gore)

Konum: top (varsayilan), bottom, left, right

Erisilebilirlik:
- role="tooltip"
- aria-describedby (trigger'dan tooltip'e baglanti)
- Hover + Focus ile gorunur
- Mobilde: Click/tap ile gorunur
```

### 4.13 Avatar / Profil Karti

```
Avatar boyutlari:
xs: w-6 h-6 (24px)
sm: w-8 h-8 (32px)
md: w-10 h-10 (40px)
lg: w-12 h-12 (48px)
xl: w-16 h-16 (64px)
2xl: w-20 h-20 (80px)

Stil: rounded-full object-cover border-2 border-white shadow-sm
Fallback (gorsel yoksa): bg-teal-100 text-teal-600 font-semibold (baş harfler)
Anonim: bg-stone-100 ikonu (User silhouette)
```

### 4.14 Ozel Komponentler (Lipodem Turkiye'ye Ozel)

#### Karsilastirma Tablosu Widget'i

```
overflow-x-auto (mobil yatay scroll)
rounded-xl border border-stone-200

Table:
w-full text-sm

Header satiri:
bg-stone-50 sticky top-0

Iki sutun karsilastirma:
Sol: Secenek A adi + detaylar
Sag: Secenek B adi + detaylar
Orta: Kriter adi

Kazanan hucre:
bg-teal-50 font-semibold text-teal-700

Her satir: border-b border-stone-100 py-3 px-4
Hover: bg-stone-50

Mobil: Yatay scroll + sticky ilk sutun
```

#### Evre Gostergesi (Stage 1-4)

```
Gorsel komponent -- 4 evre yatay bar:

flex items-center gap-1 w-full

Her evre blogu:
flex-1 h-3 rounded-full transition-all duration-300

Evre 1: bg-green-400
Evre 2: bg-amber-400
Evre 3: bg-orange-500
Evre 4: bg-red-500

Aktif evre: h-5 (buyutur) + altinda ikon + etiket
Inaktif evre: opacity-30

Alt etiket:
text-xs font-medium mt-2
Evre 1: text-green-700 "Evre 1"
...

Aciklama tooltip: Her evre uzerine hover'da ozellikler
```

#### Klinik Bulucu Harita Karti

```
lg:grid lg:grid-cols-[1fr_400px] gap-0 h-[600px]

Sol (harita):
w-full h-full (Google Maps embed veya Mapbox)
rounded-l-xl overflow-hidden (desktop)
rounded-t-xl (mobil)

Sag (liste):
overflow-y-auto border-l border-stone-200
p-0

Mobil:
Tam genislik harita (h-[300px]) + altinda liste
Aralarinda tab gecisi: [Harita] [Liste]
```

#### Semptom Testi Soru Karti

```
Kapsayici:
max-w-2xl mx-auto

Soru karti:
bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-stone-100

Soru metni:
text-xl md:text-2xl font-bold text-stone-800 mb-6

Cevap secenekleri (radio buton kartlari):
grid gap-3

Her secenek:
border border-stone-200 rounded-xl p-4 cursor-pointer
hover:border-teal-300 hover:bg-teal-50 transition-all
Secili: border-teal-500 bg-teal-50 ring-2 ring-teal-200

Ilerleme cubugu: ust tarafta
Navigasyon: alt tarafta [Geri] [Devam] butonlari

Animasyon: Soru gecislerinde slide-left/slide-right (300ms)
```

#### Semptom Testi Sonuc Karti

```
max-w-2xl mx-auto
bg-gradient-to-b from-white to-teal-50 rounded-2xl shadow-xl p-6 md:p-10 border border-teal-100

Sonuc basarisi animasyonu: check-mark animasyonu (500ms)

Risk seviyesi gostergesi:
Dusuk: text-green-600, CheckCircle ikon
Orta: text-amber-600, ExclamationTriangle ikon
Yuksek: text-red-600 (dikkatli kullanim), AlertCircle ikon

Onerilen adimlar: numarali liste
CTA'lar: [PDF Indir] (primary) + [Klinik Bul] (secondary) + [WhatsApp Paylas] (ghost + whatsapp ikonu)
```

#### Istatistik Buyuk Sayi Blogu

```
text-center py-8

Sayi:
text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter
text-teal-600

Birim/aciklama:
text-base md:text-lg font-medium text-stone-600 mt-2

Kaynak:
text-xs text-stone-400 mt-1
"Kaynak: 2025 Delphi Konsensüsü"

Animasyon: Scroll-triggered count-up (0'dan hedefe) 1500ms ease-out
```

#### Guven Rozeti Bolumu

```
flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6

Her rozet:
flex items-center gap-2
Ikon: w-6 h-6 text-teal-600 (CheckBadge, ShieldCheck, vb.)
Metin: text-sm font-medium text-stone-600

Ornek rozetler:
[✓] "Bilimsel kaynakli"
[✓] "20+ peer-reviewed arastirma"
[✓] "Uzman doktorlar tarafindan incelenmis"
[✓] "Bagimsiz platform"
```

#### Hasta Hikayesi Karti

```
bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-6 md:p-8
border border-purple-100/50

Ust: Tirnak isareti (text-4xl text-purple-200/80 font-serif) "
Orta: Alinti (text-lg italic text-stone-700 leading-relaxed)
Alt:
  flex items-center gap-3
  Avatar (sm) veya anonim ikon
  Isim (font-medium) + yas + sehir (text-sm text-stone-500)
  Evre badge

Hover: shadow-md transition-shadow
```

#### Premium Ozellik Karsilastirma Tablosu

```
Fiyatlandirma sayfasindaki tablo (pricing-output.md referans):

overflow-x-auto rounded-xl border border-stone-200

Header satiri: sticky top-0 bg-white
  Plan adlari + fiyatlar

Ozellik satiri:
  Sol: Ozellik adi + aciklama ikonu (tooltip)
  Orta: check/cross ikonu veya metin

Check: text-teal-600 (CheckCircle)
Cross: text-stone-300 (MinusCircle)

"En Populer" kolonu: bg-teal-50/30 border-l-2 border-r-2 border-teal-500
```

#### Newsletter Signup Form

```
Inline varyant:
flex gap-3 max-w-md
Input: flex-1 (email) 
Buton: primary "Abone Ol"
Alt metin: text-xs text-stone-500 "Bilgileriniz gizlidir. Spam gondermeyiz."

Popup varyant (exit-intent):
Modal icerisinde
Baslik: "Haftalik lipodem bulteni"
Aciklama: Kisaca ne sunuluyor
Input: email
Buton: primary "Ucretsiz Abone Ol"
Guven rozeti: "X+ kadin bultenimizi okuyor"
```

#### WhatsApp Paylasim Butonu

```
inline-flex items-center gap-2 px-4 py-2.5
bg-[#25D366] text-white rounded-lg font-medium text-sm
hover:bg-[#20BD5A] transition-colors

Ikon: WhatsApp SVG ikonu (w-5 h-5)
Metin: "WhatsApp ile Paylas"

Mobil: Sticky paylasim barinda (sayfa alt)
```

#### "Doktorunuza Gosterin" PDF Indirme CTA

```
bg-teal-50 border border-teal-200 rounded-xl p-5 md:p-6
flex items-center gap-4

Sol: DocumentArrowDown ikonu (w-10 h-10 text-teal-600)
Orta: 
  Baslik: "Sonucunuzu doktorunuza gosterin" (font-semibold)
  Aciklama: "PDF olarak indirin, randevunuza gotturun" (text-sm text-stone-600)
Sag: [PDF Indir] buton (primary, sm)
```

---

## 5. Ikonografi

### 5.1 Ikon Seti

**Birincil ikon seti: Lucide Icons**

| Ozellik | Deger |
|---------|-------|
| Set | Lucide (lucide.dev) |
| Stil | Line (stroke-based) |
| Stroke genisligi | 1.5px (varsayilan) -- 2px (vurgu) |
| Tutarlilik | Yuvarlak uc (round cap/join) |
| Neden | Acik kaynak, genis kutuphane (1500+), Next.js/React uyumlu (lucide-react), hafif, ozellesstirilebilir, Turkce icerik ile uyumlu yumusak cizgiler |

**Kurulum:**
```bash
npm install lucide-react
```

**Kullanim:**
```tsx
import { Heart, Activity, MapPin, FileText } from 'lucide-react';

<Heart className="w-5 h-5 text-teal-600" />
```

### 5.2 Ikon Boyutlari

| Boyut | Piksel | Tailwind | Kullanim |
|-------|--------|----------|----------|
| `xs` | 16px | `w-4 h-4` | Inline metin ici, badge ici |
| `sm` | 20px | `w-5 h-5` | Buton ici, menu, form |
| `md` | 24px | `w-6 h-6` | Navigasyon, kart ici, liste |
| `lg` | 32px | `w-8 h-8` | Ozellik listesi, bilgi karti |
| `xl` | 48px | `w-12 h-12` | Section basligi, arac karti |

### 5.3 Kullanim Tablosu

| Kategori | Lucide Ikonu | Kullanim Alani |
|----------|-------------|----------------|
| **Navigasyon** | `Home`, `Search`, `Menu`, `X`, `ChevronRight`, `ChevronDown`, `ArrowLeft` | Header, sidebar, breadcrumb |
| **Saglik** | `Activity`, `Heart`, `Stethoscope`, `Pill`, `Syringe`, `Thermometer` | Tedavi, saglik icerikleri |
| **Araclar** | `ClipboardCheck`, `MapPin`, `Calculator`, `Utensils` | Semptom testi, klinik bulucu, maliyet, beslenme |
| **Icerik** | `FileText`, `BookOpen`, `Video`, `Image`, `Bookmark`, `Share2` | Blog, rehber, kaydetme, paylasim |
| **Kullanici** | `User`, `Users`, `UserPlus`, `LogIn`, `LogOut`, `Settings` | Profil, topluluk, hesap |
| **Iletisim** | `Mail`, `Phone`, `MessageCircle`, `Send` | Iletisim, newsletter, WhatsApp |
| **Durum** | `CheckCircle`, `XCircle`, `AlertTriangle`, `Info`, `Clock`, `Shield` | Basari, hata, uyari, bilgi, bekleme, guvenlik |
| **Premium** | `Crown`, `Star`, `Sparkles`, `Lock`, `Unlock` | Premium ozellikler, abonelik |
| **Sosyal** | SVG ozel: Instagram, YouTube, Facebook, TikTok, WhatsApp | Footer, paylasim bari |

### 5.4 Ozel Ikonlar (Tasarlanacak)

Su ikonlar Lucide'de bulunmuyor, ozel SVG olarak tasarlanmali:

| Ikon | Aciklama | Kullanim |
|------|----------|----------|
| **Lipodem Evreleri** | 4 evre gorsel ikon (bacak silueti ile evre gosterimi) | Evre degerlendirme, egitim icerikleri |
| **Tedavi Turleri** | Kompresyon, MLD, VASER, tumescent ikon seti | Klinik profili, tedavi karsilastirma |
| **Vucut Bolgeleri** | Bacak, kol, gövde silueti (lipodem dagilimlari) | Tip 1-5 gosterimi, semptom testi |
| **Anti-inflamatuar** | Tabak + yaprak/sebze ikonu | Beslenme icerikleri |
| **Lipödem Türkiye Logo** | Ana marka ikonu/logosu | Header, favicon, OG image |

**Ozel ikon tasarim kurallari:**
- Ayni stroke genisligi (1.5px) ve yuvarlak uclar (Lucide ile uyum)
- Minimum 16x16px render edilebilir boyut
- SVG format, optimize edilmis (SVGO ile)
- Tek renk (currentColor) -- CSS ile renk kontrolu
- Erisilebilirlik: `aria-hidden="true"` (dekoratif) veya `aria-label` (anlamli)

---

## 6. Gorsel Dili

### 6.1 Fotograf Stili

**Genel kurallar:**
- Gercekci, dogal pozu olan kadinlar (stok fotograf poz hissi vermemeli)
- Cesitli vucut tipleri (ozellikle lipodem vucut tipine yakin)
- Farkli yaslar (25-55 yaş arasi hedef kitle)
- Farkli ten renkleri (Turk demografik yelpazesi)
- Guclu, aktif, pozitif pozlar (oturan degil, hareket halinde/gulumseyen)
- Dogal isik tercihi (stüdyo degil, ev/dogal ortam)
- Sicak renk paleti ile uyumlu (soguk mavi filtreleme yapma)

**Stok fotograf RED FLAGS (kacinilacaklar):**
- "Oncesi/sonrasi" zayiflama pozlari
- Klinik/hastane ortami (soguk, korkutucu)
- Vucuda odaklanan yakin cekim (objestiflesstirme)
- Aglamak/uzulmek pozlari (merhamet pornografisi)
- Ust duzeyde retuslanmis/airbrushed gorseller
- Sadece ince bedenlerin gosterilmesi
- Beden bölgelerine odaklanan cerceveleme (yuz yerine bacak)

**Onerilen gorsel kaynaklar:**
- Pexels, Unsplash (ucretsiz, cesitli vucut tipleri filtreleme)
- Ozel cekim (lansman sonrasi, gercek hastalar ile -- izinli)
- The Gender Spectrum Collection, AllGo gibi beden pozitif koleksiyonlar

### 6.2 Ilustrasyon Stili

- **Yaklasim:** Semi-flat (flat + hafif golgelendirme)
- **Ton:** Tibbi ama insancil -- korkutucu degil, bilgilendirici
- **Renk:** Marka paletine uyumlu (teal + lavanta + krem tonlari)
- **Kontur:** Yumusak cizgiler, yuvarlak koseler
- **Insan figuru:** Soyutlastirilmis ama tanimlanabilir (yuz ifadeli)
- **Anatomik gorseller:** Sematik, egitici, gereksiz detay icermeyen
- **Stil referanslari:** Headspace uygulamasinin illustrasyon stili, Calm tarzinda yumusak ve destekleyici

### 6.3 Infografik Stili

- Renk paleti ile %100 uyumlu
- Yatay bar grafikleri tercih (dikey alan tasarrufu, mobil uyumlu)
- Istatistik sayilarinda `stat-number` tipografi stili
- Kaynak referansi her infografik altinda
- SVG format (olceklenebilir, hafif)
- Data visualization renkleri: teal (birincil veri), lavanta (ikincil), amber (vurgu), notr tonlar (arka plan)

### 6.4 Gorsel Filtreleri (Tutarlilik)

```css
/* Tum hasta fotograflari icin */
.image-warm {
  filter: saturate(0.95) brightness(1.02) contrast(0.98);
}

/* Hero gorselleri icin hafif overlay */
.image-hero-overlay {
  position: relative;
}
.image-hero-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(240,253,250,0.3), rgba(250,245,255,0.2));
}
```

---

## 7. Motion ve Animasyon

### 7.1 Gecis Sureleri

| Token | Sure | Easing | Tailwind | Kullanim |
|-------|------|--------|----------|----------|
| `fast` | 150ms | ease-out | `duration-150` | Buton hover, renk degisimi, tooltip |
| `normal` | 200ms | ease-in-out | `duration-200` | Kart hover, menu acilma, tab gecisi |
| `moderate` | 300ms | ease-in-out | `duration-300` | Modal acilma, accordion, sayfa elemani gorunme |
| `slow` | 500ms | ease-out | `duration-500` | Ilerleme cubugu, sayi sayma, bolum reveal |
| `very-slow` | 700ms | ease-out | `duration-700` | Kutlama animasyonu, konfeti |

### 7.2 Easing Fonksiyonlari

```css
/* Tailwind varsayilanlari yeterli: */
ease-in:     cubic-bezier(0.4, 0, 1, 1)     /* Yavasla ve dur */
ease-out:    cubic-bezier(0, 0, 0.2, 1)     /* Hizli basla, yavasla */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)  /* Yumusak gecis */

/* Ozel easing (opsiyonel): */
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bounce/spring etkisi */
```

```javascript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
};
```

### 7.3 Mikro-Etkilesilmler

| Etkiesim | Animasyon | Tailwind/CSS |
|----------|-----------|-------------|
| **Buton hover** | Arka plan renk degisimi + hafif yukarı kayma | `hover:bg-teal-700 hover:-translate-y-0.5 transition-all duration-150` |
| **Buton tikla** | Scale down (0.97) | `active:scale-[0.97] transition-transform` |
| **Kart hover** | Golge artisi + kenarlik renk degisimi | `hover:shadow-lg hover:border-teal-200 transition-all duration-200` |
| **Link hover** | Alt cizgi animasyonu (soldan saga) | CSS: `background-size: 0% 2px -> 100% 2px` |
| **Checkbox tikla** | Scale bounce (1.0 -> 1.2 -> 1.0) | CSS keyframe: check-bounce |
| **Form focus** | Ring animasyonu (icten disa) | `focus:ring-2 focus:ring-teal-500 transition-shadow duration-150` |
| **Icerik kaydet** | Bookmark ikon dolma animasyonu | CSS: fill 0 -> 1 (300ms) |
| **Begeni/destek** | Kalp ikonu scale bounce + renk degisimi | CSS keyframe: heart-bounce |

### 7.4 Sayfa Gecisleri (Next.js)

```typescript
// Sayfalar arasi gecis:
// Next.js App Router'da layout.tsx uzerinden loading.tsx ile skeleton gosterimi.
// Ozel route transition animasyonu yerine, skeleton UI + content fade-in tercih edilir.
// Neden: Performans onceligi, karmasiklik azaltma.

// Icerik gorunum animasyonu:
// Her sayfa yuklendiginde govde icerigi fade-in (opacity 0->1, 200ms)
```

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.page-enter {
  animation: fadeIn 200ms ease-out;
}
```

### 7.5 Kutlama Animasyonlari

| An | Animasyon | Detay |
|----|-----------|-------|
| **Semptom testi tamamlama** | Check-mark cizilme + pulse | SVG path animasyonu (draw-check), ardindan scale pulse |
| **Email kayit** | Zarf acilma + confetti | CSS zarf transform + hafif confetti partikuller (canvas-confetti kutuphanesi) |
| **Premium aktivasyon** | Sparkle efekti + gradient reveal | CSS sparkle ikonlari + arka plan gradient animasyonu |
| **30 gun program tamamlama** | Rozet kazanma + scale-in | Rozet ikonu opacity 0 + scale 0.5 -> 1 + star burst |

**canvas-confetti konfigurasyonu (semptom testi + premium):**
```javascript
import confetti from 'canvas-confetti';

// Hafif, saglik platformuna uygun konfeti
confetti({
  particleCount: 60,
  spread: 55,
  origin: { y: 0.6 },
  colors: ['#0D9488', '#A855F7', '#22C55E', '#FBBF24'],
  disableForReducedMotion: true, // Erisilebilirlik
});
```

### 7.6 Scroll-Triggered Animasyonlar

```typescript
// Intersection Observer ile:
// 1. Istatistik sayaclari: Sayi 0'dan hedefe count-up (1500ms, easeOut)
// 2. Section reveal: Elemanlar asagidan yukariya fade-in (translateY 20px -> 0, opacity 0->1, 500ms)
// 3. Timeline/adim gostergesi: Adimlar sirayla gorunur hale gelir (stagger 100ms)

// Tailwind + JS entegrasyonu:
// IntersectionObserver API kullanilir
// Eleman gorunur oldugunda "animate-in" class'i eklenir
```

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 500ms ease-out, transform 500ms ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 7.7 Performans Kurali: prefer-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Kural:** Tum animasyonlar `prefers-reduced-motion: reduce` medya sorgusuna uygun olmali. Bu kullanicilar icin:
- Konfeti efekti devre disi
- Scroll animasyonlari aninda gorunur
- Sayfa gecisleri aninda
- Sadece gerekli durum degisiklikleri (focus ring gibi) korunur

---

## 8. Layout Sablonlari

### 8.1 Ana Sayfa Layout

```
┌───────────────────────────────────────────────────────────────────┐
│ HEADER (sticky, bg-white, shadow-sm on scroll)                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 1: HERO (gradient-hero BG)                               │
│ py-16 md:py-20 lg:py-28                                          │
│ container: max-w-7xl                                              │
│ Layout: lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 items-center    │
│ Sol: H1 + subtitle + 2 CTA + sosyal kanit                       │
│ Sag: Hero gorsel (ilustrasyon veya fotograf)                     │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 2: STIGMA KIRICI (bg-teal-50)                            │
│ py-12 md:py-16                                                    │
│ Ortali buyuk metin + 3 istatistik karti grid                     │
│ grid grid-cols-1 md:grid-cols-3 gap-6                            │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 3: SEMPTOM TESTI CTA (bg-white)                         │
│ py-12 md:py-16                                                    │
│ max-w-3xl mx-auto, ortali metin + mini onizleme + CTA            │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 4: ICERIK SUTUNLARI (bg-neutral-50)                     │
│ py-12 md:py-16 lg:py-20                                          │
│ Section baslik (overline) + H2                                    │
│ grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6   │
│ 6 kart: ikon + baslik + 1 cumle + link                           │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 5: INTERAKTIF ARACLAR (bg-white)                        │
│ py-12 md:py-16 lg:py-20                                          │
│ grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6            │
│ 4 arac karti                                                     │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 6: GUVEN SINYALLERI (bg-teal-900 text-white)            │
│ py-10 md:py-12                                                    │
│ Guven rozetleri yatay (flex wrap justify-center)                 │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 7: HASTA HIKAYELERI (bg-neutral-50)                     │
│ py-12 md:py-16 lg:py-20                                          │
│ Swiper/karusel: 3 hasta hikayesi karti                           │
│ Mobil: 1 kart gorunur, swipe                                     │
│ Desktop: 3 kart gorunur                                          │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 8: KLINIK BULUCU ONIZLEME (bg-white)                   │
│ py-12 md:py-16 lg:py-20                                          │
│ lg:grid lg:grid-cols-2 gap-8                                     │
│ Sol: Metin + CTA    Sag: Mini harita                             │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 9: NEWSLETTER (gradient-premium BG)                     │
│ py-10 md:py-14                                                    │
│ max-w-xl mx-auto, ortali                                          │
│ Baslik + aciklama + email form (inline) + guven metni             │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│ SECTION 10: FOOTER (gradient-footer)                             │
│ 4 kolon grid (mobilde 2x2) + alt bar                             │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

### 8.2 Pillar Page Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
├──────────────────────────────────────────────────────────────────┤
│ Breadcrumb                                                       │
│ py-3 text-sm                                                     │
├──────────────────────────────────────────────────────────────────┤
│ HERO (bg-gradient-hero)                                          │
│ py-10 md:py-16                                                   │
│ H1 + alt baslik + yazar + tarih + okuma suresi                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ lg:grid lg:grid-cols-[1fr_280px] lg:gap-10 xl:gap-16            │
│                                                                   │
│ SOL (Ana icerik):                                                │
│ ├── Giris paragrafi                                              │
│ ├── Interaktif arac CTA kutusu                                   │
│ ├── H2 bolumleri (uzun form icerik)                             │
│ │   ├── H3 alt bolumler                                          │
│ │   ├── Tablolar                                                 │
│ │   ├── Infografikler                                            │
│ │   ├── Bilgi kutulari (bg-teal-50 rounded-lg)                 │
│ │   └── Inline CTA (her ~800 kelimede)                          │
│ ├── Cluster makaleler navigasyonu                                │
│ ├── Ilgili icerikler (cross-pillar, 3-4 kart)                   │
│ ├── CTA kutusu (bg-primary-50)                                   │
│ ├── Kaynaklar (numarali liste)                                   │
│ └── Disclaimer (italic, text-sm)                                 │
│                                                                   │
│ SAG (Sidebar -- desktop only):                                   │
│ ├── Icindeiker (TOC) -- sticky top-24                           │
│ │   bg-white rounded-xl border p-4                              │
│ │   Aktif baslik: text-teal-600 font-medium                     │
│ │   Diger basliklar: text-stone-500 hover:text-stone-700        │
│ ├── gap-6                                                        │
│ ├── "Semptom Testi" CTA karti                                    │
│ └── "Premium" CTA karti                                          │
│                                                                   │
│ Mobil: Sidebar yok, TOC accordion olarak ust tarafta            │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ PAYLASIM BARI (sticky bottom-0 mobilde)                         │
│ [WhatsApp] [Facebook] [Twitter/X] [Link Kopyala]                │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER                                                           │
└──────────────────────────────────────────────────────────────────┘
```

### 8.3 Blog Makalesi Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
├──────────────────────────────────────────────────────────────────┤
│ Breadcrumb                                                       │
├──────────────────────────────────────────────────────────────────┤
│ max-w-3xl mx-auto (icerik genisligi)                             │
│                                                                   │
│ H1 baslik                                                        │
│ Meta satiri: Yazar avatar + isim | Tarih | Okuma suresi | Etiket│
│                                                                   │
│ Hero gorsel (tam genislik, aspect-[16/9], rounded-xl)            │
│                                                                   │
│ MAKALE GOVDESI (prose stili)                                     │
│ prose prose-stone prose-lg max-w-none                            │
│ ├── H2, H3 bolumler                                             │
│ ├── Paragraflar                                                   │
│ ├── Listeler                                                      │
│ ├── Tablolar                                                      │
│ ├── Gorsel + caption                                             │
│ ├── Bilgi kutusu ("Biliyor muydunuz?")                          │
│ ├── Uyari kutusu ("Dikkat")                                     │
│ ├── Inline CTA (her ~800 kelime)                                │
│ └── Kaynak referanslari [1], [2]...                             │
│                                                                   │
│ YAZAR BILGISI                                                    │
│ bg-stone-50 rounded-xl p-5 flex gap-4                            │
│ Avatar(lg) + Isim + Unvan + Kisa bio                            │
│ "Bu makale [Bilimsel Danisman] tarafindan incelenmistir"        │
│                                                                   │
│ ILGILI ICERIKLER (3 kart, grid)                                  │
│ CTA (Semptom testi veya newsletter)                              │
│ KAYNAKLAR                                                         │
│ DISCLAIMER                                                        │
│                                                                   │
│ PAYLASIM BARI                                                    │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER                                                           │
└──────────────────────────────────────────────────────────────────┘
```

### 8.4 Klinik Profili Layout

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
├──────────────────────────────────────────────────────────────────┤
│ Breadcrumb: Ana Sayfa > Klinikler > [Sehir]                     │
├──────────────────────────────────────────────────────────────────┤
│ H1: "[Sehir]'da Lipodem Tedavisi: Uzman Doktorlar ve Klinikler"│
│ Sehir giris paragrafi                                            │
├──────────────────────────────────────────────────────────────────┤
│ FILTRE BARI (sticky top-16)                                      │
│ bg-white border-b shadow-sm py-3                                 │
│ flex flex-wrap gap-3                                              │
│ [Ilce ▼] [Tedavi ▼] [Siralama ▼]                               │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ lg:grid lg:grid-cols-[1fr_400px] gap-0 h-[calc(100vh-200px)]    │
│                                                                   │
│ SOL (Harita):                                                    │
│ Google Maps / Mapbox                                              │
│ Klinik pinleri (teal renk)                                       │
│ Pin tikla -> info window (klinik adi + puan + [Detay])          │
│                                                                   │
│ SAG (Klinik Listesi):                                            │
│ overflow-y-auto                                                   │
│ Klinik kartlari (klinik karti komponenti)                        │
│ Her kart: border-b ile ayrilmis                                  │
│ Kart tikla -> haritada pin vurgulanir                            │
│                                                                   │
│ Mobil: Tab gecisi [Harita] [Liste]                               │
│ Harita: h-[50vh], Liste: kalan alan                              │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ SEHIR BILGILERI (harita altinda)                                 │
│ Ortalama fiyat araligi, tedavi turleri, en yakin alternatif      │
├──────────────────────────────────────────────────────────────────┤
│ ILGILI REHBERLER (3 kart)                                        │
│ SGK Rehberi, Doktor Secimi, Ameliyat Hazirlik                    │
├──────────────────────────────────────────────────────────────────┤
│ SSS (FAQ schema)                                                  │
│ CTA                                                               │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER                                                           │
└──────────────────────────────────────────────────────────────────┘
```

### 8.5 Arac Sayfasi (Semptom Testi)

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER (minimal -- sadece logo + kapat butonu)                   │
├──────────────────────────────────────────────────────────────────┤
│ Breadcrumb                                                       │
├──────────────────────────────────────────────────────────────────┤
│ max-w-2xl mx-auto py-8 md:py-12                                 │
│                                                                   │
│ ILERLEME CUBUGU (ust)                                            │
│ h-2 bg-stone-200 rounded-full                                    │
│ Dolgu: bg-teal-500 (animasyonlu)                                 │
│ Alt: "Soru 5/10" metni                                           │
│                                                                   │
│ SORU KARTI                                                       │
│ bg-white rounded-2xl shadow-lg p-8 md:p-12                      │
│ Soru metni (H2, text-xl font-bold)                               │
│ Bilgi notu (opsiyonel, text-sm text-stone-500)                  │
│ Cevap secenekleri (radio kart grid)                              │
│                                                                   │
│ NAVIGASYON                                                       │
│ flex justify-between mt-6                                        │
│ [< Geri] (ghost)     [Devam >] (primary)                        │
│                                                                   │
│ SONUC SAYFASI (test tamamlandiginda):                            │
│ Sonuc karti + CTA'lar                                            │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ DISCLAIMER                                                        │
│ "Bu bir tani araci degildir. Kesin tani icin uzman doktora       │
│  basvurunuz."                                                    │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER (minimal)                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### 8.6 Premium / Fiyatlandirma Sayfasi

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ HERO                                                              │
│ py-12 md:py-16 text-center                                       │
│ H1: "Sagliginiza Yatirim Yapin"                                  │
│ Alt baslik + [14 Gun Ucretsiz Deneyin] CTA                      │
│ Guven satirlari (checkmark + metin)                              │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ GUVEN SERIDI (bg-stone-50)                                       │
│ flex justify-center gap-8 py-4                                   │
│ Bilimsel kaynak | Uzman onayi | Topluluk | Iade garantisi       │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ ANCHORING KARSILASTIRMA                                          │
│ 3 kolon grid: Diyetisyen vs Kompresyon vs Lipodem Turkiye       │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ FIYAT KARTLARI                                                    │
│ flex justify-center gap-6 (veya grid 3 kolon)                   │
│ Aylik/Yillik toggle ust tarafta                                  │
│                                                                   │
│ [Ucretsiz] [★ Tam Premium (vurgulu)] [Temel Premium]            │
│                                                                   │
│ Kurucu Uyelik: Altta ozel bant (amber gradyan)                  │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ OZELLIK KARSILASTIRMA TABLOSU (tam tablo)                       │
├──────────────────────────────────────────────────────────────────┤
│ SOSYAL KANIT / HASTA YORUMLARI                                   │
│ 3 yorum karti karusel                                            │
├──────────────────────────────────────────────────────────────────┤
│ "GUNDE X TL" CERCEVELEME                                        │
│ Buyuk sayi blogu: "Gunde sadece 1,91 TL"                        │
├──────────────────────────────────────────────────────────────────┤
│ SSS (pricing-output.md referans)                                  │
├──────────────────────────────────────────────────────────────────┤
│ GUVEN GARANTISI                                                   │
│ 30 gun iade + iptal kolayligi + SSL + KVKK                      │
├──────────────────────────────────────────────────────────────────┤
│ SON CTA                                                           │
│ "Sagliginiz Icin Ilk Adimi Atin" + [14 Gun Ucretsiz Deneyin]   │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER                                                           │
└──────────────────────────────────────────────────────────────────┘
```

### 8.7 Karsilastirma Sayfasi

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
├──────────────────────────────────────────────────────────────────┤
│ Breadcrumb                                                       │
├──────────────────────────────────────────────────────────────────┤
│ H1: "[Secenek A] vs [Secenek B]: Hangisi Size Uygun?"          │
│ Meta: Guncelleme tarihi + okuma suresi                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ OZET KARTI (bg-teal-50)                                          │
│ 2 kolon: Secenek A ozet | Secenek B ozet                        │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│ KARSILASTIRMA TABLOSU (tam genislik)                             │
│ Kriter satirlari + kazanan vurgusu                               │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ DETAYLI ACIKLAMA (her kriter icin H2 bolumu)                    │
│ Inline CTA'lar                                                    │
├──────────────────────────────────────────────────────────────────┤
│ SONUC / VERDICT                                                   │
│ bg-teal-50 rounded-xl p-6, ortali                                │
│ "Hangisini secmelisiniz?" baslik + oneriler                      │
├──────────────────────────────────────────────────────────────────┤
│ CTA: [Semptom Testi] | [Klinik Bulucu]                          │
│ ILGILI ICERIKLER                                                  │
│ SSS (FAQ schema)                                                  │
│ KAYNAKLAR + DISCLAIMER                                            │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER                                                           │
└──────────────────────────────────────────────────────────────────┘
```

### 8.8 Hasta Hikayesi Sayfasi

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER                                                           │
├──────────────────────────────────────────────────────────────────┤
│ Breadcrumb                                                       │
├──────────────────────────────────────────────────────────────────┤
│ max-w-3xl mx-auto                                                │
│                                                                   │
│ HERO (bg-gradient-to-br from-purple-50 to-teal-50)             │
│ Avatar (xl) + Isim + Yas + Sehir + Evre badge                  │
│ H1: "Baslik alintisi"                                            │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ HIKAYE GOVDESI                                                    │
│ prose stili                                                       │
│                                                                   │
│ Bolum 1: "Tanidan Once" (H2)                                    │
│ Bolum 2: "Tani Yolculugum" (H2)                                │
│ Bolum 3: "Simdi" (H2)                                            │
│                                                                   │
│ Tedavi bilgileri (sidebar karti veya inline)                     │
│ "Bana soylenenler vs Gercek" tablosu (opsiyonel)                │
│                                                                   │
├──────────────────────────────────────────────────────────────────┤
│ PAYLASIM BARI                                                    │
│ "Bu hikaye size ilham verdiyse paylasin"                         │
├──────────────────────────────────────────────────────────────────┤
│ DIGER HIKAYELER (3 kart karusel)                                 │
│ CTA: [Semptom Testi] veya [Topluluga Katil]                     │
├──────────────────────────────────────────────────────────────────┤
│ FOOTER                                                           │
└──────────────────────────────────────────────────────────────────┘
```

---

## 9. Responsive Tasarim Kurallari

### 9.1 Mobile-First Yaklasim

Tum stiller mobile-first yazilir. Desktop degisiklikleri `md:` ve `lg:` prefix'leri ile eklenir.

```
/* DOGRU: Mobile-first */
.card { padding: 16px; }
@media (min-width: 768px) { .card { padding: 24px; } }

/* YANLIS: Desktop-first */
.card { padding: 24px; }
@media (max-width: 767px) { .card { padding: 16px; } }
```

### 9.2 Breakpoint'lere Gore Komponent Davranis

| Komponent | Mobil (< 768px) | Tablet (768-1023px) | Desktop (>= 1024px) |
|-----------|-----------------|---------------------|---------------------|
| **Header** | Hamburger menu + logo | Hamburger menu + logo + arama | Tam mega menu + utility nav |
| **Bottom Nav** | Gorunur (5 item, sticky) | Gizli | Gizli |
| **Sticky CTA Bar** | Gorunur (scroll sonrasi) | Gorunur | Gizli (sayfa ici CTA yeterli) |
| **Grid kartlar** | 1 kolon | 2 kolon | 3-4 kolon |
| **Sidebar (TOC)** | Accordion (ust taraf) | Accordion | Sticky sidebar (sag) |
| **Harita + Liste** | Tab gecisi | Yan yana (50/50) | Yan yana (60/40) |
| **Fiyat kartlari** | Dikey stack (1 kolon) | 3 kolon (kucuk) | 3 kolon (tam) |
| **Istatistik sayilari** | 1 kolon veya 2x2 grid | 3 kolon | 3-4 kolon |
| **Footer** | 2x2 grid + accordion | 4 kolon | 4 kolon |
| **Tablo** | Yatay scroll | Tam gorunur | Tam gorunur |
| **Breadcrumb** | "< Geri" linki | Tam breadcrumb | Tam breadcrumb |
| **Paylasim bari** | Sticky bottom | Sticky bottom | Inline (icerik ici) |

### 9.3 Touch Target

```
Minimum dokunma alani: 44x44px (WCAG 2.1 AAA)
Butonlar: min-h-[44px] min-w-[44px]
Linkler: py-2 (dokunma alanini arttirir)
Checkbox/Radio: w-5 h-5 + label tiklanabilir alani
Ikon butonlar: p-2.5 (ikon etrafinda yeterli bosluk)
```

### 9.4 Swipe Gesture Alanlari

| Alan | Gesture | Davranis |
|------|---------|----------|
| Hasta hikayeleri karusel | Sol/sag swipe | Onceki/sonraki hikaye |
| Semptom testi sorulari | Sol/sag swipe | Onceki/sonraki soru |
| Klinik bulucu (mobil) | Yukari swipe | Liste panelini genislet |
| Blog kategorileri | Yatay scroll | Kategori secimi |
| Gorsel galeri | Sol/sag swipe | Onceki/sonraki gorsel |

### 9.5 Sticky Eleman Kurallari

| Eleman | Konum | Gorunurluk | z-index | Tailwind |
|--------|-------|------------|---------|----------|
| Header | top-0 | Her zaman | 30 | `sticky top-0 z-30 bg-white` |
| TOC Sidebar | top-24 (header altinda) | Desktop only | 10 | `lg:sticky lg:top-24 z-10` |
| Filtre bari | top-16 (header altinda) | Klinik sayfasi | 20 | `sticky top-16 z-20` |
| Bottom Nav | bottom-0 | Mobil only | 30 | `fixed bottom-0 z-30 md:hidden` |
| CTA Bar | bottom-16 (nav ustunde) | Mobil, scroll sonrasi | 25 | `fixed bottom-16 z-25 md:hidden` |
| Paylasim bari | bottom-0 | Mobil, makale sayfasi | 25 | `fixed bottom-0 z-25 md:relative` |

**z-index sistemi:**
```
z-0:   Varsayilan icerik
z-10:  Sticky sidebar, floating elemanlar
z-20:  Sticky filtre barlari
z-25:  Mobil CTA bar, paylasim bari
z-30:  Header, bottom nav
z-40:  Modal overlay
z-50:  Modal/dialog icerigi, toast
z-[60]: Tooltip (en ustte)
```

### 9.6 Landscape Orientation

```css
/* Yatay telefon modunda ozel duzeltmeler */
@media (orientation: landscape) and (max-height: 500px) {
  /* Bottom nav'i gizle -- ekran cok kisa */
  .bottom-nav { display: none; }
  
  /* Hero bölümünü kisalt */
  .hero { padding-top: 2rem; padding-bottom: 2rem; }
  
  /* Sticky header'i incelt */
  .header { height: 48px; }
}
```

---

## 10. Erisilebilirlik (A11y) Standartlari

### 10.1 WCAG 2.1 AA Uyum Kontrol Listesi

| Kriter | Standart | Uygulama |
|--------|----------|----------|
| 1.1.1 Non-text Content | AA | Tum gorsellerde anlamli alt text |
| 1.3.1 Info and Relationships | AA | Dogru HTML semantigi (heading hiyerarsisi, form label) |
| 1.4.1 Use of Color | AA | Renk tek basina bilgi tasimaz (+ ikon/metin) |
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 normal metin, 3:1 buyuk metin |
| 1.4.4 Resize Text | AA | %200 zoom'da icerik kaybi yok |
| 1.4.10 Reflow | AA | 320px genislikte yatay scroll yok |
| 2.1.1 Keyboard | AA | Tum islevler klavye ile erisilebilir |
| 2.4.1 Bypass Blocks | AA | "Ana icerege atla" linki |
| 2.4.3 Focus Order | AA | Mantiksal tab sirasi |
| 2.4.7 Focus Visible | AA | Gorunur focus gostergesi |
| 3.1.1 Language of Page | AA | `<html lang="tr">` |
| 3.3.1 Error Identification | AA | Hata mesajlari acik ve net |
| 3.3.2 Labels | AA | Tum form alanlarinda label |
| 4.1.2 Name, Role, Value | AA | ARIA etiketleri dogru kullanim |

### 10.2 Renk Korlugu Destegi

- Bilgi iletiminde ASLA sadece renk kullanilmamali
- Hata: Kirmizi renk + "X" ikonu + metin mesaji
- Basari: Yesil renk + check ikonu + metin mesaji
- Evre gostergesi: Renk + sayi etiketi (Evre 1, 2, 3, 4)
- Grafiklerde: Renk + desen (cizgi stili, dolgu deseni)
- Linkler: Renk + alt cizgi (underline)

### 10.3 Ekran Okuyucu Uyumu (ARIA)

```html
<!-- Ana icerige atla linki -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-4 focus:rounded-lg focus:shadow-lg">
  Ana icerege atla
</a>

<!-- Navigasyon landmark'lari -->
<header role="banner">
<nav role="navigation" aria-label="Ana menu">
<main id="main-content" role="main">
<aside role="complementary" aria-label="Yan panel">
<footer role="contentinfo">

<!-- Arama -->
<div role="search" aria-label="Site icii arama">

<!-- Canli bolgeler (dinamik icerik) -->
<div aria-live="polite" aria-atomic="true">
  <!-- Form basari/hata mesajlari buraya -->
</div>

<!-- Semptom testi ilerleme -->
<div role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" aria-label="Test ilerlemesi">

<!-- Evre gostergesi -->
<div role="img" aria-label="Lipodem evre 2: Orta ilerleme">
```

### 10.4 Klavye Navigasyonu

| Eleman | Klavye Etkilesimi |
|--------|-------------------|
| Buton | Enter/Space: tiklama |
| Link | Enter: takip et |
| Tab | Tab: ileriye, Shift+Tab: geriye |
| Modal | Escape: kapat, Tab: ici dongu |
| Accordion | Enter/Space: ac/kapat, Ok tuslari: gezin |
| Tab panel | Ok tuslari: tab arasi gecis |
| Dropdown | Enter/Space: ac, Ok tuslari: item sec, Escape: kapat |
| Karusel | Ok tuslari: onceki/sonraki |

### 10.5 Focus Gostergeleri

```css
/* Varsayilan focus gostergesi */
*:focus-visible {
  outline: 2px solid #0D9488; /* teal-600 */
  outline-offset: 2px;
  border-radius: 4px;
}

/* Koyu arka planda */
.dark-bg *:focus-visible {
  outline-color: #5EEAD4; /* teal-300 */
}

/* Tailwind: */
focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2
```

### 10.6 Tibbi Gorseller Icin Alt Text Kurallari

| Gorsel Tipi | Alt Text Formati | Ornek |
|-------------|------------------|-------|
| Evre fotografi | "Lipodem evre [X]: [kisa aciklama]" | "Lipodem evre 2: Bacaklarda belirgin orantisiz yag birikimi ve deri doku degisiklikleri" |
| Anatomik sema | "[vucut bolgesi] sematik gosterimi: [ne gosterildigi]" | "Bacak kesiti sematik gosterimi: Lipodem yag dokusunun dagiliimi" |
| Infografik | Tam metin aciklamasi (veya `aria-describedby` ile uzun aciklama) | "Lipodem evreleri infografigi: Evre 1 hafif, Evre 2 orta..." |
| Dekoratif gorsel | `alt=""` + `aria-hidden="true"` | Arka plan desenleri, ayirici cizgiler |
| Hasta fotografi | "[isim/anonim], [yas], [baglamsal aciklama]" | "Ayse, 34, egzersiz yaparken" |

### 10.7 Dil Destegi

```html
<html lang="tr">
  <!-- Tum sayfa Turkce -->
  
  <!-- Ingilizce terim kullanildiginda: -->
  <span lang="en">Body Mass Index</span> (Vucut Kutle Indeksi)
  
  <!-- Latince tibbi terimler: -->
  <em lang="la">Lipedema</em>
```

---

## 11. Guven Sinyalleri Tasarim Kutuphanesi

### 11.1 Kaynak Gosterim Formati

#### Makale Ici Referans Stili

```html
<!-- Inline referans (superscript numara) -->
Lipodem kadinlarin %6-11'ini etkiler<sup class="text-xs font-medium text-teal-600 cursor-pointer hover:underline">[1]</sup>.

<!-- Kaynaklar listesi (makale sonu) -->
<section aria-label="Kaynaklar">
  <h2>Kaynaklar</h2>
  <ol class="list-decimal list-inside space-y-2 text-sm text-stone-600">
    <li id="ref-1">
      Herbst KL, et al. "Lipedema: a clinical entity." 
      <em class="text-stone-500">Phlebology</em>, 2025.
      <a href="..." class="text-teal-600 hover:underline" target="_blank" rel="noopener">
        DOI: 10.1177/...
      </a>
    </li>
  </ol>
</section>
```

#### "Son Guncelleme" Gostergesi

```html
<div class="flex items-center gap-2 text-sm text-stone-500">
  <CalendarIcon class="w-4 h-4" />
  <span>Son guncelleme: 24 Mayis 2026</span>
  <span class="mx-1">|</span>
  <UserIcon class="w-4 h-4" />
  <span>Inceleyen: Dr. [Isim]</span>
</div>
```

### 11.2 "Bilimsel Kanit" Rozeti

```html
<div class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 border border-teal-200 rounded-full text-sm font-medium text-teal-700">
  <ShieldCheckIcon class="w-4 h-4" />
  <span>Bilimsel kanitlı</span>
</div>
```

**Varyantlar:**
- "Peer-reviewed kaynakli" (akademik makale bazli)
- "2025 Delphi Konsensüsü bazli" (en guclu referans)
- "Uzman gozetiminde" (doktor incelemesi)

### 11.3 Dernek/Kongre Logo Kullanimi

```html
<section class="py-8 border-y border-stone-200">
  <p class="text-sm text-stone-500 text-center mb-4">Referans Kaynaklarimiz</p>
  <div class="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
    <!-- Logo gorselleri -->
    <img src="/logos/delphi-consensus.svg" alt="2025 Delphi Konsensüsü" class="h-8" />
    <img src="/logos/nature-communications.svg" alt="Nature Communications" class="h-6" />
    <!-- ... -->
  </div>
</section>
```

### 11.4 Doktor Onay Damgasi

```html
<div class="flex items-center gap-3 px-4 py-3 bg-stone-50 rounded-lg border border-stone-200">
  <img src="/avatars/dr-x.jpg" alt="Dr. [Isim]" class="w-10 h-10 rounded-full object-cover" />
  <div>
    <p class="text-sm font-medium text-stone-800">Bu icerik tibbi olarak incelenmistir</p>
    <p class="text-xs text-stone-500">Dr. [Isim Soyisim], [Uzmanlik], [Kurum]</p>
  </div>
  <CheckBadgeIcon class="w-5 h-5 text-teal-600 flex-shrink-0" />
</div>
```

### 11.5 Hasta Hikayesi Guvenilirlik Gostergeleri

```html
<div class="flex flex-wrap gap-2">
  <span class="badge badge-teal">Gercek hikaye</span>
  <span class="badge badge-default">Evre 2</span>
  <span class="badge badge-default">Istanbul</span>
  <span class="badge badge-default">34 yas</span>
  <!-- Anonim ise: -->
  <span class="badge badge-default">Anonim paylasim</span>
</div>
```

### 11.6 SSL / Guvenlik Gostergeleri

```html
<!-- Odeme formu yakininda -->
<div class="flex items-center gap-4 text-xs text-stone-500 mt-4">
  <div class="flex items-center gap-1">
    <LockIcon class="w-4 h-4 text-green-600" />
    <span>256-bit SSL sifreleme</span>
  </div>
  <div class="flex items-center gap-1">
    <ShieldIcon class="w-4 h-4 text-teal-600" />
    <span>KVKK uyumlu</span>
  </div>
  <img src="/logos/iyzico-korumali.svg" alt="iyzico Korumali Alisveris" class="h-6" />
</div>
```

### 11.7 Istatistik Gosterim Formati

```html
<!-- Buyuk sayi + kaynak formatı -->
<div class="text-center">
  <div class="text-5xl md:text-6xl font-extrabold text-teal-600 tracking-tighter">
    %6-11
  </div>
  <p class="text-base text-stone-600 mt-2 font-medium">
    kadinlarda lipodem goruluyor
  </p>
  <p class="text-xs text-stone-400 mt-1">
    Kaynak: 2025 Delphi Konsensüsü, Nature Communications
  </p>
</div>
```

**Kural:** Her istatistik gosteriminde MUTLAKA kaynak belirtilmeli. Kaynaksiz istatistik kullanilmaz.

---

## 12. Tailwind CSS Yapilandirma Ozeti

### 12.1 Tam tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
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
      colors: {
        // Ozel renk tokenleri (Tailwind varsayilanlarina ek)
        brand: {
          teal: '#0D9488',
          purple: '#A855F7',
          emerald: '#22C55E',
          amber: '#F59E0B',
        },
      },
      screens: {
        'xs': '320px',
        'tall': { 'raw': '(min-height: 800px)' },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'check-draw': {
          from: { 'stroke-dashoffset': '100' },
          to: { 'stroke-dashoffset': '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'slide-up': 'slide-up 500ms ease-out',
        'scale-in': 'scale-in 200ms ease-out',
        'check-draw': 'check-draw 500ms ease-out forwards',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#44403C', // stone-700
            a: {
              color: '#0D9488', // teal-600
              textDecoration: 'underline',
              textDecorationColor: '#99F6E4', // teal-200
              textUnderlineOffset: '4px',
              '&:hover': {
                color: '#0F766E', // teal-700
                textDecorationColor: '#0D9488',
              },
            },
            h2: {
              color: '#292524', // stone-800
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '0.75em',
            },
            h3: {
              color: '#292524',
              fontWeight: '700',
              marginTop: '1.5em',
              marginBottom: '0.5em',
            },
            strong: {
              color: '#292524',
              fontWeight: '600',
            },
            blockquote: {
              borderLeftColor: '#0D9488',
              color: '#57534E', // stone-600
              fontStyle: 'italic',
            },
            'ul > li::marker': {
              color: '#0D9488',
            },
            'ol > li::marker': {
              color: '#0D9488',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

export default config;
```

### 12.2 Global CSS (app/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Turkce karakter render optimizasyonu */
  body {
    font-feature-settings: "kern" 1, "liga" 1;
    text-rendering: optimizeLegibility;
  }

  /* Prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Focus visible sadece klavye navigasyonunda */
  :focus:not(:focus-visible) {
    outline: none;
  }

  /* Mobilde input zoom onleme (font-size >= 16px zaten tailwind'de) */
  input, select, textarea {
    font-size: 16px;
  }
}

@layer components {
  /* "Ana icerege atla" linki */
  .skip-to-content {
    @apply sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60]
           focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg
           focus:text-teal-600 focus:font-semibold focus:text-sm;
  }

  /* Section baslik stili */
  .section-overline {
    @apply text-xs font-semibold uppercase tracking-[0.15em] text-teal-600 mb-3;
  }

  /* Bilgi kutusu */
  .info-box {
    @apply bg-teal-50 border border-teal-200 rounded-lg p-4 my-6
           flex items-start gap-3 text-sm text-teal-800;
  }

  /* Uyari kutusu */
  .warning-box {
    @apply bg-amber-50 border border-amber-200 rounded-lg p-4 my-6
           flex items-start gap-3 text-sm text-amber-800;
  }

  /* Tibbi disclaimer */
  .disclaimer {
    @apply text-[13px] italic text-stone-500 mt-8 pt-4 border-t border-stone-200;
  }
}

@layer utilities {
  /* Satir kisitlama */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
```

---

## Ek: Hizli Referans Karti

### Renk Hizli Referans

```
Birincil (Teal):  #0D9488 (butonlar, CTA, linkler)
Ikincil (Purple): #A855F7 (premium, empati)
Ucuncul (Emerald): #22C55E (basari, ilerleme)
Aksan (Amber):    #F59E0B (dikkat, kurucu uye)
Arka plan:        #FAFAF9 (sicak beyaz)
Metin:            #44403C (govde), #292524 (baslik)
```

### Tipografi Hizli Referans

```
Font:     Inter (variable, 300-800)
H1:       48px/32px (desktop/mobil), font-extrabold
Govde:    16px, leading-relaxed, font-normal
Buyuk sayi: 56px, font-extrabold, tracking-tighter
```

### Spacing Hizli Referans

```
Container:    max-w-7xl (1280px)
Blog icerigi: max-w-3xl (720px)
Section gap:  py-12 md:py-16 lg:py-20
Kart ic:      p-5 md:p-6
Grid gutter:  gap-4 md:gap-6
```

### Breakpoint Hizli Referans

```
Mobil:   < 768px  (varsayilan)
Tablet:  md: (>= 768px)
Desktop: lg: (>= 1024px)
Genis:   xl: (>= 1280px)
```

---

*Bu belge Lipodem Turkiye projesinin Faz 1.4 Web Tasarim Sistemi ciktisidir. Tum frontend gelistirme surecleri bu tasarim sistemi belgesini referans alarak yurutulecektir.*

*Son guncelleme: 24 Mayis 2026*
