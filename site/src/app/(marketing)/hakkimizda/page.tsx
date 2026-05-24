import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Target,
  Eye,
  BookOpen,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | Lipödem Türkiye",
  description:
    "Lipödem Türkiye, Türkiye'nin ilk kapsamlı lipödem hasta platformudur. Misyonumuz lipödem farkındalığını artırmak, doğru bilgiye erişimi kolaylaştırmaktır.",
};

const istatistikler = [
  { rakam: "2.5–4.5M", aciklama: "Türkiye'de tahmini lipödem hastası" },
  { rakam: "%51", aciklama: "Türk doktorlarının lipödem farkındalık oranı" },
  { rakam: "10+ yıl", aciklama: "Ortalama tanı gecikmesi süresi" },
  { rakam: "%11", aciklama: "Dünya genelinde kadınlarda görülme oranı" },
];

const kaynaklar = [
  "2025 Delphi Konsensüsü (Uluslararası Lipödem Uzlaşı Belgesi)",
  "2024 Alman S2k Lipödem Kılavuzu",
  "Peer-reviewed akademik araştırmalar ve meta-analizler",
  "Uluslararası lipödem derneklerinin güncel verileri",
];

export default function HakkimizdaPage() {
  return (
    <article>
      {/* HERO */}
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
              <li className="text-stone-800 font-medium">Hakkımızda</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Hakkımızda
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700 max-w-3xl">
            Lipödem Türkiye, Türkiye&apos;nin ilk ve tek kapsamlı lipödem hasta
            platformudur. Bilimsel verilere dayalı, tarafsız ve hasta odaklı
            yaklaşımımızla lipödem farkındalığını artırmak ve doğru bilgiye
            erişimi kolaylaştırmak için çalışıyoruz.
          </p>
        </div>
      </section>

      {/* MİSYON & VİZYON */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-50 rounded-xl p-8 border border-teal-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                  <Target className="w-5 h-5 text-teal-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-800">
                  Misyonumuz
                </h2>
              </div>
              <p className="text-stone-700 leading-relaxed">
                Lipödem farkındalığını artırmak, doğru bilgiye erişimi
                kolaylaştırmak ve her hastanın tanı sürecini hızlandırmak.
                Bilimsel kanıtlara dayalı, anlaşılır ve erişilebilir içeriklerle
                hastaların ve sağlık profesyonellerinin yanında olmak.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-stone-800">
                  Vizyonumuz
                </h2>
              </div>
              <p className="text-stone-700 leading-relaxed">
                Her lipödemli kadının tanı, tedavi ve destek yolculuğunda
                yanında olmak. Türkiye&apos;de lipödem konusunda referans
                platform haline gelerek, hastaların yaşam kalitesini artırmaya
                katkıda bulunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM TANITIMI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
            Neden Lipödem Türkiye?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            Lipödem, Türkiye&apos;de hala yeterince tanınmayan ve sıklıkla
            yanlış teşhis edilen kronik bir hastalıktır. Mevcut bilgi
            kaynaklarının çoğu İngilizce olup, Türkçe ve Türkiye koşullarına
            uygun kapsamlı bir kaynak bulunmamaktadır. Lipödem Türkiye, bu
            boşluğu doldurmak için kurulmuştur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: BookOpen,
                baslik: "Bilimsel İçerik",
                aciklama:
                  "Tüm içeriklerimiz uluslararası kılavuzlar ve peer-reviewed araştırmalara dayanır.",
              },
              {
                icon: Heart,
                baslik: "Hasta Odaklı",
                aciklama:
                  "Tıbbi jargondan arındırılmış, anlaşılır ve empatik dil kullanıyoruz.",
              },
              {
                icon: Shield,
                baslik: "Tarafsız Platform",
                aciklama:
                  "Bağımsız bir platformuz. Hiçbir kliniğin veya markanın reklamını yapmıyoruz.",
              },
              {
                icon: Users,
                baslik: "Topluluk Desteği",
                aciklama:
                  "Hastaları bir araya getirerek deneyim paylaşımını ve dayanışmayı destekliyoruz.",
              },
            ].map((item) => (
              <div
                key={item.baslik}
                className="bg-white rounded-xl p-6 border border-stone-200"
              >
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2">
                  {item.baslik}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BİLİMSEL TEMEL */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
            Bilimsel temelimiz
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-6">
            İçeriklerimiz, alanında en güncel ve güvenilir bilimsel kaynaklara
            dayanmaktadır. Her bilgi, kaynak referanslarıyla desteklenir ve
            düzenli olarak güncellenir.
          </p>
          <div className="bg-stone-50 rounded-xl p-6 border border-stone-200">
            <h3 className="font-semibold text-stone-800 mb-4">
              Başlıca kaynaklarımız:
            </h3>
            <ul className="space-y-3">
              {kaynaklar.map((kaynak) => (
                <li key={kaynak} className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                  <span className="text-stone-700">{kaynak}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TARAFSIZLIK BEYANI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-teal-600 rounded-xl p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  Tarafsızlık beyanımız
                </h2>
                <p className="text-teal-50 leading-relaxed">
                  Lipödem Türkiye, tamamen bağımsız bir bilgi ve farkındalık
                  platformudur. Hiçbir kliniğin, doktorun veya ticari markanın
                  reklamını yapmıyoruz. İçeriklerimiz sponsorlu değildir.
                  Klinik rehberimizde yer alan bilgiler, objektif kriterlere
                  dayalı olarak hazırlanmakta ve hastaların kendi kararlarını
                  vermelerine yardımcı olmayı amaçlamaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İSTATİSTİKLER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-8 text-center">
            Lipödem Türkiye&apos;de neden önemli?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {istatistikler.map((stat) => (
              <div
                key={stat.rakam}
                className="text-center bg-stone-50 rounded-xl p-6 border border-stone-200"
              >
                <p className="text-2xl md:text-3xl font-extrabold text-teal-600">
                  {stat.rakam}
                </p>
                <p className="mt-2 text-sm text-stone-600 leading-snug">
                  {stat.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Lipödem hakkında bilgilenin
          </h2>
          <p className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Lipödem nedir, nasıl anlaşılır, hangi tedavi seçenekleri vardır?
            Kapsamlı rehberimizle yolculuğunuza başlayın.
          </p>
          <Link
            href="/lipodem-nedir"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20"
          >
            Lipödem Rehberine Git
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
