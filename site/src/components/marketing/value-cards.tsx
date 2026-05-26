import Link from "next/link"
import { BookOpen, FlaskConical, UserRound, MessageCircle } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"

const values = [
  {
    icon: BookOpen,
    title: "Bilgi",
    description: "Bilimsel makaleler",
    href: "/lipodem-nedir",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Semptom analizi",
    href: "/araclar/semptom-testi",
  },
  {
    icon: UserRound,
    title: "Uzman",
    description: "50+ profesyonel",
    href: "/uzmanlar",
  },
  {
    icon: MessageCircle,
    title: "Topluluk",
    description: "3.000+ hasta",
    href: "/topluluk",
  },
]

export function ValueCards() {
  return (
    <section className="bg-[#E8F5F0] py-10 md:py-12">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 60}>
              <Link
                href={item.href}
                className="flex flex-col items-center text-center p-5 md:p-6 rounded-2xl bg-white border border-[#1A6B5A]/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E8F5F0] flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-[#1A6B5A]" />
                </div>
                <p className="font-display text-base font-bold text-[#163832]">
                  {item.title}
                </p>
                <p className="text-[12px] text-[#6B7B75] mt-0.5">
                  {item.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
