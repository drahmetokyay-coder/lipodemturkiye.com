// Cerrahi Adaylık Değerlendirmesi
// Klinik temel:
//   - Cornely cerrahi endikasyon kriterleri (Cornely, Plast Reconstr Surg 2014)
//   - ASA Fizik Durum Sınıflaması (American Society of Anesthesiologists)
//   - Halland (Stockholm) cerrahi adaylık kriterleri
//   - Almanya S2k Kılavuzu 2024 — cerrahi endikasyon bölümü
//
// 11 soru × 0-3 puan = 0-33 toplam.
// Mutlak kontrendikasyonlar BAND'ı override eder ve sonucu "LOW (Aday değil)"
// yapar; recommendations.ts içindeki FLAG_OVERRIDES de bu flag'i tanır.

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
  helpText?: string;
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
  name: "Cornely cerrahi endikasyon + ASA fizik durum + Halland kriterleri",
  citation:
    "Cornely ME, Plast Reconstr Surg 2014; ASA Physical Status Classification System; Almanya S2k Kılavuzu 2024",
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    title: "Lipödem Evresi",
    text: "Lipödem hangi evrede tanımlandı veya size hangisi en uygun?",
    options: [
      { label: "Evre 3 — büyük lobüler kitleler, ciddi deformasyon", score: 3 },
      { label: "Evre 2 — belirgin nodüller, portakal kabuğu cilt", score: 3 },
      { label: "Evre 1 — düzgün cilt, küçük nodüller", score: 2 },
      { label: "Henüz evrelendirilmedi / emin değilim", score: 1 },
    ],
  },
  {
    id: 2,
    title: "Konservatif Tedavi Süresi",
    text: "Düzenli kompresyon, manuel lenf drenajı (MLD) ve uygun yaşam tarzı düzenlemesi içeren konservatif tedaviye ne kadar süredir devam ediyorsunuz?",
    helpText:
      "Cerrahi öncesi en az 6-12 ay süreli yeterli konservatif tedavi denemesi şarttır.",
    options: [
      { label: "12 aydan uzun süredir düzenli uyguluyorum", score: 3 },
      { label: "6-12 ay arası düzenli uyguluyorum", score: 3 },
      { label: "3-6 ay arası uyguluyorum", score: 1 },
      { label: "3 aydan az veya düzensiz / henüz başlamadım", score: 0 },
    ],
  },
  {
    id: 3,
    title: "Beden Kütle İndeksi (BMI)",
    text: "Güncel BMI değeriniz nedir?",
    helpText:
      "BMI > 35 cerrahi riski belirgin artırır; > 40 genelde önce kilo yönetimi önerilir.",
    options: [
      { label: "BMI 18.5 - 29.9 (normal/hafif fazla kilolu)", score: 3 },
      { label: "BMI 30 - 34.9 (obez sınıf I)", score: 2 },
      { label: "BMI 35 - 39.9 (obez sınıf II)", score: 1 },
      { label: "BMI 40 ve üzeri (ciddi obezite)", score: 0 },
    ],
  },
  {
    id: 4,
    title: "Sistemik Hastalıklar",
    text: "Aşağıdakilerden hangisi sizin için en uygun ifade?",
    helpText:
      "Kontrolsüz şeker hastalığı, ciddi kalp veya akciğer hastalığı mutlak kontrendikasyondur.",
    options: [
      { label: "Bilinen sistemik hastalığım yok", score: 3 },
      { label: "Var ama tamamen kontrollü (ilaçlarla iyi yönetiliyor)", score: 2 },
      { label: "Var ve kısmen kontrollü", score: 1 },
      {
        label:
          "Kontrolsüz diyabet, ileri kalp/akciğer hastalığı veya ciddi otoimmün hastalık var",
        score: 0,
        flag: "absolute-contraindication",
      },
    ],
  },
  {
    id: 5,
    title: "Aktif Enfeksiyon / Cilt Bütünlüğü",
    text: "Şu anda aktif bir enfeksiyon veya cerrahi alanda cilt bütünlüğü sorunu var mı?",
    helpText:
      "Aktif sellülit, açık yara veya tedavi edilmemiş cilt enfeksiyonu mutlak kontrendikasyondur.",
    options: [
      { label: "Hayır, hiçbir aktif enfeksiyon veya yara yok", score: 3 },
      {
        label: "Geçmişte sellülit/enfeksiyon vardı ama şu an iyileşmiş",
        score: 2,
      },
      {
        label:
          "Aktif sellülit, açık yara, tedavi edilmemiş cilt enfeksiyonum var",
        score: 0,
        flag: "absolute-contraindication",
      },
    ],
  },
  {
    id: 6,
    title: "Sigara Kullanımı",
    text: "Sigara kullanım durumunuz nedir?",
    helpText:
      "Sigara cerrahi yara iyileşmesini geciktirir; cerrahiden en az 4-6 hafta önce bırakılmalıdır.",
    options: [
      { label: "Hiç içmedim veya 1 yıldan uzun süredir bırakmışım", score: 3 },
      { label: "6-12 ay önce bıraktım", score: 2 },
      { label: "Halen içiyorum ama bırakmaya hazırım", score: 1 },
      { label: "Aktif olarak içiyorum ve bırakma planım yok", score: 0 },
    ],
  },
  {
    id: 7,
    title: "Günlük Yaşam Üzerinde Etki",
    text: "Lipödem mobilite ve günlük yaşamınızı ne ölçüde etkiliyor?",
    helpText:
      "Cerrahinin esas endikasyonlarından biri kalıcı işlevsel kısıtlılıktır.",
    options: [
      {
        label: "Şiddetli kısıtlılık — yürüme, merdiven, çalışma zor",
        score: 3,
      },
      {
        label:
          "Belirgin etki — sosyal yaşam ve aktiviteler ciddi etkileniyor",
        score: 3,
      },
      { label: "Orta etki — bazı aktivitelerde zorluk yaşıyorum", score: 2 },
      { label: "Hafif etki — günlük yaşamımı çoğunlukla sürdürüyorum", score: 1 },
    ],
  },
  {
    id: 8,
    title: "Önceki Cerrahi Deneyim",
    text: "Daha önce liposuction veya başka büyük cerrahi geçirdiniz mi?",
    options: [
      {
        label:
          "Hayır, ama anestezi öyküm sorunsuz (örn. küçük operasyonlar)",
        score: 3,
      },
      {
        label: "Evet, sorunsuz ve iyileşme süreci normaldi",
        score: 3,
      },
      {
        label: "Evet, ancak komplikasyon veya zor iyileşme yaşadım",
        score: 1,
      },
      { label: "Anestezi reaksiyonu öyküm var", score: 0 },
    ],
  },
  {
    id: 9,
    title: "Yaş ve Genel Durum",
    text: "Yaşınız ve genel sağlık durumunuz hangi tanıma uyuyor?",
    helpText:
      "Cerrahi yaş sınırı katı değil; ASA fizik durumu ve genel sağlık önceliklidir.",
    options: [
      { label: "18-50 yaş, genel sağlık iyi", score: 3 },
      { label: "50-65 yaş, genel sağlık iyi", score: 2 },
      { label: "18-50 yaş, bazı sağlık sorunları var", score: 2 },
      { label: "65+ yaş veya çoklu sağlık sorunları", score: 1 },
    ],
  },
  {
    id: 10,
    title: "Gerçekçi Beklenti",
    text: "Cerrahiden beklentilerinizi nasıl tanımlarsınız?",
    helpText:
      "Cerrahi tedavi semptomları azaltır ama lipödemi 'iyileştirmez'; konservatif tedavi sonrasında da sürmelidir.",
    options: [
      {
        label:
          "Ağrı/şişlik azalsın, mobilite artsın istiyorum; konservatif tedaviye devam edeceğimi biliyorum",
        score: 3,
      },
      {
        label:
          "Belirtilerin kısmen düzelmesini bekliyorum, ek tedavilere açığım",
        score: 2,
      },
      {
        label:
          "Tek seansta tüm sorunlarımı çözmesini ve kompresyona ihtiyaç duymamayı bekliyorum",
        score: 0,
      },
      { label: "Ne beklemem gerektiğinden emin değilim", score: 1 },
    ],
  },
  {
    id: 11,
    title: "İlaç Kullanımı (Kan Sulandırıcı)",
    text: "Düzenli olarak kan sulandırıcı (antikoagülan/antiplatelet) ilaç kullanıyor musunuz?",
    helpText:
      "Bazı kan sulandırıcılar cerrahi öncesi geçici olarak kesilebilir; ancak kesilemeyenler mutlak kontrendikasyondur.",
    options: [
      { label: "Hayır, böyle bir ilaç kullanmıyorum", score: 3 },
      {
        label: "Evet, ancak hekimimle koordineli geçici kesilebilir (örn. aspirin)",
        score: 2,
      },
      {
        label:
          "Evet, kesilemeyen kan sulandırıcı kullanıyorum (örn. mekanik kalp kapağı, son 3 ay içinde pulmoner emboli, ciddi koagülopati)",
        score: 0,
        flag: "absolute-contraindication",
      },
    ],
  },
];

export function calculateResult(answers: Record<number, number>): TestResult {
  let totalScore = 0;
  const flags: string[] = [];

  for (const q of QUESTIONS) {
    const score = answers[q.id] ?? 0;
    totalScore += score;

    // Flag tetikleyici opsiyonları bul
    const chosen = q.options.find((o) => o.score === score && answers[q.id] !== undefined);
    if (chosen?.flag) {
      flags.push(chosen.flag);
    }
  }

  const maxScore = QUESTIONS.length * 3; // 33
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Score-based band
  let band: RiskBand;
  if (totalScore <= 12) band = "LOW";
  else if (totalScore <= 22) band = "MODERATE";
  else band = "HIGH";

  let bandReason: string | undefined;

  // Mutlak kontrendikasyon override — band'ı LOW'a çek
  const hasAbsoluteContraindication = flags.includes("absolute-contraindication");
  if (hasAbsoluteContraindication) {
    band = "LOW";
    bandReason =
      "En az bir mutlak cerrahi kontrendikasyon bildirdiniz (aktif enfeksiyon, kontrolsüz sistemik hastalık veya kesilemeyen kan sulandırıcı kullanımı). Toplam puan ne olursa olsun, mevcut tabloda elektif cerrahi önerilmez.";
  }

  // Tekrarlı flag'leri temizle
  const uniqueFlags = Array.from(new Set(flags));

  return {
    totalScore,
    maxScore,
    percentage,
    band,
    flags: uniqueFlags,
    bandReason,
  };
}

export interface BandContent {
  title: string;
  shortLabel: string;
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
    title: "Şu an cerrahi için uygun aday değilsiniz",
    shortLabel: "Aday değil",
    color: "text-red-700",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
    description:
      "Verdiğiniz yanıtlara göre şu an cerrahi (liposuction) için klinik olarak uygun aday profili oluşmuyor. Bu kesin değildir; durumunuz zamanla değişebilir ve uygun adımlarla cerrahi seçeneği yeniden masaya konabilir.",
    clinicalInterpretation:
      "Cerrahinin güvenli ve etkili olabilmesi için (a) en az 6-12 ay süreli yeterli konservatif tedavi denemesi, (b) sistemik hastalıkların kontrolü, (c) gerçekçi beklenti ve (d) cerrahiyi engelleyen mutlak risklerin yokluğu gerekir. Mevcut tabloda bu kriterlerden bir veya daha fazlası henüz karşılanmıyor.",
    steps: [
      "Lipödem konusunda deneyimli bir hekimle kapsamlı klinik muayene yaptırın",
      "Konservatif tedaviyi (kompresyon + MLD + uygun beslenme/egzersiz) en az 6 ay düzenli sürdürün",
      "Varsa sistemik hastalıklarınızı (diyabet, tansiyon, otoimmün) kontrole alın",
      "Sigara, BMI ve beslenme gibi modifiye edilebilir risk faktörlerini düzenleyin",
      "Aktif enfeksiyon veya cilt sorunu varsa tedavi edilmesini bekleyin",
      "Yaşam kalitesi takibi yapın; 6-12 ay sonra cerrahi adaylığı yeniden değerlendirilebilir",
    ],
  },
  MODERATE: {
    title: "Sınır cerrahi adayı",
    shortLabel: "Sınır aday",
    color: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    description:
      "Verdiğiniz yanıtlara göre cerrahi adaylığınız sınır durumda. Bazı kriterleri karşılıyorsunuz, bazıları için ek değerlendirme veya hazırlık gerekiyor. Karar bireysel klinik değerlendirme gerektirir.",
    clinicalInterpretation:
      "Sınır aday profili — belirtiler ve evre uygun olsa da konservatif tedavi yetersizliği, BMI, sistemik kontrol veya sigara gibi modifiye edilebilir faktörlerin optimize edilmesi gerekiyor olabilir. Cerrahi karar bir plastik cerrah + dahili hekim (gerekiyorsa kardiyolog/endokrinolog) konsültasyonu ile bireyselleştirilmelidir.",
    steps: [
      "Lipödem cerrahisi konusunda deneyimli bir plastik cerrah ile ön görüşme yapın",
      "Optimize edilebilen alanları (sigara, BMI, sistemik hastalık kontrolü) hekim eşliğinde iyileştirin",
      "Konservatif tedaviyi en az 6 ay düzenli sürdürdüğünüzü kayıt altına alın",
      "Anestezi konsültasyonu (gerekirse) önceden planlayın",
      "Cerrahi öncesi laboratuvar ve görüntüleme tetkiklerini hekimle birlikte planlayın",
      "Cerrahi sonrası uzun süreli kompresyon ve takip planını öğrenin — bu plan olmadan karar vermeyin",
    ],
  },
  HIGH: {
    title: "Güçlü cerrahi aday",
    shortLabel: "Güçlü aday",
    color: "text-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    description:
      "Verdiğiniz yanıtlara göre cerrahi (liposuction) için klinik aday profiliniz uygun görünüyor. Bu kesin bir cerrahi onayı değildir; tüm karar bir plastik cerrah tarafından yapılacak fiziksel muayene, anestezi konsültasyonu ve görüntüleme sonrası verilir.",
    clinicalInterpretation:
      "Güçlü aday profili: evre ve semptom yükü uygun, konservatif tedavi süresi yeterli, BMI ve sistemik durum kabul edilebilir aralıkta, gerçekçi beklenti var. Halland (Stockholm) ve Cornely kriterleri açısından cerrahi endikasyon makul. Cerrahi yaklaşım (su jeti destekli, tümesans, vibrasyon destekli) seçimi cerrahla bireyselleştirilmelidir.",
    steps: [
      "Lipödem cerrahisi deneyimli bir plastik cerrah ile resmi konsültasyon planlayın",
      "Cerrahın geçmiş vaka portfolyosunu, komplikasyon oranlarını ve takip protokollerini değerlendirin",
      "Anestezi konsültasyonu ve preoperatif laboratuvar tetkikleri tamamlayın",
      "Cerrahi sonrası 4-6 hafta kompresyon ve fizik tedavi planını netleştirin",
      "Genelde 1-3 seans gerekir; bölge bazlı plan yapın",
      "Cerrahi 'iyileştirici' değildir; sonrasında da kompresyon, beslenme ve egzersize devam edileceğini unutmayın",
      "İkinci görüş almaktan çekinmeyin — büyük cerrahi öncesi karar netliği önemlidir",
    ],
  },
};
