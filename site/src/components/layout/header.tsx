import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#163832]/90 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-bold text-xl text-white hover:text-emerald-300 transition-colors"
          >
            Lip&ouml;dem T&uuml;rkiye
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium text-emerald-100/60",
                    "hover:text-white hover:bg-white/5 transition-colors"
                  )}
                >
                  {item.label}
                </Link>

                {"children" in item && item.children && (
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-1 opacity-0 invisible",
                      "group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    )}
                  >
                    <div className="bg-[#1e4a40] rounded-lg shadow-xl border border-white/10 py-2 min-w-[200px] backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-sm text-emerald-100/60",
                            "hover:text-white hover:bg-white/5 transition-colors"
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

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/giris"
              className={cn(
                "px-4 py-2 text-sm font-medium text-emerald-100/60 rounded-md",
                "hover:text-white hover:bg-white/5 transition-colors"
              )}
            >
              Giriş
            </Link>
            <Link
              href="/premium"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full",
                "bg-emerald-500 text-[#0a1f1b] hover:bg-emerald-400 transition-colors"
              )}
            >
              Premium
            </Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
