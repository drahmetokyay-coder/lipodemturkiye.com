import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Lipödem Türkiye",
  description:
    "Lipödem Türkiye gizlilik politikası. KVKK uyumlu veri koruma, toplanan veriler, kullanım amaçları ve haklarınız hakkında bilgi.",
};

export default function GizlilikPolitikasiPage() {
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
              <li className="text-stone-800 font-medium">
                Gizlilik Politikası
              </li>
            </ol>
          </nav>

          <h1 className="text-3xl md:text-5xl font-extrabold text-stone-800 leading-tight tracking-tight">
            Gizlilik Politikası
          </h1>
          <p className="mt-4 text-sm text-stone-500">
            Son güncelleme: 24 Mayıs 2026
          </p>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 prose prose-stone prose-headings:text-stone-800 prose-a:text-teal-600 max-w-none">
          <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 mb-10 not-prose">
            <p className="text-sm text-teal-800 leading-relaxed">
              Bu gizlilik politikası, 6698 sayılı Kişisel Verilerin Korunması
              Kanunu (KVKK) ve ilgili mevzuat kapsamında hazırlanmıştır.
              Kişisel verilerinizin korunması bizim için en üst düzeyde
              önceliklidir.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-bold mt-0">
            1. Veri Sorumlusu
          </h2>
          <p>
            Bu web sitesi (&quot;lipodemturkiye.com&quot;) Lipödem Türkiye
            platformu tarafından işletilmektedir. Kişisel verilerinizin
            işlenmesine ilişkin veri sorumlusu sıfatıyla hareket etmekteyiz.
          </p>
          <ul>
            <li>
              <strong>Platform:</strong> Lipödem Türkiye
            </li>
            <li>
              <strong>E-posta:</strong>{" "}
              <a href="mailto:bilgi@lipodemturkiye.com">
                bilgi@lipodemturkiye.com
              </a>
            </li>
            <li>
              <strong>Web sitesi:</strong> lipodemturkiye.com
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            2. Toplanan kişisel veriler
          </h2>
          <p>
            Platformumuz üzerinden aşağıdaki kişisel veriler
            toplanabilmektedir:
          </p>

          <h3 className="text-lg font-semibold">
            2.1. Doğrudan sağladığınız veriler
          </h3>
          <ul>
            <li>Ad ve soyad (iletişim formu, üyelik)</li>
            <li>E-posta adresi (iletişim formu, bülten aboneliği, üyelik)</li>
            <li>İletişim formu mesaj içeriği</li>
            <li>Semptom testi yanıtları (anonim olarak işlenir)</li>
          </ul>

          <h3 className="text-lg font-semibold">
            2.2. Otomatik olarak toplanan veriler
          </h3>
          <ul>
            <li>IP adresi</li>
            <li>Tarayıcı türü ve sürümü</li>
            <li>İşletim sistemi bilgisi</li>
            <li>Ziyaret edilen sayfalar ve etkileşim verileri</li>
            <li>
              Çerezler aracılığıyla toplanan veriler (detaylar için{" "}
              <Link
                href="/cerez-politikasi"
                className="text-teal-600 hover:text-teal-700"
              >
                Çerez Politikası
              </Link>
              &apos;nı inceleyiniz)
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            3. Verilerin kullanım amaçları
          </h2>
          <p>Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>İletişim taleplerinin yanıtlanması</li>
            <li>E-posta bülteni gönderimi (açık rızanız dahilinde)</li>
            <li>
              Platform kullanım analizleri ve iyileştirmeler (anonim
              istatistikler)
            </li>
            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
            <li>Platform güvenliğinin sağlanması</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            4. Verilerin hukuki dayanağı
          </h2>
          <p>
            Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde belirtilen
            aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
          </p>
          <ul>
            <li>Açık rızanız (bülten aboneliği, pazarlama iletişimleri)</li>
            <li>
              Meşru menfaatlerimiz (platform güvenliği, hizmet iyileştirme)
            </li>
            <li>Hukuki yükümlülüklerimiz</li>
            <li>Sözleşmenin ifası (üyelik hizmeti sunumu)</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            5. Verilerin saklanma süresi
          </h2>
          <ul>
            <li>
              <strong>İletişim formu verileri:</strong> Talebin
              sonuçlandırılmasından itibaren 2 yıl
            </li>
            <li>
              <strong>E-posta bülten aboneliği:</strong> Abonelik iptal
              edilene kadar
            </li>
            <li>
              <strong>Üyelik bilgileri:</strong> Hesap silinene kadar + yasal
              saklama süresi (5 yıl)
            </li>
            <li>
              <strong>Analitik veriler:</strong> Anonimleştirilmiş olarak 26
              ay
            </li>
            <li>
              <strong>Çerez verileri:</strong> Çerez türüne göre 30 gün - 13
              ay
            </li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            6. Verilerin paylaşımı
          </h2>
          <p>
            Kişisel verileriniz, aşağıdaki durumlar haricinde üçüncü
            kişilerle paylaşılmamaktadır:
          </p>
          <ul>
            <li>Yasal zorunluluklar (mahkeme kararı, resmi kurum talepleri)</li>
            <li>
              Hizmet sağlayıcılar (hosting, e-posta servisi, analitik
              araçları) - veri işleme sözleşmesi kapsamında
            </li>
          </ul>
          <p>
            Kişisel verileriniz yurt dışına aktarılması durumunda, KVKK&apos;nın
            9. maddesine uygun güvenlik önlemleri alınmaktadır.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            7. Haklarınız (KVKK Madde 11)
          </h2>
          <p>
            KVKK kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>
              Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
            </li>
            <li>
              Kişisel verilerinizin işlenme amacını ve bunların amacına uygun
              kullanılıp kullanılmadığını öğrenme
            </li>
            <li>
              Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
              üçüncü kişileri bilme
            </li>
            <li>
              Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde
              bunların düzeltilmesini isteme
            </li>
            <li>
              KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel
              verilerinizin silinmesini veya yok edilmesini isteme
            </li>
            <li>
              İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla
              analiz edilmesi suretiyle aleyhinize bir sonucun ortaya
              çıkmasına itiraz etme
            </li>
            <li>
              Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle
              zarara uğramanız halinde zararın giderilmesini talep etme
            </li>
          </ul>
          <p>
            Haklarınızı kullanmak için{" "}
            <a href="mailto:bilgi@lipodemturkiye.com">
              bilgi@lipodemturkiye.com
            </a>{" "}
            adresine başvurabilirsiniz. Başvurunuz en geç 30 gün içinde
            sonuçlandırılacaktır.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">
            8. Güvenlik önlemleri
          </h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki teknik
            ve idari önlemler alınmaktadır:
          </p>
          <ul>
            <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
            <li>Düzenli güvenlik güncellemeleri ve yamaları</li>
            <li>Erişim kontrolü ve yetkilendirme mekanizmaları</li>
            <li>Veri yedekleme ve felaket kurtarma planları</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-bold">
            9. Politika güncellemeleri
          </h2>
          <p>
            Bu gizlilik politikası, yasal düzenlemeler veya platform
            değişiklikleri doğrultusunda güncellenebilir. Önemli
            değişiklikler olması halinde sizi e-posta veya platform üzerinden
            bilgilendireceğiz. Bu sayfayı düzenli olarak kontrol etmenizi
            öneririz.
          </p>

          <h2 className="text-xl md:text-2xl font-bold">10. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız için{" "}
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
