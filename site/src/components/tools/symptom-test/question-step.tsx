"use client";

import type { Question } from "@/data/symptom-questions";

interface QuestionStepProps {
  question: Question;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

export function QuestionStep({ question, selectedScore, onAnswer }: QuestionStepProps) {
  return (
    <div>
      <p className="text-xs font-medium text-[#1A6B5A] uppercase tracking-wider mb-2">
        {question.title}
      </p>
      <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-8 leading-snug">
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
                w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200
                ${
                  isSelected
                    ? "border-[#1A6B5A] bg-[#E8F5F0] text-[#10473B]"
                    : "border-stone-200 bg-white text-stone-700 hover:border-[#2D8B73] hover:bg-[#E8F5F0]/50"
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
