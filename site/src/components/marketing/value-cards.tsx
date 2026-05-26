import Link from "next/link"
import Image from "next/image"
import { BookOpen, FlaskConical, UserRound, MessageCircle, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/marketing/scroll-reveal"

const values = [
  {
    icon: BookOpen,
    title: "Bilgi",
    description: "Bilimsel makaleler",
    href: "/lipodem-nedir",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=75&auto=format&fit=crop",
    alt: "Açık kitaplar — bilimsel kaynaklar",
  },
  {
    icon: FlaskConical,
    title: "Test",
    description: "Semptom analizi",
    href: "/araclar/semptom-testi",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=75&auto=format&fit=crop",
    alt: "Laboratuvar — semptom analizi",
  },
  {
    icon: UserRound,
    title: "Uzman",
    description: "50+ profesyonel",
    href: "/uzmanlar",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=75&auto=format&fit=crop",
    alt: "Sağlık profesyoneli — uzman ağı",
  },
  {
    icon: MessageCircle,
    title: "Topluluk",
    description: "3.000+ hasta",
    href: "/topluluk",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=75&auto=format&fit=crop",
    alt: "Destek topluluğu",
  },
]

export function ValueCards() {
  return (
    <section className="bg-[#E8F5F0] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <Link
                href={item.href}
                className="group relative block overflow-hidden rounded-2xl aspect-[3/4] shadow-md hover:shadow-2xl hover:shadow-[#1A6B5A]/20 hover:-translate-y-1 transition-all duration-500"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0E4A3E] via-[#1A6B5A]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#1A6B5A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg ring-1 ring-white/40 transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110">
                  <item.icon className="w-5 h-5 text-[#1A6B5A]" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-white/85 mt-0.5">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-[#E8F5F0] -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Keşfet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
