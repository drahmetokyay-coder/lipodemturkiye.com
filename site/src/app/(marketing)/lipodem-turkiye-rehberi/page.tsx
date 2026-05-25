import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  MapPin,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Türkiye'de Lipödem: SGK, Doktor Bulma ve Klinik Rehberi | Lipödem Türkiye",
  description:
    "Türkiye'de lipödem: hangi doktora gidilir, SGK kapsamı, ameliyat fiyatları (il bazlı), kompresyon nereden alınır, aile hekimine nasıl anlatılır ve fizyoterapist bulma rehberi. 2026 1. Ulusal Lipödem Kongresi bilgileri.",
};

const hangiDoktor = [
  {
    uzmanlik: "Dermatoloji",
    neden:
      "Lipödem tanısında birinci basamak uzmanlardan biridir. Cilt altı yağ dokusu hastalıkları dermatologların uzmanlık alanına girer.",
    ipucu: "Lipödem anahtar kelimesiyle deneyimli dermatolog arayın.",
  },
  {
    uzmanlik: "Fizik Tedavi ve Rehabilitasyon (FTR)",
    neden:
      "Lenf ödem ve lipödem konusunda en kapsamlı konservatif tedavi yaklaşımını sunar. CDT, MLD ve kompresyon tedavisini yönetir.",
    ipucu: "Lenfödem/lipödem sertifikası olan FTR uzmanları tercih edin.",
  },
  {
    uzmanlik: "Plastik ve Rekonstrüktif Cerrahi",
    neden:
      "Lipödem cerrahisi (liposuction) plastik cerrahlar tarafından uygulanır. Deneyimli cerrahlar WAL veya PAL tekniklerini kullanır.",
    ipucu:
      "Estetik liposuction ile lipödem cerrahisi farklıdır. Lipödem deneyimi olan cerrah seçin.",
  },
  {
    uzmanlik: "Damar Cerrahisi",
    neden:
      "Venöz yetmezlik ve lipödem birlikte sık görülür. Damar cerrahları lipödemi ayırıcı tanıda değerlendirebilir.",
    ipucu: "Özellikle bacak şişliği şikayetiyle ilk başvurulabilecek uzmanlık.",
  },
  {
    uzmanlik: "Endokrinoloji",
    neden:
      "Hormonal bozukluklar lipödemi tetikleyebilir veya ağırlaştırabilir. Tiroid, insülin direnci ve PCOS değerlendirmesi önemlidir.",
    ipucu: "Eşlik eden hormonal sorunlar varsa endokrinolojiye yönlendirilebilirsiniz.",
  },
];

const sgkKapsami = {
  kapsanan: [
    "Devlet hastanelerinde uzman muayenesi (dermatoloji, FTR, damar cerrahisi)",
    "Tanı için ultrason, kan tahlili ve gerekli tetkikler",
    "Hekim raporuyla fizik tedavi seansları (yıllık kota dahilinde, genellikle 30 seans)",
    "Aile hekimi muayenesi ve sevk işlemleri",
    "Psikolojik destek (üniversite hastaneleri psikiyatri klinikleri)",
  ],
  kapsamDisi: [
    "Liposuction ameliyatı (tüm teknikler -- SGK 'estetik' olarak sınıflandırıyor)",
    "Kişiye özel düz örgü kompresyon giysileri (2.000-5.000 TL)",
    "Özel kliniklerde MLD (Manuel Lenfatik Drenaj) seansları",
    "Özel fizyoterapi merkezlerinde CDT programı",
    "GLP-1 ilaçları (lipödem endikasyonu ile reçete edilmiyor)",
  ],
};

const ilBazliFiyatlar = [
  {
    il: "İstanbul",
    aralik: "70.000 - 250.000 TL",
    not: "En fazla uzman cerrah seçeneği. Avrupa ve Anadolu yakasında çok sayıda klinik.",
  },
  {
    il: "Ankara",
    aralik: "60.000 - 180.000 TL",
    not: "Üniversite hastaneleri ve özel klinikler. Hacettepe, GATA deneyimli cerrahlar.",
  },
  {
    il: "İzmir",
    aralik: "55.000 - 160.000 TL",
    not: "Ege bölgesinin merkezi. Dokuz Eylül ve Ege Üniversitesi deneyimli cerrahlar.",
  },
  {
    il: "Antalya",
    aralik: "55.000 - 150.000 TL",
    not: "Medikal turizm merkezi. Yabancı hasta deneyimi olan klinikler.",
  },
  {
    il: "Bursa",
    aralik: "50.000 - 140.000 TL",
    not: "Uludağ Üniversitesi ve özel klinikler.",
  },
  {
    il: "Adana / Mersin",
    aralik: "50.000 - 130.000 TL",
    not: "Çukurova bölgesindeki seçenekler.",
  },
];

const kompresyonRehberi = [
  {
    marka: "Medi",
    ulke: "Almanya",
    bulunabilirlik: "Türkiye'de yaygın, medikal mağazalarda mevcut",
    fiyatAraligi: "2.500 - 5.000 TL (çift bacak, düz örgü)",
  },
  {
    marka: "Juzo",
    ulke: "Almanya",
    bulunabilirlik: "Özel sipariş ile, bazı medikal mağazalarda",
    fiyatAraligi: "2.000 - 4.500 TL (çift bacak, düz örgü)",
  },
  {
    marka: "Sigvaris",
    ulke: "İsviçre",
    bulunabilirlik: "Türkiye distribütörü mevcut",
    fiyatAraligi: "2.000 - 4.000 TL (çift bacak, düz örgü)",
  },
  {
    marka: "Bauerfeind",
    ulke: "Almanya",
    bulunabilirlik: "Online ve medikal mağazalarda",
    fiyatAraligi: "1.800 - 3.500 TL (çift bacak, düz örgü)",
  },
];

const aileHekimiTalimati = [
  "Randevunuzda şu cümleyle başlayın: 'Bacaklarımda lipödem şüphesi var ve uzman sevki istiyorum.'",
  "Belirtilerinizi somut olarak anlatın: orantısız kalınlık, ağrı, kolay morarma, diyete direnç",
  "Aile öyküsünü belirtin: annenizde, teyzenizde benzer belirtiler varsa söyleyin",
  "Dermatoloji veya FTR uzmanına sevk isteyin",
  "Gerekirse ICD-10 kodu E88.2'yi (Lipomatosis) belirtin -- lipödemin resmi kodu",
  "Sevk verilmezse ısrar edin veya başka bir aile hekimine başvurun",
];

const istatistikler = [
  {
    deger: "8-12 yıl",
    aciklama: "Türkiye'de ortalama tanı gecikmesi",
  },
  {
    deger: "%85+",
    aciklama: "İlk başvuruda yanlış tanı oranı",
  },
  {
    deger: "0",
    aciklama: "SGK'nın karşıladığı ameliyat sayısı",
  },
  {
    deger: "2026",
    aciklama: "1. Ulusal Lipödem Kongresi yılı",
  },
];

const sorular = [
  {
    soru: "Türkiye'de lipödem tanısı konabiliyor mu?",
    cevap:
      "Evet, Türkiye'de lipödem tanısı konulabilmektedir ancak lipödem konusunda deneyimli uzman sayısı sınırlıdır. Dermatoloji, FTR ve damar cerrahisi uzmanları lipödem tanısı koyabilir. Tanı klinik muayene ile konur, özel bir test veya görüntüleme gerekmez. Büyük şehirlerdeki üniversite hastaneleri ve deneyimli özel klinikler tanı için başvurulabilecek merkezlerdir.",
  },
  {
    soru: "Lipödem ameliyatı için yurt dışına gitmek gerekir mi?",
    cevap:
      "Hayır, Türkiye'de lipödem cerrahisi yapabilen deneyimli plastik cerrahlar bulunmaktadır. Ancak lipödem cerrahisi ile estetik liposuction arasındaki farkı bilen, WAL veya PAL tekniklerini uygulayan cerrah sayısı sınırlıdır. Almanya, Avusturya ve İngiltere lipödem cerrahisinde öncü ülkelerdir ancak yurt dışı maliyetleri çok daha yüksektir.",
  },
  {
    soru: "Kompresyon çorabını reçetesiz alabilir miyim?",
    cevap:
      "Evet, kompresyon çorabı reçetesiz satılmaktadır. Ancak doğru basınç sınıfı (ccl2 veya ccl3) ve ölçü tespiti için mutlaka bir uzman tarafından değerlendirme yapılmalıdır. Lipödem için düz örgü (flat-knit) kompresyon gereklidir; eczanelerde satılan yuvarlak örgü çoraplar lipödem için uygun değildir. Online ve medikal malzeme mağazalarından temin edebilirsiniz.",
  },
  {
    soru: "Fizyoterapist nasıl bulurum?",
    cevap:
      "Lenfödem/lipödem konusunda eğitimli fizyoterapistler için Türk Fizyoterapi ve Rehabilitasyon Derneği, üniversite hastaneleri FTR klinikleri ve özel lenfödem klinikleri başvurulabilecek kaynaklardır. MLD (Manuel Lenfatik Drenaj) sertifikası olan fizyoterapistleri tercih edin. Vodder veya Leduc tekniği eğitimi almış fizyoterapistler altın standarttır.",
  },
  {
    soru: "1. Ulusal Lipödem Kongresi nedir?",
    cevap:
      "2026 yılında düzenlenecek olan 1. Ulusal Lipödem Kongresi, Türkiye'de lipödem alanında gerçekleştirilecek ilk bilimsel kongre olacaktır. Kongre, lipödem farkındalığını artırmayı, uzman ağını genişletmeyi ve güncel tedavi yaklaşımlarını paylaşmayı hedeflemektedir. Detaylar açıklandığında sitemizden duyurulacaktır.",
  },
  {
    soru: "Lipödem için devlet hastanesi mi özel hastane mi tercih etmeliyim?",
    cevap:
      "Tanı ve konservatif tedavi için devlet/üniversite hastaneleri SGK kapsamında hizmet sunar ve daha ekonomiktir. Cerrahi tedavi SGK kapsamında olmadığı için zaten özel kliniklerde yapılır. İdeal yaklaşım: tanı ve takip için üniversite hastanesi, cerrahi için lipödem deneyimi olan özel plastik cerrahi kliniğidir. FTR ve MLD seansları hem devlet hem özel sektörde bulunabilir.",
  },
];

export default function LipodemTurkiyeRehberiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#1A6B5A] transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  href="/lipodem-nedir"
                  className="hover:text-[#1A6B5A] transition-colors"
                >
                  Lipödem Nedir
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-stone-800 font-medium">Türkiye Rehberi</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Türkiye&apos;de Lipödem: SGK, Doktor Bulma ve Klinik Rehberi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem tanısı aldınız veya şüpheleniyorsunuz ama Türkiye&apos;de
            nereden başlayacağınızı bilmiyor musunuz? Hangi doktora gitmeli,
            SGK ne kadarını karşılıyor, kompresyon çorabını nereden almalı,
            aile hekimine nasıl anlatmalı? Bu rehber, Türkiye&apos;deki lipödem
            hastalarına özel olarak hazırlanmış pratik bir yol haritasıdır.
            İl bazlı ameliyat fiyatlarından fizyoterapist bulmaya kadar
            ihtiyacınız olan tüm bilgileri içerir.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#15594A] transition-colors"
            >
              Semptom Testini Başlat
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/klinikler"
              className="inline-flex items-center gap-2 bg-white text-[#1A6B5A] border border-[#93D4BE] px-7 py-3 rounded-lg font-semibold hover:bg-[#E8F5F0] transition-colors"
            >
              Klinik Bul
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {istatistikler.map((stat) => (
              <div
                key={stat.aciklama}
                className="bg-stone-50 rounded-xl p-5 text-center border border-stone-200"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-[#1A6B5A]">
                  {stat.deger}
                </div>
                <p className="text-xs md:text-sm text-stone-600 mt-2">
                  {stat.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HANGİ DOKTORA GİDİLİR */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem için hangi doktora gidilir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem tanısı dermatoloji, fizik tedavi ve rehabilitasyon (FTR)
              veya damar cerrahisi uzmanları tarafından konulabilir. Cerrahi
              tedavi için lipödem deneyimi olan plastik cerrahlar tercih
              edilmelidir. Türkiye&apos;de lipödem konusunda uzmanlaşmış doktor
              sayısı sınırlı olduğundan, büyük şehirlerdeki üniversite
              hastaneleri iyi bir başlangıç noktasıdır.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            {hangiDoktor.map((doktor) => (
              <div
                key={doktor.uzmanlik}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">
                      {doktor.uzmanlik}
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-2">
                      {doktor.neden}
                    </p>
                    <div className="bg-[#E8F5F0] rounded-lg px-3 py-2 text-sm">
                      <span className="font-semibold text-[#15594A]">
                        İpucu:{" "}
                      </span>
                      <span className="text-[#1A6B5A]">{doktor.ipucu}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SGK KAPSAMI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            SGK lipödem tedavisinin ne kadarını karşılıyor?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              2025 itibarıyla SGK, lipödem ameliyatını karşılamamakta ve
              hastalığı estetik kategorisinde değerlendirmektedir. Ancak devlet
              hastanelerinde muayene ücretsizdir ve konservatif tedavilerin bir
              kısmı (fizik tedavi seansları, tetkikler) SGK kapsamında
              yapılabilmektedir. Kompresyon giysileri ve özel klinik MLD
              seansları kapsam dışıdır.
            </strong>
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">
                SGK Kapsamında
              </h3>
              <ul className="space-y-2">
                {sgkKapsami.kapsanan.map((madde, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-green-700 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{madde}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">
                SGK Kapsamı Dışında
              </h3>
              <ul className="space-y-2">
                {sgkKapsami.kapsamDisi.map((madde, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-red-700 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{madde}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* İL BAZLI FİYATLAR */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem ameliyat fiyatları illere göre nasıl değişiyor?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem ameliyat fiyatları Türkiye&apos;de illere, cerrahın
              deneyimine, kullanılan tekniğe ve tedavi edilecek bölge sayısına
              göre 50.000 TL ile 250.000 TL arasında değişmektedir. İstanbul en
              pahalı şehirken, Anadolu şehirlerinde daha uygun fiyatlar
              bulunabilir. Fiyatlar 2025 yılı itibarıyladır.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            {ilBazliFiyatlar.map((il) => (
              <div
                key={il.il}
                className="bg-white rounded-xl p-5 border border-stone-200 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex items-center gap-3 md:w-1/4">
                  <MapPin className="w-5 h-5 text-[#1A6B5A] shrink-0" />
                  <h3 className="font-semibold text-stone-800">{il.il}</h3>
                </div>
                <div className="md:w-1/4">
                  <span className="text-[#1A6B5A] font-bold">{il.aralik}</span>
                </div>
                <div className="md:w-2/4">
                  <p className="text-stone-600 text-sm">{il.not}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-stone-500">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              Fiyatlar yaklaşık değerlerdir ve tek seans (tek bölge) bazındadır.
              Toplam maliyet tedavi edilecek bölge sayısına ve seans adedine göre
              artar. Kesin fiyat için kliniğe danışın.
            </p>
          </div>
        </div>
      </section>

      {/* KOMPRESYON NEREDEN ALINIR */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Kompresyon giysileri Türkiye&apos;de nereden alınır?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem için düz örgü (flat-knit) kompresyon giysileri Medi, Juzo,
              Sigvaris ve Bauerfeind gibi markalardan temin edilebilir.
              Türkiye&apos;de medikal malzeme mağazaları, online medikal satış
              siteleri ve marka distribütörleri aracılığıyla ulaşılabilir. Doğru
              ölçü ve basınç sınıfı için mutlaka bir uzman değerlendirmesi
              gereklidir.
            </strong>
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Marka
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Ülke
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Bulunabilirlik
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-[#15594A] border-b border-stone-200">
                    Fiyat Aralığı
                  </th>
                </tr>
              </thead>
              <tbody>
                {kompresyonRehberi.map((item, i) => (
                  <tr
                    key={item.marka}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">
                      {item.marka}
                    </td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                      {item.ulke}
                    </td>
                    <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                      {item.bulunabilirlik}
                    </td>
                    <td className="px-4 py-3 text-stone-700 font-semibold border-b border-stone-100">
                      {item.fiyatAraligi}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-amber-50 rounded-xl p-5 border border-amber-200">
            <p className="text-amber-700 text-sm leading-relaxed">
              <strong>Önemli:</strong> Eczanelerde satılan yuvarlak örgü
              (round-knit) kompresyon çorapları lipödem için uygun değildir.
              Mutlaka düz örgü (flat-knit) kompresyon tercih edin. Düz örgü
              giysilerin dikişi fark edilir ve özel sipariş ile üretilir.
            </p>
          </div>
        </div>
      </section>

      {/* AİLE HEKİMİNE NASIL ANLATILIR */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Aile hekiminize lipödemi nasıl anlatırsınız?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Birçok aile hekimi lipödem hakkında yeterli bilgiye sahip
              olmayabilir. Randevunuzda hazırlıklı gitmek, doğru uzmana sevk
              almanızı kolaylaştırır. Belirtilerinizi somut olarak anlatın,
              aile öyküsünü paylaşın ve dermatoloji veya FTR uzmanına sevk
              isteyin. ICD-10 kodu E88.2&apos;yi (Lipomatosis) bilmek faydalı
              olabilir.
            </strong>
          </p>

          <div className="mt-8 space-y-3">
            {aileHekimiTalimati.map((talimat, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-stone-200"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8F5F0] text-[#15594A] font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 leading-relaxed pt-1">
                  {talimat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FİZYOTERAPİST BULMA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem için fizyoterapist nasıl bulunur?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem tedavisinde MLD (Manuel Lenfatik Drenaj) ve CDT (Komplet
              Dekongestif Terapi) uygulayan, lenfödem/lipödem konusunda eğitimli
              fizyoterapistler kritik öneme sahiptir. Vodder veya Leduc tekniği
              sertifikası olan fizyoterapistleri tercih edin. Üniversite
              hastaneleri FTR klinikleri, Türk Fizyoterapi Derneği ve özel
              lenfödem klinikleri başvurulabilecek kaynaklardır.
            </strong>
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Nerede Aranır</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Üniversite hastaneleri FTR klinikleri</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Özel lenfödem/lipödem klinikleri</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Türk Fizyoterapi ve Rehabilitasyon Derneği</span>
                </li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Nelere Dikkat Edilir</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>MLD (Vodder/Leduc) sertifikası</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>CDT uygulama deneyimi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Kompresyon bandajlama becerisi</span>
                </li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">Seans Bilgileri</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>MLD seans süresi: 45-60 dakika</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Yoğun faz: Haftada 3-5 seans, 2-4 hafta</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Seans ücreti: 500-1.500 TL (özel)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 1. ULUSAL LİPÖDEM KONGRESİ */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            1. Ulusal Lipödem Kongresi 2026 hakkında ne biliniyor?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              2026 yılında düzenlenecek olan 1. Ulusal Lipödem Kongresi,
              Türkiye&apos;de lipödem alanındaki ilk bilimsel kongre olacaktır.
              Kongre, lipödem farkındalığını artırmayı, uzmanlar arası bilgi
              paylaşımını sağlamayı, güncel tedavi protokollerini tartışmayı ve
              Türkiye&apos;ye özgü tedavi kılavuzları oluşturma yolunda ilk adımı
              atmayı hedeflemektedir.
            </strong>
          </p>

          <div className="mt-6 bg-[#E8F5F0] rounded-xl p-6 border border-[#93D4BE]">
            <h3 className="font-semibold text-[#10473B] mb-4">
              Kongrenin Hedefleri
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[#15594A]">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Türkiye&apos;deki lipödem uzmanlarını bir araya getirmek ve
                  uzman ağını genişletmek
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#15594A]">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Uluslararası kılavuzlar ışığında Türkiye&apos;ye özgü tedavi
                  protokolleri geliştirmek
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#15594A]">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  SGK kapsamının genişletilmesi için bilimsel kanıt tabanı
                  oluşturmak
                </span>
              </li>
              <li className="flex items-start gap-3 text-[#15594A]">
                <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                <span>
                  Hasta dernekleri ve hasta hakları konusunda farkındalık
                  yaratmak
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-4">
            {sorular.map((s) => (
              <details
                key={s.soru}
                className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-stone-800 font-semibold hover:bg-stone-100 transition-colors list-none">
                  <span>{s.soru}</span>
                  <ChevronRight className="w-5 h-5 text-stone-400 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-5 pt-1">
                  <p className="text-stone-600 leading-relaxed">{s.cevap}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* İLGİLİ İÇERİKLER */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            İlgili Rehberler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/lipodem-tedavisi"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-[#5BBF9E] hover:bg-[#E8F5F0] transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-[#15594A] mb-2">
                Tedavi Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Konservatif ve cerrahi tedavi seçenekleri, teknikler ve yeni
                tedaviler.
              </p>
            </Link>
            <Link
              href="/lipodem-beslenme"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-[#5BBF9E] hover:bg-[#E8F5F0] transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-[#15594A] mb-2">
                Beslenme Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Anti-inflamatuar beslenme, Türk mutfağı uyarlaması ve 7 günlük
                menü.
              </p>
            </Link>
            <Link
              href="/lipodem-ruh-sagligi"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-[#5BBF9E] hover:bg-[#E8F5F0] transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-[#15594A] mb-2">
                Ruh Sağlığı Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Psikolojik etki, beden imajı ve duygusal destek stratejileri.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* TIBBI DISCLAIMER */}
      <section className="py-8 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-start gap-3 text-sm text-stone-500">
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="leading-relaxed">
              <strong className="text-stone-600">Tıbbi Uyarı:</strong> Bu
              sayfadaki bilgiler genel rehber amaçlıdır ve profesyonel tıbbi
              tavsiye yerine geçmez. SGK kapsamı, fiyatlar ve klinik bilgileri
              değişkenlik gösterebilir. Güncel bilgiler için ilgili sağlık
              kuruluşlarına ve SGK&apos;ya başvurun. Tedavi kararlarını mutlaka
              uzman bir sağlık profesyoneli ile birlikte verin.
            </p>
          </div>
        </div>
      </section>

      {/* SON CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Doğru uzmana ilk adımı atın
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Semptom testimiz ile lipödem riskinizi değerlendirin ve size en yakın
            uzman doktoru bulun. İlk adım her zaman en zor olanıdır &mdash;
            ama artık yalnız değilsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center justify-center gap-2 bg-[#1A6B5A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#15594A] transition-colors shadow-lg shadow-[#1A6B5A]/20"
            >
              Ücretsiz Semptom Testini Başlat
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/klinikler"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1A6B5A] border-2 border-[#93D4BE] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#E8F5F0] transition-colors"
            >
              Klinik / Doktor Bul
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
