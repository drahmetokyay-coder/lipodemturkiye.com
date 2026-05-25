"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const regions = [
  {
    name: "Marmara",
    cities: ["İstanbul", "Bursa", "Kocaeli", "Tekirdağ", "Balıkesir", "Edirne", "Sakarya"],
    clinicCount: 12,
    color: "#7C3AED",
    position: { x: 22, y: 18 },
    slug: "istanbul",
  },
  {
    name: "Ege",
    cities: ["İzmir", "Muğla", "Aydın", "Manisa", "Denizli"],
    clinicCount: 5,
    color: "#A855F7",
    position: { x: 14, y: 42 },
    slug: "izmir",
  },
  {
    name: "Akdeniz",
    cities: ["Antalya", "Adana", "Mersin", "Hatay"],
    clinicCount: 6,
    color: "#E11D48",
    position: { x: 28, y: 62 },
    slug: "antalya",
  },
  {
    name: "İç Anadolu",
    cities: ["Ankara", "Konya", "Kayseri", "Eskişehir"],
    clinicCount: 7,
    color: "#F97316",
    position: { x: 42, y: 38 },
    slug: "ankara",
  },
  {
    name: "Karadeniz",
    cities: ["Samsun", "Trabzon", "Zonguldak", "Rize"],
    clinicCount: 1,
    color: "#06B6D4",
    position: { x: 52, y: 14 },
    slug: "samsun",
  },
  {
    name: "Doğu Anadolu",
    cities: ["Erzurum", "Van", "Malatya", "Elazığ"],
    clinicCount: 0,
    color: "#8B5CF6",
    position: { x: 74, y: 30 },
    slug: "erzurum",
  },
  {
    name: "Güneydoğu Anadolu",
    cities: ["Gaziantep", "Diyarbakır", "Şanlıurfa"],
    clinicCount: 1,
    color: "#EC4899",
    position: { x: 68, y: 52 },
    slug: "gaziantep",
  },
];

const totalClinics = regions.reduce((sum, r) => sum + r.clinicCount, 0);

export function TurkeyMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const active = regions.find((r) => r.name === activeRegion);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
      {/* Sol: Harita */}
      <div className="lg:col-span-3 relative">
        {/* SVG Türkiye haritası */}
        <div className="relative w-full aspect-[2/1]">
          {/* Basit outline harita */}
          <svg viewBox="0 0 100 65" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Türkiye ana outline */}
            <path
              d="M2 28 C4 24, 8 20, 12 18 C16 16, 18 14, 22 12 C26 10, 30 8, 34 10 C36 11, 38 8, 40 7 C42 6, 44 8, 46 7 C48 6, 50 5, 52 6 C54 7, 56 8, 58 7 C60 6, 63 5, 66 6 C69 7, 72 6, 75 8 C78 10, 80 9, 83 11 C86 13, 88 12, 90 14 C92 16, 94 18, 96 20 C97 22, 98 24, 97 26 C96 28, 94 30, 92 32 C90 34, 88 36, 86 38 C84 40, 82 42, 80 43 C78 44, 76 46, 74 48 C72 50, 70 52, 68 53 C66 54, 64 56, 62 56 C60 56, 58 58, 56 58 C54 58, 52 57, 50 56 C48 55, 46 56, 44 57 C42 58, 40 58, 38 57 C36 56, 34 58, 32 58 C30 58, 28 56, 26 55 C24 54, 22 56, 20 55 C18 54, 16 52, 14 50 C12 48, 10 46, 8 44 C6 42, 4 40, 3 38 C2 36, 1 34, 1 32 C1 30, 1 29, 2 28 Z"
              fill="#f5f5f4"
              stroke="#d6d3d1"
              strokeWidth="0.5"
            />

            {/* Bölge noktaları */}
            {regions.map((region) => {
              const isActive = activeRegion === region.name;
              const hasClinic = region.clinicCount > 0;

              return (
                <g key={region.name}>
                  {/* Pulse ring */}
                  {hasClinic && (
                    <circle
                      cx={region.position.x}
                      cy={region.position.y}
                      r={isActive ? 5 : 3.5}
                      fill="none"
                      stroke={region.color}
                      strokeWidth="0.3"
                      opacity={isActive ? 0.6 : 0.3}
                    >
                      <animate attributeName="r" from={isActive ? 4 : 3} to={isActive ? 8 : 6} dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from={isActive ? 0.6 : 0.3} to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}

                  {/* Ana nokta */}
                  <circle
                    cx={region.position.x}
                    cy={region.position.y}
                    r={isActive ? 3.5 : 2.5}
                    fill={hasClinic ? region.color : "#d6d3d1"}
                    stroke="white"
                    strokeWidth="0.8"
                    className="cursor-pointer transition-all duration-300"
                    onMouseEnter={() => setActiveRegion(region.name)}
                    onMouseLeave={() => setActiveRegion(null)}
                    style={{ filter: isActive ? `drop-shadow(0 0 4px ${region.color})` : "none" }}
                  />

                  {/* Klinik sayısı badge */}
                  {hasClinic && (
                    <text
                      x={region.position.x}
                      y={region.position.y - 5}
                      textAnchor="middle"
                      fill={region.color}
                      fontSize="3"
                      fontWeight="bold"
                      className="pointer-events-none"
                    >
                      {region.clinicCount}
                    </text>
                  )}

                  {/* Bölge adı */}
                  <text
                    x={region.position.x}
                    y={region.position.y + 6}
                    textAnchor="middle"
                    fill={isActive ? "#000" : "#a8a29e"}
                    fontSize="2.2"
                    fontWeight={isActive ? "bold" : "normal"}
                    className="pointer-events-none transition-all"
                  >
                    {region.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Toplam merkez sayısı */}
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
          {regions.map((region) => (
            <div
              key={region.name}
              className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${
                activeRegion === region.name
                  ? "bg-stone-100 shadow-soft"
                  : "hover:bg-stone-50"
              }`}
              onMouseEnter={() => setActiveRegion(region.name)}
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
