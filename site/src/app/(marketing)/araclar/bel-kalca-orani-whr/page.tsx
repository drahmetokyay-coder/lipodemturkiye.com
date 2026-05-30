import type { Metadata } from "next";
import Link from "next/link";
import { BelKalcaOraniWhrWizard } from "@/components/tools/bel-kalca-orani-whr/bel-kalca-orani-whr-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/bel-kalca-orani-whr";

export const metadata: Metadata = {
  title: "Bel-Kalça Oranı (WHR) Testi — Lipödem Patern Değerlendirmesi | Lipödem Türkiye",
  description:
    "Bel-kalça oranınızı (WHR) hesaplayın ve üst-alt vücut orantısının lipödem patern bulgularıyla uyumunu 3 soruda görün. Ücretsiz, KVKK uyumlu.",
  openGraph: {
    title: "Bel-Kalça Oranı (WHR) Testi — Lipödem Patern Uyumu",
    description:
      "WHO bel-kalça oranı ve Allen-Hines patern kriterlerine dayalı 3 soruluk hızlı değerlendirme. Tahmini WHR ile patern uyumunuzu görün.",
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
  name: "Bel-Kalça Oranı (WHR) Testi",
  description:
    "Bel ve kalça çevresinden tahmini WHR hesaplayıp lipödemin klasik üst-alt patern bulgularıyla uyumu değerlendiren 3 soruluk tarama.",
  urlPath: PATH,
  numberOfQuestions: 3,
  scaleReference: {
    name: "WHO WHR Cut-off + Allen-Hines Lipödem Patern Kriteri",
    citation:
      "WHO Waist Circumference and Waist-Hip Ratio Report 2008; Allen EV, Hines EA. Lipedema of the legs, Proc Staff Meet Mayo Clin 1940; Herbst KL, Mayo Clin Proc 2020",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Bel-Kalça Oranı (WHR) Testi", url: PATH },
]);

const faqs = [
  {
    question: "Bel-Kalça Oranı (WHR) lipödem tanısı koyar mı?",
    answer:
      "Hayır. WHR antropometrik bir ipucudur, tanı koymaz. Lipödem tanısı yalnızca konusunda deneyimli bir hekimin klinik muayenesiyle konur. Bu test lipödem patern bulgularıyla antropometrik uyumunuzu değerlendirir.",
  },
  {
    question: "WHR nasıl ölçülür?",
    answer:
      "Bel ölçümü göbek deliğinin biraz üstünden (en dar nokta), kalça ölçümü ise kalçanın en geniş noktasından (pubis hizası) mezurayla yapılır. Mezuranız yoksa son bel ölçtüğünüz pantolon bedenini referans alarak en yakın aralığı seçebilirsiniz.",
  },
  {
    question: "Hangi WHR aralığı lipödem paterniyle uyumludur?",
    answer:
      "Lipödemde klasik bulgu düşük WHR (genellikle <0.78) ile birlikte belirgin üst-alt vücut orantısızlığıdır — yani ince bel ve göreceli olarak çok dolgun kalça/bacaklar. WHO kadın referansı 0.85 üzerini risk olarak tanımlar; ancak lipödemde patern farklıdır.",
  },
  {
    question: "WHR'm düşük ama lipödemim olmayabilir mi?",
    answer:
      "Evet. Genç yaşta ve doğal olarak armut tipi vücudu olan kadınlarda da düşük WHR görülebilir; bu durumda orantısızlık yoğun şişme, ağrı veya hassasiyetle birlikte değildir. Bu nedenle WHR sonucu mutlaka Semptom Testi ile birlikte değerlendirilmelidir.",
  },
  {
    question: "WHR'm yüksek ama bacaklarımda lipödem belirtileri var, bu nasıl olabilir?",
    answer:
      "Lipödem ilerledikçe ve eşlik eden obezite, hormonal değişiklikler veya menopozla beraber bel bölgesinde de yağ artışı olabilir; bu WHR'yi yükseltir. WHR tek başına bakılırsa yanıltabilir; klinik muayene, semptom testi ve evre belirleme tabloyu netleştirir.",
  },
  {
    question: "Test sonucumu ne sıklıkla tekrar ölçmeliyim?",
    answer:
      "Kilo değişimleri, hamilelik sonrası dönem veya hormonal değişim dönemlerinde WHR değişebilir. 6 ayda bir veya bedeninizde belirgin değişim olduğunu hissettiğinizde testi tekrarlamanız önerilir.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function BelKalcaOraniWhrPage() {
  return (
    <>
      <JsonLd data={quizSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-gradient-to-b from-[#FAF3E6] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-8 max-w-xl mx-auto">
            <Link href="/" className="hover:text-[#8B6B3D]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/araclar" className="hover:text-[#8B6B3D]">
              Araçlar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">Bel-Kalça Oranı (WHR)</span>
          </nav>

          <BelKalcaOraniWhrWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu test nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Bel-Kalça Oranı (WHR) Testi, WHO antropometri kılavuzu ve Allen-Hines&apos;tan
            günümüze gelen lipödem patern kriterlerine dayanır. Bel ve kalça
            çevrenizden tahmini WHR hesaplar; ardından bedeninizdeki üst-alt orantı
            algınızla birleştirerek lipödem patern uyumunuzu değerlendirir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">3 soru, 1 dakika</p>
              <p className="text-sm text-stone-500">
                Bel çevresi, kalça çevresi ve orantı bildirimi
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Tahmini WHR</p>
              <p className="text-sm text-stone-500">
                Aralık seçtikten sonra WHR hesaplanır ve sonuçta gösterilir
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Patern uyumu</p>
              <p className="text-sm text-stone-500">
                Lipödem üst-alt patern bulgusuyla antropometrik uyum
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
            Bel-Kalça Oranı (WHR) Testi hakkında
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold text-stone-800 flex items-center justify-between hover:bg-stone-50 transition list-none">
                  {faq.question}
                  <span className="text-[#8B6B3D] transition-transform group-open:rotate-45 text-xl leading-none">
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
            tavsiye yerine geçmez. WHR antropometrik bir ipucudur; lipödem tanısı
            yalnızca konusunda deneyimli bir hekimin klinik muayenesiyle konulur.
          </p>
        </div>
      </section>
    </>
  );
}
