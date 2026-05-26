import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  ScanLine,
  Radio,
  Microscope,
  Activity,
  HelpCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Tanısında Görüntüleme: MR mı, Ultrason mu? | Lipödem Türkiye",
  description:
    "Lipödem tanısında ultrason, MR, BT ve lenfosintigrafi gibi görüntüleme yöntemlerinin karşılaştırmalı analizi. Hangi yöntem ne zaman tercih edilmeli?",
  openGraph: {
    title: "Lipödem Tanısında Görüntüleme: MR mı, Ultrason mu?",
    description:
      "Lipödem tanısında kullanılan görüntüleme yöntemlerinin sistematik değerlendirmesi. Ultrason, MR, BT ve lenfosintigrafi karşılaştırması.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem mi, Lenfödem mi? Farkları Anlamak",
    slug: "/blog/lenfodem-mi-lipodem-mi-farklar",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Klinik Özellikleri, Tanı ve Tedavi",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları",
    slug: "/blog/lipodem-bilmediklerimiz",
    kategori: "Araştırma",
  },
];

export default function LipodemGoruntulemeYontemleriPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-[#E8F5F0] to-indigo-50 py-12 md:py-16">
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
                Görüntüleme Yöntemleri
              </li>
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
              21 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Tanısında Görüntüleme: MR mı, Ultrason mu?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem tanısı halen klinik muayeneye dayansa da, görüntüleme
            yöntemleri tanıyı desteklemek ve diğer hastalıklardan ayırt etmek
            için giderek daha fazla kullanılmaktadır. Peki hangi görüntüleme
            yöntemi ne zaman tercih edilmeli? Sistematik bir derleme (PMID:
            37789512) bu soruyu yanıtlamaya çalışıyor.
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
                    <ScanLine className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Görüntüleme lipödem tanısında neden önemli?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem tanısı halen klinik
                    muayeneye dayalıdır ancak görüntüleme, lenfödem ve
                    obeziteden ayırıcı tanıda, hastalık evresini belirlemede
                    ve tedavi planlamasında kritik bilgiler sunar.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem sıklıkla lenfödem, obezite veya venöz yetmezlikle
                  karıştırılır. Klinik muayene tek başına her zaman yeterli
                  olmayabilir &mdash; özellikle erken evrelerde veya karışık
                  tablolarda. Görüntüleme yöntemleri, deri altı yağ dokusunun
                  yapısını, dağılımını ve lenf sisteminin fonksiyonunu objektif
                  olarak değerlendirmemizi sağlar.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Sistematik derleme, farklı görüntüleme yöntemlerinin lipödem
                  tanısındaki performansını karşılaştırmıştır. Sonuçlar umut
                  verici olsa da henüz tek bir &quot;altın standart&quot;
                  görüntüleme yöntemi bulunamamıştır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                    <Radio className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Ultrason lipödemde ne gösterir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Ultrason, lipödemde artmış
                    subkutan yağ kalınlığını, dermis kalınlaşmasını ve yağ
                    lobüllerinin yapısal değişikliklerini gösterebilir. Ucuz,
                    kolay erişilebilir ve radyasyon içermeyen ilk tercih
                    yöntemdir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Ultrasonografi, lipödem değerlendirmesinde en sık başvurulan
                  görüntüleme yöntemidir. Araştırma, ultrasonun lipödemli
                  hastalarda belirgin bulguları ortaya koyabildiğini
                  göstermiştir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Artmış subkutan kalınlık:</strong> Lipödemli
                      bireylerde deri altı yağ tabakası, aynı kilodaki sağlıklı
                      bireylere göre belirgin olarak daha kalındır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Eko yapısında değişiklik:</strong> Yağ lobülleri
                      daha heterojen ve düzensiz bir görünüm sergiler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Simetrik dağılım:</strong> Her iki bacakta benzer
                      deri altı yağ kalınlığı artışı tipik lipödem bulgusudur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kolay erişim:</strong> Radyasyon içermeyen, ucuz ve
                      yaygın olarak erişilebilir bir yöntemdir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Ancak ultrason, operatöre bağlı bir yöntemdir ve
                  standardizasyon eksikliği tanısal doğruluğu
                  sınırlayabilmektedir. Farklı merkezlerde farklı sonuçlar elde
                  edilmesi halen bir sorun olmaya devam etmektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Microscope className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    MR lipödem tanısında ultrasondan üstün mü?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> MR, yağ dokusu dağılımını ve
                    yapısını çok daha detaylı gösterir. Lenfödemden ayırıcı
                    tanıda özellikle değerlidir. Ancak maliyetli ve her yerde
                    erişilebilir değildir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Manyetik Rezonans Görüntüleme (MR), lipödem
                  değerlendirmesinde en detaylı bilgiyi sunan yöntemlerden
                  biridir. Araştırmaya göre MR&apos;ın öne çıkan avantajları
                  şunlardır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Yağ dokusu haritalaması:</strong> Subkutan yağın
                      hacmini, dağılımını ve iç yapısını yüksek çözünürlükle
                      görüntüler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ayırıcı tanı:</strong> Lipödem ile lenfödem
                      arasındaki farkları net olarak ortaya koyar &mdash;
                      özellikle &quot;honeycomb&quot; (bal peteği) paterni
                      lipödeme özgü olabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tedavi takibi:</strong> Cerrahi müdahale öncesi ve
                      sonrası değişiklikleri objektif olarak belgeleyebilir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  MR&apos;ın en büyük dezavantajı maliyettir. Türkiye&apos;de
                  SGK kapsamında lipödem için MR çekilmesi henüz standart bir
                  uygulama değildir ve hastaların çoğu bu tetkiki cep
                  harcaması olarak karşılamak zorunda kalabilir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    BT ve lenfosintigrafi ne zaman gerekli?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> BT simetrik bilateral
                    yumuşak doku genişlemesini gösterir; lenfosintigrafi ise
                    lenf akışındaki yavaşlamayı ortaya koyar. Her ikisi de
                    özellikle ileri evre ve karışık tablolarda değerlidir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bilgisayarlı Tomografi (BT) ve lenfosintigrafi, lipödem
                  tanısında rutin olarak kullanılmasa da belirli klinik
                  senaryolarda önemli bilgiler sunar:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    BT Bulguları:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      Her iki bacakta simetrik subkutan yağ artışı görülür
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      Yağ dokusunun kas ve kemik yapılarıyla ilişkisi net olarak
                      değerlendirilebilir
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      Radyasyon maruziyeti nedeniyle rutin tarama için uygun
                      değildir
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Lenfosintigrafi Bulguları:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      Erken evrelerde lenf akışı genellikle normal olabilir
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      İleri evrelerde lenf drenajında belirgin yavaşlama
                      saptanır
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      Lipödem-lenfödem ayrımında en değerli yöntemlerden biridir
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <HelpCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Görüntülemenin mevcut sınırlılıkları neler?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Hiçbir görüntüleme yöntemi
                    tek başına lipödemi kesin tanılayamaz. Standardize
                    protokoller ve özgül biyobelirteçler halen
                    geliştirilmektedir. Tanı klinik muayene ile birlikte
                    değerlendirilmelidir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Sistematik derlemenin en çarpıcı bulgusu şudur: mevcut
                  görüntüleme yöntemlerinin hiçbiri lipödem için tek başına
                  &quot;altın standart&quot; niteliğinde değildir. Araştırma
                  şu sınırlılıkları vurgulamaktadır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Standardizasyon eksikliği:</strong> Farklı
                      merkezler farklı protokoller kullanmaktadır; bu durum
                      sonuçların karşılaştırılmasını zorlaştırır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Özgüllük sorunu:</strong> Görüntüleme bulguları
                      obezite veya lenfödemde de benzer olabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Erken evre zorlukları:</strong> Evre 1 lipödemde
                      görüntüleme bulguları çok belirsiz olabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Maliyet ve erişim:</strong> Özellikle MR ve
                      lenfosintigrafi pahalı ve yaygın erişilebilir değildir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Sonuç olarak, görüntüleme lipödem tanısında destekleyici bir
                  araçtır &mdash; tek başına tanı koydurmaz. Deneyimli bir
                  klinisyenin muayenesi halen en önemli tanı aracıdır.
                  Gelecekte yapay zeka destekli görüntüleme analizi ve yeni
                  biyobelirteçlerin geliştirilmesiyle bu tablonun değişmesi
                  beklenmektedir.
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
