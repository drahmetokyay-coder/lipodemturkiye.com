import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Flame,
  Scale,
  ShieldCheck,
  Utensils,
  HeartPulse,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Ketojenik Diyet Lipödem Ağrısını Azaltır mı? Bilim Ne Diyor? | Lipödem Türkiye",
  description:
    "Çok düşük kalorili ketojenik diyet (VLCKD) lipödem tedavisinde etkili mi? Akdeniz diyeti ve aralıklı oruçla karşılaştırma, bilimsel kanıtlar ve pratik öneriler.",
  openGraph: {
    title: "Ketojenik Diyet Lipödem Ağrısını Azaltır mı? Bilim Ne Diyor?",
    description:
      "VLCKD lipödem ağrısı ve inflamasyonu üzerinde diğer diyetlerden daha etkili olabilir. Araştırma sonuçları ve pratik bilgiler.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi",
    slug: "/blog/lipodem-yaz-rehberi",
    kategori: "Beslenme",
  },
  {
    baslik: "Lipödem Klinik Özellikleri, Tanı ve Tedavi",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler",
    slug: "/blog/lipodem-morfoloji-patofizyoloji",
    kategori: "Araştırma",
  },
];

export default function KetojenikDiyetLipodemPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-50 via-[#E8F5F0] to-lime-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#1A6B5A] transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#1A6B5A] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-stone-800 font-medium">
                Ketojenik Diyet ve Lipödem
              </li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-green-50 text-green-700 border-green-200">
              <Tag className="w-3 h-3" />
              Beslenme
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              20 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Ketojenik Diyet Lipödem Ağrısını Azaltır mı? Bilim Ne Diyor?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödemle yaşayan pek çok kadın, diyetle yağ kaybı
            sağlayamadığından yakınır. Ancak son araştırmalar, belirli bir
            diyet türünün &mdash; çok düşük kalorili ketojenik diyet
            (VLCKD) &mdash; lipödem ağrısını ve inflamasyonu azaltmada
            diğer diyetlerden daha etkili olabileceğini ortaya koymaktadır
            (PMID: 37924422).
          </p>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="prose prose-stone prose-lg max-w-none">
            {/* BÖLÜM 1 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 mt-1">
                    <Flame className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    VLCKD nedir ve normal ketodan farkı ne?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> VLCKD (Very Low-Calorie
                    Ketogenic Diet), günlük kalori alımını 600&ndash;800
                    kcal&apos;ye düşürürken karbonhidratları ciddi şekilde
                    kısıtlayan, tıbbi gözetim altında uygulanan bir diyet
                    protokolüdür. Standart ketojenik diyetten çok daha yoğun
                    ve kısa sürelidir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Ketojenik diyet, vücudu enerji kaynağı olarak karbonhidrat
                  yerine yağ kullanmaya zorlayan bir beslenme yaklaşımıdır.
                  VLCKD ise bu prensibi daha da ileri taşır: günlük kalori
                  alımı çok düşük tutulurken, protein alımı korunur ve
                  karbonhidrat neredeyse tamamen kısıtlanır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu süreçte vücut &quot;ketoz&quot; durumuna geçer: karaciğer
                  yağ asitlerinden keton cisimleri üretir ve bunlar enerji
                  kaynağı olarak kullanılır. Araştırma, ketozun lipödem
                  dokusundaki inflamasyonu azaltmada önemli bir rol
                  oynayabileceğini göstermektedir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    VLCKD temel ilkeleri:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Günlük kalori: 600&ndash;800 kcal
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Karbonhidrat: Günde 20&ndash;50 gram
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Protein: Vücut ağırlığına göre hesaplanır (kas kaybını
                      önlemek için)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Süre: Genellikle 8&ndash;12 hafta, ardından kademeli
                      geçiş
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <HeartPulse className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Ketoz lipödem inflamasyonunu nasıl azaltır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Keton cisimleri, özellikle
                    beta-hidroksibutirat, doğrudan anti-inflamatuar etki
                    gösterir. NLRP3 inflamazom aktivasyonunu baskılayarak
                    lipödem dokusundaki kronik inflamasyonu azaltabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem yalnızca bir yağ birikimi hastalığı değildir &mdash;
                  aynı zamanda kronik bir inflamasyon durumudur. Lipödem yağ
                  dokusunda pro-inflamatuar sitokinler (IL-6, TNF-alfa)
                  yüksektir ve bu durum ağrı, hassasiyet ve ödemin temel
                  nedenlerinden biridir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Araştırma, ketozun bu inflamatuar süreci birden fazla
                  mekanizma ile baskılayabildiğini göstermektedir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>NLRP3 baskılama:</strong> Keton cisimleri,
                      inflamasyonun ana tetikleyicisi olan NLRP3 inflamazom
                      kompleksini doğrudan inhibe eder.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Oksidatif stres azalması:</strong> Ketoz, serbest
                      radikal üretimini azaltarak doku hasarını sınırlar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Adipokin profili iyileşmesi:</strong> Yağ
                      dokusundan salınan inflamatuar maddelerin dengesi
                      düzelir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ağrı azalması:</strong> İnflamasyon düştükçe
                      lipödem ağrısı ve hassasiyet belirgin şekilde azalır.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Scale className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    VLCKD diğer diyetlerle nasıl karşılaştırılır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Derlemeye göre VLCKD, Akdeniz
                    diyeti ve aralıklı oruç ile karşılaştırıldığında lipödem
                    semptomlarında daha belirgin iyileşme sağlamıştır. Ancak
                    her üç yaklaşım da belirli faydalar sunmaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Araştırma, üç farklı diyet yaklaşımının lipödem üzerindeki
                  etkilerini karşılaştırmıştır:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4 mb-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Diyet karşılaştırması:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>VLCKD:</strong> Ağrı azalması, ödem
                        düzelmesi ve inflamatuar belirteçlerde en belirgin
                        iyileşme. Ancak en zor uygulanabilir protokol.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Akdeniz diyeti:</strong> Anti-inflamatuar
                        özellikler taşır, uzun vadeli uyum daha kolaydır.
                        Zeytinyağı, balık ve sebze ağırlıklı beslenme lipödem
                        için de faydalı bulunmuştur.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Aralıklı oruç:</strong> Otolik süreçleri
                        aktive edebilir ve inflamasyonu azaltabilir. Ancak
                        lipödem özelinde kanıtlar sınırlıdır.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Önemli nokta şudur: VLCKD en güçlü sonuçları gösterse de,
                  uzun vadede sürdürülmesi zor bir protokoldür. Pek çok uzman,
                  kısa süreli VLCKD sonrasında Akdeniz diyetine geçişi
                  önermektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <Utensils className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem hastası olarak VLCKD&apos;yi nasıl uygulayabilirim?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> VLCKD mutlaka tıbbi gözetim
                    altında uygulanmalıdır. Kendiniz başlamayın &mdash; bir
                    beslenme uzmanı veya endokrinolog eşliğinde, kan
                    değerleriniz takip edilerek yürütülmelidir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  VLCKD, evde kendi başınıza deneyebileceğiniz bir diyet
                  değildir. Çok düşük kalori alımı ciddi riskleri beraberinde
                  getirir ve tıbbi gözetim şarttır. İşte dikkat etmeniz
                  gereken pratik noktalar:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Uzman desteği:</strong> Lipödem konusunda
                      deneyimli bir diyetisyen veya endokrinolog ile
                      çalışın. Türkiye&apos;de lipödem-beslenme konusunda
                      uzmanlaşan az sayıda merkez bulunmaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kan takibi:</strong> Başlangıçta ve düzenli
                      aralıklarla kan değerleriniz (elektrolit, böbrek, karaciğer
                      fonksiyonları) kontrol edilmelidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kademeli geçiş:</strong> VLCKD sonlandırıldığında
                      ani karbonhidrat yüklemesinden kaçının. Kademeli olarak
                      Akdeniz tarzı beslenmeye geçin.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hidrasyon:</strong> Ketoz sırasında su kaybı artar.
                      Günde en az 2.5&ndash;3 litre su tüketin.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompresyon devam etmeli:</strong> Diyet
                      değişikliği sırasında kompresyon tedavisini ve fiziksel
                      aktiviteyi sürdürün.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    VLCKD güvenli mi? Riskler ve kontrendikasyonlar
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Tıbbi gözetim altında VLCKD
                    genel olarak güvenli bulunmuştur. Ancak böbrek hastalığı,
                    tip 1 diyabet, karaciğer yetmezliği ve hamilelik gibi
                    durumlarda kesinlikle uygulanmamalıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Her güçlü tedavi gibi, VLCKD&apos;nin de riskleri vardır.
                  Araştırma, olası yan etkileri ve kontrendikasyonları
                  şeffaf bir şekilde değerlendirmektedir:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4 mb-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Olası yan etkiler:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      İlk günlerde baş ağrısı, halsizlik (&quot;keto gribi&quot;)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Kabızlık veya sindirim sorunları
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Elektrolit dengesizliği (özellikle magnezyum, potasyum)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Kas krampları (yeterli protein ve mineral alımıyla
                      önlenebilir)
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bu yan etkiler genellikle geçicidir ve uygun tıbbi destek
                  ile yönetilebilir. Ancak unutmayın: VLCKD bir yaşam tarzı
                  değil, sınırlı süreli bir terapötik müdahaledir. Uzun
                  vadeli beslenme stratejiniz, anti-inflamatuar prensiplere
                  dayalı dengeli bir diyet olmalıdır.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEMPTOM TESTİ CTA */}
      <section className="py-10 md:py-12 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="bg-[#1A6B5A] rounded-xl p-8 text-white text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3 font-serif">
                Bu belirtiler size tanıdık mı geldi?
              </h2>
              <p className="text-[#E8F5F0] leading-relaxed mb-6 max-w-xl mx-auto">
                Bilimsel semptom testimiz lipödem riskinizi 2 dakikada
                değerlendirmenize yardımcı olur. Sonuçlarınız tamamen gizlidir.
              </p>
              <Link
                href="/araclar/lipodem-semptom-testi"
                className="inline-flex items-center gap-2 bg-white text-[#15594A] px-7 py-3 rounded-lg font-semibold hover:bg-[#E8F5F0] transition-colors"
              >
                Semptom Testini Başlat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* İLGİLİ MAKALELER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 font-serif">
            İlgili yazılar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ilgiliYazilar.map((yazi) => (
              <Link
                key={yazi.slug}
                href={yazi.slug}
                className="group block bg-stone-50 rounded-xl border border-stone-200 p-5 card-hover"
              >
                <span className="text-xs font-semibold text-[#1A6B5A] mb-2 block">
                  {yazi.kategori}
                </span>
                <h3 className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-[#1A6B5A] transition-colors">
                  {yazi.baslik}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A6B5A] mt-3 group-hover:text-[#15594A] transition-colors">
                  Oku
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TIBBİ DISCLAIMER */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex items-start gap-3 text-sm text-stone-500">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-600 mb-1">
                Tıbbi sorumluluk reddi
              </p>
              <p className="leading-relaxed">
                Bu makale genel bilgilendirme amaçlıdır ve tıbbi tavsiye
                niteliği taşımaz. Lipödem tanı ve tedavisi için mutlaka
                alanında uzman bir sağlık profesyoneline başvurunuz. Mevcut
                tedavinizi değiştirmeden veya yeni bir tedaviye başlamadan
                önce doktorunuza danışınız. Daha fazla bilgi için{" "}
                <Link
                  href="/tibbi-sorumluluk-reddi"
                  className="text-[#1A6B5A] hover:text-[#15594A] underline"
                >
                  tıbbi sorumluluk reddi
                </Link>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
