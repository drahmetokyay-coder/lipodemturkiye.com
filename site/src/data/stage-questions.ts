export interface StageQuestionOption {
  label: string;
  score: number;
}

export interface StageQuestion {
  id: number;
  title: string;
  text: string;
  options: StageQuestionOption[];
}

export type StageLevel = "STAGE_1" | "STAGE_2" | "STAGE_3";

export interface StageResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  stageLevel: StageLevel;
}

export const STAGE_QUESTIONS: StageQuestion[] = [
  {
    id: 1,
    title: "Cilt Yüzey Görünümü",
    text: "Etkilenen bölgelerdeki cilt yüzeyinizi nasıl tanımlarsınız?",
    options: [
      { label: "Düzgün, pürüzsüz", score: 1 },
      { label: "Portakal kabuğu görünümü var", score: 2 },
      { label: "Belirgin düzensizlik ve lobüler yapılar", score: 3 },
    ],
  },
  {
    id: 2,
    title: "Deri Altı Nodüller",
    text: "Cilt altında nodül (boncuk, düğüm) yapıları hissediyor musunuz?",
    options: [
      { label: "Küçük, zor hissedilen", score: 1 },
      { label: "Belirgin, kolayca hissedilen", score: 2 },
      { label: "Büyük, sert kitleler", score: 3 },
    ],
  },
  {
    id: 3,
    title: "Yağ Dokusu Dağılımı",
    text: "Etkilenen bölgelerdeki yağ dokusu dağılımını nasıl tanımlarsınız?",
    options: [
      { label: "Hafif artmış, simetrik", score: 1 },
      { label: "Belirgin artmış, orantısız", score: 2 },
      { label: "Büyük lobüler kitleler, deformasyon", score: 3 },
    ],
  },
  {
    id: 4,
    title: "Ağrı Şiddeti",
    text: "Etkilenen bölgelerde ne düzeyde ağrı hissediyorsunuz?",
    options: [
      { label: "Hafif hassasiyet", score: 1 },
      { label: "Orta düzeyde ağrı, günlük yaşamı etkiliyor", score: 2 },
      { label: "Şiddetli ağrı, sürekli", score: 3 },
    ],
  },
  {
    id: 5,
    title: "Morarma Sıklığı",
    text: "Etkilenen bölgelerde ne sıklıkta açıklanamayan morarma oluşuyor?",
    options: [
      { label: "Nadiren", score: 1 },
      { label: "Sık sık", score: 2 },
      { label: "Çok sık, spontan (kendiliğinden)", score: 3 },
    ],
  },
  {
    id: 6,
    title: "Hareket Kısıtlaması",
    text: "Lipödem nedeniyle hareket kısıtlılığı yaşıyor musunuz?",
    options: [
      { label: "Yok veya minimal", score: 1 },
      { label: "Bazı aktivitelerde zorluk", score: 2 },
      { label: "Belirgin kısıtlılık, yürüme zorluğu", score: 3 },
    ],
  },
  {
    id: 7,
    title: "Ödem Durumu",
    text: "Etkilenen bölgelerde ödem (şişlik) durumunuz nedir?",
    options: [
      { label: "Minimal veya yok", score: 1 },
      { label: "Gün sonunda belirgin", score: 2 },
      { label: "Sürekli, belirgin ödem", score: 3 },
    ],
  },
  {
    id: 8,
    title: "Doku Sertliği (Fibrozis)",
    text: "Etkilenen bölgelerdeki doku kıvamını nasıl tanımlarsınız?",
    options: [
      { label: "Yumuşak, elastik", score: 1 },
      { label: "Kısmen sertleşmiş", score: 2 },
      { label: "Sert, fibrotik doku", score: 3 },
    ],
  },
];

export function calculateStageResult(
  answers: Record<number, number>
): StageResult {
  let totalScore = 0;

  for (const q of STAGE_QUESTIONS) {
    totalScore += answers[q.id] ?? 0;
  }

  const maxScore = 24;

  let stageLevel: StageLevel;
  if (totalScore <= 13) {
    stageLevel = "STAGE_1";
  } else if (totalScore <= 19) {
    stageLevel = "STAGE_2";
  } else {
    stageLevel = "STAGE_3";
  }

  const percentage = Math.round((totalScore / maxScore) * 100);

  return { totalScore, maxScore, percentage, stageLevel };
}

export const STAGE_RESULT_CONTENT: Record<
  StageLevel,
  {
    title: string;
    stageName: string;
    color: string;
    bgColor: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    description: string;
    recommendations: string[];
  }
> = {
  STAGE_1: {
    title: "Evre 1 — Başlangıç Evresi",
    stageName: "Evre 1",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    description:
      "Verdiğiniz yanıtlara göre bulgularınız lipödemin başlangıç evresiyle uyumlu olabilir. Bu evrede cilt yüzeyi genellikle düzgündür, ancak cilt altında küçük nodüller hissedilebilir. Yağ dokusu hafif artmış ve simetrik dağılım gösterir.",
    recommendations: [
      "Kompresyon giysilerinin düzenli kullanımı",
      "Manuel lenf drenajı (MLD) seansları",
      "Anti-inflamatuar beslenme düzenine geçiş",
      "Su içi egzersiz, yüzme veya yoga gibi düşük etkili aktiviteler",
      "Cilt bakımı ve nemlendirme rutini",
      "Düzenli doktor kontrolü ile ilerlemenin takibi",
    ],
  },
  STAGE_2: {
    title: "Evre 2 — Orta Evre",
    stageName: "Evre 2",
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    description:
      "Verdiğiniz yanıtlara göre bulgularınız lipödemin orta evresiyle uyumlu olabilir. Bu evrede cilt yüzeyinde düzensizlikler (portakal kabuğu görünümü) belirginleşir, deri altı nodüller kolayca hissedilir ve yağ dokusu orantısız biçimde artmıştır.",
    recommendations: [
      "Lipödem konusunda deneyimli bir uzmana başvurun",
      "Kombine dekonjesyon tedavisi (KDT) programı",
      "Kompresyon tedavisinin güçlendirilmesi",
      "Düzenli manuel lenf drenajı seansları",
      "Gerekli durumlarda cerrahi seçeneklerin değerlendirilmesi (liposuction)",
      "Psikolojik destek ve yaşam kalitesi iyileştirmeleri",
      "Bu sonuçları mutlaka doktorunuza gösterin",
    ],
  },
  STAGE_3: {
    title: "Evre 3 — İleri Evre",
    stageName: "Evre 3",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    description:
      "Verdiğiniz yanıtlara göre bulgularınız lipödemin ileri evresiyle uyumlu olabilir. Bu evrede büyük lobüler yağ kitleleri, belirgin doku deformasyonu, şiddetli ağrı ve hareket kısıtlılığı görülür. Ancak bu bir kesin tanı değildir — bir uzmanın muayenesi şarttır.",
    recommendations: [
      "Lipödem konusunda deneyimli bir uzmana en kısa sürede başvurun",
      "Cerrahi tedavi seçeneklerinin değerlendirilmesi (tümesans liposuction)",
      "Yoğun kombine dekonjesyon tedavisi",
      "Ağrı yönetimi ve fizik tedavi programı",
      "Mobilite desteği ve hareket rehabilitasyonu",
      "Psikolojik ve duygusal destek",
      "Bu sonuçları mutlaka doktorunuza gösterin",
    ],
  },
};
