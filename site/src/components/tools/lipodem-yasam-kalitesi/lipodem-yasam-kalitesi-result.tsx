"use client";

import { useEffect, useState } from "react";
import {
  RESULT_CONTENT,
  type TestResult,
  type QuestionDomain,
} from "@/data/tests/lipodem-yasam-kalitesi";
import {
  RotateCcw,
  Printer,
  Download,
  AlertTriangle,
  CheckCircle2,
  Activity,
} from "lucide-react";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

interface Props {
  result: TestResult;
  onRestart: () => void;
}

const FLAG_NOTES: Record<string, string> = {
  "severe-mobility-impact":
    "Hareket alanında belirgin kısıtlılık bildirdiniz. Egzersiz tolerans testimizi yaparak güvenli aktivite aralığınızı belirlemenizi öneririz.",
};

const DOMAIN_LABEL: Record<QuestionDomain, string> = {
  mobility: "Hareket",
  "daily-activities": "Günlük yaşam",
  "body-image": "Beden algısı",
  "pain-impact": "Ağrı etkisi",
  sleep: "Uyku",
  "social-participation": "Sosyal katılım",
  "emotional-wellbeing": "Duygusal alan",
};

function bandColorHex(band: TestResult["band"]) {
  if (band === "LOW") return "#10b981";
  if (band === "MODERATE") return "#f59e0b";
  return "#e11d48";
}

export function LipodemYasamKalitesiResult({ result, onRestart }: Props) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "lipodem-yasam-kalitesi",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "lipodem-yasam-kalitesi",
      band: result.band,
      bandLabel: content.title,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.title]);

  const flagNotes = result.flags.map((f) => FLAG_NOTES[f]).filter(Boolean);
  const ringColor = bandColorHex(result.band);

  // conic-gradient ring stops
  const ringStyle = {
    background: `conic-gradient(${ringColor} 0% ${result.percentage}%, #E8F5F0 ${result.percentage}% 100%)`,
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#1A6B5A]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
            Test Tamamlandı
          </h2>
          <p className="text-[#2D3B36]/50 text-sm">Yaşam kalitesi değerlendirmeniz aşağıda</p>
        </div>

        <div className={`${content.bgColor} p-8 md:p-10`}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6 w-36 h-36">
              <div
                className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
                style={ringStyle}
              />
              <div className="absolute inset-2 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                <span className="text-3xl font-bold text-[#2D3B36]">
                  %{result.percentage}
                </span>
                <span className="text-[10px] tracking-wider text-[#2D3B36]/50 uppercase mt-0.5">
                  yaşam etkisi
                </span>
              </div>
            </div>

            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3"
              style={{
                backgroundColor:
                  result.band === "LOW"
                    ? "#d1fae5"
                    : result.band === "MODERATE"
                      ? "#fef3c7"
                      : "#ffe4e6",
                color:
                  result.band === "LOW"
                    ? "#065f46"
                    : result.band === "MODERATE"
                      ? "#92400e"
                      : "#9f1239",
              }}
            >
              <Activity className="w-4 h-4" />
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">
              {result.totalScore} puan / {result.maxScore} &middot; yüksek puan = daha
              düşük yaşam kalitesi
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">
            {content.description}
          </p>

          <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-5 mb-6">
            <p className="text-[10px] font-bold tracking-wider text-[#8B6B3D] mb-2">
              KLİNİK YORUM
            </p>
            <p className="text-sm text-[#2D3B36]/75 leading-relaxed">
              {content.clinicalInterpretation}
            </p>
          </div>

          {/* Domain breakdown */}
          <div className="mb-6">
            <p className="text-[10px] font-bold tracking-wider text-[#1A6B5A] mb-3">
              ALAN BAZLI ETKİ (%)
            </p>
            <div className="space-y-2.5">
              {(Object.keys(result.domainSummary) as QuestionDomain[]).map((d) => {
                const v = result.domainSummary[d];
                return (
                  <div key={d}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-medium text-[#2D3B36]/70">
                        {DOMAIN_LABEL[d]}
                      </span>
                      <span className="text-[#2D3B36]/50">%{v}</span>
                    </div>
                    <div className="h-2 bg-[#F0F8F4] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${v}%`,
                          backgroundColor:
                            v < 35 ? "#10b981" : v < 65 ? "#f59e0b" : "#e11d48",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
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
            <h3 className="text-lg font-bold text-[#2D3B36] mb-4">
              Sıradaki adımlar:
            </h3>
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
        band={result.band}
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
          <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. LYMPH-ICF-LL ve
          EQ-5D-3L ölçeklerinden uyarlanmış 14 soruluk yaşam kalitesi taramasıdır.
          Klinik karar ve tedavi planı, lipödem konusunda deneyimli bir sağlık
          profesyoneliyle birlikte oluşturulmalıdır.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="lipodem-yasam-kalitesi"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Lipodem Yasam Kalitesi Testi",
          bandLabel: content.title,
          scoreLine: `${result.totalScore} / ${result.maxScore} puan · %${result.percentage} yasam etkisi`,
          percentage: result.percentage,
          clinicalInterpretation: content.clinicalInterpretation,
          steps: content.steps,
          flagNotes,
          filename: "lipodem-yasam-kalitesi-sonuc",
        }}
      />
    </div>
  );
}
