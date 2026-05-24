# Lipödem Türkiye -- Kapsamlı Site Mimarisi

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, content-strategy-output.md, competitor-profiles-output.md, customer-research-output.md, marketing-psychology-output.md
**Teknoloji:** Next.js 15 (App Router) + Vercel
**Hedef Lansman:** 1. Ulusal Lipödem Kongresi (6-7 Haziran 2026, Ankara)

---

## 1. Tam Sitemap (Sayfa Hiyerarşisi)

### 1.1 ASCII Ağaç Yapısı

```
lipodemturkiye.com/
│
├── / ................................................ Ana Sayfa
│
├── /lipodem-nedir ................................... [PILLAR] Tanı ve Farkındalık
│   ├── /lipodem-belirtileri ......................... 12 Kritik İşaret
│   ├── /lipodem-evreleri ............................ Evre 1-4 Detayları
│   ├── /lipodem-vs-obezite .......................... Fark Nasıl Anlaşılır
│   ├── /lipodem-vs-lenfodem ......................... 7 Temel Fark
│   ├── /bacaklariniz-neden-incelmiyor ............... Semptom SEO
│   ├── /diyet-yapiyorum-bacaklarim-ayni ............. Semptom SEO
│   ├── /lipodem-testi ............................... Evde Kontrol
│   ├── /lipodem-turleri ............................. Tip 1-5 Yağ Dağılımı
│   ├── /lipodem-nedenleri ........................... Genetik, Hormonlar
│   ├── /lipodem-hangi-yasta-baslar .................. Ergenlik, Hamilelik
│   ├── /lipodem-erkeklerde .......................... Erkeklerde Görülür mü
│   └── /agrili-selulit-mi-lipodem-mi ................ Ayırt Etme
│
├── /lipodem-tedavisi ................................ [PILLAR] Tedavi Yol Haritası
│   ├── /lipodem-ameliyati ........................... Teknikler, Süreç, Sonuçlar
│   ├── /lipodem-ameliyat-fiyatlari .................. Güncel Maliyet Rehberi
│   ├── /vaser-liposuction-lipodem ................... Avantaj/Dezavantaj
│   ├── /liposuction-teknikleri-karsilastirma ........ Vaser vs Tumescent vs WAL
│   ├── /lipodem-kompresyon-tedavisi ................. Doğru Giysi Seçimi
│   ├── /lipodem-manuel-lenf-drenaji ................. MLD Rehberi
│   ├── /lipodem-ameliyat-deneyimleri ................ Hasta Yorumları
│   ├── /konservatif-tedavi-vs-cerrahi ............... Karar Rehberi
│   ├── /lipodem-ameliyat-sonrasi .................... İlk 30 Gün
│   ├── /lipodem-fizyoterapi ......................... CDT Nedir
│   ├── /lipodem-pnomatik-kompresyon ................. Evde Kullanım
│   ├── /lipodem-yeni-tedaviler ...................... 2024-2026 Gelişmeler
│   ├── /lipodem-glp1-ilaclar ....................... GLP-1 ve Lipödem
│   ├── /lipodem-agri-yonetimi ....................... 10 Kanıt Bazlı Yöntem
│   └── /lipodem-ameliyat-hazirlik ................... Kontrol Listesi
│
├── /lipodem-beslenme ................................ [PILLAR] Beslenme ve Yaşam Tarzı
│   ├── /lipodem-diyeti .............................. Ne Yenmeli, Neden Kaçınılmalı
│   ├── /lipodem-ketojenik-diyet ..................... Bilimsel Kanıtlar
│   ├── /lipodem-haftalik-menu ....................... 7 Günlük Menü
│   ├── /lipodem-bagirsak-sagligi .................... Mikrobiyom Bağlantısı
│   ├── /lipodem-takviyeler .......................... Hangisi İşe Yarar
│   ├── /lipodeme-iyi-gelen-besinler ................. 15 Süper Besin
│   ├── /lipodem-ve-gluten ........................... Bırakmalı mı
│   ├── /lipodem-tarifleri ........................... Türk Mutfağı 20 Tarif
│   ├── /lipodem-hidrasyon ........................... Su İçme Rehberi
│   ├── /lipodem-seker-iltihap ....................... Tetikleyen Gıdalar
│   ├── /lipodem-alisveris-listesi ................... Markette Ne Almalı
│   ├── /lipodem-alkol ............................... Etkisi ve Öneriler
│   ├── /lipodem-diyet-hatalari ...................... 10 Sık Yapılan Hata
│   └── /lipodem-vitamin-d ........................... Neden Önemli
│
├── /lipodem-egzersiz ................................ [PILLAR] Egzersiz ve Hareket
│   ├── /lipodem-yuzme ............................... Su İçi Egzersiz
│   ├── /lipodem-yoga ................................ 10 Hareket
│   ├── /lipodem-evde-egzersiz ....................... 15 Dakikalık Program
│   ├── /lipodem-yuruyus ............................. Doğru Teknik
│   ├── /lipodem-guc-antrenman ....................... Güvenli Başlangıç
│   ├── /lipodem-kompresyon-egzersiz ................. Kurallar ve İpuçları
│   ├── /lipodem-pilates ............................. Temel Hareketler
│   ├── /lipodem-bisiklet ............................ Doğru Bisiklet Seçimi
│   ├── /lipodem-egzersiz-sonrasi-sislik ............. Normal mi
│   └── /lipodem-egzersiz-programi ................... 8 Haftalık Başlangıç
│
├── /lipodem-ruh-sagligi ............................ [PILLAR] Duygusal Sağlık
│   ├── /lipodem-hasta-hikayeleri .................... Gerçek Deneyimler
│   ├── /lipodem-oz-sefkat ........................... Bu Sizin Hatanız Değil
│   ├── /lipodem-beden-imaji ......................... Bedeninizle Barışmak
│   ├── /lipodem-tani-sonrasi ........................ İlk 30 Gün
│   ├── /lipodem-aile-anlatma ........................ Ailenize Nasıl Anlatırsınız
│   ├── /lipodem-yeme-bozuklugu ...................... Riskler ve Korunma
│   ├── /lipodem-iliski-etkisi ....................... Partner Desteği
│   ├── /kronik-hastalik-basa-cikma .................. 5 Strateji
│   ├── /lipodem-yaz-kaygisi ......................... Güçlü Kalmak
│   ├── /lipodem-destek-grubu ........................ Nerede, Nasıl
│   └── /lipodem-mitleri ............................. Söylenenler vs Gerçek
│
├── /lipodem-turkiye-rehberi ......................... [PILLAR] Türkiye Rehberi
│   ├── /lipodem-sgk-rehberi ......................... SGK Kapsamı
│   ├── /lipodem-hangi-doktora-gidilir ............... Uzman Seçimi
│   ├── /lipodem-doktora-hazirlık .................... Tanı Kontrol Listesi
│   ├── /lipodem-kompresyon-nereden-alinir ........... Türkiye Rehberi
│   ├── /lipodem-devlet-hastanesi .................... Mümkün mü
│   ├── /lipodem-aile-hekimi ......................... Anlatma Rehberi
│   ├── /lipodem-fizyoterapist-bulmak ................ Bulma Rehberi
│   ├── /lipodem-ozel-sigorta ........................ Sigorta Rehberi
│   └── /lipodem-kongresi-2026 ....................... Kongre Bilgileri
│
├── /klinikler ....................................... Klinik Bulucu (Ana Sayfa)
│   ├── /klinikler/istanbul .......................... Şehir Sayfaları (x81)
│   ├── /klinikler/ankara
│   ├── /klinikler/izmir
│   ├── /klinikler/antalya
│   ├── /klinikler/bursa
│   └── /klinikler/[sehir] .......................... Diğer İller
│
├── /doktorlar ....................................... Doktor Dizini
│   └── /doktorlar/[slug] ............................ Doktor Profil Sayfası
│
├── /karsilastirma ................................... Tedavi Karşılaştırma
│   ├── /karsilastirma/vaser-vs-tumescent ............ Teknik Karşılaştırma
│   ├── /karsilastirma/konservatif-vs-cerrahi ........ Yaklaşım Karşılaştırma
│   └── /karsilastirma/[slug] ........................ Diğer Karşılaştırmalar
│
├── /araclar ......................................... İnteraktif Araçlar
│   ├── /araclar/semptom-testi ....................... Semptom Değerlendirme
│   ├── /araclar/evre-degerlendirme .................. Evre Belirleme
│   ├── /araclar/maliyet-hesaplayici ................. Tedavi Maliyet Hesap
│   └── /araclar/beslenme-planlayici ................. Kişiselleştirilmiş Plan [PREMIUM]
│
├── /hikayeler ....................................... Hasta Hikayeleri
│   └── /hikayeler/[slug] ............................ Bireysel Hikaye
│
├── /blog ............................................ Blog / Haberler
│   └── /blog/[slug] ................................. Blog Yazısı
│
├── /topluluk ........................................ Topluluk [PREMIUM]
│   ├── /topluluk/yeni-taniliyim ..................... Başlangıç Grubu
│   ├── /topluluk/beslenme-tarifleri ................. Pratik Paylaşım
│   ├── /topluluk/tedavi-deneyimleri ................. İleri Düzey
│   └── /topluluk/motivasyon-destek .................. Duygusal Alan
│
├── /premium ......................................... Premium Üyelik
│   ├── /premium/fiyatlandirma ....................... Paketler
│   ├── /premium/ozellikler .......................... Özellik Detayları
│   └── /premium/sss ................................. Sıkça Sorulanlar
│
├── /hesap ........................................... Kullanıcı Hesabı
│   ├── /hesap/giris ................................. Giriş
│   ├── /hesap/kayit ................................. Kayıt
│   ├── /hesap/sifre-sifirla ......................... Şifre Sıfırlama
│   ├── /hesap/profil ................................ Profil Yönetimi
│   ├── /hesap/abonelik .............................. Abonelik Yönetimi
│   ├── /hesap/kaydedilenler ......................... Kaydedilen İçerikler
│   └── /hesap/ilerleme .............................. İlerleme Takibi
│
├── /hakkimizda ...................................... Hakkımızda
│   ├── /hakkimizda/misyon ........................... Misyon ve Vizyon
│   ├── /hakkimizda/ekip ............................. Ekip ve Uzmanlar
│   └── /hakkimizda/bilimsel-kaynaklar ............... Referanslar
│
├── /iletisim ........................................ İletişim
│
├── /gizlilik-politikasi ............................. Gizlilik Politikası
├── /kullanim-sartlari ............................... Kullanım Şartları
├── /cerez-politikasi ................................ Çerez Politikası
├── /tibbi-sorumluluk-reddi .......................... Tıbbi Disclaimer
│
├── /sitemap.xml ..................................... XML Sitemap
└── /robots.txt ...................................... Robots
```

### 1.2 Sayfa Envanteri Tablosu

#### Ana Sayfalar (L1)

| # | Sayfa Adı | URL | Sayfa Türü | Erişim | Öncelik |
|---|-----------|-----|------------|--------|---------|
| 1 | Ana Sayfa | `/` | Statik | Free | P0 -- Lansman |
| 2 | Lipödem Nedir (Pillar) | `/lipodem-nedir` | Statik (ISR) | Free | P0 -- Lansman |
| 3 | Tedavi Yol Haritası (Pillar) | `/lipodem-tedavisi` | Statik (ISR) | Free | P0 -- Lansman |
| 4 | Beslenme Rehberi (Pillar) | `/lipodem-beslenme` | Statik (ISR) | Free | P0 -- Lansman |
| 5 | Egzersiz Rehberi (Pillar) | `/lipodem-egzersiz` | Statik (ISR) | Free | P0 -- Lansman |
| 6 | Ruh Sağlığı (Pillar) | `/lipodem-ruh-sagligi` | Statik (ISR) | Free | P0 -- Lansman |
| 7 | Türkiye Rehberi (Pillar) | `/lipodem-turkiye-rehberi` | Statik (ISR) | Free | P0 -- Lansman |
| 8 | Klinik Bulucu | `/klinikler` | Dinamik | Free | P0 -- Lansman |
| 9 | Doktor Dizini | `/doktorlar` | Dinamik | Free | P1 -- Ay 1 |
| 10 | İnteraktif Araçlar | `/araclar` | Statik | Free | P0 -- Lansman |
| 11 | Hasta Hikayeleri | `/hikayeler` | Statik (ISR) | Free | P0 -- Lansman |
| 12 | Blog | `/blog` | Statik (ISR) | Free | P0 -- Lansman |
| 13 | Topluluk | `/topluluk` | Dinamik | Free/Premium | P2 -- Ay 3 |
| 14 | Premium | `/premium` | Statik | Free (bilgi) | P1 -- Ay 2 |
| 15 | Hakkımızda | `/hakkimizda` | Statik | Free | P0 -- Lansman |
| 16 | İletişim | `/iletisim` | Statik | Free | P0 -- Lansman |
| 17 | Tedavi Karşılaştırma | `/karsilastirma` | Statik (ISR) | Free | P1 -- Ay 1 |

#### Detay/Şablon Sayfalar (L2-L3) -- Özet

| Sayfa Tipi | Tahmini Sayfa Sayısı | URL Yapısı | Türü |
|------------|---------------------|------------|------|
| Cluster makaleleri (6 sütun) | 75 | `/lipodem-nedir/[slug]` vb. | Statik (ISR) |
| Şehir klinik sayfaları | 81 | `/klinikler/[sehir]` | Dinamik (ISR) |
| Doktor profilleri | ~30-50 (başlangıç) | `/doktorlar/[slug]` | Dinamik (ISR) |
| Tedavi karşılaştırma | ~10 | `/karsilastirma/[slug]` | Statik (ISR) |
| Blog yazıları | Sürekli artan | `/blog/[slug]` | Statik (ISR) |
| Hasta hikayeleri | Sürekli artan | `/hikayeler/[slug]` | Statik (ISR) |
| Araç sayfaları | 4 (başlangıç) | `/araclar/[slug]` | Dinamik (CSR) |
| Topluluk alt sayfaları | 4 kategori | `/topluluk/[kategori]` | Dinamik |
| Hesap sayfaları | 7 | `/hesap/[sayfa]` | Dinamik |
| Yasal sayfalar | 4 | `/[slug]` | Statik |

**Toplam Tahmini Sayfa Sayısı (Lansmanda):** ~120-140 sayfa
**Toplam Tahmini Sayfa Sayısı (12. Ay):** ~300-400 sayfa

---

## 2. URL Yapısı

### 2.1 Türkçe Karakter Dönüşüm Kuralları

| Türkçe Karakter | URL Karşılığı | Örnek |
|-----------------|---------------|-------|
| ö | o | lipödem → lipodem |
| ü | u | türkiye → turkiye |
| ş | s | başlangıç → baslangic |
| ç | c | seçim → secim |
| ğ | g | değerlendirme → degerlendirme |
| ı | i | sıkça → sikca |
| İ | i | İstanbul → istanbul |
| Boşluk | - (tire) | evre değerlendirme → evre-degerlendirme |

### 2.2 URL Kuralları

```
GENEL FORMAT:
lipodemturkiye.com/[kategori]/[alt-kategori]/[detay]

KURALLAR:
1. Maksimum 3 seviye derinlik
2. Tüm harfler küçük (lowercase)
3. Kelime ayırıcı olarak tire (-) kullanılır
4. Türkçe özel karakterler ASCII karşılıklarına dönüştürülür
5. Gereksiz bağlaçlar çıkarılır (ve, ile, için, bir, bu)
6. Tarih bilgisi URL'de yer almaz (evergreen yapı)
7. Trailing slash kullanılmaz
8. Maksimum URL uzunluğu: 75 karakter
```

### 2.3 URL Örnekleri -- Kategori Bazlı

```
BLOG MAKALELERİ:
/lipodem-nedir                              → Pillar page (L1)
/lipodem-nedir/lipodem-belirtileri          → Cluster (L2) -- HAYIR
/lipodem-belirtileri                        → Cluster (L2) -- EVET (düz yapı)

NOT: Cluster makaleleri pillar URL'nin altında DEĞİL, düz yapıda olacak.
     İç bağlantılar ile hiyerarşi sağlanacak, URL'de değil.
     Bunun nedeni: Daha kısa URL, daha iyi SEO, daha kolay paylaşım.

KLİNİK SAYFALARI:
/klinikler                                   → Klinik bulucu ana sayfa
/klinikler/istanbul                          → İstanbul klinikleri
/klinikler/ankara                            → Ankara klinikleri
/klinikler/izmir                             → İzmir klinikleri

DOKTOR SAYFALARI:
/doktorlar                                   → Doktor dizini
/doktorlar/dr-yener-demirtas                 → Doktor profili

KARŞILAŞTIRMA SAYFALARI:
/karsilastirma/vaser-vs-tumescent            → Teknik karşılaştırma
/karsilastirma/konservatif-vs-cerrahi        → Yaklaşım karşılaştırma

ARAÇ SAYFALARI:
/araclar/semptom-testi                       → Semptom testi
/araclar/evre-degerlendirme                  → Evre değerlendirme
/araclar/maliyet-hesaplayici                 → Maliyet hesaplayıcı

HASTA HİKAYELERİ:
/hikayeler                                   → Ana sayfa
/hikayeler/ayse-34-yas-istanbul              → Bireysel hikaye

BLOG:
/blog                                        → Blog listesi
/blog/lipodem-farkindalik-ayi-2026           → Blog yazısı
```

### 2.4 Canonical URL Stratejisi

```
KURALLAR:
1. Her sayfa kendi canonical URL'sine sahip
2. www vs non-www: non-www tercih (lipodemturkiye.com)
3. HTTP → HTTPS 301 redirect (Vercel otomatik)
4. Trailing slash yok → trailing slash varsa 301 redirect
5. Duplicate içerik (kategori+etiket filtreleri): canonical = filtresiz sayfa
6. Pagination: rel="next/prev" + canonical = sayfa 1
7. Klinik sayfalarında aynı klinik farklı URL'de listelenmez
8. Blog makalelerinde parametreli URL'ler canonical'a yönlendirilir

ÖRNEK:
<link rel="canonical" href="https://lipodemturkiye.com/lipodem-nedir" />
<link rel="canonical" href="https://lipodemturkiye.com/klinikler/istanbul" />
```

### 2.5 Breadcrumb Yapısı

```
ANA SAYFA:
Ana Sayfa

PİLLAR PAGE:
Ana Sayfa > Lipödem Nedir

CLUSTER MAKALESİ:
Ana Sayfa > Lipödem Nedir > Lipödem Belirtileri
(Not: URL düz ama breadcrumb hiyerarşik -- bu bilinçli ayrım)

KLİNİK SAYFASI:
Ana Sayfa > Klinikler > İstanbul

DOKTOR PROFİLİ:
Ana Sayfa > Doktorlar > Dr. Yener Demirtaş

ARAÇ SAYFASI:
Ana Sayfa > Araçlar > Semptom Testi

HASTA HİKAYESİ:
Ana Sayfa > Hasta Hikayeleri > Ayşe'nin Hikayesi

BLOG YAZISI:
Ana Sayfa > Blog > [Yazı Başlığı]

KARŞILAŞTIRMA:
Ana Sayfa > Karşılaştırma > Vaser vs Tumescent
```

---

## 3. Navigasyon Tasarımı

### 3.1 Desktop Navigasyon

#### Ana Menü (Mega Menü -- Max 6 item)

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│  [LOGO]   Lipödem Nedir   Tedavi   Yaşam   Türkiye Rehberi   Araçlar   Blog    │
│                                                                 [Giriş] [Premium]│
└──────────────────────────────────────────────────────────────────────────────────┘
```

**Mega Menü Alt Kategorileri:**

```
┌─ Lipödem Nedir ──────────────────────────────────────────────────┐
│                                                                   │
│  TANI & FARKINDALIK          KARŞILAŞTIRMA        HIZLI ERİŞİM   │
│  ─────────────────           ──────────────        ────────────   │
│  Belirtiler                  Lipödem vs Obezite    [Semptom Testi]│
│  Evreler (1-4)               Lipödem vs Lenfödem   [Evre Değer.] │
│  Türleri (Tip 1-5)           Selülit mi Lipödem mi                │
│  Nedenleri                                                        │
│  Hangi Yaşta Başlar                                               │
│                                                                   │
│  >> Tüm Tanı Rehberleri                                          │
└───────────────────────────────────────────────────────────────────┘

┌─ Tedavi ─────────────────────────────────────────────────────────┐
│                                                                   │
│  KONSERVATİF              CERRAHİ               KARŞILAŞTIRMA    │
│  ────────────              ───────               ──────────────   │
│  Kompresyon Tedavisi       Ameliyat Rehberi       Konservatif vs  │
│  Manuel Lenf Drenajı       Vaser Liposuction       Cerrahi       │
│  Fizyoterapi (CDT)         Ameliyat Fiyatları     Vaser vs        │
│  Ağrı Yönetimi             Ameliyat Hazırlık       Tumescent     │
│  Pnömatik Kompresyon       Ameliyat Sonrası                      │
│                            Hasta Deneyimleri                      │
│  YENİ GELİŞMELER          GLP-1 İlaçları                         │
│                                                                   │
│  >> Tüm Tedavi Rehberleri                                        │
└───────────────────────────────────────────────────────────────────┘

┌─ Yaşam ──────────────────────────────────────────────────────────┐
│                                                                   │
│  BESLENME                  EGZERSİZ              RUH SAĞLIĞI     │
│  ────────                  ────────              ──────────       │
│  Beslenme Rehberi          Egzersiz Rehberi      Duygusal Destek  │
│  Lipödem Diyeti            Yüzme                 Hasta Hikayeleri │
│  Haftalık Menü             Yoga                  Öz-Şefkat        │
│  Türk Mutfağı Tarifleri    Evde Egzersiz         Beden İmajı     │
│  Takviyeler                Güç Antrenmanı        Destek Grupları  │
│  Alışveriş Listesi         8 Haftalık Program    Topluluk         │
│                                                                   │
│  >> Tüm Yaşam Rehberleri                                         │
└───────────────────────────────────────────────────────────────────┘

┌─ Türkiye Rehberi ────────────────────────────────────────────────┐
│                                                                   │
│  DOKTOR & KLİNİK           SİSTEM REHBERİ        PRATIK BİLGİ   │
│  ──────────────             ──────────────         ────────────   │
│  [Klinik Bulucu Harita]     SGK Rehberi            Kompresyon     │
│  İstanbul Uzmanları         Devlet Hastanesi        Nereden Alınır│
│  Ankara Uzmanları           Özel Sigorta           Doktora        │
│  İzmir Uzmanları            Hangi Doktora           Hazırlık      │
│  Tüm Doktorlar              Gidilir               Aile Hekimi    │
│                                                                   │
│  >> Tüm Türkiye Rehberleri                                       │
└───────────────────────────────────────────────────────────────────┘
```

#### Utility Navigation (Üst Sağ)

```
┌──────────────────────────────┐
│  [Arama]  [Giriş]  [Premium]│
└──────────────────────────────┘

Giriş yapılmışsa:
┌────────────────────────────────────────┐
│  [Arama]  [Kaydedilenler]  [Profil ▼] │
└────────────────────────────────────────┘
```

#### Footer Navigasyonu

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  LİPÖDEM TÜRKİYE                                                            │
│  Türkiye'nin ilk kapsamlı lipödem hasta platformu                            │
│                                                                              │
│  BİLGİ                 TEDAVİ               ARAÇLAR             HAKKIMIZDA  │
│  ────                  ──────               ───────             ──────────   │
│  Lipödem Nedir         Tedavi Rehberi        Semptom Testi      Misyon       │
│  Belirtiler            Ameliyat Rehberi      Evre Değerlendirme Ekip         │
│  Evreler               Kompresyon            Klinik Bulucu      İletişim     │
│  Beslenme              Fiyat Rehberi         Maliyet Hesap.     Kaynaklar    │
│  Egzersiz              SGK Rehberi           Beslenme Plan.     Blog         │
│  Ruh Sağlığı           Doktor Bulma                                          │
│                                                                              │
│  YASAL                 TAKİP EDİN                                            │
│  ─────                 ──────────                                            │
│  Gizlilik Politikası   [Instagram] [YouTube] [Facebook] [TikTok]             │
│  Kullanım Şartları                                                           │
│  Çerez Politikası      [Email Newsletter Kayıt Formu]                        │
│  Tıbbi Sorumluluk                                                            │
│                                                                              │
│  ─────────────────────────────────────────────────────────────────────────── │
│  © 2026 Lipödem Türkiye. Bu site tıbbi tavsiye yerine geçmez.               │
│  Tüm içerikler bilgilendirme amaçlıdır. Tanı ve tedavi için doktorunuza    │
│  başvurunuz.                                                                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Mobil Navigasyon

#### Hamburger Menü Yapısı

```
┌─ Mobil Menü ─────────────────────────────┐
│                                           │
│  [X Kapat]                                │
│                                           │
│  ┌─────────────────────────────────────┐  │
│  │  [Arama...]                         │  │
│  └─────────────────────────────────────┘  │
│                                           │
│  Lipödem Nedir                      [>]   │
│  Tedavi                             [>]   │
│  Beslenme & Egzersiz                [>]   │
│  Ruh Sağlığı                        [>]   │
│  Türkiye Rehberi                     [>]   │
│  Araçlar                             [>]   │
│  Blog                                     │
│  Hasta Hikayeleri                         │
│  ─────────────────────────────────────    │
│  [Semptom Testi Başlat]  ← CTA butonu    │
│  ─────────────────────────────────────    │
│  Giriş Yap                               │
│  Premium Üyelik                           │
│  ─────────────────────────────────────    │
│  Hakkımızda                               │
│  İletişim                                 │
│                                           │
└───────────────────────────────────────────┘
```

#### Bottom Navigation Bar (Mobil -- 5 Item)

```
┌──────────────────────────────────────────────┐
│                                              │
│  [Ana Sayfa]  [Araçlar]  [Klinik]  [Topluluk]  [Menü]  │
│   🏠           🔬         🏥        👥         ☰     │
│                                              │
└──────────────────────────────────────────────┘

Not: Ikonlar placeholder -- gerçek tasarımda SVG ikonlar kullanılacak
```

#### Sticky CTA Bar (Mobil -- Scroll ile görünür)

```
┌──────────────────────────────────────────────┐
│  Lipödem şüpheniz mi var?  [Semptom Testi]   │
└──────────────────────────────────────────────┘

Koşullar:
- Sayfa %30 scroll edildiğinde görünür
- Blog ve bilgi sayfalarında aktif
- Araç sayfalarında ve hesap sayfalarında gizli
- Kullanıcı testi tamamladıysa: "Klinik Bulucu" CTA'sı gösterilir
```

#### Swipe Navigasyon

```
Uygulama Alanları:
- Hasta hikayeleri: Sağa/sola swipe ile sonraki/önceki hikaye
- Klinik bulucu: Harita ve liste görünümü arasında swipe
- Semptom testi: Sorular arası swipe
- Blog kategorileri: Yatay scroll ile kategori seçimi
- Egzersiz videoları: Karusel yapısında swipe
```

---

## 4. İç Bağlantı Stratejisi

### 4.1 Pillar-Cluster Bağlantı Haritası

```
                          ┌──────────────────┐
                          │    ANA SAYFA      │
                          │   (Hub Node)      │
                          └────────┬─────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            │                      │                      │
   ┌────────▼────────┐  ┌────────▼────────┐  ┌──────────▼────────┐
   │  TANI (Pillar)  │  │ TEDAVİ (Pillar) │  │ BESLENME (Pillar) │
   │  /lipodem-nedir │  │ /lipodem-       │  │ /lipodem-         │
   │                 │  │  tedavisi       │  │  beslenme         │
   └───────┬─────────┘  └───────┬─────────┘  └───────┬───────────┘
           │                    │                     │
     ┌─────┼─────┐        ┌────┼────┐           ┌────┼────┐
     │     │     │        │    │    │           │    │    │
   [12   cluster      [15  cluster          [14  cluster
   makaleler]          makaleler]            makaleler]

   ┌────────▼────────┐  ┌────────▼────────┐  ┌──────────▼────────┐
   │EGZERSİZ(Pillar) │  │RUH SAĞL(Pillar) │  │TÜRKİYE R.(Pillar)│
   │ /lipodem-       │  │ /lipodem-ruh-   │  │ /lipodem-turkiye- │
   │  egzersiz       │  │  sagligi        │  │  rehberi          │
   └───────┬─────────┘  └───────┬─────────┘  └───────┬───────────┘
           │                    │                     │
     ┌─────┼─────┐        ┌────┼────┐           ┌────┼────┐
     │     │     │        │    │    │           │    │    │
   [10   cluster      [11  cluster          [13  cluster
   makaleler]          makaleler]            makaleler]
```

### 4.2 Cross-Pillar Bağlantı Kuralları

| Kaynak Sütun | Hedef Sütun | Bağlantı Türü | Örnek |
|--------------|-------------|----------------|-------|
| Tanı | Tedavi | "Tanı aldıysanız sonraki adım" | Evreler makalesinden → Tedavi pillar |
| Tanı | Türkiye Rehberi | "Doktor bulmak için" | Belirtiler makalesinden → Klinik bulucu |
| Tedavi | Beslenme | "Tedaviyi destekleyen beslenme" | Ameliyat sonrası → Beslenme planı |
| Tedavi | Egzersiz | "Tedaviyi destekleyen egzersiz" | Kompresyon → Kompresyon ile egzersiz |
| Tedavi | Türkiye Rehberi | "Maliyet ve SGK bilgisi" | Ameliyat → SGK rehberi |
| Beslenme | Egzersiz | "Beslenme + hareket birlikte" | Diyet → Egzersiz rehberi |
| Egzersiz | Ruh Sağlığı | "Egzersizin ruh sağlığına etkisi" | Yüzme → Beden imajı |
| Ruh Sağlığı | Topluluk | "Destek almak için" | Destek grupları → Topluluk |
| Türkiye Rehberi | Araçlar | "Doktor bulmak için klinik bulucu" | Doktor rehberi → Klinik bulucu |
| Tüm sütunlar | Araçlar | Contextual CTA | Her makalede ilgili araç CTA'sı |

### 4.3 Contextual Link Kuralları

```
HER MAKALEDE ZORUNLU BAĞLANTILAR:
├── Kendi pillar sayfasına (breadcrumb + in-text)
├── En az 2 ilişkili cluster makalesine (in-text)
├── En az 1 farklı sütundaki makaleye (cross-pillar)
├── En az 1 araç sayfasına (CTA olarak)
└── Geri bağlantı: Pillar sayfası tüm cluster makalelerine bağlantı verir

BAĞLANTI YERLEŞİM KURALLARI:
├── İlk 200 kelime içinde en az 1 iç bağlantı
├── Her 400-500 kelimede 1 iç bağlantı
├── Makale sonunda "İlgili İçerikler" widget'ı (3-4 öneri)
├── Sidebar'da (desktop) "Ayrıca Okuyun" kutusu
└── CTA kutuları: Makale ortasında ve sonunda
```

### 4.4 Related Content Widget Yapısı

```
┌─ İlgili İçerikler ──────────────────────────────────────────┐
│                                                               │
│  Bu konuyla ilgili diğer rehberler:                           │
│                                                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ [Görsel]     │  │ [Görsel]     │  │ [Görsel]     │       │
│  │              │  │              │  │              │       │
│  │ Lipödem      │  │ Lipödem vs   │  │ Evre         │       │
│  │ Belirtileri  │  │ Obezite      │  │ Değerlendirme│       │
│  │              │  │              │  │              │       │
│  │ [Oku →]      │  │ [Oku →]      │  │ [Oku →]      │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                               │
└───────────────────────────────────────────────────────────────┘

SEÇİM ALGORİTMASI:
1. Aynı pillar altındaki en ilişkili 2 makale (tag/konu eşleşmesi)
2. Farklı pillar'dan en ilişkili 1 makale (cross-pillar)
3. Fallback: En popüler makaleler
```

### 4.5 Breadcrumb Path Örnekleri (JSON-LD ile)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Ana Sayfa",
      "item": "https://lipodemturkiye.com"
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
      "name": "Lipödem Belirtileri: 12 Kritik İşaret",
      "item": "https://lipodemturkiye.com/lipodem-belirtileri"
    }
  ]
}
```

---

## 5. Programmatic / Şablon Sayfalar

### 5.1 Şehir Bazlı Klinik Sayfaları

**URL:** `/klinikler/[sehir]`
**Sayfa Sayısı:** 81 (tüm iller)
**Öncelik Sırası:** İstanbul, Ankara, İzmir, Antalya, Bursa, Adana, Konya, Mersin, Kayseri, Eskişehir (ilk 10)

**Veri Modeli:**

```typescript
interface CityClinicPage {
  // Şehir bilgileri
  cityName: string;              // "İstanbul"
  citySlug: string;              // "istanbul"
  region: string;                // "Marmara"
  population: number;            // 16_000_000
  
  // Klinik verileri
  clinics: Clinic[];             // Şehirdeki klinikler
  clinicCount: number;           // Toplam klinik sayısı
  doctorCount: number;           // Toplam doktor sayısı
  
  // SEO
  metaTitle: string;             // "Lipödem Doktoru İstanbul: Uzman Listesi (2026)"
  metaDescription: string;       // 150-160 karakter
  h1: string;                    // "İstanbul'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler"
  
  // İçerik blokları
  cityIntro: string;             // Şehre özel giriş paragrafı
  treatmentOptions: string[];    // Şehirde sunulan tedavi türleri
  averagePriceRange: string;     // "55.000 - 180.000 TL"
  nearestAlternative?: string;   // Klinik yoksa en yakın şehir
  
  // Konum
  mapCenter: { lat: number; lng: number };
  
  // İlgili bağlantılar
  relatedCities: string[];       // Yakın şehirler
}

interface Clinic {
  id: string;
  name: string;                  // "ABC Klinik"
  slug: string;
  address: string;
  city: string;
  district: string;
  phone: string;
  website?: string;
  mapCoordinates: { lat: number; lng: number };
  doctors: Doctor[];
  treatments: TreatmentType[];   // ["vaser", "tumescent", "mld", "kompresyon"]
  priceRange?: { min: number; max: number };
  rating?: number;               // Kullanıcı puanı
  reviewCount?: number;
  photos?: string[];
  verified: boolean;             // Platform tarafından doğrulanmış mı
  lastUpdated: string;           // ISO tarih
}
```

### 5.2 Doktor Profil Sayfaları

**URL:** `/doktorlar/[slug]`
**Slug formatı:** `dr-[isim]-[soyisim]` veya `prof-dr-[isim]-[soyisim]`

**Veri Modeli:**

```typescript
interface DoctorProfile {
  // Temel bilgiler
  id: string;
  fullName: string;              // "Op. Dr. Yener Demirtaş"
  slug: string;                  // "dr-yener-demirtas"
  title: string;                 // "Op. Dr." | "Prof. Dr." | "Doç. Dr." | "Uzm. Dr."
  specialty: string;             // "Plastik ve Rekonstrüktif Cerrahi"
  subSpecialty?: string;         // "Lipödem Cerrahisi"
  
  // Konum
  city: string;
  district: string;
  clinicName: string;
  clinicSlug: string;            // Klinik sayfasına bağlantı
  address: string;
  mapCoordinates: { lat: number; lng: number };
  
  // İletişim
  phone?: string;
  email?: string;
  website?: string;
  appointmentUrl?: string;       // Online randevu linki
  
  // Uzmanlık
  lipedemaExperience: number;    // Yıl
  totalOperations?: number;      // Toplam lipödem operasyonu
  treatments: TreatmentType[];   // Sunduğu tedaviler
  techniques: string[];          // ["Vaser", "Tumescent", "WAL"]
  
  // Eğitim ve sertifikalar
  education: Education[];
  certifications: string[];
  memberships: string[];         // Dernek üyelikleri
  publications?: Publication[];
  
  // Değerlendirme
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
  
  // Medya
  profilePhoto: string;
  photos?: string[];
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Durum
  verified: boolean;
  active: boolean;
  lastUpdated: string;
}
```

### 5.3 Tedavi Karşılaştırma Sayfaları

**URL:** `/karsilastirma/[slug]`

**Planlanan Sayfalar:**

| Karşılaştırma | Slug | Hedef Anahtar Kelime |
|----------------|------|---------------------|
| Vaser vs Tumescent | `vaser-vs-tumescent` | vaser tumescent fark lipödem |
| Konservatif vs Cerrahi | `konservatif-vs-cerrahi` | lipödem ameliyatsız tedavi |
| Vaser vs WAL | `vaser-vs-wal` | WAL liposuction lipödem |
| MLD vs Pnömatik Kompresyon | `mld-vs-pnomatik` | manuel drenaj vs makine |
| Akdeniz Diyeti vs Ketojenik | `akdeniz-vs-ketojenik` | lipödem diyet karşılaştırma |
| Devlet vs Özel Hastane | `devlet-vs-ozel` | lipödem tedavi devlet hastane |
| Türkiye vs Yurt Dışı | `turkiye-vs-yurtdisi` | lipödem ameliyat yurt dışı |

**Veri Modeli:**

```typescript
interface ComparisonPage {
  slug: string;
  title: string;
  optionA: ComparisonOption;
  optionB: ComparisonOption;
  criteria: ComparisonCriterion[];
  verdict: string;                    // Sonuç özeti
  ctaType: "clinic-finder" | "symptom-test" | "premium";
  relatedArticles: string[];
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  faqItems: FAQItem[];                // Schema FAQ için
}

interface ComparisonCriterion {
  name: string;                       // "Maliyet"
  optionAValue: string;               // "35.000-80.000 TL"
  optionBValue: string;               // "55.000-120.000 TL"
  winner?: "A" | "B" | "tie";
  explanation: string;
}
```

### 5.4 Blog Makaleleri

**URL:** `/blog/[slug]`

**Veri Modeli:**

```typescript
interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  author: Author;
  publishDate: string;
  updateDate?: string;
  category: ContentPillar;           // 6 sütundan biri
  tags: string[];
  readingTime: number;               // Dakika
  
  // İçerik
  content: string;                   // MDX
  excerpt: string;                   // 150-200 karakter özet
  heroImage: Image;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  secondaryKeywords: string[];
  canonicalUrl: string;
  
  // Schema
  schemaType: "Article" | "MedicalWebPage" | "HowTo" | "FAQPage";
  faqItems?: FAQItem[];
  
  // İlişkiler
  pillarPage: string;               // Bağlı olduğu pillar slug
  relatedArticles: string[];        // İlgili makaleler
  relatedTools?: string[];          // İlgili araçlar
  
  // Erişim
  accessLevel: "free" | "teaser" | "premium";
  teaserPercentage?: number;        // Teaser ise: %30, %50 vb.
  
  // Etkileşim
  ctaType: "symptom-test" | "newsletter" | "premium" | "clinic-finder";
  ctaPosition: ("inline" | "bottom" | "sidebar")[];
  
  // AEO
  aeoScore?: number;
  directAnswer?: string;            // AI motorları için doğrudan yanıt
  sources: Source[];                 // Bilimsel kaynaklar
}
```

### 5.5 Hasta Hikayeleri

**URL:** `/hikayeler/[slug]`

**Veri Modeli:**

```typescript
interface PatientStory {
  slug: string;
  patientName: string;              // "Ayşe" (veya takma ad)
  age: number;
  city: string;
  stage: 1 | 2 | 3 | 4;
  diagnosisYear: number;
  anonymous: boolean;
  
  // Hikaye
  title: string;                    // "34 Yaşında, İstanbul: 'Sonunda Anlaşıldım'"
  story: string;                    // MDX içerik
  beforeSummary: string;            // Tanı öncesi özet
  journeySummary: string;           // Yolculuk özeti
  currentSummary: string;           // Şu anki durum
  
  // Tedavi bilgisi
  treatmentType: string[];          // ["konservatif", "cerrahi"]
  treatmentDetails?: string;
  
  // Medya
  photo?: string;                   // Hasta izni ile
  videoUrl?: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // İlişkiler
  relatedArticles: string[];
  relatedStories: string[];
}
```

---

## 6. Sayfa Tipleri ve Şablonları

### 6.1 Ana Sayfa -- Bölüm Planı

```
┌──────────────────────────────────────────────────────────────────┐
│ SECTION 1: HERO                                                  │
│ ─────────                                                        │
│ H1: "Lipödem Hakkında Bilmeniz Gereken Her Şey -- Tek Çatı      │
│      Altında"                                                    │
│ Alt metin: "Türkiye'nin ilk kapsamlı lipödem hasta platformu.   │
│ Bilimsel bilgi, interaktif araçlar, uzman klinikler ve           │
│ topluluk desteği."                                               │
│ CTA 1: [Semptom Testi Başlat] (birincil)                        │
│ CTA 2: [Lipödem Nedir?] (ikincil)                               │
│ Sosyal kanıt: "X+ kadın bu testi tamamladı"                     │
│ Görsel: Güçlü, aktif kadın görseli (çeşitli vücut tipleri)      │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 2: STIGMA KIRICI MESAJ                                   │
│ ─────────                                                        │
│ "Bu obezite değil. Bu, kadınların %6-11'ini etkileyen            │
│ kronik bir hastalık."                                            │
│ 3 istatistik kartı:                                              │
│ - "Kadınların %6-11'ini etkiler"                                 │
│ - "Ortalama tanı süresi: 10+ yıl"                               │
│ - "Doktorların sadece %51'i biliyor"                             │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 3: SEMPTOM TESTİ CTA                                    │
│ ─────────                                                        │
│ "Bacaklarınız diyet yapmanıza rağmen incelmiyor mu?"             │
│ Mini test önizleme (3 soru görseli)                              │
│ CTA: [Ücretsiz Semptom Testini Başlat]                          │
│ "3 dakika, anonim, bilimsel"                                     │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 4: İÇERİK SÜTUNLARI (6 kart)                           │
│ ─────────                                                        │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐         │
│ │ Tanı │ │Tedavi│ │Beslen│ │Egzrsz│ │ Ruh  │ │ TR   │         │
│ │  &   │ │ Yol  │ │  me  │ │  &   │ │Sağlığ│ │Rehber│         │
│ │Farknd│ │Harita│ │  &   │ │Harek.│ │  ı   │ │  i   │         │
│ │ lık  │ │  sı  │ │Yaşam │ │      │ │      │ │      │         │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘         │
│ Her kartta: İkon + Başlık + 1 cümle açıklama + "Keşfet →"      │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 5: İNTERAKTİF ARAÇLAR                                    │
│ ─────────                                                        │
│ "Size özel araçlarımız"                                          │
│ 4 araç kartı: Semptom Testi, Evre Değerlendirme, Klinik Bulucu, │
│               Maliyet Hesaplayıcı                                │
│ Her kartta: İkon + Başlık + Kısa açıklama + [Kullan]            │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 6: GÜVEN SİNYALLERİ                                     │
│ ─────────                                                        │
│ "Bilimsel temelli, hasta odaklı"                                 │
│ - "2025 Delphi Konsensüsü referanslı"                           │
│ - "20+ peer-reviewed kaynak"                                     │
│ - "Türk lipödem uzmanları tarafından incelenmiş"                │
│ - "Bağımsız platform -- hiçbir kliniğin reklamı değiliz"        │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 7: HASTA HİKAYELERİ                                     │
│ ─────────                                                        │
│ "Gerçek hikayeler, gerçek umut"                                  │
│ 3 hasta hikayesi kartı (karusel/slider)                          │
│ Her kartta: İsim, yaş, şehir, kısa alıntı, [Hikayeyi Oku]     │
│ CTA: [Tüm Hikayeleri Gör]                                       │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 8: KLİNİK BULUCU ÖNİZLEME                               │
│ ─────────                                                        │
│ "Şehrinizde lipödem uzmanı bulun"                                │
│ Mini harita + şehir seçim dropdown                               │
│ "81 ilde X+ klinik ve doktor"                                   │
│ CTA: [Klinik Bulucu'yu Aç]                                      │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 9: NEWSLETTER                                            │
│ ─────────                                                        │
│ "Haftalık lipödem bülteni"                                       │
│ "Bilimsel gelişmeler, beslenme ipuçları, hasta hikayeleri --    │
│  haftada 1 email, spam yok."                                     │
│ [Email adresiniz] [Abone Ol]                                     │
│ "X+ kadın bültenimizi okuyor"                                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION 10: FOOTER                                               │
│ (Bölüm 3.1'deki Footer tasarımı)                                 │
└──────────────────────────────────────────────────────────────────┘
```

### 6.2 Pillar Page Şablonu

```
┌──────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Ana Sayfa > [Sütun Adı]                             │
│                                                                   │
│ H1: "[Pillar Başlığı]"                                           │
│ Alt başlık: Kısa açıklama (1-2 cümle)                           │
│ Meta: Son güncelleme tarihi, okuma süresi                        │
│ Yazar: Platform Editörü + Bilimsel Danışman                     │
│                                                                   │
│ İÇİNDEKİLER (Table of Contents -- sticky sidebar desktop)       │
│ ─────────────                                                     │
│ 1. [Bölüm 1]                                                     │
│ 2. [Bölüm 2]                                                     │
│ ...                                                               │
│                                                                   │
│ GİRİŞ PARAGRAFI (ilk 100 kelimede anahtar kelime)               │
│                                                                   │
│ ┌── İNTERAKTİF ARAÇ CTA ──────────────────────────────────┐     │
│ │ "Bu konuda kendinizi test edin"                           │     │
│ │ [Semptom Testini Başlat] veya [Evre Değerlendirme]       │     │
│ └───────────────────────────────────────────────────────────┘     │
│                                                                   │
│ BÖLÜM İÇERİKLERİ (H2, H3 hiyerarşisi)                         │
│ ...uzun form içerik...                                           │
│                                                                   │
│ ┌── CLUSTER MAKALELER NAVİGASYONU ─────────────────────────┐     │
│ │ "Bu konuda derinleşin"                                    │     │
│ │                                                           │     │
│ │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │     │
│ │ │Makale 1 │ │Makale 2 │ │Makale 3 │ │Makale 4 │        │     │
│ │ └─────────┘ └─────────┘ └─────────┘ └─────────┘        │     │
│ │ ... (tüm cluster makaleleri)                              │     │
│ └───────────────────────────────────────────────────────────┘     │
│                                                                   │
│ ┌── İLGİLİ İÇERİKLER (Cross-pillar) ──────────────────────┐     │
│ │ 3-4 kart: farklı sütunlardan ilişkili makaleler          │     │
│ └───────────────────────────────────────────────────────────┘     │
│                                                                   │
│ ┌── CTA KUTUSU ────────────────────────────────────────────┐     │
│ │ Ana CTA: [Semptom Testi / Klinik Bulucu / Premium]       │     │
│ │ İkincil CTA: [Newsletter Abone Ol]                       │     │
│ └───────────────────────────────────────────────────────────┘     │
│                                                                   │
│ KAYNAKLAR                                                         │
│ ──────────                                                        │
│ Bilimsel referanslar listesi (numaralı)                          │
│                                                                   │
│ DISCLAIMER                                                        │
│ ──────────                                                        │
│ "Bu içerik bilgilendirme amaçlıdır ve tıbbi tavsiye yerine      │
│  geçmez. Tanı ve tedavi için doktorunuza başvurunuz."            │
└──────────────────────────────────────────────────────────────────┘
```

### 6.3 Blog Makalesi Şablonu

```
┌──────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Ana Sayfa > [Sütun Adı] > [Makale Başlığı]         │
│                                                                   │
│ H1: "[Makale Başlığı]"                                           │
│ Meta satırı: Yazar | Tarih | Okuma süresi | Kategori etiketi    │
│                                                                   │
│ HERO GÖRSEL                                                       │
│                                                                   │
│ İÇERİK (Markdown/MDX)                                            │
│ ├── H2 bölümleri                                                 │
│ ├── H3 alt bölümleri                                             │
│ ├── Tablolar, listeler                                           │
│ ├── Inline CTA kutuları (her ~800 kelimede)                      │
│ ├── Bilgi kutuları ("Biliyor muydunuz?")                         │
│ ├── Uyarı kutuları ("Dikkat")                                    │
│ └── Kaynak referansları ([1], [2]...)                            │
│                                                                   │
│ PAYLAŞIM BARI (sticky)                                           │
│ [WhatsApp] [Facebook] [Twitter/X] [Link Kopyala]                 │
│                                                                   │
│ YAZAR BİLGİSİ                                                    │
│ ┌────────────────────────────────────────────────────┐            │
│ │ [Foto] Yazar adı, unvan, kısa bio                 │            │
│ │ "Bu makale [Bilimsel Danışman] tarafından          │            │
│ │  incelenmiştir"                                     │            │
│ └────────────────────────────────────────────────────┘            │
│                                                                   │
│ İLGİLİ İÇERİKLER (3 kart)                                       │
│                                                                   │
│ CTA                                                               │
│ KAYNAKLAR                                                         │
│ DISCLAIMER                                                        │
└──────────────────────────────────────────────────────────────────┘
```

### 6.4 Klinik Profil Sayfası Şablonu

```
┌──────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Ana Sayfa > Klinikler > [Şehir]                     │
│                                                                   │
│ H1: "[Şehir]'da Lipödem Tedavisi: Uzman Doktorlar ve Klinikler" │
│                                                                   │
│ ŞEHİR GİRİŞ PARAGRAFI                                           │
│ Şehirdeki lipödem tedavisi hakkında genel bilgi                  │
│                                                                   │
│ FİLTRE BARI                                                      │
│ ┌──────────────────────────────────────────────────────────┐      │
│ │ İlçe: [Tümü ▼]  Tedavi: [Tümü ▼]  Sırala: [Puan ▼]   │      │
│ └──────────────────────────────────────────────────────────┘      │
│                                                                   │
│ HARİTA + LİSTE GÖRÜNÜMÜ                                         │
│ ┌────────────────────────┬─────────────────────────────────┐     │
│ │                        │  KLİNİK KART 1                  │     │
│ │     Google Maps         │  ─────────────                  │     │
│ │     Entegrasyonu        │  Klinik adı                     │     │
│ │                        │  Adres, ilçe                     │     │
│ │   Pin'ler ile          │  Doktorlar: Dr. X, Dr. Y        │     │
│ │   klinik konumları     │  Tedaviler: Vaser, MLD          │     │
│ │                        │  Fiyat aralığı: XX-XX TL        │     │
│ │                        │  [Puan] (X yorum)               │     │
│ │                        │  [Detay] [Randevu]              │     │
│ │                        ├─────────────────────────────────│     │
│ │                        │  KLİNİK KART 2                  │     │
│ │                        │  ...                             │     │
│ └────────────────────────┴─────────────────────────────────┘     │
│                                                                   │
│ ŞEHİR BİLGİLERİ                                                 │
│ ── Ortalama fiyat aralığı                                        │
│ ── Tedavi türleri sunulan                                        │
│ ── En yakın alternatif şehirler                                  │
│                                                                   │
│ İLGİLİ REHBERLER                                                 │
│ ── SGK Rehberi                                                   │
│ ── Doktor Seçimi Rehberi                                         │
│ ── Ameliyat Hazırlık                                             │
│                                                                   │
│ SSS (Schema FAQ)                                                  │
│ CTA: [Semptom Testi] | [Doktor Rehberi]                         │
└──────────────────────────────────────────────────────────────────┘
```

### 6.5 Araç Sayfası Şablonu (Semptom Testi Örneği)

```
┌──────────────────────────────────────────────────────────────────┐
│ BREADCRUMB: Ana Sayfa > Araçlar > Semptom Testi                  │
│                                                                   │
│ H1: "Lipödem Semptom Testi"                                      │
│ Alt metin: "3 dakikada, anonim, bilimsel temelli"                │
│ Sosyal kanıt: "X+ kadın bu testi tamamladı"                     │
│                                                                   │
│ ARAÇ AÇIKLAMA                                                     │
│ ── Bu test ne işe yarar                                          │
│ ── Nasıl çalışır                                                 │
│ ── Disclaimer: "Bu bir tanı aracı değildir"                      │
│                                                                   │
│ ┌── İNTERAKTİF WİDGET ────────────────────────────────────┐     │
│ │                                                           │     │
│ │  İlerleme: ████████░░░░░░░ 5/9                           │     │
│ │                                                           │     │
│ │  SORU 5: Bacaklarınızda dokunma hassasiyeti               │     │
│ │          var mı?                                           │     │
│ │                                                           │     │
│ │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │     │
│ │  │  Evet, çok  │  │ Bazen       │  │   Hayır     │      │     │
│ │  │  hassas     │  │ hassas      │  │             │      │     │
│ │  └─────────────┘  └─────────────┘  └─────────────┘      │     │
│ │                                                           │     │
│ │  [← Geri]                              [Devam →]         │     │
│ │                                                           │     │
│ └───────────────────────────────────────────────────────────┘     │
│                                                                   │
│ SONUÇ SAYFASI (test tamamlandıktan sonra)                        │
│ ┌── SONUÇ ─────────────────────────────────────────────────┐     │
│ │  Sonucunuz: [Yüksek Risk / Orta Risk / Düşük Risk]      │     │
│ │                                                           │     │
│ │  Detaylı açıklama...                                      │     │
│ │                                                           │     │
│ │  ÖNERİLEN ADIMLAR:                                       │     │
│ │  1. Doktorunuza başvurun                                  │     │
│ │  2. Bu sonucu doktorunuza gösterin                        │     │
│ │  3. Lipödem hakkında bilgi edinin                         │     │
│ │                                                           │     │
│ │  CTA: [Sonucu PDF İndir] (email karşılığı)              │     │
│ │  CTA: [Klinik Bulucu ile Doktor Bul]                     │     │
│ │  CTA: [WhatsApp ile Paylaş]                              │     │
│ └───────────────────────────────────────────────────────────┘     │
│                                                                   │
│ İLGİLİ İÇERİKLER                                                │
│ SSS                                                               │
│ DISCLAIMER                                                        │
└──────────────────────────────────────────────────────────────────┘
```

### 6.6 Premium Sayfası Şablonu

```
┌──────────────────────────────────────────────────────────────────┐
│ H1: "Lipödem Yolculuğunuzda Bir Adım Öne Geçin"                 │
│                                                                   │
│ DEĞER ÖNERİSİ                                                    │
│ "Kişiselleştirilmiş beslenme planı, uzman erişimi, topluluk     │
│  desteği -- hepsi tek platformda"                                │
│                                                                   │
│ ÖZELLİK KARŞILAŞTIRMA TABLOSU                                   │
│ ┌──────────────────┬──────────┬──────────┐                       │
│ │ Özellik          │ Ücretsiz │ Premium  │                       │
│ ├──────────────────┼──────────┼──────────┤                       │
│ │ Blog içerikleri  │    ✓     │    ✓     │                       │
│ │ Semptom testi    │    ✓     │    ✓     │                       │
│ │ Klinik bulucu    │    ✓     │    ✓     │                       │
│ │ Kişisel beslenme │    ✗     │    ✓     │                       │
│ │ Egzersiz program │    ✗     │    ✓     │                       │
│ │ Uzman Q&A        │    ✗     │    ✓     │                       │
│ │ Topluluk erişimi │  Okuma   │   Tam    │                       │
│ │ İlerleme takibi  │    ✗     │    ✓     │                       │
│ └──────────────────┴──────────┴──────────┘                       │
│                                                                   │
│ FİYATLANDIRMA                                                    │
│ ┌─────────┐  ┌─────────────────┐  ┌─────────┐                   │
│ │ AYLIK   │  │ YILLIK          │  │ DENEME  │                   │
│ │ XX TL   │  │ XX TL/ay        │  │ 7 gün   │                   │
│ │         │  │ (2 ay hediye)   │  │ ücretsiz│                   │
│ │ [Seç]   │  │ [En Popüler]   │  │ [Başla] │                   │
│ └─────────┘  └─────────────────┘  └─────────┘                   │
│                                                                   │
│ HASTA TESTİMONİALLARI                                            │
│ 3-4 gerçek kullanıcı yorumu                                      │
│                                                                   │
│ SSS                                                               │
│ "Premium üyelik ne içerir?", "İptal edebilir miyim?",            │
│ "Tıbbi tavsiye misiniz?", "Ödeme güvenliği"                     │
│                                                                   │
│ GARANTİ                                                           │
│ "30 gün içinde memnun kalmazsanız, ücretiniz iade edilir"        │
└──────────────────────────────────────────────────────────────────┘
```

---

## 7. Arama ve Filtreleme

### 7.1 Site İçi Arama Yapısı

```
ARAMA MİMARİSİ:
├── Arama Kaynakları
│   ├── Blog makaleleri (başlık, içerik, etiketler)
│   ├── Pillar page'ler
│   ├── Klinik ve doktor verileri (isim, şehir, tedavi türü)
│   ├── Hasta hikayeleri
│   ├── SSS içerikleri
│   └── Araç açıklamaları
│
├── Arama Özellikleri
│   ├── Autocomplete / typeahead öneriler
│   ├── Türkçe karakter toleransı (lipodem = lipödem)
│   ├── Yazım hatası toleransı (belirti = belirtiler)
│   ├── Sonuç kategorilendirme (Makaleler, Klinikler, Araçlar)
│   └── Sıfır sonuç sayfası: Öneri + Popüler aramalar
│
└── Teknoloji
    ├── Seçenek 1: Algolia (tercih edilen -- hız + Türkçe)
    ├── Seçenek 2: Meilisearch (self-hosted, ücretsiz)
    └── Seçenek 3: Next.js API Routes + basit metin arama (MVP)
```

### 7.2 Klinik Bulucu Filtreleri

```
┌── FİLTRE PANELİ ─────────────────────────────────────────┐
│                                                            │
│  ŞEHİR:        [Tüm Türkiye ▼]                           │
│                 Istanbul, Ankara, Izmir...                  │
│                                                            │
│  İLÇE:         [Tüm İlçeler ▼]  (şehir seçilince aktif)  │
│                                                            │
│  TEDAVİ TÜRÜ:  ☐ Vaser Liposuction                       │
│                 ☐ Tumescent Liposuction                    │
│                 ☐ WAL Liposuction                          │
│                 ☐ Manuel Lenf Drenajı (MLD)               │
│                 ☐ Kompresyon Tedavisi                      │
│                 ☐ Fizyoterapi (CDT)                       │
│                 ☐ Pnömatik Kompresyon                     │
│                                                            │
│  UZMANLIK:     ☐ Plastik Cerrah                           │
│                 ☐ Kalp-Damar Cerrahı                      │
│                 ☐ FTR Uzmanı                               │
│                 ☐ Fizyoterapist                            │
│                 ☐ Diyetisyen                               │
│                                                            │
│  FİYAT ARALIĞI: [Min TL] ─────── [Max TL]                │
│                                                            │
│  SIRALAMA:     ○ Puan (yüksek→düşük)                     │
│                 ○ Yorum sayısı                             │
│                 ○ Mesafe (konum izni ile)                   │
│                 ○ Fiyat (düşük→yüksek)                    │
│                                                            │
│  [Filtreleri Uygula]    [Temizle]                         │
└────────────────────────────────────────────────────────────┘
```

### 7.3 Blog Filtreleri

```
┌── BLOG FİLTRE BARI ──────────────────────────────────────┐
│                                                            │
│  KATEGORİ:                                                 │
│  [Tümü] [Tanı] [Tedavi] [Beslenme] [Egzersiz]            │
│  [Ruh Sağlığı] [Türkiye Rehberi]                          │
│                                                            │
│  ETİKETLER (popüler):                                      │
│  #semptomlar #ameliyat #diyet #sgk #egzersiz              │
│  #hasta-hikayeleri #yeni-arastirma #kompresyon             │
│                                                            │
│  SIRALAMA:                                                 │
│  ○ En yeni  ○ En popüler  ○ En çok yorum                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### 7.4 Arama Sonuç Sayfası

```
┌── ARAMA SONUÇLARI ───────────────────────────────────────┐
│                                                            │
│  "[arama terimi]" için X sonuç bulundu                    │
│                                                            │
│  MAKALELER (Y sonuç)                                      │
│  ─────────────────                                        │
│  ┌── Sonuç 1 ─────────────────────────────────────────┐  │
│  │ [Lipödem Nedir? Tanı, Belirtiler, Evreler]         │  │
│  │ ...arama terimiyle eşleşen metin parçası...         │  │
│  │ Tanı ve Farkındalık · 5 dk okuma                    │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  KLİNİKLER (Z sonuç)                                     │
│  ────────────────────                                     │
│  ┌── Sonuç 1 ─────────────────────────────────────────┐  │
│  │ [ABC Klinik - İstanbul, Kadıköy]                    │  │
│  │ Tedaviler: Vaser, MLD · Puan: 4.5/5                │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ARAÇLAR (W sonuç)                                        │
│  ────────────────                                         │
│  [Semptom Testi], [Klinik Bulucu]...                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 8. Teknik Notlar (Next.js App Router)

### 8.1 Route Grupları ve Dizin Yapısı

```
app/
├── (marketing)/                    ← Pazarlama sayfaları (public)
│   ├── layout.tsx                  ← Marketing layout (header + footer)
│   ├── page.tsx                    ← Ana sayfa (/)
│   │
│   ├── lipodem-nedir/
│   │   └── page.tsx                ← Pillar: Tanı (/lipodem-nedir)
│   ├── lipodem-belirtileri/
│   │   └── page.tsx                ← Cluster (/lipodem-belirtileri)
│   ├── lipodem-evreleri/
│   │   └── page.tsx
│   ├── ... (diğer cluster makaleler)
│   │
│   ├── lipodem-tedavisi/
│   │   └── page.tsx                ← Pillar: Tedavi
│   ├── lipodem-beslenme/
│   │   └── page.tsx                ← Pillar: Beslenme
│   ├── lipodem-egzersiz/
│   │   └── page.tsx                ← Pillar: Egzersiz
│   ├── lipodem-ruh-sagligi/
│   │   └── page.tsx                ← Pillar: Ruh Sağlığı
│   ├── lipodem-turkiye-rehberi/
│   │   └── page.tsx                ← Pillar: Türkiye Rehberi
│   │
│   ├── klinikler/
│   │   ├── page.tsx                ← Klinik bulucu ana (/klinikler)
│   │   └── [sehir]/
│   │       └── page.tsx            ← Şehir sayfası (/klinikler/istanbul)
│   │
│   ├── doktorlar/
│   │   ├── page.tsx                ← Doktor dizini (/doktorlar)
│   │   └── [slug]/
│   │       └── page.tsx            ← Doktor profili (/doktorlar/dr-x)
│   │
│   ├── karsilastirma/
│   │   ├── page.tsx                ← Karşılaştırma listesi
│   │   └── [slug]/
│   │       └── page.tsx            ← Karşılaştırma sayfası
│   │
│   ├── araclar/
│   │   ├── page.tsx                ← Araçlar ana sayfası
│   │   ├── semptom-testi/
│   │   │   └── page.tsx            ← Semptom testi
│   │   ├── evre-degerlendirme/
│   │   │   └── page.tsx            ← Evre değerlendirme
│   │   ├── maliyet-hesaplayici/
│   │   │   └── page.tsx            ← Maliyet hesaplayıcı
│   │   └── beslenme-planlayici/
│   │       └── page.tsx            ← Beslenme planlayıcı [PREMIUM]
│   │
│   ├── hikayeler/
│   │   ├── page.tsx                ← Hasta hikayeleri listesi
│   │   └── [slug]/
│   │       └── page.tsx            ← Bireysel hikaye
│   │
│   ├── blog/
│   │   ├── page.tsx                ← Blog listesi
│   │   └── [slug]/
│   │       └── page.tsx            ← Blog yazısı
│   │
│   ├── premium/
│   │   ├── page.tsx                ← Premium ana sayfa
│   │   ├── fiyatlandirma/
│   │   │   └── page.tsx
│   │   ├── ozellikler/
│   │   │   └── page.tsx
│   │   └── sss/
│   │       └── page.tsx
│   │
│   ├── hakkimizda/
│   │   ├── page.tsx
│   │   ├── misyon/
│   │   │   └── page.tsx
│   │   ├── ekip/
│   │   │   └── page.tsx
│   │   └── bilimsel-kaynaklar/
│   │       └── page.tsx
│   │
│   ├── iletisim/
│   │   └── page.tsx
│   │
│   ├── gizlilik-politikasi/
│   │   └── page.tsx
│   ├── kullanim-sartlari/
│   │   └── page.tsx
│   ├── cerez-politikasi/
│   │   └── page.tsx
│   └── tibbi-sorumluluk-reddi/
│       └── page.tsx
│
├── (app)/                          ← Uygulama sayfaları (auth gerekli)
│   ├── layout.tsx                  ← App layout (sidebar + compact header)
│   ├── topluluk/
│   │   ├── page.tsx                ← Topluluk ana sayfası
│   │   └── [kategori]/
│   │       └── page.tsx            ← Kategori sayfası
│   │
│   └── hesap/
│       ├── profil/
│       │   └── page.tsx
│       ├── abonelik/
│       │   └── page.tsx
│       ├── kaydedilenler/
│       │   └── page.tsx
│       └── ilerleme/
│           └── page.tsx
│
├── (auth)/                         ← Kimlik doğrulama sayfaları
│   ├── layout.tsx                  ← Auth layout (minimal, logolu)
│   ├── giris/
│   │   └── page.tsx                ← Giriş
│   ├── kayit/
│   │   └── page.tsx                ← Kayıt
│   └── sifre-sifirla/
│       └── page.tsx                ← Şifre sıfırlama
│
├── api/                            ← API Route'ları
│   ├── auth/
│   │   └── [...nextauth]/
│   │       └── route.ts            ← NextAuth.js
│   ├── newsletter/
│   │   └── route.ts                ← Newsletter kayıt
│   ├── symptom-test/
│   │   └── route.ts                ← Test sonuç kayıt
│   ├── clinics/
│   │   ├── route.ts                ← Klinik listesi API
│   │   └── [id]/
│   │       └── route.ts            ← Tekil klinik API
│   ├── doctors/
│   │   └── route.ts                ← Doktor listesi API
│   ├── search/
│   │   └── route.ts                ← Site içi arama API
│   └── contact/
│       └── route.ts                ← İletişim formu
│
├── layout.tsx                      ← Root layout (html, body, fontlar)
├── not-found.tsx                   ← 404 sayfası
├── error.tsx                       ← Genel hata sayfası
├── loading.tsx                     ← Root loading
├── sitemap.ts                      ← Dinamik XML sitemap
├── robots.ts                       ← Dinamik robots.txt
└── manifest.ts                     ← PWA manifest
```

### 8.2 Layout Hiyerarşisi

```
RootLayout (app/layout.tsx)
├── Font yükleme (Inter + Noto Sans)
├── <html lang="tr">
├── Analytics script (GA4, GTM)
├── Cookie consent banner
│
├── MarketingLayout (app/(marketing)/layout.tsx)
│   ├── <Header /> (tam menü, mega menü, utility nav)
│   ├── <MobileBottomNav /> (sadece mobil)
│   ├── <StickyCTA /> (scroll ile görünür)
│   ├── {children}
│   └── <Footer /> (tam footer)
│
├── AppLayout (app/(app)/layout.tsx)
│   ├── <AppHeader /> (kompakt header, profil menü)
│   ├── <Sidebar /> (topluluk kategorileri, hesap menü)
│   ├── {children}
│   └── <AppFooter /> (minimal footer)
│
└── AuthLayout (app/(auth)/layout.tsx)
    ├── <AuthHeader /> (sadece logo)
    ├── {children}
    └── (footer yok)
```

### 8.3 Loading ve Error State'leri

```typescript
// Her route grubu için loading.tsx
// Skeleton yapısı sayfa tipine göre değişir

// Marketing sayfaları loading:
// - Pillar/Cluster: Article skeleton (başlık + paragraf blokları)
// - Klinik bulucu: Harita skeleton + liste skeleton
// - Araçlar: Widget skeleton
// - Blog listesi: Kart grid skeleton

// App sayfaları loading:
// - Topluluk: Post listesi skeleton
// - Hesap: Form skeleton

// Error handling:
// app/error.tsx → Genel hata (retry butonu + ana sayfaya dön)
// app/not-found.tsx → 404 (arama önerisi + popüler sayfalar)
// Her route grubunda özel error.tsx → Bağlama uygun hata mesajı
```

### 8.4 Dinamik vs Statik Route'lar

| Route | Render Stratejisi | Revalidate | Açıklama |
|-------|-------------------|------------|----------|
| `/` | SSG | 1 gün (86400) | Ana sayfa -- nadiren değişir |
| `/lipodem-nedir` | SSG + ISR | 7 gün | Pillar page -- nadir güncelleme |
| `/lipodem-belirtileri` | SSG + ISR | 7 gün | Cluster makaleleri |
| `/blog/[slug]` | SSG + ISR | 1 gün | Blog yazıları -- sık güncelleme |
| `/klinikler` | SSR | -- | Klinik bulucu -- filtreleme dinamik |
| `/klinikler/[sehir]` | SSG + ISR | 1 gün | Şehir sayfaları -- klinik verisi değişebilir |
| `/doktorlar/[slug]` | SSG + ISR | 1 gün | Doktor profilleri |
| `/araclar/semptom-testi` | CSR | -- | İnteraktif araç -- client-side |
| `/araclar/maliyet-hesaplayici` | CSR | -- | İnteraktif araç -- client-side |
| `/hikayeler/[slug]` | SSG + ISR | 7 gün | Hasta hikayeleri |
| `/karsilastirma/[slug]` | SSG + ISR | 7 gün | Karşılaştırma sayfaları |
| `/topluluk/*` | SSR | -- | Topluluk -- gerçek zamanlı |
| `/hesap/*` | SSR | -- | Hesap sayfaları -- kişisel veri |
| `/premium/*` | SSG | 1 gün | Premium tanıtım |
| `/hakkimizda/*` | SSG | 30 gün | Statik bilgi sayfaları |
| Yasal sayfalar | SSG | 30 gün | Nadiren değişir |

### 8.5 ISR (Incremental Static Regeneration) Stratejisi

```typescript
// Pillar ve cluster sayfaları
export const revalidate = 604800; // 7 gün

// Blog ve haberler
export const revalidate = 86400; // 1 gün

// Klinik ve doktor sayfaları
export const revalidate = 86400; // 1 gün (veri güncelliği önemli)

// Statik sayfalar (hakkımızda, yasal)
export const revalidate = 2592000; // 30 gün

// On-demand revalidation (webhook ile tetikleme)
// CMS'de içerik güncellendiğinde:
// POST /api/revalidate?path=/lipodem-nedir&secret=xxx
```

### 8.6 Middleware Gereksinimleri

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // 1. AUTH KONTROLÜ
  // /topluluk/* ve /hesap/* sayfaları için giriş zorunlu
  if (pathname.startsWith('/topluluk') || pathname.startsWith('/hesap')) {
    const session = request.cookies.get('session');
    if (!session) {
      return NextResponse.redirect(new URL('/giris', request.url));
    }
  }
  
  // 2. PREMIUM KONTROLÜ
  // /araclar/beslenme-planlayici ve /topluluk yazma işlemleri
  // premium abonelik gerektirir
  if (pathname === '/araclar/beslenme-planlayici') {
    const subscription = request.cookies.get('subscription');
    if (subscription?.value !== 'premium') {
      return NextResponse.redirect(new URL('/premium', request.url));
    }
  }
  
  // 3. TRAILING SLASH REDIRECT
  if (pathname !== '/' && pathname.endsWith('/')) {
    return NextResponse.redirect(
      new URL(pathname.slice(0, -1), request.url),
      301
    );
  }
  
  // 4. ESKİ URL REDIRECT'LERİ
  // İleride URL yapısı değişirse burada yönetilir
  const redirects: Record<string, string> = {
    '/lipodem': '/lipodem-nedir',
    '/tedavi': '/lipodem-tedavisi',
    '/doktor-bul': '/klinikler',
  };
  if (redirects[pathname]) {
    return NextResponse.redirect(
      new URL(redirects[pathname], request.url),
      301
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### 8.7 Metadata Stratejisi

```typescript
// Her sayfa için generateMetadata fonksiyonu

// Örnek: Pillar page metadata
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Lipödem Nedir? Tanı, Belirtiler, Evreler -- Kapsamlı Rehber | Lipödem Türkiye',
    description: 'Lipödem nedir, belirtileri nelerdir, evreleri nasıl anlaşılır? Bilimsel kaynaklara dayalı kapsamlı Türkçe lipödem rehberi. Semptom testi ile kendinizi kontrol edin.',
    keywords: ['lipödem nedir', 'lipödem belirtileri', 'lipödem evreleri', 'lipödem tanı'],
    openGraph: {
      title: 'Lipödem Nedir? Kapsamlı Rehber',
      description: 'Türkiye\'nin en kapsamlı lipödem bilgi kaynağı',
      url: 'https://lipodemturkiye.com/lipodem-nedir',
      siteName: 'Lipödem Türkiye',
      locale: 'tr_TR',
      type: 'article',
      images: [{
        url: '/og/lipodem-nedir.jpg',
        width: 1200,
        height: 630,
        alt: 'Lipödem Nedir - Kapsamlı Rehber',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Lipödem Nedir? Kapsamlı Rehber',
      description: 'Türkiye\'nin en kapsamlı lipödem bilgi kaynağı',
    },
    alternates: {
      canonical: 'https://lipodemturkiye.com/lipodem-nedir',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
```

### 8.8 Yapılandırılmış Veri (Schema Markup) Planı

| Sayfa Tipi | Schema Türleri |
|------------|---------------|
| Ana Sayfa | Organization, WebSite, SearchAction |
| Pillar Page | MedicalWebPage, Article, BreadcrumbList, FAQPage |
| Cluster Makale | MedicalWebPage, Article, BreadcrumbList, FAQPage |
| Blog Yazısı | Article, BreadcrumbList, (FAQPage -- varsa) |
| Klinik Sayfası | MedicalBusiness, LocalBusiness, BreadcrumbList |
| Doktor Profili | Physician, MedicalBusiness, BreadcrumbList |
| Araç Sayfası | WebApplication, HowTo, BreadcrumbList |
| Hasta Hikayesi | Article, Person, BreadcrumbList |
| Karşılaştırma | Article, Table, FAQPage, BreadcrumbList |
| Premium Sayfası | Product, Offer, FAQPage |
| Hakkımızda | Organization, AboutPage |

---

## 9. Teknik Performans ve Altyapı Notları

### 9.1 Core Web Vitals Hedefleri

| Metrik | Hedef | Strateji |
|--------|-------|----------|
| LCP (Largest Contentful Paint) | < 2.5s | Next.js Image optimization, font preload, SSG |
| FID (First Input Delay) | < 100ms | Code splitting, lazy loading, minimal JS |
| CLS (Cumulative Layout Shift) | < 0.1 | Görsel boyut belirtme, font-display: swap |
| TTFB (Time to First Byte) | < 200ms | Vercel Edge Network, ISR |

### 9.2 Görsel Optimizasyon

```
FORMAT: WebP (fallback: JPEG)
LAZY LOADING: Viewport dışı tüm görseller
RESPONSIVE: srcSet ile cihaza uygun boyut
PLACEHOLDER: Blur placeholder (Next.js Image)
OG IMAGES: Dinamik üretim (next/og)
CDN: Vercel Image Optimization
```

### 9.3 PWA Desteği

```
AMAÇ: Mobil kullanıcılar için uygulama deneyimi
- manifest.json: Uygulama meta verileri
- Service worker: Offline okuma desteği (kaydedilen makaleler)
- Push notifications: Yeni içerik bildirimleri (opsiyonel)
- Add to home screen: iOS ve Android desteği
```

---

## 10. Lansman Önceliklendirme

### Faz 0 -- MVP (Lansman Günü, 6 Haziran 2026)

| Sayfa/Özellik | Durum |
|---------------|-------|
| Ana Sayfa | Gerekli |
| 6 Pillar Page | Gerekli |
| İlk 18 Cluster Makale (en kritik 3/sütun) | Gerekli |
| Semptom Testi | Gerekli |
| Klinik Bulucu (İstanbul, Ankara, İzmir) | Gerekli |
| Newsletter Kayıt | Gerekli |
| Blog Listesi | Gerekli |
| Hakkımızda | Gerekli |
| İletişim | Gerekli |
| Yasal Sayfalar | Gerekli |
| Mobil Responsive | Gerekli |
| SEO Temelleri (meta, sitemap, robots) | Gerekli |
| Schema Markup (Article, BreadcrumbList) | Gerekli |
| Analytics (GA4 + GSC) | Gerekli |

### Faz 1 -- Ay 1 (Temmuz 2026)

| Sayfa/Özellik | Durum |
|---------------|-------|
| Kalan cluster makaleleri (toplam 42) | Ekleme |
| Evre Değerlendirme Aracı | Yeni |
| Maliyet Hesaplayıcı | Yeni |
| Doktor Profil Sayfaları | Yeni |
| Klinik bulucu genişletme (10 il) | Genişletme |
| Hasta Hikayeleri (ilk 3) | Yeni |
| Tedavi Karşılaştırma (ilk 3) | Yeni |
| Site İçi Arama | Yeni |
| WhatsApp Paylaşım Entegrasyonu | Yeni |

### Faz 2 -- Ay 2-3 (Ağustos-Eylül 2026)

| Sayfa/Özellik | Durum |
|---------------|-------|
| Kalan tüm cluster makaleleri (81 toplam) | Tamamlama |
| Premium Üyelik Sayfası | Yeni |
| Hesap Sistemi (kayıt/giriş) | Yeni |
| Topluluk (temel) | Yeni |
| Beslenme Planlayıcı [PREMIUM] | Yeni |
| Klinik bulucu 81 il tamamlama | Genişletme |
| Programmatik şehir sayfaları | Ölçekleme |
| A/B testi altyapısı | Yeni |

---

## 11. Özet Sayılar

| Metrik | Değer |
|--------|-------|
| Toplam L1 sayfa | 17 |
| Toplam cluster makale | 75 |
| Programmatik şehir sayfası | 81 |
| Doktor profili (başlangıç) | ~30-50 |
| Tedavi karşılaştırma | 7-10 |
| İnteraktif araç | 4 |
| Toplam benzersiz URL (lansman) | ~120-140 |
| Toplam benzersiz URL (12. ay) | ~300-400 |
| Route grupları | 3 (marketing, app, auth) |
| Dinamik route | 6 ([sehir], [slug] x5) |
| ISR revalidate aralıkları | 4 (1 gün, 7 gün, 30 gün, on-demand) |
| Schema markup türü | 11 |
| Menü ana item | 6 (desktop) / 5 (bottom nav mobil) |

---

*Bu belge, Lipödem Türkiye projesinin Faz 1.2 Site Mimarisi çıktısıdır. Tüm tasarım ve geliştirme süreçleri bu mimari dokümanı referans alarak yürütülecektir.*

*Son güncelleme: 24 Mayıs 2026*
