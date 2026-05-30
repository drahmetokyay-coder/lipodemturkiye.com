import type { TestSlug } from "./test-storage";
import type { ExpertCategory } from "@/data/experts";

export type Band = "LOW" | "MODERATE" | "HIGH";

export interface RecommendInput {
  slug: TestSlug;
  band: Band;
  flags?: string[];
}

export interface BlogRef {
  slug: string;
  title: string;
}

export interface NextTestRef {
  slug: TestSlug;
  title: string;
  rationale: string;
}

export interface RecommendationOutput {
  blogs: BlogRef[];
  nextTest: NextTestRef | null;
  expertCategory: ExpertCategory;
}

const TEST_TITLES: Record<TestSlug, string> = {
  "lipodem-semptom-testi": "Lipödem Semptom Testi",
  "lipodem-evre-belirleme": "Lipödem Evre Belirleme",
  "lipodem-lenfodem-ayirici-tani": "Lipödem mi, Lenfödem mi?",
  "agri-vas-skoru": "Ağrı VAS Skoru",
  "lipodem-yasam-kalitesi": "Lipödem Yaşam Kalitesi",
  "bel-kalca-orani-whr": "Bel-Kalça Oranı (WHR)",
  "anti-inflamatuar-diyet-skoru": "Anti-İnflamatuar Diyet Skoru",
  "kompresyon-ihtiyac-testi": "Kompresyon İhtiyaç Testi",
  "egzersiz-tolerans-testi": "Egzersiz Tolerans Testi",
  "cerrahi-adaylik-degerlendirmesi": "Cerrahi Adaylık Değerlendirmesi",
};

const BLOG_LIBRARY: Record<string, BlogRef> = {
  nedir: { slug: "/lipodem-nedir", title: "Lipödem nedir? Belirtileri, evreleri" },
  tedavi: { slug: "/lipodem-tedavisi", title: "Lipödem tedavisi: konservatiften cerrahiye" },
  beslenme: { slug: "/lipodem-beslenme", title: "Lipödemde anti-inflamatuar beslenme" },
  egzersiz: { slug: "/lipodem-egzersiz", title: "Lipödem dostu egzersiz rehberi" },
  rehber: { slug: "/lipodem-turkiye-rehberi", title: "Türkiye'de lipödem rehberi" },
  ruh: { slug: "/lipodem-ruh-sagligi", title: "Lipödem ve ruh sağlığı" },
  ket: { slug: "/blog/ketojenik-diyet-lipodem", title: "Ketojenik diyet ve lipödem" },
  agri: { slug: "/blog/lipodem-agrisi-nedenleri-yonetimi", title: "Lipödem ağrısı: nedenler ve yönetim" },
  lenfo: { slug: "/blog/lenfodem-mi-lipodem-mi-farklar", title: "Lipödem mi lenfödem mi? Farklar" },
  goruntuleme: { slug: "/blog/lipodem-goruntuleme-yontemleri", title: "Lipödem görüntüleme yöntemleri" },
  konsensus: { slug: "/blog/lipodem-egzersiz-tedavi-konsensus", title: "Lipödem egzersiz konsensüsü" },
};

interface Rule {
  blogs: string[];
  nextTest: TestSlug | null;
  nextRationale: string;
  expert: ExpertCategory;
}

const MATRIX: Record<TestSlug, Record<Band, Rule>> = {
  "lipodem-semptom-testi": {
    LOW: {
      blogs: ["nedir", "rehber"],
      nextTest: "lipodem-yasam-kalitesi",
      nextRationale: "Düşük risk: yaşam kalitesi takibi öneririz.",
      expert: "doktor",
    },
    MODERATE: {
      blogs: ["nedir", "tedavi", "beslenme"],
      nextTest: "lipodem-evre-belirleme",
      nextRationale: "Belirtiler var; evreyi belirleyelim.",
      expert: "doktor",
    },
    HIGH: {
      blogs: ["nedir", "tedavi", "rehber"],
      nextTest: "lipodem-evre-belirleme",
      nextRationale: "Belirtiler güçlü; evre netleştirilmeli.",
      expert: "cerrah",
    },
  },
  "lipodem-evre-belirleme": {
    LOW: {
      blogs: ["egzersiz", "beslenme"],
      nextTest: "egzersiz-tolerans-testi",
      nextRationale: "Evre 1: aktif yaşam tarzı önceliklendirilir.",
      expert: "fizyoterapist",
    },
    MODERATE: {
      blogs: ["tedavi", "konsensus"],
      nextTest: "kompresyon-ihtiyac-testi",
      nextRationale: "Evre 2: kompresyon devreye girmeli.",
      expert: "fizyoterapist",
    },
    HIGH: {
      blogs: ["tedavi", "konsensus", "rehber"],
      nextTest: "kompresyon-ihtiyac-testi",
      nextRationale: "Evre 3: yoğun konservatif + cerrahi değerlendirme.",
      expert: "cerrah",
    },
  },
  "lipodem-lenfodem-ayirici-tani": {
    LOW: {
      blogs: ["nedir", "beslenme"],
      nextTest: "anti-inflamatuar-diyet-skoru",
      nextRationale: "Belirgin lipödem profili; diyet uyumunu ölçelim.",
      expert: "diyetisyen",
    },
    MODERATE: {
      blogs: ["lenfo", "tedavi"],
      nextTest: "agri-vas-skoru",
      nextRationale: "Karışık tablo: ağrı şiddeti tablo netleştirir.",
      expert: "doktor",
    },
    HIGH: {
      blogs: ["lenfo", "goruntuleme"],
      nextTest: "lipodem-evre-belirleme",
      nextRationale: "Lenfödem dominant; yine de evre değerlendirilmeli.",
      expert: "fizyoterapist",
    },
  },
  "agri-vas-skoru": {
    LOW: {
      blogs: ["agri", "egzersiz"],
      nextTest: "lipodem-yasam-kalitesi",
      nextRationale: "Hafif ağrı: yaşam kalitesi takibi yeterli.",
      expert: "doktor",
    },
    MODERATE: {
      blogs: ["agri", "tedavi"],
      nextTest: "lipodem-yasam-kalitesi",
      nextRationale: "Orta ağrı: günlük yaşam etkisi ölçülmeli.",
      expert: "fizyoterapist",
    },
    HIGH: {
      blogs: ["agri", "konsensus"],
      nextTest: "lipodem-yasam-kalitesi",
      nextRationale: "Şiddetli ağrı: kapsamlı klinik yaklaşım önerilir.",
      expert: "doktor",
    },
  },
  "lipodem-yasam-kalitesi": {
    LOW: {
      blogs: ["egzersiz", "ruh"],
      nextTest: "egzersiz-tolerans-testi",
      nextRationale: "İyi QoL: egzersiz toleransını da görelim.",
      expert: "fizyoterapist",
    },
    MODERATE: {
      blogs: ["ruh", "tedavi"],
      nextTest: "kompresyon-ihtiyac-testi",
      nextRationale: "Orta QoL: kompresyonla iyileşme potansiyeli yüksek.",
      expert: "fizyoterapist",
    },
    HIGH: {
      blogs: ["tedavi", "konsensus", "ruh"],
      nextTest: "cerrahi-adaylik-degerlendirmesi",
      nextRationale: "Düşük QoL: cerrahi adaylık değerlendirilmeli.",
      expert: "cerrah",
    },
  },
  "bel-kalca-orani-whr": {
    LOW: {
      blogs: ["nedir"],
      nextTest: "lipodem-semptom-testi",
      nextRationale: "Patern uyumlu değil; semptom testi yine de önerilir.",
      expert: "doktor",
    },
    MODERATE: {
      blogs: ["nedir", "rehber"],
      nextTest: "lipodem-semptom-testi",
      nextRationale: "Sınırda patern; semptom testi ile destekleyin.",
      expert: "doktor",
    },
    HIGH: {
      blogs: ["nedir", "tedavi"],
      nextTest: "lipodem-evre-belirleme",
      nextRationale: "Güçlü patern uyumu; evre belirlemeyi öneririz.",
      expert: "doktor",
    },
  },
  "anti-inflamatuar-diyet-skoru": {
    LOW: {
      blogs: ["beslenme", "ket"],
      nextTest: null,
      nextRationale: "",
      expert: "diyetisyen",
    },
    MODERATE: {
      blogs: ["beslenme", "ket"],
      nextTest: null,
      nextRationale: "",
      expert: "diyetisyen",
    },
    HIGH: {
      blogs: ["beslenme", "egzersiz"],
      nextTest: "egzersiz-tolerans-testi",
      nextRationale: "Beslenme iyi; egzersiz toleransı tabloyu tamamlar.",
      expert: "diyetisyen",
    },
  },
  "kompresyon-ihtiyac-testi": {
    LOW: {
      blogs: ["egzersiz"],
      nextTest: "egzersiz-tolerans-testi",
      nextRationale: "Kompresyon gerekmiyor; aktif yaşam ölçülmeli.",
      expert: "fizyoterapist",
    },
    MODERATE: {
      blogs: ["tedavi", "konsensus"],
      nextTest: null,
      nextRationale: "",
      expert: "fizyoterapist",
    },
    HIGH: {
      blogs: ["tedavi", "konsensus", "rehber"],
      nextTest: null,
      nextRationale: "",
      expert: "fizyoterapist",
    },
  },
  "egzersiz-tolerans-testi": {
    LOW: {
      blogs: ["beslenme", "egzersiz"],
      nextTest: "anti-inflamatuar-diyet-skoru",
      nextRationale: "Düşük tolerans: beslenme desteği önemli.",
      expert: "fizyoterapist",
    },
    MODERATE: {
      blogs: ["egzersiz", "beslenme"],
      nextTest: "anti-inflamatuar-diyet-skoru",
      nextRationale: "Orta tolerans: beslenme uyumu kademe artırır.",
      expert: "fizyoterapist",
    },
    HIGH: {
      blogs: ["egzersiz", "ruh"],
      nextTest: "lipodem-yasam-kalitesi",
      nextRationale: "Yüksek tolerans: QoL takibi öneririz.",
      expert: "fizyoterapist",
    },
  },
  "cerrahi-adaylik-degerlendirmesi": {
    LOW: {
      blogs: ["tedavi", "konsensus"],
      nextTest: "lipodem-yasam-kalitesi",
      nextRationale: "Cerrahi öncelik değil: yaşam kalitesi takibi.",
      expert: "fizyoterapist",
    },
    MODERATE: {
      blogs: ["tedavi", "rehber"],
      nextTest: null,
      nextRationale: "",
      expert: "cerrah",
    },
    HIGH: {
      blogs: ["tedavi", "rehber", "konsensus"],
      nextTest: null,
      nextRationale: "",
      expert: "cerrah",
    },
  },
};

const FLAG_OVERRIDES: Record<string, Partial<Rule>> = {
  unilateral: {
    nextTest: "lipodem-lenfodem-ayirici-tani",
    nextRationale: "Tek taraflı şişlik: ayırıcı tanı testi öncelikli.",
  },
  "stemmer-positive": {
    nextTest: "lipodem-evre-belirleme",
    nextRationale: "Stemmer pozitif: lenfödem komponenti güçlü; uzman değerlendirmesi şart.",
    expert: "fizyoterapist",
  },
  "absolute-contraindication": {
    nextTest: null,
    nextRationale: "",
    expert: "doktor",
  },
};

export function recommend(input: RecommendInput): RecommendationOutput {
  const base = MATRIX[input.slug][input.band];

  let blogs = base.blogs.map((k) => BLOG_LIBRARY[k]).filter(Boolean);
  let nextTestSlug = base.nextTest;
  let nextRationale = base.nextRationale;
  let expert = base.expert;

  for (const flag of input.flags ?? []) {
    const override = FLAG_OVERRIDES[flag];
    if (!override) continue;
    if (override.nextTest !== undefined) nextTestSlug = override.nextTest;
    if (override.nextRationale !== undefined) nextRationale = override.nextRationale;
    if (override.expert !== undefined) expert = override.expert;
  }

  if (blogs.length === 0) {
    blogs = [BLOG_LIBRARY.nedir, BLOG_LIBRARY.rehber].filter(Boolean);
  }

  const nextTest: NextTestRef | null = nextTestSlug
    ? {
        slug: nextTestSlug,
        title: TEST_TITLES[nextTestSlug],
        rationale: nextRationale,
      }
    : null;

  return { blogs: blogs.slice(0, 3), nextTest, expertCategory: expert };
}

export function getTestTitle(slug: TestSlug): string {
  return TEST_TITLES[slug];
}
