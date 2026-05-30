import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  GitCompareArrows,
  HandMetal,
  Pill,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu | Lipödem Türkiye",
  description:
    "Lenfödem ve lipödem arasındaki farklar: Stemmer testi, tutulum paterni, tedavi yaklaşımları ve doğru tanının önemi hakkında kapsamlı rehber.",
  openGraph: {
    title: "Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu",
    description:
      "Lenfödem ve lipödem birbirinden nasıl ayrılır? Stemmer testi, klinik farklar ve doğru tanının tedaviye etkisi.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek",
    slug: "/blog/lipodem-ilerleme-zorluklar-gelecek",
    kategori: "Araştırma",
  },
  {
    baslik: "Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor?",
    slug: "/blog/almanya-s2k-lipodem-kilavuzu",
    kategori: "Araştırma",
  },
];

export default function LenfodemMiLipodemMiFarklarPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-stone-100 via-[#E8F5F0] to-rose-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Lenfödem vs Lipödem</li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-stone-100 text-stone-700 border-stone-200">
              <Tag className="w-3 h-3" />
              Genel
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              22 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lenfödem ve lipödem, ekstremiteleri etkileyen iki kronik hastalık
            olmasına rağmen, altta yatan mekanizmaları, tutulum paternleri ve
            tedavi yaklaşımları temelden farklıdır. Ne yazık ki bu iki hastalık
            sıklıkla birbirine karıştırılmakta ve yanlış tedavi uygulanmaktadır.
            Doğru tanı, doğru tedavinin ilk ve en kritik adımıdır.
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
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <GitCompareArrows className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lenfödem ve lipödem arasındaki temel farklar nelerdir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lenfödem lenf sistemi
                    bozukluğundan kaynaklanan sıvı birikimidir; genellikle tek
                    taraflıdır ve ayakları etkiler. Lipödem ise yağ dokusu
                    bozukluğudur; her zaman bilateral (iki taraflı) ve
                    simetriktir, ayakları korur.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lenfödem ve lipödem, dışarıdan benzer görünebilir &mdash;
                  her ikisi de ekstremitelerde şişkinliğe neden olur. Ancak
                  hastalığın kaynağı, doğası ve seyri tamamen farklıdır.
                  Lenfödemde sorun lenf sistemi damarlarında tıkanıklık veya
                  yetersizliktir; protein bakımından zengin sıvı dokularda
                  birikir. Lipödemde ise sorun yağ hücrelerinin anormal
                  büyümesi ve çoğalmasıdır.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Karşılaştırma tablosu:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Tutulum:</strong> Lenfödem genellikle tek
                        taraflı; lipödem her zaman iki taraflı ve simetrik
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Ayak tutulumu:</strong> Lenfödemde ayaklar
                        etkilenir; lipödemde ayaklar korunur
                        (&quot;bilezik etkisi&quot;)
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Ağrı:</strong> Lenfödemde ağrı genellikle
                        geç evrelerde; lipödemde ağrı ve hassasiyet erken
                        evrelerde başlar
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Kolay morarma:</strong> Lenfödemde nadir;
                        lipödemde çok yaygın
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Cinsiyet:</strong> Lenfödem her iki cinsiyette;
                        lipödem neredeyse yalnızca kadınlarda
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <HandMetal className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Stemmer testi nedir ve nasıl yapılır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Stemmer testi, ayak
                    parmaklarının üst kısmındaki cildi kıstırma testidir.
                    Cilt kalınlaşmışsa ve kıstırılamıyorsa &quot;pozitif
                    Stemmer&quot; &mdash; bu lenfödem lehinedir. Lipödemde
                    Stemmer testi genellikle negatiftir (cilt normal şekilde
                    kıstırılabilir).
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Stemmer testi, lenfödem ile lipödem ayrımında en basit ve
                  en değerli klinik testtir. Herkes tarafından evde bile
                  uygulanabilir. Testin yapılışı şöyledir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Adım 1:</strong> İkinci ayak parmağının
                      (işaret parmağının yanındaki) üst kısmına bakın.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Adım 2:</strong> Başparmak ve işaret parmağınız
                      ile cildi kıstırmaya çalışın.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Pozitif sonuç (lenfödem):</strong> Cilt
                      kalınlaşmış ve kıstırılamıyorsa, bu lenf sıvısı
                      birikmesine bağlı fibrozis işaretidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Negatif sonuç (lipödem):</strong> Cilt normal
                      kalınlıktadır ve kolayca kıstırılabilir. Lipödemde
                      ayaklar korunduğu için bu bölgede patolojik değişiklik
                      beklenmez.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Dikkat edilmesi gereken önemli bir nokta: ileri evre
                  lipödem hastalarında sekonder lenfödem gelişebilir
                  (&quot;lipo-lenfödem&quot;). Bu durumda Stemmer testi
                  pozitif olabilir. Bu nedenle Stemmer testi tek başına
                  kesin tanı aracı olarak kullanılmamalı, diğer klinik
                  bulgularla birlikte değerlendirilmelidir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Pill className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Tedavi yaklaşımları nasıl farklılaşır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lenfödemde kompleks
                    dekongestif tedavi (CDT) birinci basamak ve çok
                    etkilidir. Lipödemde CDT semptom hafifletir ancak
                    yeterli olmayabilir; liposuction ek bir seçenektir.
                    Yanlış tanı, yanlış tedaviye ve hayal kırıklığına yol
                    açar.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lenfödem ve lipödem tedavisinin bazı ortak noktaları olsa
                  da (her ikisinde de kompresyon terapisi kullanılır), tedavi
                  stratejileri ve beklenen sonuçlar önemli ölçüde farklıdır.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Lenfödemde CDT:</strong> Kompleks dekongestif
                      tedavi lenfödemde altın standart tedavidir. Manuel lenf
                      drenajı, kompresyon bandajlama, egzersiz ve cilt
                      bakımı ile ödem belirgin şekilde azaltılabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Lipödemde CDT:</strong> CDT lipödemde ödemi ve
                      ağrıyı hafifletir, ancak yağ dokusu birikimini
                      azaltmaz. Bu nedenle CDT lipödemde semptom kontrolü
                      için kullanılır, küratif değildir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Liposuction:</strong> Lipödemde tumescent
                      liposuction anormal yağ dokusunu azaltabilir.
                      Lenfödemde ise liposuction genellikle uygulanmaz
                      veya çok farklı endikasyonlarla yapılır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Diüretikler:</strong> Lenfödemde diüretikler
                      etkisizdir ve zararlı olabilir. Lipödemde de
                      diüretikler önerilmez; çünkü sorun sıvı tutulumu
                      değil, yağ dokusu anormalliğidir.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Doğru tanı neden bu kadar önemli?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Yanlış tanı, yanlış
                    tedaviye yol açar. Lipödem lenfödem sanılarak tedavi
                    edilirse hasta yeterli fayda görmez; lenfödem lipödem
                    sanılarak liposuction yapılırsa ciddi komplikasyonlar
                    gelişebilir. Doğru tanı yaşam kalitesini temelden
                    değiştirir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Araştırmalar, lipödem hastalarının doğru tanıya ulaşmasının
                  ortalama 10&ndash;12 yıl sürdüğünü göstermektedir. Bu süre
                  zarfında hastalar yanlış diyetler, etkisiz tedaviler ve
                  psikolojik sıkıntı ile mücadele ederler. Doğru tanı
                  konulduğunda ise tedavi hedefleri netleşir, uygun tedavi
                  başlatılır ve hastaların yaşam kalitesi belirgin şekilde
                  artar.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tedavi planı:</strong> Her hastalığın tedavi
                      protokolü farklıdır. Doğru tanı olmadan doğru tedavi
                      mümkün değildir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Psikolojik rahatlama:</strong> Hastalığına
                      isim koyabilmek, hastaların &quot;suçu kendilerinde
                      aramaları&quot; döngüsünü kırar. Birçok lipödem
                      hastası yıllarca &quot;yeterince çabalamadıkları&quot;
                      düşüncesiyle mücadele eder.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Erken müdahale:</strong> Her iki hastalık da
                      erken evrelerde daha iyi kontrol altına alınır. Geç
                      tanı ilerlemeye ve komplikasyonlara zemin hazırlar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kombine tablolar:</strong> Lipödem zamanla
                      sekonder lenfödem gelişimine yol açabilir
                      (lipo-lenfödem). Bu durumda her iki hastalığa yönelik
                      kombine tedavi gereklidir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Eğer bacaklarınızda açıklayamadığınız şişlik, ağrı veya
                  kolay morarma yaşıyorsanız, fleboloji veya lenfoloji
                  konusunda deneyimli bir uzmana başvurmanızı öneriyoruz.
                  Doğru tanı, doğru tedavinin ve daha iyi bir yaşam
                  kalitesinin başlangıcıdır.
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
