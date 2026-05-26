"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, ArrowRight, Award } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import {
  experts,
  categoryLabels,
  categoryColors,
  type ExpertCategory,
} from "@/data/experts"

const tabs: Array<{ key: "all" | ExpertCategory; label: string }> = [
  { key: "all", label: "Tümü" },
  { key: "doktor", label: "Doktorlar" },
  { key: "cerrah", label: "Cerrahlar" },
  { key: "diyetisyen", label: "Diyetisyenler" },
  { key: "fizyoterapist", label: "Fizyoterapi" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i < Math.round(rating)
              ? "text-[#E8916D] fill-[#E8916D]"
              : "text-stone-200"
          }`}
        />
      ))}
      <span className="text-[11px] text-[#6B7B75] ml-0.5">{rating}</span>
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
              UZMAN A&#286;I
            </span>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
              Lip&ouml;dem Uzmanlarını Ke&#351;fedin
            </h2>
            <p className="mt-4 text-[#6B7B75] text-base max-w-xl mx-auto">
              T&uuml;rkiye genelinde doğrulanmış uzmanlar
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
              <div
                className={`relative bg-white rounded-2xl p-6 h-full flex flex-col items-center text-center transition-shadow duration-300 ${
                  expert.featured
                    ? "border-2 border-[#1A6B5A] shadow-md hover:shadow-lg"
                    : "border border-stone-100 shadow-sm hover:shadow-md"
                }`}
              >
                {expert.featured && (
                  <div className="absolute -top-3 right-4 flex items-center gap-1 bg-[#1A6B5A] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    <Award className="w-3 h-3" />
                    &Ouml;NE &Ccedil;IKAN
                  </div>
                )}

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4"
                  style={{
                    backgroundColor:
                      categoryColors[expert.category] + "20",
                    color: categoryColors[expert.category],
                  }}
                >
                  {expert.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <h3 className="font-semibold text-[#163832] text-[15px]">
                  {expert.name}
                </h3>
                <p
                  className="text-[13px] font-medium mt-1"
                  style={{ color: categoryColors[expert.category] }}
                >
                  {expert.title}
                </p>
                <p className="text-[12px] text-[#6B7B75] mt-1">
                  {expert.city}
                </p>

                <div className="mt-3">
                  <StarRating rating={expert.rating} />
                </div>

                <Link
                  href={`/uzmanlar/${expert.slug}`}
                  className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-colors block ${
                    expert.featured
                      ? "bg-[#1A6B5A] text-white hover:bg-[#15594A]"
                      : "border border-[#1A6B5A] text-[#1A6B5A] hover:bg-[#E8F5F0]"
                  }`}
                >
                  Profili G&ouml;r
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={100}>
          <div className="text-center mt-10">
            <Link
              href="/uzmanlar"
              className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-7 py-3.5 rounded-xl text-[15px] font-semibold hover:bg-[#15594A] shadow-md shadow-[#1A6B5A]/15 transition-all duration-300"
            >
              T&uuml;m Uzmanları G&ouml;r
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
