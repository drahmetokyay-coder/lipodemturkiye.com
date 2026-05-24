import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lipödem Nedir? Belirtiler, Evreler ve Tanı Rehberi",
  description:
    "Lipödem nedir, belirtileri nelerdir, hangi evrede olabilirsiniz? 2025 uluslararası konsensüse dayalı kapsamlı Türkçe lipödem rehberi.",
};

const belirtiler = [
  "Bacaklarda orantısız kalınlık – üst beden ince kalırken alt beden orantısız şekilde kalın kalmaya devam eder.",
  "İki taraflı simetri – her iki bacak da neredeyse aynı oranda etkilenir.",
  "Ayakların etkilenmemesi – şişman bacaklara rağmen ayak bileği ve ayaklar normal kalır (bilezik/manşet etkisi).",
  "Diyete direnç – kalori kısıtlaması ve egzersiz lipödemi olan bölgelerdeki yağ dokusunu eritmeye yetmez.",
  "Dokunma hassasiyeti – hafif dokunuşta bile ağrı veya rahatsızlık hissi (hipersensitivite).",
  "Kolay morarma – minimal travmayla bile belirgin morluklar oluşur.",
  "Ağırlık ve gerginlik hissi – bacaklarda sürekli bir ağırlık, gerginlik veya basınç hissi.",
  "Şişman yastık görünümü – diz içi, kalça ve uyluk bölgesinde belirgin yağ birikimi.",
  "Cilt altı nodülleri hissedilmesi – deri altında bezelye büyüklüğünde nodüllere dokunarak hissedersiniz.",
  "Sıcak/soğuk hassasiyeti – etkilenen bölgelerde sıcaklık değişimlerine karşı aşırı duyarlılık.",
  "Ödem – gün sonunda bacaklarda belirgin şişlik, uzun süre ayakta kalmakla artan ödem.",
  "Hareket kısıtlılığı – ileri evrelerde yürüme ve günlük aktivitelerde zorluk.",
];

const evreler = [
  {
    evre: "Evre 1",
    baslik: "Başlangıç",
    renk: "border-green-500",
    renkBg: "bg-green-50",
    renkText: "text-green-700",
    aciklama:
      "Cilt yüzey görünümü düzgün, ancak deri altında küçük nodüllere dokunarak hissedilir. Yağ dokusu eşit dağılımlı, hafif artmış. Ağrı ve hassasiyet başlamış olabilir.",
  },
  {
    evre: "Evre 2",
    baslik: "Orta",
    renk: "border-amber-500",
    renkBg: "bg-amber-50",
    renkText: "text-amber-700",
    aciklama:
      "Cilt yüzeyinde düzensizlikler (portakal kabuğu görünümü) başlar. Deri altında büyük nodüllere dokunulur. Yağ dokusu belirgin artmış, ağrı ve morarma daha sık.",
  },
  {
    evre: "Evre 3",
    baslik: "İleri",
    renk: "border-orange-500",
    renkBg: "bg-orange-50",
    renkText: "text-orange-700",
    aciklama:
      "Büyük lobüler yağ kütleleri oluşur, özellikle diz içi ve uyluklarda belirgin deformasyon. Hareket kısıtlılığı başlar, günlük yaşam kalitesi ciddi ölçüde etkilenir.",
  },
  {
    evre: "Evre 4",
    baslik: "Lipo-lenfödem",
    renk: "border-red-500",
    renkBg: "bg-red-50",
    renkText: "text-red-700",
    aciklama:
      "Lipödeme lenfödem eşlik eder. Lenf sistemi yeterince çalışamaz, kalıcı ödem gelişir. Enfeksiyon riski artar, tedavi daha kompleks hale gelir.",
  },
];

const karsilastirma = [
  {
    ozellik: "Dağılım",
    lipodem: "Bacak ve kalça (simetrik)",
    lenfodem: "Tek taraflı olabilir",
    obezite: "Tüm vücut (genel)",
  },
  {
    ozellik: "Ayaklar",
    lipodem: "Etkilenmez",
    lenfodem: "Etkilenir",
    obezite: "Etkilenebilir",
  },
  {
    ozellik: "Diyet yanıtı",
    lipodem: "Dirençli",
    lenfodem: "Yanıt vermez",
    obezite: "Yanıt verir",
  },
  {
    ozellik: "Ağrı",
    lipodem: "Var (hassasiyet)",
    lenfodem: "Genellikle yok",
    obezite: "Genellikle yok",
  },
  {
    ozellik: "Morarma",
    lipodem: "Kolay morarma",
    lenfodem: "Nadir",
    obezite: "Normal",
  },
  {
    ozellik: "Simetri",
    lipodem: "Her iki taraf eşit",
    lenfodem: "Asimetrik olabilir",
    obezite: "Simetrik",
  },
];

const sorular = [
  {
    soru: "Lipödem tedavi edilebilir mi?",
    cevap:
      "Lipödem kronik bir hastalık olup tam olarak ‘iyileştirilemez’ ancak etkili şekilde yönetilebilir. Konservatif tedaviler (kompresyon giysileri, manuel lenfatik drenaj, anti-inflamâtuar beslenme) semptomları önemli ölçüde hafifletir. Liposuction ve WAL (Water-Assisted Liposuction) gibi cerrahi yöntemler ise lipödeme bağlı yağ dokusunu kalıcı olarak azaltabilir.",
  },
  {
    soru: "Lipödem sadece kadınlarda mı görülür?",
    cevap:
      "Lipödem büyük çoğunlukla kadınlarda görülür (%97–98). Nadiren erkeklerde de raporlanmıştır, ancak bu vakaların çoğu hormonal bozukluklar veya karaciğer hastalığıyla ilişkilidir. Hormonal değişimler (ergenlik, hamilelik, menopoz) hastalığı tetikleyen veya ağırlaştıran önemli faktörlerdir.",
  },
  {
    soru: "Lipödem genetik midir?",
    cevap:
      "Evet, lipödemde güçlü bir genetik yatkınlık vardır. Araştırmalar vakaların %60’ına kadarında aile öyküsünün olduğunu göstermektedir. Anneniz, teyzeniz veya büyükannenizde benzer belirtiler varsa riskiniz önemli ölçüde artar. Henüz tek bir ‘lipödem geni’ tanımlanmamış olsa da, araştırmalar devam etmektedir.",
  },
  {
    soru: "Lipödemdeki ağrı normal mi?",
    cevap:
      "Evet, ağrı lipödemin karakteristik özelliklerinden biridir ve ‘normal’ kilo alımındaki yağ dokusundan farklıdır. Lipödem ağrısı hafif dokunma hassasiyetinden şiddetli, kronik ağrıya kadar değişen bir yelpazede yaşanabilir. Ağrı basınç uygulanmasıyla, uzun süre ayakta kalmayla ve sıcak havada artabilir. Ağrıyı yönetmek için kompresyon tedavisi, soğuk su tedavisi ve anti-inflamâtuar beslenme etkili olabilir.",
  },
];

export default function LipodemNedirPage() {
  return (
    <article>
      {/* HERO / GİRİŞ */}
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
              <li className="text-stone-800 font-medium">Lipödem Nedir</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Lipödem Nedir?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Bacaklarınız ne kadar diyet yaparsanız yapın incelmiyor mu? Üst
            bedeniniz zayıflarken alt bedeniniz aynı mı kalıyor? Doktorlar
            &quot;kilo ver&quot; diyor ama hiçbir şey değişmiyor? Kendinizi
            suçluyorsunuz ama sorun irade değil &mdash;{" "}
            <strong className="text-stone-800">
              sorun lipödem olabilir.
            </strong>{" "}
            Lipödem, yağ hücrelerinin anormal büyümesiyle karakterize kronik,
            ilerleyici ve sık sık yanlış teşhis edilen bir hastalıktır. Bu
            rehber, lipödemi anlamanız için ihtiyacınız olan her şeyi bilimsel
            kaynaklara dayalı olarak sunmaktadır.
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

      {/* TANIMLAR */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            Lipödem tam olarak nedir?
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-6">
            Lipödem (lipedema), yağ dokusunun özellikle bacaklarda, kalçalarda
            ve bazen kollarda anormal ve simetrik olarak birikmesiyle
            karakterize kronik bir hastalıktır. Normal obeziteden farklı olarak,
            lipödem yağ dokusu diyete ve egzersize dirençlidir. Dünya genelinde
            kadınların tahminen %11&apos;ini etkiler ve çoğu vaka yanlış teşhis
            nedeniyle yıllarca tanı alamaz.
          </p>

          <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-stone-800 mb-4">
              Lipödemin 5 temel mekanizması:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Yağ hücreleri büyür:</strong> Adipositler (yağ
                  hücreleri) hem büyüklük hem de sayı olarak anormal artış
                  gösterir (hipertrofi ve hiperplazi).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Kronik iltihap:</strong> Yağ dokusunda sürekli,
                  düşük düzeyli bir inflamasyon süreci aktiftir ve bu sürecin
                  ağrı ile hassasiyete neden olduğu düşünülmektedir.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Küçük kan damarları:</strong> Kapiller geçirgenlik
                  artar, bu da dokular arası boşluklara sıvı sızmasına ve kolay
                  morarmaya yol açar.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Lenf akışı:</strong> Lenf sistemi zamanla
                  etkilenebilir, özellikle ileri evrelerde lenf drenajı bozulur
                  ve ödeme eşlik eder.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <span className="text-stone-700">
                  <strong>Fibrozis:</strong> Zamanla yağ dokusu içinde sert,
                  fibrotik dokular oluşur ve dokunulabilir nodüller meydana
                  gelir.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BELİRTİLER */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            Lipödemin 12 kritik belirtisi
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Lipödem çeşitli belirtilerle kendini gösterir. Aşağıdaki
            listeyi inceleyerek kendi durumunuzla karşılaştırabilirsiniz:
          </p>

          <ol className="space-y-4">
            {belirtiler.map((belirti, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <p className="text-stone-700 leading-relaxed pt-1">{belirti}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <Link
              href="/araclar/semptom-testi"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              Bu belirtiler size tanıdık mı geldi? Semptom testini çözün
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* EVRELER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            Lipödem evreleri
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Lipödem dört evrede sınıflandırılır. Her evre farklı derecelerde
            yağ birikimi, doku değişiklikleri ve semptom şiddeti ile
            karakterizedir:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evreler.map((evre) => (
              <div
                key={evre.evre}
                className={`bg-white rounded-xl p-6 border-l-4 ${evre.renk} shadow-sm border border-stone-200`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${evre.renkBg} ${evre.renkText}`}
                  >
                    {evre.evre}
                  </span>
                  <h3 className="text-lg font-semibold text-stone-800">
                    {evre.baslik}
                  </h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {evre.aciklama}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/araclar/evre-degerlendirme"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Evre Değerlendirme Aracını Deneyin
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* KARŞILAŞTIRMA TABLOSU */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mt-0 mb-6">
            Lipödem vs Obezite vs Lenfödem
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Lipödem sıklıkla obezite veya lenfödem ile karıştırılır. Aralarındaki
            temel farkları anlamak doğru tanıya ulaşmak için kritiktir:
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-stone-100">
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Özellik
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-teal-700 border-b border-stone-200">
                    Lipödem
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Lenfödem
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                    Obezite
                  </th>
                </tr>
              </thead>
              <tbody>
                {karsilastirma.map((satir, i) => (
                  <tr
                    key={satir.ozellik}
                    className={
                      i % 2 === 0 ? "bg-white" : "bg-stone-50"
                    }
                  >
                    <td className="px-4 py-3 font-medium text-stone-800 border-b border-stone-100">
                      {satir.ozellik}
                    </td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100">
                      {satir.lipodem}
                    </td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100">
                      {satir.lenfodem}
                    </td>
                    <td className="px-4 py-3 text-stone-700 border-b border-stone-100">
                      {satir.obezite}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-stone-500">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <p>
              Bu tablo genel bilgi amaçlıdır. Kesin tanı için mutlaka bir uzmana
              başvurun.
            </p>
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

      {/* SON CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            2 dakikada kendinizi değerlendirin
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bilimsel ölçütlere dayalı semptom testimiz, lipödem riskinizi
            değerlendirmenize ve doğru uzmana yönlenmenize yardımcı olur.
            Sonuçlarınız tamamen gizlidir.
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
