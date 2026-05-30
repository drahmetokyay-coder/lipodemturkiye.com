import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  History,
  EyeOff,
  Globe,
  Scale,
  Megaphone,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Dünya Lipödeme Uyandı: Görmezden Gelinen Hastalığın Hikayesi | Lipödem Türkiye",
  description:
    "Lipödem neden yıllarca görmezden gelindi? Kronik, ilerleyici bir hastalığın farkındalık hikayesi, küresel tanınma süreci ve hastalar için çağrı.",
  openGraph: {
    title: "Dünya Lipödeme Uyandı: Görmezden Gelinen Hastalığın Hikayesi",
    description:
      "Lipödem kronik ve ilerleyici bir hastalıktır. Diyet işe yaramaz. Küresel farkındalık hareketi ve hastalar için yol haritası.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödemin A'dan Z'ye Haritası: Patogenez, Tanı ve Tedavi",
    slug: "/blog/lipodem-patogenez-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Lipödemin Modern Tanımı: Bir Alman Dermatologun Güncelleme Raporu",
    slug: "/blog/lipodem-guncel-guncelleme",
    kategori: "Araştırma",
  },
  {
    baslik: "Damar Hekimlerinin Gözünden Lipödem: Klinik Özet",
    slug: "/blog/damar-hekimlerinden-lipodem",
    kategori: "Tedavi",
  },
];

export default function LipodemFarkindalikCagrisiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Farkındalık Çağrısı</li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-stone-100 text-stone-700 border-stone-200">
              <Tag className="w-3 h-3" />
              Genel
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              10 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Dünya Lipödeme Uyandı: Görmezden Gelinen Hastalığın Hikayesi
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem, kronik ve ilerleyici bir hastalıktır. Ekstremitelerde
            orantısız, ağrılı yağ birikimi ile karakterizedir ve neredeyse
            yalnızca kadınları etkiler. Ciddi fiziksel engelliliğe ve
            psikososyal sıkıntıya yol açmasına rağmen, onlarca yıl boyunca
            tıp dünyası tarafından görmezden gelinmiştir. Bu makale, lipödemin
            &quot;görünmez hastalık&quot; döneminden küresel farkındalığa uzanan
            yolculuğunu anlatıyor.
          </p>
        </div>
      </section>

      {/* ICERIK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="prose prose-stone prose-lg max-w-none">
            {/* BOLUM 1 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <History className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem ilk ne zaman tanımlandı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem ilk kez 1940 yılında
                    Allen ve Hines tarafından Mayo Klinik&apos;te tanımlanmıştır.
                    Ancak sonraki 70 yılda neredeyse hiç araştırılmadı ve
                    &quot;unutulan hastalık&quot; olarak kaldı.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  1940 yılında Amerikalı araştırmacılar Allen ve Hines, Mayo
                  Klinik&apos;te bacaklarında simetrik, ağrılı yağ birikimi olan
                  bir grup kadın hastayı tanımlayarak &quot;lipedema&quot; terimini
                  tıp literatürüne kazandırdı. Bu hastalar obez değildi; üst
                  bedenleri normal, alt bedenleri orantısız büyüktü. Diyetler
                  işe yaramıyordu.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Ne yazık ki bu keşif, tıp dünyasında beklenen etkiyi
                  yaratmadı. Sonraki onlarca yıl boyunca lipödem, dermatoloji
                  ve lenfatoloji ders kitaplarında birkaç satırla geçiştirildi.
                  Araştırma fonları ayrılmadı, klinik çalışmalar yapılmadı ve
                  milyonlarca kadın tanısız kaldı.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <EyeOff className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem neden bu kadar uzun süre görmezden gelindi?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kadın sağlığına yönelik
                    tarihsel önyargı, obezite ile karıştırılma, farkındalık
                    eksikliği ve araştırma fonlarının yetersizliği lipödemin
                    onlarca yıl boyunca &quot;görünmez&quot; kalmasına neden oldu.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin görmezden gelinmesinin ardında birbirine bağlı
                  birkaç sistemik sorun yatmaktadır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Cinsiyet önyargısı:</strong> Lipödem neredeyse
                      yalnızca kadınları etkiler. Kadın sağlığı sorunları
                      tarihsel olarak daha az araştırılmış ve daha az ciddiye
                      alınmıştır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Obezite damgası:</strong> Lipödemli kadınlar
                      &quot;kilolu&quot; olarak etiketlenmiş, ağrıları ve
                      şikayetleri &quot;kilo verseler geçer&quot; diye
                      geçiştirilmiştir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Tanı araçlarının yokluğu:</strong> Kesin bir
                      biyobelirteç veya görüntüleme yöntemi olmadığı için
                      &quot;gerçek bir hastalık&quot; olarak kabul edilmekte
                      gecikme yaşandı.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Fon eksikliği:</strong> Hastalık &quot;tanınmadığı&quot;
                      için araştırma fonları ayrılmadı; fon ayrılmadığı için
                      yeni veriler üretilemedi &mdash; bir kısır döngü.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BOLUM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Küresel farkındalık hareketi nasıl başladı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> 2000&apos;li yıllardan itibaren hasta
                    savunuculuk grupları, sosyal medya kampanyaları ve Avrupa
                    merkezli araştırma girişimleri lipödemi küresel gündemin
                    bir parçası haline getirdi. Almanya ve Hollanda bu
                    hareketin öncüleri oldu.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem farkındalığının dönüm noktası, hasta topluluklarının
                  kendi seslerini yükseltmeye başlamasıyla geldi. Almanya&apos;da
                  2000&apos;li yılların başında hasta dernekleri kuruldu; Hollanda,
                  İngiltere ve ABD&apos;de benzer örgütlenmeler hızla yayıldı.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Sosyal medya bu süreçte devrim yarattı. Lipödemli kadınlar
                  hikayelerini paylaştıkça, &quot;yalnız değilim&quot; farkındalığı
                  milyonlara ulaştı. Uluslararası Lipödem Derneği&apos;nin
                  kurulması, Dünya Sağlık Örgütü&apos;nün hastalığı ICD-11
                  kodlama sürecine alması ve Almanya&apos;nın liposuction&apos;ı sigorta
                  kapsamına dahil etmesi önemli kilometre taşları oldu.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Türkiye&apos;de ise farkındalık henüz başlangıç aşamasındadır.
                  Lipödem tanısı koyabilen hekim sayısı sınırlıdır ve hasta
                  topluluğu oluşum sürecindedir. Bu platform, Türkiye&apos;deki
                  farkındalık hareketinin bir parçası olmayı hedeflemektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <Scale className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Kilo vermek neden lipödemde işe yaramıyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağı, normal yağ
                    dokusundan farklıdır. Kalori kısıtlaması ve egzersiz
                    vücudun diğer bölgelerinden kilo kaybına yol açar, ancak
                    lipödemli bölgelerdeki yağ neredeyse hiç etkilenmez. Bu
                    durum hastayı daha da orantısız hale getirir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin en yıkıcı yönlerinden biri, diyet ve egzersizin
                  hastalıklı yağ dokusu üzerinde etkisiz olmasıdır. Normal
                  adipoz doku kalori açığında enerji kaynağı olarak kullanılır;
                  ancak lipödem yağ hücreleri bu metabolik sinyallere yanıt
                  vermez.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Sert diyet yapan lipödemli bir kadın, üst bedeninden,
                  yüzünden ve iç organlarının çevresindeki yağlardan kilo
                  verir &mdash; ancak bacak ve kollarındaki lipödem yağı
                  yerinde kalır. Sonuçta üst beden incecik, alt beden büyük
                  bir orantısızlık ortaya çıkar. Bu durum sadece fiziksel
                  değil, derin psikolojik yaralar da açar.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu gerçeği anlamak kritik öneme sahiptir: lipödem bir
                  &quot;irade eksikliği&quot; veya &quot;tembellik&quot; sonucu değildir.
                  Tıbbi bir durumdur ve tıbbi müdahale gerektirir. Diyetin
                  işe yaramaması, genel sağlık için beslenme düzeninin önemsiz
                  olduğu anlamına gelmez &mdash; anti-inflamatuar beslenme
                  semptomları hafifletebilir; ancak lipödem yağını eritemez.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Megaphone className="w-5 h-5 text-purple-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Siz de sesinizi yükseltebilirsiniz
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Farkındalık, tanıdan başlar.
                    Kendinizi bilgilendirin, hekiminizle konuşun, hasta
                    topluluklarına katılın. Her bir kadının hikayesi, lipödemin
                    görünür olmasına katkı sağlar.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem farkındalığı sadece araştırmacıların veya hekimlerin
                  sorumluluğunda değildir. Hastalar olarak sizin de yapabileceğiniz
                  çok şey var:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Bilgilenin:</strong> Bu hastalığı anlamak, tedavi
                      sürecinizin ilk adımıdır. Güvenilir kaynaklardan okuyun,
                      araştırma özetlerini takip edin.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hekiminizle konuşun:</strong> Lipödemi bilmeyen
                      bir hekimle karşılaşırsanız, bilimsel kaynakları paylaşın.
                      Doğru tanı, doğru tedavinin kapısını açar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Topluluk kurun:</strong> Sosyal medyada
                      hikayenizi paylaşın. Yalnız olmadığınızı &mdash; ve
                      başkalarının da yalnız olmadığını &mdash; gösterin.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Savunuculuk yapın:</strong> Sağlık politikası
                      yapıcılarına, sigorta şirketlerine ve medyaya lipödemin
                      tanınması için baskı uygulayın.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Dünya lipödeme uyandı. Türkiye&apos;nin de uyanma zamanı geldi.
                  Her adım, her paylaşım, her konuşma bu farkındalığı
                  büyütüyor. Siz de bu yolculuğun bir parçası olun.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SEMPTOM TESTI CTA */}
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

      {/* ILGILI MAKALELER */}
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

      {/* TIBBI DISCLAIMER */}
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
