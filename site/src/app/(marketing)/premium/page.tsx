import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import {
  Check,
  X,
  Shield,
  CreditCard,
  Clock,
  ArrowRight,
} from "lucide-react";
import { PricingSection } from "./pricing-section";

export const metadata: Metadata = {
  title: "Premium Planlar | Lipödem Türkiye",
  description:
    "Kişiselleştirilmiş beslenme planı, egzersiz programı ve uzman desteği ile lipödem yolculuğunuzda yanınızdayız. 14 gün ücretsiz deneyin.",
  openGraph: {
    title: "Premium Planlar | Lipödem Türkiye",
    description:
      "Kişiselleştirilmiş beslenme planı, egzersiz programı ve uzman desteği ile lipödem yolculuğunuzda yanınızdayız.",
    url: "https://lipodemturkiye.com/premium",
  },
};

/* ────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────── */

const comparisonRows = [
  { category: "Bilgi ve İçerik" },
  { feature: "Blog makaleleri (75+)", free: true, basic: true, full: true },
  { feature: "Hasta hikayeleri", free: true, basic: true, full: true },
  { feature: "Premium makaleler", free: false, basic: true, full: true },
  { feature: "Video kütüphanesi", free: false, basic: false, full: true },
  { feature: "Uzman röportajları", free: false, basic: false, full: true },
  { category: "Araçlar" },
  { feature: "Semptom testi (temel)", free: true, basic: true, full: true },
  {
    feature: "Semptom testi (detaylı + PDF)",
    free: false,
    basic: true,
    full: true,
  },
  { feature: "Klinik bulucu (harita)", free: true, basic: true, full: true },
  {
    feature: "Klinik bulucu (detaylı profil)",
    free: false,
    basic: false,
    full: true,
  },
  {
    feature: "Evre değerlendirme (görsel)",
    free: true,
    basic: true,
    full: true,
  },
  {
    feature: "Evre değerlendirme (kişisel)",
    free: false,
    basic: true,
    full: true,
  },
  {
    feature: "İlerleme takip araçları",
    free: false,
    basic: false,
    full: true,
  },
  {
    feature: "Maliyet hesaplayıcı (detaylı)",
    free: false,
    basic: false,
    full: true,
  },
  { category: "Programlar" },
  {
    feature: "Beslenme planı (şablon)",
    free: false,
    basic: "3 şablon",
    full: true,
  },
  {
    feature: "Beslenme planı (kişiselleştirilmiş)",
    free: false,
    basic: false,
    full: true,
  },
  {
    feature: "Egzersiz programı (temel)",
    free: false,
    basic: "4 hafta",
    full: true,
  },
  {
    feature: "Egzersiz programı (video rehberli)",
    free: false,
    basic: false,
    full: "8 hafta",
  },
  {
    feature: "Tedavi yol haritası (genel)",
    free: false,
    basic: true,
    full: true,
  },
  {
    feature: "Tedavi yol haritası (kişisel)",
    free: false,
    basic: false,
    full: true,
  },
  { category: "Topluluk" },
  { feature: "Forum okuma", free: true, basic: true, full: true },
  { feature: "Forum yazma / paylaşım", free: false, basic: true, full: true },
  { feature: "Mentor eşleştirme", free: false, basic: false, full: true },
  { feature: "Özel evre grupları", free: false, basic: false, full: true },
  { category: "Uzman Erişimi" },
  {
    feature: "Aylık uzman Q&A oturumu",
    free: false,
    basic: false,
    full: true,
  },
  { feature: "Aylık webinar", free: false, basic: false, full: true },
  { category: "Destek" },
  { feature: "Haftalık bülten", free: true, basic: true, full: true },
  { feature: "Email desteği (48 saat)", free: false, basic: true, full: true },
  {
    feature: "Öncelikli destek (24 saat)",
    free: false,
    basic: false,
    full: true,
  },
];

const faqItems = [
  {
    q: "Deneme süresi var mı? Kredi kartı gerekir mi?",
    a: "Evet. 14 gün ücretsiz deneme ile Tam Premium'un tüm özelliklerine erişebilirsiniz. Kredi kartı bilgisi gerekmez -- e-posta adresinizle kayıt olmanız yeterlidir.",
  },
  {
    q: "İstediğim zaman iptal edebilir miyim?",
    a: "Evet. Tek tıkla iptal edebilirsiniz. Aylık planlarda dönem sonuna kadar erişiminiz devam eder. Yıllık planlarda ilk 30 gün tam iade garantisi vardır.",
  },
  {
    q: "Taksit yapabilir miyim?",
    a: "Evet. Yıllık planlarda 3, 6 ve 9 taksit seçenekleri mevcuttur. Vade farkı yoktur -- taksit maliyetini biz karşılıyoruz.",
  },
  {
    q: "Premium üyelik doktor yerine geçer mi?",
    a: "Hayır. Lipödem Türkiye bir bilgilendirme ve destek platformudur, tıbbi tavsiye yerine geçmez. Tanı ve tedavi kararları her zaman uzman doktorunuza aittir. Biz sizi doğru doktora yönlendirmeye ve tedavi sürecinizi desteklemeye yardımcı oluruz.",
  },
  {
    q: "Ücretsiz içerikler zaten yeterli değil mi?",
    a: "Ücretsiz içeriklerimiz lipödem hakkında bilgilenmeniz için tasarlandı. Premium, bilgiyi eyleme dönüştürür: kişiselleştirilmiş beslenme planı, egzersiz programı ve uzman erişimi ile. Genel bilgi ile kişiselleştirilmiş program arasındaki fark, bir internet aramasıyla bir uzmandan kişisel plan almak arasındaki fark gibidir.",
  },
  {
    q: "Kişisel bilgilerim güvende mi?",
    a: "Kesinlikle. Tüm verileriniz şifrelenmiş olarak saklanır. Kişisel sağlık bilgileriniz üçüncü taraflarla paylaşılmaz. KVKK uyumlu veri politikamız mevcuttur.",
  },
];

/* ────────────────────────────────────────────
   COMPONENT
   ──────────────────────────────────────────── */

export default function PremiumPage() {
  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={{
          "@type": "WebPage",
          name: "Premium Planlar",
          description:
            "Lipödem Türkiye premium üyelik planları -- kişiselleştirilmiş beslenme, egzersiz ve uzman desteği.",
          url: "https://lipodemturkiye.com/premium",
          isPartOf: {
            "@type": "WebSite",
            name: "Lipödem Türkiye",
            url: "https://lipodemturkiye.com",
          },
        }}
      />

      {/* ──────────────────────────────────────
          HERO
         ────────────────────────────────────── */}
      <section className="bg-white pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1a1a2e] animate-fade-in-up">
            Lip&ouml;dem yolculuğunuzda
            <br className="hidden sm:block" />
            yanınızdayız
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-d1">
            Kişiselleştirilmiş beslenme planı, egzersiz programı ve uzman
            desteği -- bir diyetisyen seansının onda biri fiyatına.
          </p>

          <div className="mt-8 animate-fade-in-up-d2">
            <Link
              href="#planlar"
              className="inline-flex items-center justify-center gap-2 cta-gradient text-white px-8 py-3.5 rounded-lg font-semibold text-base shadow-sm hover:shadow-md transition-all duration-300"
            >
              14 G&uuml;n &Uuml;cretsiz Deneyin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-stone-400 animate-fade-in-up-d3">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              İstediğiniz zaman iptal
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CreditCard className="w-4 h-4" />
              Kredi kartı gerekmez
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              30 g&uuml;n iade garantisi
            </span>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          ANCHORING BAR
         ────────────────────────────────────── */}
      <section className="bg-stone-50 border-y border-stone-100 py-10 md:py-12">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-medium text-stone-500 mb-6">
              Karşılaştırın
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-xl border border-stone-100 p-6 text-center shadow-soft">
                <p className="text-xs text-stone-400 uppercase tracking-wide mb-2">
                  Diyetisyen (1 seans)
                </p>
                <p className="text-2xl font-bold text-stone-700">
                  500 &ndash; 1.000 TL
                </p>
                <p className="mt-2 text-xs text-stone-400">
                  Tek seferlik g&ouml;r&uuml;şme
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white rounded-xl border border-stone-100 p-6 text-center shadow-soft">
                <p className="text-xs text-stone-400 uppercase tracking-wide mb-2">
                  Kompresyon &ccedil;orabı (1 &ccedil;ift)
                </p>
                <p className="text-2xl font-bold text-stone-700">
                  900 &ndash; 3.100 TL
                </p>
                <p className="mt-2 text-xs text-stone-400">
                  6 ayda bir değişim
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="bg-white rounded-xl border border-purple-200 p-6 text-center shadow-soft ring-1 ring-purple-100">
                <p className="text-xs text-purple-600 uppercase tracking-wide font-semibold mb-2">
                  Lip&ouml;dem T&uuml;rkiye Premium
                </p>
                <p className="text-2xl font-bold text-purple-700">
                  79 TL/ay&apos;dan
                </p>
                <p className="mt-2 text-xs text-stone-400">
                  Sınırsız erişim + kişisel program
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────
          PRICING CARDS (client wrapper)
         ────────────────────────────────────── */}
      <PricingSection />

      {/* ──────────────────────────────────────
          FEATURE COMPARISON TABLE
         ────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                Detaylı &ouml;zellik karşılaştırması
              </h2>
              <p className="mt-3 text-stone-400 text-base max-w-lg mx-auto">
                Her planın sunduklarını detaylı inceleyin.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="border-b border-stone-200">
                    <th className="py-4 px-4 text-left text-stone-500 font-medium w-[40%]">
                      &Ouml;zellik
                    </th>
                    <th className="py-4 px-4 text-center text-stone-500 font-medium w-[20%]">
                      &Uuml;cretsiz
                    </th>
                    <th className="py-4 px-4 text-center text-stone-500 font-medium w-[20%]">
                      Adım At
                      <span className="block text-xs font-normal text-stone-400">
                        79 TL/ay
                      </span>
                    </th>
                    <th className="py-4 px-4 text-center font-medium w-[20%] text-purple-700">
                      Yanınızdayız
                      <span className="block text-xs font-normal text-purple-500">
                        149 TL/ay
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => {
                    if ("category" in row) {
                      return (
                        <tr key={`cat-${i}`} className="bg-stone-50">
                          <td
                            colSpan={4}
                            className="py-3 px-4 text-xs font-semibold text-stone-500 uppercase tracking-wider"
                          >
                            {row.category}
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr
                        key={row.feature}
                        className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors"
                      >
                        <td className="py-3 px-4 text-stone-700">
                          {row.feature}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <CellValue value={row.free} />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <CellValue value={row.basic} />
                        </td>
                        <td className="py-3 px-4 text-center bg-purple-50/30">
                          <CellValue value={row.full} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────
          FAQ
         ────────────────────────────────────── */}
      <section className="bg-stone-50 py-16 md:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                Sık sorulan sorular
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <FaqAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────
          TRUST SECTION
         ────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm font-semibold text-stone-800">
                  İstediğiniz zaman iptal
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  Bağlayıcı s&ouml;zleşme yok, tek tıkla iptal
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm font-semibold text-stone-800">
                  30 g&uuml;n iade garantisi
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  Yıllık planlarda memnun kalmazsanız tam iade
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm font-semibold text-stone-800">
                  Kredi kartı gerekmez
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  14 g&uuml;nl&uuml;k deneme i&ccedil;in sadece e-posta yeterli
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────
          FINAL CTA
         ────────────────────────────────────── */}
      <section className="brand-gradient py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Sağlığınız i&ccedil;in ilk adımı atın
            </h2>
            <p className="mt-4 text-purple-100/80 text-base max-w-lg mx-auto">
              14 g&uuml;n &uuml;cretsiz deneyin. Kredi kartı gerekmez, istediğiniz zaman iptal edin.
            </p>
            <div className="mt-8">
              <Link
                href="#planlar"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-purple-700 transition-all duration-300"
              >
                Planları İncele
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────
          MEDICAL DISCLAIMER
         ────────────────────────────────────── */}
      <section className="bg-stone-50 border-t border-stone-100 py-8">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="text-xs text-stone-400 text-center leading-relaxed">
            <strong className="text-stone-500">Tıbbi Sorumluluk Reddi:</strong>{" "}
            Lip&ouml;dem T&uuml;rkiye bir bilgilendirme ve destek platformudur,
            tıbbi tavsiye yerine ge&ccedil;mez. İ&ccedil;eriklerimiz genel
            bilgilendirme ama&ccedil;lıdır ve tanı, tedavi veya tıbbi karar
            yerine kullanılamaz. Sağlık kararlarınızı her zaman uzman
            doktorunuza danışarak verin.{" "}
            <Link
              href="/tibbi-sorumluluk-reddi"
              className="underline hover:text-stone-600 transition-colors"
            >
              Detaylı bilgi
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────
   HELPER COMPONENTS
   ──────────────────────────────────────────── */

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className="w-4 h-4 text-green-600" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <X className="w-4 h-4 text-stone-300" />
      </span>
    );
  }
  return (
    <span className="text-xs font-medium text-purple-600">{value}</span>
  );
}

function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <FaqItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-xl border border-stone-200 bg-white overflow-hidden">
      <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-sm font-medium text-stone-800 hover:bg-stone-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
        {question}
        <span className="ml-4 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="stroke-current"
          >
            <path
              d="M4 6L8 10L12 6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </summary>
      <div className="px-6 pb-4 text-sm text-stone-500 leading-relaxed">
        {answer}
      </div>
    </details>
  );
}
