import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"

const benefits = [
  "Ücretsiz temel profil oluşturun",
  "Premium ile öne çıkın ve daha fazla hastaya ulaşın",
  "Blog yazılarınızla uzmanlığınızı gösterin",
]

const stats = [
  { value: "3.000+", label: "Aylık hasta ziyareti" },
  { value: "%85", label: "Tedavi arayışında", color: "#E8916D" },
  { value: "1.", label: "Türkiye'de lipödem platformu", color: "#93D4BE" },
]

export function B2BCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-[#163832] to-[#1A6B5A]">
      <div className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-[#E8916D]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <span className="text-[13px] font-semibold text-[#93D4BE] tracking-wider">
                PROFESYONELLER İ&Ccedil;İN
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">
                Lip&ouml;dem Hastalarına Ula&#351;manın
                <br className="hidden md:block" /> En Etkili Yolu
              </h2>
              <p className="text-white/60 text-base mt-4 max-w-lg">
                T&uuml;rkiye&apos;nin en kapsamlı lip&ouml;dem platformunda
                yerinizi alın. Hastalar sizi arasın, bulsun, randevu talep
                etsin.
              </p>

              <div className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-[#93D4BE] shrink-0" />
                    <span className="text-white/80 text-sm">{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/profesyoneller"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1A6B5A] px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[#FAF7F2] shadow-lg transition-all duration-300"
                >
                  &Uuml;cretsiz Kayıt Ol
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/profesyoneller#paketler"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
                >
                  Paketleri İncele
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={150}>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                  >
                    <p
                      className="font-display text-4xl font-bold"
                      style={{ color: stat.color || "white" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/60 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
