import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Mail,
  Globe,
  Hash,
  CirclePlay,
  Stethoscope,
  Newspaper,
} from "lucide-react";
import IletisimFormu from "./iletisim-formu";

export const metadata: Metadata = {
  title: "İletişim | Lipödem Türkiye",
  description:
    "Lipödem Türkiye ile iletişime geçin. Sorularınız, geri bildirimleriniz veya işbirliği talepleriniz için bize ulaşın.",
};

const sosyalMedya = [
  {
    isim: "Instagram",
    icon: Globe,
    href: "https://instagram.com/lipodemturkiye",
    kullaniciAdi: "@lipodemturkiye",
  },
  {
    isim: "Twitter / X",
    icon: Hash,
    href: "https://twitter.com/lipodemturkiye",
    kullaniciAdi: "@lipodemturkiye",
  },
  {
    isim: "YouTube",
    icon: CirclePlay,
    href: "https://youtube.com/@lipodemturkiye",
    kullaniciAdi: "@lipodemturkiye",
  },
];

export default function IletisimPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-16">
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
              <li className="text-stone-800 font-medium">İletişim</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            İletişim
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700 max-w-3xl">
            Sorularınız, geri bildirimleriniz veya işbirliği talepleriniz için
            bize ulaşabilirsiniz. Size en kısa sürede dönüş yapmaya
            çalışacağız.
          </p>
        </div>
      </section>

      {/* FORM + BİLGİLER */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-stone-800 mb-6">
                Bize yazın
              </h2>
              <IletisimFormu />
            </div>

            {/* İletişim Bilgileri */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-stone-800 mb-6">
                İletişim bilgileri
              </h2>

              {/* Email */}
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-5">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-[#1A6B5A]" />
                  <h3 className="font-semibold text-stone-800">E-posta</h3>
                </div>
                <a
                  href="mailto:bilgi@lipodemturkiye.com"
                  className="text-[#1A6B5A] hover:text-[#15594A] transition-colors font-medium"
                >
                  bilgi@lipodemturkiye.com
                </a>
              </div>

              {/* Sosyal Medya */}
              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 mb-5">
                <h3 className="font-semibold text-stone-800 mb-4">
                  Sosyal medya
                </h3>
                <div className="space-y-3">
                  {sosyalMedya.map((sm) => (
                    <a
                      key={sm.isim}
                      href={sm.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-stone-600 hover:text-[#1A6B5A] transition-colors group"
                    >
                      <sm.icon className="w-5 h-5 text-stone-400 group-hover:text-[#1A6B5A] transition-colors" />
                      <div>
                        <span className="text-sm font-medium">{sm.isim}</span>
                        <span className="block text-xs text-stone-400">
                          {sm.kullaniciAdi}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Yanıt Süresi */}
              <div className="bg-[#E8F5F0] rounded-xl p-5 border border-[#E8F5F0]">
                <p className="text-sm text-[#10473B] leading-relaxed">
                  Mesajlarınıza genellikle{" "}
                  <strong>1-2 iş günü</strong> içinde dönüş
                  yapıyoruz. Acil tıbbi durumlar için lütfen{" "}
                  <strong>112</strong>&apos;yi arayın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KLİNİK & BASIN CTA */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Klinik/Doktor Kaydı */}
            <div className="bg-white rounded-xl p-8 border border-stone-200">
              <div className="w-12 h-12 rounded-lg bg-[#E8F5F0] flex items-center justify-center mb-5">
                <Stethoscope className="w-6 h-6 text-[#1A6B5A]" />
              </div>
              <h2 className="text-lg font-bold text-stone-800 mb-3">
                Klinik veya doktor musunuz?
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-5">
                Klinik rehberimizde yer almak, hasta yönlendirmesi almak veya
                platformumuzla işbirliği yapmak için bizimle iletişime geçin.
              </p>
              <a
                href="mailto:klinik@lipodemturkiye.com"
                className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#15594A] transition-colors"
              >
                Klinik Kaydı İçin Yazın
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Basın ve Medya */}
            <div className="bg-white rounded-xl p-8 border border-stone-200">
              <div className="w-12 h-12 rounded-lg bg-[#E8F5F0] flex items-center justify-center mb-5">
                <Newspaper className="w-6 h-6 text-[#1A6B5A]" />
              </div>
              <h2 className="text-lg font-bold text-stone-800 mb-3">
                Basın ve medya
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-5">
                Lipödem konusunda haber, röportaj veya bilgilendirme içeriği
                hazırlamak istiyorsanız basın iletişim kanalımızı
                kullanabilirsiniz.
              </p>
              <a
                href="mailto:basin@lipodemturkiye.com"
                className="inline-flex items-center gap-2 bg-[#1A6B5A] text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#15594A] transition-colors"
              >
                Basın İletişimi
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
