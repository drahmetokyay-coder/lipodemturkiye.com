import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Star,
  Users,
  Award,
} from "lucide-react"
import { categoryColors, type Expert } from "@/data/experts"
import { ScoreCircle } from "./score-circle"

/** "Dr. A.Y." → "AY" — başlık ön ekini atlayıp son iki büyük harfi alır */
function initialsOf(name: string): string {
  const caps = name.match(/[A-ZÇĞİÖŞÜ]/g) ?? []
  return caps.slice(-2).join("") || name.slice(0, 2).toUpperCase()
}

/** 2100 → "2.100" (TR binlik ayırıcı) */
function formatCount(n: number): string {
  return n.toLocaleString("tr-TR")
}

function ExpertPhoto({
  expert,
  color,
}: {
  expert: Expert
  color: string
}) {
  return (
    <div className="relative shrink-0">
      <div
        className="relative h-[88px] w-[72px] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm"
        style={{
          background: `linear-gradient(150deg, ${color}26 0%, ${color}12 55%, #ffffff 100%)`,
        }}
      >
        {/* hafif teal pattern */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(135deg,transparent_0_6px,rgba(0,0,0,0.06)_6px_7px)]"
        />
        {expert.image ? (
          <Image
            src={expert.image}
            alt={`${expert.name}, ${expert.title}`}
            fill
            sizes="72px"
            className="object-cover"
          />
        ) : (
          <div
            className="relative flex h-full w-full items-center justify-center font-display text-2xl font-bold"
            style={{ color }}
            aria-label={`${expert.name} baş harf avatarı`}
          >
            {initialsOf(expert.name)}
          </div>
        )}
      </div>

      {/* doğrulanmış rozeti */}
      <span
        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-0.5 rounded-full bg-white px-1.5 py-0.5 shadow-[0_2px_6px_rgba(22,56,50,0.18)] ring-1 ring-stone-100"
        title="Doğrulanmış uzman"
      >
        <BadgeCheck className="h-3.5 w-3.5" style={{ color }} />
        <span className="text-[8px] font-bold uppercase tracking-wider text-[#163832]">
          Doğrulandı
        </span>
      </span>
    </div>
  )
}

export function ExpertCard({ expert }: { expert: Expert }) {
  const color = categoryColors[expert.category]

  return (
    <article
      className="group relative isolate flex flex-col overflow-hidden rounded-[22px] border border-stone-200/80 bg-white shadow-[0_1px_3px_rgba(22,56,50,0.05)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_55px_-18px_rgba(22,56,50,0.25)]"
      style={
        {
          ["--accent" as string]: color,
        } as React.CSSProperties
      }
    >
      {/* hover'da border parlaması */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 ring-1 ring-inset transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1.5px ${color}55` }}
      />
      {/* güvenlik kartı / hologram pattern */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_85%_8%,currentColor_0,transparent_42%),repeating-radial-gradient(circle_at_88%_6%,currentColor_0_1px,transparent_1px_9px)]"
        style={{ color }}
      />
      {/* hover glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ backgroundColor: `${color}26` }}
      />

      {/* üst aksan şeridi */}
      <span
        aria-hidden="true"
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${color} 0%, ${color}99 100%)`,
        }}
      />

      {expert.featured && (
        <span
          className="absolute right-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-sm ring-1 ring-stone-100"
          style={{ color }}
        >
          <Award className="h-2.5 w-2.5" />
          Öne Çıkan
        </span>
      )}

      <div className="relative flex flex-1 flex-col p-5">
        {/* kimlik: fotoğraf + ad + skor */}
        <div className="flex gap-4">
          <ExpertPhoto expert={expert} color={color} />

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate font-display text-[17px] font-bold leading-tight text-[#163832]">
                  {expert.name}
                </h3>
                <p
                  className="mt-0.5 truncate text-[13px] font-semibold"
                  style={{ color }}
                >
                  {expert.title}
                </p>
              </div>
              <ScoreCircle score={expert.score} color={color} size={58} />
            </div>

            {/* uzmanlık rozeti */}
            <span
              className="mt-2.5 inline-flex items-center rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ backgroundColor: `${color}14`, color }}
            >
              {expert.specialty}
            </span>
          </div>
        </div>

        {/* hasta sayısı */}
        <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-stone-50 px-3 py-2.5 ring-1 ring-stone-100">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
            style={{ backgroundColor: `${color}14`, color }}
          >
            <Users className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <span className="block text-[10px] uppercase tracking-wider text-[#9AA8A2]">
              {expert.patientLabel}
            </span>
            <span className="font-display text-[15px] font-bold text-[#163832]">
              {formatCount(expert.patientCount)}{" "}
              <span className="text-[11px] font-medium text-[#6B7B75]">
                hasta
              </span>
            </span>
          </div>
        </div>

        {/* mini bilgi satırı */}
        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] text-[#6B7B75]">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {expert.city}
          </span>
          <span className="h-3 w-px bg-stone-200" />
          <span className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-[#E8916D] text-[#E8916D]" />
            <span className="font-semibold text-[#163832]">
              {expert.rating.toFixed(1)}
            </span>
          </span>
          <span className="h-3 w-px bg-stone-200" />
          <span>{expert.reviewCount} yorum</span>
        </div>
      </div>

      {/* alt: uzman no + CTA */}
      <div className="relative flex items-center justify-between border-t border-dashed border-stone-200 px-5 py-3.5">
        <div className="flex flex-col leading-none">
          <span className="text-[9px] uppercase tracking-wider text-[#9AA8A2]">
            Uzman No
          </span>
          <span className="mt-0.5 font-mono text-[12px] font-semibold tracking-tight text-[#163832]">
            LT-{expert.id.padStart(4, "0")}
          </span>
        </div>

        <Link
          href={`/uzmanlar/${expert.slug}`}
          aria-label={`${expert.name} profilini görüntüle`}
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
          style={{ backgroundColor: color }}
        >
          Profili Gör
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  )
}
