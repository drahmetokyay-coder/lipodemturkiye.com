"use client";

import { useEffect, useState } from "react";
import { STAGE_RESULT_CONTENT, type StageResult, type StageLevel } from "@/data/stage-questions";
import { Share2, RotateCcw, Printer, Download, CheckCircle2 } from "lucide-react";
import { saveResult } from "@/lib/test-storage";
import { recommend, type Band } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

interface StageResultDisplayProps {
  result: StageResult;
  onRestart: () => void;
}

const STAGE_TO_BAND: Record<StageLevel, Band> = {
  STAGE_1: "LOW",
  STAGE_2: "MODERATE",
  STAGE_3: "HIGH",
};

export function StageResultDisplay({ result, onRestart }: StageResultDisplayProps) {
  const content = STAGE_RESULT_CONTENT[result.stageLevel];
  const band = STAGE_TO_BAND[result.stageLevel];

  const recommendation = recommend({
    slug: "lipodem-evre-belirleme",
    band,
    flags: [],
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "lipodem-evre-belirleme",
      band: result.stageLevel,
      bandLabel: content.stageName,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.stageName]);

  const handleShare = () => {
    const text = `Lipödem Evre Değerlendirme sonucum: ${content.stageName}. Sen de dene:`;
    const url = "https://lipodemturkiye.com/araclar/lipodem-evre-belirleme";

    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: "Lipödem Evre Değerlendirme", text, url }).catch(() => {});
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  const circumference = 2 * Math.PI * 54;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#1A6B5A]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
            Değerlendirme Tamamlandı
          </h2>
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
                <span className="text-2xl font-bold text-[#2D3B36]">{content.stageName}</span>
                <span className="text-xs text-[#2D3B36]/50">tahmini evre</span>
              </div>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${content.iconBg}`}
            >
              <span className={`font-semibold text-sm ${content.color}`}>{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">
              {result.totalScore} puan / {result.maxScore}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">{content.description}</p>

          <div className="bg-[#E8F5F0] border-l-4 border-[#1A6B5A] p-5 rounded-r-xl mb-6">
            <p className="text-[#2D3B36] font-medium leading-relaxed">
              Bu sonucu aldıysanız, bunun kesin bir tanı olmadığını hatırlatmak isteriz. Lipödem
              evreleri yalnızca klinik muayene ile belirlenebilir. Bu araç, doktor görüşmenize
              hazırlanmanıza yardımcı olmayı amaçlamaktadır.
            </p>
          </div>

          <div className="mb-2">
            <h3 className="text-lg font-bold text-[#2D3B36] mb-4">Bu evre için öneriler:</h3>
            <ul className="space-y-3">
              {content.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-[#E8F5F0] text-[#1A6B5A] rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[#2D3B36]/70">{rec}</span>
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
        band={band}
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
          <strong>Uyarı:</strong> Bu araç bir tanı aracı değildir ve kesin tanı yerine geçmez.
          Lipödem evreleri yalnızca lipödem konusunda deneyimli bir sağlık profesyonelinin klinik
          muayenesi ile belirlenebilir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="lipodem-evre-belirleme"
        band={result.stageLevel}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Lipodem Evre Belirleme",
          bandLabel: `${content.stageName} - ${content.title}`,
          scoreLine: `${result.totalScore} / ${result.maxScore} puan · %${result.percentage}`,
          percentage: result.percentage,
          clinicalInterpretation: content.description,
          steps: content.recommendations,
          filename: "lipodem-evre-belirleme-sonuc",
        }}
      />
    </div>
  );
}
