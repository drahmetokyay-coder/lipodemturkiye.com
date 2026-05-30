export const SITE_URL = "https://lipodemturkiye.com";
export const SITE_NAME = "Lipödem Türkiye";
export const SITE_DESCRIPTION =
  "Türkiye'nin ilk kapsamlı lipödem hasta platformu. Bilimsel bilgi, interaktif araçlar, uzman klinik rehberi ve topluluk desteği.";

export const NAV_ITEMS = [
  {
    label: "Lipödem Nedir",
    href: "/lipodem-nedir",
  },
  {
    label: "Tedavi",
    href: "/lipodem-tedavisi",
  },
  {
    label: "Yaşam",
    href: "/lipodem-beslenme",
    children: [
      { label: "Beslenme Rehberi", href: "/lipodem-beslenme" },
      { label: "Egzersiz Rehberi", href: "/lipodem-egzersiz" },
      { label: "Ruh Sağlığı", href: "/lipodem-ruh-sagligi" },
    ],
  },
  {
    label: "Türkiye Rehberi",
    href: "/lipodem-turkiye-rehberi",
  },
  {
    label: "Araçlar",
    href: "/araclar/lipodem-semptom-testi",
  },
  {
    label: "Blog",
    href: "/blog",
  },
] as const;
