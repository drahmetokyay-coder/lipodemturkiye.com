import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerLinks = {
  bilgi: {
    title: "Bilgi",
    links: [
      { label: "Lipödem Nedir?", href: "/lipodem-nedir" },
      { label: "Belirtiler ve Tanı", href: "/lipodem-nedir#belirtiler" },
      { label: "Evreleri", href: "/lipodem-nedir#evreler" },
      { label: "Sık Sorulan Sorular", href: "/lipodem-nedir#sss" },
    ],
  },
  tedavi: {
    title: "Tedavi",
    links: [
      { label: "Tedavi Yöntemleri", href: "/lipodem-tedavisi" },
      { label: "Beslenme Rehberi", href: "/lipodem-beslenme" },
      { label: "Egzersiz Rehberi", href: "/lipodem-egzersiz" },
      { label: "Ruh Sağlığı", href: "/lipodem-ruh-sagligi" },
    ],
  },
  araclar: {
    title: "Araçlar",
    links: [
      { label: "Semptom Testi", href: "/araclar/semptom-testi" },
      { label: "Klinik Bulucu", href: "/klinikler" },
      { label: "Blog", href: "/blog" },
      { label: "Hikayeler", href: "/hikayeler" },
    ],
  },
  hakkimizda: {
    title: "Hakkımızda",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Premium", href: "/premium" },
      { label: "Kongre 2026", href: "/lipodem-kongresi-2026" },
    ],
  },
};

const socialLinks = [
  { icon: InstagramIcon, href: "https://instagram.com/lipodemturkiye", label: "Instagram" },
  { icon: YoutubeIcon, href: "https://youtube.com/@lipodemturkiye", label: "YouTube" },
  { icon: FacebookIcon, href: "https://facebook.com/lipodemturkiye", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#163832] text-white/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Logo + Link Grid */}
        <div className="py-12 md:py-14">
          <div className="mb-8">
            <img src="/logo.png" alt="Lipödem Türkiye" className="h-8 w-auto brightness-0 invert" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-white tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-[#E8916D] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Lip&ouml;dem T&uuml;rkiye. T&uuml;m hakları saklıdır.
            </div>

            <div className="flex items-center gap-4 text-xs text-white/40">
              <Link href="/gizlilik-politikasi" className="hover:text-[#E8916D] transition-colors">
                Gizlilik
              </Link>
              <span className="text-white/15">|</span>
              <Link href="/kullanim-sartlari" className="hover:text-[#E8916D] transition-colors">
                Kullanım
              </Link>
              <span className="text-white/15">|</span>
              <Link href="/cerez-politikasi" className="hover:text-[#E8916D] transition-colors">
                &Ccedil;erezler
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white/40 hover:text-[#E8916D] hover:bg-white/5 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-6 text-[10px] text-white/25 text-center max-w-2xl mx-auto leading-relaxed">
            Bu site tıbbi tavsiye yerine ge&ccedil;mez. İ&ccedil;eriklerimiz bilgilendirme
            ama&ccedil;lıdır. Tanı ve tedavi i&ccedil;in mutlaka bir sağlık profesyoneline ba&#351;vurunuz.
          </p>
        </div>
      </div>
    </footer>
  );
}
