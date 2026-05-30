// Kompresyon İhtiyaç Testi
// Validated basis: Cornely-Schmeller endikasyon algoritması + CEAP-C
// (Clinical Etiologic Anatomic Pathophysiologic) klinik basamağı.
// 7 soru × 0-3 puan = 0-21 toplam.
// Bantlar:
//   LOW (Önerilmez) 0-6
//   MODERATE (Round-knit yeterli) 7-13
//   HIGH (Flat-knit gerekli) 14-21

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
  name: "Cornely-Schmeller endikasyon algoritması + CEAP-C basamağı",
  citation:
    "Cornely ME. Lipedema therapy update. Phlebologie 2014;43:255-262. Eklöf B, et al. Revision of the CEAP classification. J Vasc Surg 2004;40:1248-52. 2024 Alman S2k Lipödem Kılavuzu (flat-knit önceliği).",
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Bacak Şişliği Sıklığı",
    text: "Bacaklarınızda şişlik veya ağırlık hissi ne sıklıkta oluyor?",
    options: [
      { label: "Neredeyse hiç", score: 0 },
      { label: "Ayda birkaç kez, uzun yolculuk veya çok ayakta kaldıktan sonra", score: 1 },
      { label: "Haftanın çoğu günü, akşamları belirgin", score: 2 },
      { label: "Her gün, sabahtan akşama kadar", score: 3 },
    ],
  },
  {
    id: 2,
    title: "Günlük Aktivite Düzeyi",
    text: "Tipik bir gününüzde ne kadar süre ayakta veya hareketli geçiyorsunuz?",
    options: [
      { label: "Çoğunlukla hareketsiz / oturuyorum (4 saatten az)", score: 3 },
      { label: "Orta — günde 4-6 saat ayakta veya yürüyor", score: 2 },
      { label: "Yüksek — günde 6-8 saat aktif", score: 1 },
      { label: "Çok yüksek — düzenli egzersiz + uzun süre ayakta", score: 0 },
    ],
  },
  {
    id: 3,
    title: "Lipödem Evreniz (varsa)",
    text: "Daha önce yapılmış bir değerlendirmede size hangi evre söylendi? (Bilmiyorsanız 'Bilmiyorum' seçin)",
    options: [
      { label: "Henüz değerlendirilmedim veya bilmiyorum", score: 1 },
      { label: "Evre 1 — cilt yüzeyi düzgün, küçük nodüller", score: 1 },
      { label: "Evre 2 — portakal kabuğu, belirgin nodüller", score: 2 },
      { label: "Evre 3 — büyük lobüler kitleler, doku deformasyonu", score: 3, flag: "surgical-candidate" },
    ],
  },
  {
    id: 4,
    title: "Ayakta Durunca Ağrı",
    text: "Uzun süre ayakta kaldığınızda veya gün sonunda bacaklarınızda ağrı oluyor mu?",
    options: [
      { label: "Hayır, ağrım yok", score: 0 },
      { label: "Hafif rahatsızlık veya gerginlik hissi", score: 1 },
      { label: "Orta düzey ağrı, dinlenince azalıyor", score: 2 },
      { label: "Şiddetli ağrı, günlük yaşamı etkiliyor", score: 3 },
    ],
  },
  {
    id: 5,
    title: "Varis ve Damar Yapısı",
    text: "Bacaklarınızda görünür varis (genişlemiş yüzeyel damar), kılcal damar veya venöz yetmezlik bulgusu var mı?",
    options: [
      { label: "Hayır, görünür damar problemi yok", score: 0 },
      { label: "Sadece ince kılcal damarlar (telanjektazi)", score: 1 },
      { label: "Belirgin varis damarları var", score: 2 },
      { label: "Yaygın varis + cilt değişiklikleri (kahverengileşme, ödem izleri)", score: 3 },
    ],
  },
  {
    id: 6,
    title: "Önceki Kompresyon Deneyimi",
    text: "Daha önce kompresyon çorabı / giysisi kullandınız mı? Etkili oldu mu?",
    options: [
      { label: "Hiç kullanmadım, gerek görmedim", score: 0 },
      { label: "Kullandım, az fark ettim veya tahammül edemedim", score: 1 },
      { label: "Round-knit (standart medikal) kullandım, kısmen yardımcı oldu", score: 2 },
      { label: "Kullandım, çıkarınca semptomlar belirgin kötüleşti", score: 3 },
    ],
  },
  {
    id: 7,
    title: "Mesleki Yük (Ayakta Çalışma)",
    text: "Mesleğiniz veya günlük rutininizde uzun süre ayakta durmayı veya hareketsiz oturmayı içeriyor mu?",
    options: [
      { label: "Hayır, çoğunlukla hareketli ve karma bir gün", score: 0 },
      { label: "Bazı günler, kısmen ayakta veya kısmen masa başı", score: 1 },
      { label: "Evet, günde 6+ saat ayakta veya sabit oturuyorum", score: 2 },
      { label: "Evet, günde 8+ saat ayakta / oturarak, mola çok az", score: 3 },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;
  const flags: string[] = [];

  for (const q of QUESTIONS) {
    const selected = answers[q.id] ?? 0;
    totalScore += selected;

    const matchedOption = q.options.find((o) => o.score === selected);
    if (matchedOption?.flag && !flags.includes(matchedOption.flag)) {
      flags.push(matchedOption.flag);
    }
  }

  const maxScore = 21;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let band: RiskBand;
  let bandReason: string;
  if (totalScore <= 6) {
    band = "LOW";
    bandReason = "Kompresyon ihtiyacınız düşük — standart medikal kompresyon henüz gereksiz görünüyor.";
  } else if (totalScore <= 13) {
    band = "MODERATE";
    bandReason = "Orta düzey ihtiyaç — standart round-knit medikal kompresyon yeterli olabilir.";
  } else {
    band = "HIGH";
    bandReason = "Yüksek ihtiyaç — lipödeme özel flat-knit (düz örgü) kompresyon önerilir.";
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
    title: "Önerilmez — kompresyon şu an için gerekli değil",
    color: "text-[#2D8B73]",
    bgColor: "bg-[#E8F5F0]",
    borderColor: "border-[#2D8B73]",
    description:
      "Verdiğiniz yanıtlara göre semptomlarınız, aktivite düzeyiniz ve venöz tablonuz şu anda günlük kompresyon kullanımını gerektirmiyor. Yine de lipödem ilerleyici bir durum olduğundan, semptomlar değişirse testi tekrarlayın.",
    clinicalInterpretation:
      "Cornely-Schmeller endikasyon algoritmasında semptom-aktivite-evre üçlüsü düşük olduğunda kompresyon birinci basamak değildir. CEAP-C0/C1 düzeyinde profilaktik kompresyon zorunlu değil; uzun yolculuklar ve aşırı sıcakta düşünülebilir.",
    steps: [
      "Bacak elevasyonu (günde 2 kez 15 dk) ve düzenli hareketle takip yapın",
      "Uzun uçuş / araba yolculuklarında profilaktik (15-20 mmHg) kompresyon düşünebilirsiniz",
      "Egzersiz toleransınızı ve semptom progresyonunu 3-6 ayda bir takip edin",
      "Semptomlar (ağrı, ödem, ağırlık) artarsa testi tekrarlayın",
      "Lipödem evre değerlendirmesi yaptırmadıysanız, evre testimizi çözün",
    ],
  },
  MODERATE: {
    title: "Round-knit (standart) kompresyon yeterli olabilir",
    color: "text-[#6B7B99]",
    bgColor: "bg-[#EEF1F7]",
    borderColor: "border-[#6B7B99]",
    description:
      "Semptomlarınız ve klinik tablonuz medikal kompresyon kullanımını destekliyor. Bu bantta lipödem hastalarının çoğu standart round-knit (yuvarlak örgü) medikal kompresyon çoraplarından (15-30 mmHg) fayda görür; özellikle Evre 1 hafif tabloda yeterlidir.",
    clinicalInterpretation:
      "2024 Alman S2k Kılavuzu Evre 1 lipödemde round-knit kompresyona izin verir; Evre 2-3'te flat-knit'i önceler. Cornely-Schmeller endikasyonu: semptom + günlük yük + venöz komponent kombinasyonu pozitifse, kompresyon konservatif tedavinin temel taşıdır.",
    steps: [
      "Lipödem konusunda deneyimli bir fizyoterapist / damar uzmanına başvurun",
      "Bireysel ölçüm alınarak diz altı veya diz üstü round-knit ürün önerilebilir (15-30 mmHg)",
      "Günde en az 8 saat, mümkünse mesai saatlerinde kullanım hedefleyin",
      "Cilt bakımı + uyumu artırmak için %38 olan ortalama kullanıcı uyumunu aşmaya çalışın",
      "Evrenizi henüz bilmiyorsanız Evre Belirleme testimizi çözün — flat-knit gerekliliği netleşir",
      "Egzersizde de kompresyon önerilir (su içi aktiviteler hariç)",
    ],
  },
  HIGH: {
    title: "Flat-knit (düz örgü) kompresyon önerilir",
    color: "text-[#C46B3D]",
    bgColor: "bg-[#FEF3E6]",
    borderColor: "border-[#C46B3D]",
    description:
      "Klinik profiliniz lipödeme özel flat-knit (düz örgü) kompresyona güçlü işaret ediyor. Standart round-knit ürünler bu profilde yeterli basınç dağılımı sağlamaz; bacak konturuna oturmaz ve doku tutuşu zayıf kalır. Flat-knit, lipödem dokusunu sıkı tutar, ağrıyı azaltır ve ödemi kontrol altına alır.",
    clinicalInterpretation:
      "2024 S2k Kılavuzu, Evre 2-3 lipödemde flat-knit'i kesin önceler (medi, JOBST gibi RAL-GZ 387 standartında). Hasta uyumu sadece %38 — bu yüzden cilt bakımı, kademeli alıştırma ve doğru ölçüm kritik. CEAP-C2-C3 venöz komponent eşlik ettiğinde flat-knit zorunlu hale gelir.",
    steps: [
      "Lipödem deneyimli bir lenf / kompresyon fizyoterapistinden bireysel ölçüm alın",
      "Flat-knit ürün (CCL 2: 23-32 mmHg veya CCL 3: 34-46 mmHg) seçimi uzmanla yapılır",
      "Günde 10-14 saat kullanım hedefleyin; suyla yapılan egzersiz dışında her aktivitede kullanın",
      "Cilt nemlendirici + kompresyon altına ipek/pamuk astar kullanarak tahammülü artırın",
      "Manuel lenf drenajı (MLD) + kompresyon kombinasyonu (KDT) konuşulmalı",
      "Evre 3 işareti varsa cerrahi adaylık değerlendirmesi yaptırmayı düşünün",
    ],
  },
};
