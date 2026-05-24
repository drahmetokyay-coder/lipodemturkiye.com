import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Cookie, Shield, BarChart3, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Çerez Politikası | Lipödem Türkiye",
  description:
    "Lipödem Türkiye çerez politikası. Kullanılan çerez türleri, amaçları, süreleri ve çerez tercihlerinizi yönetme bilgileri.",
};

const cerezler = [
  {
    kategori: "Zorunlu çerezler",
    icon: Shield,
    renk: "bg-teal-50 border-teal-100 text-teal-600",
    aciklama:
      "Platformun temel işlevlerinin çalışması için gereklidir. Bu çerezler olmadan site düzgün çalışamaz. Devre dışı bırakılamazlar.",
    ornekler: [
      {
        isim: "session_id",
        amac: "Oturum yönetimi ve güvenlik",
        sure: "Oturum süresi",
      },
      {
        isim: "csrf_token",
        amac: "Güvenlik (siteler arası istek sahteciliğini önleme)",
        sure: "Oturum süresi",
      },
      {
        isim: "cookie_consent",
        amac: "Çerez tercihlerinizin hatırlanması",
        sure: "12 ay",
      },
    ],
  },
  {
    kategori: "Analitik çerezler",
    icon: BarChart3,
    renk: "bg-purple-50 border-purple-100 text-purple-600",
    aciklama:
      "Ziyaretçilerin platformu nasıl kullandığını anlamamıza yardımcı olur. Toplanan veriler anonimleştirilmiştir ve sizi kişisel olarak tanımlamak için kullanılmaz.",
    ornekler: [
      {
        isim: "_ga",
        amac: "Google Analytics - Tekil ziyaretçi tanımlama",
        sure: "24 ay",
      },
      {
        isim: "_ga_*",
        amac: "Google Analytics - Oturum durumu",
        sure: "24 ay",
      },
      {
        isim: "_gid",
        amac: "Google Analytics - Tekil ziyaretçi tanımlama (24 saat)",
        sure: "24 saat",
      },
    ],
  },
];

export default function CerezPolitikasiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-teal-50 via-purple-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
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
              <li className="text-stone-800 font-medium">Çerez Politikası</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Çerez Politikası
          </h1>
          <p className="mt-4 text-sm text-stone-500">
            Son güncelleme: 24 Mayıs 2026
          </p>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="prose prose-stone prose-headings:text-stone-800 prose-a:text-teal-600 max-w-none">
            <h2 className="text-xl md:text-2xl font-bold mt-0">
              Çerez nedir?
            </h2>
            <p>
              Çerezler (cookies), web sitemizi ziyaret ettiğinizde
              tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Çerezler,
              siteyi nasıl kullandığınızı anlamamıza, tercihlerinizi
              hatırlamamıza ve size daha iyi bir deneyim sunmamıza yardımcı
              olur.
            </p>

            <h2 className="text-xl md:text-2xl font-bold">
              Neden çerez kullanıyoruz?
            </h2>
            <p>
              Çerezleri aşağıdaki amaçlarla kullanmaktayız:
            </p>
            <ul>
              <li>
                Platformun düzgün çalışması için gerekli teknik işlevleri
                sağlamak
              </li>
              <li>
                Ziyaretçi istatistiklerini anonim olarak analiz ederek
                platformumuzu iyileştirmek
              </li>
              <li>Tercihlerinizi (çerez onayı gibi) hatırlamak</li>
            </ul>
          </div>

          {/* ÇEREZ TABLOSU */}
          <div className="mt-10 space-y-8">
            {cerezler.map((kategori) => (
              <div key={kategori.kategori}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${kategori.renk.split(" ").slice(0, 1).join(" ")}`}
                  >
                    <kategori.icon
                      className={`w-5 h-5 ${kategori.renk.split(" ").slice(2).join(" ")}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800">
                    {kategori.kategori}
                  </h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {kategori.aciklama}
                </p>
                <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-stone-50">
                        <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                          Çerez Adı
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                          Amaç
                        </th>
                        <th className="px-4 py-3 text-left font-semibold text-stone-700 border-b border-stone-200">
                          Süre
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {kategori.ornekler.map((cerez, i) => (
                        <tr
                          key={cerez.isim}
                          className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}
                        >
                          <td className="px-4 py-3 font-mono text-xs text-stone-800 border-b border-stone-100">
                            {cerez.isim}
                          </td>
                          <td className="px-4 py-3 text-stone-600 border-b border-stone-100">
                            {cerez.amac}
                          </td>
                          <td className="px-4 py-3 text-stone-500 border-b border-stone-100 whitespace-nowrap">
                            {cerez.sure}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* ÇEREZ YÖNETİMİ */}
          <div className="mt-12 bg-stone-50 rounded-xl p-8 border border-stone-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-stone-100 flex items-center justify-center shrink-0">
                <Settings className="w-6 h-6 text-stone-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-800 mb-3">
                  Çerez tercihlerinizi yönetin
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  Zorunlu çerezler dışındaki çerezleri tarayıcı
                  ayarlarınızdan yönetebilirsiniz. Çerezleri devre dışı
                  bırakmanız halinde platformun bazı özellikleri düzgün
                  çalışmayabilir.
                </p>
                <div className="prose prose-stone prose-sm max-w-none">
                  <p className="text-stone-600 leading-relaxed">
                    <strong>Tarayıcı ayarları:</strong> Çerez tercihlerini
                    tarayıcınızın ayarlar menüsünden değiştirebilirsiniz.
                    Aşağıdaki bağlantılardan tarayıcınıza özel yönergelere
                    ulaşabilirsiniz:
                  </p>
                  <ul className="text-sm text-stone-600">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/tr/kb/cerezleri-silme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/tr-tr/guide/safari/sfri11471"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/tr-tr/windows/microsoft-edge-de-cerezleri-silme-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* İLETİŞİM */}
          <div className="mt-8 prose prose-stone prose-headings:text-stone-800 prose-a:text-teal-600 max-w-none">
            <h2 className="text-xl md:text-2xl font-bold">İletişim</h2>
            <p>
              Çerez politikamız hakkında sorularınız için{" "}
              <a href="mailto:bilgi@lipodemturkiye.com">
                bilgi@lipodemturkiye.com
              </a>{" "}
              adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
