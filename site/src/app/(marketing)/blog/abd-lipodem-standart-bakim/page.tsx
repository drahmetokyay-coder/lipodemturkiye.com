import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  ClipboardList,
  ListOrdered,
  Shield,
  Scissors,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı? | Lipödem Türkiye",
  description:
    "85 konsensüs maddesiyle ABD lipödem standart bakım kılavuzu. Konservatif tedavi, cerrahi endikasyonlar ve Türkiye'ye uyarlama önerileri.",
  openGraph: {
    title:
      "ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı?",
    description:
      "85 konsensüs maddesi, tedavi sırası ve Türkiye uyarlaması. Lipödem tedavisinde altın standart.",
  },
};

const ilgiliYazilar = [
  {
    baslik:
      "Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi?",
    slug: "/blog/lipodem-yonetim-guncelleme",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Ağrısının Nedeni ve Yönetimi: Pratik Bir Rehber",
    slug: "/blog/lipodem-agrisi-nedenleri-yonetimi",
    kategori: "Tedavi",
  },
  {
    baslik:
      "Almanya S2k Lipödem Kılavuzu: Güncel Kanıtlar",
    slug: "/blog/almanya-s2k-lipodem-kilavuzu",
    kategori: "Araştırma",
  },
];

export default function AbdLipodemStandartBakimPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-teal-50 to-cyan-50 py-12 md:py-16">
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
                ABD Standart Bakım
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
              14 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              9 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            2021 yılında ABD&apos;de yayınlanan konsensüs kılavuzu, lipödem
            tedavisinde altın standart olarak kabul edilmektedir. 85 konsensüs
            maddesi; patoloji, tıbbi tedavi, cerrahi, vasküler ve terapötik
            önerileri kapsamaktadır. Lipödem &quot;gevşek bağ dokusu
            hastalığı&quot; olarak tanımlanmış ve kadınlarda nodüler, fibrotik
            yağ dokusuyla karakterize edilmiştir.
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
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 mt-1">
                    <ClipboardList className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    85 konsensüs maddesi neyi kapsıyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kılavuz; lipödemin tanımı,
                    patofizyolojisi, tanı kriterleri, konservatif tedavi,
                    cerrahi endikasyonlar, vasküler değerlendirme ve
                    rehabilitasyon dahil olmak üzere hastalığın tüm yönlerini
                    ele alan 85 uzlaşı maddesi içermektedir (PMID: 34049453).
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  ABD konsensüs kılavuzu, birden fazla tıp dalından uzmanın
                  (plastik cerrahi, vasküler cerrahi, endokrinoloji,
                  dermatoloji, fizik tedavi) bir araya gelerek oluşturduğu
                  kapsamlı bir belgedir. Kılavuzun en önemli katkısı,
                  lipödemi bir &quot;bağ dokusu hastalığı&quot; olarak yeniden
                  tanımlamasıdır &mdash; sadece &quot;yağ birikimi&quot; değil.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu yeniden tanımlama tedavi yaklaşımını da değiştirmektedir:
                  Lipödem sadece estetik bir sorun değil, bağ dokusu,
                  lenfatik sistem ve vasküler yapıyı etkileyen sistemik bir
                  hastalıktır. Bu nedenle tedavisi de multidisipliner olmalıdır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                    <ListOrdered className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Önerilen tedavi sırası nasıl olmalı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kılavuz &quot;konservatif
                    önce&quot; yaklaşımını benimser. Kompresyon tedavisi,
                    beslenme, egzersiz ve psikolojik destek ilk
                    basamaktır. Cerrahi (liposuction) yalnızca konservatif
                    tedaviye yetersiz yanıt durumunda değerlendirilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  ABD kılavuzunun en pratik katkılarından biri, tedavi
                  basamaklarını net bir şekilde sıralamasıdır. Bu sıralama
                  hastaya &quot;önce ne yapmalıyım?&quot; sorusuna yanıt verir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Tedavi basamakları:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#1A6B5A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        1
                      </span>
                      <span>
                        <strong>Tanı ve değerlendirme:</strong> Klinik muayene,
                        aile öyküsü, lenfödem ile ayırıcı tanı ve evre
                        belirleme.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#1A6B5A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        2
                      </span>
                      <span>
                        <strong>Kompresyon tedavisi:</strong> Uygun sınıf ve
                        tipte kompresyon giysisi reçetelenmesi. Düz örgü
                        kompresyon lipödemde standart tercihtir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#1A6B5A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        3
                      </span>
                      <span>
                        <strong>Beslenme ve egzersiz:</strong> Anti-inflamatuar
                        diyet, düşük yoğunluklu egzersiz (su egzersizleri,
                        yürüyüş, yoga) ve kilo yönetimi.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#1A6B5A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        4
                      </span>
                      <span>
                        <strong>Manuel lenfatik drenaj (MLD):</strong> Ödem
                        yönetimi için düzenli MLD seansları ve cilt bakımı.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#1A6B5A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        5
                      </span>
                      <span>
                        <strong>Psikolojik destek:</strong> Depresyon, anksiyete
                        ve beden imajı sorunları için profesyonel destek.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-[#1A6B5A] text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                        6
                      </span>
                      <span>
                        <strong>Cerrahi değerlendirme:</strong> Konservatif
                        tedaviye rağmen ilerleme devam ederse, tümesent
                        liposuction değerlendirilir.
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
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    &quot;Konservatif önce&quot; yaklaşımı neden bu kadar
                    önemli?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Konservatif tedavi (kompresyon,
                    beslenme, egzersiz, MLD) lipödemin tüm evrelerinde temel
                    tedavidir. Cerrahi bile yapılsa, konservatif tedaviye ömür
                    boyu devam edilmelidir. Cerrahi tek başına çözüm değildir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Kılavuzun en güçlü mesajlarından biri budur: Cerrahi,
                  konservatif tedavinin alternatifi değil, tamamlayıcısıdır.
                  Liposuction uygulansa bile hasta kompresyon giymeye, egzersiz
                  yapmaya ve anti-inflamatuar beslenmeye devam etmelidir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu yaklaşımın arkasında güçlü klinik veriler vardır.
                  Konservatif tedaviye düzenli uyum gösteren hastalar, ağrıda
                  %40&ndash;60 azalma, ödemde belirgin iyileşme ve yaşam
                  kalitesinde artış bildirmektedir. Dahası, cerrahiye gitmeden
                  önce konservatif tedaviyi optimize etmek, cerrahi sonuçları
                  da iyileştirmektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <Scissors className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Cerrahi ne zaman uygun?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Konservatif tedaviye en az
                    6&ndash;12 ay düzenli uyum sonrası semptomlar devam ederse,
                    tümesent mikrokanüler liposuction değerlendirilir. Cerrah
                    mutlaka lipödem konusunda deneyimli olmalıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Kılavuz, cerrahinin belirli koşullar altında uygun olduğunu
                  belirtmektedir. Ancak her liposuction eşit değildir &mdash;
                  lipödem cerrahisinde tümesent, mikrokanüler teknik altın
                  standarttır. Geleneksel liposuction teknikleri lenfatik
                  yapıya zarar verebilir ve durumu kötüleştirebilir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Cerrahi endikasyonlar:</strong> Konservatif
                      tedaviye rağmen ilerleyen ağrı, mobilite kaybı,
                      lenfatik komplikasyonlar veya yaşam kalitesinde ciddi
                      bozulma.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Teknik seçimi:</strong> Su destekli liposuction
                      (WAL) veya tümesent liposuction, lipödemde en çok
                      çalışılmış ve en güvenli tekniklerdir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Cerrah seçimi:</strong> Lipödem cerrahisi, estetik
                      liposuction&apos;dan farklıdır. Lenfatik yapıyı korumak
                      için özel eğitim ve deneyim gerektirir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ameliyat sonrası:</strong> Cerrahi sonrasında
                      kompresyon tedavisi, MLD ve egzersiz programına devam
                      edilmelidir. Takip süreci en az 12 aydır.
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
                    <MapPin className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    ABD protokolünü Türkiye&apos;ye nasıl uyarlayabiliriz?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Tedavi prensipleri evrenseldir
                    ancak erişim, maliyet ve uzman sayısı Türkiye&apos;de
                    farklıdır. SGK kapsamı, kompresyon erişimi ve lipödem
                    konusunda deneyimli uzman bulmak en büyük
                    engellerdir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  ABD kılavuzundaki tedavi prensipleri Türkiye&apos;de de
                  geçerlidir ancak uygulamada bazı önemli farklar vardır. Bu
                  farkları bilmek, Türkiye&apos;deki lipödem hastaları için
                  gerçekçi beklentiler oluşturmaya yardımcı olur.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Türkiye uyarlama notları:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Tanı:</strong> Türkiye&apos;de lipödem farkındalığı
                        düşüktür. Birçok hasta yıllarca &quot;obezite&quot; veya
                        &quot;lenfödem&quot; tanısı alır. Tanı için dermatoloji,
                        fizik tedavi veya vasküler cerrahi uzmanına
                        yönlendirilmelidir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Kompresyon:</strong> Düz örgü kompresyon
                        giysiler Türkiye&apos;de sınırlı sayıda tedarikçiden
                        temin edilebilir ve maliyeti yüksek olabilir. SGK
                        kapsamı henüz yetersizdir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Cerrahi:</strong> Türkiye&apos;de lipödem
                        liposuction yapan deneyimli cerrah sayısı azdır. Cerrah
                        seçiminde uluslararası sertifikalar ve lipödem
                        deneyimi sorgulanmalıdır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Psikolojik destek:</strong> Lipödem konusunda
                        bilgili psikolog bulmak zor olabilir. Online destek
                        grupları ve hasta dernekleri alternatif olabilir.
                      </span>
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
                alanında uzman bir sağlık profesyoneline başvurunuz. Cerrahi
                dahil tüm tedavi kararlarınızı doktorunuzla birlikte
                verin. Daha fazla bilgi için{" "}
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
