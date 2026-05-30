import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Leaf,
  Coffee,
  Pill,
  ShieldAlert,
  HeartPulse,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödeme Karşı Takviyeler: Hangisi İşe Yarar, Hangisi Para Tuzağı? | Lipödem Türkiye",
  description:
    "Yeşil çay, kafein, karnitin, krom ve CLA gibi takviyelerin lipödem yönetimindeki bilimsel kanıtlarını inceliyoruz. Hangi takviyeler gerçekten işe yarar?",
  openGraph: {
    title:
      "Lipödeme Karşı Takviyeler: Hangisi İşe Yarar, Hangisi Para Tuzağı?",
    description:
      "Bilimsel kanıtlarla lipödem takviye rehberi. Yeşil çay, kafein, karnitin ve daha fazlası.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi",
    slug: "/blog/lipodem-yaz-rehberi",
    kategori: "Beslenme",
  },
  {
    baslik:
      "Östrojen ve Lipödem: Hormonal Bağlantının Bilimi",
    slug: "/blog/ostrojen-lipodem-iliskisi",
    kategori: "Araştırma",
  },
  {
    baslik:
      "Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi?",
    slug: "/blog/lipodem-yonetim-guncelleme",
    kategori: "Tedavi",
  },
];

export default function LipodemTakviyeRehberiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green-50 via-[#E8F5F0] to-lime-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Takviye Rehberi</li>
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
              16 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödeme Karşı Takviyeler: Hangisi İşe Yarar, Hangisi Para Tuzağı?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem yağ dokusu, klasik obeziteden farklı olarak diyet ve
            egzersize dirençlidir. Bu nedenle birçok hasta umudunu takviyelere
            bağlar. Peki yeşil çay, kafein, karnitin veya krom gibi takviyeler
            gerçekten lipödem yağ dokusuna etki eder mi? Bilimsel kanıtları
            inceliyoruz &mdash; böylece cüzdanınızı ve sağlığınızı korumanız
            kolaylaşır.
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
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemde takviye neden farklı çalışır?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağ dokusu metabolik
                    olarak normal yağ dokusundan farklıdır. Klasik &quot;yağ
                    yakıcı&quot; takviyeler bu dokuya aynı şekilde etki etmez;
                    ancak bazı bileşenler inflamasyonu azaltarak veya lenf
                    drenajını destekleyerek dolaylı fayda sağlayabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem yağ hücreleri (adipositler) hipertrofik ve
                  hipoksiktir &mdash; yani normalden büyük ve oksijensizdir.
                  Bu hücreler klasik lipoliz (yağ yakımı) sinyallerine
                  dirençlidir. Bu nedenle piyasadaki birçok &quot;yağ
                  yakıcı&quot; takviye lipödem dokusunda beklenen etkiyi
                  göstermez.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Ancak lipödemin temelinde kronik düşük dereceli inflamasyon
                  yatar. Bu inflamasyonu hedef alan takviyeler &mdash; doğrudan
                  yağ yakmasa bile &mdash; semptom yönetiminde yardımcı
                  olabilir. Araştırmalar, anti-inflamatuar ve antioksidan
                  özellikteki bileşenlerin lipödem yönetiminde destekleyici
                  rol oynayabileceğini göstermektedir (PMID: 36479502).
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-1">
                    <Coffee className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Yeşil çay ve kafein: En güçlü kanıt bunlarda mı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Yeşil çay ekstraktı (EGCG) ve
                    kafein, lipödem araştırmalarında en çok umut vadeden
                    takviyeler arasındadır. Termogenezi artırır, inflamasyonu
                    azaltır ve yağ oksidasyonunu destekler &mdash; ancak tek
                    başına mucize yaratmaz.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Yeşil çaydaki epigallokateşin gallat (EGCG), güçlü bir
                  antioksidandır. Araştırmalar EGCG&apos;nin yağ hücrelerinde
                  inflamatuar sitokinleri (TNF-alfa, IL-6) baskıladığını
                  göstermektedir. Kafein ise termogenezi artırarak metabolik
                  hızı yükseltir ve lipolizi uyarır.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>EGCG dozu:</strong> Çalışmalarda günde
                      300&ndash;500 mg EGCG (yaklaşık 3&ndash;5 fincan yeşil
                      çaya eşdeğer) kullanılmıştır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kafein etkisi:</strong> Günde 200&ndash;400 mg
                      kafein metabolik hızı %3&ndash;11 artırabilir. Ancak
                      lipödem dokusundaki direnci tamamen kıramaz.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Dikkat:</strong> Mide hassasiyeti olanlar aç
                      karnına yeşil çay ekstraktı almamalı. Karaciğer
                      enzimlerinin düzenli kontrolü önerilir.
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
                    <Pill className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Krom, karnitin ve CLA: Kanıtlar ne diyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Krom insülin duyarlılığını
                    destekleyebilir, karnitin yağ asitlerinin
                    mitokondrilere taşınmasına yardımcı olur, CLA ise vücut
                    kompozisyonunu iyileştirebilir &mdash; ancak lipödeme
                    özgü kanıtlar hâlâ sınırlıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bu üç takviye, genel yağ yönetimi literatüründe sıkça
                  çalışılmıştır. Lipödem bağlamında ise kanıtlar
                  ekstrapolasyona dayanır &mdash; yani doğrudan lipödem
                  hastalarında yapılmış büyük çalışmalar yoktur, ancak
                  mekanizma açısından mantıklıdır.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Takviye karşılaştırması:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>
                        <strong>Krom pikolinat:</strong> İnsülin direnci
                        lipödemde sık görülür. Krom, insülin sinyalini
                        iyileştirerek dolaylı fayda sağlayabilir. Günde
                        200&ndash;1000 mcg dozları çalışılmıştır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>
                        <strong>L-Karnitin:</strong> Yağ asitlerini enerji
                        üretimi için mitokondrilere taşır. Günde 1&ndash;3 g
                        dozu genel çalışmalarda vücut yağını azaltmada
                        mütevazı etki göstermiştir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>
                        <strong>Konjuge linoleik asit (CLA):</strong> Vücut
                        kompozisyonunu iyileştirebilir ancak lipödem yağına
                        özgü veri yoktur. Mide-bağırsak yan etkileri olabilir.
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
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <ShieldAlert className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Hangi takviyeler para tuzağı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> &quot;Lipödem yakıcı&quot;,
                    &quot;bölgesel zayıflama kapsülü&quot; veya &quot;lenf
                    temizleyici detoks&quot; gibi iddialı ürünlere karşı
                    dikkatli olun. Bilimsel kanıtı olmayan, pahalı ve bazen
                    zararlı olabilen birçok ürün piyasadadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem hastaları, hastalığın tedaviye dirençli doğası
                  nedeniyle umut vaadeden her ürüne yönelebilir. Ne yazık ki
                  bazı firmalar bu umudu istismar eder. Aşağıdaki kırmızı
                  bayraklara dikkat edin:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>&quot;Lipödem yağını eritir&quot;
                      iddiaları:</strong> Hiçbir oral takviye lipödem yağ
                      dokusunu seçici olarak eritme kapasitesine sahip
                      değildir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Detoks çayları ve karışımları:</strong> &quot;Lenf
                      sistemi detoksu&quot; kavramının bilimsel karşılığı
                      yoktur. Lenfatik sistem mekanik destek (kompresyon,
                      manuel drenaj) ile çalışır, çayla değil.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Çok bileşenli &quot;süper
                      formüller&quot;:</strong> 20&ndash;30 bileşen içeren
                      karışımlarda her birinin dozu genellikle etkili seviyenin
                      çok altındadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sosyal medya tanıtımları:</strong> Influencer
                      önerileri bilimsel kanıt değildir. PubMed&apos;de
                      yayınlanmış çalışma yoksa şüpheci olun.
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
                    <HeartPulse className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Takviyeleri yaşam tarzı değişiklikleriyle nasıl
                    birleştirmeli?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Takviyeler yalnızca sağlıklı
                    yaşam tarzının &quot;üzerine&quot; eklenen desteklerdir,
                    yerine geçmez. Anti-inflamatuar beslenme, düzenli egzersiz
                    ve kompresyon tedavisi temeldir; takviyeler bu temelin
                    tamamlayıcısıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Araştırmalar tutarlı bir şekilde göstermektedir: takviyeler
                  yalnızca sağlıklı yaşam tarzı müdahaleleriyle birlikte
                  kullanıldığında anlamlı fayda sağlar. Tek başına hiçbir
                  takviye lipödem yönetiminde yeterli değildir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Bütünleşik yaklaşım önerileri:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Anti-inflamatuar beslenme planı oluşturun: Akdeniz
                      diyeti veya anti-inflamatuar diyet lipödem yönetiminde
                      en çok desteklenen yaklaşımlardır.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Düzenli, düşük yoğunluklu egzersiz yapın: Su
                      egzersizleri, yürüyüş ve yoga lipödem için idealdir.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Kompresyon tedavisine devam edin: Takviyeler
                      kompresyonun yerini alamaz.
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      Doktorunuzla konuşun: Özellikle ilaç kullananlar, takviye
                      etkileşimlerini mutlaka sormalıdır.
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
                alanında uzman bir sağlık profesyoneline başvurunuz. Herhangi
                bir takviyeye başlamadan önce doktorunuza danışınız;
                özellikle ilaç kullanıyorsanız etkileşim riski olabilir.
                Daha fazla bilgi için{" "}
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
