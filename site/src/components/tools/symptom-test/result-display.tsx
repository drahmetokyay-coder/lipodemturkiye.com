"use client";

import { useEffect, useState } from "react";
import { RESULT_CONTENT, type TestResult } from "@/data/symptom-questions";
import { Share2, RotateCcw, Printer, Download, AlertTriangle, CheckCircle2 } from "lucide-react";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

interface ResultDisplayProps {
  result: TestResult;
  onRestart: () => void;
}

const FLAG_NOTES: Record<string, string> = {
  unilateral: "Tek taraflı şişlik bildirdiniz. Lipödem/lenfödem ayırıcı tanı testini de yapmanızı öneririz.",
  "pitting-edema": "Belirgin pitting (gode) edema, daha çok lenfödem ile uyumludur. Bir uzmana başvurunuz.",
};

export function ResultDisplay({ result, onRestart }: ResultDisplayProps) {
  const content = RESULT_CONTENT[result.riskLevel];
  const recommendation = recommend({
    slug: "lipodem-semptom-testi",
    band: result.riskLevel,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "lipodem-semptom-testi",
      band: result.riskLevel,
      bandLabel: content.title,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.title]);

  const handleShare = () => {
    const text = `Lipödem Semptom Testi sonucum: ${content.title}. Sen de dene:`;
    const url = "https://lipodemturkiye.com/araclar/lipodem-semptom-testi";

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: "Lipödem Semptom Testi", text, url }).catch(() => {});
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  const circumference = 2 * Math.PI * 54;
  const flagNotes = result.flags.map((f) => FLAG_NOTES[f]).filter(Boolean);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#1A6B5A]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">Test Tamamlandı</h2>
          <p className="text-[#2D3B36]/50 text-sm">Sonuçlarınız aşağıda</p>
        </div>

        <div className={`${content.bgColor} p-8 md:p-10`}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <svg className="w-32 h-32" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#E8F5F0" strokeWidth="6" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#1A6B5A"
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
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${
                result.riskLevel === "LOW"
                  ? "bg-green-100 text-green-700"
                  : result.riskLevel === "MODERATE"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
              }`}
            >
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">
              {result.totalScore} puan / {result.maxScore}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">{content.description}</p>

          {content.empathyMessage && (
            <div className="bg-[#E8F5F0] border-l-4 border-[#1A6B5A] p-5 rounded-r-xl mb-6">
              <p className="text-[#2D3B36] font-medium leading-relaxed">{content.empathyMessage}</p>
            </div>
          )}

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
            <h3 className="text-lg font-bold text-[#2D3B36] mb-4">Öneriler:</h3>
            <ul className="space-y-3">
              {content.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-[#E8F5F0] text-[#1A6B5A] rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
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
        band={result.riskLevel}
      />

      <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 print:hidden">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1A6B5A] text-white px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#15594B] transition shadow-md"
          >
            <Download className="w-4 h-4" />
            Sonucu PDF indir
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#1A6B5A] border border-[#1A6B5A] px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#E8F5F0] transition"
          >
            <Printer className="w-4 h-4" />
            Tarayıcıdan yazdır
          </button>
        </div>
        <div className="mt-3 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleShare}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-200 text-[#2D3B36]/70 hover:bg-stone-50 transition"
          >
            <Share2 className="w-4 h-4" />
            Sonucu paylaş
          </button>
          <button
            onClick={onRestart}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-200 text-[#2D3B36]/70 hover:bg-stone-50 transition"
          >
            <RotateCcw className="w-4 h-4" />
            Testi tekrar çöz
          </button>
        </div>
      </div>

      <div className="p-5 bg-stone-50 rounded-2xl">
        <p className="text-xs text-[#2D3B36]/40 leading-relaxed">
          <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. 2025 Delphi Konsensüsü ve 2024
          Alman S2k Kılavuzu kriterlerine dayalı bir ön değerlendirmedir. Kesin tanı ve tedavi
          kararları yalnızca lipödem konusunda deneyimli bir sağlık profesyoneli tarafından
          verilmelidir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="lipodem-semptom-testi"
        band={result.riskLevel}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Lipodem Semptom Testi",
          bandLabel: content.title,
          scoreLine: `${result.totalScore} / ${result.maxScore} puan · %${result.percentage} uyum`,
          percentage: result.percentage,
          clinicalInterpretation: content.description,
          steps: content.steps,
          flagNotes,
          filename: "lipodem-semptom-testi-sonuc",
        }}
      />
    </div>
  );
}
