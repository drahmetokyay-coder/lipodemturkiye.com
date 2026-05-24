"use client";

import Link from "next/link";
import { RESULT_CONTENT, type TestResult } from "@/data/symptom-questions";
import { Share2, RotateCcw, FileText, MapPin, BookOpen, Heart } from "lucide-react";

interface ResultDisplayProps {
  result: TestResult;
  onRestart: () => void;
}

export function ResultDisplay({ result, onRestart }: ResultDisplayProps) {
  const content = RESULT_CONTENT[result.riskLevel];

  const handleShare = () => {
    const text = `Lipödem Semptom Testi sonucum: ${content.title}. Sen de dene:`;
    const url = "https://lipodemturkiye.com/araclar/semptom-testi";

    if (navigator.share) {
      navigator.share({ title: "Lipödem Semptom Testi", text, url }).catch(() => {});
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className={`rounded-2xl border-2 ${content.borderColor} overflow-hidden`}>
      <div className={`${content.bgColor} p-8 md:p-10 text-center`}>
        <div className="mb-4">
          {result.riskLevel === "LOW" && (
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          )}
          {result.riskLevel === "MODERATE" && (
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          )}
          {result.riskLevel === "HIGH" && (
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
          )}
        </div>

        <h2 className={`text-2xl md:text-3xl font-bold ${content.color} mb-4`}>
          {content.title}
        </h2>

        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-stone-800">{result.totalScore}</p>
            <p className="text-xs text-stone-500">puan / {result.maxScore}</p>
          </div>
          <div className="w-px h-10 bg-stone-300" />
          <div className="text-center">
            <p className="text-3xl font-bold text-stone-800">%{result.percentage}</p>
            <p className="text-xs text-stone-500">uyum oranı</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-10">
        <p className="text-stone-600 text-lg leading-relaxed mb-6">
          {content.description}
        </p>

        {content.empathyMessage && (
          <div className="bg-teal-50 border-l-4 border-teal-500 p-5 rounded-r-lg mb-6">
            <p className="text-teal-800 font-medium leading-relaxed">
              {content.empathyMessage}
            </p>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-lg font-bold text-stone-800 mb-4">
            Önerilen adımlar:
          </h3>
          <ul className="space-y-3">
            {content.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                  {i + 1}
                </span>
                <span className="text-stone-600">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link
            href="/lipodem-nedir"
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all"
          >
            <BookOpen className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="text-stone-700 font-medium">Lipödem Rehberi</span>
          </Link>
          <Link
            href="/lipodem-tedavisi"
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all"
          >
            <FileText className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="text-stone-700 font-medium">Tedavi Seçenekleri</span>
          </Link>
          <Link
            href="/klinikler"
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all"
          >
            <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="text-stone-700 font-medium">Klinik Bulucu</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-teal-300 hover:bg-teal-50/50 transition-all"
          >
            <Share2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span className="text-stone-700 font-medium">Sonucu Paylaş</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-stone-300 text-stone-600 hover:bg-stone-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Testi Tekrar Çöz
          </button>
        </div>

        <div className="mt-8 p-4 bg-stone-50 rounded-lg">
          <p className="text-xs text-stone-400 leading-relaxed">
            <strong>Uyarı:</strong> Bu test bir tanı aracı değildir. 2025 Delphi Konsensüsü
            ve 2024 Alman S2k Kılavuzu kriterlerine dayalı bir ön değerlendirmedir. Kesin
            tanı ve tedavi kararları yalnızca lipödem konusunda deneyimli bir sağlık
            profesyoneli tarafından verilmelidir.
          </p>
        </div>
      </div>
    </div>
  );
}
