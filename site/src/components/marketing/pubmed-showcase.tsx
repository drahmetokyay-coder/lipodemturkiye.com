"use client"

import { ExternalLink, Quote, BookMarked } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"

type Pub = {
  pmid: string
  year: number
  author: string
  journal: string
  title: string
  viral: string
}

const publications: Pub[] = [
  {
    pmid: "40425048",
    year: 2025,
    author: "Cifarelli V",
    journal: "Obes Rev",
    title: "Lipedema: Progress, Challenges, and the Road Ahead",
    viral: "2025'in lipödem manifestosu: Nereye geldik, nereye gidiyoruz?",
  },
  {
    pmid: "40386000",
    year: 2025,
    author: "Mortada H",
    journal: "Arch Plast Surg",
    title: "Lipedema: Clinical Features, Diagnosis, and Management",
    viral: "2025 baskısı: Lipödemin klinik özellikleri ve modern tedavi haritası.",
  },
  {
    pmid: "39188170",
    year: 2024,
    author: "Faerber G",
    journal: "J Dtsch Dermatol Ges",
    title: "S2k guideline lipedema",
    viral: "Almanya'nın resmi lipödem kılavuzu yayınlandı — küresel referans burada.",
  },
  {
    pmid: "38958868",
    year: 2024,
    author: "Annunziata G",
    journal: "Curr Obes Rep",
    title: "Physical exercise as therapeutic intervention for lipedema",
    viral: "Egzersiz lipödemi tedavi edebilir mi? Doğru yapılırsa, evet.",
  },
  {
    pmid: "38950986",
    year: 2024,
    author: "Lomeli LD",
    journal: "Cleve Clin J Med",
    title: "Lymphedema vs lipedema: Similar but different",
    viral: "Lenfödem mi lipödem mi? İkisini ayırt etmenin pratik kılavuzu.",
  },
  {
    pmid: "37789512",
    year: 2024,
    author: "van la Parra RFD",
    journal: "Obes Rev",
    title: "Diagnostic imaging in lipedema: A systematic review",
    viral: "MR mı, ultrason mu? Lipödemi en doğru hangi görüntüleme yakalar?",
  },
  {
    pmid: "37924422",
    year: 2023,
    author: "Verde L",
    journal: "Curr Obes Rep",
    title: "Ketogenic Diet: A Nutritional Therapeutic Tool for Lipedema?",
    viral: "Ketojenik diyet lipödem ağrısını gerçekten azaltıyor mu? Bilim cevap veriyor.",
  },
  {
    pmid: "37390539",
    year: 2023,
    author: "van la Parra RFD",
    journal: "J Plast Reconstr Aesthet Surg",
    title: "Lipedema: What we don't know",
    viral: "Lipödem hakkında bilmediklerimiz, bildiklerimizden fazla — işte sırlar.",
  },
  {
    pmid: "36675759",
    year: 2022,
    author: "Ernst AM",
    journal: "J Pers Med",
    title: "Lipedema Research-Quo Vadis?",
    viral: "Lipödem araştırması nereye gidiyor? Bilim insanlarının yol haritası.",
  },
  {
    pmid: "36551837",
    year: 2022,
    author: "Poojari A",
    journal: "Biomedicines",
    title: "Lipedema: Insights into Morphology, Pathophysiology, and Challenges",
    viral: "Lipödem yağı sıradan yağ değil: Mikroskop altında ortaya çıkan farklılık.",
  },
  {
    pmid: "36479502",
    year: 2022,
    author: "Bonetti G",
    journal: "J Prev Med Hyg",
    title: "Dietary supplements for lipedema",
    viral: "Lipödeme karşı raf gerçeği: Hangi takviye işe yarar, hangisi para tuzağı?",
  },
  {
    pmid: "34769153",
    year: 2021,
    author: "Katzer K",
    journal: "Int J Mol Sci",
    title: "Lipedema and the Potential Role of Estrogen in Adipose Tissue Accumulation",
    viral: "Östrojen lipödem yağ depolamasını tetikliyor mu? Kanıtlar büyüyor.",
  },
  {
    pmid: "34049453",
    year: 2021,
    author: "Herbst KL",
    journal: "Phlebology",
    title: "Standard of care for lipedema in the United States",
    viral: "ABD'nin lipödem standart bakım protokolü: Tedavi sırası nasıl olmalı?",
  },
  {
    pmid: "33870676",
    year: 2021,
    author: "Forner-Cordero I",
    journal: "Int Angiol",
    title: "Update in the management of lipedema",
    viral: "Lipödem yönetiminde güncelleme — hangi tedavi kanıtlı, hangisi efsane?",
  },
  {
    pmid: "33001552",
    year: 2021,
    author: "Aksoy H",
    journal: "Dermatol Ther",
    title: "Cause and management of lipedema-associated pain",
    viral: "Lipödem ağrısının nedeni bulundu — ve yönetim için pratik bir rehber.",
  },
  {
    pmid: "32762835",
    year: 2020,
    author: "Kruppa P",
    journal: "Dtsch Arztebl Int",
    title: "Lipedema-Pathogenesis, Diagnosis, and Treatment Options",
    viral: "Lipödemin A'dan Z'ye haritası: Nasıl doğar, nasıl teşhis edilir, nasıl yenilir?",
  },
  {
    pmid: "31544340",
    year: 2019,
    author: "Buso G",
    journal: "Obesity (Silver Spring)",
    title: "Lipedema: A Call to Action!",
    viral: "Dünya lipödeme uyandı: 'Görmezden gelinen hastalık' artık konuşulmalı.",
  },
  {
    pmid: "30565362",
    year: 2019,
    author: "Wollina U",
    journal: "Dermatol Ther",
    title: "Lipedema-An update",
    viral: "Lipödemin modern tanımı: Bir Alman dermatologdan kesin güncelleme.",
  },
  {
    pmid: "29522416",
    year: 2018,
    author: "Torre YS",
    journal: "Horm Mol Biol Clin Investig",
    title: "Lipedema: friend and foe",
    viral: "Lipödem yağı vücudu hem koruyor hem zorluyor: Bu paradoksun bilimi.",
  },
  {
    pmid: "29143577",
    year: 2018,
    author: "Canning C",
    journal: "Vasc Med",
    title: "Lipedema",
    viral: "Damar hekimlerinin gözünden lipödem: Klasik klinik özet.",
  },
]

const tones = [
  "bg-[#E8F5F0] text-[#1A6B5A] border-[#1A6B5A]/15",
  "bg-[#FFF0E8] text-[#C46B3D] border-[#E8916D]/25",
  "bg-[#F5F0E8] text-[#8B6B3D] border-[#B89A6B]/25",
]

export function PubmedShowcase() {
  return (
    <section className="relative">
      <ScrollReveal>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163832] text-white text-[11px] font-semibold tracking-wider shadow-sm">
            <BookMarked className="w-3.5 h-3.5" />
            PUBMED · BİLİMSEL DUVAR
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-[#163832] mt-4 leading-tight">
            Lipödem hakkında okumanız gereken{" "}
            <span className="relative inline-block">
              <span className="relative z-10">20 yayın</span>
              <span className="absolute inset-x-0 bottom-1 h-2 bg-[#E8916D]/30 -z-0" />
            </span>
          </h3>
          <p className="mt-3 text-[#6B7B75] text-base max-w-xl mx-auto">
            En çok atıf alan ve en güncel makaleleri seçtik. Her birinin viral bir
            cümle özetiyle — tıkladığınızda PubMed&apos;de açılır.
          </p>
        </div>
      </ScrollReveal>

      <div
        className="relative overflow-hidden py-3 mb-10 border-y border-stone-200/60"
        aria-hidden="true"
      >
        <div className="flex gap-8 animate-[marquee_60s_linear_infinite] whitespace-nowrap will-change-transform">
          {[...publications, ...publications].map((p, i) => (
            <span
              key={`${p.pmid}-${i}`}
              className="text-[12px] text-[#6B7B75] inline-flex items-center gap-2"
            >
              <span className="font-mono text-[#1A6B5A] font-semibold">
                PMID·{p.pmid}
              </span>
              <span className="text-stone-400">·</span>
              <span className="font-medium text-[#163832]">{p.author}</span>
              <span className="text-stone-400">·</span>
              <span className="italic">{p.title}</span>
              <span className="text-stone-300 ml-4">◆</span>
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {publications.map((p, i) => {
          const tone = tones[i % tones.length]
          const rotate =
            i % 3 === 0
              ? "md:-rotate-[0.4deg]"
              : i % 3 === 1
              ? "md:rotate-[0.3deg]"
              : "md:-rotate-[0.2deg]"
          return (
            <ScrollReveal key={p.pmid} delay={(i % 6) * 60}>
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative block bg-white rounded-2xl border border-stone-200/80 p-6 shadow-[0_1px_3px_rgba(22,56,50,0.06)] hover:shadow-[0_20px_50px_-15px_rgba(22,56,50,0.25)] hover:-translate-y-1 hover:rotate-0 ${rotate} transition-all duration-500 ease-out h-full flex flex-col`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider border ${tone}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                    {p.year}
                  </span>
                  <span className="font-mono text-[10px] text-stone-400 tracking-tight">
                    PMID·{p.pmid}
                  </span>
                </div>

                <Quote className="w-5 h-5 text-[#1A6B5A]/20 mb-2 -ml-0.5" />
                <p className="font-display text-[17px] md:text-[18px] font-bold text-[#163832] leading-snug flex-1 group-hover:text-[#1A6B5A] transition-colors">
                  {p.viral}
                </p>

                <div className="mt-5 pt-4 border-t border-dashed border-stone-200">
                  <p className="text-[12px] text-[#6B7B75] leading-snug italic">
                    {p.title}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-[#163832] font-medium">
                      {p.author} · {p.journal}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1A6B5A] opacity-70 group-hover:opacity-100 group-hover:gap-1.5 transition-all">
                      PubMed
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                <span className="pointer-events-none absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#E8F5F0] to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>
            </ScrollReveal>
          )
        })}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
