"use client";

import { useEffect, useState } from "react";
import {
  RESULT_CONTENT,
  type TestResult,
} from "@/data/tests/bel-kalca-orani-whr";
import {
  RotateCcw,
  Printer,
  Download,
  AlertTriangle,
  CheckCircle2,
  Ruler,
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
  "non-lipedema-pattern":
    "Yüksek bel-kalça oranı ve orantısızlık olmaması, lipödem dışı yağ dağılım paternlerini (santral obezite, metabolik sendrom) düşündürür. Bu bir tanı değildir; bir doktora danışmanız önerilir.",
  "strong-classic-pattern":
    "Çok düşük bel-kalça oranı (<0.70) ve belirgin orantısızlık, lipödemin klasik patern bulgusudur. Semptom ve evre testlerini tamamlamanızı öneririz.",
};

function bandColorHex(band: TestResult["band"]) {
  if (band === "LOW") return "#10b981";
  if (band === "MODERATE") return "#f59e0b";
  return "#e11d48";
}

function whrCategory(whr: number): string {
  if (whr < 0.78) return "Düşük WHR (lipödem klasik patern aralığı)";
  if (whr <= 0.85) return "Sınır WHR (WHO kadın referansı)";
  return "Yüksek WHR (WHO kadın referansının üzerinde)";
}

export function BelKalcaOraniWhrResult({ result, onRestart }: Props) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "bel-kalca-orani-whr",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    saveResult({
      slug: "bel-kalca-orani-whr",
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

  const ringStyle = {
    background: `conic-gradient(${ringColor} 0% ${result.percentage}%, #FAF3E6 ${result.percentage}% 100%)`,
  };

  const disproportionLabel =
    result.disproportionScore >= 5
      ? "Belirgin orantısızlık"
      : result.disproportionScore >= 3
        ? "Sınırda orantısızlık"
        : "Orantılı görünüm";

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#FAF3E6] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#8B6B3D]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
            Test Tamamlandı
          </h2>
          <p className="text-[#2D3B36]/50 text-sm">
            Bel-kalça oranınız ve patern uyumunuz aşağıda
          </p>
        </div>

        <div className={`${content.bgColor} p-8 md:p-10`}>
          <div className="flex flex-col items-center">
            <div className="relative mb-6 w-36 h-36">
              <div
                className="absolute inset-0 rounded-full transition-all duration-700 ease-out"
                style={ringStyle}
              />
              <div className="absolute inset-2 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                <span className="text-xs tracking-wider text-[#2D3B36]/50 uppercase">
                  Tahmini WHR
                </span>
                <span className="text-3xl font-bold text-[#2D3B36]">
                  {result.whr.toFixed(2)}
                </span>
                <span className="text-[10px] tracking-wider text-[#2D3B36]/50 uppercase mt-0.5">
                  bel / kalça
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
              <Ruler className="w-4 h-4" />
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/55 text-center max-w-xs">
              {whrCategory(result.whr)}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          {/* Measurement summary */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            <div className="bg-[#FAF7F2] rounded-2xl p-4 text-center">
              <div className="text-[10px] tracking-wider text-[#8B6B3D] font-bold">
                BEL (TAHMİNİ)
              </div>
              <div className="text-xl font-bold text-[#2D3B36] mt-1">
                ~{result.waistMid}
                <span className="text-xs text-[#2D3B36]/50 ml-0.5">cm</span>
              </div>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl p-4 text-center">
              <div className="text-[10px] tracking-wider text-[#8B6B3D] font-bold">
                KALÇA (TAHMİNİ)
              </div>
              <div className="text-xl font-bold text-[#2D3B36] mt-1">
                ~{result.hipMid}
                <span className="text-xs text-[#2D3B36]/50 ml-0.5">cm</span>
              </div>
            </div>
            <div className="bg-[#FAF7F2] rounded-2xl p-4 text-center">
              <div className="text-[10px] tracking-wider text-[#8B6B3D] font-bold">
                ORANTI
              </div>
              <div className="text-[13px] font-bold text-[#2D3B36] mt-1 leading-tight">
                {disproportionLabel}
              </div>
            </div>
          </div>

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

          {/* WHR reference scale */}
          <div className="mb-6">
            <p className="text-[10px] font-bold tracking-wider text-[#8B6B3D] mb-3">
              WHR REFERANSI (KADIN)
            </p>
            <div className="relative h-3 bg-gradient-to-r from-rose-300 via-emerald-200 to-amber-300 rounded-full">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2D3B36] border-2 border-white shadow-md transition-all"
                style={{
                  left: `${Math.min(
                    Math.max(((result.whr - 0.6) / (1.0 - 0.6)) * 100, 0),
                    100
                  )}%`,
                  transform: "translate(-50%, -50%)",
                }}
                aria-label={`Sizin WHR: ${result.whr.toFixed(2)}`}
              />
            </div>
            <div className="flex justify-between text-[10px] text-[#2D3B36]/50 mt-2">
              <span>0.60</span>
              <span>0.78</span>
              <span>0.85</span>
              <span>1.00</span>
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
                  <span className="flex-shrink-0 w-7 h-7 bg-[#FAF3E6] text-[#8B6B3D] rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
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
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#8B6B3D] text-white px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#6F542E] transition shadow-md"
          >
            <Download className="w-4 h-4" />
            Sonucu PDF indir
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#8B6B3D] border border-[#8B6B3D] px-5 py-3.5 rounded-2xl font-semibold hover:bg-[#FAF3E6] transition"
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
          <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. WHR ölçümü
          antropometrik bir ipucudur; lipödem tanısı yalnızca konusunda deneyimli bir
          hekimin klinik muayenesiyle konulur. WHO kesim değerleri ve Allen-Hines
          lipödem patern kriterlerine dayalı eğitim amaçlı bir değerlendirmedir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="bel-kalca-orani-whr"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Bel-Kalca Orani (WHR) Testi",
          bandLabel: content.title,
          scoreLine: `Tahmini WHR: ${result.whr.toFixed(2)} · Patern uyumu: ${content.title}`,
          percentage: result.percentage,
          clinicalInterpretation: content.clinicalInterpretation,
          steps: content.steps,
          flagNotes,
          filename: "bel-kalca-orani-whr-sonuc",
        }}
      />
    </div>
  );
}
