import type { ExpertCategory } from "@/data/experts"

export type FilterKey = "all" | ExpertCategory

export type FilterTab = {
  key: FilterKey
  label: string
  count: number
}

type FilterTabsProps = {
  tabs: FilterTab[]
  active: FilterKey
  onChange: (key: FilterKey) => void
}

/**
 * Uzman kategorisi pill filtreleri.
 * Aktif: koyu teal · Pasif: açık gri + hover state.
 */
export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Uzman kategorisi filtreleri"
      className="flex flex-wrap justify-center gap-2"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.key
        return (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`${tab.label} (${tab.count} uzman)`}
            onClick={() => onChange(tab.key)}
            className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B5A]/40 focus-visible:ring-offset-2 ${
              isActive
                ? "bg-[#1A6B5A] text-white shadow-md shadow-[#1A6B5A]/20"
                : "bg-stone-100 text-[#6B7B75] hover:bg-stone-200 hover:text-[#163832]"
            }`}
          >
            {tab.label}
            <span
              className={`inline-flex items-center justify-center rounded-full px-1.5 min-w-[20px] h-5 text-[11px] font-bold tabular-nums transition-colors ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-white text-[#9AA8A2] group-hover:text-[#1A6B5A]"
              }`}
            >
              {tab.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
