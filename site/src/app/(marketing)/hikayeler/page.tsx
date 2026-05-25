import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Quote, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title: "Hasta Hikayeleri | Lipödemle Yaşayan Kadınların Deneyimleri",
  description:
    "Lipödemle yaşayan kadınların gerçek deneyimleri. Tanı süreci, tedavi yolculuğu ve günlük yaşamdan ilham veren hikayeler.",
  openGraph: {
    title: "Hasta Hikayeleri | Lipödemle Yaşayan Kadınların Deneyimleri",
    description:
      "Lipödemle yaşayan kadınların gerçek deneyimleri ve ilham veren hikayeleri.",
  },
};

const evreBadgeRenk: Record<string, string> = {
  "Evre 1": "bg-green-50 text-green-700 border-green-200",
  "Evre 2": "bg-amber-50 text-amber-700 border-amber-200",
  "Evre 3": "bg-orange-50 text-orange-700 border-orange-200",
};

const hikayeler = [
  {
    isim: "A.K.",
    sehir: "İstanbul",
    evre: "Evre 2",
    alinti:
      "10 yıl boyunca yanlış tanı aldım. Obezite dediler, tiroid dediler, depresyon dediler. Lipödem tanısını almak benim için bir dönüm noktasıydı.",
    slug: "10-yil-yanlis-tani",
  },
  {
    isim: "Z.Y.",
    sehir: "Ankara",
    evre: "Evre 1",
    alinti:
      "Ergenlikte başladı, 30'larımda öğrendim. Yıllarca bacaklarımdan utandım, spor salonlarına gidemedim. Lipödem olduğumu öğrenmek beni suçluluktan kurtardı.",
    slug: "ergenlikte-basladi",
  },
  {
    isim: "E.D.",
    sehir: "İzmir",
    evre: "Evre 3",
    alinti:
      "Ameliyat kararı vermek en zor adımdı. Ama doğru uzmanı bulduktan sonra her şey değişti. Şimdi yürüyüşe çıkabiliyorum, bacaklarım ağrımıyor.",
    slug: "ameliyat-karari",
  },
  {
    isim: "S.T.",
    sehir: "Antalya",
    evre: "Evre 2",
    alinti:
      "Beslenme değişikliği hayatımı değiştirdi. Anti-inflamatuar beslenmeye geçtikten sonra ağrılarım azaldı, enerjim arttı. Lipödem bitmedi ama artık yönetebiliyorum.",
    slug: "beslenme-degisikligi",
  },
  {
    isim: "M.B.",
    sehir: "Bursa",
    evre: "Evre 1",
    alinti:
      "İlk defa bu platformda anlaşıldığımı hissettim. Yıllardır 'kilo ver' diyen doktorlardan farklı olarak burada gerçekten dinlendim ve yönlendirildim.",
    slug: "ilk-defa-anlasilmak",
  },
];

export default function HikayelerPage() {
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
              <li className="text-stone-800 font-medium">Hasta Hikayeleri</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Hasta Hikayeleri
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700 max-w-3xl">
            Lipödemle yaşayan kadınların gerçek deneyimleri. Tanı süreci, tedavi
            yolculuğu ve günlük yaşamdan samimi paylaşımlar.
          </p>

          <div className="mt-6 bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5">
            <p className="text-stone-700 leading-relaxed font-serif italic">
              Yalnız değilsiniz. Bu kadınlar sizin gibi bir yolculuktan geçti.
              Her hikaye, aynı yolda yürüyen birine cesaret ve umut vermek için
              burada.
            </p>
          </div>
        </div>
      </section>

      {/* HİKAYE KARTLARI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hikayeler.map((hikaye, index) => (
              <ScrollReveal key={hikaye.slug} delay={index * 100}>
                <Link
                  href={`/hikayeler/${hikaye.slug}`}
                  className="group block bg-white rounded-xl border border-stone-200 p-6 card-hover h-full"
                >
                  {/* Alıntı */}
                  <div className="relative mb-5">
                    <Quote className="w-6 h-6 text-[#93D4BE] absolute -top-1 -left-1" />
                    <p className="text-stone-700 leading-relaxed font-serif italic pl-6 text-sm">
                      &ldquo;{hikaye.alinti}&rdquo;
                    </p>
                  </div>

                  {/* Anonim bilgiler */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 rounded-full bg-[#E8F5F0] flex items-center justify-center">
                        <span className="text-sm font-bold text-[#1A6B5A]">
                          {hikaye.isim.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-stone-800">
                          {hikaye.isim}
                        </p>
                        <p className="flex items-center gap-1 text-xs text-stone-500">
                          <MapPin className="w-3 h-3" />
                          {hikaye.sehir}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${evreBadgeRenk[hikaye.evre] || "bg-stone-100 text-stone-700 border-stone-200"}`}
                    >
                      {hikaye.evre}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A6B5A] group-hover:text-[#15594A] transition-colors">
                      Hikayeyi Oku
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMPATİ + CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 font-serif">
            Sizin de hikayeniz var
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Lipödem yolculuğunuz nerede olursa olsun, yalnız değilsiniz.
            İlk adımınızı atarak kendi durumunuzu değerlendirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center justify-center gap-2 bg-[#1A6B5A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#15594A] transition-colors shadow-lg shadow-[#1A6B5A]/20"
            >
              Semptom Testini Başlat
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1A6B5A] border-2 border-[#93D4BE] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E8F5F0] transition-colors"
            >
              Hikayenizi Paylaşın
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
