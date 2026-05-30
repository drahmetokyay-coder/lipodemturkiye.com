import type { Metadata } from "next";
import Link from "next/link";
import { VasWizard } from "@/components/tools/agri-vas-skoru/agri-vas-skoru-wizard";
import { JsonLd } from "@/components/seo/json-ld";
import { generateQuizSchema } from "@/lib/schema/quiz";
import { generateBreadcrumb } from "@/lib/schema/breadcrumb";
import { generateFaqSchema } from "@/lib/schema/faq";
import { SITE_URL } from "@/lib/schema/organization";

const PATH = "/araclar/agri-vas-skoru";

export const metadata: Metadata = {
  title: "Ağrı VAS Skoru — Lipödem Ağrı Şiddet Testi | Lipödem Türkiye",
  description:
    "Lipödem ağrınızı VAS ve Brief Pain Inventory ile ölçün. 6 soruda şiddet ve günlük yaşam etkisini değerlendirin.",
  openGraph: {
    title: "Ağrı VAS Skoru — Lipödem Ağrı Şiddet Testi",
    description:
      "Visual Analog Scale (VAS) ve BPI-SF temelli 6 soruluk lipödem ağrı şiddet testi. Sonucunuzu uzmanınıza götürün.",
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
  name: "Ağrı VAS Skoru — Lipödem Ağrı Şiddet Testi",
  description:
    "Visual Analog Scale (VAS 0-10) ve Brief Pain Inventory kısa formuna dayalı 6 soruluk online ağrı şiddet değerlendirmesi.",
  urlPath: PATH,
  numberOfQuestions: 6,
  scaleReference: {
    name: "VAS 0-10 + Brief Pain Inventory Short Form",
    citation:
      "Hawker GA, Mian S, Kendzerska T, French M. Arthritis Care Res 2011; Cleeland CS, Ryan KM. 1994",
  },
  about: { name: "Lipödem", code: "E88.2" },
});

const breadcrumbSchema = generateBreadcrumb([
  { name: "Ana Sayfa", url: "/" },
  { name: "Araçlar", url: "/araclar" },
  { name: "Ağrı VAS Skoru", url: PATH },
]);

const faqs = [
  {
    question: "VAS skoru nedir?",
    answer:
      "Visual Analog Scale (Görsel Analog Skala), ağrının şiddetini 0 (hiç ağrı yok) ile 10 (hayal edilebilecek en şiddetli ağrı) arasında ölçen, klinikte yaygın kullanılan valide bir ağrı değerlendirme aracıdır. Lipödem hastalarında ağrı yönetiminin takibi için altın standartlardan biridir.",
  },
  {
    question: "Lipödem ağrısı neden olur?",
    answer:
      "Lipödemde ağrı; anormal yağ dokusundaki kronik inflamasyon (TNF-alfa, IL-6 yükseklikleri), küçük damar bozukluğu (mikroanjiyopati), sinir uçlarına basınç ve dokudaki sıvı birikiminin lenfatik sistem üzerine yüklediği yükten kaynaklanır. 2024 Alman S2k Kılavuzu ağrıyı lipödemin temel klinik bulgusu olarak tanımlar.",
  },
  {
    question: "Tek taraflı ağrı lipödem belirtisi midir?",
    answer:
      "Klasik lipödem her zaman iki taraflı simetriktir. Tek taraflı ağrı genellikle venöz hastalık, lenfödem, kas-iskelet sorunları veya yaralanma kaynaklıdır. Test, tek taraflı ağrı bildirimini ayrı bir uyarı işareti (flag) olarak işaretler ve uzman değerlendirmesini önerir.",
  },
  {
    question: "Test sonucum şiddetli ağrı çıkarsa ne yapmalıyım?",
    answer:
      "Şiddetli ağrı bandı (40-60 puan), aktif çok modaliteli tedavi gerektirir. Lipödem deneyimli bir uzmana başvurun; kompresyon tedavisi, manuel lenf drenajı (MLD), düşük etkili egzersiz programı ve gerektiğinde tümesans liposuction değerlendirmesi planlanmalıdır. Yaşam Kalitesi testimizle ağrının günlük etkisini ölçmek de yararlıdır.",
  },
  {
    question: "Testi ne sıklıkta tekrarlamalıyım?",
    answer:
      "Ağrı dinamik bir göstergedir. Lipödem hastaları için tedavi takibinde ayda bir tekrar ölçüm önerilir. Tedaviniz değiştiyse (örn. yeni kompresyon, ameliyat sonrası), 2-4 haftada bir ölçerek değişimi izleyebilirsiniz. Son sonucunuz tarayıcınızda saklanır.",
  },
  {
    question: "Sonuçlar nereye gidiyor?",
    answer:
      "Cevaplarınız sadece tarayıcınızda işlenir; sunucumuza gönderilmez. PDF olarak indirmek isterseniz e-postanızı girersiniz; bu durumda yalnızca açık rıza kutucuğunu onayladığınızda gizlilik politikamız çerçevesinde saklanır. Tarayıcıdan yazdırma seçeneğinde hiçbir veri paylaşılmaz.",
  },
];

const faqSchema = generateFaqSchema(faqs);

export default function AgriVasSkoruPage() {
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
            <span className="text-stone-700">Ağrı VAS Skoru</span>
          </nav>

          <VasWizard />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Bu test nasıl çalışır?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-8">
            Ağrı VAS Skoru, Visual Analog Scale (VAS 0-10) ve Brief Pain Inventory
            kısa formunun lipödem hastaları için uyarlanmış 6 soruluk yapısıdır.
            Her soruyu 0-10 arası bir VAS değeriyle puanlar; toplam 0-60 aralığında
            ağrı yükünü hesaplar. Sonuç hafif, orta veya şiddetli ağrı bandında
            değerlendirilir; ağrının uyku, ruh hali ve günlük yaşam üzerindeki
            etkisi de göz önüne alınır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">VAS + BPI-SF</p>
              <p className="text-sm text-stone-500">
                Klinikte standart kabul edilen ağrı ölçüm araçları
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Etki ölçümü</p>
              <p className="text-sm text-stone-500">
                Şiddet + uyku + ruh hali + günlük aktivite etkisi
              </p>
            </div>
            <div className="p-5 bg-stone-50 rounded-xl">
              <p className="font-semibold text-stone-800 mb-1">Düzenli takip</p>
              <p className="text-sm text-stone-500">
                Tedavi yanıtınızı ayda bir karşılaştırmalı izleyin
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
            Ağrı VAS Skoru hakkında
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
            <strong>Tıbbi Uyarı:</strong> Bu test bir tanı aracı değildir ve tıbbi
            tavsiye yerine geçmez. Tanı ve tedavi kararları mutlaka bir sağlık
            profesyoneli tarafından verilmelidir.
          </p>
        </div>
      </section>
    </>
  );
}
