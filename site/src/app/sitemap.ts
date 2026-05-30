import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";

const BASE_URL = "https://lipodemturkiye.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/lipodem-nedir`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lipodem-tedavisi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lipodem-beslenme`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lipodem-egzersiz`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lipodem-ruh-sagligi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lipodem-turkiye-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/araclar`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/araclar/lipodem-semptom-testi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/araclar/lipodem-evre-belirleme`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/araclar/lipodem-lenfodem-ayirici-tani`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/araclar/agri-vas-skoru`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/araclar/lipodem-yasam-kalitesi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/araclar/bel-kalca-orani-whr`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/araclar/anti-inflamatuar-diyet-skoru`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/araclar/kompresyon-ihtiyac-testi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/araclar/egzersiz-tolerans-testi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/araclar/cerrahi-adaylik-degerlendirmesi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/premium`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/lipodem-kongresi-2026`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/gizlilik-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/kullanim-sartlari`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cerez-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/tibbi-sorumluluk-reddi`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Klinikler ana sayfasi
  const clinicMainPage: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/klinikler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  // 81 il sehir sayfalari
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/klinikler/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: city.hasClinics ? 0.8 : 0.6,
  }));

  return [...mainPages, ...clinicMainPage, ...cityPages];
}
