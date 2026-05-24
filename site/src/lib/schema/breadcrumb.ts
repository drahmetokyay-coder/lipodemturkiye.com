import { SITE_URL } from "./organization";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumb(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
