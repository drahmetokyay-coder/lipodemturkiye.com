import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNav from "@/components/layout/mobile-nav";

const navLinks = [
  { label: "Lipödem Nedir", href: "/lipodem-nedir" },
  { label: "Tedavi", href: "/lipodem-tedavisi" },
  { label: "Beslenme", href: "/lipodem-beslenme" },
  { label: "Araçlar", href: "/araclar/semptom-testi" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

export default function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "bg-white/90 backdrop-blur-lg",
        "border-b border-stone-100",
        "transition-all duration-300"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Yaprak/kalp ikonu */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-teal-600 group-hover:text-teal-500 transition-colors"
              aria-hidden="true"
            >
              <path
                d="M14 26C14 26 4 20 4 12C4 6 8 2 14 2C20 2 24 6 24 12C24 20 14 26 14 26Z"
                fill="currentColor"
                fillOpacity="0.12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 8V18M14 8C11 10 9 13 9 16M14 8C17 10 19 13 19 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-serif text-xl font-semibold text-stone-800 group-hover:text-teal-700 transition-colors tracking-tight">
              Lip&ouml;dem T&uuml;rkiye
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  "text-stone-600 hover:text-teal-600",
                  "transition-colors duration-200"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/araclar/semptom-testi"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg",
                "bg-teal-600 text-white text-sm font-semibold",
                "hover:bg-teal-700 active:bg-teal-800",
                "shadow-sm hover:shadow-md",
                "transition-all duration-200"
              )}
            >
              Semptom Testi
            </Link>
          </div>

          {/* Mobile Nav */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
