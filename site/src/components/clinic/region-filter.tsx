"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { City, Region } from "@/data/cities";
import { REGIONS } from "@/data/cities";

interface RegionFilterProps {
  cities: City[];
}

export function RegionFilter({ cities }: RegionFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const filtered = selectedRegion
    ? cities.filter((c) => c.region === selectedRegion)
    : cities;

  // Klinigi olan sehirler uste, olmayanlar alta -- sonra nufusa gore siralama
  const sorted = [...filtered].sort((a, b) => {
    if (a.hasClinics && !b.hasClinics) return -1;
    if (!a.hasClinics && b.hasClinics) return 1;
    return b.population - a.population;
  });

  return (
    <div>
      {/* Bolge butonlari */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setSelectedRegion(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedRegion === null
              ? "bg-purple-600 text-white shadow-sm"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          Tumu ({cities.length})
        </button>
        {REGIONS.map((r) => {
          const count = cities.filter((c) => c.region === r.value).length;
          return (
            <button
              key={r.value}
              onClick={() => setSelectedRegion(r.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedRegion === r.value
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {r.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Sehir kartlari grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sorted.map((city) => (
          <Link
            key={city.slug}
            href={`/klinikler/${city.slug}`}
            className="group block rounded-xl bg-white border border-stone-100 p-5 shadow-soft card-hover relative overflow-hidden"
          >
            {/* Klinik durumuna gore ust cizgi */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] ${
                city.hasClinics
                  ? "bg-gradient-to-r from-purple-600 to-rose-500"
                  : "bg-stone-200"
              }`}
            />

            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <MapPin className="w-4 h-4 text-purple-500 shrink-0" />
                  <h3 className="text-base font-semibold text-stone-800 group-hover:text-purple-700 transition-colors">
                    {city.name}
                  </h3>
                </div>
                <p className="text-xs text-stone-400 ml-6">
                  {city.region}
                </p>
              </div>

              {/* Klinik sayisi badge */}
              {city.hasClinics ? (
                <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                  {city.clinicCount} klinik
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-stone-50 text-stone-500">
                  Yakinda
                </span>
              )}
            </div>

            {city.hasClinics && (
              <div className="mt-3 ml-6 text-xs text-stone-400">
                {city.doctorCount} uzman doktor
              </div>
            )}

            <div className="mt-3 ml-6 flex items-center text-purple-600 text-sm font-medium group-hover:gap-2 gap-1 transition-all">
              Detay{" "}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Sonuc sayisi */}
      <div className="mt-6 text-center text-sm text-stone-400">
        {sorted.length} sehir listeleniyor
      </div>
    </div>
  );
}
