import type { Metadata } from "next";
import Link from "next/link";
import { LipodemYasamKalitesiWizard } from "@/components/tools/lipodem-yasam-kalitesi/lipodem-yasam-kalitesi-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/lipodem-yasam-kalitesi";

export const metadata: Metadata = {
  title: "Lipödem Yaşam Kalitesi Testi — Ücretsiz Online Değerlendirme | Lipödem Türkiye",
  description:
    "Lipödemin günlük yaşamınıza etkisini 14 soruyla ölçün. LYMPH-ICF-LL ve EQ-5D-3L uyarlanmış, bilimsel ölçek temelli ücretsiz yaşam kalitesi testi.",
  openGraph: {
    title: "Lipödem Yaşam Kalitesi Testi — Lipödem Türkiye",
    description:
      "Mobilite, ağrı, uyku, beden algısı ve sosyal katılım üzerinden lipödemin yaşamınıza etkisini ölçün. 14 soru, 3 dakika.",
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
  name: "Lipödem Yaşam Kalitesi Testi",
  description:
    "Lipödemin günlük yaşam üzerindeki etkisini değerlendiren 14 soruluk klinik tarama. LYMPH-ICF-LL ve EQ-5D-3L uyarlamasına dayanır.",
  urlPath: PATH,
  numberOfQuestions: 14,
  scaleReference: {
    name: "LYMPH-ICF-LL + EQ-5D-3L Uyarlaması",
    citation:
      "Devoogdt N. et al. Lymph-ICF-LL, Phys Ther 2014; EuroQol Group EQ-5D-3L 2009",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Lipödem Yaşam Kalitesi Testi", url: PATH },
]);

const faqs = [
  {
    question: "Yaşam Kalitesi Testi tanı koyar mı?",
    answer:
      "Hayır. Bu test, lipödemin günlük yaşamınıza etkisini bilimsel ölçekler üzerinden değerlendirir; tanı koymaz. Tanı, lipödem konusunda deneyimli bir uzmanın klinik muayenesiyle konur.",
  },
  {
    question: "Bu test hangi bilimsel ölçeklere dayanır?",
    answer:
      "Test, lenfödem ve alt ekstremite ödemlerinde uluslararası kullanılan LYMPH-ICF-LL (Lymphoedema Functioning, Disability and Health Questionnaire for Lower Limb) ölçeği ile EuroQol EQ-5D-3L genel yaşam kalitesi anketinin uyarlanmış 14 soruluk Türkçe versiyonudur.",
  },
  {
    question: "Hangi alanlar değerlendiriliyor?",
    answer:
      "Hareket (yürüme, merdiven, ayakta durma), günlük aktiviteler, beden algısı, ağrı etkisi, uyku, sosyal katılım ve duygusal alan olmak üzere yedi domende soru bulunur. Her alanın sonuç ekranında ayrı yüzdesi gösterilir.",
  },
  {
    question: "Yüksek puan ne anlama gelir?",
    answer:
      "Bu testte yüksek puan = düşük yaşam kalitesi olarak yorumlanır. Lipödemin günlük yaşamınızı ne kadar etkilediğini gösterir. 0-25 puan iyi, 26-45 orta, 46-70 düşük yaşam kalitesi bandını temsil eder.",
  },
  {
    question: "Sonuç ekranında 'şiddetli mobilite etkisi' uyarısı çıkarsa ne yapmalıyım?",
    answer:
      "Hareketle ilgili sorulara yüksek puan verdiyseniz, egzersiz tolerans testimizi tamamlayarak güvenli aktivite aralığınızı belirlemenizi öneririz. Aynı zamanda fizyoterapist görüşmesi tabloyu hızlı toparlayabilir.",
  },
  {
    question: "Testi ne sıklıkta tekrarlayabilirim?",
    answer:
      "Yaşam kalitesi tedavi, sezon, hormonal değişimler ve psikolojik durumla beraber dalgalanır. 3-6 ay aralıklarla tekrarlayarak ilerlemenizi izlemeniz, tedavinin etkinliğini doktorunuzla değerlendirmek için faydalıdır.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function LipodemYasamKalitesiPage() {
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
            <span className="text-stone-700">Lipödem Yaşam Kalitesi</span>
          </nav>

          <LipodemYasamKalitesiWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu test nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Lipödem Yaşam Kalitesi Testi, LYMPH-ICF-LL (alt ekstremite lenfödem işlev
            anketi) ve EuroQol EQ-5D-3L genel yaşam kalitesi ölçeğinin uyarlanmış 14
            soruluk Türkçe versiyonudur. Mobilite, ağrı, uyku, beden algısı, sosyal
            katılım ve duygusal alanlardaki etkiyi ölçer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">7 alan</p>
              <p className="text-sm text-stone-500">
                Mobilite, günlük yaşam, ağrı, beden algısı, uyku, sosyal, duygusal
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Domain skorları</p>
              <p className="text-sm text-stone-500">
                Hangi alanın daha çok etkilendiğini ayrı ayrı görürsünüz
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Takip dostu</p>
              <p className="text-sm text-stone-500">
                3-6 ay aralıkla tekrarlayıp tedavi ilerlemenizi izleyebilirsiniz
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
          <p className="text-stone-500 text-center mb-8">
            Lipödem Yaşam Kalitesi Testi hakkında
          </p>
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
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı aracı değildir ve tıbbi
            tavsiye yerine geçmez. Yaşam kalitesi değerlendirmesi, tedavi planınızın
            önemli bir parçası olmakla birlikte tanı ve tedavi kararları mutlaka bir
            sağlık profesyoneli tarafından verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
