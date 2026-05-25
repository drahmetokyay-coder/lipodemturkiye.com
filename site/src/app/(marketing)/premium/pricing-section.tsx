"use client";

import Link from "next/link";
import {
  Check,
  ArrowRight,
  Star,
} from "lucide-react";
import { PricingProvider, PricingToggle, usePricingPeriod } from "./pricing-toggle";

export function PricingSection() {
  return (
    <PricingProvider>
      <section id="planlar" className="bg-white py-16 md:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Toggle */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-8">
              Size uygun planı se&ccedil;in
            </h2>
            <PricingToggle />
          </div>

          {/* Cards */}
          <PricingCards />
        </div>
      </section>
    </PricingProvider>
  );
}

function PricingCards() {
  const { period } = usePricingPeriod();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
      {/* ── PLAN 1: Ücretsiz ── */}
      <div className="rounded-2xl border border-stone-200 bg-white p-7 md:p-8 flex flex-col h-full shadow-soft">
        <div>
          <h3 className="text-lg font-semibold text-stone-800">
            &Uuml;cretsiz
          </h3>
          <p className="mt-1 text-sm text-stone-400">Bilgilenme ve keşif</p>
        </div>

        <div className="mt-6">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-stone-800">0</span>
            <span className="text-lg text-stone-500">TL</span>
          </div>
          <p className="mt-1 text-xs text-stone-400">
            Sonsuza kadar &uuml;cretsiz
          </p>
        </div>

        <div className="mt-8 flex-1">
          <ul className="space-y-3">
            {[
              "Blog makaleleri (75+)",
              "Semptom testi (temel)",
              "Evre değerlendirme (görsel)",
              "Klinik bulucu (harita)",
              "Haftalık bülten",
              "Forum okuma",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                <Check className="w-4 h-4 text-stone-400 mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/kayit"
            className="flex items-center justify-center w-full py-3 rounded-lg border-2 border-stone-200 text-stone-700 font-semibold text-sm hover:bg-stone-50 hover:border-stone-300 transition-all duration-200"
          >
            &Uuml;cretsiz Başla
          </Link>
        </div>
      </div>

      {/* ── PLAN 2: Temel Premium "Adım At" ── */}
      <div className="relative rounded-2xl border-2 border-[#93D4BE] bg-white p-7 md:p-8 flex flex-col h-full shadow-soft ring-1 ring-[#E8F5F0]">
        {/* Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 bg-[#1A6B5A] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm">
            <Star className="w-3 h-3" />
            En Pop&uuml;ler
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#15594A]">
            Adım At
          </h3>
          <p className="mt-1 text-sm text-stone-400">Temel Premium</p>
        </div>

        <div className="mt-6">
          {period === "monthly" ? (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-stone-800">79</span>
                <span className="text-lg text-stone-500">TL</span>
                <span className="text-sm text-stone-400">/ay</span>
              </div>
              <p className="mt-1 text-xs text-stone-400">
                G&uuml;nde sadece 2,63 TL
              </p>
            </>
          ) : (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-stone-800">699</span>
                <span className="text-lg text-stone-500">TL</span>
                <span className="text-sm text-stone-400">/yıl</span>
              </div>
              <p className="mt-1 text-xs text-stone-400">
                Ayda 58 TL &middot; g&uuml;nde 1,91 TL &middot;{" "}
                <span className="text-green-600 font-medium">249 TL tasarruf</span>
              </p>
            </>
          )}
        </div>

        <div className="mt-6 rounded-lg bg-[#E8F5F0] px-4 py-2.5 text-center">
          <p className="text-xs font-medium text-[#15594A]">
            14 g&uuml;n &uuml;cretsiz deneme -- kredi kartı gerekmez
          </p>
        </div>

        <div className="mt-6 flex-1">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            &Uuml;cretsiz&apos;deki her şey +
          </p>
          <ul className="space-y-3">
            {[
              "3 anti-inflamatuar beslenme şablonu",
              "4 haftalık egzersiz programı",
              "Detaylı semptom testi + PDF rapor",
              "Tam topluluk erişimi (yazma/paylaşım)",
              "Premium makaleler",
              "Tedavi yol haritası (genel)",
              "Email desteği (48 saat)",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                <Check className="w-4 h-4 text-[#2D8B73] mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/kayit?plan=temel"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg cta-gradient text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200"
          >
            14 G&uuml;n &Uuml;cretsiz Dene
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ── PLAN 3: Tam Premium "Yanınızdayız" ── */}
      <div className="rounded-2xl border border-stone-200 bg-white p-7 md:p-8 flex flex-col h-full shadow-soft">
        <div>
          <h3 className="text-lg font-semibold text-stone-800">
            Yanınızdayız
          </h3>
          <p className="mt-1 text-sm text-stone-400">Tam Premium</p>
        </div>

        <div className="mt-6">
          {period === "monthly" ? (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-stone-800">149</span>
                <span className="text-lg text-stone-500">TL</span>
                <span className="text-sm text-stone-400">/ay</span>
              </div>
              <p className="mt-1 text-xs text-stone-400">
                G&uuml;nde sadece 4,97 TL
              </p>
            </>
          ) : (
            <>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-stone-800">1.299</span>
                <span className="text-lg text-stone-500">TL</span>
                <span className="text-sm text-stone-400">/yıl</span>
              </div>
              <p className="mt-1 text-xs text-stone-400">
                Ayda 108 TL &middot; g&uuml;nde 3,56 TL &middot;{" "}
                <span className="text-green-600 font-medium">489 TL tasarruf</span>
              </p>
            </>
          )}
        </div>

        <div className="mt-6 rounded-lg bg-stone-50 px-4 py-2.5 text-center">
          <p className="text-xs font-medium text-stone-600">
            14 g&uuml;n &uuml;cretsiz deneme -- kredi kartı gerekmez
          </p>
        </div>

        <div className="mt-6 flex-1">
          <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">
            Adım At&apos;taki her şey +
          </p>
          <ul className="space-y-3">
            {[
              "Kişiselleştirilmiş beslenme planı",
              "8 haftalık video egzersiz programı",
              "Aylık uzman Q&A oturumu",
              "Mentor eşleştirme",
              "İlerleme takip araçları",
              "Özel evre grupları",
              "Video kütüphanesi",
              "Öncelikli destek (24 saat)",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-stone-600">
                <Check className="w-4 h-4 text-[#2D8B73] mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <Link
            href="/kayit?plan=tam"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#1A6B5A] text-white font-semibold text-sm hover:bg-[#15594A] shadow-sm hover:shadow-md transition-all duration-200"
          >
            14 G&uuml;n &Uuml;cretsiz Dene
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
