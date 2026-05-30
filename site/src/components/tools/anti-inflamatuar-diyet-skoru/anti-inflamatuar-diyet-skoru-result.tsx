"use client";

import { useEffect, useState } from "react";
import { Apple, AlertTriangle, CheckCircle2, Download, Printer, RotateCcw } from "lucide-react";
import { RESULT_CONTENT, type TestResult } from "@/data/tests/anti-inflamatuar-diyet-skoru";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

interface Props {
  result: TestResult;
  onRestart: () => void;
}

const FLAG_NOTES: Record<string, string> = {
  "high-inflammation-diet":
    "Pro-inflamatuar gıdalar (işlenmiş ürün, kırmızı et, rafine karbonhidrat) baskın bir profil çiziyorsunuz. Bu profil, lipödemde TNF-alfa ve IL-6 düzeylerini yükselterek ağrı ve ödem hissini artırabilir.",
  "high-processed":
    "İşlenmiş gıda tüketiminiz yüksek seviyede. Paketli atıştırmalıklar lipödemdeki sistemik inflamasyonu körükler.",
  "high-red-meat":
    "Kırmızı ve işlenmiş et tüketiminiz haftalık öneri sınırının üzerinde. Akdeniz protokolü ayda 1-2 porsiyona indirilmesini önerir.",
  "high-sugar":
    "Rafine karbonhidrat ve eklenmiş şeker alımınız yüksek. İnsülin dalgalanmaları lipödem dokusunda yağ depolanmasını besler.",
};

const BAND_BADGE_CLASS: Record<TestResult["band"], string> = {
  LOW: "bg-[#FEF3E6] text-[#C46B3D]",
  MODERATE: "bg-[#FAF6EE] text-[#8B6B3D]",
  HIGH: "bg-[#E8F5F0] text-[#2D8B73]",
};

export function AntiInflamatuarDiyetSkoruResult({ result, onRestart }: Props) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "anti-inflamatuar-diyet-skoru",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "anti-inflamatuar-diyet-skoru",
      band: result.band,
      bandLabel: content.title,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.title]);

  const circumference = 2 * Math.PI * 54;
  const flagNotes = result.flags.map((f) => FLAG_NOTES[f]).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#FEF3E6] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#C46B3D]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">Test Tamamlandı</h2>
          <p className="text-[#2D3B36]/50 text-sm">Anti-İnflamatuar Diyet Skorunuz</p>
        </div>

        <div className={`${content.bgColor} p-8 md:p-10`}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <svg className="w-32 h-32" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#ffffff" strokeWidth="6" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#C46B3D"
                  strokeWidth="6"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference * (1 - result.percentage / 100)}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#2D3B36]">%{result.percentage}</span>
                <span className="text-xs text-[#2D3B36]/50">uyum oranı</span>
              </div>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${BAND_BADGE_CLASS[result.band]}`}
            >
              <Apple className="w-4 h-4" />
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">
              {result.totalScore} puan / {result.maxScore}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">{content.description}</p>

          <div className="bg-[#FAF7F2] border-l-4 border-[#8B6B3D] p-5 rounded-r-xl mb-6">
            <div className="text-[10px] font-bold tracking-wider text-[#8B6B3D] mb-2">
              KLİNİK YORUM
            </div>
            <p className="text-[#2D3B36]/80 leading-relaxed text-[15px]">
              {content.clinicalInterpretation}
            </p>
          </div>

          {flagNotes.length > 0 && (
            <div className="space-y-3 mb-6">
              {flagNotes.map((note, i) => (
                <div
                  key={i}
                  className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 flex items-start gap-3"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mb-2">
            <h3 className="text-lg font-bold text-[#2D3B36] mb-4">Sıradaki adımlar:</h3>
            <ul className="space-y-3">
              {content.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-[#FEF3E6] text-[#C46B3D] rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[#2D3B36]/70">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <RecommendationCard
        blogs={recommendation.blogs}
        nextTest={recommendation.nextTest}
        expertCategory={recommendation.expertCategory}
        band={result.band}
      />

      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 print:hidden">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C46B3D] text-white px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#A95830] transition shadow-md"
          >
            <Download className="w-4 h-4" />
            Sonucu PDF indir
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#C46B3D] border border-[#C46B3D] px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#FEF3E6] transition"
          >
            <Printer className="w-4 h-4" />
            Tarayıcıdan yazdır
          </button>
        </div>
        <div className="mt-3">
          <button
            onClick={onRestart}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-200 text-[#2D3B36]/70 hover:bg-stone-50 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Yeniden başla
          </button>
        </div>
      </div>

      <div className="p-5 bg-stone-50 rounded-2xl">
        <p className="text-xs text-[#2D3B36]/40 leading-relaxed">
          <strong>Uyarı:</strong> Bu test bir tanı veya kişiselleştirilmiş diyet planı değildir.
          Mediterranean Diet Score (MDS) ve AHEI-2010 ölçeklerinden uyarlanmış bir ön
          değerlendirmedir. Tıbbi beslenme tedavisi yalnızca lipödem konusunda deneyimli bir
          diyetisyen tarafından planlanabilir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="anti-inflamatuar-diyet-skoru"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Anti-İnflamatuar Diyet Skoru",
          bandLabel: content.title,
          scoreLine: `${result.totalScore} / ${result.maxScore} puan · %${result.percentage} uyum`,
          percentage: result.percentage,
          clinicalInterpretation: content.clinicalInterpretation,
          steps: content.steps,
          flagNotes,
          filename: "anti-inflamatuar-diyet-skoru-sonuc",
        }}
      />
    </div>
  );
}
