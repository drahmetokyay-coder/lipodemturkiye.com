"use client";

import { useEffect, useState } from "react";
import {
  RESULT_CONTENT,
  type TestResult,
} from "@/data/tests/agri-vas-skoru";
import { RotateCcw, Printer, Download, AlertTriangle, HeartPulse } from "lucide-react";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

const ACCENT = "#C46B3D";
const ACCENT_DARK = "#A55530";
const ACCENT_BG = "#FEF3E6";

const FLAG_NOTES: Record<string, string> = {
  "unilateral-pain":
    "Ağrınızı tek taraflı olarak bildirdiniz. Lipödem klasik olarak iki taraflı simetriktir; tek taraflı ağrı venöz, lenfatik veya kas-iskelet kaynaklı bir başka nedeni düşündürebilir. Bir uzman tarafından muayene edilmenizi öneririz.",
};

const BAND_COLOR: Record<string, string> = {
  LOW: "#10b981",
  MODERATE: "#f59e0b",
  HIGH: "#e11d48",
};

const BAND_CHIP: Record<string, string> = {
  LOW: "bg-emerald-100 text-emerald-700",
  MODERATE: "bg-amber-100 text-amber-700",
  HIGH: "bg-rose-100 text-rose-700",
};

interface Props {
  result: TestResult;
  onRestart: () => void;
}

export function VasResult({ result, onRestart }: Props) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "agri-vas-skoru",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "agri-vas-skoru",
      band: result.band,
      bandLabel: content.title,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.title]);

  const ringColor = BAND_COLOR[result.band] ?? ACCENT;
  const ringPercentage = Math.min(100, Math.max(0, result.percentage));
  const flagNotes = result.flags.map((f) => FLAG_NOTES[f]).filter(Boolean);
  const scoreLine = `${result.totalScore} / ${result.maxScore} puan · %${result.percentage} VAS skoru`;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: ACCENT_BG }}
          >
            <HeartPulse className="w-8 h-8" style={{ color: ACCENT }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
            Ağrı VAS Sonucu
          </h2>
          <p className="text-[#2D3B36]/50 text-sm">Lipödem ağrı şiddet ölçümü</p>
        </div>

        <div className={`${content.bgColor} p-8 md:p-10`}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div
                className="w-32 h-32 rounded-full flex items-center justify-center"
                style={{
                  background: `conic-gradient(${ringColor} ${ringPercentage}%, #e7e5e4 0)`,
                }}
              >
                <div className="w-[110px] h-[110px] bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-[#2D3B36]">
                    %{ringPercentage}
                  </span>
                  <span className="text-xs text-[#2D3B36]/50">ağrı yükü</span>
                </div>
              </div>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${BAND_CHIP[result.band] ?? "bg-stone-100 text-stone-700"}`}
            >
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">{scoreLine}</p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-4">
            {content.description}
          </p>

          {result.bandReason && (
            <div
              className="border-l-4 p-4 rounded-r-xl mb-6"
              style={{
                backgroundColor: ACCENT_BG,
                borderColor: ACCENT,
              }}
            >
              <p className="text-sm text-[#2D3B36] leading-relaxed">
                <strong>Klinik yorum:</strong> {content.clinicalInterpretation}
              </p>
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
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold mt-0.5"
                    style={{ backgroundColor: ACCENT_BG, color: ACCENT }}
                  >
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
            className="flex-1 inline-flex items-center justify-center gap-2 text-white px-5 py-3.5 rounded-2xl font-semibold transition shadow-md"
            style={{ backgroundColor: ACCENT }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
          >
            <Download className="w-4 h-4" />
            Sonucu PDF indir
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white border px-5 py-3.5 rounded-2xl font-semibold transition"
            style={{ color: ACCENT, borderColor: ACCENT }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_BG)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
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
          <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. Visual Analog
          Scale (VAS) ve Brief Pain Inventory kısa formuna dayalı bir ağrı şiddet
          ölçümüdür. Ağrı yönetimi multidisipliner bir yaklaşım gerektirir; tedavi
          kararları bir sağlık profesyoneli tarafından verilmelidir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="agri-vas-skoru"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Ağrı VAS Skoru",
          bandLabel: content.title,
          scoreLine,
          percentage: ringPercentage,
          clinicalInterpretation: content.clinicalInterpretation,
          steps: content.steps,
          flagNotes,
          filename: "agri-vas-skoru-sonuc",
        }}
      />
    </div>
  );
}
