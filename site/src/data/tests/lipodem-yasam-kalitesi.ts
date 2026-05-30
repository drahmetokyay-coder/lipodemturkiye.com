export type RiskBand = "LOW" | "MODERATE" | "HIGH";

export interface QuestionOption {
  label: string;
  score: number; // 0-5
  flag?: string;
}

export interface Question {
  id: number;
  domain: QuestionDomain;
  title: string;
  text: string;
  options: QuestionOption[];
}

export type QuestionDomain =
  | "mobility"
  | "daily-activities"
  | "body-image"
  | "pain-impact"
  | "sleep"
  | "social-participation"
  | "emotional-wellbeing";

export interface TestResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  band: RiskBand;
  flags: string[];
  domainSummary: Record<QuestionDomain, number>;
  bandReason: string;
}

export const SCALE_REFERENCE = {
  name: "LYMPH-ICF-LL + EQ-5D-3L Uyarlaması",
  citation:
    "Devoogdt N. et al. Lymphoedema Functioning, Disability and Health Questionnaire for Lower Limb (Lymph-ICF-LL), Phys Ther 2014; EuroQol Group EQ-5D-3L (2009)",
} as const;

const SCALE_5: QuestionOption[] = [
  { label: "Hiç etkilemiyor — günlük hayatım tamamen normal", score: 0 },
  { label: "Hafif etkiliyor — bazen fark ediyorum ama sorun yok", score: 1 },
  { label: "Orta — bazı şeyleri değiştirmem gerekiyor", score: 3 },
  { label: "Belirgin — pek çok şeyi etkiliyor, zorlanıyorum", score: 4 },
  { label: "Çok ağır — günlük hayatımı ciddi biçimde kısıtlıyor", score: 5 },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    domain: "mobility",
    title: "Yürüme",
    text: "Bacaklarınızın durumu, gün içinde yürüme mesafenizi veya hızınızı ne kadar etkiliyor?",
    options: SCALE_5,
  },
  {
    id: 2,
    domain: "mobility",
    title: "Merdiven çıkmak",
    text: "Merdiven inip çıkmak sizin için ne kadar yorucu veya ağrılı?",
    options: SCALE_5,
  },
  {
    id: 3,
    domain: "mobility",
    title: "Uzun süre ayakta durmak",
    text: "Yarım saatten uzun ayakta kalmak (mutfak, market, tören) bacaklarınızı ne ölçüde rahatsız ediyor?",
    options: SCALE_5,
  },
  {
    id: 4,
    domain: "daily-activities",
    title: "Ev işleri",
    text: "Temizlik, çamaşır, mutfak gibi günlük ev işlerini yaparken bacaklarınızın durumundan ne ölçüde etkileniyorsunuz?",
    options: SCALE_5,
  },
  {
    id: 5,
    domain: "daily-activities",
    title: "Pantolon ve kıyafet seçimi",
    text: "Kıyafet veya ayakkabı seçerken (uygun beden bulamamak, dar gelmesi) ne kadar zorlanıyorsunuz?",
    options: SCALE_5,
  },
  {
    id: 6,
    domain: "body-image",
    title: "Aynaya bakmak",
    text: "Vücudunuza aynada bakarken nasıl hissediyorsunuz?",
    options: [
      { label: "Genelde rahatım, kendimi olduğum gibi kabul ediyorum", score: 0 },
      { label: "Bazen rahatsız oluyorum ama günümü etkilemiyor", score: 1 },
      { label: "Sık sık üzülüyorum veya kendimi yargılıyorum", score: 3 },
      { label: "Aynaya bakmaktan kaçınıyorum", score: 4 },
      { label: "Vücudum yüzünden kendimi tamamen kötü hissediyorum", score: 5 },
    ],
  },
  {
    id: 7,
    domain: "body-image",
    title: "Bedeninizi gösterme",
    text: "Yaz aylarında veya uygun ortamlarda (havuz, plaj, kısa pantolon) bacaklarınızı göstermekten ne kadar kaçınıyorsunuz?",
    options: [
      { label: "Kaçınmıyorum, istediğim gibi giyiniyorum", score: 0 },
      { label: "Bazen bilinçli seçim yapıyorum", score: 1 },
      { label: "Sık sık bacaklarımı kapatıyorum", score: 3 },
      { label: "Neredeyse her zaman örtüyorum", score: 4 },
      { label: "Bunu düşünmek bile bana stres veriyor", score: 5 },
    ],
  },
  {
    id: 8,
    domain: "pain-impact",
    title: "Ağrının günlük yaşama etkisi",
    text: "Bacak ağrınız günlük aktivitelerinizi (iş, ders, hobiler) ne ölçüde etkiliyor?",
    options: SCALE_5,
  },
  {
    id: 9,
    domain: "pain-impact",
    title: "Hassasiyet ve dokunma",
    text: "Birinin bacaklarınıza dokunması, sarılması veya çocuğunuzun kucağınıza oturması ne kadar rahatsız edici?",
    options: SCALE_5,
  },
  {
    id: 10,
    domain: "sleep",
    title: "Gece uyku kalitesi",
    text: "Bacak ağırlığı, ağrı veya rahatsızlık nedeniyle uykunuz ne kadar bölünüyor?",
    options: SCALE_5,
  },
  {
    id: 11,
    domain: "sleep",
    title: "Sabah dinlenmiş kalkma",
    text: "Sabah uyandığınızda bacaklarınız nasıl hissediyor?",
    options: [
      { label: "Dinlenmiş, hafif", score: 0 },
      { label: "Çoğunlukla iyi, bazen biraz ağır", score: 1 },
      { label: "Sık sık ağır veya yorgun uyanıyorum", score: 3 },
      { label: "Neredeyse her sabah ağrılı veya şişkin", score: 4 },
      { label: "Hiç dinlenmiş kalkamıyorum", score: 5 },
    ],
  },
  {
    id: 12,
    domain: "social-participation",
    title: "Sosyal ortamlar",
    text: "Toplantı, düğün, partilerden bacaklarınız nedeniyle ne kadar kaçınıyorsunuz?",
    options: SCALE_5,
  },
  {
    id: 13,
    domain: "social-participation",
    title: "Tatil, gezi, seyahat",
    text: "Uzun yolculuk, yürüyüş veya tatil planlamak bacaklarınız yüzünden ne ölçüde sınırlı?",
    options: SCALE_5,
  },
  {
    id: 14,
    domain: "emotional-wellbeing",
    title: "Genel ruh hali",
    text: "Bacaklarınızın durumu son bir ayda genel ruh halinizi (mutsuzluk, kaygı, gelecek endişesi) ne ölçüde etkiledi?",
    options: SCALE_5,
  },
];

const MOBILITY_IDS = [1, 2, 3];

const DOMAIN_IDS: Record<QuestionDomain, number[]> = {
  mobility: [1, 2, 3],
  "daily-activities": [4, 5],
  "body-image": [6, 7],
  "pain-impact": [8, 9],
  sleep: [10, 11],
  "social-participation": [12, 13],
  "emotional-wellbeing": [14],
};

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;
  for (const q of QUESTIONS) {
    totalScore += answers[q.id] ?? 0;
  }

  const maxScore = QUESTIONS.length * 5; // 70
  const percentage = Math.round((totalScore / maxScore) * 100);

  let band: RiskBand;
  let bandReason: string;
  if (totalScore <= 25) {
    band = "LOW";
    bandReason = "İyi yaşam kalitesi: Lipödemin günlük yaşamınıza etkisi sınırlı.";
  } else if (totalScore <= 45) {
    band = "MODERATE";
    bandReason = "Orta yaşam kalitesi: Bazı alanlarda belirgin etki var, müdahale fayda sağlar.";
  } else {
    band = "HIGH";
    bandReason = "Düşük yaşam kalitesi: Lipödem günlük yaşamınızı geniş ölçüde etkiliyor.";
  }

  // Mobility flag: majority of mobility Qs scored 4-5
  const flags: string[] = [];
  const mobilityHits = MOBILITY_IDS.filter((id) => (answers[id] ?? 0) >= 4).length;
  if (mobilityHits >= 2) {
    flags.push("severe-mobility-impact");
  }

  // Domain summary
  const domainSummary = {} as Record<QuestionDomain, number>;
  for (const domain of Object.keys(DOMAIN_IDS) as QuestionDomain[]) {
    const ids = DOMAIN_IDS[domain];
    const sum = ids.reduce((acc, id) => acc + (answers[id] ?? 0), 0);
    const maxSum = ids.length * 5;
    domainSummary[domain] = Math.round((sum / maxSum) * 100);
  }

  return {
    totalScore,
    maxScore,
    percentage,
    band,
    flags,
    domainSummary,
    bandReason,
  };
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
    title: "İyi Yaşam Kalitesi",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    description:
      "Cevaplarınız, lipödemin günlük yaşam kalitenizi sınırlı ölçüde etkilediğini gösteriyor. Mevcut alışkanlıklarınızı korumak, durumun ilerlemesini geciktirmenize yardımcı olur.",
    clinicalInterpretation:
      "LYMPH-ICF-LL ve EQ-5D-3L uyarlanmış skorunuz düşük etki bandında. Bu, hareket, ağrı ve psikolojik alanlarda anlamlı işlevsel kayıp olmadığına işaret eder; takip ve önleyici stratejiler ön planda olmalıdır.",
    steps: [
      "Mevcut aktivite düzeyinizi koruyun: yürüyüş, yüzme veya yoga gibi düşük etkili egzersizleri sürdürün",
      "Anti-inflamatuar beslenme prensiplerine dikkat edin",
      "6 ay sonra bu testi tekrarlayın — yaşam kalitesi zamanla değişebilir",
      "Belirtileriniz artarsa lipödem konusunda deneyimli bir uzmana danışın",
      "Egzersiz toleransınızı da değerlendirmek isteyebilirsiniz",
    ],
  },
  MODERATE: {
    title: "Orta Düzey Yaşam Kalitesi Etkisi",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    description:
      "Cevaplarınız, lipödemin günlük hayatınızın bazı alanlarını belirgin biçimde etkilediğini gösteriyor. Doğru müdahalelerle bu etkiyi azaltmak mümkün ve değerli.",
    clinicalInterpretation:
      "LYMPH-ICF-LL alanlarınız (özellikle mobilite, ağrı veya beden algısı) orta düzey etki bandında. Bu noktada konservatif tedavi yaklaşımları (kompresyon, MLD, yapılandırılmış egzersiz) belirgin iyileşme sağlayabilir.",
    steps: [
      "Lipödem konusunda deneyimli bir fizyoterapist ile konservatif tedavi planı oluşturun",
      "Kompresyon ihtiyaç testimizi yaparak günlük kompresyon stratejinizi netleştirin",
      "Beden algısı ve duygusal yük için psikolojik destek değerli olabilir",
      "Düzenli MLD (manuel lenf drenajı) seansları yaşam kalitesini hızla artırır",
      "Sonucu doktorunuza götürün — yapılandırılmış bir başlangıç noktası sağlar",
    ],
  },
  HIGH: {
    title: "Düşük Yaşam Kalitesi — Müdahale Önemli",
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-500",
    description:
      "Cevaplarınız, lipödemin günlük yaşamınızı geniş ölçüde etkilediğini ve birden fazla alanda ciddi kısıtlamalara yol açtığını gösteriyor. Bu yükü tek başınıza taşımak zorunda değilsiniz — tedavi seçenekleri var.",
    clinicalInterpretation:
      "LYMPH-ICF-LL skorunuz düşük yaşam kalitesi bandında. Mobilite, ağrı, beden algısı ve sosyal katılım gibi alanlarda belirgin işlevsel kayıp mevcut. Bu tablo genellikle yoğun konservatif tedavi ve cerrahi adaylık değerlendirmesi gerektirir.",
    steps: [
      "Lipödem cerrahisi deneyimli bir plastik cerraha danışın — cerrahi adaylığınızı değerlendirin",
      "Yoğun konservatif tedavi: kompresyon, MLD, fizik tedavi protokolü",
      "Ağrı yönetimi için multidisipliner yaklaşım gerekli olabilir",
      "Psikolojik destek almak, bu yükü daha sürdürülebilir hâle getirir",
      "Yalnız değilsiniz — sizi anlayan bir hasta topluluğuna katılın",
      "Bu sonucu yazdırın veya PDF olarak indirip doktorunuza götürün",
    ],
  },
};
