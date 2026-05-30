import Link from "next/link";
import { BookOpen, FlaskConical, UserRound, ArrowRight } from "lucide-react";
import { categoryLabels, type ExpertCategory } from "@/data/experts";
import type { Band, BlogRef, NextTestRef } from "@/lib/recommendations";

interface Props {
  blogs: BlogRef[];
  nextTest: NextTestRef | null;
  expertCategory: ExpertCategory;
  band: Band;
}

const EXPERT_CITY_HINT: Record<ExpertCategory, string> = {
  doktor: "Lipödem konusunda deneyimli doktor",
  cerrah: "Lipödem cerrahisi deneyimli plastik cerrah",
  diyetisyen: "Anti-inflamatuar beslenme uzmanı diyetisyen",
  fizyoterapist: "Lenf drenaj / kompresyon uzmanı fizyoterapist",
};

const BAND_EXPERT_REASON: Record<Band, string> = {
  LOW: "Mevcut sonucunuzda klinik değerlendirme acil değil; takip için uzmanlara başvurabilirsiniz.",
  MODERATE: "Belirtileriniz uzman değerlendirmesi gerektiriyor.",
  HIGH: "Yüksek bandda olduğunuz için klinik değerlendirme önerilir.",
};

export function RecommendationCard({ blogs, nextTest, expertCategory, band }: Props) {
  const expertHref = `/uzmanlar?kategori=${expertCategory}`;
  return (
    <section aria-label="Önerilen sonraki adımlar" className="mt-8">
      <div className="text-[11px] font-bold tracking-[2px] text-[#8B6B3D] mb-3">
        SIRADAKİ ADIMLAR
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#E8F5F0] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-[#1A6B5A]" />
          </div>
          <div className="text-[10px] font-bold tracking-wider text-[#1A6B5A] mt-3">ÖĞREN</div>
          <div className="text-[15px] font-bold text-[#2D3B36] mt-1 leading-tight">
            Size özel {blogs.length} yazı
          </div>
          <ul className="mt-3 text-[13px] text-[#5a6a64] space-y-2">
            {blogs.map((b) => (
              <li key={b.slug} className="border-b border-dashed border-stone-200 pb-2 last:border-0 last:pb-0">
                <Link href={b.slug} className="hover:text-[#1A6B5A] transition flex items-start gap-1.5">
                  <span aria-hidden className="text-[#1A6B5A] mt-0.5">•</span>
                  <span>{b.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {nextTest ? (
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F0] flex items-center justify-center">
              <FlaskConical className="w-5 h-5 text-[#2D8B73]" />
            </div>
            <div className="text-[10px] font-bold tracking-wider text-[#2D8B73] mt-3">SIRADAKİ TEST</div>
            <div className="text-[15px] font-bold text-[#2D3B36] mt-1 leading-tight">{nextTest.title}</div>
            <p className="text-[13px] text-[#5a6a64] mt-3 leading-relaxed">{nextTest.rationale}</p>
            <Link
              href={`/araclar/${nextTest.slug}`}
              className="mt-4 inline-flex items-center justify-center gap-1.5 w-full bg-[#2D8B73] text-white py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#236E5C] transition"
            >
              Testi başlat <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="bg-[#FAF7F2] rounded-2xl p-5 border border-stone-200">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F0] flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#1A6B5A]" />
            </div>
            <div className="text-[10px] font-bold tracking-wider text-[#1A6B5A] mt-3">DAHA FAZLA OKU</div>
            <div className="text-[15px] font-bold text-[#2D3B36] mt-1 leading-tight">
              Lipödem rehberi
            </div>
            <p className="text-[13px] text-[#5a6a64] mt-3 leading-relaxed">
              Lipödem yolculuğunuzun bu aşamasında okuyabileceğiniz ek kaynaklar.
            </p>
            <Link
              href="/lipodem-turkiye-rehberi"
              className="mt-4 inline-flex items-center justify-center gap-1.5 w-full bg-[#1A6B5A] text-white py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#15594B] transition"
            >
              Rehbere git <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#FEF3E6] flex items-center justify-center">
            <UserRound className="w-5 h-5 text-[#C46B3D]" />
          </div>
          <div className="text-[10px] font-bold tracking-wider text-[#C46B3D] mt-3">UZMAN</div>
          <div className="text-[15px] font-bold text-[#2D3B36] mt-1 leading-tight">
            {categoryLabels[expertCategory]}
          </div>
          <p className="text-[13px] text-[#5a6a64] mt-3 leading-relaxed">
            {EXPERT_CITY_HINT[expertCategory]}. {BAND_EXPERT_REASON[band]}
          </p>
          <Link
            href={expertHref}
            className="mt-4 inline-flex items-center justify-center gap-1.5 w-full bg-white text-[#C46B3D] border border-[#C46B3D] py-2.5 rounded-lg text-[13px] font-semibold hover:bg-[#FEF3E6] transition"
          >
            Uzman dizinine git <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
