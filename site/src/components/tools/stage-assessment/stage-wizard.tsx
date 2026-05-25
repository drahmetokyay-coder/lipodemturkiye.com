"use client";

import { useState, useCallback } from "react";
import { STAGE_QUESTIONS, calculateStageResult, type StageResult } from "@/data/stage-questions";
import { StageQuestionStep } from "./stage-question";
import { StageProgress } from "./stage-progress";
import { StageResultDisplay } from "./stage-result";
import { ArrowLeft } from "lucide-react";

export function StageWizard() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<StageResult | null>(null);

  const totalSteps = STAGE_QUESTIONS.length;

  const handleAnswer = useCallback(
    (questionId: number, score: number) => {
      setAnswers((prev) => ({ ...prev, [questionId]: score }));

      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
      }
    },
    [currentStep, totalSteps]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentStep === 1) {
      setCurrentStep(0);
    }
  }, [currentStep]);

  const handleStart = useCallback(() => {
    setCurrentStep(1);
  }, []);

  const handleRestart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  }, []);

  if (currentStep > totalSteps && !result) {
    setResult(calculateStageResult(answers));
  }

  if (currentStep === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-[#1A6B5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
            Lipödem Evre Değerlendirme
          </h2>
          <p className="text-stone-600 text-lg mb-2">
            8 soru &middot; yaklaşık 2 dakika
          </p>
          <p className="text-stone-500 mb-8 max-w-lg mx-auto">
            Mevcut durumunuzu klinik kriterlere göre değerlendirin ve evrenize
            özel tedavi önerileri alın.
          </p>

          <button
            onClick={handleStart}
            className="cta-gradient text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors"
          >
            Değerlendirmeye Başla
          </button>

          <div className="mt-8 flex flex-col gap-2 text-sm text-stone-400">
            <p>Bu araç bir tanı aracı değildir.</p>
            <p>Kesin evre belirleme yalnızca bir sağlık profesyoneli tarafından yapılabilir.</p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-2xl mx-auto">
        <StageResultDisplay result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const question = STAGE_QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-10">
        <div className="mb-8">
          <StageProgress current={currentStep} total={totalSteps} />
        </div>

        <div className="mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-stone-500 hover:text-stone-700 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri
          </button>
        </div>

        <StageQuestionStep
          key={question.id}
          question={question}
          selectedScore={answers[question.id]}
          onAnswer={(score) => handleAnswer(question.id, score)}
        />

        <p className="mt-8 text-xs text-stone-400 text-center">
          Soru {currentStep} / {totalSteps}
        </p>
      </div>
    </div>
  );
}
