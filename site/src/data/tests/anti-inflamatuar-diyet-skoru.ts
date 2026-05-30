// Anti-İnflamatuar Diyet Skoru
// Validated basis: Mediterranean Diet Score (MDS, Trichopoulou ve ark.) +
// AHEI-2010 (Alternate Healthy Eating Index) uyarlaması.
// 10 soru × 0-3 puan = 0-30 toplam.
// Klinik referans: 2024 Alman S2k Kılavuzu — Akdeniz diyetine güçlü konsensüs.

export type RiskBand = "LOW" | "MODERATE" | "HIGH";

export interface QuestionOption {
  label: string;
  score: number;
  flag?: string;
}

export interface Question {
  id: number;
  title: string;
  text: string;
  category: "olumlu" | "olumsuz";
  options: QuestionOption[];
}

export interface TestResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  band: RiskBand;
  flags: string[];
  bandReason?: string;
}

export const SCALE_REFERENCE = {
  name: "Mediterranean Diet Score (MDS) + AHEI-2010 uyarlaması",
  citation:
    "Trichopoulou A, et al. Adherence to a Mediterranean diet and survival. NEJM 2003;348:2599-608. Chiuve SE, et al. AHEI-2010. J Nutr 2012;142:1009-18. 2024 Alman S2k Lipödem Kılavuzu.",
};

// Olumlu kategori → yüksek tüketim = yüksek puan
// Olumsuz kategori → düşük tüketim = yüksek puan (skor zaten ters çevrilmiş)
export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Zeytinyağı Tüketimi",
    text: "Yemeklerinizde ana yağ olarak ne kullanıyorsunuz?",
    category: "olumlu",
    options: [
      { label: "Genellikle sızma zeytinyağı (her gün)", score: 3 },
      { label: "Sık sık zeytinyağı, bazen başka yağ", score: 2 },
      { label: "Ara sıra zeytinyağı, çoğunlukla ayçiçek/mısır yağı", score: 1 },
      { label: "Margarin, tereyağı veya tohum yağları ağırlıklı", score: 0 },
    ],
  },
  {
    id: 2,
    title: "Balık Tüketimi",
    text: "Haftada ne sıklıkta yağlı balık (somon, sardalya, hamsi, uskumru) yiyorsunuz?",
    category: "olumlu",
    options: [
      { label: "Haftada 3+ porsiyon", score: 3 },
      { label: "Haftada 2 porsiyon", score: 2 },
      { label: "Haftada 1 porsiyon", score: 1 },
      { label: "Neredeyse hiç", score: 0 },
    ],
  },
  {
    id: 3,
    title: "Sebze Tüketimi",
    text: "Günde kaç porsiyon sebze (yeşil yapraklı, renkli) tüketiyorsunuz?",
    category: "olumlu",
    options: [
      { label: "Her gün 4+ porsiyon (öğünlerin yarısı sebze)", score: 3 },
      { label: "Günde 2-3 porsiyon", score: 2 },
      { label: "Günde 1 porsiyon", score: 1 },
      { label: "Haftada birkaç gün, az miktarda", score: 0 },
    ],
  },
  {
    id: 4,
    title: "Meyve ve Yaban Mersini",
    text: "Günde kaç porsiyon meyve (özellikle yaban mersini, çilek gibi koyu renkli) yiyorsunuz?",
    category: "olumlu",
    options: [
      { label: "Her gün 2-3 porsiyon, çeşitli", score: 3 },
      { label: "Her gün 1 porsiyon", score: 2 },
      { label: "Haftada 3-4 gün", score: 1 },
      { label: "Nadiren", score: 0 },
    ],
  },
  {
    id: 5,
    title: "Tam Tahıllar",
    text: "Tükettiğiniz tahıl ürünlerinin (ekmek, makarna, pirinç) çoğunluğu hangi tür?",
    category: "olumlu",
    options: [
      { label: "Çoğunlukla tam tahıllı (bulgur, esmer pirinç, çavdar, yulaf)", score: 3 },
      { label: "Karışık — yarı yarıya", score: 2 },
      { label: "Çoğunlukla beyaz / rafine", score: 1 },
      { label: "Tamamen beyaz un, beyaz pirinç, beyaz ekmek", score: 0 },
    ],
  },
  {
    id: 6,
    title: "Baklagiller",
    text: "Haftada ne sıklıkta baklagil (mercimek, nohut, fasulye, bezelye) tüketiyorsunuz?",
    category: "olumlu",
    options: [
      { label: "Haftada 4+ porsiyon", score: 3 },
      { label: "Haftada 2-3 porsiyon", score: 2 },
      { label: "Haftada 1 porsiyon", score: 1 },
      { label: "Neredeyse hiç", score: 0 },
    ],
  },
  {
    id: 7,
    title: "İşlenmiş Gıda ve Şeker",
    text: "Paketli atıştırmalık, hazır yemek, şekerli içecek ve tatlı tüketiminiz nasıl?",
    category: "olumsuz",
    options: [
      { label: "Neredeyse hiç tüketmiyorum", score: 3 },
      { label: "Haftada 1-2 kez küçük miktarlarda", score: 2 },
      { label: "Haftada birkaç kez, düzenli", score: 1, flag: "high-processed" },
      { label: "Hemen her gün", score: 0, flag: "high-processed" },
    ],
  },
  {
    id: 8,
    title: "Kırmızı ve İşlenmiş Et",
    text: "Haftada ne sıklıkta kırmızı et, sosis, salam, sucuk gibi işlenmiş et tüketiyorsunuz?",
    category: "olumsuz",
    options: [
      { label: "Ayda 1 kez veya daha az", score: 3 },
      { label: "Haftada 1 kez", score: 2 },
      { label: "Haftada 2-3 kez", score: 1, flag: "high-red-meat" },
      { label: "Hemen her gün", score: 0, flag: "high-red-meat" },
    ],
  },
  {
    id: 9,
    title: "Fermente Gıdalar ve Bağırsak Sağlığı",
    text: "Haftada ne sıklıkta fermente gıda (yoğurt, kefir, turşu, lahana turşusu) tüketiyorsunuz?",
    category: "olumlu",
    options: [
      { label: "Her gün, en az 1 porsiyon", score: 3 },
      { label: "Haftada 3-5 kez", score: 2 },
      { label: "Haftada 1-2 kez", score: 1 },
      { label: "Neredeyse hiç", score: 0 },
    ],
  },
  {
    id: 10,
    title: "Rafine Karbonhidrat ve Şeker",
    text: "Günlük rafine karbonhidrat (beyaz ekmek, hamur işi, kek, bisküvi) ve eklenmiş şeker alımınız nasıl?",
    category: "olumsuz",
    options: [
      { label: "Çok düşük — günde 1 porsiyondan az", score: 3 },
      { label: "Düşük — günde 1 porsiyon civarı", score: 2 },
      { label: "Orta — günde 2-3 porsiyon", score: 1, flag: "high-sugar" },
      { label: "Yüksek — her öğünde rafine karb / şeker", score: 0, flag: "high-sugar" },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;
  const flags: string[] = [];

  for (const q of QUESTIONS) {
    const selected = answers[q.id] ?? 0;
    totalScore += selected;

    // Cevaba bağlı flag tetikleme
    const matchedOption = q.options.find((o) => o.score === selected);
    if (matchedOption?.flag && !flags.includes(matchedOption.flag)) {
      flags.push(matchedOption.flag);
    }
  }

  const maxScore = 30;
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Pro-inflamatuar diyet flag'i:
  // Q7 (işlenmiş), Q8 (kırmızı et), Q10 (rafine karb) sorularının
  // çoğunda (>=2) düşük puan (≤1) varsa "high-inflammation-diet" emit et
  const proInflamQs = [7, 8, 10];
  const lowOnProInflam = proInflamQs.filter((id) => (answers[id] ?? 0) <= 1).length;
  if (lowOnProInflam >= 2) {
    if (!flags.includes("high-inflammation-diet")) {
      flags.push("high-inflammation-diet");
    }
  }

  let band: RiskBand;
  let bandReason: string;
  if (totalScore <= 12) {
    band = "LOW";
    bandReason = "Anti-inflamatuar diyete uyumunuz düşük seviyede.";
  } else if (totalScore <= 21) {
    band = "MODERATE";
    bandReason = "Orta düzey uyum — iyileştirilebilir alanlar var.";
  } else {
    band = "HIGH";
    bandReason = "Akdeniz / anti-inflamatuar diyete güçlü uyum.";
  }

  return { totalScore, maxScore, percentage, band, flags, bandReason };
}

export const RESULT_CONTENT: Record<
  RiskBand,
  {
    title: string;
    color: string;
    bgColor: string;
    borderColor: string;
    description: string;
    clinicalInterpretation: string;
    steps: string[];
  }
> = {
  LOW: {
    title: "Düşük uyum — diyetiniz inflamasyonu körükleyebilir",
    color: "text-[#C46B3D]",
    bgColor: "bg-[#FEF3E6]",
    borderColor: "border-[#C46B3D]",
    description:
      "Verdiğiniz yanıtlara göre beslenme düzeniniz anti-inflamatuar Akdeniz diyetinden belirgin biçimde uzakta. Lipödemde sistemik inflamasyon (TNF-alfa, IL-6) yüksek; bu da ağrı, ödem ve doku sertleşmesini besler. İyi haber: küçük diyet değişiklikleri kısa sürede inflamasyon belirteçlerini düşürür.",
    clinicalInterpretation:
      "2025 Akdeniz-Ketojenik Diyet çalışmasında (n=48) 7 ay sonunda CRP -%13, IL-6 -%4, Diyet İnflamasyon İndeksi -1.59 puan azaldı; uyluk çevresi 6 cm daraldı. Düşük uyumdan orta uyuma geçmek anlamlı bir klinik fark yaratır.",
    steps: [
      "Sabah tahıl tercihini beyaz ekmekten yulaf veya tam tahıllı çavdara değiştirin",
      "Yemeklerinizde ana yağ olarak sızma zeytinyağı kullanın (günde 2-4 yemek kaşığı)",
      "Haftada en az 2 kez yağlı balık (somon, sardalya, hamsi) ekleyin — Omega-3 için",
      "Şekerli içecekler ve paketli atıştırmalıkları kademeli olarak azaltın",
      "Lipödem konusunda deneyimli bir diyetisyene başvurun (kişiselleştirilmiş protokol)",
      "İlk hedef: 6 hafta içinde toplam puanınızı 5 puan yükseltmek",
    ],
  },
  MODERATE: {
    title: "Orta uyum — iyileştirilebilir alanlar var",
    color: "text-[#8B6B3D]",
    bgColor: "bg-[#FAF6EE]",
    borderColor: "border-[#8B6B3D]",
    description:
      "Beslenmeniz Akdeniz diyetine kısmen uyumlu. Lipödemde inflamasyonu yönetmek için bu temeli güçlendirmek mantıklı bir yatırım. Genellikle eksik kalan alanlar: yağlı balık sıklığı, baklagil çeşitliliği ve rafine karbonhidrat azaltımı.",
    clinicalInterpretation:
      "2024 Alman S2k Kılavuzu Akdeniz diyetini güçlü konsensüsle önerir. Orta uyumdan yüksek uyuma çıkış, lipödem hastalarında ağrı, ödem ve ağırlık hissini anlamlı biçimde azaltır; bel/kalça çevresinde de daralma sağlar.",
    steps: [
      "Düşük puan aldığınız 2-3 alanı belirleyin ve önce onlara odaklanın",
      "Haftalık menünüze 4+ porsiyon baklagil ekleyin (mercimek çorbası, nohut salatası)",
      "Beyaz pirinç/makarna yerine bulgur veya esmer pirinç tercih edin",
      "Atıştırmalık olarak avuç içi kadar ceviz, badem veya kuruyemiş",
      "Günlük su tüketimini 2-2.5 litreye çıkarın (lenfatik akış için)",
      "3 ay sonra testi tekrarlayın — ilerleme görmek motivasyonu artırır",
    ],
  },
  HIGH: {
    title: "Yüksek uyum — diyetiniz lipödem dostu",
    color: "text-[#2D8B73]",
    bgColor: "bg-[#E8F5F0]",
    borderColor: "border-[#2D8B73]",
    description:
      "Tebrikler — beslenme düzeniniz lipödemde önerilen anti-inflamatuar Akdeniz modeline güçlü biçimde uyumlu. Bu temel, kompresyon ve egzersiz gibi diğer tedavi bileşenlerinin etkinliğini artırır. Şimdi odak: bu rutini sürdürmek ve egzersiz toleransı / yaşam kalitesi gibi diğer alanları ölçmek.",
    clinicalInterpretation:
      "Yüksek anti-inflamatuar diyet uyumu, lipödem hastalarında CRP ve IL-6 düşüşü, vücut yağ yüzdesi azalması ve uyluk çevresinde 6 cm'e varan daralmayla ilişkilendirildi (Akdeniz-Keto, 2025). Bu skor sürdürüldüğünde sistemik inflamasyon kontrol altında kalır.",
    steps: [
      "Mevcut rutininizi koruyun — tutarlılık en güçlü silahınız",
      "Hidrasyonu (2-2.5 L) ve fermente gıdaları (yoğurt, kefir, turşu) ihmal etmeyin",
      "İnflamasyon yönetimi için Omega-3 ve D vitamini düzeyini yıllık kontrol ettirin",
      "Egzersiz toleransınızı ölçün — beslenme + hareket sinerjisi en güçlü etki",
      "Diyetisyenle 6 ayda bir kontrol — eksiklikleri (B12, demir, D) erken yakalayın",
      "Ailenizdeki lipödem öyküsü olan kadınlara bu beslenme modelini önerin",
    ],
  },
};
