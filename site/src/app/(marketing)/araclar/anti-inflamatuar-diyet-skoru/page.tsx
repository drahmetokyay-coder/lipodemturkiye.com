import type { Metadata } from "next";
import Link from "next/link";
import { AntiInflamatuarDiyetSkoruWizard } from "@/components/tools/anti-inflamatuar-diyet-skoru/anti-inflamatuar-diyet-skoru-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/anti-inflamatuar-diyet-skoru";

export const metadata: Metadata = {
  title: "Anti-İnflamatuar Diyet Skoru — Akdeniz Uyum Testi | Lipödem Türkiye",
  description:
    "10 soruyla beslenmenizin lipödem dostu Akdeniz / anti-inflamatuar protokole uyumunu ölçün. Diyetisyen önerisi ve kişisel adımlarla 2 dakikada.",
  openGraph: {
    title: "Anti-İnflamatuar Diyet Skoru — Akdeniz Uyum Testi",
    description:
      "Beslenmenizin lipödemde önerilen anti-inflamatuar Akdeniz modeline uyumunu 10 soruda ölçün. MDS + AHEI-2010 temelli.",
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
  name: "Anti-İnflamatuar Diyet Skoru",
  description:
    "Mediterranean Diet Score (MDS) ve AHEI-2010 ölçeklerinden uyarlanmış, lipödem için anti-inflamatuar beslenme uyum testi.",
  urlPath: PATH,
  numberOfQuestions: 10,
  scaleReference: {
    name: "Mediterranean Diet Score (Trichopoulou 2003) + AHEI-2010 (Chiuve 2012)",
    citation: "NEJM 2003;348:2599-608. J Nutr 2012;142:1009-18.",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Anti-İnflamatuar Diyet Skoru", url: PATH },
]);

const faqs = [
  {
    question: "Bu test bir diyet planı sunuyor mu?",
    answer:
      "Hayır. Test, beslenmenizin lipödemde önerilen anti-inflamatuar Akdeniz modeline ne kadar uyumlu olduğunu ölçer ve genel iyileştirme önerileri sunar. Kişiye özel beslenme planı yalnızca bir diyetisyen tarafından, sağlık verilerinizle birlikte hazırlanabilir.",
  },
  {
    question: "Test hangi bilimsel ölçeklere dayanıyor?",
    answer:
      "Mediterranean Diet Score (MDS, Trichopoulou ve ark. 2003) ile Alternate Healthy Eating Index 2010 (AHEI-2010, Chiuve ve ark.) ölçekleri uyarlanmıştır. Ek olarak 2024 Alman S2k Lipödem Kılavuzu'nun Akdeniz diyetine güçlü konsensüs tavsiyesi temel alınmıştır.",
  },
  {
    question: "Düşük uyum bandında kaldım, sağlığım risk altında mı?",
    answer:
      "Düşük uyum, lipödemde inflamasyon belirteçlerini (CRP, IL-6, TNF-alfa) yükselten bir profili işaret eder; bu da ağrı ve ödem hissini artırabilir. İyi haber: 6-8 haftalık küçük değişikliklerle (zeytinyağı, balık, tam tahıl, baklagil) bu profili anlamlı biçimde iyileştirebilirsiniz.",
  },
  {
    question: "Akdeniz diyeti ile ketojenik diyet arasında nasıl seçim yapmalıyım?",
    answer:
      "2024 S2k Kılavuzu her ikisini de tavsiye eder; Akdeniz diyetine güçlü, ketojenik diyete konsensüs düzeyinde. 2025'te yayımlanan 7 aylık Akdeniz-Ketojenik çalışmasında (n=48) lipödem grubunda uyluk çevresinde 6 cm daralma ve inflamasyon belirteçlerinde düşüş raporlandı. Hangisinin size uygun olduğuna karar verirken bir diyetisyene danışın.",
  },
  {
    question: "Sonucumu doktoruma veya diyetisyenime götürebilir miyim?",
    answer:
      "Evet. Test sonunda 'Sonucu PDF indir' veya 'Tarayıcıdan yazdır' seçenekleri ile çıktı alıp randevuya götürebilirsiniz. Diyetisyen, başlangıç noktanızı tek sayfada görerek planı buna göre kurgular.",
  },
  {
    question: "Testi ne sıklıkta tekrar etmeliyim?",
    answer:
      "Beslenme alışkanlıkları yavaş değişir; 3 ayda bir tekrar etmek ilerlemenizi takip etmek için ideal. Son sonucunuz tarayıcınızda saklanır ve giriş ekranında görünür — kıyaslama yapmak kolaydır.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function AntiInflamatuarDiyetSkoruPage() {
  return (
    <>
      <JsonLd data={quizSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-gradient-to-b from-[#FEF3E6] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-8 max-w-xl mx-auto">
            <Link href="/" className="hover:text-[#C46B3D]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/araclar" className="hover:text-[#C46B3D]">
              Araçlar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">Anti-İnflamatuar Diyet Skoru</span>
          </nav>

          <AntiInflamatuarDiyetSkoruWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Bu test nasıl çalışır?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            10 soru üzerinden zeytinyağı, balık, sebze-meyve, tam tahıl, baklagil ve fermente
            gıda tüketiminizi (olumlu kategori); işlenmiş gıda, kırmızı et ve rafine
            karbonhidrat tüketiminizi (olumsuz kategori) puanlarız. Her soru 0-3 puan; toplam
            0-30 üzerinden. Sonucunuz Düşük / Orta / Yüksek uyum olarak sınıflandırılır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Bilimsel temelli</p>
              <p className="text-sm text-stone-500">
                MDS + AHEI-2010 + 2024 S2k Kılavuzu temelli
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">2 dakika sürer</p>
              <p className="text-sm text-stone-500">
                Kayıt gerekmez, sonucunuz tarayıcınızda saklanır
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Eyleme yönelik</p>
              <p className="text-sm text-stone-500">
                Bandınıza özel 6 somut sıradaki adım önerisi
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
            Anti-İnflamatuar Diyet Skoru hakkında
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold text-stone-800 flex items-center justify-between hover:bg-stone-50 transition list-none">
                  {faq.question}
                  <span className="text-[#C46B3D] transition-transform group-open:rotate-45 text-xl leading-none">
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
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı veya kişiselleştirilmiş diyet planı
            değildir. Tıbbi beslenme tedavisi mutlaka bir diyetisyen tarafından planlanmalıdır.
          </p>
        </div>
      </section>
    </>
  );
}
