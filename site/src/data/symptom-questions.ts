export interface QuestionOption {
  label: string;
  score: number;
}

export interface Question {
  id: number;
  title: string;
  text: string;
  options: QuestionOption[];
}

export type RiskLevel = "LOW" | "MODERATE" | "HIGH";

export interface TestResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  riskLevel: RiskLevel;
  goldenTriangleBonus: boolean;
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Orantısız Yağ Birikimi",
    text: "Bacaklarınızda (kalça, uyluk, diz veya baldır bölgesinde) üst bedeninize göre orantısız bir kalınlık fark ediyor musunuz?",
    options: [
      { label: "Evet, belirgin şekilde orantısız", score: 4 },
      { label: "Biraz orantısız gibi", score: 2 },
      { label: "Hayır, vücudum genel olarak orantılı", score: 0 },
    ],
  },
  {
    id: 2,
    title: "Diyete Direnç",
    text: "Diyet yaptığınızda üst bedeniniz zayıflarken bacaklarınız incelmeden mi kalıyor?",
    options: [
      { label: "Evet, bacaklarım hiç incelmiyor", score: 4 },
      { label: "Kısmen — çok az inceliyor", score: 2 },
      { label: "Hayır, bacaklarım da inceliyor", score: 0 },
    ],
  },
  {
    id: 3,
    title: "Ağrı ve Hassasiyet",
    text: "Bacaklarınıza dokunulduğunda veya basınç uygulandığında ağrı veya hassasiyet hissediyor musunuz?",
    options: [
      { label: "Evet, belirgin ağrı veya hassasiyet var", score: 4 },
      { label: "Bazen hassasiyet hissediyorum", score: 2 },
      { label: "Hayır, ağrı veya hassasiyet yok", score: 0 },
    ],
  },
  {
    id: 4,
    title: "Kolay Morarma",
    text: "Bacaklarınızda açıklayamadığınız, kolayca oluşan morarmalar fark ediyor musunuz?",
    options: [
      { label: "Evet, sık sık ve kolayca morarıyorum", score: 4 },
      { label: "Bazen fark ediyorum", score: 2 },
      { label: "Hayır, olağan dışı morarma yok", score: 0 },
    ],
  },
  {
    id: 5,
    title: "Akşam Şişliği",
    text: "Gün sonunda (özellikle akşam saatlerinde) bacaklarınızda ağırlık hissi, şişkinlik veya gerginlik oluyor mu?",
    options: [
      { label: "Evet, neredeyse her gün", score: 3 },
      { label: "Bazen, özellikle uzun süre ayakta kaldığımda", score: 1 },
      { label: "Hayır, böyle bir şikayetim yok", score: 0 },
    ],
  },
  {
    id: 6,
    title: "Nodül / Boncuklanma",
    text: "Bacaklarınızda cilt altında boncuk, düğüm veya nodül gibi sert yapılar hissediyor musunuz?",
    options: [
      { label: "Evet, belirgin şekilde hissediyorum", score: 4 },
      { label: "Biraz var gibi", score: 2 },
      { label: "Hayır, hissetmiyorum", score: 0 },
    ],
  },
  {
    id: 7,
    title: "Bilateral Simetri",
    text: "Bacaklarınızdaki kalınlaşma iki taraflı ve simetrik mi? (Yani her iki bacağınızda da benzer şekilde mi?)",
    options: [
      { label: "Evet, her iki bacağım da benzer şekilde kalın", score: 4 },
      { label: "Bir bacağım diğerinden biraz farklı", score: 1 },
      { label: "Tek taraflı — sadece bir bacağımda var", score: 0 },
    ],
  },
  {
    id: 8,
    title: "Ayakların Korunması (Manşet İşareti)",
    text: "Ayaklarınız bacaklarınıza göre normal boyutta mı kalıyor? (Bilekte keskin bir sınır var mı?)",
    options: [
      { label: "Evet, ayaklarım normal ama bacaklarım kalın — bilekte belirgin bir fark var", score: 4 },
      { label: "Tam emin değilim", score: 1 },
      { label: "Hayır, ayaklarım da şiş", score: 0 },
    ],
  },
  {
    id: 9,
    title: "Aile Öyküsü",
    text: "Ailenizde (anne, büyükanne, teyze, kız kardeş) benzer bacak yapısına sahip kadınlar var mı?",
    options: [
      { label: "Evet, en az bir kadın akrabamda benzer durum var", score: 3 },
      { label: "Emin değilim", score: 1 },
      { label: "Hayır, ailemde böyle bir durum yok", score: 0 },
    ],
  },
  {
    id: 10,
    title: "Hormonal Tetik",
    text: "Bu belirtiler hangi dönemde başladı veya belirginleşti?",
    options: [
      { label: "Ergenlik döneminde", score: 3 },
      { label: "Hamilelik veya doğum sonrası", score: 3 },
      { label: "Doğum kontrolü veya menopoz döneminde", score: 2 },
      { label: "Hatırlamıyorum / başka bir dönemde", score: 1 },
    ],
  },
  {
    id: 11,
    title: "Pitting Testi (Baskı İzi)",
    text: "Parmağınızla bacağınıza bastığınızda iz (çukur) kalıyor mu?",
    options: [
      { label: "Hayır, iz kalmıyor", score: 3 },
      { label: "Bazen hafif iz kalıyor", score: 1 },
      { label: "Evet, belirgin çukurlaşma oluyor", score: 0 },
    ],
  },
  {
    id: 12,
    title: "Sıcak Hassasiyeti",
    text: "Sıcak havalarda bacaklarınızdaki şişlik ve rahatsızlık belirgin şekilde artıyor mu?",
    options: [
      { label: "Evet, sıcakta çok kötüleşiyor", score: 3 },
      { label: "Biraz artıyor", score: 1 },
      { label: "Hayır, sıcaktan etkilenmiyorum", score: 0 },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;

  for (const q of QUESTIONS) {
    totalScore += answers[q.id] ?? 0;
  }

  const q1 = answers[1] ?? 0;
  const q2 = answers[2] ?? 0;
  const q7 = answers[7] ?? 0;
  const goldenTriangle = q1 + q2 + q7;
  const goldenTriangleBonus = goldenTriangle >= 10;
  if (goldenTriangleBonus) {
    totalScore += 2;
  }

  // Soru 7 C seçeneği (tek taraflı) = score 0, negatif gösterge
  if (q7 === 0 && answers[7] !== undefined) {
    totalScore = Math.max(totalScore - 3, 0);
  }

  // Soru 11 C seçeneği (belirgin pitting) = score 0, negatif gösterge
  const q11 = answers[11] ?? 0;
  if (q11 === 0 && answers[11] !== undefined) {
    totalScore = Math.max(totalScore - 2, 0);
  }

  const maxScore = 45;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let riskLevel: RiskLevel;
  if (totalScore <= 14) {
    riskLevel = "LOW";
  } else if (totalScore <= 28) {
    riskLevel = "MODERATE";
  } else {
    riskLevel = "HIGH";
  }

  return { totalScore, maxScore, percentage, riskLevel, goldenTriangleBonus };
}

export const RESULT_CONTENT: Record<
  RiskLevel,
  {
    title: string;
    color: string;
    bgColor: string;
    borderColor: string;
    description: string;
    empathyMessage?: string;
    steps: string[];
  }
> = {
  LOW: {
    title: "Şu an endişelenecek bir durum görünmüyor",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    description:
      "Verdiğiniz yanıtlara göre belirtileriniz lipödem ile güçlü bir uyum göstermiyor. Ancak bu, kesin bir tanı değildir. Belirtileriniz zamanla değişebilir veya farklı bir durum söz konusu olabilir.",
    steps: [
      "Belirtileriniz devam eder veya artarsa, bir uzmana danışmanızı öneririz",
      "Lipödem hakkında genel bilgi edinmek isterseniz rehberimizi inceleyin",
      "Bu testi 6 ay sonra tekrar çözebilirsiniz — belirtiler zamanla değişebilir",
    ],
  },
  MODERATE: {
    title: "Bazı belirtileriniz lipödemi düşündürebilir",
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
    description:
      "Verdiğiniz yanıtlara göre bazı belirtileriniz lipödem ile uyumlu olabilir. Bu, \"lipödeminiz var\" anlamına gelmez — ama bir uzman tarafından değerlendirilmeniz yararlı olabilir. Unutmayın: erken farkındalık, erken müdahale demektir.",
    steps: [
      "Bu sonuçları doktorunuza gösterin — yazdırıp randevunuza götürebilirsiniz",
      "Lipödem konusunda deneyimli bir uzman bulun",
      "Lipödem belirtileri hakkında detaylı bilgi edinin",
      "Doktora hazırlık rehberimizi okuyun",
    ],
  },
  HIGH: {
    title: "Bulgularınız lipödemle uyumlu olabilir",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    description:
      "Verdiğiniz yanıtlara göre belirtileriniz lipödemle önemli ölçüde uyumludur. Bu sonuç bir tanı değildir — kesin tanı yalnızca lipödem konusunda deneyimli bir uzmanın muayenesiyle konulabilir. Ama bu sonuç, bir uzmana başvurmanız için güçlü bir neden.",
    empathyMessage:
      "Ve şunu bilmenizi istiyoruz: Bu sizin hatanız değil. Yaşadıklarınızın bir adı var ve tedavi seçenekleri mevcut. Siz bu sonucu görüntüleyerek sağlığınız için çok önemli bir adım attınız.",
    steps: [
      "Bu sonuçları mutlaka doktorunuza gösterin",
      "Lipödem konusunda deneyimli bir uzman bulun",
      "Lipödem hakkında kapsamlı bilgi edinin",
      "Tedavi seçeneklerinizi inceleyin",
      "Yalnız değilsiniz — toplulukta sizi anlayan kadınlarla tanışın",
    ],
  },
};
