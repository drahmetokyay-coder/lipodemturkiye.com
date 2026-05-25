"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const regionData: Record<string, { name: string; clinicCount: number; cities: string[]; color: string; slug: string }> = {
  marmara: {
    name: "Marmara",
    clinicCount: 12,
    cities: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ", "Balıkesir"],
    color: "#7C3AED",
    slug: "istanbul",
  },
  ege: {
    name: "Ege",
    clinicCount: 5,
    cities: ["İzmir", "Muğla", "Aydın", "Manisa", "Denizli"],
    color: "#A855F7",
    slug: "izmir",
  },
  akdeniz: {
    name: "Akdeniz",
    clinicCount: 6,
    cities: ["Antalya", "Adana", "Mersin", "Hatay", "Isparta"],
    color: "#E11D48",
    slug: "antalya",
  },
  "ic-anadolu": {
    name: "İç Anadolu",
    clinicCount: 7,
    cities: ["Ankara", "Konya", "Kayseri", "Eskişehir", "Sivas"],
    color: "#F97316",
    slug: "ankara",
  },
  karadeniz: {
    name: "Karadeniz",
    clinicCount: 1,
    cities: ["Samsun", "Trabzon", "Zonguldak", "Rize", "Ordu"],
    color: "#06B6D4",
    slug: "samsun",
  },
  "dogu-anadolu": {
    name: "Doğu Anadolu",
    clinicCount: 0,
    cities: ["Erzurum", "Van", "Malatya", "Elazığ", "Ağrı"],
    color: "#8B5CF6",
    slug: "erzurum",
  },
  "guneydogu-anadolu": {
    name: "Güneydoğu Anadolu",
    clinicCount: 1,
    cities: ["Gaziantep", "Diyarbakır", "Şanlıurfa", "Mardin"],
    color: "#EC4899",
    slug: "gaziantep",
  },
};

const totalClinics = Object.values(regionData).reduce((sum, r) => sum + r.clinicCount, 0);

export function TurkeyMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const objectRef = useRef<HTMLObjectElement>(null);
  const active = activeRegion ? regionData[activeRegion] : null;

  useEffect(() => {
    const obj = objectRef.current;
    if (!obj) return;

    const setupSvg = () => {
      const svgDoc = obj.contentDocument;
      if (!svgDoc) return;

      const paths = svgDoc.querySelectorAll("path.region, g.region");

      paths.forEach((el) => {
        const id = el.id;
        const region = regionData[id];
        if (!region) return;

        // Başlangıç rengi
        if (el.tagName === "path") {
          (el as SVGPathElement).style.fill = "#e7e5e4";
          (el as SVGPathElement).style.stroke = "#d6d3d1";
          (el as SVGPathElement).style.strokeWidth = "0.5";
          (el as SVGPathElement).style.transition = "all 0.3s ease";
          (el as SVGPathElement).style.cursor = "pointer";
        } else {
          el.querySelectorAll("path").forEach((p) => {
            p.style.fill = "#e7e5e4";
            p.style.stroke = "#d6d3d1";
            p.style.strokeWidth = "0.5";
            p.style.transition = "all 0.3s ease";
            p.style.cursor = "pointer";
          });
        }

        const setColor = (color: string, stroke: string) => {
          if (el.tagName === "path") {
            (el as SVGPathElement).style.fill = color;
            (el as SVGPathElement).style.stroke = stroke;
          } else {
            el.querySelectorAll("path").forEach((p) => {
              p.style.fill = color;
              p.style.stroke = stroke;
            });
          }
        };

        el.addEventListener("mouseenter", () => {
          setColor(region.color + "30", region.color);
          setActiveRegion(id);
        });

        el.addEventListener("mouseleave", () => {
          setColor("#e7e5e4", "#d6d3d1");
          setActiveRegion(null);
        });
      });
    };

    obj.addEventListener("load", setupSvg);
    if (obj.contentDocument?.readyState === "complete") setupSvg();

    return () => obj.removeEventListener("load", setupSvg);
  }, []);

  // Dışarıdan hover olunca SVG'deki bölgeyi de renklendir
  useEffect(() => {
    const obj = objectRef.current;
    if (!obj) return;
    const svgDoc = obj.contentDocument;
    if (!svgDoc) return;

    Object.keys(regionData).forEach((id) => {
      const el = svgDoc.getElementById(id);
      if (!el) return;
      const region = regionData[id];
      const isActive = activeRegion === id;
      const color = isActive ? region.color + "30" : "#e7e5e4";
      const stroke = isActive ? region.color : "#d6d3d1";

      if (el.tagName === "path") {
        (el as unknown as SVGPathElement).style.fill = color;
        (el as unknown as SVGPathElement).style.stroke = stroke;
      } else {
        el.querySelectorAll("path").forEach((p) => {
          p.style.fill = color;
          p.style.stroke = stroke;
        });
      }
    });
  }, [activeRegion]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      {/* Sol: Gerçek Türkiye haritası */}
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
            <span className="w-3 h-3 rounded-full bg-purple-600" />
            <span className="text-xs text-stone-500">Klinik mevcut</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-stone-300" />
            <span className="text-xs text-stone-500">Yakında</span>
          </div>
        </div>
      </div>

      {/* Sağ: Bilgi paneli */}
      <div className="lg:col-span-2">
        <div className="text-center lg:text-left">
          <p className="font-display text-6xl md:text-7xl font-black text-[#000] tracking-tight leading-none">
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
        <div className="mt-8 space-y-2">
          {Object.entries(regionData).map(([id, region]) => (
            <div
              key={id}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                activeRegion === id ? "bg-stone-100 shadow-soft" : "hover:bg-stone-50"
              }`}
              onMouseEnter={() => setActiveRegion(id)}
              onMouseLeave={() => setActiveRegion(null)}
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: region.clinicCount > 0 ? region.color : "#d6d3d1" }}
                />
                <span className="font-semibold text-stone-800 text-sm">{region.name}</span>
              </div>
              <span className={`text-sm font-bold ${region.clinicCount > 0 ? "text-[#000]" : "text-stone-300"}`}>
                {region.clinicCount > 0 ? region.clinicCount : "—"}
              </span>
            </div>
          ))}
        </div>

        {/* Hover detay */}
        {active && active.clinicCount > 0 && (
          <div className="mt-6 p-4 bg-stone-50 rounded-xl border border-stone-100 animate-fade-in">
            <p className="font-semibold text-stone-800 text-sm">{active.name} Bölgesi</p>
            <p className="text-xs text-stone-500 mt-1">{active.cities.join(", ")}</p>
            <p className="text-xs text-stone-400 mt-2">
              <span className="font-bold text-[#000]">{active.clinicCount}</span> aktif tedavi merkezi
            </p>
          </div>
        )}

        <Link
          href="/klinikler"
          className="btn-pill-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm mt-6 w-full lg:w-auto"
        >
          <MapPin className="w-4 h-4" />
          Tüm Klinikleri Gör
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
