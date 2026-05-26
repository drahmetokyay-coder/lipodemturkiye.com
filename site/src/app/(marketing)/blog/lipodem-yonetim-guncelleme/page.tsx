import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  BookOpen,
  Scale,
  Activity,
  Brain,
  Target,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi? | Lipödem Türkiye",
  description:
    "Lipödem tedavisinde kanıt düzeyi yüksek yaklaşımlar ve yaygın efsaneler. Multimodal yönetim, psikolojik destek ve gerçekçi beklentiler.",
  openGraph: {
    title: "Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi?",
    description:
      "Lipödem tedavisinde gerçek ile efsaneyi ayırın. Kanıta dayalı multimodal yaklaşım rehberi.",
  },
};

const ilgiliYazilar = [
  {
    baslik:
      "ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı?",
    slug: "/blog/abd-lipodem-standart-bakim",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Ağrısının Nedeni ve Yönetimi: Pratik Bir Rehber",
    slug: "/blog/lipodem-agrisi-nedenleri-yonetimi",
    kategori: "Tedavi",
  },
  {
    baslik: "Lenfödem mi, Lipödem mi? Farklar ve Benzerlikler",
    slug: "/blog/lenfodem-mi-lipodem-mi-farklar",
    kategori: "Araştırma",
  },
];

export default function LipodemYonetimGuncellemePage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-emerald-50 to-teal-50 py-12 md:py-16">
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
                Yönetim Güncelleme
              </li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-[#E8F5F0] text-[#15594A] border-[#93D4BE]">
              <Tag className="w-3 h-3" />
              Tedavi
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              13 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, alt ve bazen üst ekstremitelerde anormal yağ birikimine
            neden olur. Patofizyolojik değişiklikler sadece yağ dokusuyla
            sınırlı kalmaz; lenfatik disfonksiyon, kardiyovasküler
            değişkenlikler ve kapiller kırılganlık da tabloya eklenir. Peki
            tedavide neyin kanıtı var, neyin efsane olduğunu nasıl
            ayıracağız?
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
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Kanıt düzeyi yüksek tedaviler hangileri?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kompresyon tedavisi, manuel
                    lenfatik drenaj (MLD), anti-inflamatuar beslenme, düzenli
                    egzersiz ve tümesent liposuction en güçlü kanıt
                    desteğine sahip tedavilerdir. Bu yaklaşımlar birlikte
                    uygulandığında en iyi sonucu verir (PMID: 33870676).
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tedavisinde &quot;tek doğru&quot; yoktur &mdash;
                  multimodal (çok yönlü) yaklaşım esastır. Güncel
                  literatür, aşağıdaki tedavilerin etkinliğini en güçlü
                  şekilde desteklemektedir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompresyon tedavisi:</strong> Düz örgü kompresyon
                      giysiler ödem yönetiminde temel taşıdır. Düzenli
                      kullanım ağrıyı azaltır ve lenf drenajını destekler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Manuel lenfatik drenaj (MLD):</strong> Eğitimli
                      fizyoterapistler tarafından uygulanan MLD, lenfatik
                      akışı artırır ve ödem birikimini azaltır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Egzersiz:</strong> Düşük yoğunluklu aerobik
                      egzersiz (su egzersizleri, yürüyüş) ve hafif direnç
                      antrenmanları semptomları hafifletir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tümesent liposuction:</strong> Uygun hastalarda
                      ağrıda %70&ndash;80 azalma, mobilite ve yaşam
                      kalitesinde belirgin iyileşme sağlayabilir.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <Scale className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Efsaneler ve gerçekler: Hangisi doğru?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> &quot;Diyet yaparsanız
                    geçer&quot;, &quot;sadece estetik bir sorun&quot; ve
                    &quot;egzersiz çözüm değil&quot; gibi yaygın
                    söylemler bilimsel olarak yanlıştır. Lipödem gerçek bir
                    hastalıktır ve tedavi edilebilir &mdash; ancak
                    &quot;tamamen iyileşir&quot; demek de bir efsanedir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem hakkındaki efsaneler hem hastaları hem de sağlık
                  profesyonellerini yanıltabilir. Bu efsaneleri çürütmek,
                  doğru tedaviye erişimi hızlandırır.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Efsane vs. Gerçek:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>
                        <strong>Efsane:</strong> &quot;Diyet yaparsanız lipödem
                        geçer.&quot;{" "}
                        <strong className="text-[#1A6B5A]">Gerçek:</strong>{" "}
                        Lipödem yağı diyete dirençlidir. Ancak
                        anti-inflamatuar beslenme inflamasyonu azaltarak
                        semptomları hafifletebilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>
                        <strong>Efsane:</strong> &quot;Lipödem sadece estetik
                        bir sorundur.&quot;{" "}
                        <strong className="text-[#1A6B5A]">Gerçek:</strong>{" "}
                        Lipödem ağrı, mobilite kaybı, lenfatik disfonksiyon
                        ve ciddi psikolojik etkilere yol açan tıbbi bir
                        hastalıktır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>
                        <strong>Efsane:</strong> &quot;Egzersiz lipödeme
                        fayda etmez.&quot;{" "}
                        <strong className="text-[#1A6B5A]">Gerçek:</strong>{" "}
                        Egzersiz lipödem yağını eritemez ancak lenf drenajını
                        destekler, inflamasyonu azaltır ve yaşam kalitesini
                        artırır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <span>
                        <strong>Efsane:</strong> &quot;Liposuction lipödemi
                        tamamen tedavi eder.&quot;{" "}
                        <strong className="text-[#1A6B5A]">Gerçek:</strong>{" "}
                        Liposuction semptomları önemli ölçüde azaltır ancak
                        lipödem kronik bir hastalıktır ve cerrahi sonrası da
                        konservatif tedaviye devam edilmelidir.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Multimodal yönetim yaklaşımı ne demek?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Multimodal yaklaşım,
                    kompresyon, fizik tedavi, beslenme, egzersiz, psikolojik
                    destek ve gerektiğinde cerrahiyi bir arada kullanan
                    bütünleşik tedavi modelidir. Tek bir tedavi yöntemi
                    lipödemi yönetmek için yeterli değildir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem, yağ dokusu, lenfatik sistem, damar yapısı ve
                  sinir sistemi dahil birçok sistemi etkiler. Bu nedenle
                  tedavisi de tek bir yöntemle sınırlı kalmamalıdır.
                  Güncel kanıtlar, birden fazla tedavi yönteminin
                  birlikte uygulanmasının sinerjik (birbirini güçlendiren)
                  etki yarattığını göstermektedir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Örneğin: Kompresyon giyerek egzersiz yapmak, tek başına
                  egzersizden daha etkilidir. Anti-inflamatuar beslenme
                  ile MLD&apos;yi birleştirmek, ödem yönetimini
                  iyileştirir. Psikolojik destek ile fiziksel tedaviyi
                  birlikte sürdürmek, tedaviye uyumu artırır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Psikolojik destek neden tedavinin ayrılmaz parçası?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemli kadınlarda
                    depresyon, anksiyete ve yeme bozukluğu oranları genel
                    popülasyondan yüksektir. Beden imajı sorunları,
                    yanlış tanı geçmişi ve toplumsal stigma psikolojik
                    yükü artırır. Tedavi uyumu için mental sağlık desteği
                    kritiktir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin psikolojik etkisi genellikle hafife alınır. Ancak
                  araştırmalar, lipödemli kadınların yaşam kalitesinin ciddi
                  kronik hastalıklara (diyabet, kalp yetmezliği) sahip
                  hastalarla karşılaştırılabilir düzeyde düşük olduğunu
                  göstermektedir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tanı gecikme travması:</strong> Ortalama tanı
                      süresi 10&ndash;15 yıldır. Yıllarca &quot;daha az ye,
                      daha çok hareket et&quot; denmek ciddi öz-değer
                      sorunlarına yol açar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Beden imajı:</strong> Orantısız vücut şekli
                      nedeniyle kıyafet bulmak, sosyal etkinliklere katılmak
                      ve yakın ilişkiler kurmak zorlaşabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Duygusal yeme döngüsü:</strong> Stres ve
                      depresyon duygusal yemeyi tetikleyebilir; bu da
                      inflamasyonu artırarak lipödem semptomlarını
                      kötüleştirir ve kısır döngü oluşur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Önerilen yaklaşımlar:</strong> Bilişsel
                      davranışçı terapi (BDT), kabul ve kararlılık terapisi
                      (ACT), hasta destek grupları ve mindfulness temelli
                      stres yönetimi.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Target className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Gerçekçi beklentiler: Tedaviden ne beklemeliyim?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem kronik bir
                    hastalıktır ve &quot;tamamen iyileşme&quot; yerine
                    &quot;etkili yönetim&quot; hedeflenmelidir. Doğru tedavi
                    ile ağrıda belirgin azalma, mobilite artışı ve yaşam
                    kalitesinde önemli iyileşme mümkündür.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tedavisinde gerçekçi beklentiler hem motivasyonu
                  korur hem de hayal kırıklığını önler. Tedavi hedefleri
                  bireysel olarak belirlenmeli ve düzenli olarak
                  değerlendirilmelidir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Gerçekçi tedavi hedefleri:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Ağrı düzeyinde azalma (VAS skalasında %40&ndash;70
                      iyileşme hedeflenebilir)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Ödemde kontrol ve günlük dalgalanmalarda azalma
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Mobilite ve fonksiyonel kapasitenin korunması veya
                      artırılması
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Hastalığın ilerlemesinin yavaşlatılması
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Psikolojik iyilik halinin desteklenmesi ve yaşam
                      kalitesinin artırılması
                    </li>
                  </ul>
                </div>
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
                href="/araclar/semptom-testi"
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
