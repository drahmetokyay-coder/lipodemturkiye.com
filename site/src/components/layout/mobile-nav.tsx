"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-emerald-100/60 hover:bg-white/5 transition-colors"
        aria-label="Menüyü aç"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute inset-0 bg-[#163832] flex flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b border-white/5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-bold text-xl text-white"
              >
                Lip&ouml;dem T&uuml;rkiye
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-md text-emerald-100/60 hover:bg-white/5 transition-colors"
                aria-label="Menüyü kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-3.5 text-lg font-medium text-white/80 border-b border-white/5",
                      "hover:text-emerald-300 transition-colors"
                    )}
                  >
                    {item.label}
                  </Link>

                  {"children" in item && item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "block py-2.5 text-base text-emerald-100/40 border-b border-white/[0.03]",
                            "hover:text-emerald-300 transition-colors"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <Link
                  href="/giris"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-white/80 hover:text-emerald-300 transition-colors"
                >
                  Giriş
                </Link>
                <Link
                  href="/premium"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Premium
                </Link>
              </div>
            </nav>

            <div className="p-4 border-t border-white/10">
              <Link
                href="/araclar/semptom-testi"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-center w-full py-3.5 rounded-full",
                  "bg-emerald-500 hover:bg-emerald-400 text-[#0a1f1b] font-bold text-base",
                  "transition-colors"
                )}
              >
                Semptom Testi Başlat
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
