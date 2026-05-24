import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Utensils,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Lipödem ve Beslenme: Anti-İnflamatuar Beslenme Rehberi | Lipödem Türkiye",
  description:
    "Lipödem için anti-inflamatuar beslenme rehberi: yenmesi gereken besinler, kaçınılması gerekenler, ketojenik diyet, Türk mutfağı uyarlaması ve 7 günlük örnek menü. Bilimsel kaynaklara dayalı kapsamlı beslenme planı.",
};

const yenmesiGerekenler = [
  {
    kategori: "Omega-3 Kaynakları",
    besinler: "Somon, sardalya, uskumru, chia tohumu, keten tohumu, ceviz",
    neden:
      "Omega-3 yağ asitleri güçlü anti-inflamatuar etki gösterir. Lipödemdeki kronik inflamasyonu azaltmaya yardımcı olur.",
  },
  {
    kategori: "Antioksidan Zengin Sebzeler",
    besinler:
      "Brokoli, ıspanak, lahana, roka, kırmızı biber, domates, havuç",
    neden:
      "Antioksidanlar serbest radikalleri nötralize ederek doku hasarını azaltır ve lenf sistemi sağlığını destekler.",
  },
  {
    kategori: "Düşük Glisemik Meyveler",
    besinler: "Yaban mersini, çilek, ahududu, avokado, yeşil elma",
    neden:
      "Düşük glisemik indeksli meyveler kan şekerini dengeleyerek insülin direncini azaltır ve inflamasyonu kontrol eder.",
  },
  {
    kategori: "Sağlıklı Yağlar",
    besinler:
      "Zeytinyağı (soğuk sıkım), avokado yağı, hindistan cevizi yağı",
    neden:
      "Tekli doymamış yağ asitleri inflamasyonu azaltır. Zeytinyağındaki oleokantal, ibuprofen benzeri anti-inflamatuar etki gösterir.",
  },
  {
    kategori: "Protein Kaynakları",
    besinler:
      "Tavuk, hindi, yumurta, baklagiller, mercimek, nohut",
    neden:
      "Yeterli protein alımı kas kütlesini korur, metabolizmayı destekler ve tokluk hissi sağlar.",
  },
  {
    kategori: "Anti-inflamatuar Baharatlar",
    besinler: "Zerdeçal, zencefil, tarçın, karabiber, kimyon",
    neden:
      "Zerdeçaldaki kurkumin ve zencefildeki gingerol güçlü anti-inflamatuar ve antioksidan etkiye sahiptir.",
  },
];

const kacinilmasiGerekenler = [
  {
    besin: "Rafine şeker ve şekerli içecekler",
    neden: "İnflamasyonu artırır, insülin direncini tetikler",
  },
  {
    besin: "İşlenmiş gıdalar ve hazır yemekler",
    neden:
      "Trans yağlar, katkı maddeleri ve aşırı sodyum içerir; inflamasyonu artırır",
  },
  {
    besin: "Beyaz un ve rafine karbonhidratlar",
    neden: "Kan şekerini hızla yükseltir, insülin direnci oluşturur",
  },
  {
    besin: "Alkol",
    neden:
      "Lenf akışını bozar, inflamasyonu artırır ve ödem yapıcı etkisi vardır",
  },
  {
    besin: "Aşırı tuz",
    neden: "Su tutulumunu artırarak ödemi şiddetlendirir",
  },
  {
    besin: "Kızartmalar ve trans yağlar",
    neden: "Kronik inflamasyonun en önemli besinsel tetikleyicilerinden biridir",
  },
];

const haftalikMenu = [
  {
    gun: "Pazartesi",
    kahvalti: "Yumurtalı avokado tost (tam buğday), yeşil çay",
    ogle: "Mercimek çorbası, zeytinyağlı enginar, bulgur pilavı",
    aksam: "Fırında somon, brokoli sote, kinoa",
    atistirmalik: "Bir avuç ceviz, yeşil elma",
  },
  {
    gun: "Salı",
    kahvalti: "Chia puding (badem sütü), yaban mersini",
    ogle: "Nohutlu tavuk salatası, zeytinyağlı",
    aksam: "Sebzeli hindi köfte, ıspanaklı bulgur",
    atistirmalik: "Havuç-hummus, yeşil çay",
  },
  {
    gun: "Çarşamba",
    kahvalti: "Yulaf ezmesi, tarçın, ceviz, çilek",
    ogle: "Zeytinyağlı fasulye, salata, tam buğday ekmek",
    aksam: "Izgara tavuk, zerdeçallı karnabahar, taze fasulye",
    atistirmalik: "Badem, portakal",
  },
  {
    gun: "Perşembe",
    kahvalti: "Peynirli omlet (zeytinyağlı), domates-salatalık",
    ogle: "Ezogelin çorbası, lor peynirli salata",
    aksam: "Fırında uskumru, zencefilli havuç püresi, yeşil salata",
    atistirmalik: "Keten tohumlu yoğurt",
  },
  {
    gun: "Cuma",
    kahvalti: "Tam buğday krep, muz, badem ezmesi",
    ogle: "Mercimek köftesi, mevsim salatası",
    aksam: "Tavuklu sebze güveç, bulgur pilavı",
    atistirmalik: "Bir avuç fındık, yeşil çay",
  },
  {
    gun: "Cumartesi",
    kahvalti: "Shakshuka (menemen), zeytinyağlı ekmek",
    ogle: "Nohut yemeği, yoğurt, salata",
    aksam: "Somon burger (tam buğday), ızgara sebzeler",
    atistirmalik: "Smoothie (ıspanak, muz, chia)",
  },
  {
    gun: "Pazar",
    kahvalti: "Granola, yoğurt, karışık meyve",
    ogle: "Kuru fasulye, pirinç pilavı, turşu",
    aksam: "Zeytinyağlı enginar, fırında balık, salata",
    atistirmalik: "Çikolata fondü (bitter %70+), çilek",
  },
];

const takviyeler = [
  {
    takviye: "Omega-3 (Balık Yağı)",
    dozaj: "1000-3000 mg/gün EPA+DHA",
    aciklama:
      "En güçlü kanıta sahip anti-inflamatuar takviye. Lipödem inflamasyonunu azaltır.",
  },
  {
    takviye: "D Vitamini",
    dozaj: "1000-4000 IU/gün (kan düzeyine göre)",
    aciklama:
      "D vitamini eksikliği inflamasyonu artırır. Türkiye'de kadınların %70+'ında eksik.",
  },
  {
    takviye: "Selenyum",
    dozaj: "55-200 mcg/gün",
    aciklama:
      "Antioksidan kapasiteyi artırır ve tiroid fonksiyonunu destekler.",
  },
  {
    takviye: "Kurkumin (Zerdeçal Özütü)",
    dozaj: "500-1000 mg/gün (biyoyararlanımı artırılmış)",
    aciklama:
      "Güçlü anti-inflamatuar etki. Piperins (karabiber özütü) ile birlikte alınması emilimi artırır.",
  },
];

const istatistikler = [
  {
    deger: "%85",
    aciklama: "Lipödem hastalarının diyet yapmasına rağmen bacak yağı erimeyen oranı",
  },
  {
    deger: "6x",
    aciklama: "Anti-inflamatuar beslenme ile inflamasyon belirteçlerindeki düşüş",
  },
  {
    deger: "%70+",
    aciklama: "Türk kadınlarında D vitamini eksikliği oranı",
  },
  {
    deger: "2-3 ay",
    aciklama: "Beslenme değişikliğinin semptomları etkileme süresi",
  },
];

const sorular = [
  {
    soru: "Lipödem diyetle tedavi edilebilir mi?",
    cevap:
      "Hayır, diyet tek başına lipödemi tedavi edemez. Lipödem yağ dokusu kalori kısıtlamasına dirençlidir. Ancak anti-inflamatuar beslenme, lipödemdeki kronik inflamasyonu azaltarak ağrıyı hafifletir, ödem kontrolüne yardımcı olur ve hastalığın ilerlemesini yavaşlatabilir. Beslenme, tedavinin önemli bir parçasıdır ama tek başına çözüm değildir.",
  },
  {
    soru: "Ketojenik diyet lipödem için uygun mu?",
    cevap:
      "Ketojenik diyet lipödem hastalarında tartışmalı bir konudur. Bazı küçük çaplı çalışmalar, keto diyetin inflamasyonu azaltabileceğini ve ağrıda iyileşme sağlayabileceğini göstermektedir. Ancak uzun vadeli güvenliği ve etkinliği yeterince çalışılmamıştır. Bir diyetisyen eşliğinde, bireysel toleransa göre değerlendirilmelidir. Kısıtlayıcı diyetler yeme bozukluğu riskini artırabilir.",
  },
  {
    soru: "Gluten lipödemi etkiler mi?",
    cevap:
      "Glutenin lipödem üzerine doğrudan etkisini gösteren güçlü bilimsel kanıt yoktur. Ancak çölyak hastalığı veya gluten duyarlılığı olan bireylerde gluten inflamasyonu artırabilir. Gluteni çıkarmanın size fayda sağlayıp sağlamadığını anlamanın en iyi yolu, 4-6 haftalık bir eliminasyon diyeti denemektir.",
  },
  {
    soru: "Hangi takviyeleri almalıyım?",
    cevap:
      "En güçlü kanıta sahip takviyeler omega-3 (balık yağı), D vitamini ve kurkumin (zerdeçal özütü)'dir. Ancak takviye almadan önce mutlaka kan tahlili yaptırarak eksikliklerinizi belirleyin ve bir sağlık uzmanıyla görüşün. Takviyeler ilaçlarla etkileşime girebilir.",
  },
  {
    soru: "Lipödem hastaları aralıklı oruç yapabilir mi?",
    cevap:
      "Aralıklı oruç (intermittent fasting) bazı lipödem hastalarında inflamasyonu azaltmaya yardımcı olabilir. Ancak yeme bozukluğu öyküsü olan hastalarda önerilmez. 16:8 protokolü (16 saat oruç, 8 saat yeme penceresi) en yaygın uygulanan yöntemdir. Bir diyetisyen eşliğinde başlanmalıdır.",
  },
  {
    soru: "Türk mutfağı lipödem için uygun mu?",
    cevap:
      "Geleneksel Türk mutfağının zeytinyağlı yemekler, baklagiller, sebze ağırlıklı tarafları Akdeniz diyetine yakındır ve anti-inflamatuar özellik taşır. Ancak beyaz ekmek, pilav, hamur işleri ve şekerli tatlılar azaltılmalıdır. Zeytinyağlı sebze yemekleri, mercimek çorbası, balık ve salata gibi seçenekler tercih edilmelidir.",
  },
];

export default function LipodemBeslenmePage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-1.5 text-sm text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-teal-600 transition-colors"
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
                  className="hover:text-teal-600 transition-colors"
                >
                  Lipödem Nedir
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-stone-800 font-medium">
                Beslenme Rehberi
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Lipödem ve Beslenme: Anti-İnflamatuar Beslenme Rehberi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            &quot;Daha az ye, daha çok hareket et&quot; tavsiyesini defalarca
            denediniz ama bacaklarınız hiç incelmedi mi? Lipödemde sorun kaloride
            değil, inflamasyondadır. Anti-inflamatuar beslenme lipödem yağını
            eritmez ancak kronik iltihabı azaltarak ağrıyı hafifletir, ödemi
            kontrol eder ve hastalığın ilerlemesini yavaşlatır. Bu rehber,
            bilimsel kanıtlara dayalı olarak lipödem hastalarına özel beslenme
            stratejilerini ve Türk mutfağına uyarlanmış pratik önerileri
            sunmaktadır.
          </p>

          <div className="mt-8">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Semptom Testini Başlat
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
                <div className="text-2xl md:text-3xl font-extrabold text-teal-600">
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

      {/* ANTİ-İNFLAMATUAR BESLENME */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Anti-inflamatuar beslenme nedir ve lipödeme nasıl yardımcı olur?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Anti-inflamatuar beslenme, vücuttaki kronik düşük düzeyli
              inflamasyonu azaltmayı hedefleyen bir beslenme yaklaşımıdır.
              Lipödem yağ dokusunda sürekli aktif olan inflamasyon döngüsünü
              kırarak ağrı, hassasiyet ve ödem semptomlarını hafifletir. Akdeniz
              diyeti bu yaklaşımın en iyi bilinen örneğidir.
            </strong>
          </p>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-6">
            Anti-inflamatuar beslenme bir &quot;diyet&quot; değil, bir yaşam
            tarzıdır. Kalori saymak yerine besin kalitesine odaklanır. Temel
            ilkeleri: işlenmemiş, doğal gıdalar tercih etmek, omega-3 alımını
            artırmak, şeker ve işlenmiş gıdaları azaltmak, bol sebze ve meyve
            tüketmektir.
          </p>
        </div>
      </section>

      {/* YENMESİ GEREKEN BESİNLER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem hastalarının yemesi gereken besinler nelerdir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Omega-3 açısından zengin balıklar, antioksidan yüklü koyu yeşil
              yapraklı sebzeler, düşük glisemik meyveler, zeytinyağı gibi
              sağlıklı yağlar ve zerdeçal-zencefil gibi anti-inflamatuar
              baharatlar lipödem hastalarının beslenme planının temelini
              oluşturmalıdır.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            {yenmesiGerekenler.map((item) => (
              <div
                key={item.kategori}
                className="bg-stone-50 rounded-xl p-6 border border-stone-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Utensils className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-stone-800 mb-1">
                      {item.kategori}
                    </h3>
                    <p className="text-teal-700 text-sm font-medium mb-2">
                      {item.besinler}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.neden}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KAÇINILMASI GEREKENLER */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem hastalarının kaçınması gereken besinler nelerdir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Rafine şeker, işlenmiş gıdalar, beyaz un ürünleri, alkol, aşırı
              tuz ve kızartmalar lipödemdeki kronik inflamasyonu artıran en
              önemli besinsel tetikleyicilerdir. Bu gıdaları tamamen bırakmak
              yerine kademeli olarak azaltmak daha sürdürülebilir bir stratejidir.
            </strong>
          </p>

          <div className="mt-8 space-y-3">
            {kacinilmasiGerekenler.map((item) => (
              <div
                key={item.besin}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-stone-200"
              >
                <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-stone-800">
                    {item.besin}
                  </h3>
                  <p className="text-stone-600 text-sm mt-1">{item.neden}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KETOJENİK DİYET */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Ketojenik diyet lipödem için uygun mu?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Ketojenik diyet lipödem hastalarında tartışmalıdır. Bazı küçük
              çaplı çalışmalar keto diyetin inflamasyonu ve ağrıyı azaltabileceğini
              gösterse de uzun vadeli güvenliği ve etkinliği kanıtlanmamıştır.
              Kısıtlayıcı diyetler yeme bozukluğu riskini artırabileceğinden
              mutlaka uzman diyetisyen eşliğinde uygulanmalıdır.
            </strong>
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">
                Potansiyel Faydalar
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-green-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>İnflamasyon belirteçlerinde azalma</span>
                </li>
                <li className="flex items-start gap-2 text-green-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Normal yağ dokusunda kilo kaybı</span>
                </li>
                <li className="flex items-start gap-2 text-green-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Ağrı ve hassasiyette azalma bildirimleri</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">
                Dikkat Edilmesi Gerekenler
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Yeme bozukluğu riskini artırabilir</span>
                </li>
                <li className="flex items-start gap-2 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Uzun vadeli sürdürülebilirlik sorunu</span>
                </li>
                <li className="flex items-start gap-2 text-red-700 text-sm">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Sosyal izolasyona neden olabilir</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TÜRK MUTFAĞI UYARLAMASI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Türk mutfağı lipödem için nasıl uyarlanır?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Geleneksel Türk mutfağının zeytinyağlı yemekler, baklagiller ve
              sebze ağırlıklı yapısı Akdeniz diyetine yakındır ve anti-inflamatuar
              özellik taşır. Beyaz ekmek, pilav, hamur işleri ve şekerli tatlılar
              azaltılarak, zeytinyağlı sebze yemekleri, çorbalar ve balık
              tercih edilerek sağlıklı bir dönüşüm sağlanabilir.
            </strong>
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <p className="text-stone-700">
                <strong>Tercih edin:</strong> Zeytinyağlı sebze yemekleri
                (enginar, barbunya, bamya), mercimek/ezogelin çorbası, balık,
                yoğurt, salata
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <p className="text-stone-700">
                <strong>Azaltın:</strong> Beyaz ekmek yerine tam buğday/çavdar,
                pilav yerine bulgur, börek/poğaça miktarını
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <p className="text-stone-700">
                <strong>Tatlı alternatifi:</strong> Baklava/künefe yerine meyve,
                bitter çikolata (%70+), tahin-pekmez (küçük porsiyon)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
              <p className="text-stone-700">
                <strong>İçecek:</strong> Şekerli çay yerine şekersiz yeşil çay,
                ada çayı, papatya çayı; gazlı içecekler yerine limonlu su
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 GÜNLÜK MENÜ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            7 günlük anti-inflamatuar örnek menü nasıl olmalı?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Aşağıdaki 7 günlük menü, Türk mutfağına uyarlanmış anti-inflamatuar
              beslenme ilkelerine göre hazırlanmıştır. Her gün omega-3, antioksidan
              ve lif açısından zengin, işlenmiş gıda ve rafine şekerden arındırılmış
              öğünler içermektedir. Bireysel ihtiyaçlarınıza göre bir diyetisyen
              ile özelleştirilebilir.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            {haftalikMenu.map((gun) => (
              <div
                key={gun.gun}
                className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden"
              >
                <div className="bg-teal-600 px-5 py-2.5">
                  <h3 className="text-white font-semibold">{gun.gun}</h3>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Kahvaltı
                    </span>
                    <p className="text-stone-700 mt-1">{gun.kahvalti}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Öğle
                    </span>
                    <p className="text-stone-700 mt-1">{gun.ogle}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Akşam
                    </span>
                    <p className="text-stone-700 mt-1">{gun.aksam}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      Atıştırmalık
                    </span>
                    <p className="text-stone-700 mt-1">{gun.atistirmalik}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-stone-500">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              Bu menü genel bir örnektir. Alerjiler, intoleranslar ve bireysel
              ihtiyaçlara göre bir diyetisyen ile özelleştirilmelidir.
            </p>
          </div>
        </div>
      </section>

      {/* TAKVİYELER */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem hastalarına hangi takviyeler önerilir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Omega-3 balık yağı, D vitamini, selenyum ve kurkumin (zerdeçal
              özütü), lipödem hastalarında en sık önerilen ve en güçlü kanıta
              sahip besin takviyeleridir. Takviye kullanımına başlamadan önce kan
              tahlili yaptırmak ve bir sağlık uzmanına danışmak önemlidir.
            </strong>
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {takviyeler.map((t) => (
              <div
                key={t.takviye}
                className="bg-white rounded-xl p-5 border border-stone-200"
              >
                <h3 className="font-semibold text-stone-800 mb-1">
                  {t.takviye}
                </h3>
                <p className="text-teal-600 text-sm font-medium mb-2">
                  {t.dozaj}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {t.aciklama}
                </p>
              </div>
            ))}
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
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-teal-700 mb-2">
                Tedavi Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Konservatif ve cerrahi tedavi seçenekleri, fiyatlar ve SGK
                durumu.
              </p>
            </Link>
            <Link
              href="/lipodem-egzersiz"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-teal-700 mb-2">
                Egzersiz Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Su egzersizleri, güvenli programlar ve 8 haftalık başlangıç
                planı.
              </p>
            </Link>
            <Link
              href="/lipodem-ruh-sagligi"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-teal-700 mb-2">
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
              sayfadaki beslenme önerileri genel bilgi amaçlıdır ve kişisel
              tıbbi/diyetetik tavsiye yerine geçmez. Beslenme değişikliklerine
              başlamadan önce lipödem konusunda deneyimli bir diyetisyen ve/veya
              doktorunuzla görüşün. Alerjiler, ilaç etkileşimleri ve bireysel
              sağlık durumunuz değerlendirilmelidir.
            </p>
          </div>
        </div>
      </section>

      {/* SON CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Lipödem riskinizi 2 dakikada değerlendirin
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bilimsel ölçütlere dayalı semptom testimiz, lipödem riskinizi
            değerlendirmenize ve doğru uzmana yönlenmenize yardımcı olur.
          </p>
          <Link
            href="/araclar/semptom-testi"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
          >
            Ücretsiz Semptom Testini Başlat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
