"use client";

import { useState, createContext, useContext, ReactNode } from "react";

type BillingPeriod = "monthly" | "yearly";

interface PricingContextType {
  period: BillingPeriod;
  setPeriod: (p: BillingPeriod) => void;
}

const PricingContext = createContext<PricingContextType>({
  period: "yearly",
  setPeriod: () => {},
});

export function usePricingPeriod() {
  return useContext(PricingContext);
}

export function PricingProvider({ children }: { children: ReactNode }) {
  const [period, setPeriod] = useState<BillingPeriod>("yearly");

  return (
    <PricingContext.Provider value={{ period, setPeriod }}>
      {children}
    </PricingContext.Provider>
  );
}

export function PricingToggle() {
  const { period, setPeriod } = usePricingPeriod();

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={`text-sm font-medium transition-colors ${
          period === "monthly" ? "text-stone-800" : "text-stone-400"
        }`}
      >
        Aylık
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={period === "yearly"}
        aria-label="Aylık veya yıllık ödeme seçimi"
        onClick={() => setPeriod(period === "monthly" ? "yearly" : "monthly")}
        className={`relative inline-flex h-7 w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D8B73] focus-visible:ring-offset-2 ${
          period === "yearly" ? "bg-[#1A6B5A]" : "bg-stone-200"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out ${
            period === "yearly" ? "translate-x-[26px]" : "translate-x-[2px]"
          }`}
        />
      </button>

      <span
        className={`text-sm font-medium transition-colors ${
          period === "yearly" ? "text-stone-800" : "text-stone-400"
        }`}
      >
        Yıllık
      </span>

      {period === "yearly" && (
        <span className="ml-1 inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 animate-fade-in">
          2 ay hediye
        </span>
      )}
    </div>
  );
}
