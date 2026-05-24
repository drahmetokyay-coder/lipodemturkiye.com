import Link from "next/link"
import { HeroBackgroundVideo } from "@/components/marketing/hero-video"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import {
  ArrowRight,
  Activity,
  Heart,
  MapPin,
  ClipboardCheck,
  Utensils,
  Dumbbell,
  Brain,
  BookOpen,
  CheckCircle,
  Mail,
  Shield,
  Users,
  Star,
  Sparkles,
  Clock,
  TrendingUp,
  ChevronDown,
  Play,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────
          1. HERO -- Sinematik, tam ekran, shimmer
         ────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex items-center bg-[#0a0a0a]">
        {/* Background video */}
        <HeroBackgroundVideo />

        {/* Dark overlay + grain */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 grain z-10" />

        {/* Glow orbs */}
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[120px] z-10" aria-hidden="true" />
        <div className="absolute bottom-[30%] right-[15%] w-[300px] h-[300px] rounded-full bg-purple-500/8 blur-[100px] z-10" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            {/* Viral hook badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass mb-10 animate-fade-in">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500" />
              </span>
              <span className="text-sm text-white/70 font-medium tracking-wide">
                Her 9 kadından 1&apos;i etkileniyor
              </span>
            </div>

            {/* Main headline -- shimmer */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[1.02] tracking-tight animate-fade-in-up shimmer-text">
              Yalnız Değilsiniz
            </h1>

            <p className="mt-8 md:mt-10 text-base sm:text-lg md:text-xl text-white/50 max-w-xl mx-auto leading-relaxed animate-fade-in-up-d1">
              <strong className="text-white/80">Bu sizin hatanız değil.</strong>{" "}
              Yıllardır diyet yapıyorsunuz ama bacaklarınız incelmiyor.
              T&uuml;rkiye&apos;nin ilk lip&ouml;dem platformu ile farkındalığınız başlasın.
            </p>

            {/* CTA buttons */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-d2">
              <Link
                href="/araclar/semptom-testi"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#0a0a0a] px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-teal-50 transition-all duration-300 shadow-2xl shadow-teal-500/10"
              >
                <ClipboardCheck className="w-5 h-5 text-teal-600" />
                2 Dakika Semptom Testi
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-teal-600" />
              </Link>
              <Link
                href="/lipodem-nedir"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white/70 border border-white/15 hover:bg-white/8 hover:text-white hover:border-white/25 backdrop-blur-sm transition-all duration-300"
              >
                Lip&ouml;dem Nedir?
              </Link>
            </div>

            {/* Glassmorphic stat cards */}
            <div className="mt-16 grid grid-cols-3 gap-3 md:gap-5 max-w-lg mx-auto animate-fade-in-up-d3">
              {[
                { value: "370M+", label: "Etkilenen kadın" },
                { value: "%51", label: "Doktor farkındalığı" },
                { value: "10+", label: "Yıl tanı gecikmesi" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center px-3 py-4 rounded-2xl glass hover:bg-white/10 transition-all duration-500"
                >
                  <p className="text-2xl md:text-3xl font-bold text-gradient-teal-purple tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[11px] md:text-xs text-white/35 mt-1.5 tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">Keşfet</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <div className="w-1 h-2.5 bg-white/40 rounded-full" style={{ animation: "scroll-bounce 2s ease-in-out infinite" }} />
          </div>
        </div>

        {/* Bottom gradient fade to dark */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          2. EMPATİ -- Duygusal baglanti
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-teal-500/5 blur-[150px]" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white/90 leading-tight italic">
              &ldquo;Size de mi{" "}
              <span className="text-rose-400 not-italic font-bold">kilo ver</span>{" "}
              diyorlar?&rdquo;
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-10 text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
              Yıllardır diyet yapıyorsunuz ama bacaklarınız incelmiyor.
              &Uuml;st bedeniniz zayıflıyor, alt bedeniniz aynı kalıyor.
              Doktorlar &ldquo;daha &ccedil;ok hareket et&rdquo; diyor ama hi&ccedil;bir şey değişmiyor.
              Kendinizi su&ccedil;luyorsunuz.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-14 flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-teal-500/50" />
              <p className="font-serif text-2xl md:text-4xl font-bold text-gradient-teal-purple">
                Bu sizin hatanız değil.
              </p>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500/50" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-8 text-base text-white/30">
              Lip&ouml;dem, genetik bir hastalıktır. Diyet ve egzersizle ge&ccedil;mez.
              Ama doğru bilgiyle y&ouml;netilebilir.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          3. İSTATİSTİKLER -- Glowing kartlar
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gradient-teal-purple">
                Rakamlarla Lip&ouml;dem
              </h2>
              <p className="mt-5 text-white/35 text-lg max-w-xl mx-auto">
                Az bilinen ama &ccedil;ok yaygın bir hastalık.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                value: "370M+",
                label: "Dünya genelinde etkilenen kadın",
                gradient: "from-teal-400 to-teal-600",
                glow: "teal",
              },
              {
                value: "%51",
                label: "Türk doktorlarının farkındalık oranı",
                gradient: "from-purple-400 to-purple-600",
                glow: "purple",
              },
              {
                value: "10+ yıl",
                label: "Ortalama tanı gecikmesi",
                gradient: "from-amber-400 to-amber-600",
                glow: "amber",
              },
            ].map((stat, i) => (
              <ScrollReveal key={stat.value} delay={i * 150}>
                <div className="group rounded-3xl p-10 md:p-12 text-center border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden hover:border-white/15 hover:shadow-2xl">
                  {/* Hover glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${stat.gradient} blur-[80px]`} style={{ opacity: 0 }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }} />

                  <p className={`text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent relative z-10`}>
                    {stat.value}
                  </p>
                  <p className="mt-5 text-white/40 font-medium relative z-10">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          4. BENTO GRİD -- Glassmorphic rehber kartlari
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-teal-500/5 blur-[120px]" aria-hidden="true" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gradient-teal-purple">
                Kapsamlı Lip&ouml;dem Rehberi
              </h2>
              <p className="mt-5 text-white/35 text-lg max-w-xl mx-auto">
                İhtiyacınız olan her bilgi, bilimsel kaynaklı ve T&uuml;rk&ccedil;e.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento grid -- 2 large + 4 small */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(200px,auto)]">
            {/* Large card 1 -- Tani */}
            <ScrollReveal delay={0} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <Link
                href="/lipodem-nedir"
                className="group h-full rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden glass hover:bg-white/10 hover:border-white/20"
              >
                {/* Gradient accent glow */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6 border border-teal-500/20">
                    <Activity className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white/90 group-hover:text-teal-300 transition-colors">
                    Tanı &amp; Farkındalık
                  </h3>
                  <p className="mt-4 text-white/35 text-base leading-relaxed max-w-sm">
                    Lip&ouml;dem nedir, nasıl anlaşılır, evreleri nelerdir? Belirtilerinizi tanıyın, doğru tanıya ulaşın.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-teal-400 font-semibold text-sm group-hover:gap-2 transition-all">
                  Keşfet <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>

            {/* Large card 2 -- Tedavi */}
            <ScrollReveal delay={100} className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <Link
                href="/lipodem-tedavisi"
                className="group h-full rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden glass hover:bg-white/10 hover:border-white/20"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-rose-600/10 flex items-center justify-center mb-6 border border-rose-500/20">
                    <Heart className="w-7 h-7 text-rose-400" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-white/90 group-hover:text-rose-300 transition-colors">
                    Tedavi Yol Haritası
                  </h3>
                  <p className="mt-4 text-white/35 text-base leading-relaxed max-w-sm">
                    Konservatif tedaviden cerrahiye t&uuml;m se&ccedil;enekler. Hangi tedavi sizin i&ccedil;in doğru?
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center text-rose-400 font-semibold text-sm group-hover:gap-2 transition-all">
                  Keşfet <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </ScrollReveal>

            {/* Small card -- Beslenme */}
            <ScrollReveal delay={200}>
              <Link
                href="/lipodem-beslenme"
                className="group h-full rounded-3xl p-6 md:p-7 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col glass hover:bg-white/10 hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-4 border border-amber-500/20">
                  <Utensils className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white/80 group-hover:text-amber-300 transition-colors">
                  Beslenme
                </h3>
                <p className="mt-2 text-white/30 text-sm leading-relaxed flex-1">
                  Anti-inflamatuar beslenme rehberi
                </p>
                <ArrowRight className="w-4 h-4 text-amber-400 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </ScrollReveal>

            {/* Small card -- Egzersiz */}
            <ScrollReveal delay={300}>
              <Link
                href="/lipodem-egzersiz"
                className="group h-full rounded-3xl p-6 md:p-7 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col glass hover:bg-white/10 hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center mb-4 border border-emerald-500/20">
                  <Dumbbell className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white/80 group-hover:text-emerald-300 transition-colors">
                  Egzersiz
                </h3>
                <p className="mt-2 text-white/30 text-sm leading-relaxed flex-1">
                  Lip&ouml;deme uygun hareket programları
                </p>
                <ArrowRight className="w-4 h-4 text-emerald-400 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </ScrollReveal>

            {/* Small card -- Ruh Sagligi */}
            <ScrollReveal delay={400}>
              <Link
                href="/lipodem-ruh-sagligi"
                className="group h-full rounded-3xl p-6 md:p-7 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col glass hover:bg-white/10 hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mb-4 border border-purple-500/20">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white/80 group-hover:text-purple-300 transition-colors">
                  Ruh Sağlığı
                </h3>
                <p className="mt-2 text-white/30 text-sm leading-relaxed flex-1">
                  Psikolojik destek ve başa &ccedil;ıkma
                </p>
                <ArrowRight className="w-4 h-4 text-purple-400 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </ScrollReveal>

            {/* Small card -- Turkiye Rehberi */}
            <ScrollReveal delay={500}>
              <Link
                href="/lipodem-turkiye-rehberi"
                className="group h-full rounded-3xl p-6 md:p-7 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col glass hover:bg-white/10 hover:border-white/20"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/20 to-sky-600/10 flex items-center justify-center mb-4 border border-sky-500/20">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-white/80 group-hover:text-sky-300 transition-colors">
                  T&uuml;rkiye Rehberi
                </h3>
                <p className="mt-2 text-white/30 text-sm leading-relaxed flex-1">
                  Şehir bazlı klinikler ve SGK bilgisi
                </p>
                <ArrowRight className="w-4 h-4 text-sky-400 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          5. ARACLAR -- Glassmorphic featured card
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Glow orbs */}
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-teal-500/6 blur-[120px]" aria-hidden="true" style={{ animation: "orb-float 8s ease-in-out infinite" }} />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[100px]" aria-hidden="true" style={{ animation: "orb-float 10s ease-in-out infinite reverse" }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gradient-teal-purple">
                Size &ouml;zel ara&ccedil;larımız
              </h2>
              <p className="mt-5 text-white/35 text-lg max-w-xl mx-auto">
                İnteraktif ara&ccedil;larla kendi durumunuzu değerlendirin.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured tool -- Semptom Testi */}
          <ScrollReveal delay={100}>
            <Link
              href="/araclar/semptom-testi"
              className="group block rounded-3xl p-8 md:p-10 mb-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden border-gradient"
            >
              {/* Inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center shrink-0 border border-teal-500/20">
                  <ClipboardCheck className="w-8 h-8 text-teal-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-teal-300 transition-colors">
                      Semptom Testi
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-teal-500/15 text-teal-400 text-xs font-semibold uppercase tracking-wider border border-teal-500/20">
                      &Uuml;cretsiz
                    </span>
                  </div>
                  <p className="text-white/35 text-base">
                    12 soruluk bilimsel test ile lip&ouml;dem risk seviyenizi &ouml;ğrenin. Sadece 2 dakika.
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-teal-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Teste Başla <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Other tools -- 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Evre Değerlendirme",
                desc: "Lipödem evrenizi öğrenin",
                href: "/araclar/evre-degerlendirme",
                delay: 200,
              },
              {
                icon: MapPin,
                title: "Klinik Bulucu",
                desc: "Size en yakın uzman klinikleri bulun",
                href: "/araclar/klinik-bulucu",
                delay: 300,
              },
              {
                icon: BookOpen,
                title: "Maliyet Hesaplayıcı",
                desc: "Tedavi maliyetlerini karşılaştırın",
                href: "/araclar/maliyet-hesaplayici",
                delay: 400,
              },
            ].map((tool) => (
              <ScrollReveal key={tool.href} delay={tool.delay}>
                <Link
                  href={tool.href}
                  className="group h-full rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 glass hover:bg-white/10 hover:border-white/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-all duration-300">
                    <tool.icon className="w-6 h-6 text-white/30 group-hover:text-teal-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold text-white/70 group-hover:text-teal-300 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-white/25 text-sm">
                    {tool.desc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          6. HASTA HİKAYELERİ -- Glassmorphic testimonials
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose-500/4 blur-[150px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gradient-teal-purple">
                Ger&ccedil;ek Hikayeler
              </h2>
              <p className="mt-5 text-white/35 text-lg max-w-xl mx-auto">
                Lip&ouml;demle yaşayan kadınların deneyimleri.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Yıllardır neden bacaklarımın incelemediğini anlayamıyordum. Bu platformdaki bilgiler sayesinde doğru tanıya ulaştım.",
                name: "A.G.",
                location: "İstanbul",
                stage: "Evre 2",
                delay: 0,
              },
              {
                quote: "Doktorlara gidip gidip hep aynı cevabı alıyordum: 'Daha çok spor yap.' Burada ilk kez gerçekten anlaşıldığımı hissettim.",
                name: "Z.K.",
                location: "Ankara",
                stage: "Evre 1",
                delay: 150,
              },
              {
                quote: "Tedavi seçeneklerini bu kadar açık ve anlaşılır anlatan başka bir kaynak bulamadım. Artık ne yapacağımı biliyorum.",
                name: "E.M.",
                location: "İzmir",
                stage: "Evre 3",
                delay: 300,
              },
            ].map((testimonial) => (
              <ScrollReveal key={testimonial.name} delay={testimonial.delay}>
                <div className="h-full rounded-2xl p-8 glass hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-serif text-white/60 text-base leading-relaxed italic flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="font-semibold text-white/70 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/30 text-sm mt-0.5">
                      {testimonial.location} &middot; {testimonial.stage}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          7. LİPÖDEM NEDİR -- 2 sutun bilgi
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[130px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left -- text */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-teal-400 text-xs font-semibold mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Temel Bilgi
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight">
                  Lip&ouml;dem nedir?
                </h2>
                <p className="mt-6 text-white/40 text-base md:text-lg leading-relaxed">
                  Lip&ouml;dem, v&uuml;cudun belirli b&ouml;lgelerinde &mdash; &ouml;zellikle bacaklarda ve kolllarda &mdash; yağ dokusunun anormal biriktiği kronik bir hastalıktır. Diyet ve egzersizle iyileşmez. Genetik k&ouml;kenlidir ve &ccedil;oğunlukla kadınları etkiler.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Dünyada her 10 kadından 1’ini etkiler",
                    "Hormon değişikliklerinde tetiklenir",
                    "Doğru tanıyla yönetilebilir",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="text-white/50 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/lipodem-nedir"
                  className="group inline-flex items-center gap-2 mt-10 text-teal-400 font-semibold hover:text-teal-300 transition-colors"
                >
                  Detaylı bilgi edinin
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right -- 2x2 grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, label: "Kronik hastalık", desc: "Yaşam boyu yönetim gerektirir", delay: 100 },
                { icon: Heart, label: "Genetik kökenli", desc: "Sizin hatanız değil", delay: 200 },
                { icon: TrendingUp, label: "İlerleyici", desc: "Erken tanı çok önemli", delay: 300 },
                { icon: Users, label: "Çok yaygın", desc: "370M+ kadın etkileniyor", delay: 400 },
              ].map((item) => (
                <ScrollReveal key={item.label} delay={item.delay}>
                  <div className="h-full rounded-2xl p-6 border-gradient hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                    <item.icon className="w-6 h-6 text-teal-400 mb-4" />
                    <p className="font-semibold text-white/70 text-sm">{item.label}</p>
                    <p className="text-white/30 text-xs mt-1.5">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          8. SUREC -- 3 adim, connecting line
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 md:py-32 relative overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-50" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gradient-teal-purple">
                3 adımda yolculuğunuz
              </h2>
              <p className="mt-5 text-white/35 text-lg max-w-xl mx-auto">
                Doğru bilgiye ulaşmak hi&ccedil; bu kadar kolay olmamıştı.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {/* Connecting line -- desktop only */}
            <div className="hidden md:block absolute top-[80px] left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-teal-500/30 via-purple-500/30 to-rose-500/30" aria-hidden="true" />

            {[
              {
                step: "01",
                title: "Semptomlarınızı Değerlendirin",
                desc: "Ücretsiz semptom testi ile lipödem risk seviyenizi öğrenin. Sadece 2 dakika.",
                gradient: "from-teal-400 to-teal-600",
                textColor: "text-teal-400",
                delay: 0,
              },
              {
                step: "02",
                title: "Bilgilenin",
                desc: "Bilimsel kaynaklı rehberlerimizle hastalığınızı ve tedavi seçeneklerinizi tanıyın.",
                gradient: "from-purple-400 to-purple-600",
                textColor: "text-purple-400",
                delay: 200,
              },
              {
                step: "03",
                title: "Harekete Geçin",
                desc: "Klinik bulucu ile size en yakın uzmanı bulun. Doğru tedaviye bugün başlayın.",
                gradient: "from-rose-400 to-rose-600",
                textColor: "text-rose-400",
                delay: 400,
              },
            ].map((item) => (
              <ScrollReveal key={item.step} delay={item.delay}>
                <div className="text-center md:text-left relative">
                  {/* Gradient numbered circle */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-lg relative z-10`}>
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className={`text-xl font-bold ${item.textColor} mb-3`}>
                    {item.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          9. GUVEN -- 4 sutun ikon grid
         ────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "Bilimsel kaynaklı", desc: "Tüm içerikler akademik araştırmalara dayalı", delay: 0 },
              { icon: BookOpen, title: "20+ araştırma", desc: "Peer-reviewed makalelere referans", delay: 100 },
              { icon: Users, title: "Bağımsız platform", desc: "Hiçbir kliniğe bağlı değiliz", delay: 200 },
              { icon: CheckCircle, title: "Uzman incelemeli", desc: "İçerikler sağlık profesyonellerince doğrulandı", delay: 300 },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-4 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500 hover-glow">
                    <item.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <p className="text-sm font-bold text-white/70">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/30 mt-1.5 max-w-[180px]">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ──────────────────────────────────────────
          10. NEWSLETTER -- Gradient mesh dark
         ────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">
        {/* Gradient mesh background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-teal-500/8 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full bg-purple-500/6 blur-[120px]" />
          <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full bg-rose-500/4 blur-[100px]" />
        </div>
        <div className="absolute inset-0 grain" aria-hidden="true" />

        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="rounded-3xl glass p-10 md:p-14">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-8">
                <Mail className="w-7 h-7 text-teal-400" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white/90">
                Haftalık lip&ouml;dem bilgisi,
                <br className="hidden sm:block" />
                doğrudan e-postanıza
              </h2>
              <p className="mt-5 text-white/35 max-w-lg mx-auto">
                En yeni araştırmalar, pratik ipuçları ve topluluk haberleri her hafta
                gelen kutunuzda.
              </p>
              <form className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full sm:flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent focus:bg-white/8 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-animated-gradient text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-teal-500/10 hover:shadow-teal-500/25 hover:scale-[1.02] whitespace-nowrap"
                >
                  Abone Ol
                </button>
              </form>
              <div className="mt-5 flex items-center justify-center gap-1.5 text-xs text-white/25">
                <Shield className="w-3.5 h-3.5" />
                Bilgileriniz gizlidir. Spam yok. İstediğiniz zaman ayrılabilirsiniz.
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          STICKY MOBİL CTA BAR
         ────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass px-4 py-3 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]" style={{ background: "rgba(10, 10, 10, 0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
        <Link
          href="/araclar/semptom-testi"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-teal-600 to-teal-500 text-white py-3.5 rounded-full font-semibold text-sm shadow-lg shadow-teal-500/20"
        >
          <ClipboardCheck className="w-4 h-4" />
          Semptom Testini &Ccedil;&ouml;z
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-[68px] lg:hidden" />
    </>
  )
}
