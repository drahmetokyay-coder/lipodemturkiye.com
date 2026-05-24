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
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────
          HERO — Full-viewport editorial section
         ────────────────────────────────────────── */}
      <section className="relative min-h-[calc(100vh-4rem)] bg-surface-dark overflow-hidden flex items-center">
        {/* Decorative organic blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-[500px] h-[600px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-gradient-to-br from-emerald-600/20 to-teal-900/5 animate-blob" />
          <div className="absolute top-1/3 right-[8%] w-[380px] h-[420px] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-emerald-500/15 to-green-800/5 animate-blob-delayed" />
          <div className="absolute bottom-[8%] right-[18%] w-[280px] h-[320px] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] bg-gradient-to-b from-teal-400/10 to-emerald-950/5 animate-blob" />
          <div className="absolute top-[12%] right-[28%] w-36 h-36 rounded-full bg-purple-500/8 animate-pulse-slow" />
          <div className="absolute bottom-[30%] right-[40%] w-24 h-24 rounded-full bg-emerald-400/6 animate-float" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* Floating stat circles — left column (like reference vitamin badges) */}
        <div className="hidden lg:flex flex-col gap-5 absolute left-6 xl:left-10 top-1/2 -translate-y-1/2 z-10">
          <div className="w-[72px] h-[72px] rounded-full border border-emerald-400/30 bg-emerald-950/50 backdrop-blur-sm flex flex-col items-center justify-center animate-float shadow-[0_0_20px_rgba(52,211,153,0.1)]">
            <span className="text-emerald-300 text-sm font-extrabold leading-none">370M</span>
            <span className="text-emerald-500/60 text-[9px] mt-0.5">kadın</span>
          </div>
          <div className="w-16 h-16 rounded-full border border-purple-400/30 bg-purple-950/50 backdrop-blur-sm flex flex-col items-center justify-center animate-float-delayed shadow-[0_0_20px_rgba(192,132,252,0.1)]">
            <span className="text-purple-300 text-sm font-extrabold leading-none">%51</span>
            <span className="text-purple-500/60 text-[9px] mt-0.5">farkındalık</span>
          </div>
          <div className="w-14 h-14 rounded-full border border-amber-400/30 bg-amber-950/50 backdrop-blur-sm flex flex-col items-center justify-center animate-float shadow-[0_0_20px_rgba(251,191,36,0.08)]">
            <span className="text-amber-300 text-xs font-extrabold leading-none">10+</span>
            <span className="text-amber-500/60 text-[8px] mt-0.5">yıl</span>
          </div>
          <div className="w-12 h-12 rounded-full border border-rose-400/30 bg-rose-950/50 backdrop-blur-sm flex flex-col items-center justify-center animate-float-delayed shadow-[0_0_20px_rgba(251,113,133,0.08)]">
            <span className="text-rose-300 text-[11px] font-extrabold leading-none">1/10</span>
          </div>
        </div>

        {/* Main hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 lg:pl-28 xl:pl-32 w-full py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            {/* Mobile stat badges */}
            <div className="flex flex-wrap gap-2.5 mb-8 lg:hidden animate-fade-in">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-emerald-500/20 bg-emerald-950/40 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 text-xs font-medium">370M+ kadın</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-purple-500/20 bg-purple-950/40 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span className="text-purple-300 text-xs font-medium">%51 farkındalık</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-amber-500/20 bg-amber-950/40 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-amber-300 text-xs font-medium">10+ yıl gecikme</span>
              </div>
            </div>

            {/* Massive headline */}
            <h1 className="animate-fade-in-up">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white leading-[0.92] tracking-tight">
                Bedenini
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.92] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mt-1">
                Anla.
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold text-white/90 leading-[0.92] tracking-tight mt-3">
                Hayatını
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.92] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 mt-1">
                Geri Al.
              </span>
            </h1>

            <p className="mt-8 text-base md:text-lg text-emerald-100/50 max-w-lg leading-relaxed animate-fade-in-up-d1">
              T&uuml;rkiye&apos;nin ilk kapsamlı lip&ouml;dem hasta platformu. Bilimsel bilgi,
              interaktif ara&ccedil;lar, uzman klinik rehberi ve topluluk desteği.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up-d2">
              <Link
                href="/araclar/semptom-testi"
                className="group inline-flex items-center justify-center gap-2.5 bg-emerald-500 text-surface-darkest px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]"
              >
                Semptom Testini Başlat
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/lipodem-nedir"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/90 px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-white/5 hover:border-white/25 transition-all duration-300"
              >
                Lip&ouml;dem Nedir?
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-2">
            <div className="w-1 h-2.5 bg-white/30 rounded-full" />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          EMPATİ — Duygusal bağ kurma
         ────────────────────────────────────────── */}
      <section className="bg-surface-darker py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Size de mi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              &quot;kilo ver&quot;
            </span>{" "}
            diyorlar?
          </h2>
          <p className="mt-8 text-lg md:text-xl text-emerald-100/40 max-w-2xl mx-auto leading-relaxed italic">
            Yıllardır diyet yapıyorsunuz ama bacaklarınız incelmiyor.
            &Uuml;st bedeniniz zayıflıyor, alt bedeniniz aynı kalıyor.
            Doktorlar &quot;daha &ccedil;ok hareket et&quot; diyor ama hi&ccedil;bir şey değişmiyor.
            Kendinizi su&ccedil;luyorsunuz.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-emerald-500/30" />
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Bu sizin hatanız değil.
            </p>
            <div className="h-px w-12 bg-emerald-500/30" />
          </div>
          <p className="mt-6 text-base text-emerald-100/30">
            Lip&ouml;dem, genetik bir hastalıktır. Diyet ve egzersizle ge&ccedil;mez.
            Ama doğru bilgiyle y&ouml;netilebilir.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          İSTATİSTİKLER — Büyük rakamlar
         ────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-card/50 backdrop-blur-sm rounded-2xl border border-emerald-500/10 p-8 md:p-10 text-center group hover:border-emerald-500/25 transition-all duration-500">
              <p className="text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-500 group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-500">
                370M+
              </p>
              <p className="mt-4 text-emerald-100/40 font-medium">
                D&uuml;nya genelinde etkilenen kadın
              </p>
            </div>
            <div className="bg-surface-card/50 backdrop-blur-sm rounded-2xl border border-purple-500/10 p-8 md:p-10 text-center group hover:border-purple-500/25 transition-all duration-500">
              <p className="text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-500 group-hover:drop-shadow-[0_0_20px_rgba(192,132,252,0.3)] transition-all duration-500">
                %51
              </p>
              <p className="mt-4 text-emerald-100/40 font-medium">
                T&uuml;rk doktorlarının farkındalık oranı
              </p>
            </div>
            <div className="bg-surface-card/50 backdrop-blur-sm rounded-2xl border border-amber-500/10 p-8 md:p-10 text-center group hover:border-amber-500/25 transition-all duration-500">
              <p className="text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-500 group-hover:drop-shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-500">
                10+ yıl
              </p>
              <p className="mt-4 text-emerald-100/40 font-medium">
                Ortalama tanı gecikmesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          KAPSAMLI REHBER — 6 kart grid
         ────────────────────────────────────────── */}
      <section className="bg-surface-darker py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Kapsamlı Lip&ouml;dem Rehberi
            </h2>
            <p className="mt-4 text-emerald-100/35 text-lg max-w-xl mx-auto">
              İhtiyacınız olan her bilgi, bilimsel kaynaklı ve T&uuml;rk&ccedil;e.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Tanı & Farkındalık",
                desc: "Lipödem nedir, nasıl anlaşılır, evreleri nelerdir?",
                href: "/lipodem-nedir",
                color: "emerald",
              },
              {
                icon: Heart,
                title: "Tedavi Yol Haritası",
                desc: "Konservatif tedaviden cerrahiye tüm seçenekler.",
                href: "/lipodem-tedavisi",
                color: "rose",
              },
              {
                icon: Utensils,
                title: "Beslenme",
                desc: "Anti-inflamatuar beslenme ve lipödem diyeti.",
                href: "/lipodem-beslenme",
                color: "amber",
              },
              {
                icon: Dumbbell,
                title: "Egzersiz",
                desc: "Lipödeme uygun hareket ve egzersiz programları.",
                href: "/lipodem-egzersiz",
                color: "teal",
              },
              {
                icon: Brain,
                title: "Ruh Sağlığı",
                desc: "Psikolojik destek, beden imajı ve başa çıkma.",
                href: "/lipodem-ruh-sagligi",
                color: "purple",
              },
              {
                icon: MapPin,
                title: "Türkiye Rehberi",
                desc: "Şehir bazlı klinikler, doktorlar ve SGK bilgisi.",
                href: "/lipodem-turkiye-rehberi",
                color: "sky",
              },
            ].map((card) => {
              const colorMap: Record<string, string> = {
                emerald:
                  "border-emerald-500/10 hover:border-emerald-500/30 [&_.icon-ring]:bg-emerald-500/15 [&_.icon-ring]:text-emerald-400 [&_.card-arrow]:text-emerald-400",
                rose: "border-rose-500/10 hover:border-rose-500/30 [&_.icon-ring]:bg-rose-500/15 [&_.icon-ring]:text-rose-400 [&_.card-arrow]:text-rose-400",
                amber:
                  "border-amber-500/10 hover:border-amber-500/30 [&_.icon-ring]:bg-amber-500/15 [&_.icon-ring]:text-amber-400 [&_.card-arrow]:text-amber-400",
                teal: "border-teal-500/10 hover:border-teal-500/30 [&_.icon-ring]:bg-teal-500/15 [&_.icon-ring]:text-teal-400 [&_.card-arrow]:text-teal-400",
                purple:
                  "border-purple-500/10 hover:border-purple-500/30 [&_.icon-ring]:bg-purple-500/15 [&_.icon-ring]:text-purple-400 [&_.card-arrow]:text-purple-400",
                sky: "border-sky-500/10 hover:border-sky-500/30 [&_.icon-ring]:bg-sky-500/15 [&_.icon-ring]:text-sky-400 [&_.card-arrow]:text-sky-400",
              }
              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`group bg-surface-card/40 backdrop-blur-sm rounded-2xl border p-6 md:p-8 transition-all duration-300 hover:bg-surface-card/70 ${colorMap[card.color]}`}
                >
                  <div className="icon-ring w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-emerald-100/30 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                  <span className="card-arrow mt-5 inline-flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                    Keşfet <ArrowRight className="w-4 h-4 ml-1.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          ARAÇLAR — İnteraktif araçlar
         ────────────────────────────────────────── */}
      <section className="bg-surface-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Size &ouml;zel ara&ccedil;larımız
            </h2>
            <p className="mt-4 text-emerald-100/35 text-lg max-w-xl mx-auto">
              İnteraktif ara&ccedil;larla kendi durumunuzu değerlendirin.
            </p>
          </div>

          {/* Featured tool — Semptom Testi */}
          <Link
            href="/araclar/semptom-testi"
            className="group block bg-gradient-to-br from-emerald-900/40 to-surface-card/60 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-8 md:p-10 mb-6 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(52,211,153,0.08)]"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center shrink-0">
                <ClipboardCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-200 transition-colors">
                    Semptom Testi
                  </h3>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                    &Uuml;cretsiz
                  </span>
                </div>
                <p className="text-emerald-100/40 text-base">
                  12 soruluk bilimsel test ile lip&ouml;dem risk seviyenizi &ouml;ğrenin. Sadece 2 dakika.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-emerald-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
                className="group bg-surface-card/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6 text-center hover:border-emerald-500/20 hover:bg-surface-card/60 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/10 transition-colors">
                  <tool.icon className="w-6 h-6 text-emerald-100/40 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-white group-hover:text-emerald-200 transition-colors">
                  {tool.title}
                </h3>
                <p className="mt-1.5 text-emerald-100/30 text-sm">
                  {tool.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          GÜVEN SİNYALLERİ
         ────────────────────────────────────────── */}
      <section className="bg-surface-darker py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {[
              { icon: Shield, text: "Bilimsel kaynaklı" },
              { icon: BookOpen, text: "20+ peer-reviewed araştırma" },
              { icon: Users, text: "Bağımsız platform" },
              { icon: CheckCircle, text: "Uzman incelemeli" },
            ].map((item) => (
              <div key={item.text} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-sm font-semibold text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          NEWSLETTER CTA
         ────────────────────────────────────────── */}
      <section className="relative bg-surface-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
        </div>
        <div className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7 text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Haftalık lip&ouml;dem bilgisi,
            <br className="hidden sm:block" />
            doğrudan e-postanıza
          </h2>
          <p className="mt-4 text-emerald-100/35 max-w-lg mx-auto">
            En yeni araştırmalar, pratik ipuçları ve topluluk haberleri her hafta
            gelen kutunuzda.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full sm:flex-1 px-5 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-emerald-500 text-surface-darkest px-7 py-3.5 rounded-full font-bold hover:bg-emerald-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] whitespace-nowrap"
            >
              Abone Ol
            </button>
          </form>
          <p className="mt-4 text-xs text-emerald-100/20">
            Bilgileriniz gizlidir. Spam yok. İstediğiniz zaman ayrılabilirsiniz.
          </p>
        </div>
      </section>
    </>
  )
}
