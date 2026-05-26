import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"
import { expertTips, categoryColors } from "@/data/experts"

const gradients: Record<string, string> = {
  cerrah: "from-[#1A6B5A] to-[#2D8B73]",
  diyetisyen: "from-[#E8916D] to-[#C75B3F]",
  fizyoterapist: "from-[#6B7B99] to-[#4A5568]",
  doktor: "from-[#1A6B5A] to-[#10473B]",
}

export function ExpertTips() {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="text-[13px] font-semibold text-[#1A6B5A] tracking-wider">
              UZMAN &Ouml;NERİLERİ
            </span>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-bold text-[#163832] mt-3">
              Uzmanlardan G&uuml;ncel İpu&ccedil;ları
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {expertTips.map((tip, i) => (
            <ScrollReveal key={tip.id} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <div
                  className={`h-2 bg-gradient-to-r ${gradients[tip.category]}`}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{
                        backgroundColor:
                          categoryColors[tip.category] + "15",
                        color: categoryColors[tip.category],
                      }}
                    >
                      {tip.expertName
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#163832]">
                        {tip.expertName}
                      </p>
                      <p className="text-[12px] text-[#6B7B75]">
                        {tip.expertTitle}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-semibold text-[#163832] text-[15px] leading-snug">
                    {tip.title}
                  </h3>
                  <p className="text-[#6B7B75] text-sm leading-relaxed mt-3 flex-1">
                    &ldquo;{tip.excerpt}&rdquo;
                  </p>

                  <Link
                    href={tip.blogSlug}
                    className="inline-flex items-center gap-1.5 text-[#1A6B5A] text-sm font-semibold mt-4 hover:gap-2.5 transition-all duration-200"
                  >
                    Devamını Oku
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
