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
      <section className="relative min-h-screen overflow-hidden flex items-center bg-[#000]">
        {/* Background video -- autoplay loop */}
        <HeroBackgroundVideo />

        {/* Hafif koyu overlay -- metin okunabilirliği */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-20 md:py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left -- text */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.02] tracking-tight text-[#000] animate-fade-in-up uppercase">
                Lip&ouml;dem hakkında bilmeniz gereken her şey
              </h1>

              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed animate-fade-in-up-d1 font-medium">
                T&uuml;rkiye&apos;nin ilk kapsamlı lip&ouml;dem platformu. Bilimsel kaynaklı bilgi, interaktif ara&ccedil;lar ve size &ouml;zel rehberler.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up-d2">
                <Link
                  href="/araclar/semptom-testi"
                  className="btn-pill-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base shadow-sm hover:shadow-md"
                >
                  Semptom Testini &Ccedil;&ouml;z
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/lipodem-nedir"
                  className="btn-pill inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-stone-700 border-2 border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
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
                    <p className="font-display text-3xl md:text-4xl font-black text-[#000] tracking-tight leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-stone-400 mt-1.5 uppercase tracking-wider font-medium">
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
      <section className="bg-[#000] py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-white text-sm md:text-base font-bold leading-relaxed uppercase tracking-wider">
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000] leading-tight uppercase tracking-wide">
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
                <div className="bg-white border border-stone-100 rounded-2xl p-6 shadow-soft card-hover text-center">
                  <div className="w-12 h-12 rounded-full bg-[#000] flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#000] uppercase tracking-wider">{item.title}</h3>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed">{item.desc}</p>
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000] uppercase tracking-wide">
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
                  <span className="font-display text-5xl md:text-7xl font-black text-purple-200 shrink-0 leading-none select-none">
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000] uppercase tracking-wide">
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
              className="group block rounded-2xl bg-[#000] shadow-soft card-hover overflow-hidden mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">
                      2 dakika &middot; 12 soru
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors uppercase tracking-wide">
                    Semptom Testi
                  </h3>
                  <p className="mt-3 text-stone-300 text-sm md:text-base leading-relaxed">
                    12 soruluk bilimsel test ile lip&ouml;dem risk seviyenizi &ouml;ğrenin. &Uuml;cretsiz, kayıt gerekmez.
                  </p>
                  <span className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-[#000] px-6 py-3 rounded-full font-bold text-sm group-hover:bg-purple-100 transition-all w-fit">
                    Teste Başla <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <div className="bg-white/5 flex items-center justify-center p-10 md:p-12">
                  <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center">
                    <ClipboardCheck className="w-12 h-12 text-white" />
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
                  className="group block rounded-2xl bg-white border border-stone-100 p-6 shadow-soft card-hover text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#000] transition-colors">
                    <tool.icon className="w-5 h-5 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#000] group-hover:text-purple-700 transition-colors uppercase tracking-wider">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-stone-400 text-sm">
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000] uppercase tracking-wide">
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
                accent: "bg-purple-500",
                delay: 0,
              },
              {
                icon: Heart,
                title: "Tedavi Seçenekleri",
                desc: "Konservatif tedaviden cerrahiye tüm yol haritası.",
                href: "/lipodem-tedavisi",
                accent: "bg-rose-500",
                delay: 100,
              },
              {
                icon: Utensils,
                title: "Beslenme Rehberi",
                desc: "Anti-inflamatuar beslenme ve pratik tarifler.",
                href: "/lipodem-beslenme",
                accent: "bg-orange-500",
                delay: 200,
              },
              {
                icon: Dumbbell,
                title: "Egzersiz Programı",
                desc: "Lipödeme uygun hareket ve spor rehberi.",
                href: "/lipodem-egzersiz",
                accent: "bg-pink-500",
                delay: 300,
              },
              {
                icon: Brain,
                title: "Ruh Sağlığı",
                desc: "Psikolojik destek ve başa çıkma stratejileri.",
                href: "/lipodem-ruh-sagligi",
                accent: "bg-violet-500",
                delay: 400,
              },
              {
                icon: MapPin,
                title: "T&uuml;rkiye Rehberi",
                desc: "Şehir bazlı klinikler ve SGK bilgisi.",
                href: "/lipodem-turkiye-rehberi",
                accent: "bg-fuchsia-500",
                delay: 500,
              },
            ].map((item) => (
              <ScrollReveal key={item.href} delay={item.delay}>
                <Link
                  href={item.href}
                  className="group block rounded-2xl bg-white border border-stone-100 p-6 shadow-soft card-hover relative overflow-hidden text-center"
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${item.accent}`} />

                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#000] transition-colors">
                    <item.icon className="w-5 h-5 text-stone-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#000] group-hover:text-purple-700 transition-colors uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-stone-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center justify-center gap-1.5 text-[#000] text-sm font-bold group-hover:gap-2.5 transition-all uppercase tracking-wider">
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
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#000] uppercase tracking-wide">
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
                <div className="h-full bg-white rounded-2xl border border-stone-100 p-8 shadow-soft card-hover flex flex-col">
                  {/* Quote */}
                  <p className="font-display text-stone-600 text-base leading-relaxed italic flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Attribution */}
                  <div className="mt-8 pt-6 border-t border-stone-100">
                    <p className="font-display font-bold text-[#000] text-sm uppercase tracking-wider">
                      {testimonial.name}
                    </p>
                    <p className="text-stone-400 text-sm mt-1">
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
                  <div className="w-14 h-14 rounded-full bg-[#000] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-display text-sm font-bold text-[#000] uppercase tracking-wider">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-400 mt-2 max-w-[180px]">
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
      <section className="bg-[#000] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight uppercase tracking-wide">
              Lip&ouml;dem yolculuğunuza bug&uuml;n başlayın
            </h2>
            <div className="mt-8">
              <Link
                href="/araclar/semptom-testi"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-[#000] bg-white hover:bg-purple-100 transition-all duration-300 text-base"
              >
                Semptom Testini &Ccedil;&ouml;z
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="mt-5 text-stone-400 text-sm uppercase tracking-wider">
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
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#000] uppercase tracking-wide">
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
                  className="flex-1 px-6 py-4 rounded-full border-2 border-stone-200 bg-white text-stone-700 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="btn-pill-primary px-8 py-4 whitespace-nowrap shadow-sm text-base"
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
          className="flex items-center justify-center gap-2 w-full bg-[#000] text-white py-3.5 rounded-full font-bold text-sm shadow-sm hover:bg-stone-800 transition-colors"
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
