import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Mic2,
  BookOpen,
  Heart,
  CheckCircle2,
  Mail,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "1. Ulusal Lipödem Kongresi 2026 | 6-7 Haziran Ankara | Lipödem Türkiye",
  description:
    "Türkiye'nin ilk Ulusal Lipödem Kongresi, 6-7 Haziran 2026'da Ankara'da düzenleniyor. Güncel bilimsel gelişmeler, uzman konuşmacılar ve hasta perspektifi.",
};

const kongreDetaylari = [
  {
    icon: Calendar,
    baslik: "Tarih",
    deger: "6-7 Haziran 2026",
  },
  {
    icon: MapPin,
    baslik: "Konum",
    deger: "Ankara",
  },
  {
    icon: Clock,
    baslik: "Süre",
    deger: "2 tam gün",
  },
  {
    icon: Users,
    baslik: "Hedef kitle",
    deger: "Sağlık profesyonelleri ve hastalar",
  },
];

const konular = [
  "Lipödem tanı kriterleri ve güncel konsensüs (2025 Delphi)",
  "Konservatif tedavi yöntemleri ve etkinliği",
  "Cerrahi tedavi seçenekleri: Liposuction ve WAL",
  "Anti-inflamatuar beslenme ve lipödem",
  "Kompresyon tedavisi ve manuel lenfatik drenaj",
  "Lipödem ve psikolojik etkileri",
  "Türkiye'de lipödem farkındalığı ve mevcut durum",
  "Hasta deneyimleri ve yaşam kalitesi",
];

const katilimciFaydalari = [
  "Alanında uzman konuşmacılardan güncel bilimsel bilgiler",
  "Lipödem tanı ve tedavisinde pratik yaklaşımlar",
  "Hasta-doktor iletişimi panelleri",
  "Networking ve deneyim paylaşım fırsatları",
  "Kongre katılım sertifikası",
  "Lipödem Türkiye premium içeriklere özel erişim",
];

export default function LipodemKongresi2026Page() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-20">
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
              <li className="text-stone-800 font-medium">
                Lipödem Kongresi 2026
              </li>
            </ol>
          </nav>

          {/* Etkinlik Rozeti */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A6B5A]/10 border border-[#93D4BE] mb-6">
            <Calendar className="w-4 h-4 text-[#1A6B5A]" />
            <span className="text-sm font-semibold text-[#15594A]">
              6-7 Haziran 2026 | Ankara
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            1. Ulusal Lipödem Kongresi
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700 max-w-3xl">
            Türkiye&apos;nin ilk ulusal lipödem kongresi, güncel bilimsel
            gelişmeleri, uzman konuşmacıları ve hasta perspektifini bir araya
            getiriyor. Lipödem alanında farkındalık ve bilgi paylaşımı için
            tarihi bir buluşma.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:kongre@lipodemturkiye.com"
              className="inline-flex items-center justify-center gap-2 bg-[#1A6B5A] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#15594A] transition-colors"
            >
              Kongre Hakkında Bilgi Alın
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-7 py-3 rounded-lg font-semibold hover:bg-stone-50 transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>

      {/* KONGRE DETAYLARI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {kongreDetaylari.map((detay) => (
              <div
                key={detay.baslik}
                className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-center"
              >
                <detay.icon className="w-6 h-6 text-[#1A6B5A] mx-auto mb-3" />
                <p className="text-xs text-stone-500 uppercase tracking-wider font-medium mb-1">
                  {detay.baslik}
                </p>
                <p className="text-sm font-bold text-stone-800">
                  {detay.deger}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONGRE HAKKINDA */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
            Kongre hakkında
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-base md:text-lg leading-relaxed text-stone-700">
              1. Ulusal Lipödem Kongresi, Türkiye&apos;de lipödem alanındaki
              ilk büyük ölçekli bilimsel etkinliktir. Kongre, sağlık
              profesyonellerini, araştırmacıları ve hastaları bir araya
              getirerek lipödem konusundaki en güncel bilimsel gelişmeleri
              paylaşmayı, farkındalığı artırmayı ve hasta bakım kalitesini
              yükseltmeyi hedeflemektedir.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-stone-700">
              Türkiye&apos;de tahminen 2.5-4.5 milyon kadını etkileyen lipödem,
              hala yeterince tanınmamakta ve sıklıkla yanlış teşhis
              edilmektedir. Bu kongre, lipödem konusunda Türkiye&apos;deki
              bilgi ve farkındalık boşluğunu kapatmak için önemli bir adım
              olacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* KONULAR */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-6">
            <Mic2 className="w-6 h-6 text-[#1A6B5A]" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
              Kongre konuları
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {konular.map((konu) => (
              <div
                key={konu}
                className="flex items-start gap-3 bg-stone-50 rounded-lg p-4 border border-stone-200"
              >
                <BookOpen className="w-5 h-5 text-[#1A6B5A] shrink-0 mt-0.5" />
                <span className="text-stone-700 text-sm leading-relaxed">
                  {konu}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KATILIMCI FAYDALARI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
            Katılımcılara sağlanan faydalar
          </h2>
          <div className="bg-white rounded-xl p-6 md:p-8 border border-stone-200">
            <ul className="space-y-4">
              {katilimciFaydalari.map((fayda) => (
                <li key={fayda} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1A6B5A] shrink-0 mt-0.5" />
                  <span className="text-stone-700 leading-relaxed">
                    {fayda}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* KONGRE KATILIMCISI MISINIZ? */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-[#15594A] to-[#10473B] rounded-xl p-8 md:p-10 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  Kongre katılımcısı mısınız?
                </h2>
                <p className="text-[#E8F5F0] leading-relaxed mb-6">
                  Kongre katılımcılarına özel Lipödem Türkiye premium
                  içeriklerine erişim, klinik rehber ve interaktif
                  araçlarımıza ücretsiz erişim sağlıyoruz. Ayrıca kongre
                  süresince platformumuzu ziyaret ederek güncel lipödem
                  bilgilerine ulaşabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/araclar/semptom-testi"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[#15594A] px-6 py-3 rounded-lg font-semibold hover:bg-[#E8F5F0] transition-colors"
                  >
                    Semptom Testini Deneyin
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/lipodem-nedir"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Lipödem Rehberine Git
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LİPÖDEM TÜRKİYE TANITIMI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
            Lipödem Türkiye hakkında
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-6">
            Lipödem Türkiye, Türkiye&apos;nin ilk ve tek kapsamlı lipödem hasta
            platformudur. 2025 Delphi Konsensüsü ve 2024 Alman S2k Kılavuzu
            gibi en güncel bilimsel kaynaklara dayalı içerikler, interaktif
            araçlar, uzman klinik rehberi ve topluluk desteği sunmaktadır.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { ikon: BookOpen, metin: "Bilimsel içerik" },
              { ikon: Users, metin: "Topluluk desteği" },
              { ikon: MapPin, metin: "Klinik rehberi" },
              { ikon: Heart, metin: "Hasta odaklı" },
            ].map((item) => (
              <div
                key={item.metin}
                className="flex flex-col items-center text-center bg-white rounded-xl p-5 border border-stone-200"
              >
                <item.ikon className="w-6 h-6 text-[#1A6B5A] mb-2" />
                <span className="text-sm font-semibold text-stone-700">
                  {item.metin}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Kongre hakkında bilgi almak ister misiniz?
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Katılım, sponsorluk veya konuşmacı başvurusu için bizimle
            iletişime geçebilirsiniz.
          </p>
          <a
            href="mailto:kongre@lipodemturkiye.com"
            className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#15594A] transition-colors shadow-lg shadow-[#1A6B5A]/20"
          >
            <Mail className="w-5 h-5" />
            kongre@lipodemturkiye.com
          </a>
        </div>
      </section>
    </article>
  );
}
