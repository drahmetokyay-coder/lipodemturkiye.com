import Link from "next/link"
import {
  Activity,
  Heart,
  MapPin,
  ClipboardCheck,
  Utensils,
  Dumbbell,
  Brain,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Mail,
} from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50 py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight max-w-4xl mx-auto">
            Lipödem Hakkında Bilmeniz Gereken Her Şey — Tek Çatı Altında
          </h1>
          <p className="mt-6 text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Türkiye&apos;nin ilk kapsamlı lipödem hasta platformu. Bilimsel bilgi,
            interaktif araçlar, uzman klinik rehberi ve topluluk desteği.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/araclar/semptom-testi"
              className="bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              2 Dakikalık Semptom Testini Çöz
            </Link>
            <Link
              href="/lipodem-nedir"
              className="border border-teal-600 text-teal-600 px-7 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
            >
              Lipödem Nedir? Öğrenin
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 - EMPATİ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-800">
            Size de mi &quot;kilo ver&quot; diyorlar?
          </h2>
          <p className="mt-6 text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Yıllardır diyet yapıyorsunuz ama bacaklarınız incelmiyor. Üst bedeniniz
            zayıflıyor, alt bedeniniz aynı kalıyor. Doktorlar &quot;daha çok hareket
            et&quot; diyor ama hiçbir şey değişmiyor. Kendinizi suçluyorsunuz.
          </p>
          <p className="mt-6 text-xl md:text-2xl font-bold text-teal-600">
            Bu sizin hatanız değil.
          </p>
        </div>
      </section>

      {/* SECTION 3 - İSTATİSTİKLER */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-stone-200 p-6 text-center">
              <p className="text-5xl md:text-6xl font-extrabold text-teal-600 tracking-tighter">
                370M+
              </p>
              <p className="mt-3 text-stone-600 font-medium">
                Dünya genelinde etkilenen kadın
              </p>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 p-6 text-center">
              <p className="text-5xl md:text-6xl font-extrabold text-teal-600 tracking-tighter">
                %51
              </p>
              <p className="mt-3 text-stone-600 font-medium">
                Türk doktorlarının farkındalık oranı
              </p>
            </div>
            <div className="bg-white rounded-xl border border-stone-200 p-6 text-center">
              <p className="text-5xl md:text-6xl font-extrabold text-teal-600 tracking-tighter">
                10+ yıl
              </p>
              <p className="mt-3 text-stone-600 font-medium">
                Ortalama tanı gecikmesi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - 6 SÜTUN KARTLARI */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-800 text-center mb-12">
            Kapsamlı Lipödem Rehberi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/lipodem-nedir"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <Activity className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Tanı &amp; Farkındalık
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Lipödem nedir, nasıl anlaşılır, evreleri nelerdir?
              </p>
              <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium">
                Keşfet <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/lipodem-tedavisi"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <Heart className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Tedavi Yol Haritası
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Konservatif tedaviden cerrahiye tüm seçenekler.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium">
                Keşfet <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/lipodem-beslenme"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <Utensils className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Beslenme
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Anti-inflamatuar beslenme ve lipödem diyeti.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium">
                Keşfet <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/lipodem-egzersiz"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <Dumbbell className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Egzersiz
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Lipödeme uygun hareket ve egzersiz programları.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium">
                Keşfet <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/lipodem-ruh-sagligi"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <Brain className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Ruh Sağlığı
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Psikolojik destek, beden imajı ve başa çıkma.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium">
                Keşfet <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/lipodem-turkiye-rehberi"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all group"
            >
              <MapPin className="w-8 h-8 text-teal-600 mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Türkiye Rehberi
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Şehir bazlı klinikler, doktorlar ve SGK bilgisi.
              </p>
              <span className="mt-4 inline-flex items-center text-teal-600 text-sm font-medium">
                Keşfet <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 - ARAÇLAR */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-stone-800 text-center mb-12">
            Size özel araçlarımız
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/araclar/semptom-testi"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all text-center group"
            >
              <ClipboardCheck className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Semptom Testi
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                2 dakikada risk değerlendirmesi
              </p>
            </Link>

            <Link
              href="/araclar/evre-degerlendirme"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all text-center group"
            >
              <Activity className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Evre Değerlendirme
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Lipödem evrenizi öğrenin
              </p>
            </Link>

            <Link
              href="/araclar/klinik-bulucu"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all text-center group"
            >
              <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Klinik Bulucu
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Size en yakın uzman klinikleri bulun
              </p>
            </Link>

            <Link
              href="/araclar/maliyet-hesaplayici"
              className="bg-white rounded-xl border border-stone-200 p-6 hover:shadow-lg hover:border-teal-200 transition-all text-center group"
            >
              <BookOpen className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-stone-800 group-hover:text-teal-600 transition-colors">
                Maliyet Hesaplayıcı
              </h3>
              <p className="mt-2 text-stone-500 text-sm">
                Tedavi maliyetlerini karşılaştırın
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 - GÜVEN SİNYALLERİ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
              <p className="font-semibold text-stone-800">Bilimsel kaynaklı</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
              <p className="font-semibold text-stone-800">
                20+ peer-reviewed araştırma
              </p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
              <p className="font-semibold text-stone-800">Bağımsız platform</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-teal-600 mb-3" />
              <p className="font-semibold text-stone-800">Uzman incelemeli</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - NEWSLETTER */}
      <section className="py-16 md:py-20 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <Mail className="w-10 h-10 text-teal-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-stone-800">
            Haftalık lipödem bilgisi, doğrudan e-postanıza
          </h2>
          <p className="mt-4 text-stone-600 max-w-xl mx-auto">
            En yeni araştırmalar, pratik ipuçları ve topluluk haberleri her hafta
            gelen kutunuzda.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap"
            >
              Ücretsiz Abone Ol
            </button>
          </form>
          <p className="mt-4 text-sm text-stone-400">
            Bilgileriniz gizlidir. Spam yok.
          </p>
        </div>
      </section>
    </>
  )
}
