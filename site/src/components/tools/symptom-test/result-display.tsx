"use client";

import Link from "next/link";
import { RESULT_CONTENT, type TestResult } from "@/data/symptom-questions";
import { Share2, RotateCcw, FileText, MapPin, BookOpen, Heart, CheckCircle2 } from "lucide-react";

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

  const scorePercentage = Math.round((result.totalScore / result.maxScore) * 100);
  const circumference = 2 * Math.PI * 54; // r=54

  return (
    <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg">
      {/* Header - Test Tamamlandi */}
      <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
        <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#1A6B5A]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
          Test Tamamlandı
        </h2>
        <p className="text-[#2D3B36]/50 text-sm">
          Sonuçlarınız aşağıda
        </p>
      </div>

      {/* Score section */}
      <div className={`${content.bgColor} p-8 md:p-10`}>
        <div className="flex flex-col items-center">
          {/* Circular score display */}
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
                stroke="#1A6B5A"
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - scorePercentage / 100)}
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

          {/* Risk level badge */}
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${
            result.riskLevel === "LOW" ? "bg-green-100 text-green-700" :
            result.riskLevel === "MODERATE" ? "bg-orange-100 text-orange-700" :
            "bg-red-100 text-red-700"
          }`}>
            {result.riskLevel === "LOW" && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )}
            {result.riskLevel === "MODERATE" && (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            {result.riskLevel === "HIGH" && (
              <Heart className="w-4 h-4" />
            )}
            <span className="font-semibold text-sm">{content.title}</span>
          </div>

          <p className="text-sm text-[#2D3B36]/50">
            {result.totalScore} puan / {result.maxScore}
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="bg-white p-8 md:p-10">
        <p className="text-[#2D3B36]/70 text-lg leading-relaxed mb-6">
          {content.description}
        </p>

        {content.empathyMessage && (
          <div className="bg-[#E8F5F0] border-l-4 border-[#1A6B5A] p-5 rounded-r-xl mb-6">
            <p className="text-[#2D3B36] font-medium leading-relaxed">
              {content.empathyMessage}
            </p>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#2D3B36] mb-4">
            Önerilen adımlar:
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link
            href="/lipodem-nedir"
            className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-stone-200 hover:border-[#1A6B5A]/30 hover:bg-[#E8F5F0]/30 transition-all"
          >
            <BookOpen className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-[#2D3B36] font-medium">Lipödem Rehberi</span>
          </Link>
          <Link
            href="/lipodem-tedavisi"
            className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-stone-200 hover:border-[#1A6B5A]/30 hover:bg-[#E8F5F0]/30 transition-all"
          >
            <FileText className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-[#2D3B36] font-medium">Tedavi Seçenekleri</span>
          </Link>
          <Link
            href="/klinikler"
            className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-stone-200 hover:border-[#1A6B5A]/30 hover:bg-[#E8F5F0]/30 transition-all"
          >
            <MapPin className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-[#2D3B36] font-medium">Klinik Bulucu</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-stone-200 hover:border-[#1A6B5A]/30 hover:bg-[#E8F5F0]/30 transition-all"
          >
            <Share2 className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-[#2D3B36] font-medium">Sonucu Paylaş</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onRestart}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-stone-200 text-[#2D3B36]/60 hover:bg-stone-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Testi Tekrar Çöz
          </button>
        </div>

        <div className="mt-8 p-5 bg-stone-50 rounded-2xl">
          <p className="text-xs text-[#2D3B36]/40 leading-relaxed">
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
