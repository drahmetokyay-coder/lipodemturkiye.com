"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Award, MapPin, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import {
  experts,
  categoryColors,
  type ExpertCategory,
  type Expert,
} from "@/data/experts"

const tabs: Array<{ key: "all" | ExpertCategory; label: string }> = [
  { key: "all", label: "Tümü" },
  { key: "doktor", label: "Doktorlar" },
  { key: "cerrah", label: "Cerrahlar" },
  { key: "diyetisyen", label: "Diyetisyenler" },
  { key: "fizyoterapist", label: "Fizyoterapi" },
]

function CircularProgress({ value, color }: { value: number; color: string }) {
  const r = 26
  const c = 2 * Math.PI * r
  const offset = c - (value / 100) * c

  return (
    <div className="relative w-[72px] h-[72px] shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-stone-100"
        />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span
          className="font-display text-lg font-bold"
          style={{ color }}
        >
          %{value}
        </span>
        <span className="text-[8px] text-[#6B7B75] uppercase tracking-wider mt-0.5">
          Memnuniyet
        </span>
      </div>
    </div>
  )
}

function IdCard({ expert }: { expert: Expert }) {
  const color = categoryColors[expert.category]
  const satisfaction = Math.round((expert.rating / 5) * 100)
  const initials = expert.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")

  return (
    <div
      className="group relative bg-white rounded-[20px] overflow-hidden border border-stone-200/70 shadow-[0_1px_3px_rgba(22,56,50,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(22,56,50,0.2)] hover:-translate-y-1 transition-all duration-500"
    >
      <div
        className="relative h-[68px] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 60%, ${color}aa 100%)`,
        }}
      >
        <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(135deg,transparent_0_8px,rgba(255,255,255,0.4)_8px_9px)]" />
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 blur-xl" />

        <div className="relative h-full flex items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-white/90" />
            <span className="text-[10px] font-bold text-white/95 tracking-[0.18em] uppercase">
              Doğrulanmış Uzman
            </span>
          </div>
          {expert.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 text-[9px] font-bold tracking-wider text-[#1A6B5A]">
              <Award className="w-2.5 h-2.5" />
              ÖNE ÇIKAN
            </span>
          )}
        </div>
      </div>

      <div className="relative px-5 pt-0 pb-5">
        <div className="relative -mt-9 mb-3 flex items-end justify-between">
          <div
            className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center text-xl font-bold ring-4 ring-white shadow-md"
            style={{ backgroundColor: color + "1f", color }}
          >
            {initials}
          </div>
          <CircularProgress value={satisfaction} color={color} />
        </div>

        <h3 className="font-display text-[17px] font-bold text-[#163832] leading-tight">
          {expert.name}
        </h3>
        <p
          className="text-[13px] font-semibold mt-0.5"
          style={{ color }}
        >
          {expert.title}
        </p>

        <div className="mt-3 flex items-center gap-3 text-[12px] text-[#6B7B75]">
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {expert.city}
          </span>
          <span className="w-px h-3 bg-stone-200" />
          <span className="inline-flex items-center gap-1">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#E8916D" }}
            />
            {expert.rating} · {expert.reviewCount} yorum
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-dashed border-stone-200 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-wider text-[#6B7B75]">
              Uzman No
            </span>
            <span className="font-mono text-[11px] text-[#163832] font-semibold tracking-tight">
              LT-{expert.id.padStart(4, "0")}
            </span>
          </div>
          <Link
            href={`/uzmanlar/${expert.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[12px] font-semibold text-white transition-all hover:gap-2 group-hover:shadow-md"
            style={{ backgroundColor: color }}
          >
            Profili Gör
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div
          className="mt-3 h-[14px] flex items-end gap-[2px] opacity-50"
          aria-hidden="true"
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <span
              key={i}
              className="bg-stone-700/40 w-[2px]"
              style={{
                height: `${[5, 11, 7, 14, 6, 10, 13, 8, 12, 9][i % 10]}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ExpertDirectory() {
  const [activeTab, setActiveTab] = useState<"all" | ExpertCategory>("all")

  const filtered =
    activeTab === "all"
      ? experts
      : experts.filter((e) => e.category === activeTab)

  const sorted = [...filtered].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return b.rating - a.rating
  })

  const displayed = sorted.slice(0, 6)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">
              UZMAN AĞI
            </span>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
              Lipödem Uzmanlarını Keşfedin
            </h2>
            <p className="mt-4 text-[#6B7B75] text-base max-w-xl mx-auto">
              Türkiye genelinde doğrulanmış uzmanlar — her uzman kimlik kartı
              hasta memnuniyet skorunu gösterir.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-[#1A6B5A] text-white shadow-sm"
                    : "bg-stone-100 text-[#6B7B75] hover:bg-stone-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((expert, i) => (
            <ScrollReveal key={expert.id} delay={i * 70}>
              <IdCard expert={expert} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="text-center mt-12">
            <Link
              href="/uzmanlar"
              className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[#15594A] shadow-md shadow-[#1A6B5A]/15 transition-all duration-300"
            >
              Tüm Uzmanları Gör
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
