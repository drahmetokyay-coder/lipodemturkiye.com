"use client";

import Link from "next/link";
import { STAGE_RESULT_CONTENT, type StageResult } from "@/data/stage-questions";
import { Share2, RotateCcw, BookOpen, FileText, MapPin } from "lucide-react";

interface StageResultDisplayProps {
  result: StageResult;
  onRestart: () => void;
}

export function StageResultDisplay({ result, onRestart }: StageResultDisplayProps) {
  const content = STAGE_RESULT_CONTENT[result.stageLevel];

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
    <div className={`rounded-2xl border-2 ${content.borderColor} overflow-hidden`}>
      <div className={`${content.bgColor} p-8 md:p-10 text-center`}>
        <div className="mb-4">
          <div className={`w-16 h-16 ${content.iconBg} rounded-full flex items-center justify-center mx-auto`}>
            <svg className={`w-8 h-8 ${content.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
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
            <p className="text-3xl font-bold text-stone-800">{content.stageName}</p>
            <p className="text-xs text-stone-500">tahmini evre</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 md:p-10">
        <p className="text-stone-600 text-lg leading-relaxed mb-6">
          {content.description}
        </p>

        <div className="bg-[#E8F5F0] border-l-4 border-[#1A6B5A] p-5 rounded-r-lg mb-6">
          <p className="text-[#10473B] font-medium leading-relaxed">
            Bu sonucu aldıysanız, bunun kesin bir tanı olmadığını hatırlatmak isteriz.
            Lipödem evreleri yalnızca klinik muayene ile belirlenebilir. Bu araç, durumunuz
            hakkında farkındalık oluşturmanıza ve doktor görüşmenize hazırlanmanıza yardımcı
            olmayı amaçlamaktadır.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-stone-800 mb-4">
            Bu evre için öneriler:
          </h3>
          <ul className="space-y-3">
            {content.recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E8F5F0] text-[#1A6B5A] rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                  {i + 1}
                </span>
                <span className="text-stone-600">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          <Link
            href="/lipodem-nedir"
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-[#2D8B73] hover:bg-[#E8F5F0]/50 transition-all"
          >
            <BookOpen className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-stone-700 font-medium">Lipödem Rehberi</span>
          </Link>
          <Link
            href="/lipodem-tedavisi"
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-[#2D8B73] hover:bg-[#E8F5F0]/50 transition-all"
          >
            <FileText className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-stone-700 font-medium">Tedavi Seçenekleri</span>
          </Link>
          <Link
            href="/klinikler"
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-[#2D8B73] hover:bg-[#E8F5F0]/50 transition-all"
          >
            <MapPin className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
            <span className="text-stone-700 font-medium">Klinik Bulucu</span>
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-stone-200 hover:border-[#2D8B73] hover:bg-[#E8F5F0]/50 transition-all"
          >
            <Share2 className="w-5 h-5 text-[#1A6B5A] flex-shrink-0" />
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
