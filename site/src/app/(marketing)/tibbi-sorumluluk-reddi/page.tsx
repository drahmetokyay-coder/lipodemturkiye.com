import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  AlertTriangle,
  Phone,
  BookOpen,
  Shield,
  Heart,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tıbbi Sorumluluk Reddi | Lipödem Türkiye",
  description:
    "Lipödem Türkiye tıbbi sorumluluk reddi beyanı. Bu platform tanı koymaz, tedavi önermez. Acil durumlarda 112'yi arayın.",
};

export default function TibbiSorumlulukReddiPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#E8F5F0] via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
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
                Tıbbi Sorumluluk Reddi
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Tıbbi Sorumluluk Reddi
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-stone-700 max-w-3xl">
            Lütfen platformumuzu kullanmadan önce aşağıdaki tıbbi sorumluluk
            reddi beyanını dikkatlice okuyunuz.
          </p>
        </div>
      </section>

      {/* ACİL DURUM UYARISI */}
      <section className="py-8 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-red-600 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <Phone className="w-8 h-8 text-white shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold mb-2">
                  Acil durumlarda 112&apos;yi arayın
                </h2>
                <p className="text-red-100 leading-relaxed">
                  Acil bir sağlık sorunu yaşıyorsanız, ciddi ağrı, nefes
                  darlığı, ani şişlik veya başka acil belirtileriniz varsa
                  derhal <strong>112 Acil Yardım</strong> hattını arayın veya
                  en yakın acil servise başvurun. Bu platform acil tıbbi yardım
                  sağlamamaktadır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANA İÇERİK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* BU PLATFORM NE YAPMAZ */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
              Bu platform ne yapmaz?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Tıbbi tanı koymaz",
                "Tedavi önerisi vermez",
                "Reçete veya ilaç tavsiyesinde bulunmaz",
                "Doktor-hasta ilişkisi oluşturmaz",
                "Bireysel sağlık değerlendirmesi yapmaz",
                "Acil tıbbi yardım sağlamaz",
              ].map((madde) => (
                <div
                  key={madde}
                  className="flex items-start gap-3 bg-stone-50 rounded-lg p-4 border border-stone-200"
                >
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium text-sm">
                    {madde}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DETAYLI AÇIKLAMA */}
          <div className="prose prose-stone prose-headings:text-stone-800 prose-a:text-[#1A6B5A] max-w-none">
            <h2 className="text-xl md:text-2xl font-bold">
              1. Genel bilgilendirme beyanı
            </h2>
            <p>
              Lipödem Türkiye platformunda yer alan tüm içerikler (makaleler,
              rehberler, araçlar, testler, infografikler ve diğer materyaller)
              yalnızca genel bilgilendirme ve eğitim amaçlıdır. Bu içerikler:
            </p>
            <ul>
              <li>
                Tıbbi tavsiye, tanı veya tedavi yerine geçmez ve bu şekilde
                yorumlanmamalıdır
              </li>
              <li>
                Herhangi bir sağlık durumunun teşhis veya tedavisi için
                kullanılmamalıdır
              </li>
              <li>
                Bir sağlık profesyoneliyle yapılan kişisel konsültasyonun
                alternatifi değildir
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold">
              2. Semptom testi ve araçlar hakkında
            </h2>
            <p>
              Platformumuzda yer alan semptom testi, evre değerlendirme aracı
              ve diğer interaktif araçlar, yalnızca ön bilgilendirme ve
              farkındalık oluşturma amacıyla tasarlanmıştır. Bu araçlar:
            </p>
            <ul>
              <li>
                Kesin tanı aracı olarak kullanılamaz ve kullanılmamalıdır
              </li>
              <li>
                Sonuçları yalnızca bir fikir vermek amacıyla sunulmakta olup,
                tıbbi bir değerlendirme niteliği taşımaz
              </li>
              <li>
                Sonuçlarınız ne olursa olsun, bir sağlık profesyoneline
                danışmanız önerilir
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold">
              3. Klinik rehberi hakkında
            </h2>
            <p>
              Platformumuzda yer alan klinik ve doktor bilgileri, yalnızca
              bilgilendirme amaçlıdır. Lipödem Türkiye:
            </p>
            <ul>
              <li>
                Herhangi bir klinigi, doktoru veya tedavi yöntemini
                onaylamamakta veya tavsiye etmemektedir
              </li>
              <li>
                Listelenen kliniklerin veya doktorların yeterlilikleri,
                lisansları veya uzmanlıkları hakkında garanti vermemektedir
              </li>
              <li>
                Herhangi bir tedavi sonucu veya hasta memnuniyeti konusunda
                sorumluluk kabul etmemektedir
              </li>
            </ul>

            <h2 className="text-xl md:text-2xl font-bold">
              4. Profesyonel tıbbi tavsiye
            </h2>
            <p>
              Sağlığınızla ilgili herhangi bir sorunuz veya endişeniz varsa,
              mutlaka nitelikli bir sağlık profesyoneline danışınız. Mevcut
              tedavinizi veya ilaçlarınızı, bir doktora danışmadan
              değiştirmeyiniz veya bırakmayınız. Belirtileriniz kötüleşirse
              veya yeni belirtiler ortaya çıkarsa, derhal tıbbi yardım
              alınız.
            </p>
          </div>
        </div>
      </section>

      {/* BİLİMSEL KAYNAK ŞEFFAFLIĞI */}
      <section className="py-12 md:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">
            Bilimsel kaynak şeffaflığı
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-stone-700 mb-8">
            İçeriklerimizin güvenilirliğini sağlamak için bilimsel kaynak
            kullanım standartlarımız aşağıda belirtilmiştir:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-[#1A6B5A]" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                Kaynak tabanlı içerik
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Tüm tıbbi içeriklerimiz, peer-reviewed (hakemli) dergilerde
                yayımlanmış araştırmalara, uluslararası kılavuzlara ve
                konsensüs belgelerine dayanmaktadır.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[#1A6B5A]" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                Uzman incelemesi
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                İçeriklerimiz, alanında uzman hekimlerden oluşan Tıbbi
                Danışma Kurulumuz tarafından incelenmekte ve
                onaylanmaktadır.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5 text-[#1A6B5A]" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                Belirsizlik beyanı
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Bilimsel kanıtların yetersiz veya tartışmalı olduğu
                konularda, bunu açıkça belirtir ve farklı görüşleri
                sunmaya özen gösteririz.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-[#1A6B5A]" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">
                Düzenli güncelleme
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                İçeriklerimiz, yeni araştırmalar ve kılavuz güncellemeleri
                doğrultusunda düzenli olarak gözden geçirilmekte ve
                güncellenmektedir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SON UYARI */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold text-amber-800 mb-3">
                  Bu sayfayı okuduğunuzu onaylıyorsunuz
                </h2>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Lipödem Türkiye platformunu kullanarak, bu tıbbi sorumluluk
                  reddi beyanını okuduğunuzu, anladığınızı ve kabul
                  ettiğinizi beyan etmiş olursunuz. Platformdaki hiçbir bilgi
                  profesyonel tıbbi tavsiye yerine geçmez.
                </p>
                <p className="text-amber-700 text-sm leading-relaxed mt-3">
                  <strong>Acil durumlarda:</strong> 112 Acil Yardım hattını
                  arayın veya en yakın acil servise başvurun.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
