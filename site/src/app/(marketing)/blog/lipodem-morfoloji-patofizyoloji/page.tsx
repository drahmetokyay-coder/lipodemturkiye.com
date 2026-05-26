import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Microscope,
  Flame,
  FlaskConical,
  Brain,
  Fingerprint,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler | Lipödem Türkiye",
  description:
    "Lipödem yağ dokusunun morfolojik özellikleri, fibrozis, inflamasyon, biyobelirteç araştırmaları ve lipödemin obeziteden neden farklı olduğunun bilimsel kanıtları.",
  openGraph: {
    title: "Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler",
    description:
      "Lipödem yağ dokusu hiperproliferasyon, fibrozis ve inflamasyon ile karakterizedir. Obezite ve lenfödemden farklı biyobelirteç profili.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem Hakkında Bilmediklerimiz: Bilimin Açık Soruları",
    slug: "/blog/lipodem-bilmediklerimiz",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem Araştırması Nereye Gidiyor? Bilim İnsanlarının Yol Haritası",
    slug: "/blog/lipodem-arastirma-gelecek",
    kategori: "Araştırma",
  },
  {
    baslik: "Ketojenik Diyet Lipödem Ağrısını Azaltır mı? Bilim Ne Diyor?",
    slug: "/blog/ketojenik-diyet-lipodem",
    kategori: "Beslenme",
  },
];

export default function LipodemMorfolojiPatofizyolojiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-[#E8F5F0] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
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
                  href="/blog"
                  className="hover:text-[#1A6B5A] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-stone-800 font-medium">
                Morfoloji ve Patofizyoloji
              </li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">
              <Tag className="w-3 h-3" />
              Araştırma
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              17 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Yağı Neden Farklı? Mikroskop Altında Gerçekler
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            &quot;Daha az ye, daha çok hareket et&quot; &mdash; lipödemli pek
            çok kadın bu tavsiyeyi defalarca duymuştur. Ancak lipödem yağı
            normal yağdan yapısal olarak farklıdır. Güncel bir derleme (PMID:
            36551837), lipödem yağ dokusunun benzersiz morfolojik
            özelliklerini, inflamatuar profilini ve umut vaat eden
            biyobelirteçleri ortaya koymaktadır.
          </p>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="prose prose-stone prose-lg max-w-none">
            {/* BÖLÜM 1 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Microscope className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem yağ dokusu mikroskop altında nasıl görünür?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağ dokusunda yağ
                    hücrelerinin aşırı çoğalması (hiperplazi), hücre boyutu
                    artışı (hipertrofi), kollajen birikimi (fibrozis) ve
                    inflamatuar hücre infiltrasyonu görülür. Bu özellikler
                    normal yağ dokusundan belirgin şekilde farklıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Normal yağ dokusu ile lipödem yağ dokusu arasındaki fark,
                  çıplak gözle değil ancak mikroskop altında netleşir.
                  Derleme, lipödem dokusunun ayırt edici morfolojik
                  özelliklerini detaylı olarak incelemektedir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hiperplazi:</strong> Yağ hücresi sayısında
                      belirgin artış. Lipödemde yağ birikimi yalnızca
                      hücrelerin büyümesi değil, sayıca artmasıyla da
                      gerçekleşir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hipertrofi:</strong> Mevcut yağ hücreleri de
                      normalden daha büyüktür. Bu ikili mekanizma, kalori
                      kısıtlamasıyla yağ kaybının neden bu kadar zor olduğunu
                      açıklamaya yardımcı olur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Damar değişiklikleri:</strong> Kapiller
                      geçirgenlik artmıştır ve mikro-kanamalar yaygındır.
                      Bu durum kolay morarma ve ödemin temel nedenidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Makrofaj infiltrasyonu:</strong> Yağ dokusu
                      içinde taç benzeri yapılar (crown-like structures)
                      oluşturan makrofajlar, kronik inflamasyonun
                      göstergesidir.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 mt-1">
                    <Flame className="w-5 h-5 text-orange-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Fibrozis ve inflamasyon: Ağrının kaynağı
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem dokusunda aşırı
                    kollajen birikimi (fibrozis) ve kronik düşük dereceli
                    inflamasyon bir arada bulunur. Bu ikili süreç ağrı,
                    hassasiyet ve doku sertliğinin ana kaynağıdır &mdash;
                    ve diyetle veya egzersizle kolay gerilemez.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemdeki ağrının kaynağını anlamak için fibrozis ve
                  inflamasyonun etkileşimini kavramak gerekir. Derleme, bu
                  iki sürecin birbirini besleyen bir kısır döngü
                  oluşturduğunu göstermektedir:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4 mb-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Fibrozis-inflamasyon kısır döngüsü:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Yağ hücreleri büyüdükçe oksijen yetersizliği (hipoksi)
                      gelişir
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Hipoksi inflamatuar hücrelerin bölgeye göçünü tetikler
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      İnflamatuar hücreler sitokin salgılar (IL-6, TNF-alfa)
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Sitokinler fibroblastları aktive eder ve kollajen
                      üretimi artar
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      Artan fibrozis kan ve lenf dolaşımını bozar, döngü
                      kendini tekrarlar
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bu kısır döngü, lipödem dokusundaki ağrının neden kalori
                  kısıtlaması veya egzersizle kolayca geçmediğini
                  açıklamaktadır. Sorun yalnızca yağ birikimi değil, yağ
                  dokusunun yapısal dönüşümüdür.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 mt-1">
                    <FlaskConical className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Biyobelirteç araştırmaları: Tanıya giden yol
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Ekzozom, sitokin, lipidomik
                    ve metabolomik çalışmalardan elde edilen umut verici
                    biyobelirteç adayları, lipödemi obezite ve lenfödemden
                    ayırt edebilecek nesnel tanı araçlarına giden yolu
                    açmaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Derlemenin en heyecan verici bölümlerinden biri
                  biyobelirteç araştırmalarıdır. Lipödeme özgü biyobelirteçler
                  bulunabilirse, tanı sürecinde devrim yaşanabilir:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ekzozom çalışmaları:</strong> Hücre dışı
                      veziküller (ekzozomlar), lipödem yağ dokusundan
                      salınan özel molekülleri taşır. Bu veziküllerin içeriği,
                      lipödeme özgü bir &quot;parmak izi&quot;
                      oluşturabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sitokin profili:</strong> Lipödemde belirli
                      sitokinlerin (IL-6, IL-8, MCP-1) yüksekliği saptanmıştır.
                      Ancak bunlar obezitede de yüksek olabildiğinden, lipödeme
                      özgü bir sitokin paneli geliştirilmeye çalışılmaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Lipidomik analiz:</strong> Lipödem hastalarının
                      kan lipid profili, aynı kilodaki obez bireylerden farklı
                      olabilir. Bu farklılıklar tanısal değer taşıyabilir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Metabolomik belirteçler:</strong> Kan ve idrar
                      metabolitleri arasında lipödeme özgü paternler
                      araştırılmaktadır.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Psikososyal etki: Görünmeyen yara
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yalnızca fiziksel
                    bir hastalık değildir. Derleme, lipödemin depresyon,
                    anksiyete, beden algısı bozukluğu ve sosyal izolasyona
                    yol açtığını vurgulamaktadır. Psikososyal destek tedavinin
                    ayrılmaz bir parçası olmalıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Derleme, lipödemin psikososyal boyutunu özellikle
                  vurgulamaktadır. Fiziksel semptomların ötesinde, lipödemle
                  yaşayan kadınlar çok derin duygusal ve sosyal zorluklarla
                  karşılaşmaktadır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tanı gecikmesinin travması:</strong> Yıllarca
                      &quot;sadece şişmansın&quot; denilmesi, hastanın
                      kendine güvenini ve sağlık sistemine inancını
                      sarsmaktadır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Beden algısı bozukluğu:</strong> Orantısız
                      yağ dağılımı, vücut imajını derinden etkiler.
                      Kıyafet bulma güçlüğü günlük bir stres kaynağıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Sosyal izolasyon:</strong> Ağrı ve hareket
                      kısıtlılığı sosyal aktivitelere katılımı azaltır.
                      &quot;Tembellik&quot; veya &quot;disiplinsizlik&quot;
                      damgası toplumsal baskı yaratır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0" />
                    <span>
                      <strong>Depresyon ve anksiyete:</strong> Lipödem
                      hastalarında depresyon ve anksiyete oranları genel
                      popülasyondan anlamlı şekilde yüksektir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Bu bulgular, lipödem tedavisinin yalnızca fiziksel
                  müdahaleyle sınırlı kalmaması gerektiğini göstermektedir.
                  Psikolojik destek, hasta toplulukları ve farkındalık
                  çalışmaları tedavinin önemli bileşenleridir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <Fingerprint className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem neden &quot;sadece şişmanlık&quot; değil?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağ dokusunun
                    obezite ve lenfödemden farklı morfolojik, inflamatuar ve
                    biyokimyasal özelliklere sahip olduğu bilimsel olarak
                    kanıtlanmıştır. Lipödem bağımsız, kendine özgü bir
                    hastalıktır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Derlemenin en önemli mesajlarından biri budur: lipödem
                  obeziteden farklı bir hastalıktır. İşte bilimsel kanıtlar:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4 mb-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Lipödem vs. Obezite: Temel farklar
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Dağılım:</strong> Obezitede yağ genellikle
                        homojen dağılır. Lipödemde simetrik, orantısız
                        dağılım (bacaklar ve/veya kollar) tipiktir. El ve
                        ayak bilekleri genellikle korunur.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Diyet yanıtı:</strong> Obezitede kalori
                        kısıtlaması ile yağ kaybı sağlanabilir. Lipödem yağı
                        diyete ve egzersize dirençlidir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Ağrı:</strong> Obezitede dokunma ağrısı
                        genellikle bulunmaz. Lipödemde palpasyon hassasiyeti
                        ve spontan ağrı karakteristiktir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Morarma:</strong> Lipödemde minimal travma
                        ile kolay morarma tipiktir &mdash; kapiller
                        kırılganlık artmıştır.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Doku yapısı:</strong> Mikroskop altında
                        hiperplazi, fibrozis ve inflamatuar infiltrasyon
                        lipödeme özgü bulgulardır.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Bu bilimsel kanıtlar, lipödemin bağımsız bir hastalık
                  olarak tanınmasının neden bu kadar önemli olduğunu ortaya
                  koymaktadır. Doğru tanı, doğru tedavinin ilk adımıdır.
                  Eğer yaşadığınız semptomlar size tanıdık geliyorsa, lipödem
                  konusunda deneyimli bir uzmana başvurmanızı öneririz.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEMPTOM TESTİ CTA */}
      <section className="py-10 md:py-12 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="bg-[#1A6B5A] rounded-xl p-8 text-white text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-3 font-serif">
                Bu belirtiler size tanıdık mı geldi?
              </h2>
              <p className="text-[#E8F5F0] leading-relaxed mb-6 max-w-xl mx-auto">
                Bilimsel semptom testimiz lipödem riskinizi 2 dakikada
                değerlendirmenize yardımcı olur. Sonuçlarınız tamamen gizlidir.
              </p>
              <Link
                href="/araclar/semptom-testi"
                className="inline-flex items-center gap-2 bg-white text-[#15594A] px-7 py-3 rounded-lg font-semibold hover:bg-[#E8F5F0] transition-colors"
              >
                Semptom Testini Başlat
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* İLGİLİ MAKALELER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-6 font-serif">
            İlgili yazılar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ilgiliYazilar.map((yazi) => (
              <Link
                key={yazi.slug}
                href={yazi.slug}
                className="group block bg-stone-50 rounded-xl border border-stone-200 p-5 card-hover"
              >
                <span className="text-xs font-semibold text-[#1A6B5A] mb-2 block">
                  {yazi.kategori}
                </span>
                <h3 className="text-sm font-semibold text-stone-800 leading-snug group-hover:text-[#1A6B5A] transition-colors">
                  {yazi.baslik}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A6B5A] mt-3 group-hover:text-[#15594A] transition-colors">
                  Oku
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TIBBİ DISCLAIMER */}
      <section className="py-8 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex items-start gap-3 text-sm text-stone-500">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-600 mb-1">
                Tıbbi sorumluluk reddi
              </p>
              <p className="leading-relaxed">
                Bu makale genel bilgilendirme amaçlıdır ve tıbbi tavsiye
                niteliği taşımaz. Lipödem tanı ve tedavisi için mutlaka
                alanında uzman bir sağlık profesyoneline başvurunuz. Mevcut
                tedavinizi değiştirmeden veya yeni bir tedaviye başlamadan
                önce doktorunuza danışınız. Daha fazla bilgi için{" "}
                <Link
                  href="/tibbi-sorumluluk-reddi"
                  className="text-[#1A6B5A] hover:text-[#15594A] underline"
                >
                  tıbbi sorumluluk reddi
                </Link>{" "}
                sayfamızı inceleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
