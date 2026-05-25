"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const regionData: Record<string, { name: string; clinicCount: number; cities: string[]; color: string }> = {
  marmara: {
    name: "Marmara",
    clinicCount: 12,
    cities: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ", "Balıkesir"],
    color: "#1A6B5A",
  },
  ege: {
    name: "Ege",
    clinicCount: 5,
    cities: ["İzmir", "Muğla", "Aydın", "Manisa", "Denizli"],
    color: "#2D8B73",
  },
  akdeniz: {
    name: "Akdeniz",
    clinicCount: 6,
    cities: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    color: "#E8916D",
  },
  "ic-anadolu": {
    name: "İç Anadolu",
    clinicCount: 7,
    cities: ["Ankara", "Konya", "Kayseri", "Eskişehir", "Sivas"],
    color: "#C75B3F",
  },
  karadeniz: {
    name: "Karadeniz",
    clinicCount: 1,
    cities: ["Samsun", "Trabzon", "Zonguldak", "Rize", "Ordu"],
    color: "#5BBF9E",
  },
  "dogu-anadolu": {
    name: "Doğu Anadolu",
    clinicCount: 0,
    cities: ["Erzurum", "Van", "Malatya", "Elazığ", "Ağrı"],
    color: "#93D4BE",
  },
  "guneydogu-anadolu": {
    name: "Güneydoğu Anadolu",
    clinicCount: 1,
    cities: ["Gaziantep", "Diyarbakır", "Şanlıurfa", "Mardin"],
    color: "#EFA278",
  },
};

const totalClinics = Object.values(regionData).reduce((sum, r) => sum + r.clinicCount, 0);

function findRegionId(target: Element): string | null {
  let el: Element | null = target;
  while (el) {
    if (el.classList?.contains("region") && el.id && regionData[el.id]) {
      return el.id;
    }
    el = el.parentElement;
  }
  return null;
}

export function TurkeyMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const objectRef = useRef<HTMLObjectElement>(null);
  const svgDocRef = useRef<Document | null>(null);
  const active = activeRegion ? regionData[activeRegion] : null;

  const colorRegion = useCallback((id: string, highlight: boolean) => {
    const svgDoc = svgDocRef.current;
    if (!svgDoc) return;
    const el = svgDoc.getElementById(id);
    if (!el) return;
    const region = regionData[id];
    if (!region) return;

    const fill = highlight ? region.color + "25" : "#e7e5e4";
    const stroke = highlight ? region.color : "#d6d3d1";
    const strokeWidth = highlight ? "1.5" : "0.5";

    el.querySelectorAll("path").forEach((p) => {
      p.style.fill = fill;
      p.style.stroke = stroke;
      p.style.strokeWidth = strokeWidth;
    });
    if (el.tagName === "path") {
      (el as unknown as SVGPathElement).style.fill = fill;
      (el as unknown as SVGPathElement).style.stroke = stroke;
      (el as unknown as SVGPathElement).style.strokeWidth = strokeWidth;
    }
  }, []);

  useEffect(() => {
    const obj = objectRef.current;
    if (!obj) return;

    const setupSvg = () => {
      const svgDoc = obj.contentDocument;
      if (!svgDoc) return;
      svgDocRef.current = svgDoc;

      const svgEl = svgDoc.querySelector("svg");
      if (!svgEl) return;

      // Tüm path'lere başlangıç stili
      svgEl.querySelectorAll("path").forEach((p) => {
        p.style.fill = "#e7e5e4";
        p.style.stroke = "#d6d3d1";
        p.style.strokeWidth = "0.5";
        p.style.transition = "fill 0.25s ease, stroke 0.25s ease, stroke-width 0.25s ease";
        p.style.cursor = "pointer";
      });

      // Tek event listener SVG root'una -- event delegation
      svgEl.addEventListener("mouseover", (e) => {
        const regionId = findRegionId(e.target as Element);
        if (regionId) setActiveRegion(regionId);
      });

      svgEl.addEventListener("mouseout", (e) => {
        const related = (e as MouseEvent).relatedTarget as Element | null;
        if (!related || !svgEl.contains(related)) {
          setActiveRegion(null);
        }
      });
    };

    obj.addEventListener("load", setupSvg);
    if (obj.contentDocument?.readyState === "complete") setupSvg();

    return () => obj.removeEventListener("load", setupSvg);
  }, []);

  // activeRegion değişince renkleri güncelle
  useEffect(() => {
    Object.keys(regionData).forEach((id) => {
      colorRegion(id, id === activeRegion);
    });
  }, [activeRegion, colorRegion]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      {/* Sol: Türkiye haritası */}
      <div className="lg:col-span-3">
        <object
          ref={objectRef}
          data="/turkey-map.svg"
          type="image/svg+xml"
          className="w-full h-auto"
          aria-label="Türkiye bölgeler haritası"
        />

        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#1A6B5A]" />
            <span className="text-xs text-stone-500">Klinik mevcut</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-stone-300" />
            <span className="text-xs text-stone-500">Yakında</span>
          </div>
        </div>
      </div>

      {/* Sağ: Bilgi paneli -- sabit yükseklik */}
      <div className="lg:col-span-2">
        <div className="text-center lg:text-left">
          <p className="font-display text-6xl md:text-7xl font-black text-[#2D3B36] tracking-tight leading-none">
            {totalClinics}
          </p>
          <p className="text-stone-500 font-medium mt-2 uppercase tracking-wider text-sm">
            Lipödem tedavi merkezi
          </p>
          <p className="text-stone-400 text-sm mt-1">
            7 bölge, 81 il genelinde
          </p>
        </div>

        {/* Bölge listesi */}
        <div className="mt-8 space-y-1">
          {Object.entries(regionData).map(([id, region]) => (
            <div
              key={id}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg cursor-pointer transition-colors duration-200 ${
                activeRegion === id ? "bg-stone-100" : "hover:bg-stone-50"
              }`}
              onMouseEnter={() => setActiveRegion(id)}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: region.clinicCount > 0 ? region.color : "#d6d3d1" }}
                />
                <span className={`text-sm ${activeRegion === id ? "font-bold text-[#2D3B36]" : "font-medium text-stone-700"}`}>
                  {region.name}
                </span>
              </div>
              <span className={`text-sm font-bold ${region.clinicCount > 0 ? "text-[#2D3B36]" : "text-stone-300"}`}>
                {region.clinicCount > 0 ? region.clinicCount : "—"}
              </span>
            </div>
          ))}
        </div>

        {/* Detay kutusu -- sabit yükseklik, içerik değişir */}
        <div className="mt-6 h-24">
          {active && active.clinicCount > 0 ? (
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <p className="font-semibold text-stone-800 text-sm">{active.name} Bölgesi</p>
              <p className="text-xs text-stone-500 mt-1">{active.cities.join(", ")}</p>
              <p className="text-xs text-stone-400 mt-1">
                <span className="font-bold text-[#2D3B36]">{active.clinicCount}</span> aktif tedavi merkezi
              </p>
            </div>
          ) : active ? (
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
              <p className="font-semibold text-stone-800 text-sm">{active.name} Bölgesi</p>
              <p className="text-xs text-stone-500 mt-1">{active.cities.join(", ")}</p>
              <p className="text-xs text-orange-500 mt-1 font-medium">Yakında klinik eklenecek</p>
            </div>
          ) : (
            <div className="p-4 bg-stone-50/50 rounded-xl border border-transparent">
              <p className="text-xs text-stone-400 italic">Detay görmek için harita üzerinde bir bölgeye gelin</p>
            </div>
          )}
        </div>

        <Link
          href="/klinikler"
          className="btn-pill-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm mt-4 w-full lg:w-auto"
        >
          <MapPin className="w-4 h-4" />
          Tüm Klinikleri Gör
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
