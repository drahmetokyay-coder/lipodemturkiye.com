# Lipödem Türkiye -- 5 İnteraktif Araç: Tasarım ve Mantık Dokümanı

**Tarih:** 24 Mayıs 2026
**Referans:** product-marketing.md, site-architecture-output.md, copywriting-output.md, marketing-psychology-output.md, react-best-practices-output.md, pricing-output.md, customer-research-output.md, lipedema-expert.md
**Teknoloji:** Next.js 15 (App Router) + React 19 + Zustand 5 + Tailwind CSS 4 + Vercel
**Kapsam:** 5 araç -- tam soru/input setleri, puanlama algoritmaları, sonuç senaryoları, UX akışları, React komponent yapıları, state management, analytics, SEO, mobil UX, erişilebilirlik

---

## İÇİNDEKİLER

1. [Araç 1: Semptom Testi](#araç-1-semptom-testi)
2. [Araç 2: Evre Değerlendirme Aracı](#araç-2-evre-değerlendirme-aracı)
3. [Araç 3: Klinik Bulucu](#araç-3-klinik-bulucu)
4. [Araç 4: Anti-İnflamatuar Beslenme Planlayıcı](#araç-4-anti-i̇nflamatuar-beslenme-planlayıcı)
5. [Araç 5: Tedavi Maliyet Hesaplayıcı](#araç-5-tedavi-maliyet-hesaplayıcı)
6. [Ortak Altyapı](#ortak-altyapı)

---
---

## ARAÇ 1: SEMPTOM TESTİ

**URL:** `/araclar/semptom-testi`
**Erişim:** Ücretsiz (Free tier)
**Hedef:** Lipödem şüphesi olan kadınlara hızlı ön değerlendirme sunmak, doktora gitme kararını desteklemek, lead capture yapmak.

---

### 1.1 Tam Soru Seti (12 Soru)

Her soru 3 seçenekli (az/orta/çok veya evet/kısmen/hayır). Her seçeneğe puan atanır.

#### Soru 1: Orantısız Yağ Birikimi
**Metin:** Bacaklarınızda (kalça, uyluk, diz veya baldır bölgesinde) üst bedeninize göre orantısız bir kalınlık fark ediyor musunuz?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, belirgin şekilde orantısız | 4 |
| B | Biraz orantısız gibi | 2 |
| C | Hayır, vücudum genel olarak orantılı | 0 |

**Klinik dayanak:** Disproportionate fat = temel tanı kriteri (Delphi 2025, %89.6 uzlaşı)

#### Soru 2: Diyete Direnç
**Metin:** Diyet yaptığınızda üst bedeniniz zayıflarken bacaklarınız incelmeden mi kalıyor?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, bacaklarım hiç incelmiyor | 4 |
| B | Kısmen -- çok az inceliyor | 2 |
| C | Hayır, bacaklarım da inceliyor | 0 |

**Klinik dayanak:** Wold kriterleri #4: "Diyet ve kilo vermeye yanıtsız"

#### Soru 3: Ağrı ve Hassasiyet
**Metin:** Bacaklarınıza dokunulduğunda veya basınç uygulandığında ağrı veya hassasiyet hissediyor musunuz?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, belirgin ağrı veya hassasiyet var | 4 |
| B | Bazen hassasiyet hissediyorum | 2 |
| C | Hayır, ağrı veya hassasiyet yok | 0 |

**Klinik dayanak:** Ağrı = anahtar semptom (2024 Alman S2k Kılavuzu paradigma değişimi)

#### Soru 4: Kolay Morarma
**Metin:** Bacaklarınızda açıklayamadığınız, kolayca oluşan morarmalar fark ediyor musunuz?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, sık sık ve kolayca morarıyorum | 4 |
| B | Bazen fark ediyorum | 2 |
| C | Hayır, olağan dışı morarma yok | 0 |

**Klinik dayanak:** Easy bruising without trauma recall (%94 Delphi uzlaşısı)

#### Soru 5: Akşam Şişliği
**Metin:** Gün sonunda (özellikle akşam saatlerinde) bacaklarınızda ağırlık hissi, şişkinlik veya gerginlik oluyor mu?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, neredeyse her gün | 3 |
| B | Bazen, özellikle uzun süre ayakta kaldığımda | 1 |
| C | Hayır, böyle bir şikayetim yok | 0 |

**Klinik dayanak:** Ağırlık ve şişlik hissi lipödemin yaygın semptomu

#### Soru 6: Nodül / Boncuklanma
**Metin:** Bacaklarınızda cilt altında boncuk, düğüm veya nodül gibi sert yapılar hissediyor musunuz?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, belirgin şekilde hissediyorum | 4 |
| B | Biraz var gibi | 2 |
| C | Hayır, hissetmiyorum | 0 |

**Klinik dayanak:** Palpable nodules = Evre 1+ (Alman S2k), fibroz işareti

#### Soru 7: Bilateral Simetri
**Metin:** Bacaklarınızdaki kalınlaşma iki taraflı ve simetrik mi? (Yani her iki bacağınızda da benzer şekilde mi?)
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, her iki bacağım da benzer şekilde kalın | 4 |
| B | Bir bacağım diğerinden biraz farklı | 1 |
| C | Tek taraflı -- sadece bir bacağımda var | 0 |

**Klinik dayanak:** Bilateral symmetric involvement (%100 Delphi uzlaşısı). Tek taraflı = lenfödem şüphesi.

#### Soru 8: Ayakların Korunması (Cuff Sign)
**Metin:** Ayaklarınız bacaklarınıza göre normal boyutta mı kalıyor? (Bilekte keskin bir sınır var mı?)
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, ayaklarım normal ama bacaklarım kalın -- bilekte belirgin bir fark var | 4 |
| B | Tam emin değilim | 1 |
| C | Hayır, ayaklarım da şiş | 0 |

**Klinik dayanak:** "Cuff sign" = lipödem patognomonik bulgusu. Ayaklar tutulursa lenfödem düşünülür.

#### Soru 9: Aile Öyküsü
**Metin:** Ailenizde (anne, büyükanne, teyze, kız kardeş) benzer bacak yapısına sahip kadınlar var mı?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, en az bir kadın akrabamda benzer durum var | 3 |
| B | Emin değilim | 1 |
| C | Hayır, ailemde böyle bir durum yok | 0 |

**Klinik dayanak:** Aile öyküsü %50-64 hastada pozitif

#### Soru 10: Hormonal Tetik
**Metin:** Bu belirtiler hangi dönemde başladı veya belirginleşti?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Ergenlik döneminde | 3 |
| B | Hamilelik veya doğum sonrası | 3 |
| C | Doğum kontrolü kullanmaya başladıktan sonra | 2 |
| D | Menopoz döneminde | 2 |
| E | Hatırlamıyorum / başka bir dönemde | 1 |

**Klinik dayanak:** Hormonal tetikleyiciler (%94+ Delphi uzlaşısı). Ergenlik ve hamilelik en yaygın.
**Not:** Bu soruda 5 seçenek var ama tek seçim. Puan sabit, E dahil.

#### Soru 11: Pitting Testi (Baskı İzi)
**Metin:** Parmağınızla bacağınıza bastığınızda iz (çukur) kalıyor mu?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Hayır, iz kalmıyor | 3 |
| B | Bazen hafif iz kalıyor | 1 |
| C | Evet, belirgin çukurlaşma oluyor | 0 |

**Klinik dayanak:** Nonpitting edema = lipödem. Pitting edema = lenfödem veya venöz yetmezlik. TERS puanlama -- iz kalmaması lipödemi destekler.

#### Soru 12: Sıcak Hassasiyeti
**Metin:** Sıcak havalarda bacaklarınızdaki şişlik ve rahatsızlık belirgin şekilde artıyor mu?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, sıcakta çok kötüleşiyor | 3 |
| B | Biraz artıyor | 1 |
| C | Hayır, sıcaktan etkilenmiyorum | 0 |

**Klinik dayanak:** Sıcak intoleransı lipödemde yaygın, mikroanjiyopati ile ilişkili

---

### 1.2 Puanlama Algoritması

```
TOPLAM PUAN HESAPLAMA:
========================================

maksimum_puan = 4+4+4+4+3+4+4+4+3+3+3+3 = 43

toplam_skor = SUM(soru_1..soru_12)

RİSK SEVİYELERİ:
├── Düşük Risk:  0 -- 14 puan  (<%33 oran)
├── Orta Risk:  15 -- 28 puan  (%35-%65 oran)
└── Yüksek Risk: 29 -- 43 puan (>%67 oran)

PSEUDOCODE:
function calculateRisk(answers: Answer[]): RiskLevel {
    let totalScore = 0
    
    for each answer in answers {
        totalScore += answer.score
    }
    
    // Ek ağırlıklandırma: "Altın üçgen" bonus
    // Soru 1 (orantısızlık) + Soru 2 (diyete direnç) + Soru 7 (simetri)
    // Bu üçü birlikte yüksekse, lipödem olasılığı belirgin artar
    goldenTriangle = answers[0].score + answers[1].score + answers[6].score
    if goldenTriangle >= 10 {
        totalScore += 2  // Bonus puan
    }
    
    // Negatif gösterge: Tek taraflı tutulum (Soru 7 = C)
    // Bu lenfödem/venöz yetmezlik işaretçisi, lipödemi zayıflatır
    if answers[6].option === 'C' {
        totalScore = max(totalScore - 3, 0)
    }
    
    // Negatif gösterge: Belirgin pitting (Soru 11 = C)
    // Pitting edema lenfödem/venöz yetmezlik göstergesi
    if answers[10].option === 'C' {
        totalScore = max(totalScore - 2, 0)
    }
    
    if totalScore <= 14 {
        return 'LOW_RISK'
    } else if totalScore <= 28 {
        return 'MODERATE_RISK'
    } else {
        return 'HIGH_RISK'
    }
}

// Yüzde hesaplama (görsel gösterge için)
function calculatePercentage(totalScore: number): number {
    return Math.round((totalScore / 45) * 100)
    // 45 = 43 maks + 2 bonus
}
```

**Ağırlıklandırma gerekçesi:**
- Soru 1, 2, 3, 4, 6, 7, 8: En yüksek (4 puan) -- bunlar Delphi/Wold tanı kriterleriyle doğrudan eşleşir
- Soru 5, 9, 10, 11, 12: Destekleyici (3 puan) -- tanıyı güçlendirir ama tek başına yeterli değil
- "Altın üçgen" bonusu: Orantısızlık + diyete direnç + bilateral simetri birlikte yüksekse lipödem çok olası
- Negatif göstergeler: Tek taraflılık ve pitting edema lipödem dışı patolojileri işaret eder

---

### 1.3 Sonuç Senaryoları (3 Seviye)

#### Sonuç A: Düşük Risk (0-14 puan)

**Başlık:** Şu an endişelenecek bir durum görünmüyor
**İkon:** Yeşil kalkan / onay işareti
**Renk:** Yeşil tonu (#16a34a)

**Açıklama:** Verdiğiniz yanıtlara göre belirtileriniz lipödem ile güçlü bir uyum göstermiyor. Ancak bu, kesin bir tanı değildir. Belirtileriniz zamanla değişebilir veya farklı bir durum söz konusu olabilir.

**Önerilen adımlar:**
1. Belirtileriniz devam eder veya artarsa, bir uzmana danışmanızı öneririz
2. Lipödem hakkında genel bilgi edinmek isterseniz: [Lipödem Nedir?]
3. Bu testi 6 ay sonra tekrar çözebilirsiniz -- belirtiler zamanla değişebilir

**CTA'lar:**
- Birincil: "Lipödem Hakkında Bilgi Edinin" -> /lipodem-nedir
- İkincil: "Testi 6 Ay Sonra Hatırlat" -> email capture (opsiyonel, zorunlu değil)

**PDF:** Düşük risk sonuçları için PDF sunulmaz (gereksiz lead friction)

---

#### Sonuç B: Orta Risk (15-28 puan)

**Başlık:** Bazı belirtileriniz lipödemi düşündürebilir
**İkon:** Sarı/turuncu uyarı üçgeni
**Renk:** Turuncu tonu (#ea580c)

**Açıklama:** Verdiğiniz yanıtlara göre bazı belirtileriniz lipödem ile uyumlu olabilir. Bu, "lipödeminiz var" anlamına gelmez -- ama bir uzman tarafından değerlendirilmeniz yararlı olabilir. Unutmayın: erken farkındalık, erken müdahale demektir.

**Önerilen adımlar:**
1. Bu sonuçları doktorunuza gösterin -- PDF olarak indirip randevunuza götürebilirsiniz
2. Lipödem konusunda deneyimli bir uzman bulun: [Klinik Bulucu]
3. Lipödem belirtileri hakkında detaylı bilgi edinin: [Lipödem Belirtileri]
4. Doktora hazırlık rehberimizi okuyun: [Doktora Hazırlık]

**CTA'lar:**
- Birincil: "Sonuçlarımı PDF Olarak İndir" -> email capture (gated)
- İkincil: "Şehrimdeki Uzmanı Bul" -> /klinikler
- Tersiyer: "WhatsApp ile Paylaş" (anonim format)

---

#### Sonuç C: Yüksek Risk (29-43 puan)

**Başlık:** Bulgularınız lipödemle uyumlu olabilir
**İkon:** Kırmızı kalp/sağlık ikonu
**Renk:** Kırmızı tonu (#dc2626)

**Açıklama:** Verdiğiniz yanıtlara göre belirtileriniz lipödemle önemli ölçüde uyumludur. Bu sonuç bir tanı değildir -- kesin tanı yalnızca lipödem konusunda deneyimli bir uzmanın muayenesiyle konulabilir. Ama bu sonuç, bir uzmana başvurmanız için güçlü bir neden.

**Empatik mesaj:** Ve şunu bilmenizi istiyoruz: **Bu sizin hatanız değil.** Yaşadıklarınızın bir adı var ve tedavi seçenekleri mevcut. Siz bu sonucu görüntüleyerek sağlığınız için çok önemli bir adım attınız.

**Önerilen adımlar:**
1. Bu sonuçları mutlaka doktorunuza gösterin -- PDF olarak indirip randevunuza götürün
2. Lipödem konusunda deneyimli bir uzman bulun: [Klinik Bulucu]
3. Lipödem hakkında kapsamlı bilgi edinin: [Lipödem Nedir?]
4. Tedavi seçeneklerinizi inceleyin: [Tedavi Rehberi]
5. Yalnız değilsiniz -- toplulukta sizi anlayan kadınlarla tanışın

**CTA'lar:**
- Birincil: "Sonuçlarımı PDF Olarak İndir" -> email capture (gated)
- İkincil: "Şehrimdeki Uzmanı Bul" -> /klinikler
- Tersiyer: "WhatsApp ile Paylaş" (anonim format)
- Dörtüncül: "Evre Değerlendirme Aracını da Deneyin" -> /araclar/evre-degerlendirme

---

### 1.4 Lead Capture Stratejisi

**Karar: Sonucu göster, PDF için email iste.**

**Gerekçe (Psikoloji):**
- Sonucu göstermeden email istemek = yüksek sürtünme, yüksek terk oranı
- Endowment effect: Sonucu gördükten sonra "sahiplenme" etkisi oluşur, PDF indirme motivasyonu artar
- Reciprocity: Ücretsiz değer verdikten sonra email isteme karşılıklılık tetikler
- LIPOCURA benchmark: Doğrudan sonuç gösteriyor, lead capture yok -> biz daha iyi yapabiliriz

**Akış:**
```
Sonuç gösterilir (ücretsiz)
    |
    v
"Bu sonuçları doktorunuza gösterebileceğiniz bir PDF rapor olarak indirin"
    |
    v
Email input + "PDF Raporu Gönder" butonu
    |
    v
PDF email'e gönderilir + sayfada indirme linki gösterilir
    |
    v
Email otomatik olarak lead listesine eklenir (KVKK onay checkbox ile)
```

**KVKK uyumu:**
- Checkbox: "Lipödem Türkiye'den bilgilendirme emaili almak istiyorum" (opsiyonel, ayrı onay)
- Privacy link: "Gizlilik politikamızı okuyun"
- İstediğiniz zaman çıkış hakkı bilgisi

---

### 1.5 PDF Çıktı İçeriği

```
┌──────────────────────────────────────────────────────────────┐
│  LIPÖDEM TÜRKİYE -- SEMPTOM DEĞERLENDİRME RAPORU           │
│  Tarih: [gg.aa.yyyy]                                         │
│  Rapor No: [UUID-8 karakter]                                 │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  SONUCUNUZ: [Risk Seviyesi]                                  │
│  Toplam Skor: [X] / 43                                       │
│  Uyum Oranı: [%X]                                            │
│                                                              │
│  DETAYLI YANITLARINIZ                                        │
│  ────────────────────                                        │
│  1. Orantısız yağ birikimi: [Seçilen cevap] ........... [X]  │
│  2. Diyete direnç: [Seçilen cevap] ................... [X]  │
│  ... (12 soru)                                               │
│                                                              │
│  LİPÖDEM TANI KRİTERLERİ (Doktor İçin)                     │
│  ────────────────────────────                                │
│  Wold et al. 5 Ana Kriter:                                   │
│  1. Bilateral simetrik alt ekstremite tutulumu               │
│  2. Non-pitting ödem                                         │
│  3. Ağrılı, hassas, kolay moraran doku                       │
│  4. Diyet/kilo vermeye yanıtsız                              │
│  5. Yaşam tarzı müdahalelerine yanıtsız                      │
│                                                              │
│  Referans: 2025 Lipedema Delphi Consensus                    │
│  (71 uzman, 19 ülke, Nature Communications)                  │
│                                                              │
│  ÖNERİLEN SONRAKI ADIMLAR                                    │
│  ────────────────────────                                    │
│  [Sonuç seviyesine göre adımlar]                             │
│                                                              │
│  SORUMLULUK REDDİ                                            │
│  ────────────────                                            │
│  Bu rapor tanı koymaz. Kesin tanı yalnızca lipödem           │
│  konusunda deneyimli bir sağlık profesyoneli tarafından      │
│  konulabilir.                                                │
│                                                              │
│  lipodemturkiye.com | Türkiye'nin ilk lipödem platformu      │
│  Klinik Bulucu: lipodemturkiye.com/klinikler                │
└──────────────────────────────────────────────────────────────┘
```

**PDF üretim teknolojisi:** `@react-pdf/renderer` (client-side) veya API route ile `puppeteer` (server-side). Önerilen: `@react-pdf/renderer` -- daha hafif, Vercel serverless uyumlu.

---

### 1.6 UX Akış Diyagramı

```
┌──────────────┐
│  Giriş Sayfası │
│  (Landing)     │
│  - H1 başlık   │
│  - Açıklama    │
│  - Disclaimer  │
│  - Sosyal kanıt│
│  [Başlat]      │
└──────┬─────────┘
       │
       v
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Soru 1/12   │────>│  Soru 2/12   │────>│  ...         │
│  İlerleme: 8%│     │  İlerleme:17%│     │              │
│              │     │              │     │              │
│  [< Geri]    │     │  [< Geri]    │     │  [< Geri]    │
│  [Sonraki >] │     │  [Sonraki >] │     │  [Sonraki >] │
└──────────────┘     └──────────────┘     └──────────────┘
       │                                         │
       │ (her adımda ilerleme barı güncellenir)   │
       │                                         │
       v                                         v
                                          ┌──────────────┐
                                          │  Soru 12/12  │
                                          │  İlerleme:   │
                                          │  100%        │
                                          │  [< Geri]    │
                                          │  [Sonucu Gör]│
                                          └──────┬───────┘
                                                 │
                                                 v
                                          ┌──────────────┐
                                          │ Hesaplama    │
                                          │ Animasyonu   │
                                          │ (1.5 sn)     │
                                          │ "Sonuçlarınız│
                                          │ hazırlanıyor"│
                                          └──────┬───────┘
                                                 │
                                                 v
                                          ┌──────────────────┐
                                          │ SONUÇ SAYFASI    │
                                          │ - Risk seviyesi  │
                                          │ - Skor / oran    │
                                          │ - Açıklama       │
                                          │ - Önerilen adımlar│
                                          │ - CTA'lar        │
                                          │                  │
                                          │ [PDF İndir]      │
                                          │  └> Email form   │
                                          │      └> PDF sent │
                                          │                  │
                                          │ [Klinik Bul]     │
                                          │ [Evre Değerlen.] │
                                          │ [Paylaş]         │
                                          └──────────────────┘
```

**Animasyon notu:** Hesaplama animasyonu 1.5 sn -- gerçek hesaplama anlık ama commitment-consistency psikolojisi için "analiz ediliyor" efekti endowment hissini güçlendirir.

---

### 1.7 React Komponent Yapısı

```
src/app/(marketing)/araclar/semptom-testi/
└── page.tsx                        # SC: SEO meta, JSON-LD, sayfa shell

src/components/tools/symptom-test/
├── symptom-wizard.tsx              # CC: Ana wizard container
├── intro-screen.tsx                # CC: Giriş ekranı (başlat butonu)
├── question-step.tsx               # CC: Tek soru gösterim komponenti
├── progress-bar.tsx                # CC: İlerleme barı
├── calculating-screen.tsx          # CC: Hesaplama animasyonu
├── result-display.tsx              # CC: Sonuç gösterimi
├── pdf-download-form.tsx           # CC: Email form + PDF tetikleme
├── pdf-report.tsx                  # CC: @react-pdf/renderer ile PDF
└── share-result.tsx                # CC: WhatsApp/sosyal paylaşım

src/stores/
└── symptom-test-store.ts           # Zustand store
```

**SC vs CC açıklama:**
- `page.tsx` = Server Component: metadata, JSON-LD, statik shell
- Tüm `/symptom-test/` altı = Client Component: interaktif wizard, state yönetimi, animasyon

---

### 1.8 State Management (Zustand Store)

```typescript
// src/stores/symptom-test-store.ts

interface Answer {
  questionId: number
  option: string        // 'A' | 'B' | 'C' | 'D' | 'E'
  score: number
  label: string         // Seçilen cevabın metni
}

type TestPhase = 'intro' | 'questions' | 'calculating' | 'result'
type RiskLevel = 'LOW_RISK' | 'MODERATE_RISK' | 'HIGH_RISK'

interface SymptomTestState {
  // Akış durumu
  phase: TestPhase
  currentQuestionIndex: number
  
  // Cevaplar
  answers: Answer[]
  
  // Sonuç
  totalScore: number | null
  riskLevel: RiskLevel | null
  percentage: number | null
  
  // Lead capture
  email: string | null
  pdfDownloaded: boolean
  
  // Aksiyonlar
  startTest: () => void
  answerQuestion: (answer: Answer) => void
  goBack: () => void
  goToQuestion: (index: number) => void
  calculateResult: () => void
  setEmail: (email: string) => void
  setPdfDownloaded: () => void
  resetTest: () => void
}

// Persist: localStorage ile son durum saklanır (tamamlanmamış test devam ettirilebilir)
// Middleware: persist (partial -- sadece answers ve currentQuestionIndex)
```

**Neden Zustand?**
- React Context'e göre re-render optimizasyonu (selector pattern)
- Komponentler arası state paylaşımı (wizard <-> result <-> PDF)
- Persist middleware ile yarım kalan test devam ettirme
- Bundle boyutu: ~1.2KB gzipped (çok hafif)

---

### 1.9 Analytics Event Listesi

| Event | Trigger | Properties |
|-------|---------|------------|
| `symptom_test_page_view` | Sayfa yüklendiğinde | `source` (referrer) |
| `symptom_test_started` | "Başlat" tıklandığında | `timestamp` |
| `symptom_test_question_answered` | Her soru cevaplandiğında | `question_id`, `answer_option`, `answer_score` |
| `symptom_test_question_back` | "Geri" tıklandığında | `from_question`, `to_question` |
| `symptom_test_abandoned` | Sayfa terk (beforeunload) | `last_question_index`, `answers_count` |
| `symptom_test_completed` | Sonuç hesaplandığında | `total_score`, `risk_level`, `percentage`, `completion_time_seconds` |
| `symptom_test_result_viewed` | Sonuç sayfası görüntülendiğinde | `risk_level` |
| `symptom_test_pdf_form_shown` | PDF email formu gösterildiğinde | `risk_level` |
| `symptom_test_email_submitted` | Email gönderildiğinde | `risk_level`, `newsletter_optin` |
| `symptom_test_pdf_downloaded` | PDF indirildiğinde | `risk_level` |
| `symptom_test_cta_clicked` | CTA tıklandığında | `cta_type` (clinic_finder, info, stage_tool, whatsapp) |
| `symptom_test_shared` | Paylaşım tıklandığında | `platform` (whatsapp, copy_link) |
| `symptom_test_retaken` | Test tekrar başlatıldığında | `previous_risk_level` |

---

### 1.10 SEO Meta Bilgileri

```typescript
// page.tsx metadata
export const metadata: Metadata = {
  title: 'Lipödem Semptom Testi: 2 Dakikada Kendinizi Değerlendirin | Lipödem Türkiye',
  description: 'Ücretsiz lipödem semptom testi ile belirtilerinizi değerlendirin. 12 soru, anonim, bilimsel temelli. Sonuçlarınızı doktorunuza gösterebileceğiniz PDF rapor alın.',
  keywords: ['lipödem testi', 'lipödem semptom testi', 'lipödem belirtileri testi', 'bacak şişliği testi', 'orantısız yağlanma testi'],
  openGraph: {
    title: 'Lipödem Semptom Testi | Lipödem Türkiye',
    description: 'Belirtileriniz lipödemle uyumlu mu? 2 dakikalık ücretsiz test ile öğrenin.',
    type: 'website',
    url: 'https://lipodemturkiye.com/araclar/semptom-testi',
  },
}

// JSON-LD: MedicalWebPage + FAQPage
// Schema type: Quiz (schema.org/Quiz -- deneysel) veya WebApplication
```

---

### 1.11 Mobil UX Notları

- **Soru gösterimi:** Tam ekran, bir soru bir ekran (dikey scroll yok)
- **Seçenek butonları:** Tam genişlik, minimum 48px yükseklik (tap target)
- **İlerleme barı:** Ekranın en üstünde, sabit (sticky)
- **Geri butonu:** Sol üstte, sürekli görünür
- **Swipe:** Sola swipe = sonraki soru (cevap seçildiyse), sağa swipe = önceki soru
- **Sonuç sayfası:** Scroll edilebilir, CTA'lar sticky bottom bar'da
- **PDF indirme:** Mobilde email gönder + indirme linki (doğrudan dosya indirme mobilde sorunlu olabilir)
- **Klavye:** Email input'unda klavye açıldığında CTA butonunun görünür kalması

---

### 1.12 Erişilebilirlik (a11y) Notları

- **Soru navigasyonu:** `role="radiogroup"` + `role="radio"` her seçenek için
- **İlerleme barı:** `role="progressbar"` + `aria-valuenow` + `aria-valuemin/max` + `aria-label="Soru X / 12"`
- **Seçili seçenek:** `aria-checked="true"` + görsel feedback (renk + ikon)
- **Geri/İleri butonları:** `aria-label="Önceki soru"` / `aria-label="Sonraki soru"`
- **Sonuç renkleri:** Yalnızca renge bağımlı değil, ikon + metin ile destekli
- **Ekran okuyucu:** Sonuç seviyesi `aria-live="polite"` ile duyurulur
- **Klavye navigasyonu:** Tab ile seçenekler arası, Enter/Space ile seçim, Arrow keys ile radio group navigasyonu
- **Focus management:** Her yeni soruda ilk seçeneğe focus taşınır
- **Motion reduced:** `prefers-reduced-motion` ile hesaplama animasyonu atlanır
- **Kontrast:** WCAG AA minimum, risk renkleri yeterli kontrasta sahip

---
---

## ARAÇ 2: EVRE DEĞERLENDİRME ARACI

**URL:** `/araclar/evre-degerlendirme`
**Erişim:** Temel değerlendirme ücretsiz, detaylı rapor Premium (Tier 1+)
**Hedef:** Tanı almış veya yüksek şüphe taşıyan hastalara hastalığın mevcut evresini tahmin etmek, tedavi yönlendirmesi yapmak.

---

### 2.1 Tam Soru Seti (10 Soru)

#### Soru 1: Cilt Yüzeyi Dokusu
**Metin:** Bacaklarınızdaki cilt yüzeyini en iyi hangisi tanımlıyor?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Pürüzsüz, düz, normal görünümlü | 1 |
| B | Hafif düzensizlikler var ama belirgin değil | 2 |
| C | Pütürlü, nodüllü (düğümlü) görünüm var | 3 |
| D | Belirgin loblar (yağ kütleleri), cilt yüzeyi çok düzensiz | 4 |

**Evre korelasyonu:** A=Evre 1, B=Evre 1.5, C=Evre 2-2.5, D=Evre 3

#### Soru 2: Cilt Altı Nodüller
**Metin:** Bacaklarınızda cilt altında elle hissedilen sert yapılar (nodüller, boncuklar) var mı?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Yok veya çok küçük, zor hissedilen | 1 |
| B | Küçük nodüller var, parmakla hissedebiliyorum | 2 |
| C | Belirgin nodüller var, bazıları büyük | 3 |
| D | Büyük, sert yağ kütleleri mevcut | 4 |

**Evre korelasyonu:** Nodül boyutu doğrudan fibroz seviyesiyle orantılı

#### Soru 3: Ağrı Seviyesi (VAS Uyarlaması)
**Metin:** Bacaklarınızdaki ağrı veya hassasiyetin şiddetini nasıl değerlendirirsiniz?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Ağrı yok veya çok hafif (1-2/10) | 1 |
| B | Orta düzey hassasiyet, bazen ağrı (3-5/10) | 2 |
| C | Belirgin ağrı, günlük aktiviteleri etkiliyor (6-7/10) | 3 |
| D | Şiddetli ağrı, hareket kısıtlılığına neden oluyor (8-10/10) | 4 |

**Klinik dayanak:** Ağrı = 2024 S2k kılavuzunda paradigma değişikliği, evrelemede morfolojiden önemli

#### Soru 4: Hareket Kısıtlılığı
**Metin:** Bacaklarınızdaki durum hareketlerinizi kısıtlıyor mu?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Hayır, rahatça hareket edebiliyorum | 1 |
| B | Uzun yürüyüşlerde zorluk hissediyorum | 2 |
| C | Merdiven çıkmak, eğilmek gibi günlük hareketlerde zorluk var | 3 |
| D | Ciddi kısıtlılık -- yardımcı cihaz veya destek gerekiyor | 4 |

#### Soru 5: Bacak Çevresi Değişimi
**Metin:** Son 2-3 yılda bacaklarınızdaki kalınlaşma nasıl değişti?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Stabil, belirgin değişim yok | 1 |
| B | Yavaş ve hafif artış | 2 |
| C | Belirgin artış, kıyafetlerim olmamaya başladı | 3 |
| D | Hızlı ve belirgin artış | 4 |

#### Soru 6: Ödem Durumu
**Metin:** Bacaklarınızda gün sonunda ödem (şişlik) oluşuyor mu?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Nadiren veya hiç | 1 |
| B | Bazen akşamları hafif şişlik | 2 |
| C | Hemen her gün belirgin şişlik, sabah iniyor | 3 |
| D | Sürekli şişlik, sabahları da devam ediyor | 4 |

**Evre korelasyonu:** D seçeneği = lipo-lenfödem (Evre 4) belirtisi

#### Soru 7: Tutulan Bölgeler
**Metin:** Vücudunuzda hangi bölgeler etkilenmiş durumda? (Birden fazla seçebilirsiniz)
**Seçenekler (çoklu seçim):**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Kalça ve üst bacak | 1 |
| B | Diz bölgesi (iç diz yağ yastıkları dahil) | 1 |
| C | Baldır | 1 |
| D | Üst kollar | 1 |
| E | Bilekte "manşet" belirtisi (keskin sınır) | 1 |

**Not:** Toplam puan = seçilen seçenek sayısı (1-5). Daha fazla bölge = daha yaygın tutulum.

#### Soru 8: Stemmer Belirtisi (Ayak Testi)
**Metin:** Ayak parmaklarınızın üst kısmındaki cildi iki parmağınızla kıstırmayı deneyin. Cildi kolayca kaldırabiliyor musunuz?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Evet, cilt kolayca kalkıyor (normal) | 1 |
| B | Biraz zor ama kaldırabiliyorum | 2 |
| C | Hayır, cilt kalınlaşmış, zor kaldırılıyor | 4 |

**Klinik dayanak:** Pozitif Stemmer belirtisi = lenfödem komponenti = Evre 4 göstergesi (%95.5 Delphi uzlaşısı)

#### Soru 9: Cilt Enfeksiyonları
**Metin:** Bacaklarınızda tekrarlayan cilt enfeksiyonları (selülit/erizipel) oluyor mu?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Hayır, hiç olmadı | 0 |
| B | Nadiren (yılda 1-2 kez) | 2 |
| C | Sık sık tekrarlıyor (yılda 3+) | 4 |

**Evre korelasyonu:** Tekrarlayan enfeksiyonlar = ileri evre + lenfödem komplikasyonu

#### Soru 10: Psikolojik Etki
**Metin:** Bacaklarınızdaki durum günlük yaşamınızı ve ruh halinizi ne kadar etkiliyor?
**Seçenekler:**
| Seçenek | Metin | Puan |
|---------|-------|------|
| A | Çok az etkiliyor, kıyafet seçiminde bazen zorluk | 1 |
| B | Orta düzeyde etkiliyor, bazı sosyal aktivitelerden kaçınıyorum | 2 |
| C | Ciddi etkiliyor, depresif hissediyorum, sosyal hayatım kısıtlanıyor | 3 |
| D | Hayatımın her alanını etkiliyor, profesyonel destek alıyorum/almam gerekiyor | 4 |

**Klinik dayanak:** QoL skoru evre ilerlemesiyle orantılı (%31-59 depresyon prevalansı)

---

### 2.2 Puanlama Algoritması

```
EVRE HESAPLAMA ALGORİTMASI:
========================================

maksimum_puan = 4+4+4+4+4+4+5+4+4+4 = 41

PSEUDOCODE:
function calculateStage(answers: StageAnswer[]): StageResult {
    let totalScore = 0
    let morphologyScore = 0  // Soru 1, 2 (cilt doku + nodül)
    let symptomScore = 0     // Soru 3, 4, 5 (ağrı, hareket, ilerleme)
    let complicationScore = 0 // Soru 6, 8, 9 (ödem, stemmer, enfeksiyon)
    
    for each answer in answers {
        totalScore += answer.score
    }
    
    // Alt skor hesaplama
    morphologyScore = answers[0].score + answers[1].score  // max 8
    symptomScore = answers[2].score + answers[3].score + answers[4].score  // max 12
    complicationScore = answers[5].score + answers[7].score + answers[8].score  // max 12
    
    // Soru 7 (bölge sayısı) ek ağırlık
    regionCount = answers[6].selectedOptions.length
    
    // Evre 4 tetikleyiciler (öncelikli kontrol)
    if answers[7].option === 'C'        // Pozitif Stemmer
       OR answers[5].option === 'D'     // Sürekli ödem
       OR answers[8].option === 'C' {   // Sık enfeksiyon
        return {
            stage: 4,
            subStage: 'lipo-lymphedema',
            note: 'Lenfödem komplikasyonu belirtileri mevcut'
        }
    }
    
    // Ana evre belirleme (morfoloji + semptom ağırlıklı)
    combinedScore = morphologyScore + symptomScore  // max 20
    
    if combinedScore <= 5 {
        stage = 1
    } else if combinedScore <= 8 {
        stage = 1.5
    } else if combinedScore <= 12 {
        stage = 2
    } else if combinedScore <= 15 {
        stage = 2.5
    } else {
        stage = 3
    }
    
    return {
        stage: stage,
        totalScore: totalScore,
        morphologyScore: morphologyScore,
        symptomScore: symptomScore,
        complicationScore: complicationScore,
        regionCount: regionCount,
        psychologicalImpact: answers[9].score
    }
}
```

---

### 2.3 Sonuç Senaryoları (6 Evre)

#### Evre 1 (Erken)
**Başlık:** Erken Evre Lipödem (Evre 1)
**Görsel:** Evre göstergesi barında 1. pozisyon vurgulu
**Açıklama:** Cilt yüzeyiniz genel olarak düz, küçük nodüller palpe edilebilir. Bu evrede konservatif tedavi yöntemleri çok etkili olabilir.
**Tedavi yönlendirmesi:**
- Kompresyon tedavisi
- Anti-inflamatuar beslenme
- Düzenli egzersiz (su içi özellikle)
- Manuel lenfatik drenaj (MLD)
**CTA:** "Beslenme Planınızı Oluşturun" + "Egzersiz Rehberi"

#### Evre 1.5 (Geçiş)
**Başlık:** Geçiş Evresi (Evre 1.5)
**Açıklama:** Cilt yüzeyinde hafif düzensizlikler başlamış. Bu ara evre, erken müdahalenin önemli olduğu bir dönemdir.
**Tedavi yönlendirmesi:** Evre 1 + yoğunlaştırılmış kompresyon + diyetisyen desteği
**CTA:** "Klinik Bulucu" + "Kompresyon Rehberi"

#### Evre 2 (Orta)
**Başlık:** Orta Evre Lipödem (Evre 2)
**Açıklama:** Nodüler yağ dokusu değişiklikleri mevcut, cilt yüzeyi düzensiz. İnterstisyel fibroz başlamış olabilir. Konservatif tedavi etkili ama cerrahi seçenekler de değerlendirilebilir.
**Tedavi yönlendirmesi:**
- Yoğunlaştırılmış konservatif tedavi (CDT)
- Cerrahi değerlendirme (liposuction)
- Psikolojik destek önerisi
**CTA:** "Konservatif vs Cerrahi Karşılaştırma" + "Maliyet Hesaplayıcı"

#### Evre 2.5 (Geçiş)
**Başlık:** İleri Geçiş Evresi (Evre 2.5)
**Açıklama:** Lobülasyon ilerliyor, büyük yağ kütleleri oluşmaya başlıyor. Bu dönemde cerrahi tedavi değerlendirmesi önerilir.
**CTA:** "Klinik Bulucu" + "Ameliyat Hazırlık Rehberi"

#### Evre 3 (İleri)
**Başlık:** İleri Evre Lipödem (Evre 3)
**Açıklama:** Diz ve uyluk kontur deformitesi mevcut, nodüler yağ büyümesi belirgin, yoğun fibrotik matris oluşmuş. Bu evrede genellikle cerrahi tedavi (liposuction) değerlendirilir.
**Tedavi yönlendirmesi:**
- Cerrahi tedavi değerlendirmesi (Vaser/Tumescent/WAL)
- Kompresyon tedavisi (cerrahi öncesi ve sonrası)
- Fizyoterapi
- Psikolojik destek
**CTA:** "Ameliyat Rehberi" + "Klinik Bulucu" + "Maliyet Hesaplayıcı"

#### Evre 4 (Lipo-Lenfödem)
**Başlık:** Lipo-Lenfödem (Evre 4)
**Uyarı kutusu (kırmızı):** Sonuçlarınız lenfödem komplikasyonu belirtileri içeriyor. Bu durumda uzman değerlendirmesi acildir.
**Açıklama:** İleri evre lipödemde lenfatik sistem de etkilenmiş görünüyor (lipo-lenfödem). Bu durum multidisipliner yaklaşım gerektirir.
**Tedavi yönlendirmesi:**
- Acil uzman değerlendirmesi
- Kompleks dekongestif terapi (CDT)
- Kompresyon tedavisi (yüksek basınç)
- Cerrahi planlama (dikkatli değerlendirme ile)
- Dermatolog takibi (enfeksiyon riski)
**CTA:** "Klinik Bulucu" (öncelikli) + "SGK Rehberi"

---

### 2.4 Evre Göstergesi (İnteraktif Görsel)

```
EVRE GÖSTERGESİ TASARIMI:
========================================

Yatay bar, 6 segment, aktif evre vurgulu:

  ┌────┬────┬────┬────┬────┬────┐
  │ E1 │E1.5│ E2 │E2.5│ E3 │ E4 │
  │    │    │    │    │ ██ │    │   <-- Aktif evre (E3 örneği)
  └────┴────┴────┴────┴────┴────┘
  Erken          Orta          İleri

Animasyon: Sonuç gösterilirken bar soldan sağa dolarak aktif evreye kadar ilerler.
Renk geçişi: Yeşil (#22c55e) -> Sarı (#eab308) -> Turuncu (#f97316) -> Kırmızı (#ef4444)

Her evre segmentine tıklanabilir -- detay açıklaması tooltip/modal ile gösterilir.

ALTERNATİF (Dikey Vücut Silüeti):
Kadın silüeti üzerinde tutulan bölgeler vurgulanır.
Her bölge farklı renk yoğunluğuyla gösterilir.
Bu görsel Soru 7 (bölge) cevaplarıyla senkronize olur.
```

---

### 2.5 Disclaimer

Her sonuç sayfasının altında belirgin kutu içinde:

> **Dikkat:** Bu araç klinik evreleme değildir. Lipödem evrelemesi yalnızca lipödem konusunda deneyimli bir sağlık profesyoneli tarafından fiziksel muayene ile belirlenebilir. Bu araç, evre hakkında genel bir fikir edinmenize yardımcı olmak amacıyla tasarlanmıştır. Tedavi kararlarınızı bu sonuca değil, uzman değerlendirmesine dayandırınız.

---

### 2.6 UX Akış Diyagramı

```
┌──────────────┐
│ Giriş Ekranı │
│ - H1 başlık  │
│ - "Bu araç   │
│   lipödemin  │
│   hangi      │
│   evresinde  │
│   olabilece- │
│   ğinizi     │
│   tahmin     │
│   eder"      │
│ - Disclaimer │
│ [Başlat]     │
└──────┬───────┘
       │
       v
┌──────────────┐     ┌──────────────┐
│ Soru 1/10    │────>│ Soru 2/10    │──── ... ────>
│ Cilt dokusu  │     │ Nodüller     │
│              │     │              │
│ 4 seçenek    │     │ 4 seçenek    │
│ (resimli)    │     │              │
└──────────────┘     └──────────────┘

     ┌──────────────┐
     │ Soru 7/10    │  <-- Çoklu seçim (checkbox)
     │ Bölgeler     │
     │ ☐ Kalça      │
     │ ☐ Diz        │
     │ ☐ Baldır     │
     │ ☐ Kollar     │
     │ ☐ Bilek      │
     └──────┬───────┘
            │
            v (devam)
     ┌──────────────┐
     │ Soru 10/10   │
     │ [Değerlendir]│
     └──────┬───────┘
            │
            v
     ┌──────────────────────────┐
     │ SONUÇ SAYFASI            │
     │                          │
     │ ┌──────────────────────┐ │
     │ │ EVRE GÖSTERGESİ     │ │
     │ │ [Animasyonlu bar]    │ │
     │ │                      │ │
     │ │ EVRENIZ: 2           │ │
     │ └──────────────────────┘ │
     │                          │
     │ Açıklama + tedavi önerisi│
     │ Alt skorlar:             │
     │ - Morfoloji: X/8         │
     │ - Semptom: X/12          │
     │ - Komplikasyon: X/12     │
     │ - Bölge sayısı: X/5     │
     │                          │
     │ Disclaimer kutusu        │
     │                          │
     │ [Detaylı Rapor - Premium]│
     │ [Klinik Bul]             │
     │ [Tedavi Seçenekleri]     │
     └──────────────────────────┘
```

---

### 2.7 React Komponent Yapısı

```
src/app/(marketing)/araclar/evre-degerlendirme/
└── page.tsx                           # SC: metadata, JSON-LD

src/components/tools/stage-assessment/
├── stage-wizard.tsx                   # CC: Ana wizard
├── stage-question.tsx                 # CC: Soru (radio veya checkbox)
├── stage-result.tsx                   # CC: Sonuç ekranı
├── stage-gauge.tsx                    # CC: Evre göstergesi (animasyonlu bar)
├── body-map.tsx                       # CC: Vücut silüeti görsel (Soru 7 ile senkronize)
└── stage-detail-modal.tsx             # CC: Evre detay modal

src/stores/
└── stage-assessment-store.ts          # Zustand store (benzer yapı, SymptomTest'e)
```

---

### 2.8 State Management

```typescript
interface StageAssessmentState {
  phase: 'intro' | 'questions' | 'calculating' | 'result'
  currentQuestionIndex: number
  answers: StageAnswer[]
  
  // Sonuç
  estimatedStage: number | null       // 1, 1.5, 2, 2.5, 3, 4
  totalScore: number | null
  morphologyScore: number | null
  symptomScore: number | null
  complicationScore: number | null
  regionCount: number | null
  psychologicalImpact: number | null
  
  // Aksiyonlar
  startAssessment: () => void
  answerQuestion: (answer: StageAnswer) => void
  goBack: () => void
  calculateStage: () => void
  resetAssessment: () => void
}
```

---

### 2.9 Analytics Event Listesi

| Event | Trigger | Properties |
|-------|---------|------------|
| `stage_assessment_started` | Başlat tıklandığında | `source` |
| `stage_assessment_question_answered` | Her soru cevaplandiğında | `question_id`, `answer` |
| `stage_assessment_completed` | Sonuç hesaplandığında | `estimated_stage`, `total_score`, `morphology_score`, `symptom_score`, `complication_score`, `region_count` |
| `stage_assessment_detail_viewed` | Evre detay modal açıldığında | `viewed_stage` |
| `stage_assessment_cta_clicked` | CTA tıklandığında | `cta_type`, `estimated_stage` |
| `stage_assessment_premium_prompt` | Premium rapor CTA gösterildiğinde | `estimated_stage` |
| `stage_assessment_abandoned` | Sayfa terk | `last_question` |

---

### 2.10 SEO Meta Bilgileri

```typescript
export const metadata: Metadata = {
  title: 'Lipödem Evre Değerlendirme: Hangi Evredesiniz? | Lipödem Türkiye',
  description: 'Lipödem evre değerlendirme aracı ile hastalığınızın hangi evrede olabileceğini öğrenin. Evre 1-4 arasında kişiselleştirilmiş tedavi önerileri alın. Ücretsiz, 3 dakika.',
  keywords: ['lipödem evresi', 'lipödem hangi evredeyim', 'lipödem evre testi', 'lipödem evre 1 2 3 4'],
}
```

---

### 2.11 Mobil UX Notları

- **Soru 1 (cilt dokusu):** Referans fotoğraflar küçük thumbnail, tıklayınca büyüme
- **Soru 7 (çoklu seçim):** Checkbox listesi, tüm seçenekler görünür, scroll yok
- **Evre göstergesi:** Mobilde yatay bar tam genişlik, segmentler eşit
- **Vücut silüeti:** Mobilde gizli, sonuç sayfasında opsiyonel toggle

---

### 2.12 Erişilebilirlik (a11y)

- Soru 7 (çoklu seçim): `role="group"` + her checkbox `role="checkbox"`
- Evre göstergesi: `aria-label="Tahmini evre: 2"` + `role="img"`
- Renk bağımsız: Her evre numarayla da gösterilir (yalnızca renk değil)
- Disclaimer: `role="alert"` veya `role="note"` ile işaretli

---
---

## ARAÇ 3: KLİNİK BULUCU

**URL:** `/araclar/klinik-bulucu` (ana sayfa: `/klinikler`)
**Erişim:** Ücretsiz (Free tier)
**Hedef:** Hastaları lipödem konusunda deneyimli klinik/doktorlara yönlendirmek. Lead tracking ile klinik komisyon modelini desteklemek.

---

### 3.1 Veri Modeli

```typescript
// src/types/clinic.ts

interface Clinic {
  id: string
  name: string                         // "Dr. Yener Demirtaş Kliniği"
  slug: string                         // "dr-yener-demirtas-klinigi"
  
  // Konum
  city: string                         // "İstanbul"
  citySlug: string                     // "istanbul"
  district: string                     // "Şişli"
  address: string                      // Tam adres
  geo: {
    lat: number                        // 41.0602
    lng: number                        // 28.9877
  }
  
  // İletişim
  phone: string                        // "+90 212 xxx xx xx"
  website?: string
  email?: string
  appointmentUrl?: string              // Online randevu linki
  whatsapp?: string                    // WhatsApp numarası
  
  // Doktorlar
  doctors: DoctorSummary[]
  
  // Tedavi bilgileri
  treatments: TreatmentType[]          // ['vaser', 'tumescent', 'wal', 'mld', 'kompresyon', 'cdt']
  specializations: string[]           // Ek uzmanlıklar
  
  // Fiyat
  priceRange?: {
    min: number                        // 55000
    max: number                        // 180000
    currency: 'TRY'
    note?: string                      // "Bölge sayısına göre değişir"
    lastUpdated: string                // ISO tarih
  }
  
  // Değerlendirme
  rating?: number                      // 4.7
  reviewCount?: number                 // 23
  
  // Medya
  photos: string[]                     // Klinik fotoğrafları
  logo?: string
  
  // Durum
  verified: boolean                    // Platform tarafından doğrulanmış mı
  featured: boolean                    // Öne çıkan (premium klinik listesi)
  active: boolean
  lastUpdated: string                  // ISO tarih
  createdAt: string
}

type TreatmentType = 
  | 'vaser'           // VASER liposuction
  | 'tumescent'       // Tumescent liposuction
  | 'wal'             // Water-Assisted Liposuction
  | 'mld'             // Manuel Lenfatik Drenaj
  | 'kompresyon'      // Kompresyon tedavisi
  | 'cdt'             // Kompleks Dekongestif Terapi
  | 'pnomatik'        // Pnömatik kompresyon
  | 'fizyoterapi'     // Genel fizyoterapi
  | 'beslenme'        // Beslenme danışmanlığı
  | 'psikoloji'       // Psikolojik destek

interface DoctorSummary {
  id: string
  name: string                         // "Op. Dr. Yener Demirtaş"
  title: string                        // "Op. Dr."
  specialty: string                    // "Plastik ve Rekonstrüktif Cerrahi"
  slug: string
  photo?: string
  lipedemaExperience: number           // Yıl
}

interface ClinicFilter {
  city?: string
  district?: string
  treatments?: TreatmentType[]
  priceMin?: number
  priceMax?: number
  sortBy: 'distance' | 'price_asc' | 'price_desc' | 'rating' | 'name'
  verified?: boolean
}
```

---

### 3.2 Filtre Yapısı

```
FİLTRE BARI:
========================================

┌────────────────────────────────────────────────────────────────┐
│ Şehir: [İstanbul ▼]  İlçe: [Tümü ▼]  Tedavi: [Tümü ▼]       │
│ Fiyat: [───●────────] 0-250.000 TL    Sırala: [Puana Göre ▼]  │
│                                                                │
│ [✓ Sadece doğrulanmış]     Sonuç: 12 klinik bulundu           │
└────────────────────────────────────────────────────────────────┘

FİLTRE SEÇENEKLERİ:

Şehir dropdown: 81 il (alfabetik), en üstte popüler 5 il
İlçe dropdown: Seçilen şehre göre dinamik
Tedavi dropdown (çoklu seçim):
  ☐ VASER Liposuction
  ☐ Tumescent Liposuction
  ☐ WAL (Su Destekli)
  ☐ Manuel Lenfatik Drenaj (MLD)
  ☐ Kompresyon Tedavisi
  ☐ Kompleks Dekongestif Terapi (CDT)
  ☐ Fizyoterapi
  ☐ Beslenme Danışmanlığı
Fiyat: Range slider (0 - 250.000 TL, 5.000 TL adımlarla)
Sıralama: Puana göre | Fiyata göre (düşük) | Fiyata göre (yüksek) | İsme göre
Doğrulanmış: Checkbox filtresi
```

---

### 3.3 Harita Entegrasyonu

**Tercih:** Leaflet + OpenStreetMap (ücretsiz, GDPR uyumlu)
**Alternatif:** Google Maps (daha tanıdık ama maliyetli)

```
HARİTA + LİSTE GÖRÜNÜMÜ (Desktop):
========================================

┌────────────────────────┬─────────────────────────────────────┐
│                        │                                     │
│    ┌─────────────────┐ │  ┌─────────────────────────────────┐│
│    │                 │ │  │ KLİNİK KART                    ││
│    │   Harita         │ │  │ ─────────────                   ││
│    │                 │ │  │ [Logo] Dr. Yener Demirtaş Kliniği││
│    │   📍 📍 📍       │ │  │ ★ 4.7 (23 yorum) ✓ Doğrulanmış ││
│    │      📍         │ │  │                                  ││
│    │                 │ │  │ 📍 Şişli, İstanbul               ││
│    │                 │ │  │ 🏥 VASER, Tumescent, MLD         ││
│    │                 │ │  │ 💰 55.000 - 180.000 TL           ││
│    │                 │ │  │                                  ││
│    │                 │ │  │ Doktorlar: Op. Dr. Y.D., Uzm.   ││
│    │                 │ │  │                                  ││
│    │                 │ │  │ [Detay Gör] [📞 Ara] [💬 WhatsApp]││
│    └─────────────────┘ │  └─────────────────────────────────┘│
│                        │                                     │
│ [Konumumu Bul]         │  ┌─────────────────────────────────┐│
│                        │  │ KLİNİK KART 2                  ││
│                        │  │ ...                             ││
│                        │  └─────────────────────────────────┘│
└────────────────────────┴─────────────────────────────────────┘
```

**Harita özellikleri:**
- Pin cluster: Yakın klinikler gruplanır
- Pin tıklama: Mini bilgi penceresi (isim, puan, tedaviler, CTA)
- Harita-liste senkronizasyonu: Listede hover -> haritada pin vurgulama, pin tıklama -> listede scroll
- "Konumumu Bul": Geolocation API ile kullanıcı konumu (izin ile)

---

### 3.4 Klinik Detay Kartı (Expanded)

```
KLİNİK DETAY MODAL / SAYFASI:
========================================

┌─────────────────────────────────────────────────────────────┐
│ [< Geri]                                                     │
│                                                              │
│ ┌────────────────────────────────────────────────────────┐   │
│ │ [Klinik Fotoğrafları Carousel]                         │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                              │
│ Dr. Yener Demirtaş Kliniği        ✓ Doğrulanmış             │
│ ★ 4.7 (23 yorum)                                            │
│                                                              │
│ ┌── TEDAVİLER ──────────────────────────────────────────┐   │
│ │ ✓ VASER Liposuction  ✓ Tumescent  ✓ MLD              │   │
│ │ ✓ Kompresyon  ✓ CDT  ✓ Beslenme Danışmanlığı         │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌── DOKTORLAR ──────────────────────────────────────────┐   │
│ │ [Foto] Op. Dr. Yener Demirtaş                        │   │
│ │        Plastik ve Rekonstrüktif Cerrahi               │   │
│ │        12 yıl lipödem deneyimi                        │   │
│ │        [Profili Gör]                                   │   │
│ │                                                        │   │
│ │ [Foto] Uzm. Fzt. Ayşe Kaya                           │   │
│ │        MLD ve CDT uzmanı                              │   │
│ │        [Profili Gör]                                   │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌── FİYAT BİLGİSİ ─────────────────────────────────────┐   │
│ │ Fiyat aralığı: 55.000 - 180.000 TL                   │   │
│ │ (Bölge sayısına göre değişir)                         │   │
│ │ Son güncelleme: Mayıs 2026                            │   │
│ │                                                        │   │
│ │ 💡 Maliyet hesaplayıcımızda detaylı tahmin alın       │   │
│ │    [Maliyet Hesaplayıcı]                              │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌── KONUM ──────────────────────────────────────────────┐   │
│ │ [Mini harita]                                         │   │
│ │ Adres: Halaskargazi Cad. No:XX, Şişli, İstanbul      │   │
│ │ [Yol Tarifi Al - Google Maps]                         │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                              │
│ ┌── İLETİŞİM ──────────────────────────────────────────┐   │
│ │ [📞 Ara: 0212 xxx xx xx]  [💬 WhatsApp]  [🌐 Website] │   │
│ │ [📅 Online Randevu Al]                                │   │
│ └────────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

### 3.5 Boş Sonuç Senaryosu

```
Şehrinizde henüz kayıtlı klinik bulunmuyor.

Ama yakınızda seçenekler var:

┌─────────────────────────────────────────┐
│ En yakın klinikler:                     │
│                                          │
│ 📍 İstanbul (120 km) -- 8 klinik        │
│ 📍 Ankara (350 km) -- 3 klinik          │
│ 📍 İzmir (400 km) -- 2 klinik           │
│                                          │
│ [İstanbul Kliniklerini Gör]             │
└─────────────────────────────────────────┘

Ayrıca:
- Online danışmanlık sunan klinikleri görmek ister misiniz? [Online Danışmanlık Filtresi]
- Şehrinize klinik eklenmesini ister misiniz? [Bildir]

💡 Kliniğinizi eklemek mi istiyorsunuz?
   [Klinik Kayıt Talebi]
```

---

### 3.6 Lead Tracking Modeli

```typescript
// Her klinik etkileşimi tracked

interface ClinicInteraction {
  clinicId: string
  eventType: 'view' | 'detail_view' | 'phone_click' | 'whatsapp_click' 
           | 'website_click' | 'appointment_click' | 'map_direction'
  timestamp: string
  source: 'search' | 'direct' | 'symptom_test_referral' | 'stage_referral' | 'cost_calculator'
  userSessionId: string  // Anonim session ID (KVKK uyumlu)
  filters?: ClinicFilter // Hangi filtrelerle bulundu
}

// Klinik dashboard metrikleri
interface ClinicDashboard {
  clinicId: string
  period: 'daily' | 'weekly' | 'monthly'
  metrics: {
    impressions: number        // Listede kaç kez gösterildi
    detailViews: number        // Detay sayfası kaç kez açıldı
    phoneClicks: number        // Telefon numarası kaç kez tıklandı
    whatsappClicks: number     // WhatsApp kaç kez tıklandı
    websiteClicks: number      // Website kaç kez tıklandı
    appointmentClicks: number  // Randevu linki kaç kez tıklandı
    mapDirectionClicks: number // Yol tarifi kaç kez istendi
    conversionRate: number     // detailViews / impressions
  }
}
```

---

### 3.7 UX Akış Diyagramı

```
┌───────────────────────┐
│ /klinikler             │
│ (Klinik Bulucu Ana)    │
│                        │
│ H1: Şehrinizdeki       │
│     Lipödem Uzmanını   │
│     Bulun              │
│                        │
│ [Filtre Barı]          │
│ [Harita] + [Liste]     │
│                        │
│ Default: Türkiye       │
│ haritası, tüm klinikler│
└──────────┬────────────┘
           │
           │ Filtre seçimi veya
           │ şehir tıklama
           v
┌───────────────────────┐
│ /klinikler/istanbul    │
│ (Şehir Sayfası)        │
│                        │
│ Filtreler (şehir       │
│ seçili, ilçe aktif)    │
│                        │
│ Harita (şehir zoom)    │
│ + Klinik kartları      │
│                        │
│ SEO içerik bloğu       │
│ (şehre özel metin)     │
└──────────┬────────────┘
           │
           │ Klinik tıklama
           v
┌───────────────────────┐
│ Klinik Detay Kartı     │
│ (Modal veya sayfa)     │
│                        │
│ Fotoğraflar, doktorlar │
│ tedaviler, fiyat,      │
│ konum, iletişim        │
│                        │
│ [Ara] [WhatsApp]       │
│ [Randevu Al]           │
│ [Yol Tarifi]           │
└───────────────────────┘
```

---

### 3.8 React Komponent Yapısı

```
src/app/(marketing)/klinikler/
├── page.tsx                           # SC: Ana klinik bulucu, SSR klinik listesi
└── [sehir]/
    └── page.tsx                       # SC: Şehir sayfası, ISR, SEO metin

src/components/clinic/
├── clinic-finder.tsx                  # CC: Ana finder (harita + liste + filtre)
├── clinic-filter-bar.tsx              # CC: Filtre barı
├── clinic-list.tsx                    # CC: Klinik kart listesi (virtualized)
├── clinic-card.tsx                    # SC/CC: Klinik özet kartı
├── clinic-detail-modal.tsx            # CC: Klinik detay modal
├── clinic-map.tsx                     # CC: Harita (dynamic import -- Leaflet ağır)
├── clinic-map-pin.tsx                 # CC: Harita pin komponenti
├── clinic-empty-state.tsx             # SC: Boş sonuç durumu
├── clinic-sort-select.tsx             # CC: Sıralama dropdown
├── doctor-card.tsx                    # SC: Doktor kartı (klinik detay içinde)
└── appointment-cta.tsx                # CC: Randevu butonu (tracking ile)

src/stores/
└── clinic-store.ts                    # Zustand: filtreler, seçili klinik, harita durumu
```

**Harita dynamic import:**
```typescript
// Leaflet ~40KB gzipped -- sayfa yüklenirken değil, tab/toggle ile lazy load
const ClinicMap = dynamic(() => import('./clinic-map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
})
```

---

### 3.9 State Management

```typescript
interface ClinicFinderState {
  // Filtreler
  filters: ClinicFilter
  
  // Veri
  clinics: Clinic[]
  filteredClinics: Clinic[]
  selectedClinic: Clinic | null
  
  // Harita
  mapCenter: { lat: number; lng: number }
  mapZoom: number
  userLocation: { lat: number; lng: number } | null
  
  // UI
  viewMode: 'list' | 'map' | 'split'
  isDetailOpen: boolean
  isLoading: boolean
  
  // Aksiyonlar
  setFilter: (key: keyof ClinicFilter, value: any) => void
  clearFilters: () => void
  selectClinic: (clinic: Clinic) => void
  closeDetail: () => void
  setViewMode: (mode: 'list' | 'map' | 'split') => void
  setUserLocation: (location: { lat: number; lng: number }) => void
  sortClinics: (by: ClinicFilter['sortBy']) => void
}
```

---

### 3.10 Analytics Event Listesi

| Event | Trigger | Properties |
|-------|---------|------------|
| `clinic_finder_page_view` | Sayfa yüklendiğinde | `city` (varsa) |
| `clinic_filter_applied` | Filtre değiştiğinde | `filter_type`, `filter_value`, `result_count` |
| `clinic_card_viewed` | Kart viewport'a girdiğinde | `clinic_id`, `position` |
| `clinic_detail_opened` | Detay açıldığında | `clinic_id`, `source` |
| `clinic_phone_clicked` | Telefon tıklandığında | `clinic_id` |
| `clinic_whatsapp_clicked` | WhatsApp tıklandığında | `clinic_id` |
| `clinic_website_clicked` | Website tıklandığında | `clinic_id` |
| `clinic_appointment_clicked` | Randevu tıklandığında | `clinic_id` |
| `clinic_direction_clicked` | Yol tarifi tıklandığında | `clinic_id` |
| `clinic_map_interaction` | Harita ile etkileşim | `action` (zoom, pan, pin_click) |
| `clinic_geolocation_used` | Konum izni verildiğinde | `city` |
| `clinic_empty_state_shown` | Sonuç boş geldiğinde | `filters` |

---

### 3.11 SEO Meta Bilgileri

```typescript
// /klinikler ana sayfa
export const metadata: Metadata = {
  title: 'Lipödem Klinik Bulucu: Şehrinizdeki Uzman Doktorlar | Lipödem Türkiye',
  description: 'Türkiye genelinde lipödem tedavisi yapan klinik ve doktorları bulun. Filtrelenebilir harita, tedavi türleri, fiyat bilgisi ve hasta yorumları ile.',
}

// /klinikler/[sehir] dinamik
export function generateMetadata({ params }): Metadata {
  return {
    title: `Lipödem Doktoru ${cityName}: Uzman Listesi (2026) | Lipödem Türkiye`,
    description: `${cityName}'da lipödem tedavisi yapan ${clinicCount} klinik ve doktor. VASER, Tumescent, MLD, CDT tedavileri. Fiyat karşılaştırması ve harita ile bulun.`,
  }
}
```

---

### 3.12 Mobil UX Notları

- **Varsayılan görünüm:** Mobilde liste öncelikli (harita gizli, toggle ile açılır)
- **Harita toggle:** Alt tarafta "Haritayı Göster" butonu, tam ekran harita overlay
- **Klinik kartı:** Compact format, swipe ile detay
- **Filtreler:** Mobilde bottom sheet olarak açılır (tam ekran filtre paneli)
- **Telefon butonu:** `<a href="tel:...">` -- direkt arama başlatır
- **WhatsApp:** `<a href="https://wa.me/...">` -- WhatsApp açar
- **Sticky bottom bar:** "📞 Ara | 💬 WhatsApp | 📍 Yol Tarifi" -- klinik detayda

---

### 3.13 Erişilebilirlik (a11y)

- Harita: `aria-label="Klinik konumları haritası"` + pin'lerde `aria-label="[Klinik adı], [Şehir]"`
- Filtreler: Her dropdown `<label>` ile eşleştirilmiş
- Klinik kartı: Tüm bilgiler `<article>` içinde, doğru heading hiyerarşisi
- Harita alternatifi: Ekran okuyucu kullanıcıları için "liste görünümünü kullan" bağlantısı
- Telefon/WhatsApp: `aria-label="[Klinik adı] için telefon ile ara"` gibi açıklayıcı label'lar

---
---

## ARAÇ 4: ANTİ-İNFLAMATUAR BESLENME PLANLAYICI

**URL:** `/araclar/beslenme-plani`
**Erişim:** 3 günlük plan ücretsiz, 7 günlük + kişiselleştirme Premium (Tier 1+)
**Hedef:** Lipödem hastalarına kişiselleştirilmiş anti-inflamatuar beslenme planı sunmak, premium dönüşüm sağlamak.

---

### 4.1 Giriş Soruları (6 Soru)

#### Soru 1: Temel Bilgiler
**Metin:** Temel bilgileriniz
**Alanlar:**
| Alan | Tip | Validasyon | Varsayılan |
|------|-----|------------|------------|
| Yaş | Sayı | 18-80 | -- |
| Boy (cm) | Sayı | 140-200 | -- |
| Kilo (kg) | Sayı | 40-200 | -- |
| Aktivite seviyesi | Select | Hareketsiz / Az hareketli / Orta / Aktif | Az hareketli |

**Not:** BMI otomatik hesaplanır ama kullanıcıya "Lipödemde BMI yanıltıcı olabilir" notu gösterilir.

#### Soru 2: Besin Alerjileri ve İntoleranslar
**Metin:** Besin alerjiniz veya intoleransınız var mı? (Birden fazla seçebilirsiniz)
**Seçenekler (çoklu seçim):**
| Seçenek | ID |
|---------|-----|
| Yok | none |
| Gluten intoleransı / Çölyak | gluten |
| Laktoz intoleransı | lactose |
| Süt proteini alerjisi | dairy |
| Yumurta alerjisi | egg |
| Fıstık / kuruyemiş alerjisi | nuts |
| Deniz ürünleri alerjisi | seafood |
| Soya alerjisi | soy |
| Diğer (belirtin) | other + text input |

#### Soru 3: Diyet Tercihi
**Metin:** Beslenme tercihiniz nedir?
**Seçenekler:**
| Seçenek | ID | Makro etki |
|---------|-----|------------|
| Herkes gibi yerim (omnivore) | omnivore | Standart |
| Vejeteryan (et yemem ama süt/yumurta yerim) | vegetarian | Protein kaynakları: süt, yumurta, baklagil |
| Vegan (hiçbir hayvansal ürün tüketmem) | vegan | Protein: baklagil, tofu, tempeh |
| Pesketaryen (balık yerim, et yemem) | pescatarian | Protein: balık, süt, yumurta |

#### Soru 4: Lipödem Evresi
**Metin:** Lipödem evrenizi biliyor musunuz? (Yaklaşık)
**Seçenekler:**
| Seçenek | Makro etki |
|---------|------------|
| Evre 1 veya 1.5 | Standart anti-inflamatuar |
| Evre 2 veya 2.5 | Daha sıkı karbonhidrat kısıtlaması |
| Evre 3 veya 4 | Ketojenik ağırlıklı + tıbbi gözetim uyarısı |
| Bilmiyorum / Tanı almadım | Genel anti-inflamatuar |

#### Soru 5: Günlük Öğün Tercihi
**Metin:** Günde kaç öğün yemek tercih edersiniz?
**Seçenekler:**
| Seçenek | Planlama etkisi |
|---------|-----------------|
| 2 öğün (intermittent fasting) | 2 ana öğün + 1 atıştırmalık |
| 3 ana öğün | Standart planlama |
| 3 ana + 2 ara öğün | 5 öğün planlama |

#### Soru 6: Bütçe Tercihi
**Metin:** Haftalık beslenme bütçeniz yaklaşık ne kadar?
**Seçenekler:**
| Seçenek | Planlama etkisi |
|---------|-----------------|
| Ekonomik (500-800 TL/hafta) | Uygun fiyatlı Türk yemekleri öncelikli |
| Orta (800-1.200 TL/hafta) | Standart seçenekler |
| Rahat (1.200+ TL/hafta) | Premium malzemeler dahil (avokado, somon vs.) |

---

### 4.2 Hesaplama Algoritması

```
BESLENME PLANI HESAPLAMA ALGORİTMASI:
========================================

PSEUDOCODE:

function generateNutritionPlan(input: UserInput): NutritionPlan {
    
    // ADIM 1: Bazal Metabolizma Hızı (BMR) -- Harris-Benedict denklemi
    bmr = 655.1 + (9.563 * kilo) + (1.850 * boy) - (4.676 * yas)
    
    // ADIM 2: Aktivite çarpanı (TDEE)
    activityMultipliers = {
        'hareketsiz': 1.2,
        'az_hareketli': 1.375,
        'orta': 1.55,
        'aktif': 1.725
    }
    tdee = bmr * activityMultipliers[aktivite]
    
    // ADIM 3: Kalori hedefi
    // Lipödemde agresif kalori kısıtlaması önerilmez
    // Hafif defisit: %10-15 (yağ birikimi lipödemde diyetle gitmez ama
    // genel sağlık ve inflamasyon için sağlıklı kilo yönetimi önemli)
    calorieTarget = tdee * 0.9  // %10 defisit
    
    // ADIM 4: Makro hedefleri (Akdeniz-ketojenik yaklaşım)
    // Referans: 2025 peer-reviewed, n=48, 7 ayda -12 kg, uylukta -6 cm
    
    if evre === 'evre3_4' {
        // Ketojenik ağırlıklı
        macros = {
            carb: 0.06,     // %6 karbonhidrat
            protein: 0.20,  // %20 protein
            fat: 0.74       // %74 yağ (sağlıklı yağlar)
        }
    } else if evre === 'evre2_25' {
        // Düşük karbonhidrat
        macros = {
            carb: 0.10,     // %10 karbonhidrat
            protein: 0.22,  // %22 protein
            fat: 0.68       // %68 yağ
        }
    } else {
        // Standart anti-inflamatuar (Evre 1 / bilmiyorum)
        macros = {
            carb: 0.20,     // %20 karbonhidrat
            protein: 0.25,  // %25 protein
            fat: 0.55       // %55 yağ
        }
    }
    
    // Gram cinsinden hesaplama
    carbGrams = (calorieTarget * macros.carb) / 4
    proteinGrams = (calorieTarget * macros.protein) / 4
    fatGrams = (calorieTarget * macros.fat) / 9
    
    // ADIM 5: Alerji ve tercih filtreleme
    availableFoods = filterFoodDatabase(
        allergies: input.allergies,
        dietPreference: input.diet,
        budget: input.budget
    )
    
    // ADIM 6: 7 günlük menü oluşturma
    weeklyMenu = []
    for day in 1..7 {
        dailyMenu = composeDailyMenu(
            calorieTarget: calorieTarget,
            macros: { carbGrams, proteinGrams, fatGrams },
            mealCount: input.mealCount,
            availableFoods: availableFoods,
            previousDays: weeklyMenu  // Tekrar önleme
        )
        weeklyMenu.push(dailyMenu)
    }
    
    // ADIM 7: Alışveriş listesi oluşturma
    shoppingList = generateShoppingList(weeklyMenu)
    
    return {
        dailyCalories: calorieTarget,
        macros: { carbGrams, proteinGrams, fatGrams, ratios: macros },
        weeklyMenu: weeklyMenu,
        shoppingList: shoppingList,
        notes: generateNotes(input),
        disclaimer: NUTRITION_DISCLAIMER
    }
}
```

---

### 4.3 Yemek Veritabanı (50+ Türk Yemeği)

```
ANTİ-İNFLAMATUAR TÜRK YEMEKLERİ VERİTABANI:
========================================

Yapı: Her yemek makro bilgili, alerjen bilgili, maliyet kategorili

interface FoodItem {
  id: string
  name: string                    // "Zeytinyağlı Enginar"
  category: MealCategory          // 'breakfast' | 'lunch' | 'dinner' | 'snack'
  dietTypes: DietType[]           // ['omnivore', 'vegetarian', 'vegan']
  allergens: string[]             // ['gluten', 'nuts', ...]
  antiInflammatoryScore: 1-5      // 5 = çok yüksek anti-inflamatuar
  budget: 'ekonomik' | 'orta' | 'rahat'
  
  nutrition: {
    calories: number              // per porsiyon
    protein: number               // gram
    carbs: number                 // gram
    fat: number                   // gram
    fiber: number                 // gram
    omega3: number                // mg (opsiyonel)
  }
  
  recipe?: {
    ingredients: Ingredient[]
    prepTime: number              // dakika
    cookTime: number              // dakika
    servings: number
    instructions: string[]
  }
}
```

**Kategori bazlı örnekler (50 yemek):**

**KAHVALTI (12 yemek):**
| # | Yemek | Kcal | P | C | F | Anti-infl | Diyet |
|---|-------|------|---|---|---|-----------|-------|
| 1 | Avokadolu tam buğday tost | 320 | 8 | 28 | 22 | 4 | V,O |
| 2 | Cevizli chia pudingi (hindistan cevizi sütü) | 280 | 6 | 12 | 24 | 5 | Vg,V,O |
| 3 | Yumurtalı ıspanaklı menemen | 250 | 16 | 8 | 18 | 4 | V,O |
| 4 | Keten tohumlu yoğurt + meyve | 200 | 12 | 18 | 10 | 4 | V,O |
| 5 | Zerdeçallı omlet + yeşillik | 220 | 14 | 3 | 16 | 5 | V,O |
| 6 | Badem sütlü smoothie (yeşil) | 180 | 5 | 16 | 12 | 5 | Vg,V,O |
| 7 | Peynirli domates (keçi peyniri) | 200 | 10 | 6 | 14 | 3 | V,O |
| 8 | Tahinli pekmezli (az şekerli) | 260 | 6 | 22 | 18 | 3 | Vg,V,O |
| 9 | Sebzeli frittata | 280 | 18 | 6 | 20 | 4 | V,O |
| 10 | Karabuğday krepi + lor peyniri | 240 | 14 | 20 | 12 | 3 | V,O |
| 11 | Kefirli granola (ev yapımı) | 260 | 8 | 24 | 16 | 4 | V,O |
| 12 | Zerdeçallı altın süt (latte) | 120 | 4 | 8 | 8 | 5 | V,O |

**ANA YEMEK - ÖĞLE/AKŞAM (24 yemek):**
| # | Yemek | Kcal | P | C | F | Anti-infl | Diyet |
|---|-------|------|---|---|---|-----------|-------|
| 13 | Zeytinyağlı enginar | 180 | 4 | 14 | 12 | 5 | Vg,V,O |
| 14 | Somon ızgara + brokoli | 380 | 32 | 8 | 24 | 5 | P,O |
| 15 | Tavuklu zerdeçallı sebze sote | 320 | 28 | 12 | 18 | 5 | O |
| 16 | Mercimek çorbası | 220 | 14 | 28 | 6 | 4 | Vg,V,O |
| 17 | Zeytinyağlı fasulye | 200 | 8 | 22 | 10 | 4 | Vg,V,O |
| 18 | Balık buğulama (levrek) | 280 | 30 | 4 | 16 | 5 | P,O |
| 19 | Zeytinyağlı kereviz | 160 | 3 | 12 | 12 | 4 | Vg,V,O |
| 20 | Izgara köfte + yeşil salata | 350 | 26 | 6 | 24 | 3 | O |
| 21 | Karnabahar pizza tabanı | 280 | 14 | 12 | 20 | 4 | V,O |
| 22 | Nohut salatası (Akdeniz) | 300 | 12 | 28 | 16 | 4 | Vg,V,O |
| 23 | Zeytinyağlı pırasa | 170 | 3 | 14 | 12 | 4 | Vg,V,O |
| 24 | Tavuk tandır + ızgara sebze | 340 | 30 | 10 | 20 | 4 | O |
| 25 | Tofu stir-fry (soya sos) | 260 | 18 | 12 | 16 | 4 | Vg,V |
| 26 | Sardalya ızgara + roka salatası | 300 | 24 | 4 | 22 | 5 | P,O |
| 27 | Imam bayıldı | 220 | 4 | 16 | 16 | 4 | Vg,V,O |
| 28 | Fırında sebzeli tavuk | 340 | 28 | 14 | 18 | 4 | O |
| 29 | Kabak musakka (kıymalı) | 300 | 20 | 14 | 18 | 3 | O |
| 30 | Yeşil mercimekli salata | 280 | 16 | 26 | 12 | 4 | Vg,V,O |
| 31 | Palamut ızgara + mevsim salata | 320 | 28 | 6 | 20 | 5 | P,O |
| 32 | Sebzeli güveç (zeytinyağlı) | 240 | 6 | 18 | 16 | 5 | Vg,V,O |
| 33 | Fırında somon + kuşkonmaz | 360 | 30 | 6 | 24 | 5 | P,O |
| 34 | Kıymalı ıspanak (az yağlı) | 280 | 22 | 8 | 18 | 4 | O |
| 35 | Çiğ köfte (yağsız) | 180 | 6 | 26 | 6 | 3 | Vg,V,O |
| 36 | Tempeh sote + kinoa | 320 | 20 | 28 | 14 | 4 | Vg,V |

**ÇORBA (6 yemek):**
| # | Yemek | Kcal | P | C | F | Anti-infl | Diyet |
|---|-------|------|---|---|---|-----------|-------|
| 37 | Kemik suyu (tavuk) | 80 | 10 | 2 | 4 | 5 | O |
| 38 | Zerdeçallı kabak çorbası | 160 | 4 | 14 | 10 | 5 | V,O |
| 39 | Domates çorbası (taze) | 140 | 4 | 16 | 6 | 4 | Vg,V,O |
| 40 | Brokoli çorbası | 180 | 8 | 12 | 12 | 5 | V,O |
| 41 | Tarhana çorbası (ev yapımı) | 160 | 6 | 20 | 6 | 3 | V,O |
| 42 | Mantar çorbası (kremalı) | 200 | 6 | 10 | 14 | 4 | V,O |

**ATIŞTIIRMALIK / ARA ÖĞÜN (8 yemek):**
| # | Yemek | Kcal | P | C | F | Anti-infl | Diyet |
|---|-------|------|---|---|---|-----------|-------|
| 43 | Avokado + limon + tuz | 160 | 2 | 6 | 14 | 5 | Vg,V,O |
| 44 | Ceviz + badem (30g) | 200 | 6 | 4 | 18 | 5 | Vg,V,O |
| 45 | Havuç + humus | 160 | 6 | 16 | 8 | 4 | Vg,V,O |
| 46 | Keçi peyniri + zeytinyağı + domates | 180 | 8 | 4 | 14 | 4 | V,O |
| 47 | Yeşil smoothie (ıspanak+elma+zencefil) | 120 | 2 | 18 | 4 | 5 | Vg,V,O |
| 48 | %85+ bitter çikolata (20g) | 120 | 2 | 8 | 10 | 4 | Vg,V,O |
| 49 | Yoğurt + zerdeçal + bal (1 tsp) | 140 | 8 | 12 | 6 | 4 | V,O |
| 50 | Keten tohumu krakerler | 140 | 4 | 10 | 10 | 4 | Vg,V,O |

**Diyet kısaltmaları:** O=Omnivore, V=Vejeteryan, Vg=Vegan, P=Pesketaryen

---

### 4.4 Alışveriş Listesi Otomatik Oluşturma

```
PSEUDOCODE:

function generateShoppingList(
  weeklyMenu: DailyMenu[],
  servings: number = 1
): ShoppingList {
    
    let ingredientMap = new Map<string, AggregatedIngredient>()
    
    for each day in weeklyMenu {
        for each meal in day.meals {
            for each ingredient in meal.recipe.ingredients {
                let key = ingredient.name + '_' + ingredient.unit
                
                if ingredientMap.has(key) {
                    ingredientMap.get(key).amount += ingredient.amount * servings
                } else {
                    ingredientMap.set(key, {
                        name: ingredient.name,
                        amount: ingredient.amount * servings,
                        unit: ingredient.unit,
                        category: ingredient.shoppingCategory,
                        estimatedPrice: ingredient.unitPrice * ingredient.amount * servings
                    })
                }
            }
        }
    }
    
    // Kategorilere göre gruplama
    let categories = groupBy(ingredientMap.values(), 'category')
    // Kategoriler: Sebze-Meyve, Et-Balık, Süt Ürünleri, 
    //              Baklagil-Tahıl, Yağ-Baharat, Diğer
    
    let totalEstimatedCost = sum(ingredientMap.values().map(i => i.estimatedPrice))
    
    return {
        categories: categories,
        totalItems: ingredientMap.size,
        estimatedCost: totalEstimatedCost,
        generatedFor: `${servings} kişi, ${weeklyMenu.length} gün`
    }
}
```

**Alışveriş listesi kategorileri:**
```
┌─────────────────────────────────────────┐
│ 🛒 HAFTALIK ALIŞVERİŞ LİSTESİ         │
│    3 gün, 1 kişi                        │
│    Tahmini maliyet: ~450 TL             │
│                                          │
│ SEBZE & MEYVE                            │
│ ☐ Ispanak ............... 500g           │
│ ☐ Brokoli ............... 400g           │
│ ☐ Avokado ............... 3 adet         │
│ ☐ Domates ............... 1 kg           │
│ ...                                      │
│                                          │
│ ET & BALIK                               │
│ ☐ Somon fileto .......... 300g           │
│ ☐ Tavuk göğsü .......... 500g           │
│ ...                                      │
│                                          │
│ SÜT ÜRÜNLERİ                            │
│ ☐ Keçi peyniri .......... 200g           │
│ ☐ Yoğurt ................ 1 kg           │
│ ...                                      │
│                                          │
│ BAKLAGİL & TAHIL                         │
│ ☐ Yeşil mercimek ........ 500g           │
│ ☐ Chia tohumu ........... 200g           │
│ ...                                      │
│                                          │
│ YAĞ & BAHARAT                            │
│ ☐ Zeytinyağı (sızma) .... 500ml          │
│ ☐ Zerdeçal .............. 100g           │
│ ...                                      │
└─────────────────────────────────────────┘
```

---

### 4.5 Free vs Premium Ayrımı

| Özellik | Free (3 gün) | Premium (7 gün) |
|---------|--------------|-----------------|
| Gün sayısı | 3 gün | 7 gün |
| Kişiselleştirme | Temel (alerji + diyet) | Tam (evre + bütçe + öğün + kişi sayısı) |
| Makro detayı | Sadece kalori | Kalori + protein + carb + fat + fiber |
| Alışveriş listesi | Yok | Kategorize, fiyat tahminli |
| Tarif detayları | Sadece yemek adı + porsiyon | Tam tarif (malzemeler + yapılış + süre) |
| PDF export | Yok | Menü + alışveriş listesi PDF |
| Yenileme | Yok (sabit 3 günlük) | Her hafta yeni menü oluşturabilme |
| Omega-3, baharat önerileri | Yok | Anti-inflamatuar takviye rehberi |

**Premium upsell noktası:**
3 günlük plan gösterildikten sonra 4-7. günler blur/kilitli gösterilir:
```
┌─────────────────────────────────────────┐
│ Pazartesi ✓  Salı ✓  Çarşamba ✓        │
│ Perşembe 🔒  Cuma 🔒  C.tesi 🔒  Pazar 🔒│
│                                          │
│ "7 günlük planınızın tamamını ve         │
│  alışveriş listesini görmek için"        │
│                                          │
│ [Premium'a Geç -- 79 TL/ay]             │
│ veya [Yıllık 699 TL (2,6 ay tasarruf)]  │
└─────────────────────────────────────────┘
```

---

### 4.6 UX Akış Diyagramı

```
┌──────────────────┐
│ Giriş Ekranı     │
│ "Kişiselleştiril-│
│ miş Anti-İnfla-  │
│ matuar Beslenme   │
│ Planınız"         │
│                   │
│ [Planımı Oluştur] │
└────────┬─────────┘
         │
         v
┌──────────────────┐
│ Adım 1/4         │
│ Temel Bilgiler    │
│ (Yaş, Boy, Kilo,  │
│  Aktivite)        │
│ [Devam]           │
└────────┬─────────┘
         │
         v
┌──────────────────┐
│ Adım 2/4         │
│ Alerjiler +       │
│ Diyet Tercihi     │
│ [Devam]           │
└────────┬─────────┘
         │
         v
┌──────────────────┐
│ Adım 3/4         │
│ Evre + Öğün +    │
│ Bütçe             │
│ [Devam]           │
└────────┬─────────┘
         │
         v
┌──────────────────┐
│ Adım 4/4         │
│ Özet              │
│ "Bilgileriniz     │
│ doğru mu?"        │
│ [Planımı Oluştur] │
└────────┬─────────┘
         │
         v
┌──────────────────┐
│ Hesaplama        │
│ Animasyonu        │
│ "Planınız         │
│ hazırlanıyor"     │
│ (2 sn)            │
└────────┬─────────┘
         │
         v
┌──────────────────────────────┐
│ PLAN SONUÇ SAYFASI           │
│                               │
│ ┌───────────────────────────┐│
│ │ Günlük Hedef: 1650 kcal  ││
│ │ Protein: 82g | Carb: 41g ││
│ │ Fat: 136g                ││
│ └───────────────────────────┘│
│                               │
│ [Pzt] [Sal] [Çar] [Per*] ... │
│                               │
│ PAZARTESİ                     │
│ ─────────                     │
│ Kahvaltı: Zerdeçallı omlet   │
│   220 kcal | P:14 C:3 F:16  │
│   [Tarifi Gör]               │
│                               │
│ Öğle: Somon + brokoli        │
│   380 kcal | P:32 C:8 F:24  │
│   [Tarifi Gör]               │
│                               │
│ Akşam: Zeytinyağlı enginar   │
│   180 kcal | ...              │
│                               │
│ Atıştırmalık: Ceviz + badem  │
│   200 kcal | ...              │
│                               │
│ GÜN TOPLAM: 1640 kcal ✓     │
│                               │
│ * 4-7 günler: [Premium 🔒]   │
│                               │
│ [Alışveriş Listesi - Premium]│
│ [PDF İndir - Premium]        │
│ [Planı Yenile - Premium]     │
│                               │
│ Disclaimer: Tıbbi tavsiye    │
│ değildir...                   │
└──────────────────────────────┘
```

---

### 4.7 React Komponent Yapısı

```
src/app/(marketing)/araclar/beslenme-plani/
└── page.tsx                              # SC: metadata, JSON-LD

src/components/tools/nutrition-planner/
├── nutrition-wizard.tsx                  # CC: Ana wizard (4 adımlı form)
├── basic-info-step.tsx                   # CC: Adım 1 -- yaş, boy, kilo
├── allergy-diet-step.tsx                 # CC: Adım 2 -- alerjiler, diyet
├── preferences-step.tsx                  # CC: Adım 3 -- evre, öğün, bütçe
├── summary-step.tsx                      # CC: Adım 4 -- doğrulama özet
├── plan-result.tsx                       # CC: Sonuç sayfası
├── day-tab.tsx                           # CC: Gün tab'ı
├── meal-card.tsx                         # CC: Öğün kartı
├── recipe-modal.tsx                      # CC: Tarif detay modal
├── macros-display.tsx                    # CC: Makro göstergesi (bar chart)
├── shopping-list.tsx                     # CC: Alışveriş listesi (premium)
├── premium-gate-overlay.tsx              # CC: Premium upsell overlay
└── nutrition-pdf.tsx                     # CC: PDF oluşturma (premium)

src/stores/
└── nutrition-planner-store.ts            # Zustand store

src/data/
└── food-database.ts                      # Yemek veritabanı (50+ yemek)
```

---

### 4.8 State Management

```typescript
interface NutritionPlannerState {
  // Wizard
  phase: 'intro' | 'input' | 'calculating' | 'result'
  currentStep: number  // 1-4
  
  // Giriş verileri
  basicInfo: {
    age: number | null
    height: number | null
    weight: number | null
    activityLevel: string | null
  }
  allergies: string[]
  dietPreference: string | null
  stage: string | null
  mealCount: number
  budget: string | null
  
  // Hesaplama sonuçları
  result: {
    dailyCalories: number
    macros: MacroTargets
    weeklyMenu: DailyMenu[]
    shoppingList: ShoppingList | null  // premium only
  } | null
  
  // UI
  selectedDay: number  // 0-6
  
  // Aksiyonlar
  setBasicInfo: (info: Partial<BasicInfo>) => void
  toggleAllergy: (allergy: string) => void
  setDietPreference: (pref: string) => void
  setStage: (stage: string) => void
  setMealCount: (count: number) => void
  setBudget: (budget: string) => void
  nextStep: () => void
  prevStep: () => void
  generatePlan: () => void
  selectDay: (day: number) => void
  resetPlanner: () => void
}
```

---

### 4.9 Analytics Event Listesi

| Event | Trigger | Properties |
|-------|---------|------------|
| `nutrition_planner_started` | Başlat tıklandığında | `source` |
| `nutrition_planner_step_completed` | Her adım tamamlandiğında | `step`, `data_summary` |
| `nutrition_planner_generated` | Plan oluşturulduğunda | `calories`, `macros_ratio`, `diet_type`, `stage`, `allergy_count` |
| `nutrition_planner_day_viewed` | Gün tab'ı tıklandığında | `day_number` |
| `nutrition_planner_recipe_viewed` | Tarif modal açıldığında | `food_id`, `meal_type` |
| `nutrition_planner_premium_prompt` | Premium upsell gösterildiğinde | `trigger` (day_lock, shopping_list, pdf) |
| `nutrition_planner_premium_clicked` | Premium CTA tıklandığında | `plan_type` (monthly, yearly) |
| `nutrition_planner_abandoned` | Sayfa terk | `last_step`, `completed_fields` |

---

### 4.10 SEO Meta Bilgileri

```typescript
export const metadata: Metadata = {
  title: 'Lipödem Beslenme Planı: Kişiselleştirilmiş Anti-İnflamatuar Menü | Lipödem Türkiye',
  description: 'Lipödeme özel kişiselleştirilmiş beslenme planı oluşturun. Alerji, diyet tercihi ve evrenize göre 7 günlük anti-inflamatuar menü + alışveriş listesi. Türk mutfağına uyarlanmış 50+ tarif.',
  keywords: ['lipödem beslenme planı', 'lipödem diyeti', 'anti-inflamatuar beslenme', 'lipödem menü', 'lipödem yemek listesi'],
}
```

---

### 4.11 Mobil UX Notları

- **Wizard adımları:** Dikey form, her adımda ilerleyen progress dots
- **Sayısal input:** Numeric keyboard (`inputMode="numeric"`)
- **Alerji seçimi:** Toggle butonlar (pill format), yatay scroll
- **Plan sonucu:** Günler yatay tab bar (swipeable), dikey yemek listesi
- **Tarif modal:** Bottom sheet, tam ekran değil (%75 yükseklik)
- **Premium overlay:** Blur efekti, alttan yükselen CTA card

---

### 4.12 Erişilebilirlik (a11y)

- Form alanları: Her input `<label>` ile eşleştirilmiş, hata mesajları `aria-describedby` ile
- Alerji toggle: `role="switch"` + `aria-checked`
- Gün tab'ları: `role="tablist"` + `role="tab"` + `aria-selected`
- Makro gösterge: `role="img"` + `aria-label="Günlük hedef: 1650 kalori, 82 gram protein, 41 gram karbonhidrat, 136 gram yağ"`
- Premium kilitli içerik: Ekran okuyuculara "Bu içerik premium üyelik gerektirir" mesajı

---
---

## ARAÇ 5: TEDAVİ MALİYET HESAPLAYICI

**URL:** `/araclar/maliyet-hesaplayici`
**Erişim:** Temel hesaplama ücretsiz, detaylı analiz Premium (Tier 2)
**Hedef:** Tedavi maliyetini şeffaf göstermek, taksit seçenekleri sunmak, klinik yönlendirmesi yapmak.

---

### 5.1 Giriş Inputları

#### Input 1: Tedavi Türü Seçimi
**Metin:** Hangi tedavi türünü değerlendiriyorsunuz?
**Seçenekler:**
| Seçenek | ID | Temel maliyet aralığı (TL) |
|---------|-----|---------------------------|
| Konservatif Tedavi Paketi | conservative | 15.000 - 40.000 /yıl |
| VASER Liposuction | vaser | 80.000 - 200.000 |
| Tumescent Liposuction | tumescent | 55.000 - 150.000 |
| WAL (Su Destekli Liposuction) | wal | 90.000 - 220.000 |
| Bilmiyorum / karşılaştırma istiyorum | compare | Tümünü göster |

#### Input 2: Bölge Sayısı (cerrahi seçenekler için)
**Metin:** Kaç bölge tedavi edilecek?
**Koşul:** Yalnızca cerrahi seçenek seçildiğinde görünür
**Seçenekler:**
| Seçenek | Çarpan |
|---------|--------|
| 1 bölge (örn. sadece uyluk) | x1.0 |
| 2 bölge (örn. uyluk + diz) | x1.7 |
| 3 bölge (örn. uyluk + diz + baldır) | x2.3 |
| 4+ bölge (kapsamlı) | x2.8 |

#### Input 3: Şehir
**Metin:** Tedaviyi hangi şehirde düşünüyorsunuz?
**Seçenekler:**
| Şehir | Fiyat çarpanı |
|-------|---------------|
| İstanbul | 1.15 |
| Ankara | 1.00 |
| İzmir | 1.00 |
| Antalya | 0.95 |
| Bursa | 0.90 |
| Diğer büyükşehir | 0.85 |
| Diğer | 0.80 |
| Yurt dışı (Almanya) | 3.50 |
| Yurt dışı (ABD) | 5.00 |

#### Input 4: Konservatif Tedavi Detayları (konservatif paket seçildiğinde)
**Metin:** Konservatif tedavide hangi bileşenleri dahil etmek istiyorsunuz?
**Seçenekler (çoklu seçim):**
| Bileşen | Yıllık maliyet (TL) |
|---------|---------------------|
| ☐ Kompresyon giysi (2 takım/yıl) | 4.000 - 8.000 |
| ☐ MLD seansları (2x/hafta, 12 hafta) | 6.000 - 15.000 |
| ☐ Pnömatik kompresyon cihazı | 3.000 - 8.000 (tek seferlik) |
| ☐ Diyetisyen danışmanlığı (aylık) | 3.600 - 7.200 |
| ☐ Fizyoterapi (CDT, 20 seans) | 5.000 - 12.000 |
| ☐ Psikolojik destek (aylık) | 2.400 - 6.000 |

---

### 5.2 Hesaplama Algoritması

```
MALİYET HESAPLAMA ALGORİTMASI:
========================================

PSEUDOCODE:

function calculateCost(input: CostInput): CostResult {
    
    // CERRAHI TEDAVI HESAPLAMA
    if input.treatmentType in ['vaser', 'tumescent', 'wal'] {
        
        // Temel cerrahi maliyet (1 bölge, Ankara bazlı)
        baseCosts = {
            'vaser':     { min: 80000, max: 200000, avg: 140000 },
            'tumescent': { min: 55000, max: 150000, avg: 100000 },
            'wal':       { min: 90000, max: 220000, avg: 155000 }
        }
        
        baseCost = baseCosts[input.treatmentType]
        
        // Bölge çarpanı
        regionMultipliers = { 1: 1.0, 2: 1.7, 3: 2.3, 4: 2.8 }
        regionMultiplier = regionMultipliers[input.regions]
        
        // Şehir çarpanı
        cityMultiplier = getCityMultiplier(input.city)
        
        surgicalCost = {
            min: round(baseCost.min * regionMultiplier * cityMultiplier),
            max: round(baseCost.max * regionMultiplier * cityMultiplier),
            avg: round(baseCost.avg * regionMultiplier * cityMultiplier)
        }
        
        // Ek zorunlu maliyetler (cerrahi sonrası)
        postSurgicalCosts = {
            compressionGarments: { min: 3000, max: 6000, label: 'Kompresyon giysi (cerrahi sonrası)' },
            mldSessions:        { min: 4000, max: 10000, label: 'MLD seansları (12 seans)' },
            followUp:           { min: 1000, max: 3000, label: 'Takip muayeneleri' },
            medications:        { min: 500, max: 1500, label: 'İlaçlar (ağrı kesici, antibiyotik)' }
        }
        
        totalPostSurgical = sumAll(postSurgicalCosts)
        
        // TOPLAM
        totalMin = surgicalCost.min + totalPostSurgical.min
        totalMax = surgicalCost.max + totalPostSurgical.max
        totalAvg = surgicalCost.avg + totalPostSurgical.avg
        
    }
    
    // KONSERVATİF TEDAVİ HESAPLAMA
    else if input.treatmentType === 'conservative' {
        
        let annualCost = { min: 0, max: 0 }
        let components = []
        
        for each selectedComponent in input.conservativeComponents {
            cost = conservativeCosts[selectedComponent]
            annualCost.min += cost.min
            annualCost.max += cost.max
            components.push({ name: cost.label, min: cost.min, max: cost.max })
        }
        
        // Şehir çarpanı (konservatif tedavide daha düşük etki)
        cityMultiplier = 1 + (getCityMultiplier(input.city) - 1) * 0.5
        
        totalMin = round(annualCost.min * cityMultiplier)
        totalMax = round(annualCost.max * cityMultiplier)
    }
    
    // KARŞILAŞTIRMA MODU
    else if input.treatmentType === 'compare' {
        // Tüm tedavi türleri için hesapla, tablo olarak göster
        results = []
        for each type in ['conservative', 'tumescent', 'vaser', 'wal'] {
            results.push(calculateCost({ ...input, treatmentType: type }))
        }
        return results
    }
    
    // TAKSİT HESAPLAMA (iyzico)
    installmentOptions = calculateInstallments(totalAvg)
    
    // ULUSLARARASI KARŞILAŞTIRMA
    internationalComparison = {
        turkey: { min: totalMin, max: totalMax, currency: 'TRY' },
        germany: { 
            min: round(totalMin * 3.5), 
            max: round(totalMax * 3.5), 
            currency: 'TRY',
            note: 'Almanya fiyatları (EUR->TRY dönüşümlü)' 
        },
        usa: { 
            min: round(totalMin * 5.0), 
            max: round(totalMax * 5.0), 
            currency: 'TRY',
            note: 'ABD fiyatları (USD->TRY dönüşümlü)' 
        }
    }
    
    // SGK KARŞILAMASI
    sgkCoverage = calculateSGKCoverage(input.treatmentType)
    
    return {
        treatment: input.treatmentType,
        breakdown: components,
        total: { min: totalMin, max: totalMax, avg: totalAvg },
        installments: installmentOptions,
        international: internationalComparison,
        sgk: sgkCoverage,
        disclaimer: COST_DISCLAIMER
    }
}

// TAKSİT HESAPLAMA
function calculateInstallments(amount: number): InstallmentOption[] {
    // iyzico komisyon oranları (yaklaşık)
    rates = {
        3:  0.0299,   // %2.99
        6:  0.0499,   // %4.99
        9:  0.0699,   // %6.99
        12: 0.0999    // %9.99
    }
    
    options = []
    for each [months, rate] in rates {
        totalWithInterest = amount * (1 + rate)
        monthlyPayment = totalWithInterest / months
        options.push({
            months: months,
            monthlyPayment: round(monthlyPayment),
            totalPayment: round(totalWithInterest),
            interestRate: rate,
            interestAmount: round(totalWithInterest - amount)
        })
    }
    
    return options
}

// SGK KARŞILAMASI
function calculateSGKCoverage(treatmentType: string): SGKCoverage {
    // Lipödem tedavisi SGK tarafından karşılanmıyor (2026 itibarıyla)
    // Ancak bazı bileşenler kısmen karşılanabilir
    
    return {
        surgicalCoverage: 'Karşılanmıyor',
        surgicalNote: 'Lipödem liposuction SGK kapsamında değildir. Ancak "fonksiyonel bozukluk" gerekçesiyle bazı devlet hastanelerinde sınırlı kapsamda değerlendirildiği durumlar bildirilmiştir.',
        conservativeCoverage: {
            compression: 'Kısmen -- Reçete ile kompresyon giysi desteği mümkün (SUT kodu ile)',
            mld: 'Kısmen -- Devlet hastanesinde fizyoterapi kapsamında',
            physiotherapy: 'Evet -- Devlet hastanesinde CDT olarak',
            psychology: 'Evet -- Devlet hastanesinde/TRSM'de ücretsiz',
            dietician: 'Kısmen -- Devlet hastanesinde beslenme polikliniği'
        },
        recommendation: 'SGK hakları konusunda detaylı bilgi için SGK Rehberimizi inceleyin.',
        ctaLink: '/lipodem-sgk-rehberi'
    }
}
```

---

### 5.3 Sonuç Gösterimi

```
MALİYET SONUÇ SAYFASI:
========================================

┌─────────────────────────────────────────────────────────────┐
│ TEDAVİ MALİYET TAHMİNİ                                      │
│                                                              │
│ VASER Liposuction | 2 Bölge | İstanbul                      │
│                                                              │
│ ┌─ MALİYET DAĞILIMI ───────────────────────────────────────┐│
│ │                                                           ││
│ │ Cerrahi işlem .............. 135.000 - 340.000 TL        ││
│ │ Kompresyon giysi ........... 3.000 - 6.000 TL            ││
│ │ MLD seansları (12x) ........ 4.000 - 10.000 TL          ││
│ │ Takip muayeneleri .......... 1.000 - 3.000 TL            ││
│ │ İlaçlar .................... 500 - 1.500 TL              ││
│ │ ──────────────────────────────────────                    ││
│ │ TOPLAM: 143.500 - 360.500 TL                             ││
│ │ Ortalama: ~252.000 TL                                     ││
│ └───────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌─ TAKSİT SEÇENEKLERİ (iyzico) ──────────────────────────┐│
│ │                                                           ││
│ │  3 Taksit:  86.500 TL/ay  (toplam: 259.500 TL)          ││
│ │  6 Taksit:  44.100 TL/ay  (toplam: 264.600 TL)          ││
│ │  9 Taksit:  30.000 TL/ay  (toplam: 270.000 TL)          ││
│ │ 12 Taksit:  23.100 TL/ay  (toplam: 277.200 TL)          ││
│ │                                                           ││
│ │ Not: Taksit oranları yaklaşıktır,                        ││
│ │ klinik ve banka anlaşmasına göre değişir.                ││
│ └───────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌─ ULUSLARARASI KARŞILAŞTIRMA ────────────────────────────┐│
│ │                                                           ││
│ │ ┌──────────┐ ┌──────────┐ ┌──────────┐                  ││
│ │ │ TÜRKİYE  │ │ ALMANYA  │ │ ABD      │                  ││
│ │ │ ~252.000 │ │ ~882.000 │ │~1.260.000│                  ││
│ │ │ TL       │ │ TL       │ │ TL       │                  ││
│ │ │ ████     │ │ ████████ │ │██████████│                  ││
│ │ │          │ │ 3.5x     │ │ 5.0x     │                  ││
│ │ └──────────┘ └──────────┘ └──────────┘                  ││
│ │                                                           ││
│ │ Türkiye'de tedavi, Almanya'ya göre %71,                  ││
│ │ ABD'ye göre %80 daha uygun maliyetlidir.                 ││
│ └───────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌─ SGK KAPSAMI ───────────────────────────────────────────┐│
│ │ Cerrahi: Karşılanmıyor                                   ││
│ │ Kompresyon: Kısmen (reçete ile)                          ││
│ │ Fizyoterapi: Evet (devlet hastanesinde)                  ││
│ │ [Detaylı SGK Rehberimizi İnceleyin]                      ││
│ └───────────────────────────────────────────────────────────┘│
│                                                              │
│ ┌─ CTA'LAR ──────────────────────────────────────────────┐ │
│ │ [Bu fiyat aralığında klinik bul]  -> /klinikler         │ │
│ │ [Tedavi seçeneklerini karşılaştır] -> /karsilastirma    │ │
│ │ [Premium: Kişisel maliyet analizi] -> /premium          │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                              │
│ SORUMLULUK REDDİ                                             │
│ Bu maliyet tahmini yaklaşıktır. Gerçek maliyetler klinik,   │
│ doktor, teknik ve hastaya özel faktörlere göre değişir.     │
│ Kesin fiyat bilgisi için kliniğe danışınız.                 │
│ Son güncelleme: Mayıs 2026                                  │
└─────────────────────────────────────────────────────────────┘
```

---

### 5.4 UX Akış Diyagramı

```
┌───────────────────┐
│ Giriş Ekranı      │
│ "Tedavi Maliyeti   │
│ Ne Kadar Tutar?"   │
│                    │
│ [Hesaplamaya Başla]│
└────────┬──────────┘
         │
         v
┌───────────────────┐
│ Adım 1: Tedavi    │
│ Türü Seçimi       │
│ ○ Konservatif     │
│ ○ VASER           │
│ ○ Tumescent       │
│ ○ WAL             │
│ ○ Karşılaştır     │
│ [Devam]           │
└────────┬──────────┘
         │
         ├── Cerrahi seçildiyse:
         v
┌───────────────────┐
│ Adım 2: Bölge     │
│ Sayısı             │
│ ○ 1 bölge          │
│ ○ 2 bölge          │
│ ○ 3 bölge          │
│ ○ 4+ bölge         │
│ [Devam]            │
└────────┬──────────┘
         │
         ├── Konservatif seçildiyse:
         v
┌───────────────────┐
│ Adım 2b: Bileşen  │
│ Seçimi             │
│ ☐ Kompresyon       │
│ ☐ MLD              │
│ ☐ Pnömatik         │
│ ☐ Diyetisyen       │
│ ☐ Fizyoterapi      │
│ ☐ Psikoloji        │
│ [Devam]            │
└────────┬──────────┘
         │
         v
┌───────────────────┐
│ Adım 3: Şehir     │
│ [İstanbul ▼]       │
│ [Hesapla]          │
└────────┬──────────┘
         │
         v
┌───────────────────┐
│ SONUÇ SAYFASI     │
│ (detaylı maliyet  │
│ dağılımı, taksit, │
│ karşılaştırma,    │
│ SGK, CTA'lar)     │
└───────────────────┘
```

---

### 5.5 React Komponent Yapısı

```
src/app/(marketing)/araclar/maliyet-hesaplayici/
└── page.tsx                              # SC: metadata, JSON-LD

src/components/tools/cost-calculator/
├── cost-wizard.tsx                       # CC: Ana wizard
├── treatment-select.tsx                  # CC: Tedavi türü seçimi
├── region-select.tsx                     # CC: Bölge sayısı
├── conservative-components.tsx           # CC: Konservatif bileşen seçimi
├── city-select.tsx                       # CC: Şehir seçimi
├── cost-result.tsx                       # CC: Sonuç gösterimi
├── cost-breakdown.tsx                    # CC: Maliyet dağılımı tablosu
├── installment-table.tsx                 # CC: Taksit tablosu
├── international-comparison.tsx          # CC: Uluslararası karşılaştırma (bar chart)
├── sgk-coverage.tsx                      # CC: SGK kapsamı kutusu
└── cost-disclaimer.tsx                   # SC: Disclaimer

src/stores/
└── cost-calculator-store.ts              # Zustand store
```

---

### 5.6 State Management

```typescript
interface CostCalculatorState {
  // Wizard
  phase: 'intro' | 'input' | 'result'
  currentStep: number
  
  // Giriş verileri
  treatmentType: string | null
  regions: number | null
  city: string | null
  conservativeComponents: string[]
  
  // Sonuç
  result: CostResult | null
  
  // Aksiyonlar
  setTreatmentType: (type: string) => void
  setRegions: (regions: number) => void
  setCity: (city: string) => void
  toggleConservativeComponent: (component: string) => void
  calculate: () => void
  resetCalculator: () => void
}
```

---

### 5.7 Analytics Event Listesi

| Event | Trigger | Properties |
|-------|---------|------------|
| `cost_calculator_started` | Başlat tıklandığında | `source` |
| `cost_calculator_treatment_selected` | Tedavi seçildiğinde | `treatment_type` |
| `cost_calculator_regions_selected` | Bölge seçildiğinde | `region_count` |
| `cost_calculator_city_selected` | Şehir seçildiğinde | `city` |
| `cost_calculator_completed` | Hesaplama tamamlandiğında | `treatment_type`, `regions`, `city`, `total_min`, `total_max` |
| `cost_calculator_installment_viewed` | Taksit tablosu görüntülendiğinde | `treatment_type` |
| `cost_calculator_international_viewed` | Karşılaştırma görüntülendiğinde | `treatment_type` |
| `cost_calculator_sgk_clicked` | SGK rehber linki tıklandığında | -- |
| `cost_calculator_clinic_finder_clicked` | Klinik bulucu CTA tıklandığında | `treatment_type`, `city` |
| `cost_calculator_comparison_clicked` | Tedavi karşılaştırma tıklandığında | -- |

---

### 5.8 SEO Meta Bilgileri

```typescript
export const metadata: Metadata = {
  title: 'Lipödem Tedavi Maliyet Hesaplayıcı: Ameliyat ve Tedavi Fiyatları 2026 | Lipödem Türkiye',
  description: 'Lipödem tedavi maliyetini hesaplayın. VASER, Tumescent, WAL liposuction ve konservatif tedavi fiyatları. Taksit seçenekleri, SGK kapsamı, Türkiye vs yurt dışı karşılaştırması.',
  keywords: ['lipödem ameliyat fiyatı', 'lipödem tedavi maliyeti', 'vaser liposuction fiyatı', 'lipödem ameliyat ücreti 2026'],
}
```

---

### 5.9 Mobil UX Notları

- **Tedavi seçimi:** Büyük tıklanabilir kartlar (tam genişlik)
- **Bölge seçimi:** Vücut silüeti üzerinde bölge seçme (opsiyonel, mobilde radio button fallback)
- **Sonuç sayfası:** Akordeon yapısı (maliyet dağılımı, taksit, karşılaştırma, SGK ayrı bölümler)
- **Uluslararası karşılaştırma:** Yatay scroll bar chart
- **CTA'lar:** Sticky bottom bar

---

### 5.10 Erişilebilirlik (a11y)

- Maliyet tabloları: `<table>` semantiği, `<th>` başlıkları, `scope` attribute'ları
- Fiyat aralıkları: Ekran okuyucu formatı: "Cerrahi işlem: 135 bin ile 340 bin TL arası"
- Taksit tablosu: Her satır `aria-label="3 taksit: aylık 86 bin 500 TL, toplam 259 bin 500 TL"`
- Bar chart (karşılaştırma): `role="img"` + `aria-label` ile metin açıklaması
- Şehir dropdown: Aranabilir, klavye navigasyonlu

---
---

## ORTAK ALTYAPI

### Paylaşılan Zustand Pattern

```typescript
// src/stores/create-tool-store.ts
// Tüm araç store'ları için ortak fabrika pattern

import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

function createToolStore<T extends ToolStoreBase>(
  name: string,
  initialState: T,
  actions: (set, get) => ToolActions
) {
  return create<T & ToolActions>()(
    devtools(
      persist(
        (set, get) => ({
          ...initialState,
          ...actions(set, get),
        }),
        {
          name: `lipodem-${name}`,
          partialize: (state) => ({
            // Sadece devam edilebilir state persist edilir
            answers: state.answers,
            currentStep: state.currentStep,
          }),
        }
      ),
      { name }
    )
  )
}
```

---

### Paylaşılan Analytics Helper

```typescript
// src/lib/analytics.ts

type ToolName = 'symptom_test' | 'stage_assessment' | 'clinic_finder' 
              | 'nutrition_planner' | 'cost_calculator'

function trackToolEvent(
  tool: ToolName,
  action: string,
  properties?: Record<string, any>
) {
  // Vercel Analytics
  track(`${tool}_${action}`, {
    tool,
    ...properties,
    timestamp: new Date().toISOString(),
  })
  
  // Google Analytics 4 (varsa)
  if (typeof gtag !== 'undefined') {
    gtag('event', `${tool}_${action}`, properties)
  }
}
```

---

### Paylaşılan PDF Altyapısı

```typescript
// src/lib/pdf-generator.ts
// @react-pdf/renderer ile client-side PDF oluşturma

// Her araç için PDF template:
// - symptom-test-report.tsx   (Semptom testi sonucu)
// - stage-report.tsx          (Evre değerlendirme -- premium)
// - nutrition-plan.tsx        (Beslenme planı -- premium)
// - cost-estimate.tsx         (Maliyet tahmini -- premium)

// Ortak PDF header/footer:
// - Logo
// - Tarih
// - Rapor ID
// - Disclaimer
// - QR code (lipodemturkiye.com'a)
```

---

### Paylaşılan Disclaimer Komponenti

```typescript
// src/components/tools/tool-disclaimer.tsx

interface ToolDisclaimerProps {
  variant: 'symptom' | 'stage' | 'nutrition' | 'cost' | 'general'
}

// Her varyant farklı disclaimer metni gösterir
// Tüm araç sonuç sayfalarında zorunlu
// role="note" ile erişilebilir
```

---

### Tüm Araçlar İçin Ortak SEO JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lipödem [Araç Adı]",
  "url": "https://lipodemturkiye.com/araclar/[slug]",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "TRY"
  },
  "provider": {
    "@type": "Organization",
    "name": "Lipödem Türkiye",
    "url": "https://lipodemturkiye.com"
  },
  "about": {
    "@type": "MedicalCondition",
    "name": "Lipödem",
    "alternateName": "Lipedema"
  }
}
```

---

### Tüm Araçlar İçin Erişilebilirlik Kontrol Listesi

| Kriter | Açıklama | Standart |
|--------|----------|----------|
| Klavye navigasyonu | Tüm işlemler klavye ile yapılabilir | WCAG 2.1.1 |
| Focus yönetimi | Adım değişimlerinde focus doğru yere taşınır | WCAG 2.4.3 |
| Renk bağımsızlık | Bilgi yalnızca renk ile iletilmez | WCAG 1.4.1 |
| Kontrast | Metin/arka plan minimum 4.5:1 (AA) | WCAG 1.4.3 |
| Ekran okuyucu | Tüm interaktif elemanlar anlamlı label'a sahip | WCAG 4.1.2 |
| Hata yönetimi | Hata mesajları açık, form alanı ile ilişkili | WCAG 3.3.1 |
| Hareket azaltma | prefers-reduced-motion destekli | WCAG 2.3.3 |
| Touch target | Minimum 44x44px tıklama alanı | WCAG 2.5.5 |
| Zaman kısıtlaması | Hiçbir araçta zaman sınırı yok | WCAG 2.2.1 |

---

*Bu belge, Lipödem Türkiye projesinin 5 interaktif aracının tam tasarım ve mantık dokümanıdır. Her araç için soru setleri, puanlama algoritmaları, sonuç senaryoları, UX akışları, React komponent yapıları, state management, analytics, SEO, mobil UX ve erişilebilirlik notları kapsamlı şekilde belirlenmiştir.*

*Referanslar: 2025 Lipedema Delphi Consensus (Nature Communications), 2024 German S2k Guideline, Wold et al. diagnostic criteria, product-marketing.md, site-architecture-output.md, copywriting-output.md, marketing-psychology-output.md, react-best-practices-output.md, pricing-output.md*

*Son güncelleme: 24 Mayıs 2026*
