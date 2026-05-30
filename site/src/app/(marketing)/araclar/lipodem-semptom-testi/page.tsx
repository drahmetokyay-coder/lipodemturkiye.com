import type { Metadata } from "next";
import Link from "next/link";
import { SymptomWizard } from "@/components/tools/symptom-test/symptom-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/lipodem-semptom-testi";

export const metadata: Metadata = {
  title: "Lipödem Semptom Testi — 2 Dakikada Ücretsiz Değerlendirme | Lipödem Türkiye",
  description:
    "12 bilimsel kritere dayalı lipödem semptom testi. 2 dakikada belirtilerinizi değerlendirin, kişiselleştirilmiş öneri ve uzman yönlendirmesi alın.",
  openGraph: {
    title: "Lipödem Semptom Testi — Ücretsiz Online Değerlendirme",
    description:
      "12 bilimsel kritere dayalı lipödem risk değerlendirmesi. 2 dakikada tamamlayın, sonucunuzu doktorunuza götürün.",
    url: `${SITE_URL}${PATH}`,
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
    languages: {
      "tr-TR": `${SITE_URL}${PATH}`,
      "x-default": `${SITE_URL}${PATH}`,
    },
  },
};

const quizSchema = generateQuizSchema({
  name: "Lipödem Semptom Testi",
  description:
    "12 bilimsel kritere dayalı lipödem risk değerlendirmesi. 2025 Delphi Konsensüsü ve 2024 Alman S2k Kılavuzu temellidir.",
  urlPath: PATH,
  numberOfQuestions: 12,
  scaleReference: {
    name: "Lipedema World Alliance 2025 Delphi Consensus + Almanya S2k Kılavuzu 2024",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Lipödem Semptom Testi", url: PATH },
]);

const faqs = [
  {
    question: "Lipödem Semptom Testi tanı koyar mı?",
    answer:
      "Hayır. Bu test bir tanı aracı değil; lipödem belirtilerinin sizdeki uyumunu bilimsel kriterlere göre değerlendiren bir ön tarama aracıdır. Kesin tanı yalnızca lipödem konusunda deneyimli bir uzman tarafından konulur.",
  },
  {
    question: "Test sonuçları hangi kaynağa dayanıyor?",
    answer:
      "2025 Lipedema World Alliance Delphi Konsensüsü (19 ülkeden 71 uzman) ve 2024 Alman S2k Kılavuzu kriterleri esas alınmıştır. Test, hem semptom listesi hem de Allen-Hines klinik kriterlerine dayalı 12 soru içerir.",
  },
  {
    question: "Sonucumu doktoruma götürebilir miyim?",
    answer:
      "Evet. Test sonunda sonucu PDF olarak indirebilir veya tarayıcıdan yazdırabilirsiniz. Doktorunuza belirtilerinizi yapılandırılmış bir formatta sunmanıza yardımcı olur.",
  },
  {
    question: "Testi kaç defa çözebilirim?",
    answer:
      "Sınırsız. Belirtileriniz zamanla değişebileceği için 3-6 ay aralıkla tekrar değerlendirmenizi öneririz. Son sonucunuz tarayıcınızda saklanır.",
  },
  {
    question: "Tek taraflı şişlik bildirdim, bu ne anlama gelir?",
    answer:
      "Lipödem klasik olarak simetrik (her iki bacakta benzer) görünür. Tek taraflı şişlik daha çok lenfödem veya venöz hastalığı düşündürür. Sonuç ekranında 'Lipödem mi, Lenfödem mi?' ayırıcı tanı testimize yönlendirilirsiniz.",
  },
  {
    question: "Verilerim nereye gidiyor?",
    answer:
      "Test cevaplarınız sadece tarayıcınızda işlenir ve sunucuya gönderilmez. PDF indirme sırasında e-postanızı girerseniz, yalnızca onay kutucuğunu işaretlemeniz durumunda gizlilik politikamız çerçevesinde saklanır.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function LipodemSemptomTestiPage() {
  return (
    <>
      <JsonLd data={quizSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-gradient-to-b from-[#E8F5F0] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-8 max-w-xl mx-auto">
            <Link href="/" className="hover:text-[#1A6B5A]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/araclar" className="hover:text-[#1A6B5A]">
              Araçlar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">Lipödem Semptom Testi</span>
          </nav>

          <SymptomWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Bu test nasıl çalışır?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Lipödem Semptom Testi, 2025 Lipedema World Alliance Delphi Konsensüsü (19 ülkeden 71
            uzman) ve 2024 Alman S2k Kılavuzu kriterlerine dayanmaktadır. 12 soruyla belirtilerinizi
            değerlendirir ve risk seviyenizi belirler.
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
                Sonuçlarınızı PDF olarak indirip uzmanınıza gösterebilirsiniz
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">
            Sıkça sorulan sorular
          </h2>
          <p className="text-stone-500 text-center mb-8">Lipödem Semptom Testi hakkında</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold text-stone-800 flex items-center justify-between hover:bg-stone-50 transition list-none">
                  {faq.question}
                  <span className="text-[#1A6B5A] transition-transform group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-stone-600 leading-relaxed text-[15px]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-amber-800">
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı aracı değildir ve tıbbi tavsiye yerine
            geçmez. Tanı ve tedavi kararları mutlaka bir sağlık profesyoneli tarafından
            verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
