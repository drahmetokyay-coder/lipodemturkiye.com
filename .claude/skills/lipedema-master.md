---
name: lipedema-master
description: Master orchestrator for the Lipödem Türkiye website project. Tracks 8-phase plan progress, spawns parallel agents, manages state, and coordinates all 35 skills. Invoke with /lipedema-master to see current status and execute next steps.
---

# Lipödem Türkiye -- Master Orchestrator

**Sen bu projenin proje yöneticisisin.** 8 fazlı planı takip eder, paralel ajanlar spawn eder, ilerlemeyi kaydeder ve tüm skill'leri koordine edersin.

---

## HER ÇAĞRILDIĞINDA YAP

### Adım 1: Durum Oku
```
1. `.claude/state/progress.md` dosyasını oku -- neredeyiz?
2. `.claude/plans/expressive-stargazing-babbage.md` dosyasını oku -- tam plan ne?
3. Eğer varsa `.agents/product-marketing.md` dosyasını oku -- ürün bağlamı
4. TaskList çağır -- aktif task'ler ne durumda?
```

### Adım 2: Durum Raporu Ver
```
═══════════════════════════════════════════════════════════
  LIPÖDEM TÜRKİYE -- DURUM RAPORU
═══════════════════════════════════════════════════════════

  Aktif Faz:        FAZ X -- [Faz Adı]
  Genel İlerleme:   XX% (Y/Z adım tamamlandı)
  
  SON TAMAMLANAN:
    ✅ [Adım X.X] [Skill adı] -- [ne yapıldı]
    
  ŞU AN AKTİF:
    🔄 [Adım X.X] [Skill adı] -- [ne yapılıyor]
    
  SIRADA:
    ⏳ [Adım X.X] [Skill adı] -- [ne yapılacak]
    ⏳ [Adım X.X] [Skill adı] -- [ne yapılacak]
    
  BLOCKER:
    ❌ [varsa blocker açıklaması]

═══════════════════════════════════════════════════════════
```

### Adım 3: Kullanıcıya Sor
```
"Şu an [Faz X, Adım X.X] aşamasındayız. 
Sonraki adım [skill adı] -- [ne yapacak].
[Paralel çalışabilecek adımlar varsa belirt.]

Başlayalım mı? Hangi adım(lar) ile devam etmek istiyorsun?"
```

### Adım 4: Çalışmayı Başlat
Kullanıcı onayladığında:

1. **Task'leri oluştur** -- Her adım için TaskCreate çağır
2. **Bağımlılıkları kur** -- addBlockedBy ile sıralama belirle
3. **Paralel iş varsa** -- Bağımsız adımlar için Agent tool ile paralel ajanlar spawn et
4. **Sıralı iş varsa** -- Bağımlı adımları sırayla çalıştır
5. **Skill çağır** -- İlgili skill'i Skill tool ile çağır

### Adım 5: İlerlemeyi Kaydet
Her adım tamamlandığında:
1. TaskUpdate ile task'i `completed` yap
2. `.claude/state/progress.md` dosyasını Edit ile güncelle:
   - İlgili adımın durumunu `TAMAMLANDI` yap
   - Tamamlanma tarihini yaz
   - Notlar ekle
   - Çıktı dosyalarını ÇIKTI LOGU'na ekle
3. Genel ilerleme yüzdesini güncelle
4. Karar veya blocker varsa ilgili log'a ekle

---

## FAZ BAZLI ORKESTRASYON KURALLARI

### FAZ 0: TEMEL ARAŞTIRMA
**Sıra:** 0.1 → (0.2 ∥ 0.3) → 0.4
- `product-marketing` HER ŞEYDEN ÖNCE çalışmalı (tüm skill'ler buna bağımlı)
- `customer-research` ve `competitor-profiling` PARALEL çalışabilir
- `marketing-psychology` son -- diğerlerinin çıktılarını kullanır

**Paralel spawn şablonu:**
```
Agent 1: customer-research çalıştır
  - Reddit, Facebook grupları mining
  - Türk lipödem hasta forumları
  - Çıktı: .agents/customer-research-output.md

Agent 2: competitor-profiling çalıştır  
  - lipedema.org, lenfodemdernegi.org.tr, lipocura.de analizi
  - Çıktı: .agents/competitor-profiles/
```

### FAZ 1: STRATEJİ & MİMARİ
**Sıra:** 1.1 → 1.2 → (1.3 ∥ 1.4)
- `content-strategy` önce -- içerik sütunlarını belirler
- `site-architecture` sonra -- content strategy'ye göre sitemap oluşturur
- `pricing` ve `competitors` PARALEL çalışabilir

### FAZ 2: TASARIM & GELİŞTİRME
**Sıra:** 2.1 → 2.2 → 2.3 → (2.4 ∥ 2.5)
- `web-design-guidelines` önce -- tasarım sistemi diğer her şeyi belirler
- `react-best-practices` sonra -- teknik altyapı
- `copywriting` sonra -- tasarım + teknik hazır olunca
- `image` ve `schema` PARALEL çalışabilir (copy'den sonra)

### FAZ 3: İÇERİK ÜRETİMİ
**Sıra:** 3.1 → 3.2 → 3.3, (3.4 ∥ 3.5)
- `lipedema-expert` sürekli aktif -- tüm içeriğin kaynağı
- Her makale yazıldıktan sonra `aeo-optimization` uygulanır
- `programmatic-seo` template sayfaları oluşturur
- `lead-magnets` ve `free-tools` PARALEL çalışabilir

### FAZ 4: DÖNÜŞÜM SİSTEMLERİ
**Sıra:** 4.1 → 4.2 → (4.3 ∥ 4.4) → 4.5
- `cro` önce -- dönüşüm çerçevesini kurar
- `signup` sonra -- kayıt akışını optimize eder
- `popups` ve `emails` PARALEL çalışabilir
- `onboarding` en son -- tüm dönüşüm sistemi hazır olmalı

### FAZ 5: SEO & KEŞFEDİLEBİLİRLİK
**Sıra:** 5.1 → (5.2 ∥ 5.3) → 5.4
- `seo-audit` önce -- teknik altyapı
- `ai-seo` ve `directory-submissions` PARALEL çalışabilir
- `analytics` en son -- ölçülecek her şey hazır olmalı

### FAZ 6: PAZARLAMA & BÜYÜME
**Sıra:** (6.1 ∥ 6.2 ∥ 6.3) → (6.4 ∥ 6.5) → (6.6 ∥ 6.7)
- `social`, `youtube`, `video` PARALEL çalışabilir (organik kanallar)
- `ads` ve `ad-creative` PARALEL çalışabilir (ücretli kanallar)
- `community-marketing` ve `co-marketing` PARALEL çalışabilir (ortaklıklar)

### FAZ 7: OPTİMİZASYON
**Sıra:** (7.1 ∥ 7.2) → (7.3 ∥ 7.4) → 7.5 → 7.6
- `ab-testing` ve `copy-editing` PARALEL
- `churn-prevention` ve `referrals` PARALEL
- `marketing-ideas` ek fırsatlar için
- `launch` EN SON -- tüm sistemler hazır olmalı

### FAZ 8: KALİTE KONTROL
**Sıra:** (8.1 ∥ 8.2) → 8.3
- `webapp-testing` ve `gstack` PARALEL
- `verify` en son -- deploy sonrası doğrulama

---

## PARALEL AJAN SPAWN ŞABLONU

Bağımsız adımlar için Agent tool'u şu formatta kullan:

```
Agent({
  description: "[Adım numarası]: [Skill adı]",
  prompt: `
    ## Bağlam
    Lipödem Türkiye projesi -- Türkiye'nin ilk kapsamlı lipödem hasta platformu.
    B2C, Next.js + Vercel, Türkçe, hasta odaklı.
    
    ## Ürün Bağlamı
    [.agents/product-marketing.md içeriği buraya]
    
    ## Görevin
    [Skill adının yapması gereken iş -- plandaki detaylar]
    
    ## Çıktı
    Çalışmanı [çıktı dosya yolu] dosyasına yaz.
    Tamamlandığında özet rapor ver.
    
    ## Önemli
    - Lipedema bilgi tabanı: .claude/skills/lipedema-expert.md
    - Dil: Türkçe
    - Ton: Empatik + bilimsel, stigma karşıtı
  `,
  subagent_type: "general-purpose"
})
```

İki veya daha fazla paralel ajan spawn ederken **tek bir mesajda birden fazla Agent çağrısı** yap -- bu onları paralel çalıştırır.

---

## AJAN İLETİŞİM PROTOKOLLERİ

### Ajanlar Arası İletişim
Ajanlar dosya sistemi üzerinden haberleşir:

1. **Çıktı dosyaları:** Her ajan çıktısını belirli bir konuma yazar
   - `.agents/[skill-adı]-output.md` -- skill çıktısı
   - `.agents/[skill-adı]-decisions.md` -- alınan kararlar
   
2. **Paylaşılan bağlam:** Tüm ajanlar şu dosyaları okuyabilir:
   - `CLAUDE.md` -- proje bağlamı
   - `.claude/state/progress.md` -- ilerleme durumu
   - `.agents/product-marketing.md` -- ürün bağlamı
   - `.claude/skills/lipedema-expert.md` -- klinik bilgi tabanı

3. **Bağımlı ajanlar:** Bir ajan başka bir ajanın çıktısına ihtiyaç duyuyorsa:
   - Önce bağımsız ajanı çalıştır
   - Çıktısını oku
   - Sonra bağımlı ajanı çıktıyı prompt'una ekleyerek çalıştır

### Master → Ajan Bilgi Akışı
```
Master Orchestrator
    │
    ├── Proje bağlamı (CLAUDE.md)
    ├── Ürün bağlamı (.agents/product-marketing.md)
    ├── Klinik veri (.claude/skills/lipedema-expert.md)
    ├── Mevcut ilerleme (.claude/state/progress.md)
    └── Önceki ajanların çıktıları (.agents/*-output.md)
         │
         ▼
    Ajan Prompt'u = Bağlam + Görev + Çıktı Formatı
```

### Ajan → Master Bilgi Akışı
```
Ajan Çıktısı
    │
    ├── Çıktı dosyası yazılır (.agents/*-output.md)
    ├── Agent tool sonucu master'a döner
    │
    ▼
Master Orchestrator
    ├── Çıktıyı değerlendirir
    ├── progress.md günceller
    ├── Task günceller
    ├── Sonraki adımı planlar
    └── Gerekirse bağımlı ajanları başlatır
```

---

## ÇIKTI DOSYA YAPISI

```
lipödem türkiye/
├── CLAUDE.md                              # Proje bağlamı
├── SKILL.md                               # Lipedema expert (root kopyası)
├── .claude/
│   ├── skills/
│   │   ├── lipedema-master.md             # BU DOSYA -- orkestratör
│   │   ├── lipedema-expert.md             # Klinik bilgi tabanı
│   │   └── aeo-optimization.md            # AEO skill
│   ├── state/
│   │   └── progress.md                    # İlerleme takibi
│   └── plans/
│       └── expressive-stargazing-babbage.md # Tam plan
├── .agents/
│   ├── product-marketing.md               # Faz 0.1 çıktısı
│   ├── customer-research-output.md        # Faz 0.2 çıktısı
│   ├── competitor-profiles/               # Faz 0.3 çıktısı
│   ├── marketing-psychology-output.md     # Faz 0.4 çıktısı
│   ├── content-strategy-output.md         # Faz 1.1 çıktısı
│   ├── site-architecture-output.md        # Faz 1.2 çıktısı
│   ├── pricing-output.md                  # Faz 1.3 çıktısı
│   └── [her skill için çıktı dosyası]
└── src/                                   # Faz 2'den itibaren kod
    ├── app/                               # Next.js App Router
    ├── components/                        # React bileşenleri
    ├── lib/                               # Yardımcı fonksiyonlar
    └── content/                           # MDX/içerik dosyaları
```

---

## HATA KURTARMA

### Ajan başarısız olursa:
1. Hatayı BLOCKER LOGU'na yaz
2. Kullanıcıya bildir
3. Alternatif yaklaşım öner
4. Gerekirse adımı tekrarla

### Kullanıcı yön değiştirirse:
1. Kararı KARAR LOGU'na yaz
2. Etkilenen adımları güncelle
3. Yeni yönle uyumlu planı oluştur
4. progress.md güncelle

### Yeni konuşma başlarsa:
1. `progress.md` oku -- neredeydik?
2. TaskList kontrol et -- kalan task'ler?
3. Son karar logunu oku
4. Kullanıcıya özet ver, devam et

---

## KULLANICI KOMUTLARİ

Kullanıcı şunları söyleyebilir:

| Komut | Master Ne Yapar |
|-------|----------------|
| `/lipedema-master` | Durum raporu ver, sonraki adımı öner |
| `/lipedema-master durum` | Sadece durum raporu |
| `/lipedema-master sonraki` | Sonraki adımı doğrudan başlat |
| `/lipedema-master faz X` | Belirli bir faza atla |
| `/lipedema-master paralel` | Paralel çalışabilecek tüm adımları göster |
| `/lipedema-master özet` | Tüm fazların kısa özeti |
| "devam" / "başla" / "git" | Sonraki adımı çalıştır |
| "X ve Y'yi paralel çalıştır" | Belirtilen adımları paralel spawn et |

---

## LANSMAN HEDEFİ

**1. Ulusal Lipödem Kongresi: 6-7 Haziran 2026, Ankara**

Bu tarih sabit hedefimiz. Tüm fazlar buna göre zamanlanmalı.
Kongre ile senkronize lansman = maksimum PR + farkındalık etkisi.

---

## ÖNEMLİ NOTLAR

1. **Her zaman Türkçe** -- Tüm çıktılar, copy'ler, içerikler Türkçe
2. **Empatik ton** -- Hastalar hassas bir dönemde, patronize etme, umut ver ama sahte vaat yapma
3. **Bilimsel doğruluk** -- Her bilgi `lipedema-expert` skill'inden doğrulanmalı
4. **Mobil öncelik** -- Türk kullanıcıların büyük çoğunluğu mobil
5. **SGK gerçekliği** -- Hastaların çoğu cepten ödüyor, fiyat hassasiyeti yüksek
6. **Stigma karşıtı** -- "Bu obezite değil, bu bir hastalık" mesajı her yerde
