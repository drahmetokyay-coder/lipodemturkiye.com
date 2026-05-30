"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ClipboardCheck,
  Layers,
  GitCompare,
  Activity,
  HeartPulse,
  Ruler,
  Apple,
  Shirt,
  Dumbbell,
  Scissors,
  ArrowRight,
  Sparkles,
  Compass,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getAllResults, type TestSlug } from "@/lib/test-storage";

type Category = "tani" | "olcum" | "tedavi" | "cerrahi";

interface TestCard {
  slug: TestSlug;
  href: string;
  title: string;
  category: Category;
  categoryLabel: string;
  scaleHint: string;
  questions: number;
  minutes: number;
  taken: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  ready: boolean;
}

const CATEGORIES: Array<{ id: Category | "all"; label: string }> = [
  { id: "all", label: "Tümü" },
  { id: "tani", label: "Tanı" },
  { id: "olcum", label: "Ölçüm" },
  { id: "tedavi", label: "Tedavi" },
  { id: "cerrahi", label: "Cerrahi" },
];

const FEATURED: TestCard = {
  slug: "lipodem-semptom-testi",
  href: "/araclar/lipodem-semptom-testi",
  title: "Lipödem Semptom Testi",
  category: "tani",
  categoryLabel: "TANI · BAŞLANGIÇ NOKTASI",
  scaleHint: "12 bilimsel kriter, kişiselleştirilmiş yol haritası",
  questions: 12,
  minutes: 2,
  taken: "3.142",
  icon: ClipboardCheck,
  iconBg: "rgba(255,255,255,0.15)",
  iconColor: "#ffffff",
  ready: true,
};

const TESTS: TestCard[] = [
  {
    slug: "lipodem-lenfodem-ayirici-tani",
    href: "/araclar/lipodem-lenfodem-ayirici-tani",
    title: "Lipödem mi, Lenfödem mi?",
    category: "tani",
    categoryLabel: "TANI · AYIRICI",
    scaleHint: "Földi kriter",
    questions: 10,
    minutes: 2,
    taken: "1.205",
    icon: GitCompare,
    iconBg: "linear-gradient(135deg,#EEF0F4,#DDE2EC)",
    iconColor: "#6B7B99",
    ready: true,
  },
  {
    slug: "lipodem-evre-belirleme",
    href: "/araclar/lipodem-evre-belirleme",
    title: "Evre Belirleme",
    category: "olcum",
    categoryLabel: "ÖLÇÜM · KLİNİK",
    scaleHint: "Schmeller",
    questions: 9,
    minutes: 3,
    taken: "1.840",
    icon: Layers,
    iconBg: "linear-gradient(135deg,#E8F5F0,#D2EBE0)",
    iconColor: "#2D8B73",
    ready: true,
  },
  {
    slug: "agri-vas-skoru",
    href: "/araclar/agri-vas-skoru",
    title: "Ağrı VAS Skoru",
    category: "olcum",
    categoryLabel: "ÖLÇÜM · VAS",
    scaleHint: "BPI",
    questions: 6,
    minutes: 1,
    taken: "892",
    icon: HeartPulse,
    iconBg: "linear-gradient(135deg,#FEF3E6,#FCE3CC)",
    iconColor: "#C46B3D",
    ready: true,
  },
  {
    slug: "lipodem-yasam-kalitesi",
    href: "/araclar/lipodem-yasam-kalitesi",
    title: "Yaşam Kalitesi",
    category: "olcum",
    categoryLabel: "ÖLÇÜM · QoL",
    scaleHint: "LYMPH-ICF",
    questions: 14,
    minutes: 4,
    taken: "1.402",
    icon: Activity,
    iconBg: "linear-gradient(135deg,#E8F5F0,#D2EBE0)",
    iconColor: "#1A6B5A",
    ready: true,
  },
  {
    slug: "bel-kalca-orani-whr",
    href: "/araclar/bel-kalca-orani-whr",
    title: "Bel-Kalça Oranı",
    category: "olcum",
    categoryLabel: "ÖLÇÜM · WHR",
    scaleHint: "WHO",
    questions: 3,
    minutes: 1,
    taken: "2.310",
    icon: Ruler,
    iconBg: "linear-gradient(135deg,#F4EFE5,#E8DFCC)",
    iconColor: "#8B6B3D",
    ready: true,
  },
  {
    slug: "anti-inflamatuar-diyet-skoru",
    href: "/araclar/anti-inflamatuar-diyet-skoru",
    title: "Anti-İnflamatuar Diyet",
    category: "tedavi",
    categoryLabel: "TEDAVİ · BESLENME",
    scaleHint: "MDS",
    questions: 10,
    minutes: 3,
    taken: "1.760",
    icon: Apple,
    iconBg: "linear-gradient(135deg,#FEF3E6,#FCE3CC)",
    iconColor: "#C46B3D",
    ready: true,
  },
  {
    slug: "kompresyon-ihtiyac-testi",
    href: "/araclar/kompresyon-ihtiyac-testi",
    title: "Kompresyon İhtiyaç",
    category: "tedavi",
    categoryLabel: "TEDAVİ · BASINÇ",
    scaleHint: "CEAP",
    questions: 7,
    minutes: 2,
    taken: "987",
    icon: Shirt,
    iconBg: "linear-gradient(135deg,#EEF0F4,#DDE2EC)",
    iconColor: "#6B7B99",
    ready: true,
  },
  {
    slug: "egzersiz-tolerans-testi",
    href: "/araclar/egzersiz-tolerans-testi",
    title: "Egzersiz Tolerans",
    category: "tedavi",
    categoryLabel: "TEDAVİ · AKTİVİTE",
    scaleHint: "Borg",
    questions: 8,
    minutes: 2,
    taken: "640",
    icon: Dumbbell,
    iconBg: "linear-gradient(135deg,#E8F5F0,#D2EBE0)",
    iconColor: "#2D8B73",
    ready: true,
  },
  {
    slug: "cerrahi-adaylik-degerlendirmesi",
    href: "/araclar/cerrahi-adaylik-degerlendirmesi",
    title: "Cerrahi Adaylık",
    category: "cerrahi",
    categoryLabel: "CERRAHİ",
    scaleHint: "Halland",
    questions: 11,
    minutes: 4,
    taken: "1.118",
    icon: Scissors,
    iconBg: "linear-gradient(135deg,#FFE8DC,#FFD4B8)",
    iconColor: "#1A6B5A",
    ready: true,
  },
];

const BAND_LABEL_PRETTY: Record<string, string> = {
  LOW: "Düşük",
  MODERATE: "Orta",
  HIGH: "Yüksek",
  STAGE_1: "Evre 1",
  STAGE_2: "Evre 2",
  STAGE_3: "Evre 3",
};

function shortDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("tr-TR", { day: "numeric", month: "short" });
  } catch {
    return "";
  }
}

export function TestHub() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [lastResults, setLastResults] = useState<Record<string, { band: string; takenAt: string }>>(
    {}
  );
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map: Record<string, { band: string; takenAt: string }> = {};
    for (const r of getAllResults()) {
      map[r.slug] = { band: r.band, takenAt: r.takenAt };
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from localStorage (external system) on mount
    setLastResults(map);
  }, []);

  useEffect(() => {
    const tiles = rootRef.current?.querySelectorAll<HTMLElement>(".th-tile");
    if (!tiles) return;
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];
    tiles.forEach((tile) => {
      const onMove = (e: MouseEvent) => {
        const r = tile.getBoundingClientRect();
        const mx = ((e.clientX - r.left) / r.width) * 100;
        const my = ((e.clientY - r.top) / r.height) * 100;
        tile.style.setProperty("--mx", mx + "%");
        tile.style.setProperty("--my", my + "%");
      };
      tile.addEventListener("mousemove", onMove);
      handlers.push({ el: tile, fn: onMove });
    });
    return () => handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
  }, [filter]);

  const visibleTests = filter === "all" ? TESTS : TESTS.filter((t) => t.category === filter);
  const showFeatured = filter === "all" || filter === FEATURED.category;

  const counts: Record<Category | "all", number> = {
    all: TESTS.length + 1,
    tani: TESTS.filter((t) => t.category === "tani").length + (FEATURED.category === "tani" ? 1 : 0),
    olcum:
      TESTS.filter((t) => t.category === "olcum").length + (FEATURED.category === "olcum" ? 1 : 0),
    tedavi:
      TESTS.filter((t) => t.category === "tedavi").length + (FEATURED.category === "tedavi" ? 1 : 0),
    cerrahi:
      TESTS.filter((t) => t.category === "cerrahi").length +
      (FEATURED.category === "cerrahi" ? 1 : 0),
  };

  return (
    <section
      id="testler"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFCF6] via-[#FAF7F2] to-[#EFEBE0] py-20 md:py-28"
      style={{ perspective: "1500px" }}
    >
      <div
        className="th-aurora-orb pointer-events-none absolute -top-32 left-[10%] w-[480px] h-[480px] rounded-full blur-[80px] opacity-55"
        style={{
          background: "radial-gradient(circle, #1A6B5A 0%, transparent 60%)",
          animation: "th-aurora 20s ease-in-out infinite",
        }}
      />
      <div
        className="th-aurora-orb pointer-events-none absolute -bottom-40 right-[5%] w-[520px] h-[520px] rounded-full blur-[80px] opacity-55"
        style={{
          background: "radial-gradient(circle, #C46B3D 0%, transparent 60%)",
          animation: "th-aurora 20s ease-in-out infinite -10s",
        }}
      />
      <div className="th-noise absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none" />

      <div ref={rootRef} className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden md:flex justify-center gap-2.5 mb-10">
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#1A6B5A]/15 shadow-sm">
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500"
              style={{ animation: "th-pulse-dot 1.6s infinite" }}
            />
            <div className="th-ticker-marq overflow-hidden max-w-[200px] whitespace-nowrap text-[11px] font-semibold text-[#2D3B36]">
              <span className="inline-block" style={{ animation: "th-ticker-l 14s linear infinite" }}>
                Şu an 214 kişi test çözüyor &nbsp;·&nbsp; 8.927 sonuç bu hafta &nbsp;·&nbsp; Şu an 214 kişi test çözüyor &nbsp;·&nbsp; 8.927 sonuç bu hafta &nbsp;·&nbsp;
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#C46B3D]/20 shadow-sm">
            <div className="th-ticker-marq overflow-hidden max-w-[200px] whitespace-nowrap text-[11px] font-semibold text-[#2D3B36]">
              <span className="inline-block" style={{ animation: "th-ticker-r 16s linear infinite" }}>
                12.450 toplam katılım &nbsp;·&nbsp; %92 memnuniyet &nbsp;·&nbsp; 12.450 toplam katılım &nbsp;·&nbsp; %92 memnuniyet &nbsp;·&nbsp;
              </span>
            </div>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#E8916D", animation: "th-pulse-dot 1.6s infinite" }}
            />
          </div>
        </div>

        <div className="text-center">
          <span className="inline-block text-[11px] tracking-[3px] font-extrabold text-[#1A6B5A] px-3.5 py-1.5 rounded-full bg-[#1A6B5A]/8 border border-[#1A6B5A]/18 backdrop-blur-sm">
            DEĞERLENDİRME ARAÇLARI
          </span>
          <h2 className="mt-5 text-[32px] md:text-[44px] font-black text-[#1a2421] leading-[1.05] tracking-[-0.025em]">
            10 bilimsel test,
            <br />
            <span
              className="th-grad-title"
              style={{
                background:
                  "linear-gradient(120deg, #1A6B5A 0%, #2D8B73 30%, #E8916D 60%, #C46B3D 100%)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                animation: "th-grad-shift 6s ease infinite",
              }}
            >
              ücretsiz ve anonim
            </span>
          </h2>
          <p className="mt-3 text-[15px] text-[#5a6a64] max-w-xl mx-auto">
            Semptomdan tedavi ihtiyacına, lipödem yolculuğunun her aşamasını dakikalar içinde
            değerlendirin.
          </p>

          <div className="mt-7 flex justify-center gap-8 md:gap-12">
            <Counter value="12.450" label="TOPLAM KATILIM" />
            <Counter value="10" label="BİLİMSEL TEST" />
            <Counter value="%92" label="MEMNUNİYET" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                filter === c.id
                  ? "text-white border-transparent"
                  : "text-[#2D3B36] bg-white/65 border border-[#d9d3c7]/60 backdrop-blur-md hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_8px_22px_-8px_rgba(26,107,90,0.22)] hover:border-[#1A6B5A]/30"
              }`}
              style={
                filter === c.id
                  ? {
                      background: "linear-gradient(135deg,#1A6B5A,#0E4A3E)",
                      boxShadow:
                        "0 10px 26px -6px rgba(26,107,90,0.5), 0 0 0 4px rgba(26,107,90,0.1), inset 0 1px 0 rgba(255,255,255,0.15)",
                    }
                  : undefined
              }
            >
              {c.label}
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  filter === c.id ? "bg-white/22" : "bg-black/6"
                }`}
              >
                {counts[c.id]}
              </span>
            </button>
          ))}
        </div>

        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4"
          style={{ transformStyle: "preserve-3d" }}
        >
          {showFeatured && <HeroTile card={FEATURED} lastResult={lastResults[FEATURED.slug]} />}
          {visibleTests.map((t, i) => (
            <Tile key={t.slug} card={t} lastResult={lastResults[t.slug]} index={i} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white/70 backdrop-blur-md border border-[#d9d3c7]/65 px-5 md:px-6 py-5 grid grid-cols-[auto_1fr_auto] gap-4 items-center shadow-[0_8px_24px_rgba(26,107,90,0.08)]">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center th-floating-icn"
            style={{
              background: "linear-gradient(135deg,#FEF3E6,#FFE0CC)",
              animation: "th-float-y 3s ease-in-out infinite",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), 0 6px 12px rgba(196,107,61,0.15)",
            }}
          >
            <Compass className="w-5 h-5 text-[#C46B3D]" />
          </div>
          <p className="text-[13px] text-[#5a6a64] leading-snug">
            <strong className="text-[#1A6B5A] font-bold">Yolculuk önerisi:</strong> Yeni
            gelenler için —{" "}
            <Link
              href="/araclar/lipodem-semptom-testi"
              className="font-bold text-[#1A6B5A] hover:underline"
            >
              Semptom Testi
            </Link>{" "}
            ile başlayın, sonucunuza göre sıradaki testlere yönlendirilirsiniz.
          </p>
          <Link
            href="/araclar/lipodem-semptom-testi"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-xs font-bold transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg,#1A6B5A,#0E4A3E)",
              boxShadow:
                "0 10px 22px -6px rgba(26,107,90,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            Başlat <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Counter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-2xl md:text-3xl font-black tracking-tight"
        style={{
          background: "linear-gradient(135deg,#1A6B5A,#2D8B73)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
        }}
      >
        {value}
      </div>
      <div className="text-[10px] tracking-[1.5px] font-bold text-[#8a9690] mt-1">{label}</div>
    </div>
  );
}

function HeroTile({
  card,
  lastResult,
}: {
  card: TestCard;
  lastResult?: { band: string; takenAt: string };
}) {
  const Icon = card.icon;
  return (
    <Link
      href={card.href}
      className="th-tile col-span-2 md:col-span-4 md:row-span-2 group relative rounded-[20px] p-7 md:p-9 text-white overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-3 hover:shadow-[0_50px_100px_-30px_rgba(14,74,62,0.6)]"
      style={{
        background:
          "radial-gradient(at 20% 0%, rgba(45,139,115,0.7) 0%, transparent 50%), radial-gradient(at 80% 100%, rgba(196,107,61,0.5) 0%, transparent 50%), linear-gradient(135deg,#1A6B5A 0%,#0E4A3E 100%)",
        animation: "th-card-in 720ms cubic-bezier(0.23,1,0.32,1) both",
        animationDelay: "80ms",
      }}
    >
      <div
        className="th-shimmer-layer absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "th-shimmer 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 280px at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.18), transparent 55%)",
        }}
      />

      <div
        className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-[1.5px] font-extrabold text-white"
        style={{
          background: "linear-gradient(135deg,#E8916D,#C46B3D)",
          boxShadow:
            "0 12px 24px -6px rgba(232,145,109,0.6), inset 0 1px 0 rgba(255,255,255,0.35)",
        }}
      >
        <Sparkles
          className="w-3 h-3 th-spin-star"
          style={{ animation: "th-spin-slow 3s linear infinite" }}
        />
        EN POPÜLER
      </div>

      <div
        className="w-16 h-16 md:w-[70px] md:h-[70px] rounded-[18px] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105 group-hover:-rotate-6"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.22)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35), 0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
      </div>

      <div className="mt-5 text-[10px] tracking-[1.5px] font-extrabold opacity-80">
        {card.categoryLabel}
      </div>
      <h3 className="mt-2 text-2xl md:text-[34px] font-black leading-[1.1] max-w-[420px] tracking-[-0.02em]">
        {card.title}
      </h3>
      <p className="mt-3 text-[14px] opacity-85 max-w-[380px] leading-relaxed">
        {card.scaleHint}.
      </p>

      <div className="mt-6 flex gap-7 pt-5 border-t border-white/15">
        <div>
          <div className="text-xl md:text-[26px] font-extrabold">{card.questions}</div>
          <div className="text-[10px] tracking-[1.5px] opacity-75 font-semibold">SORU</div>
        </div>
        <div>
          <div className="text-xl md:text-[26px] font-extrabold">{card.minutes} dk</div>
          <div className="text-[10px] tracking-[1.5px] opacity-75 font-semibold">SÜRE</div>
        </div>
        <div>
          <div className="text-xl md:text-[26px] font-extrabold">{card.taken}</div>
          <div className="text-[10px] tracking-[1.5px] opacity-75 font-semibold">KATILIM</div>
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-[#1A6B5A] font-extrabold text-[13px] transition-transform hover:-translate-y-0.5">
        Teste başla
        <span
          className="w-6 h-6 rounded-full text-white flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#1A6B5A,#0E4A3E)" }}
        >
          <ArrowRight className="w-3 h-3" />
        </span>
      </div>

      {lastResult && (
        <div className="absolute bottom-7 right-7 inline-flex items-center gap-1.5 bg-white/12 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Son: {BAND_LABEL_PRETTY[lastResult.band] ?? lastResult.band} · {shortDate(lastResult.takenAt)}
        </div>
      )}
    </Link>
  );
}

function Tile({
  card,
  lastResult,
  index,
}: {
  card: TestCard;
  lastResult?: { band: string; takenAt: string };
  index: number;
}) {
  const Icon = card.icon;
  const disabled = !card.ready;

  const inner = (
    <div
      className={`th-tile col-span-2 group relative rounded-[20px] bg-white p-5 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        disabled
          ? "opacity-70"
          : "hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(26,107,90,0.30)]"
      }`}
      style={{
        border: "1px solid rgba(236,230,220,1)",
        animation: "th-card-in 720ms cubic-bezier(0.23,1,0.32,1) both",
        animationDelay: `${160 + index * 80}ms`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 rounded-[20px] opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          padding: "1.5px",
          background:
            "linear-gradient(135deg, rgba(26,107,90,0.25), rgba(255,255,255,0.04) 30%, rgba(196,107,61,0.20) 70%, rgba(26,107,90,0.25))",
          backgroundSize: "200% 200%",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 220px at var(--mx,50%) var(--my,50%), rgba(26,107,90,0.13), transparent 55%)",
        }}
      />

      <div
        className="w-12 h-12 rounded-[14px] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[-10deg] group-hover:scale-110"
        style={{ background: card.iconBg, color: card.iconColor }}
      >
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>

      <div
        className="mt-3.5 text-[9px] font-extrabold tracking-[1.4px]"
        style={{ color: card.iconColor }}
      >
        {card.categoryLabel}
      </div>
      <h3 className="mt-1 text-[15px] font-extrabold text-[#1a2421] leading-snug tracking-[-0.015em]">
        {card.title}
      </h3>

      <div className="mt-3 flex items-center gap-2.5 text-[11px] text-[#8a9690] flex-wrap">
        <span>{card.questions} soru</span>
        <span className="w-[3px] h-[3px] rounded-full bg-[#c4cdc7]" />
        <span>{card.minutes} dk</span>
        <span className="w-[3px] h-[3px] rounded-full bg-[#c4cdc7]" />
        <span>{card.scaleHint}</span>
      </div>

      {lastResult ? (
        <div className="mt-3 inline-flex items-center gap-1.5 bg-gradient-to-br from-[#F0F8F4] to-[#E8F5F0] text-[#15594B] border border-[#1A6B5A]/22 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-[0_2px_6px_rgba(26,107,90,0.08),inset_0_1px_0_rgba(255,255,255,0.7)]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#2D8B73]"
            style={{ animation: "th-pulse-dot 1.8s infinite" }}
          />
          Son sonuç: {BAND_LABEL_PRETTY[lastResult.band] ?? lastResult.band} ·{" "}
          {shortDate(lastResult.takenAt)}
        </div>
      ) : !card.ready ? (
        <div className="mt-3 inline-flex items-center gap-1.5 bg-stone-100 text-stone-600 border border-stone-200 px-2.5 py-1 rounded-full text-[10px] font-bold">
          Yakında
        </div>
      ) : null}

      {card.ready && (
        <div
          aria-hidden
          className="absolute bottom-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            background: "linear-gradient(135deg,#1A6B5A,#0E4A3E)",
            boxShadow: "0 10px 18px -4px rgba(26,107,90,0.5)",
          }}
        >
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </div>
  );

  if (disabled) {
    return <div aria-label={`${card.title} — yakında`}>{inner}</div>;
  }
  return (
    <Link href={card.href} aria-label={card.title}>
      {inner}
    </Link>
  );
}
