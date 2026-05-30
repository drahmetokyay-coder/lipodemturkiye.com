import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  Brain,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Lipödem ve Ruh Sağlığı: Duygusal Destek Rehberi | Lipödem Türkiye",
  description:
    "Lipödemin psikolojik etkileri: depresyon (%31-59), anksiyete (%40), beden imajı sorunları ve duygusal destek stratejileri. Tanı sonrası ilk 30 gün rehberi, ailenize nasıl anlatırsınız ve destek grupları.",
};

const psikolojikEtkiler = [
  {
    etki: "Depresyon",
    oran: "%31-59",
    aciklama:
      "Lipödem hastalarında depresyon oranı genel popülasyona göre 3-5 kat daha yüksektir. Kronik ağrı, beden memnuniyetsizliği ve yanlış teşhis süreci depresyonu tetikler.",
    renk: "border-[#2D8B73]",
    renkBg: "bg-[#E8F5F0]",
  },
  {
    etki: "Anksiyete",
    oran: "%40",
    aciklama:
      "Hastalığın ilerleyici doğası, tedavi belirsizlikleri ve sosyal ortamlarda deneyimlenen utanç duygusu anksiyeteyi besler.",
    renk: "border-amber-500",
    renkBg: "bg-amber-50",
  },
  {
    etki: "Beden İmajı Bozukluğu",
    oran: "%70+",
    aciklama:
      "Lipödem hastalarının çoğu bedenlerinden memnun değildir. Medya ve sosyal çevredeki 'ideal beden' baskısı bu memnuniyetsizliği artırır.",
    renk: "border-[#E8916D]",
    renkBg: "bg-rose-50",
  },
  {
    etki: "Sosyal İzolasyon",
    oran: "%45",
    aciklama:
      "Utanç duygusu, hareket kısıtlılığı ve 'anlaşılmama' hissi hastaları sosyal ortamlardan uzaklaştırır.",
    renk: "border-blue-500",
    renkBg: "bg-blue-50",
  },
];

const ilk30Gun = [
  {
    donem: "İlk 1-7 Gün",
    baslik: "Şok ve Rahatlama",
    aciklama:
      "Tanı aldığınızda 'Demek suçlu ben değilmişim' rahatlığı ile 'Kronik bir hastalığım var' şoku aynı anda yaşanabilir. Her iki duygu da normaldir.",
    oneriler: [
      "Kendinize zaman tanıyın -- hemen her şeyi anlamak zorunda değilsiniz",
      "Güvenilir 1-2 kaynak okuyun, sosyal medya tüketimini sınırlayın",
      "Duygularınızı bir günlüğe yazın",
    ],
  },
  {
    donem: "8-14. Gün",
    baslik: "Bilgilenme",
    aciklama:
      "Hastalığı anlamaya başladığınız dönemdir. Doğru kaynaklardan bilgi edinmek kaygıyı azaltır.",
    oneriler: [
      "Lipödem Türkiye rehberlerini okuyun",
      "Tedavi seçeneklerini araştırın (acele karar vermeyin)",
      "Bir lipödem destek grubuna katılın",
    ],
  },
  {
    donem: "15-21. Gün",
    baslik: "Plan Yapma",
    aciklama:
      "Bilgilenme sonrası aksiyon almaya hazırsınız. Küçük adımlarla başlayın.",
    oneriler: [
      "Lipödem uzmanı bir doktora randevu alın",
      "Kompresyon giysi araştırmasına başlayın",
      "Anti-inflamatuar beslenmeye geçiş için hazırlık yapın",
    ],
  },
  {
    donem: "22-30. Gün",
    baslik: "İlk Adımlar",
    aciklama:
      "Tedavi yolculuğunuz başlıyor. Her küçük adım önemlidir.",
    oneriler: [
      "Doktor randevunuza gidin, tedavi planınızı oluşturun",
      "Kompresyon giysinizi deneyin",
      "Hafif egzersiz (yürüyüş veya havuz) başlatın",
    ],
  },
];

const aileAnlatim = [
  {
    kime: "Eşinize / Partnerinize",
    nasil:
      "Açık ve dürüst olun. Lipödemin bir hastalık olduğunu, diyetle çözülmediğini ve desteğine ihtiyacınız olduğunu anlatın. 'Lipödem Nedir?' sayfamızı birlikte okuyun.",
    ipucu:
      "Somut destek talepleri iletin: 'Birlikte yürüyüşe çıkmamız bana çok yardımcı olur.'",
  },
  {
    kime: "Ailenize (Anne, Baba, Kardeş)",
    nasil:
      "Genetik yatkınlığı anlatın -- ailenizde benzer belirtiler olabilir. Suçlama değil, anlayış isteyin. 'Bu benim suçum değil, tıbbi bir durum' vurgusunu yapın.",
    ipucu:
      "Aile üyelerini doktor randevunuza davet edin, doktorun anlatması daha etkili olabilir.",
  },
  {
    kime: "İş Yerinize / Yöneticinize",
    nasil:
      "Detaylara girmek zorunda değilsiniz. 'Kronik bir sağlık durumum var ve tedavi sürecindeyim' yeterlidir. Gerekli düzenlemeler (oturma molası, doktor randevuları) için doktor raporu hazırlayın.",
    ipucu:
      "İK departmanıyla görüşmek daha resmi ve koruyucu olabilir.",
  },
  {
    kime: "Çocuklarınıza",
    nasil:
      "Yaşlarına uygun dille anlatın. 'Annemin bacaklarında özel bir durum var, bazen ağrı yapıyor ama doktorlar bana yardım ediyor' gibi basit cümleler kullanın.",
    ipucu:
      "Çocukların soru sormasına izin verin ve 'bilmiyorum ama öğreneceğim' demekten çekinmeyin.",
  },
];

const yemeBozukluguIsaretleri = [
  "Lipödem yağından kurtulmak için aşırı kalori kısıtlaması yapma",
  "Sürekli yeni diyetler deneme ve başarısızlıkta kendini suçlama",
  "Yemek yedikten sonra suçluluk veya utanç hissetme",
  "Gizli yeme davranışı",
  "Besinleri 'iyi' ve 'kötü' olarak sınıflandırma takıntısı",
  "Tartıya çıkma kaygısı veya tartı sonucuna göre ruh halinin değişmesi",
  "Sosyal etkinliklerde yemek yemekten kaçınma",
];

const istatistikler = [
  {
    deger: "%31-59",
    aciklama: "Lipödem hastalarında depresyon oranı",
  },
  {
    deger: "%40",
    aciklama: "Lipödem hastalarında anksiyete oranı",
  },
  {
    deger: "8-12 yıl",
    aciklama: "Ortalama tanı gecikmesi süresi",
  },
  {
    deger: "%70+",
    aciklama: "Beden imajı memnuniyetsizliği oranı",
  },
];

const sorular = [
  {
    soru: "Lipödem yüzünden depresyondayım, bu normal mi?",
    cevap:
      "Evet, lipödem hastalarında depresyon çok yaygındır ve 'normal' bir tepkidir. Kronik ağrı, beden memnuniyetsizliği, yıllarca yanlış teşhis alma ve 'kilo ver' baskısıyla mücadele etmek herkesi yıpratır. Depresyon belirtileri yaşıyorsanız bir psikolog veya psikiyatrista başvurun. Tedavi edilebilir ve yardım almak güçlülük işaretidir.",
  },
  {
    soru: "Lipödem tanısı aldıktan sonra kendimi nasıl motive ederim?",
    cevap:
      "Tanı almanın kendisi bir dönüm noktasıdır -- artık ne ile mücadele ettiğinizi biliyorsunuz. Küçük hedefler koyun: bu hafta bir yürüyüş, bu ay bir doktor randevusu. Mükemmeliyetçiliği bırakın, tutarlılık her zaman mükemmellikten önemlidir. Bir destek grubuna katılmak motivasyonu artırır çünkü yalnız olmadığınızı görürsünüz.",
  },
  {
    soru: "Çevremdekilere nasıl anlatacağımı bilmiyorum, ne yapmalıyım?",
    cevap:
      "Herkese aynı anda ve aynı detayda anlatmak zorunda değilsiniz. En yakınlarınızla başlayın ve onlara güvenilir kaynaklar (bu site gibi) gösterin. 'Lipödem nedir?' sayfamızı paylaşabilirsiniz. Bazı insanlar hemen anlamayabilir -- bu sizin yetersizliğiniz değil, hastalığın bilinmemesidir.",
  },
  {
    soru: "Lipödem hastalarında yeme bozukluğu riski var mı?",
    cevap:
      "Evet, lipödem hastaları yeme bozukluğu açısından yüksek risk grubundadır. Yıllarca 'kilo ver' baskısı, başarısız diyet deneyimleri ve beden memnuniyetsizliği kısıtlayıcı yeme davranışlarını tetikleyebilir. Aşırı diyet kısıtlaması, gizli yeme, yemek sonrası suçluluk veya tartıya göre ruh hali değişimi yaşıyorsanız bir psikolog veya diyetisyene başvurun.",
  },
  {
    soru: "Lipödem destek grupları gerçekten faydalı mı?",
    cevap:
      "Evet, araştırmalar destek gruplarının lipödem hastalarında yalnızlık hissini azalttığını, tedavi bilgisini artırdığını ve psikolojik dayanıklılığı güçlendirdiğini göstermektedir. Online destek grupları (Facebook, WhatsApp) özellikle yakın çevresinde lipödem hastası olmayan kişiler için değerlidir. Dikkat: tıbbi tavsiye için her zaman doktorunuza danışın, destek grubu tıbbi danışmanlık yerine geçmez.",
  },
  {
    soru: "Psikolojik destek için nereye başvurabilirim?",
    cevap:
      "Kronik hastalık psikolojisi veya beden imajı konusunda deneyimli bir klinik psikolog ideal seçenektir. Bilişsel davranışçı terapi (BDT) ve kabul-kararlılık terapisi (ACT) lipödem hastalarında etkili olan yaklaşımlardır. AYNA Klinik Psikologlar Derneği, Türk Psikologlar Derneği ve üniversite hastaneleri psikoloji klinikleri başvurulabilecek kaynaklar arasındadır.",
  },
];

export default function LipodemRuhSagligiPage() {
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
              <li className="text-stone-800 font-medium">Ruh Sağlığı</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Lipödem ve Ruh Sağlığı: Duygusal Destek Rehberi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem sadece bacaklarınızı değil, ruhunuzu da etkiler. Yıllarca
            &quot;daha az ye, daha çok hareket et&quot; denilip sonuç
            alamamanın yarattığı çaresizlik; bedeninizle aranızdaki kopukluk;
            &quot;neden kimse anlamıyor?&quot; sorusu &mdash; bunların hepsi
            gerçek ve geçerli duygulardır.{" "}
            <strong>Bu sizin hatanız değil.</strong> Bu rehber, lipödemin
            psikolojik etkilerini anlamanıza, tanı sonrası ilk 30 günü
            atlatmanıza ve duygusal destek kaynaklarına ulaşmanıza yardımcı
            olmak için hazırlanmıştır.
          </p>

          <div className="mt-8">
            <Link
              href="/araclar/lipodem-semptom-testi"
              className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#15594A] transition-colors"
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

      {/* PSİKOLOJİK ETKİ */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödemin psikolojik etkileri nelerdir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem hastalarının %31-59&apos;unda depresyon, %40&apos;ında
              anksiyete, %70&apos;inden fazlasında beden imajı memnuniyetsizliği
              görülür. Kronik ağrı, yıllarca süren yanlış teşhis süreci ve
              &quot;kilo ver&quot; baskısıyla mücadele etmek ciddi psikolojik
              yıpranmaya neden olur. Bu oranlar lipödemin sadece fiziksel değil,
              derin bir psikolojik hastalık da olduğunu ortaya koymaktadır.
            </strong>
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {psikolojikEtkiler.map((etki) => (
              <div
                key={etki.etki}
                className={`rounded-xl p-6 border-l-4 ${etki.renk} ${etki.renkBg} border border-stone-200`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Brain className="w-5 h-5 text-stone-600" />
                  <h3 className="text-lg font-semibold text-stone-800">
                    {etki.etki}
                  </h3>
                  <span className="text-sm font-bold text-[#1A6B5A]">
                    {etki.oran}
                  </span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {etki.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEDEN İMAJI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem beden imajını nasıl etkiler?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem hastaları üst bedenlerinin ince, alt bedenlerinin orantısız
              kalın olması nedeniyle bedenlerini &quot;iki parçalı&quot; olarak
              algılar. Bu orantısızlık, toplumsal &quot;ideal beden&quot; normları
              ile çatışarak beden imajını derinden etkiler. Kıyafet bulmakta
              güçlük, aynaya bakmaktan kaçınma ve sosyal ortamlardan çekilme
              yaygın tepkilerdir.
            </strong>
          </p>

          <div className="mt-6 bg-[#E8F5F0] rounded-xl p-6 border border-[#93D4BE]">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-[#1A6B5A]" />
              <h3 className="font-semibold text-[#10473B] text-lg">
                Bu sizin hatanız değil
              </h3>
            </div>
            <p className="text-[#15594A] leading-relaxed mb-4">
              Lipödem genetik ve hormonal bir hastalıktır. Bacaklarınızın
              görünümü irade eksikliğinden, tembellikten veya yanlış
              beslenmeden kaynaklanmıyor. Yıllarca doktorların
              &quot;kilo ver&quot; demesi sizi suçlu hissettirmiş olabilir ama
              gerçek şu ki: lipödem yağı diyete dirençlidir ve bu bilimsel
              bir gerçektir.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-[#15594A]">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Bedeniniz size karşı değil, tıbbi bir durum yaşıyor</span>
              </li>
              <li className="flex items-start gap-2 text-[#15594A]">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Tanı almak ilk adımdır ve siz bu adımı attınız
                </span>
              </li>
              <li className="flex items-start gap-2 text-[#15594A]">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Yardım istemek güçlülük işaretidir</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TANI SONRASI İLK 30 GÜN */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Tanı sonrası ilk 30 gün nasıl geçer?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem tanısı almak genellikle karma duygular yaratır: yıllarca
              cevapsız kalan sorulara yanıt bulmanın rahatlığı ile kronik bir
              hastalıkla yaşama gerçeğinin şoku bir arada yaşanır. İlk 30 gün
              şok, bilgilenme, plan yapma ve ilk adımlar olmak üzere dört
              aşamada ilerler. Kendinize sabırlı olun.
            </strong>
          </p>

          <div className="mt-8 space-y-6">
            {ilk30Gun.map((donem) => (
              <div
                key={donem.donem}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden"
              >
                <div className="bg-[#1A6B5A] px-5 py-3 flex items-center justify-between">
                  <h3 className="text-white font-semibold">{donem.donem}</h3>
                  <span className="text-[#E8F5F0] text-sm">{donem.baslik}</span>
                </div>
                <div className="p-5">
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {donem.aciklama}
                  </p>
                  <ul className="space-y-2">
                    {donem.oneriler.map((oneri, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-stone-700 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                        <span>{oneri}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AİLENİZE NASIL ANLATIRSINIZ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödemi ailenize ve çevrenize nasıl anlatırsınız?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödemi çevrenize anlatmak zor olabilir çünkü çoğu insan bu
              hastalığı ilk kez duyacaktır. Herkese aynı anda ve aynı detayda
              anlatmak zorunda değilsiniz. En yakınlarınızla başlayın, güvenilir
              kaynaklar paylaşın ve somut destek talepleri iletin. Anlamamaları
              sizin yetersizliğiniz değil, hastalığın bilinmemesidir.
            </strong>
          </p>

          <div className="mt-8 space-y-4">
            {aileAnlatim.map((item) => (
              <div
                key={item.kime}
                className="bg-stone-50 rounded-xl p-6 border border-stone-200"
              >
                <h3 className="text-lg font-semibold text-stone-800 mb-2">
                  {item.kime}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-3">
                  {item.nasil}
                </p>
                <div className="bg-[#E8F5F0] rounded-lg px-4 py-2.5 text-sm">
                  <span className="font-semibold text-[#15594A]">
                    İpucu:{" "}
                  </span>
                  <span className="text-[#1A6B5A]">{item.ipucu}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YEME BOZUKLUĞU RİSKİ */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem hastalarında yeme bozukluğu riski neden yüksektir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Lipödem hastaları yıllarca &quot;kilo ver&quot; baskısıyla
              karşılaşır, başarısız diyet deneyimleri yaşar ve bedenlerinden
              memnuniyetsizlik hisseder. Bu üçlü kombinasyon, kısıtlayıcı yeme
              davranışları, duygusal yeme ve binge eating (tıkınırcasına yeme)
              riskini önemli ölçüde artırır. Aşağıdaki işaretleri kendinizde
              fark ediyorsanız bir psikolog veya diyetisyene başvurun.
            </strong>
          </p>

          <div className="mt-8 space-y-3">
            {yemeBozukluguIsaretleri.map((isaret, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-stone-200"
              >
                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-stone-700 leading-relaxed">{isaret}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-rose-50 rounded-xl p-6 border border-rose-200">
            <p className="text-rose-700 leading-relaxed">
              <strong>Önemli:</strong> Bu işaretlerden birden fazlasını
              kendinizde fark ediyorsanız, bir yeme bozukluğu uzmanı
              (psikolog veya diyetisyen) ile görüşmenizi öneririz. Yeme
              bozuklukları tedavi edilebilir ve erken müdahale önemlidir.
            </p>
          </div>
        </div>
      </section>

      {/* DESTEK GRUPLARI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-4">
            Lipödem destek grupları ve psikolojik yardım kaynakları nelerdir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-2">
            <strong>
              Yalnız olmadığınızı bilmek iyileşmenin önemli bir parçasıdır.
              Online destek grupları, psikolojik danışmanlık ve hasta
              dernekleri lipödem yolculuğunuzda size eşlik edecek kaynaklardır.
              Araştırmalar, destek grubuna katılan hastaların psikolojik
              dayanıklılığının anlamlı ölçüde arttığını göstermektedir.
            </strong>
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">
                Online Destek
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Facebook lipödem destek grupları (Türkçe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>WhatsApp hasta grupları</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Instagram lipödem topluluğu (#lipödemtürkiye)</span>
                </li>
              </ul>
            </div>
            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
              <h3 className="font-semibold text-stone-800 mb-3">
                Profesyonel Destek
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Klinik psikolog (kronik hastalık uzmanı)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Psikiyatrist (ilaç tedavisi gerekiyorsa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1A6B5A] mt-0.5 shrink-0" />
                  <span>Online terapi platformları (esnek erişim)</span>
                </li>
              </ul>
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
              href="/lipodem-nedir"
              className="group bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-[#5BBF9E] hover:bg-[#E8F5F0] transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-[#15594A] mb-2">
                Lipödem Nedir?
              </h3>
              <p className="text-sm text-stone-600">
                Belirtiler, evreler ve tanı rehberi. Lipödem hakkında temel
                bilgiler.
              </p>
            </Link>
            <Link
              href="/lipodem-tedavisi"
              className="group bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-[#5BBF9E] hover:bg-[#E8F5F0] transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-[#15594A] mb-2">
                Tedavi Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Konservatif ve cerrahi tedavi seçenekleri, fiyatlar ve SGK
                durumu.
              </p>
            </Link>
            <Link
              href="/lipodem-turkiye-rehberi"
              className="group bg-stone-50 rounded-xl p-5 border border-stone-200 hover:border-[#5BBF9E] hover:bg-[#E8F5F0] transition-colors"
            >
              <h3 className="font-semibold text-stone-800 group-hover:text-[#15594A] mb-2">
                Türkiye Rehberi
              </h3>
              <p className="text-sm text-stone-600">
                Doktor bulma, klinikler ve SGK kapsamı detayları.
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
              sayfadaki bilgiler genel eğitim amaçlıdır ve profesyonel
              psikolojik/psikiyatrik tavsiye yerine geçmez. Depresyon,
              anksiyete veya yeme bozukluğu belirtileri yaşıyorsanız bir ruh
              sağlığı uzmanına başvurun. Kriz anında ALO 182 (İntihar Önleme
              Hattı) arayabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* SON CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Yalnız değilsiniz
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Lipödem riskinizi değerlendirin ve size en uygun destek
            kaynaklarını keşfedin. İlk adımı atmak cesaret ister &mdash; ve
            siz bunu yapabilirsiniz.
          </p>
          <Link
            href="/araclar/lipodem-semptom-testi"
            className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#15594A] transition-colors shadow-lg shadow-[#1A6B5A]/20"
          >
            Ücretsiz Semptom Testini Başlat
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
