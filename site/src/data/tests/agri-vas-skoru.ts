export interface QuestionOption {
  label: string;
  score: number; // 0..10 (VAS) bazlı
  flag?: string;
}

export interface Question {
  id: number;
  title: string;
  text: string;
  options: QuestionOption[];
}

export type RiskBand = "LOW" | "MODERATE" | "HIGH";

export interface TestResult {
  totalScore: number; // 0..60
  maxScore: number; // 60
  percentage: number; // 0..100
  band: RiskBand;
  flags: string[];
  bandReason?: string;
}

export const SCALE_REFERENCE = {
  name: "Visual Analog Scale (VAS 0-10) + Brief Pain Inventory Short Form (BPI-SF)",
  citation:
    "Hawker GA et al. Arthritis Care Res 2011; Cleeland CS, Ryan KM. Brief Pain Inventory, Ann Acad Med Singapore 1994",
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Son 24 Saatte En Şiddetli Ağrı",
    text: "Son 24 saatte bacaklarınızdaki en şiddetli ağrıyı 0-10 arası nasıl puanlardınız? (0 = hiç yok, 10 = hayal edilebilecek en şiddetli)",
    options: [
      { label: "0-1 — Yok ya da çok hafif", score: 0 },
      { label: "2-3 — Hafif", score: 3 },
      { label: "4-5 — Orta", score: 5 },
      { label: "6-7 — Belirgin / şiddetli", score: 7 },
      { label: "8-10 — Çok şiddetli, dayanılmaz", score: 10 },
    ],
  },
  {
    id: 2,
    title: "Ortalama Ağrı Şiddeti",
    text: "Son 7 günde bacaklarınızdaki ortalama ağrı düzeyi nedir?",
    options: [
      { label: "0-1 — Yok ya da çok hafif", score: 0 },
      { label: "2-3 — Hafif", score: 3 },
      { label: "4-5 — Orta", score: 5 },
      { label: "6-7 — Belirgin / şiddetli", score: 7 },
      { label: "8-10 — Çok şiddetli, sürekli", score: 10 },
    ],
  },
  {
    id: 3,
    title: "Dokunma / Basınç Ağrısı",
    text: "Bacaklarınıza dokunulduğunda veya hafif basınç uygulandığında oluşan ağrı düzeyi nedir?",
    options: [
      { label: "0-1 — Hiç ağrı yok", score: 0 },
      { label: "2-3 — Hafif hassasiyet", score: 3 },
      { label: "4-5 — Belirgin hassasiyet", score: 5 },
      { label: "6-7 — Dokunma katlanılmaz", score: 7 },
      { label: "8-10 — Yatak çarşafı bile rahatsız ediyor", score: 10 },
    ],
  },
  {
    id: 4,
    title: "Ağrının Günlük Yaşama Etkisi",
    text: "Ağrı son 7 günde günlük aktivitelerinizi (yürüme, ev işi, iş) ne kadar etkiledi?",
    options: [
      { label: "0-1 — Hiç etkilemedi", score: 0 },
      { label: "2-3 — Hafif etkiledi", score: 3 },
      { label: "4-5 — Orta düzeyde etkiledi", score: 5 },
      { label: "6-7 — Çoğu aktivitemi kısıtladı", score: 7 },
      { label: "8-10 — Neredeyse hiçbir şey yapamadım", score: 10 },
    ],
  },
  {
    id: 5,
    title: "Uyku ve Ruh Hali Üzerine Etki",
    text: "Ağrı uykunuzu, ruh halinizi veya yaşam zevkinizi ne ölçüde etkiliyor?",
    options: [
      { label: "0-1 — Etkilemiyor", score: 0 },
      { label: "2-3 — Hafif etki", score: 3 },
      { label: "4-5 — Bazı geceler uykumu bozuyor", score: 5 },
      { label: "6-7 — Sık sık uyumakta zorluk, ruh halim bozuk", score: 7 },
      { label: "8-10 — Sürekli uykusuzluk, ciddi sıkıntı", score: 10 },
    ],
  },
  {
    id: 6,
    title: "Ağrı Dağılımı",
    text: "Ağrınız bacaklarınızda nasıl dağılmış?",
    options: [
      { label: "Her iki bacakta benzer şekilde (simetrik)", score: 6 },
      { label: "İki tarafta da var, biri biraz daha şiddetli", score: 5 },
      {
        label: "Sadece tek bacağımda ağrı var (tek taraflı)",
        score: 4,
        flag: "unilateral-pain",
      },
      { label: "Ağrı çok değişken, gün gün yer değiştiriyor", score: 3 },
      { label: "Belirgin bir ağrım yok", score: 0 },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;
  const flags: string[] = [];

  for (const q of QUESTIONS) {
    const score = answers[q.id];
    if (score === undefined) continue;
    totalScore += score;

    // Flag tespiti: cevaplanan skora karşılık gelen option'da flag varsa ekle.
    // QUESTIONS'da flag taşıyan tüm seçeneklere benzersiz skor verildi
    // (örn. Soru 6'da tek taraflı seçim score=4, diğer seçimler 0/3/5/6).
    const matching = q.options.find((o) => o.score === score);
    if (matching?.flag && !flags.includes(matching.flag)) {
      flags.push(matching.flag);
    }
  }

  const maxScore = 60;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let band: RiskBand;
  let bandReason: string;
  if (totalScore >= 40) {
    band = "HIGH";
    bandReason =
      "Şiddetli ağrı bandı: ağrınız günlük yaşamı, uykuyu ve ruh halinizi belirgin biçimde etkiliyor.";
  } else if (totalScore >= 20) {
    band = "MODERATE";
    bandReason =
      "Orta düzey ağrı bandı: ağrınız zaman zaman aktivitelerinizi kısıtlıyor; aktif yönetim önemlidir.";
  } else {
    band = "LOW";
    bandReason =
      "Hafif ağrı bandı: ağrınız mevcut ancak günlük yaşamınızı belirgin olarak kısıtlamıyor.";
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
    title: "Hafif ağrı",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    description:
      "Ağrınız hafif düzeyde. Günlük aktivitelerinizi belirgin olarak kısıtlamıyor; uyku ve ruh halinize ciddi bir etkisi yok.",
    clinicalInterpretation:
      "Hafif ağrı bandında olmanız iyi bir göstergedir. Yine de lipödemde ağrı zamanla artabileceği için anti-inflamatuar yaşam tarzı, düzenli kompresyon ve düşük etkili egzersiz koruyucu rol oynar. Ağrınız tek taraflı ise altta lipödem dışı bir neden olabileceğinden uzman değerlendirmesi önerilir.",
    steps: [
      "Anti-inflamatuar beslenme alışkanlıklarını sürdürün",
      "Düşük etkili egzersiz (su içi, yoga, yürüyüş) ekleyin",
      "Ağrı şiddetini ayda bir bu testle takip edin",
      "Ağrı belirgin biçimde artarsa ya da tek taraflı olursa uzmana başvurun",
    ],
  },
  MODERATE: {
    title: "Orta düzey ağrı",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    description:
      "Ağrınız orta düzeyde. Bazı günlük aktiviteleri kısıtlıyor ve zaman zaman uykunuzu ya da ruh halinizi etkiliyor olabilir.",
    clinicalInterpretation:
      "Orta düzey ağrı bandı, lipödem semptom yönetiminde aktif müdahale gerektirir. Kompresyon tedavisi, manuel lenf drenajı ve düşük etkili egzersiz programı ağrıyı belirgin biçimde azaltabilir. Yaşam kalitenizin de etkilenip etkilenmediğini ölçmenizi öneririz.",
    steps: [
      "Bir lipödem deneyimli uzmana (FTR / damar) başvurun",
      "Kompresyon ihtiyacınızı değerlendirin (round-knit / flat-knit)",
      "Manuel lenf drenajı (MLD) seanslarını gündeme alın",
      "Yaşam kalitesi testimizle ağrının günlük etkisini ölçün",
      "Anti-inflamatuar beslenme ve düzenli düşük etkili egzersize başlayın",
    ],
  },
  HIGH: {
    title: "Şiddetli ağrı",
    color: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-500",
    description:
      "Ağrınız şiddetli düzeyde. Günlük yaşamınızı, uykunuzu ve ruh halinizi belirgin biçimde etkiliyor. Bu durum lipödemde acil olarak ele alınması gereken bir tablodur.",
    clinicalInterpretation:
      "Şiddetli ağrı bandı; lipödemde sıklıkla ileri evre veya tedavi edilmemiş hastalıkla ilişkilidir. Çok modaliteli tedavi (kompresyon, MLD, ilaç-dışı ağrı yönetimi, gerektiğinde tümesans liposuction) ciddi iyileşme sağlayabilir. Tek bir uzmandan değil, ekip yaklaşımından (FTR + plastik cerrahi + diyetisyen) yarar görebilirsiniz.",
    steps: [
      "Lipödem deneyimli bir uzmana en kısa sürede başvurun",
      "Yaşam kalitesi testimizi yaparak günlük etkiyi ölçün",
      "Kompresyon ihtiyaç testimizle flat-knit gereksinimini değerlendirin",
      "Tümesans liposuction (cerrahi) adaylığınızı uzmanınızla görüşün",
      "Psikolojik destek ve uyku hijyeni; ağrı yönetiminde önemli bileşendir",
    ],
  },
};
