import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-xl text-teal-800 hover:text-teal-700 transition-colors"
          >
            Lip&ouml;dem T&uuml;rkiye
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium text-stone-600",
                    "hover:text-teal-700 hover:bg-teal-50 transition-colors"
                  )}
                >
                  {item.label}
                </Link>

                {/* Dropdown for items with children */}
                {"children" in item && item.children && (
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-1 opacity-0 invisible",
                      "group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    )}
                  >
                    <div className="bg-white rounded-lg shadow-lg border border-stone-200 py-2 min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-sm text-stone-600",
                            "hover:text-teal-700 hover:bg-teal-50 transition-colors"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/giris"
              className={cn(
                "px-4 py-2 text-sm font-medium text-stone-600 rounded-md",
                "hover:text-teal-700 hover:bg-teal-50 transition-colors"
              )}
            >
              Giriş
            </Link>
            <Link
              href="/premium"
              className={cn(
                "px-4 py-2 text-sm font-medium text-white rounded-md",
                "bg-teal-600 hover:bg-teal-700 transition-colors"
              )}
            >
              Premium
            </Link>
          </div>

          {/* Mobile navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
