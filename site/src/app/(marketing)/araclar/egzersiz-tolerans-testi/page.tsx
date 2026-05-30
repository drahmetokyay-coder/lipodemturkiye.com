import type { Metadata } from "next";
import Link from "next/link";
import { EgzersizToleransWizard } from "@/components/tools/egzersiz-tolerans-testi/egzersiz-tolerans-testi-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/egzersiz-tolerans-testi";

export const metadata: Metadata = {
  title:
    "Egzersiz Tolerans Testi — Lipödemde Aktivite Kapasitesi Değerlendirmesi | Lipödem Türkiye",
  description:
    "Borg RPE 6-20 temelli 8 soruluk lipödem egzersiz tolerans testi. Hareket kapasitenizi ölçün, size uygun aktivite önerilerini ücretsiz alın.",
  openGraph: {
    title: "Egzersiz Tolerans Testi — Lipödem Aktivite Değerlendirmesi",
    description:
      "Borg algılanan eforluluk skalası temelli 8 soruluk test. Lipödem ile uyumlu egzersiz başlangıç önerileri alın.",
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
  name: "Egzersiz Tolerans Testi",
  description:
    "Borg RPE 6-20 skalası ve lipödem-uyarlı aktivite anketine dayalı 8 soruluk değerlendirme.",
  urlPath: PATH,
  numberOfQuestions: 8,
  scaleReference: {
    name: "Borg RPE 6-20 + Lipödem-uyarlı aktivite anketi (Reich-Schupke 2017)",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Egzersiz Tolerans Testi", url: PATH },
]);

const faqs = [
  {
    question: "Bu test egzersiz programı yerine geçer mi?",
    answer:
      "Hayır. Bu test mevcut aktivite toleransınızı ölçer ve genel öneri sunar. Bireysel egzersiz programı bir fizyoterapist veya hekim tarafından klinik muayene ile birlikte oluşturulmalıdır. Test sonucunuzu uzmanınızla paylaşmanız sürecinizi hızlandırır.",
  },
  {
    question: "Borg RPE skalası nedir, neden kullanılıyor?",
    answer:
      "Borg Rating of Perceived Exertion (algılanan eforluluk) skalası, kişinin fiziksel zorlanma hissini 6-20 (veya 0-10) arasında derecelendirdiği klinik olarak valide edilmiş bir araçtır. Kalp atımı veya cihaz gerektirmeden subjektif yoğunluğu güvenilir biçimde ölçer ve lipödem hastalarının kendi hızlarını ayarlamasına yardımcı olur.",
  },
  {
    question: "Lipödemde hangi egzersizler önerilir?",
    answer:
      "Düşük etkili, döngüsel ve mümkünse su içi yapılan aktiviteler önceliklidir: yüzme, aqua-fit, yürüyüş, bisiklet, eliptik, pilates, yoga ve hafif kuvvet antrenmanı. Yüksek darbeli sporlar (koşu, zıplama) ve uzun süreli ayakta kalan aktiviteler genellikle ödem ve ağrıyı artırır. Kompresyon kıyafeti ile egzersiz yapmak şişlik kontrolünde belirgin fark yaratır.",
  },
  {
    question: "Egzersiz sırasında ağrı oluyorsa devam etmeli miyim?",
    answer:
      "Hafif kas yorgunluğu olağandır ancak keskin, batıcı veya ertesi güne sarkan ağrı varsa yoğunluğu düşürün ya da seansı sonlandırın. Borg skalasında 11-13 (biraz yorucu) düzey hedef alınır; 15 üzeri (zor) lipödem için genelde fazla yoğundur. Egzersiz sonrası 24 saatten uzun süren ağrı, yoğunluğun azaltılması gerektiğine işarettir.",
  },
  {
    question: "Su sporlarına erişimim yoksa ne yapabilirim?",
    answer:
      "Evde yapılabilecek alternatifler: yatarak/oturarak bacak hareketleri, pilates topu egzersizleri, esneme rutinleri, evde sabit bisiklet, koltukta kalkma-oturma serileri ve duvar şınavları. Kısa bir parkta düşük hızlı yürüyüş bile düzenli yapıldığında belirgin fayda sağlar. Önemli olan haftada en az 3 gün kısa seanslarla başlamak ve kademeli artırmaktır.",
  },
  {
    question: "Test sonucumu nasıl kullanabilirim?",
    answer:
      "Sonucunuzu PDF olarak indirip fizyoterapist veya hekim randevunuza götürebilirsiniz. Test ayrıca size özel blog yazıları, sıradaki test önerisi ve uygun uzman kategorisine yönlendirme sunar. Tolerans seviyenizi 3 ay sonra tekrar değerlendirip ilerlemenizi takip edebilirsiniz.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function EgzersizToleransTestiPage() {
  return (
    <>
      <JsonLd data={quizSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-gradient-to-b from-[#E6F4EE] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-8 max-w-xl mx-auto">
            <Link href="/" className="hover:text-[#2D8B73]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/araclar" className="hover:text-[#2D8B73]">
              Araçlar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">Egzersiz Tolerans Testi</span>
          </nav>

          <EgzersizToleransWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu test nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Egzersiz Tolerans Testi, Borg RPE 6-20 algılanan eforluluk skalasını
            lipödem hastalarının yaşadığı tipik aktivite örüntülerine uyarlar.
            Yürüyüş, ayakta durma, merdiven, su içi egzersiz, bisiklet, ağrı,
            iyileşme ve mevcut aktivite alanlarında 8 soruyla mevcut kapasitenizi
            ve dirençli bölgeleri ortaya çıkarır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">
                Bilimsel temelli
              </p>
              <p className="text-sm text-stone-500">
                Borg RPE 6-20 + lipödem aktivite anketi
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">
                Hızlı ve anonim
              </p>
              <p className="text-sm text-stone-500">
                2 dakikada tamamlanır, cevaplar tarayıcınızda kalır
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">
                Kişiselleştirilmiş öneri
              </p>
              <p className="text-sm text-stone-500">
                Tolerans seviyenize göre başlangıç önerileri ve uzman
                yönlendirmesi
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
            Egzersiz Tolerans Testi hakkında
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold text-stone-800 flex items-center justify-between hover:bg-stone-50 transition list-none">
                  {faq.question}
                  <span className="text-[#2D8B73] transition-transform group-open:rotate-45 text-xl leading-none">
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
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı aracı değildir ve
            tıbbi tavsiye yerine geçmez. Egzersiz programınızı bir sağlık
            profesyoneli ile birlikte planlayın.
          </p>
        </div>
      </section>
    </>
  );
}
