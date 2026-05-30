import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  ShieldCheck,
  HeartPulse,
  Brain,
  HelpCircle,
  Beaker,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Lipödem Yağı: Vücudu Hem Koruyan Hem Zorlayan Paradoks | Lipödem Türkiye",
  description:
    "Lipödem yağının metabolik paradoksu: ağrı ve psikolojik yük oluştururken neden diyabet, dislipidemi ve hipertansiyon riski düşük kalır?",
  openGraph: {
    title: "Lipödem Yağı: Vücudu Hem Koruyan Hem Zorlayan Paradoks",
    description:
      "Lipödem yağının çift yüzü: metabolik koruma sağlarken fiziksel ve psikolojik yük oluşturması.",
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

export default function LipodemDostDusmanPage() {
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
              <li className="text-stone-800 font-medium">Metabolik Paradoks</li>
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
              8 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Lipödem Yağı: Vücudu Hem Koruyan Hem Zorlayan Paradoks
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Lipödem ağrı ve psikolojik sıkıntıya neden olurken, araştırmalar
            şaşırtıcı bir gerçeği ortaya koyuyor: lipödemli hastaların
            diyabet riski sadece %2, dislipidemi %11.7 ve hipertansiyon %13
            &mdash; obez ortalama BKİ&apos;ye rağmen. Bu paradoks, lipödem
            yağının normal yağdan farklı davrandığını gösteriyor.
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
                  <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Metabolik paradoks nedir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemli hastalar yüksek
                    BKİ&apos;ye sahip olmalarına rağmen, obeziteyle ilişkili
                    metabolik hastalıklardan (diyabet, dislipidemi,
                    hipertansiyon) beklenenden çok daha az etkilenir. Bu
                    durum &quot;metabolik olarak sağlıklı obezite&quot; kavramıyla
                    ilişkilendirilmektedir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Obezite genellikle tip 2 diyabet, yüksek kolesterol ve
                  hipertansiyon gibi metabolik bozukluklarla güçlü bir
                  şekilde ilişkilidir. Ancak lipödemli hastalarda bu ilişki
                  beklenen şekilde gerçekleşmez.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Araştırmalar, lipödemli hastaların ortalama BKİ&apos;sinin obez
                  kategoride olmasına rağmen, diyabet prevalansının sadece %2,
                  dislipidemi (yağ metabolizması bozukluğu) prevalansının
                  %11.7 ve hipertansiyon prevalansının %13 olduğunu ortaya
                  koymuştur. Bu oranlar, aynı BKİ aralığındaki obez bireylere
                  kıyasla çarpıcı şekilde düşüktür.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Metabolik risk karşılaştırması:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      <strong>Diyabet:</strong> Lipödemde %2 vs. benzer
                      BKİ&apos;de obezitede %15&ndash;20
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      <strong>Dislipidemi:</strong> Lipödemde %11.7 vs.
                      obezitede %30&ndash;40
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] mt-2 shrink-0" />
                      <strong>Hipertansiyon:</strong> Lipödemde %13 vs.
                      obezitede %30&ndash;50
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* BOLUM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                    <HeartPulse className="w-5 h-5 text-blue-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Daha düşük diyabet ve hipertansiyon riski nasıl açıklanıyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağı ağırlıklı olarak
                    subkutan (deri altı) bölgede birikir ve visseral
                    (iç organ çevresi) yağlanmaya yol açmaz. Metabolik
                    hastalıkların asıl tetikleyicisi visseral yağdır; bu
                    nedenle lipödemli hastalar metabolik olarak daha korunaklı
                    kalabilir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Metabolik hastalıkların temel sürücüsü, iç organların
                  çevresinde biriken <strong>visseral yağ</strong>&apos;dır.
                  Visseral yağ, inflamatuar sitokinler salgılayarak insülin
                  direnci, vasküler hasar ve yağ metabolizması bozukluğuna
                  yol açar.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Lipödem yağı ise ağırlıklı olarak{" "}
                  <strong>subkutan</strong> (deri altı) bölgede, özellikle
                  alt ekstremitelerde birikir. Bu yağ dokusu, visseral
                  yağdan farklı bir metabolik profil sergiler. Subkutan yağ,
                  insülin duyarlılığı üzerinde nötr veya hafif koruyucu etki
                  gösterebilir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bir başka hipotez, lipödem yağ dokusunun &quot;metabolik
                  olarak aktif olmayan&quot; bir depo gibi davrandığıdır
                  &mdash; yani serbest yağ asitlerini dolaşıma salmaz ve
                  karaciğer, pankreas gibi organları etkilemez. Bu teori
                  heyecan verici olmakla birlikte, kontrollü çalışmalarla
                  doğrulanmayı beklemektedir.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 3 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <HelpCircle className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Lipödem yağı neden farklı davranıyor?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem yağ hücreleri yapısal
                    ve fonksiyonel olarak normal yağ hücrelerinden farklıdır.
                    Daha büyüktürler, farklı gen ekspresyon profilleri
                    gösterirler ve kalori kısıtlamasına yanıt vermezler.
                    Kesin mekanizmalar hala araştırılmaktadır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem yağ dokusu birçok açıdan &quot;sıradan&quot; yağdan
                  ayrılır:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hücre boyutu:</strong> Lipödem adipositleri
                      (yağ hücreleri) normal subkutan yağ hücrelerine göre
                      belirgin şekilde daha büyüktür (hipertrofi).
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hücre sayısı:</strong> Yağ hücre sayısı da
                      artmıştır (hiperplazi) &mdash; bu çift mekanizma
                      lipödem yağının inatçılığını açıklar.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Lipoliz direnci:</strong> Lipödem yağ hücreleri,
                      katekolaminlerin (adrenalin, noradrenalin) yağ yakım
                      sinyaline dirençlidir. Bu nedenle egzersiz ve diyet
                      bu yağı mobilize edemez.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Damar yapısı:</strong> Yağ dokusu içindeki
                      mikrovasküler yapı bozulmuştur; kapiller
                      geçirgenlik artmıştır, bu da kronik ödeme ve kolay
                      morarmaya yol açar.
                    </span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* BOLUM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center shrink-0 mt-1">
                    <Brain className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Psikolojik etki: görünmeyen yara
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemin metabolik
                    koruması, hastalığın psikolojik yükünü hafifletmez. Vücut
                    algısı bozukluğu, depresyon, anksiyete ve sosyal
                    izolasyon lipödemli kadınlarda son derece yaygındır.
                    Psikolojik destek tedavinin ayrılmaz bir parçası
                    olmalıdır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin metabolik koruma sağlaması, hastalığın
                  &quot;zararsız&quot; olduğu anlamına gelmez. Psikolojik
                  boyutu son derece yıkıcıdır. Araştırmalar, lipödemli
                  kadınların genel popülasyona kıyasla çok daha yüksek
                  oranlarda depresyon, anksiyete ve yeme bozukluğu
                  yaşadığını göstermektedir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Sürekli ağrı, hareket kısıtlılığı ve vücudun orantısız
                  görünümü kadınların özgüvenini derinden sarsar. Toplumun
                  &quot;kilo ver, düzelir&quot; baskısı, diyetlerin işe
                  yaramaması ve hekimlerin ciddiye almaması bu psikolojik
                  yükü katlanarak artırır. Sosyal ortamlardan çekilme,
                  kıyafet seçiminde zorluk ve cinsel yaşamda problemler
                  sıklıkla bildirilen şikayetlerdir.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Bu nedenle lipödem tedavisi bütüncül olmalıdır: fiziksel
                  tedavinin yanı sıra psikolojik destek, hasta destek
                  grupları ve gerektiğinde profesyonel psikoterapi tedavinin
                  ayrılmaz parçaları olmalıdır. Yalnız olmadığınızı bilmek,
                  iyileşmenin ilk adımıdır.
                </p>
              </div>
            </ScrollReveal>

            {/* BOLUM 5 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center shrink-0 mt-1">
                    <Beaker className="w-5 h-5 text-purple-500" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Kontrollü çalışmalara neden ihtiyaç var?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödem hakkındaki mevcut
                    veriler ağırlıklı olarak gözlemsel çalışmalardan ve vaka
                    serilerinden gelmektedir. Metabolik paradoksun
                    mekanizmalarını anlamak ve tedavi etkinliğini kanıtlamak
                    için randomize kontrollü çalışmalar şarttır.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem araştırmalarının en büyük sınırlılığı, yüksek
                  kanıt düzeyine sahip çalışmaların azlığıdır. Metabolik
                  paradoks dahil pek çok bulgu, küçük örneklemli gözlemsel
                  çalışmalardan gelmektedir. Bu durum sonuçların
                  genellenebilirliğini sınırlar.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Randomize kontrollü çalışmalar:</strong>{" "}
                      Liposuction, KDT ve diğer tedavilerin etkinliğini
                      karşılaştıran prospektif çalışmalar yapılmalıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Büyük kohort çalışmaları:</strong> Metabolik
                      paradoksun boyutunu ve uzun vadeli sonuçlarını anlamak
                      için geniş hasta popülasyonları takip edilmelidir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Temel bilim araştırmaları:</strong> Lipödem
                      adipositlerinin moleküler düzeyde neden farklı
                      davrandığının çözülmesi gerekiyor.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hasta raporlu sonuçlar:</strong> Tedavi
                      çalışmalarında hastaların yaşam kalitesi, ağrı
                      düzeyi ve psikolojik durumu birincil sonlanım
                      noktası olarak değerlendirilmelidir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Lipödem yağının &quot;dost mu düşman mı&quot; sorusunun
                  kesin yanıtı ancak daha fazla araştırmayla gelecektir.
                  Ama şu anda bile bildiğimiz bir şey var: lipödem ciddi,
                  gerçek ve tedavi edilebilir bir hastalıktır. Araştırma
                  fonlarına ve siyasi iradeye ihtiyaç vardır.
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
