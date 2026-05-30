export type RiskBand = "LOW" | "MODERATE" | "HIGH";

export interface QuestionOption {
  label: string;
  // For Q1 & Q2: midpoint cm; for Q3: disproportion score (0-5).
  score: number;
  flag?: string;
}

export interface Question {
  id: number;
  kind: "waist" | "hip" | "disproportion";
  title: string;
  text: string;
  helpText?: string;
  options: QuestionOption[];
}

export interface TestResult {
  totalScore: number; // composite 0-10 for compatibility/persistence
  maxScore: number; // 10
  percentage: number; // composite percentage
  band: RiskBand;
  flags: string[];
  whr: number; // computed waist-to-hip ratio
  waistMid: number; // cm midpoint
  hipMid: number; // cm midpoint
  disproportionScore: number; // 0, 3, 5
  bandReason: string;
}

export const SCALE_REFERENCE = {
  name: "WHO Bel-Kalça Oranı Kesim Değerleri + Lipödem Patern Tanımlaması",
  citation:
    "WHO Waist Circumference and Waist-Hip Ratio Report 2008; Allen-Hines Lipedema Criteria 1940; Herbst KL et al. Lipedema fat distribution, Mayo Clin Proc 2020",
} as const;

export const QUESTIONS: Question[] = [
  {
    id: 1,
    kind: "waist",
    title: "Bel çevreniz",
    text: "Mezurayla göbek deliğinin biraz üstünden (en dar nokta) ölçtüğünüzde bel çevreniz hangi aralıkta?",
    helpText:
      "Mezuranız yoksa son bel ölçtüğünüz pantolon bedeninizi düşünün. Tam emin değilseniz size en yakın aralığı seçin.",
    options: [
      { label: "70 cm'den az", score: 65 },
      { label: "70 - 80 cm", score: 75 },
      { label: "80 - 90 cm", score: 85 },
      { label: "90 - 100 cm", score: 95 },
      { label: "100 cm üzeri", score: 105 },
    ],
  },
  {
    id: 2,
    kind: "hip",
    title: "Kalça çevreniz",
    text: "Kalçanın en geniş noktasından mezurayla ölçtüğünüzde kalça çevreniz hangi aralıkta?",
    helpText:
      "Kalçanın en geniş noktası genellikle pubis hizasıdır; her iki kalçanın en dolgun bölgesinden ölçün.",
    options: [
      { label: "90 cm'den az", score: 85 },
      { label: "90 - 100 cm", score: 95 },
      { label: "100 - 110 cm", score: 105 },
      { label: "110 - 120 cm", score: 115 },
      { label: "120 cm üzeri", score: 125 },
    ],
  },
  {
    id: 3,
    kind: "disproportion",
    title: "Üst-alt vücut orantısı",
    text: "Bacaklarınız ve kalçanız üst gövdenize (bel, karın, göğüs, kollar) göre orantılı mı?",
    helpText:
      "Lipödemin en tipik bulgusu üst-alt orantısızlıktır: ince bel ve üst beden ile dolgun bacaklar.",
    options: [
      {
        label:
          "Belirgin orantısızlık var — bacaklarım ve kalçam üst bedenime göre çok daha dolgun",
        score: 5,
      },
      {
        label: "Bir miktar orantısızlık var ama çok belirgin değil",
        score: 3,
      },
      {
        label: "Bedenim üst-alt arasında orantılı görünüyor",
        score: 0,
      },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  const waistMid = answers[1] ?? 0;
  const hipMid = answers[2] ?? 1; // avoid div/0
  const disproportionScore = answers[3] ?? 0;

  const whr = hipMid > 0 ? +(waistMid / hipMid).toFixed(2) : 0;

  // Composite 0-10 score for storage consistency:
  // Lower WHR + higher disproportion = stronger lipedema pattern → higher composite score.
  // WHR component: invert around 0.78-0.95 range to 0-5
  let whrComp: number;
  if (whr <= 0.74) whrComp = 5;
  else if (whr <= 0.78) whrComp = 4.5;
  else if (whr <= 0.82) whrComp = 3.5;
  else if (whr <= 0.85) whrComp = 2.5;
  else if (whr <= 0.9) whrComp = 1.5;
  else whrComp = 0.5;

  const totalScore = Math.round(whrComp + disproportionScore); // 0-10
  const maxScore = 10;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let band: RiskBand;
  let bandReason: string;
  const flags: string[] = [];

  // Banding logic — combines WHR cut-off + disproportion answer.
  if (whr < 0.78 && disproportionScore >= 5) {
    band = "HIGH";
    bandReason =
      "Bel-kalça oranınız (<0.78) ve belirgin orantısızlık birlikte lipödemin klasik üst-alt patern bulgusuyla güçlü uyum gösterir.";
  } else if (whr <= 0.85 && disproportionScore >= 3) {
    band = "MODERATE";
    bandReason =
      "Bel-kalça oranınız ve orantısızlık bildiriminiz lipödem paterniyle sınırda/orta düzeyde uyumlu.";
  } else if (whr < 0.78 && disproportionScore === 3) {
    band = "MODERATE";
    bandReason =
      "Düşük bel-kalça oranınız patern lehine, ancak orantısızlık bildiriminiz orta düzeyde — sınırda uyum.";
  } else {
    band = "LOW";
    bandReason =
      "Bel-kalça oranınız ve orantısızlık bildiriminiz lipödemin klasik üst-alt paterniyle güçlü uyum göstermiyor. Bu, lipödem olmadığı anlamına gelmez; semptom testi ile değerlendirmenizi öneririz.";
  }

  // Edge flag: extreme WHR + zero disproportion — likely non-lipedema pattern
  if (whr >= 0.9 && disproportionScore === 0) {
    flags.push("non-lipedema-pattern");
  }
  if (whr < 0.7 && disproportionScore >= 5) {
    flags.push("strong-classic-pattern");
  }

  return {
    totalScore,
    maxScore,
    percentage,
    band,
    flags,
    whr,
    waistMid,
    hipMid,
    disproportionScore,
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
    title: "Lipödem Paternine Uyum Düşük",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    description:
      "Bel-kalça oranınız ve orantısızlık bildiriminiz, lipödemin klasik üst-alt vücut patern bulgularıyla güçlü uyum göstermiyor. Bu, lipödem olmadığı anlamına gelmez — ancak antropometrik patern özelinde belirgin bir lipödem işareti yok.",
    clinicalInterpretation:
      "WHO kesim değerlerine göre kadında 0.85 üzeri WHR genel sağlık riski göstergesi; lipödemde ise klasik patern düşük WHR (genelde <0.80) ve belirgin üst-alt orantısızlıktır. Sonuçlarınız bu paternle güçlü örtüşmüyor. Yine de lipödem klinik tanıdır; belirtileriniz varsa semptom testi yapmanızı öneririz.",
    steps: [
      "Lipödem Semptom Testimizi de yaparak belirtilerinizi tarayın",
      "Genel metabolik sağlık için WHO önerisi 0.85'in altında WHR hedeflenmesidir",
      "Bel-kalça oranını ölçmeyi 3-6 aylık aralarda tekrarlayın",
      "Belirtileriniz devam ederse lipödem konusunda deneyimli bir doktora danışın",
    ],
  },
  MODERATE: {
    title: "Sınırda Patern Uyumu",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    description:
      "Bel-kalça oranınız ve orantısızlık bildiriminiz lipödem paterniyle sınırda uyum gösteriyor. Tek başına antropometri lipödem tanısı koymaz; ancak bu sınır bölgede semptom değerlendirmesini önemle öneririz.",
    clinicalInterpretation:
      "Bel-kalça oranınız 0.78-0.85 bandında ve/veya orantısızlık bildiriminiz orta düzeyde. Bu kombinasyon lipödem paterniyle örtüşebilir ancak başka durumlarla (PKOS, basit obezite, postpartum vücut değişimleri) da uyumlu olabilir. Belirtilerle birlikte değerlendirme gerekir.",
    steps: [
      "Lipödem Semptom Testini mutlaka tamamlayın — belirti tablosu tabloyu netleştirir",
      "Ailede benzer bacak yapısı varsa lipödem olasılığı artar",
      "Lipödem konusunda deneyimli bir doktorla görüşmenizi öneririz",
      "Sonucu doktorunuzla paylaşın — antropometrik baseline kayıt olur",
    ],
  },
  HIGH: {
    title: "Lipödem Paternine Güçlü Uyum",
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-500",
    description:
      "Bel-kalça oranınız ve belirgin orantısızlık bildiriminiz, lipödemin klasik üst-alt vücut paternine güçlü biçimde uyuyor. Bu önemli bir antropometrik ipucudur; ancak tek başına tanı koymaz.",
    clinicalInterpretation:
      "Düşük WHR (<0.78) + belirgin üst-alt orantısızlık, Allen-Hines'tan bu yana lipödem klinik tanımının köşe taşıdır. Bu paternin saptanması semptom testi, evre belirleme ve klinik muayene ile birlikte değerlendirilmelidir.",
    steps: [
      "Lipödem Semptom Testi ve Evre Belirleme testlerini tamamlayın",
      "Lipödem konusunda deneyimli bir doktora başvurmanızı önemle öneririz",
      "Bu sonucu yazdırıp veya PDF olarak indirip doktorunuza götürün",
      "Aile öykünüzü (anne, teyze, kız kardeş benzer bacak yapısı) doktorla paylaşın",
      "Belirtileriniz varsa erken konservatif tedavi (kompresyon, MLD, beslenme) progresyonu yavaşlatır",
    ],
  },
};
