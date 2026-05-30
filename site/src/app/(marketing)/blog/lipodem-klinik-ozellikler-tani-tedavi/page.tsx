import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Stethoscope,
  Scale,
  ScanSearch,
  Syringe,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları | Lipödem Türkiye",
  description:
    "Lipödem obeziteden nasıl ayrılır? Klinik özellikler, modern tanı yöntemleri ve CDT, liposuction dahil güncel tedavi seçenekleri.",
  openGraph: {
    title: "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları",
    description:
      "Lipödemin obezite ve lenfödemden farkları, tanı kriterleri ve modern tedavi seçenekleri hakkında kapsamlı rehber.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek",
    slug: "/blog/lipodem-ilerleme-zorluklar-gelecek",
    kategori: "Araştırma",
  },
  {
    baslik: "Egzersiz Lipödemi Tedavi Edebilir mi? İtalyan Bilim Konsensüsü",
    slug: "/blog/lipodem-egzersiz-tedavi-konsensus",
    kategori: "Tedavi",
  },
  {
    baslik: "Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu",
    slug: "/blog/lenfodem-mi-lipodem-mi-farklar",
    kategori: "Genel",
  },
];

export default function LipodemKlinikOzelliklerTaniTedaviPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-teal-50 to-rose-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Klinik Özellikler ve Tedavi</li>
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
              25 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, ağırlıklı olarak kadınları etkileyen bir yağ dokusu
            bozukluğudur ve sıklıkla obezite veya lenfödem ile
            karıştırılmaktadır. Doğru tanı tedavinin ilk adımıdır. Bu
            makalede lipödemin klinik özelliklerini, modern tanı yöntemlerini
            ve kompleks dekongestif tedaviden liposuction&apos;a kadar güncel
            tedavi seçeneklerini inceliyoruz.
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
                    <Scale className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem obeziteden nasıl ayrılır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemde yağ birikimi
                    simetriktir, diyet ve egzersize dirençlidir ve genellikle
                    ayakları korur. Obezitede ise yağ dağılımı tüm vücutta
                    olup, kalori kısıtlamasına yanıt verir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem ile obezite arasındaki en kritik fark, yağ
                  dağılımının niteliğidir. Lipödemde alt ve/veya üst
                  ekstremitelerde orantısız yağ birikimi görülürken, gövde
                  nispeten korunur. Bu durum &quot;disproportional&quot; bir
                  görünüm yaratır: ince bir bel ile kalın bacaklar arasında
                  belirgin kontrast oluşur.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Obezitede ise yağ dağılımı genel olarak tüm vücutta görülür
                  ve kalori kısıtlamasıyla azaltılabilir. Lipödemli bireyler
                  ise sıkı diyet programlarına ve yoğun egzersize rağmen
                  etkilenen bölgelerde kilo veremezler. Bu durum hastaların
                  motivasyonunu düşürür ve psikolojik sıkıntıya neden olur.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Lipödem vs. Obezite karşılaştırması:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Lipödemde yağ birikimi simetrik ve orantısız;
                      obezitede genel ve orantılı
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Lipödemde ayaklar ve eller korunur; obezitede tüm
                      vücut etkilenir
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Lipödemde palpasyonda ağrı ve kolay morarma vardır;
                      obezitede genellikle yoktur
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      Lipödem diyete dirençlidir; obezite kalori
                      kısıtlamasına yanıt verir
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Stethoscope className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemin klinik özellikleri nelerdir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Simetrik bacak kalınlığı,
                    palpasyonda hassasiyet, kolay morarma, negatif Stemmer
                    bulgusu ve bileklerden ayaklara keskin geçiş (&quot;bilezik
                    etkisi&quot;) lipödemin karakteristik bulgularıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem kendine özgü klinik bulgularla tanınır. Hastalık
                  genellikle bilateral (iki taraflı) ve simetrik tutulumla
                  seyreder. Alt ekstremiteler en sık etkilenen bölgedir, ancak
                  hastaların yaklaşık %30&apos;unda üst ekstremiteler de
                  tutulur.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Ağrı ve hassasiyet:</strong> Lipödemli doku
                      dokunmaya karşı hassastır. Hafif basınç bile ağrı
                      yaratabilir. Bu durum lipödemi sıradan yağ birikiminden
                      ayıran en önemli klinik bulgudur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kolay morarma:</strong> Minimal travma sonucu
                      geniş ekimozlar (morluklar) oluşur. Bu durum, lipödemli
                      dokulardaki mikrodamar kırılganlığını yansıtır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Bilezik etkisi:</strong> Bilek veya ayak bileği
                      seviyesinde yağ dokusunun aniden durması, keskin bir
                      geçiş hattı oluşturur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Nodüler doku:</strong> İleri evrelerde yağ
                      dokusu altında nodüller (topaklar) palpe edilebilir.
                      Doku &quot;pirinç tanesi&quot; hissi verir.
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
                    <ScanSearch className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Modern tanı yöntemleri nelerdir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem tanısı esas olarak
                    klinik muayene ve anamnez ile konur. Ultrason, MR ve
                    lenfoskintigrafi yardımcı olabilir, ancak altın standart
                    bir test yoktur. Deneyimli bir klinisyen en iyi tanı
                    aracıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tanısı öncelikle klinik bulgulara dayanır. Hastanın
                  öyküsü (hormonal dönemlerde başlangıç, aile öyküsü,
                  diyete direnç), fizik muayene bulguları (simetrik tutulum,
                  ağrı, kolay morarma) ve Stemmer testi tanının temelini
                  oluşturur.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Görüntüleme yöntemleri destekleyici olarak kullanılabilir.
                  Yüksek çözünürlüklü ultrasonografi, subkutan yağ dokusunun
                  kalınlığını ve yapısını değerlendirmede faydalıdır.
                  Manyetik rezonans görüntüleme (MR), yağ ve sıvı
                  dağılımını detaylı gösterebilir. Lenfoskintigrafi ise
                  lenf drenajı fonksiyonunu değerlendirerek lipödem ile
                  lenfödem ayrımına yardımcı olabilir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Dual-enerji X-ray absorpsiyometri (DEXA) ve biyoelektrik
                  impedans analizi gibi vücut kompozisyon ölçüm yöntemleri
                  de giderek daha fazla kullanılmaktadır. Bu yöntemler,
                  tedaviye yanıtın objektif olarak izlenmesinde de
                  değerlidir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <Syringe className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Tedavi seçenekleri: CDT&apos;den liposuction&apos;a
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Tedavi konservatif ve
                    cerrahi olarak ikiye ayrılır. Konservatif tedavi
                    kompresyon, manuel lenf drenajı ve egzersizden oluşan
                    kompleks dekongestif tedavidir (CDT). Cerrahi seçenek
                    olarak tumescent liposuction ve WAL (su destekli
                    liposuction) ön plana çıkmaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tedavisinde basamaklı bir yaklaşım benimsenmelidir.
                  İlk basamak her zaman konservatif tedavidir ve yaşam boyu
                  sürdürülmelidir. Cerrahi tedavi ise konservatif tedaviye
                  yeterli yanıt alınamayan hastalarda değerlendirilir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompleks dekongestif tedavi (CDT):</strong>{" "}
                      Manuel lenf drenajı, kompresyon bandajlama, cilt bakımı
                      ve dekompresif egzersizlerden oluşur. Amacı ödemi
                      azaltmak, ağrıyı hafifletmek ve lenf akışını
                      iyileştirmektir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompresyon terapisi:</strong> Düz örgü
                      kompresyon giysileri lipödem tedavisinde standart
                      uygulamadır. Dairesel örgü yerine düz örgü tercih
                      edilmelidir; çünkü düz örgü kumaş dokuya daha iyi
                      destek sağlar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tumescent liposuction:</strong> Lipödem için
                      en yaygın cerrahi yöntemdir. Tumescent teknikte doku
                      önceden sıvı ile şişirilir, bu sayede daha hassas ve
                      güvenli yağ alımı yapılır. Lenfatik yapılara zarar
                      verme riski düşüktür.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>WAL (Water-Assisted Liposuction):</strong> Su
                      destekli liposuction, düşük basınçlı su jeti
                      kullanarak yağ hücrelerini nazikçe ayırır. Doku
                      travması minimal olup iyileşme süreci daha hızlıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Lazer destekli lipoliz:</strong> Yeni bir
                      seçenek olan lazer destekli lipoliz, yağ hücrelerini
                      ısı enerjisi ile eritir. Ancak uzun vadeli sonuçlar
                      henüz yeterince çalışılmamıştır.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Hangi tedavi yöntemi uygulanırsa uygulansın, lipödem
                  yaşam boyu yönetim gerektiren kronik bir hastalıktır.
                  Cerrahi sonrası kompresyon terapisi ve düzenli egzersiz
                  mutlaka sürdürülmelidir. Tedavi planınızı lipödem
                  konusunda deneyimli bir uzmanla birlikte oluşturmanız
                  hayati önem taşır.
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
