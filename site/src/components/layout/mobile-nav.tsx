"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const mobileNavLinks = [
  { label: "Lipödem Nedir", href: "/lipodem-nedir" },
  { label: "Tedavi", href: "/lipodem-tedavisi" },
  { label: "Beslenme", href: "/lipodem-beslenme" },
  { label: "Araçlar", href: "/araclar/semptom-testi" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md text-stone-500 hover:bg-stone-100 transition-colors"
        aria-label="Men&uuml;y&uuml; a&ccedil;"
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
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="absolute inset-0 bg-white flex flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b border-stone-100">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-serif font-semibold text-xl text-stone-800"
              >
                Lip&ouml;dem T&uuml;rkiye
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-md text-stone-500 hover:bg-stone-100 transition-colors"
                aria-label="Men&uuml;y&uuml; kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4">
              {mobileNavLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block py-3.5 text-lg font-medium text-stone-700 border-b border-stone-100",
                    "hover:text-teal-600 transition-colors"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="p-4 border-t border-stone-100">
              <Link
                href="/araclar/semptom-testi"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center justify-center w-full py-3.5 rounded-lg",
                  "bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base",
                  "transition-colors"
                )}
              >
                Semptom Testi
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
