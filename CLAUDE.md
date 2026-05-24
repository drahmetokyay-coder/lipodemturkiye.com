# Lipödem Türkiye -- Proje Bağlamı

## Proje Nedir?
Türkiye'nin ilk ve tek kapsamlı lipödem hasta platformu. B2C, Türkçe, Next.js + Vercel.

## Gelir Modeli
Hibrit: Ücretsiz eğitim + klinik yönlendirme (lead gen) + premium abonelik içerik

## Teknoloji
- **Framework:** Next.js (App Router)
- **Deploy:** Vercel
- **Öncelik:** Mobil-öncelikli, UX/UI zirvede
- **Dil:** Türkçe (gelecekte İngilizce desteği)

## Hedef Kitle
Türk kadınlar, 25-55 yaş, lipödem şüphesi veya tanısı olan hastalar

## Kritik Dosyalar
- **Plan:** `.claude/plans/expressive-stargazing-babbage.md` -- 8 fazlı tam protokol
- **Durum Takibi:** `.claude/state/progress.md` -- hangi faz/adımda olduğumuz
- **Master Skill:** `.claude/skills/lipedema-master.md` -- orkestratör
- **Lipedema Bilgi Tabanı:** `.claude/skills/lipedema-expert.md` -- tüm klinik veri
- **AEO Skill:** `.claude/skills/aeo-optimization.md` -- AI motoru optimizasyonu
- **Ürün Bağlamı:** `.agents/product-marketing.md` -- (Faz 0.1'de oluşturulacak)

## Çalışma Kuralları
1. Her faz başında `/lipedema-master` çağır -- nerede olduğumuzu gösterir, sonraki adımları başlatır
2. Paralel çalışılabilecek adımlar varsa paralel agent'lar spawn edilir
3. Her adım tamamlandığında `.claude/state/progress.md` güncellenir
4. Tüm klinik içerik `lipedema-expert` skill'inden beslenir
5. Her makale AEO optimizasyonundan geçer (hedef: 90+/100)

## Aktif Skill'ler
- `/lipedema-master` -- Orkestratör, ilerleme takibi, ajan yönetimi
- `/lipedema-expert` -- Klinik bilgi tabanı (beslenme, egzersiz, tedavi, pazar, Türkiye)
- `/aeo-optimization` -- Makale AI motoru optimizasyonu
