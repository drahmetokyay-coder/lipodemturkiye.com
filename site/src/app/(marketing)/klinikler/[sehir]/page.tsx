import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Building2,
  Users,
  Shield,
  AlertCircle,
  ClipboardCheck,
  Navigation,
  ChevronRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ClinicCard } from "@/components/clinic/clinic-card";
import { cities, getCityBySlug, getAllCitySlugs } from "@/data/cities";

// ── Placeholder klinik verileri (gercek isim yok) ──
const PLACEHOLDER_TREATMENTS = [
  ["vaser", "tumescent", "mld", "kompresyon"],
  ["tumescent", "cdt", "kompresyon", "beslenme"],
  ["vaser", "wal", "mld", "pnomatik"],
  ["tumescent", "mld", "kompresyon", "egzersiz"],
  ["vaser", "tumescent", "kompresyon"],
  ["mld", "cdt", "kompresyon", "psikolojik"],
  ["vaser", "tumescent", "mld"],
  ["tumescent", "kompresyon", "beslenme"],
];

const PLACEHOLDER_DISTRICTS = [
  "Merkez",
  "Sehir Hastanesi Bolgesi",
  "Universite Cevresi",
  "Hastane Caddesi",
  "Saglik Kampusu",
  "Ozel Klinikler Bolgesi",
  "Tip Fakultesi Yakinlari",
  "Devlet Hastanesi Civari",
];

function getPlaceholderClinics(cityName: string, count: number) {
  return Array.from({ length: count }, (_, i) => ({
    name: `Lipodem Klinigi ${i + 1}`,
    district: `${cityName}, ${PLACEHOLDER_DISTRICTS[i % PLACEHOLDER_DISTRICTS.length]}`,
    treatments: PLACEHOLDER_TREATMENTS[i % PLACEHOLDER_TREATMENTS.length],
    index: i,
  }));
}

// ── Static params ──
export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ sehir: slug }));
}

// ── Dynamic metadata ──
interface PageProps {
  params: Promise<{ sehir: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { sehir } = await params;
  const city = getCityBySlug(sehir);
  if (!city) return {};

  const title = city.hasClinics
    ? `Lipodem Doktoru ${city.name}: Uzman Listesi (2026)`
    : `Lipodem Tedavisi ${city.name}: Rehber ve Yonlendirme (2026)`;

  const description = city.hasClinics
    ? `${city.name} sehrinde lipodem tedavisi yapan ${city.clinicCount} klinik ve ${city.doctorCount} uzman doktor. Tedavi yontemleri, fiyatlar ve randevu bilgileri.`
    : `${city.name} sehrinde lipodem uzmani ariyorsaniz en yakin merkezler ve yonlendirme bilgileri. ${city.name} lipodem rehberi.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

// ── Page Component ──
export default async function SehirPage({ params }: PageProps) {
  const { sehir } = await params;
  const city = getCityBySlug(sehir);

  if (!city) {
    notFound();
  }

  const alternativeCities = city.nearestAlternatives
    .map((slug) => getCityBySlug(slug))
    .filter(Boolean);

  // Ayni bolgeden ilgili sehirler (kendisi haric)
  const relatedCities = cities
    .filter((c) => c.region === city.region && c.slug !== city.slug)
    .sort((a, b) => b.population - a.population)
    .slice(0, 4);

  const placeholderClinics = city.hasClinics
    ? getPlaceholderClinics(city.name, city.clinicCount)
    : [];

  const h1 = city.hasClinics
    ? `${city.name} Lipodem Tedavisi -- Klinikler ve Doktorlar`
    : `${city.name} Lipodem Tedavisi -- Rehber ve En Yakin Uzmanlar`;

  return (
    <>
      {/* Baslik Bolumu */}
      <section className="bg-white pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <ScrollReveal>
            <Breadcrumbs
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Klinikler", href: "/klinikler" },
                { label: city.name, href: `/klinikler/${city.slug}` },
              ]}
            />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 max-w-4xl">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1a1a2e]">
                {h1}
              </h1>
              <p className="mt-4 text-stone-500 text-base md:text-lg leading-relaxed">
                {city.region} Bolgesi &middot;{" "}
                {city.population.toLocaleString("tr-TR")} nufus
              </p>
            </div>
          </ScrollReveal>

          {/* Istatistik bari -- sadece klinigi varsa */}
          {city.hasClinics && (
            <ScrollReveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#E8F5F0] rounded-lg">
                  <Building2 className="w-4 h-4 text-[#1A6B5A]" />
                  <span className="text-sm font-medium text-[#15594A]">
                    {city.clinicCount} Klinik
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2.5 bg-[#E8F5F0] rounded-lg">
                  <Users className="w-4 h-4 text-[#1A6B5A]" />
                  <span className="text-sm font-medium text-[#15594A]">
                    {city.doctorCount} Uzman Doktor
                  </span>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Ana Icerik */}
      <section className="bg-stone-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {city.hasClinics ? (
            /* ── Klinik VARSA ── */
            <>
              <ScrollReveal>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">
                  {city.name} Lipodem Klinikleri
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {placeholderClinics.map((clinic, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <ClinicCard {...clinic} />
                  </ScrollReveal>
                ))}
              </div>
            </>
          ) : (
            /* ── Klinik YOKSA ── */
            <>
              {/* Bilgi kutusu */}
              <ScrollReveal>
                <div className="flex items-start gap-3 p-5 bg-amber-50 rounded-xl border border-amber-200 mb-10">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-amber-800">
                      {city.name} icin henuz kayitli klinik bulunmamaktadir.
                    </p>
                    <p className="text-sm text-amber-700 mt-1">
                      Su anda platformumuza kayitli bir lipodem klinigi yok.
                      Asagidaki en yakin merkezlere basvurabilirsiniz.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* En yakin alternatifler */}
              {alternativeCities.length > 0 && (
                <>
                  <ScrollReveal delay={100}>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-6">
                      <Navigation className="w-6 h-6 inline-block mr-2 text-[#1A6B5A]" />
                      En Yakin Lipodem Merkezleri
                    </h2>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {alternativeCities.map((altCity, i) => (
                      <ScrollReveal key={altCity!.slug} delay={150 + i * 100}>
                        <Link
                          href={`/klinikler/${altCity!.slug}`}
                          className="group block rounded-xl bg-white border border-stone-100 p-5 shadow-soft card-hover"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin className="w-4 h-4 text-[#2D8B73]" />
                            <h3 className="text-lg font-semibold text-stone-800 group-hover:text-[#15594A] transition-colors">
                              {altCity!.name}
                            </h3>
                          </div>
                          <p className="text-sm text-stone-400 mb-3">
                            {altCity!.clinicCount} klinik &middot;{" "}
                            {altCity!.doctorCount} uzman doktor
                          </p>
                          <span className="inline-flex items-center text-[#1A6B5A] text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                            Detay{" "}
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </>
              )}

              {/* SEO icin genel bilgi bolumu (min 200 kelime) */}
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-xl border border-stone-100 p-8 shadow-soft mb-10">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-[#1a1a2e] mb-5">
                    {city.name} Lipodem Tedavisi Hakkinda
                  </h2>
                  <div className="prose prose-stone prose-sm max-w-none text-stone-500 leading-relaxed space-y-4">
                    <p>
                      Lipodem, vucudun belirli bolgelerinde -- ozellikle bacaklarda
                      ve bazen kollarda -- yag dokusunun anormal bicimde biriktig
                      kronik bir hastaliktir. Genetik kokenli olan bu hastalik
                      neredeyse yalnizca kadinlari etkiler ve diyet ya da egzersizle
                      kontrol altina alinamaz. {city.name} ve cevre illerde yasayan
                      hastalar icin dogru tani ve tedaviye ulasim buyuk onem
                      tasimaktadir.
                    </p>
                    <p>
                      {city.name} ilinde henuz platformumuza kayitli bir lipodem
                      uzmani bulunmamakla birlikte, konservatif tedavi secenekleri
                      icin yerel fizyoterapi merkezlerine basvurabilirsiniz.
                      Kompresyon tedavisi, manuel lenf drenaji (MLD) ve kompleks
                      dekongestif tedavi (KDT) gibi yontemler bircok fizyoterapi
                      merkezinde uygulanabilmektedir. Bu tedaviler lipodem
                      semptomlarini hafifletmeye ve hastalik ilerlemesini
                      yavaslotmaya yardimci olabilir.
                    </p>
                    <p>
                      Cerrahi tedavi secenekleri acisindan, VASER liposuction,
                      tumescent liposuction ve WAL (Water-Assisted Liposuction)
                      gibi yontemler lipodem icin en etkili cerrahi yaklasimlar
                      arasindadir. Bu operasyonlar icin uzman cerrahlara ulasmak
                      istiyorsaniz, yukaridaki en yakin merkezlere basvurmanizi
                      oneririz.
                    </p>
                    <p>
                      Lipodem tanisi icin oncelikle aile hekiminize basvurabilir
                      ve buradan bir plastik cerrahi, dermatoloji veya fizik tedavi
                      ve rehabilitasyon uzmanina yonlendirme alabilirsiniz.
                      SGK kapsaminda konservatif tedaviler (kompresyon
                      garmentleri, fizyoterapi seanslari) karsilanabilmektedir.
                      Cerrahi tedaviler ise genellikle ozel saglik sigortasi veya
                      bireysel odeme ile gerceklestirilmektedir.
                    </p>
                    <p>
                      {city.name} ilinde lipodem farkindaligin artmasi ve uzman
                      doktorlarin platformumuza katilmasi icin calismalarimiz
                      devam etmektedir. Sehrinizde bir lipodem klinigi veya uzmani
                      biliyorsaniz, bize iletisim sayfamiz uzerinden bildirebilirsiniz.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </>
          )}
        </div>
      </section>

      {/* Ortak Bilgi Bolumu: Lipodem tedavi secenekleri ozeti */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">
              Lipodem Tedavi Secenekleri
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Konservatif Tedavi",
                desc: "Kompresyon garmentleri, manuel lenf drenaji (MLD), kompleks dekongestif tedavi (KDT) ve pnomatik kompresyon.",
                href: "/lipodem-tedavisi",
              },
              {
                title: "Cerrahi Tedavi",
                desc: "VASER liposuction, tumescent liposuction ve WAL teknikleri ile lipodem yag dokusunun uzaklestirilmasi.",
                href: "/lipodem-tedavisi",
              },
              {
                title: "Yasam Tarzi",
                desc: "Anti-inflamatuar beslenme, lipodem-uyumlu egzersiz programlari ve psikolojik destek.",
                href: "/lipodem-beslenme",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <Link
                  href={item.href}
                  className="group block rounded-xl bg-white border border-stone-100 p-6 shadow-soft card-hover"
                >
                  <h3 className="text-base font-semibold text-stone-800 group-hover:text-[#15594A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center text-[#1A6B5A] text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    Daha fazla{" "}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ilgili Sehirler */}
      {relatedCities.length > 0 && (
        <section className="bg-stone-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-8">
                {city.region} Bolgesindeki Diger Sehirler
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedCities.map((rc, i) => (
                <ScrollReveal key={rc.slug} delay={i * 100}>
                  <Link
                    href={`/klinikler/${rc.slug}`}
                    className="group block rounded-xl bg-white border border-stone-100 p-4 shadow-soft card-hover text-center"
                  >
                    <h3 className="text-sm font-semibold text-stone-800 group-hover:text-[#15594A] transition-colors">
                      {rc.name}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      {rc.hasClinics
                        ? `${rc.clinicCount} klinik`
                        : "Yakinda"}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Semptom Testi CTA */}
      <section className="brand-gradient py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <ClipboardCheck className="w-6 h-6 text-white/80" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
              Lipodem olup olmadiginizi merak mi ediyorsunuz?
            </h2>
            <p className="mt-3 text-[#E8F5F0]/80 text-sm md:text-base max-w-lg mx-auto">
              12 soruluk ucretsiz semptom testimizi cozun, risk seviyenizi
              ogrenin.
            </p>
            <div className="mt-6">
              <Link
                href="/araclar/semptom-testi"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-[#15594A] transition-all duration-300"
              >
                Semptom Testini Coz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tibbi Disclaimer */}
      <section className="bg-white py-10">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-start gap-3 p-5 bg-stone-50 rounded-xl border border-stone-100">
            <Shield className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-500">Tibbi Sorumluluk Reddi:</strong>{" "}
              Bu sayfadaki bilgiler genel bilgilendirme amaclidir ve tibbi
              tavsiye yerine gecmez. Lipodem tanisi ve tedavisi icin mutlaka bir
              uzman doktora danismaniz gerekmektedir. Listelenen klinik ve
              doktorlar placeholder (yer tutucu) verilerdir; gercek klinik
              bilgileri dogrulama asamasindadir. Platform, listelenen kurumlarin
              hizmet kalitesi konusunda garanti vermez.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
