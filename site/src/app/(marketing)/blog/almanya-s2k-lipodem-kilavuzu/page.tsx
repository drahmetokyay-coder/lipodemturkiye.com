import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  BookOpen,
  ClipboardList,
  HeartPulse,
  Brain,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor? | Lipödem Türkiye",
  description:
    "Alman Fleboloji ve Lenfoloji Derneği'nin S2k lipödem kılavuzu: 60 uzman önerisi, tanı kriterleri, konservatif ve cerrahi tedavi, psikososyal faktörler.",
  openGraph: {
    title: "Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor?",
    description:
      "Avrupa'nın en kapsamlı lipödem kılavuzundan 60 uzman önerisi: tanı, tedavi ve öz-yönetim stratejileri.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem Araştırmalarında Son Durum: İlerleme, Zorluklar ve Gelecek",
    slug: "/blog/lipodem-ilerleme-zorluklar-gelecek",
    kategori: "Araştırma",
  },
  {
    baslik: "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Egzersiz Lipödemi Tedavi Edebilir mi? İtalyan Bilim Konsensüsü",
    slug: "/blog/lipodem-egzersiz-tedavi-konsensus",
    kategori: "Tedavi",
  },
];

export default function AlmanyaS2kLipodemKilavuzuPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-[#E8F5F0] py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">S2k Kılavuzu</li>
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
              24 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              8 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor?
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Alman Fleboloji ve Lenfoloji Derneği önderliğinde geliştirilen S2k
            kılavuzu, lipödem tanı ve tedavisinde Avrupa&apos;nın en kapsamlı
            rehberlerinden biridir. Tanıdan tedaviye, psikososyal
            faktörlerden öz-yönetime kadar 60 uzman önerisi formüle
            edilmiştir. Bu makalede kılavuzun Türk hastalar için öne çıkan
            mesajlarını özetliyoruz.
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
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    S2k kılavuzu nedir ve neden önemlidir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> S2k, Almanya&apos;da kanıta
                    dayalı tıp kılavuzlarının ikinci en yüksek düzeyidir.
                    Uzman konsensüsüne dayanır ve klinik pratikte
                    uygulanabilir öneriler sunar. Lipödem için en detaylı
                    klinik rehberdir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Almanya&apos;da tıbbi kılavuzlar S1 (uzman görüşü), S2k
                  (konsensüs bazlı), S2e (kanıt bazlı) ve S3 (kanıt +
                  konsensüs bazlı) olarak sınıflandırılır. S2k düzeyi,
                  birden fazla tıp disiplininden uzmanların yapılandırılmış
                  bir konsensüs sürecinden geçtiği anlamına gelir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu kılavuz, fleboloji, lenfoloji, dermatoloji, plastik
                  cerrahi, fizyoterapi, psikoloji ve beslenme gibi çok sayıda
                  alanın katkısıyla oluşturulmuştur. Toplamda 60 öneri
                  formüle edilmiş olup, bunlar tanı, konservatif tedavi,
                  cerrahi tedavi, psikososyal faktörler ve öz-yönetim
                  başlıkları altında gruplandırılmıştır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Türkiye&apos;de henüz ulusal düzeyde bir lipödem kılavuzu
                  bulunmadığından, Alman S2k kılavuzu Türk klinisyenler ve
                  hastalar için de önemli bir referans kaynağıdır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <ClipboardList className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Tanı kriterleri: Kılavuz ne öneriyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kılavuz, lipödem tanısının
                    esas olarak klinik olduğunu vurgular. Simetrik yağ
                    birikimi, ağrı, kolay morarma ve negatif Stemmer bulgusu
                    temel kriterlerdir. Görüntüleme destekleyici olarak
                    kullanılmalıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  S2k kılavuzu, lipödem tanısı için standartlaştırılmış
                  kriterleri netleştirmiştir. Tanı klinik muayene ve hastanın
                  detaylı anamnezine dayanmalıdır. Kılavuzun tanı ile ilgili
                  öne çıkan önerileri şunlardır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Klinik muayene öncelikli:</strong> Lipödem tanısı
                      inspeksiyon (gözlem) ve palpasyon (dokunma) ile konur.
                      Laboratuvar testi veya görüntüleme zorunlu değildir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Evreleme sistemi:</strong> Kılavuz, lipödemi
                      Evre 1 (düzgün cilt yüzeyi, kalınlaşmış subkutan doku),
                      Evre 2 (düzensiz cilt yüzeyi, nodüler yapılar) ve Evre
                      3 (belirgin doku artışı, kıvrımlar) olarak sınıflar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Ayırıcı tanı:</strong> Obezite, lenfödem,
                      lipomatozis ve Dercum hastalığı mutlaka dışlanmalıdır.
                      Stemmer testi lenfödem ayrımında kritiktir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kombine tablolar:</strong> Lipödem ve obezite
                      veya lipödem ve lenfödem birlikte bulunabilir
                      (lipo-lenfödem). Bu kombine tablolar tedavi planını
                      değiştirir.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <HeartPulse className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Konservatif ve cerrahi tedavi önerileri
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kılavuz, konservatif tedaviyi
                    (kompresyon + MLD + egzersiz) her hasta için birinci
                    basamak olarak önerir. Cerrahi tedavi (tumescent
                    liposuction) yalnızca konservatif tedaviye yeterli yanıt
                    alınamazsa ve deneyimli merkezlerde uygulanmalıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  S2k kılavuzu tedavi yaklaşımında net bir hiyerarşi
                  belirler. Her lipödem hastası öncelikle konservatif tedavi
                  almalıdır. Bu tedavinin üç temel bileşeni vardır:
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Konservatif tedavinin üç ayağı:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Kompresyon:</strong> Düz örgü kompresyon
                        giysileri (CCL 1&ndash;3) günlük kullanım için
                        önerilir. Yuvarlak örgü lipödem için uygun değildir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Manuel lenf drenajı (MLD):</strong> Özellikle
                        ağrılı dönemlerde ve ödem artışında MLD semptomları
                        hafifletir. Haftada 1&ndash;2 seans önerilir.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2 shrink-0" />
                      <span>
                        <strong>Egzersiz:</strong> Su içi egzersizler,
                        yürüyüş ve hafif kuvvet antrenmanı önerilir. Yüksek
                        etkili sporlardan kaçınılmalıdır.
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-stone-700 leading-relaxed mt-4">
                  Cerrahi tedavi olarak kılavuz, tumescent teknikle yapılan
                  liposuction&apos;ı önerir. Operasyon lipödem konusunda
                  deneyimli cerrahlar tarafından yapılmalı ve hasta ameliyat
                  öncesi en az 6 ay konservatif tedavi almış olmalıdır.
                  Kılavuz ayrıca, cerrahi sonrası kompresyon ve MLD&apos;nin
                  sürdürülmesini güçlü bir şekilde önerir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Psikososyal destek ve öz-yönetim
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kılavuz, lipödemin sadece
                    fiziksel değil, ciddi bir psikososyal yük taşıdığını
                    vurgular. Psikolojik destek tedavi planının ayrılmaz bir
                    parçası olmalıdır. Hasta eğitimi ve öz-yönetim
                    stratejileri yaşam kalitesini artırır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  S2k kılavuzunun en dikkat çekici yönlerinden biri,
                  psikososyal faktörlere verdiği önemdir. Lipödemli hastalar
                  sıklıkla depresyon, anksiyete, beden imajı bozukluğu ve
                  sosyal izolasyon yaşarlar. Yıllarca yanlış tanı alma ve
                  &quot;kilo verin&quot; tavsiyesine maruz kalma bu durumu
                  daha da kötüleştirir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Psikolojik tarama:</strong> Kılavuz, her lipödem
                      hastasının depresyon ve anksiyete açısından taranmasını
                      önerir. Gerektiğinde psikoterapi veya psikiyatrik destek
                      sağlanmalıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hasta eğitimi:</strong> Hastalığın doğasını
                      anlamak tedaviye uyumu artırır. Hastalar hastalığın
                      ilerleyişi, tetikleyiciler ve öz-bakım stratejileri
                      hakkında eğitilmelidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Destek grupları:</strong> Hasta destek grupları
                      deneyim paylaşımı ve motivasyon açısından değerlidir.
                      Online platformlar erişilebilirliği artırır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Öz-yönetim:</strong> Kılavuz, hastaların kendi
                      bakımlarında aktif rol almasını teşvik eder: düzenli
                      kompresyon kullanımı, egzersiz planına uyum,
                      anti-inflamatuar beslenme ve stres yönetimi öz-yönetimin
                      temel taşlarıdır.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Kılavuz, lipödem tedavisinin yalnızca fiziksel müdahalelerle
                  sınırlı kalmaması gerektiğini açıkça ortaya koymaktadır.
                  Multidisipliner bir ekip (fleboloji, fizyoterapi, beslenme,
                  psikoloji) tarafından bütüncül bir yaklaşımla yönetilen
                  hastalar en iyi sonuçları almaktadır.
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
                href="/araclar/lipodem-semptom-testi"
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
