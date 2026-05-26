import Link from "next/link"
import Image from "next/image"
import { HeroBackgroundVideo } from "@/components/marketing/hero-video"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import { TurkeyMap } from "@/components/marketing/turkey-map"
import { NewsletterForm } from "@/components/marketing/newsletter-form"
import {
  ArrowRight,
  Heart,
  ClipboardCheck,
  BookOpen,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle,
  Stethoscope,
  Sparkles,
  Star,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          1. HERO — Split layout, editorial feel
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[92vh] overflow-hidden bg-white">
        {/* Background video — sağ tarafta görünecek */}
        <HeroBackgroundVideo />

        {/* Sol gradient overlay — metin okunabilirliği */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-gradient-to-r from-white via-white/98 to-white/70 z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-5 md:px-8 lg:px-10 w-full h-full flex items-center py-20 md:py-28 lg:py-0 lg:min-h-[92vh]">
          <div className="max-w-xl">
            {/* Platform badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F5F0] border border-[#1A6B5A]/10 mb-8 animate-fade-in">
              <Sparkles className="w-3.5 h-3.5 text-[#1A6B5A]" />
              <span className="text-[13px] font-medium text-[#1A6B5A]">
                T&uuml;rkiye&apos;nin ilk lip&ouml;dem platformu
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up">
              <span className="block font-display text-[1.65rem] sm:text-3xl font-medium text-[#2D3B36]/70 leading-snug">
                Lip&ouml;dem&apos;de
              </span>
              <span className="block font-display text-[3.2rem] sm:text-6xl md:text-7xl font-bold text-[#1A6B5A] leading-[1.05] -mt-1">
                Yalnız
              </span>
              <span className="block font-display text-[3.2rem] sm:text-6xl md:text-7xl font-bold text-[#1A6B5A] leading-[1.05]">
                Değilsiniz
              </span>
            </h1>

            <p className="mt-6 text-[#6B7B75] text-base sm:text-[17px] leading-relaxed max-w-md animate-fade-in-up-d1">
              Bilimsel kaynaklı bilgi, interaktif ara&ccedil;lar ve ki&#351;iselle&#351;tirilmi&#351;
              rehberlerle lip&ouml;dem yolculuğunuzda yanınızdayız.
            </p>

            {/* Stat pills */}
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up-d2">
              {[
                { val: "9/11", label: "kadın etkileniyor" },
                { val: "370M+", label: "dünyada hasta" },
                { val: "25+", label: "bilimsel kaynak" },
                { val: "%51", label: "doktor farkındalığı" },
              ].map((s) => (
                <div key={s.val} className="flex items-center gap-2.5 bg-white rounded-xl border border-stone-100 shadow-sm px-4 py-2.5">
                  <span className="font-display text-lg font-bold text-[#1A6B5A]">{s.val}</span>
                  <span className="text-[11px] text-[#6B7B75] font-medium leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA group */}
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
                href="/lipodem-nedir"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-[#1A6B5A] border-2 border-[#1A6B5A]/20 hover:border-[#1A6B5A]/40 hover:bg-[#E8F5F0] transition-all duration-300"
              >
                Lip&ouml;dem Nedir?
              </Link>
            </div>

            {/* Quick nav */}
            <div className="mt-6 flex flex-wrap gap-2 animate-fade-in-up-d3">
              {["Semptom Testi", "Klinik Bul", "Tedavi Rehberi", "Beslenme"].map((l) => (
                <Link
                  key={l}
                  href={l === "Semptom Testi" ? "/araclar/semptom-testi" : l === "Klinik Bul" ? "/klinikler" : l === "Tedavi Rehberi" ? "/lipodem-tedavisi" : "/lipodem-beslenme"}
                  className="text-[11px] font-medium text-[#1A6B5A]/70 bg-[#E8F5F0]/60 px-3 py-1.5 rounded-full hover:bg-[#1A6B5A] hover:text-white transition-all duration-200"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 opacity-50">
          <div className="w-5 h-8 rounded-full border-[1.5px] border-[#6B7B75]/40 flex items-start justify-center p-1.5">
            <div className="w-[3px] h-[6px] bg-[#6B7B75]/50 rounded-full" style={{ animation: "scroll-bounce 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          2. TRUST BAR — Empati + güven
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#E8F5F0] py-14 md:py-16 relative overflow-hidden">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#1A6B5A]/5 blur-3xl" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#E8916D]/5 blur-3xl" />
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
          <p className="font-display text-xl md:text-2xl text-[#163832] italic leading-relaxed">
            &ldquo;Diyet yapıyorsunuz ama bacaklarınız incelmiyor. Spor yapıyorsunuz ama hi&ccedil;bir &#351;ey değişmiyor. Kendinizi su&ccedil;luyorsunuz...&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-[#1A6B5A]/25" />
            <p className="text-[#1A6B5A] font-semibold text-base">Bu sizin hatanız değil.</p>
            <div className="h-px w-12 bg-[#1A6B5A]/25" />
          </div>
          <p className="text-[#6B7B75] text-sm mt-3">
            Lip&ouml;dem, diyet ve egzersizle ge&ccedil;meyen genetik k&ouml;kenli bir hastalıktır.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          3. LİPÖDEM NEDİR — Problem/desire
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            <ScrollReveal>
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">LİP&Ouml;DEM NEDİR?</span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] leading-tight mt-3">
                Belirtileri, Evreleri ve Tedavi Se&ccedil;enekleri
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p className="text-[#6B7B75] text-base md:text-[17px] leading-[1.75]">
                Lip&ouml;dem, v&uuml;cudun belirli b&ouml;lgelerinde &mdash; &ouml;zellikle bacaklarda &mdash;
                yağ dokusunun anormal biriktiği kronik bir hastalıktır. Diyetle ge&ccedil;mez,
                genetik k&ouml;kenlidir ve neredeyse yalnızca kadınları etkiler.
              </p>
            </ScrollReveal>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent my-14" />

          {/* Belirtiler */}
          <ScrollReveal>
            <h3 className="font-display text-2xl font-bold text-[#163832] mb-8">Lip&ouml;dem Belirtileri</h3>
          </ScrollReveal>
          <div className="space-y-3">
            {[
              { n: "01", t: "Orantısız yağ birikimi", d: "Bacak ve kalçalarda belirgin, üst bedene oranla çok fazla yağ. Ayak bilekleri etkilenmez." },
              { n: "02", t: "Diyete dirençli yapı", d: "Sıkı diyet ve egzersize rağmen etkilenen bölgelerdeki yağ erimez." },
              { n: "03", t: "Ağrı ve hassasiyet", d: "Basınç ağrısı, dokunma hassasiyeti ve gün sonunda bacaklarda ağırlık hissi." },
              { n: "04", t: "Kolay morarma", d: "Hafif temasla bile morluklar oluşur. Damarsal kırılganlık işareti." },
              { n: "05", t: "Simetrik tutulum", d: "Her iki bacak eşit şekilde etkilenir. Tek taraflılık lenfödem işareti olabilir." },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 70}>
                <div className="flex items-start gap-5 bg-white rounded-2xl p-5 md:p-6 border border-stone-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                  <span className="font-display text-2xl font-bold text-[#1A6B5A]/20 leading-none pt-0.5 select-none">{item.n}</span>
                  <div>
                    <h4 className="font-semibold text-[#163832] text-[15px]">{item.t}</h4>
                    <p className="text-[#6B7B75] text-sm leading-relaxed mt-1">{item.d}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bilimsel kaynak trust */}
          <div className="mt-16">
            <ScrollReveal>
              <p className="text-center text-[13px] font-semibold text-[#1A6B5A] tracking-wider mb-6">BİLİMSEL KAYNAKLARLA Y&Ouml;NETİLİYORUZ</p>
            </ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { icon: BookOpen, t: "20+ araştırma", d: "Peer-reviewed referans" },
                { icon: Stethoscope, t: "Uzman denetimi", d: "Tıbbi kontrol altında" },
                { icon: Shield, t: "Bağımsız", d: "Kliniğe bağlı değiliz" },
                { icon: Zap, t: "Güncel", d: "Sürekli güncellenir" },
              ].map((item, i) => (
                <ScrollReveal key={item.t} delay={i * 60}>
                  <div className="text-center p-4 rounded-xl border border-stone-100 bg-white hover:shadow-sm transition-shadow">
                    <item.icon className="w-5 h-5 text-[#1A6B5A] mx-auto mb-2" />
                    <p className="font-semibold text-[#163832] text-[13px]">{item.t}</p>
                    <p className="text-[11px] text-[#6B7B75] mt-0.5">{item.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          4. SEMPTOM TESTİ — Feature highlight
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="bg-white rounded-3xl shadow-[0_2px_24px_rgba(0,0,0,0.05)] border border-stone-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Sol */}
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">SEMPTOM TESTİ</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-[#163832] mt-3 leading-snug">
                    Riskinizi Değerlendirin
                  </h2>
                  <p className="text-[#6B7B75] text-[15px] leading-relaxed mt-4">
                    12 soruluk bilimsel &ouml;l&ccedil;ekle lip&ouml;dem risk seviyenizi &ouml;ğrenin.
                    Sonu&ccedil;larınızı yazdırıp doktorunuza g&ouml;t&uuml;rebilirsiniz.
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-[13px] text-[#6B7B75]">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 2 dakika</span>
                    <span className="flex items-center gap-1.5"><ClipboardCheck className="w-3.5 h-3.5" /> 12 soru</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5" /> &Uuml;cretsiz</span>
                  </div>
                  <div className="mt-8">
                    <Link href="/araclar/semptom-testi" className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-6 py-3 rounded-xl font-semibold text-[15px] hover:bg-[#15594A] shadow-md shadow-[#1A6B5A]/10 transition-all">
                      Teste Ba&#351;la <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Sağ — test mockup */}
                <div className="bg-gradient-to-br from-[#E8F5F0] to-[#d4ede4] flex items-center justify-center p-8 md:p-12">
                  <div className="w-full max-w-[280px]">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[11px] text-[#6B7B75] font-medium">Soru 3 / 12</span>
                        <div className="relative w-11 h-11">
                          <svg className="w-11 h-11 -rotate-90" viewBox="0 0 40 40">
                            <circle cx="20" cy="20" r="17" fill="none" stroke="#E8F5F0" strokeWidth="3" />
                            <circle cx="20" cy="20" r="17" fill="none" stroke="#1A6B5A" strokeWidth="3" strokeDasharray="106.8" strokeDashoffset="80" strokeLinecap="round" />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#1A6B5A]">25%</span>
                        </div>
                      </div>
                      <p className="text-[13px] font-semibold text-[#163832] leading-snug">Bacaklarınızda dokunmaya kar&#351;ı hassasiyet hissediyor musunuz?</p>
                      <div className="mt-4 space-y-2">
                        <div className="px-4 py-2.5 rounded-xl border-2 border-[#1A6B5A] bg-[#E8F5F0] text-[13px] text-[#1A6B5A] font-medium">Evet, belirgin</div>
                        <div className="px-4 py-2.5 rounded-xl border border-stone-200 text-[13px] text-[#6B7B75]">Bazen</div>
                        <div className="px-4 py-2.5 rounded-xl border border-stone-200 text-[13px] text-[#6B7B75]">Hayır</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. VISUAL HIGHLIGHT — İllüstrasyon
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/hero-illustration.png"
                  alt="Lipödemle yaşayan kadınlar — birlikte güçlüyüz"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority={false}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#163832]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-display text-lg font-semibold drop-shadow-lg">
                    &ldquo;Birlikte daha g&uuml;&ccedil;l&uuml;y&uuml;z&rdquo;
                  </p>
                  <p className="text-white/70 text-sm mt-1">3.000+ kadın bu platformda</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <span className="text-[13px] font-semibold text-[#E8916D] tracking-wider">NEDEN BİZ?</span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] leading-tight mt-3">
                Sadece bilgi değil, ger&ccedil;ek destek
              </h2>
              <p className="text-[#6B7B75] text-base leading-[1.75] mt-5">
                Di&#287;er kaynaklardan farkımız: tarafsızız, bilimsel temelliyiz ve
                t&uuml;m i&ccedil;erikleri hasta perspektifinden yazıyoruz. Hi&ccedil;bir kliniğe
                bağlı değiliz, amacımız sizi doğru bilgiyle g&uuml;&ccedil;lendirmek.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { icon: Shield, t: "Bağımsız ve tarafsız", d: "Hiçbir klinik veya markanın reklamını yapmıyoruz." },
                  { icon: Heart, t: "Hasta odaklı dil", d: "Tıbbi jargon yerine anlaşılır, empatik anlatım." },
                  { icon: TrendingUp, t: "Güncel ve kanıt bazlı", d: "2025 Delphi Konsensüsü ve peer-reviewed kaynaklar." },
                ].map((item) => (
                  <div key={item.t} className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-[18px] h-[18px] text-[#1A6B5A]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#163832] text-[15px]">{item.t}</p>
                      <p className="text-[#6B7B75] text-sm mt-0.5">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          6. KLİNİK BULUCU — Harita
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">KLİNİK BULUCU</span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
                T&uuml;rkiye Genelinde Tedavi Merkezleri
              </h2>
              <p className="mt-4 text-[#6B7B75] text-base max-w-xl mx-auto">
                Lip&ouml;dem tedavisi sunan klinik ve uzmanları b&ouml;lgenizde ke&#351;fedin.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <TurkeyMap />
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          7. TEDAVİ SÜRECİ — Steps
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[13px] font-semibold text-[#E8916D] tracking-wider">TEDAVİ S&Uuml;RECİ</span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
                3 Adımda Yolculuğunuz
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#1A6B5A] via-[#2D8B73] to-[#E8916D]" />

            {[
              { n: "01", t: "Değerlendirme", d: "Semptom testi ile risk seviyenizi belirleyin ve evre değerlendirmesi yapın.", c: "#1A6B5A" },
              { n: "02", t: "Bilgilenme", d: "Kişiselleştirilmiş rehberler, beslenme planı ve egzersiz önerileri alın.", c: "#2D8B73" },
              { n: "03", t: "Uzman Desteği", d: "Bölgenizdeki klinik ve doktorlarla bağlantı kurun, tedaviye başlayın.", c: "#E8916D" },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 120}>
                <div className="text-center relative z-10">
                  <div className="w-[88px] h-[88px] rounded-full mx-auto flex items-center justify-center text-white font-display text-2xl font-bold shadow-lg" style={{ backgroundColor: step.c }}>
                    {step.n}
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#163832] mt-6">{step.t}</h3>
                  <p className="text-[#6B7B75] text-sm leading-relaxed mt-2 max-w-[260px] mx-auto">{step.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          8. SAĞLIĞINIZA YATIRIM — Pricing hint
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#FAF7F2] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">PREMIUM</span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
                Sağlığınıza Yatırım Yapın
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-7 h-full flex flex-col">
                <h3 className="font-display text-lg font-bold text-[#163832]">&Uuml;cretsiz</h3>
                <p className="font-display text-3xl font-bold text-[#163832] mt-1">0 TL</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {["Bilgi makaleleri", "Semptom testi", "Klinik bulucu", "Haftalık bülten"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#6B7B75]"><CheckCircle className="w-4 h-4 text-[#1A6B5A] shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link href="/araclar/semptom-testi" className="mt-7 w-full py-3 rounded-xl border-2 border-[#1A6B5A] text-[#1A6B5A] font-semibold text-sm text-center hover:bg-[#E8F5F0] transition-colors block">Hemen Ba&#351;la</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-[#1A6B5A] rounded-2xl shadow-lg p-7 h-full flex flex-col relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#E8916D] text-white text-[11px] font-bold rounded-full">Pop&uuml;ler</div>
                <h3 className="font-display text-lg font-bold text-white mt-1">Premium</h3>
                <div className="flex items-baseline gap-1 mt-1"><span className="font-display text-3xl font-bold text-white">49 TL</span><span className="text-white/50 text-sm">/ay</span></div>
                <p className="text-white/50 text-xs mt-1">Yıllıkta 39 TL/ay</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {["Ücretsiz tüm özellikler", "Beslenme planı", "Egzersiz programı", "Uzman içerikleri", "Öncelikli destek"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/75"><CheckCircle className="w-4 h-4 text-[#93D4BE] shrink-0" />{f}</li>
                  ))}
                </ul>
                <Link href="/premium" className="mt-7 w-full py-3 rounded-xl bg-white text-[#1A6B5A] font-semibold text-sm text-center hover:bg-[#FAF7F2] transition-colors block">Premium&apos;a Ge&ccedil;</Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-[#E8916D] to-[#C75B3F] rounded-2xl shadow-lg p-7 h-full flex flex-col items-center justify-center text-center">
                <Heart className="w-10 h-10 text-white/90 mb-4" />
                <h3 className="font-display text-3xl font-bold text-white leading-tight">G&uuml;nl&uuml;k<br />1.67 TL</h3>
                <p className="text-white/75 text-sm mt-3 max-w-[200px]">Bir &ccedil;ay bardağından az. Sağlığınız i&ccedil;in en değerli yatırım.</p>
                <Link href="/premium" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#E8916D] font-semibold text-sm hover:bg-white/90 transition-colors">Detayları G&ouml;r <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          9. SOCIAL PROOF — Testimonials
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">DENEYİMLER</span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">Yalnız değilsiniz</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { q: "Yıllardır neden bacaklarımın incelemediğini anlayamıyordum. Bu platform sayesinde doğru tanıya ulaştım.", n: "A.G., İstanbul", s: "Evre 2" },
              { q: "Doktorlara gidip hep aynı cevabı alıyordum: 'Daha çok spor yap.' Burada ilk kez gerçekten anlaşıldım.", n: "Z.K., Ankara", s: "Evre 1" },
              { q: "Tedavi seçeneklerini bu kadar açık anlatan başka bir kaynak bulamadım. Artık ne yapacağımı biliyorum.", n: "E.M., İzmir", s: "Evre 3" },
            ].map((t, i) => (
              <ScrollReveal key={t.n} delay={i * 100}>
                <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => (<Star key={j} className="w-4 h-4 text-[#E8916D] fill-[#E8916D]" />))}</div>
                  <p className="text-[#2D3B36] text-sm leading-relaxed flex-1">&ldquo;{t.q}&rdquo;</p>
                  <div className="mt-5 pt-4 border-t border-stone-100">
                    <p className="font-semibold text-[#163832] text-sm">{t.n}</p>
                    <p className="text-[#6B7B75] text-xs">{t.s}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Test Completed CTA */}
          <ScrollReveal delay={100}>
            <div className="mt-12 max-w-md mx-auto bg-[#E8F5F0] rounded-2xl p-7 text-center border border-[#1A6B5A]/10">
              <div className="w-14 h-14 rounded-full bg-[#1A6B5A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#163832]">Test Tamamlandı</h3>
              <p className="text-[#6B7B75] text-sm mt-2">3.000+ ki&#351;i semptom testini tamamladı.</p>
              <Link href="/araclar/semptom-testi" className="mt-5 inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#15594A] transition-colors">
                Siz de ba&#351;layın <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          10. FINAL CTA — Newsletter
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-[#1A6B5A] py-20 md:py-24 relative overflow-hidden">
        <div className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-[#E8916D]/10 blur-3xl" />

        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Lip&ouml;dem yolculuğunuza bug&uuml;n ba&#351;layın
          </h2>
          <p className="text-white/60 text-base mt-4 max-w-lg mx-auto">
            Haftalık bilimsel bilgiler, pratik ipu&ccedil;ları ve topluluk haberleri doğrudan e-postanıza.
          </p>

          <NewsletterForm />
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-lg px-4 py-3 border-t border-stone-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <Link href="/araclar/semptom-testi" className="flex items-center justify-center gap-2 w-full bg-[#1A6B5A] text-white py-3 rounded-xl font-semibold text-sm">
          <ClipboardCheck className="w-4 h-4" /> Semptom Testini &Ccedil;&ouml;z
        </Link>
      </div>
      <div className="h-[60px] lg:hidden" />
    </>
  )
}
