import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  HelpCircle,
  Dna,
  Search,
  FlaskConical,
  Lightbulb,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları | Lipödem Türkiye",
  description:
    "Lipödem araştırmasında halen yanıtlanamayan sorular neler? Patogenez, genetik, biyobelirteçler ve tanı kriterleri konusundaki belirsizlikler.",
  openGraph: {
    title: "Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları",
    description:
      "Lipödem araştırmasında bilinmeyenler bilinenleri aşıyor. Bilimin henüz cevaplayamadığı kritik sorular ve gelecek yönelimler.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem Araştırması Nereye Gidiyor? Bilim İnsanlarının Yol Haritası",
    slug: "/blog/lipodem-arastirma-gelecek",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler",
    slug: "/blog/lipodem-morfoloji-patofizyoloji",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Tanısında Görüntüleme: MR mı, Ultrason mu?",
    slug: "/blog/lipodem-goruntuleme-yontemleri",
    kategori: "Araştırma",
  },
];

export default function LipodemBilmediklerimizPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-[#E8F5F0] py-12 md:py-16">
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
                Bilimin Açık Soruları
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
              19 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem 1940&apos;lardan beri bilinen bir hastalık olmasına
            rağmen, halen pek çok temel soru yanıtsız kalmaya devam
            etmektedir. Güncel bir derleme (PMID: 37390539), lipödem
            araştırmasında bilinmeyenlerin bilinenleri aştığını cesaretle
            ortaya koymaktadır. Bu makale, bilimin henüz cevaplayamadığı
            kritik soruları ve bunların sizin için ne anlama geldiğini
            anlatıyor.
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
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                    <HelpCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödemin gerçek nedeni neden halen bilinmiyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemin patogenezi &mdash;
                    yani hastalığın nasıl başladığı ve ilerlediği &mdash;
                    halen tam olarak aydınlatılamamıştır. Hormonal, genetik,
                    inflamatuar ve vasküler faktörlerin karmaşık bir etkileşimi
                    olduğu düşünülse de kesin mekanizma belirsizdir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin neden ortaya çıktığını anlamak, tıp dünyasının en
                  önemli açık sorularından biridir. Hastalığın puberte,
                  gebelik veya menopoz gibi hormonal değişim dönemlerinde
                  başlaması veya kötüleşmesi, östrojenin kritik bir rol
                  oynadığını düşündürmektedir. Ancak östrojenin tam olarak
                  hangi mekanizma ile yağ dokusu değişikliğine yol açtığı
                  netleştirilememiştir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Derleme, mevcut hipotezlerin hiçbirinin tek başına lipödemi
                  açıklayamadığını vurgulamaktadır. Muhtemelen birden fazla
                  faktör &mdash; genetik yatkınlık, hormonal tetikleyiciler,
                  inflamatuar süreçler ve vasküler disfonksiyon &mdash; bir
                  arada etkili olmaktadır. Ancak bu faktörlerin nasıl
                  etkileştiğini gösteren kapsamlı bir model henüz
                  oluşturulamamıştır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Search className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Tanı neden halen klinik muayeneye dayalı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem için özgül bir
                    laboratuvar testi, biyobelirteç veya görüntüleme kriteri
                    bulunmamaktadır. Tanı, deneyimli bir klinisyenin
                    muayenesine dayanır &mdash; bu da gecikmeli ve gözden
                    kaçan tanılara yol açmaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tanısının klinik muayeneye dayalı olması, hastalığın
                  en büyük sorunlarından biridir. Araştırma, bir lipödem
                  hastasının ortalama tanı süresinin 10&ndash;12 yıl olduğunu
                  belirtmektedir. Bu gecikmenin birkaç nedeni vardır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Obezite ile karıştırma:</strong> Pek çok
                      klinisyen lipödemi basit obezite olarak
                      değerlendirmektedir. Hastaların &quot;daha az ye, daha
                      çok hareket et&quot; tavsiyesiyle gönderilmesi yaygın
                      bir durumdur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Evreleme tutarsızlığı:</strong> Lipödem
                      evrelemesi için birden fazla sistem kullanılmakta ve
                      bunlar arasında tam bir uyum bulunmamaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tıp eğitiminde eksiklik:</strong> Birçok ülkede,
                      Türkiye dahil, lipödem tıp fakültesi müfredatında
                      yeterince yer almamaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Standardize tanı kriterleri eksikliği:</strong>{" "}
                      Uluslararası düzeyde üzerinde uzlaşılmış tek bir tanı
                      kriter seti mevcut değildir.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Dna className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Genetik: Lipödem kalıtsal mı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Aile öyküsü güçlü bir risk
                    faktörüdür &mdash; hastaların büyük çoğunluğunda ailede
                    lipödem öyküsü vardır. Ancak sorumlu genler henüz
                    tanımlanamamıştır ve kalıtım paterni tam olarak
                    bilinmemektedir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem hastalarının yaklaşık %60&ndash;80&apos;inde aile
                  öyküsü mevcuttur. Bu durum, hastalığın güçlü bir genetik
                  bileşeni olduğuna işaret etmektedir. Ancak derleme, genetik
                  araştırmaların halen çok erken aşamada olduğunu
                  vurgulamaktadır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sorumlu genler belirsiz:</strong> Bazı aday
                      genler önerilmiş olsa da (AKR1C1 gibi), büyük ölçekli
                      genom çalışmaları henüz tamamlanamamıştır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kalıtım paterni belirsiz:</strong> Otozomal
                      dominant mı, poligenik mi, yoksa multifaktöriyel mi?
                      Bu sorunun yanıtı bilinmemektedir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Epigenetik faktörler:</strong> Çevresel
                      faktörlerin gen ifadesini nasıl değiştirdiği &mdash; yani
                      aynı genetik yatkınlığa sahip bireylerin neden farklı
                      şiddette etkilendiği &mdash; araştırılmaktadır.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Genetik araştırmalar hızla ilerlemektedir ve gelecekte
                  lipödem riskini önceden belirleyebilecek genetik testlerin
                  geliştirilebileceği umulmaktadır. Ancak şu an için aile
                  öyküsü en güçlü risk göstergesi olmaya devam etmektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 mt-1">
                    <FlaskConical className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Biyobelirteç arayışı: Kan testi ile tanı mümkün olabilir mi?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Araştırmacılar lipödeme özgü
                    biyobelirteçler aramaktadır. Bazı sitokinler, lipidler ve
                    ekzozomlar aday olarak öne çıkmıştır. Ancak henüz klinik
                    kullanıma hazır, onaylanmış bir biyobelirteç yoktur.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem tanısını objektifleştirmek için en büyük umut
                  biyobelirteçlere bağlanmaktadır. Bir kan testi ile lipödemi
                  kesin olarak tanılayabilmek, milyonlarca hastanın yıllarca
                  süren tanı yolculuğunu dramatik şekilde kısaltabilir.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Aday biyobelirteçler:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <span>
                        <strong>Pro-inflamatuar sitokinler:</strong> IL-6,
                        TNF-alfa, CRP gibi belirteçler lipödemde yüksek
                        bulunmuştur ancak obezitede de yüksektir &mdash;
                        özgüllük sorunu vardır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <span>
                        <strong>Lipid profili farklılıkları:</strong> Lipödem
                        hastalarında bazı lipidomik paternler normalden
                        farklı olabilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <span>
                        <strong>Ekzozomlar:</strong> Hücre dışı veziküllerin
                        lipödem tanısında potansiyeli araştırılmaktadır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                      <span>
                        <strong>Metabolomik belirteçler:</strong> Kan ve idrar
                        metabolitlerindeki lipödeme özgü değişiklikler
                        araştırılmaktadır.
                      </span>
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
                    <Lightbulb className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Bu belirsizlikler sizin için ne anlama geliyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Bilimin açık soruları,
                    lipödemin &quot;önemsiz&quot; veya &quot;hayali&quot; bir
                    hastalık olduğu anlamına gelmez. Tam tersine,
                    araştırmaların hızla arttığı ve toplumsal farkındalığın
                    yükseldiği bir dönemdeyiz. Mevcut tedavi seçenekleri
                    semptomları önemli ölçüde iyileştirebilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bu makalenin amacı umutsuzluk yaratmak değil, şeffaf olmaktır.
                  Lipödemle yaşıyorsanız, bilmeniz gereken en önemli şey şudur:
                  bilmediklerimiz nedeniyle sizi tedavi edemeyeceğimiz anlamına
                  gelmiyor.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Mevcut tedaviler etkili:</strong> Kompresyon,
                      manuel lenf drenajı, egzersiz ve beslenme düzenlemesi
                      semptomları belirgin şekilde iyileştirir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Araştırmalar hızlanıyor:</strong> Son 5 yılda
                      lipödem araştırma sayısı katlanarak artmıştır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Farkındalık artıyor:</strong> Hem Türkiye&apos;de
                      hem de dünyada lipödem farkındalığı her geçen gün
                      yükselmektedir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sizi duyan topluluğunuz var:</strong> Lipödem
                      hasta toplulukları, deneyim paylaşımı ve karşılıklı
                      destek için güçlü bir kaynak oluşturmaktadır.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Her açık soru, gelecekte daha iyi bir tedaviye giden yolda
                  bir adımdır. Bilim ilerliyor &mdash; ve siz bu süreçte
                  yalnız değilsiniz.
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
