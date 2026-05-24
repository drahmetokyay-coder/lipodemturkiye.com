import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Şartları | Lipödem Türkiye",
  description:
    "Lipödem Türkiye platform kullanım şartları. Hesap kuralları, fikri mülkiyet, sorumluluk reddi ve tıbbi içerik disclaimer bilgileri.",
};

export default function KullanimSartlariPage() {
  return (
    <article>
      {/* HERO */}
      <section className="bg-gradient-to-br from-purple-50 via-rose-50 to-orange-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
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
              <li className="text-stone-800 font-medium">Kullanım Şartları</li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Kullanım Şartları
          </h1>
          <p className="mt-4 text-sm text-stone-500">
            Son güncelleme: 24 Mayıs 2026
          </p>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-stone prose-headings:text-stone-800 prose-a:text-purple-600 max-w-none">
          {/* TIBBI İÇERİK DISCLAIMER */}
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 mb-10 not-prose">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-800 mb-2">
                  Tıbbi içerik uyarısı
                </h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Bu platformdaki tüm içerikler yalnızca bilgilendirme
                  amaçlıdır. Hiçbir içerik, tıbbi tanı, tedavi veya reçete
                  yerine geçmez. Sağlık kararlarınız için mutlaka bir sağlık
                  profesyoneline danışınız. Detaylı bilgi için{" "}
                  <Link
                    href="/tibbi-sorumluluk-reddi"
                    className="text-amber-800 font-semibold underline"
                  >
                    Tıbbi Sorumluluk Reddi
                  </Link>{" "}
                  sayfamızı inceleyiniz.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-0">
            1. Genel hükümler
          </h2>
          <p>
            Bu kullanım şartları (&quot;Şartlar&quot;), lipodemturkiye.com web
            sitesini (&quot;Platform&quot;) kullanımınıza ilişkin koşulları
            belirler. Platformu kullanarak bu şartları kabul etmiş
            sayılırsınız. Şartları kabul etmiyorsanız, lütfen platformu
            kullanmayınız.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            2. Platformun amacı
          </h2>
          <p>
            Lipödem Türkiye, lipödem hastalığı hakkında bilimsel verilere
            dayalı bilgilendirme sunan, hasta farkındalığını artırmayı
            hedefleyen bağımsız bir platformdur. Platform:
          </p>
          <ul>
            <li>Tıbbi tanı koymaz veya tedavi önermez</li>
            <li>Doktor-hasta ilişkisi oluşturmaz</li>
            <li>Reçete veya ilaç tavsiyesinde bulunmaz</li>
            <li>
              Yalnızca bilgilendirme amaçlı içerik sunar ve kullanıcıları
              sağlık profesyonellerine yönlendirir
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">3. Hesap kuralları</h2>
          <p>
            Platformda hesap oluşturmanız halinde aşağıdaki kurallara uymayı
            kabul edersiniz:
          </p>
          <ul>
            <li>Doğru ve güncel bilgiler sağlamak</li>
            <li>
              Hesap güvenliğinizi sağlamak (şifrenizi üçüncü kişilerle
              paylaşmamak)
            </li>
            <li>Hesabınız üzerinden gerçekleştirilen tüm işlemlerden sorumlu olmak</li>
            <li>Tek bir kişi için birden fazla hesap oluşturmamak</li>
            <li>
              Platformu yasa dışı amaçlarla veya bu şartlara aykırı şekilde
              kullanmamak
            </li>
          </ul>
          <p>
            Lipödem Türkiye, şartlara aykırı davranan hesapları önceden
            bildirimde bulunmaksızın askıya alma veya kapatma hakkını saklı
            tutar.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            4. Kabul edilemez kullanım
          </h2>
          <p>Aşağıdaki davranışlar kesinlikle yasaktır:</p>
          <ul>
            <li>
              Platformdaki içerikleri tıbbi tavsiye olarak kabul edip buna
              göre hareket etmek
            </li>
            <li>
              Yanlış, yanıltıcı veya zararlı bilgi paylaşmak
            </li>
            <li>
              Platformun teknik altyapısına zarar vermeye çalışmak
            </li>
            <li>
              Diğer kullanıcıları taciz etmek, tehdit etmek veya aşağılamak
            </li>
            <li>
              Ticari reklam veya spam içerikli paylaşımlar yapmak
            </li>
            <li>
              Platformun içeriklerini izinsiz çoğaltmak veya dağıtmak
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            5. Fikri mülkiyet hakları
          </h2>
          <p>
            Platformdaki tüm içerikler (metinler, görseller, grafikler,
            logolar, tasarımlar, yazılım kodu, araçlar ve diğer materyaller)
            Lipödem Türkiye&apos;nin fikri mülkiyetidir veya lisans altında
            kullanılmaktadır. Bu içerikler, 5846 sayılı Fikir ve Sanat
            Eserleri Kanunu ve ilgili uluslararası mevzuat kapsamında
            korunmaktadır.
          </p>
          <p>Yazılı izin olmaksızın aşağıdaki eylemler yasaktır:</p>
          <ul>
            <li>İçeriklerin ticari amaçla kopyalanması veya kullanılması</li>
            <li>İçeriklerin değiştirilerek yeniden yayınlanması</li>
            <li>Platformun logosunun veya markasının izinsiz kullanılması</li>
          </ul>
          <p>
            Kişisel ve eğitim amaçlı kullanım, kaynak gösterilmesi şartıyla
            serbesttir.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            6. Sorumluluk reddi
          </h2>
          <p>
            Platform, &quot;olduğu gibi&quot; ve &quot;mevcut haliyle&quot;
            sunulmaktadır. Lipödem Türkiye:
          </p>
          <ul>
            <li>
              İçeriklerin eksiksiz, güncel veya hatasız olduğunu garanti
              etmez
            </li>
            <li>
              Platformun kesintisiz ve hatasız çalışacağını garanti etmez
            </li>
            <li>
              Kullanıcıların platform bilgilerini kullanarak aldıkları
              kararlardan sorumlu değildir
            </li>
            <li>
              Üçüncü taraf web sitelerine verilen bağlantıların içeriğinden
              sorumlu değildir
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            7. Üçüncü taraf bağlantıları
          </h2>
          <p>
            Platform, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu
            bağlantılar yalnızca bilgilendirme amaçlıdır. Lipödem Türkiye, bu
            sitelerin içeriği, gizlilik uygulamaları veya doğruluğu konusunda
            hiçbir sorumluluk kabul etmez.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            8. Değişiklikler
          </h2>
          <p>
            Lipödem Türkiye, bu kullanım şartlarını herhangi bir zamanda
            güncelleme hakkını saklı tutar. Önemli değişiklikler platform
            üzerinden duyurulacaktır. Güncellenmiş şartları kullanmaya devam
            etmeniz, değişiklikleri kabul ettiğiniz anlamına gelir.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            9. Uygulanacak hukuk ve yetkili mahkeme
          </h2>
          <p>
            Bu kullanım şartları Türkiye Cumhuriyeti kanunlarına tabidir.
            Uyuşmazlık halinde Ankara Mahkemeleri ve İcra Daireleri
            yetkilidir.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">10. İletişim</h2>
          <p>
            Kullanım şartlarıyla ilgili sorularınız için{" "}
            <a href="mailto:bilgi@lipodemturkiye.com">
              bilgi@lipodemturkiye.com
            </a>{" "}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </section>
    </article>
  );
}
