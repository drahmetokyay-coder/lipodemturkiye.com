import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Dumbbell,
  Activity,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Lipödem İçin Egzersiz: Lenfatik Hareket ve Güvenli Programlar | Lipödem Türkiye",
  description:
    "Lipödem için en etkili egzersizler: su egzersizleri, yürüyüş, yoga, pilates ve kompresyon ile egzersiz kuralları. 8 haftalık başlangıç programı ve güvenli hareket rehberi.",
};

const egzersizTurleri = [
  {
    tur: "Su Egzersizleri (Akuatik Terapi)",
    etkiDuzeyi: "En Etkili",
    etkiRenk: "bg-green-100 text-green-700",
    aciklama:
      "Suyun doğal hidrostatik basıncı, kompresyon giysi gibi etki yaparak lenf akışını destekler. Kaldırma kuvveti eklem yükünü %90 azaltır. Ağrısız hareket imkanı sağlar.",
    oneriler: [
      "Yüzme (serbest ve sırt üstü en uygun)",
      "Aqua aerobik",
      "Su içi yürüyüş",
      "Aqua jogging (derin su koşusu)",
      "Su içi bisiklet",
    ],
    sure: "Haftada 2-3 seans, 30-45 dakika",
    dikkat: "Su sıcaklığı 28-30°C ideal. Çok sıcak su ödemi artırabilir.",
  },
  {
    tur: "Yürüyüş",
    etkiDuzeyi: "Çok Etkili",
    etkiRenk: "bg-purple-100 text-purple-700",
    aciklama:
      "En erişilebilir ve en güvenli lipödem egzersizidir. Baldır kaslarının kasılması lenf pompası görevi görerek lenf akışını hızlandırır. Kompresyon ile birlikte yapılması etkinliği artırır.",
    oneriler: [
      "Nordic walking (değnekli yürüyüş) - kol lenfini de harekete geçirir",
      "Düz zeminde tempolu yürüyüş",
      "Doğa yürüyüşü (hafif eğimli parkurlar)",
      "Yürüyüş bandında eğimli yürüyüş",
    ],
    sure: "Haftada 4-5 gün, 20-40 dakika",
    dikkat:
      "Kompresyon çorabı ile yürüyün. Aşırı yorulmadan, konuşabilecek tempoda yürüyün.",
  },
  {
    tur: "Yoga ve Pilates",
    etkiDuzeyi: "Etkili",
    etkiRenk: "bg-purple-100 text-purple-700",
    aciklama:
      "Esnekliği artırır, stres hormonlarını azaltır ve derin nefes teknikleriyle lenf akışını destekler. Pilates özellikle core (gövde) kaslarını güçlendirerek postürü iyileştirir.",
    oneriler: [
      "Hatha yoga (yavaş tempolu, uyarlanmış)",
      "Yin yoga (uzun tutulan pozlar, fasya rahatlatma)",
      "Mat pilates (reformer da uygun)",
      "Restoratif yoga (destek malzemeleriyle)",
    ],
    sure: "Haftada 2-3 seans, 30-60 dakika",
    dikkat:
      "Baş aşağı pozisyonlarda dikkatli olun. Ağrı hissederseniz pozu değiştirin.",
  },
  {
    tur: "Bisiklet (Sabit veya Açık Hava)",
    etkiDuzeyi: "Etkili",
    etkiRenk: "bg-blue-100 text-blue-700",
    aciklama:
      "Düşük etkili kardiyovasküler egzersiz olup eklemlere minimum yük bindirir. Bacak kaslarını çalıştırarak lenf pompası etkisini artırır.",
    oneriler: [
      "Sabit bisiklet (yatay/recumbent tercih edilir)",
      "Açık hava bisikleti (düz parkur)",
      "Eliptik bisiklet",
    ],
    sure: "Haftada 3-4 gün, 20-30 dakika",
    dikkat:
      "Yüksek direnç kullanmayın. Oturarak bisiklet (recumbent) bacak ödemini azaltır.",
  },
];

const haftalikProgram = [
  {
    hafta: "Hafta 1-2",
    baslik: "Alışma Dönemi",
    program: [
      "3 gün: 15 dk yürüyüş (kompresyon ile)",
      "2 gün: 15 dk hafif germe/yoga",
      "İsteğe bağlı: 1 gün havuz (20 dk)",
    ],
    hedef: "Vücudu harekete alıştırmak, ağrı eşiğini anlamak",
  },
  {
    hafta: "Hafta 3-4",
    baslik: "Yapılandırma",
    program: [
      "3 gün: 20 dk yürüyüş (tempo artırma)",
      "2 gün: 20 dk yoga/pilates",
      "1 gün: 25 dk havuz egzersizi",
    ],
    hedef: "Süreyi artırmak, düzenli rutin oluşturmak",
  },
  {
    hafta: "Hafta 5-6",
    baslik: "Güçlendirme",
    program: [
      "3 gün: 25-30 dk yürüyüş veya bisiklet",
      "2 gün: 30 dk yoga/pilates",
      "1-2 gün: 30 dk havuz egzersizi",
    ],
    hedef: "Kas gücünü artırmak, lenf akışını optimize etmek",
  },
  {
    hafta: "Hafta 7-8",
    baslik: "Sürdürme",
    program: [
      "4 gün: 30-40 dk yürüyüş/bisiklet/Nordic walking",
      "2 gün: 30-45 dk yoga/pilates",
      "2 gün: 30-45 dk havuz egzersizi",
    ],
    hedef: "Sürdürülebilir rutin, yaşam tarzı haline getirme",
  },
];

const kompresyonKurallari = [
  "Egzersiz sırasında mutlaka kompresyon çorabı/taytı giyin",
  "Düz örgü (flat-knit) kompresyon tercih edin, yuvarlak örgü etkisizdir",
  "Su egzersizleri sırasında kompresyon giyilemez -- su zaten doğal kompresyon sağlar",
  "Egzersiz sonrası kompresyonu en az 1-2 saat daha çıkarmayın",
  "Kompresyon giysiyi egzersiz öncesi, bacaklar henüz şişmemişken giyin",
  "Sıcak havalarda kompresyon içinde egzersiz süresini kısaltın",
];

const istatistikler = [
  {
    deger: "%90",
    aciklama: "Suyun eklem yükünü azaltma oranı",
  },
  {
    deger: "30 dk",
    aciklama: "Günlük ideal minimum hareket süresi",
  },
  {
    deger: "%40-60",
    aciklama: "Düzenli egzersizle ödem azalma oranı",
  },
  {
    deger: "8 hafta",
    aciklama: "Sonuçların hissedilmeye başladığı süre",
  },
];

const sorular = [
  {
    soru: "Egzersiz lipödem yağını eritir mi?",
    cevap:
      "Hayır, egzersiz lipödem yağ dokusunu doğrudan eritmeye yetmez. Lipödem yağı diyete ve egzersize dirençlidir. Ancak egzersiz inflamasyonu azaltır, lenf akışını hızlandırır, ödemi kontrol eder, kas gücünü artırır ve genel sağlığı iyileştirir. Normal (lipödem olmayan) yağ dokusunun erimesine yardımcı olur.",
  },
  {
    soru: "Ağır kaldırma yapabilir miyim?",
    cevap:
      "Hafif-orta ağırlıklarla direnç egzersizi lipödem hastaları için güvenli ve faydalıdır. Kas kütlesini artırarak metabolizmayı destekler. Ancak çok ağır yüklerden ve nefes tutmaktan kaçının. Valsalva manevrası (nefes tutarak ıkınma) lenf ve venöz basıncı artırarak ödemi kötüleştirebilir. Kompresyon ile yapın.",
  },
  {
    soru: "Koşu lipödem için zararlı mı?",
    cevap:
      "Yüksek etkili aktiviteler (koşu, zıplama, HIIT) lipödem hastalarında genellikle önerilmez. Tekrarlayan darbe etkisi doku hasarını artırabilir, inflamasyonu tetikleyebilir ve ağrıyı şiddetlendirebilir. Ancak erken evre lipödem hastaları ve ağrısı düşük olanlar, kompresyon ile ve kısa süreli olarak koşabilir. Vücudunuzu dinleyin.",
  },
  {
    soru: "Egzersiz sonrası bacaklarım çok şişiyor, normal mi?",
    cevap:
      "Egzersiz sonrası hafif ve geçici şişlik normal olabilir ve genellikle 1-2 saat içinde azalır. Ancak şişlik şiddetli, ağrılı veya ertesi güne kadar devam ediyorsa egzersiz yoğunluğunuzu azaltmanız gerekir. Egzersiz sonrası bacakları yükseğe kaldırmak ve kompresyon giymek şişliği azaltır.",
  },
  {
    soru: "Hangi egzersizlerden kaçınmalıyım?",
    cevap:
      "Yüksek etkili aktiviteler (koşu, zıplama, box jump), çok ağır kaldırma, sıcak ortamda yoğun egzersiz (hot yoga, sauna) ve uzun süreli ayakta durma gerektiren aktivitelerden kaçının. Ağrı hissettiren her hareketi bırakın. Vücudunuz en iyi rehberinizdir.",
  },
  {
    soru: "Egzersiz hangi saatte yapılmalı?",
    cevap:
      "Sabah saatleri ideal olabilir çünkü bacaklar henüz şişmemiştir. Ancak en iyi saat, sizin düzenli yapabildiğiniz saattir. Akşam egzersizi de faydalıdır ancak yatmadan en az 2 saat önce bitirin. Öğleden sonra bacak şişliği artmışsa, egzersiz öncesi 10 dakika bacakları yukarı kaldırın.",
  },
];

export default function LipodemEgzersizPage() {
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
              <li className="text-stone-800 font-medium">Egzersiz Rehberi</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Lipödem İçin Egzersiz: Lenfatik Hareket ve Güvenli Programlar
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Egzersiz lipödem yağını eritmez &mdash; bunu biliyoruz. Ama doğru
            egzersiz, lenf akışını hızlandırır, inflamasyonu azaltır, ödemi
            kontrol eder ve ruh halinizi iyileştirir. Önemli olan &quot;daha
            fazla&quot; egzersiz değil, &quot;doğru&quot; egzersizdir. Bu rehber,
            lipödem hastaları için güvenli, etkili ve sürdürülebilir bir hareket
            planı sunmaktadır. Havuzdan yoga matına, yürüyüşten bisiklete kadar
            her adımı kompresyon kurallarıyla birlikte anlatıyoruz.
          </p>

          <div className="mt-8">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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

      {/* NEDEN EGZERSİZ */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem hastalarında egzersiz neden önemlidir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Egzersiz lipödemdeki yağ dokusunu eritmese de lenf sistemini
              harekete geçirerek ödemi azaltır, kronik inflamasyonu kontrol eder,
              kas gücünü koruyarak hareketliliği destekler ve endorfin salınımı
              ile ağrı algısını düşürür. 2025 Delphi Konsensüsü, lipödem
              tedavisinin temel bileşeni olarak düzenli fiziksel aktiviteyi
              önerir.
            </strong>
          </p>

          <div className="mt-8 bg-white rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-stone-800 mb-4">
              Egzersizin lipödemdeki 6 temel faydası:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Lenf akışını hızlandırır:</strong> Kas kasılmaları lenf
                  pompası görevi görerek lenf sıvısının dolaşımını sağlar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Ödemi azaltır:</strong> Düzenli hareket, bacaklarda
                  biriken fazla sıvının drene edilmesine yardımcı olur.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>İnflamasyonu azaltır:</strong> Orta yoğunluklu egzersiz
                  anti-inflamatuar sitokinlerin salınımını artırır.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Ağrı algısını düşürür:</strong> Endorfin ve serotonin
                  salınımı doğal ağrı kesici görevi görür.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Kas kütlesini korur:</strong> Güçlü kaslar
                  metabolizmayı destekler ve hareketliliği sağlar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Ruh sağlığını iyileştirir:</strong> Depresyon ve
                  anksiyete belirtilerini azaltır, özgüveni artırır.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EGZERSİZ TÜRLERİ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem için en etkili egzersiz türleri hangileridir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Su egzersizleri (akuatik terapi) lipödem için en etkili egzersiz
              türüdür; suyun doğal hidrostatik basıncı kompresyon etkisi yapar ve
              kaldırma kuvveti eklem yükünü minimuma indirir. Yürüyüş,
              yoga/pilates ve bisiklet de güvenli ve etkili seçeneklerdir.
            </strong>
          </p>

          <div className="mt-8 space-y-6">
            {egzersizTurleri.map((egzersiz) => (
              <div
                key={egzersiz.tur}
                className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Dumbbell className="w-6 h-6 text-purple-600" />
                    <h3 className="text-lg font-semibold text-stone-800">
                      {egzersiz.tur}
                    </h3>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${egzersiz.etkiRenk}`}
                    >
                      {egzersiz.etkiDuzeyi}
                    </span>
                  </div>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {egzersiz.aciklama}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-stone-700 mb-2">
                        Önerilen Aktiviteler:
                      </h4>
                      <ul className="space-y-1.5">
                        {egzersiz.oneriler.map((oneri) => (
                          <li
                            key={oneri}
                            className="flex items-start gap-2 text-sm text-stone-600"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 mt-0.5 shrink-0" />
                            <span>{oneri}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-stone-700 mb-1">
                          Sıklık ve Süre:
                        </h4>
                        <p className="text-sm text-purple-600 font-medium">
                          {egzersiz.sure}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-stone-700 mb-1">
                          Dikkat:
                        </h4>
                        <p className="text-sm text-amber-700">
                          {egzersiz.dikkat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KOMPRESYON KURALLARI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Kompresyon ile egzersiz kuralları nelerdir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem hastalarının egzersiz sırasında kompresyon giymesi tedavinin
              etkinliğini önemli ölçüde artırır. Kompresyon, kas kasılmasıyla
              birlikte lenf pompası etkisini güçlendirir ve egzersiz sonrası
              şişliği önler. Su egzersizleri bu kuralın tek istisnasıdır
              çünkü su zaten doğal kompresyon sağlar.
            </strong>
          </p>

          <div className="mt-8 space-y-3">
            {kompresyonKurallari.map((kural, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-stone-200"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 leading-relaxed pt-1">{kural}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 HAFTALIK PROGRAM */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            8 haftalık başlangıç egzersiz programı nasıl olmalı?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Aşağıdaki 8 haftalık program, hareketsiz veya az hareketli lipödem
              hastalarının güvenli bir şekilde egzersize başlamalarını sağlamak
              için tasarlanmıştır. Program, düşük yoğunlukta başlayarak kademeli
              olarak süre ve sıklığı artırır. Amaç ağrısız, sürdürülebilir bir
              hareket alışkanlığı oluşturmaktır.
            </strong>
          </p>

          <div className="mt-8 space-y-6">
            {haftalikProgram.map((hafta) => (
              <div
                key={hafta.hafta}
                className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden"
              >
                <div className="bg-purple-600 px-5 py-3 flex items-center justify-between">
                  <h3 className="text-white font-semibold">{hafta.hafta}</h3>
                  <span className="text-purple-100 text-sm">
                    {hafta.baslik}
                  </span>
                </div>
                <div className="p-5">
                  <ul className="space-y-2 mb-4">
                    {hafta.program.map((madde, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-stone-700"
                      >
                        <Activity className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                        <span className="text-sm">{madde}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-purple-50 rounded-lg px-4 py-2.5 text-sm">
                    <span className="font-semibold text-purple-700">
                      Hedef:{" "}
                    </span>
                    <span className="text-purple-600">{hafta.hedef}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-stone-500">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              Bu program genel bir kılavuzdur. Bireysel durumunuza göre bir
              fizyoterapist ile uyarlanmalıdır. Ağrı arttığında süreyi veya
              yoğunluğu azaltın.
            </p>
          </div>
        </div>
      </section>

      {/* EGZERSİZ SONRASI ŞİŞLİK */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Egzersiz sonrası şişlik normal mi?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Hafif ve geçici şişlik egzersiz sonrası normal olabilir ve
              genellikle 1-2 saat içinde kompresyon ve bacak elevasyonu ile
              azalır. Ancak şiddetli, ağrılı veya ertesi güne kadar devam eden
              şişlik egzersiz yoğunluğunun fazla olduğunun işaretidir ve programın
              ayarlanması gerekir.
            </strong>
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3">
                Normal (Endişelenmeyin)
              </h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>1-2 saat içinde azalan hafif şişlik</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Egzersiz sırasında hafif sıcaklık hissi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Ertesi gün yok olan kas ağrısı</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-3">
                Anormal (Programı Ayarlayın)
              </h3>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Ertesi güne kadar devam eden şişlik</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Şiddetli ağrı veya morarma</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>Hareket kısıtlılığı yaratan şişlik</span>
                </li>
              </ul>
            </div>
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
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-purple-700 mb-2">
                Tedavi Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Konservatif ve cerrahi tedavi seçenekleri, fiyatlar ve SGK
                durumu.
              </p>
            </Link>
            <Link
              href="/lipodem-beslenme"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-purple-700 mb-2">
                Beslenme Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Anti-inflamatuar beslenme, Türk mutfağı uyarlaması ve 7 günlük
                menü.
              </p>
            </Link>
            <Link
              href="/lipodem-ruh-sagligi"
              className="group bg-white rounded-xl p-5 border border-stone-200 hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-purple-700 mb-2">
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
              sayfadaki egzersiz önerileri genel bilgi amaçlıdır ve bireysel
              tıbbi tavsiye yerine geçmez. Egzersiz programına başlamadan önce
              doktorunuza ve/veya lipödem konusunda deneyimli bir fizyoterapiste
              danışın. Ağrı arttığında egzersizi durdurun.
            </p>
          </div>
        </div>
      </section>

      {/* SON CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Lipödem riskinizi 2 dakikada değerlendirin
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Semptom testimiz ile lipödem riskinizi değerlendirin ve size en uygun
            egzersiz ve tedavi planını keşfedin.
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
