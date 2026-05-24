import { SITE_URL } from "./organization";

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Lipödem Türkiye",
  inLanguage: "tr-TR",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/arama?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};
