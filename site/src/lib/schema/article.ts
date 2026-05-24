import { SITE_URL } from "./organization";

export interface ArticleSchemaData {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
}

export function generateArticleSchema(data: ArticleSchemaData) {
  return {
    "@type": "MedicalWebPage",
    headline: data.headline,
    description: data.description,
    url: `${SITE_URL}${data.url}`,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Person",
      name: data.authorName,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    ...(data.image && { image: data.image }),
    inLanguage: "tr-TR",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };
}
