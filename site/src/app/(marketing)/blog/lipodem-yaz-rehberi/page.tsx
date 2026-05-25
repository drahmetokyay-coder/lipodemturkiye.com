import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Droplets,
  ThermometerSun,
  Shirt,
  Timer,
  Shield,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi | Lipödem Türkiye",
  description:
    "Yaz aylarında lipödem semptomları neden artar? Sıcak intoleransı, kompresyon kullanımı, hidrasyon, egzersiz zamanlaması ve giyim önerileri.",
  openGraph: {
    title: "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi",
    description:
      "Yaz aylarında lipödem semptomları neden artar? Pratik öneriler ve bilimsel yaklaşımlar.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Kompresyon Çorabı Seçim Rehberi: Hangi Sınıf, Hangi Marka?",
    slug: "/blog/kompresyon-corabi-rehberi",
    kategori: "Tedavi",
  },
  {
    baslik: "Anti-İnflamatuar Kahvaltı: 5 Kolay Türk Mutfağı Tarifi",
    slug: "/blog/anti-inflamatuar-kahvalti",
    kategori: "Beslenme",
  },
  {
    baslik: "Lipödem ve Hamilelik: Bilmeniz Gereken 7 Şey",
    slug: "/blog/lipodem-hamilelik",
    kategori: "Genel",
  },
];

export default function LipodemYazRehberiPage() {
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
              <li className="text-stone-800 font-medium">Lipödem ve Yaz</li>
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
              22 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              6 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Yaz ayları lipödemli bireyler için özellikle zorlu olabilir.
            Sıcaklık arttıkça ödem şiddetlenir, ağrı yoğunlaşır ve kompresyon
            giysileri dayanılmaz hale gelebilir. Ancak doğru stratejilerle yazı
            çok daha rahat geçirmek mümkün. Bu rehberde bilimsel verilere
            dayalı pratik öneriler bulacaksınız.
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
                    <ThermometerSun className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Sıcak havalar lipödem semptomlarını neden artırır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Sıcaklık arttığında kan
                    damarları genişler (vazodilatasyon), kapiller geçirgenlik
                    artar ve dokular arası boşluklara daha fazla sıvı sızar. Bu
                    durum lipödemde zaten bozulmuş olan lenf drenajını daha da
                    zorlaştırır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemde yağ dokusu içindeki mikrodamar yapısı normalden
                  farklıdır. Kapillerlerin geçirgenliği artmıştır ve bu durum
                  kolay morarma ile kronik ödeme yol açar. Yaz sıcağı bu
                  mekanizmayı hızlandırır: damarlar genişler, sıvı kaçışı artar
                  ve bacaklardaki ağırlık hissi belirginleşir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Araştırmalar, lipödemli bireylerin sıcak ortamlarda sağlıklı
                  bireylere kıyasla daha fazla ödem geliştirdiğini
                  göstermektedir. Bu nedenle yaz aylarında semptomların
                  yoğunlaşması &quot;normal&quot; bir süreçtir &mdash; kendinizi
                  suçlamayın, ancak önlem alın.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Yazın kompresyon giysisi nasıl kullanılmalı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kompresyonu bırakmayın, ama
                    yazlık alternatiflere geçin. İnce dokuma, nefes alan
                    kumaşlar ve açık burunlu modeller sıcakta konforu artırır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Kompresyon tedavisi lipödem yönetiminin temel taşıdır ve yaz
                  aylarında &mdash; semptomların en yoğun olduğu dönemde &mdash;
                  bırakılmamalıdır. Ancak kışlık kalın kompresyon giysileri
                  sıcakta dayanılmaz olabilir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Yazlık kumaş:</strong> İnce, mikro-fiber dokuma
                      modelleri tercih edin. Birçok marka yaz serisi
                      üretmektedir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Açık burun:</strong> Ayak parmaklarının açık
                      kaldığı modeller hava sirkülasyonunu artırır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Sabah giyin:</strong> Ödem henüz artmadan, sabah
                      erken saatlerde giymeye başlayın.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Islak kompresyon:</strong> Kompresyon çorabını
                      giymeden önce hafifçe nemlendirmek serinlik sağlar.
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
                    <Droplets className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Hidrasyon lipödem ödemini artırır mı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Hayır, tam tersi. Yeterli su
                    tüketimi lenf drenajını destekler ve ödemi azaltmaya yardımcı
                    olur. Su kısıtlamak ödemi artırabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Yaygın bir yanılgı, fazla su içmenin ödemi artıracağıdır.
                  Oysa lipödemdeki ödem, sıvı alımından değil, damar
                  geçirgenliğinden ve lenf sistemi yetmezliğinden
                  kaynaklanır. Dehidrasyon vücudu sıvı tutmaya yönelterek ödemi
                  daha da kötüleştirebilir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Yaz hidrasyon önerileri:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Günde en az 2&ndash;2.5 litre su tüketin (aktivite
                      durumuna göre artırın)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Salatalık, karpuz, kavun gibi su oranı yüksek meyveler
                      tercih edin
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Tuzlu ve işlenmiş gıdalardan kaçının &mdash; sodyum sıvı
                      tutulumunu artırır
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Bitki çayları (özellikle zencefil ve nane) anti-inflamatuar
                      etki sağlayabilir
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <Timer className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Yaz aylarında egzersiz ne zaman yapılmalı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Sabah erken (07:00&ndash;09:00)
                    veya akşam geç (19:00&ndash;21:00) saatlerde, serin
                    ortamlarda egzersiz yapın. Öğle sıcağından kesinlikle
                    kaçının.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Egzersiz lipödem yönetiminde kritik öneme sahiptir; ancak
                  sıcakta yapılan egzersiz faydadan çok zarar verebilir. Yüksek
                  sıcaklıkta egzersiz vazodilatasyonu artırır, ödem şiddetlenir
                  ve ağrı yoğunlaşır.
                </p>

                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Su egzersizleri:</strong> Havuz veya denizde
                      yürüyüş, aqua aerobik lipödem için en ideal yaz
                      egzersizidir. Suyun hidrostatik basıncı doğal kompresyon
                      sağlar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Yürüyüş:</strong> Gölge parkurlar tercih edin.
                      Kompresyon giysisiyle yürüyün ve bol su taşıyın.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Yoga ve pilates:</strong> Klimalı bir ortamda hafif
                      yoga veya mat pilates lenf akışını destekler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Egzersiz sonrası:</strong> Serinleyin, bacakları
                      yukarı kaldırın ve soğuk su duşu yapın.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <Shirt className="w-5 h-5 text-[#E8916D]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Yazın ne giymeliyim?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Bol, nefes alan doğal kumaşlar
                    (keten, pamuk) tercih edin. Dar giysiler lenf akışını
                    engelleyebilir. Kompresyon giysisinin üzerine rahat
                    kıyafetler giyin.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemde giyim seçimi yalnızca konfor değil, aynı zamanda
                  tedavinin bir parçasıdır. Yanlış giyim lenf akışını
                  engelleyerek ödemi artırabilir, doğru giyim ise kompresyon
                  tedavisini destekler.
                </p>

                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8916D] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kumaş:</strong> Keten ve pamuk karışımları en iyi
                      hava akışını sağlar. Sentetik kumaşlardan kaçının.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8916D] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kesim:</strong> A-line etekler, geniş paça
                      pantolonlar ve maxi elbiseler kompresyon giysisinin üzerine
                      rahat oturur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8916D] mt-2.5 shrink-0" />
                    <span>
                      <strong>Renk:</strong> Açık renkler güneş ışığını yansıtır
                      ve daha serin tutar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8916D] mt-2.5 shrink-0" />
                    <span>
                      <strong>Ayakkabı:</strong> Destekleyici ama sıkmayan,
                      ayağı nefes aldıran sandaletler tercih edin.
                    </span>
                  </li>
                </ul>
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
