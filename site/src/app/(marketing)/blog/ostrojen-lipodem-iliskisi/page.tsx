import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Dna,
  Baby,
  Flame,
  Microscope,
  Stethoscope,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Östrojen ve Lipödem: Hormonal Bağlantının Bilimi | Lipödem Türkiye",
  description:
    "Lipödem neden ergenlik, hamilelik ve menopozda başlar? Östrojen reseptör anormallikleri ve hormonal tetikleyicilerin bilimsel analizi.",
  openGraph: {
    title: "Östrojen ve Lipödem: Hormonal Bağlantının Bilimi",
    description:
      "Lipödemin hormonal kökenleri: Östrojen reseptörleri, pubertal başlangıç ve tedavi yaklaşımları.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem Klinik Özellikleri, Tanı ve Tedavi",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Araştırma",
  },
  {
    baslik:
      "ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı?",
    slug: "/blog/abd-lipodem-standart-bakim",
    kategori: "Tedavi",
  },
  {
    baslik:
      "Lipödeme Karşı Takviyeler: Hangisi İşe Yarar, Hangisi Para Tuzağı?",
    slug: "/blog/lipodem-takviye-rehberi",
    kategori: "Beslenme",
  },
];

export default function OstrojenLipodemIliskisiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 md:py-16">
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
                Östrojen ve Lipödem
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
              15 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Östrojen ve Lipödem: Hormonal Bağlantının Bilimi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem kadınların yaklaşık %11&apos;ini etkiler ve başlangıcı
            neredeyse her zaman hormonal dalgalanma dönemlerine denk gelir:
            ergenlik, hamilelik veya menopoz. Bu tesadüf değildir. Östrojen
            reseptörlerindeki anormallikler ve adiposit metabolik sinyallerindeki
            değişimler, lipödemin hormonal kökenlerini açıklamaktadır.
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
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Dna className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem neden neredeyse yalnızca kadınlarda görülür?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Östrojen, yağ hücrelerinin
                    büyümesi ve dağılımı üzerinde doğrudan etkilidir. Lipödemde
                    östrojen reseptörlerinin (ER-alfa ve ER-beta) dağılımı ve
                    işlevi anormal olabilir; bu durum yağ dokusunun kontrolsüz
                    birikmesine yol açar.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem vakaların %97&apos;sinden fazlasında kadınlarda
                  görülür. Bu cinsiyet dağılımı, östrojenin hastalıktaki
                  merkezi rolüne işaret eder. Araştırmalar, lipödemli
                  kadınlarda yağ dokusundaki östrojen reseptör alfa (ER-alfa)
                  ekspresyonunun değişmiş olduğunu göstermektedir
                  (PMID: 34769153).
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Normal koşullarda östrojen, yağ hücrelerinde enerji
                  metabolizmasını düzenler ve yağ dağılımını kontrol eder.
                  Lipödemde bu düzenleyici mekanizma bozulmuştur: östrojen
                  sinyali, yağ hücrelerini küçültmek yerine büyütmeye ve
                  çoğalmaya teşvik edebilir. Bu durum özellikle kalça, uyluk
                  ve kol bölgelerinde belirgindir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center shrink-0 mt-1">
                    <Baby className="w-5 h-5 text-pink-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Ergenlik, hamilelik ve menopoz: Üç kritik tetikleyici
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem genellikle östrojen
                    düzeylerinin dramatik olarak değiştiği dönemlerde başlar
                    veya şiddetlenir. Ergenlik en sık başlangıç zamanıdır,
                    hamilelik ve menopoz ise semptomları belirgin şekilde
                    kötüleştirebilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin hormonal dalgalanma dönemleriyle ilişkisi, hastalığın
                  en tutarlı klinik gözlemlerinden biridir. Her üç dönem de
                  östrojen düzeylerinde dramatik değişimler içerir ve lipödemde
                  farklı mekanizmalarla tetikleyici olabilir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ergenlik:</strong> Östrojen düzeyleri ilk kez
                      yükselir ve yağ dokusu dağılımı değişir. Lipödemli
                      kadınların çoğu ilk belirtilerin 12&ndash;16 yaş arasında
                      başladığını bildirmektedir. Bu dönemdeki hızlı hormonal
                      değişim, genetik yatkınlığı olan bireylerde lipödemi
                      tetikleyebilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hamilelik:</strong> Östrojen düzeyleri en yüksek
                      seviyeye ulaşır. Hamilelik sırasında veya sonrasında
                      lipödem semptomlarının başladığını veya belirgin şekilde
                      kötüleştiğini bildiren hasta sayısı oldukça fazladır.
                      Progesteron ve relaksin gibi diğer hormonlar da sıvı
                      tutulumunu artırır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Menopoz:</strong> Östrojen düzeyleri düşer ancak
                      yağ dokusundaki lokal östrojen üretimi devam eder. Bu
                      dengesizlik lipödem dokusundaki inflamasyonu artırabilir.
                      Hormon replasman tedavisi (HRT) alan kadınlarda
                      semptomların değişkenlik gösterdiği raporlanmıştır.
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
                    <Microscope className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Östrojen reseptör anormallikleri: Moleküler düzeyde ne
                    oluyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağ dokusunda östrojen
                    reseptörlerinin (ER-alfa ve ER-beta) oranı ve
                    dağılımı normalden farklı olabilir. Bu durum yağ
                    hücrelerinin östrojene aşırı yanıt vermesine veya yanlış
                    yanıt vermesine yol açar.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Östrojen etkisini iki ana reseptör üzerinden gösterir:
                  ER-alfa ve ER-beta. Normal yağ dokusunda bu reseptörler
                  dengeli bir şekilde eksprese edilir ve yağ metabolizmasını
                  düzenler. Lipödemde ise bu denge bozulmuş olabilir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Moleküler mekanizmalar:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>ER-alfa/ER-beta oranı:</strong> Lipödem
                        dokusunda ER-alfa ekspresyonunun değişmesi, adiposit
                        proliferasyonunu (çoğalma) teşvik edebilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Adiposit metabolik sinyalleme:</strong> Östrojen
                        normalde AMPK yolağını aktive ederek yağ yakımını
                        destekler. Lipödemde bu sinyal yolağı baskılanmış
                        olabilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Lokal östrojen üretimi:</strong> Yağ dokusu
                        kendi östrojenini üretir (aromataz enzimi aracılığıyla).
                        Lipödemde bu lokal üretim artmış olabilir ve kısır
                        döngü yaratabilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>İnflamatuar etkileşim:</strong> Östrojen
                        normalde anti-inflamatuar etkiye sahiptir, ancak
                        lipödemde bu koruyucu etki yetersiz kalıyor olabilir.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 mt-1">
                    <Flame className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Hormonal doğum kontrolü ve HRT: Lipödemi etkiler mi?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Hormonal doğum kontrolü ve
                    hormon replasman tedavisinin lipödem üzerindeki etkisi
                    tartışmalıdır. Bazı hastalar kötüleşme bildirirken, bazıları
                    değişim fark etmemiştir. Bireysel yanıt çok değişkendir ve
                    daha fazla araştırmaya ihtiyaç vardır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemli kadınlar için hormonal tedaviler (doğum kontrol
                  hapları, HRT) önemli bir soru işaretidir. Eksojen östrojen
                  alımının lipödem dokusundaki reseptörleri nasıl etkilediği
                  henüz tam olarak aydınlatılamamıştır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Klinik gözlemler karışık sonuçlar ortaya koymaktadır: Bazı
                  kadınlar östrojen içeren doğum kontrolüne başladıktan sonra
                  lipödem semptomlarının kötüleştiğini bildirirken, progesteron
                  bazlı yöntemlerin daha iyi tolere edildiğini raporlayanlar da
                  vardır. Menopoz sonrası HRT konusunda ise veriler daha da
                  sınırlıdır. Bu nedenle hormonal tedaviler konusunda mutlaka
                  hem jinekolog hem de lipödem konusunda deneyimli bir uzmanla
                  birlikte karar verilmelidir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Stethoscope className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Tedavi için bu ne anlama geliyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Hormonal bağlantının
                    anlaşılması, gelecekte östrojen reseptörlerini hedef alan
                    tedavilerin geliştirilmesine kapı açabilir. Şimdilik
                    hormonal farkındalık, erken tanı ve bireyselleştirilmiş
                    yaklaşım en önemli adımlardır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Östrojen&ndash;lipödem bağlantısının anlaşılması, hastalığın
                  yönetimi için birkaç önemli çıkarım sunar. Her şeyden önce
                  erken tanı kritiktir: Ergenlik döneminde bacaklarda
                  orantısız yağlanma başlayan genç kızların lipödem açısından
                  değerlendirilmesi gerekir.
                </p>

                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Erken müdahale:</strong> Hormonal dönemlerde
                      lipödem semptomları başladığında hızlı tanı ve tedavi
                      başlatmak, hastalığın ilerlemesini yavaşlatabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Hormonal takip:</strong> Lipödemli kadınlar
                      hormonal değişim dönemlerinde (hamilelik planlaması,
                      menopoz) semptomlarını yakından izlemelidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Gelecek tedaviler:</strong> Seçici östrojen
                      reseptör modülatörleri (SERM&apos;ler) ve aromataz
                      inhibitörleri, lipödem tedavisinde araştırılmaya değer
                      potansiyel hedeflerdir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Aile öyküsü:</strong> Annesi veya kız kardeşi
                      lipödemli olan kadınlar, hormonal geçiş dönemlerinde ekstra
                      dikkatli olmalı ve uzman değerlendirmesi istemelidir.
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
                alanında uzman bir sağlık profesyoneline başvurunuz. Hormonal
                tedaviler konusunda kararlarınızı doktorunuzla birlikte
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
