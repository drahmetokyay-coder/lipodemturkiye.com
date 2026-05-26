"use client";

import Link from "next/link";
import { STAGE_RESULT_CONTENT, type StageResult } from "@/data/stage-questions";
import { Share2, RotateCcw, BookOpen, FileText, MapPin, CheckCircle2 } from "lucide-react";

interface StageResultDisplayProps {
  result: StageResult;
  onRestart: () => void;
}

export function StageResultDisplay({ result, onRestart }: StageResultDisplayProps) {
  const content = STAGE_RESULT_CONTENT[result.stageLevel];

  const scorePercentage = Math.round((result.totalScore / result.maxScore) * 100);
  const circumference = 2 * Math.PI * 54; // r=54

  const handleShare = () => {
    const text = `Lipödem Evre Değerlendirme sonucum: ${content.stageName}. Sen de dene:`;
    const url = "https://lipodemturkiye.com/araclar/evre-degerlendirme";

    if (navigator.share) {
      navigator.share({ title: "Lipödem Evre Değerlendirme", text, url }).catch(() => {});
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="rounded-3xl border border-stone-100 overflow-hidden shadow-lg">
      {/* Header - Test Tamamlandi */}
      <div className="bg-white p-8 md:p-10 text-center border-b border-stone-100">
        <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#1A6B5A]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-1">
          Değerlendirme Tamamlandı
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
              <span className="text-2xl font-bold text-[#2D3B36]">{content.stageName}</span>
              <span className="text-xs text-[#2D3B36]/50">tahmini evre</span>
            </div>
          </div>

          {/* Stage badge */}
          <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full mb-3 ${content.iconBg}`}>
            <svg className={`w-4 h-4 ${content.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className={`font-semibold text-sm ${content.color}`}>{content.title}</span>
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

        <div className="bg-[#E8F5F0] border-l-4 border-[#1A6B5A] p-5 rounded-r-xl mb-6">
          <p className="text-[#2D3B36] font-medium leading-relaxed">
            Bu sonucu aldıysanız, bunun kesin bir tanı olmadığını hatırlatmak isteriz.
            Lipödem evreleri yalnızca klinik muayene ile belirlenebilir. Bu araç, durumunuz
            hakkında farkındalık oluşturmanıza ve doktor görüşmenize hazırlanmanıza yardımcı
            olmayı amaçlamaktadır.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-[#2D3B36] mb-4">
            Bu evre için öneriler:
          </h3>
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
            <strong>Uyarı:</strong> Bu araç bir tanı aracı değildir ve kesin tanı yerine
            geçmez. Lipödem evreleri yalnızca lipödem konusunda deneyimli bir sağlık
            profesyonelinin klinik muayenesi ile belirlenebilir. Burada sunulan sonuç,
            kendi kendinize ön değerlendirme yapmanıza yardımcı olmayı amaçlamaktadır.
          </p>
        </div>
      </div>
    </div>
  );
}
