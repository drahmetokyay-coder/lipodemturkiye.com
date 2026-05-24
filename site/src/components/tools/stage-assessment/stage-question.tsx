"use client";

import type { StageQuestion } from "@/data/stage-questions";

interface StageQuestionProps {
  question: StageQuestion;
  selectedScore?: number;
  onAnswer: (score: number) => void;
}

export function StageQuestionStep({ question, selectedScore, onAnswer }: StageQuestionProps) {
  return (
    <div>
      <p className="text-xs font-medium text-purple-600 uppercase tracking-wider mb-2">
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
                    ? "border-purple-500 bg-purple-50 text-purple-800"
                    : "border-stone-200 bg-white text-stone-700 hover:border-purple-300 hover:bg-purple-50/50"
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
