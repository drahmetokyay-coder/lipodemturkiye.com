"use client";

import { useEffect, useState } from "react";
import {
  RotateCcw,
  Printer,
  Download,
  AlertTriangle,
  Waves,
  Dumbbell,
} from "lucide-react";
import {
  RESULT_CONTENT,
  type TestResult,
} from "@/data/tests/egzersiz-tolerans-testi";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

interface ResultDisplayProps {
  result: TestResult;
  onRestart: () => void;
}

const FLAG_NOTES: Record<string, string> = {
  "aqua-recommended":
    "Yanıtlarınız ayakta ve yürüyerek yapılan aktivitede zorlandığınızı ama suda rahat ettiğinizi gösteriyor. Su içi egzersizler (aqua-fit, yüzme) sizin için ideal başlangıç seçeneğidir — eklem yükünü %80'e kadar azaltır.",
};

export function EgzersizToleransResult({
  result,
  onRestart,
}: ResultDisplayProps) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "egzersiz-tolerans-testi",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "egzersiz-tolerans-testi",
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
  const hasAqua = result.flags.includes("aqua-recommended");

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#E6F4EE] rounded-full flex items-center justify-center mx-auto mb-4">
            <Dumbbell className="w-8 h-8 text-[#2D8B73]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
            Test Tamamlandı
          </h2>
          <p className="text-[#2D3B36]/50 text-sm">
            Egzersiz tolerans değerlendirmeniz aşağıda
          </p>
        </div>

        <div className={`${content.bgColor} p-8 md:p-10`}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <svg className="w-32 h-32" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#E6F4EE"
                  strokeWidth="6"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#2D8B73"
                  strokeWidth="6"
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference * (1 - result.percentage / 100)
                  }
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[#2D3B36]">
                  %{result.percentage}
                </span>
                <span className="text-xs text-[#2D3B36]/50">tolerans</span>
              </div>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${content.badgeBg} ${content.badgeText}`}
            >
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">
              {result.totalScore} puan / {result.maxScore}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">
            {content.description}
          </p>

          <div className="bg-[#F0F8F4] border-l-4 border-[#2D8B73] p-5 rounded-r-xl mb-6">
            <p className="text-xs font-bold tracking-wider text-[#2D8B73] mb-2">
              KLİNİK YORUM
            </p>
            <p className="text-[#2D3B36] leading-relaxed text-[15px]">
              {content.clinicalInterpretation}
            </p>
          </div>

          {hasAqua && (
            <div className="bg-sky-50 border-l-4 border-sky-400 rounded-r-xl p-4 flex items-start gap-3 mb-6">
              <Waves className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold tracking-wider text-sky-700 mb-1">
                  SU İÇİ EGZERSİZ ÖNERİLDİ
                </p>
                <p className="text-sm text-sky-900 leading-relaxed">
                  {FLAG_NOTES["aqua-recommended"]}
                </p>
              </div>
            </div>
          )}

          {flagNotes.length > 0 && !hasAqua && (
            <div className="space-y-3 mb-6">
              {flagNotes.map((note, i) => (
                <div
                  key={i}
                  className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 flex items-start gap-3"
                >
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-900 leading-relaxed">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mb-2">
            <h3 className="text-lg font-bold text-[#2D3B36] mb-4">Öneriler:</h3>
            <ul className="space-y-3">
              {content.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-[#E6F4EE] text-[#2D8B73] rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
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
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2D8B73] text-white px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#236E5C] transition shadow-md"
          >
            <Download className="w-4 h-4" />
            Sonucu PDF indir
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#2D8B73] border border-[#2D8B73] px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#E6F4EE] transition"
          >
            <Printer className="w-4 h-4" />
            Tarayıcıdan yazdır
          </button>
        </div>
        <div className="mt-3 flex">
          <button
            onClick={onRestart}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-200 text-[#2D3B36]/70 hover:bg-stone-50 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Yeniden başla
          </button>
        </div>
      </div>

      <div className="p-5 bg-stone-50 rounded-2xl">
        <p className="text-xs text-[#2D3B36]/40 leading-relaxed">
          <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. Borg RPE 6-20
          skalası ve lipödeme uyarlı aktivite anketine dayalı bir ön
          değerlendirmedir. Kişiselleştirilmiş egzersiz programı yalnızca bir
          fizyoterapist veya hekim tarafından oluşturulmalıdır.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="egzersiz-tolerans-testi"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Egzersiz Tolerans Testi",
          bandLabel: content.title,
          scoreLine: `${result.totalScore} / ${result.maxScore} puan · %${result.percentage} tolerans`,
          percentage: result.percentage,
          clinicalInterpretation: content.clinicalInterpretation,
          steps: content.steps,
          flagNotes,
          filename: "egzersiz-tolerans-testi-sonuc",
        }}
      />
    </div>
  );
}
