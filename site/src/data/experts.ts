export type ExpertCategory = "doktor" | "cerrah" | "diyetisyen" | "fizyoterapist";

export interface Expert {
  id: string;
  name: string;
  title: string;
  category: ExpertCategory;
  city: string;
  rating: number;
  reviewCount: number;
  featured: boolean;
  slug: string;
}

export const categoryLabels: Record<ExpertCategory, string> = {
  doktor: "Doktorlar",
  cerrah: "Cerrahlar",
  diyetisyen: "Diyetisyenler",
  fizyoterapist: "Fizyoterapi & Medikal",
};

export const categoryColors: Record<ExpertCategory, string> = {
  doktor: "#1A6B5A",
  cerrah: "#2D8B73",
  diyetisyen: "#E8916D",
  fizyoterapist: "#6B7B99",
};

export const experts: Expert[] = [
  {
    id: "1",
    name: "Dr. Yener Demirtaş",
    title: "Plastik Cerrah",
    category: "cerrah",
    city: "İstanbul",
    rating: 4.9,
    reviewCount: 47,
    featured: true,
    slug: "dr-yener-demirtas",
  },
  {
    id: "2",
    name: "Dr. Candan Mezili",
    title: "Lipödem Uzmanı",
    category: "doktor",
    city: "İstanbul",
    rating: 4.8,
    reviewCount: 32,
    featured: false,
    slug: "dr-candan-mezili",
  },
  {
    id: "3",
    name: "Dr. Selçuk Yüce",
    title: "Plastik Cerrah",
    category: "cerrah",
    city: "Ankara",
    rating: 4.7,
    reviewCount: 28,
    featured: false,
    slug: "dr-selcuk-yuce",
  },
  {
    id: "4",
    name: "Dr. Reşat Aktaş",
    title: "Lipödem Cerrahı",
    category: "cerrah",
    city: "İstanbul",
    rating: 4.8,
    reviewCount: 35,
    featured: false,
    slug: "dr-resat-aktas",
  },
  {
    id: "5",
    name: "Dr. Ekrem Keskin",
    title: "Lipödem Uzmanı",
    category: "doktor",
    city: "İstanbul",
    rating: 4.6,
    reviewCount: 19,
    featured: false,
    slug: "dr-ekrem-keskin",
  },
  {
    id: "6",
    name: "Dr. Sonay Karataş",
    title: "ESWT Uzmanı",
    category: "doktor",
    city: "Ankara",
    rating: 4.7,
    reviewCount: 22,
    featured: true,
    slug: "dr-sonay-karatas",
  },
  {
    id: "7",
    name: "Dyt. Elif Yılmaz",
    title: "Lipödem Diyetisyeni",
    category: "diyetisyen",
    city: "Ankara",
    rating: 4.8,
    reviewCount: 41,
    featured: true,
    slug: "dyt-elif-yilmaz",
  },
  {
    id: "8",
    name: "Dyt. Zeynep Ak",
    title: "Anti-İnflamatuar Beslenme",
    category: "diyetisyen",
    city: "İstanbul",
    rating: 4.7,
    reviewCount: 26,
    featured: false,
    slug: "dyt-zeynep-ak",
  },
  {
    id: "9",
    name: "Fzt. Ayşe Kara",
    title: "Lenf Drenaj Uzmanı",
    category: "fizyoterapist",
    city: "İzmir",
    rating: 4.6,
    reviewCount: 18,
    featured: false,
    slug: "fzt-ayse-kara",
  },
  {
    id: "10",
    name: "Fzt. Mehmet Yıldız",
    title: "Kompresyon Terapisti",
    category: "fizyoterapist",
    city: "Ankara",
    rating: 4.5,
    reviewCount: 14,
    featured: false,
    slug: "fzt-mehmet-yildiz",
  },
];

export interface ExpertTip {
  id: string;
  expertName: string;
  expertTitle: string;
  category: ExpertCategory;
  title: string;
  excerpt: string;
  blogSlug: string;
}

export const expertTips: ExpertTip[] = [
  {
    id: "t1",
    expertName: "Dr. Yener Demirtaş",
    expertTitle: "Plastik Cerrah",
    category: "cerrah",
    title: "Lipödem Cerrahisinde Doğru Zamanlama Neden Önemli?",
    excerpt:
      "Cerrahiye karar vermeden önce konservatif tedavinin tükendiğinden emin olun. Erken cerrahi her zaman en iyi seçenek değildir...",
    blogSlug: "/blog/lipodem-cerrahisinde-dogru-zamanlama",
  },
  {
    id: "t2",
    expertName: "Dyt. Elif Yılmaz",
    expertTitle: "Diyetisyen",
    category: "diyetisyen",
    title: "Lipödemde Anti-İnflamatuar Beslenmenin 5 Altın Kuralı",
    excerpt:
      "Akdeniz tipi ketojenik diyet, lipödem hastalarında 7 ayda ortalama 12 kg kayıp ve uyluk çevresinde 6 cm azalma sağlıyor...",
    blogSlug: "/blog/anti-inflamatuar-beslenme-kurallari",
  },
  {
    id: "t3",
    expertName: "Fzt. Ayşe Kara",
    expertTitle: "Fizyoterapist",
    category: "fizyoterapist",
    title: "Kompresyon Çorabı Seçerken Dikkat Etmeniz Gereken 3 Şey",
    excerpt:
      "Flat-knit ve round-knit arasındaki farkı bilmek tedavi başarınızı doğrudan etkiler. Evre 2-3 hastalar için mutlaka flat-knit tercih edin...",
    blogSlug: "/blog/kompresyon-corabi-secimi",
  },
];
