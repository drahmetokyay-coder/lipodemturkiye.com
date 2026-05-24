# Lipödem Türkiye -- Tam Email Otomasyon Sistemi

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, pricing-output.md, lead-magnets-output.md, copywriting-output.md, marketing-psychology-output.md, content-strategy-output.md
**ESP:** Resend (React Email) + Loops (alternatif)
**Dil:** Türkçe
**KVKK:** Tam uyumlu

---

## GENEL MİMARİ

### Email Otomasyon Haritası

```
[Kayıt Kaynağı]                    [Tetiklenen Dizi]
━━━━━━━━━━━━━━━                    ━━━━━━━━━━━━━━━━
Email kaydı (LM/bülten)     ──────► DİZİ 1: Hoşgeldin (5 email, 14 gün)
Semptom testi tamamlama      ──────► DİZİ 2: Semptom Testi Sonuç (3 email)
Beslenme LM indirme          ──────► DİZİ 3: Beslenme Bilgi (7 email, 7 hafta)
Tedavi sayfası ziyareti (3+) ──────► DİZİ 4: Tedavi Bilgi (4 email, 4 hafta)
Premium deneme başlatma      ──────► DİZİ 5: Premium Deneme (5 email, 14 gün)
30 gün inaktif               ──────► DİZİ 6: Yeniden Etkileşim (3 email)
Klinik formu gönderme        ──────► DİZİ 7: Klinik Randevu Takip (2 email)
Aktif abone (Salı)           ──────► DİZİ 8: Haftalık Bülten (sürekli)
```

### Dizi Öncelik Kuralları

| Öncelik | Kural |
|---------|-------|
| 1 | Premium Deneme dizisi aktifken diğer diziler duraklar (bülten hariç) |
| 2 | Semptom Testi Sonuç dizisi, Hoşgeldin dizisini duraklatır |
| 3 | Klinik Randevu Takip, diğer tüm dizileri duraklatır (acil) |
| 4 | Yeniden Etkileşim dizisi, diğer tüm dizileri durdurmuş olur (zaten inaktif) |
| 5 | Beslenme ve Tedavi dizileri paralel çalışabilir (farklı günlerde) |
| 6 | Haftalık Bülten her zaman çalışır (deneme dizisi dahil) |

### Günlük Email Limiti

- Aynı kullanıcıya günde maksimum 1 otomasyon emaili (bülten hariç)
- Bülten + otomasyon aynı güne denk gelirse, otomasyon 1 gün kaydırılır
- Hafta sonu email gönderimi yok (Cumartesi-Pazar) -- teknik emailler hariç

### Segmentasyon Alanları

| Alan | Değerler | Kaynak |
|------|----------|--------|
| kayit_kaynagi | lipodem-rehberi, beslenme-plani, egzersiz-programi, semptom-testi, bulten, klinik-formu | Form submission |
| lipodem_evresi | evre-1, evre-2, evre-3, evre-4, bilinmiyor | Semptom testi / profil |
| risk_seviyesi | dusuk, orta, yuksek | Semptom testi skoru |
| tedavi_asamasi | farkindalik, arastirma, tedavi-arayan, tedavi-sonrasi | Davranış bazlı |
| ilgi_alani | beslenme, egzersiz, tedavi, cerrahi, topluluk | Sayfa ziyareti + tıklama |
| premium_durumu | ucretsiz, deneme, temel, tam, kurucu, iptal | Abonelik sistemi |
| aktiflik | aktif, yavas (14gün), inaktif (30gün), kayip (60gün) | Email etkileşim |

---

## EMAIL TASARIM ŞABLONU

### Marka Renkleri

| Kullanım | Renk | HEX |
|----------|------|-----|
| Header arka plan | Teal | #0D9488 |
| CTA buton ana | Teal | #0D9488 |
| CTA buton hover | Koyu teal | #0F766E |
| CTA buton ikincil | Lavanta | #A78BFA |
| Aksan / vurgu | Amber | #F59E0B |
| Metin ana | Warm gray | #44403C |
| Metin açık | Medium gray | #78716C |
| Arka plan | Krem | #FAFAF9 |
| Kart arka plan | Beyaz | #FFFFFF |
| Kenarlık | Açık gri | #E7E5E4 |

### Layout Yapısı

```
┌─────────────────────────────────────────────┐
│  [Logo: Lipödem Türkiye]        max-w: 600px│
├─────────────────────────────────────────────┤
│                                             │
│  Gövde metin alanı                          │
│  Font: Inter, 16px, line-height: 1.6        │
│  Padding: 32px                              │
│                                             │
│  [CTA Buton]                                │
│  Font: Inter SemiBold, 16px                 │
│  Padding: 14px 28px                         │
│  Border-radius: 8px                         │
│  Renk: Beyaz metin, Teal arka plan          │
│                                             │
├─────────────────────────────────────────────┤
│  Footer:                                    │
│  Lipödem Türkiye | lipödemturkiye.com       │
│  [Abonelikten Çık] | [Tercihlerimi Yönet]   │
│  KVKK Aydınlatma Metni                      │
│  © 2026 Lipödem Türkiye                     │
└─────────────────────────────────────────────┘
```

### Font Kullanımı

- Başlıklar: Inter Bold (700), 22-24px
- Alt başlıklar: Inter SemiBold (600), 18px
- Gövde: Inter Regular (400), 16px
- Alt metin / footer: Inter Light (300), 13px
- Fallback: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Mobil Uyum

- Max-width: 600px, responsive
- CTA buton: tam genişlik (mobilde)
- Font minimum: 14px (mobilde)
- Tek sütun layout (her zaman)

---

## SPAM ÖNLEME KURALLARI

| Kural | Uygulama |
|-------|----------|
| SPF/DKIM/DMARC | Tüm DNS kayıtları doğru yapılandırılmış olmalı |
| Gönderici adı | "Lipödem Türkiye" (tutarlı) |
| Gönderici email | bilgi@lipodemturkiye.com |
| Reply-to | destek@lipodemturkiye.com (gerçek monitör edilen kutu) |
| Unsubscribe header | List-Unsubscribe header her emailde bulunmalı |
| Unsubscribe link | Her emailin footer'ında, tek tıkla çalışan |
| Spam tetik kelimeler | "Ücretsiz", "Hemen", "Acil" -- konu satırında minimumda tut |
| Resim/metin oranı | Metin ağırlıklı (%60+ metin, %40 görsel) |
| Alt text | Tüm görsellerde anlamlı alt text |
| Gönderim ısınması | Yeni domain: ilk hafta günde 50, haftalık 2x artış |
| Liste hijyeni | 3 ay açmayan + tıklamayan → yeniden etkileşim dizisi → temizleme |
| Bounce yönetimi | Hard bounce: anında sil, Soft bounce: 3 denemeden sonra sil |

---

## KVKK UYUMU

### Açık Rıza Gereksinimleri

| Gereksinim | Uygulama |
|------------|----------|
| Açık rıza | Her kayıt formunda "Lipödem Türkiye'den email almayı kabul ediyorum" onay kutusu (önceden işaretli OLMAMALI) |
| Aydınlatma metni | Form altında KVKK aydınlatma metnine link |
| Çift onay (double opt-in) | Kayıt sonrası onay emaili -- linke tıklamadan listeye eklenmez |
| Kapsam bildirimi | "Email adresinizi girerek haftalık lipödem bilgilendirme bültenimize kaydolmuş olursunuz" |
| Çıkış kolaylığı | Her emailde tek tıkla abonelikten çıkma |
| Veri saklama | Email adresi + ad + kayıt tarihi + kayıt kaynağı + rıza kaydı |
| Üçüncü taraf | "Bilgileriniz üçüncü taraflarla paylaşılmaz" bildirimi |
| Silme hakkı | Talep üzerine 72 saat içinde tüm verilerin silinmesi |

### Double Opt-In Email'i

**Gönderici:** Lipödem Türkiye <bilgi@lipodemturkiye.com>
**Konu satırı:** Email adresinizi onaylayın
**Preview text:** Tek tıkla onaylayın ve lipödem bilgilerine erişin

**Gövde:**

Merhaba [Ad],

Lipödem Türkiye email listesine kaydınızı tamamlamak için aşağıdaki butona tıklayın:

**[Email Adresimi Onayla]** → onay linki

Bu linke tıklamazsanız size email göndermeyeceğiz.

Bu kaydı siz yapmadıysanız bu emaili görmezden gelebilirsiniz.

Lipödem Türkiye Ekibi

---

# ============================================================
# DİZİ 1: HOŞGELDİN DİZİSİ
# 5 Email, 14 Gün
# Tetikleyici: Yeni email kaydı (lead magnet veya bülten)
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | hosgeldin_dizisi |
| **Tetikleyici** | Email onayı tamamlama (double opt-in) |
| **Hedef** | Güven inşası → semptom testi → beslenme LM → topluluk → premium tanıtım |
| **Email sayısı** | 5 |
| **Toplam süre** | 14 gün |
| **Çıkış koşulları** | Premium deneme başlatırsa → Dizi 5'e geçiş; Semptom testi tamamlarsa → Email 3'ten devam (Dizi 2 paralel başlar) |
| **Gönderim saati** | 10:00 Türkiye saati (GMT+3) |

---

### EMAIL 1.1: Hoşgeldin + Lead Magnet Teslimi

**Gönderim:** Gün 0 (hemen, kayıt onayı sonrası)
**Gönderim saati:** Anında (tetikleyici bazlı)

**Konu satırı A:** Hoş geldiniz -- rehberiniz hazır
**Konu satırı B:** [Ad], lipödem rehberiniz burada

**Preview text:** Hemen indirin ve doktor randevunuza götürün (40 karakter)

**Segmentasyon:**
- Gönderilecek: Tüm yeni email kayıtları (double opt-in onaylamış)
- Gönderilmeyecek: Zaten premium abone olanlar

---

**Gövde:**

Merhaba [Ad],

Lipödem Türkiye ailesine hoş geldiniz.

Bu emaili alıyorsanız muhtemelen şunlardan birini yaşıyorsunuz: bacaklarınız diyete rağmen incelmiyor, dokunduğunuzda ağrı hissediyorsunuz ya da "lipödem" kelimesiyle yeni tanıştınız.

Hangisi olursa olsun, doğru yerdesiniz.

**İlk hediyeniz hazır:**

**[Lipödem Hasta Rehberini İndir -- PDF, 30 sayfa]**
CTA Buton: Teal (#0D9488), beyaz metin
URL hedefi: /rehber/lipodem-hasta-rehberi/indir?utm_source=email&utm_medium=hosgeldin&utm_campaign=e1

Bu rehberde bulacaklarınız:
- Lipödem nedir, nasıl tanınır
- Belirtiler kontrol listesi (doktorunuza götürebilirsiniz)
- Evreler ve her evrede ne yapılmalı
- Tedavi seçeneklerinin karşılaştırması
- Doktorunuza sormanız gereken 20 soru

**Birkaç ipucu:**
- Rehberi telefonunuza kaydedin -- doktor randevunuzda yanınızda olsun
- Bölüm 9'daki "20 Soru" listesini yazdırıp randevunuza götürün
- Belirtiler kontrol listesini doldurup doktorunuzla paylaşın

Önümüzdeki günlerde size lipödem yolculuğunuzda yardımcı olacak araçlar ve bilgiler paylaşacağız. Haftada en fazla 2 email -- ve her biri gerçekten faydalı olacak.

Herhangi bir sorunuz varsa bu emaile yanıt vererek bize ulaşabilirsiniz. Gerçek bir insan okuyacak.

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Bilmenizi istediğimiz bir şey var: Yaşadıklarınız sizin hatanız değil. Lipödem bir kilo sorunu değil -- genetik temeli olan kronik bir hastalık. Ve bu hastalık yönetilebilir.

---

**Teknik notlar:**
- Lead magnet'e göre dinamik içerik: Eğer beslenme planı indirdiyse, rehber yerine beslenme planı linki gösterilir
- kayit_kaynagi etiketine göre PDF linki değişir
- Tracking: email_1_1_open, email_1_1_click_pdf, email_1_1_click_ps

---

### EMAIL 1.2: Semptom Testi Daveti

**Gönderim:** Gün 2
**Gönderim saati:** 10:00 Türkiye saati

**Konu satırı A:** 2 dakikanız var mı? Semptom testiniz hazır
**Konu satırı B:** Yaşadıklarınızın bir açıklaması olabilir

**Preview text:** 10 soruluk ücretsiz test -- sonuçları doktorunuza gösterebilirsiniz (62 karakter)

**Segmentasyon:**
- Gönderilecek: Hoşgeldin dizisindeki tüm aboneler
- Gönderilmeyecek: Semptom testini zaten tamamlamış olanlar
- Koşul: Email 1.1 açılmış VEYA 48 saat geçmiş

---

**Gövde:**

Merhaba [Ad],

Bir önceki emailimizde lipödem rehberinizi paylaşmıştık. Umarız faydalı olmuştur.

Bugün size çok önemli bir aracımızı tanıtmak istiyoruz:

**2 Dakikalık Lipödem Semptom Testi**

Bu test:
- 10 bilimsel temelli sorudan oluşuyor
- Yaşadıklarınızı anlamanıza yardımcı oluyor
- Sonuçlarınızı doktorunuza gösterebileceğiniz bir rapor sunuyor
- Tamamen ücretsiz ve anonim

**[Semptom Testini Başlat]**
CTA Buton: Teal (#0D9488), beyaz metin
URL hedefi: /semptom-testi?utm_source=email&utm_medium=hosgeldin&utm_campaign=e2

**Neden önemli?**

Türkiye'de doktorların sadece %51'i lipödemi biliyor. Bu demek ki randevuya hazırlıklı gitmek çok değerli. Semptom testi sonuçlarınız, doktorunuzla konuşmanızı kolaylaştıracak somut bir başlangıç noktası sağlar.

**Bu test tanı koymaz.** Ama yaşadıklarınıza bir isim vermenize ve doğru soruları sormanıza yardımcı olur.

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Semptom testi tamamladığınızda, sonuçlarınıza özel bilgiler ve öneriler de paylaşacağız.

---

**Teknik notlar:**
- Semptom testini tamamlayanlar Dizi 2'ye eklenir, bu dizi devam eder
- Tracking: email_1_2_open, email_1_2_click_test

---

### EMAIL 1.3: Beslenme Rehberi Highlight + Beslenme LM Teklifi

**Gönderim:** Gün 5
**Gönderim saati:** 10:00 Türkiye saati

**Konu satırı A:** Lipödem ve beslenme: en çok sorulan 3 soru
**Konu satırı B:** Diyetle bacaklarınız incelmiyorsa bunları bilin

**Preview text:** Anti-inflamatuar beslenme planınız hazır -- ücretsiz indirin (55 karakter)

**Segmentasyon:**
- Gönderilecek: Hoşgeldin dizisindeki tüm aboneler
- Gönderilmeyecek: Beslenme planını zaten indirmiş olanlar (onlara alternatif versiyon: egzersiz highlight)

---

**Gövde:**

Merhaba [Ad],

Lipödem hakkında en çok gelen sorulardan üçü beslenmeyle ilgili:

**1. "Diyet yapınca bacaklarım neden incelmiyor?"**

Çünkü lipödem yağı yapısal olarak farklıdır -- fibröz doku ile kaplıdır ve kalori açığına dirençlidir. Diyetle üst bedeniniz zayıflar ama lipödem bölgeleri aynı kalır. Bu sizin iradenizin eksikliği değil, vücudunuzdaki yapısal bir farklılıktır.

**2. "Peki beslenmenin hiç etkisi yok mu?"**

Var -- ama farklı bir etkisi var. Anti-inflamatuar beslenme lipödem yağını eritmeye değil, kronik inflamasyonu azaltmaya yöneliktir. 2025 yılında yayınlanan bir araştırma, Akdeniz tarzı ketojenik diyetin lipödem hastalarında 7 ayda ortalama 12 kg kilo kaybı ve uylukta 6 cm incelme sağladığını gösterdi.

**3. "Nereden başlamalıyım?"**

İşte tam bu noktada size yardımcı olabiliriz:

**[7 Günlük Anti-İnflamatuar Beslenme Planını İndir]**
CTA Buton: Teal (#0D9488), beyaz metin
URL hedefi: /rehber/7-gunluk-beslenme-plani?utm_source=email&utm_medium=hosgeldin&utm_campaign=e3

Bu plan Türk mutfağına uygun, pratik ve lezzetli:
- 7 gün, 3 ana + 2 ara öğün (35 tarif)
- Zeytinyağlılar, balık, bulgur, mercimek, mevsim sebzeleri
- Hazır alışveriş listesi
- Kaçınılacak yiyecekler rehberi

Bilimsel araştırmalara dayalı, uygulanabilir ve tamamen ücretsiz.

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Premium üyelerimize evreye göre kişiselleştirilmiş haftalık beslenme planı, alışveriş listesi ve diyetisyen onaylı tarifler sunuyoruz. Ama bu 7 günlük plan başlamak için harika bir yer.

---

**Teknik notlar:**
- Beslenme LM indirenler Dizi 3'e eklenir
- Alternatif versiyon (beslenme LM zaten indirilmişse): Egzersiz programı highlight
- Tracking: email_1_3_open, email_1_3_click_beslenme

---

### EMAIL 1.4: Hasta Hikayesi + Topluluk Tanıtımı

**Gönderim:** Gün 9
**Gönderim saati:** 10:00 Türkiye saati

**Konu satırı A:** "15 yıl kendimi suçladım" -- Elif'in hikayesi
**Konu satırı B:** Yalnız olmadığınızı biliyor musunuz?

**Preview text:** Lipödem yolculuğunda sizi anlayan kadınlarla tanışın (52 karakter)

**Segmentasyon:**
- Gönderilecek: Hoşgeldin dizisindeki tüm aboneler
- Gönderilmeyecek: Yok (herkes alır)

---

**Gövde:**

Merhaba [Ad],

Bugün sizinle bir hikaye paylaşmak istiyoruz. Elif'in hikayesi.

---

*"15 yıl boyunca her diyeti denedim. Atkins, ketojenik, aralıklı oruç, sayamadığım kadar çok. Üst bedenim zayıflıyordu ama bacaklarım hiç değişmiyordu.*

*Doktorlar 'daha çok kilo ver' dedi. Ailem 'biraz daha az ye' dedi. Ben de kendimi suçladım -- yeterince disiplinli değilim diye.*

*Sonra bir gün internette 'lipödem' kelimesiyle karşılaştım. Belirtileri okuduğumda gözlerimden yaşlar aktı. Hem ağladım hem rahatladım. Sonunda bir adı vardı.*

*Artık kendimi suçlamıyorum. Çünkü bu benim hatam değildi."*

-- Elif, 38, İstanbul, Evre 2

---

Elif'in hikayesi binlerce kadının hikayesidir. Belki sizin de.

**Sizi anlayan bir topluluk var.**

Lipödem Türkiye topluluğunda, aynı yoldan geçen kadınlar deneyimlerini paylaşıyor, birbirini destekliyor ve yalnız olmadıklarını hissediyorlar.

**[Hasta Hikayelerini Oku]**
CTA Buton: Teal (#0D9488), beyaz metin
URL hedefi: /hasta-hikayeleri?utm_source=email&utm_medium=hosgeldin&utm_campaign=e4

**[Topluluğa Göz At]**
CTA Link (metin link): /topluluk?utm_source=email&utm_medium=hosgeldin&utm_campaign=e4

Toplulukta neler bulacaksınız:
- Tanı sürecini paylaşan kadınlar
- Tedavi deneyimleri ve öneriler
- Beslenme ve egzersiz ipuçları
- Duygusal destek ve anlayış
- Moderasyonlu, güvenli alan

Bu yolda yalnız değilsiniz. Biz de varız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Teknik notlar:**
- Hasta hikayesi dinamik olarak değiştirilebilir (A/B test)
- Tracking: email_1_4_open, email_1_4_click_hikaye, email_1_4_click_topluluk

---

### EMAIL 1.5: Premium Tanıtımı (Soft Sell)

**Gönderim:** Gün 14
**Gönderim saati:** 10:00 Türkiye saati

**Konu satırı A:** Lipödem yolculuğunuzda bir sonraki adım
**Konu satırı B:** [Ad], size özel bir program hazırladık

**Preview text:** 14 gün ücretsiz deneyin -- kredi kartı gerekmez (48 karakter)

**Segmentasyon:**
- Gönderilecek: Hoşgeldin dizisindeki tüm aboneler
- Gönderilmeyecek: Premium deneme başlatmış veya aktif premium aboneler

---

**Gövde:**

Merhaba [Ad],

Son iki haftada size lipödem hakkında temel bilgiler, beslenme ipuçları ve topluluk desteği sunduk. Umarız faydalı olmuştur.

Bugün size bir şey sormak istiyoruz:

**Bilgiyi eyleme dönüştürmek ister misiniz?**

Ücretsiz içeriklerimiz lipödemi anlamanızı sağlar. Ama her hasta farklıdır -- evreniz, semptomlarınız, beslenme ihtiyaçlarınız, egzersiz kapasiteniz farklıdır.

İşte Premium üyelik tam da bunu çözüyor:

**Size Özel Program:**
- Evrenize göre kişiselleştirilmiş beslenme planı (Türk mutfağı tarifleriyle)
- 8 haftalık video rehberli egzersiz programı
- Kişiselleştirilmiş tedavi yol haritası

**Uzman Erişimi:**
- Aylık doktor, diyetisyen ve psikolog Q&A oturumları
- Öncelikli destek (24 saat içinde yanıt)

**Topluluk:**
- Tam topluluk erişimi (yazma, paylaşma, soru sorma)
- Aynı evredeki kadınlarla özel grup
- Deneyimli hasta mentoru eşleştirme

**İlerleme Takibi:**
- Ölçü, ağrı skoru ve fotoğraf kaydı
- Trend grafikleri ve ilerleme raporu

**14 gün ücretsiz deneyin. Kredi kartı gerekmez.**

**[14 Gün Ücretsiz Deneyin]**
CTA Buton: Teal (#0D9488), beyaz metin, büyük boyut
URL hedefi: /premium/deneme?utm_source=email&utm_medium=hosgeldin&utm_campaign=e5

**Rakamlarla karşılaştırma:**
- 1 diyetisyen seansı: 500-1.000 TL
- 1 çift kompresyon çorabı: 900-3.100 TL
- Lipödem Türkiye Premium: günde 2,63 TL'den başlayan fiyatlarla

Denemek istemezseniz sorun değil. Ücretsiz içeriklerimiz ve haftalık bültenimiz her zaman burada. Ama eğer kişiselleştirilmiş bir programa hazırsanız, bu sizin için.

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Kurucu üyelik hakkımız sınırlı. İlk 200 üye, fiyat artışlarından ömür boyu korunuyor. Detaylar için [buraya tıklayın](/premium/kurucu?utm_source=email&utm_medium=hosgeldin&utm_campaign=e5_kurucu).

---

**Teknik notlar:**
- Premium deneme başlatanlar Dizi 5'e geçer
- Kurucu üyelik kontenjana göre dinamik gösterim (doluysa gizle)
- Tracking: email_1_5_open, email_1_5_click_deneme, email_1_5_click_kurucu

---

# ============================================================
# DİZİ 2: SEMPTOM TESTİ SONUÇ DİZİSİ
# 3 Email
# Tetikleyici: Semptom testi tamamlama
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | semptom_testi_sonuc |
| **Tetikleyici** | Semptom testi tamamlama |
| **Hedef** | Sonuç teslimi → evre bazlı bilgilendirme → uygun araç yönlendirme |
| **Email sayısı** | 3 |
| **Toplam süre** | 7 gün |
| **Çıkış koşulları** | Premium deneme başlatırsa → Dizi 5'e geçiş |
| **Gönderim saati** | İlk email: anında, diğerleri: 10:00 TSİ |
| **Özel segmentasyon** | risk_seviyesi bazlı dinamik içerik |

---

### EMAIL 2.1: Sonuç Özeti + PDF + Sonraki Adımlar

**Gönderim:** Hemen (test tamamlama anı)
**Gönderim saati:** Anında (tetikleyici bazlı)

**Konu satırı A:** Semptom testi sonucunuz hazır
**Konu satırı B:** [Ad], test sonuçlarınız burada

**Preview text:** Sonuçlarınızı doktorunuza gösterebilirsiniz (45 karakter)

**Segmentasyon:**
- Gönderilecek: Semptom testini tamamlayan herkes
- Gönderilmeyecek: Yok
- Dinamik içerik: risk_seviyesi değerine göre 3 farklı versiyon

---

**Gövde (DÜŞÜK RİSK versiyonu):**

Merhaba [Ad],

Semptom testi sonuçlarınız hazır.

**Sonuç: Düşük Risk**

Yanıtlarınız, lipödem belirtilerinin sizde şu anda belirgin olmadığını gösteriyor. Bu iyi bir haber.

Ancak bilmeniz gereken önemli bir şey var: Lipödem genellikle hormonal değişim dönemlerinde (ergenlik, hamilelik, menopoz) ortaya çıkar veya kötüleşir. Ailenizde benzer durumlar varsa farkındalığınızı korumak değerli olacaktır.

**[Detaylı Sonuç Raporunu İndir -- PDF]**
CTA Buton: Teal (#0D9488)
URL hedefi: /semptom-testi/sonuc/[kullanici_id]/pdf?utm_source=email&utm_medium=semptom&utm_campaign=e1

**Sonraki adımlarınız:**
1. Bu raporu kaydedin -- ileride referans olabilir
2. Lipödem hakkında temel bilgileri öğrenin: [Lipödem Nedir?](/lipodem-nedir)
3. Haftalık bültenimizle güncel kalın

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Gövde (ORTA RİSK versiyonu):**

Merhaba [Ad],

Semptom testi sonuçlarınız hazır.

**Sonuç: Orta Risk**

Yanıtlarınız, lipödem ile uyumlu bazı belirtilerin mevcut olduğunu gösteriyor. Bu bir tanı değildir -- ama bir sağlık profesyoneli ile görüşmenizi öneririz.

**[Detaylı Sonuç Raporunu İndir -- PDF]**
CTA Buton: Teal (#0D9488)
URL hedefi: /semptom-testi/sonuc/[kullanici_id]/pdf?utm_source=email&utm_medium=semptom&utm_campaign=e1

**Bu raporu doktorunuza götürün.** İşaretlediğiniz belirtiler, doktorunuzla konuşmanıza somut bir başlangıç noktası sağlayacaktır.

**Sonraki adımlarınız:**
1. Raporu yazdırın veya telefonunuza kaydedin
2. "Doktorunuza Sormanız Gereken 20 Soru" listesini inceleyin: [Listeye Git](/rehber/lipodem-hasta-rehberi#20-soru)
3. Beslenme ile başlamak isterseniz: [7 Günlük Beslenme Planı](/rehber/7-gunluk-beslenme-plani) (ücretsiz)

**Önemli hatırlatma:** Bu test tanı koymaz. Tanı koyma yetkisi sadece sağlık profesyonellerine aittir. Ama bu sonuçlar, doğru soruları sormanıza yardımcı olacaktır.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Gövde (YÜKSEK RİSK versiyonu):**

Merhaba [Ad],

Semptom testi sonuçlarınız hazır.

**Sonuç: Yüksek Risk**

Yanıtlarınız, lipödem ile yüksek düzeyde uyumlu belirtiler gösteriyor. Bu bir tanı değildir -- ama bir lipödem uzmanı ile görüşmenizi kesinlikle öneriyoruz.

**[Detaylı Sonuç Raporunu İndir -- PDF]**
CTA Buton: Teal (#0D9488)
URL hedefi: /semptom-testi/sonuc/[kullanici_id]/pdf?utm_source=email&utm_medium=semptom&utm_campaign=e1

Bilmenizi istediğimiz şey: **Bu sonucu aldıysanız endişelenmeniz değil, harekete geçmeniz önemlidir.** Lipödem yönetilebilir bir hastalıktır. Doğru bilgi ve doğru tedavi yaklaşımı ile birçok kadın semptomlarını önemli ölçüde azaltıyor.

**Sonraki adımlarınız:**
1. Bu raporu yazdırın ve doktor randevunuza götürün
2. Şehrinizde lipödem uzmanı bulun: [Klinik Bulucu](/klinik-bulucu)
3. "Doktorunuza Sormanız Gereken 20 Soru" listesini hazırlayın: [Listeye Git](/rehber/lipodem-hasta-rehberi#20-soru)
4. Tedavi seçeneklerini öğrenin: [Tedavi Yol Haritası](/tedavi)

**Bu sonuç sizi korkutmasın.** Erken farkındalık en değerli adımdır -- çünkü erken müdahale en çok seçenek sunar.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Teknik notlar:**
- risk_seviyesi alanına göre 3 versiyon otomatik seçilir
- PDF, kullanıcı yanıtlarına göre dinamik oluşturulur
- Tracking: email_2_1_open, email_2_1_click_pdf, email_2_1_click_klinik

---

### EMAIL 2.2: Test Sonucuna Göre İlgili Makale

**Gönderim:** Gün 3 (test tamamlamadan sonra)
**Gönderim saati:** 10:00 TSİ

**Konu satırı A (düşük risk):** Lipödem hakkında bilmeniz gereken 5 temel bilgi
**Konu satırı B (düşük risk):** Farkındalık ilk adımdır

**Konu satırı A (orta risk):** Orta risk sonucu aldınız -- şimdi ne yapmalı?
**Konu satırı B (orta risk):** Beslenme ile başlayabileceğiniz 3 adım

**Konu satırı A (yüksek risk):** Doktorunuza gitmeden önce bunu okuyun
**Konu satırı B (yüksek risk):** Doktor randevunuza hazırlıklı gidin

**Preview text (düşük):** Lipödem farkındalığı sizi korur (28 karakter)
**Preview text (orta):** Beslenme değişikliği ile bugün başlayabilirsiniz (49 karakter)
**Preview text (yüksek):** Randevunuzu en verimli şekilde değerlendirin (47 karakter)

**Segmentasyon:**
- Gönderilecek: Dizi 2'deki tüm aboneler
- Dinamik içerik: risk_seviyesi bazlı

---

**Gövde (DÜŞÜK RİSK):**

Merhaba [Ad],

Semptom testinizden düşük risk sonucu aldınız. Bu iyi bir haber. Ama lipödem hakkında temel bilgileri bilmeniz, sizi ve sevdiklerinizi koruyabilir.

**Lipödem hakkında herkesin bilmesi gereken 5 bilgi:**

**1.** Kadınların %6-11'ini etkiler -- düşündüğünüzden çok daha yaygındır.

**2.** Genetik temelli bir hastalıktır. Ailenizde orantısız yağ birikimi olan kadınlar varsa, siz de risk altında olabilirsiniz.

**3.** Hormonal değişim dönemlerinde tetiklenir: ergenlik, hamilelik, menopoz.

**4.** Obezite ile sık karıştırılır ama lipödem yağı diyete dirençlidir.

**5.** Erken tanı hayat kurtarır. Evre 1'de başlanan tedavi, hastalığın ilerlemesini yavaşlatabilir.

**[Lipödem Nedir? Kapsamlı Rehber]**
CTA Buton: Teal (#0D9488)
URL hedefi: /lipodem-nedir?utm_source=email&utm_medium=semptom&utm_campaign=e2_dusuk

Bu bilgileri ailenizle ve arkadaşlarınızla paylaşmak fark yaratabilir.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Gövde (ORTA RİSK):**

Merhaba [Ad],

Semptom testinden orta risk sonucu aldınız. Bu, bazı lipödem belirtilerinin mevcut olduğunu gösteriyor. Doktor randevunuzu planlarken, beslenme ile bugün başlayabileceğiniz adımlar var.

**Anti-inflamatuar beslenme ile başlayın:**

2025 yılında yayınlanan bir araştırma, Akdeniz tarzı ketojenik diyetin lipödem hastalarında 7 ayda şu sonuçları gösterdiğini ortaya koydu:
- Ortalama 12 kg kilo kaybı
- Uyluk çevresinde 6 cm azalma
- İltihaplanma belirteçlerinde anlamlı düşüş

**Bugün yapabileceğiniz 3 değişiklik:**

1. Şekerli içecekleri kesin -- yerine yeşil çay, adaçayı çayı, bol su
2. Öğünlerinize zeytinyağı, ceviz, balık ekleyin -- Omega-3 kaynakları
3. Beyaz ekmek/makarna yerine bulgur, tam tahıl tercih edin

Daha detaylı bir plan isterseniz:

**[7 Günlük Beslenme Planını İndir -- Ücretsiz]**
CTA Buton: Teal (#0D9488)
URL hedefi: /rehber/7-gunluk-beslenme-plani?utm_source=email&utm_medium=semptom&utm_campaign=e2_orta

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Gövde (YÜKSEK RİSK):**

Merhaba [Ad],

Semptom testinden yüksek risk sonucu aldınız. Doktor randevunuza hazırlıklı gitmeniz, sürecinizi hızlandıracaktır.

**Randevunuzdan önce yapmanız gerekenler:**

**1. Semptom testi PDF raporunuzu yazdırın**
Bunu zaten indirmiş olabilirsiniz. İndirmediyseniz: [Raporu İndir](/semptom-testi/sonuc/[kullanici_id]/pdf)

**2. "Doktorunuza 20 Soru" listesini hazırlayın**
Bu sorular, doktorunuzla verimli bir görüşme yapmanızı sağlar: [20 Soru Listesi](/rehber/lipodem-hasta-rehberi#20-soru)

**3. Doğru uzmanı seçin**
Lipödemi bilen bir doktor bulmak kritiktir. Klinik Bulucu aracımızla şehrinizdeki uzmanları bulabilirsiniz:

**[Şehrimdeki Uzmanları Bul]**
CTA Buton: Teal (#0D9488)
URL hedefi: /klinik-bulucu?utm_source=email&utm_medium=semptom&utm_campaign=e2_yuksek

**4. Belirtilerinizi kaydedin**
Randevudan önce şunları not edin:
- Belirtileriniz ne zaman başladı?
- Hormonal değişim dönemleriyle ilişki var mı?
- Ailede benzer durum var mı?
- Hangi diyetleri denediniz ve sonuçları ne oldu?

**Önemli:** "Lipödem olabilir miyim?" sorusunu sormaktan çekinmeyin. Doktorunuz bu konuda bilgi sahibi değilse, semptom testi raporunuzdaki tanı kriterlerini gösterebilirsiniz.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 2.3: Uygun Araç Yönlendirme

**Gönderim:** Gün 7 (test tamamlamadan sonra)
**Gönderim saati:** 10:00 TSİ

**Konu satırı A (yüksek risk):** Şehrinizde lipödem uzmanı var mı?
**Konu satırı B (yüksek risk):** Randevu aldınız mı? Size yardımcı olabiliriz

**Konu satırı A (orta risk):** Beslenme programınıza başladınız mı?
**Konu satırı B (orta risk):** Kişiselleştirilmiş program sizin için

**Konu satırı A (düşük risk):** Lipödem hakkında sorularınız mı var?
**Konu satırı B (düşük risk):** Bu araçlar işinize yarayabilir

**Preview text (yüksek):** Klinik bulucu ve tedavi yol haritası hazır (44 karakter)
**Preview text (orta):** Evrenize özel beslenme ve egzersiz programı (45 karakter)
**Preview text (düşük):** Araçlarımız her zaman ücretsiz ve burada (42 karakter)

**Segmentasyon:**
- Gönderilecek: Dizi 2'deki tüm aboneler
- Dinamik içerik: risk_seviyesi bazlı

---

**Gövde (YÜKSEK RİSK):**

Merhaba [Ad],

Semptom testi sonuçlarınızı aldığınızdan beri 1 hafta oldu. Doktor randevusu planladınız mı?

Eğer henüz planlamadıysanız, Klinik Bulucu aracımız size yardımcı olabilir:

**[Klinik Bulucu'yu Aç]**
CTA Buton: Teal (#0D9488)
URL hedefi: /klinik-bulucu?utm_source=email&utm_medium=semptom&utm_campaign=e3_yuksek

Bu araçla:
- Şehrinizdeki lipödem uzmanlarını bulabilirsiniz
- Tedavi yöntemlerini karşılaştırabilirsiniz
- Fiyat aralıklarını görebilirsiniz

**Tedavi sürecinizi daha iyi planlamak isterseniz:**

Premium üyelik ile evrenize özel kişiselleştirilmiş tedavi yol haritası, beslenme planı ve egzersiz programı sunuyoruz.

[14 gün ücretsiz deneyin](/premium/deneme?utm_source=email&utm_medium=semptom&utm_campaign=e3_yuksek) -- kredi kartı gerekmez.

Herhangi bir sorunuz varsa bu emaile yanıt verin. Yardımcı olmak isteriz.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Gövde (ORTA RİSK):**

Merhaba [Ad],

Semptom testi sonuçlarınızı aldığınızdan beri 1 hafta oldu. Beslenme önerilerimizi denemeye başladınız mı?

Eğer genel bir beslenme planından daha fazlasını istiyorsanız, size özel bir program oluşturabiliriz:

**Premium Beslenme Programı:**
- Evrenize göre kişiselleştirilmiş haftalık menü
- Türk mutfağı tarifleri + alışveriş listesi
- Kaçınılacak gıdalar ve alternatifleri
- Diyetisyen onaylı takviye rehberi

**[14 Gün Ücretsiz Deneyin]**
CTA Buton: Teal (#0D9488)
URL hedefi: /premium/deneme?utm_source=email&utm_medium=semptom&utm_campaign=e3_orta

Deneme süresi boyunca Tam Premium'un tüm özelliklerine erişebilirsiniz. Kredi kartı gerekmez.

Ücretsiz içeriklerimiz de her zaman burada:
- [Beslenme Rehberi](/beslenme)
- [Egzersiz Rehberi](/egzersiz)
- [Hasta Hikayeleri](/hasta-hikayeleri)

Yanınızdayız,
Lipödem Türkiye Ekibi

---

**Gövde (DÜŞÜK RİSK):**

Merhaba [Ad],

Lipödem hakkında sorularınız mı var? Ücretsiz araçlarımız her zaman burada:

- **Lipödem Nedir?** -- Kapsamlı rehber: [Oku](/lipodem-nedir)
- **Semptom Testi** -- İstediğiniz zaman tekrar yapabilirsiniz: [Teste Git](/semptom-testi)
- **Haftalık Bülten** -- Her Salı bilimsel bilgi ve ipuçları

Bu bilgileri bir yakınınızla paylaşmak isterseniz, emaili iletmeniz yeterli. Lipödem farkındalığı hayat değiştirir.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

# ============================================================
# DİZİ 3: BESLENME BİLGİ DİZİSİ
# 7 Email, 7 Hafta
# Tetikleyici: Beslenme lead magnet indirme
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | beslenme_bilgi |
| **Tetikleyici** | Beslenme lead magnet (7 Günlük Plan veya Beslenme Rehberi) indirme |
| **Hedef** | Haftalık değer → beslenme alışkanlığı oluşturma → premium menü dönüşümü |
| **Email sayısı** | 7 |
| **Toplam süre** | 7 hafta (haftada 1) |
| **Gönderim günü** | Perşembe (bülten Salı olduğu için çakışma yok) |
| **Gönderim saati** | 09:00 TSİ |
| **Çıkış koşulları** | Premium abone olursa → dizi durur |

---

### EMAIL 3.1: Hafta 1 -- Zerdeçallı Mercimek Çorbası + Anti-İnflamatuar Giriş

**Gönderim:** Hafta 1, Perşembe
**Gönderim saati:** 09:00 TSİ

**Konu satırı A:** Bu hafta deneyin: zerdeçallı mercimek çorbası
**Konu satırı B:** Anti-inflamatuar mutfağınıza hoş geldiniz

**Preview text:** 20 dakikada hazır, lipödeme iyi gelen tarif (42 karakter)

**Segmentasyon:**
- Gönderilecek: Beslenme LM indirenler
- Gönderilmeyecek: Premium aboneler (onlar kişiselleştirilmiş plan alıyor)

---

**Gövde:**

Merhaba [Ad],

Beslenme planımızı indirdiğiniz için teşekkür ederiz. Bu haftadan itibaren size her hafta bir anti-inflamatuar tarif, bir beslenme ipucu ve premium menü programımızdan bir önizleme paylaşacağız.

**Bu haftanın tarifi: Zerdeçallı Kırmızı Mercimek Çorbası**

Zerdeçal, lipödem araştırmalarında en çok öne çıkan baharatlardan biridir. Aktif bileşeni kurkumin, güçlü anti-inflamatuar özelliklere sahiptir.

**Malzemeler (4 porsiyon):**
- 1,5 su bardağı kırmızı mercimek
- 1 orta soğan (doğranmış)
- 2 diş sarımsak
- 1 havuç (rendelenmiş)
- 1 tatlı kaşığı zerdeçal
- 1/2 tatlı kaşığı karabiber (kurkumin emilimini 20x artırır)
- 2 yemek kaşığı sızma zeytinyağı
- Tuz, 1 limon suyu
- 5 su bardağı su

**Yapılışı:**
1. Zeytinyağında soğan ve sarımsağı kavurun (3 dk)
2. Havuç, zerdeçal ve karabiberi ekleyip karıştırın (1 dk)
3. Mercimek ve suyu ekleyin, kaynayınca kısık ateşe alın (20 dk)
4. Blender'dan geçirin, limon sıkın, servis edin

**Bu haftanın ipucu:**

Zerdeçalı yağ ile birlikte tüketin (zeytinyağı, hindistancevizi yağı). Yağ, kurkuminin vücut tarafından emilimini önemli ölçüde artırır. Karabiber de eklemeyi unutmayın -- emilimi 20 kat artırır.

---

**Premium Menü Önizlemesi:**

*Bu hafta premium üyelerin menüsünde:*
- *Pazartesi: Somon + brokoli + bulgur pilavı*
- *Salı: Zeytinyağlı enginar + tam buğday ekmek*
- *Çarşamba: Zerdeçallı tavuk + karnabahar püresi*
- *... ve 4 gün daha, ara öğünler dahil*

*Evrenize göre kişiselleştirilmiş, alışveriş listesi hazır.*

[Premium menü programını deneyin -- 14 gün ücretsiz](/premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h1)

---

Haftaya yeni bir tarif ve ipucu ile burada olacağız.

Afiyet olsun,
Lipödem Türkiye Ekibi

---

### EMAIL 3.2: Hafta 2 -- Somon Izgara + Omega-3 Bilgisi

**Gönderim:** Hafta 2, Perşembe
**Gönderim saati:** 09:00 TSİ

**Konu satırı A:** Omega-3 lipödeme nasıl yardımcı olur?
**Konu satırı B:** Bu hafta: balık tarifimiz ve Omega-3 gerçekleri

**Preview text:** Somon ızgara tarifi + anti-inflamatuar gücü (43 karakter)

---

**Gövde:**

Merhaba [Ad],

Bu haftanın konusu: **Omega-3 yağ asitleri ve lipödem.**

Omega-3'ler vücuttaki inflamasyonu azaltan en güçlü besinlerden biridir. Lipödem dokusundaki kronik inflamasyon düşünüldüğünde, Omega-3 zengin beslenme özellikle önemlidir.

**Bu haftanın tarifi: Fırında Somon + Limonlu Kuşkonmaz**

**Malzemeler (2 porsiyon):**
- 2 somon fileto
- 1 demet kuşkonmaz
- 2 yemek kaşığı sızma zeytinyağı
- 1 limonun suyu ve kabuğu rendesi
- 2 diş sarımsak (ezilmiş)
- Tuz, karabiber, kekik

**Yapılışı:**
1. Fırını 200°C'ye ısıtın
2. Kuşkonmazları tepsiye dizin, zeytinyağı gezdirin
3. Somonları üstüne yerleştirin
4. Sarımsak, limon suyu, limon rendesi, tuz, karabiber serpin
5. 18-20 dakika pişirin

**Omega-3 bilgisi:**

| Besin | Omega-3 (100g başına) |
|-------|-----------------------|
| Somon | 2.260 mg |
| Uskumru | 2.670 mg |
| Hamsi | 1.478 mg |
| Sardalya | 1.480 mg |
| Ceviz | 2.570 mg |
| Keten tohumu | 22.800 mg |

**İpucu:** Haftada en az 2-3 porsiyon yağlı balık tüketmeyi hedefleyin. Balığa erişiminiz kısıtlıysa, ceviz ve keten tohumu iyi alternatiflerdir. Omega-3 takviyesi de düşünülebilir (doktorunuza danışın).

---

*Premium menü önizlemesi: Bu hafta zeytinyağlı barbunya, avokadolu kinoa salatası, fırında uskumru ve daha fazlası...*
[Tam menüyü görün](/premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h2)

---

### EMAIL 3.3: Hafta 3 -- Zeytinyağlı Enginar + Akdeniz Diyeti

**Gönderim:** Hafta 3, Perşembe
**Konu satırı A:** Akdeniz diyeti lipödem için neden bu kadar etkili?
**Konu satırı B:** Zeytinyağlı enginar: lipödeme dost bir klasik

**Preview text:** Bilimsel kanıtlarla Akdeniz diyetinin gücü (44 karakter)

---

**Gövde:**

Merhaba [Ad],

Türk mutfağı aslında anti-inflamatuar beslenmenin kalbidir. Zeytinyağlılar, baklagiller, taze sebzeler, balık -- Akdeniz diyetinin temel taşları zaten sofranızda.

**Bu haftanın tarifi: Zeytinyağlı Enginar**

**Malzemeler (4 porsiyon):**
- 4 enginar (temizlenmiş)
- 2 havuç (doğranmış)
- 1 soğan (doğranmış)
- 1 patates (küp doğranmış)
- 1/2 demet dereotu
- 4 yemek kaşığı sızma zeytinyağı
- 1 limonun suyu
- Tuz

**Yapılışı:**
1. Enginarları limonlu suda bekletin
2. Soğanı zeytinyağında kavurun
3. Havuç, patates ekleyin, 2-3 dk karıştırın
4. Enginarları ve su eklein, kısık ateşte 30-35 dk pişirin
5. Dereotu ve limon suyu ekleyin, soğuk servis edin

**Bilimsel bakış: Akdeniz Diyeti ve Lipödem**

2024 Alman S2k Kılavuzu, Akdeniz diyetini lipödem hastaları için "güçlü uzlaşma" ile önermektedir. Nedeni:

- **Zeytinyağı:** Oleocanthal bileşeni, ibuprofen benzeri anti-inflamatuar etki gösterir
- **Sebze çeşitliliği:** Farklı antioksidanlar sinerjik etki yaratır
- **Baklagiller:** Yüksek lif, yavaş kan şekeri yükselişi, bağırsak sağlığı
- **Balık:** Omega-3 deposu

**İpucu:** Zeytinyağını pişirmede değil, soğuk kullanımda tercih edin (salata, çorbanın üstüne). Pişirme için avokado yağı veya hindistancevizi yağı kullanabilirsiniz.

---

*Bu hafta premium üyelerin menüsünde: Patlıcanlı musakka (zeytinyağlı), balık buğulama, cevizli roka salatası...*
[Menüyü keşfedin](/premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h3)

---

### EMAIL 3.4: Hafta 4 -- Chia Puding + Bağırsak Sağlığı

**Gönderim:** Hafta 4, Perşembe
**Konu satırı A:** Bağırsak sağlığı ve lipödem: şaşırtıcı bağlantı
**Konu satırı B:** Bu kahvaltı tarifi inflamasyonu azaltıyor

**Preview text:** Chia puding tarifi + bağırsak-inflamasyon ilişkisi (51 karakter)

---

**Gövde:**

Merhaba [Ad],

Bugün sizi şaşırtabilecek bir konudan bahsedeceğiz: bağırsak sağlığı ve lipödem arasındaki bağlantı.

**Bağırsak mikrobiyotası neden önemli?**

Bağırsak mikrobiyotası, vücuttaki inflamasyonun ana düzenleyicilerinden biridir. Bozulmuş bağırsak florası (disbiyoz):
- "Sızdıran bağırsak" sendromuna yol açabilir
- Sistemik inflamasyonu artırır
- TNF-alfa ve IL-6 düzeylerini yükseltir -- bunlar lipödem dokusunda zaten yüksek olan inflamatuar belirteçlerdir

**Bu haftanın tarifi: Meyveli Chia Puding**

**Malzemeler (2 porsiyon):**
- 4 yemek kaşığı chia tohumu
- 1 su bardağı badem sütü (şekersiz)
- 1 tatlı kaşığı bal veya hurma pekmezi
- 1/2 su bardağı yaban mersini (veya mevsim meyvesi)
- 1 yemek kaşığı ceviz (kırılmış)

**Yapılışı:**
1. Chia tohumu ve badem sütünü karıştırın
2. Bal ekleyin, iyice karıştırın
3. Buzdolabında en az 4 saat (ideal: gece boyu) bekletin
4. Meyve ve ceviz ile servis edin

**Bağırsak dostu besinler:**
- Probiyotik: Kefir, yoğurt, turşu (doğal fermente)
- Prebiyotik: Sarımsak, soğan, pırasa, enginar, muz
- Lif: Baklagiller, tam tahıllar, sebzeler, chia, keten tohumu

**İpucu:** Her gün 1 porsiyon probiyotik gıda (1 kase yoğurt veya 1 bardak kefir) ve bol lifli beslenme, bağırsak floranızı destekler.

---

*Premium üyeler bu hafta: Kefirli smoothie tarifleri, prebiyotik zengin yemek planı ve bağırsak sağlığı takviye rehberi alıyor.*
[14 gün ücretsiz deneyin](/premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h4)

---

### EMAIL 3.5: Hafta 5 -- Cevizli Ispanak Salatası + Takviye Rehberi

**Gönderim:** Hafta 5, Perşembe
**Konu satırı A:** Lipödem için 5 destekleyici takviye (bilimsel kanıt)
**Konu satırı B:** Ispanak salatası + doktorunuza sormanız gereken takviyeler

**Preview text:** Diosmin, Omega-3, D vitamini ve daha fazlası (43 karakter)

---

**Gövde:**

Merhaba [Ad],

Bu hafta hem lezzetli bir tarif hem de lipödem için araştırılan takviyeleri paylaşıyoruz.

**Bu haftanın tarifi: Cevizli Ispanak Salatası + Nar Ekşili Sos**

**Malzemeler (2 porsiyon):**
- 2 tutam bebek ıspanak
- 1/4 su bardağı ceviz
- 1/4 nar taneleri
- 50g beyaz peynir (ufalanmış)
- Sos: 2 yk zeytinyağı, 1 yk nar ekşisi, 1 tk bal, tuz

Tüm malzemeleri karıştırın, sosu gezdirin.

**Lipödem için araştırılan takviyeler:**

| Takviye | Ne yapar | Kanıt düzeyi |
|---------|----------|--------------|
| **Diosmin** | Bacak ağrısı, ağırlık, ödem azaltır | Orta |
| **Omega-3** | Sistemik inflamasyonu azaltır | Umut verici |
| **D Vitamini** | Eksiklik giderilmeli (lipödemde yaygın) | Bazı kanıtlar |
| **Selenyum** | Metabolizma desteği, ağrılı şişlik azaltma | Sınırlı |
| **C Vitamini** | Antioksidan, bağ doku desteği | Bazı kanıtlar |

**Kritik uyarı:** Takviye kullanmadan önce mutlaka doktorunuza danışın. Takviyeler tedavinin yerini tutmaz -- destekleyici rol oynar.

**İpucu:** Besinlerden alınan vitaminler ve mineraller, takviyelerden daha iyi emilir. Önce beslenmenizi düzenleyin, sonra eksiklikleri takviye ile tamamlayın.

---

*Premium menü bu hafta: D vitamini zengin menü planı, takviye takvimi ve diyetisyen onaylı marka önerileri...*
[Keşfedin](/premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h5)

---

### EMAIL 3.6: Hafta 6 -- Kabak Mücver + Hidrasyon

**Gönderim:** Hafta 6, Perşembe
**Konu satırı A:** Günde kaç litre su içmelisiniz? (Cevap şaşırtabilir)
**Konu satırı B:** Fırında kabak mücver + hidrasyon rehberi

**Preview text:** Su tüketimi lenf akışını doğrudan etkiler (42 karakter)

---

**Gövde:**

Merhaba [Ad],

Bu hafta basit ama çok etkili bir konu: hidrasyon.

**Neden lipödem için kritik?**

Yeterli su tüketimi:
- Lenf sıvısı akışını destekler
- Toksin atılımını hızlandırır
- Şişlik hissini azaltabilir
- Cildin elastikiyetini korur

**Günlük hedef:** 2-2,5 litre (su + bitki çayları)

**Bu haftanın tarifi: Fırında Kabak Mücver (Yağsız)**

**Malzemeler (12 adet):**
- 2 orta kabak (rendelenmiş, suyu sıkılmış)
- 2 yumurta
- 3 yk tam buğday unu (veya yulaf unu)
- 1/2 demet dereotu + maydanoz
- 50g beyaz peynir (ufalanmış)
- Tuz, karabiber

**Yapılışı:**
1. Fırını 200°C'ye ısıtın
2. Tüm malzemeleri karıştırın
3. Kaşıkla yağlı kağıt üzerine dizin
4. 25-30 dakika pişirin (alt üst çevirmeden)

**Hidrasyon ipuçları:**
- Sabah kalktığınızda 1 bardak ılık su + limon
- Yanınızda her zaman su şişesi taşıyın
- Şekersiz bitki çayları sayılır: adaçayı, yeşil çay, papatya
- Suyu bol besinler: salatalık, karpuz, portakal, domates
- Doğal diüretik: maydanoz çayı (şişlik azaltmaya yardımcı)

---

*Premium üyeler: Kişiselleştirilmiş hidrasyon planı + gün içi hatırlatıcı + suyu bol 10 atıştırmalık tarifi alıyor.*
[Deneyin](/premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h6)

---

### EMAIL 3.7: Hafta 7 -- Fırında Balık + Premium Menü Tanıtım (Son Email)

**Gönderim:** Hafta 7, Perşembe
**Konu satırı A:** 7 haftalık beslenme yolculuğunuzda son durak
**Konu satırı B:** Beslenme alışkanlıklarınız nasıl değişti?

**Preview text:** Son tarifimiz + kişiselleştirilmiş programa geçiş (50 karakter)

---

**Gövde:**

Merhaba [Ad],

7 hafta boyunca her hafta bir anti-inflamatuar tarif ve beslenme ipucu paylaştık. Bu hafta son tarifimiz:

**Bu haftanın tarifi: Sebzeli Fırın Balığı**

**Malzemeler (2 porsiyon):**
- 2 levrek veya çipura (temizlenmiş)
- 1 domates, 1 biber, 1 soğan (dilimlenmiş)
- 4-5 zeytin
- 2 yk sızma zeytinyağı
- Kekik, defne yaprağı, tuz, karabiber
- 1/2 limon dilimi

Tüm sebzeleri tepsiye dizin, balığı üstüne yerleştirin, zeytinyağı gezdirin. 200°C'de 25-30 dk pişirin.

---

**7 haftada neler öğrendik?**

1. **Zerdeçal** -- Anti-inflamatuar güç (karabiberle birlikte)
2. **Omega-3** -- Balık, ceviz, keten tohumu
3. **Akdeniz diyeti** -- Zeytinyağı, sebze, baklagil
4. **Bağırsak sağlığı** -- Probiyotik ve prebiyotik
5. **Takviyeler** -- Diosmin, D vitamini, Omega-3
6. **Hidrasyon** -- 2-2,5 litre, bitki çayları
7. **Balık** -- Haftada 2-3 porsiyon yağlı balık

Bu bilgiler genel başlangıç rehberidir. Ama lipödem evrenize, alerjilerinize, tercihlerinize ve yaşam tarzınıza göre kişiselleştirilmiş bir plan çok daha etkili olacaktır.

**Bir sonraki adıma hazır mısınız?**

Premium beslenme programımız ile:
- Evrenize göre haftalık kişiselleştirilmiş menü
- Alışveriş listesi (haftalık otomatik güncelleme)
- Türk mutfağı tarifleri (takas önerileriyle)
- Diyetisyen onaylı takviye rehberi
- İlerleme takibi (ağırlık, ölçü, enerji)

**[Kişiselleştirilmiş Programımı Başlat -- 14 Gün Ücretsiz]**
CTA Buton: Teal (#0D9488), büyük boyut
URL hedefi: /premium/deneme?utm_source=email&utm_medium=beslenme&utm_campaign=h7

Günde 2,63 TL'den başlayan fiyatlarla -- bir simit parasından az.

Beslenme yolculuğunuzda yanınızda olmak güzeldi. Premium programla devam etmeseniz bile, haftalık bültenimizde beslenme ipuçları paylaşmaya devam edeceğiz.

Sağlıklı kalın,
Lipödem Türkiye Ekibi

---

# ============================================================
# DİZİ 4: TEDAVİ BİLGİ DİZİSİ
# 4 Email, 4 Hafta
# Tetikleyici: Tedavi sayfalarını 3+ kez ziyaret etme
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | tedavi_bilgi |
| **Tetikleyici** | Tedavi sayfalarını (/tedavi, /ameliyat, /kompresyon, /cerrahi) 3+ kez ziyaret etme (7 gün içinde) |
| **Hedef** | Tedavi bilgisi → doğru karar verme → klinik bulucu + premium yönlendirme |
| **Email sayısı** | 4 |
| **Toplam süre** | 4 hafta |
| **Gönderim günü** | Çarşamba |
| **Gönderim saati** | 10:00 TSİ |
| **Çıkış koşulları** | Premium abone olursa veya klinik formu gönderirse |

---

### EMAIL 4.1: Konservatif Tedavi Özeti

**Gönderim:** Hafta 1, Çarşamba (tetiklenmeden sonraki ilk Çarşamba)
**Gönderim saati:** 10:00 TSİ

**Konu satırı A:** Lipödem tedavisi: ameliyatsız seçenekler
**Konu satırı B:** Konservatif tedavi ile neler mümkün?

**Preview text:** Kompresyon, MLD, beslenme, egzersiz -- kapsamlı rehber (52 karakter)

**Segmentasyon:**
- Gönderilecek: Tedavi sayfalarını 3+ kez ziyaret eden aboneler
- Gönderilmeyecek: Premium aboneler

---

**Gövde:**

Merhaba [Ad],

Lipödem tedavi seçeneklerini araştırdığınızı fark ettik. Tedavi kararı vermek kolay değil -- biz de bu süreçte yanınızda olmak istiyoruz.

**Ameliyatsız (konservatif) tedavi seçenekleri:**

Konservatif tedavi, lipödem yönetiminin ilk adımıdır. 2024 Alman S2k Kılavuzu, cerrahinin ancak konservatif tedavi yetersiz kaldığında değerlendirilmesini önerir.

**1. Kompresyon Tedavisi**
- Basınç uygulayan özel giysiler (çorap, tayt, kol kılıfı)
- Düz örgü (flat-knit) giysiler, Evre 2-3 için önerilir
- Egzersiz sırasında mutlaka giyilmeli
- Maliyet: 1.500-6.000 TL/çift, 6 ayda bir yenileme

**2. Manuel Lenfatik Drenaj (MLD)**
- Hafif, ritmik hareketlerle lenf sıvısını yönlendiren masaj tekniği
- Şişliği azaltır, rahatsızlığı giderir
- Seanslar: Haftada 1-2, genellikle 10'lu kürler halinde
- Maliyet: 500-1.500 TL/seans

**3. Kompleks Dekongestif Terapi (CDT)**
- MLD + kompresyon bandajlama + cilt bakımı + egzersiz
- Uzuv çevresinde %10'a kadar azalma sağlayabilir

**4. Anti-İnflamatuar Beslenme**
- Akdeniz tarzı ketojenik diyet: 7 ayda -12 kg, -6 cm uyluk (2025 çalışması)
- Kronik inflamasyonu azaltır, semptomları hafifletir

**5. Egzersiz**
- Su terapisi (yüzme, su aerobiği) -- en çok önerilen
- Düşük etkili aerobik + güçlendirme
- Kompresyon giysi ile birlikte

**[Tedavi Seçenekleri Karşılaştırması -- Detaylı Rehber]**
CTA Buton: Teal (#0D9488)
URL hedefi: /tedavi?utm_source=email&utm_medium=tedavi&utm_campaign=e1

**Önemli:** Konservatif tedavi lipödemi "iyileştirmez" ama semptomları önemli ölçüde azaltabilir ve hastalığın ilerlemesini yavaşlatabilir. Birçok hasta, konservatif tedavi ile yaşam kalitesinde belirgin iyileşme bildirmektedir.

Haftaya cerrahi seçenekleri karşılaştıracağız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 4.2: Cerrahi Tedavi Karşılaştırma

**Gönderim:** Hafta 2, Çarşamba
**Gönderim saati:** 10:00 TSİ

**Konu satırı A:** Lipödem ameliyatı: 5 teknik karşılaştırması
**Konu satırı B:** Cerrahi tedavi ne zaman düşünülmeli?

**Preview text:** Tümesent, VASER, WAL, PAL, lazer -- hangisi size uygun? (53 karakter)

---

**Gövde:**

Merhaba [Ad],

Geçen hafta konservatif tedaviyi anlattık. Bu hafta cerrahi seçenekleri karşılaştırıyoruz.

**Cerrahi ne zaman düşünülmeli?**

2024 Alman S2k Kılavuzu ve 2025 Delphi Konsensüsü'ne göre:
- Konservatif tedavi yetersiz kaldığında
- Semptom iyileşme potansiyeli olduğunda (uzmanların %89,5'i uzlaştı)
- Obezite varsa, önce obeziteyi ele almak önerilir (%93,3 uzlaşma)

**Liposuction teknikleri karşılaştırması:**

| Teknik | Öne çıkan özellik | En uygun profil |
|--------|-------------------|-----------------|
| **Tümesent** | Altın standart, lenf damarlarını korur | Genel kullanım |
| **WAL** (Su destekli) | Gerginlik ve şişlik azaltmada üstün | Geniş alan tedavisi |
| **PAL** (Güç destekli) | En yaygın, doku travması minimum | Genel kullanım |
| **Lazer destekli** | Cilt sıkılaştırma etkisi | Genç/normal kilolu |
| **VASER** (Ultrason) | Seçici yağ eritme, doku koruma | Hassas bölgeler |

**Cerrahi sonuçlar (2024 sistematik derleme, 906 hasta):**
- Ağrı, morarma ve gerginlikte azalma
- Yaşam kalitesinde iyileşme (özellikle Evre 3)
- Sekonder lenfödem riski: sadece %0,18
- Genellikle birden fazla seans gerekir

**Önemli noktalar:**
- Ameliyat "şifa" değildir -- lipödem kronik bir hastalıktır
- Ameliyat sonrası da konservatif tedavi (kompresyon, beslenme, egzersiz) devam eder
- Cerrahın lipödem deneyimi kritiktir -- genel liposuction ile lipödem liposuction'ı farklıdır
- Fiyat tek başına karar kriteri olmamalıdır

**[Ameliyat Tekniklerini Detaylı Karşılaştır]**
CTA Buton: Teal (#0D9488)
URL hedefi: /tedavi/ameliyat?utm_source=email&utm_medium=tedavi&utm_campaign=e2

Haftaya Türkiye'deki tedavi maliyetlerini ve SGK bilgisini paylaşacağız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 4.3: Türkiye'de Tedavi Maliyetleri + SGK Bilgisi

**Gönderim:** Hafta 3, Çarşamba
**Gönderim saati:** 10:00 TSİ

**Konu satırı A:** Lipödem tedavisi ne kadar? SGK karşılıyor mu?
**Konu satırı B:** Türkiye'de tedavi maliyetleri ve haklarınız

**Preview text:** Güncel fiyatlar, taksit seçenekleri ve SGK başvuru ipuçları (55 karakter)

---

**Gövde:**

Merhaba [Ad],

Tedavi maliyetleri, lipödem yolculuğunun en stresli konularından biridir. Sizi net ve dürüst bilgiyle donatmak istiyoruz.

**Türkiye'de tedavi maliyetleri (2026):**

| Tedavi | Tahmini maliyet |
|--------|----------------|
| Liposuction (prosedür başına) | 55.000 - 250.000 TL |
| Kompresyon giysi (çift) | 1.500 - 6.000 TL |
| MLD seansı (tek) | 500 - 1.500 TL |
| MLD kürü (10 seans) | 5.000 - 15.000 TL |
| Fizik tedavi paketi | 3.000 - 10.000 TL |
| Diyetisyen danışmanlığı | 500 - 2.000 TL/seans |

**Not:** Cerrahi tedavide genellikle 2-4 seans gerekir. Toplam maliyet tek prosedürün çok üzerinde olabilir.

**SGK kapsamı:**

SGK şu anda lipödem tedavisini spesifik olarak kapsamamaktadır. Liposuction "kozmetik" olarak sınıflandırılmaktadır.

**Ancak kısmi kapsam mümkün olabilir:**
1. Belgelenmiş ciddi fonksiyonel bozulma
2. Başarısız konservatif tedavi geçmişi
3. Psikolojik komorbidite (resmi tanı ile)
4. Yeterli tıbbi belgeleme

**SGK başvurusu için 6 ipucu:**
1. Tüm tedavi sürecinizi belgeleyin
2. Fonksiyonel bozulmayı belgeleyin (yürüme güçlüğü, iş gücü kaybı)
3. Psikolog/psikiyatrist raporu alın
4. Konservatif tedavi geçmişini gösterin
5. "Kozmetik" yerine "tıbbi gereklilik" raporu isteyin
6. Ret durumunda itiraz edin (yaygın, hakkınız var)

**[SGK Hak Rehberimizi Okuyun]**
CTA Buton: Teal (#0D9488)
URL hedefi: /turkiye-rehberi/sgk?utm_source=email&utm_medium=tedavi&utm_campaign=e3

**[Maliyet Hesaplayıcıyı Deneyin]**
CTA Link: /maliyet-hesaplayici?utm_source=email&utm_medium=tedavi&utm_campaign=e3

Haftaya klinik bulucu ve premium tedavi yol haritasını tanıtacağız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 4.4: Klinik Bulucu + Premium Tedavi Yol Haritası

**Gönderim:** Hafta 4, Çarşamba
**Gönderim saati:** 10:00 TSİ

**Konu satırı A:** Şehrinizde lipödem uzmanı bulun
**Konu satırı B:** Tedavi yolculuğunuzda bir sonraki adım

**Preview text:** Klinik bulucu + kişiselleştirilmiş tedavi yol haritası (52 karakter)

---

**Gövde:**

Merhaba [Ad],

Son 4 haftada tedavi seçeneklerini, maliyetleri ve haklarınızı paylaştık. Şimdi en önemli adım: doğru uzmanı bulmak.

**Klinik Bulucu Aracımız**

Türkiye genelinde lipödem konusunda deneyimli doktor ve klinikleri listeleyen, filtrelenebilir rehberimiz:

- Şehir bazlı arama
- Tedavi türüne göre filtreleme (konservatif / cerrahi)
- Fiyat aralıkları
- Uzmanlık alanları
- Hasta yorumları (premium)

**[Klinik Bulucu'yu Aç]**
CTA Buton: Teal (#0D9488), büyük boyut
URL hedefi: /klinik-bulucu?utm_source=email&utm_medium=tedavi&utm_campaign=e4

**Doktor seçerken kontrol listesi:**
- [ ] Kaç lipödem hastası tedavi etmiş?
- [ ] Hangi teknikleri kullanıyor?
- [ ] Konservatif tedavi de sunuyor mu?
- [ ] Öncesi/sonrası fotoğraflar gösterebilir mi?
- [ ] Toplam maliyet ve seans sayısı net mi?
- [ ] Hasta referansları var mı?

---

**Kişiselleştirilmiş tedavi yol haritası ister misiniz?**

Premium üyelik ile evrenize, bütçenize ve şehrinize göre kişiselleştirilmiş tedavi planı oluşturuyoruz:

- Evrenize uygun tedavi adımları (sıralı)
- Tahmini maliyet planlaması
- Önerilen klinik eşleştirmesi
- Konservatif tedavi programı (beslenme + egzersiz + kompresyon)
- İlerleme takibi ve düzenli değerlendirme

**[14 Gün Ücretsiz Deneyin]**
CTA Buton: Teal (#0D9488)
URL hedefi: /premium/deneme?utm_source=email&utm_medium=tedavi&utm_campaign=e4

Tedavi kararı vermek kolay değildir. Ama doğru bilgi, doğru uzman ve doğru destek ile bu yolculuk yönetilebilir.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

# ============================================================
# DİZİ 5: PREMİUM DENEME DİZİSİ
# 5 Email, 14 Gün
# Tetikleyici: Premium deneme başlatma
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | premium_deneme |
| **Tetikleyici** | 14 günlük ücretsiz premium deneme başlatma |
| **Hedef** | Aktivasyon → değer deneyimi → ödeme dönüşüm → kurucu üyelik |
| **Email sayısı** | 5 |
| **Toplam süre** | 14 gün |
| **Gönderim saati** | 09:00 TSİ |
| **Çıkış koşulları** | Premium abone olursa → dizi durur, kutlama emaili gönderilir |
| **Öncelik** | Bu dizi aktifken diğer otomasyon dizileri duraklar (bülten hariç) |

---

### EMAIL 5.1: Hoşgeldin + Hemen Başla Checklist

**Gönderim:** Gün 0 (deneme başlatma anı)
**Gönderim saati:** Anında

**Konu satırı A:** Premium denemeniz aktif -- hemen başlayın
**Konu satırı B:** [Ad], 14 günlük programınız hazır

**Preview text:** İlk 3 adımınız burada -- 5 dakikada başlayın (45 karakter)

**Segmentasyon:**
- Gönderilecek: Premium deneme başlatan herkes
- Gönderilmeyecek: Yok

---

**Gövde:**

Merhaba [Ad],

Premium denemeniz aktif! 14 gün boyunca Tam Premium'un tüm özelliklerine erişebilirsiniz.

**İlk 5 dakikada yapmanız gereken 3 adım:**

**Adım 1: Detaylı Semptom Testini Tamamlayın**
25 soruluk kapsamlı test + doktorunuza götürebileceğiniz PDF rapor.
[Teste Başla](/semptom-testi/detayli?utm_source=email&utm_medium=deneme&utm_campaign=e1)

**Adım 2: Kişiselleştirilmiş Beslenme Planınızı Alın**
Evrenize, alerjilerinize ve tercihlerinize göre haftalık menü + alışveriş listesi.
[Planımı Oluştur](/premium/beslenme?utm_source=email&utm_medium=deneme&utm_campaign=e1)

**Adım 3: Topluluğa Kendinizi Tanıtın**
Sizi anlayan kadınlarla tanışın. İlk paylaşımınızı yapın.
[Topluluğa Git](/topluluk?utm_source=email&utm_medium=deneme&utm_campaign=e1)

**[Panelime Git -- Hemen Başla]**
CTA Buton: Teal (#0D9488), büyük boyut
URL hedefi: /premium/panel?utm_source=email&utm_medium=deneme&utm_campaign=e1

**14 gün boyunca erişebileceğiniz tüm özellikler:**

- Kişiselleştirilmiş beslenme planı (haftalık)
- 8 haftalık video rehberli egzersiz programı
- Kişiselleştirilmiş tedavi yol haritası
- Detaylı semptom testi + PDF rapor
- Aylık uzman Q&A oturumu (doktor, diyetisyen, psikolog)
- Tam topluluk erişimi + mentor eşleştirme
- İlerleme takip araçları
- Video kütüphanesi (egzersiz, bandajlama, masaj)
- Öncelikli destek (24 saat)

Herhangi bir sorunuz varsa bu emaile yanıt verin. Size yardımcı olmak istiyoruz.

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Deneme süreniz boyunca kredi kartı bilgisi gerekmez. 14 gün sonunda otomatik ücretlendirme yapılmaz.

---

### EMAIL 5.2: En Popüler Premium Özellik Highlight

**Gönderim:** Gün 3
**Gönderim saati:** 09:00 TSİ

**Konu satırı A:** Üyelerimizin en çok sevdiği özellik
**Konu satırı B:** Bu özelliği denediniz mi?

**Preview text:** Kişiselleştirilmiş beslenme planı -- evrenize göre (50 karakter)

---

**Gövde:**

Merhaba [Ad],

Premium denemenizin 3. günü. Umarız keyif alıyorsunuzdur.

**Üyelerimizin en çok değer verdiği özellik:**

Kişiselleştirilmiş beslenme planı.

Neden bu kadar değerli?

Çünkü lipödem evresine, besin alerjilerine, Türk mutfağı tercihlerine ve yaşam tarzına göre hazırlanıyor. Genel bir "anti-inflamatuar diyet listesi" ile kişiselleştirilmiş haftalık menü arasındaki fark, GPS ile "kuzeye git" talimatı arasındaki fark gibidir.

**Beslenme planınız şunları içerir:**
- 7 gün x 5 öğün (3 ana + 2 ara)
- Her tarif için malzeme ve yapılış
- Haftalık alışveriş listesi (yazdırılabilir)
- Takas önerileri (malzeme bulamıyorsanız alternatifler)
- Besin değerleri ve anti-inflamatuar puanlama

**Planınızı henüz oluşturmadıysanız:**

**[Beslenme Planımı Oluştur]**
CTA Buton: Teal (#0D9488)
URL hedefi: /premium/beslenme?utm_source=email&utm_medium=deneme&utm_campaign=e2

**Oluşturduysanız:**

Bu hafta menünüzden en sevdiğiniz tarifi denediniz mi? Topluluğa fotoğraf paylaşın -- diğer üyeler de görmek ister.
[Topluluğa Git](/topluluk?utm_source=email&utm_medium=deneme&utm_campaign=e2)

**Diğer popüler özellikler:**
- Video kütüphanesi: [Egzersiz videolarına göz at](/premium/video?utm_source=email&utm_medium=deneme&utm_campaign=e2)
- İlerleme takibi: [İlk kaydımı oluştur](/premium/ilerleme?utm_source=email&utm_medium=deneme&utm_campaign=e2)

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 5.3: İlerleme Kontrolü + Değer Hatırlatma

**Gönderim:** Gün 7 (yarı yol)
**Gönderim saati:** 09:00 TSİ

**Konu satırı A:** Denemenizin yarısı geçti -- nasıl gidiyor?
**Konu satırı B:** 7 günde neler keşfettiniz?

**Preview text:** Kalan 7 gününüzü en iyi şekilde değerlendirin (47 karakter)

---

**Gövde:**

Merhaba [Ad],

14 günlük denemenizin yarısına geldiniz. Nasıl gidiyor?

**Hızlı bir kontrol:**

- [ ] Detaylı semptom testini tamamladınız mı?
- [ ] Beslenme planınızı oluşturdunuz mu?
- [ ] Egzersiz videolarına göz attınız mı?
- [ ] Topluluğa kendinizi tanıttınız mı?
- [ ] İlerleme kaydınıza ilk girişi yaptınız mı?

**Henüz yapmadıklarınız varsa -- sorun değil.**

7 gününüz daha var ve her birini en iyi şekilde değerlendirmenizi istiyoruz.

**Kalan 7 gün için önerilerimiz:**

**Gün 8-9:** Egzersiz programına başlayın. Video rehberli, evrenize uygun. Haftada 3 gün, 20-30 dakika yeterli.
[Egzersiz Programım](/premium/egzersiz?utm_source=email&utm_medium=deneme&utm_campaign=e3)

**Gün 10-11:** Tedavi yol haritanızı inceleyin. Evrenize göre kişiselleştirilmiş tedavi adımları.
[Tedavi Yol Haritam](/premium/tedavi-yol-haritasi?utm_source=email&utm_medium=deneme&utm_campaign=e3)

**Gün 12-13:** Aylık uzman Q&A oturumuna katılın (takvimi kontrol edin).
[Q&A Takvimi](/premium/qa?utm_source=email&utm_medium=deneme&utm_campaign=e3)

**Gün 14:** Kararınızı verin. Kredi kartı gerekmediği için otomatik ücretlendirme yok.

**[Panelime Git]**
CTA Buton: Teal (#0D9488)
URL hedefi: /premium/panel?utm_source=email&utm_medium=deneme&utm_campaign=e3

Sorularınız mı var? Bu emaile yanıt verin.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 5.4: Deneme Bitiş Uyarısı (3 Gün Kaldı)

**Gönderim:** Gün 11
**Gönderim saati:** 09:00 TSİ

**Konu satırı A:** 3 gün kaldı -- premium erişiminiz bitiyor
**Konu satırı B:** [Ad], denemeniz 3 gün sonra sona eriyor

**Preview text:** Kişiselleştirilmiş programınızı kaybetmeyin (44 karakter)

---

**Gövde:**

Merhaba [Ad],

Premium denemenizin bitmesine 3 gün kaldı.

**Deneme sürenizde neler yaptınız?**

Bu emaili kişiselleştirmek için aktivite verilerinize baktık:

[Dinamik blok -- kullanıcı aktivitesine göre değişir:]

*Eğer beslenme planı oluşturmuşsa:*
> Kişiselleştirilmiş beslenme planınızı oluşturdunuz. Bu plan deneme sona erdiğinde erişilemez olacak.

*Eğer egzersiz programı başlatmışsa:*
> Egzersiz programınızda ilerleme kaydettiniz. Bu ilerleme deneme sona erdiğinde kaybolmayacak ama yeni içeriklere erişemeyeceksiniz.

*Eğer toplulukta paylaşım yapmışsa:*
> Toplulukta paylaşımlarınız var. Deneme sona erdiğinde toplulukta okumaya devam edebilir ama yazamaz ve paylaşamazsınız.

---

**Deneme sona erdiğinde ne olacak?**

| Erişiminiz | Deneme sırasında | Deneme sonrası (ücretsiz) |
|------------|------------------|---------------------------|
| Kişisel beslenme planı | Tam erişim | Erişim kapanır |
| Egzersiz videoları | Tam erişim | Erişim kapanır |
| Tedavi yol haritası | Kişiselleştirilmiş | Genel bilgi |
| Topluluk | Okuma + yazma | Sadece okuma |
| Uzman Q&A | Katılım hakkı | Erişim kapanır |
| İlerleme takibi | Tam araçlar | Erişim kapanır |

**Devam etmek isterseniz:**

| Plan | Aylık | Yıllık (2 ay hediye) |
|------|-------|---------------------|
| Temel Premium | 79 TL/ay | 699 TL/yıl (58 TL/ay) |
| Tam Premium | 149 TL/ay | 1.299 TL/yıl (108 TL/ay) |

**[Planımı Seçerek Devam Et]**
CTA Buton: Teal (#0D9488), büyük boyut
URL hedefi: /premium/satin-al?utm_source=email&utm_medium=deneme&utm_campaign=e4

**Kurucu üyelik hakkı sınırlı:**
İlk 200 üye, Tam Premium'u %40 indirimli ve ömür boyu sabit fiyatla kullanabiliyor.
[Kurucu üyelik detayları](/premium/kurucu?utm_source=email&utm_medium=deneme&utm_campaign=e4)

Karar sizin. Ama bilmenizi isteriz: deneme sona erdikten sonra da ücretsiz içeriklerimiz, haftalık bültenimiz ve temel araçlarımız hep burada.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 5.5: Son Gün -- Kurucu Üyelik Teklifi

**Gönderim:** Gün 14
**Gönderim saati:** 09:00 TSİ

**Konu satırı A:** Son gün: Kurucu üyelik fırsatınız bugün bitiyor
**Konu satırı B:** [Ad], premium erişiminiz bugün sona eriyor

**Preview text:** Ömür boyu %40 indirim -- son kurucu üye hakları (50 karakter)

---

**Gövde:**

Merhaba [Ad],

Bugün premium denemenizin son günü.

14 gün boyunca kişiselleştirilmiş beslenme planı, egzersiz programı, uzman erişimi ve topluluk desteğini deneyimlediniz.

**Bugün karar günü.**

**Seçenek 1: Kurucu Üye Olun (En İyi Değer)**

- Tam Premium'un tüm özellikleri
- **89 TL/ay** (normal fiyat: 149 TL/ay) -- %40 indirim
- **779 TL/yıl** (normal: 1.299 TL) -- taksit mevcut
- Fiyatınız ömür boyu sabitlenir
- "Kurucu Üye" topluluk rozeti
- Yeni özelliklere 2 hafta erken erişim
- Her yönlendirilen üye için 1 ay ücretsiz

**[Kurucu Üye Ol -- 89 TL/ay]**
CTA Buton: Amber (#F59E0B), koyu metin, büyük boyut
URL hedefi: /premium/kurucu?utm_source=email&utm_medium=deneme&utm_campaign=e5

[Kalan kurucu üye hakkı: [dinamik_sayi]/200]

**Seçenek 2: Tam Premium**
149 TL/ay veya 1.299 TL/yıl
[Tam Premium'u Seç](/premium/satin-al?plan=tam&utm_source=email&utm_medium=deneme&utm_campaign=e5)

**Seçenek 3: Temel Premium**
79 TL/ay veya 699 TL/yıl
[Temel Premium'u Seç](/premium/satin-al?plan=temel&utm_source=email&utm_medium=deneme&utm_campaign=e5)

**Seçenek 4: Ücretsiz devam edin**
Sorun değil. Blog içeriklerimiz, temel semptom testi, klinik bulucu ve haftalık bülten hep ücretsiz.

---

**Karşılaştırma:**
- 1 diyetisyen seansı: 500-1.000 TL
- Kurucu üyelik: günde 2,93 TL -- bir simit parası

**30 gün iade garantisi.** Tam Premium veya Kurucu üyelikte memnun kalmazsanız, ilk 30 gün içinde tam iade.

**Taksit seçenekleri:** Yıllık planlarda 3, 6, 9 taksit -- vade farkı yok.

Bu yolculukta yanınızda olmak istiyoruz. Hangi seçeneği tercih ederseniz edin, buradayız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

# ============================================================
# DİZİ 6: YENİDEN ETKİLEŞİM DİZİSİ
# 3 Email
# Tetikleyici: 30 gün inaktif
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | yeniden_etkilesim |
| **Tetikleyici** | 30 gün email açmama + platforma girmeme |
| **Hedef** | Yeniden etkileşim → değer hatırlatma → liste temizliği |
| **Email sayısı** | 3 |
| **Toplam süre** | 15 gün (Gün 30, 37, 45) |
| **Gönderim saati** | 11:00 TSİ (standart saatten farklı -- dikkat çekme) |
| **Çıkış koşulları** | Herhangi bir emaili açar veya platforma girerse → normal akışa döner |
| **Özel kural** | 3. email sonrası hala inaktifse → listeye "temizlenecek" etiketi, 60 gün sonra liste temizliği |

---

### EMAIL 6.1: "Sizi Özledik" + Son İçerikler

**Gönderim:** Gün 30 (inaktiflik başlangıcından)
**Gönderim saati:** 11:00 TSİ

**Konu satırı A:** Sizi özledik -- yokluğunuzda neler değişti?
**Konu satırı B:** [Ad], bir süredir görüşemedik

**Preview text:** Son 1 ayda eklenen yeni içerikler ve araçlar (48 karakter)

**Segmentasyon:**
- Gönderilecek: 30 gün email açmamış + platforma girmemiş
- Gönderilmeyecek: Premium aktif aboneler (onlar için farklı flow)

---

**Gövde:**

Merhaba [Ad],

Bir süredir emaillerimizi açmadığınızı fark ettik. Umarız iyisinizdir.

Size ulaşma nedenimiz basit: yokluğunuzda platform üzerinde yeni şeyler oldu ve bunları kaçırmanızı istemiyoruz.

**Son 1 ayda eklenenler:**

**Yeni makale:** [Dinamik -- en son yayınlanan popüler makale başlığı]
[Oku](/blog/[slug]?utm_source=email&utm_medium=yeniden&utm_campaign=e1)

**Yeni araç/özellik:** [Dinamik -- varsa yeni araç/özellik]

**Topluluktan:** [X] yeni hasta hikayesi paylaşıldı
[Hikayelere Göz At](/hasta-hikayeleri?utm_source=email&utm_medium=yeniden&utm_campaign=e1)

**Haftalık bültenlerimiz devam ediyor:**
Her Salı bilimsel bilgi, beslenme ipucu ve topluluk haberleri. Kaçırdığınız bültenlere [buradan](/bulten/arsiv?utm_source=email&utm_medium=yeniden&utm_campaign=e1) ulaşabilirsiniz.

**[Platformu Ziyaret Et]**
CTA Buton: Teal (#0D9488)
URL hedefi: /?utm_source=email&utm_medium=yeniden&utm_campaign=e1

Lipödem yolculuğunuz sürmektedir ve biz hala buradayız. Ne zaman ihtiyaç duyarsanız, kapımız açık.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 6.2: Özel Lead Magnet Teklifi

**Gönderim:** Gün 37
**Gönderim saati:** 11:00 TSİ

**Konu satırı A:** Size özel bir hediyemiz var
**Konu satırı B:** Bu rehberi sadece siz için hazırladık

**Preview text:** Ücretsiz indirilebilir yeni rehber (34 karakter)

---

**Gövde:**

Merhaba [Ad],

Geçen hafta email gönderdik ama açmadınız. Sorun değil -- herkes yoğun olabiliyor.

Ama bugün size özel bir şey paylaşmak istiyoruz:

**[Dinamik LM -- kullanıcının daha önce indirmediği lead magnet]**

*Eğer hasta rehberini indirmiş ama beslenme planını indirmemişse:*
> **7 Günlük Anti-İnflamatuar Beslenme Planı**
> Türk mutfağına uygun, pratik, 35 tarif, alışveriş listesi dahil.
> [Hemen İndir](/rehber/7-gunluk-beslenme-plani?utm_source=email&utm_medium=yeniden&utm_campaign=e2)

*Eğer beslenme planını indirmiş ama egzersiz programını görmemişse:*
> **Lipödem Egzersiz Başlangıç Programı**
> 4 haftalık, evde yapılabilir, video destekli başlangıç programı.
> [Hemen İndir](/rehber/egzersiz-programi?utm_source=email&utm_medium=yeniden&utm_campaign=e2)

*Eğer her ikisini de indirmişse:*
> **Doktorunuza Sormanız Gereken 20 Soru (Güncellenmiş PDF)**
> 2026 güncel bilgilerle yenilenen, yazdırılabilir soru listesi.
> [Hemen İndir](/rehber/20-soru?utm_source=email&utm_medium=yeniden&utm_campaign=e2)

**[İndir]**
CTA Buton: Teal (#0D9488)
URL hedefi: Dinamik

Bu hediye herhangi bir koşul olmadan -- ücretsiz. Sadece bizden size.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

### EMAIL 6.3: Son Çağrı + Abonelikten Çıkma Kolaylığı

**Gönderim:** Gün 45
**Gönderim saati:** 11:00 TSİ

**Konu satırı A:** Devam edelim mi?
**Konu satırı B:** Son bir kontrol: emaillerimizi istiyor musunuz?

**Preview text:** Aboneliğinizi yönetin -- bir tıkla (36 karakter)

---

**Gövde:**

Merhaba [Ad],

Bu, yeniden etkileşim dizimizin son emaili.

Son 45 gündür emaillerimizi açmadığınızı fark ettik. Sizi rahatsız etmek istemiyoruz.

**İki seçenek sunuyoruz:**

**Seçenek 1: Kalın -- biz buradayız**
Eğer emaillerimizi almaya devam etmek istiyorsanız, aşağıdaki butona tıklamanız yeterli. Sizi "aktif" olarak işaretleyeceğiz ve haftalık bültenimiz + yeni içerik bildirimleri devam edecek.

**[Evet, Emailleri Almaya Devam Edeyim]**
CTA Buton: Teal (#0D9488), büyük
URL hedefi: /email/aktif?token=[token]&utm_source=email&utm_medium=yeniden&utm_campaign=e3

**Seçenek 2: Abonelikten çıkın**
Hiçbir sorun yok. Sizi anlıyoruz. Tek tıkla abonelikten çıkabilirsiniz:
[Abonelikten Çık](/email/cik?token=[token])

Eğer hiçbir butona tıklamazsanız, 15 gün sonra sizi listeden otomatik olarak çıkaracağız. Böylece gereksiz email almamış olursunuz.

**Lipödem yolculuğunuzda ihtiyaç duyduğunuz her an, lipödemturkiye.com burada.**

Yanınızdayız (ne zaman isterseniz),
Lipödem Türkiye Ekibi

---

**Teknik notlar:**
- "Aktif" butonuna tıklayanlar → aktiflik etiketi güncellenir, normal akışa döner
- Hiçbir butona tıklamayanlar → 60. günde listeden çıkarılır (liste hijyeni)
- Abonelikten çıkanlar → KVKK uyumlu silme süreci başlar

---

# ============================================================
# DİZİ 7: KLİNİK RANDEVU TAKİP DİZİSİ
# 2 Email
# Tetikleyici: Klinik iletişim formu gönderme
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | klinik_takip |
| **Tetikleyici** | Klinik bulucu üzerinden iletişim formu gönderme |
| **Hedef** | Onay + hazırlık → randevu takip |
| **Email sayısı** | 2 |
| **Toplam süre** | 7 gün |
| **Gönderim saati** | İlk: anında, ikinci: 10:00 TSİ |
| **Öncelik** | Bu dizi diğer tüm dizileri duraklatır (kısa ve acil) |

---

### EMAIL 7.1: Onay + Hazırlık İpuçları + "20 Soru" PDF

**Gönderim:** Hemen (form gönderim anı)
**Gönderim saati:** Anında

**Konu satırı A:** Klinik talebiniz iletildi -- randevunuza hazırlanın
**Konu satırı B:** [Klinik adı] ile iletişiminiz onaylandı

**Preview text:** Randevu hazırlık ipuçları ve doktora sorulacak 20 soru (55 karakter)

**Segmentasyon:**
- Gönderilecek: Klinik iletişim formu gönderen herkes
- Gönderilmeyecek: Yok

---

**Gövde:**

Merhaba [Ad],

**[Klinik Adı]** ile iletişim talebiniz başarıyla iletildi.

Klinik sizinle en kısa sürede iletişime geçecektir. Bekleme süresi genellikle 1-3 iş günüdür.

**Randevunuza hazırlanmak için:**

**1. "Doktorunuza Sormanız Gereken 20 Soru" PDF'ini indirin:**

**[20 Soru Listesini İndir -- PDF]**
CTA Buton: Teal (#0D9488)
URL hedefi: /rehber/20-soru/pdf?utm_source=email&utm_medium=klinik&utm_campaign=e1

Bu listeyi yazdırıp randevunuza götürün. Doktorunuzla verimli bir görüşme yapmanızı sağlayacak.

**2. Semptom testi sonuçlarınızı hazırlayın:**
[Eğer testi tamamlamışsa:] Sonuç raporunuz burada: [Raporu İndir](/semptom-testi/sonuc/[id]/pdf)
[Eğer testi tamamlamamışsa:] Randevudan önce semptom testini tamamlayın: [Teste Başla](/semptom-testi)

**3. Şunları not edin (doktorunuza anlatmak için):**
- Belirtileriniz ne zaman başladı?
- Hangi diyetleri denediniz?
- Ailede benzer durum var mı?
- Hormonal değişimlerle bağlantı var mı?
- Günlük hayatınızı nasıl etkiliyor?

**4. Varsa eski tetkik sonuçlarınızı (kan tahlili, MR, ultrason) yanınıza alın.**

**Randevunuz hayırlı olsun.**

Yanınızdayız,
Lipödem Türkiye Ekibi

P.S. -- Klinikle iletişimde sorun yaşarsanız bu emaile yanıt vererek bize bildirin.

---

### EMAIL 7.2: Randevu Takip

**Gönderim:** Gün 7 (form gönderiminden sonra)
**Gönderim saati:** 10:00 TSİ

**Konu satırı A:** Randevu aldınız mı? Size yardımcı olabiliriz
**Konu satırı B:** [Ad], klinik süreciniz nasıl gidiyor?

**Preview text:** Sorun varsa yardımcı olabiliriz (31 karakter)

---

**Gövde:**

Merhaba [Ad],

Geçen hafta **[Klinik Adı]** ile iletişim talebinizi iletmiştik. Nasıl gidiyor?

**Durumunuza göre yardımcı olabiliriz:**

**Randevu aldıysanız:**
Harika! Randevunuza hazırlık ipuçlarını içeren emailimizi gözden geçirmeyi unutmayın. "20 Soru" listesini yazdırdınız mı?
[20 Soru Listesi](/rehber/20-soru/pdf?utm_source=email&utm_medium=klinik&utm_campaign=e2)

**Henüz yanıt almadıysanız:**
Bazı klinikler yoğun dönemlerde 5-7 iş günü içinde dönüş yapabiliyor. Beklemeye devam edin veya kliniklerin telefon numaralarını deneyin.
[Klinik Detayları](/klinik-bulucu/[klinik_slug]?utm_source=email&utm_medium=klinik&utm_campaign=e2)

**Başka bir klinik denemek isterseniz:**
Klinik Bulucu'dan alternatif uzmanları bulabilirsiniz.
[Klinik Bulucu](/klinik-bulucu?utm_source=email&utm_medium=klinik&utm_campaign=e2)

**Randevu konusunda endişeleriniz mi var?**
Bu emaile yanıt vererek bize anlatabilirsiniz. Tecrübelerimizi ve önerilerimizi paylaşmaktan mutluluk duyarız.

Yanınızdayız,
Lipödem Türkiye Ekibi

---

# ============================================================
# DİZİ 8: HAFTALIK BÜLTEN
# Sürekli, Her Salı
# Tüm aktif aboneler
# ============================================================

## Dizi Özeti

| Parametre | Değer |
|-----------|-------|
| **Dizi adı** | haftalik_bulten |
| **Gönderim** | Her Salı |
| **Gönderim saati** | 10:00 TSİ |
| **Hedef** | Sürekli değer → marka bilinirliği → platform trafiği → dönüşüm |
| **Format** | Sabit bölümlerle şablonlanmış |
| **Segmentasyon** | Tüm aktif aboneler (son 90 günde en az 1 email açmış VEYA platforma girmiş) |
| **Hariç tutulanlar** | 90 gün+ inaktif (yeniden etkileşim dizisine yönlendirilmiş) |

---

### BÜLTEN ŞABLONU

**Gönderici:** Lipödem Türkiye <bilgi@lipodemturkiye.com>

**Konu satırı formatları (rotasyonlu):**
- Hafta 1: [Makale başlığı] + kısa bülten ipucu
- Hafta 2: Bu hafta lipödem dünyasında neler oldu?
- Hafta 3: [Beslenme/Egzersiz ipucu] -- haftanın önerisi
- Hafta 4: [Hasta hikayesi ismi]: "[Kısa alıntı]"

**Konu satırı örnekleri:**
- "Akdeniz diyeti mi, ketojenik mi? Bilimsel karşılaştırma"
- "Bu hafta: zerdeçallı tarif + yeni egzersiz videosu"
- "Zeynep'in hikayesi: 'Keşke daha önce bilseydim'"
- "Lipödem ve yaz: sıcak havalarda 5 ipucu"
- "Yeni araştırma: GLP-1 ilaçları ve lipödem"

---

**Bülten Layout'u:**

```
┌─────────────────────────────────────────────┐
│  [Logo] Lipödem Türkiye Haftalık Bülten      │
│  [Tarih]                                     │
├─────────────────────────────────────────────┤
│                                             │
│  BÖLÜM 1: HAFTANIN MAKALESİ                │
│  ─────────────────────────                  │
│  [Makale görseli]                           │
│  [Başlık]                                   │
│  [2-3 cümle özet]                           │
│  [Devamını Oku →]                           │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  BÖLÜM 2: HIZLI İPUCU                      │
│  ─────────────────────                      │
│  [Beslenme / Egzersiz rotasyonlu]           │
│  [1 paragraf + 1 görsel/ikon]               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  BÖLÜM 3: TOPLULUK HIGHLIGHT               │
│  ──────────────────────────                 │
│  [Hasta hikayesi snippet veya              │
│   topluluk istatistiği]                     │
│  [Topluluğa Katıl →]                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  BÖLÜM 4: ARAÇ / ÖZELLİK TANITIMI         │
│  ──────────────────────────────             │
│  [Her hafta farklı araç/özellik]            │
│  [Kısa açıklama + CTA]                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  BÖLÜM 5: PLATFORM GÜNCELLEMESİ           │
│  ──────────────────────────────             │
│  [Varsa: yeni özellik, yeni içerik,        │
│   yaklaşan etkinlik]                        │
│  [Yoksa: bu bölüm gizlenir]                │
│                                             │
├─────────────────────────────────────────────┤
│  Footer                                     │
│  [Abonelikten Çık] [Tercihlerimi Yönet]     │
│  KVKK Aydınlatma Metni                      │
└─────────────────────────────────────────────┘
```

---

### ÖRNEK BÜLTEN #1

**Konu satırı A:** Akdeniz diyeti mi, ketojenik mi? Hangisi lipödeme daha iyi?
**Konu satırı B:** Bu hafta: beslenme karşılaştırması + yeni egzersiz videosu

**Preview text:** Bilimsel kanıtlarla beslenme karşılaştırması (42 karakter)

---

**Gövde:**

Merhaba [Ad],

Bu haftanın Lipödem Türkiye Bülteni'ne hoş geldiniz.

---

**HAFTANIN MAKALESİ**

**Akdeniz Diyeti mi, Ketojenik Diyet mi? Lipödem İçin Bilimsel Karşılaştırma**

2024-2025 yıllarında yayınlanan araştırmalar, lipödem hastalarında beslenme yaklaşımlarını karşılaştırdı. Sonuçlar ilginç:

- Akdeniz diyeti: 2024 Alman kılavuzunda "güçlü uzlaşma" ile önerildi
- Ketojenik diyet: "Uzlaşma" düzeyinde önerildi
- İkisinin birleşimi (Akdeniz tarzı ketojenik): 7 ayda -12 kg, -6 cm uyluk

Her iki yaklaşımın avantajları, dezavantajları ve lipödeme özel etkileri...

**[Karşılaştırmanın Tamamını Oku]**
CTA Buton: Teal (#0D9488)
URL hedefi: /blog/akdeniz-diyeti-mi-ketojenik-mi?utm_source=email&utm_medium=bulten&utm_campaign=b1

---

**HIZLI İPUCU: BESLENME**

**Bu hafta deneyin: Sabah rutininize limonlu ılık su ekleyin.**

Sabah kalktığınızda aç karnına 1 bardak ılık su + yarım limon suyu için. Bu basit alışkanlık:
- Sindirim sistemini uyandırır
- C vitamini desteği sağlar
- Hidrasyon sürecini başlatır
- Lenf akışını destekler

Ardından 30 dakika bekleyip kahvaltı yapın.

---

**TOPLULUK HIGHLIGHT**

*"Ameliyat kararı vermeden önce bu platformdaki hasta hikayelerini okudum. Herkesin deneyimi farklı ama ortak bir şey var: doğru bilgiyle doğru kararı verdiklerini hissediyorlar. Ben de verdim."*
-- Ayşe, 45, İzmir

Bu hafta toplulukta [X] yeni paylaşım yapıldı.
[Toplulukta Neler Oluyor? →](/topluluk?utm_source=email&utm_medium=bulten&utm_campaign=b1)

---

**BU HAFTANIN ARACI: MALİYET HESAPLAYICI**

Lipödem tedavisi ne kadar tutar? Maliyet Hesaplayıcı aracımız ile tedavi türüne, şehre ve seans sayısına göre tahmini maliyet hesaplayabilirsiniz.

[Maliyet Hesaplayıcıyı Dene →](/maliyet-hesaplayici?utm_source=email&utm_medium=bulten&utm_campaign=b1)

---

**PLATFORM GÜNCELLEMESİ**

Bu hafta eklenen: [Yeni makale/araç/özellik adı]
Yaklaşan: [Varsa etkinlik/webinar tarihi]

---

Haftaya görüşmek üzere.

Yanınızdayız,
Lipödem Türkiye Ekibi

[Abonelikten Çık](/email/cik?token=[token]) | [Email Tercihlerimi Yönet](/email/tercihler?token=[token])
Bu emaili lipödemturkiye.com adresine kayıtlı [email] adresine gönderiyoruz.
KVKK Aydınlatma Metni: [Link]
© 2026 Lipödem Türkiye

---

### ÖRNEK BÜLTEN #2

**Konu satırı A:** Yaz geliyor: lipödemle 5 serin kalma ipucu
**Konu satırı B:** Sıcak havalarda semptomlarınızı yönetin

**Preview text:** Kompresyon giysi, hidrasyon ve yaz beslenme önerileri (51 karakter)

---

**Gövde:**

Merhaba [Ad],

Yaz ayları lipödem hastaları için zor olabilir. Sıcak, semptomları kötüleştirir -- şişlik artar, ağrı yoğunlaşır, kompresyon giysileri tahammül edilemez hale gelir.

---

**HAFTANIN MAKALESİ**

**Lipödem ve Yaz: Sıcak Havalarda Semptomları Yönetmenin 5 Yolu**

**1. Kompresyon giysi seçimi:** Yaz için daha ince, nefes alan kumaşlar tercih edin. Bazı markalar yaz koleksiyonu sunuyor.

**2. Hidrasyon:** Günlük su tüketiminizi 0,5 litre artırın. Sıcakta lenf sıvısı koyulaşabilir.

**3. Su egzersizi:** Yüzme ve su aerobiği, hem egzersiz hem serinleme sağlar. Suyun basıncı doğal kompresyon etkisi yaratır.

**4. Soğuk duş:** Bacaklarınıza soğuk su uygulaması, geçici olarak şişliği azaltabilir.

**5. Beslenme:** Suyu bol besinler (karpuz, salatalık, domates) ve anti-inflamatuar soğuk yemekler.

**[5 İpucunun Tamamını Oku]**
CTA Buton: Teal (#0D9488)
URL hedefi: /blog/lipodem-yaz-ipuclari?utm_source=email&utm_medium=bulten&utm_campaign=b2

---

**HIZLI İPUCU: EGZERSİZ**

**Bu hafta deneyin: 20 dakikalık yürüyüş + 5 dakika germe.**

Sabah veya akşam serin saatlerde, kompresyon giysilerinizle 20 dakika düz zeminde yürüyün. Bitirdiğinizde 5 dakika alt vücut germe hareketleri yapın.

Bu kadar basit. Ve etkili.

---

**TOPLULUK HIGHLIGHT**

Bu hafta en çok konuşulan konu: "Yaz aylarında hangi kompresyon çorabını kullanıyorsunuz?"
[Önerilere Göz At →](/topluluk?utm_source=email&utm_medium=bulten&utm_campaign=b2)

---

**BU HAFTANIN ARACI: KOMPRESYON GİYSİ REHBERİ**

Marka karşılaştırması, beden ölçüm rehberi ve mevsimlik öneriler.
[Rehbere Git →](/rehber/kompresyon-giysi?utm_source=email&utm_medium=bulten&utm_campaign=b2)

---

### BÜLTEN İÇERİK ROTASYON TAKVİMİ

| Hafta | Hızlı İpucu Konusu | Araç/Özellik Tanıtımı |
|-------|--------------------|-----------------------|
| 1 | Beslenme | Semptom Testi |
| 2 | Egzersiz | Klinik Bulucu |
| 3 | Beslenme | Maliyet Hesaplayıcı |
| 4 | Egzersiz | Beslenme Planlayıcı (premium) |
| 5 | Beslenme | Evre Değerlendirme |
| 6 | Egzersiz | Video Kütüphanesi (premium) |
| 7 | Beslenme | Topluluk |
| 8 | Egzersiz | İlerleme Takibi (premium) |

Premium araç tanıtımlarında soft-sell: "Premium üyeler bu aracı kullanıyor. 14 gün ücretsiz deneyin."

---

# ============================================================
# EK BÖLÜMLER
# ============================================================

## ESP KARŞILAŞTIRMA: Resend vs Loops vs Brevo

| Özellik | Resend | Loops | Brevo (eski Sendinblue) |
|---------|--------|-------|-------------------------|
| **Next.js uyumluluğu** | Mükemmel (React Email) | İyi (API) | Orta (REST API) |
| **React Email desteği** | Native (kendi ürünü) | Yok | Yok |
| **Otomasyon** | Temel (webhook bazlı) | Güçlü (görsel builder) | Çok güçlü |
| **Segmentasyon** | API bazlı (esnek) | Dahili | Dahili, güçlü |
| **A/B testi** | Manuel | Dahili | Dahili |
| **Analitik** | Temel | İyi | Çok iyi |
| **Türkçe arayüz** | Yok | Yok | Var |
| **Fiyat (5.000 abone)** | ~$20/ay (gönderim bazlı) | ~$49/ay | ~$25/ay |
| **Fiyat (15.000 abone)** | ~$40/ay | ~$99/ay | ~$65/ay |
| **Deliverability** | Yüksek | Yüksek | Yüksek |
| **Geliştirici deneyimi** | En iyi | İyi | Orta |
| **Şablon oluşturma** | React bileşenleri (kod) | Görsel editor | Görsel editor |
| **Webhook/event** | Güçlü | Güçlü | Orta |
| **KVKK/GDPR** | Uyumlu | Uyumlu | Uyumlu (AB merkezli) |

### Öneri: Hibrit Yaklaşım

**Birincil: Resend + React Email**
- Email şablonları React bileşenleri olarak kodlanır
- Next.js projesiyle tam entegrasyon
- Gönderim, webhook'lar, event tracking
- Geliştirici dostu, type-safe

**İkincil: Loops (veya Brevo)**
- Otomasyon akışları için görsel builder
- Segment yönetimi
- A/B test yönetimi
- Pazarlama ekibi tarafından yönetilebilir

**Neden hibrit?**
Resend mükemmel bir email gönderim altyapısıdır ama otomasyon builder'ı yoktur. Loops veya Brevo, otomasyon akışlarını görsel olarak yönetmenizi sağlar. İkisi birlikte kullanıldığında hem geliştirici deneyimi hem pazarlama esnekliği sağlanır.

**Alternatif: Sadece Resend**
Eğer otomasyon akışlarını Next.js backend'inde cron job + event listener ile kendiniz kodlayacaksanız, sadece Resend yeterlidir. Bu daha esnek ama daha fazla geliştirme gerektirir.

---

## KPI HEDEFLERİ VE ÖLÇÜM

### Dizi Bazlı KPI Hedefleri

| Dizi | Açılma Oranı | Tıklama Oranı | Unsubscribe | Dönüşüm Hedefi |
|------|-------------|---------------|-------------|-----------------|
| Hoşgeldin | %45+ | %10+ | <%0.3 | %15 semptom testi tamamlama |
| Semptom Testi Sonuç | %55+ | %15+ | <%0.2 | %20 klinik bulucu tıklama |
| Beslenme Bilgi | %35+ | %5+ | <%0.5 | %8 premium deneme başlatma |
| Tedavi Bilgi | %40+ | %8+ | <%0.4 | %10 klinik formu gönderme |
| Premium Deneme | %50+ | %12+ | <%0.2 | %25 ücretli dönüşüm |
| Yeniden Etkileşim | %15+ | %3+ | <%2.0 | %20 yeniden aktif |
| Klinik Takip | %60+ | %20+ | <%0.1 | %40 randevu onayı |
| Haftalık Bülten | %35+ | %5+ | <%0.3 | Sürekli etkileşim |

### Genel Email Programı KPI'ları

| Metrik | Hedef | Ölçüm Yöntemi |
|--------|-------|---------------|
| Genel açılma oranı | %35+ | ESP dashboard |
| Genel tıklama oranı | %5+ | ESP dashboard |
| Unsubscribe oranı | <%0.5 | ESP dashboard |
| Spam şikayet oranı | <%0.05 | ESP dashboard |
| Bounce oranı | <%2 | ESP dashboard |
| Email→Semptom testi | %10+ | Event tracking |
| Email→Premium deneme | %5+ | Event tracking |
| Email→Premium satış | %2+ | Payment tracking |
| Email→Klinik formu | %3+ | Form submission tracking |
| Liste büyüme oranı | %15+/ay | Kayıt - çıkış |

### A/B Test Stratejisi

| Test Elementi | Minimum Örneklem | Test Süresi | Öncelik |
|---------------|-----------------|-------------|---------|
| Konu satırı | 500 abone/varyant | 24 saat açılma takibi | Yüksek |
| CTA butonu metni | 500 abone/varyant | 48 saat tıklama takibi | Yüksek |
| Gönderim saati | 1.000 abone/varyant | 1 hafta | Orta |
| Email uzunluğu | 1.000 abone/varyant | 2 hafta | Orta |
| Görsel vs metin ağırlıklı | 1.000 abone/varyant | 2 hafta | Düşük |

**İlk 3 ay test odağı:** Konu satırları (her emailde 2 varyant)
**3-6 ay test odağı:** CTA metinleri ve konumları
**6+ ay test odağı:** İçerik formatı ve uzunluk

---

## OPTİMAL GÖNDERİM ZAMANLARI

| Gün | Saat | Kullanım | Gerekçe |
|-----|------|----------|---------|
| **Salı** | 10:00 TSİ | Haftalık bülten | En yüksek açılma oranı günü (B2C sağlık) |
| **Çarşamba** | 10:00 TSİ | Tedavi dizisi | Salı bülteninden 1 gün sonra (çakışma yok) |
| **Perşembe** | 09:00 TSİ | Beslenme dizisi | Hafta ortası, aktif günler |
| **Anında** | -- | Tetikleyici emailler | Semptom testi, klinik formu, deneme başlatma |
| **10:00 TSİ** | -- | Standart otomasyon | Sabah rutini, email kontrol saati |
| **11:00 TSİ** | -- | Yeniden etkileşim | Farklı saat dikkat çeker |

**Gönderilmeyecek zamanlar:**
- Cumartesi-Pazar (bülten ve otomasyon)
- 22:00-08:00 arası
- Resmi tatiller (Ramazan/Kurban Bayramı, 23 Nisan, 19 Mayıs, 30 Ağustos, 29 Ekim)

---

## EMAIL OTOMASYONLARİ TEKNİK ALTYAPI

### Resend + Next.js Entegrasyon Mimarisi

```
Next.js App
├── /app/api/email/
│   ├── send.ts          -- Email gönderim API
│   ├── webhook.ts       -- Resend webhook handler
│   └── cron.ts          -- Zamanlanmış gönderimler (Vercel Cron)
├── /emails/
│   ├── components/
│   │   ├── Header.tsx   -- Ortak header bileşeni
│   │   ├── Footer.tsx   -- Ortak footer bileşeni
│   │   ├── Button.tsx   -- CTA buton bileşeni
│   │   └── Card.tsx     -- İçerik kartı bileşeni
│   ├── hosgeldin/
│   │   ├── email-1.tsx  -- Hoşgeldin email 1
│   │   ├── email-2.tsx  -- Hoşgeldin email 2
│   │   └── ...
│   ├── semptom-sonuc/
│   ├── beslenme/
│   ├── tedavi/
│   ├── premium-deneme/
│   ├── yeniden-etkilesim/
│   ├── klinik-takip/
│   └── bulten/
│       └── template.tsx -- Bülten şablonu
├── /lib/
│   ├── email.ts         -- Email yardımcı fonksiyonlar
│   ├── segments.ts      -- Segmentasyon mantığı
│   └── sequences.ts     -- Dizi yönetimi mantığı
└── /db/
    └── subscribers.ts   -- Abone veritabanı işlemleri
```

### Veritabanı Şeması (Email İlişkili)

```sql
-- Abone tablosu
subscribers (
  id, email, ad, kayit_tarihi, kayit_kaynagi,
  lipodem_evresi, risk_seviyesi, tedavi_asamasi,
  premium_durumu, aktiflik, kvkk_riza_tarihi,
  double_optin_tarihi, unsubscribe_tarihi
)

-- Email gönderim kayıtları
email_sends (
  id, subscriber_id, dizi_adi, email_no,
  gonderim_tarihi, acilma_tarihi, tiklama_tarihi,
  tiklanan_url, bounce_tipi, unsubscribe
)

-- Dizi durumları
sequence_states (
  id, subscriber_id, dizi_adi, mevcut_email_no,
  baslama_tarihi, duraklatma_tarihi, tamamlanma_tarihi,
  cikis_nedeni
)

-- Segmentler
subscriber_segments (
  subscriber_id, segment_adi, segment_degeri,
  guncelleme_tarihi
)
```

---

## LANSMAN PLANI

### Email Altyapısı Hazırlık Takvimi

| Hafta | Görev | Sorumlu |
|-------|-------|---------|
| -4 | Domain DNS kayıtları (SPF, DKIM, DMARC) | Geliştirici |
| -4 | Resend hesabı + domain doğrulama | Geliştirici |
| -3 | React Email bileşenleri (Header, Footer, Button) | Geliştirici |
| -3 | Double opt-in email şablonu | Geliştirici |
| -2 | Hoşgeldin dizisi 5 email kodlama | Geliştirici |
| -2 | Semptom testi sonuç dizisi 3 email kodlama | Geliştirici |
| -2 | Haftalık bülten şablonu | Geliştirici |
| -1 | Test gönderimler (tüm diziler) | Geliştirici + Pazarlama |
| -1 | Spam testi (Mail Tester, GlockApps) | Geliştirici |
| -1 | Klinik takip + yeniden etkileşim dizisi kodlama | Geliştirici |
| 0 | Lansman: Hoşgeldin + Semptom Testi + Bülten aktif | Tüm ekip |
| +1 | Beslenme dizisi aktif | Geliştirici |
| +2 | Tedavi dizisi + Premium deneme dizisi aktif | Geliştirici |
| +3 | Yeniden etkileşim dizisi aktif (30 gün sonra tetiklenir) | Geliştirici |

### Domain Isınma Planı

| Gün | Günlük Gönderim | Toplam |
|-----|-----------------|--------|
| 1-3 | 50 | 150 |
| 4-7 | 100 | 550 |
| 8-14 | 250 | 2.300 |
| 15-21 | 500 | 5.800 |
| 22-28 | 1.000 | 12.800 |
| 29+ | Sınırsız (ihtiyaca göre) | -- |

**Not:** Lansmandan 4 hafta önce domain ısınmasına başlanmalıdır. İlk gönderimler ekip içi test emailleri ile yapılır.

---

## KAYNAKLAR

### Referans Belgeler
- product-marketing.md -- Ürün, hedef kitle, marka sesi
- pricing-output.md -- Fiyatlandırma yapısı, kurucu üyelik, ödeme altyapısı
- lead-magnets-output.md -- Lead magnet içerikleri ve teslim emaili
- copywriting-output.md -- Sayfa copy'leri ve marka dili
- marketing-psychology-output.md -- Hasta yolculuğu aşamaları
- content-strategy-output.md -- İçerik sütunları ve takvim

### Email Pazarlama Best Practices
- Konu satırları: 40-60 karakter ideal
- Preview text: 40-90 karakter, konu satırını tamamlayıcı
- Gövde: 150-300 kelime (eğitim emailleri)
- CTA: Email başına 1 ana CTA
- Mobil: %60+ email mobilde açılır -- tek sütun, büyük butonlar
- Unsubscribe: Her emailde görünür, tek tıkla

### KVKK Kaynakları
- 6698 sayılı Kişisel Verilerin Korunması Kanunu
- Ticari İletişim ve Ticari Elektronik İletiler Hakkında Yönetmelik
- İleti Yönetim Sistemi (İYS) kaydı gerekli
