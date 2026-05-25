import type { Metadata } from "next";
import { StageWizard } from "@/components/tools/stage-assessment/stage-wizard";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Lipödem Evre Değerlendirme — Evrenizi Öğrenin | Lipödem Türkiye",
  description:
    "Lipödem evre değerlendirme aracı ile mevcut durumunuzu 8 klinik kritere göre değerlendirin. Ücretsiz, 2 dakika. Evrenize özel tedavi önerileri alın.",
  openGraph: {
    title: "Lipödem Evre Değerlendirme — Ücretsiz Online Araç",
    description:
      "8 klinik kritere dayalı lipödem evre değerlendirmesi. 2 dakikada tamamlayın, evrenize özel tedavi önerilerini görün.",
    url: "https://lipodemturkiye.com/araclar/evre-degerlendirme",
  },
  alternates: {
    canonical: "https://lipodemturkiye.com/araclar/evre-degerlendirme",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Lipödem Evre Değerlendirme",
  url: "https://lipodemturkiye.com/araclar/evre-degerlendirme",
  description:
    "8 klinik kritere dayalı lipödem evre değerlendirmesi. Cilt görünümü, nodüller, yağ dokusu dağılımı, ağrı, morarma, hareket kısıtlılığı, ödem ve fibrozis durumunu değerlendirir.",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  provider: {
    "@type": "Organization",
    name: "Lipödem Türkiye",
    url: "https://lipodemturkiye.com",
  },
  inLanguage: "tr",
};

export default function EvreDegerlendirmePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="bg-gradient-to-b from-[#E8F5F0] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <nav className="text-sm text-stone-500 mb-4">
              <a href="/" className="hover:text-[#1A6B5A]">
                Ana Sayfa
              </a>
              <span className="mx-2">/</span>
              <a href="/araclar" className="hover:text-[#1A6B5A]">
                Araçlar
              </a>
              <span className="mx-2">/</span>
              <span className="text-stone-700">Evre Değerlendirme</span>
            </nav>
          </div>

          <StageWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Lipödem evreleri nedir?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Lipödem, klinik bulgulara göre 3 evrede sınıflandırılır. Her evrenin
            kendine özgü belirtileri ve tedavi yaklaşımları vardır. Bu araç, 8
            klinik kriter üzerinden mevcut durumunuzu değerlendirmenize yardımcı
            olur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <p className="font-semibold text-green-800 mb-1">Evre 1 — Başlangıç</p>
              <p className="text-sm text-green-700">
                Cilt yüzeyi düzgün, cilt altında küçük nodüller. Konservatif tedavi
                ile iyi yönetim sağlanabilir.
              </p>
            </div>
            <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
              <p className="font-semibold text-orange-800 mb-1">Evre 2 — Orta</p>
              <p className="text-sm text-orange-700">
                Cilt yüzeyinde düzensizlikler, belirgin nodüller. Aktif tedavi ve
                uzman takibi gereklidir.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-200">
              <p className="font-semibold text-red-800 mb-1">Evre 3 — İleri</p>
              <p className="text-sm text-red-700">
                Büyük lobüler kitleler, belirgin deformasyon. Uzman değerlendirmesi
                ve cerrahi seçenekler değerlendirilmelidir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-amber-800">
            <strong>Tıbbi Uyarı:</strong> Bu araç bir tanı aracı değildir ve
            tıbbi tavsiye yerine geçmez. Lipödem evreleri yalnızca klinik muayene
            ile belirlenebilir. Tanı ve tedavi kararları mutlaka lipödem konusunda
            deneyimli bir sağlık profesyoneli tarafından verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
