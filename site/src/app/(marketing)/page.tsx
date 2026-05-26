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
          SECTION 1 - HERO
         ────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] overflow-hidden flex items-center bg-white">
        {/* Background video */}
        <HeroBackgroundVideo />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left -- text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
                <span className="w-2 h-2 rounded-full bg-[#1A6B5A]" />
                <span className="text-sm font-medium text-[#1A6B5A] tracking-wide">
                  T&uuml;rkiye&apos;nin ilk lip&ouml;dem platformu
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-[#2D3B36] animate-fade-in-up">
                Lip&ouml;dem&apos;de<br />
                <span className="text-[#1A6B5A]">Yalnız Değilsiniz</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg md:text-xl text-[#6B7B75] max-w-lg leading-relaxed animate-fade-in-up-d1">
                Bilimsel kaynaklı bilgi, interaktif ara&ccedil;lar ve size &ouml;zel rehberlerle lip&ouml;dem yolculuğunuzda yanınızdayız.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-3 animate-fade-in-up-d2">
                <Link
                  href="/araclar/semptom-testi"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#1A6B5A] text-white rounded-full text-base font-semibold hover:bg-[#15594A] shadow-sm hover:shadow-md transition-all duration-300"
                >
                  Semptom Testini &Ccedil;&ouml;z
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lipodem-nedir"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[#2D3B36] border-2 border-[#2D3B36]/20 hover:border-[#1A6B5A] hover:text-[#1A6B5A] transition-all duration-300"
                >
                  Lip&ouml;dem Nedir?
                </Link>
              </div>

              {/* Stats inline */}
              <div className="mt-10 flex items-center gap-6 md:gap-8 animate-fade-in-up-d3">
                {[
                  { value: "9/11", label: "kadın etkileniyor" },
                  { value: "370M+", label: "d&uuml;nyada hasta" },
                  { value: "25+", label: "yıl ge&ccedil; tanı" },
                  { value: "%51", label: "farkındalık" },
                ].map((stat) => (
                  <div key={stat.label} className="text-left">
                    <p className="font-display text-2xl md:text-3xl font-bold text-[#1A6B5A] tracking-tight leading-none">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-[#6B7B75] mt-1 font-medium" dangerouslySetInnerHTML={{ __html: stat.label }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Right -- empty space for video to show through */}
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
          SECTION 2 - EMPATHY BAR
         ────────────────────────────────────────── */}
      <section className="bg-[#1A6B5A] py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-white text-sm md:text-base font-medium leading-relaxed">
            Her 9 kadından 1&apos;ini etkileyen lip&ouml;dem, doktorların yarısı tarafından bile tanınmıyor.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 3 - "BU NEDİR?" ACIKLAMA
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Top -- Two column text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <ScrollReveal>
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">LIP&Ouml;DEM NEDİR?</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3B36] leading-tight">
                Belirtileri, evreleri ve tedavi se&ccedil;enekleri
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

          {/* Bottom -- 4 feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Clock, title: "Kronik", desc: "Ya&#351;am boyu y&ouml;netim gerektirir" },
              { icon: Heart, title: "Genetik", desc: "Sizin hatanız değil, kalıtımsal" },
              { icon: TrendingUp, title: "İlerleyici", desc: "Erken m&uuml;dahale &ccedil;ok &ouml;nemli" },
              { icon: Shield, title: "Tedavi edilebilir", desc: "Doğru yakla&#351;ımla kontrol altına alınır" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-[#FAF7F2] rounded-xl p-5 text-center hover:shadow-sm transition-shadow">
                  <div className="w-11 h-11 rounded-full bg-[#1A6B5A] flex items-center justify-center mb-3 mx-auto">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#2D3B36] mb-1">{item.title}</h3>
                  <p className="text-xs text-[#6B7B75] leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 4 - BELİRTİLER
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">BELİRTİLER</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3B36]">
                Lip&ouml;dem belirtilerini tanıyın
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
                En yaygın 5 belirti ile kendinizi değerlendirin.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8 md:space-y-10">
            {[
              {
                num: "01",
                title: "Orantısız yağ birikimi",
                desc: "Bacak ve kal&ccedil;alarda belirgin, &uuml;st bedene oranla &ccedil;ok fazla yağ birikimi. Ayak bilekleri etkilenmez, belirgin bir 'bilezik' olu&#351;ur.",
              },
              {
                num: "02",
                title: "Diyete diren&ccedil;li yapı",
                desc: "Sıkı diyet ve egzersize rağmen etkilenen b&ouml;lgelerdeki yağ erimez. &Uuml;st beden zayıflarken alt beden aynı kalır.",
              },
              {
                num: "03",
                title: "Ağrı ve hassasiyet",
                desc: "Etkilenen b&ouml;lgelerde basın&ccedil; ağrısı, dokunma hassasiyeti ve yorgunluk hissi. G&uuml;n sonunda bacaklarda ağırlık.",
              },
              {
                num: "04",
                title: "Kolay morarma",
                desc: "Hafif temasla bile morluklar olu&#351;ur. Bu, doku altındaki damarsal kırılganlığın bir i&#351;aretidir.",
              },
              {
                num: "05",
                title: "Simetrik tutulum",
                desc: "Her iki bacak veya kol e&#351;it &#351;ekilde etkilenir. Tek taraflı &#351;i&#351;lik lip&ouml;dem değil, lenf&ouml;dem i&#351;areti olabilir.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="flex items-start gap-5 md:gap-8 bg-white rounded-xl p-5 md:p-6 shadow-soft">
                  <span className="font-display text-4xl md:text-5xl font-bold text-[#1A6B5A]/20 shrink-0 leading-none select-none">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-[#2D3B36]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[#6B7B75] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 5 - SEMPTOM TESTİ CTA
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-[#1A6B5A] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="text-[#93D4BE] text-sm font-medium mb-3">2 dakika &middot; 12 soru &middot; &Uuml;cretsiz</p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug">
                    Semptom Testi ile Riskinizi Değerlendirin
                  </h2>
                  <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
                    12 soruluk bilimsel test ile lip&ouml;dem risk seviyenizi &ouml;ğrenin. Sonucunuzu doktorunuza g&ouml;t&uuml;rebilirsiniz.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/araclar/semptom-testi"
                      className="inline-flex items-center justify-center gap-2 bg-white text-[#1A6B5A] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#FAF7F2] transition-all"
                    >
                      Teste Ba&#351;la <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="bg-white/5 flex items-center justify-center p-8 md:p-12">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center">
                    <ClipboardCheck className="w-10 h-10 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 6 - TÜRKİYE HARİTASI
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">KLİNİK BULUCU</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3B36]">
                T&uuml;rkiye genelinde tedavi merkezleri
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-2xl mx-auto">
                Lip&ouml;dem tedavisi sunan klinik ve uzmanları b&ouml;lgenizde ke&#351;fedin.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <TurkeyMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 7 - ARACLAR
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">ARA&Ccedil;LAR</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3B36]">
                Size &ouml;zel interaktif ara&ccedil;lar
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
                Kendi durumunuzu değerlendirmek i&ccedil;in &uuml;cretsiz ara&ccedil;larımızı kullanın.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 tool cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Evre Değerlendirme",
                desc: "Lip&ouml;dem evrenizi &ouml;ğrenin",
                href: "/araclar/evre-degerlendirme",
                delay: 100,
              },
              {
                icon: MapPin,
                title: "Klinik Bulucu",
                desc: "Size en yakın uzman klinikleri bulun",
                href: "/araclar/klinik-bulucu",
                delay: 200,
              },
              {
                icon: BookOpen,
                title: "Maliyet Hesaplayıcı",
                desc: "Tedavi maliyetlerini kar&#351;ıla&#351;tırın",
                href: "/araclar/maliyet-hesaplayici",
                delay: 300,
              },
            ].map((tool) => (
              <ScrollReveal key={tool.href} delay={tool.delay}>
                <Link
                  href={tool.href}
                  className="group block rounded-xl bg-[#FAF7F2] border border-transparent p-6 hover:border-[#1A6B5A]/20 hover:shadow-sm transition-all text-center"
                >
                  <div className="w-11 h-11 rounded-full bg-[#1A6B5A]/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#1A6B5A] transition-colors">
                    <tool.icon className="w-5 h-5 text-[#1A6B5A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#2D3B36] group-hover:text-[#1A6B5A] transition-colors text-sm">
                    {tool.title}
                  </h3>
                  <p className="mt-1.5 text-[#6B7B75] text-xs" dangerouslySetInnerHTML={{ __html: tool.desc }} />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 8 - REHBER KARTLARI
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">REHBERLER</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3B36]">
                Kapsamlı rehberlerimiz
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
                İhtiyacınız olan her bilgi, bilimsel kaynaklı ve T&uuml;rk&ccedil;e.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                icon: Activity,
                title: "Tanı ve Farkındalık",
                desc: "Lip&ouml;dem nasıl anla&#351;ılır, evreleri nelerdir?",
                href: "/lipodem-nedir",
                delay: 0,
              },
              {
                icon: Heart,
                title: "Tedavi Se&ccedil;enekleri",
                desc: "Konservatif tedaviden cerrahiye t&uuml;m yol haritası.",
                href: "/lipodem-tedavisi",
                delay: 80,
              },
              {
                icon: Utensils,
                title: "Beslenme Rehberi",
                desc: "Anti-inflamatuar beslenme ve pratik tarifler.",
                href: "/lipodem-beslenme",
                delay: 160,
              },
              {
                icon: Dumbbell,
                title: "Egzersiz Programı",
                desc: "Lip&ouml;deme uygun hareket ve spor rehberi.",
                href: "/lipodem-egzersiz",
                delay: 240,
              },
              {
                icon: Brain,
                title: "Ruh Sağlığı",
                desc: "Psikolojik destek ve ba&#351;a &ccedil;ıkma stratejileri.",
                href: "/lipodem-ruh-sagligi",
                delay: 320,
              },
              {
                icon: MapPin,
                title: "T&uuml;rkiye Rehberi",
                desc: "&#350;ehir bazlı klinikler ve SGK bilgisi.",
                href: "/lipodem-turkiye-rehberi",
                delay: 400,
              },
            ].map((item) => (
              <ScrollReveal key={item.href} delay={item.delay}>
                <Link
                  href={item.href}
                  className="group block rounded-xl bg-white p-5 shadow-soft hover:shadow-md transition-all relative overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1A6B5A] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-10 h-10 rounded-lg bg-[#1A6B5A]/10 flex items-center justify-center mb-3 group-hover:bg-[#1A6B5A] transition-colors">
                    <item.icon className="w-5 h-5 text-[#1A6B5A] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-[#2D3B36] text-sm mb-1" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-[#6B7B75] text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  <span className="mt-3 inline-flex items-center gap-1 text-[#1A6B5A] text-xs font-semibold group-hover:gap-2 transition-all">
                    Ke&#351;fet <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 9 - HASTA HİKAYELERİ
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">DENEYİMLER</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#2D3B36]">
                Yalnız değilsiniz
              </h2>
              <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
                Lip&ouml;demle ya&#351;ayan kadınların deneyimleri.
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
                quote: "Doktorlara gidip gidip hep aynı cevabı alıyordum: 'Daha &ccedil;ok spor yap.' Burada ilk kez ger&ccedil;ekten anla&#351;ıldığımı hissettim.",
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
                <div className="h-full bg-[#FAF7F2] rounded-xl p-6 flex flex-col">
                  {/* Quote */}
                  <p className="text-[#2D3B36] text-sm leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: `&ldquo;${testimonial.quote}&rdquo;` }} />

                  {/* Attribution */}
                  <div className="mt-6 pt-4 border-t border-[#2D3B36]/10">
                    <p className="font-semibold text-[#2D3B36] text-sm">
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
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 10 - GUVEN SINYALLERİ
         ────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Bilimsel kaynaklı", desc: "T&uuml;m i&ccedil;erikler akademik ara&#351;tırmalara dayalı", delay: 0 },
              { icon: BookOpen, title: "20+ ara&#351;tırma", desc: "Peer-reviewed makalelere referans", delay: 80 },
              { icon: Users, title: "Bağımsız platform", desc: "Hi&ccedil;bir kliniğe bağlı değiliz", delay: 160 },
              { icon: Zap, title: "D&uuml;zenli g&uuml;ncelleme", desc: "İ&ccedil;erikler s&uuml;rekli g&uuml;ncel tutulur", delay: 240 },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1A6B5A]/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <p className="font-semibold text-[#2D3B36] text-sm" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-xs text-[#6B7B75] mt-1 max-w-[180px]" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 11 - CTA BANT
         ────────────────────────────────────────── */}
      <section className="bg-[#1A6B5A] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug">
              Lip&ouml;dem yolculuğunuza bug&uuml;n ba&#351;layın
            </h2>
            <div className="mt-6">
              <Link
                href="/araclar/semptom-testi"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[#1A6B5A] bg-white hover:bg-[#FAF7F2] transition-all duration-300 text-sm"
              >
                Semptom Testini &Ccedil;&ouml;z
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-4 text-white/60 text-xs">
              &Uuml;cretsiz, 2 dakika, kayıt gerekmez
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 12 - NEWSLETTER
         ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div>
                <p className="text-sm font-semibold text-[#1A6B5A] mb-3 tracking-wide">B&Uuml;LTEN</p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#2D3B36]">
                  Haftalık lip&ouml;dem bilgisi, doğrudan e-postanıza
                </h2>
                <p className="mt-3 text-[#6B7B75] text-base leading-relaxed">
                  En yeni ara&#351;tırmalar, pratik ipu&ccedil;ları ve topluluk haberleri her hafta gelen kutunuzda.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <form className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-5 py-3.5 rounded-full border border-[#2D3B36]/15 bg-[#FAF7F2] text-[#2D3B36] placeholder:text-[#6B7B75] focus:outline-none focus:ring-2 focus:ring-[#1A6B5A]/30 focus:border-[#1A6B5A] transition-all text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#1A6B5A] text-white rounded-full font-semibold text-sm whitespace-nowrap hover:bg-[#15594A] transition-colors"
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
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg px-4 py-3 border-t border-[#2D3B36]/10 shadow-soft-lg">
        <Link
          href="/araclar/semptom-testi"
          className="flex items-center justify-center gap-2 w-full bg-[#1A6B5A] text-white py-3 rounded-full font-semibold text-sm shadow-sm hover:bg-[#15594A] transition-colors"
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
