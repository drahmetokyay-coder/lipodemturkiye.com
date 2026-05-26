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
        "bg-white/95 backdrop-blur-lg",
        "border-b border-[#2D3B36]/8",
        "transition-all duration-300"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt="Lipödem Türkiye" className="h-9 md:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium",
                  "text-[#2D3B36] hover:text-[#1A6B5A] hover:bg-[#1A6B5A]/5",
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
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                "bg-[#1A6B5A] text-white text-sm font-semibold",
                "hover:bg-[#15594A]",
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
