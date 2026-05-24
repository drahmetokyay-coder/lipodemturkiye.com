import Link from "next/link"
import { HeroBackgroundVideo } from "@/components/marketing/hero-video"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
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
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ──────────────────────────────────────────
          SECTION 1 - HERO
         ────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background video */}
        <HeroBackgroundVideo />

        {/* Light overlay -- video gorunsun ama beyaz gecis */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-white/90 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left -- text */}
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-[#1a1a2e] animate-fade-in-up">
                Lip&ouml;dem hakkında bilmeniz gereken her şey
              </h1>

              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed animate-fade-in-up-d1">
                T&uuml;rkiye&apos;nin ilk kapsamlı lip&ouml;dem platformu. Bilimsel kaynaklı bilgi, interaktif ara&ccedil;lar ve size &ouml;zel rehberler.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up-d2">
                <Link
                  href="/araclar/semptom-testi"
                  className="inline-flex items-center justify-center gap-2.5 bg-teal-600 text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-teal-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Semptom Testini &Ccedil;&ouml;z
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lipodem-nedir"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-stone-600 border border-stone-200 hover:bg-stone-50 hover:border-stone-300 transition-all duration-300"
                >
                  Lip&ouml;dem Nedir?
                </Link>
              </div>

              {/* Stats inline */}
              <div className="mt-12 flex items-center gap-8 animate-fade-in-up-d3">
                {[
                  { value: "370M+", label: "etkilenen kadın" },
                  { value: "%51", label: "doktor farkındalığı" },
                  { value: "10+", label: "yıl tanı gecikmesi" },
                ].map((stat) => (
                  <div key={stat.label} className="text-left">
                    <p className="text-lg md:text-xl font-bold text-stone-700 tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right -- empty space for video to show through */}
            <div className="hidden lg:block" aria-hidden="true" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-3">
          <span className="text-[10px] text-stone-400 uppercase tracking-[0.2em]">Keşfet</span>
          <div className="w-6 h-10 rounded-full border-2 border-stone-300 flex items-start justify-center p-2">
            <div className="w-1 h-2.5 bg-stone-400 rounded-full" style={{ animation: "scroll-bounce 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 2 - EMPATHY BAR
         ────────────────────────────────────────── */}
      <section className="bg-teal-600 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-white text-sm md:text-base font-medium leading-relaxed">
            Her 9 kadından 1&apos;ini etkileyen lip&ouml;dem, doktorların yarısı tarafından bile tanınmıyor.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 3 - "BU NEDİR?" ACIKLAMA
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Top -- Two column text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
                Lip&ouml;dem nedir?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-stone-500 text-base md:text-lg leading-relaxed">
                Lip&ouml;dem, v&uuml;cudun belirli b&ouml;lgelerinde &mdash; &ouml;zellikle bacaklarda ve kollarda &mdash;
                yağ dokusunun anormal biriktiği kronik bir hastalıktır. Diyet ve egzersizle ge&ccedil;mez.
                Genetik k&ouml;kenlidir ve neredeyse sadece kadınları etkiler. Doğru bilgiyle y&ouml;netilebilir,
                erken tanı &ccedil;ok &ouml;nemlidir.
              </p>
            </ScrollReveal>
          </div>

          {/* Gradient line separator */}
          <div className="line-gradient my-14 md:my-20" />

          {/* Bottom -- 4 feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Clock, title: "Kronik", desc: "Yaşam boyu yönetim gerektirir" },
              { icon: Heart, title: "Genetik", desc: "Sizin hatanız değil, kalıtımsal" },
              { icon: TrendingUp, title: "İlerleyici", desc: "Erken müdahale çok önemli" },
              { icon: Shield, title: "Tedavi edilebilir", desc: "Doğru yaklaşımla kontrol altına alınır" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white border border-stone-100 rounded-xl p-6 shadow-soft card-hover">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-base font-semibold text-stone-800">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-400 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 4 - BELİRTİLER (numarali adimlar)
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e]">
                Belirtileri tanıyın
              </h2>
              <p className="mt-4 text-stone-400 text-base md:text-lg max-w-xl mx-auto">
                Lip&ouml;demin en yaygın 5 belirtisi.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-12 md:space-y-16">
            {[
              {
                num: "01",
                title: "Orantısız yağ birikimi",
                desc: "Bacak ve kalçalarda belirgin, üst bedene oranla çok fazla yağ birikimi. Ayak bilekleri etkilenmez, belirgin bir 'bilezik' oluşur.",
              },
              {
                num: "02",
                title: "Diyete dirençli yapı",
                desc: "Sıkı diyet ve egzersize rağmen etkilenen bölgelerdeki yağ erimez. Üst beden zayıflarken alt beden aynı kalır.",
              },
              {
                num: "03",
                title: "Ağrı ve hassasiyet",
                desc: "Etkilenen bölgelerde basınç ağrısı, dokunma hassasiyeti ve yorgunluk hissi. Gün sonunda bacaklarda ağırlık.",
              },
              {
                num: "04",
                title: "Kolay morarma",
                desc: "Hafif temasla bile morluklar oluşur. Bu, doku altındaki damarsal kırılganlığın bir işaretidir.",
              },
              {
                num: "05",
                title: "Simetrik tutulum",
                desc: "Her iki bacak veya kol eşit şekilde etkilenir. Tek taraflı şişlik lipödem değil, lenfödem işareti olabilir.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 100}>
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-serif text-5xl md:text-6xl font-bold text-teal-100 shrink-0 leading-none select-none">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-stone-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-stone-400 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 5 - ARACLAR
         ────────────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e]">
                Size &ouml;zel ara&ccedil;larımız
              </h2>
              <p className="mt-4 text-stone-400 text-base md:text-lg max-w-xl mx-auto">
                İnteraktif ara&ccedil;larla kendi durumunuzu değerlendirin.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured card -- Semptom Testi */}
          <ScrollReveal delay={100}>
            <Link
              href="/araclar/semptom-testi"
              className="group block rounded-xl bg-white border border-stone-100 shadow-soft card-hover overflow-hidden mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold">
                      2 dakika &middot; 12 soru
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-stone-800 group-hover:text-teal-700 transition-colors">
                    Semptom Testi
                  </h3>
                  <p className="mt-3 text-stone-400 text-sm md:text-base leading-relaxed">
                    12 soruluk bilimsel test ile lip&ouml;dem risk seviyenizi &ouml;ğrenin. &Uuml;cretsiz, kayıt gerekmez.
                  </p>
                  <span className="mt-5 inline-flex items-center text-teal-600 font-semibold text-sm group-hover:gap-2.5 gap-1.5 transition-all">
                    Teste Başla <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="bg-teal-50 flex items-center justify-center p-10 md:p-12">
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-soft flex items-center justify-center">
                    <ClipboardCheck className="w-12 h-12 text-teal-600" />
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* 3 smaller tool cards */}
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
                  className="group block rounded-xl bg-white border border-stone-100 p-6 shadow-soft card-hover"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-50 flex items-center justify-center mb-4 group-hover:bg-teal-50 transition-colors">
                    <tool.icon className="w-5 h-5 text-stone-400 group-hover:text-teal-600 transition-colors" />
                  </div>
                  <h3 className="text-base font-semibold text-stone-800 group-hover:text-teal-700 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="mt-1.5 text-stone-400 text-sm">
                    {tool.desc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 6 - REHBER KARTLARI
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e]">
                Kapsamlı rehberlerimiz
              </h2>
              <p className="mt-4 text-stone-400 text-base md:text-lg max-w-xl mx-auto">
                İhtiyacınız olan her bilgi, bilimsel kaynaklı ve T&uuml;rk&ccedil;e.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                icon: Activity,
                title: "Tanı ve Farkındalık",
                desc: "Lipödem nasıl anlaşılır, evreleri nelerdir?",
                href: "/lipodem-nedir",
                accent: "bg-teal-500",
                delay: 0,
              },
              {
                icon: Heart,
                title: "Tedavi Seçenekleri",
                desc: "Konservatif tedaviden cerrahiye tüm yol haritası.",
                href: "/lipodem-tedavisi",
                accent: "bg-purple-500",
                delay: 100,
              },
              {
                icon: Utensils,
                title: "Beslenme Rehberi",
                desc: "Anti-inflamatuar beslenme ve pratik tarifler.",
                href: "/lipodem-beslenme",
                accent: "bg-amber-500",
                delay: 200,
              },
              {
                icon: Dumbbell,
                title: "Egzersiz Programı",
                desc: "Lipödeme uygun hareket ve spor rehberi.",
                href: "/lipodem-egzersiz",
                accent: "bg-rose-500",
                delay: 300,
              },
              {
                icon: Brain,
                title: "Ruh Sağlığı",
                desc: "Psikolojik destek ve başa çıkma stratejileri.",
                href: "/lipodem-ruh-sagligi",
                accent: "bg-blue-500",
                delay: 400,
              },
              {
                icon: MapPin,
                title: "T&uuml;rkiye Rehberi",
                desc: "Şehir bazlı klinikler ve SGK bilgisi.",
                href: "/lipodem-turkiye-rehberi",
                accent: "bg-emerald-500",
                delay: 500,
              },
            ].map((item) => (
              <ScrollReveal key={item.href} delay={item.delay}>
                <Link
                  href={item.href}
                  className="group block rounded-xl bg-white border border-stone-100 p-6 shadow-soft card-hover relative overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${item.accent}`} />

                  <div className="w-10 h-10 rounded-lg bg-stone-50 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-stone-500" />
                  </div>
                  <h3 className="text-base font-semibold text-stone-800 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-stone-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    Keşfet <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 7 - HASTA HİKAYELERİ
         ────────────────────────────────────────── */}
      <section className="bg-stone-50 py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e]">
                Yalnız değilsiniz
              </h2>
              <p className="mt-4 text-stone-400 text-base md:text-lg max-w-xl mx-auto">
                Lip&ouml;demle yaşayan kadınların deneyimleri.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Yıllardır neden bacaklarımın incelemediğini anlayamıyordum. Bu platformdaki bilgiler sayesinde doğru tanıya ulaştım.",
                name: "A.G., İstanbul",
                stage: "Evre 2",
                delay: 0,
              },
              {
                quote: "Doktorlara gidip gidip hep aynı cevabı alıyordum: 'Daha çok spor yap.' Burada ilk kez gerçekten anlaşıldığımı hissettim.",
                name: "Z.K., Ankara",
                stage: "Evre 1",
                delay: 150,
              },
              {
                quote: "Tedavi seçeneklerini bu kadar açık ve anlaşılır anlatan başka bir kaynak bulamadım. Artık ne yapacağımı biliyorum.",
                name: "E.M., İzmir",
                stage: "Evre 3",
                delay: 300,
              },
            ].map((testimonial) => (
              <ScrollReveal key={testimonial.name} delay={testimonial.delay}>
                <div className="h-full bg-white rounded-xl border border-stone-100 p-8 shadow-soft card-hover flex flex-col">
                  {/* Quote */}
                  <p className="font-serif text-stone-600 text-base leading-relaxed italic flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <p className="font-semibold text-stone-700 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-stone-400 text-sm mt-0.5">
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
          SECTION 8 - GUVEN SINYALLERİ
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              { icon: Shield, title: "Bilimsel kaynaklı", desc: "Tüm içerikler akademik araştırmalara dayalı", delay: 0 },
              { icon: BookOpen, title: "20+ araştırma", desc: "Peer-reviewed makalelere referans", delay: 100 },
              { icon: Users, title: "Bağımsız platform", desc: "Hiçbir kliniğe bağlı değiliz", delay: 200 },
              { icon: Zap, title: "D&uuml;zenli g&uuml;ncelleme", desc: "İçerikler sürekli güncel tutulur", delay: 300 },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <p className="text-sm font-semibold text-stone-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-400 mt-1.5 max-w-[180px]">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 9 - CTA BANT
         ────────────────────────────────────────── */}
      <section className="bg-teal-700 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Lip&ouml;dem yolculuğunuza bug&uuml;n başlayın
            </h2>
            <div className="mt-8">
              <Link
                href="/araclar/semptom-testi"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-teal-700 transition-all duration-300"
              >
                Semptom Testini &Ccedil;&ouml;z
              </Link>
            </div>
            <p className="mt-5 text-teal-200/80 text-sm">
              &Uuml;cretsiz, 2 dakika, kayıt gerekmez
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 10 - NEWSLETTER
         ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                  Haftalık lip&ouml;dem bilgisi, doğrudan e-postanıza
                </h2>
                <p className="mt-4 text-stone-400 text-base leading-relaxed">
                  En yeni araştırmalar, pratik ipuçları ve topluluk haberleri her hafta gelen kutunuzda.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <form className="flex flex-col sm:flex-row items-stretch gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-5 py-3.5 rounded-lg border border-stone-200 bg-white text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap shadow-sm"
                >
                  Abone Ol
                </button>
              </form>
              <div className="mt-3 flex items-center gap-1.5 text-xs text-stone-400">
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
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/90 backdrop-blur-lg px-4 py-3 border-t border-stone-100 shadow-soft-lg">
        <Link
          href="/araclar/semptom-testi"
          className="flex items-center justify-center gap-2 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold text-sm shadow-sm"
        >
          <ClipboardCheck className="w-4 h-4" />
          Semptom Testini &Ccedil;&ouml;z
        </Link>
      </div>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-[64px] lg:hidden" />
    </>
  )
}
