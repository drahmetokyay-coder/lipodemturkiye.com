import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  AlertCircle,
  Quote,
  MapPin,
  Heart,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";

export const metadata: Metadata = {
  title:
    "10 Yıl Yanlış Tanı: Bir Lipödem Hastasının Hikayesi | Lipödem Türkiye",
  description:
    "A.K., 10 yıl boyunca obezite, tiroid ve depresyon tanısı aldı. Lipödem tanısına nasıl ulaştı? Gerçek bir hasta hikayesi.",
  openGraph: {
    title: "10 Yıl Yanlış Tanı: Bir Lipödem Hastasının Hikayesi",
    description:
      "A.K., 10 yıl boyunca yanlış tanı aldı. Lipödem tanısına nasıl ulaştı?",
  },
};

export default function HikayeAKPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
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
                  href="/hikayeler"
                  className="hover:text-purple-600 transition-colors"
                >
                  Hasta Hikayeleri
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-stone-800 font-medium">10 Yıl Yanlış Tanı</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-800 leading-tight tracking-tight font-serif">
            10 Yıl Yanlış Tanı
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700">
            Obezite dediler, tiroid dediler, depresyon dediler. 10 yıl boyunca
            yanlış kapıları çaldı. Lipödem tanısı, hayatının dönüm noktası oldu.
          </p>

          {/* Anonim bilgiler */}
          <div className="mt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-lg font-bold text-purple-600">A</span>
            </div>
            <div>
              <p className="font-semibold text-stone-800">A.K.</p>
              <div className="flex items-center gap-3 text-sm text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  İstanbul
                </span>
                <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-amber-50 text-amber-700 border-amber-200">
                  Evre 2
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HİKAYE İÇERİĞİ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* BAŞLANGIÇ */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-5 font-serif">
                Başlangıç: &ldquo;Sadece kilo almıştım, değil mi?&rdquo;
              </h2>

              <div className="relative bg-purple-50 border border-purple-100 rounded-xl p-6 mb-6">
                <Quote className="w-6 h-6 text-purple-200 absolute top-4 left-4" />
                <p className="text-stone-700 leading-relaxed font-serif italic pl-6">
                  &ldquo;Lise yıllarında başladı. Arkadaşlarımın hepsi ince
                  bacaklıydı, benimkiler hep kalındı. Annem &apos;bizim aile
                  böyle&apos; derdi. Ben de inandım.&rdquo;
                </p>
              </div>

              <p className="text-stone-700 leading-relaxed mb-4">
                A.K., ergenlik döneminde bacaklarının orantısız şekilde
                kalınlaştığını fark etti. Üst bedeni normal kalırken alt bedeni
                giderek büyüyordu. Diyetler yapıyordu, karın bölgesi
                inceliyordu ama bacakları hiç değişmiyordu.
              </p>

              <p className="text-stone-700 leading-relaxed">
                Ailesinde de benzer bir durum vardı &mdash; annesi ve teyzesi de
                bacaklarından şikayetçiydi. Ancak kimse bunu bir hastalık olarak
                görmemişti. &ldquo;Aile yapısı&rdquo; deyip geçilmişti.
              </p>
            </div>
          </ScrollReveal>

          {/* TANI SÜRECİ */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-5 font-serif">
                Tanı süreci: 10 yıl, 7 doktor, 0 doğru tanı
              </h2>

              <div className="relative bg-purple-50 border border-purple-100 rounded-xl p-6 mb-6">
                <Quote className="w-6 h-6 text-purple-200 absolute top-4 left-4" />
                <p className="text-stone-700 leading-relaxed font-serif italic pl-6">
                  &ldquo;Her doktora gittiğimde aynı şeyi duydum: &apos;Kilo
                  verin.&apos; Diyetisyenler, endokrinologlar, dahiliyeciler...
                  Hiçbiri bacaklarıma dokunup bakmadı bile. Tiroid testleri
                  normal çıkınca &apos;psikolojik&apos; dediler.&rdquo;
                </p>
              </div>

              <p className="text-stone-700 leading-relaxed mb-4">
                20&apos;li yaşlarında A.K., ciddi diyetler yapmaya başladı.
                Kalori saydı, spor salonuna düzenli gitti, hatta bir dönem
                çok düşük kalorili diyet uyguladı. Üst bedeni zayıfladı,
                yüzü inceldi ama bacakları aynı kaldı. Hatta morarmaları
                arttı.
              </p>

              <p className="text-stone-700 leading-relaxed mb-4">
                Doktorlar sırasıyla obezite, tiroid bozukluğu, hormonal
                dengesizlik ve depresyona bağlı yeme bozukluğu tanıları koydu.
                Antidepresan bile başlandı. A.K. kendini suçlu hissediyor,
                &ldquo;yeterince çabalamadığını&rdquo; düşünüyordu.
              </p>

              <p className="text-stone-700 leading-relaxed">
                Ta ki bir gün sosyal medyada lipödem hakkında bir paylaşım
                görene kadar. Belirtilerin hepsi &mdash; orantısız kalınlık,
                dokunma hassasiyeti, kolay morarma, diyete direnç &mdash;
                tıpatıp kendi durumunu tarif ediyordu.
              </p>
            </div>
          </ScrollReveal>

          {/* TEDAVİ YOLCULUĞU */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-5 font-serif">
                Tedavi yolculuğu: Doğru tanı, doğru adımlar
              </h2>

              <div className="relative bg-purple-50 border border-purple-100 rounded-xl p-6 mb-6">
                <Quote className="w-6 h-6 text-purple-200 absolute top-4 left-4" />
                <p className="text-stone-700 leading-relaxed font-serif italic pl-6">
                  &ldquo;Lipödem tanısını aldığım gün hem ağladım hem rahatladım.
                  Sonunda bir ismi vardı. Sorun ben değildim, iradem değildi.
                  Bu bir hastalıktı ve tedavisi vardı.&rdquo;
                </p>
              </div>

              <p className="text-stone-700 leading-relaxed mb-4">
                A.K., lipödem konusunda deneyimli bir uzmana ulaştıktan sonra
                tanısını aldı. Fiziksel muayene, detaylı anamnez ve
                ultrasonografi ile Evre 2 lipödem tanısı konuldu.
              </p>

              <p className="text-stone-700 leading-relaxed mb-4">
                Tedavi planı adım adım oluşturuldu: düz örgü kompresyon
                giysileri, haftada iki seans manuel lenfatik drenaj (MLD),
                anti-inflamatuar beslenme programı ve su içi egzersizler.
                İlk birkaç hafta içinde ağrılarında belirgin azalma fark etti.
              </p>

              <p className="text-stone-700 leading-relaxed">
                Altı aylık konservatif tedavi sonrasında cerrahi seçenekler
                de değerlendirildi. A.K. henüz ameliyat kararı almadı, ancak
                konservatif tedaviyle yaşam kalitesinin önemli ölçüde arttığını
                belirtiyor.
              </p>
            </div>
          </ScrollReveal>

          {/* BUGÜN */}
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-stone-800 mb-5 font-serif">
                Bugün: Lipödemle yaşamayı öğrenmek
              </h2>

              <div className="relative bg-purple-50 border border-purple-100 rounded-xl p-6 mb-6">
                <Quote className="w-6 h-6 text-purple-200 absolute top-4 left-4" />
                <p className="text-stone-700 leading-relaxed font-serif italic pl-6">
                  &ldquo;Lipödem bitmedi, bitmiyor da. Ama artık biliyorum ne
                  olduğunu, nasıl yöneteceğimi. Kendimi suçlamıyorum. Bu benim
                  hatam değildi. Ve en önemlisi &mdash; artık yalnız
                  değilim.&rdquo;
                </p>
              </div>

              <p className="text-stone-700 leading-relaxed mb-4">
                Bugün A.K., kompresyon giysilerini her gün kullanıyor, haftada
                üç gün havuzda yürüyüş yapıyor ve anti-inflamatuar beslenmeye
                devam ediyor. Ağrıları büyük ölçüde kontrol altında.
              </p>

              <p className="text-stone-700 leading-relaxed">
                En büyük kazanımının &ldquo;kendini suçlamamayı öğrenmek&rdquo;
                olduğunu söylüyor. Lipödem hakkında konuşmaktan, deneyimlerini
                paylaşmaktan artık çekinmiyor. Çünkü her paylaşılan hikayenin,
                henüz tanı alamamış bir kadına ulaşabileceğini biliyor.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* EMPATİ + CTA */}
      <section className="py-10 md:py-12 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <ScrollReveal>
            <div className="bg-purple-600 rounded-xl p-8 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-3 font-serif">
                    Bu hikaye size tanıdık geldi mi?
                  </h2>
                  <p className="text-purple-100 leading-relaxed mb-6">
                    Eğer yıllardır açıklayamadığınız belirtilerle
                    yaşıyorsanız, kendinizi suçluyorsanız veya doğru tanıyı
                    arayorsanız &mdash; yalnız değilsiniz. Bilimsel semptom
                    testimiz size bir başlangıç noktası sunabilir.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/araclar/semptom-testi"
                      className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-7 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                    >
                      Semptom Testini Başlat
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/hikayeler"
                      className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-7 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Diğer Hikayeleri Oku
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TIBBİ DISCLAIMER */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex items-start gap-3 text-sm text-stone-500">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-stone-600 mb-1">
                Gizlilik ve tıbbi sorumluluk reddi
              </p>
              <p className="leading-relaxed">
                Bu hikaye, hastanın izniyle anonim olarak paylaşılmıştır.
                Gerçek isim, soyisim veya tanımlayıcı kişisel bilgiler
                kullanılmamıştır. Hikayedeki deneyimler bireyseldir ve her
                hastanın durumu farklı olabilir. Lipödem tanı ve tedavisi için
                mutlaka alanında uzman bir sağlık profesyoneline başvurunuz.
                Daha fazla bilgi için{" "}
                <Link
                  href="/tibbi-sorumluluk-reddi"
                  className="text-purple-600 hover:text-purple-700 underline"
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
