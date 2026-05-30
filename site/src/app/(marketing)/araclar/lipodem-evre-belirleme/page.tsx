import type { Metadata } from "next";
import Link from "next/link";
import { StageWizard } from "@/components/tools/stage-assessment/stage-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/lipodem-evre-belirleme";

export const metadata: Metadata = {
  title: "Lipödem Evre Belirleme — Evrenizi Ücretsiz Değerlendirin | Lipödem Türkiye",
  description:
    "Lipödem evrenizi 9 klinik kritere göre değerlendirin. 3 dakikada ücretsiz, kişiselleştirilmiş tedavi önerisi ve uzman yönlendirmesi.",
  openGraph: {
    title: "Lipödem Evre Belirleme — Ücretsiz Online Araç",
    description:
      "9 klinik kritere dayalı lipödem evre değerlendirmesi. 3 dakikada tamamlayın, evrenize özel öneri alın.",
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
  name: "Lipödem Evre Belirleme",
  description:
    "9 klinik kritere dayalı lipödem evre değerlendirmesi. Schmeller-Meier-Stutz evre sınıflandırması temellidir.",
  urlPath: PATH,
  numberOfQuestions: 9,
  scaleReference: {
    name: "Schmeller-Meier-Stutz Lipödem Evre Sınıflandırması",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Lipödem Evre Belirleme", url: PATH },
]);

const faqs = [
  {
    question: "Lipödemin kaç evresi var?",
    answer:
      "Schmeller-Meier-Stutz sınıflandırmasına göre lipödem 3 evrede değerlendirilir: Evre 1 (cilt yüzeyi düzgün, küçük nodüller), Evre 2 (cilt yüzeyinde düzensizlik, belirgin nodüller), Evre 3 (büyük lobüler kitleler, deformasyon).",
  },
  {
    question: "Evremi bu testle kesin öğrenebilir miyim?",
    answer:
      "Hayır. Bu test bir ön değerlendirme aracıdır. Kesin evre, sadece lipödem konusunda deneyimli bir uzmanın klinik muayenesi ile belirlenebilir. Test sonucu, doktorunuzla görüşmenize hazırlık olarak kullanılır.",
  },
  {
    question: "Evrem zamanla değişir mi?",
    answer:
      "Evet. Lipödem ilerleyen bir hastalıktır. Tedavi edilmediğinde evrelerde ilerleme görülebilir. Doğru kompresyon, MLD ve egzersizle progresyon yavaşlatılabilir. 6 ay aralıkla testi tekrarlayıp takip etmenizi öneririz.",
  },
  {
    question: "Hangi evrede cerrahi düşünülür?",
    answer:
      "Genellikle Evre 2 ve 3'te, konservatif tedavi başarısız olduğunda WAL veya PAL gibi su/güç destekli liposuction değerlendirilir. Cerrahi adaylık değerlendirme testimiz ile uygunluğunuzu ön değerlendirebilirsiniz.",
  },
  {
    question: "Evre belirlemek için fizik muayene şart mı?",
    answer:
      "Klinik tanı için evet — palpasyon, doku yapısı, nodül büyüklüğü ve cilt görünümü uzman tarafından değerlendirilir. Bu testteki sorular, palpasyonla edineceğiniz izlenimleri yapılandırılmış biçimde sorgular.",
  },
  {
    question: "Sonucumu uzmana götürebilir miyim?",
    answer:
      "Evet. Test sonucunu PDF olarak indirip uzmanınıza yapılandırılmış bir özet sunabilirsiniz. Bu, görüşmenizi daha verimli hâle getirir.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function LipodemEvreBelirlemePage() {
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
            <span className="text-stone-700">Lipödem Evre Belirleme</span>
          </nav>

          <StageWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Lipödem evreleri nedir?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Lipödem, Schmeller-Meier-Stutz sınıflandırmasına göre 3 evrede ele alınır. Her evrenin
            kendine özgü belirtileri ve tedavi yaklaşımları vardır. Bu araç 9 klinik kriter
            üzerinden mevcut durumunuzu değerlendirmenize yardımcı olur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <p className="font-semibold text-green-800 mb-1">Evre 1 — Başlangıç</p>
              <p className="text-sm text-green-700">
                Cilt yüzeyi düzgün, cilt altında küçük nodüller. Konservatif tedavi ile iyi yönetim
                sağlanabilir.
              </p>
            </div>
            <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
              <p className="font-semibold text-orange-800 mb-1">Evre 2 — Orta</p>
              <p className="text-sm text-orange-700">
                Cilt yüzeyinde düzensizlikler, belirgin nodüller. Aktif tedavi ve uzman takibi
                gereklidir.
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-200">
              <p className="font-semibold text-red-800 mb-1">Evre 3 — İleri</p>
              <p className="text-sm text-red-700">
                Büyük lobüler kitleler, belirgin deformasyon. Uzman değerlendirmesi ve cerrahi
                seçenekler değerlendirilmelidir.
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
          <p className="text-stone-500 text-center mb-8">Lipödem Evre Belirleme hakkında</p>
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
            <strong>Tıbbi Uyarı:</strong> Bu araç bir tanı aracı değildir ve tıbbi tavsiye yerine
            geçmez. Lipödem evreleri yalnızca klinik muayene ile belirlenebilir. Tanı ve tedavi
            kararları mutlaka lipödem konusunda deneyimli bir sağlık profesyoneli tarafından
            verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
