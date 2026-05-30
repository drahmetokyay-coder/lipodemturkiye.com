import type { Metadata } from "next";
import { ScrollReveal } from "@/components/marketing/scroll-reveal";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { RegionFilter } from "@/components/clinic/region-filter";
import { cities, getCitiesWithClinics } from "@/data/cities";
import {
  MapPin,
  Building2,
  Users,
  ArrowRight,
  Shield,
  Search,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lipodem Klinikleri ve Doktorlari | 81 Il Rehberi",
  description:
    "Turkiye genelinde lipodem tedavisi yapan klinikler ve uzman doktorlar. 81 ilde klinik arama, bolge filtreleme ve uzman yonlendirme.",
  openGraph: {
    title: "Lipodem Klinikleri ve Doktorlari | 81 Il Rehberi",
    description:
      "Turkiye genelinde lipodem tedavisi yapan klinikler ve uzman doktorlar. Sehrinizdeki en yakin lipodem uzmanini bulun.",
  },
};

export default function KliniklerPage() {
  const citiesWithClinics = getCitiesWithClinics();
  const totalClinics = cities.reduce((sum, c) => sum + c.clinicCount, 0);
  const totalDoctors = cities.reduce((sum, c) => sum + c.doctorCount, 0);

  return (
    <>
      {/* Hero / Baslik Bolumu */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Breadcrumb */}
          <ScrollReveal>
            <Breadcrumbs
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Klinikler", href: "/klinikler" },
              ]}
            />
          </ScrollReveal>

          {/* Baslik */}
          <ScrollReveal delay={100}>
            <div className="mt-8 text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a2e]">
                Sehrinizdeki Lipodem Uzmanini Bulun
              </h1>
              <p className="mt-5 text-stone-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Turkiye genelinde 81 ilde lipodem tedavisi yapan klinikleri ve
                uzman doktorlari kesfetmek icin sehrinizi secin.
              </p>
            </div>
          </ScrollReveal>

          {/* Istatistik bari */}
          <ScrollReveal delay={200}>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="text-center p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <MapPin className="w-4 h-4 text-[#1A6B5A]" />
                </div>
                <p className="text-xl md:text-2xl font-bold text-stone-800">
                  81
                </p>
                <p className="text-xs text-stone-400 mt-0.5">il</p>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Building2 className="w-4 h-4 text-[#1A6B5A]" />
                </div>
                <p className="text-xl md:text-2xl font-bold text-stone-800">
                  {totalClinics}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">klinik</p>
              </div>
              <div className="text-center p-4 bg-stone-50 rounded-xl">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <Users className="w-4 h-4 text-[#1A6B5A]" />
                </div>
                <p className="text-xl md:text-2xl font-bold text-stone-800">
                  {totalDoctors}
                </p>
                <p className="text-xs text-stone-400 mt-0.5">uzman doktor</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bolge Filtre + Sehir Kartlari */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8 flex items-center gap-2">
              <Search className="w-5 h-5 text-[#1A6B5A]" />
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                Bolgeye Gore Filtrele
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <RegionFilter cities={cities} />
          </ScrollReveal>
        </div>
      </section>

      {/* Nasil Calisir Bolumu */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e]">
                Klinik bulucu nasil calisir?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                title: "Sehrinizi secin",
                desc: "81 il arasinda yasiniz yeri veya en yakin sehri secin.",
              },
              {
                num: "02",
                title: "Klinikleri inceleyin",
                desc: "Sehrinize ait lipodem kliniklerini, tedavi yontemlerini ve uzman doktorlari goruntuleyin.",
              },
              {
                num: "03",
                title: "Randevu alin",
                desc: "Size uygun klinikle iletisime gecin ve ilk danisma randevunuzu alin.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 150}>
                <div className="text-center">
                  <span className="font-serif text-4xl md:text-5xl font-bold text-[#93D4BE] select-none">
                    {step.num}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-stone-800">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bant */}
      <section className="brand-gradient py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
              Lipodem olup olmadiginizi merak mi ediyorsunuz?
            </h2>
            <p className="mt-3 text-[#E8F5F0]/80 text-sm md:text-base max-w-lg mx-auto">
              2 dakikalik ucretsiz semptom testimizi cozun, risk seviyenizi
              ogrenin.
            </p>
            <div className="mt-6">
              <Link
                href="/araclar/lipodem-semptom-testi"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white border-2 border-white/80 hover:bg-white hover:text-[#15594A] transition-all duration-300"
              >
                Semptom Testini Coz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-10">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-start gap-3 p-5 bg-stone-50 rounded-xl border border-stone-100">
            <Shield className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
            <p className="text-xs text-stone-400 leading-relaxed">
              <strong className="text-stone-500">Tibbi Sorumluluk Reddi:</strong>{" "}
              Bu sayfadaki bilgiler genel bilgilendirme amaclidir ve tibbi
              tavsiye yerine gecmez. Lipodem tanisi ve tedavisi icin mutlaka bir
              uzman doktora danismaniz gerekmektedir. Platform, listelenen
              klinik ve doktorlarin hizmet kalitesi konusunda garanti vermez.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
