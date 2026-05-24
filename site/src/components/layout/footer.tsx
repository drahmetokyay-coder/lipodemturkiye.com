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
      { label: "Klinik Bulucu", href: "/lipodem-turkiye-rehberi" },
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
      { label: "Doktorlar İçin", href: "/doktorlar" },
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
    <footer className="bg-gradient-to-b from-[#0f2b26] to-[#0a1f1b] text-emerald-100/60">
      {/* Ust CTA Bolumu */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-4">
              Lip&ouml;dem yolculuğunuzda bug&uuml;n başlayın
            </h2>
            <p className="text-emerald-100/40 text-lg mb-8 max-w-lg mx-auto">
              Bilimsel bilgi, kişisel ara&ccedil;lar ve topluluk desteğiyle
              lip&ouml;dem yolculuğunuzda yalnız değilsiniz.
            </p>
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-500 text-[#0a1f1b] font-bold text-base hover:bg-teal-400 shadow-lg shadow-teal-500/20 hover:shadow-teal-400/30 transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 10H13M10 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              &Uuml;cretsiz Semptom Testi Başlat
            </Link>
          </div>
        </div>
      </div>

      {/* Link Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-emerald-100/40 hover:text-teal-400 transition-colors duration-200"
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

        {/* Alt kisim: copyright + hukuki + sosyal + disclaimer */}
        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-emerald-100/25">
              &copy; {new Date().getFullYear()} Lip&ouml;dem T&uuml;rkiye. T&uuml;m hakları saklıdır.
            </div>

            {/* Hukuki linkler */}
            <div className="flex items-center gap-4 text-sm text-emerald-100/25">
              <Link href="/gizlilik-politikasi" className="hover:text-teal-400 transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <span className="text-emerald-100/10">|</span>
              <Link href="/kullanim-sartlari" className="hover:text-teal-400 transition-colors duration-200">
                Kullanım Şartları
              </Link>
              <span className="text-emerald-100/10">|</span>
              <Link href="/cerez-politikasi" className="hover:text-teal-400 transition-colors duration-200">
                &Ccedil;erez Politikası
              </Link>
            </div>

            {/* Sosyal ikonlar */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full text-emerald-100/25 hover:text-teal-400 hover:bg-white/5 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Tibbi disclaimer */}
          <p className="mt-8 text-xs text-emerald-100/15 text-center max-w-2xl mx-auto leading-relaxed">
            Bu site tıbbi tavsiye yerine ge&ccedil;mez. İ&ccedil;eriklerimiz bilgilendirme
            ama&ccedil;lıdır. Tanı ve tedavi i&ccedil;in mutlaka bir sağlık
            profesyoneline başvurunuz.
          </p>
        </div>
      </div>
    </footer>
  );
}
