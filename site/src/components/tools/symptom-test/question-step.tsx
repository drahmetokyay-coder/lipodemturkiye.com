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
      <p className="text-xs font-medium text-teal-600 uppercase tracking-wider mb-2">
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
                    ? "border-teal-500 bg-teal-50 text-teal-800"
                    : "border-stone-200 bg-white text-stone-700 hover:border-teal-300 hover:bg-teal-50/50"
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
