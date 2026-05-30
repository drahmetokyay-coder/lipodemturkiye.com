"use client";

import { Info } from "lucide-react";
import type { Question } from "@/data/tests/cerrahi-adaylik-degerlendirmesi";

interface QuestionStepProps {
  question: Question;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

export function CerrahiAdaylikQuestion({
  question,
  selectedScore,
  onAnswer,
}: QuestionStepProps) {
  return (
    <div>
      <p className="text-xs font-semibold text-[#1A6B5A] uppercase tracking-wider mb-2">
        {question.title}
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-[#2D3B36] mb-3 leading-snug">
        {question.text}
      </h3>

      {question.helpText && (
        <div className="mb-6 bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-[#6B7B99] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] text-[#5a6a64] leading-relaxed">
            {question.helpText}
          </p>
        </div>
      )}

      <div className="space-y-3 mt-6">
        {question.options.map((option, index) => {
          const isSelected = selectedScore === option.score;
          const isDanger = option.flag === "absolute-contraindication";

          return (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              className={`
                w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200
                ${
                  isSelected
                    ? isDanger
                      ? "border-red-500 bg-red-50 text-[#2D3B36] shadow-sm"
                      : "border-[#1A6B5A] bg-[#E8F5F0] text-[#2D3B36] shadow-sm"
                    : "border-stone-200 bg-white text-[#2D3B36]/80 hover:border-[#1A6B5A]/30 hover:bg-[#E8F5F0]/30"
                }
              `}
            >
              <span className="text-base leading-relaxed">{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
