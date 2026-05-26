"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { BookMarked, ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"

type Pub = {
  pmid: string
  year: number
  author: string
  journal: string
  title: string
  viral: string
  slug: string
}

const publications: Pub[] = [
  {
    pmid: "40425048",
    year: 2025,
    author: "Cifarelli V",
    journal: "Obes Rev",
    title: "Lipedema: Progress, Challenges, and the Road Ahead",
    viral: "2025'in lipödem manifestosu: Nereye geldik, nereye gidiyoruz?",
    slug: "lipodem-ilerleme-zorluklar-gelecek",
  },
  {
    pmid: "40386000",
    year: 2025,
    author: "Mortada H",
    journal: "Arch Plast Surg",
    title: "Lipedema: Clinical Features, Diagnosis, and Management",
    viral: "2025 baskısı: Lipödemin klinik özellikleri ve modern tedavi haritası.",
    slug: "lipodem-klinik-ozellikler-tani-tedavi",
  },
  {
    pmid: "39188170",
    year: 2024,
    author: "Faerber G",
    journal: "J Dtsch Dermatol Ges",
    title: "S2k guideline lipedema",
    viral: "Almanya'nın resmi lipödem kılavuzu yayınlandı — küresel referans burada.",
    slug: "almanya-s2k-lipodem-kilavuzu",
  },
  {
    pmid: "38958868",
    year: 2024,
    author: "Annunziata G",
    journal: "Curr Obes Rep",
    title: "Physical exercise as therapeutic intervention for lipedema",
    viral: "Egzersiz lipödemi tedavi edebilir mi? Doğru yapılırsa, evet.",
    slug: "lipodem-egzersiz-tedavi-konsensus",
  },
  {
    pmid: "38950986",
    year: 2024,
    author: "Lomeli LD",
    journal: "Cleve Clin J Med",
    title: "Lymphedema vs lipedema: Similar but different",
    viral: "Lenfödem mi lipödem mi? İkisini ayırt etmenin pratik kılavuzu.",
    slug: "lenfodem-mi-lipodem-mi-farklar",
  },
  {
    pmid: "37789512",
    year: 2024,
    author: "van la Parra RFD",
    journal: "Obes Rev",
    title: "Diagnostic imaging in lipedema: A systematic review",
    viral: "MR mı, ultrason mu? Lipödemi en doğru hangi görüntüleme yakalar?",
    slug: "lipodem-goruntuleme-yontemleri",
  },
  {
    pmid: "37924422",
    year: 2023,
    author: "Verde L",
    journal: "Curr Obes Rep",
    title: "Ketogenic Diet: A Nutritional Therapeutic Tool for Lipedema?",
    viral: "Ketojenik diyet lipödem ağrısını gerçekten azaltıyor mu? Bilim cevap veriyor.",
    slug: "ketojenik-diyet-lipodem",
  },
  {
    pmid: "37390539",
    year: 2023,
    author: "van la Parra RFD",
    journal: "J Plast Reconstr Aesthet Surg",
    title: "Lipedema: What we don't know",
    viral: "Lipödem hakkında bilmediklerimiz, bildiklerimizden fazla — işte sırlar.",
    slug: "lipodem-bilmediklerimiz",
  },
  {
    pmid: "36675759",
    year: 2022,
    author: "Ernst AM",
    journal: "J Pers Med",
    title: "Lipedema Research-Quo Vadis?",
    viral: "Lipödem araştırması nereye gidiyor? Bilim insanlarının yol haritası.",
    slug: "lipodem-arastirma-gelecek",
  },
  {
    pmid: "36551837",
    year: 2022,
    author: "Poojari A",
    journal: "Biomedicines",
    title: "Lipedema: Insights into Morphology, Pathophysiology, and Challenges",
    viral: "Lipödem yağı sıradan yağ değil: Mikroskop altında ortaya çıkan farklılık.",
    slug: "lipodem-morfoloji-patofizyoloji",
  },
  {
    pmid: "36479502",
    year: 2022,
    author: "Bonetti G",
    journal: "J Prev Med Hyg",
    title: "Dietary supplements for lipedema",
    viral: "Lipödeme karşı raf gerçeği: Hangi takviye işe yarar, hangisi para tuzağı?",
    slug: "lipodem-takviye-rehberi",
  },
  {
    pmid: "34769153",
    year: 2021,
    author: "Katzer K",
    journal: "Int J Mol Sci",
    title: "Lipedema and the Potential Role of Estrogen in Adipose Tissue Accumulation",
    viral: "Östrojen lipödem yağ depolamasını tetikliyor mu? Kanıtlar büyüyor.",
    slug: "ostrojen-lipodem-iliskisi",
  },
  {
    pmid: "34049453",
    year: 2021,
    author: "Herbst KL",
    journal: "Phlebology",
    title: "Standard of care for lipedema in the United States",
    viral: "ABD'nin lipödem standart bakım protokolü: Tedavi sırası nasıl olmalı?",
    slug: "abd-lipodem-standart-bakim",
  },
  {
    pmid: "33870676",
    year: 2021,
    author: "Forner-Cordero I",
    journal: "Int Angiol",
    title: "Update in the management of lipedema",
    viral: "Lipödem yönetiminde güncelleme — hangi tedavi kanıtlı, hangisi efsane?",
    slug: "lipodem-yonetim-guncelleme",
  },
  {
    pmid: "33001552",
    year: 2021,
    author: "Aksoy H",
    journal: "Dermatol Ther",
    title: "Cause and management of lipedema-associated pain",
    viral: "Lipödem ağrısının nedeni bulundu — ve yönetim için pratik bir rehber.",
    slug: "lipodem-agrisi-nedenleri-yonetimi",
  },
  {
    pmid: "32762835",
    year: 2020,
    author: "Kruppa P",
    journal: "Dtsch Arztebl Int",
    title: "Lipedema-Pathogenesis, Diagnosis, and Treatment Options",
    viral: "Lipödemin A'dan Z'ye haritası: Nasıl doğar, nasıl teşhis edilir, nasıl yenilir?",
    slug: "lipodem-patogenez-tani-tedavi",
  },
  {
    pmid: "31544340",
    year: 2019,
    author: "Buso G",
    journal: "Obesity (Silver Spring)",
    title: "Lipedema: A Call to Action!",
    viral: "Dünya lipödeme uyandı: 'Görmezden gelinen hastalık' artık konuşulmalı.",
    slug: "lipodem-farkindalik-cagrisi",
  },
  {
    pmid: "30565362",
    year: 2019,
    author: "Wollina U",
    journal: "Dermatol Ther",
    title: "Lipedema-An update",
    viral: "Lipödemin modern tanımı: Bir Alman dermatologdan kesin güncelleme.",
    slug: "lipodem-guncel-guncelleme",
  },
  {
    pmid: "29522416",
    year: 2018,
    author: "Torre YS",
    journal: "Horm Mol Biol Clin Investig",
    title: "Lipedema: friend and foe",
    viral: "Lipödem yağı vücudu hem koruyor hem zorluyor: Bu paradoksun bilimi.",
    slug: "lipodem-dost-dusman",
  },
  {
    pmid: "29143577",
    year: 2018,
    author: "Canning C",
    journal: "Vasc Med",
    title: "Lipedema",
    viral: "Damar hekimlerinin gözünden lipödem: Klasik klinik özet.",
    slug: "damar-hekimlerinden-lipodem",
  },
]

const yearColors: Record<number, string> = {
  2025: "bg-[#1A6B5A] text-white",
  2024: "bg-[#E8F5F0] text-[#1A6B5A]",
  2023: "bg-[#FFF0E8] text-[#C46B3D]",
  2022: "bg-[#F5F0E8] text-[#8B6B3D]",
  2021: "bg-stone-100 text-stone-600",
  2020: "bg-stone-100 text-stone-600",
  2019: "bg-stone-100 text-stone-600",
  2018: "bg-stone-100 text-stone-600",
}

export function PubmedShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = 288 + 16
    el.scrollBy({ left: dir === "left" ? -cardWidth * 2 : cardWidth * 2, behavior: "smooth" })
  }

  return (
    <section className="relative">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163832] text-white text-[11px] font-semibold tracking-wider shadow-sm mb-4">
              <BookMarked className="w-3.5 h-3.5" />
              PUBMED &middot; BİLİMSEL KAYNAK
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#163832] leading-tight">
              Bilimsel kaynaklar &mdash;{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Türkçe özetlerle</span>
                <span className="absolute inset-x-0 bottom-0.5 h-2 bg-[#E8916D]/25 -z-0" />
              </span>
            </h3>
            <p className="mt-2 text-[#6B7B75] text-sm max-w-lg">
              2018&ndash;2025 arası en çok atıf alan 20 lipödem makalesini Türkçe özetleriyle okuyun.
            </p>
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Önceki makaleler"
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-[#E8F5F0] hover:text-[#1A6B5A] hover:border-[#1A6B5A]/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Sonraki makaleler"
              className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-[#E8F5F0] hover:text-[#1A6B5A] hover:border-[#1A6B5A]/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Horizontal scroll carousel */}
      <div className="relative">
        {/* Left fade mask */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? "opacity-100" : "opacity-0"}`}
        />
        {/* Right fade mask */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? "opacity-100" : "opacity-0"}`}
        />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {publications.map((p) => (
            <Link
              key={p.pmid}
              href={`/blog/${p.slug}`}
              className="group relative flex-none w-[272px] sm:w-[288px] snap-start bg-white rounded-xl border border-stone-200/80 p-5 shadow-[0_1px_3px_rgba(22,56,50,0.04)] hover:shadow-[0_12px_40px_-12px_rgba(22,56,50,0.18)] hover:border-[#1A6B5A]/20 transition-all duration-300 flex flex-col"
            >
              {/* Header: Year + PMID */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wider ${yearColors[p.year] || "bg-stone-100 text-stone-600"}`}
                >
                  {p.year}
                </span>
                <span className="font-mono text-[10px] text-stone-400 tracking-tight">
                  PMID&middot;{p.pmid}
                </span>
              </div>

              {/* Viral quote */}
              <p className="font-display text-[15px] font-bold text-[#163832] leading-snug flex-1 group-hover:text-[#1A6B5A] transition-colors duration-200">
                {p.viral}
              </p>

              {/* Footer: Author + Journal + CTA */}
              <div className="mt-4 pt-3 border-t border-dashed border-stone-200">
                <p className="text-[11px] text-[#6B7B75] leading-snug truncate">
                  {p.author} &middot; <span className="italic">{p.journal}</span>
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[10px] text-stone-400 leading-snug truncate max-w-[160px] italic">
                    {p.title}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1A6B5A] opacity-60 group-hover:opacity-100 group-hover:gap-1.5 transition-all shrink-0">
                    Oku
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* "Tümünü Gör" CTA card */}
          <Link
            href="/blog"
            className="group flex-none w-[200px] sm:w-[220px] snap-start bg-gradient-to-br from-[#E8F5F0] to-[#E8F5F0]/50 rounded-xl border border-[#1A6B5A]/10 p-5 flex flex-col items-center justify-center text-center hover:border-[#1A6B5A]/30 hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-[#1A6B5A] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold text-[#163832]">
              Tüm Yazıları Gör
            </span>
            <span className="text-[#6B7B75] text-xs mt-1">
              20 bilimsel makale özeti
            </span>
          </Link>
        </div>
      </div>

      {/* Compact marquee ticker */}
      <ScrollReveal delay={100}>
        <div
          className="relative overflow-hidden py-2.5 mt-6 border-y border-stone-100"
          aria-hidden="true"
        >
          <div className="flex gap-6 animate-marquee whitespace-nowrap will-change-transform">
            {[...publications, ...publications].map((p, i) => (
              <span
                key={`${p.pmid}-${i}`}
                className="text-[11px] text-[#6B7B75]/70 inline-flex items-center gap-1.5"
              >
                <span className="font-mono text-[#1A6B5A]/50 font-semibold">
                  {p.pmid}
                </span>
                <span className="text-stone-300">&middot;</span>
                <span className="font-medium text-[#163832]/40">{p.author}</span>
                <span className="text-stone-200 ml-3">&loz;</span>
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* PubMed external link - small trust signal */}
      <div className="mt-4 flex items-center justify-center gap-2">
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/?term=lipedema"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-stone-400 hover:text-[#1A6B5A] transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Tüm kaynaklar PubMed&apos;de doğrulanabilir
        </a>
      </div>
    </section>
  )
}
