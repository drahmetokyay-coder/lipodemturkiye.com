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
  Tedavi: "bg-purple-50 text-purple-700 border-purple-200",
  Genel: "bg-stone-100 text-stone-700 border-stone-200",
};

const blogYazilari = [
  {
    baslik: "Lipödem ve Yaz: Sıcak Havalarda Kendinizi Koruma Rehberi",
    slug: "lipodem-yaz-rehberi",
    ozet:
      "Yaz aylarında lipödem semptomları neden artar? Sıcak intoleransı, kompresyon kullanımı, hidrasyon ve giyim önerileriyle yazı rahat geçirmenin yolları.",
    tarih: "22 Mayıs 2026",
    kategori: "Beslenme",
  },
  {
    baslik: "2025 Delphi Konsensüsü: Lipödem Tanımı Nasıl Değişti?",
    slug: "2025-delphi-konsensus",
    ozet:
      "Uluslararası uzmanların 2025 Delphi konsensüsüyle lipödem tanım, tanı ve sınıflandırma kriterleri nasıl güncellendi? Yeni yaklaşımın hastaları nasıl etkileyeceği.",
    tarih: "18 Mayıs 2026",
    kategori: "Araştırma",
  },
  {
    baslik: "Kompresyon Çorabı Seçim Rehberi: Hangi Sınıf, Hangi Marka?",
    slug: "kompresyon-corabi-rehberi",
    ozet:
      "Lipödemde kompresyon tedavisi neden kritik? Düz örgü vs yuvarlak örgü, basınç sınıfları, doğru ölçü alma ve Türkiye'de ulaşılabilir markalar.",
    tarih: "12 Mayıs 2026",
    kategori: "Tedavi",
  },
  {
    baslik: "Anti-İnflamatuar Kahvaltı: 5 Kolay Türk Mutfağı Tarifi",
    slug: "anti-inflamatuar-kahvalti",
    ozet:
      "Lipödemde inflamasyonu azaltmaya yardımcı 5 pratik kahvaltı tarifi. Türk mutfağına uygun, kolay hazırlanan ve lezzetli anti-inflamatuar öneriler.",
    tarih: "6 Mayıs 2026",
    kategori: "Beslenme",
  },
  {
    baslik: "Lipödem ve Hamilelik: Bilmeniz Gereken 7 Şey",
    slug: "lipodem-hamilelik",
    ozet:
      "Hamilelik lipödemi nasıl etkiler? Hormonal değişimler, kompresyon kullanımı, kilo yönetimi ve doğum sonrası süreçte dikkat edilmesi gerekenler.",
    tarih: "28 Nisan 2026",
    kategori: "Genel",
  },
];

export default function BlogPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-600 transition-colors"
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
                  <h2 className="text-lg font-bold text-stone-800 leading-snug mb-3 group-hover:text-purple-600 transition-colors font-serif">
                    {yazi.baslik}
                  </h2>

                  {/* Özet */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-4 line-clamp-3">
                    {yazi.ozet}
                  </p>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 group-hover:text-purple-700 transition-colors">
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50">
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
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20"
          >
            Ücretsiz Semptom Testini Başlat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
