"use client";

import { Info } from "lucide-react";
import type { Question } from "@/data/tests/bel-kalca-orani-whr";

interface Props {
  question: Question;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

export function BelKalcaOraniWhrQuestion({
  question,
  selectedScore,
  onAnswer,
}: Props) {
  return (
    <div>
      <p className="text-xs font-semibold text-[#8B6B3D] uppercase tracking-wider mb-2">
        {question.title}
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-[#2D3B36] mb-5 leading-snug">
        {question.text}
      </h3>

      {question.helpText && (
        <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl px-4 py-3 mb-6 flex items-start gap-2">
          <Info className="w-4 h-4 text-[#8B6B3D] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#2D3B36]/65 leading-relaxed">
            {question.helpText}
          </p>
        </div>
      )}

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedScore === option.score;
          return (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              className={`
                w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200
                ${
                  isSelected
                    ? "border-[#8B6B3D] bg-[#FAF3E6] text-[#2D3B36] shadow-sm"
                    : "border-stone-200 bg-white text-[#2D3B36]/80 hover:border-[#8B6B3D]/30 hover:bg-[#FAF3E6]/40"
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
