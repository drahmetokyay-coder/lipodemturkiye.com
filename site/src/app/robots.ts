import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/hesap/", "/odeme", "/hosgeldin", "/api/", "/admin/"],
      },
    ],
    sitemap: "https://lipodemturkiye.com/sitemap.xml",
  };
}
