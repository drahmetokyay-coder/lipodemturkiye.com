import type { Metadata } from "next";
import Link from "next/link";
import { KompresyonIhtiyacTestiWizard } from "@/components/tools/kompresyon-ihtiyac-testi/kompresyon-ihtiyac-testi-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/kompresyon-ihtiyac-testi";

export const metadata: Metadata = {
  title: "Kompresyon İhtiyaç Testi — Flat-knit mi, Round-knit mi? | Lipödem Türkiye",
  description:
    "7 soruyla lipödemde size standart round-knit mi yoksa düz örgü flat-knit kompresyon mu gerektiğini değerlendirin. Cornely-Schmeller + CEAP temelli.",
  openGraph: {
    title: "Kompresyon İhtiyaç Testi — Flat-knit mi, Round-knit mi?",
    description:
      "Lipödemde kompresyon ihtiyacınızı 90 saniyede değerlendirin. Cornely-Schmeller endikasyon algoritması ve CEAP-C basamağından uyarlanmıştır.",
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
  name: "Kompresyon İhtiyaç Testi",
  description:
    "Cornely-Schmeller endikasyon algoritması ile CEAP-C klinik basamağından uyarlanmış lipödem kompresyon ihtiyaç değerlendirmesi.",
  urlPath: PATH,
  numberOfQuestions: 7,
  scaleReference: {
    name: "Cornely-Schmeller (Phlebologie 2014) + CEAP-C (Eklöf 2004)",
    citation: "Phlebologie 2014;43:255-262. J Vasc Surg 2004;40:1248-52.",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Kompresyon İhtiyaç Testi", url: PATH },
]);

const faqs = [
  {
    question: "Round-knit ile flat-knit arasındaki fark nedir?",
    answer:
      "Round-knit (yuvarlak örgü) standart medikal kompresyondur; ince, esnek ve dikişsizdir. Daha çok venöz yetmezlik ve hafif lipödem (Evre 1) için uygundur. Flat-knit (düz örgü) ise daha kalın, dikişlidir; lipödem dokusunu sıkı tutar, bacak konturuna uyum sağlar ve Evre 2-3'te tercih edilir. 2024 Alman S2k Kılavuzu, ilerlemiş lipödemde flat-knit'i önceler.",
  },
  {
    question: "Bu test bana hangi kompresyon sınıfını (CCL) söyler mi?",
    answer:
      "Hayır. CCL 1-4 sınıfı (15-21, 23-32, 34-46, 49+ mmHg basınç) yalnızca uzman tarafından bacak ölçümleri ve klinik muayene ile belirlenir. Bu test, kompresyona genel ihtiyacınızın seviyesini ve hangi tür ürünün (round-knit vs flat-knit) öncelikli olabileceğini gösterir.",
  },
  {
    question: "Kompresyon çorabı kullanırken neden uyum oranı düşük?",
    answer:
      "Çalışmalar, lipödem hastalarında kompresyon uyumunun yalnızca yaklaşık %38 olduğunu gösteriyor. Başlıca nedenler: cilt hassasiyeti, sıcakta tahammülsüzlük, giyme zorluğu ve estetik kaygılar. İpek/pamuk astar, kademeli alıştırma ve doğru ölçüm bu engelleri büyük ölçüde aşmaya yardımcı olur.",
  },
  {
    question: "Test 'önerilmez' çıktı, kompresyon hiç giymemeli miyim?",
    answer:
      "Tam olarak değil. Düşük bant, günlük kompresyonun şu anda gerekli olmadığı anlamına gelir; ancak uzun uçuş, sıcak hava ve aşırı ayakta kalma günlerinde profilaktik (15-20 mmHg) kompresyon hâlâ faydalı olabilir. Lipödem ilerleyici olduğundan semptomlar değiştiğinde testi tekrarlayın.",
  },
  {
    question: "Kompresyonu egzersiz sırasında da giymeli miyim?",
    answer:
      "Evet — su içi aktiviteler (yüzme, aqua jogging) hariç tüm egzersiz türlerinde kompresyon önerilir. Suyun kendisi doğal bir kompresyon sağlar. Yürüyüş, bisiklet ve direnç çalışmalarında kompresyon kullanmak kas pompasının lenf akışına etkisini artırır.",
  },
  {
    question: "Evre 3 işaretledim, kompresyon yeterli olur mu?",
    answer:
      "Evre 3 lipödemde flat-knit kompresyon yine de tedavinin temel taşıdır, ancak tek başına yeterli olmayabilir. Kombine dekonjesyon tedavisi (KDT: kompresyon + MLD + cilt bakımı + egzersiz) ve gerekirse cerrahi (tümesans liposuction) değerlendirilir. Evre 3 hastaları liposuction sonrası yaşam kalitesinde en belirgin iyileşmeyi yaşıyor.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function KompresyonIhtiyacTestiPage() {
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
            <span className="text-stone-700">Kompresyon İhtiyaç Testi</span>
          </nav>

          <KompresyonIhtiyacTestiWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">Bu test nasıl çalışır?</h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Cornely-Schmeller endikasyon algoritması semptom yükü, günlük aktivite, evre ve
            venöz tablonun bileşkesine bakar. CEAP-C basamağı (C0-C6) ise kronik venöz
            hastalığın klinik şiddetini sınıflandırır. 7 soru toplam 0-21 puan üretir;
            sonucunuz Önerilmez / Round-knit yeterli / Flat-knit gerekli olarak yorumlanır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Klinik temelli</p>
              <p className="text-sm text-stone-500">
                Cornely-Schmeller + CEAP + 2024 S2k temelli
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">90 saniye sürer</p>
              <p className="text-sm text-stone-500">
                7 soru — kayıt veya ödeme gerekmez
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Doğru ürün tipi</p>
              <p className="text-sm text-stone-500">
                Round-knit mi flat-knit mi öncelikli, netleşir
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
            Kompresyon İhtiyaç Testi hakkında
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
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı veya reçete aracı değildir.
            Kompresyon sınıfı ve ürün seçimi yalnızca bireysel ölçüm ile bir sağlık
            profesyoneli tarafından yapılmalıdır.
          </p>
        </div>
      </section>
    </>
  );
}
