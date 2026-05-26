"use client"

import Link from "next/link"
import {
  ClipboardCheck,
  Layers,
  GitCompare,
  Activity,
  HeartPulse,
  Ruler,
  Apple,
  Shirt,
  Dumbbell,
  Scissors,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"

type Test = {
  slug: string
  title: string
  desc: string
  badge: string
  minutes: number
  questions: number
  icon: LucideIcon
  accent: string
  bg: string
  taken: string
}

const featuredTest: Test = {
  slug: "/araclar/semptom-testi",
  title: "Lipödem Semptom Testi",
  desc: "12 soruluk bilimsel ölçekle lipödem risk seviyenizi ölçün. Sonuçlara göre size en uygun uzman kategorisi otomatik önerilir.",
  badge: "EN POPÜLER",
  minutes: 2,
  questions: 12,
  icon: ClipboardCheck,
  accent: "#1A6B5A",
  bg: "from-[#1A6B5A] to-[#0E4A3E]",
  taken: "3.142",
}

const tests: Test[] = [
  {
    slug: "/araclar/evre-testi",
    title: "Evre Belirleme",
    desc: "Lipödem evrenizi (1-4) klinik kriterlerle tahmin edin.",
    badge: "KLİNİK",
    minutes: 3,
    questions: 9,
    icon: Layers,
    accent: "#2D8B73",
    bg: "from-[#E8F5F0] to-white",
    taken: "1.840",
  },
  {
    slug: "/araclar/lipodem-lenfodem",
    title: "Lipödem mi, Lenfödem mi?",
    desc: "İki sık karıştırılan tabloyu net biçimde ayırın.",
    badge: "AYIRICI TANI",
    minutes: 2,
    questions: 8,
    icon: GitCompare,
    accent: "#6B7B99",
    bg: "from-[#F0F2F8] to-white",
    taken: "1.205",
  },
  {
    slug: "/araclar/agri-olcegi",
    title: "Ağrı ve Hassasiyet Skoru",
    desc: "VAS tabanlı kronik ağrı ve dokunma hassasiyeti.",
    badge: "VAS",
    minutes: 1,
    questions: 6,
    icon: HeartPulse,
    accent: "#C46B3D",
    bg: "from-[#FFF0E8] to-white",
    taken: "892",
  },
  {
    slug: "/araclar/yasam-kalitesi",
    title: "Yaşam Kalitesi Anketi",
    desc: "Lipödemin günlük yaşamınıza etkisini ölçün.",
    badge: "QoL",
    minutes: 4,
    questions: 14,
    icon: Activity,
    accent: "#1A6B5A",
    bg: "from-[#E8F5F0] to-white",
    taken: "1.402",
  },
  {
    slug: "/araclar/bel-kalca",
    title: "Bel-Kalça Oranı",
    desc: "Antropometrik risk göstergesi hesaplayıcısı.",
    badge: "WHR",
    minutes: 1,
    questions: 2,
    icon: Ruler,
    accent: "#8B6B3D",
    bg: "from-[#F5F0E8] to-white",
    taken: "2.310",
  },
  {
    slug: "/araclar/diyet-uyum",
    title: "Anti-İnflamatuar Diyet Skoru",
    desc: "Beslenmeniz lipödem dostu mu? 10 soruda kontrol.",
    badge: "BESLENME",
    minutes: 3,
    questions: 10,
    icon: Apple,
    accent: "#C46B3D",
    bg: "from-[#FFF0E8] to-white",
    taken: "1.760",
  },
  {
    slug: "/araclar/kompresyon",
    title: "Kompresyon İhtiyaç Testi",
    desc: "Doğru sınıf ve tip (flat/round-knit) önerisi.",
    badge: "TEDAVİ",
    minutes: 2,
    questions: 7,
    icon: Shirt,
    accent: "#6B7B99",
    bg: "from-[#F0F2F8] to-white",
    taken: "987",
  },
  {
    slug: "/araclar/egzersiz-toleransi",
    title: "Egzersiz Tolerans Testi",
    desc: "Size uygun egzersiz yoğunluğu ve türü.",
    badge: "AKTİVİTE",
    minutes: 2,
    questions: 8,
    icon: Dumbbell,
    accent: "#2D8B73",
    bg: "from-[#E8F5F0] to-white",
    taken: "640",
  },
  {
    slug: "/araclar/cerrahi-aday",
    title: "Cerrahi Adaylık Değerlendirmesi",
    desc: "Liposuction adaylığı + konservatif tedavi kontrolü.",
    badge: "CERRAHİ",
    minutes: 4,
    questions: 11,
    icon: Scissors,
    accent: "#1A6B5A",
    bg: "from-[#E8F5F0] to-white",
    taken: "1.118",
  },
]

function FeaturedCard() {
  const t = featuredTest
  const Icon = t.icon
  return (
    <Link
      href={t.slug}
      className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${t.bg} p-7 md:p-10 shadow-[0_25px_60px_-25px_rgba(26,107,90,0.5)] hover:shadow-[0_35px_80px_-25px_rgba(26,107,90,0.6)] hover:-translate-y-1 transition-all duration-500 ease-out block`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4)_0,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(232,145,109,0.3)_0,transparent_60%)]" />
      <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-[10px] font-bold tracking-[0.18em] text-white border border-white/20">
              <Sparkles className="w-3 h-3" />
              {t.badge}
            </span>
            <span className="text-[11px] text-white/70 tracking-wider">
              {t.taken} kişi tamamladı
            </span>
          </div>

          <h3 className="font-display text-3xl md:text-[2.4rem] font-bold text-white mt-4 leading-[1.1]">
            {t.title}
          </h3>
          <p className="text-white/85 text-base md:text-[17px] mt-3 max-w-lg leading-relaxed">
            {t.desc}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-[13px] text-white/80">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t.minutes} dakika
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ClipboardCheck className="w-3.5 h-3.5" />
              {t.questions} soru
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Ücretsiz
            </span>
          </div>

          <div className="mt-7 inline-flex items-center gap-2 bg-white text-[#1A6B5A] px-6 py-3 rounded-xl text-[15px] font-bold shadow-lg group-hover:gap-3 group-hover:shadow-xl transition-all">
            Teste Başla
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-white/15 backdrop-blur-md border border-white/25 shadow-xl transition-transform duration-700 group-hover:scale-105 group-hover:rotate-[-4deg]">
          <Icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" strokeWidth={1.6} />
        </div>
      </div>
    </Link>
  )
}

function TestCard({ test }: { test: Test }) {
  const Icon = test.icon
  return (
    <Link
      href={test.slug}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${test.bg} border border-white/80 ring-1 ring-stone-200/60 shadow-[0_1px_3px_rgba(22,56,50,0.04)] hover:shadow-[0_20px_45px_-15px_rgba(22,56,50,0.2)] hover:-translate-y-1 transition-all duration-500 ease-out p-6 flex flex-col h-full min-h-[210px]`}
    >
      <span
        className="pointer-events-none absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-15 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-25"
        style={{ backgroundColor: test.accent }}
      />

      <div className="relative flex items-center justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110"
          style={{ color: test.accent }}
        >
          <Icon className="w-5 h-5" strokeWidth={2.2} />
        </div>
        <span
          className="text-[9px] font-bold tracking-[0.15em] px-2 py-0.5 rounded-full bg-white/80"
          style={{ color: test.accent }}
        >
          {test.badge}
        </span>
      </div>

      <h3 className="font-display text-[16px] font-bold text-[#163832] leading-tight">
        {test.title}
      </h3>
      <p className="text-[13px] text-[#6B7B75] leading-relaxed mt-1.5">
        {test.desc}
      </p>

      <div className="mt-auto pt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-[11px] text-[#6B7B75]">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {test.minutes} dk
          </span>
          <span className="w-px h-3 bg-stone-300/60" />
          <span>{test.questions} soru</span>
        </div>

        <span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white transition-all duration-300 group-hover:translate-x-0.5 shadow-md"
          style={{ backgroundColor: test.accent }}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}

export function TestHub() {
  return (
    <section className="relative bg-[#FAF7F2] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1A6B5A]/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#E8916D]/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-[11px] font-semibold text-[#1A6B5A] tracking-[0.18em] shadow-sm">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-[#1A6B5A] animate-ping opacity-75" />
                  <span className="relative w-1.5 h-1.5 rounded-full bg-[#1A6B5A]" />
                </span>
                İNTERAKTİF DEĞERLENDİRME
              </div>
              <h2 className="font-display text-3xl md:text-[2.6rem] font-bold text-[#163832] mt-4 leading-[1.1]">
                Lipödem yolculuğunuz için{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">10 ücretsiz test</span>
                  <span className="absolute inset-x-0 bottom-1.5 h-3 bg-[#E8916D]/30 -z-0" />
                </span>
              </h2>
              <p className="mt-4 text-[#6B7B75] text-base max-w-xl">
                Risk değerlendirmesinden cerrahi adaylığa kadar — her test
                bilimsel ölçeklere dayanır, 2-4 dakikada tamamlanır ve size
                özel öneriler getirir.
              </p>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <div className="text-right">
                <div className="font-display text-3xl font-bold text-[#1A6B5A] leading-none">
                  15.300+
                </div>
                <div className="text-[11px] text-[#6B7B75] mt-1 uppercase tracking-wider">
                  Tamamlanmış test
                </div>
              </div>
              <div className="w-px h-12 bg-stone-200" />
              <div className="text-right">
                <div className="font-display text-3xl font-bold text-[#163832] leading-none">
                  10
                </div>
                <div className="text-[11px] text-[#6B7B75] mt-1 uppercase tracking-wider">
                  Ücretsiz araç
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <FeaturedCard />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5">
          {tests.map((t, i) => (
            <ScrollReveal key={t.slug} delay={(i % 6) * 50}>
              <TestCard test={t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
