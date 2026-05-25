import type { Metadata } from "next";
import { SymptomWizard } from "@/components/tools/symptom-test/symptom-wizard";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Lipödem Semptom Testi — 2 Dakikada Ücretsiz Değerlendirme | Lipödem Türkiye",
  description:
    "Lipödem semptom testi ile belirtilerinizi 12 bilimsel kritere göre değerlendirin. Ücretsiz, 2 dakika. Sonucunuzu yazdırıp doktorunuza götürün.",
  openGraph: {
    title: "Lipödem Semptom Testi — Ücretsiz Online Değerlendirme",
    description:
      "12 bilimsel kritere dayalı lipödem risk değerlendirmesi. 2 dakikada tamamlayın, sonucunuzu doktorunuza götürün.",
    url: "https://lipodemturkiye.com/araclar/semptom-testi",
  },
  alternates: {
    canonical: "https://lipodemturkiye.com/araclar/semptom-testi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Lipödem Semptom Testi",
  url: "https://lipodemturkiye.com/araclar/semptom-testi",
  description:
    "12 bilimsel kritere dayalı lipödem risk değerlendirmesi. 2025 Delphi Konsensüsü ve 2024 Alman S2k Kılavuzu kriterlerine dayanır.",
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

export default function SemptomTestiPage() {
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
              <span className="text-stone-700">Semptom Testi</span>
            </nav>
          </div>

          <SymptomWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu test nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Lipödem Semptom Testi, 2025 Lipedema World Alliance Delphi Konsensüsü
            (19 ülkeden 71 uzman) ve 2024 Alman S2k Kılavuzu kriterlerine
            dayanmaktadır. 12 soruyla belirtilerinizi değerlendirir ve risk
            seviyenizi belirler.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Bilimsel temelli</p>
              <p className="text-sm text-stone-500">
                Uluslararası uzman konsensüsüne dayalı 12 kriter
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Tamamen ücretsiz</p>
              <p className="text-sm text-stone-500">
                Kayıt veya ödeme gerekmez, sonucunuz anında görünür
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Doktorunuza götürün</p>
              <p className="text-sm text-stone-500">
                Sonuçlarınızı yazdırıp uzmanınıza gösterebilirsiniz
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-amber-800">
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı aracı değildir ve
            tıbbi tavsiye yerine geçmez. Tanı ve tedavi kararları mutlaka bir
            sağlık profesyoneli tarafından verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
