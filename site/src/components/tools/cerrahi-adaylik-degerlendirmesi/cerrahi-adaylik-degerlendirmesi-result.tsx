"use client";

import { useEffect, useState } from "react";
import {
  RotateCcw,
  Printer,
  Download,
  AlertTriangle,
  ShieldAlert,
  Scissors,
} from "lucide-react";
import {
  RESULT_CONTENT,
  type TestResult,
} from "@/data/tests/cerrahi-adaylik-degerlendirmesi";
import { saveResult } from "@/lib/test-storage";
import { recommend } from "@/lib/recommendations";
import { RecommendationCard } from "@/components/tools/shared/recommendation-card";
import { EmailCaptureModal } from "@/components/tools/shared/email-capture-modal";

interface ResultDisplayProps {
  result: TestResult;
  onRestart: () => void;
}

const FLAG_NOTES: Record<string, string> = {
  "absolute-contraindication":
    "En az bir mutlak cerrahi kontrendikasyon işaretlediniz. Aktif enfeksiyon, kontrolsüz sistemik hastalık veya kesilemeyen kan sulandırıcı kullanımı varlığında elektif cerrahi yapılmaz; öncelikle tıbbi sorunun yönetilmesi gerekir.",
};

export function CerrahiAdaylikResult({ result, onRestart }: ResultDisplayProps) {
  const content = RESULT_CONTENT[result.band];
  const recommendation = recommend({
    slug: "cerrahi-adaylik-degerlendirmesi",
    band: result.band,
    flags: result.flags,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const hasAbsoluteContraindication = result.flags.includes(
    "absolute-contraindication"
  );

  useEffect(() => {
    saveResult({
      slug: "cerrahi-adaylik-degerlendirmesi",
      band: result.band,
      bandLabel: content.shortLabel,
      score: result.totalScore,
      maxScore: result.maxScore,
      percentage: result.percentage,
      takenAt: new Date().toISOString(),
    });
  }, [result, content.shortLabel]);

  const circumference = 2 * Math.PI * 54;
  const otherFlagNotes = result.flags
    .filter((f) => f !== "absolute-contraindication")
    .map((f) => FLAG_NOTES[f])
    .filter(Boolean);

  return (
    <div className="space-y-6">
      {hasAbsoluteContraindication && (
        <div className="rounded-3xl border-2 border-red-500 bg-red-50 p-6 md:p-8 shadow-md">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold tracking-[2px] text-red-700 mb-2">
                MUTLAK CERRAHI KONTRENDIKASYON
              </p>
              <h2 className="text-xl font-bold text-red-900 leading-snug mb-3">
                Mevcut tabloda elektif cerrahi önerilmez
              </h2>
              <p className="text-[15px] text-red-900 leading-relaxed mb-3">
                {FLAG_NOTES["absolute-contraindication"]}
              </p>
              {result.bandReason && (
                <p className="text-[14px] text-red-800 leading-relaxed bg-white/70 border border-red-200 rounded-xl p-3">
                  <strong>Neden:</strong> {result.bandReason}
                </p>
              )}
              <p className="text-[13px] text-red-700 leading-relaxed mt-3">
                Lütfen önce ilgili tıbbi durumu yöneten bir hekimle görüşün.
                Sorun çözüldükten sonra cerrahi adaylığınız yeniden
                değerlendirilebilir.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg bg-white">
        <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
          <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
            <Scissors className="w-8 h-8 text-[#1A6B5A]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
            Değerlendirme Tamamlandı
          </h2>
          <p className="text-[#2D3B36]/50 text-sm">
            Cerrahi adaylık değerlendirmeniz aşağıda
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
                  stroke="#E8F5F0"
                  strokeWidth="6"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke={
                    hasAbsoluteContraindication
                      ? "#DC2626"
                      : result.band === "HIGH"
                        ? "#1A6B5A"
                        : result.band === "MODERATE"
                          ? "#D97706"
                          : "#DC2626"
                  }
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
                <span className="text-xs text-[#2D3B36]/50">uygunluk</span>
              </div>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${content.badgeBg} ${content.badgeText}`}
            >
              <span className="font-semibold text-sm">{content.title}</span>
            </div>

            <p className="text-sm text-[#2D3B36]/50">
              {result.totalScore} puan / {result.maxScore}
              {hasAbsoluteContraindication && (
                <span className="block mt-1 text-xs text-red-700 font-semibold">
                  (Mutlak kontrendikasyon nedeniyle bant LOW olarak ayarlandı)
                </span>
              )}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">
            {content.description}
          </p>

          <div className="bg-[#F0F8F4] border-l-4 border-[#1A6B5A] p-5 rounded-r-xl mb-6">
            <p className="text-xs font-bold tracking-wider text-[#1A6B5A] mb-2">
              KLİNİK YORUM
            </p>
            <p className="text-[#2D3B36] leading-relaxed text-[15px]">
              {content.clinicalInterpretation}
            </p>
          </div>

          {otherFlagNotes.length > 0 && (
            <div className="space-y-3 mb-6">
              {otherFlagNotes.map((note, i) => (
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
          <strong>Uyarı:</strong> Bu test bir tanı, cerrahi onay veya cerrahi
          karar aracı değildir. Cornely cerrahi endikasyon, ASA fizik durum ve
          Halland kriterlerine dayalı bir ön değerlendirmedir. Tüm cerrahi karar
          ve planlama, yalnızca deneyimli bir plastik cerrah ve gerekiyorsa
          anestezi/dahili hekim konsültasyonu ile bireysel klinik muayene sonrası
          verilir.
        </p>
      </div>

      <EmailCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        testSlug="cerrahi-adaylik-degerlendirmesi"
        band={result.band}
        score={result.totalScore}
        pdfPayload={{
          testTitle: "Cerrahi Adaylık Değerlendirmesi",
          bandLabel: content.title,
          scoreLine: `${result.totalScore} / ${result.maxScore} puan · %${result.percentage} uygunluk`,
          percentage: result.percentage,
          clinicalInterpretation: hasAbsoluteContraindication
            ? `${content.clinicalInterpretation}\n\nMUTLAK KONTRENDIKASYON: ${result.bandReason ?? ""}`
            : content.clinicalInterpretation,
          steps: content.steps,
          flagNotes: hasAbsoluteContraindication
            ? [FLAG_NOTES["absolute-contraindication"], ...otherFlagNotes]
            : otherFlagNotes,
          filename: "cerrahi-adaylik-degerlendirmesi-sonuc",
        }}
      />
    </div>
  );
}
