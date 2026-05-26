"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const symptoms = [
  {
    n: "01",
    t: "Orantısız yağ birikimi",
    d: "Bacak ve kalçalarda belirgin, üst bedene oranla çok fazla yağ. Ayak bilekleri etkilenmez.",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=900&q=75&auto=format&fit=crop",
    alt: "Bacaklarda orantısız yağ birikimi",
    tone: "from-[#1A6B5A]/85 via-[#1A6B5A]/40",
  },
  {
    n: "02",
    t: "Diyete dirençli yapı",
    d: "Sıkı diyet ve egzersize rağmen etkilenen bölgelerdeki yağ erimez.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=75&auto=format&fit=crop",
    alt: "Sağlıklı beslenme ve diyet",
    tone: "from-[#0E4A3E]/85 via-[#1A6B5A]/35",
  },
  {
    n: "03",
    t: "Ağrı ve hassasiyet",
    d: "Basınç ağrısı, dokunma hassasiyeti ve gün sonunda bacaklarda ağırlık hissi.",
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=900&q=75&auto=format&fit=crop",
    alt: "Bacaklarda ağrı ve hassasiyet",
    tone: "from-[#E8916D]/70 via-[#1A6B5A]/40",
  },
  {
    n: "04",
    t: "Kolay morarma",
    d: "Hafif temasla bile morluklar oluşur. Damarsal kırılganlık işareti.",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=900&q=75&auto=format&fit=crop",
    alt: "Hassas cilt ve damarsal kırılganlık",
    tone: "from-[#1A6B5A]/80 via-[#1A6B5A]/35",
  },
  {
    n: "05",
    t: "Simetrik tutulum",
    d: "Her iki bacak eşit şekilde etkilenir. Tek taraflılık lenfödem işareti olabilir.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=75&auto=format&fit=crop",
    alt: "Simetrik bacak tutulumu",
    tone: "from-[#0E4A3E]/85 via-[#1A6B5A]/40",
  },
]

export function SymptomsSlider() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrev(scrollLeft > 8)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 8)

    const cards = el.querySelectorAll<HTMLElement>("[data-card]")
    let nearest = 0
    let minDist = Infinity
    cards.forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - scrollLeft)
      if (dist < minDist) {
        minDist = dist
        nearest = i
      }
    })
    setActiveIndex(nearest)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateState()
    el.addEventListener("scroll", updateState, { passive: true })
    window.addEventListener("resize", updateState)
    return () => {
      el.removeEventListener("scroll", updateState)
      window.removeEventListener("resize", updateState)
    }
  }, [updateState])

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.85
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>("[data-card]")
    const target = cards[i]
    if (target) el.scrollTo({ left: target.offsetLeft, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl font-bold text-[#163832]">
          Lipödem Belirtileri
        </h3>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canPrev}
            aria-label="Önceki belirti"
            className="w-10 h-10 rounded-full border border-[#1A6B5A]/20 bg-white text-[#1A6B5A] flex items-center justify-center shadow-sm hover:bg-[#E8F5F0] hover:border-[#1A6B5A]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canNext}
            aria-label="Sonraki belirti"
            className="w-10 h-10 rounded-full border border-[#1A6B5A]/20 bg-white text-[#1A6B5A] flex items-center justify-center shadow-sm hover:bg-[#E8F5F0] hover:border-[#1A6B5A]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative -mx-5 md:mx-0">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto px-5 md:px-0 pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {symptoms.map((s) => (
            <article
              key={s.n}
              data-card
              className="snap-start shrink-0 w-[78%] sm:w-[55%] md:w-[42%] lg:w-[32%] group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg hover:shadow-2xl hover:shadow-[#1A6B5A]/25 hover:-translate-y-1 transition-all duration-500 ease-out cursor-grab active:cursor-grabbing"
            >
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 55vw, 78vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 bg-gradient-to-t ${s.tone} to-transparent`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

              <span className="absolute top-5 left-5 font-display text-3xl font-bold text-white/90 drop-shadow-md tracking-wide">
                {s.n}
              </span>

              <div className="pointer-events-none absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-[10px] font-semibold text-white tracking-wider uppercase border border-white/20">
                Belirti
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="font-display font-bold text-white text-xl md:text-2xl leading-tight drop-shadow">
                  {s.t}
                </h4>
                <p className="text-white/85 text-sm leading-relaxed mt-2 max-w-md">
                  {s.d}
                </p>
                <div className="mt-4 h-[2px] w-10 bg-white/70 group-hover:w-20 transition-all duration-500 ease-out" />
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-6 md:w-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-6 md:w-10 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div className="flex items-center justify-center gap-2 mt-2">
        {symptoms.map((s, i) => (
          <button
            key={s.n}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`${i + 1}. belirtiye git`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-[#1A6B5A]"
                : "w-1.5 bg-[#1A6B5A]/25 hover:bg-[#1A6B5A]/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
