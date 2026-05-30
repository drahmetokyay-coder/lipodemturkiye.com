import type { Metadata } from "next";
import Link from "next/link";
import { DifferentialWizard } from "@/components/tools/lipodem-lenfodem-ayirici-tani/lipodem-lenfodem-ayirici-tani-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/lipodem-lenfodem-ayirici-tani";

export const metadata: Metadata = {
  title: "Lipödem mi Lenfödem mi? Ayırıcı Tanı Testi | Lipödem Türkiye",
  description:
    "Bacaklarınızdaki şişlik lipödem mi yoksa lenfödem mi? Földi kriterleri ve Stemmer işaretiyle 10 soruda yön belirleyin.",
  openGraph: {
    title: "Lipödem mi, Lenfödem mi? Ayırıcı Tanı Testi",
    description:
      "Földi differential dx + Stemmer işaretine dayalı 10 soruluk online ayırıcı tanı testi. Sonucunuzu doktorunuza götürün.",
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
  name: "Lipödem mi, Lenfödem mi? Ayırıcı Tanı Testi",
  description:
    "Földi ayırıcı tanı kriterleri ve Stemmer işaretine dayalı 10 soruluk online ayırıcı tanı değerlendirmesi.",
  urlPath: PATH,
  numberOfQuestions: 10,
  scaleReference: {
    name: "Földi Differential Diagnosis + Stemmer Sign",
    citation:
      "Földi M, Földi E. Földi's Textbook of Lymphology, 3rd ed. (2012); Cornely M. 2019",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Lipödem mi Lenfödem mi?", url: PATH },
]);

const faqs = [
  {
    question: "Lipödem ile lenfödem arasındaki temel fark nedir?",
    answer:
      "Lipödem iki taraflı simetrik, ayakları korur, dokunmayla ağrılıdır ve Stemmer işareti negatiftir. Lenfödem genellikle tek taraflı başlar, ayakları tutar, pitting (gode) ödem yapar ve Stemmer işareti pozitiftir. Bu test bu iki tabloyu Földi kriterleriyle ayırt etmenize yardımcı olur.",
  },
  {
    question: "Stemmer işareti nasıl yapılır?",
    answer:
      "İkinci ayak parmağınızın dip bölgesindeki cildi başparmak ve işaret parmağınızla kıvrım hâlinde yukarı doğru kaldırmayı deneyin. Cildi rahatlıkla bir kıvrım hâlinde kaldırabiliyorsanız Stemmer negatiftir (lipödem). Cildi tutup kaldıramıyorsanız Stemmer pozitiftir ve lenfödemi düşündürür.",
  },
  {
    question: "Hem lipödem hem lenfödem olabilir miyim?",
    answer:
      "Evet. Uzun süre tedavi edilmeyen ileri evre lipödemde lenfatik sistem yetersizliği eklenebilir; bu duruma 'lipo-lenfödem' denir. Testte 'karışık tablo' sonucu alırsanız bu olasılık değerlendirilmelidir; Doppler USG veya lenfosintigrafi gibi görüntüleme yöntemleri ayrım için faydalıdır.",
  },
  {
    question: "Test sonucum lenfödem dominantsa ne yapmalıyım?",
    answer:
      "Lenfödem ilerleyici bir hastalıktır. Bir fiziksel tıp ve rehabilitasyon (FTR) uzmanına veya lenfödem polikliniğine başvurun. Erken tanı + kompleks dekonjesyon tedavisi (KDT), manuel lenf drenajı (MLD) ve flat-knit kompresyon prognozu belirleyici şekilde iyileştirir. Cilt bakımı ve selülit profilaksisi de önemlidir.",
  },
  {
    question: "Bu test kesin tanı koyar mı?",
    answer:
      "Hayır. Bu test bir ön yön belirleme aracıdır; kesin tanı klinik muayene, görüntüleme yöntemleri (ultrason, lenfosintigrafi) ve deneyimli bir uzmanın değerlendirmesiyle konur. Sonucunuzu yazdırıp doktorunuza götürmeniz tanı sürecini hızlandırır.",
  },
  {
    question: "Sonuçlarımı yazdırabilir miyim?",
    answer:
      "Evet. Sonuç ekranında 'Tarayıcıdan yazdır' butonuyla anında çıktı alabilir; 'Sonucu PDF indir' ile e-posta vererek profesyonel formatta PDF olarak indirebilirsiniz. Her iki yöntemde de cevaplarınız sunucumuza gönderilmez.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function LipodemLenfodemPage() {
  return (
    <>
      <JsonLd data={quizSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section className="bg-gradient-to-b from-[#EEF1F7] to-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <nav className="text-sm text-stone-500 mb-8 max-w-xl mx-auto">
            <Link href="/" className="hover:text-[#6B7B99]">
              Ana Sayfa
            </Link>
            <span className="mx-2">/</span>
            <Link href="/araclar" className="hover:text-[#6B7B99]">
              Araçlar
            </Link>
            <span className="mx-2">/</span>
            <span className="text-stone-700">Lipödem mi Lenfödem mi?</span>
          </nav>

          <DifferentialWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu test nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Lipödem ve lenfödem ayırıcı tanısı, Földi tarafından tanımlanan klasik
            klinik kriterlere dayanır: simetri, ayak tutulumu, Stemmer işareti,
            pitting ödem, ağrı paterni ve hormonal başlangıç. 10 soruluk
            değerlendirme her cevabı -2 ile +2 arasında puanlar; toplam −20 (saf
            lenfödem) ile +20 (saf lipödem) aralığında konumlandırılır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Földi kriterleri</p>
              <p className="text-sm text-stone-500">
                Klasik klinik ayırıcı tanı şemasına dayalı 10 madde
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Stemmer işareti</p>
              <p className="text-sm text-stone-500">
                Lenfödeme spesifik klinik bulgu için ayrı flag işaretlemesi
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Yön belirleme</p>
              <p className="text-sm text-stone-500">
                Lipödem dominant / karışık / lenfödem dominant üç sonuç bandı
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
            Lipödem / Lenfödem ayırıcı tanı testi hakkında
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden"
              >
                <summary className="cursor-pointer px-5 py-4 font-semibold text-stone-800 flex items-center justify-between hover:bg-stone-50 transition list-none">
                  {faq.question}
                  <span className="text-[#6B7B99] transition-transform group-open:rotate-45 text-xl leading-none">
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
            tavsiye yerine geçmez. Tanı ve tedavi kararları mutlaka bir sağlık
            profesyoneli tarafından verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
