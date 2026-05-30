import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  AlertCircle,
  Waves,
  Dumbbell,
  Activity,
  ListChecks,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "Egzersiz Lipödemi Tedavi Edebilir mi? İtalyan Bilim Konsensüsü | Lipödem Türkiye",
  description:
    "Su egzersizleri, kuvvet antrenmanı ve lenfatik drenaj: İtalyan bilim konsensüsüne göre lipödemde egzersizin terapötik etkileri ve pratik öneriler.",
  openGraph: {
    title: "Egzersiz Lipödemi Tedavi Edebilir mi? İtalyan Bilim Konsensüsü",
    description:
      "Lipödemde egzersizin bilimsel kanıtlarla desteklenen faydaları: su egzersizleri, kuvvet antrenmanı ve pratik öneriler.",
  },
};

const ilgiliYazilar = [
  {
    baslik: "Lipödem: Klinik Özellikler, Tanı ve Modern Tedavi Yaklaşımları",
    slug: "/blog/lipodem-klinik-ozellikler-tani-tedavi",
    kategori: "Tedavi",
  },
  {
    baslik: "Almanya S2k Lipödem Kılavuzu: 60 Uzman Önerisi Ne Diyor?",
    slug: "/blog/almanya-s2k-lipodem-kilavuzu",
    kategori: "Araştırma",
  },
  {
    baslik: "Lenfödem mi Lipödem mi? İkisini Ayırt Etmenin Pratik Kılavuzu",
    slug: "/blog/lenfodem-mi-lipodem-mi-farklar",
    kategori: "Genel",
  },
];

export default function LipodemEgzersizTedaviKonsensusPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-cyan-50 to-blue-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">Egzersiz ve Lipödem</li>
            </ol>
          </nav>

          {/* Meta bilgileri */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-stone-500">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border bg-[#E8F5F0] text-[#15594A] border-[#93D4BE]">
              <Tag className="w-3 h-3" />
              Tedavi
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              23 Mayıs 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              7 dk okuma
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            Egzersiz Lipödemi Tedavi Edebilir mi? İtalyan Bilim Konsensüsü
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Egzersiz uzun yıllar lipödem tedavisinde ikinci plana atılmıştır.
            Ancak İtalyan bilim konsensüsü, egzersizin non-farmakolojik bir
            yaklaşım olarak lipödem yönetiminde kritik bir rol oynadığını
            ortaya koymaktadır. Su egzersizleri, kuvvet antrenmanı ve
            lenfatik drenajı destekleyen aktiviteler &mdash; bilimsel
            kanıtlarla desteklenen faydalar sunmaktadır.
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
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-1">
                    <Activity className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Egzersiz lipödemde neden uzun süre hafife alındı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Lipödemde yağ dokusu diyete
                    ve egzersize dirençli olduğu için, egzersizin
                    &quot;işe yaramadığı&quot; düşüncesi yaygınlaştı. Ancak
                    egzersizin asıl faydası yağ yakımı değil; ağrı azalması,
                    lenf drenajı iyileşmesi ve inflamasyon kontrolüdür.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Lipödemin tanımlayıcı özelliklerinden biri, etkilenen
                  bölgelerdeki yağ dokusunun kalori kısıtlamasına ve egzersize
                  dirençli olmasıdır. Bu durum, hem hastaların hem de sağlık
                  profesyonellerinin egzersizin lipödemde etkisiz olduğu
                  sonucuna varmasına yol açmıştır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Ancak İtalyan bilim konsensüsü, egzersizin lipödemdeki
                  rolünü tamamen farklı bir perspektiften ele almaktadır.
                  Egzersizin birincil hedefi yağ kaybı değil; aksine
                  mitokondriyal fonksiyonun iyileşmesi, lenfatik drenajın
                  güçlenmesi, kronik inflamasyonun azalması ve genel yaşam
                  kalitesinin artmasıdır.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  Konsensüs bildirisinde ayrıca egzersizin lipödemli
                  hastalarda ağrı eşiğini yükselttiği, duygudurum
                  düzenlenmesine katkı sağladığı ve fonksiyonel kapasiteyi
                  artırdığı vurgulanmaktadır. Bu nedenle egzersiz, lipödem
                  tedavisinin vazgeçilmez bir bileşeni olarak
                  değerlendirilmelidir.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 2 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0 mt-1">
                    <Waves className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Su egzersizleri neden lipödem için idealdir?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Suyun hidrostatik basıncı
                    doğal kompresyon etkisi yaratır, eklemlere binen yükü
                    azaltır ve lenfatik drenajı destekler. Aqua aerobik,
                    havuz yürüyüşü ve yüzme lipödem hastaları için en çok
                    önerilen egzersiz türleridir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  İtalyan konsensüs bildirisi, su egzersizlerini lipödem
                  hastaları için birinci tercih olarak öne çıkarmaktadır.
                  Suyun fiziksel özellikleri lipödemli bireyler için eşsiz
                  avantajlar sunar:
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Hidrostatik basınç:</strong> Su, vücuda dışarıdan
                      homojen bir basınç uygular. Bu etki kompresyon
                      giysisine benzer şekilde ödemi azaltır ve lenfatik
                      drenajı destekler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Kaldırma kuvveti:</strong> Suyun kaldırma
                      kuvveti vücut ağırlığının %90&apos;ına kadarını
                      taşır. Bu sayede eklemlere binen yük azalır ve
                      ağrısız hareket mümkün olur.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Termoregülasyon:</strong> Serin suda
                      (28&ndash;32&deg;C) egzersiz yapılması
                      vazodilatasyonu önler ve semptom alevlenmesi riskini
                      azaltır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2.5 shrink-0" />
                    <span>
                      <strong>Aqua aerobik:</strong> Müzik eşliğinde yapılan
                      su egzersizleri hem fiziksel hem de psikolojik fayda
                      sağlar. Sosyal etkileşim motivasyonu artırır.
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
                    <Dumbbell className="w-5 h-5 text-[#1A6B5A]" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Kuvvet antrenmanı lipödeme nasıl fayda sağlar?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Kuvvet antrenmanı kas
                    pompası mekanizmasını güçlendirerek lenfatik drenajı
                    iyileştirir, insülin duyarlılığını artırır ve
                    mitokondriyal fonksiyonu destekler. Düşük-orta
                    yoğunlukta, kompresyon giysisiyle yapılan kuvvet
                    egzersizleri önerilmektedir.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Konsensüs bildirisi, kuvvet antrenmanının lipödem
                  hastalarında birçok mekanizma üzerinden fayda sağladığını
                  belirtmektedir. Kas kasılması sırasında oluşan
                  &quot;kas pompası&quot; etkisi, venöz ve lenfatik dönüşü
                  destekler. Bu durum özellikle alt ekstremitelerdeki ödem
                  kontrolü için kritiktir.
                </p>

                <ul className="space-y-2 mt-4 mb-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Kas pompası:</strong> Bacak kaslarının ritmik
                      kasılması, ven ve lenf damarlarındaki valf
                      mekanizmasını destekleyerek sıvı drenajını artırır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>Mitokondriyal fonksiyon:</strong> Düzenli
                      kuvvet antrenmanı hücresel enerji üretimini
                      iyileştirerek yağ dokusu metabolizmasını olumlu
                      etkiler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>İnflamasyon kontrolü:</strong> Egzersiz
                      sırasında salınan miyokinler (kas kaynaklı
                      sitokinler) anti-inflamatuar etki göstererek
                      lipödemdeki kronik inflamasyonu azaltır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D8B73] mt-2.5 shrink-0" />
                    <span>
                      <strong>İnsülin duyarlılığı:</strong> Kuvvet antrenmanı
                      insülin direncini azaltarak metabolik sağlığı
                      destekler. Bu durum, lipödeme sıklıkla eşlik eden
                      metabolik bozuklukların yönetiminde önemlidir.
                    </span>
                  </li>
                </ul>

                <p className="text-stone-700 leading-relaxed">
                  Konsensüs, kuvvet antrenmanının düşük-orta yoğunlukta
                  başlatılıp kademeli olarak artırılmasını önerir. Kompresyon
                  giysisi giyilerek yapılmalı ve yüksek etkili, zıplama
                  içeren hareketlerden kaçınılmalıdır.
                </p>
              </div>
            </ScrollReveal>

            {/* BÖLÜM 4 */}
            <ScrollReveal>
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1">
                    <ListChecks className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stone-800 font-serif mt-0">
                    Pratik egzersiz önerileri: Nereden başlamalı?
                  </h2>
                </div>

                <div className="bg-[#E8F5F0] border border-[#E8F5F0] rounded-xl p-5 mb-5">
                  <p className="text-stone-700 text-sm leading-relaxed m-0">
                    <strong>Kısa cevap:</strong> Haftada 3&ndash;5 gün, 30&ndash;45
                    dakika; su egzersizleri + hafif kuvvet antrenmanı
                    kombinasyonu idealdir. Her zaman kompresyon giysisiyle
                    yapın, kademeli başlayın ve vücudunuzu dinleyin.
                  </p>
                </div>

                <p className="text-stone-700 leading-relaxed">
                  Konsensüs bildirisi, lipödem hastaları için somut ve
                  uygulanabilir öneriler sunmaktadır. Egzersiz programı
                  bireysel kapasiteye göre uyarlanmalı ve kademeli olarak
                  artırılmalıdır.
                </p>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mt-4">
                  <h3 className="font-semibold text-stone-800 text-base mb-3">
                    Haftalık egzersiz planı önerisi:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>
                        <strong>Pazartesi &amp; Perşembe:</strong> Su
                        egzersizi (aqua aerobik veya havuz yürüyüşü)
                        &mdash; 30&ndash;45 dk
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>
                        <strong>Salı &amp; Cuma:</strong> Hafif kuvvet
                        antrenmanı (vücut ağırlığı veya hafif dambıl)
                        &mdash; 20&ndash;30 dk
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>
                        <strong>Çarşamba:</strong> Yürüyüş veya bisiklet
                        (düz zemin, orta tempo) &mdash; 30 dk
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-stone-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                      <span>
                        <strong>Hafta sonu:</strong> Yoga veya pilates (esneme
                        ve nefes çalışması) &mdash; 20&ndash;30 dk
                      </span>
                    </li>
                  </ul>
                </div>

                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      Her zaman kompresyon giysisiyle egzersiz yapın;
                      kompresyon kas pompası etkisini güçlendirir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      Ağrı arttığında durun ve yoğunluğu azaltın. &quot;Ağrıya
                      rağmen devam&quot; yaklaşımı lipödemde zararlıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      Egzersiz sonrası bacakları 15&ndash;20 dakika yukarı
                      kaldırarak dinlenin. Bu uygulama venöz dönüşü
                      destekler.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5 shrink-0" />
                    <span>
                      Yeterli hidrasyon sağlayın. Egzersiz öncesi, sırası
                      ve sonrasında su tüketimini artırın.
                    </span>
                  </li>
                </ul>
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
