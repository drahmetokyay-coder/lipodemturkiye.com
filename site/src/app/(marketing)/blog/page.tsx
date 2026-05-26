import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, Tag } from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title: "Lipödem Blog | Güncel Bilgiler, Araştırmalar ve İpuçları",
  description:
    "Lipödem hakkında güncel bilgiler, bilimsel araştırmalar ve pratik ipuçları. Beslenme, tedavi, egzersiz ve daha fazlası.",
  openGraph: {
    title: "Lipödem Blog | Güncel Bilgiler, Araştırmalar ve İpuçları",
    description:
      "Lipödem hakkında güncel bilgiler, bilimsel araştırmalar ve pratik ipuçları.",
  },
};

const kategoriBadgeRenk: Record<string, string> = {
  Beslenme: "bg-green-50 text-green-700 border-green-200",
  "Araştırma": "bg-blue-50 text-blue-700 border-blue-200",
  Tedavi: "bg-[#E8F5F0] text-[#15594A] border-[#93D4BE]",
  Genel: "bg-stone-100 text-stone-700 border-stone-200",
};

const blogYazilari = [
  {
    baslik: "Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek",
    slug: "lipodem-ilerleme-zorluklar-gelecek",
    ozet:
      "Lipödem araştırmalarında neredeyiz? Genetik yatkınlık, hormonal etkiler, damar disfonksiyonu ve multidisipliner tedavi yaklaşımlarının güncel bilimsel değerlendirmesi.",
    tarih: "26 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları",
    slug: "lipodem-klinik-ozellikler-tani-tedavi",
    ozet:
      "Lipödem obezite veya lenfödemle neden karıştırılır? Klinik özellikleri, modern tanı yöntemleri ve CDT'den liposüksiyona tedavi seçenekleri.",
    tarih: "25 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor?",
    slug: "almanya-s2k-lipodem-kilavuzu",
    ozet:
      "Alman Fleboloji ve Lenfoloji Derneği'nin 60 önerilik resmi lipödem kılavuzu: tanı kriterleri, konservatif tedavi, cerrahi ve öz-yönetim.",
    tarih: "24 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Egzersiz Lipödemi Tedavi Edebilir mi? İtalyan Bilim Konsensüsü",
    slug: "lipodem-egzersiz-tedavi-konsensus",
    ozet:
      "Su egzersizleri ve kuvvet antrenmanı lipödemde gerçekten faydalı mı? İtalyan bilim konsensüsünün önerileri ve pratik egzersiz planı.",
    tarih: "23 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi",
    slug: "lipodem-yaz-rehberi",
    ozet:
      "Yaz aylarında lipödem semptomları neden artar? Sıcak intoleransı, kompresyon kullanımı, hidrasyon ve giyim önerileriyle yazı rahat geçirmenin yolları.",
    tarih: "22 Mayıs 2026",
    kategori: "Beslenme",
  },
  {
    baslik: "Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu",
    slug: "lenfodem-mi-lipodem-mi-farklar",
    ozet:
      "Lenfödem ve lipödem birbirine benzer ama temelden farklıdır. Stemmer testi, bilateral dağılım ve tedavi yaklaşımlarındaki farklar.",
    tarih: "22 Mayıs 2026",
    kategori: "Genel",
  },
  {
    baslik: "Lipödem Tanısında Görüntüleme: MR mı, Ultrason mu?",
    slug: "lipodem-goruntuleme-yontemleri",
    ozet:
      "Ultrason, MR, BT ve lenfosintigrafi lipödem tanısında ne kadar etkili? Sistematik derleme sonuçları ve görüntülemenin sınırları.",
    tarih: "21 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Ketojenik Diyet Lipödem Ağrısını Azaltır mı? Bilim Ne Diyor?",
    slug: "ketojenik-diyet-lipodem",
    ozet:
      "Çok düşük kalorili ketojenik diyet lipödemde Akdeniz diyetinden daha etkili olabilir mi? Anti-inflamatuar özellikleri ve pratik öneriler.",
    tarih: "20 Mayıs 2026",
    kategori: "Beslenme",
  },
  {
    baslik: "Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları",
    slug: "lipodem-bilmediklerimiz",
    ozet:
      "Lipödem hakkında bilmediklerimiz, bildiklerimizden fazla. Patogenez, genetik, biyobelirteçler ve gelecek araştırma yönleri.",
    tarih: "19 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Araştırması Nereye Gidiyor? Bilim İnsanlarının Yol Haritası",
    slug: "lipodem-arastirma-gelecek",
    ozet:
      "Lipödem araştırma tarihçesi, genetik faktörler, evreleme zorlukları ve geleceğin tedavi umutları. Bilim insanlarının çizdiği yol haritası.",
    tarih: "18 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler",
    slug: "lipodem-morfoloji-patofizyoloji",
    ozet:
      "Lipödem yağ dokusunun morfolojik farklılıkları, fibrozis-inflamasyon döngüsü, biyobelirteç araştırmaları ve neden sıradan obezite olmadığı.",
    tarih: "17 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödeme Karşı Takviyeler: Hangisi İşe Yarar, Hangisi Para Tuzağı?",
    slug: "lipodem-takviye-rehberi",
    ozet:
      "Yeşil çay, kafein, krom, karnitin ve CLA: Lipödemde hangi besin takviyeleri bilimsel kanıta sahip, hangisi sadece pazarlama?",
    tarih: "16 Mayıs 2026",
    kategori: "Beslenme",
  },
  {
    baslik: "Östrojen ve Lipödem: Hormonal Bağlantının Bilimi",
    slug: "ostrojen-lipodem-iliskisi",
    ozet:
      "Lipödem neden ergenlik, hamilelik ve menopoz dönemlerinde ortaya çıkar? Östrojen reseptör anormallikleri ve hormonal tedavi implikasyonları.",
    tarih: "15 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "ABD Lipödem Standart Bakım Protokolü: Tedavi Sırası Nasıl Olmalı?",
    slug: "abd-lipodem-standart-bakim",
    ozet:
      "ABD'nin 85 maddelik lipödem konsensüs kılavuzu: önerilen tedavi sırası, konservatif öncelik yaklaşımı ve Türkiye'ye uyarlama notları.",
    tarih: "14 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Yönetiminde Güncelleme: Kanıtlı Tedavi mi, Efsane mi?",
    slug: "lipodem-yonetim-guncelleme",
    ozet:
      "Lipödem tedavisinde mitler ve gerçekler. Multimodal yönetim yaklaşımı, psikolojik destek ve gerçekçi beklentiler.",
    tarih: "13 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödem Ağrısının Nedeni ve Yönetimi: Pratik Bir Rehber",
    slug: "lipodem-agrisi-nedenleri-yonetimi",
    ozet:
      "Lipödem ağrısında allodini, sinir sinyalizasyonu ve östrojen rolü. Konservatif yönetimden liposüksiyona tedavi seçenekleri.",
    tarih: "12 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödemin A'dan Z'ye Haritası: Patogenez, Tanı ve Tedavi",
    slug: "lipodem-patogenez-tani-tedavi",
    ozet:
      "Kadınların %10'unu etkileyen lipödemde patogenez mekanizmaları, klinik tanı adımları ve CDT'den liposüksiyona kanıt temelli tedaviler.",
    tarih: "11 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Dünya Lipödeme Uyandı: Görmezden Gelinen Hastalığın Hikayesi",
    slug: "lipodem-farkindalik-cagrisi",
    ozet:
      "1940'lardan bugüne lipödem farkındalık yolculuğu. Neden görmezden gelindi, küresel tanınma hareketi ve kilo kaybının neden işe yaramadığı.",
    tarih: "10 Mayıs 2026",
    kategori: "Genel",
  },
  {
    baslik: "Lipödemin Modern Tanımı: Bir Alman Dermatologun Güncelleme Raporu",
    slug: "lipodem-guncel-guncelleme",
    ozet:
      "Lipödemin güncellenmiş tanımı: bilateral simetri, distal korunma, hormonal bağlantılar ve obezite ile lenfödemden ayrımı.",
    tarih: "9 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Yağı: Vücudu Hem Koruyan Hem Zorlayan Paradoks",
    slug: "lipodem-dost-dusman",
    ozet:
      "Lipödem yağının metabolik paradoksu: ağrı oluştururken neden diyabet ve hipertansiyon riski düşük? Bilimin çarpıcı bulguları.",
    tarih: "8 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Damar Hekimlerinin Gözünden Lipödem: Klinik Özet",
    slug: "damar-hekimlerinden-lipodem",
    ozet:
      "Vasküler tıp perspektifinden lipödem: damar hastalıklarından ayrımı, egzersiz fizyolojisi ve multidisipliner yönetim.",
    tarih: "7 Mayıs 2026",
    kategori: "Tedavi",
  },
];

export default function BlogPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
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
              <li className="text-stone-800 font-medium">Blog</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Blog
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700 max-w-3xl">
            Lipödem hakkında güncel bilgiler, araştırmalar ve pratik ipuçları.
            Bilimsel kaynaklara dayalı, anlaşılır ve hasta odaklı içeriklerimizle
            lipödem yolculuğunuzda yanınızdayız.
          </p>
        </div>
      </section>

      {/* BLOG KARTLARI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogYazilari.map((yazi, index) => (
              <ScrollReveal key={yazi.slug} delay={index * 100}>
                <Link
                  href={`/blog/${yazi.slug}`}
                  className="group block bg-white rounded-xl border border-stone-200 p-6 card-hover h-full"
                >
                  {/* Kategori badge + tarih */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${kategoriBadgeRenk[yazi.kategori] || kategoriBadgeRenk.Genel}`}
                    >
                      <Tag className="w-3 h-3" />
                      {yazi.kategori}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-stone-400">
                      <Calendar className="w-3 h-3" />
                      {yazi.tarih}
                    </span>
                  </div>

                  {/* Başlık */}
                  <h2 className="text-lg font-bold text-stone-800 leading-snug mb-3 group-hover:text-[#1A6B5A] transition-colors font-serif">
                    {yazi.baslik}
                  </h2>

                  {/* Özet */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {yazi.ozet}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A6B5A] group-hover:text-[#15594A] transition-colors">
                    Devam Et
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 font-serif">
            Lipödeminizi anlamak ilk adım
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            2 dakikada bilimsel semptom testimizi çözerek lipödem riskinizi
            değerlendirin. Sonuçlarınız tamamen gizlidir.
          </p>
          <Link
            href="/araclar/semptom-testi"
            className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#15594A] transition-colors shadow-lg shadow-[#1A6B5A]/20"
          >
            Ücretsiz Semptom Testini Başlat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
