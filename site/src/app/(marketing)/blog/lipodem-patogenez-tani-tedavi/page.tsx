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
  Search,
  Stethoscope,
  HandHeart,
  Syringe,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödemin A'dan Z'ye Haritası: Patogenez, Tanı ve Tedavi | Lipödem Türkiye",
  description:
    "Lipödem neden oluşur? Patogenez mekanizmaları, tanı kriterleri ve güncel tedavi seçenekleri. Kompleks dekongestif terapi ve liposuction kanıtları.",
  openGraph: {
    title: "Lipödemin A'dan Z'ye Haritası: Patogenez, Tanı ve Tedavi",
    description:
      "Kadınların %10'unu etkileyen lipödemin patogenezi, klinik tanısı ve kanıta dayalı tedavi seçenekleri.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Dünya Lipödeme Uyandı: Görmezden Gelinen Hastalığın Hikayesi",
    slug: "/blog/lipodem-farkindalik-cagrisi",
    kategori: "Genel",
  },
  {
    baslik: "Lipödemin Modern Tanımı: Bir Alman Dermatologun Güncelleme Raporu",
    slug: "/blog/lipodem-guncel-guncelleme",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Yağı: Vücudu Hem Koruyan Hem Zorlayan Paradoks",
    slug: "/blog/lipodem-dost-dusman",
    kategori: "Araştırma",
  },
];

export default function LipodemPatogenezTaniTedaviPage() {
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
              <li className="text-stone-800 font-medium">Patogenez, Tanı ve Tedavi</li>
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
              11 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödemin A&apos;dan Z&apos;ye Haritası: Patogenez, Tanı ve Tedavi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Kadınların yaklaşık %10&apos;unu etkileyen lipödem, hala yeterince
            tanınmayan bir hastalıktır. Patofizyolojisinde değişen adipogenez,
            mikroanjiyopati ve lenfatik disfonksiyon rol oynar. Tanı klinik
            değerlendirmeye dayanır; henüz spesifik bir biyobelirteç yoktur.
            Bu makalede lipödemin mekanizmalarından tedavi seçeneklerine kadar
            tüm bilimsel haritayı çıkarıyoruz.
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
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Microscope className="w-5 h-5 text-purple-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem nasıl oluşur? Patogenez mekanizmaları
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemde yağ dokusu anormal
                    şekilde çoğalır (adipogenez bozukluğu), küçük damarlar
                    hasar görür (mikroanjiyopati) ve lenf sistemi yetersiz
                    kalır. Bu üçlü mekanizma birlikte ağrılı, orantısız yağ
                    birikimini açıklar.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin temelinde üç ana patofizyolojik mekanizma yer alır.
                  İlk olarak, <strong>adipogenez bozukluğu</strong> nedeniyle
                  yağ hücreleri hem sayıca artar (hiperplazi) hem de boyut
                  olarak büyür (hipertrofi). Bu süreç normal diyetle kontrol
                  edilemez &mdash; vücut bu bölgelerdeki yağı enerji kaynağı
                  olarak kullanmayı &quot;reddeder.&quot;
                </p>
                <p className="text-stone-700 leading-relaxed">
                  İkinci mekanizma <strong>mikroanjiyopati</strong>&apos;dir: yağ
                  dokusu içindeki küçük kan damarlarının duvarları zayıflar,
                  geçirgenlikleri artar. Bu nedenle lipödemli hastalar çok kolay
                  morarır ve dokulara sürekli sıvı sızar. Üçüncü olarak,
                  biriken sıvıyı taşıması gereken <strong>lenf sistemi</strong>{" "}
                  zamanla yetersiz kalır. İleri evrelerde bu durum sekonder
                  lenfödem gelişimine yol açabilir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Hormonal faktörler de patogenezde kritik rol oynar. Lipödem
                  hemen her zaman puberte, gebelik veya menopoz gibi hormonal
                  geçiş dönemlerinde başlar ya da kötüleşir. Bu durum
                  östrojenin yağ dokusu üzerindeki etkisiyle ilişkilendirilmektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <Search className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem neden yıllarca teşhis edilemiyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem için spesifik bir kan
                    testi veya görüntüleme yöntemi yoktur. Çoğu hekim bu
                    hastalığı tanımaz ve hastalar yıllarca &quot;obezite&quot;
                    veya &quot;lenfödem&quot; tanısı alır. Ortalama tanı süresi
                    10&ndash;12 yıldır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin en büyük trajedilerinden biri, tanı konulana kadar
                  geçen süredir. Araştırmalar, hastaların ortalama 10&ndash;12
                  yıl boyunca yanlış tanı aldığını göstermektedir. Bunun birkaç
                  temel nedeni vardır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tıp eğitiminde eksiklik:</strong> Lipödem birçok
                      tıp fakültesi müfredatında yer almaz. Hekimlerin büyük
                      çoğunluğu bu hastalıkla ilgili eğitim almadan mezun olur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Obezite ile karıştırılma:</strong> Lipödemli
                      hastalar sıklıkla &quot;diyet yap, kilo ver&quot; önerisi
                      alır. Ancak lipödem yağı diyetle erimez.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Biyobelirteç yokluğu:</strong> Tanıyı
                      doğrulayacak bir kan testi, genetik test veya
                      görüntüleme yöntemi henüz bulunmamaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Psikolojik damgalama:</strong> Hastalar
                      &quot;tembellik&quot; veya &quot;irade eksikliği&quot; ile
                      suçlanır ve doktora gitmeyi bırakır.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BOLUM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Stethoscope className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem klinik olarak nasıl tanı konur?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Tanı klinik muayeneye
                    dayanır: bilateral simetrik yağ birikimi, el ve ayakların
                    korunması (manşet belirtisi), ağrı ve hassasiyet, kolay
                    morarma ve aile öyküsü değerlendirilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tanısı deneyimli bir klinisyen tarafından fizik
                  muayene ve hasta öyküsü ile konulur. Tanı kriterleri şunlardır:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Klinik tanı kriterleri:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Her iki bacakta (ve/veya kolda) simetrik, orantısız yağ
                      birikimi
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      El ve ayak bileklerinde &quot;manşet belirtisi&quot;
                      &mdash; yağlanma aniden durur
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Dokunmada ağrı ve hassasiyet (palpasyon hassasiyeti)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Minimal travma ile kolay morarma eğilimi
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Diyet ve egzersizle etkilenmeyen inatçı yağ birikimi
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      Ailede benzer vücut tipinin bulunması (genetik yatkınlık)
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BOLUM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <HandHeart className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Kompleks dekongestif terapi (KDT) nedir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> KDT, lipödemin konservatif
                    tedavisinin temel taşıdır. Manuel lenf drenajı, kompresyon
                    tedavisi, egzersiz ve cilt bakımından oluşan çok bileşenli
                    bir yaklaşımdır. Semptomları hafifletir ancak hastalığı
                    tamamen ortadan kaldırmaz.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Kompleks dekongestif terapi, lipödem yönetiminde ilk basamak
                  tedavi olarak kabul edilir. Dört temel bileşeni vardır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Manuel lenf drenajı (MLD):</strong> Eğitimli bir
                      fizyoterapist tarafından uygulanan özel masaj tekniğidir.
                      Lenf sıvısının dolaşımını destekler, ödemi azaltır ve
                      ağrıyı hafifletir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompresyon tedavisi:</strong> Tıbbi kompresyon
                      çorapları veya bandajlama ile doku basıncı düzenlenir.
                      Düz örgü (flat-knit) kompresyon giysileri lipödem için
                      özellikle önerilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Dekongresyon egzersizleri:</strong> Kompresyon
                      giysisi giyilerek yapılan hafif-orta şiddette
                      egzersizler lenf pompasını çalıştırır. Yüzme, yürüyüş
                      ve yoga en çok önerilen aktivitelerdir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Cilt bakımı:</strong> Lipödemde cilt kuru ve
                      hassas olabilir. Düzenli nemlendirme enfeksiyon riskini
                      azaltır ve cildin bütünlüğünü korur.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  KDT hastanın yaşam kalitesini önemli ölçüde artırır; ancak
                  tek başına hastalığın ilerlemesini durduramayabilir. Bu
                  nedenle bazı hastalar için cerrahi seçenekler de
                  değerlendirilir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Syringe className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Liposuction lipödemde işe yarıyor mu? Kanıtlar ne diyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Gözlemsel çalışmalar, lipödem
                    için özelleştirilmiş liposuction tekniklerinin ağrı, ödem
                    ve yaşam kalitesinde belirgin iyileşme sağladığını
                    göstermektedir. Ancak henüz randomize kontrollü çalışma
                    bulunmamaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem liposuction&apos;ı kozmetik amaçlı liposuction&apos;dan
                  farklıdır. <strong>Tumescent lokal anestezi</strong> altında,
                  lenf damarlarını koruyan özel kanüller kullanılarak yapılır.
                  Su destekli liposuction (WAL) ve vibrasyonlu liposuction
                  (PAL) gibi teknikler lenf damarlarına daha az zarar verir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Gözlemsel çalışmalarda hastaların büyük çoğunluğunda ağrıda
                  belirgin azalma, morarma sıklığında düşüş, hareket
                  kabiliyetinde artış ve psikolojik iyilik halinde iyileşme
                  raporlanmıştır. Ancak bu sonuçlar randomize kontrollü
                  çalışmalarla henüz doğrulanmamıştır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Liposuction, KDT&apos;nin yerini almaz &mdash; tamamlayıcı bir
                  tedavi olarak düşünülmelidir. Ameliyat sonrası kompresyon
                  tedavisi ve düzenli takip şarttır. Türkiye&apos;de lipödem
                  liposuction&apos;ı yapan deneyimli merkezlerin sayısı artmaktadır;
                  ancak hekim seçiminde dikkatli olunmalıdır.
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
