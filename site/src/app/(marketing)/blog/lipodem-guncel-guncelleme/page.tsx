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
  GitCompareArrows,
  Baby,
  Layers,
  FlaskConical,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödemin Modern Tanımı: Bir Alman Dermatologun Güncelleme Raporu | Lipödem Türkiye",
  description:
    "Lipödemin güncel tanımı, bilateral simetri ve distal koruma özellikleri, hormonal bağlantılar, obezite ve lenfödemden farkları.",
  openGraph: {
    title: "Lipödemin Modern Tanımı: Bir Alman Dermatologun Güncelleme Raporu",
    description:
      "Lipödemin kronik bir hastalık olarak modern tanımı, hormonal bağlantıları ve ayırıcı tanı kriterleri.",
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

export default function LipodemGuncelGuncellemePage() {
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
              <li className="text-stone-800 font-medium">Modern Tanım ve Güncelleme</li>
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
              9 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödemin Modern Tanımı: Bir Alman Dermatologun Güncelleme Raporu
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, puberte sırasında veya sonrasında kadınlarda
            ekstremitelerin subkutan yağ dokusunu etkileyen kronik bir
            hastalıktır. Bilateral ekstremite şişliği, kolay morarma ve ağrı
            ile kendini gösterir; distal alanlar (el ve ayaklar) korunur.
            Hormonal faktörler hastalığın başlangıcında ve ilerlemesinde
            hayati bir rol oynar.
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
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemin güncel tanımı nedir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem, kadınlarda
                    ekstremitelerin subkutan yağ dokusunun kronik, ilerleyici
                    ve simetrik şekilde artmasıyla karakterize bir hastalıktır.
                    Ağrı, hassasiyet, kolay morarma ve psikolojik yük temel
                    özellikleridir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Modern dermatoloji literatüründe lipödem artık &quot;kozmetik
                  bir sorun&quot; olarak değil, kronik ve engelleyici bir
                  hastalık olarak tanımlanmaktadır. Alman dermatoloji okulunun
                  öncülük ettiği güncel tanıma göre lipödem:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      Kadınlarda görülen, kronik ve ilerleyici bir subkutan
                      yağ dokusu hastalığıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      Genellikle puberte, gebelik veya menopoz gibi hormonal
                      geçiş dönemlerinde başlar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      Bilateral simetrik yağ birikimi ile karakterizedir;
                      el ve ayaklar korunur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      Ağrı, hassasiyet, kolay morarma ve ödem temel klinik
                      bulgularıdır.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Bu güncel tanım, lipödemin &quot;sadece estetik&quot; bir sorun
                  olmadığını, ciddi fiziksel ve psikolojik sonuçları olan tıbbi
                  bir durum olduğunu vurgular. Alman S1 kılavuzu bu tanımı
                  esas almaktadır.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Layers className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Bilateral simetri ve distal koruma ne anlama gelir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemde yağlanma her iki
                    bacağı (ve/veya kolu) eşit şekilde etkiler. Ancak eller
                    ve ayaklar korunur &mdash; bu &quot;manşet belirtisi&quot;
                    lipödemin en ayırt edici özelliğidir ve onu lenfödemden
                    ayıran önemli bir kriterdir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin en belirgin klinik özelliklerinden biri{" "}
                  <strong>bilateral simetri</strong>&apos;dir: yağ birikimi her iki
                  bacakta (ve etkilenmişse her iki kolda) neredeyse aynı
                  şekilde görülür. Tek taraflı şişlik varsa, lipödem tanısı
                  sorgulanmalıdır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  İkinci kritik özellik <strong>distal koruma</strong>&apos;dır:
                  yağlanma bilekte aniden durur ve eller/ayaklar normal
                  kalır. Bu durum &quot;manşet belirtisi&quot; veya &quot;bilezik
                  belirtisi&quot; olarak bilinir. El sırtına baktığınızda normal
                  tendon ve damar yapısını görebilirsiniz, ancak bilek
                  hizasından itibaren belirgin bir hacim artışı başlar.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu iki özellik, lipödemi diğer ödem yapıcı hastalıklardan
                  ayırmada son derece değerlidir. Lenfödemde ise tipik olarak
                  parmaklar ve el/ayak sırtı da şişer; simetri zorunlu
                  değildir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <Baby className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Hormonlar lipödemde nasıl bir rol oynuyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem hemen her zaman
                    puberte, gebelik veya menopoz gibi hormonal değişim
                    dönemlerinde başlar ya da kötüleşir. Östrojenin yağ dokusu
                    üzerindeki etkisi araştırılmaktadır. Hormonal doğum
                    kontrolü ve hormon replasman tedavisi de tetikleyici
                    olabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin neredeyse yalnızca kadınları etkilemesi ve
                  hormonal geçiş dönemlerinde ortaya çıkması, hormonal
                  faktörlerin patofizyolojide merkezi bir rol oynadığına
                  işaret eder. En sık bildirilen başlangıç dönemleri:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Lipödemi tetikleyen hormonal dönemler:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <strong>Puberte:</strong> Hastaların büyük çoğunluğunda
                      lipödem ergenlik döneminde başlar
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <strong>Gebelik:</strong> Hamilelik sırasında veya
                      doğum sonrasında belirgin kötüleşme
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <strong>Menopoz:</strong> Östrojen düşüşü ile birlikte
                      semptomların yoğunlaşması
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <strong>Hormonal tedaviler:</strong> Oral kontraseptifler
                      veya hormon replasman tedavisi başlangıç tetikleyicisi
                      olabilir
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed mt-4">
                  Östrojenin lipödem yağ hücrelerindeki reseptör
                  ekspresyonunu ve adipogenezi nasıl etkilediği hala aktif
                  araştırma konusudur. Bu ilişkinin tam olarak anlaşılması,
                  gelecekte hormonal tedavi yaklaşımlarının geliştirilmesine
                  yol açabilir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <GitCompareArrows className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem, obezite ve lenfödemden nasıl ayrılır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Obezitede yağlanma tüm
                    vücutta homojendir ve diyet ile azaltılabilir. Lenfödemde
                    şişlik tek taraflı olabilir ve parmakları etkiler.
                    Lipödemde ise yağlanma simetriktir, diyetle erimez, eller
                    ve ayaklar korunur ve ağrı belirgindir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin en sık karıştırıldığı iki durum obezite ve
                  lenfödemdir. Bu üç durumun ayırt edilmesi doğru tedavi
                  için kritik öneme sahiptir:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Ayırıcı tanı tablosu:
                  </h3>
                  <ul className="space-y-3">
                    <li className="text-stone-700 text-sm">
                      <strong className="text-stone-800">Obezite:</strong>{" "}
                      Tüm vücutta homojen yağlanma. Diyet ve egzersizle
                      azaltılabilir. Ağrı ve kolay morarma karakteristik
                      değildir. BKİ ile koreledir.
                    </li>
                    <li className="text-stone-700 text-sm">
                      <strong className="text-stone-800">Lenfödem:</strong>{" "}
                      Genellikle tek taraflı veya asimetrik şişlik.
                      Parmakları ve el/ayak sırtını etkiler. Stemmer bulgusu
                      pozitiftir. Çukurlaşan (pitting) ödem görülür.
                    </li>
                    <li className="text-stone-700 text-sm">
                      <strong className="text-stone-800">Lipödem:</strong>{" "}
                      Bilateral simetrik yağlanma. Eller ve ayaklar
                      korunur. Diyetle erimez. Ağrı, hassasiyet ve kolay
                      morarma belirgindir. Stemmer bulgusu negatiftir.
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed mt-4">
                  Dikkat edilmesi gereken nokta: lipödem ve obezite veya
                  lipödem ve lenfödem birlikte bulunabilir. İleri evre
                  lipödemde sekonder lenfödem gelişebilir
                  (&quot;lipo-lenfödem&quot;). Bu kombinasyonlar tanıyı daha da
                  karmaşık hale getirir ve deneyimli bir klinisyen
                  gerektirmektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <FlaskConical className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemin modern anlayışı bize ne vaat ediyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemin mekanizmalarının
                    daha iyi anlaşılması, gelecekte biyobelirteçlere dayalı
                    erken tanı, hedefe yönelik ilaç tedavileri ve kişiye özel
                    tedavi yaklaşımlarının geliştirilmesine yol açabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Son on yılda lipödem araştırmalarında önemli bir ivme
                  yaşanmaktadır. Alman, Hollandalı ve ABD&apos;li araştırma
                  grupları hastalığın moleküler mekanizmalarını çözmeye
                  çalışmaktadır. Devam eden araştırma alanları:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Genetik çalışmalar:</strong> Ailesel geçiş
                      kalıplarının haritalanması ve sorumlu genlerin
                      belirlenmesi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Biyobelirteç arayışı:</strong> Tanıyı
                      doğrulayabilecek kan veya doku belirteçlerinin
                      geliştirilmesi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Görüntüleme teknikleri:</strong> MRI ve
                      ultrasonun lipödem yağ dokusunu normal yağdan ayırt
                      etme kapasitesinin araştırılması.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>İlaç tedavileri:</strong> Anti-inflamatuar
                      ajanlar ve adipogenez inhibitörlerinin potansiyel
                      kullanımı.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Modern anlayış, lipödemin tek bir tedaviyle çözülebilecek
                  basit bir hastalık olmadığını kabul eder. Ancak her yeni
                  bilimsel keşif, daha etkili tedavilere bir adım daha
                  yaklaştırmaktadır. Hastaların umutlu olmaları için somut
                  gerekçeler artmaktadır.
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
