import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Activity,
  Stethoscope,
  Dumbbell,
  Pill,
  HeartHandshake,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Damar Hekimlerinin Gözünden Lipödem: Klinik Özet | Lipödem Türkiye",
  description:
    "Vasküler tıp perspektifinden lipödem: damar hastalıklarından ayırıcı tanı, egzersiz fizyolojisi ve damar hekimi yaklaşımıyla tedavi yönetimi.",
  openGraph: {
    title: "Damar Hekimlerinin Gözünden Lipödem: Klinik Özet",
    description:
      "Lipödem, damar hekimlerinin pratiğinde sık karşılaşılan ama sıklıkla gözden kaçan bir durumdur. Ayırıcı tanı ve tedavi yaklaşımları.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödemin A'dan Z'ye Haritası: Patogenez, Tanı ve Tedavi",
    slug: "/blog/lipodem-patogenez-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Yağı: Vücudu Hem Koruyan Hem Zorlayan Paradoks",
    slug: "/blog/lipodem-dost-dusman",
    kategori: "Araştırma",
  },
  {
    baslik: "Dünya Lipödeme Uyandı: Görmezden Gelinen Hastalığın Hikayesi",
    slug: "/blog/lipodem-farkindalik-cagrisi",
    kategori: "Genel",
  },
];

export default function DamarHekimlerindenLipodemPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Damar Hekimlerinden</li>
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
              7 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Damar Hekimlerinin Gözünden Lipödem: Klinik Özet
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, vasküler tıp pratiğinde sık karşılaşılan ancak sıklıkla
            gözden kaçan bir durumdur. Bacaklarda şişlik şikayetiyle başvuran
            kadınlarda damar hekimleri, venöz yetmezlik ve lenfödem yanı sıra
            lipödemi de ayırıcı tanıda düşünmelidir. Bu klinik özet, lipödemin
            damar hekimleri perspektifinden değerlendirilmesini sunmaktadır.
          </p>
        </div>
      </section>

      {/* ICERIK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="prose prose-stone prose-lg max-w-none">
            {/* BOLUM 1 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Damar hekimleri lipödemi neden önemsemeli?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Bacaklarda şişlik, ağırlık
                    hissi ve ağrı ile başvuran kadınların önemli bir kısmında
                    lipödem mevcuttur. Venöz yetmezlik veya lenfödem tedavisi
                    uygulanan ancak yanıt alınamayan hastalarda lipödem akla
                    gelmelidir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Vasküler tıp kliniklerinde bacak şişliği en sık başvuru
                  nedenlerinden biridir. Kronik venöz yetmezlik,
                  derin ven trombozu ve lenfödem ilk akla gelen tanılar
                  arasındadır. Ancak bu şikayetlerle başvuran kadınların
                  hatırı sayılır bir oranında asıl neden lipödemdir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Lipödem, vasküler hastalıklarla sıklıkla bir arada
                  bulunabilir. Kronik venöz yetmezliğin lipödem semptomlarını
                  ağırlaştırdığı bilinmektedir. Ayrıca ileri evre lipödemde
                  lenfatik yetmezlik gelişerek &quot;lipo-lenfödem&quot; tablosu
                  ortaya çıkabilir. Bu nedenle damar hekimlerinin lipödemi
                  tanıyabilmesi ve multidisipliner yaklaşımı benimsemesi
                  büyük önem taşır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Araştırmalar, lipödemli hastaların ortalama 3&ndash;4 farklı
                  hekime başvurduktan sonra doğru tanı aldığını göstermektedir.
                  Damar hekimleri bu süreçte kilit bir kapı tutabilir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Stethoscope className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem damar hastalıklarından nasıl ayırt edilir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kronik venöz yetmezlikte cilt
                    değişiklikleri ve tek taraflı olabilme; lenfödemde
                    parmakları etkileyen, çukurlaşan ödem; lipödemde ise
                    bilateral simetrik, ağrılı yağ birikimi ve korunan distal
                    bölgeler ayırt edici özelliklerdir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Damar hekimleri bacak şişliğinde ayırıcı tanıda üç temel
                  durumu değerlendirmelidir:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Ayırıcı tanı ipuçları:
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-stone-700 text-sm">
                      <strong className="text-stone-800">Kronik venöz
                      yetmezlik:</strong> Varisler, cilt pigmentasyonu,
                      lipodermoskleroz, venöz ülser. Doppler ultrasonla
                      venöz reflü gösterilir. Şişlik gün sonunda artar,
                      bacak elevasyonuyla azalır.
                    </li>
                    <li className="text-stone-700 text-sm">
                      <strong className="text-stone-800">Lenfödem:</strong>{" "}
                      Genellikle unilateral veya asimetrik. Ayak sırtı ve
                      parmaklar şişer. Stemmer bulgusu pozitiftir. Başlangıçta
                      çukurlaşan (pitting) ödem, ilerleyen evrede fibrozis
                      gelişir.
                    </li>
                    <li className="text-stone-700 text-sm">
                      <strong className="text-stone-800">Lipödem:</strong>{" "}
                      Bilateral simetrik. Ayaklar ve eller korunur (manşet
                      belirtisi). Stemmer bulgusu negatif. Palpasyonda ağrı
                      ve hassasiyet. Kolay morarma. Diyet ile azalmayan
                      inatçı yağ birikimi. Aile öyküsü sık pozitif.
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed mt-4">
                  Önemli bir not: bu üç durum birlikte bulunabilir. Lipödemli
                  bir hastada eşzamanlı kronik venöz yetmezlik veya sekonder
                  lenfödem olması nadir değildir. Bu nedenle kapsamlı bir
                  vasküler değerlendirme (Doppler ultrason dahil) her
                  durumda yapılmalıdır.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <Dumbbell className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemde egzersiz fizyolojisi nasıl farklıdır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemli bireylerde egzersiz
                    sırasında lenf drenajı ve venöz dönüş daha fazla zorlanır.
                    Kompresyon giysisiyle yapılan hafif-orta şiddette
                    egzersizler en büyük faydayı sağlar. Yüksek etkili
                    egzersizler semptomları artırabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Egzersiz, lipödem yönetiminde önemli bir rol oynar; ancak
                  egzersizin türü ve şiddeti kritik öneme sahiptir. Lipödemli
                  bireylerde egzersiz fizyolojisi birkaç açıdan farklılık
                  gösterir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Lenf drenajı:</strong> Lipödemde zaten
                      bozulmuş olan lenfatik drenaj, egzersiz sırasında artan
                      sıvı üretimiyle daha da zorlanır. Bu nedenle
                      kompresyon giysisi ile egzersiz yapmak lenfatik
                      pompayı destekler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ağrı eşiği:</strong> Lipödemli doku mekanik
                      strese karşı daha hassastır. Koşma, zıplama gibi yüksek
                      etkili aktiviteler ağrıyı ve morarmayı artırabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Su egzersizleri:</strong> Suyun hidrostatik
                      basıncı doğal bir kompresyon etkisi yaratır. Yüzme,
                      aqua aerobik ve suda yürüyüş lipödem için ideal
                      egzersiz formlarıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Venöz dönüş:</strong> Uzun süre ayakta durma
                      veya oturma venöz göllemeyi artırır. Düzenli hareket
                      araları ve baldır pompası egzersizleri önemlidir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Damar hekimleri, lipödemli hastalara venöz yetmezlik
                  yönetiminde verilen egzersiz reçetelerinin lipödem
                  özelliklerine uyarlanması gerektiğini bilmelidir.
                  Kompresyon giysisi olmadan yüksek şiddette egzersiz
                  önerisi, hastanın semptomlarını artırabilir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Pill className="w-5 h-5 text-purple-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Vasküler uzman yaklaşımıyla tedavi yönetimi
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Damar hekimi perspektifinden
                    lipödem tedavisi; eşlik eden venöz patolojinin
                    tedavisini, uygun kompresyon reçetesini, egzersiz
                    planlamasını ve gerektiğinde cerrahi yönlendirmeyi
                    kapsar. Multidisipliner yaklaşım şarttır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Damar hekimleri lipödem tedavisinde birkaç kritik rolü
                  üstlenebilir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Eşlik eden venöz patoloji:</strong> Varislerin
                      veya venöz reflünün tedavisi lipödem semptomlarını
                      hafifletebilir. Endovenöz ablasyon veya skleroterapi
                      gereken hastalarda bu tedaviler önceliklendirilmelidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompresyon reçetesi:</strong> Lipödem için düz
                      örgü (flat-knit) kompresyon giysileri önerilir. Damar
                      hekimleri doğru sınıf ve tür seçiminde deneyimlidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Lenfatik değerlendirme:</strong> İleri evre
                      lipödemde sekonder lenfödem gelişip gelişmediğinin
                      değerlendirilmesi gerekir. Lenfossintigrafi bu amaçla
                      kullanılabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Cerrahi yönlendirme:</strong> Konservatif
                      tedaviye rağmen semptomları devam eden hastalarda
                      lipödem liposuction deneyimi olan merkezlere
                      yönlendirme yapılmalıdır.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BOLUM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <HeartHandshake className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Hastalar damar hekiminden ne beklemelidir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemden şüpheleniyorsanız,
                    damar hekimi ziyaretinizde kapsamlı bir bacak
                    değerlendirmesi, Doppler ultrason, eşlik eden venöz
                    sorunların tedavisi ve gerekirse uzman yönlendirmesi
                    isteyebilirsiniz. Hekiminize lipödem olasılığından
                    bahsedin.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemden şüphelenen bir kadın olarak damar hekiminize
                  başvurduğunuzda, muayenenizden en iyi sonucu almak için
                  şu adımları izleyebilirsiniz:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Damar hekimi randevunuz için hazırlık:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Semptomlarınızı (ağrı, şişlik, morarma) ne zaman
                      başladığını, hangi dönemlerde kötüleştiğini not edin
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Ailenizde benzer şikayetleri olan kadınları
                      (anne, teyze, kız kardeş) belirtin
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Daha önce uyguladığınız diyetlerin bacak ölçülerinizi
                      değiştirip değiştirmediğini bildirin
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Hekiminizden Doppler ultrason ve kapsamlı bacak muayenesi
                      isteyin
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Lipödem olasılığını açıkça sormaktan çekinmeyin
                      &mdash; farkındalık yaratmak da sizin hakkınızdır
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed mt-4">
                  Her damar hekimi lipödem konusunda deneyimli olmayabilir
                  &mdash; bu normal bir durumdur. Önemli olan doğru soruların
                  sorulması ve gerektiğinde lipödem konusunda uzmanlaşmış bir
                  merkeze yönlendirilmenizdir. Kendi sağlığınızın en büyük
                  savunucusu sizsiniz.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEMPTOM TESTI CTA */}
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

      {/* ILGILI MAKALELER */}
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

      {/* TIBBI DISCLAIMER */}
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
