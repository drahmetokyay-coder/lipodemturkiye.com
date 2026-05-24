export const SITE_URL = "https://lipodemturkiye.com";

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Lipödem Türkiye",
  alternateName: ["Lipodem Turkiye", "Lipödem TR"],
  url: SITE_URL,
  description:
    "Türkiye'nin ilk ve tek kapsamlı lipödem hasta platformu. Lipödem hakkında güvenilir bilgi, uzman doktor rehberi ve hasta topluluğu.",
  sameAs: [
    "https://www.instagram.com/lipodemturkiye",
    "https://www.youtube.com/@lipodemturkiye",
    "https://www.facebook.com/lipodemturkiye",
    "https://www.tiktok.com/@lipodemturkiye",
    "https://x.com/lipodemturkiye",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "iletisim@lipodemturkiye.com",
    contactType: "customer service",
    availableLanguage: "Turkish",
  },
  areaServed: {
    "@type": "Country",
    name: "Turkey",
  },
  knowsAbout: [
    "Lipödem",
    "Lipedema",
    "Lipoedema",
    "Lipödem tedavisi",
    "Lipödem belirtileri",
  ],
};
