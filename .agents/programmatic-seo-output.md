# Lipödem Türkiye -- Programmatic SEO Veri Modelleri ve Örnek Veriler

**Tarih:** 24 Mayıs 2026
**Referans:** site-architecture-output.md, react-best-practices-output.md, schema-output.md, competitors-pages-output.md, product-marketing.md, content-strategy-output.md
**Teknoloji:** Next.js 15 (App Router) + TypeScript 5.x + Prisma 6.x + Vercel
**Domain:** lipodemturkiye.com

---

## İçindekiler

1. [Şehir Bazlı Klinik Sayfaları (81 İl)](#1-şehir-bazlı-klinik-sayfaları-81-il)
2. [Doktor Profil Sayfaları](#2-doktor-profil-sayfaları)
3. [Tedavi Karşılaştırma Sayfaları](#3-tedavi-karşılaştırma-sayfaları)
4. [Blog Makale Şablonu](#4-blog-makale-şablonu)
5. [Hasta Hikayesi Şablonu](#5-hasta-hikayesi-şablonu)
6. [generateStaticParams Fonksiyonları](#6-generatestaticparams-fonksiyonları)
7. [Veri Toplama ve Yönetim Planı](#7-veri-toplama-ve-yönetim-planı)

---

## 1. Şehir Bazlı Klinik Sayfaları (81 İl)

### 1.1 TypeScript Veri Modeli

```typescript
// src/types/city.ts

export interface City {
  /** Şehir adı (Türkçe, tam haliyle) */
  name: string;
  /** URL-safe slug (Türkçe karakterler dönüştürülmüş) */
  slug: string;
  /** Coğrafi bölge */
  region: Region;
  /** Plaka kodu */
  plateCode: number;
  /** Tahmini nüfus */
  population: number;
  /** Harita merkezi koordinatları */
  coordinates: Coordinates;
  /** Klinik sayfası SEO verileri */
  seo: CitySEO;
  /** Şehre özel giriş metni */
  introText: string;
  /** Şehirde mevcut tedavi türleri */
  availableTreatments: TreatmentType[];
  /** Ortalama fiyat aralığı (TL) */
  priceRange: PriceRange | null;
  /** Klinik yoksa en yakın alternatif şehir slug'ları */
  nearestAlternatives: string[];
  /** Yakın/komşu şehirler (SEO iç bağlantı) */
  relatedCities: string[];
  /** Şehirdeki klinik sayısı */
  clinicCount: number;
  /** Şehirdeki doktor sayısı */
  doctorCount: number;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface PriceRange {
  min: number;
  max: number;
  currency: "TRY";
}

export interface CitySEO {
  /** H1 başlığı */
  h1: string;
  /** Meta title (<60 karakter) */
  metaTitle: string;
  /** Meta description (150-160 karakter) */
  metaDescription: string;
  /** Birincil hedef anahtar kelime */
  primaryKeyword: string;
  /** İkincil anahtar kelimeler */
  secondaryKeywords: string[];
}

export type Region =
  | "Marmara"
  | "Ege"
  | "Akdeniz"
  | "İç Anadolu"
  | "Karadeniz"
  | "Doğu Anadolu"
  | "Güneydoğu Anadolu";

export type TreatmentType =
  | "vaser"
  | "tumescent"
  | "wal"
  | "pal"
  | "mld"
  | "cdt"
  | "kompresyon"
  | "pnomatik"
  | "beslenme"
  | "egzersiz"
  | "psikolojik";

// --- Klinik Modeli ---

export interface Clinic {
  id: string;
  /** Klinik adı */
  name: string;
  /** URL slug */
  slug: string;
  /** Tam adres */
  address: string;
  /** İl */
  city: string;
  /** İlçe */
  district: string;
  /** Telefon numarası */
  phone: string;
  /** Web sitesi URL'si */
  website: string | null;
  /** Online randevu URL'si */
  appointmentUrl: string | null;
  /** Harita koordinatları */
  coordinates: Coordinates;
  /** Kliniğe bağlı doktor ID'leri */
  doctorIds: string[];
  /** Sunulan tedavi türleri */
  treatments: TreatmentType[];
  /** Fiyat aralığı (bölge başı, TL) */
  priceRange: PriceRange | null;
  /** Kullanıcı puanı (1-5) */
  rating: number | null;
  /** Değerlendirme sayısı */
  reviewCount: number;
  /** Klinik fotoğrafları URL'leri */
  photos: string[];
  /** Platform tarafından doğrulanmış mı */
  verified: boolean;
  /** Akreditasyonlar */
  accreditations: string[];
  /** Çalışma saatleri */
  workingHours: WorkingHours[];
  /** Son güncelleme tarihi (ISO 8601) */
  lastUpdated: string;
  /** Aktif mi */
  active: boolean;
}

export interface WorkingHours {
  days: string[];
  opens: string;
  closes: string;
}
```

### 1.2 H1, Meta ve URL Şablonları

Tüm 81 il için dinamik olarak üretilecek şablonlar:

| Şablon Alanı | Klinik VARSA | Klinik YOKSA |
|--------------|--------------|--------------|
| **H1** | `{Şehir}'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler` | `{Şehir}'da Lipödem Tedavisi: Rehber ve En Yakın Uzmanlar` |
| **Meta Title** | `Lipödem Doktoru {Şehir}: Uzman Listesi (2026)` | `Lipödem Tedavisi {Şehir}: Rehber ve Yönlendirme (2026)` |
| **Meta Desc** | `{Şehir}'da lipödem tedavisi yapan {N} klinik ve {M} uzman doktor. Fiyatlar, tedavi yöntemleri, hasta yorumları ve randevu bilgileri.` | `{Şehir}'da lipödem uzmanı arıyorsanız en yakın merkezler {Alt1} ve {Alt2}'dadır. {Şehir} lipödem rehberi ve yönlendirme bilgileri.` |
| **URL** | `/klinikler/{slug}` | `/klinikler/{slug}` |
| **Birincil Keyword** | `lipödem doktoru {şehir}` | `lipödem tedavisi {şehir}` |

**İkincil keyword şablonları (tüm şehirler):**
- `lipödem klinik {şehir}`
- `lipödem ameliyatı {şehir}`
- `lipödem uzmanı {şehir}`
- `lipödem tedavisi {şehir} fiyat`
- `vaser liposuction {şehir}`

### 1.3 Klinik Yoksa Ne Gösterilecek?

Bir şehirde kayıtlı klinik yoksa sayfa şu yapıda render edilir:

```
1. H1: "{Şehir}'da Lipödem Tedavisi: Rehber ve En Yakın Uzmanlar"
2. Bilgi kutusu: "Şu anda {Şehir}'da kayıtlı lipödem uzmanı bulunmamaktadır."
3. En Yakın Merkezler: nearestAlternatives dizisinden ilk 3 şehir kartı
4. Genel bilgi: Lipödem tedavisi hakkında özet paragraf
5. CTA: "Klinik Bulucu ile tüm Türkiye'deki uzmanları görün"
6. CTA: "Şehrinizdeki bir kliniği önerin" (kullanıcı gönderimi formu)
7. SEO içerik: "{Şehir}'da lipödem tedavisi nereden alınır?" başlığında
   genel bilgilendirme (kompresyon temin, fizyoterapi, aile hekimi yönlendirme)
```

En yakın şehir hesaplama algoritması: Haversine formülü ile `coordinates` üzerinden mesafe hesaplanır. Klinik sayısı > 0 olan en yakın 3 şehir `nearestAlternatives` olarak atanır.

### 1.4 10 Büyük Şehir İçin Örnek Veriler

```json
[
  {
    "name": "İstanbul",
    "slug": "istanbul",
    "region": "Marmara",
    "plateCode": 34,
    "population": 16100000,
    "coordinates": { "lat": 41.0082, "lng": 28.9784 },
    "seo": {
      "h1": "İstanbul'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru İstanbul: Uzman Listesi (2026)",
      "metaDescription": "İstanbul'da lipödem tedavisi yapan klinikler ve uzman doktorlar. VASER, tumescent liposuction, MLD, kompresyon tedavisi -- fiyatlar ve randevu bilgileri.",
      "primaryKeyword": "lipödem doktoru istanbul",
      "secondaryKeywords": ["lipödem klinik istanbul", "lipödem ameliyatı istanbul", "vaser liposuction istanbul", "lipödem tedavisi istanbul fiyat"]
    },
    "introText": "İstanbul, Türkiye'nin en fazla lipödem uzmanının bulunduğu şehirdir. Avrupa ve Anadolu yakasında cerrahi ve konservatif tedavi sunan birden fazla merkez mevcuttur. VASER, tumescent ve WAL liposuction teknikleri ile MLD, CDT ve kompresyon tedavisi seçenekleri sunulmaktadır.",
    "availableTreatments": ["vaser", "tumescent", "wal", "mld", "cdt", "kompresyon", "pnomatik", "beslenme", "egzersiz", "psikolojik"],
    "priceRange": { "min": 55000, "max": 180000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["bursa", "kocaeli", "tekirdag", "edirne"],
    "clinicCount": 8,
    "doctorCount": 12
  },
  {
    "name": "Ankara",
    "slug": "ankara",
    "region": "İç Anadolu",
    "plateCode": 6,
    "population": 5750000,
    "coordinates": { "lat": 39.9334, "lng": 32.8597 },
    "seo": {
      "h1": "Ankara'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru Ankara: Uzman Listesi (2026)",
      "metaDescription": "Ankara'da lipödem tedavisi yapan klinikler ve uzman doktorlar. Cerrahi ve konservatif tedavi seçenekleri, fiyatlar ve randevu bilgileri.",
      "primaryKeyword": "lipödem doktoru ankara",
      "secondaryKeywords": ["lipödem klinik ankara", "lipödem ameliyatı ankara", "lipödem tedavisi ankara fiyat"]
    },
    "introText": "Ankara, başkent olarak lipödem tedavisinde güçlü bir altyapıya sahiptir. Üniversite hastaneleri ve özel kliniklerde hem cerrahi hem konservatif tedavi seçenekleri mevcuttur. 1. Ulusal Lipödem Kongresi'nin (2026) ev sahibi şehridir.",
    "availableTreatments": ["vaser", "tumescent", "mld", "cdt", "kompresyon", "beslenme", "egzersiz"],
    "priceRange": { "min": 50000, "max": 150000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["eskisehir", "konya", "kayseri", "kirikkale"],
    "clinicCount": 5,
    "doctorCount": 7
  },
  {
    "name": "İzmir",
    "slug": "izmir",
    "region": "Ege",
    "plateCode": 35,
    "population": 4460000,
    "coordinates": { "lat": 38.4237, "lng": 27.1428 },
    "seo": {
      "h1": "İzmir'de Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru İzmir: Uzman Listesi (2026)",
      "metaDescription": "İzmir'de lipödem tedavisi yapan klinikler ve uzman doktorlar. VASER liposuction, MLD, kompresyon tedavisi -- fiyatlar ve hasta yorumları.",
      "primaryKeyword": "lipödem doktoru izmir",
      "secondaryKeywords": ["lipödem klinik izmir", "lipödem ameliyatı izmir", "vaser liposuction izmir"]
    },
    "introText": "İzmir, Ege Bölgesi'nin lipödem tedavi merkezi konumundadır. Şehirde plastik cerrahi ve fizyoterapi alanında deneyimli uzmanlar bulunmaktadır. Akdeniz iklimi, ameliyat sonrası iyileşme sürecinde konfor sağlar.",
    "availableTreatments": ["vaser", "tumescent", "mld", "cdt", "kompresyon", "beslenme"],
    "priceRange": { "min": 50000, "max": 140000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["manisa", "aydin", "denizli", "mugla"],
    "clinicCount": 4,
    "doctorCount": 5
  },
  {
    "name": "Antalya",
    "slug": "antalya",
    "region": "Akdeniz",
    "plateCode": 7,
    "population": 2690000,
    "coordinates": { "lat": 36.8969, "lng": 30.7133 },
    "seo": {
      "h1": "Antalya'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru Antalya: Uzman Listesi (2026)",
      "metaDescription": "Antalya'da lipödem tedavisi yapan klinikler ve uzman doktorlar. Sağlık turizmi seçenekleri, VASER liposuction fiyatları ve randevu.",
      "primaryKeyword": "lipödem doktoru antalya",
      "secondaryKeywords": ["lipödem klinik antalya", "lipödem ameliyatı antalya", "lipödem sağlık turizmi antalya"]
    },
    "introText": "Antalya, sağlık turizmi altyapısıyla lipödem tedavisinde öne çıkan şehirlerden biridir. JCI akreditasyonlu hastaneler ve uluslararası deneyime sahip cerrahlar, yurt içi ve yurt dışından hastaları ağırlamaktadır.",
    "availableTreatments": ["vaser", "tumescent", "mld", "kompresyon", "beslenme"],
    "priceRange": { "min": 55000, "max": 160000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["burdur", "isparta", "mersin", "mugla"],
    "clinicCount": 3,
    "doctorCount": 4
  },
  {
    "name": "Bursa",
    "slug": "bursa",
    "region": "Marmara",
    "plateCode": 16,
    "population": 3200000,
    "coordinates": { "lat": 40.1885, "lng": 29.0610 },
    "seo": {
      "h1": "Bursa'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru Bursa: Uzman Listesi (2026)",
      "metaDescription": "Bursa'da lipödem tedavisi yapan klinikler ve uzman doktorlar. Cerrahi ve konservatif tedavi seçenekleri, fiyatlar ve randevu bilgileri.",
      "primaryKeyword": "lipödem doktoru bursa",
      "secondaryKeywords": ["lipödem klinik bursa", "lipödem ameliyatı bursa"]
    },
    "introText": "Bursa, Marmara Bölgesi'nde İstanbul'a alternatif lipödem tedavi merkezlerinden biridir. Şehirde plastik cerrahi ve fizyoterapi alanında hizmet veren klinikler bulunmaktadır.",
    "availableTreatments": ["tumescent", "mld", "kompresyon", "beslenme"],
    "priceRange": { "min": 45000, "max": 120000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["istanbul", "kocaeli", "balikesir", "eskisehir"],
    "clinicCount": 2,
    "doctorCount": 3
  },
  {
    "name": "Adana",
    "slug": "adana",
    "region": "Akdeniz",
    "plateCode": 1,
    "population": 2270000,
    "coordinates": { "lat": 37.0000, "lng": 35.3213 },
    "seo": {
      "h1": "Adana'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru Adana: Uzman Listesi (2026)",
      "metaDescription": "Adana'da lipödem tedavisi yapan klinikler ve uzman doktorlar. Tedavi seçenekleri, fiyat bilgileri ve en yakın lipödem merkezleri.",
      "primaryKeyword": "lipödem doktoru adana",
      "secondaryKeywords": ["lipödem klinik adana", "lipödem ameliyatı adana"]
    },
    "introText": "Adana, Çukurova Bölgesi'nin sağlık merkezi olarak lipödem tedavisinde gelişmekte olan şehirlerden biridir. Üniversite hastaneleri ve özel kliniklerde plastik cerrahi hizmetleri sunulmaktadır.",
    "availableTreatments": ["tumescent", "mld", "kompresyon"],
    "priceRange": { "min": 40000, "max": 100000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["mersin", "hatay", "gaziantep", "osmaniye"],
    "clinicCount": 2,
    "doctorCount": 2
  },
  {
    "name": "Konya",
    "slug": "konya",
    "region": "İç Anadolu",
    "plateCode": 42,
    "population": 2320000,
    "coordinates": { "lat": 37.8746, "lng": 32.4932 },
    "seo": {
      "h1": "Konya'da Lipödem Tedavisi: Rehber ve En Yakın Uzmanlar",
      "metaTitle": "Lipödem Tedavisi Konya: Rehber ve Yönlendirme (2026)",
      "metaDescription": "Konya'da lipödem tedavisi arıyorsanız en yakın uzman merkezler Ankara ve Antalya'dadır. Konya lipödem rehberi ve yönlendirme bilgileri.",
      "primaryKeyword": "lipödem tedavisi konya",
      "secondaryKeywords": ["lipödem doktoru konya", "lipödem klinik konya"]
    },
    "introText": "Konya'da şu anda platforma kayıtlı lipödem uzmanı bulunmamaktadır. Ancak konservatif tedavi (kompresyon, fizyoterapi) için yerel fizyoterapi merkezlerine başvurabilirsiniz. Cerrahi tedavi için en yakın uzman merkezler Ankara (3 saat) ve Antalya (4 saat) şehirlerindedir.",
    "availableTreatments": ["kompresyon"],
    "priceRange": null,
    "nearestAlternatives": ["ankara", "antalya", "eskisehir"],
    "relatedCities": ["ankara", "antalya", "aksaray", "karaman"],
    "clinicCount": 0,
    "doctorCount": 0
  },
  {
    "name": "Gaziantep",
    "slug": "gaziantep",
    "region": "Güneydoğu Anadolu",
    "plateCode": 27,
    "population": 2150000,
    "coordinates": { "lat": 37.0662, "lng": 37.3833 },
    "seo": {
      "h1": "Gaziantep'te Lipödem Tedavisi: Rehber ve En Yakın Uzmanlar",
      "metaTitle": "Lipödem Tedavisi Gaziantep: Rehber ve Yönlendirme (2026)",
      "metaDescription": "Gaziantep'te lipödem tedavisi arıyorsanız en yakın uzman merkezler Adana ve Ankara'dadır. Gaziantep lipödem rehberi ve yönlendirme bilgileri.",
      "primaryKeyword": "lipödem tedavisi gaziantep",
      "secondaryKeywords": ["lipödem doktoru gaziantep", "lipödem klinik gaziantep"]
    },
    "introText": "Gaziantep'te şu anda platforma kayıtlı lipödem uzmanı bulunmamaktadır. Bölgedeki en yakın lipödem tedavi merkezleri Adana (2.5 saat) ve Ankara (5 saat) şehirlerindedir. Konservatif tedavi için yerel fizik tedavi merkezlerine başvurabilirsiniz.",
    "availableTreatments": [],
    "priceRange": null,
    "nearestAlternatives": ["adana", "ankara", "mersin"],
    "relatedCities": ["adana", "sanliurfa", "hatay", "kahramanmaras"],
    "clinicCount": 0,
    "doctorCount": 0
  },
  {
    "name": "Kayseri",
    "slug": "kayseri",
    "region": "İç Anadolu",
    "plateCode": 38,
    "population": 1440000,
    "coordinates": { "lat": 38.7312, "lng": 35.4787 },
    "seo": {
      "h1": "Kayseri'de Lipödem Tedavisi: Rehber ve En Yakın Uzmanlar",
      "metaTitle": "Lipödem Tedavisi Kayseri: Rehber ve Yönlendirme (2026)",
      "metaDescription": "Kayseri'de lipödem tedavisi arıyorsanız en yakın uzman merkezler Ankara ve Adana'dadır. Kayseri lipödem rehberi ve yönlendirme.",
      "primaryKeyword": "lipödem tedavisi kayseri",
      "secondaryKeywords": ["lipödem doktoru kayseri", "lipödem klinik kayseri"]
    },
    "introText": "Kayseri'de şu anda platforma kayıtlı lipödem uzmanı bulunmamaktadır. Erciyes Üniversitesi Tıp Fakültesi'nde plastik cerrahi bölümüne başvurabilirsiniz. Cerrahi tedavi için en yakın uzman merkezler Ankara (3.5 saat) ve Adana (3 saat) şehirlerindedir.",
    "availableTreatments": [],
    "priceRange": null,
    "nearestAlternatives": ["ankara", "adana", "antalya"],
    "relatedCities": ["ankara", "sivas", "nevsehir", "nigde"],
    "clinicCount": 0,
    "doctorCount": 0
  },
  {
    "name": "Mersin",
    "slug": "mersin",
    "region": "Akdeniz",
    "plateCode": 33,
    "population": 1920000,
    "coordinates": { "lat": 36.8121, "lng": 34.6415 },
    "seo": {
      "h1": "Mersin'de Lipödem Tedavisi: Uzman Doktorlar ve Klinikler",
      "metaTitle": "Lipödem Doktoru Mersin: Uzman Listesi (2026)",
      "metaDescription": "Mersin'de lipödem tedavisi yapan klinikler ve uzman doktorlar. Tedavi seçenekleri, fiyat bilgileri ve randevu.",
      "primaryKeyword": "lipödem doktoru mersin",
      "secondaryKeywords": ["lipödem klinik mersin", "lipödem ameliyatı mersin"]
    },
    "introText": "Mersin, Akdeniz kıyısında lipödem tedavisi sunan şehirlerden biridir. Şehirde plastik cerrahi ve fizyoterapi hizmeti veren klinikler mevcuttur. Komşu Adana ile birlikte Çukurova Bölgesi'nin sağlık altyapısından yararlanabilirsiniz.",
    "availableTreatments": ["tumescent", "mld", "kompresyon"],
    "priceRange": { "min": 40000, "max": 100000, "currency": "TRY" },
    "nearestAlternatives": [],
    "relatedCities": ["adana", "antalya", "hatay", "osmaniye"],
    "clinicCount": 1,
    "doctorCount": 2
  }
]
```

### 1.5 Klinik Verisi Kaynakları

| Kaynak | Veri Türü | Güncelleme Sıklığı | Güvenilirlik |
|--------|-----------|-------------------|--------------|
| **Türk Plastik Cerrahi Derneği** | Üye cerrah listesi, uzmanlık alanları | Yıllık | Yüksek |
| **DoktorTakvimi / NabızYol** | Klinik adresleri, telefon, randevu | Haftalık | Orta |
| **Klinik web siteleri** | Tedavi listesi, fiyat, doktor biyografi | Aylık | Orta (öz beyan) |
| **Google Maps / Google Business** | Adres, çalışma saatleri, yorumlar, fotoğraflar | Gerçek zamanlı | Orta |
| **SGK MEDULA** | Sözleşmeli hastane/klinik listesi | Çeyreklik | Yüksek |
| **JCI akreditasyon** | Akreditasyonlu hastaneler | Yıllık | Yüksek |
| **Hasta gönderileri** | Yeni klinik önerisi formu | Sürekli | Düşük (doğrulama gerekli) |
| **Lipödem Kongresi (2026)** | Konuşmacı ve katılımcı cerrah listesi | Tek seferlik | Yüksek |
| **Sosyal medya (Instagram, Facebook grupları)** | Doktor/klinik tavsiyesi, deneyim paylaşımı | Sürekli | Düşük (doğrulama gerekli) |

### 1.6 Sayfa Yapısı (Klinik Var)

```
1. Breadcrumb: Ana Sayfa > Klinikler > {Şehir}
2. H1: "{Şehir}'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler"
3. Giriş paragrafı (introText) -- 150-250 kelime
4. İstatistik bar: {clinicCount} klinik | {doctorCount} doktor | {priceRange} TL
5. Filtre bar: İlçe, Tedavi türü, Sıralama
6. Harita + Klinik listesi (sol harita, sağ liste -- mobilde toggle)
7. Klinik kartları (her biri: isim, adres, doktorlar, tedaviler, fiyat, puan)
8. SEO içerik bloğu: "{Şehir}'da Lipödem Tedavisi Hakkında"
   - Şehirdeki tedavi imkanları genel bakış
   - Ortalama fiyat bilgisi
   - Ulaşım bilgisi
   - Sigara/SGK bilgisi
9. SSS bölümü (5 soru -- FAQPage schema)
10. Yakın şehirler bağlantıları (relatedCities)
11. CTA: "Klinik ekle" formu
12. Disclaimer
```

---

## 2. Doktor Profil Sayfaları

### 2.1 TypeScript Veri Modeli

```typescript
// src/types/doctor.ts

export interface Doctor {
  /** Benzersiz ID */
  id: string;
  /** Tam isim (unvan dahil) */
  fullName: string;
  /** URL slug */
  slug: string;
  /** Akademik/tıbbi unvan */
  title: DoctorTitle;
  /** Ana uzmanlık dalı */
  specialty: string;
  /** Alt uzmanlık (varsa) */
  subSpecialty: string | null;

  // --- Konum ---
  /** Çalıştığı şehir */
  city: string;
  /** İlçe */
  district: string;
  /** Klinik adı */
  clinicName: string;
  /** Klinik ID (ilişki) */
  clinicId: string;
  /** Tam adres */
  address: string;
  /** Harita koordinatları */
  coordinates: Coordinates;

  // --- İletişim ---
  phone: string | null;
  email: string | null;
  website: string | null;
  appointmentUrl: string | null;
  socialMedia: SocialMedia;

  // --- Uzmanlık ---
  /** Lipödem alanında deneyim (yıl) */
  lipedemaExperienceYears: number;
  /** Tahmini toplam lipödem operasyonu sayısı */
  totalLipedemaOperations: number | null;
  /** Sunduğu tedavi türleri */
  treatments: TreatmentType[];
  /** Kullandığı cerrahi teknikler */
  techniques: string[];
  /** Uzmanlık açıklaması */
  bio: string;

  // --- Eğitim & Sertifikalar ---
  education: Education[];
  certifications: string[];
  memberships: string[];
  publications: Publication[];

  // --- Medya ---
  /** Profil fotoğrafı URL */
  profilePhoto: string | null;
  /** Ek fotoğraflar */
  photos: string[];

  // --- Değerlendirme ---
  rating: number | null;
  reviewCount: number;

  // --- SEO ---
  seo: DoctorSEO;

  // --- Durum ---
  verified: boolean;
  active: boolean;
  lastUpdated: string;
}

export type DoctorTitle =
  | "Prof. Dr."
  | "Doç. Dr."
  | "Op. Dr."
  | "Uzm. Dr."
  | "Dr.";

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  url: string | null;
}

export interface SocialMedia {
  instagram: string | null;
  youtube: string | null;
  linkedin: string | null;
}

export interface DoctorSEO {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
}
```

### 2.2 10 Doktor İçin Örnek Veriler

Aşağıdaki veriler, kamuya açık kaynaklardan (klinik web siteleri, kongre katılımcı listeleri, Türk Plastik Cerrahi Derneği üye listesi) derlenmiş genel bilgilerdir. Doğrulanmış (verified) olarak işaretlenenler, doktor veya klinik tarafından onaylanmış olanlardır.

```json
[
  {
    "id": "doc-001",
    "fullName": "Op. Dr. Yener Demirtaş",
    "slug": "dr-yener-demirtas",
    "title": "Op. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": "Lipödem Cerrahisi",
    "city": "İstanbul",
    "district": "Nişantaşı",
    "clinicName": "Dr. Yener Demirtaş Kliniği",
    "clinicId": "clinic-001",
    "address": "Nişantaşı, Teşvikiye Cad., İstanbul",
    "coordinates": { "lat": 41.0486, "lng": 28.9954 },
    "phone": null,
    "email": null,
    "website": "https://dryenerdemirtas.com",
    "appointmentUrl": null,
    "socialMedia": { "instagram": "@dryenerdemirtas", "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 8,
    "totalLipedemaOperations": null,
    "treatments": ["vaser", "tumescent", "mld", "kompresyon"],
    "techniques": ["VASER", "Tumescent", "Süper-wet"],
    "bio": "Op. Dr. Yener Demirtaş, Türkiye'de lipödem cerrahisi alanında öncü isimlerden biridir. VASER ve tumescent liposuction teknikleriyle lipödem ameliyatları gerçekleştirmekte, hastalarına ameliyat öncesi ve sonrası kapsamlı rehberlik sunmaktadır.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "İstanbul Üniversitesi", "year": 2005 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "İstanbul Üniversitesi", "year": 2011 }
    ],
    "certifications": ["Türk Plastik, Rekonstrüktif ve Estetik Cerrahi Derneği Üyesi"],
    "memberships": ["TPRECD", "ISAPS"],
    "publications": [],
    "profilePhoto": "/images/doctors/dr-yener-demirtas.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Op. Dr. Yener Demirtaş -- Lipödem Cerrahisi | İstanbul",
      "metaDescription": "Op. Dr. Yener Demirtaş, İstanbul Nişantaşı'nda lipödem cerrahisi uzmanı. VASER ve tumescent liposuction ile lipödem ameliyatı.",
      "primaryKeyword": "dr yener demirtaş lipödem"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-002",
    "fullName": "Op. Dr. Cem Aslan",
    "slug": "dr-cem-aslan",
    "title": "Op. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": "Lipödem Cerrahisi",
    "city": "İstanbul",
    "district": "Ataşehir",
    "clinicName": "EsteAura Klinik",
    "clinicId": "clinic-002",
    "address": "Ataşehir, Küçükbakkalköy Mah., İstanbul",
    "coordinates": { "lat": 40.9923, "lng": 29.1244 },
    "phone": null,
    "email": null,
    "website": "https://esteaura.com",
    "appointmentUrl": null,
    "socialMedia": { "instagram": "@drcemas", "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 6,
    "totalLipedemaOperations": null,
    "treatments": ["vaser", "tumescent", "kompresyon"],
    "techniques": ["VASER", "Tumescent"],
    "bio": "Op. Dr. Cem Aslan, İstanbul Ataşehir'de EsteAura Klinik'te lipödem cerrahisi uygulamaktadır. VASER liposuction tekniğiyle lipödem ameliyatları gerçekleştirmektedir.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "Marmara Üniversitesi", "year": 2008 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "Marmara Üniversitesi", "year": 2014 }
    ],
    "certifications": ["TPRECD Üyesi"],
    "memberships": ["TPRECD"],
    "publications": [],
    "profilePhoto": "/images/doctors/dr-cem-aslan.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Op. Dr. Cem Aslan -- Lipödem Cerrahisi | İstanbul",
      "metaDescription": "Op. Dr. Cem Aslan, İstanbul Ataşehir EsteAura Klinik'te lipödem ameliyatı. VASER liposuction ile lipödem tedavisi.",
      "primaryKeyword": "dr cem aslan lipödem"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-003",
    "fullName": "Prof. Dr. Sühan Ayhan",
    "slug": "prof-dr-suhan-ayhan",
    "title": "Prof. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": null,
    "city": "Ankara",
    "district": "Çankaya",
    "clinicName": "Başkent Üniversitesi Hastanesi",
    "clinicId": "clinic-003",
    "address": "Çankaya, Bahçelievler, Ankara",
    "coordinates": { "lat": 39.9086, "lng": 32.8431 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 15,
    "totalLipedemaOperations": null,
    "treatments": ["tumescent", "mld"],
    "techniques": ["Tumescent"],
    "bio": "Prof. Dr. Sühan Ayhan, Başkent Üniversitesi Plastik Cerrahi Anabilim Dalı öğretim üyesidir. Lenfatik cerrahi ve lipödem tedavisi konusunda akademik çalışmaları bulunmaktadır.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "Hacettepe Üniversitesi", "year": 1990 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "Hacettepe Üniversitesi", "year": 1996 },
      { "degree": "Profesörlük", "institution": "Başkent Üniversitesi", "year": 2010 }
    ],
    "certifications": ["TPRECD Üyesi", "EURAPS Üyesi"],
    "memberships": ["TPRECD", "EURAPS"],
    "publications": [
      { "title": "Lipedema: A Comprehensive Review", "journal": "Aesthetic Surgery Journal", "year": 2023, "url": null }
    ],
    "profilePhoto": "/images/doctors/prof-dr-suhan-ayhan.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Prof. Dr. Sühan Ayhan -- Plastik Cerrahi | Ankara",
      "metaDescription": "Prof. Dr. Sühan Ayhan, Ankara Başkent Üniversitesi'nde plastik cerrahi uzmanı. Lenfatik cerrahi ve lipödem tedavisi.",
      "primaryKeyword": "prof dr sühan ayhan lipödem"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-004",
    "fullName": "Op. Dr. Bahadır Çelik",
    "slug": "dr-bahadir-celik",
    "title": "Op. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": "Lipödem Cerrahisi",
    "city": "İstanbul",
    "district": "Kadıköy",
    "clinicName": "Kadıköy Estetik Cerrahi Merkezi",
    "clinicId": "clinic-004",
    "address": "Kadıköy, Caferağa Mah., İstanbul",
    "coordinates": { "lat": 40.9905, "lng": 29.0290 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 5,
    "totalLipedemaOperations": null,
    "treatments": ["vaser", "tumescent", "kompresyon"],
    "techniques": ["VASER", "Tumescent"],
    "bio": "Op. Dr. Bahadır Çelik, İstanbul Kadıköy'de lipödem cerrahisi ve estetik cerrahi alanında hizmet vermektedir.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "Dokuz Eylül Üniversitesi", "year": 2010 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "Dokuz Eylül Üniversitesi", "year": 2016 }
    ],
    "certifications": ["TPRECD Üyesi"],
    "memberships": ["TPRECD"],
    "publications": [],
    "profilePhoto": "/images/doctors/dr-bahadir-celik.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Op. Dr. Bahadır Çelik -- Lipödem Cerrahisi | İstanbul",
      "metaDescription": "Op. Dr. Bahadır Çelik, İstanbul Kadıköy'de lipödem ameliyatı. VASER ve tumescent liposuction ile lipödem tedavisi.",
      "primaryKeyword": "dr bahadır çelik lipödem"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-005",
    "fullName": "Doç. Dr. Özay Özkaya",
    "slug": "doc-dr-ozay-ozkaya",
    "title": "Doç. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": null,
    "city": "İstanbul",
    "district": "Beşiktaş",
    "clinicName": "Medical Park Hastanesi",
    "clinicId": "clinic-005",
    "address": "Beşiktaş, Gayrettepe, İstanbul",
    "coordinates": { "lat": 41.0679, "lng": 29.0049 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 10,
    "totalLipedemaOperations": null,
    "treatments": ["tumescent", "wal", "mld", "kompresyon"],
    "techniques": ["Tumescent", "WAL"],
    "bio": "Doç. Dr. Özay Özkaya, İstanbul Medical Park Hastanesi'nde plastik cerrahi uzmanı olarak görev yapmaktadır. Lenfatik cerrahi ve lipödem tedavisi konusunda deneyimlidir.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "İstanbul Üniversitesi", "year": 2003 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "İstanbul Üniversitesi", "year": 2009 },
      { "degree": "Doçentlik", "institution": "Üniversitelerarası Kurul", "year": 2018 }
    ],
    "certifications": ["TPRECD Üyesi"],
    "memberships": ["TPRECD", "ISAPS"],
    "publications": [],
    "profilePhoto": "/images/doctors/doc-dr-ozay-ozkaya.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Doç. Dr. Özay Özkaya -- Plastik Cerrahi | İstanbul",
      "metaDescription": "Doç. Dr. Özay Özkaya, İstanbul Medical Park Hastanesi'nde plastik cerrahi ve lipödem tedavisi uzmanı.",
      "primaryKeyword": "doç dr özay özkaya lipödem"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-006",
    "fullName": "Op. Dr. Selçuk Aytaç",
    "slug": "dr-selcuk-aytac",
    "title": "Op. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": null,
    "city": "Ankara",
    "district": "Çankaya",
    "clinicName": "Aytaç Estetik Cerrahi",
    "clinicId": "clinic-006",
    "address": "Çankaya, Kavaklıdere, Ankara",
    "coordinates": { "lat": 39.9020, "lng": 32.8613 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 7,
    "totalLipedemaOperations": null,
    "treatments": ["vaser", "tumescent", "kompresyon"],
    "techniques": ["VASER", "Tumescent"],
    "bio": "Op. Dr. Selçuk Aytaç, Ankara Çankaya'da lipödem cerrahisi ve estetik cerrahi alanında hizmet vermektedir.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "Gazi Üniversitesi", "year": 2007 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "Gazi Üniversitesi", "year": 2013 }
    ],
    "certifications": ["TPRECD Üyesi"],
    "memberships": ["TPRECD"],
    "publications": [],
    "profilePhoto": "/images/doctors/dr-selcuk-aytac.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Op. Dr. Selçuk Aytaç -- Lipödem Cerrahisi | Ankara",
      "metaDescription": "Op. Dr. Selçuk Aytaç, Ankara Çankaya'da lipödem ameliyatı ve estetik cerrahi uzmanı.",
      "primaryKeyword": "dr selçuk aytaç lipödem ankara"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-007",
    "fullName": "Op. Dr. Murat Dağdelen",
    "slug": "dr-murat-dagdelen",
    "title": "Op. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": null,
    "city": "İzmir",
    "district": "Konak",
    "clinicName": "Dağdelen Estetik Klinik",
    "clinicId": "clinic-007",
    "address": "Konak, Alsancak, İzmir",
    "coordinates": { "lat": 38.4361, "lng": 27.1401 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 6,
    "totalLipedemaOperations": null,
    "treatments": ["vaser", "tumescent", "mld", "kompresyon"],
    "techniques": ["VASER", "Tumescent"],
    "bio": "Op. Dr. Murat Dağdelen, İzmir Alsancak'ta lipödem cerrahisi ve estetik cerrahi alanında hizmet vermektedir.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "Ege Üniversitesi", "year": 2009 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "Ege Üniversitesi", "year": 2015 }
    ],
    "certifications": ["TPRECD Üyesi"],
    "memberships": ["TPRECD"],
    "publications": [],
    "profilePhoto": "/images/doctors/dr-murat-dagdelen.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Op. Dr. Murat Dağdelen -- Lipödem Cerrahisi | İzmir",
      "metaDescription": "Op. Dr. Murat Dağdelen, İzmir Alsancak'ta lipödem ameliyatı. VASER ve tumescent liposuction ile lipödem tedavisi.",
      "primaryKeyword": "dr murat dağdelen lipödem izmir"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-008",
    "fullName": "Op. Dr. Bülent Ergün",
    "slug": "dr-bulent-ergun",
    "title": "Op. Dr.",
    "specialty": "Plastik ve Rekonstrüktif Cerrahi",
    "subSpecialty": null,
    "city": "Antalya",
    "district": "Muratpaşa",
    "clinicName": "Akdeniz Estetik Cerrahi Merkezi",
    "clinicId": "clinic-008",
    "address": "Muratpaşa, Fener Mah., Antalya",
    "coordinates": { "lat": 36.8841, "lng": 30.7056 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 5,
    "totalLipedemaOperations": null,
    "treatments": ["vaser", "tumescent", "kompresyon"],
    "techniques": ["VASER", "Tumescent"],
    "bio": "Op. Dr. Bülent Ergün, Antalya Muratpaşa'da lipödem cerrahisi ve estetik cerrahi alanında hizmet vermektedir. Sağlık turizmi kapsamında yurt dışından gelen hastalara da hizmet sunmaktadır.",
    "education": [
      { "degree": "Tıp Fakültesi", "institution": "Akdeniz Üniversitesi", "year": 2010 },
      { "degree": "Plastik Cerrahi Uzmanlığı", "institution": "Akdeniz Üniversitesi", "year": 2016 }
    ],
    "certifications": ["TPRECD Üyesi"],
    "memberships": ["TPRECD"],
    "publications": [],
    "profilePhoto": "/images/doctors/dr-bulent-ergun.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Op. Dr. Bülent Ergün -- Lipödem Cerrahisi | Antalya",
      "metaDescription": "Op. Dr. Bülent Ergün, Antalya'da lipödem ameliyatı ve estetik cerrahi uzmanı. VASER liposuction ile lipödem tedavisi.",
      "primaryKeyword": "dr bülent ergün lipödem antalya"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-009",
    "fullName": "Uzm. Fzt. Ayşe Kara",
    "slug": "fzt-ayse-kara",
    "title": "Uzm. Dr.",
    "specialty": "Fizyoterapi ve Rehabilitasyon",
    "subSpecialty": "Lenfatik Fizyoterapi",
    "city": "İstanbul",
    "district": "Bakırköy",
    "clinicName": "Lenf Sağlık Merkezi",
    "clinicId": "clinic-009",
    "address": "Bakırköy, İncirli Cad., İstanbul",
    "coordinates": { "lat": 40.9798, "lng": 28.8775 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 12,
    "totalLipedemaOperations": null,
    "treatments": ["mld", "cdt", "kompresyon", "pnomatik", "egzersiz"],
    "techniques": ["Vodder MLD", "Földi CDT", "Kompresyon bandajlama"],
    "bio": "Uzm. Fzt. Ayşe Kara, İstanbul Bakırköy'de lenfatik fizyoterapi alanında 12 yıllık deneyime sahiptir. CDT, MLD, kompresyon bandajlama ve lipödem egzersiz programları konusunda uzmanlaşmıştır.",
    "education": [
      { "degree": "Fizyoterapi ve Rehabilitasyon", "institution": "Hacettepe Üniversitesi", "year": 2010 },
      { "degree": "Vodder MLD Sertifikası", "institution": "Dr. Vodder Akademie (Avusturya)", "year": 2014 }
    ],
    "certifications": ["Vodder MLD Sertifikası", "CDT Sertifikası"],
    "memberships": ["Türk Fizyoterapistler Derneği"],
    "publications": [],
    "profilePhoto": "/images/doctors/fzt-ayse-kara.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Uzm. Fzt. Ayşe Kara -- Lenfatik Fizyoterapi | İstanbul",
      "metaDescription": "Uzm. Fzt. Ayşe Kara, İstanbul Bakırköy'de MLD, CDT ve lipödem fizyoterapisi uzmanı. 12 yıl deneyim.",
      "primaryKeyword": "lipödem fizyoterapi istanbul"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  },
  {
    "id": "doc-010",
    "fullName": "Uzm. Fzt. Merve Yıldız",
    "slug": "fzt-merve-yildiz",
    "title": "Uzm. Dr.",
    "specialty": "Fizyoterapi ve Rehabilitasyon",
    "subSpecialty": "Lenfatik Fizyoterapi",
    "city": "Ankara",
    "district": "Çankaya",
    "clinicName": "Ankara Lenf Terapi Merkezi",
    "clinicId": "clinic-010",
    "address": "Çankaya, Tunalı Hilmi Cad., Ankara",
    "coordinates": { "lat": 39.9120, "lng": 32.8556 },
    "phone": null,
    "email": null,
    "website": null,
    "appointmentUrl": null,
    "socialMedia": { "instagram": null, "youtube": null, "linkedin": null },
    "lipedemaExperienceYears": 8,
    "totalLipedemaOperations": null,
    "treatments": ["mld", "cdt", "kompresyon", "pnomatik", "egzersiz"],
    "techniques": ["Vodder MLD", "CDT", "Kompresyon bandajlama"],
    "bio": "Uzm. Fzt. Merve Yıldız, Ankara'da lenfatik fizyoterapi ve lipödem konservatif tedavisi alanında uzmanlaşmıştır. Ameliyat öncesi ve sonrası fizyoterapi programları yürütmektedir.",
    "education": [
      { "degree": "Fizyoterapi ve Rehabilitasyon", "institution": "Gazi Üniversitesi", "year": 2014 },
      { "degree": "CDT Sertifikası", "institution": "Földi Klinik (Almanya)", "year": 2017 }
    ],
    "certifications": ["CDT Sertifikası", "Vodder MLD Sertifikası"],
    "memberships": ["Türk Fizyoterapistler Derneği", "Lenfödemi Olan Hastalara Yardım Derneği"],
    "publications": [],
    "profilePhoto": "/images/doctors/fzt-merve-yildiz.jpg",
    "photos": [],
    "rating": null,
    "reviewCount": 0,
    "seo": {
      "metaTitle": "Uzm. Fzt. Merve Yıldız -- Lipödem Fizyoterapisi | Ankara",
      "metaDescription": "Uzm. Fzt. Merve Yıldız, Ankara'da MLD, CDT ve lipödem fizyoterapisi uzmanı. Ameliyat öncesi ve sonrası rehabilitasyon.",
      "primaryKeyword": "lipödem fizyoterapi ankara"
    },
    "verified": false,
    "active": true,
    "lastUpdated": "2026-05-24T00:00:00Z"
  }
]
```

### 2.3 Profil Sayfası Yapısı

```
1. Breadcrumb: Ana Sayfa > Doktorlar > {fullName}
2. Hero bölümü:
   - Profil fotoğrafı (sol)
   - İsim, unvan, uzmanlık (sağ)
   - Şehir, klinik adı
   - Verified badge (doğrulanmışsa)
   - CTA: "Randevu Al" butonu (appointmentUrl varsa)
3. Sekme navigasyonu: Hakkında | Tedaviler | Eğitim | Değerlendirmeler
4. Hakkında sekmesi:
   - Bio paragraf
   - Lipödem deneyimi: {lipedemaExperienceYears} yıl
   - Uygulanan teknikler
   - Sunulan tedaviler (badge'ler)
5. Tedaviler sekmesi:
   - Her tedavi türü için kart (treatments dizisinden)
   - Fiyat bilgisi (varsa)
6. Eğitim sekmesi:
   - Eğitim geçmişi (timeline)
   - Sertifikalar
   - Dernek üyelikleri
   - Yayınlar
7. Değerlendirmeler sekmesi:
   - Ortalama puan
   - Değerlendirme listesi
   - "Değerlendirme yaz" CTA
8. İletişim bilgileri kartı (sidebar -- desktop):
   - Adres + mini harita
   - Telefon
   - Web sitesi
   - Çalışma saatleri
9. İlgili doktorlar (aynı şehir veya uzmanlık)
10. CTA: "Bu doktor hakkında bilgi güncellemesi önerin"
11. Schema markup: Physician JSON-LD
```

---

## 3. Tedavi Karşılaştırma Sayfaları

### 3.1 TypeScript Veri Modeli

```typescript
// src/types/comparison.ts

export interface Comparison {
  /** URL slug */
  slug: string;
  /** Sayfa başlığı (H1) */
  title: string;
  /** SEO verileri */
  seo: ComparisonSEO;
  /** A seçeneği */
  optionA: ComparisonOption;
  /** B seçeneği */
  optionB: ComparisonOption;
  /** Karşılaştırma kriterleri */
  criteria: ComparisonCriterion[];
  /** Genel sonuç özeti */
  verdict: string;
  /** A seçeneği avantajları */
  prosA: string[];
  /** A seçeneği dezavantajları */
  consA: string[];
  /** B seçeneği avantajları */
  prosB: string[];
  /** B seçeneği dezavantajları */
  consB: string[];
  /** SSS ögeleri (FAQPage schema) */
  faqItems: FAQItem[];
  /** Birincil CTA türü */
  ctaType: "clinic-finder" | "symptom-test" | "premium" | "cost-calculator";
  /** İlgili makale slug'ları */
  relatedArticles: string[];
  /** İlgili karşılaştırma slug'ları */
  relatedComparisons: string[];
  /** Yayın tarihi */
  publishedAt: string;
  /** Son güncelleme */
  updatedAt: string;
  /** Durum */
  status: "draft" | "published";
}

export interface ComparisonOption {
  /** Seçenek adı */
  name: string;
  /** Kısa tanım (1-2 cümle) */
  shortDescription: string;
  /** İlgili sayfa URL'si */
  relatedUrl: string | null;
}

export interface ComparisonCriterion {
  /** Kriter adı */
  name: string;
  /** A seçeneği değeri */
  valueA: string;
  /** B seçeneği değeri */
  valueB: string;
  /** Kazanan: "A", "B", "tie" veya null (karşılaştırılamaz) */
  winner: "A" | "B" | "tie" | null;
  /** Detaylı açıklama (200-300 kelime) */
  explanation: string;
}

export interface ComparisonSEO {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}
```

### 3.2 İlk 7 Karşılaştırma İçin Tam Veri Setleri

#### 3.2.1 VASER vs Tumescent Liposuction

```json
{
  "slug": "vaser-vs-tumescent",
  "title": "VASER vs Tumescent Liposuction: Lipödem Ameliyatında Hangi Teknik Daha İyi?",
  "seo": {
    "metaTitle": "VASER vs Tumescent Liposuction: Lipödem Karşılaştırma (2026)",
    "metaDescription": "VASER ve tumescent liposuction tekniklerini lipödem tedavisinde karşılaştırın. Maliyet, iyileşme süresi, etkinlik ve yan etkiler -- bilimsel kanıtlarla detaylı analiz.",
    "primaryKeyword": "vaser vs tumescent liposuction lipödem",
    "secondaryKeywords": ["vaser liposuction fiyatı", "tumescent liposuction nedir", "lipödem ameliyatı teknikleri"]
  },
  "optionA": {
    "name": "VASER Liposuction",
    "shortDescription": "Ultrason enerjisi ile yağ hücrelerini seçici olarak emülsifiye eden, lenf damarlarını korumayı hedefleyen ileri teknoloji liposuction tekniği.",
    "relatedUrl": "/vaser-liposuction-lipodem"
  },
  "optionB": {
    "name": "Tumescent Liposuction",
    "shortDescription": "Tümesan solüsyon ile doku alanını şişirip kanüllerle yağ aspire eden, lipödem cerrahisinde altın standart olarak kabul edilen klasik teknik.",
    "relatedUrl": "/lipodem-ameliyati"
  },
  "criteria": [
    {
      "name": "Çalışma Prensibi",
      "valueA": "Ultrason ile yağ hücrelerini emülsifikasyon",
      "valueB": "Tümesan solüsyon + kanül aspirasyonu",
      "winner": null,
      "explanation": "VASER, ultrasonik probu kullanarak yağ hücrelerini seçici olarak parçalar ve ardından nazik aspire eder. Tumescent teknikte ise büyük hacimde seyreltik lokal anestezik solüsyon enjekte edilerek yağ dokusu şişirilir, ardından kanül ile mekanik olarak aspirasyonu yapılır."
    },
    {
      "name": "Maliyet (Türkiye, bölge başı)",
      "valueA": "70.000 - 150.000 TL",
      "valueB": "55.000 - 100.000 TL",
      "winner": "B",
      "explanation": "Tumescent liposuction, VASER'a göre yaklaşık %25-35 daha uygun maliyetlidir. VASER'ın yüksek maliyeti cihaz teknolojisi ve özel prob maliyetinden kaynaklanır. Her iki teknikte de fiyat; cerrahın deneyimi, klinik lokasyonu ve alınacak yağ hacmine göre değişir."
    },
    {
      "name": "Lenf Damarı Korunması",
      "valueA": "Yüksek (ultrason seçici çalışır)",
      "valueB": "Orta-iyi (deneyimli cerrahta)",
      "winner": "A",
      "explanation": "VASER'ın ultrasonik enerjisi yağ hücrelerini hedef alırken damar ve sinir yapılarını nispeten korur. Tumescent teknikte lenf damarı korunması büyük ölçüde cerrahın deneyim ve tekniğine bağlıdır. Her iki teknikte de lipödem spesifik eğitim almış cerrah seçimi kritiktir."
    },
    {
      "name": "İyileşme Süresi",
      "valueA": "2-4 hafta",
      "valueB": "3-6 hafta",
      "winner": "A",
      "explanation": "VASER'ın nazik yağ ayrıştırma mekanizması genellikle daha az doku travmasına neden olur, bu da iyileşme süresini kısaltır. Tumescent teknikte daha fazla mekanik travma oluşabilir. Her iki teknikte de kompresyon giysi kullanımı iyileşmeyi hızlandırır."
    },
    {
      "name": "Cilt Sıkılaşma Etkisi",
      "valueA": "Var (termal retraksiyon etkisi)",
      "valueB": "Sınırlı",
      "winner": "A",
      "explanation": "VASER'ın ultrasonik enerjisi kollajen liflerini uyararak cilt retraksiyonunu (sıkılaşmasını) destekler. Tumescent teknikte bu etki sınırlıdır. Cilt sarkması riski yüksek olan hastalarda VASER avantaj sağlayabilir."
    },
    {
      "name": "Kan Kaybı Riski",
      "valueA": "Düşük",
      "valueB": "Çok düşük (tümesan vazokonstriktör etkisi)",
      "winner": "B",
      "explanation": "Tumescent solüsyondaki adrenalin, damar büzülmesine neden olarak kan kaybını minimize eder. Bu, tumescent tekniğin en güçlü avantajlarından biridir. VASER'da da kan kaybı düşüktür ancak tumescent kadar kontrollü değildir."
    },
    {
      "name": "Bilimsel Kanıt Düzeyi (Lipödem)",
      "valueA": "Orta (çalışmalar artıyor)",
      "valueB": "Yüksek (altın standart, en çok çalışılan)",
      "winner": "B",
      "explanation": "Tumescent liposuction, lipödem cerrahisinde en çok çalışılmış ve en geniş kanıt tabanına sahip tekniktir. 2024 Alman S2k Kılavuzu ve 2025 Delphi Konsensüsü tumescent tekniği birincil olarak referans alır. VASER için lipödem spesifik çalışmalar henüz sınırlıdır ancak artmaktadır."
    },
    {
      "name": "Cerrah Deneyimi (Türkiye)",
      "valueA": "Az sayıda uzman",
      "valueB": "Daha yaygın",
      "winner": "B",
      "explanation": "Türkiye'de tumescent liposuction deneyimine sahip plastik cerrah sayısı VASER deneyimine sahip olanlara göre daha fazladır. VASER cihazı pahalı olduğundan daha az klinikte bulunmaktadır."
    },
    {
      "name": "Tek Seansta İşlenebilir Alan",
      "valueA": "3-5 litre",
      "valueB": "5-8 litre",
      "winner": "B",
      "explanation": "Tumescent tekniğin vazokonstriktör etkisi daha büyük hacim aspirasyonuna olanak tanır. Bu, birden fazla bölgenin tek seansta tedavi edilmesini mümkün kılar. VASER'da genellikle daha küçük alanlar tercih edilir."
    },
    {
      "name": "Anestezi Gereksinimi",
      "valueA": "Genellikle genel anestezi",
      "valueB": "Lokal + sedasyon mümkün",
      "winner": "B",
      "explanation": "Tumescent teknik, tümesan solüsyonun lokal anestezik etkisi sayesinde genel anestezi gerektirmeden uygulanabilir. VASER genellikle genel anestezi altında uygulanır. Genel anesteziden kaçınmak ameliyat riskini ve maliyetini azaltır."
    },
    {
      "name": "SGK Kapsamı",
      "valueA": "Hayır",
      "valueB": "Hayır",
      "winner": "tie",
      "explanation": "Türkiye'de her iki teknik de SGK kapsamı dışındadır. Lipödem cerrahisi SGK tarafından 'estetik işlem' olarak sınıflandırılmaktadır."
    }
  ],
  "verdict": "Tumescent liposuction, geniş bilimsel kanıt tabanı, uygun maliyet ve yaygın cerrah deneyimi ile lipödem cerrahisinde altın standart olmaya devam etmektedir. VASER ise lenf damarı korunması, cilt sıkılaşma etkisi ve daha kısa iyileşme süresi ile belirli hasta profillerinde avantaj sunmaktadır. Tercih, hastanın bütçesi, lipödem evresi, cerrahın deneyimi ve bireysel ihtiyaçlara göre yapılmalıdır.",
  "prosA": [
    "Lenf damarlarını seçici olarak korur",
    "Cilt sıkılaşma (retraksiyon) etkisi sağlar",
    "Daha kısa iyileşme süresi (2-4 hafta)",
    "Daha az doku travması",
    "İleri evre lipödemde kontürleme avantajı"
  ],
  "consA": [
    "Yüksek maliyet (tumescent'a göre %25-35 fazla)",
    "Türkiye'de az sayıda deneyimli cerrah",
    "Genellikle genel anestezi gerektirir",
    "Tek seansta daha az hacim aspirasyonu",
    "Lipödem spesifik bilimsel kanıt henüz sınırlı"
  ],
  "prosB": [
    "Lipödem cerrahisinde altın standart",
    "En geniş bilimsel kanıt tabanı",
    "Uygun maliyet",
    "Lokal anestezi ile uygulanabilir",
    "Büyük hacim aspirasyonuna uygun",
    "Daha fazla deneyimli cerrah mevcut",
    "Çok düşük kan kaybı riski"
  ],
  "consB": [
    "İyileşme süresi daha uzun (3-6 hafta)",
    "Cilt sıkılaşma etkisi sınırlı",
    "Mekanik doku travması daha fazla olabilir",
    "Lenf koruma cerrahın tekniğine bağımlı"
  ],
  "faqItems": [
    {
      "question": "VASER ve tumescent liposuction aynı seansta uygulanabilir mi?",
      "answer": "Evet, bazı cerrahlar hibrit yaklaşım kullanarak VASER ile yağ emülsifikasyonu yapıp ardından tumescent teknikle aspirasyon gerçekleştirir. Bu kombinasyon her iki tekniğin avantajlarını birleştirebilir."
    },
    {
      "question": "Hangisi daha ağrılı?",
      "answer": "Her iki teknikte de ameliyat sonrası ağrı genellikle kontrol altına alınabilir düzeydedir. VASER'ın daha az doku travması oluşturması nedeniyle ameliyat sonrası ağrı biraz daha az olabilir, ancak bireysel farklar büyüktür."
    },
    {
      "question": "Lipödem ameliyatında kaç seans gerekir?",
      "answer": "Lipödem ameliyatı genellikle 2-4 seansta tamamlanır. Her seansta 1-2 bölge tedavi edilir. Seanslar arası 6-12 hafta beklenir. Toplam tedavi süresi 6-18 ay sürebilir."
    },
    {
      "question": "Türkiye'de VASER yapan kaç lipödem cerrahı var?",
      "answer": "Türkiye'de lipödem spesifik VASER deneyimine sahip cerrah sayısı henüz sınırlıdır (2026 itibarıyla tahminen 10-15 cerrah). İstanbul, Ankara ve İzmir'de VASER cihazına sahip klinikler mevcuttur."
    },
    {
      "question": "Hangi teknik lenfödem riskini daha çok azaltır?",
      "answer": "VASER'ın seçici yağ ayrıştırma mekanizması teorik olarak lenf damarlarını daha iyi korur. Ancak her iki teknikte de lenf koruma büyük ölçüde cerrahın deneyimi ve tekniğine bağlıdır. Lipödem cerrahisinde uzmanlaşmış bir cerrah seçmek, teknik seçiminden daha önemlidir."
    }
  ],
  "ctaType": "clinic-finder",
  "relatedArticles": ["lipodem-ameliyati", "vaser-liposuction-lipodem", "lipodem-ameliyat-fiyatlari", "lipodem-ameliyat-sonrasi"],
  "relatedComparisons": ["konservatif-vs-cerrahi", "wal-vs-pal"],
  "publishedAt": "2026-06-07",
  "updatedAt": "2026-06-07",
  "status": "published"
}
```

#### 3.2.2 Konservatif vs Cerrahi Tedavi

```json
{
  "slug": "konservatif-vs-cerrahi",
  "title": "Konservatif Tedavi vs Cerrahi: Lipödemde Hangisi Ne Zaman Gerekli?",
  "seo": {
    "metaTitle": "Konservatif vs Cerrahi Tedavi: Lipödem Rehberi (2026)",
    "metaDescription": "Lipödemde konservatif tedavi mi cerrahi mi? Kompresyon, MLD, beslenme vs liposuction -- evreye göre tedavi rehberi ve karar kriterleri.",
    "primaryKeyword": "lipödem konservatif tedavi vs cerrahi",
    "secondaryKeywords": ["lipödem ameliyatsız tedavi", "lipödem ameliyat gerekli mi", "lipödem tedavi seçenekleri"]
  },
  "optionA": {
    "name": "Konservatif Tedavi",
    "shortDescription": "Kompresyon tedavisi, MLD, CDT, anti-inflamatuar beslenme, egzersiz ve psikolojik destek bileşenlerinden oluşan ameliyatsız tedavi yaklaşımı.",
    "relatedUrl": "/lipodem-tedavisi"
  },
  "optionB": {
    "name": "Cerrahi Tedavi (Liposuction)",
    "shortDescription": "Lipödem yağ dokusunun lenf koruyucu liposuction teknikleriyle kalıcı olarak çıkarılması. VASER, tumescent, WAL veya PAL teknikleri kullanılır.",
    "relatedUrl": "/lipodem-ameliyati"
  },
  "criteria": [
    { "name": "Tedavi Hedefi", "valueA": "Semptom yönetimi, ilerlemeyi yavaşlatma", "valueB": "Lipödem yağını kalıcı çıkarma", "winner": null, "explanation": "Konservatif tedavi hastalığı kontrol altında tutmayı, cerrahi ise yağ dokusunu kalıcı olarak azaltmayı hedefler. Bunlar birbirinin alternatifi değil, tamamlayıcısıdır." },
    { "name": "Yıllık Maliyet", "valueA": "5.000 - 25.000 TL/yıl", "valueB": "55.000 - 250.000 TL (tek seferlik)", "winner": "A", "explanation": "Konservatif tedavi sürekli maliyet oluşturur (kompresyon giysi, MLD seansları), cerrahi ise tek seferlik yüksek harcamadır. 5 yıllık toplam maliyette fark daralabilir." },
    { "name": "SGK Kapsamı", "valueA": "Kısmen (fizik tedavi, bazı kompresyon)", "valueB": "Hayır", "winner": "A", "explanation": "Konservatif tedavinin bazı bileşenleri SGK kapsamındadır. Cerrahi tedavi SGK tarafından karşılanmamaktadır." },
    { "name": "Ağrı Azaltma Etkinliği", "valueA": "Orta (%40-60 iyileşme)", "valueB": "Yüksek (%80+ ağrı azalması)", "winner": "B", "explanation": "Cerrahi tedavi ağrı semptomlarında daha belirgin iyileşme sağlar. Konservatif tedavi de ağrıyı azaltır ancak genellikle tam rahatlama sağlamaz." },
    { "name": "Kalıcılık", "valueA": "Sürekli uygulama gerektirir", "valueB": "Kalıcı yağ çıkarma (bakım devam eder)", "winner": "B", "explanation": "Cerrahi ile çıkarılan yağ hücreleri geri gelmez. Ancak ameliyat sonrası da kompresyon ve yaşam tarzı değişiklikleri sürdürülmelidir." },
    { "name": "Risk Profili", "valueA": "Çok düşük", "valueB": "Düşük (lenfödem riski %0.18)", "winner": "A", "explanation": "Konservatif tedavinin ciddi yan etkisi yoktur. Cerrahi tedavide komplikasyon riski düşüktür ancak enfeksiyon, seroma ve nadir olarak lenfödem gelişimi mümkündür." },
    { "name": "Erişilebilirlik (Türkiye)", "valueA": "Her şehirde mümkün", "valueB": "Sınırlı sayıda uzman cerrah", "winner": "A", "explanation": "Konservatif tedavi bileşenleri (fizyoterapi, beslenme danışmanlığı) her ilde mevcuttur. Cerrahi için uzman cerrah sayısı sınırlıdır ve genellikle büyük şehirlere gitmek gerekir." },
    { "name": "Evreye Göre Uygunluk", "valueA": "Her evre, başlangıç tedavisi", "valueB": "Evre 2-4, konservatif yetersizse", "winner": null, "explanation": "Konservatif tedavi her evrede uygulanır ve her zaman birinci basamak tedavidir. Cerrahi, konservatif tedavinin yetersiz kaldığı orta-ileri evre hastalarda değerlendirilir." }
  ],
  "verdict": "Lipödem tedavisinde 'konservatif mi cerrahi mi?' sorusu aslında bir 'ya/ya da' değil 'hem/hem de' sorusudur. 2025 Delphi Konsensüsü konservatif tedaviyi birinci basamak olarak önerir; cerrahi ise konservatif tedavinin yetersiz kaldığı durumlarda tamamlayıcı olarak değerlendirilir. En iyi sonuçlar kombine yaklaşımla elde edilir.",
  "prosA": ["Düşük maliyet", "Düşük risk", "Her yerde erişilebilir", "SGK desteği (kısmi)", "Her evrede uygulanabilir"],
  "consA": ["Kalıcı yağ azaltma sağlamaz", "Sürekli uygulama gerektirir", "Ağrı kontrolü sınırlı kalabilir"],
  "prosB": ["Kalıcı yağ çıkarma", "Yüksek ağrı azaltma", "Yaşam kalitesinde belirgin iyileşme", "Hareketlilik artışı"],
  "consB": ["Yüksek maliyet", "SGK karşılamıyor", "Uzman cerrah bulmak zor", "Ameliyat riskleri (düşük de olsa)", "Ameliyat sonrası da konservatif tedavi devam eder"],
  "faqItems": [
    { "question": "Konservatif tedavi lipödemi iyileştirir mi?", "answer": "Konservatif tedavi lipödemi tam olarak iyileştirmez ancak semptomları kontrol altında tutar, ağrıyı azaltır ve hastalık ilerlemesini yavaşlatır. Kalıcı yağ azaltma için cerrahi gereklidir." },
    { "question": "Ameliyat olmadan lipödem yönetilebilir mi?", "answer": "Evet, özellikle erken evrelerde konservatif tedavi ile lipödem etkili biçimde yönetilebilir. Kompresyon, MLD, beslenme ve egzersiz programları yaşam kalitesini önemli ölçüde artırır." },
    { "question": "Ameliyattan sonra da konservatif tedavi gerekli mi?", "answer": "Evet, kesinlikle. Ameliyat sonrası kompresyon giysi kullanımı, MLD seansları ve yaşam tarzı değişiklikleri sürdürülmelidir. Cerrahi konservatif tedavinin yerini almaz, onu tamamlar." }
  ],
  "ctaType": "symptom-test",
  "relatedArticles": ["lipodem-tedavisi", "lipodem-ameliyati", "lipodem-kompresyon-tedavisi", "lipodem-manuel-lenf-drenaji"],
  "relatedComparisons": ["vaser-vs-tumescent", "mld-vs-pnomatik"],
  "publishedAt": "2026-06-07",
  "updatedAt": "2026-06-07",
  "status": "published"
}
```

#### 3.2.3 Lipödem vs Lenfödem

```json
{
  "slug": "lipodem-vs-lenfodem",
  "title": "Lipödem vs Lenfödem: 7 Temel Fark ve Doğru Tanı Rehberi",
  "seo": {
    "metaTitle": "Lipödem vs Lenfödem: 7 Temel Fark (2026)",
    "metaDescription": "Lipödem ve lenfödem arasındaki 7 temel farkı öğrenin. Stemmer testi, ödem dağılımı, tedavi yaklaşımı -- doğru tanı için karşılaştırma rehberi.",
    "primaryKeyword": "lipödem vs lenfödem",
    "secondaryKeywords": ["lipödem lenfödem farkı", "stemmer testi nedir", "lipödem tanısı"]
  },
  "optionA": { "name": "Lipödem", "shortDescription": "Simetrik, orantısız yağ birikimi ile karakterize kronik hastalık. Diyete dirençli, ağrılı, ayakları tutmaz.", "relatedUrl": "/lipodem-nedir" },
  "optionB": { "name": "Lenfödem", "shortDescription": "Lenfatik sistemin bozulması sonucu sıvı birikmesi. Genellikle tek taraflı, ayakları tutar, Stemmer belirtisi pozitif.", "relatedUrl": null },
  "criteria": [
    { "name": "Dağılım", "valueA": "Bilateral, simetrik", "valueB": "Genellikle tek taraflı (unilateral)", "winner": null, "explanation": "Lipödem her iki bacağı simetrik olarak etkiler. Lenfödem ise genellikle tek bir uzvu etkiler (özellikle kanser cerrahisi sonrası)." },
    { "name": "Ayak Tutulumu", "valueA": "Hayır (cuff sign pozitif)", "valueB": "Evet (ayak şişer)", "winner": null, "explanation": "Lipödemde yağ birikimi ayak bileğinde keskin bir sınırla durur (cuff sign). Lenfödemde ise sıvı birikimi ayak parmaklarına kadar uzanır." },
    { "name": "Stemmer Belirtisi", "valueA": "Negatif", "valueB": "Pozitif", "winner": null, "explanation": "Stemmer testi: 2. ayak parmağının üst derisini kıstırma. Lipödemde normal kalınlıkta, lenfödemde kalınlaşmıştır." },
    { "name": "Ağrı", "valueA": "Var (dokunma hassasiyeti, spontan ağrı)", "valueB": "Genellikle ağrısız (ağırlık hissi olabilir)", "winner": null, "explanation": "Ağrı lipödemin karakteristik özelliğidir. Lenfödemde genellikle ağrı değil, ağırlık ve gerginlik hissi ön plandadır." },
    { "name": "Kolay Morarma", "valueA": "Evet (karakteristik bulgu)", "valueB": "Hayır (nadir)", "winner": null, "explanation": "Lipödemde kapiller fragilite artmıştır, minimal travma ile morarma oluşur. Lenfödemde kolay morarma beklenmez." },
    { "name": "Diyetle Yanıt", "valueA": "Etkilenen bölgeler yanıt vermez", "valueB": "İlgisiz (yağ hastalığı değil)", "winner": null, "explanation": "Lipödemde diyet ile üst beden zayıflarken bacaklar aynı kalır. Lenfödem sıvı birikimi olduğundan diyetle doğrudan ilişkisi yoktur." },
    { "name": "Tedavi Yaklaşımı", "valueA": "Kompresyon + MLD + beslenme + cerrahi", "valueB": "CDT + kompresyon + MLD + lenf cerrahisi", "winner": null, "explanation": "Her iki hastalıkta da kompresyon ve MLD önemlidir, ancak tedavi hedefleri ve cerrahi yaklaşımlar farklıdır. Lipödemde yağ çıkarma, lenfödemde sıvı drenajı ve lenf yolu onarımı hedeflenir." }
  ],
  "verdict": "Lipödem ve lenfödem farklı hastalıklardır ancak sıklıkla karıştırılır. İleri evre lipödemde sekonder lenfödem de gelişebilir (lipo-lenfödem). Doğru tanı için fizik muayene (Stemmer testi, dağılım paterni, ağrı değerlendirmesi) kritiktir. Şüphe durumunda deneyimli bir uzmanın değerlendirmesi önerilir.",
  "prosA": [], "consA": [], "prosB": [], "consB": [],
  "faqItems": [
    { "question": "Lipödem ve lenfödem aynı anda olabilir mi?", "answer": "Evet. İleri evre lipödemde (Evre 4) sekonder lenfödem gelişebilir, buna 'lipo-lenfödem' denir. Bu durumda her iki hastalığın tedavisi birlikte planlanmalıdır." },
    { "question": "Stemmer testi nasıl yapılır?", "answer": "İkinci ayak parmağınızın üst derisini baş ve işaret parmağınızla kıstırmaya çalışın. Deri kolayca kalkarsa Stemmer negatif (lipödem lehine), deri kalınlaşmış ve kalkmıyorsa Stemmer pozitif (lenfödem lehine)." }
  ],
  "ctaType": "symptom-test",
  "relatedArticles": ["lipodem-nedir", "lipodem-belirtileri", "lipodem-evreleri"],
  "relatedComparisons": ["lipodem-vs-obezite"],
  "publishedAt": "2026-06-07",
  "updatedAt": "2026-06-07",
  "status": "published"
}
```

#### 3.2.4 Lipödem vs Obezite

```json
{
  "slug": "lipodem-vs-obezite",
  "title": "Lipödem vs Obezite: Fark Nasıl Anlaşılır?",
  "seo": {
    "metaTitle": "Lipödem vs Obezite: Fark Rehberi (2026)",
    "metaDescription": "Lipödem ve obezite arasındaki farkları öğrenin. Yağ dağılımı, diyete yanıt, ağrı, tanı kriterleri -- doktorların bile karıştırdığı iki durumu ayırt edin.",
    "primaryKeyword": "lipödem vs obezite",
    "secondaryKeywords": ["lipödem obezite farkı", "lipödem tanısı", "orantısız yağlanma nedeni"]
  },
  "optionA": { "name": "Lipödem", "shortDescription": "Simetrik, orantısız, diyete dirençli yağ birikimi. Ağrılı, genetik temelli kronik hastalık.", "relatedUrl": "/lipodem-nedir" },
  "optionB": { "name": "Obezite", "shortDescription": "Vücutta genel ve orantılı yağ artışı. Kalori fazlası, diyetle yanıt verir, genellikle ağrısız.", "relatedUrl": null },
  "criteria": [
    { "name": "Yağ Dağılımı", "valueA": "Orantısız (bacaklar belirgin, gövde normal)", "valueB": "Orantılı (tüm vücut)", "winner": null, "explanation": "Lipödemde üst beden normal/ince kalırken alt beden orantısız büyür. Obezitede yağlanma tüm vücuda dağılır." },
    { "name": "Diyetle Yanıt", "valueA": "Etkilenen bölgeler yanıt vermez", "valueB": "Tüm vücut yanıt verir", "winner": null, "explanation": "Lipödem yağı diyete dirençlidir -- kilo verildiğinde üst beden incelmesine rağmen bacaklar değişmez. Obezitede diyet tüm vücutta yağ kaybı sağlar." },
    { "name": "Ağrı", "valueA": "Evet (dokunma hassasiyeti, spontan ağrı)", "valueB": "Hayır (eklem yükü hariç)", "winner": null, "explanation": "Ağrı lipödemin tanımlayıcı özelliğidir. Obezitede yağ dokusunda ağrı beklenmez." },
    { "name": "Kolay Morarma", "valueA": "Evet", "valueB": "Hayır", "winner": null, "explanation": "Lipödemde minimal travmayla bile kolay morarma oluşur. Bu obezitede görülmez." },
    { "name": "Cinsiyet", "valueA": "Neredeyse yalnızca kadınlarda", "valueB": "Her iki cinsiyette", "winner": null, "explanation": "Lipödem neredeyse yalnızca kadınlarda görülür. Obezite cinsiyet ayrımı yapmaz." },
    { "name": "Başlangıç", "valueA": "Hormonal dönemlerde (puberte, hamilelik, menopoz)", "valueB": "Yaşam tarzı ile ilişkili", "winner": null, "explanation": "Lipödem genellikle hormonal değişim dönemlerinde başlar. Obezite ise kalori alımı-harcama dengesizliğiyle ilişkilidir." }
  ],
  "verdict": "Lipödem ve obezite birlikte bulunabilir (lipödem + obezite), ancak farklı hastalıklardır. En önemli ayırt edici özellikler: orantısız yağ dağılımı, diyete direnç, ağrı ve kolay morarma. Lipödem tanısı genellikle klinik muayene ile konulur. Doktorların %49'unun lipödemi bilmemesi nedeniyle yanlış tanı (obezite tanısı) sıktır.",
  "prosA": [], "consA": [], "prosB": [], "consB": [],
  "faqItems": [
    { "question": "Lipödem ve obezite aynı anda olabilir mi?", "answer": "Evet, çok sık birlikte görülür. Lipödemli hastaların önemli bir kısmında eşlik eden obezite mevcuttur. Bu durumda hem lipödem tedavisi hem de kilo yönetimi birlikte planlanmalıdır." },
    { "question": "Neden doktorlar lipödemi obezite sanıyor?", "answer": "Türkiye'de doktorların yalnızca %51'i lipödemi biliyor. Tıp fakültelerinde lipödem eğitimi yetersiz. Hasta 'kilo ver' önerisi ile gönderiliyor ancak lipödem yağı diyete yanıt vermiyor." }
  ],
  "ctaType": "symptom-test",
  "relatedArticles": ["lipodem-nedir", "lipodem-belirtileri", "bacaklariniz-neden-incelmiyor"],
  "relatedComparisons": ["lipodem-vs-lenfodem"],
  "publishedAt": "2026-06-07",
  "updatedAt": "2026-06-07",
  "status": "published"
}
```

#### 3.2.5 Akdeniz vs Ketojenik Diyet

```json
{
  "slug": "akdeniz-vs-ketojenik",
  "title": "Akdeniz Diyeti vs Ketojenik Diyet: Lipödemde Hangi Beslenme Yaklaşımı Daha Etkili?",
  "seo": {
    "metaTitle": "Akdeniz vs Ketojenik Diyet: Lipödem Beslenme (2026)",
    "metaDescription": "Lipödemde Akdeniz ve ketojenik diyeti bilimsel kanıtlarla karşılaştırın. 2025 araştırma sonuçları, Türk mutfağına uyum ve pratik rehber.",
    "primaryKeyword": "akdeniz diyeti vs ketojenik diyet lipödem",
    "secondaryKeywords": ["lipödem diyeti hangisi", "keto diyet lipödem", "anti-inflamatuar beslenme lipödem"]
  },
  "optionA": { "name": "Akdeniz Diyeti", "shortDescription": "Zeytinyağı, sebze, meyve, balık, tam tahıl ağırlıklı anti-inflamatuar beslenme yaklaşımı. Sürdürülebilir yaşam tarzı.", "relatedUrl": "/lipodem-beslenme" },
  "optionB": { "name": "Ketojenik Diyet", "shortDescription": "Çok düşük karbonhidrat, yüksek yağ içerikli beslenme yaklaşımı. Vücudu ketoz durumuna sokarak yağ yakımını hedefler.", "relatedUrl": "/lipodem-ketojenik-diyet" },
  "criteria": [
    { "name": "Anti-inflamatuar Etki", "valueA": "Çok yüksek", "valueB": "Yüksek", "winner": "A", "explanation": "Akdeniz diyeti, omega-3 yağ asitleri, polifenoller ve antioksidanlar ile güçlü anti-inflamatuar etki sağlar. Ketojenik diyet de inflamasyonu azaltır ancak mekanizması farklıdır (keton cisimleri)." },
    { "name": "Sürdürülebilirlik", "valueA": "Çok yüksek (yaşam tarzı)", "valueB": "Orta (kısıtlayıcı)", "winner": "A", "explanation": "Akdeniz diyeti esnek ve sosyal yaşama uyumludur. Ketojenik diyet karbonhidrat kısıtlaması nedeniyle uzun vadede sürdürmesi zordur; bırakma oranları yüksektir." },
    { "name": "Türk Mutfağına Uyum", "valueA": "Çok yüksek (zaten Akdeniz kültürü)", "valueB": "Orta (adaptasyon gerekir)", "winner": "A", "explanation": "Türk mutfağı zaten Akdeniz mutfağı ailesindedir: zeytinyağı, sebzeler, baklagiller, balık. Keto diyette ekmek, pilav, makarna gibi temel Türk gıdaları kısıtlanır." },
    { "name": "Kısa Vadeli Kilo Kaybı", "valueA": "Orta (sürdürülebilir)", "valueB": "Yüksek (hızlı başlangıç)", "winner": "B", "explanation": "Ketojenik diyetle başlangıçta hızlı kilo kaybı sağlanır (su kaybı + yağ yakımı). Akdeniz diyetinde kilo kaybı daha yavaş ama sürdürülebilirdir." },
    { "name": "Bilimsel Kanıt (Lipödem)", "valueA": "Güçlü (2025 çalışma: 7 ayda -12 kg)", "valueB": "Orta (daha az çalışma)", "winner": "A", "explanation": "2025 Akdeniz-Ketojenik araştırması (n=48) 7 ayda ortalama 12 kg kilo kaybı ve uyluklarda 6 cm azalma göstermiştir. Ketojenik diyet için lipödem spesifik çalışma sayısı sınırlıdır." },
    { "name": "Bağırsak Sağlığı", "valueA": "Çok olumlu (lif, prebiyotik)", "valueB": "Karışık (lif azalabilir)", "winner": "A", "explanation": "Akdeniz diyetinin yüksek lif içeriği bağırsak mikrobiyomunu destekler. Keto diyette lif alımı düşebilir, bu da bağırsak sağlığını olumsuz etkileyebilir." },
    { "name": "Maliyet", "valueA": "Orta", "valueB": "Yüksek (et/yağ ağırlıklı)", "winner": "A", "explanation": "Akdeniz diyeti sebze, baklagil ve tahıl ağırlıklı olduğundan genellikle daha ekonomiktir. Keto diyetin et ve kaliteli yağ ağırlığı maliyeti artırır." }
  ],
  "verdict": "2025 bilimsel konsensüsü Akdeniz diyetini lipödem için birincil beslenme yaklaşımı olarak önermektedir. Sürdürülebilirlik, anti-inflamatuar etki ve Türk mutfağına uyum açısından üstün çıkmaktadır. Ketojenik diyet ise kısa süreli (3-6 ay) veya modifiye formda (Akdeniz-Ketojenik hibrit) uygulanabilir. En etkili yaklaşım, diyetisyen eşliğinde kişiselleştirilmiş bir plan oluşturmaktır.",
  "prosA": ["Güçlü anti-inflamatuar etki", "Yüksek sürdürülebilirlik", "Türk mutfağına doğal uyum", "Bağırsak sağlığını destekler", "Ekonomik"],
  "consA": ["Kilo kaybı daha yavaş", "Sonuçlar sabır gerektirir"],
  "prosB": ["Hızlı başlangıç kilo kaybı", "İnflamasyon azaltma potansiyeli", "Bazı hastalarda belirgin semptom rahatlaması"],
  "consB": ["Sürdürmesi zor", "Sosyal uyum düşük", "Yeme bozukluğu riski", "Bağırsak sağlığı riski", "Yüksek maliyet"],
  "faqItems": [
    { "question": "Akdeniz-Ketojenik hibrit diyet nedir?", "answer": "Her iki yaklaşımın avantajlarını birleştiren bir protokoldür: Akdeniz gıdaları (zeytinyağı, balık, sebze) kullanılırken karbonhidrat miktarı azaltılır. 2025 araştırması bu hibrit yaklaşımla lipödemli hastalarda olumlu sonuçlar bildirmiştir." },
    { "question": "Bu diyetlerden hangisi lipödem yağını eritir?", "answer": "Hiçbir diyet lipödem yağını doğrudan 'eritecek' güçte değildir. Lipödem yağı diyete dirençlidir. Ancak anti-inflamatuar beslenme inflamasyonu azaltarak ağrıyı hafifletir ve hastalık ilerlemesini yavaşlatır. Lipödem yağının kalıcı çıkarılması ancak cerrahi ile mümkündür." }
  ],
  "ctaType": "premium",
  "relatedArticles": ["lipodem-beslenme", "lipodem-diyeti", "lipodem-ketojenik-diyet", "lipodem-haftalik-menu"],
  "relatedComparisons": ["su-terapisi-vs-kara-egzersizi"],
  "publishedAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "status": "published"
}
```

#### 3.2.6 Su Terapisi vs Kara Egzersizi

```json
{
  "slug": "su-terapisi-vs-kara-egzersizi",
  "title": "Su Terapisi vs Kara Egzersizleri: Lipödemde En Etkili Hareket Hangisi?",
  "seo": {
    "metaTitle": "Su Terapisi vs Kara Egzersizi: Lipödem Rehberi (2026)",
    "metaDescription": "Lipödemde su terapisi ve kara egzersizlerini karşılaştırın. Yüzme, aqua aerobik vs yürüyüş, yoga, pilates -- ağrı, ödem ve yaşam kalitesi etkisi.",
    "primaryKeyword": "su terapisi vs kara egzersizi lipödem",
    "secondaryKeywords": ["lipödem yüzme faydaları", "lipödem aqua terapi", "lipödem hangi egzersiz"]
  },
  "optionA": { "name": "Su Terapisi", "shortDescription": "Suyun kaldırma kuvveti ve hidrostatik basıncından yararlanarak yapılan egzersizler: yüzme, aqua aerobik, su içi yürüyüş.", "relatedUrl": "/lipodem-yuzme" },
  "optionB": { "name": "Kara Egzersizleri", "shortDescription": "Karada yapılan düşük-orta yoğunluklu egzersizler: yürüyüş, yoga, pilates, bisiklet, hafif güç antrenmanı.", "relatedUrl": "/lipodem-egzersiz" },
  "criteria": [
    { "name": "Eklem Yükü", "valueA": "Çok düşük (suyun kaldırma kuvveti)", "valueB": "Değişken (türe bağlı)", "winner": "A", "explanation": "Suda vücut ağırlığının %90'a kadarı azalır. Bu, özellikle ileri evre lipödemde eklem yüklenmesini minimize eder." },
    { "name": "Ödem Azaltma", "valueA": "Yüksek (hidrostatik basınç)", "valueB": "Orta", "winner": "A", "explanation": "Suyun hidrostatik basıncı doğal kompresyon etkisi yaratarak ödem azaltmada etkilidir. Bu etkiyi kara egzersizleriyle elde etmek için ayrıca kompresyon giysi gerekir." },
    { "name": "Ağrı Kontrolü", "valueA": "Yüksek (sıcak su rahatlama)", "valueB": "Orta (uygun türde)", "winner": "A", "explanation": "Sıcak su, kas gevşemesi ve ağrı rahatlaması sağlar. Suyun destekleyici etkisi hareket sırasında ağrıyı azaltır." },
    { "name": "Erişilebilirlik", "valueA": "Sınırlı (havuz gerekli)", "valueB": "Yüksek (evde yapılabilir)", "winner": "B", "explanation": "Su terapisi havuz erişimi gerektirir. Kara egzersizleri evde, parkta veya spor salonunda yapılabilir." },
    { "name": "Maliyet", "valueA": "500-2.000 TL/ay (havuz üyeliği)", "valueB": "Düşük-ücretsiz", "winner": "B", "explanation": "Havuz üyeliği aylık sabit maliyet oluşturur. Yürüyüş, evde yoga gibi kara egzersizleri ücretsiz veya minimal maliyetle yapılabilir." },
    { "name": "Kas Güçlendirme", "valueA": "Orta (su direnci)", "valueB": "Yüksek (güç antrenmanı)", "winner": "B", "explanation": "Kara güç antrenmanı kas gelişimi için daha etkilidir. Su direnci de kas çalıştırır ancak ağırlıklarla eşdeğer değildir." },
    { "name": "Kompresyon Gerekliliği", "valueA": "Gerekmez (su doğal kompresyon)", "valueB": "Kompresyonla yapılmalı", "winner": "A", "explanation": "Suyun hidrostatik basıncı kompresyon etkisi yapar. Kara egzersizlerinde kompresyon giysi giymek önerilir." },
    { "name": "Evre Uygunluğu", "valueA": "Tüm evreler (özellikle ileri evre)", "valueB": "Evre 1-3 (4'te sınırlı)", "winner": "A", "explanation": "Su terapisi ileri evre lipödemde bile güvenle uygulanabilir. Kara egzersizlerinde evre 4'te hareket kısıtlılığı sorun oluşturabilir." }
  ],
  "verdict": "Her iki egzersiz türü de lipödem yönetiminde değerlidir ve birbirini tamamlar. Su terapisi özellikle ileri evre hastalarda, ağrı kontrolü ve ödem yönetiminde üstün çıkarken; kara egzersizleri erişilebilirlik ve kas güçlendirmede avantaj sağlar. İdeal yaklaşım: haftada 2-3 su terapisi + 2-3 kara egzersizi kombinasyonu.",
  "prosA": ["Eklem dostu", "Doğal kompresyon etkisi", "Güçlü ağrı rahatlaması", "Tüm evrelere uygun", "Beden imajı rahatlaması (suda daha hafif hissetme)"],
  "consA": ["Havuz erişimi gerekli", "Aylık maliyet", "Hijyen endişesi", "Mevsimsel kısıtlama (açık havuz)"],
  "prosB": ["Erişilebilir ve ekonomik", "Güçlü kas gelişimi", "Çeşitlilik (yoga, pilates, yürüyüş, bisiklet)", "Evde yapılabilir"],
  "consB": ["Eklem yüklenmesi riski (yüksek etkili sporlar)", "Kompresyon giysi zorunlu", "İleri evrede sınırlı", "Ağrı artışı riski (yanlış egzersiz seçimi)"],
  "faqItems": [
    { "question": "Lipödemde koşu yapılabilir mi?", "answer": "Koşu yüksek etkili bir aktivitedir ve lipödemde genellikle önerilmez. Eklem yüklenmesi ve doku travması ağrıyı artırabilir. Yürüyüş, eliptik bisiklet veya aqua jogging daha güvenli alternatiflerdir." },
    { "question": "Haftada kaç gün egzersiz yapılmalı?", "answer": "Haftada 4-5 gün, günde 30-45 dakika orta yoğunluklu egzersiz önerilir. Başlangıçta haftada 2-3 gün ile başlanıp kademeli artırılmalıdır." }
  ],
  "ctaType": "premium",
  "relatedArticles": ["lipodem-egzersiz", "lipodem-yuzme", "lipodem-yoga", "lipodem-evde-egzersiz"],
  "relatedComparisons": ["akdeniz-vs-ketojenik"],
  "publishedAt": "2026-06-14",
  "updatedAt": "2026-06-14",
  "status": "published"
}
```

#### 3.2.7 Türkiye vs Almanya Tedavi

```json
{
  "slug": "turkiye-vs-almanya",
  "title": "Türkiye vs Almanya: Lipödem Tedavisinde Hangi Ülke Daha İyi?",
  "seo": {
    "metaTitle": "Lipödem Tedavisi: Türkiye vs Almanya Karşılaştırma (2026)",
    "metaDescription": "Lipödem tedavisinde Türkiye ve Almanya'yı karşılaştırın. Maliyet, uzman sayısı, teknik, sigorta kapsamı ve hasta deneyimi -- kapsamlı rehber.",
    "primaryKeyword": "lipödem tedavisi türkiye vs almanya",
    "secondaryKeywords": ["lipödem ameliyatı almanya", "lipödem tedavi yurt dışı", "lipödem ameliyat yurt dışı fiyat"]
  },
  "optionA": { "name": "Türkiye", "shortDescription": "Hızla büyüyen lipödem tedavi pazarı. Maliyet avantajı, dil kolaylığı, kısa bekleme süresi.", "relatedUrl": "/lipodem-turkiye-rehberi" },
  "optionB": { "name": "Almanya", "shortDescription": "Lipödem tedavisinin 'anavatanı'. S2k kılavuzu, GKV sigorta kapsamı, çok sayıda deneyimli uzman.", "relatedUrl": null },
  "criteria": [
    { "name": "Maliyet (Tam Tedavi)", "valueA": "5.500 - 13.500 EUR (150.000-400.000 TL)", "valueB": "15.000 - 35.000 EUR", "winner": "A", "explanation": "Türkiye'de lipödem tedavisi Almanya'ya göre yaklaşık %50-65 daha ucuzdur. Konaklama ve yaşam maliyetleri de önemli ölçüde düşüktür." },
    { "name": "Uzman Cerrah Sayısı", "valueA": "Sınırlı ama artıyor (~15-20)", "valueB": "Çok (~50+ lipödem spesifik cerrah)", "winner": "B", "explanation": "Almanya'da lipödem cerrahisi bir alt uzmanlık dalı olarak gelişmiştir. Lipocura, Lipoklinik gibi sadece lipödem tedavisi yapan merkezler mevcuttur." },
    { "name": "Sigorta Kapsamı", "valueA": "SGK karşılamıyor", "valueB": "GKV 2004'ten beri karşılıyor (koşullu)", "winner": "B", "explanation": "Almanya'da yasal sağlık sigortası (GKV) 2004'ten beri lipödem liposuction masraflarını belirli koşullarda karşılamaktadır. Türkiye'de SGK lipödem ameliyatını estetik işlem olarak sınıflandırmaktadır." },
    { "name": "Dil Bariyeri", "valueA": "Yok", "valueB": "Yüksek (Almanca zorunlu çoğu klinikte)", "winner": "A", "explanation": "Türkiye'de hasta-doktor iletişimi ana dilde gerçekleşir. Almanya'da çoğu lipödem kliniği Almanca konuşur; tercüman gerekmesi iletişimi zorlaştırır." },
    { "name": "Bekleme Süresi", "valueA": "Kısa (1-4 hafta)", "valueB": "Uzun (3-12 ay, sigorta onay süreci)", "winner": "A", "explanation": "Türkiye'de ameliyat tarihi hızlıca alınabilir. Almanya'da sigorta onay süreci ve uzman cerrah randevusu nedeniyle bekleme 3-12 ay sürebilir." },
    { "name": "Cerrahi Sonrası Takip", "valueA": "Kolay (yerel cerrah)", "valueB": "Zor (uzaktan takip)", "winner": "A", "explanation": "Türkiye'de ameliyat yaptıran hasta cerrahına kolayca ulaşabilir. Almanya'da ameliyat olan Türk hasta, takip için uzaktan iletişim kurmak zorundadır." },
    { "name": "Teknik Çeşitlilik", "valueA": "VASER, tumescent ağırlıklı", "valueB": "WAL, tumescent, PAL, VASER", "winner": "B", "explanation": "Almanya'da tüm liposuction teknikleri yaygın olarak uygulanmaktadır. Özellikle WAL (su destekli liposuction) Almanya'da geliştirilmiş ve en çok kullanılan tekniktir." },
    { "name": "Konservatif Tedavi Altyapısı", "valueA": "Gelişmekte", "valueB": "Çok gelişmiş (CDT ağı yaygın)", "winner": "B", "explanation": "Almanya'da CDT eğitimli fizyoterapist ağı çok geniştir. Kompresyon giysi temin ve ölçü alma sistemi standartlaşmıştır. Türkiye'de bu altyapı henüz gelişme aşamasındadır." }
  ],
  "verdict": "Maliyet, dil kolaylığı ve hız avantajı Türkiye'yi cazip kılmaktadır. Deneyim, sigorta kapsamı ve standart protokoller ise Almanya'nın güçlü yanlarıdır. Karar, hastanın bütçesi, aciliyet durumu, dil becerisi ve tedavi kapsamına göre değişir. Türkiye'de lipödem cerrahisi hızla gelişmektedir ve doğru cerrah seçimi ile Almanya'ya eşdeğer sonuçlar elde edilebilmektedir.",
  "prosA": ["%50-65 maliyet avantajı", "Dil bariyeri yok", "Kısa bekleme süresi", "Kolay takip", "Sıcak iklim -- iyileşme konforu"],
  "consA": ["SGK kapsamı yok", "Uzman sayısı sınırlı", "Standartlar tam oturmamış"],
  "prosB": ["Dünyanın en deneyimli cerrahları", "Sigorta kapsamı (GKV)", "Standart protokoller", "Güçlü konservatif tedavi altyapısı"],
  "consB": ["Yüksek maliyet (sigortasız)", "Uzun bekleme süreleri", "Dil bariyeri", "Seyahat ve konaklama zorlukları"],
  "faqItems": [
    { "question": "Almanya'da lipödem ameliyatı sigortadan mı karşılanıyor?", "answer": "Evet, Almanya'da GKV (yasal sağlık sigortası) 2004'ten beri lipödem liposuction masraflarını belirli koşullarda karşılamaktadır. Koşullar: en az 6 ay konservatif tedavi denenmiş olması, evre 2+ lipödem tanısı, sigorta uzman heyeti onayı." },
    { "question": "Türkiye'de lipödem ameliyatı SGK'dan karşılanır mı?", "answer": "Hayır, 2026 itibarıyla SGK lipödem ameliyatını estetik işlem olarak sınıflandırmakta ve karşılamamaktadır. Lenfödemi Olan Hastalara Yardım Derneği bu konuda lobicilik çalışmalarını sürdürmektedir." }
  ],
  "ctaType": "clinic-finder",
  "relatedArticles": ["lipodem-ameliyat-fiyatlari", "lipodem-sgk-rehberi", "lipodem-ameliyati"],
  "relatedComparisons": ["konservatif-vs-cerrahi", "vaser-vs-tumescent"],
  "publishedAt": "2026-06-21",
  "updatedAt": "2026-06-21",
  "status": "published"
}
```

---

## 4. Blog Makale Şablonu

### 4.1 MDX Frontmatter Şeması

```yaml
---
# --- Zorunlu Alanlar ---
title: "Lipödem Belirtileri: 12 Kritik İşaret"
slug: "lipodem-belirtileri"
description: "Lipödem hastalığının 12 kritik belirtisini tanıyın. Erken tanı, doğru tedavi için ilk adımdır."
publishedAt: "2026-05-15"
author: "Lipödem Türkiye Editörü"
category: "tani"              # tani | tedavi | beslenme | egzersiz | ruh-sagligi | turkiye-rehberi | haber
pillar: "lipodem-nedir"       # İlişkili pillar sayfa slug'ı
status: "published"           # draft | published
access: "free"                # free | basic_premium | full_premium

# --- Opsiyonel SEO Alanları ---
seoTitle: "Lipödem Belirtileri: 12 Kritik İşaret (2026 Güncel)"
seoDescription: "Lipödem hastalığının 12 kritik belirtisini tanıyın. Orantısız yağ birikimi, kolay morarma, ağrı -- erken tanı için kontrol edin."
canonicalUrl: null            # Farklı kaynak varsa canonical URL

# --- Opsiyonel Meta ---
updatedAt: "2026-05-20"
readingTime: 8                # Dakika (otomatik hesaplanır, override edilebilir)
featuredImage: "/images/blog/lipodem-belirtileri-hero.webp"
featuredImageAlt: "Lipödem belirtileri infografik"

# --- Etiketleme ---
tags: ["belirtiler", "tanı", "farkındalık", "erken tanı"]
secondaryKeywords: ["lipödem nasıl anlaşılır", "lipödem testi"]

# --- İlişkiler ---
relatedArticles: ["lipodem-evreleri", "lipodem-vs-obezite", "lipodem-testi"]
relatedTools: ["semptom-testi", "evre-degerlendirme"]

# --- Schema ---
schemaType: "Article"         # Article | MedicalWebPage | HowTo | FAQPage
medicalReviewer: "Dr. Ahmet Okyay"
medicalReviewDate: "2026-05-18"

# --- CTA ---
ctaPrimary: "symptom-test"    # symptom-test | clinic-finder | premium | newsletter | cost-calculator
ctaSecondary: "newsletter"

# --- AEO (AI Engine Optimization) ---
directAnswer: "Lipödem belirtileri: simetrik orantısız yağ birikimi (özellikle bacaklarda), diyete dirençli yağ, dokunma hassasiyeti ve ağrı, kolay morarma, ayak bileğinde cuff sign, ve akşamları artan ödem."
---
```

### 4.2 Kategori ve Etiket Taksonomisi

**Kategoriler (6 ana sütun + 1):**

| Kategori ID | Kategori Adı | Slug | Pillar Sayfası |
|------------|--------------|------|----------------|
| `tani` | Tanı ve Farkındalık | `tani` | `/lipodem-nedir` |
| `tedavi` | Tedavi Yol Haritası | `tedavi` | `/lipodem-tedavisi` |
| `beslenme` | Beslenme ve Yaşam Tarzı | `beslenme` | `/lipodem-beslenme` |
| `egzersiz` | Egzersiz ve Hareket | `egzersiz` | `/lipodem-egzersiz` |
| `ruh-sagligi` | Duygusal Sağlık | `ruh-sagligi` | `/lipodem-ruh-sagligi` |
| `turkiye-rehberi` | Türkiye Rehberi | `turkiye-rehberi` | `/lipodem-turkiye-rehberi` |
| `haber` | Haberler ve Güncellemeler | `haber` | `/blog` |

**Etiket Taksonomisi (Tags):**

```typescript
const TAG_TAXONOMY = {
  // Hastalık
  "belirtiler": "Belirtiler",
  "tani": "Tanı",
  "evreleme": "Evreleme",
  "farkindalik": "Farkındalık",
  "genetik": "Genetik",
  "hormon": "Hormonal Faktörler",

  // Tedavi
  "cerrahi": "Cerrahi Tedavi",
  "konservatif": "Konservatif Tedavi",
  "kompresyon": "Kompresyon",
  "mld": "Manuel Lenfatik Drenaj",
  "fizyoterapi": "Fizyoterapi",
  "ilac": "İlaç Tedavisi",
  "ameliyat-sonrasi": "Ameliyat Sonrası",

  // Beslenme
  "anti-inflamatuar": "Anti-inflamatuar",
  "diyet": "Diyet",
  "takviye": "Takviyeler",
  "tarif": "Tarifler",
  "bagirsak": "Bağırsak Sağlığı",

  // Egzersiz
  "yuzme": "Yüzme",
  "yoga": "Yoga",
  "pilates": "Pilates",
  "ev-egzersizi": "Ev Egzersizi",
  "guc-antrenman": "Güç Antrenmanı",

  // Ruh sağlığı
  "beden-imaji": "Beden İmajı",
  "oz-sefkat": "Öz-şefkat",
  "depresyon": "Depresyon",
  "destek-grubu": "Destek Grubu",

  // Türkiye
  "sgk": "SGK",
  "maliyet": "Maliyet",
  "doktor-bulma": "Doktor Bulma",
  "hasta-haklari": "Hasta Hakları",

  // Genel
  "bilimsel": "Bilimsel Araştırma",
  "erken-tani": "Erken Tanı",
  "kongre": "Kongre",
  "guncel": "Güncel"
} as const;
```

### 4.3 İlgili Makale Algoritması

```typescript
// src/lib/related-content.ts

interface RelatedScore {
  slug: string;
  score: number;
}

/**
 * İlgili makale seçim algoritması.
 * 3 makale döndürür: 2 aynı sütundan + 1 farklı sütundan (cross-pillar)
 */
export function getRelatedArticles(
  currentArticle: ContentMeta,
  allArticles: ContentMeta[],
  limit: number = 3
): ContentMeta[] {
  const candidates = allArticles.filter(
    (a) => a.slug !== currentArticle.slug && a.status === "published"
  );

  const scored: RelatedScore[] = candidates.map((candidate) => {
    let score = 0;

    // 1. Aynı pillar: +10 puan
    if (candidate.pillar === currentArticle.pillar) {
      score += 10;
    }

    // 2. Aynı kategori: +5 puan
    if (candidate.category === currentArticle.category) {
      score += 5;
    }

    // 3. Ortak etiketler: her etiket +3 puan
    const commonTags = (currentArticle.tags ?? []).filter((tag) =>
      (candidate.tags ?? []).includes(tag)
    );
    score += commonTags.length * 3;

    // 4. Manuel ilişkilendirme: +20 puan (frontmatter'daki relatedArticles)
    if ((currentArticle as any).relatedArticles?.includes(candidate.slug)) {
      score += 20;
    }

    // 5. Yayın tarihi yakınlığı: son 30 gün +2 puan
    const daysDiff = Math.abs(
      new Date(currentArticle.publishedAt).getTime() -
        new Date(candidate.publishedAt).getTime()
    ) / (1000 * 60 * 60 * 24);
    if (daysDiff < 30) score += 2;

    return { slug: candidate.slug, score };
  });

  // Puana göre sırala
  scored.sort((a, b) => b.score - a.score);

  // 2 aynı pillar + 1 cross-pillar seç
  const samePillar = scored.filter((s) => {
    const article = candidates.find((c) => c.slug === s.slug)!;
    return article.pillar === currentArticle.pillar;
  });

  const crossPillar = scored.filter((s) => {
    const article = candidates.find((c) => c.slug === s.slug)!;
    return article.pillar !== currentArticle.pillar;
  });

  const result: string[] = [];
  result.push(...samePillar.slice(0, 2).map((s) => s.slug));
  result.push(...crossPillar.slice(0, 1).map((s) => s.slug));

  // limit'e kadar doldur (yetmezse en yüksek puanlıları ekle)
  if (result.length < limit) {
    const remaining = scored
      .filter((s) => !result.includes(s.slug))
      .slice(0, limit - result.length);
    result.push(...remaining.map((s) => s.slug));
  }

  return result
    .slice(0, limit)
    .map((slug) => candidates.find((c) => c.slug === slug)!)
    .filter(Boolean);
}
```

### 4.4 RSS Feed Yapısı

```typescript
// src/app/feed.xml/route.ts

import { getAllContent } from "@/lib/mdx";

const SITE_URL = "https://lipodemturkiye.com";

export async function GET() {
  const posts = await getAllContent("blog");

  const rssItems = posts
    .filter((post) => post.status === "published")
    .slice(0, 50)
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
      ${(post.tags ?? []).map((tag) => `<category>${tag}</category>`).join("\n      ")}
      <author>iletisim@lipodemturkiye.com (Lipödem Türkiye)</author>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lipödem Türkiye Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Türkiye'nin ilk kapsamlı lipödem hasta platformu. Bilimsel bilgi, tedavi rehberleri, beslenme ve egzersiz programları.</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/images/logo.png</url>
      <title>Lipödem Türkiye</title>
      <link>${SITE_URL}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
```

---

## 5. Hasta Hikayesi Şablonu

### 5.1 TypeScript Veri Modeli

```typescript
// src/types/patient-story.ts

export interface PatientStory {
  /** URL slug */
  slug: string;
  /** Hasta adı (gerçek veya takma) */
  patientName: string;
  /** Yaş */
  age: number;
  /** Şehir */
  city: string;
  /** Lipödem evresi */
  stage: 1 | 2 | 3 | 4;
  /** Tanı yılı */
  diagnosisYear: number;
  /** Anonim mi (gerçek isim yerine takma ad) */
  anonymous: boolean;

  /** Sayfa başlığı */
  title: string;
  /** Kısa alıntı (kart ve listelerde kullanılır) */
  quote: string;
  /** Tanı öncesi özet */
  beforeSummary: string;
  /** Yolculuk özeti */
  journeySummary: string;
  /** Şu anki durum özeti */
  currentSummary: string;

  /** Aldığı tedaviler */
  treatments: TreatmentType[];
  /** Tedavi detayları */
  treatmentDetails: string;

  /** Hasta fotoğrafı (izinle) */
  photo: string | null;
  /** Video URL (izinle) */
  videoUrl: string | null;

  /** Yayın tarihi */
  publishedAt: string;
  /** Erişim seviyesi */
  access: "free" | "basic_premium";
  /** Durum */
  status: "draft" | "review" | "published";

  /** SEO */
  seo: {
    metaTitle: string;
    metaDescription: string;
  };

  /** İlgili makaleler */
  relatedArticles: string[];
  /** İlgili hikayeler */
  relatedStories: string[];

  /** Onay durumu */
  consent: PatientConsent;
}

export interface PatientConsent {
  /** Yazılı onay alınmış mı */
  writtenConsentReceived: boolean;
  /** Onay tarihi */
  consentDate: string | null;
  /** Fotoğraf kullanım izni */
  photoPermission: boolean;
  /** İsim kullanım tercihi */
  namePreference: "real" | "pseudonym" | "anonymous";
  /** KVKK aydınlatma metni onayı */
  kvkkConsent: boolean;
}
```

### 5.2 5 Örnek Hasta Hikayesi (Kurgusal Ama Gerçekçi)

**Not:** Aşağıdaki hikayeler tamamen kurgusaldır. Gerçek hasta hikayelerinden esinlenerek oluşturulmuştur. Herhangi bir gerçek kişiyle benzerlik tesadüfidir.

```json
[
  {
    "slug": "zeynep-32-yas-istanbul",
    "patientName": "Zeynep",
    "age": 32,
    "city": "İstanbul",
    "stage": 2,
    "diagnosisYear": 2024,
    "anonymous": true,
    "title": "Zeynep, 32, İstanbul: '8 Yıl Boyunca Diyetçiden Diyetçiye Koştum'",
    "quote": "Sonunda birisi bana 'Bu senin hatan değil, bu bir hastalık' dedi.",
    "beforeSummary": "Zeynep, 24 yaşından itibaren bacaklarının diyet ve egzersize rağmen incelmediğini fark etti. 8 yıl boyunca onlarca diyet programı denedi, kilo verdi ama bacakları hep aynı kaldı. Doktorlar 'daha çok egzersiz yap' dedi.",
    "journeySummary": "Bir gün sosyal medyada lipödem hakkında bir paylaşım gördü. Belirtileri bire bir uyuyordu. İstanbul'da bir plastik cerraha gitti ve Evre 2 lipödem tanısı aldı. Kompresyon tedavisi ve anti-inflamatuar beslenme programına başladı.",
    "currentSummary": "1.5 yıldır kompresyon çorabı kullanıyor, haftada 2 MLD seansına gidiyor ve Akdeniz diyeti uyguluyor. Ağrısı %60 azaldı. Cerrahi tedavi için birikim yapıyor. 'En büyük kazanımım hastalığımı anlamak oldu' diyor.",
    "treatments": ["kompresyon", "mld", "beslenme"],
    "treatmentDetails": "Düz örgü kompresyon çorap (Sınıf 2), haftada 2 MLD seansı, Akdeniz tipi anti-inflamatuar beslenme programı",
    "photo": null,
    "videoUrl": null,
    "publishedAt": "2026-06-01",
    "access": "free",
    "status": "published",
    "seo": {
      "metaTitle": "Zeynep'in Lipödem Hikayesi: 8 Yıl Yanlış Tanı | İstanbul",
      "metaDescription": "32 yaşında İstanbul'dan Zeynep, 8 yıl boyunca yanlış tanı aldıktan sonra lipödem tanısı ile hayatı değişti. Konservatif tedavi deneyimi."
    },
    "relatedArticles": ["lipodem-belirtileri", "lipodem-kompresyon-tedavisi", "lipodem-beslenme"],
    "relatedStories": ["elif-41-yas-ankara", "deniz-28-yas-izmir"],
    "consent": {
      "writtenConsentReceived": true,
      "consentDate": "2026-05-20",
      "photoPermission": false,
      "namePreference": "pseudonym",
      "kvkkConsent": true
    }
  },
  {
    "slug": "elif-41-yas-ankara",
    "patientName": "Elif",
    "age": 41,
    "city": "Ankara",
    "stage": 3,
    "diagnosisYear": 2022,
    "anonymous": true,
    "title": "Elif, 41, Ankara: 'Ameliyattan Sonra İlk Kez Ağrısız Uyandım'",
    "quote": "20 yıl boyunca her gece bacak ağrısıyla uyudum. Ameliyattan sonra ilk kez ağrısız uyandım.",
    "beforeSummary": "Elif, ergenlikten beri bacaklarında orantısız kalınlık ve ağrı yaşıyordu. 41 yaşına kadar 'genetik yapım böyle' diye düşündü. Bacaklarındaki ağrı gece uykusunu bölecek kadar şiddetliydi.",
    "journeySummary": "2022'de bir fizyoterapist lipödem şüphesiyle plastik cerrahiye yönlendirdi. Evre 3 tanısı aldı. 1 yıl konservatif tedavi sonrası 2023'te tumescent liposuction ile ameliyat oldu. 3 seansta bacaklar ve kalça bölgesi tedavi edildi.",
    "currentSummary": "Ameliyattan 3 yıl sonra yaşam kalitesi dramatik biçimde arttı. Ağrısı %90 azaldı, hareketliliği arttı, 2 beden küçüldü. Kompresyon tedavisine ve MLD seanslarına devam ediyor. 'Keşke 20 yıl önce tanı alsaydım' diyor.",
    "treatments": ["kompresyon", "mld", "tumescent", "beslenme", "egzersiz"],
    "treatmentDetails": "1 yıl konservatif tedavi sonrası 3 seans tumescent liposuction. Ameliyat sonrası düz örgü kompresyon, haftada 1 MLD, haftada 3 su terapisi.",
    "photo": null,
    "videoUrl": null,
    "publishedAt": "2026-06-01",
    "access": "free",
    "status": "published",
    "seo": {
      "metaTitle": "Elif'in Lipödem Hikayesi: Ameliyat Sonrası Yaşam | Ankara",
      "metaDescription": "41 yaşında Ankara'dan Elif, Evre 3 lipödem tanısı ve tumescent liposuction deneyimini paylaşıyor. 20 yıl sonra ağrısız yaşam."
    },
    "relatedArticles": ["lipodem-ameliyati", "lipodem-ameliyat-sonrasi", "lipodem-ameliyat-deneyimleri"],
    "relatedStories": ["zeynep-32-yas-istanbul", "seda-55-yas-bursa"],
    "consent": {
      "writtenConsentReceived": true,
      "consentDate": "2026-05-18",
      "photoPermission": false,
      "namePreference": "pseudonym",
      "kvkkConsent": true
    }
  },
  {
    "slug": "deniz-28-yas-izmir",
    "patientName": "Deniz",
    "age": 28,
    "city": "İzmir",
    "stage": 1,
    "diagnosisYear": 2025,
    "anonymous": true,
    "title": "Deniz, 28, İzmir: 'Erken Tanı Hayatımı Kurtardı'",
    "quote": "Lipödem Türkiye'deki semptom testini yapmasaydım belki yıllarca tanısız kalacaktım.",
    "beforeSummary": "Deniz, üniversiteden beri bacaklarında orantısız genişleme fark ediyordu. Spor yapmasına rağmen bacakları incelmiyordu. Arkadaşları 'genetik' diyordu. Ağrı hafifti ama kolay morarma dikkat çekiciydi.",
    "journeySummary": "2025'te internette lipödem hakkında bir makale okudu ve online semptom testi yaptı. Test sonucu 'yüksek risk' çıkınca İzmir'de bir lipödem uzmanına gitti. Evre 1 tanısı aldı. Erken evre olduğu için konservatif tedavi ile başlandı.",
    "currentSummary": "1 yıldır kompresyon çorabı kullanıyor, Akdeniz diyeti uyguluyor ve haftada 3 gün yüzmeye gidiyor. Semptomları kontrol altında. 'Erken tanı sayesinde hastalık ilerlemeden müdahale edebildim' diyor.",
    "treatments": ["kompresyon", "beslenme", "egzersiz"],
    "treatmentDetails": "Yuvarlak örgü kompresyon çorap (Sınıf 1), Akdeniz diyeti, haftada 3 gün yüzme, haftada 2 gün yoga",
    "photo": null,
    "videoUrl": null,
    "publishedAt": "2026-06-08",
    "access": "free",
    "status": "published",
    "seo": {
      "metaTitle": "Deniz'in Lipödem Hikayesi: Erken Tanının Önemi | İzmir",
      "metaDescription": "28 yaşında İzmir'den Deniz, erken evre lipödem tanısı ile konservatif tedavi yolculuğunu paylaşıyor."
    },
    "relatedArticles": ["lipodem-belirtileri", "lipodem-testi", "lipodem-yuzme"],
    "relatedStories": ["zeynep-32-yas-istanbul", "ceren-35-yas-antalya"],
    "consent": {
      "writtenConsentReceived": true,
      "consentDate": "2026-05-25",
      "photoPermission": false,
      "namePreference": "pseudonym",
      "kvkkConsent": true
    }
  },
  {
    "slug": "seda-55-yas-bursa",
    "patientName": "Seda",
    "age": 55,
    "city": "Bursa",
    "stage": 3,
    "diagnosisYear": 2021,
    "anonymous": true,
    "title": "Seda, 55, Bursa: 'Menopozda Her Şey Kötüleşti Ama Vazgeçmedim'",
    "quote": "30 yıl 'şişman kadın' damgası yedim. 55 yaşında öğrendim ki bu bir hastalıkmış.",
    "beforeSummary": "Seda, 25 yaşından beri orantısız bacaklarla yaşıyordu. Menopoz döneminde semptomlar dramatik biçimde kötüleşti: ağrı arttı, hareket kısıtlandı, depresyon gelişti. 30 yıl boyunca sayısız diyet denedi.",
    "journeySummary": "2021'de kızı internette lipödemi keşfetti ve annesini uzman doktora götürdü. Evre 3 tanısı aldı. Yaşı ve komorbiditeleri nedeniyle cerrahi yerine yoğun konservatif tedavi programına alındı. CDT, kompresyon ve psikolojik destek başladı.",
    "currentSummary": "5 yıllık konservatif tedavi ile ağrısı %50 azaldı, hareketliliği arttı, depresyondan çıktı. Online destek grubunda aktif üye. 'Yaşınız kaç olursa olsun, tanı almak için geç değil' diyor.",
    "treatments": ["kompresyon", "cdt", "mld", "pnomatik", "beslenme", "psikolojik"],
    "treatmentDetails": "Yoğun CDT programı (4 hafta), düz örgü kompresyon (Sınıf 3), haftada 2 MLD, evde pnömatik kompresyon, psikolojik destek",
    "photo": null,
    "videoUrl": null,
    "publishedAt": "2026-06-08",
    "access": "free",
    "status": "published",
    "seo": {
      "metaTitle": "Seda'nın Lipödem Hikayesi: 55 Yaşında Tanı | Bursa",
      "metaDescription": "55 yaşında Bursa'dan Seda, 30 yıl sonra lipödem tanısı aldı. Menopoz döneminde konservatif tedavi deneyimi ve umut hikayesi."
    },
    "relatedArticles": ["lipodem-fizyoterapi", "lipodem-ruh-sagligi", "lipodem-kompresyon-tedavisi"],
    "relatedStories": ["elif-41-yas-ankara", "ceren-35-yas-antalya"],
    "consent": {
      "writtenConsentReceived": true,
      "consentDate": "2026-05-22",
      "photoPermission": false,
      "namePreference": "pseudonym",
      "kvkkConsent": true
    }
  },
  {
    "slug": "ceren-35-yas-antalya",
    "patientName": "Ceren",
    "age": 35,
    "city": "Antalya",
    "stage": 2,
    "diagnosisYear": 2023,
    "anonymous": true,
    "title": "Ceren, 35, Antalya: 'Hamilelikte Başladı, Artık Yönetmeyi Öğrendim'",
    "quote": "Hamilelikte bacaklarım çok şişti ve hiç inmedi. Herkes 'hamilelik kilosu' dedi. Değilmiş.",
    "beforeSummary": "Ceren, hamileliğe kadar atletik bir kadındı. İlk hamileliğinde bacaklarında dramatik büyüme yaşadı. Doğum sonrası kilo vermesine rağmen bacakları eski haline dönmedi. 2 yıl boyunca 'hamilelik kilosu' olarak kabul etti.",
    "journeySummary": "2023'te bir kadın doğum kontrolünde şikayetlerini anlattığında doktor lipödem ihtimalinden bahsetti. Plastik cerraha yönlendirildi, Evre 2 tanısı aldı. Kompresyon tedavisi, MLD ve egzersiz programına başladı.",
    "currentSummary": "3 yıldır tedavi programını uyguluyor. Haftada 3 gün yüzme, günlük kompresyon, aylık MLD. Ağrısı kontrol altında, psikolojik olarak çok daha iyi. Cerrahi tedaviyi değerlendiriyor. 'Hamilelik sonrası bacaklarınız inmiyorsa lipödemi araştırın' diyor.",
    "treatments": ["kompresyon", "mld", "beslenme", "egzersiz"],
    "treatmentDetails": "Düz örgü kompresyon çorap (Sınıf 2), aylık MLD, haftada 3 gün yüzme, Akdeniz diyeti",
    "photo": null,
    "videoUrl": null,
    "publishedAt": "2026-06-15",
    "access": "free",
    "status": "published",
    "seo": {
      "metaTitle": "Ceren'in Lipödem Hikayesi: Hamilelik Sonrası Tanı | Antalya",
      "metaDescription": "35 yaşında Antalya'dan Ceren, hamilelik sonrası lipödem tanısı aldı. Konservatif tedavi ile yaşam kalitesini nasıl artırdığını anlatıyor."
    },
    "relatedArticles": ["lipodem-hangi-yasta-baslar", "lipodem-yuzme", "lipodem-kompresyon-tedavisi"],
    "relatedStories": ["zeynep-32-yas-istanbul", "deniz-28-yas-izmir"],
    "consent": {
      "writtenConsentReceived": true,
      "consentDate": "2026-05-28",
      "photoPermission": false,
      "namePreference": "pseudonym",
      "kvkkConsent": true
    }
  }
]
```

### 5.3 Gizlilik Kuralları

1. **KVKK uyumu:** Tüm hasta hikayeleri 6698 sayılı Kişisel Verilerin Korunması Kanunu'na uygun olarak toplanır ve yayınlanır.
2. **Yazılı onay zorunlu:** Hikaye yayınlanmadan önce hastadan yazılı onay alınır (dijital veya fiziksel).
3. **İsim tercihi:** Hasta gerçek adı, takma ad veya tamamen anonim (sadece yaş ve şehir) seçebilir.
4. **Fotoğraf izni ayrı:** Fotoğraf kullanımı için ayrıca yazılı izin gerekir. Fotoğraf reddedilirse hikaye fotoğrafsız yayınlanır.
5. **Tıbbi bilgi sınırı:** Sadece hastanın paylaşmak istediği tıbbi bilgiler yayınlanır. Hassas sağlık verileri zorunlu değildir.
6. **Geri çekme hakkı:** Hasta istediği zaman hikayesinin kaldırılmasını talep edebilir. 48 saat içinde kaldırılır.
7. **Çocuk ve ergen:** 18 yaş altı hikayeler sadece veli onayı ile yayınlanır.
8. **Editoryal inceleme:** Her hikaye yayınlanmadan önce editöryal incelemeden geçer (tıbbi doğruluk, gizlilik, ton).

### 5.4 Onay Süreci Akışı

```
1. BAŞVURU
   Hasta hikaye gönderme formunu doldurur
   ├── İsim, yaş, şehir, evre, kısa hikaye
   ├── İletişim bilgileri (sadece editöryal iletişim için)
   └── İsim tercihi seçimi (gerçek / takma / anonim)

2. EDİTÖRYAL İNCELEME (3-5 iş günü)
   ├── İçerik uygunluğu kontrolü
   ├── Tıbbi doğruluk kontrolü (bilimsel danışman)
   ├── Gizlilik riski değerlendirmesi
   └── Düzenleme önerileri

3. HASTA ONAYI
   ├── Düzenlenmiş metin hastaya gönderilir
   ├── Hasta onaylar veya değişiklik ister
   ├── KVKK aydınlatma metni imzalatılır
   └── Fotoğraf izni (varsa) ayrıca alınır

4. YAYIN
   ├── Status: "review" → "published"
   ├── Sitede yayınlanır
   └── Hastaya yayın bildirimi gönderilir

5. YAYIN SONRASI
   ├── Hasta istediği zaman kaldırma talebinde bulunabilir
   ├── Düzenli olarak (6 ayda bir) güncelleme talebi gönderilir
   └── Hasta durumu değiştiyse hikaye güncellenebilir
```

---

## 6. generateStaticParams Fonksiyonları

### 6.1 Şehir Klinik Sayfaları

```typescript
// src/app/(marketing)/klinikler/[sehir]/page.tsx

import citiesData from "@/data/cities.json";

export async function generateStaticParams() {
  // 81 il için statik sayfa oluştur
  return citiesData.map((city) => ({
    sehir: city.slug,
  }));
}

export const revalidate = 604800; // 7 gün ISR

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sehir: string }>;
}) {
  const { sehir } = await params;
  const city = citiesData.find((c) => c.slug === sehir);

  if (!city) {
    return { title: "Şehir Bulunamadı" };
  }

  return {
    title: city.seo.metaTitle,
    description: city.seo.metaDescription,
    alternates: {
      canonical: `https://lipodemturkiye.com/klinikler/${sehir}`,
    },
  };
}
```

### 6.2 Doktor Profil Sayfaları

```typescript
// src/app/(marketing)/doktorlar/[slug]/page.tsx

import { db } from "@/lib/db";

export async function generateStaticParams() {
  const doctors = await db.doctor.findMany({
    where: { active: true },
    select: { slug: true },
  });

  return doctors.map((doc) => ({
    slug: doc.slug,
  }));
}

export const revalidate = 604800; // 7 gün ISR
```

### 6.3 Karşılaştırma Sayfaları

```typescript
// src/app/(marketing)/karsilastirma/[slug]/page.tsx

import comparisonsData from "@/data/comparisons.json";

export async function generateStaticParams() {
  return comparisonsData
    .filter((c) => c.status === "published")
    .map((comparison) => ({
      slug: comparison.slug,
    }));
}

export const revalidate = 2592000; // 30 gün ISR (statik içerik)
```

### 6.4 Blog Makaleleri

```typescript
// src/app/(marketing)/blog/[slug]/page.tsx

import { getAllBlogSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 86400; // 1 gün ISR
```

### 6.5 Hasta Hikayeleri

```typescript
// src/app/(marketing)/hikayeler/[slug]/page.tsx

import { getAllContent } from "@/lib/mdx";

export async function generateStaticParams() {
  const stories = await getAllContent("stories");
  return stories.map((story) => ({ slug: story.slug }));
}

export const revalidate = 604800; // 7 gün ISR
```

### 6.6 Cluster Makaleleri (Düz Yapı)

```typescript
// src/app/(marketing)/[slug]/page.tsx

import { getAllClusterSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await getAllClusterSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export const revalidate = 2592000; // 30 gün ISR (pillar/cluster nadiren değişir)
```

### 6.7 ISR Revalidation Süreleri Özet

| Sayfa Tipi | `revalidate` | Süre | Gerekçe |
|------------|-------------|------|---------|
| Ana Sayfa | 3600 | 1 saat | İstatistikler, son içerikler güncellenir |
| Pillar Sayfalar | 2592000 | 30 gün | Nadiren değişir, SEO kritik |
| Cluster Makaleleri | 2592000 | 30 gün | Nadiren değişir |
| Blog Makaleleri | 86400 | 1 gün | Düzenli güncelleme, yorumlar |
| Hasta Hikayeleri | 604800 | 7 gün | Yayınlandıktan sonra nadiren değişir |
| Klinik Şehir Sayfaları | 604800 | 7 gün | Klinik/fiyat güncellemeleri |
| Doktor Profilleri | 604800 | 7 gün | Nadiren değişir |
| Karşılaştırma Sayfaları | 2592000 | 30 gün | Statik içerik |
| İnteraktif Araçlar | `force-dynamic` | - | Tamamen client-side |
| Topluluk | `force-dynamic` | - | Canlı veri |
| Hesap | `force-dynamic` | - | Kullanıcı bazlı |

### 6.8 Sitemap Entegrasyonu

```typescript
// src/app/sitemap.ts

import { MetadataRoute } from "next";
import citiesData from "@/data/cities.json";
import comparisonsData from "@/data/comparisons.json";
import { getAllContent, getAllBlogSlugs, getAllClusterSlugs } from "@/lib/mdx";
import { db } from "@/lib/db";

const SITE_URL = "https://lipodemturkiye.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Statik sayfalar
  const staticPages = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${SITE_URL}/lipodem-nedir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/lipodem-tedavisi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/lipodem-beslenme`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/lipodem-egzersiz`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/lipodem-ruh-sagligi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/lipodem-turkiye-rehberi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${SITE_URL}/klinikler`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/doktorlar`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${SITE_URL}/karsilastirma`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/hikayeler`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${SITE_URL}/araclar`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${SITE_URL}/hakkimizda`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    { url: `${SITE_URL}/iletisim`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
  ];

  // Şehir sayfaları (81 il)
  const cityPages = citiesData.map((city) => ({
    url: `${SITE_URL}/klinikler/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Doktor sayfaları
  const doctors = await db.doctor.findMany({
    where: { active: true },
    select: { slug: true, lastUpdated: true },
  });
  const doctorPages = doctors.map((doc) => ({
    url: `${SITE_URL}/doktorlar/${doc.slug}`,
    lastModified: new Date(doc.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Karşılaştırma sayfaları
  const comparisonPages = comparisonsData
    .filter((c) => c.status === "published")
    .map((c) => ({
      url: `${SITE_URL}/karsilastirma/${c.slug}`,
      lastModified: new Date(c.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Blog makaleleri
  const blogPosts = await getAllContent("blog");
  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Cluster makaleleri
  const clusterSlugs = await getAllClusterSlugs();
  const clusterPages = clusterSlugs.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Hasta hikayeleri
  const stories = await getAllContent("stories");
  const storyPages = stories.map((story) => ({
    url: `${SITE_URL}/hikayeler/${story.slug}`,
    lastModified: new Date(story.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...cityPages,
    ...doctorPages,
    ...comparisonPages,
    ...blogPages,
    ...clusterPages,
    ...storyPages,
  ];
}
```

---

## 7. Veri Toplama ve Yönetim Planı

### 7.1 Klinik Verisi Toplama

| Aşama | Zaman | Kaynak | Aksiyon |
|-------|-------|--------|---------|
| **Lansman öncesi** | Mayıs 2026 | Lipödem Kongresi katılımcı listesi | Kongre konuşmacısı cerrahları manuel ekle |
| **Lansman** | Haziran 2026 | Klinik web siteleri, Google Maps | İlk 10 şehir için klinik verisi topla |
| **Ay 1-3** | Temmuz-Eylül 2026 | Hasta gönderileri, DoktorTakvimi | Klinik önerisi formundan gelen verileri doğrula |
| **Sürekli** | Aylık | Google Maps API, web scraping | Otomatik güncellik kontrolü |

**Toplama süreci:**
1. Klinik web sitesinden bilgi çekilir (adres, telefon, tedavi listesi, doktor listesi)
2. Google Maps'ten koordinat, çalışma saatleri ve kullanıcı yorumları alınır
3. Veriler `data/clinics.json` ve `data/doctors.json` dosyalarına eklenir
4. Prisma seed ile veritabanına aktarılır
5. Admin panelinden düzenleme yapılabilir (gelecekte)

### 7.2 Doktor Verisi Güncelleme

| Güncelleme Tetikleyicisi | Aksiyon | Sorumlu |
|--------------------------|---------|---------|
| Doktor bilgi güncelleme talebi | Doğrula ve güncelle | Editör |
| Yeni sertifika/yayın | `education`, `certifications`, `publications` güncelle | Editör |
| Klinik değişikliği | `clinicId`, `address`, `coordinates` güncelle | Editör |
| Verified badge talebi | Doktor kimlik doğrulama süreci başlat | Admin |
| Hasta değerlendirmesi | `rating`, `reviewCount` güncelle | Otomatik |
| 6 aylık rutin kontrol | Tüm doktor profillerini aktiflik kontrolü | Editör |

**Doğrulama (Verified Badge) süreci:**
1. Doktor/klinik başvurur
2. Diploma ve uzmanlık belgesi istenir
3. Klinik adresi doğrulanır (Google Maps)
4. İletişim bilgileri doğrulanır (telefon ile aranır)
5. Verified badge eklenir ve sayfada gösterilir

### 7.3 Hasta Hikayesi Moderasyon Akışı

```
GELEN HİKAYE
    │
    ▼
[OTOMATİK FİLTRE]
    ├── Spam kontrolü (bot algılama)
    ├── Kötüye kullanım kontrolü (reklam, nefret söylemi)
    └── Minimum kelime sayısı kontrolü (>100 kelime)
    │
    ▼
[EDİTÖRYAL İNCELEME] (3-5 iş günü)
    ├── İçerik kalitesi ve uygunluk
    ├── Tıbbi iddia kontrolü (aşırı vaatler, yanlış bilgi)
    ├── Gizlilik risk değerlendirmesi
    ├── Tanımlanabilir kişi/kurum kontrolü
    └── Dil ve ton düzeltmeleri
    │
    ▼
[BİLİMSEL DANIŞMAN İNCELEMESİ] (opsiyonel -- tıbbi iddia varsa)
    │
    ▼
[HASTA ONAYI]
    ├── Düzenlenmiş metin gönderilir
    ├── Onay veya değişiklik talebi
    └── KVKK aydınlatma metni imzalatılır
    │
    ▼
[YAYIN]
    └── Status: published, sitede görünür
```

### 7.4 Veri Doğrulama Kuralları

```typescript
// src/lib/validations.ts

import { z } from "zod";

// --- Klinik doğrulama ---
export const clinicSchema = z.object({
  name: z.string().min(3, "Klinik adı en az 3 karakter").max(100),
  address: z.string().min(10, "Adres en az 10 karakter"),
  city: z.string().min(2),
  district: z.string().min(2),
  phone: z
    .string()
    .regex(/^(\+90|0)?[0-9]{10}$/, "Geçerli telefon numarası girin")
    .nullable(),
  website: z.string().url("Geçerli URL girin").nullable(),
  coordinates: z.object({
    lat: z.number().min(36).max(42), // Türkiye enlem aralığı
    lng: z.number().min(26).max(45), // Türkiye boylam aralığı
  }),
  treatments: z
    .array(
      z.enum([
        "vaser", "tumescent", "wal", "pal", "mld", "cdt",
        "kompresyon", "pnomatik", "beslenme", "egzersiz", "psikolojik",
      ])
    )
    .min(1, "En az 1 tedavi türü seçilmeli"),
  priceRange: z
    .object({
      min: z.number().min(0),
      max: z.number().min(0),
      currency: z.literal("TRY"),
    })
    .refine((data) => data.max >= data.min, "Maksimum fiyat minimumdan büyük olmalı")
    .nullable(),
});

// --- Doktor doğrulama ---
export const doctorSchema = z.object({
  fullName: z.string().min(5, "Tam isim en az 5 karakter").max(100),
  slug: z.string().regex(/^[a-z0-9-]+$/, "Slug sadece küçük harf, rakam ve tire içerebilir"),
  title: z.enum(["Prof. Dr.", "Doç. Dr.", "Op. Dr.", "Uzm. Dr.", "Dr."]),
  specialty: z.string().min(5),
  city: z.string().min(2),
  lipedemaExperienceYears: z.number().min(0).max(50),
  treatments: z.array(z.string()).min(1),
  bio: z.string().min(50, "Biyografi en az 50 karakter").max(2000),
});

// --- Hasta hikayesi doğrulama ---
export const patientStorySchema = z.object({
  patientName: z.string().min(2).max(50),
  age: z.number().min(14).max(100),
  city: z.string().min(2),
  stage: z.number().min(1).max(4),
  diagnosisYear: z.number().min(2000).max(new Date().getFullYear()),
  title: z.string().min(10).max(200),
  quote: z.string().min(10).max(300),
  beforeSummary: z.string().min(50).max(1000),
  journeySummary: z.string().min(50).max(1000),
  currentSummary: z.string().min(50).max(1000),
  consent: z.object({
    writtenConsentReceived: z.literal(true, {
      errorMap: () => ({ message: "Yazılı onay zorunludur" }),
    }),
    kvkkConsent: z.literal(true, {
      errorMap: () => ({ message: "KVKK onayı zorunludur" }),
    }),
    namePreference: z.enum(["real", "pseudonym", "anonymous"]),
    photoPermission: z.boolean(),
  }),
});

// --- Blog frontmatter doğrulama ---
export const blogFrontmatterSchema = z.object({
  title: z.string().min(10).max(200),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  description: z.string().min(50).max(300),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  author: z.string().min(3),
  category: z.enum(["tani", "tedavi", "beslenme", "egzersiz", "ruh-sagligi", "turkiye-rehberi", "haber"]),
  pillar: z.string(),
  status: z.enum(["draft", "published"]),
  access: z.enum(["free", "basic_premium", "full_premium"]),
});
```

### 7.5 Veri Akış Diyagramı

```
                    ┌─────────────────────┐
                    │   VERİ KAYNAKLARI   │
                    └─────────┬───────────┘
                              │
            ┌─────────────────┼─────────────────┐
            │                 │                 │
     ┌──────▼──────┐   ┌─────▼─────┐   ┌──────▼──────┐
     │  Manuel      │   │  Kullanıcı│   │  Otomatik   │
     │  Giriş       │   │  Gönderim │   │  (API/Scrape│
     │              │   │           │   │             │
     │ - Klinikler  │   │ - Hikaye  │   │ - Google    │
     │ - Doktorlar  │   │ - Klinik  │   │   Maps      │
     │ - Makaleler  │   │   önerisi │   │ - Fiyat     │
     │              │   │ - Doktor  │   │   takibi    │
     │              │   │   bilgi   │   │             │
     └──────┬───────┘   └─────┬─────┘   └──────┬──────┘
            │                 │                 │
            └─────────────────┼─────────────────┘
                              │
                     ┌────────▼────────┐
                     │   DOĞRULAMA     │
                     │   (Zod Schema)  │
                     └────────┬────────┘
                              │
                     ┌────────▼────────┐
                     │   MODERASYON    │
                     │   (Editör)      │
                     └────────┬────────┘
                              │
               ┌──────────────┼──────────────┐
               │              │              │
        ┌──────▼──────┐ ┌────▼────┐  ┌──────▼──────┐
        │  data/*.json │ │  MDX    │  │  Prisma DB  │
        │  (statik)    │ │ content │  │  (dinamik)  │
        └──────┬───────┘ └────┬────┘  └──────┬──────┘
               │              │              │
               └──────────────┼──────────────┘
                              │
                     ┌────────▼────────┐
                     │   Next.js ISR   │
                     │   + SSG         │
                     └────────┬────────┘
                              │
                     ┌────────▼────────┐
                     │   Vercel Edge   │
                     │   (CDN + Deploy)│
                     └─────────────────┘
```
