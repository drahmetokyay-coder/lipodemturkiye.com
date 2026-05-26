import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  History,
  Compass,
  Dna,
  Layers,
  Rocket,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Araştırması Nereye Gidiyor? Bilim İnsanlarının Yol Haritası | Lipödem Türkiye",
  description:
    "Lipödem araştırmasının tarihçesi, güncel yönelimler, genetik faktörler, evreleme zorlukları ve gelecekteki tedavi olasılıkları hakkında kapsamlı değerlendirme.",
  openGraph: {
    title:
      "Lipödem Araştırması Nereye Gidiyor? Bilim İnsanlarının Yol Haritası",
    description:
      "Lipödem ciddi bir hastalık olarak tanınmalıdır. Araştırma tarihçesi, genetik ipuçları ve gelecek tedavi vizyonu.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları",
    slug: "/blog/lipodem-bilmediklerimiz",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem İlerleme, Zorluklar ve Gelecek",
    slug: "/blog/lipodem-ilerleme-zorluklar-gelecek",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler",
    slug: "/blog/lipodem-morfoloji-patofizyoloji",
    kategori: "Araştırma",
  },
];

export default function LipodemArastirmaGelecekPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50 via-blue-50 to-[#E8F5F0] py-12 md:py-16">
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
                Araştırma Yol Haritası
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
              18 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Araştırması Nereye Gidiyor? Bilim İnsanlarının Yol Haritası
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, 1940&apos;larda ilk kez tanımlanan ancak onlarca yıl
            boyunca görmezden gelinen bir hastalıktır. Güncel bir derleme
            (PMID: 36675759), lipödemin belirlenemeyen genetik arka planı olan
            ciddi bir hastalık olarak tanınması gerektiğini vurgulamaktadır.
            Peki araştırmalar nereden geldi, nereye gidiyor?
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
                    <History className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem araştırmasının kısa tarihçesi
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Allen ve Hines 1940&apos;ta
                    lipödemi ilk kez tanımlamıştır. Ancak hastalık yaklaşık
                    80 yıl boyunca tıp dünyasında yeterince ilgi görmemiştir.
                    Son 10&ndash;15 yılda araştırmalar hızla artmıştır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin tarihi, ihmal edilmiş bir hastalığın hikayesidir.
                  1940&apos;ta Mayo Kliniği&apos;nden Allen ve Hines,
                  bacaklarda simetrik yağ birikimi olan kadınları
                  tanımlamıştır. Ancak bu tanımlama uzun süre geniş kitleler
                  tarafından kabul görmemiştir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Derleme, lipödem araştırmasının önemli dönüm noktalarını
                  şöyle özetlemektedir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>1940:</strong> İlk klinik tanımlama (Allen &amp;
                      Hines)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>1940&ndash;2000:</strong> Uzun sessizlik dönemi.
                      Lipödem çoğunlukla obezite veya lenfödem olarak yanlış
                      değerlendirilmiştir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>2000&ndash;2010:</strong> Avrupa&apos;da,
                      özellikle Almanya ve Hollanda&apos;da farkındalık artışı
                      ve ilk sistematik çalışmalar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>2010&ndash;günümüz:</strong> Araştırma
                      patlaması. Patogenez, genetik, görüntüleme ve tedavi
                      alanlarında çok sayıda yayın.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Bu tarihsel perspektif önemlidir: lipödem &quot;yeni
                  keşfedilmiş&quot; bir hastalık değildir. Yeni olan, bilim
                  dünyasının nihayet bu hastalığı ciddiye almasıdır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Compass className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Güncel araştırma yönelimleri neler?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Araştırmalar dört ana eksende
                    ilerliyor: patogenezin aydınlatılması, biyobelirteç
                    geliştirme, genetik haritalama ve yeni tedavi
                    yaklaşımlarının değerlendirilmesi.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Derleme, güncel lipödem araştırmasının odaklandığı temel
                  alanları detaylı olarak incelemektedir:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Ana araştırma eksenleri:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Yağ dokusu biyolojisi:</strong> Lipödem yağ
                        hücrelerinin normal yağ hücrelerinden nasıl farklı
                        olduğu &mdash; hiperproliferasyon, fibrozis,
                        inflamasyon mekanizmaları.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Lenf sistemi etkileşimi:</strong> Lipödem yağ
                        dokusunun lenf damarlarını nasıl etkilediği ve neden
                        ileri evrelerde sekonder lenfödem geliştiği.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Hormonal mekanizmalar:</strong> Östrojen ve
                        diğer seks hormonlarının lipödem gelişimindeki rolü.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>
                        <strong>Tanı teknolojileri:</strong> Yapay zeka
                        destekli görüntüleme analizi ve yeni biyobelirteç
                        panelleri.
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
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Dna className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Genetik faktörler: Ne biliyoruz, ne bilmiyoruz?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemin güçlü bir genetik
                    bileşeni olduğu kesindir &mdash; aile öyküsü çok
                    yaygındır. Ancak sorumlu genler halen belirlenmemiş
                    durumdadır. Derleme bunu &quot;belirlenemeyen genetik
                    arka plan&quot; olarak tanımlamaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Derlemenin en dikkat çekici vurgularından biri, lipödemin
                  genetik boyutudur. Hastaların büyük çoğunluğunda birinci
                  derece akrabalarda benzer şikayetler bildirilmektedir.
                  Anneden kıza geçiş paterni çok sık gözlenmektedir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Ancak genetik araştırmaların karşılaştığı zorluklar
                  büyüktür:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Fenotip tanımlama güçlüğü:</strong> Lipödemin
                      kesin tanı kriterleri olmadığından, genetik çalışmalarda
                      doğru hasta seçimi zordur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Obezite örtüşmesi:</strong> İleri evre
                      lipödemde sıklıkla eşlik eden obezite, genetik
                      sinyallerin ayrıştırılmasını zorlaştırmaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Poligenik olasılık:</strong> Lipödem muhtemelen
                      tek bir gen tarafından değil, birden fazla genin
                      etkileşimiyle ortaya çıkmaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Çevresel etkileşim:</strong> Genetik yatkınlığın
                      ifade bulması için çevresel tetikleyicilere (hormonlar,
                      yaşam tarzı) ihtiyaç duyuluyor olabilir.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 mt-1">
                    <Layers className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Evreleme neden bu kadar zor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> İleri evre lipödem sıklıkla
                    obezite ve sekonder lenfödem ile birlikte görülür. Bu
                    durum hem evrelemeyi hem de tedavi planlamasını karmaşık
                    hale getirir. Net evre sınırları konusunda uluslararası
                    uzlaşı henüz sağlanamamıştır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem evrelemesi tıp dünyasında tartışmalı bir konudur.
                  Derleme, evrelemenin zorluklarını detaylı olarak ele
                  almaktadır:
                </p>

                <p className="text-stone-700 leading-relaxed">
                  Mevcut evreleme sistemi genellikle üç evreden oluşur: Evre 1
                  (düzgün deri yüzeyi, kalınlaşmış subkutan doku), Evre 2
                  (düzensiz deri yüzeyi, lobüler yağ nodülleri) ve Evre 3
                  (belirgin deformasyon, büyük deri kıvrımları). Ancak bu
                  evreleme çeşitli sorunlar barındırır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Obezite karışıklığı:</strong> İleri evrelerde
                      eşlik eden aşırı kilo, lipödem yağını obezite yağından
                      ayırt etmeyi zorlaştırır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sekonder lenfödem:</strong> Evre 3 lipödemde
                      sıklıkla gelişen ikincil lenfödem tabloyu daha da
                      karmaşıklaştırır (lipo-lenfödem).
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Subjektif değerlendirme:</strong> Evreler
                      arasındaki geçiş noktaları net olmadığından, farklı
                      klinisyenler aynı hastayı farklı evrelere
                      yerleştirebilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tip sınıflaması:</strong> Lipödem tiplerinin (Tip
                      I&ndash;V, tutulan bölgelere göre) evreleme ile
                      ilişkilendirilmesi de standartlaştırılamamıştır.
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
                    <Rocket className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Gelecekteki tedaviler nasıl olabilir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Hedefli ilaç tedavileri,
                    kişiselleştirilmiş tıp yaklaşımları ve biyolojik ajanlar
                    gelecekteki tedavi seçenekleri arasında yer almaktadır.
                    Ancak bu gelişmeler için önce hastalığın moleküler
                    mekanizmalarının tam olarak anlaşılması gerekmektedir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bugün lipödem tedavisi ağırlıklı olarak semptom yönetimine
                  (kompresyon, manuel lenf drenajı, egzersiz) ve cerrahi
                  müdahalelere (liposuction) dayanmaktadır. Ancak derleme,
                  gelecekte çok daha hedefli tedavilerin mümkün
                  olabileceğine işaret etmektedir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Anti-inflamatuar ilaçlar:</strong> Lipödem
                      dokusundaki kronik inflamasyonu hedef alan spesifik
                      moleküller geliştirilebilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Anti-fibrotik tedaviler:</strong> Yağ
                      dokusundaki fibrozisi hedefleyen ajanlar ağrıyı ve
                      doku sertliğini azaltabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Lenf sistemi destekçileri:</strong> Lenf drenajını
                      iyileştiren farmakolojik ajanlar ödem kontrolünü
                      kolaylaştırabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kişiselleştirilmiş tedavi:</strong> Genetik
                      profillemeye dayalı, her hastaya özel tedavi
                      protokolleri gelecekte mümkün olabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>GLP-1 agonistleri:</strong> Obezite tedavisinde
                      devrim yaratan semaglutid gibi ilaçların lipödem
                      üzerindeki etkisi aktif olarak araştırılmaktadır.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Bu gelecek vizyonu umut vericidir; ancak gerçekçi olmak da
                  önemlidir. Bu tedavilerin klinik kullanıma girmesi muhtemelen
                  yıllar alacaktır. Bu süreçte, mevcut kanıta dayalı tedavi
                  yöntemlerini uygulamak en doğru yaklaşımdır.
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
