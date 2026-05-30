export interface QuestionOption {
  label: string;
  score: number; // -2..+2; positive = lipödem-yönlü, negatif = lenfödem-yönlü
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
  totalScore: number; // -20..+20
  maxScore: number; // 20 (puanlama için referans)
  percentage: number; // -100..+100, sunum için |x|
  band: RiskBand; // HIGH = lipödem dominant, MODERATE = karışık, LOW = lenfödem dominant
  flags: string[];
  bandReason?: string;
}

export const SCALE_REFERENCE = {
  name: "Földi Differential Diagnosis Kriterleri + Stemmer İşareti",
  citation:
    "Földi M, Földi E. Földi's Textbook of Lymphology, 3rd ed. (2012); Cornely M. Lipedema vs. lymphedema differentiation, 2019",
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Şişliğin Dağılımı",
    text: "Şişlik veya kalınlaşma vücudunuzda nasıl dağılmış?",
    options: [
      { label: "Her iki bacağımda da simetrik (iki taraflı eş)", score: 2 },
      { label: "Çoğunlukla iki taraflı, hafif fark var", score: 1 },
      { label: "Bir bacağım belirgin olarak daha kalın (tek taraflı)", score: -2 },
    ],
  },
  {
    id: 2,
    title: "Ayakların Görünümü",
    text: "Ayaklarınız (parmak ve üst ayak bölgesi) bacaklarınıza göre nasıl?",
    options: [
      { label: "Ayaklarım normal görünüyor; bilekte keskin manşet izi var", score: 2 },
      { label: "Ayaklarım da hafif şiş ama bacaklarıma göre daha az", score: 0 },
      { label: "Ayaklarım da belirgin şişmiş, ayak üstü dolgun", score: -2 },
    ],
  },
  {
    id: 3,
    title: "Stemmer İşareti",
    text: "İkinci ayak parmağınızın dibindeki cildi başparmak ve işaret parmağınızla tutup yukarı çekmeye çalıştığınızda ne oluyor?",
    options: [
      { label: "Cildi rahatlıkla bir kıvrım hâlinde kaldırabiliyorum (Stemmer negatif)", score: 2 },
      { label: "Cildi zar zor kaldırıyorum, kıvrım kalın", score: 0 },
      {
        label: "Cildi tutup kaldıramıyorum; parmaklarım birbirine yaklaşmıyor (Stemmer pozitif)",
        score: -2,
        flag: "stemmer-positive",
      },
    ],
  },
  {
    id: 4,
    title: "Pitting (Gode) Bulgusu",
    text: "Parmağınızla 10 saniye baldırınıza bastırdığınızda iz / çukur kalıyor mu?",
    options: [
      { label: "Hayır, hiç iz kalmıyor", score: 2 },
      { label: "Bazen hafif iz kalıyor", score: 0 },
      { label: "Evet, belirgin bir çukurlaşma kalıyor", score: -2 },
    ],
  },
  {
    id: 5,
    title: "Dokunma Ağrısı / Hassasiyet",
    text: "Bacaklarınıza dokunulduğunda veya hafif basınç uygulandığında ağrı duyuyor musunuz?",
    options: [
      { label: "Evet, belirgin ağrı veya hassasiyet var", score: 2 },
      { label: "Bazen hassasiyet hissediyorum", score: 1 },
      { label: "Hayır, ağrım yok; sadece dolgunluk var", score: -2 },
    ],
  },
  {
    id: 6,
    title: "Kolay Morarma",
    text: "Bacaklarınızda nedensiz veya hafif darbeyle oluşan morarmalar fark ediyor musunuz?",
    options: [
      { label: "Evet, sık sık ve kolayca morarıyorum", score: 2 },
      { label: "Bazen fark ediyorum", score: 1 },
      { label: "Hayır, olağan dışı morarma yok", score: -2 },
    ],
  },
  {
    id: 7,
    title: "Şişliğin Başlangıcı",
    text: "Bacaklarınızdaki kalınlaşma ne zaman başladı?",
    options: [
      { label: "Ergenlik, hamilelik veya menopoz döneminde (hormonal geçiş)", score: 2 },
      { label: "Yetişkinlikte kademeli olarak", score: 0 },
      {
        label: "Bir ameliyat, kanser tedavisi, lenf bezi alımı veya yaralanma sonrası",
        score: -2,
      },
    ],
  },
  {
    id: 8,
    title: "Diyete Cevap",
    text: "Kilo verdiğinizde bacaklarınız nasıl değişiyor?",
    options: [
      { label: "Üst bedenim zayıflıyor ama bacaklarım hiç incelmiyor", score: 2 },
      { label: "Bacaklarım kısmen inceliyor", score: 0 },
      { label: "Bacaklarım da üst beden gibi inceliyor", score: -2 },
    ],
  },
  {
    id: 9,
    title: "Aile Öyküsü",
    text: "Ailenizdeki kadınlarda benzer bacak yapısı var mı?",
    options: [
      { label: "Evet, anne / büyükanne / teyze veya kardeşimde benzer durum var", score: 2 },
      { label: "Emin değilim", score: 0 },
      { label: "Hayır; ailemde böyle bir durum yok", score: -1 },
    ],
  },
  {
    id: 10,
    title: "Cilt Yapısı ve Enfeksiyon Öyküsü",
    text: "Cildinizin yapısı ve geçmişiniz hangisine daha çok uyuyor?",
    options: [
      {
        label: "Cildim yumuşak; deri altında nodül / boncuk hissediyorum; cilt enfeksiyonu öyküm yok",
        score: 2,
      },
      { label: "Cildim normal, belirgin nodül veya enfeksiyon öyküm yok", score: 0 },
      {
        label: "Cildim sert / kalınlaşmış; geçmişte tekrarlayan selülit veya cilt enfeksiyonu yaşadım",
        score: -2,
      },
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

    const option = q.options.find((o) => o.score === score);
    if (option?.flag) flags.push(option.flag);
  }

  const maxScore = 20;
  const percentage = Math.round((Math.abs(totalScore) / maxScore) * 100);

  let band: RiskBand;
  let bandReason: string;
  if (totalScore >= 6) {
    band = "HIGH";
    bandReason = "Yanıtlarınız lipödeme özgü kriterlerle (simetrik dağılım, ayak korunması, ağrı, kolay morarma) güçlü uyum gösteriyor.";
  } else if (totalScore <= -6) {
    band = "LOW";
    bandReason = "Yanıtlarınız lenfödeme özgü kriterlerle (tek taraflılık, pozitif Stemmer, pitting ödem, ayak tutulumu) daha çok uyumlu.";
  } else {
    band = "MODERATE";
    bandReason = "Yanıtlarınız net bir tarafa eğilim göstermiyor; lipödem ve lenfödem komponentleri bir arada olabilir (lipo-lenfödem).";
  }

  // Stemmer pozitif klinik kırmızı bayrak: band'i override etmez, ek uyarı eklenir
  // (recommendation engine FLAG_OVERRIDES üzerinden uzman önerisini FTR'ye yönlendirir)

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
  HIGH: {
    title: "Lipödem dominant profil",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500",
    description:
      "Yanıtlarınız klasik lipödem kriterleriyle güçlü uyum gösteriyor: iki taraflı simetrik dağılım, ayakların korunması, dokunma ağrısı ve kolay morarma. Bu bulgular Földi ayırıcı tanı şemasında lipödem yönünü destekler.",
    clinicalInterpretation:
      "Profiliniz tipik lipödem örüntüsüne uyuyor: bilateral simetrik şişlik, negatif Stemmer, ayakların korunması ve hassasiyet öne çıkıyor. Tablonuzu netleştirmek için bir lipödem semptom testi ve klinik muayene faydalıdır; lenfödem komponenti zamanla eklenebileceği için takip önerilir.",
    steps: [
      "Lipödem konusunda deneyimli bir uzmana (FTR / damar / plastik) başvurun",
      "Semptom ve evre testlerimizi tamamlayarak tabloyu netleştirin",
      "Anti-inflamatuar beslenme ve düşük etkili egzersize başlayın",
      "Düzenli (3-6 aylık) klinik takip ile lenfödem geçişini izleyin",
    ],
  },
  MODERATE: {
    title: "Karışık tablo (lipo-lenfödem ihtimali)",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    description:
      "Yanıtlarınız net bir tarafa eğilim göstermiyor. Bu, ileri evre lipödemde sık görülen lipo-lenfödem (her iki komponentin bir arada olduğu) tablosuyla uyumlu olabilir. Görüntüleme ve klinik muayeneyle ayrım netleştirilmelidir.",
    clinicalInterpretation:
      "Sonucunuz hem lipödem hem lenfödem bulgularını içeriyor; bu özellikle uzun süredir tedavi almayan ileri evre lipödemde görülen lipo-lenfödem tablosu olabilir. Doppler ultrason / lenfosintigrafi ve deneyimli bir uzman muayenesi ayırıcı tanı için belirleyicidir.",
    steps: [
      "Mutlaka lipödem ve lenfödem alanında deneyimli bir uzmana başvurun",
      "Doppler USG veya lenfosintigrafi gibi görüntüleme yöntemlerini gündeme getirin",
      "Erken kompresyon değerlendirmesi yaptırın (flat-knit gerekebilir)",
      "Anti-inflamatuar beslenme + manuel lenf drenajı (MLD) seçeneklerini araştırın",
      "Ağrı şiddetiniz varsa Ağrı VAS Skoru testimizle tabloyu detaylandırın",
    ],
  },
  LOW: {
    title: "Lenfödem dominant profil",
    color: "text-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-500",
    description:
      "Yanıtlarınız klasik lenfödem kriterleriyle daha uyumlu: tek taraflılık, pozitif Stemmer işareti, pitting (gode) ödemi, ayak tutulumu ve enfeksiyon öyküsü. Bu profil için lenfödem yönünden öncelikli değerlendirme yapılmalıdır.",
    clinicalInterpretation:
      "Profiliniz lenfödem örüntüsüne daha çok uyuyor. Lenfödem ilerleyici bir hastalıktır; erken tanı ve kompleks dekonjesyon tedavisi (KDT) prognozu belirleyici şekilde iyileştirir. Lipödem komponentinin eşlik edip etmediği klinik muayeneyle değerlendirilmelidir.",
    steps: [
      "Fiziksel tıp ve rehabilitasyon (FTR) veya lenfödem polikliniğine başvurun",
      "Lenfosintigrafi ile lenfatik akımın değerlendirilmesini isteyin",
      "Manuel lenf drenajı (MLD) ve flat-knit kompresyon ile erken tedaviye başlayın",
      "Cilt bakımı ve selülit (cilt enfeksiyonu) profilaksisi şart",
      "Lenfödem rehberimizi ve yaşam tarzı önerilerini inceleyin",
    ],
  },
};
