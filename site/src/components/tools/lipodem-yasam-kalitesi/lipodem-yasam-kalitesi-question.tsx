"use client";

import type { Question } from "@/data/tests/lipodem-yasam-kalitesi";

interface Props {
  question: Question;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

const DOMAIN_LABEL: Record<Question["domain"], string> = {
  mobility: "Hareket",
  "daily-activities": "Günlük yaşam",
  "body-image": "Beden algısı",
  "pain-impact": "Ağrı etkisi",
  sleep: "Uyku",
  "social-participation": "Sosyal katılım",
  "emotional-wellbeing": "Duygusal alan",
};

export function LipodemYasamKalitesiQuestion({
  question,
  selectedScore,
  onAnswer,
}: Props) {
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <p className="text-xs font-semibold text-[#1A6B5A] uppercase tracking-wider">
          {question.title}
        </p>
        <span className="text-[10px] font-semibold tracking-wider text-[#2D3B36]/40 bg-[#F0F8F4] px-2 py-0.5 rounded-full">
          {DOMAIN_LABEL[question.domain]}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-[#2D3B36] mb-8 leading-snug">
        {question.text}
      </h3>

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
                    ? "border-[#1A6B5A] bg-[#E8F5F0] text-[#2D3B36] shadow-sm"
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
