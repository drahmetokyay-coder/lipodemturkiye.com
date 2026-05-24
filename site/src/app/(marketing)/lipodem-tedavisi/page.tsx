import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Activity,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lipödem Tedavisi: Konservatif ve Cerrahi Seçenekler | 2025 Rehberi",
  description:
    "Lipödem tedavi yöntemleri: MLD, CDT, kompresyon tedavisi, liposuction teknikleri, ameliyat fiyatları (55.000-250.000 TL), SGK durumu ve yeni GLP-1 tedavileri. 2024 Alman S2k Kılavuzu ve 2025 Delphi Konsensüsüne dayalı kapsamlı rehber.",
};

const konservatifTedaviler = [
  {
    baslik: "Manuel Lenfatik Drenaj (MLD)",
    aciklama:
      "Eğitimli fizyoterapistler tarafından uygulanan, lenf sıvısının dolaşımını hızlandıran özel masaj tekniği. Haftada 1-3 seans önerilir. Ağrıyı ve şişliği azaltır, doku esnekliğini artırır.",
    icon: "hands",
  },
  {
    baslik: "Komplet Dekongestif Terapi (CDT)",
    aciklama:
      "MLD, kompresyon bandajlama, cilt bakımı ve egzersizi birleştiren altın standart tedavi. İki fazdan oluşur: yoğun faz (2-4 hafta) ve sürdürme fazı (ömür boyu). 2024 Alman S2k Kılavuzu birinci basamak tedavi olarak önerir.",
    icon: "therapy",
  },
  {
    baslik: "Kompresyon Giysileri",
    aciklama:
      "Düz örgü (flat-knit) kompresyon çorapları lipödem için standarttır. Yuvarlak örgü çoraplar etkisizdir. Basınç sınıfı genellikle ccl2 (23-32 mmHg) veya ccl3 (34-46 mmHg). Kişiye özel ölçü ile üretilmelidir.",
    icon: "compression",
  },
  {
    baslik: "Anti-inflamatuar Beslenme",
    aciklama:
      "Şeker, işlenmiş gıdalar ve rafine karbonhidratlardan kaçınma, omega-3 açısından zengin besinlere yönelme. Lipödemdeki kronik inflamasyonu azaltmaya yardımcı olur. Tek başına tedavi değildir ancak semptom yönetimini destekler.",
    icon: "nutrition",
  },
  {
    baslik: "Su İçi Egzersiz (Akuatik Terapi)",
    aciklama:
      "Suyun doğal kompresyon etkisi ve kaldırma kuvveti sayesinde eklemlere yük bindirmeden lenf akışını destekler. Haftada 2-3 seans havuz egzersizi, lipödem hastalarında en çok önerilen aktivite türüdür.",
    icon: "water",
  },
];

const cerrahiTeknikler = [
  {
    teknik: "WAL (Water-Assisted Liposuction)",
    aciklama:
      "Su jeti ile yağ hücrelerini gevşetip nazikçe çeken teknik. Lenf damarlarına en az hasar veren yöntem olarak lipödem cerrahisinde altın standart kabul edilir.",
    avantaj: "Lenf koruyucu, az travma",
    dezavantaj: "Sınırlı sayıda uzman cerrah",
  },
  {
    teknik: "PAL (Power-Assisted Liposuction)",
    aciklama:
      "Titreşimli kanül ile yağ hücrelerini parçalayan teknik. WAL'a alternatif olarak deneyimli cerrahlar tarafından başarıyla uygulanmaktadır.",
    avantaj: "Geniş cerrah erişimi",
    dezavantaj: "WAL'a göre daha fazla doku travması",
  },
  {
    teknik: "Tümesan Liposuction",
    aciklama:
      "Alanı serum fizyolojik ve lokal anestezik ile şişirerek yağ aspirasyonu yapılan klasik teknik. Genel anestezi gerektirmeyebilir.",
    avantaj: "Lokal anestezi imkanı",
    dezavantaj: "Lenf damarı hasarı riski daha yüksek",
  },
];

const fiyatlar = [
  { bolge: "Sadece bacak (alt)", aralik: "55.000 - 90.000 TL" },
  { bolge: "Tam bacak (alt + üst)", aralik: "90.000 - 150.000 TL" },
  { bolge: "Bacak + Kol", aralik: "130.000 - 200.000 TL" },
  { bolge: "Kapsamlı (çoklu seans)", aralik: "180.000 - 250.000 TL" },
];

const istatistikler = [
  {
    deger: "%60-80",
    aciklama: "CDT ile semptom iyileşme oranı",
  },
  {
    deger: "8-12 yıl",
    aciklama: "Ortalama tanı süresi (gecikme)",
  },
  {
    deger: "%85+",
    aciklama: "Liposuction sonrası hasta memnuniyeti",
  },
  {
    deger: "2-4 seans",
    aciklama: "Ortalama cerrahi seans sayısı",
  },
];

const sorular = [
  {
    soru: "Lipödem ameliyatı kalıcı mı?",
    cevap:
      "Liposuction ile alınan lipödem yağ hücreleri geri gelmez. Ancak kalan yağ hücreleri büyüyebilir, bu nedenle ameliyat sonrası kompresyon tedavisine ve anti-inflamatuar yaşam tarzına devam edilmesi önemlidir. Araştırmalar, ameliyat sonrası 4-8 yıl takipte hastaların büyük çoğunluğunun sonuçlardan memnun kaldığını göstermektedir.",
  },
  {
    soru: "SGK lipödem ameliyatını karşılıyor mu?",
    cevap:
      "Hayır, 2025 itibarıyla SGK lipödem ameliyatını (liposuction) karşılamamaktadır. SGK lipödemi 'estetik' kategorisinde değerlendirmektedir. Ancak lipödem muayenesi ve konservatif tedavilerin bir kısmı SGK kapsamında yapılabilmektedir. Özel sağlık sigortaları da genellikle lipödem ameliyatını karşılamamaktadır.",
  },
  {
    soru: "Ameliyat olmadan lipödem tedavi edilebilir mi?",
    cevap:
      "Evet, konservatif tedaviler lipödem semptomlarını önemli ölçüde hafifletebilir. CDT (Komplet Dekongestif Terapi), kompresyon giysileri, anti-inflamatuar beslenme ve düzenli egzersiz kombinasyonu birçok hastada ağrıyı, şişliği ve ilerlemeyi yavaşlatır. Ancak lipödem yağını tamamen ortadan kaldırmaz; bu ancak cerrahi ile mümkündür.",
  },
  {
    soru: "GLP-1 ilaçları (Ozempic/Wegovy) lipödeme yarıyor mu?",
    cevap:
      "GLP-1 reseptör agonistleri lipödem için henüz onaylı bir tedavi değildir. Ancak 2024-2025 yıllarındaki ön çalışmalar, özellikle obezite eşlik eden lipödem hastalarında umut verici sonuçlar göstermektedir. Normal yağ dokusunu azaltırken lipödem yağına etkisi sınırlı olabilir. Klinik çalışmalar devam etmektedir.",
  },
  {
    soru: "Lipödem tedavisine hangi doktor bakar?",
    cevap:
      "Lipödem tedavisi multidisipliner bir yaklaşım gerektirir. İlk değerlendirme için dermatoloji, fizik tedavi veya damar cerrahisi uzmanlarına başvurulabilir. Cerrahi tedavi için lipödem konusunda deneyimli plastik cerrahlar tercih edilmelidir. Fizyoterapist, diyetisyen ve psikolog desteği de tedavinin önemli parçalarıdır.",
  },
  {
    soru: "Kompresyon çorabını nereden alabilirim?",
    cevap:
      "Lipödem için düz örgü (flat-knit) kompresyon çorapları medikal malzeme mağazalarından veya online medikal satış sitelerinden temin edilebilir. Medi, Juzo, Sigvaris gibi markalar Türkiye'de bulunmaktadır. Doğru basınç sınıfı ve ölçü için mutlaka bir fizyoterapist veya uzman doktor tarafından değerlendirme yapılmalıdır.",
  },
];

export default function LipodemTedavisiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-purple-600 transition-colors"
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
                  className="hover:text-purple-600 transition-colors"
                >
                  Lipödem Nedir
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-stone-800 font-medium">Lipödem Tedavisi</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Lipödem Tedavisi: Konservatif ve Cerrahi Seçenekler
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem tanısı aldınız ve &quot;Şimdi ne yapacağım?&quot; diye
            düşünüyorsunuz. İyi haber: lipödem yönetilebilir bir hastalıktır ve
            tedavi seçenekleri her geçen yıl artmaktadır. Bu rehber, 2024 Alman
            S2k Kılavuzu ve 2025 Delphi Konsensüsü ışığında konservatif
            tedavilerden cerrahi seçeneklere, fiyatlardan SGK durumuna kadar
            bilmeniz gereken her şeyi sunmaktadır.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Semptom Testini Başlat
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/klinikler"
              className="inline-flex items-center gap-2 bg-white text-purple-600 border border-purple-200 px-7 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
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
                <div className="text-2xl md:text-3xl font-extrabold text-purple-600">
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

      {/* KONSERVATİF TEDAVİ */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem konservatif tedavi yöntemleri nelerdir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Konservatif tedavi, lipödem yönetiminin temel taşıdır ve cerrahi
              öncesinde veya cerrahi uygun olmayan hastalarda birinci basamak
              tedavi olarak uygulanır. 2024 Alman S2k Kılavuzu, komplet
              dekongestif terapi (CDT) ve kompresyon tedavisini tüm lipödem
              hastalarına önerir.
            </strong>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Konservatif tedaviler lipödem yağını ortadan kaldırmaz ancak ağrıyı
            azaltır, şişliği kontrol eder ve hastalığın ilerlemesini yavaşlatır.
            Birçok hasta konservatif tedavilerle günlük yaşam kalitesinde belirgin
            iyileşme yaşar. Tedavi planı bireysel değerlendirmeye göre
            oluşturulmalıdır.
          </p>

          <div className="space-y-4">
            {konservatifTedaviler.map((tedavi) => (
              <div
                key={tedavi.baslik}
                className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-2">
                      {tedavi.baslik}
                    </h3>
                    <p className="text-stone-600 leading-relaxed">
                      {tedavi.aciklama}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/lipodem-egzersiz"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
            >
              Lipödem için egzersiz rehberine göz atın
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CERRAHİ TEDAVİ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem cerrahisi hangi teknikleri kapsar?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem cerrahisi, konservatif tedaviye yeterli yanıt alınamadığında
              veya ileri evre lipödem hastalarında uygulanan liposuction
              tekniklerini kapsar. 2025 Delphi Konsensüsü, lenf koruyucu
              tekniklerin (WAL, PAL) tercih edilmesini önerir ve deneyimli
              cerrahlar tarafından yapılmasını vurgular.
            </strong>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Lipödem cerrahisi normal estetik liposuction'dan farklıdır. Amaç yağ
            hücrelerini kalıcı olarak azaltmak ve lenf damarlarına zarar
            vermemektir. Genellikle 2-4 ayrı seansta, her seansta farklı
            bölgeler tedavi edilir.
          </p>

          <div className="space-y-6">
            {cerrahiTeknikler.map((teknik) => (
              <div
                key={teknik.teknik}
                className="bg-stone-50 rounded-xl p-6 border border-stone-200"
              >
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  {teknik.teknik}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {teknik.aciklama}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-sm text-stone-700">
                      {teknik.avantaj}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-sm text-stone-700">
                      {teknik.dezavantaj}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FİYATLAR */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem ameliyat fiyatları ne kadar?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Türkiye'de lipödem ameliyat fiyatları 2025 yılında 55.000 TL ile
              250.000 TL arasında değişmektedir. Fiyat, tedavi edilecek bölge
              sayısına, cerrahın deneyimine, kullanılan tekniğe ve klinik
              konumuna göre farklılık gösterir. SGK bu ameliyatları
              karşılamamaktadır.
            </strong>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Aşağıdaki fiyatlar 2025 yılı itibarıyla Türkiye&apos;deki ortalama
            fiyat aralıklarıdır. Fiyatlar cerrahın deneyimi, kliniğin lokasyonu
            ve kullanılan tekniğe göre değişiklik gösterebilir.
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Tedavi Bölgesi
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-purple-700 border-b border-stone-200">
                    Fiyat Aralığı (2025)
                  </th>
                </tr>
              </thead>
              <tbody>
                {fiyatlar.map((fiyat, i) => (
                  <tr
                    key={fiyat.bolge}
                    className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">
                      {fiyat.bolge}
                    </td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100 font-semibold">
                      {fiyat.aralik}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-stone-500">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              Fiyatlar yaklaşık değerlerdir ve klinikten kliniğe farklılık
              gösterebilir. Kesin fiyat için kliniğe danışın.
            </p>
          </div>
        </div>
      </section>

      {/* SGK DURUMU */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            SGK lipödem tedavisini karşılıyor mu?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              2025 itibarıyla SGK, lipödem ameliyatını (liposuction)
              karşılamamaktadır. SGK lipödemi estetik kategori olarak
              değerlendirdiği için cerrahi tedavi kapsamı dışında tutmaktadır.
              Ancak muayene ücretsiz olup, konservatif tedavilerin bir kısmı
              kısmen karşılanmaktadır.
            </strong>
          </p>

          <div className="mt-6 space-y-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">
                SGK Kapsamında Olanlar
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Uzman doktor muayenesi (devlet hastaneleri)</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Tanı için gerekli tetkikler (ultrason, kan tahlili)</span>
                </li>
                <li className="flex items-start gap-2 text-green-700">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Fizik tedavi seansları (hekim raporu ile, yıllık kota dahilinde)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">
                SGK Kapsamında Olmayanlar
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-red-700">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Liposuction ameliyatı (tüm teknikler)</span>
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Kişiye özel kompresyon giysileri</span>
                </li>
                <li className="flex items-start gap-2 text-red-700">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Özel kliniklerdeki MLD seansları</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* YENİ TEDAVİLER */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödemde yeni tedavi yaklaşımları neler?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              GLP-1 reseptör agonistleri (semaglutid/Ozempic, tirzepatid/Mounjaro),
              mezenşimal kök hücre tedavisi ve yeni anti-inflamatuar ilaçlar,
              lipödem tedavisinde araştırılan en güncel yaklaşımlardır. Henüz
              onaylı tedavi olmamakla birlikte, 2024-2025 yıllarındaki ön
              çalışmalar umut verici sonuçlar göstermektedir.
            </strong>
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-stone-800">
                  GLP-1 İlaçları
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Semaglutid ve tirzepatid gibi GLP-1 agonistleri, özellikle obezite
                eşlik eden lipödem hastalarında kilo kaybı ve inflamasyon azalması
                sağlayabilir. Lipödem yağına doğrudan etkisi araştırılmaktadır.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-6 h-6 text-purple-600" />
                <h3 className="font-semibold text-stone-800">
                  Kök Hücre Araştırmaları
                </h3>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">
                Mezenşimal kök hücreler, lipödem yağ dokusundaki kronik
                inflamasyonu azaltma ve lenf damarlarını iyileştirme potansiyeli
                taşımaktadır. Henüz erken klinik aşamadadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEDAVİ KARARI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Tedavi kararı nasıl verilir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem tedavi kararı; hastalığın evresi, semptom şiddeti, yaşam
              kalitesine etkisi, eşlik eden hastalıklar ve hastanın beklentileri
              göz önüne alınarak multidisipliner bir ekiple birlikte verilmelidir.
              Tek bir &quot;doğru&quot; tedavi yoktur; her hasta için bireysel bir
              tedavi planı oluşturulmalıdır.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm shrink-0">
                1
              </span>
              <div>
                <h3 className="font-semibold text-stone-800">
                  Doğru tanıyı alın
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mt-1">
                  Lipödem konusunda deneyimli bir uzmandan tanı alın. Yanlış tanı
                  yanlış tedaviye yol açar.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm shrink-0">
                2
              </span>
              <div>
                <h3 className="font-semibold text-stone-800">
                  Konservatif tedaviye başlayın
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mt-1">
                  CDT, kompresyon ve beslenme değişiklikleri ile başlayın. En az 6
                  ay tutarlı uygulayın.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm shrink-0">
                3
              </span>
              <div>
                <h3 className="font-semibold text-stone-800">
                  Yanıtı değerlendirin
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mt-1">
                  Semptomlar yeterince iyileşmiyorsa cerrahi seçenekleri
                  araştırın.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm shrink-0">
                4
              </span>
              <div>
                <h3 className="font-semibold text-stone-800">
                  Cerrah seçimi
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mt-1">
                  Lipödem cerrahisinde deneyimli, WAL veya PAL tekniklerini
                  uygulayan bir cerrah bulun. En az 2-3 cerraha danışın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-4">
            {sorular.map((s) => (
              <details
                key={s.soru}
                className="group bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-stone-800 font-semibold hover:bg-stone-50 transition-colors list-none">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            İlgili Rehberler
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/lipodem-beslenme"
              className="group bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-purple-700 mb-2">
                Beslenme Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Anti-inflamatuar beslenme, Türk mutfağı uyarlaması ve 7 günlük
                örnek menü.
              </p>
            </Link>
            <Link
              href="/lipodem-egzersiz"
              className="group bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-purple-700 mb-2">
                Egzersiz Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Su egzersizleri, güvenli programlar ve 8 haftalık başlangıç
                planı.
              </p>
            </Link>
            <Link
              href="/lipodem-turkiye-rehberi"
              className="group bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-purple-700 mb-2">
                Türkiye Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Doktor bulma, klinikler, il bazlı fiyatlar ve SGK kapsamı
                detayları.
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
              sayfadaki bilgiler 2024 Alman S2k Kılavuzu ve 2025 Delphi
              Konsensüsüne dayalı genel eğitim amaçlıdır ve profesyonel tıbbi
              tavsiye yerine geçmez. Tedavi kararları mutlaka lipödem konusunda
              deneyimli bir sağlık uzmanıyla birlikte verilmelidir. Fiyat
              bilgileri yaklaşık değerlerdir ve değişkenlik gösterebilir.
            </p>
          </div>
        </div>
      </section>

      {/* SON CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Tedavi yolculuğunuza bugün başlayın
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Semptom testimiz ile lipödem riskinizi değerlendirin ve size en uygun
            tedavi seçeneklerini keşfedin. Sonuçlarınız tamamen gizlidir.
          </p>
          <Link
            href="/araclar/semptom-testi"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20"
          >
            Ücretsiz Semptom Testini Başlat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
