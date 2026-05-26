import Link from "next/link"
import { HeroBackgroundVideo } from "@/components/marketing/hero-video"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import { TurkeyMap } from "@/components/marketing/turkey-map"
import {
  ArrowRight,
  Activity,
  Heart,
  ClipboardCheck,
  Utensils,
  Dumbbell,
  Brain,
  BookOpen,
  Mail,
  Shield,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  Zap,
  CheckCircle,
  Stethoscope,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────
          SECTION 1 — HERO
         ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center bg-white">
        {/* Background video */}
        <HeroBackgroundVideo />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F5F0] mb-6 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A]" />
                <span className="text-sm font-medium text-[#1A6B5A]">
                  T&uuml;rkiye&apos;nin ilk lip&ouml;dem platformu
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-tight text-[#163832] animate-fade-in-up">
                Lip&ouml;dem&apos;de<br />
                <span className="text-[#1A6B5A]">Yalnız Değilsiniz</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#6B7B75] max-w-lg leading-relaxed animate-fade-in-up-d1">
                Bilimsel kaynaklı bilgi, interaktif ara&ccedil;lar ve size &ouml;zel rehberlerle lip&ouml;dem yolculuğunuzda yanınızdayız.
              </p>

              {/* 4 stat cards — inline, small, white cards with teal numbers */}
              <div className="mt-8 grid grid-cols-4 gap-3 max-w-lg animate-fade-in-up-d2">
                {[
                  { value: "9/11", label: "kadın" },
                  { value: "370M+", label: "etkilenen" },
                  { value: "25+", label: "uzman" },
                  { value: "%51", label: "farkındalık" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl shadow-sm border border-stone-100 px-3 py-3 text-center"
                  >
                    <p className="font-display text-xl md:text-2xl font-bold text-[#1A6B5A] leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[10px] text-[#6B7B75] mt-1.5 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="mt-8 animate-fade-in-up-d3">
                <Link
                  href="/araclar/semptom-testi"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1A6B5A] text-white rounded-lg text-base font-semibold hover:bg-[#15594A] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Hızlı &Ouml;zel Ara&ccedil;larımız
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — empty space for video to show through */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] text-[#6B7B75] tracking-[0.15em]">Ke&#351;fet</span>
          <div className="w-5 h-9 rounded-full border-2 border-[#6B7B75]/30 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-[#6B7B75]/40 rounded-full" style={{ animation: "scroll-bounce 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 2 — EMPATHY BAR
         ────────────────────────────────────────── */}
      <section className="bg-[#E8F5F0] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-[#1A6B5A]/30 mx-auto mb-6" />
          <p className="font-display text-lg md:text-xl lg:text-2xl text-[#163832] italic leading-relaxed">
            &ldquo;Diyet yapıyorsunuz ama bacaklarınız incelmiyor. Spor yapıyorsunuz ama hi&ccedil;bir &#351;ey değ&#351;miyor. S&uuml;rekli yorgunsunuz ve kimse sizi anlamıyor...&rdquo;
          </p>
          <div className="w-12 h-0.5 bg-[#1A6B5A]/30 mx-auto my-6" />
          <p className="text-[#1A6B5A] font-semibold text-base md:text-lg">
            Bu sizin hatanız değil.
          </p>
          <p className="text-[#6B7B75] text-sm mt-2">
            Lip&ouml;dem, diyet ve egzersizle ge&ccedil;meyen genetik k&ouml;kenli bir hastalıktır.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 3 — LİPÖDEM NEDİR?
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Top — heading + description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">LIP&Ouml;DEM NEDİR?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#163832] leading-tight">
                Lip&ouml;dem Nedir? Belirtileri, Evreleri ve Tedavi Se&ccedil;enekleri
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-[#6B7B75] text-base md:text-lg leading-relaxed">
                Lip&ouml;dem, v&uuml;cudun belirli b&ouml;lgelerinde &mdash; &ouml;zellikle bacaklarda ve kollarda &mdash;
                yağ dokusunun anormal biriktiği kronik bir hastalıktır. Diyet ve egzersizle ge&ccedil;mez.
                Genetik k&ouml;kenlidir ve neredeyse sadece kadınları etkiler. Doğru bilgiyle y&ouml;netilebilir,
                erken tanı &ccedil;ok &ouml;nemlidir.
              </p>
            </ScrollReveal>
          </div>

          {/* Gradient line separator */}
          <div className="line-gradient my-12 md:my-16" />

          {/* Lipödem Belirtileri — numbered list, each in white card */}
          <ScrollReveal>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#163832] mb-8">
              Lip&ouml;dem Belirtileri
            </h3>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                num: "1",
                title: "Orantısız yağ birikimi",
                desc: "Bacak ve kal&ccedil;alarda belirgin, &uuml;st bedene oranla &ccedil;ok fazla yağ birikimi. Ayak bilekleri etkilenmez.",
              },
              {
                num: "2",
                title: "Diyete diren&ccedil;li yapı",
                desc: "Sıkı diyet ve egzersize rağmen etkilenen b&ouml;lgelerdeki yağ erimez. &Uuml;st beden zayıflarken alt beden aynı kalır.",
              },
              {
                num: "3",
                title: "Ağrı ve hassasiyet",
                desc: "Etkilenen b&ouml;lgelerde basın&ccedil; ağrısı, dokunma hassasiyeti ve yorgunluk hissi. G&uuml;n sonunda bacaklarda ağırlık.",
              },
              {
                num: "4",
                title: "Kolay morarma",
                desc: "Hafif temasla bile morluklar olu&#351;ur. Bu, doku altındaki damarsal kırılganlığın bir i&#351;aretidir.",
              },
              {
                num: "5",
                title: "Simetrik tutulum",
                desc: "Her iki bacak veya kol e&#351;it &#351;ekilde etkilenir. Tek taraflı &#351;i&#351;lik lip&ouml;dem değil, lenf&ouml;dem i&#351;areti olabilir.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="flex items-start gap-5 bg-white rounded-xl p-5 md:p-6 shadow-sm border border-stone-100">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8F5F0] text-[#1A6B5A] font-display font-bold text-lg shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-[#163832]">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-[#6B7B75] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bilimsel Kaynaklarla Yönetiliyoruz */}
          <div className="mt-16">
            <ScrollReveal>
              <h3 className="font-display text-xl md:text-2xl font-bold text-[#163832] mb-6 text-center">
                Bilimsel Kaynaklarla Y&ouml;netiliyoruz
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: BookOpen, title: "Peer-reviewed makaleler", desc: "20+ bilimsel kaynak referans" },
                { icon: Stethoscope, title: "Uzman denetimi", desc: "T&uuml;m i&ccedil;erikler tıbbi kontrol altında" },
                { icon: Shield, title: "Bağımsız platform", desc: "Hi&ccedil;bir kliniğe bağlı değiliz" },
                { icon: Zap, title: "S&uuml;rekli g&uuml;ncelleme", desc: "En g&uuml;ncel kılavuzlarla uyumlu" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5 text-center hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 rounded-full bg-[#E8F5F0] flex items-center justify-center mb-3 mx-auto">
                      <item.icon className="w-5 h-5 text-[#1A6B5A]" />
                    </div>
                    <h4 className="font-semibold text-[#163832] text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-[#6B7B75] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 4 — SEMPTOM TESTİ TANITIM
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left — text */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">SEMPTOM TESTİ</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#163832] leading-snug">
                    Semptom Testi: Riskinizi Değerlendirin
                  </h2>
                  <p className="mt-3 text-[#6B7B75] text-sm md:text-base leading-relaxed">
                    12 soruluk bilimsel &ouml;l&ccedil;ekle lip&ouml;dem risk seviyenizi &ouml;ğrenin.
                    Sonu&ccedil;larınızı doktorunuza g&ouml;t&uuml;r&uuml;n, erken tanı i&ccedil;in ilk adımı atın.
                  </p>
                  <p className="mt-2 text-xs text-[#6B7B75]">
                    2 dakika &middot; 12 soru &middot; &Uuml;cretsiz
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/araclar/semptom-testi"
                      className="inline-flex items-center justify-center gap-2 bg-[#1A6B5A] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#15594A] shadow-sm hover:shadow-md transition-all"
                    >
                      Teste Ba&#351;la <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right — test mockup */}
                <div className="bg-[#E8F5F0] flex items-center justify-center p-8 md:p-12">
                  <div className="w-full max-w-xs">
                    {/* Mockup card */}
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      {/* Progress circle mockup */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs text-[#6B7B75] font-medium">Soru 3/12</span>
                        <div className="relative w-10 h-10">
                          <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#E8F5F0" strokeWidth="3" />
                            <circle cx="18" cy="18" r="15.5" fill="none" stroke="#1A6B5A" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="73" strokeLinecap="round" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1A6B5A]">25%</span>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-[#163832] leading-snug">
                        Bacaklarınızda dokunmaya kar&#351;ı hassasiyet veya ağrı hissediyor musunuz?
                      </p>

                      <div className="mt-4 space-y-2">
                        {["Evet, s&uuml;rekli", "Bazen", "Hayır"].map((option, i) => (
                          <div
                            key={i}
                            className={`px-4 py-2.5 rounded-lg border text-sm ${i === 0 ? "border-[#1A6B5A] bg-[#E8F5F0] text-[#1A6B5A] font-medium" : "border-stone-200 text-[#6B7B75]"}`}
                            dangerouslySetInnerHTML={{ __html: option }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 5 — TÜRKİYE HARİTASI / KLİNİK BULUCU
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">KLİNİK BULUCU</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#163832]">
                İstanbul&apos;da Lip&ouml;dem Tedavisi Veren Klinikler
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-2xl mx-auto">
                T&uuml;rkiye genelinde lip&ouml;dem tedavisi sunan klinik ve uzmanları b&ouml;lgenizde ke&#351;fedin.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <TurkeyMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 6 — SAĞLIĞINIZA YATIRIM
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">PREMIUM</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#163832]">
                Sağlığınıza Yatırım Yapın
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
                &Uuml;cretsiz i&ccedil;eriklerin &ouml;tesinde, ki&#351;iselle&#351;tirilmi&#351; rehberlik ve derinlemesine bilgi i&ccedil;in.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free card */}
            <ScrollReveal>
              <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 h-full flex flex-col">
                <h3 className="font-display text-lg font-bold text-[#163832]">&Uuml;cretsiz</h3>
                <p className="text-3xl font-display font-bold text-[#163832] mt-2">0 TL</p>
                <p className="text-xs text-[#6B7B75] mt-1">Sonsuza kadar &uuml;cretsiz</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {["Genel bilgi makaleleri", "Semptom testi", "Klinik bulucu", "Topluluk eri&#351;imi"].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6B7B75]">
                      <CheckCircle className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
                <Link
                  href="/araclar/semptom-testi"
                  className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-lg border-2 border-[#1A6B5A] text-[#1A6B5A] font-semibold text-sm hover:bg-[#E8F5F0] transition-colors"
                >
                  Hemen Ba&#351;la
                </Link>
              </div>
            </ScrollReveal>

            {/* Premium card — highlight */}
            <ScrollReveal delay={100}>
              <div className="bg-[#1A6B5A] rounded-xl shadow-md p-6 h-full flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#E8916D] text-white text-xs font-bold rounded-full">
                  Popüler
                </div>
                <h3 className="font-display text-lg font-bold text-white mt-2">Premium</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <p className="text-3xl font-display font-bold text-white">49 TL</p>
                  <span className="text-white/60 text-sm">/ay</span>
                </div>
                <p className="text-xs text-white/60 mt-1">Yıllık &ouml;demede 39 TL/ay</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {["&Uuml;cretsiz planın t&uuml;m &ouml;zellikleri", "Ki&#351;isel beslenme planı", "Egzersiz program &ouml;nerileri", "Uzman i&ccedil;erikleri", "&Ouml;ncelikli destek"].map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#93D4BE] mt-0.5 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
                <Link
                  href="/premium"
                  className="mt-6 inline-flex items-center justify-center w-full py-3 rounded-lg bg-white text-[#1A6B5A] font-semibold text-sm hover:bg-[#FAF7F2] transition-colors"
                >
                  Premium&apos;a Ge&ccedil;
                </Link>
              </div>
            </ScrollReveal>

            {/* Daily price highlight card */}
            <ScrollReveal delay={200}>
              <div className="bg-[#E8916D] rounded-xl shadow-sm p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  G&uuml;nl&uuml;k Sadece<br />1.67 TL
                </h3>
                <p className="text-white/80 text-sm mt-3 leading-relaxed max-w-[200px]">
                  Bir &ccedil;ay bardağından az. Sağlığınız i&ccedil;in en değerli yatırım.
                </p>
                <Link
                  href="/premium"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#E8916D] font-semibold text-sm hover:bg-white/90 transition-colors"
                >
                  Detayları G&ouml;r <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 7 — HASTA HİKAYELERİ
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">DENEYİMLER</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#163832]">
                Yalnız değilsiniz
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
                Lip&ouml;demle ya&#351;ayan kadınların ger&ccedil;ek deneyimleri.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                quote: "Yıllardır neden bacaklarımın incelemediğini anlayamıyordum. Bu platformdaki bilgiler sayesinde doğru tanıya ula&#351;tım.",
                name: "A.G., İstanbul",
                stage: "Evre 2",
                delay: 0,
              },
              {
                quote: "Doktorlara gidip gidip hep aynı cevabı alıyordum: &lsquo;Daha &ccedil;ok spor yap.&rsquo; Burada ilk kez ger&ccedil;ekten anla&#351;ıldığımı hissettim.",
                name: "Z.K., Ankara",
                stage: "Evre 1",
                delay: 100,
              },
              {
                quote: "Tedavi se&ccedil;eneklerini bu kadar a&ccedil;ık ve anla&#351;ılır anlatan ba&#351;ka bir kaynak bulamadım. Artık ne yapacağımı biliyorum.",
                name: "E.M., İzmir",
                stage: "Evre 3",
                delay: 200,
              },
            ].map((testimonial) => (
              <ScrollReveal key={testimonial.name} delay={testimonial.delay}>
                <div className="h-full bg-white rounded-xl shadow-sm border border-stone-100 p-6 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#E8916D]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[#2D3B36] text-sm leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: `&ldquo;${testimonial.quote}&rdquo;` }} />

                  {/* Attribution */}
                  <div className="mt-6 pt-4 border-t border-stone-100">
                    <p className="font-semibold text-[#163832] text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#6B7B75] text-xs mt-0.5">
                      {testimonial.stage}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Test Completed success card */}
          <ScrollReveal delay={100}>
            <div className="mt-10 max-w-md mx-auto">
              <div className="bg-[#E8F5F0] rounded-xl p-6 text-center border border-[#1A6B5A]/10">
                <div className="w-14 h-14 rounded-full bg-[#1A6B5A] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#163832]">Test Tamamlandı</h3>
                <p className="text-[#6B7B75] text-sm mt-2">
                  3.000+ ki&#351;i semptom testini tamamladı ve doğru bilgiye ula&#351;tı.
                </p>
                <Link
                  href="/araclar/semptom-testi"
                  className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#1A6B5A] text-white text-sm font-semibold hover:bg-[#15594A] transition-colors"
                >
                  Siz de ba&#351;layın <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 8 — GÜVEN SİNYALLERİ
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Bilimsel kaynaklı", desc: "T&uuml;m i&ccedil;erikler akademik araştırmalara dayalı", delay: 0 },
              { icon: BookOpen, title: "20+ araştırma", desc: "Peer-reviewed makalelere referans", delay: 80 },
              { icon: Users, title: "Bağımsız platform", desc: "Hi&ccedil;bir kliniğe bağlı değiliz", delay: 160 },
              { icon: Zap, title: "D&uuml;zenli g&uuml;ncelleme", desc: "İ&ccedil;erikler s&uuml;rekli g&uuml;ncel tutulur", delay: 240 },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1A6B5A]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <p className="font-semibold text-[#163832] text-sm" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-xs text-[#6B7B75] mt-1 max-w-[180px]" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 9 — NEWSLETTER
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">B&Uuml;LTEN</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#163832]">
                  Haftalık lip&ouml;dem bilgisi, doğrudan e-postanıza
                </h2>
                <p className="mt-3 text-[#6B7B75] text-base leading-relaxed">
                  En yeni araştırmalar, pratik ipu&ccedil;ları ve topluluk haberleri her hafta gelen kutunuzda.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <form className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-5 py-3.5 rounded-lg border border-stone-200 bg-white text-[#2D3B36] placeholder:text-[#6B7B75] focus:outline-none focus:ring-2 focus:ring-[#1A6B5A]/30 focus:border-[#1A6B5A] transition-all text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#1A6B5A] text-white rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-[#15594A] transition-colors"
                >
                  Abone Ol
                </button>
              </form>
              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-[#6B7B75]">
                <Shield className="w-3.5 h-3.5" />
                Bilgileriniz gizlidir. Spam yok. İstediğiniz zaman ayrılabilirsiniz.
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          STICKY MOBİL CTA BAR
         ────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg px-4 py-3 border-t border-stone-200 shadow-soft-lg">
        <Link
          href="/araclar/semptom-testi"
          className="flex items-center justify-center gap-2 w-full bg-[#1A6B5A] text-white py-3 rounded-lg font-semibold text-sm shadow-sm hover:bg-[#15594A] transition-colors"
        >
          <ClipboardCheck className="w-4 h-4" />
          Semptom Testini &Ccedil;&ouml;z
        </Link>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-[60px] lg:hidden" />
    </>
  )
}
