"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  RESULT_CONTENT,
  type TestResult,
} from "@/data/tests/lipodem-lenfodem-ayirici-tani";
import { RotateCcw, Printer, Download, AlertTriangle } from "lucide-react";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

const ACCENT = "#6B7B99";
const ACCENT_DARK = "#56688A";
const ACCENT_BG = "#EEF1F7";
const LIPO_IMG = "/tests/lipodem-legs.webp";
const LENF_IMG = "/tests/lenfodem-legs.webp";

const FLAG_NOTES: Record<string, string> = {
  "stemmer-positive":
    "Stemmer işareti pozitif olduğunu bildirdiniz. Bu lenfödem için spesifik bir bulgudur; klinik komponent ne olursa olsun fizik tedavi ve rehabilitasyon (FTR) uzmanı değerlendirmesi öncelik kazanır.",
};

const BAND_COLOR: Record<string, string> = {
  HIGH: "#0f7a55",
  MODERATE: "#46566f",
  LOW: "#0369a1",
};
const BAND_CHIP: Record<string, string> = {
  HIGH: "bg-emerald-100 text-emerald-700",
  MODERATE: "bg-stone-100 text-stone-700",
  LOW: "bg-sky-100 text-sky-700",
};

interface Props {
  result: TestResult;
  onRestart: () => void;
}

export function DifferentialResult({ result, onRestart }: Props) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "lipodem-lenfodem-ayirici-tani",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [shownPct, setShownPct] = useState(0);

  useEffect(() => {
    saveResult({
      slug: "lipodem-lenfodem-ayirici-tani",
      band: result.band,
      bandLabel: content.title,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.title]);

  // yüzde sayacı animasyonu
  useEffect(() => {
    const target = Math.min(100, Math.max(0, result.percentage));
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / 900);
      setShownPct(Math.round(target * (1 - Math.pow(1 - k, 3))));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [result.percentage]);

  const col = BAND_COLOR[result.band] ?? ACCENT;
  const lipoWins = result.band === "HIGH";
  const lenfWins = result.band === "LOW";
  const both = result.band === "MODERATE";
  const flagNotes = result.flags.map((f) => FLAG_NOTES[f]).filter(Boolean);
  const dirLabel =
    result.band === "HIGH"
      ? "LİPÖDEM YÖNÜ"
      : result.band === "LOW"
        ? "LENFÖDEM YÖNÜ"
        : "KARIŞIK TABLO";
  const scoreLine = `${result.totalScore > 0 ? "+" : ""}${result.totalScore} / ±${result.maxScore} ayırıcı puan`;

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center">
          <p className="text-[10px] font-extrabold tracking-[1.5px] text-[#6B7B99] mb-4">
            DEĞERLENDİRME TAMAMLANDI
          </p>

          {/* karşılaştırma: kazanan profil öne çıkar */}
          <div className="flex gap-3 justify-center items-center mb-5">
            <CompareTile
              src={LIPO_IMG}
              label="LİPÖDEM"
              chip="bg-emerald-50 text-emerald-700"
              win={lipoWins || both}
            />
            <CompareTile
              src={LENF_IMG}
              label="LENFÖDEM"
              chip="bg-sky-50 text-sky-700"
              win={lenfWins || both}
            />
          </div>

          <div className="text-5xl font-black leading-none" style={{ color: col }}>
            %{shownPct}
          </div>
          <div className="text-[9px] font-extrabold tracking-[1px] text-[#2D3B36]/45 mt-1">
            {dirLabel}
          </div>

          <div
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mt-4 ${BAND_CHIP[result.band] ?? "bg-stone-100 text-stone-700"}`}
          >
            <span className="font-semibold text-sm">
              {content.title} · {result.totalScore > 0 ? "+" : ""}
              {result.totalScore}
            </span>
          </div>
          <p className="text-xs text-[#2D3B36]/45 mt-2">{scoreLine}</p>
        </div>

        <div className="bg-white px-8 md:px-10 pb-8 md:pb-10">
          <p className="text-[#2D3B36]/70 text-base leading-relaxed mb-4 text-center">
            {content.description}
          </p>

          {result.bandReason && (
            <div
              className="border-l-4 p-4 rounded-r-xl mb-6"
              style={{ backgroundColor: ACCENT_BG, borderColor: ACCENT }}
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
          <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. Földi ayırıcı
          tanı kriterleri ve Stemmer işaretine dayalı bir ön değerlendirmedir.
          Lipödem ve lenfödem ayrımı doğru görüntüleme (Doppler USG,
          lenfosintigrafi) ve deneyimli bir uzmanın muayenesiyle netleştirilir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="lipodem-lenfodem-ayirici-tani"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Lipödem / Lenfödem Ayırıcı Tanı",
          bandLabel: content.title,
          scoreLine,
          percentage: Math.min(100, Math.max(0, result.percentage)),
          clinicalInterpretation: content.clinicalInterpretation,
          steps: content.steps,
          flagNotes,
          filename: "lipodem-lenfodem-ayirici-tani-sonuc",
        }}
      />
    </div>
  );
}

function CompareTile({
  src,
  label,
  chip,
  win,
}: {
  src: string;
  label: string;
  chip: string;
  win: boolean;
}) {
  return (
    <div
      className="flex-1 rounded-2xl overflow-hidden transition-all duration-500"
      style={{
        opacity: win ? 1 : 0.4,
        filter: win ? "none" : "grayscale(0.5)",
        transform: win ? "scale(1.04)" : "scale(1)",
        boxShadow: win ? "0 14px 32px -16px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="relative w-full h-[140px] bg-white">
        <Image src={src} alt={label} fill className="object-contain" sizes="180px" />
      </div>
      <div className={`text-center text-[8px] font-extrabold py-1 ${chip}`}>{label}</div>
    </div>
  );
}
