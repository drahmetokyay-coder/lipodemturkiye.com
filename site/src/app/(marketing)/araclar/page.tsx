import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Activity, MapPin, Utensils, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "İnteraktif Araçlar | Lipödem Türkiye",
  description:
    "Lipödem semptom testi, evre değerlendirme, klinik bulucu, beslenme planlayıcı ve maliyet hesaplayıcı. Ücretsiz, bilimsel temelli araçlar.",
  alternates: {
    canonical: "https://lipodemturkiye.com/araclar",
  },
};

const tools = [
  {
    name: "Semptom Testi",
    description:
      "12 bilimsel kritere dayalı lipödem risk değerlendirmesi. 2 dakikada tamamlayın, sonucunuzu doktorunuza götürün.",
    href: "/araclar/semptom-testi",
    icon: ClipboardCheck,
    color: "bg-teal-100 text-teal-700",
    badge: "Ücretsiz",
    available: true,
  },
  {
    name: "Evre Değerlendirme",
    description:
      "Lipödem evrenizi görsel ve klinik kriterlerle değerlendirin. Evrenize özel tedavi önerileri alın.",
    href: "/araclar/evre-degerlendirme",
    icon: Activity,
    color: "bg-purple-100 text-purple-700",
    badge: "Yakında",
    available: false,
  },
  {
    name: "Klinik Bulucu",
    description:
      "81 ilde lipödem tedavisi yapan klinikler ve doktorlar. Şehrinize göre filtreleyip karşılaştırın.",
    href: "/klinikler",
    icon: MapPin,
    color: "bg-emerald-100 text-emerald-700",
    badge: "Yakında",
    available: false,
  },
  {
    name: "Beslenme Planlayıcı",
    description:
      "Evrenize ve tercihlerinize özel anti-inflamatuar beslenme planı. Türk mutfağına uyarlanmış tarifler.",
    href: "/araclar/beslenme-planlayici",
    icon: Utensils,
    color: "bg-amber-100 text-amber-700",
    badge: "Premium",
    available: false,
  },
  {
    name: "Tedavi Maliyet Hesaplayıcı",
    description:
      "Konservatif ve cerrahi tedavi maliyetlerini karşılaştırın. İl bazlı fiyat bilgisi ve SGK rehberi.",
    href: "/araclar/maliyet-hesaplayici",
    icon: Calculator,
    color: "bg-rose-100 text-rose-700",
    badge: "Yakında",
    available: false,
  },
];

export default function AraclarPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <nav className="text-sm text-stone-500 mb-4">
              <a href="/" className="hover:text-teal-600">
                Ana Sayfa
              </a>
              <span className="mx-2">/</span>
              <span className="text-stone-700">Araçlar</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
              İnteraktif Araçlar
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Bilimsel kriterlere dayalı, ücretsiz araçlarımızla lipödem
              yolculuğunuzda size yardımcı olalım.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              const Wrapper = tool.available ? Link : "div";

              return (
                <Wrapper
                  key={tool.name}
                  href={tool.available ? tool.href : "#"}
                  className={`
                    relative bg-white rounded-2xl border border-stone-200 p-6 transition-all
                    ${tool.available ? "hover:border-teal-300 hover:shadow-md cursor-pointer" : "opacity-75"}
                  `}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        tool.badge === "Ücretsiz"
                          ? "bg-green-100 text-green-700"
                          : tool.badge === "Premium"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-stone-100 text-stone-500"
                      }`}
                    >
                      {tool.badge}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-stone-800 mb-2">
                    {tool.name}
                  </h2>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {tool.description}
                  </p>

                  {tool.available && (
                    <p className="mt-4 text-teal-600 font-semibold text-sm">
                      Başla &rarr;
                    </p>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
