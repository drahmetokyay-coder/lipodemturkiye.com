import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Microscope,
  Dna,
  Users,
  Lightbulb,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek | Lipödem Türkiye",
  description:
    "Lipödem araştırmalarında neredeyiz? Genetik yatkınlık, hormonal etkiler, damar disfonksiyonu ve geleceğin tedavi yaklaşımları hakkında güncel bilimsel veriler.",
  openGraph: {
    title: "Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek",
    description:
      "Lipödem neden hâlâ yeterince tanınmıyor? Güncel araştırma bulguları, multidisipliner yaklaşımlar ve geleceğin tedavi umutları.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor?",
    slug: "/blog/almanya-s2k-lipodem-kilavuzu",
    kategori: "Araştırma",
  },
  {
    baslik: "Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu",
    slug: "/blog/lenfodem-mi-lipodem-mi-farklar",
    kategori: "Genel",
  },
];

export default function LipodemIlerlemeZorluklarGelecekPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-[#E8F5F0] to-violet-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Lipödem Araştırmaları</li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
              <Tag className="w-3 h-3" />
              Araştırma
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              26 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, dünya genelinde kadınların yaklaşık %10&apos;unu etkileyen
            kronik ve ilerleyici bir hastalık olmasına rağmen hâlâ yeterince
            tanınmamaktadır. Alt ekstremitelerde orantısız yağ dokusu
            birikimi, kronik ağrı ve psikososyal sıkıntıyla karakterize bu
            hastalıkta güncel araştırmalar neler söylüyor? Bu makalede
            bilimsel ilerlemeyi, karşılaşılan zorlukları ve geleceğin tedavi
            umutlarını ele alıyoruz.
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
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Microscope className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem araştırmalarında bugün neredeyiz?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem araştırmaları son 10
                    yılda önemli ivme kazandı, ancak hastalığın kesin nedeni
                    hâlâ tam olarak aydınlatılamadı. Genetik, hormonal ve
                    vasküler faktörlerin etkileşimi araştırılıyor.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem ilk kez 1940 yılında Allen ve Hines tarafından
                  tanımlanmasına rağmen, uzun yıllar tıp literatüründe göz
                  ardı edildi. Bugün artık hastalığın prevalansının dünya
                  genelinde kadınların yaklaşık %10&apos;u olduğu tahmin
                  ediliyor &mdash; bu oran meme kanserinden bile yüksektir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Son yıllardaki araştırmalar, lipödemin basit bir
                  &quot;şişmanlık&quot; olmadığını, subkutan yağ dokusunda
                  yapısal ve işlevsel anormallikler içeren karmaşık bir
                  hastalık olduğunu ortaya koymuştur. Yağ hücrelerinin
                  hipertrofisi (büyümesi) ve hiperplazisi (çoğalması),
                  mikrodamar geçirgenliğinin artması ve kronik düşük düzeyli
                  inflamasyon hastalığın temel mekanizmaları arasındadır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Buna rağmen lipödem, birçok ülkede hâlâ resmi bir hastalık
                  kodu (ICD) ile tanınmamaktadır. Bu durum hem tanıyı hem de
                  tedaviye erişimi zorlaştırmaktadır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0 mt-1">
                    <Dna className="w-5 h-5 text-violet-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemin genetik ve hormonal temelleri
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem güçlü bir genetik
                    yatkınlık gösterir. Hastaların büyük çoğunluğunda ailede
                    benzer vücut yapısı mevcuttur. Östrojen gibi kadın
                    hormonları hastalığın tetikleyicileri arasındadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Araştırmalar, lipödemli kadınların %60&apos;ından fazlasında
                  aile öyküsü olduğunu göstermektedir. Bu durum hastalığın
                  güçlü bir genetik bileşeni olduğuna işaret eder. Ancak
                  sorumlu gen veya genler henüz kesin olarak tanımlanamamıştır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Hormonal etkiler de son derece belirgindir. Lipödem
                  belirtileri genellikle puberte, gebelik veya menopoz gibi
                  hormonal değişim dönemlerinde başlar veya kötüleşir. Bu
                  durum, östrojen ve progesteron reseptörlerinin lipödemli yağ
                  dokusunda farklı şekilde ifade edildiğini düşündürmektedir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Puberte:</strong> Lipödem semptomlarının en sık
                      başladığı dönemdir. Östrojen seviyesindeki artış yağ
                      dokusunun orantısız büyümesini tetikleyebilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Gebelik:</strong> Hormonal dalgalanmalar ve sıvı
                      dengesi değişiklikleri lipödemi belirgin şekilde
                      kötüleştirebilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Menopoz:</strong> Östrojen düşüşü paradoksal
                      olarak yağ dağılımını değiştirerek lipödem
                      ilerlemesini hızlandırabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Vasküler disfonksiyon:</strong> Lipödemli
                      dokularda mikrodamar kırılganlığı artmıştır; bu durum
                      kolay morarma ve kronik ödeme yol açar.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem neden hâlâ yeterince tanınmıyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Tıp eğitiminde lipödeme
                    yeterince yer verilmemesi, obezite ile karıştırılması ve
                    objektif tanı kriterlerinin eksikliği ana nedenlerdir.
                    Hastaların doğru tanıya ulaşması ortalama 10&ndash;12 yıl
                    sürmektedir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin tanı sürecindeki en büyük engel, hastalığın birçok
                  sağlık profesyoneli tarafından bilinmemesidir. Tıp fakültesi
                  müfredatlarında lipödeme ayrılan süre son derece kısıtlıdır.
                  Bu durum, hastaların yıllarca &quot;kilo verin&quot; tavsiyesi
                  almasına ve kendilerini suçlamasına yol açmaktadır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Lipödem sıklıkla obezite, lenfödem veya lipoatrofi ile
                  karıştırılır. Ancak lipödemin ayırt edici özellikleri vardır:
                  diyet ve egzersize rağmen etkilenen bölgelerde kilo
                  verilememesi, simetrik tutulum, ayak ve ellerin korunması,
                  kolay morarma ve palpasyonda ağrı.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Tanı gecikmesinin nedenleri:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Tıp eğitiminde lipödem konusunun yetersiz işlenmesi
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Kesin tanı koyduracak bir laboratuvar testi veya
                      görüntüleme yönteminin bulunmaması
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Hastalığın &quot;kozmetik sorun&quot; olarak küçümsenmesi
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Birçok ülkede resmi ICD kodunun bulunmaması
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Obezite ile lipödem arasındaki farkın toplumda
                      bilinmemesi
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Lightbulb className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Geleceğin tedavi yaklaşımları ve umut veren gelişmeler
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Mevcut tedaviler yalnızca
                    semptom kontrolü sağlar; ancak hedefe yönelik
                    farmakoterapi, anti-inflamatuar ajanlar ve kişiselleştirilmiş
                    tıp yaklaşımları gelecekte küratif tedavilerin önünü
                    açabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bugün lipödem tedavisinde kompresyon terapisi, manuel lenf
                  drenajı ve liposuction gibi yöntemler kullanılmaktadır.
                  Ancak bunların hiçbiri hastalığı tamamen iyileştirmez;
                  yalnızca semptomları hafifletir. Bu durum, araştırmacıları
                  hastalığın kök nedenlerini hedefleyen yeni tedavi
                  stratejileri aramaya yöneltmiştir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Hedefe yönelik farmakoterapi:</strong> Yağ dokusu
                      inflamasyonunu ve lenfatik disfonksiyonu hedefleyen
                      ilaçlar araştırma aşamasındadır. Anti-inflamatuar
                      ajanlar ve vasküler düzenleyiciler umut vaad etmektedir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Genomik araştırmalar:</strong> Lipödeme yatkınlık
                      genlerinin tanımlanması, gelecekte genetik tarama ve
                      erken müdahale imkanı sunabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Biyobelirteçler:</strong> Lipödemi erken
                      evrelerde tespit edebilecek kan bazlı biyobelirteçler
                      üzerinde çalışılmaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Multidisipliner yaklaşım:</strong> Fleboloji,
                      endokrinoloji, fizyoterapi, beslenme ve psikoloji
                      alanlarının birlikte çalışması, hastaların yaşam
                      kalitesini önemli ölçüde artırabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kişiselleştirilmiş tıp:</strong> Her hastanın
                      genetik profili, hormonal durumu ve hastalık evresine
                      göre özelleştirilmiş tedavi planları gelecekte standart
                      hale gelebilir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem araştırmaları hâlâ erken aşamalarda olsa da, son
                  yıllardaki ivme umut vericidir. Hasta savunuculuğu
                  hareketleri, farkındalık kampanyaları ve artan araştırma
                  fonları hastalığın görünürlüğünü artırmaktadır. Siz de
                  farkındalık yaratarak bu sürece katkıda bulunabilirsiniz.
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
