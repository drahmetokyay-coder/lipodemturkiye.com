export type ExpertCategory = "doktor" | "cerrah" | "diyetisyen" | "fizyoterapist";

export interface Expert {
  id: string;
  name: string;
  title: string;
  /** Kart üzerinde gösterilen uzmanlık rozeti, ör. "LİPÖDEM UZMANI" */
  specialty: string;
  category: ExpertCategory;
  city: string;
  rating: number;
  reviewCount: number;
  /** 100 üzerinden uzman skoru (memnuniyet + doğrulama bileşik) */
  score: number;
  /** Dokunduğu / destek verdiği hasta sayısı */
  patientCount: number;
  /** Hasta sayısı etiketi, ör. "Dokunduğu hasta" | "Destek verdiği hasta" */
  patientLabel: string;
  featured: boolean;
  slug: string;
  /** Opsiyonel profesyonel fotoğraf; yoksa baş harf avatarı kullanılır */
  image?: string;
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
    name: "Dr. A.Y.",
    title: "Plastik Cerrah",
    specialty: "LİPOSUCTION UZMANI",
    category: "cerrah",
    city: "İstanbul",
    rating: 4.9,
    reviewCount: 47,
    score: 98,
    patientCount: 2100,
    patientLabel: "Dokunduğu hasta",
    featured: true,
    slug: "uzman-1",
  },
  {
    id: "2",
    name: "Dr. B.K.",
    title: "Lipödem Uzmanı",
    specialty: "LİPÖDEM UZMANI",
    category: "doktor",
    city: "İstanbul",
    rating: 4.8,
    reviewCount: 32,
    score: 95,
    patientCount: 1480,
    patientLabel: "Dokunduğu hasta",
    featured: false,
    slug: "uzman-2",
  },
  {
    id: "3",
    name: "Dr. C.E.",
    title: "Plastik Cerrah",
    specialty: "LİPÖDEM CERRAHI",
    category: "cerrah",
    city: "Ankara",
    rating: 4.7,
    reviewCount: 28,
    score: 93,
    patientCount: 1240,
    patientLabel: "Dokunduğu hasta",
    featured: false,
    slug: "uzman-3",
  },
  {
    id: "4",
    name: "Dr. D.M.",
    title: "Lipödem Cerrahı",
    specialty: "LİPÖDEM CERRAHI",
    category: "cerrah",
    city: "İstanbul",
    rating: 4.8,
    reviewCount: 35,
    score: 96,
    patientCount: 1690,
    patientLabel: "Dokunduğu hasta",
    featured: false,
    slug: "uzman-4",
  },
  {
    id: "5",
    name: "Dr. E.S.",
    title: "Lipödem Uzmanı",
    specialty: "LİPÖDEM UZMANI",
    category: "doktor",
    city: "İstanbul",
    rating: 4.6,
    reviewCount: 19,
    score: 91,
    patientCount: 870,
    patientLabel: "Dokunduğu hasta",
    featured: false,
    slug: "uzman-5",
  },
  {
    id: "6",
    name: "Dr. F.T.",
    title: "Fizyoterapist",
    specialty: "LİPÖDEM UZMANI",
    category: "fizyoterapist",
    city: "Ankara",
    rating: 4.7,
    reviewCount: 22,
    score: 94,
    patientCount: 1320,
    patientLabel: "Destek verdiği hasta",
    featured: true,
    slug: "uzman-6",
  },
  {
    id: "7",
    name: "Dyt. G.N.",
    title: "Lipödem Diyetisyeni",
    specialty: "LİPÖDEM DİYETİSYENİ",
    category: "diyetisyen",
    city: "Ankara",
    rating: 4.8,
    reviewCount: 41,
    score: 96,
    patientCount: 1560,
    patientLabel: "Destek verdiği hasta",
    featured: true,
    slug: "uzman-7",
    image: "/sections/uzmanlar.jpg",
  },
  {
    id: "8",
    name: "Dyt. H.O.",
    title: "Anti-İnflamatuar Beslenme",
    specialty: "LİPÖDEM DİYETİSYENİ",
    category: "diyetisyen",
    city: "İstanbul",
    rating: 4.7,
    reviewCount: 26,
    score: 92,
    patientCount: 1040,
    patientLabel: "Destek verdiği hasta",
    featured: false,
    slug: "uzman-8",
  },
  {
    id: "9",
    name: "Fzt. I.P.",
    title: "Lenf Drenaj Uzmanı",
    specialty: "LENFÖDEM UZMANI",
    category: "fizyoterapist",
    city: "İzmir",
    rating: 4.6,
    reviewCount: 18,
    score: 90,
    patientCount: 760,
    patientLabel: "Destek verdiği hasta",
    featured: false,
    slug: "uzman-9",
  },
  {
    id: "10",
    name: "Fzt. J.R.",
    title: "Kompresyon Terapisti",
    specialty: "LENFÖDEM UZMANI",
    category: "fizyoterapist",
    city: "Ankara",
    rating: 4.5,
    reviewCount: 14,
    score: 89,
    patientCount: 540,
    patientLabel: "Destek verdiği hasta",
    featured: false,
    slug: "uzman-10",
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
    expertName: "Dr. A.Y.",
    expertTitle: "Plastik Cerrah",
    category: "cerrah",
    title: "Lipödem Cerrahisinde Doğru Zamanlama Neden Önemli?",
    excerpt:
      "Cerrahiye karar vermeden önce konservatif tedavinin tükendiğinden emin olun. Erken cerrahi her zaman en iyi seçenek değildir...",
    blogSlug: "/blog/lipodem-cerrahisinde-dogru-zamanlama",
  },
  {
    id: "t2",
    expertName: "Dyt. G.N.",
    expertTitle: "Diyetisyen",
    category: "diyetisyen",
    title: "Lipödemde Anti-İnflamatuar Beslenmenin 5 Altın Kuralı",
    excerpt:
      "Akdeniz tipi ketojenik diyet, lipödem hastalarında 7 ayda ortalama 12 kg kayıp ve uyluk çevresinde 6 cm azalma sağlıyor...",
    blogSlug: "/blog/anti-inflamatuar-beslenme-kurallari",
  },
  {
    id: "t3",
    expertName: "Fzt. I.P.",
    expertTitle: "Fizyoterapist",
    category: "fizyoterapist",
    title: "Kompresyon Çorabı Seçerken Dikkat Etmeniz Gereken 3 Şey",
    excerpt:
      "Flat-knit ve round-knit arasındaki farkı bilmek tedavi başarınızı doğrudan etkiler. Evre 2-3 hastalar için mutlaka flat-knit tercih edin...",
    blogSlug: "/blog/kompresyon-corabi-secimi",
  },
];
