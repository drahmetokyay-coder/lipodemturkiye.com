import type { Metadata } from "next";
import Link from "next/link";
import { CerrahiAdaylikWizard } from "@/components/tools/cerrahi-adaylik-degerlendirmesi/cerrahi-adaylik-degerlendirmesi-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/cerrahi-adaylik-degerlendirmesi";

export const metadata: Metadata = {
  title:
    "Cerrahi Adaylık Değerlendirmesi — Lipödem Liposuction Aday Testi | Lipödem Türkiye",
  description:
    "Cornely, ASA ve Halland kriterleri temelli 11 soruluk lipödem cerrahisi (liposuction) adaylık değerlendirmesi. 3 dakikada ücretsiz değerlendirme.",
  openGraph: {
    title: "Lipödem Cerrahi Adaylık Değerlendirmesi — Liposuction Hazırlığı",
    description:
      "Cornely, ASA fizik durum ve Halland kriterleri temelli 11 soruluk cerrahi adaylık değerlendirmesi.",
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
  name: "Cerrahi Adaylık Değerlendirmesi",
  description:
    "Cornely cerrahi endikasyon, ASA fizik durum sınıflaması ve Halland (Stockholm) kriterleri temelli 11 soruluk lipödem cerrahisi adaylık değerlendirmesi.",
  urlPath: PATH,
  numberOfQuestions: 11,
  scaleReference: {
    name: "Cornely cerrahi endikasyon + ASA fizik durum + Halland (Stockholm) kriterleri",
    citation:
      "Cornely ME, Plast Reconstr Surg 2014; American Society of Anesthesiologists Physical Status Classification System; Almanya S2k Kılavuzu 2024",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Cerrahi Adaylık Değerlendirmesi", url: PATH },
]);

const faqs = [
  {
    question: "Bu test bana cerrahi olabileceğimi söyler mi?",
    answer:
      "Hayır. Bu test bir ön değerlendirmedir ve kesinlikle cerrahi onayı yerine geçmez. Sonuç sizin profilinizin Cornely, ASA ve Halland kriterleri açısından nereye düştüğünü gösterir. Cerrahi karar yalnızca deneyimli bir plastik cerrah tarafından klinik muayene, gerekirse anestezi konsültasyonu ve görüntüleme sonrası verilir.",
  },
  {
    question: "Lipödem cerrahisi (liposuction) ne zaman önerilir?",
    answer:
      "Cerrahi genellikle (a) en az 6-12 ay süreli yeterli konservatif tedaviye (kompresyon, MLD, beslenme/egzersiz) rağmen belirtiler devam ettiğinde, (b) Evre 2 veya 3 lipödemde, (c) belirgin işlevsel kısıtlılık ve yaşam kalitesi kaybı olduğunda ve (d) cerrahi risk profili kabul edilebilir olduğunda düşünülür. Cerrahi 'iyileştirici' değil, semptom hafifletici bir tedavidir.",
  },
  {
    question: "Hangi durumlarda cerrahi yapılamaz?",
    answer:
      "Mutlak kontrendikasyonlar şunlardır: aktif enfeksiyon (sellülit, açık yara), kontrolsüz sistemik hastalıklar (kontrolsüz diyabet, ileri kalp veya akciğer hastalığı), ciddi koagülopati ve kesilemeyen kan sulandırıcı kullanımı. Bu durumlar düzelene veya kontrol altına alınana kadar elektif cerrahi yapılmaz. BMI > 40, aktif sigara kullanımı ve psikolojik hazırlık eksikliği de göreceli kontrendikasyonlardır.",
  },
  {
    question: "Test 'aday değil' çıktıysa cerrahi şansım yok mu?",
    answer:
      "Hayır, bu sonuç kalıcı değildir. 'Aday değil' sonucu çoğu zaman değiştirilebilir faktörler nedeniyle çıkar: yetersiz konservatif tedavi süresi, yüksek BMI, sigara kullanımı veya sistemik hastalık kontrolü eksikliği. Bu faktörler iyileştirildiğinde 6-12 ay sonra cerrahi adaylığınız yeniden değerlendirilebilir. Mutlak kontrendikasyon durumunda bile altta yatan tıbbi sorun çözüldüğünde yeniden değerlendirme mümkündür.",
  },
  {
    question: "Cerrahiden sonra kompresyona devam etmeli miyim?",
    answer:
      "Evet. Liposuction lipödemi 'iyileştirmez', semptom yükünü azaltır. Cerrahi sonrası kompresyon (genelde 4-6 hafta sıkı kompresyon, sonrasında günlük kullanım), manuel lenf drenajı, anti-inflamatuar beslenme ve düzenli egzersiz uzun dönemde sürdürülmelidir. Bu sürdürülebilir bakım olmadan cerrahi kazanımları korunamaz.",
  },
  {
    question: "Test sonucumu cerrahla nasıl paylaşabilirim?",
    answer:
      "Test sonunda sonucu PDF olarak indirebilir veya tarayıcıdan yazdırabilirsiniz. Bu rapor cerrahla randevunuzda klinik geçmişinizi yapılandırılmış bir formatta sunmanıza yardımcı olur. Ayrıca size uygun blog yazıları ve uzman dizinine yönlendirme sunulur. Büyük cerrahi kararından önce ikinci görüş almaktan çekinmeyin.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function CerrahiAdaylikPage() {
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
            <span className="text-stone-700">Cerrahi Adaylık Değerlendirmesi</span>
          </nav>

          <CerrahiAdaylikWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu değerlendirme nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Cerrahi Adaylık Değerlendirmesi, Cornely cerrahi endikasyon
            kriterleri, ASA fizik durum sınıflaması ve Halland (Stockholm)
            kriterlerini birleştiren 11 soruluk bir ön tarama aracıdır. Evre,
            konservatif tedavi süresi, BMI, sistemik hastalıklar, sigara,
            mobilite etkisi, anestezi öyküsü, yaş, beklenti, sosyal destek ve
            ilaç kullanımı alanlarını değerlendirir.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">
                Klinik kriterli
              </p>
              <p className="text-sm text-stone-500">
                Cornely + ASA + Halland (Stockholm)
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">
                Güvenlik öncelikli
              </p>
              <p className="text-sm text-stone-500">
                Mutlak kontrendikasyonları net şekilde gösterir
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">
                Cerrahla paylaşıma uygun
              </p>
              <p className="text-sm text-stone-500">
                Sonucu PDF olarak indirip konsültasyona götürebilirsiniz
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
            Cerrahi Adaylık Değerlendirmesi hakkında
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
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı, cerrahi onay veya
            cerrahi karar aracı değildir. Cerrahi karar yalnızca deneyimli bir
            plastik cerrah tarafından klinik muayene, anestezi konsültasyonu ve
            gerekli tetkikler sonrası verilir.
          </p>
        </div>
      </section>
    </>
  );
}
