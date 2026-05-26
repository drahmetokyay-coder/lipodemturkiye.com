import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Zap,
  Hand,
  Syringe,
  Sun,
  HeartHandshake,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Ağrısının Nedeni ve Yönetimi: Pratik Bir Rehber | Lipödem Türkiye",
  description:
    "Lipödem ağrısı neden olur? Allodini, sempatik sinir sinyalleri ve östrojen ilişkisi. Konservatif tedaviler ve liposuction ile ağrı yönetimi.",
  openGraph: {
    title: "Lipödem Ağrısının Nedeni ve Yönetimi: Pratik Bir Rehber",
    description:
      "Lipödem ağrısının mekanizması ve kanıta dayalı yönetim stratejileri. Günlük pratik öneriler.",
  },
};

const ilgiliYazilar = [
  {
    baslik:
      "ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı?",
    slug: "/blog/abd-lipodem-standart-bakim",
    kategori: "Tedavi",
  },
  {
    baslik:
      "Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi?",
    slug: "/blog/lipodem-yonetim-guncelleme",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi",
    slug: "/blog/lipodem-yaz-rehberi",
    kategori: "Beslenme",
  },
];

export default function LipodemAgrisiNedenleriYonetimiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-amber-50 py-12 md:py-16">
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
                Lipödem Ağrısı Rehberi
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
              12 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Ağrısının Nedeni ve Yönetimi: Pratik Bir Rehber
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Ağrı, lipödemin en belirgin ve en yıpratıcı semptomudur. Hafif bir
            dokunuşta bile oluşan ağrı (allodini), sempatik sinir sinyali
            anormallikleri ve östrojen ilişkisi ile açıklanmaktadır.
            Mikrokanüler tümesent liposuction en etkili tedavi seçeneği olarak
            öne çıkarken, konservatif tedavilerin etkinliği tartışmalıdır.
            Bu rehberde ağrının nedenlerini ve günlük yönetim stratejilerini
            inceliyoruz.
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
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-amber-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem ağrısı neden oluşur? Allodini ve sinir sinyalleri
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem ağrısının temelinde
                    allodini (normalde ağrılı olmayan uyaranların ağrı
                    oluşturması), sempatik sinir sistemi anormallikleri ve
                    östrojen aracılı nöro-inflamatuar süreçler yatar. Bu
                    mekanizmalar lipödem yağ dokusundaki sinir liflerinin
                    aşırı hassaslaşmasına yol açar (PMID: 33001552).
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem ağrısı &quot;sıradan&quot; bir ağrı değildir. Normal
                  yağ dokusunda çok az sinir lifi bulunurken, lipödem
                  dokusunda sinir yoğunluğu artmıştır. Bu sinirler ayrıca
                  hassaslaşmış durumdadır &mdash; yani daha düşük eşikte
                  ağrı sinyali gönderir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Allodini, lipödemin en karakteristik özelliklerinden biridir:
                  Hafif bir dokunuş, kıyafet sürtünmesi veya hafif basınç bile
                  şiddetli ağrıya neden olabilir. Bu durum, lipödemli
                  bireylerin günlük yaşamını ciddi şekilde etkiler &mdash;
                  kıyafet seçiminden fiziksel temas tercihlerine kadar.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Sempatik sinir sistemi de lipödem ağrısında rol oynar.
                  Araştırmalar, lipödem dokusundaki sempatik sinir
                  sinyallerinin anormal olduğunu ve bu durumun vasküler
                  geçirgenliği artırarak hem ödemi hem de ağrıyı
                  şiddetlendirdiğini göstermektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Hand className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Konservatif ağrı yönetimi: Ne işe yarar?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kompresyon tedavisi, manuel
                    lenfatik drenaj (MLD), soğuk uygulama ve düşük yoğunluklu
                    egzersiz ağrıyı hafifletebilir. Ancak kanıt düzeyleri
                    değişkendir ve bireysel yanıtlar farklılık gösterir.
                    Hiçbir konservatif yöntem tek başına tam ağrı kontrolü
                    sağlayamaz.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Konservatif tedavilerin lipödem ağrısı üzerindeki etkinliği
                  araştırmalarda tartışmalıdır. Ancak çoğu hasta, birden fazla
                  yöntemi birlikte uyguladığında belirgin bir iyileşme
                  bildirmektedir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kompresyon tedavisi:</strong> Düz örgü
                      kompresyon giysileri ödemi azaltarak dolaylı olarak
                      ağrıyı hafifletir. Doğru basınç sınıfının seçimi
                      kritiktir &mdash; çok gevşek etkisiz, çok sıkı ise
                      ağrıyı artırabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Manuel lenfatik drenaj (MLD):</strong> Nazik,
                      ritmik masaj hareketleriyle lenf akışını artırır.
                      Seanslar sonrasında birçok hasta anlık rahatlama
                      bildirmektedir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Su egzersizleri:</strong> Suyun hidrostatik
                      basıncı doğal kompresyon sağlar ve ağrı algısını
                      azaltır. Aqua terapi lipödem ağrısı için en çok
                      önerilen egzersiz formudur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Soğuk uygulama:</strong> Kısa süreli soğuk
                      uygulama (buz paketi veya soğuk su duşu) vazokonstrüksiyon
                      sağlayarak anlık ağrı rahatlaması verebilir. Ancak
                      uzun süreli soğuk lipödem dokusunda kan akışını
                      olumsuz etkileyebilir.
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
                    <Syringe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Liposuction ve ağrı: En etkili tedavi seçeneği mi?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Evet. Mikrokanüler tümesent
                    liposuction, lipödem ağrısını azaltmada en etkili
                    tedavi seçeneğidir. Çalışmalar, ameliyat sonrası ağrı
                    düzeylerinde %70&ndash;80 oranında azalma bildirmektedir.
                    Ancak cerrahi tüm hastalar için uygun değildir ve
                    konservatif tedavi önce denenmelidir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem ağrısının kaynağı olan hassaslaşmış sinir lifleri
                  ve fibrotik yağ dokusu, liposuction ile fiziksel olarak
                  uzaklaştırılabilir. Bu nedenle cerrahi, ağrı kontrolünde
                  konservatif tedavilerden daha etkili sonuçlar verir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Cerrahi ağrı sonuçları:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Tümesent liposuction sonrası hastaların büyük
                      çoğunluğu ağrıda belirgin azalma bildirmektedir.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Ağrı azalması genellikle ameliyat sonrası ilk 3&ndash;6
                      ayda belirginleşir ve yıllar boyu devam edebilir.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Dokunma hassasiyeti (allodini) ameliyat sonrası önemli
                      ölçüde azalır.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Birden fazla seans gerekebilir; her seans farklı
                      bölgeleri hedefler.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      Ameliyat sonrası kompresyon ve MLD&apos;ye devam etmek
                      sonuçları iyileştirir.
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
                    <Sun className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Günlük ağrı yönetimi: Pratik stratejiler
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Ağrıyı tamamen ortadan
                    kaldırmak mümkün olmasa da, günlük rutininize dahil
                    edebileceğiniz stratejiler ağrı düzeyini kontrol
                    altında tutmanıza yardımcı olabilir: Kompresyon,
                    pozisyonlama, anti-inflamatuar beslenme ve uyku hijyeni
                    bunların başında gelir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem ağrısı gün boyunca değişkenlik gösterir &mdash;
                  genellikle akşam saatlerinde, uzun süre ayakta kaldıktan
                  sonra veya sıcak havalarda şiddetlenir. Bu paternleri
                  tanımak ve önlem almak ağrı yönetiminin temelidir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sabah rutini:</strong> Kompresyon giysisini
                      yataktan kalkmadan önce giyin. Yatakta hafif bacak
                      elevasyonu ve ayak bileği pompalama hareketleri lenf
                      akışını başlatır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Gün içi molalar:</strong> Her 1&ndash;2 saatte
                      birkaç dakika bacakları kaldırın. Masa başı
                      çalışıyorsanız bir footrest kullanın ve düzenli aralıklarla
                      yürüyün.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Akşam rahatlaması:</strong> Ilık (sıcak değil)
                      bir duş, ardından bacak elevasyonu ve hafif kendi
                      kendine MLD masajı ağrıyı hafifletebilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Beslenme:</strong> Omega-3 yağ asitleri
                      (balık yağı), zerdeçal, zencefil ve koyu yeşil
                      yapraklı sebzeler anti-inflamatuar etki gösterir.
                      İşlenmiş gıdalar ve rafine şeker inflamasyonu
                      artırabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Uyku:</strong> Yeterli ve kaliteli uyku ağrı
                      eşiğini yükseltir. Bacakların altına yastık koyarak
                      uyumak gece ödemini azaltabilir.
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
                    <HeartHandshake className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Ağrı ile başa çıkma: Psikolojik boyut
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kronik ağrı, beyin ağrı
                    işleme mekanizmalarını değiştirebilir. Mindfulness,
                    bilişsel davranışçı terapi (BDT) ve kabul temelli
                    yaklaşımlar ağrı algısını azaltmada etkili olabilir.
                    Ağrınızı yalnız taşımayın &mdash; destek grupları ve
                    profesyonel yardım büyük fark yaratabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Kronik ağrı yalnızca fiziksel değil, aynı zamanda
                  nöroplastik bir süreçtir. Uzun süreli ağrı, beyindeki
                  ağrı işleme merkezlerini yeniden yapılandırır ve ağrı
                  eşiğini düşürür. Bu &quot;merkezi hassaslaşma&quot; lipödem
                  hastalarında sıkça gözlenmektedir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Psikolojik ağrı yönetim araçları:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Mindfulness meditasyon:</strong> Günde
                        10&ndash;15 dakika bilinçli farkındalık pratiği,
                        ağrı algısını azaltmada ve stresle başa çıkmada
                        etkili olabilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Ağrı günlüğü:</strong> Ağrı tetikleyicilerini,
                        yoğunluğunu ve rahatlatıcılarını kaydetmek, kişisel
                        paternleri anlamanızı ve tedaviyi optimize etmenizi
                        sağlar.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Destek grupları:</strong> Benzer deneyimi yaşayan
                        kişilerle bağlantı kurmak yalnızlık hissini azaltır
                        ve pratik stratejiler öğrenmeyi sağlar.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>
                        <strong>Profesyonel destek:</strong> Kronik ağrı
                        konusunda deneyimli bir psikolog veya psikiyatrist,
                        ağrı yönetim planınıza önemli katkı sağlayabilir.
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
                niteliği taşımaz. Lipödem ağrısı şiddetli veya kontrol
                edilemez düzeydeyse mutlaka bir sağlık profesyoneline
                başvurunuz. Ağrı kesici dahil tüm ilaçları doktorunuza
                danışmadan kullanmayınız. Daha fazla bilgi için{" "}
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
