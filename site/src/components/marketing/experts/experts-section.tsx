"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import { experts, type ExpertCategory } from "@/data/experts"
import { ExpertCard } from "./expert-card"
import { FilterTabs, type FilterKey, type FilterTab } from "./filter-tabs"

const CATEGORY_TABS: Array<{ key: ExpertCategory; label: string }> = [
  { key: "doktor", label: "Doktorlar" },
  { key: "cerrah", label: "Cerrahlar" },
  { key: "diyetisyen", label: "Diyetisyenler" },
  { key: "fizyoterapist", label: "Fizyoterapi" },
]

export function ExpertsSection() {
  const [active, setActive] = useState<FilterKey>("all")

  const tabs: FilterTab[] = useMemo(
    () => [
      { key: "all", label: "Tümü", count: experts.length },
      ...CATEGORY_TABS.map((t) => ({
        key: t.key,
        label: t.label,
        count: experts.filter((e) => e.category === t.key).length,
      })),
    ],
    [],
  )

  const visible = useMemo(() => {
    const filtered =
      active === "all"
        ? experts
        : experts.filter((e) => e.category === active)
    return [...filtered]
      .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1
        return b.score - a.score
      })
      .slice(0, 6)
  }, [active])

  return (
    <section className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* başlık */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wider text-[#1A6B5A]">
              <ShieldCheck className="h-4 w-4" />
              Doğrulanmış Uzman Ağı
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-[#163832] md:text-[2.5rem]">
              Lipödem Uzmanlarını Keşfedin
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#6B7B75]">
              Her uzman bir doğrulanmış kimlik kartıyla listelenir — hasta
              memnuniyet skoru, dokunduğu hasta sayısı ve uzmanlık alanı
              şeffafça gösterilir.
            </p>
          </div>
        </ScrollReveal>

        {/* filtreler */}
        <ScrollReveal delay={80}>
          <div className="mt-9 mb-10">
            <FilterTabs tabs={tabs} active={active} onChange={setActive} />
          </div>
        </ScrollReveal>

        {/* kart grid — filtre değişiminde scale/fade transition (key remount) */}
        <div
          key={active}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((expert, i) => (
            <div
              key={expert.id}
              className="animate-scale-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <ExpertCard expert={expert} />
            </div>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-16 text-center text-[#6B7B75]">
            Bu kategoride henüz uzman bulunmuyor.
          </p>
        )}

        {/* CTA */}
        <ScrollReveal delay={100}>
          <div className="mt-12 text-center">
            <Link
              href="/uzmanlar"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1A6B5A] px-7 py-3.5 text-[15px] font-semibold text-white shadow-md shadow-[#1A6B5A]/15 transition-all duration-300 hover:bg-[#15594A] hover:shadow-lg"
            >
              Tüm Uzmanları Gör
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
