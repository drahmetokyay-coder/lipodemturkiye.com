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
      {/* Hamburger trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-stone-600 hover:bg-stone-100 transition-colors"
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

      {/* Overlay + Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-0 bg-white flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-stone-200">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-bold text-xl text-teal-800"
              >
                Lip&ouml;dem T&uuml;rkiye
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-md text-stone-600 hover:bg-stone-100 transition-colors"
                aria-label="Menüyü kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block py-3 text-lg font-medium text-stone-700 border-b border-stone-100",
                      "hover:text-teal-700 transition-colors"
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
                            "block py-2.5 text-base text-stone-500 border-b border-stone-50",
                            "hover:text-teal-700 transition-colors"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Auth links for mobile */}
              <div className="mt-4 pt-4 border-t border-stone-200 space-y-2">
                <Link
                  href="/giris"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-stone-700 hover:text-teal-700 transition-colors"
                >
                  Giriş
                </Link>
                <Link
                  href="/premium"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-lg font-medium text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Premium
                </Link>
              </div>
            </nav>

            {/* Bottom CTA */}
            <div className="p-4 border-t border-stone-200">
              <Link
                href="/araclar/semptom-testi"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-center w-full py-3.5 rounded-lg",
                  "bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base",
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
