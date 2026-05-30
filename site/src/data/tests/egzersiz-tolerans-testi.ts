// Egzersiz Tolerans Testi
// Klinik temel: Borg RPE 6-20 (Rating of Perceived Exertion) ölçeği
// + lipödeme uyarlı aktivite anketi (Schmeller, Reich-Schupke 2017,
//   Lipoedema Surgical Treatment guideline 2021).
// 8 soru × 0-4 puan = 0-32 toplam.

export type RiskBand = "LOW" | "MODERATE" | "HIGH";

export interface QuestionOption {
  label: string;
  score: number; // higher = better tolerance
  flag?: string;
}

export interface Question {
  id: number;
  title: string;
  text: string;
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
  name: "Borg RPE 6-20 + Lipödem-uyarlı aktivite anketi",
  citation:
    "Borg G. Borg's Perceived Exertion and Pain Scales (1998); Reich-Schupke et al., Phlebologie 2017 (egzersiz önerileri)",
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Yürüyüş Toleransı",
    text: "Düz zeminde kesintisiz olarak ne kadar süre rahat yürüyebiliyorsunuz?",
    options: [
      { label: "45 dakika veya daha uzun, ağrı/şişlik artmadan", score: 4 },
      { label: "20-45 dakika rahatlıkla yürüyebilirim", score: 3 },
      { label: "10-20 dakika sonra ağrı veya yorgunluk başlar", score: 2 },
      { label: "5-10 dakika içinde durmak zorunda kalıyorum", score: 1 },
      { label: "Birkaç dakika yürümek bile zor / ağrılı", score: 0 },
    ],
  },
  {
    id: 2,
    title: "Ayakta Durma Toleransı",
    text: "Mutfak, kuyruk veya iş gibi durumlarda ayakta ne kadar kalabiliyorsunuz?",
    options: [
      { label: "1 saatten uzun, belirgin sorun yaşamadan", score: 4 },
      { label: "30-60 dakika ayakta durabilirim", score: 3 },
      { label: "15-30 dakika sonra ağırlık / şişlik hissi başlar", score: 2 },
      { label: "5-15 dakika içinde oturmak isterim", score: 1 },
      { label: "Birkaç dakika sonra bacaklarımı kaldırmam gerekir", score: 0 },
    ],
  },
  {
    id: 3,
    title: "Merdiven Çıkma",
    text: "Bir kat merdiven çıktığınızda kendinizi nasıl hissediyorsunuz?",
    options: [
      { label: "2-3 kat sorunsuz çıkabilirim", score: 4 },
      { label: "1 kat rahat, üstüne yorulurum", score: 3 },
      { label: "1 kat çıkarken nefesim daralır ve dizlerim zorlanır", score: 2 },
      { label: "Yarım kat sonra durup dinlenmem gerekir", score: 1 },
      { label: "Merdiven çıkmaktan mümkün olduğunca kaçınırım", score: 0 },
    ],
  },
  {
    id: 4,
    title: "Su İçi Egzersiz / Yüzme",
    text: "Suda yürüme, aqua-fit veya yüzme deneyiminizi nasıl tanımlarsınız?",
    options: [
      { label: "Düzenli yapıyorum (haftada 2+) ve çok rahat hissediyorum", score: 4 },
      { label: "Ara sıra yapıyorum, karada yapamadıklarımı suda yapabiliyorum", score: 3 },
      { label: "Denedim, karaya göre belirgin rahat hissediyorum", score: 2 },
      { label: "Henüz denemedim ama yapmak istiyorum", score: 1 },
      { label: "Su sporlarına erişimim yok veya çok zorluyor", score: 0 },
    ],
  },
  {
    id: 5,
    title: "Bisiklet / Eliptik",
    text: "Bisiklet, eliptik bisiklet veya sabit bisiklette ne kadar süre rahat antrenman yapabilirsiniz?",
    options: [
      { label: "30 dakika veya üzeri, ağrı olmadan", score: 4 },
      { label: "15-30 dakika rahat sürebiliyorum", score: 3 },
      { label: "10-15 dakika sonra iç uyluk / kasık tahriş olur", score: 2 },
      { label: "5-10 dakika içinde durmam gerekir", score: 1 },
      { label: "Bisiklet binemiyorum / çok ağrılı", score: 0 },
    ],
  },
  {
    id: 6,
    title: "Egzersiz Sonrası Ağrı",
    text: "Bir antrenman veya yoğun günden sonra ağrı düzeyiniz nasıl olur?",
    options: [
      { label: "Genelde fazladan ağrı olmaz", score: 4 },
      { label: "Hafif kas yorgunluğu, ertesi gün geçer", score: 3 },
      { label: "Orta düzey ağrı, 1-2 gün sürer", score: 2 },
      { label: "Belirgin ağrı, 3 günü aşar", score: 1 },
      { label: "Şiddetli ağrı, bir sonraki egzersizi engelliyor", score: 0 },
    ],
  },
  {
    id: 7,
    title: "İyileşme Süresi",
    text: "Yoğun bir aktivite sonrası kendinizi yeniden zinde hissetmeniz ne kadar sürer?",
    options: [
      { label: "Birkaç saat içinde toparlanırım", score: 4 },
      { label: "Bir gece uyku yeterli", score: 3 },
      { label: "1-2 gün dinlenmem gerekir", score: 2 },
      { label: "3-5 gün toparlanma süresi", score: 1 },
      { label: "Bir haftadan uzun süre tükenmiş hissederim", score: 0 },
    ],
  },
  {
    id: 8,
    title: "Mevcut Aktivite Düzeyi",
    text: "Şu an hayatınızdaki düzenli fiziksel aktivite seviyenizi nasıl tanımlarsınız?",
    options: [
      { label: "Haftada 4+ gün planlı egzersiz", score: 4 },
      { label: "Haftada 2-3 gün egzersiz", score: 3 },
      { label: "Haftada 1 gün veya düzensiz", score: 2 },
      { label: "Sadece günlük rutin (ev/iş yürüyüşü)", score: 1 },
      { label: "Hemen hemen hareketsiz yaşam", score: 0 },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;
  for (const q of QUESTIONS) {
    totalScore += answers[q.id] ?? 0;
  }

  const maxScore = QUESTIONS.length * 4; // 32
  const percentage = Math.round((totalScore / maxScore) * 100);

  let band: RiskBand;
  if (totalScore <= 12) band = "LOW";
  else if (totalScore <= 22) band = "MODERATE";
  else band = "HIGH";

  // Aqua-recommended flag: ayakta + yürüyüş düşük (≤1) ama su egzersizi yüksek (≥3)
  const flags: string[] = [];
  const walking = answers[1] ?? 0;
  const standing = answers[2] ?? 0;
  const water = answers[4] ?? 0;
  if ((walking <= 1 || standing <= 1) && water >= 3) {
    flags.push("aqua-recommended");
  }

  return { totalScore, maxScore, percentage, band, flags };
}

export interface BandContent {
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  description: string;
  clinicalInterpretation: string;
  steps: string[];
}

export const RESULT_CONTENT: Record<RiskBand, BandContent> = {
  LOW: {
    title: "Düşük egzersiz toleransı",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
    description:
      "Verdiğiniz yanıtlara göre fiziksel aktiviteye toleransınız şu an düşük. Ağrı, hızlı yorgunluk veya günlük yaşamda kısıtlılık bildiriyorsunuz. Bu sık görülen bir durumdur ve doğru bir başlangıç stratejisiyle belirgin biçimde iyileştirilebilir.",
    clinicalInterpretation:
      "Lipödemde düşük tolerans, ağrı kaçınma davranışı ve kondisyon kaybı nedeniyle hızla kötüleşebilir. Hedef yüksek yoğunluk değil, sürdürülebilir minimum dozdur: hafif intensite + kısa süre + yüksek sıklık.",
    steps: [
      "Çok düşük yoğunlukta başlayın: günde 5-10 dakika yürüyüş veya 10 dk su içi hareket",
      "Yumuşak başlangıç: yoga, pilates, yatarak/oturarak ekstremite hareketleri",
      "Kompresyon kıyafetiyle egzersiz şişlik ve ağrıyı önemli ölçüde azaltır",
      "Su içi aktiviteler eklem yükünü %80'e kadar azaltır — su sıcaklığı 28-32°C ideal",
      "Egzersiz sonrası bacakları yükseltin ve hafif lenf drenajı uygulayın",
      "Bir fizyoterapist eşliğinde kişiselleştirilmiş program oluşturmanızı öneririz",
    ],
  },
  MODERATE: {
    title: "Orta egzersiz toleransı",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    description:
      "Verdiğiniz yanıtlara göre fiziksel aktiviteye toleransınız orta seviyede. Bazı aktiviteleri rahat yapabiliyor, bazılarında zorlanıyorsunuz. Doğru programla bu eşiği belirgin biçimde yukarı taşıyabilirsiniz.",
    clinicalInterpretation:
      "Orta tolerans, lipödem hastalarında en yaygın profildir. Borg RPE 11-13 arası 'biraz yorucu' yoğunluk hedef alınmalı, haftada en az 3 gün yapılmalıdır. Su içi egzersizler ve döngüsel düşük etkili aktiviteler önceliklidir.",
    steps: [
      "Haftada 3-4 gün, 20-30 dakika düşük-orta yoğunluklu aktivite hedefleyin",
      "Yürüyüş + su içi egzersiz + güçlendirme rotasyonu uygulayın",
      "Kompresyon kıyafeti egzersiz seanslarında zorunlu tutulmalıdır",
      "Egzersiz öncesi 5-10 dk ısınma, sonrası 5-10 dk soğuma şart",
      "İlerlemeyi yavaş ve kademeli artırın: %10 kuralı (her hafta süre/şiddetin %10'undan fazlasını artırmayın)",
      "Egzersiz sonrası 24 saatten uzun süren ağrı varsa yoğunluğu geri çekin",
    ],
  },
  HIGH: {
    title: "Yüksek egzersiz toleransı",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    description:
      "Tebrikler — fiziksel aktiviteye toleransınız iyi seviyede. Düzenli egzersizi sürdürebiliyorsunuz ve günlük yaşamda belirgin kısıtlılık yaşamıyorsunuz. Bu kazanımı koruma stratejisi, ileride lipödem progresyonunu yavaşlatmanın en güçlü silahıdır.",
    clinicalInterpretation:
      "Yüksek tolerans, lipödemde kompresyon ve beslenme ile birlikte ödem kontrolünün üç ana ayağındandır. Bu seviyeyi korumak için çeşitlilik, kompresyon disiplini ve dinlenme günleri ile sürdürülebilirlik kritiktir.",
    steps: [
      "Mevcut programınızı koruyun: haftada 4+ gün, çeşitli aktivite",
      "Kompresyon kıyafeti kullanımını sürdürün — uzun seanslar için flat-knit tercih edin",
      "Aşırı antrenmandan ve uzun süreli ayakta kalmadan kaçının",
      "Haftada 1-2 dinlenme veya sadece esneme/yoga günü ekleyin",
      "Kuvvet antrenmanını programınıza dahil edin: orta yoğunlukta tekrar sayısı yüksek setler",
      "Yaşam kalitesi takibini sürdürün; gerekirse bir sonraki adım QoL testidir",
    ],
  },
};
