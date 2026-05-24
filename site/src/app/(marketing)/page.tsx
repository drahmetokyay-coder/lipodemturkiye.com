import Link from "next/link"
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
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────
          1. HERO — Sıcak, empatik, serif başlık
         ────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden flex items-center" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FEF2F2 50%, #FFF1F2 100%)" }}>
        {/* Organic blob shapes */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-rose-200/40 to-orange-100/20 animate-blob" />
          <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-teal-100/30 to-emerald-50/10 animate-blob-delayed" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-gradient-to-b from-purple-100/20 to-pink-50/10 animate-blob" />
          <div className="absolute top-[15%] right-[35%] w-32 h-32 rounded-full bg-amber-100/30 animate-pulse-slow" />
          <div className="absolute bottom-[25%] left-[15%] w-20 h-20 rounded-full bg-rose-100/40 animate-float" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* Trust badges above headline */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/60 text-stone-600 text-xs font-medium shadow-sm">
                <Shield className="w-3.5 h-3.5 text-teal-600" />
                Bilimsel kaynaklara dayalı
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/60 text-stone-600 text-xs font-medium shadow-sm">
                <Heart className="w-3.5 h-3.5 text-rose-500" />
                Bağımsız platform
              </span>
            </div>

            {/* Main headline — serif */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-stone-800 leading-[1.05] tracking-tight animate-fade-in-up">
              Yalnız Değilsiniz
            </h1>

            <p className="mt-6 md:mt-8 text-lg md:text-xl text-stone-500 max-w-xl mx-auto leading-relaxed animate-fade-in-up-d1">
              T&uuml;rkiye&apos;nin ilk kapsamlı lip&ouml;dem hasta platformu.
              Bilimsel bilgi, interaktif ara&ccedil;lar ve topluluk desteği &mdash; hepsi burada.
            </p>

            {/* Single CTA */}
            <div className="mt-10 animate-fade-in-up-d2">
              <Link
                href="/araclar/semptom-testi"
                className="group inline-flex items-center justify-center gap-2.5 bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-teal-600 transition-all duration-300 shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-700/30"
              >
                Semptom Testini &Ccedil;&ouml;z
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stat badges */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in-up-d3">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">370M+</p>
                <p className="text-sm text-stone-400 mt-1">Etkilenen kadın</p>
              </div>
              <div className="w-px h-10 bg-stone-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">%51</p>
                <p className="text-sm text-stone-400 mt-1">Doktor farkındalığı</p>
              </div>
              <div className="w-px h-10 bg-stone-200 hidden sm:block" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">10+ yıl</p>
                <p className="text-sm text-stone-400 mt-1">Tanı gecikmesi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-stone-300 flex items-start justify-center p-2">
            <div className="w-1 h-2.5 bg-stone-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          2. EMPATİ — Duygusal bağlantı
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-5xl text-stone-800 leading-tight italic animate-fade-in-up">
            &ldquo;Size de mi{" "}
            <span className="text-rose-500 not-italic font-bold">kilo ver</span>{" "}
            diyorlar?&rdquo;
          </h2>
          <p className="mt-8 text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Yıllardır diyet yapıyorsunuz ama bacaklarınız incelmiyor.
            &Uuml;st bedeniniz zayıflıyor, alt bedeniniz aynı kalıyor.
            Doktorlar &ldquo;daha &ccedil;ok hareket et&rdquo; diyor ama hi&ccedil;bir şey değişmiyor.
            Kendinizi su&ccedil;luyorsunuz.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-300" />
            <p className="font-serif text-2xl md:text-3xl font-bold text-teal-700">
              Bu sizin hatanız değil.
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-300" />
          </div>
          <p className="mt-6 text-base text-stone-400">
            Lip&ouml;dem, genetik bir hastalıktır. Diyet ve egzersizle ge&ccedil;mez.
            Ama doğru bilgiyle y&ouml;netilebilir.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          3. İSTATİSTİKLER — Renkli üst kenarlık
         ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#FFFBF5" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-800">
              Rakamlarla Lip&ouml;dem
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
              Az bilinen ama &ccedil;ok yaygın bir hastalık.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 — Teal */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-10 text-center group hover:shadow-md transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600" />
              <p className="text-6xl md:text-7xl font-bold tracking-tighter text-teal-700 mt-2">
                370M+
              </p>
              <p className="mt-4 text-stone-500 font-medium">
                D&uuml;nya genelinde etkilenen kadın
              </p>
            </div>
            {/* Card 2 — Purple */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-10 text-center group hover:shadow-md transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-400 to-purple-600" />
              <p className="text-6xl md:text-7xl font-bold tracking-tighter text-purple-700 mt-2">
                %51
              </p>
              <p className="mt-4 text-stone-500 font-medium">
                T&uuml;rk doktorlarının farkındalık oranı
              </p>
            </div>
            {/* Card 3 — Amber */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 md:p-10 text-center group hover:shadow-md transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600" />
              <p className="text-6xl md:text-7xl font-bold tracking-tighter text-amber-700 mt-2">
                10+ yıl
              </p>
              <p className="mt-4 text-stone-500 font-medium">
                Ortalama tanı gecikmesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          4. BENTO GRİD — Rehber kartları
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-800">
              Kapsamlı Lip&ouml;dem Rehberi
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
              İhtiyacınız olan her bilgi, bilimsel kaynaklı ve T&uuml;rk&ccedil;e.
            </p>
          </div>

          {/* Bento grid — 2 large + 4 small */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[minmax(200px,auto)]">
            {/* Large card 1 — Tanı */}
            <Link
              href="/lipodem-nedir"
              className="group sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #F0FDFA, #CCFBF1)" }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-teal-600/10 flex items-center justify-center mb-6">
                  <Activity className="w-7 h-7 text-teal-700" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 group-hover:text-teal-700 transition-colors">
                  Tanı &amp; Farkındalık
                </h3>
                <p className="mt-3 text-stone-500 text-base leading-relaxed max-w-sm">
                  Lip&ouml;dem nedir, nasıl anlaşılır, evreleri nelerdir? Belirtilerinizi tanıyın, doğru tanıya ulaşın.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-teal-700 font-semibold text-sm group-hover:gap-2 transition-all">
                Keşfet <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Large card 2 — Tedavi */}
            <Link
              href="/lipodem-tedavisi"
              className="group sm:col-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #FFF1F2, #FFE4E6)" }}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-rose-600/10 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 group-hover:text-rose-700 transition-colors">
                  Tedavi Yol Haritası
                </h3>
                <p className="mt-3 text-stone-500 text-base leading-relaxed max-w-sm">
                  Konservatif tedaviden cerrahiye t&uuml;m se&ccedil;enekler. Hangi tedavi sizin i&ccedil;in doğru?
                </p>
              </div>
              <span className="mt-6 inline-flex items-center text-rose-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Keşfet <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Small card — Beslenme */}
            <Link
              href="/lipodem-beslenme"
              className="group rounded-3xl p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              style={{ background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-amber-600/10 flex items-center justify-center mb-4">
                <Utensils className="w-5.5 h-5.5 text-amber-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                Beslenme
              </h3>
              <p className="mt-1.5 text-stone-400 text-sm leading-relaxed flex-1">
                Anti-inflamatuar beslenme rehberi
              </p>
              <ArrowRight className="w-4 h-4 text-amber-600 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            {/* Small card — Egzersiz */}
            <Link
              href="/lipodem-egzersiz"
              className="group rounded-3xl p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              style={{ background: "linear-gradient(135deg, #F0FDFA, #D1FAE5)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-600/10 flex items-center justify-center mb-4">
                <Dumbbell className="w-5.5 h-5.5 text-emerald-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:text-emerald-700 transition-colors">
                Egzersiz
              </h3>
              <p className="mt-1.5 text-stone-400 text-sm leading-relaxed flex-1">
                Lip&ouml;deme uygun hareket programları
              </p>
              <ArrowRight className="w-4 h-4 text-emerald-600 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            {/* Small card — Ruh Sağlığı */}
            <Link
              href="/lipodem-ruh-sagligi"
              className="group rounded-3xl p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              style={{ background: "linear-gradient(135deg, #FAF5FF, #F3E8FF)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-purple-600/10 flex items-center justify-center mb-4">
                <Brain className="w-5.5 h-5.5 text-purple-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:text-purple-700 transition-colors">
                Ruh Sağlığı
              </h3>
              <p className="mt-1.5 text-stone-400 text-sm leading-relaxed flex-1">
                Psikolojik destek ve başa &ccedil;ıkma
              </p>
              <ArrowRight className="w-4 h-4 text-purple-600 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>

            {/* Small card — Türkiye Rehberi */}
            <Link
              href="/lipodem-turkiye-rehberi"
              className="group rounded-3xl p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
              style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)" }}
            >
              <div className="w-11 h-11 rounded-xl bg-sky-600/10 flex items-center justify-center mb-4">
                <MapPin className="w-5.5 h-5.5 text-sky-700" />
              </div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:text-sky-700 transition-colors">
                T&uuml;rkiye Rehberi
              </h3>
              <p className="mt-1.5 text-stone-400 text-sm leading-relaxed flex-1">
                Şehir bazlı klinikler ve SGK bilgisi
              </p>
              <ArrowRight className="w-4 h-4 text-sky-600 mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          5. ARAÇLAR — Glassmorphic featured card
         ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-teal-100/40 blur-[80px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[250px] h-[250px] rounded-full bg-rose-100/30 blur-[80px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-800">
              Size &ouml;zel ara&ccedil;larımız
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
              İnteraktif ara&ccedil;larla kendi durumunuzu değerlendirin.
            </p>
          </div>

          {/* Featured tool — Semptom Testi (glassmorphic) */}
          <Link
            href="/araclar/semptom-testi"
            className="group block rounded-3xl p-8 md:p-10 mb-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-white/60 relative overflow-hidden"
            style={{ background: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-teal-600/10 flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-8 h-8 text-teal-700" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-stone-800 group-hover:text-teal-700 transition-colors">
                    Semptom Testi
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-teal-600/10 text-teal-700 text-xs font-semibold uppercase tracking-wider">
                    &Uuml;cretsiz
                  </span>
                </div>
                <p className="text-stone-500 text-base">
                  12 soruluk bilimsel test ile lip&ouml;dem risk seviyenizi &ouml;ğrenin. Sadece 2 dakika.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-teal-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                Teste Başla <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Other tools — 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Evre Değerlendirme",
                desc: "Lipödem evrenizi öğrenin",
                href: "/araclar/evre-degerlendirme",
              },
              {
                icon: MapPin,
                title: "Klinik Bulucu",
                desc: "Size en yakın uzman klinikleri bulun",
                href: "/araclar/klinik-bulucu",
              },
              {
                icon: BookOpen,
                title: "Maliyet Hesaplayıcı",
                desc: "Tedavi maliyetlerini karşılaştırın",
                href: "/araclar/maliyet-hesaplayici",
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-stone-100 p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-50 transition-colors">
                  <tool.icon className="w-6 h-6 text-stone-400 group-hover:text-teal-600 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-stone-800 group-hover:text-teal-700 transition-colors">
                  {tool.title}
                </h3>
                <p className="mt-1.5 text-stone-400 text-sm">
                  {tool.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          6. HASTA HİKAYELERİ — Testimonials
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-800">
              Gerçek Hikayeler
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
              Lip&ouml;demle yaşayan kadınların deneyimleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Yıllardır neden bacaklarımın incelemediğini anlayamıyordum. Bu platformdaki bilgiler sayesinde doğru tanıya ulaştım.",
                name: "Ayşe G.",
                location: "İstanbul",
                stage: "Evre 2",
                bg: "#FFF7ED",
              },
              {
                quote: "Doktorlara gidip gidip hep aynı cevabı alıyordum: 'Daha çok spor yap.' Burada ilk kez gerçekten anlaşıldığımı hissettim.",
                name: "Zeynep K.",
                location: "Ankara",
                stage: "Evre 1",
                bg: "#FFF1F2",
              },
              {
                quote: "Tedavi seçeneklerini bu kadar açık ve anlaşılır anlatan başka bir kaynak bulamadım. Artık ne yapacağımı biliyorum.",
                name: "Elif M.",
                location: "İzmir",
                stage: "Evre 3",
                bg: "#FAF5FF",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl p-8 border border-stone-100 transition-all duration-300 hover:shadow-md"
                style={{ background: testimonial.bg }}
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-serif text-stone-700 text-base leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-5 border-t border-stone-200/60">
                  <p className="font-semibold text-stone-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-stone-400 text-sm mt-0.5">
                    {testimonial.location} &middot; {testimonial.stage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          7. LIPÖDEM NEDİR? — Kısa bilgi
         ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "#FAFAF9" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Temel Bilgi
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800 leading-tight">
                Lip&ouml;dem nedir?
              </h2>
              <p className="mt-5 text-stone-500 text-base leading-relaxed">
                Lip&ouml;dem, v&uuml;cudun belirli b&ouml;lgelerinde &mdash; &ouml;zellikle bacaklarda ve kolllarda &mdash; yağ dokusunun anormal biriktiği kronik bir hastalıktır. Diyet ve egzersizle iyileşmez. Genetik k&ouml;kenlidir ve &ccedil;oğunlukla kadınları etkiler.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Dünyada her 10 kadından 1'ini etkiler",
                  "Hormon değişikliklerinde tetiklenir",
                  "Doğru tanıyla yönetilebilir",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-stone-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/lipodem-nedir"
                className="group inline-flex items-center gap-2 mt-8 text-teal-700 font-semibold hover:text-teal-600 transition-colors"
              >
                Detaylı bilgi edinin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, label: "Kronik hastalık", desc: "Yaşam boyu yönetim gerektirir" },
                { icon: Heart, label: "Genetik kökenli", desc: "Sizin hatanız değil" },
                { icon: TrendingUp, label: "İlerleyici", desc: "Erken tanı çok önemli" },
                { icon: Users, label: "Çok yaygın", desc: "370M+ kadın etkileniyor" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-stone-100 p-5 hover:shadow-sm transition-all"
                >
                  <item.icon className="w-6 h-6 text-teal-600 mb-3" />
                  <p className="font-semibold text-stone-800 text-sm">{item.label}</p>
                  <p className="text-stone-400 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          8. SÜREÇ — Nasıl çalışır
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-800">
              3 adımda yolculuğunuz
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
              Doğru bilgiye ulaşmak hi&ccedil; bu kadar kolay olmamıştı.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                step: "01",
                title: "Semptomlarınızı Değerlendirin",
                desc: "Ücretsiz semptom testi ile lipödem risk seviyenizi öğrenin. Sadece 2 dakika.",
                color: "teal",
              },
              {
                step: "02",
                title: "Bilgilenin",
                desc: "Bilimsel kaynaklı rehberlerimizle hastalığınızı ve tedavi seçeneklerinizi tanıyın.",
                color: "purple",
              },
              {
                step: "03",
                title: "Harekete Geçin",
                desc: "Klinik bulucu ile size en yakın uzmanı bulun. Doğru tedaviye bugün başlayın.",
                color: "rose",
              },
            ].map((item) => {
              const colorMap: Record<string, { bg: string; text: string; num: string }> = {
                teal: { bg: "bg-teal-50", text: "text-teal-700", num: "text-teal-200" },
                purple: { bg: "bg-purple-50", text: "text-purple-700", num: "text-purple-200" },
                rose: { bg: "bg-rose-50", text: "text-rose-700", num: "text-rose-200" },
              }
              const colors = colorMap[item.color]
              return (
                <div key={item.step} className="text-center md:text-left">
                  <p className={`text-7xl md:text-8xl font-bold ${colors.num} leading-none mb-4`}>
                    {item.step}
                  </p>
                  <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          9. GÜVEN SİNYALLERİ
         ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: "#FAFAF9" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { icon: Shield, title: "Bilimsel kaynaklı", desc: "Tüm içerikler akademik araştırmalara dayalı" },
              { icon: BookOpen, title: "20+ araştırma", desc: "Peer-reviewed makalelere referans" },
              { icon: Users, title: "Bağımsız platform", desc: "Hiçbir kliniğe bağlı değiliz" },
              { icon: CheckCircle, title: "Uzman incelemeli", desc: "İçerikler sağlık profesyonellerince doğrulandı" },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white border border-stone-100 shadow-sm flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <p className="text-sm font-bold text-stone-800">
                  {item.title}
                </p>
                <p className="text-xs text-stone-400 mt-1 max-w-[180px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          10. NEWSLETTER CTA — Sıcak arka plan
         ────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #FEF2F2 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-rose-100/40 blur-[80px]" />
          <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] rounded-full bg-teal-100/30 blur-[80px]" />
        </div>
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/80 border border-stone-200/60 shadow-sm flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-teal-600" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-800">
            Haftalık lip&ouml;dem bilgisi,
            <br className="hidden sm:block" />
            doğrudan e-postanıza
          </h2>
          <p className="mt-4 text-stone-500 max-w-lg mx-auto">
            En yeni araştırmalar, pratik ipuçları ve topluluk haberleri her hafta
            gelen kutunuzda.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white border border-stone-200 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all shadow-sm"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-teal-700 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Abone Ol
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-stone-400">
            <Shield className="w-3.5 h-3.5" />
            Bilgileriniz gizlidir. Spam yok. İstediğiniz zaman ayrılabilirsiniz.
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          STICKY MOBİL CTA BAR
         ────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/90 backdrop-blur-lg border-t border-stone-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <Link
          href="/araclar/semptom-testi"
          className="flex items-center justify-center gap-2 w-full bg-teal-700 text-white py-3.5 rounded-full font-semibold text-sm shadow-md"
        >
          <ClipboardCheck className="w-4.5 h-4.5" />
          Semptom Testini &Ccedil;&ouml;z
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-[68px] md:hidden" />
    </>
  )
}
