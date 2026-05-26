import Link from "next/link"
import { HeroBackgroundVideo } from "@/components/marketing/hero-video"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import { ValueCards } from "@/components/marketing/value-cards"
import { ExpertDirectory } from "@/components/marketing/expert-directory"
import { ExpertTips } from "@/components/marketing/expert-tips"
import { B2BCta } from "@/components/marketing/b2b-cta"
import { TurkeyMap } from "@/components/marketing/turkey-map"
import { NewsletterForm } from "@/components/marketing/newsletter-form"
import { SymptomsSlider } from "@/components/marketing/symptoms-slider"
import { PubmedShowcase } from "@/components/marketing/pubmed-showcase"
import { TestHub } from "@/components/marketing/test-hub"
import {
  ArrowRight,
  ClipboardCheck,
  Sparkles,
  Star,
  CheckCircle,
  Search,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. HERO — Split layout, çift CTA
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[92vh] overflow-hidden bg-white">
        <HeroBackgroundVideo />

        <div className="absolute inset-y-0 left-0 w-full lg:w-[70%] bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 w-full h-full flex items-center py-20 md:py-28 lg:py-0 lg:min-h-[92vh]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F5F0] border border-[#1A6B5A]/10 mb-8 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-[#1A6B5A]" />
              <span className="text-[13px] font-medium text-[#1A6B5A]">
                T&uuml;rkiye&apos;nin Lip&ouml;dem Platformu
              </span>
            </div>

            <h1 className="animate-fade-in-up">
              <span className="block font-display text-[1.65rem] sm:text-3xl font-medium text-[#2D3B36]/70 leading-snug">
                Lip&ouml;dem&apos;de
              </span>
              <span className="block font-display text-[3.2rem] sm:text-6xl md:text-7xl font-bold text-[#1A6B5A] leading-[1.05] -mt-1">
                Doğru Bilgi,
              </span>
              <span className="block font-display text-[3.2rem] sm:text-6xl md:text-7xl font-bold text-[#1A6B5A] leading-[1.05]">
                Doğru Uzman
              </span>
            </h1>

            <p className="mt-6 text-[#6B7B75] text-base sm:text-[17px] leading-relaxed max-w-md animate-fade-in-up-d1">
              Bilimsel bilgi, interaktif ara&ccedil;lar ve T&uuml;rkiye genelinde
              uzman ağıyla lip&ouml;dem yolculuğunuzda yanınızdayız.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up-d2">
              {[
                { val: "370M+", label: "dünyada hasta" },
                { val: "50+", label: "uzman" },
                { val: "4", label: "kategori" },
                { val: "%51", label: "doktor farkındalığı" },
              ].map((s) => (
                <div
                  key={s.val}
                  className="flex items-center gap-2.5 bg-white rounded-xl border border-stone-100 shadow-sm px-4 py-2.5"
                >
                  <span className="font-display text-lg font-bold text-[#1A6B5A]">
                    {s.val}
                  </span>
                  <span className="text-[11px] text-[#6B7B75] font-medium leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 animate-fade-in-up-d3">
              <Link
                href="/araclar/semptom-testi"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#1A6B5A] text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[#15594A] shadow-md shadow-[#1A6B5A]/15 hover:shadow-lg hover:shadow-[#1A6B5A]/20 transition-all duration-300"
              >
                <ClipboardCheck className="w-[18px] h-[18px]" />
                Semptom Testini &Ccedil;&ouml;z
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:opacity-100 transition-all" />
              </Link>
              <Link
                href="/uzmanlar"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-[#1A6B5A] border-2 border-[#1A6B5A]/20 hover:border-[#1A6B5A]/40 hover:bg-[#E8F5F0] transition-all duration-300"
              >
                <Search className="w-[18px] h-[18px]" />
                Uzman Bul
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-50">
          <div className="w-5 h-8 rounded-full border-[1.5px] border-[#6B7B75]/40 flex items-start justify-center p-1.5">
            <div
              className="w-[3px] h-[6px] bg-[#6B7B75]/50 rounded-full"
              style={{ animation: "scroll-bounce 2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. DEĞER KARTLARI — Platform değer önerisi
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ValueCards />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. LİPÖDEM NEDİR — Belirtiler
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">
                LİP&Ouml;DEM NEDİR?
              </span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] leading-tight mt-3">
                Belirtileri, Evreleri ve Tedavi Se&ccedil;enekleri
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="text-[#6B7B75] text-base md:text-[17px] leading-[1.75]">
                Lip&ouml;dem, v&uuml;cudun belirli b&ouml;lgelerinde &mdash;
                &ouml;zellikle bacaklarda &mdash; yağ dokusunun anormal
                biriktiği kronik bir hastalıktır. Diyetle ge&ccedil;mez,
                genetik k&ouml;kenlidir ve neredeyse yalnızca kadınları
                etkiler.
              </p>
            </ScrollReveal>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent my-14" />

          <ScrollReveal>
            <SymptomsSlider />
          </ScrollReveal>

          <div className="mt-20">
            <PubmedShowcase />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. UZMAN DİZİNİ — Kategori tabları + kart grid
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ExpertDirectory />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. İNTERAKTİF TESTLER — 10 lipödem aracı
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <TestHub />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6. TÜRKİYE HARİTASI — Klinik bulucu
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">
                KLİNİK BULUCU
              </span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
                T&uuml;rkiye Genelinde Uzmanlar
              </h2>
              <p className="mt-4 text-[#6B7B75] text-base max-w-xl mx-auto">
                Lip&ouml;dem tedavisi sunan uzman ve klinikleri
                b&ouml;lgenizde ke&#351;fedin.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <TurkeyMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          7. UZMAN İPUÇLARI — Blog linkleri
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ExpertTips />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          8. HASTA DENEYİMLERİ — Testimonials
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">
                DENEYİMLER
              </span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
                Yalnız değilsiniz
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                q: "Yıllardır neden bacaklarımın incelemediğini anlayamıyordum. Bu platform sayesinde doğru tanıya ulaştım.",
                n: "A.G., İstanbul",
                s: "Evre 2",
              },
              {
                q: "Doktorlara gidip hep aynı cevabı alıyordum: 'Daha çok spor yap.' Burada ilk kez gerçekten anlaşıldım.",
                n: "Z.K., Ankara",
                s: "Evre 1",
              },
              {
                q: "Tedavi seçeneklerini bu kadar açık anlatan başka bir kaynak bulamadım. Artık ne yapacağımı biliyorum.",
                n: "E.M., İzmir",
                s: "Evre 3",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.n} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 text-[#E8916D] fill-[#E8916D]"
                      />
                    ))}
                  </div>
                  <p className="text-[#2D3B36] text-sm leading-relaxed flex-1">
                    &ldquo;{t.q}&rdquo;
                  </p>
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <p className="font-semibold text-[#163832] text-sm">
                      {t.n}
                    </p>
                    <p className="text-[#6B7B75] text-xs">{t.s}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={100}>
            <div className="mt-12 max-w-md mx-auto bg-[#E8F5F0] rounded-2xl p-7 text-center border border-[#1A6B5A]/10">
              <div className="w-14 h-14 rounded-full bg-[#1A6B5A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#163832]">
                Test Tamamlandı
              </h3>
              <p className="text-[#6B7B75] text-sm mt-2">
                3.000+ ki&#351;i semptom testini tamamladı.
              </p>
              <Link
                href="/araclar/semptom-testi"
                className="mt-5 inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#15594A] transition-colors"
              >
                Siz de ba&#351;layın <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          9. PROFESYONELLER İÇİN CTA — B2B dönüşüm
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <B2BCta />

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          10. NEWSLETTER — Bülten kaydı
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#1A6B5A] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-[#E8916D]/10 blur-3xl" />

        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Lip&ouml;dem yolculuğunuza bug&uuml;n ba&#351;layın
          </h2>
          <p className="text-white/60 text-base mt-4 max-w-lg mx-auto">
            Haftalık bilimsel bilgiler, pratik ipu&ccedil;ları ve topluluk
            haberleri doğrudan e-postanıza.
          </p>

          <NewsletterForm />
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg px-4 py-3 border-t border-stone-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <Link
          href="/araclar/semptom-testi"
          className="flex items-center justify-center gap-2 w-full bg-[#1A6B5A] text-white py-3 rounded-xl font-semibold text-sm"
        >
          <ClipboardCheck className="w-4 h-4" /> Semptom Testini &Ccedil;&ouml;z
        </Link>
      </div>
      <div className="h-[60px] lg:hidden" />
    </>
  )
}
