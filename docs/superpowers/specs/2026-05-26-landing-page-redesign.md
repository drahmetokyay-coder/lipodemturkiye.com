# Landing Page Yeniden Tasarımı — Tasarım Spesifikasyonu

**Tarih:** 2026-05-26
**Durum:** Onaylandı

---

## Vizyon

lipodemturkiye.com'u Türkiye'nin lipödem konusundaki ilk başvuru platformuna dönüştürmek. Hasta-öncelikli bir landing page ile hastaların bilgilendiği, semptom testi çözdüğü ve lipödem ekosistemindeki profesyonellere (doktorlar, cerrahlar, diyetisyenler, fizyoterapistler, medikal firmalar) ulaştığı bir yapı.

## Gelir Modeli

**Hibrit B2B** — hasta tarafı tamamen ücretsiz, gelir profesyonellerden:

- **Ücretsiz listeleme:** Temel profil (isim, uzmanlık, şehir, iletişim bilgisi)
- **Premium abonelik:** "Öne Çıkan" badge, yeşil bordür, üst sırada gösterilme, blog yazısı yayınlama hakkı, genişletilmış profil
- **Lead (opsiyonel):** Hasta randevu/bilgi talepleri üzerinden pay-per-lead

Hasta Premium aboneliği kaldırılıyor. Tüm hasta içerikleri ücretsiz.

## Hedef Kitle

- **Birincil (B2C):** Türk kadınlar, 25-55 yaş, lipödem şüphesi veya tanısı olan hastalar
- **İkincil (B2B):** Lipödem tedavisi sunan profesyoneller ve firmalar

## Teknoloji

- **Framework:** Next.js (App Router) — mevcut altyapı korunuyor
- **Deploy:** Vercel
- **Stil:** Tailwind CSS
- **Öncelik:** Mobil-öncelikli

---

## Landing Page Bölümleri (Sıralı)

### 1. Hero — Split Layout, Çift CTA

**Düzen:** Sol metin + sağ video/illüstrasyon (mevcut split layout korunur)

**Sol taraf içerik:**
- Badge: "Türkiye'nin Lipödem Platformu"
- Başlık: "Lipödem'de / Doğru Bilgi, / Doğru Uzman"
- Alt metin: "Bilimsel bilgi, interaktif araçlar ve Türkiye genelinde uzman ağıyla lipödem yolculuğunuzda yanınızdayız."
- Stat pills: `370M+ hasta` | `50+ uzman` | `4 kategori`
- **Çift CTA:**
  - Birincil (filled): "Semptom Testi Çöz →"
  - İkincil (outlined): "Uzman Bul"

**Sağ taraf:** Mevcut video arka plan korunur.

**Mevcut hero'dan farklar:**
- Başlık "Yalnız Değilsiniz" → "Doğru Bilgi, Doğru Uzman" (platform mesajı)
- Tek CTA → çift CTA (test + uzman bul)
- Stat pills'e "50+ uzman" ve "4 kategori" eklenir
- Quick nav linkleri kaldırılır (değer kartları bu rolü üstleniyor)

### 2. 4 Değer Kartı — Platform Değer Önerisi

**Düzen:** 4 sütunlu grid (mobilde 2x2)

| Kart | İkon | Başlık | Alt metin |
|------|------|--------|-----------|
| 1 | 📚 | Bilgi | Bilimsel makaleler |
| 2 | 🧪 | Test | Semptom analizi |
| 3 | 👨‍⚕️ | Uzman | 50+ profesyonel |
| 4 | 💬 | Topluluk | 3.000+ hasta |

**Tasarım:** Hafif arka plan, ince bordür, ikon merkezde, minimal kartlar. Her kart ilgili sayfaya link verir.

**Not:** Bu bölüm mevcut "Trust Bar" (empati alıntısı) yerine geçiyor. Empati mesajı kaldırılır — hero alt metni ve hasta deneyimleri bölümü bu rolü üstlenir.

**İkonlar:** Üretimde emoji yerine Lucide ikonları kullanılacak (BookOpen, FlaskConical, UserRound, MessageCircle vb.)

### 3. Lipödem Nedir — Belirtiler & Evreler

**Düzen:** Mevcut yapı korunur (sol başlık + sağ açıklama, altında belirtiler listesi).

**Değişiklikler:**
- "Bilimsel kaynaklarla yönetiliyoruz" trust bölümü korunur
- İçerik kısa ve öz tutulur — detay için "Lipödem Nedir" sayfasına yönlendirme

### 4. Uzman Dizini Preview — Kategori Tabları + Kart Grid

**Düzen:** Üstte kategori filtre tabları, altta uzman profil kartları grid'i.

**Kategori Tabları:**
- Tümü (aktif/varsayılan)
- Doktorlar
- Cerrahlar
- Diyetisyenler
- Fizyoterapi & Medikal

**Uzman Kartı İçeriği:**
- Profil fotoğrafı / avatar placeholder
- İsim ve unvan
- Uzmanlık kategorisi (renk kodlu)
- Şehir
- Yıldız puanı
- "Profili Gör" CTA butonu

**Premium "Öne Çıkan" Profil:**
- Yeşil (#1A6B5A) bordür
- "ÖNE ÇIKAN" badge (sağ üst köşe)
- Listede üst sırada gösterilir

**Alt CTA:** "Tüm Uzmanları Gör →" butonu → /uzmanlar sayfasına yönlendirir

**Landing page'de gösterilecek kart sayısı:** 3-6 (ekran boyutuna göre responsive)

### 5. Semptom Testi Highlight

**Düzen:** Mevcut yapı korunur (sol metin + sağ test mockup).

**Değişiklik:**
- Test sonucu artık uygun uzman kategorisi önerecek (örn: "Evre 2 sonucunuz için bir plastik cerrah veya fizyoterapist öneriyoruz")
- Bu, testten uzman dizinine doğal bir köprü oluşturur

### 6. Türkiye Haritası — Klinik Bulucu

**Düzen:** Mevcut interaktif Türkiye haritası korunur.

**Değişiklikler:**
- Haritanın üstüne veya yanına kategori filtreleri eklenir (Doktor/Cerrah/Diyetisyen/Fizyoterapi)
- Harita pin'leri kategori renk kodlarıyla ayrılır

### 7. Uzman İpuçları — Blog Linkleri

**Düzen:** 3 kart grid (mobilde tek sütun)

**Her kart:**
- Üst renk şeridi (kategoriye göre: yeşil/turuncu/mavi)
- Profesyonel avatar + isim + unvan
- Blog yazısı başlığı (bold)
- Kısa alıntı/özet (2 satır)
- "Devamını Oku →" linki → blog yazısına

**Amaç:** Hem hastaya değer katar (uzman tavsiyesi), hem profesyonele görünürlük sağlar, hem de blog içeriklerine trafik yönlendirir.

### 8. Hasta Deneyimleri — Testimonials

**Düzen:** Mevcut 3 kart grid korunur.

**Değişiklikler:**
- "Test Tamamlandı" CTA'sı korunabilir
- Yıldız puanları ve evre bilgisi korunur

### 9. Profesyoneller İçin CTA — B2B Dönüşüm

**Düzen:** Tam genişlik, koyu yeşil gradient (#163832 → #1A6B5A) arka plan.

**Sol taraf:**
- Küçük etiket: "PROFESYONELLER İÇİN"
- Başlık: "Lipödem Hastalarına Ulaşmanın En Etkili Yolu"
- Alt metin: Kısa değer önerisi
- Değer noktaları (checkmark listesi):
  - ✓ Ücretsiz temel profil oluşturun
  - ✓ Premium ile öne çıkın ve daha fazla hastaya ulaşın
  - ✓ Blog yazılarınızla uzmanlığınızı gösterin
- **Çift CTA:**
  - Birincil (beyaz filled): "Ücretsiz Kayıt Ol →"
  - İkincil (outlined): "Paketleri İncele"

**Sağ taraf:** 3 istatistik kutusu:
- 3.000+ aylık hasta ziyareti
- %85 tedavi arayışında
- 1. Türkiye'de lipödem platformu

### 10. Newsletter — Bülten Kaydı

**Düzen:** Mevcut yapı korunur (yeşil arka plan, ortalanmış form).

---

## Kaldırılan Bölümler

| Mevcut Bölüm | Neden Kaldırıldı |
|-------------|-----------------|
| Trust Bar (empati alıntısı) | Değer kartları ve hero alt metni bu rolü üstleniyor |
| "Neden Biz" visual highlight | Uzman ekosistemi ve değer kartları bu mesajı veriyor |
| Premium Pricing (49 TL/ay) | Hasta aboneliği kaldırıldı, gelir B2B'den |
| Tedavi Süreci (3 adım) | Semptom testi highlight ve uzman dizini bu akışı kapsıyor |

## Header Navigasyon

**Mevcut:** Lipödem Nedir | Tedavi | Beslenme | Egzersiz | Araçlar | Klinikler
**Yeni:** Lipödem Nedir | Tedavi | Beslenme | Egzersiz | **Uzmanlar** | Araçlar

- "Klinikler" → "Uzmanlar" olarak değişir (daha geniş kapsamlı)
- Header CTA "Semptom Testi" olarak kalır

## Sticky Mobile CTA

Mevcut "Semptom Testi Çöz" butonu korunur — birincil huni girişi olarak görev yapar.

---

## Yeni Sayfalar (Landing Page Dışı)

Landing page tasarımı aşağıdaki yeni sayfaları gerektirir (ayrı spec'lerde detaylandırılacak):

1. **/uzmanlar** — Tam uzman dizini sayfası (filtreleme, arama, kategori)
2. **/uzmanlar/[slug]** — Bireysel uzman profil sayfası
3. **/profesyoneller** — B2B onboarding sayfası (paketler, kayıt formu)
4. **/blog** — Uzman blog yazıları

---

## Tasarım Kararları Özeti

| Karar | Seçim | Alternatifler |
|-------|-------|---------------|
| Gelir modeli | Hibrit (listeleme + lead) | Sadece listeleme, sadece lead, reklam/sponsorluk |
| Sayfa odağı | Hasta-öncelikli (%80 B2C) | Eşit ağırlıklı, pazar yeri hissi |
| Profesyonel kategorileri | 4: Doktor, Cerrah, Diyetisyen, Fizyoterapi+Medikal | — |
| Birincil CTA | Semptom Testi + Uzman Yönlendirme | Sadece test, sadece uzman bul, hesap aç |
| Hasta Premium | Kaldırıldı | Küçültülmüş, aynı kalabilir |
| Bölüm düzeni | B — Platform Vitrini | A — Eğitim Hunisi, C — Hikaye Anlatımı |
| Hero düzeni | A — Split layout (sol metin + sağ görsel) | B — Ortalanmış + değer kartları |
| Uzman dizini düzeni | A — Kategori tabları + kart grid | B — Kategoriye göre satırlar |
