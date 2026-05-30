"use client";

import type { Question } from "@/data/tests/egzersiz-tolerans-testi";

interface QuestionStepProps {
  question: Question;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

export function EgzersizToleransQuestion({
  question,
  selectedScore,
  onAnswer,
}: QuestionStepProps) {
  return (
    <div>
      <p className="text-xs font-semibold text-[#2D8B73] uppercase tracking-wider mb-2">
        {question.title}
      </p>
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
                    ? "border-[#2D8B73] bg-[#E6F4EE] text-[#2D3B36] shadow-sm"
                    : "border-stone-200 bg-white text-[#2D3B36]/80 hover:border-[#2D8B73]/30 hover:bg-[#E6F4EE]/30"
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
