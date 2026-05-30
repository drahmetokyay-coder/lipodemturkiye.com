"use client";

import { useState, useCallback } from "react";
import { Shirt, ArrowLeft } from "lucide-react";
import {
  QUESTIONS,
  calculateResult,
  type TestResult,
} from "@/data/tests/kompresyon-ihtiyac-testi";
import { KompresyonIhtiyacTestiQuestion } from "./kompresyon-ihtiyac-testi-question";
import { KompresyonIhtiyacTestiProgress } from "./kompresyon-ihtiyac-testi-progress";
import { KompresyonIhtiyacTestiResult } from "./kompresyon-ihtiyac-testi-result";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";

export function KompresyonIhtiyacTestiWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const totalSteps = QUESTIONS.length;

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
    setResult(calculateResult(answers));
  }

  if (currentStep === 0) {
    return (
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-10 md:p-14 text-center">
          <LastResultBadge slug="kompresyon-ihtiyac-testi" />
          <div className="w-20 h-20 bg-[#EEF1F7] rounded-full flex items-center justify-center mx-auto mb-8">
            <Shirt className="w-10 h-10 text-[#6B7B99]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-4">
            Kompresyon İhtiyaç Testi
          </h2>
          <p className="text-[#2D3B36]/60 text-base mb-1">
            7 soru &middot; yaklaşık 90 saniye
          </p>
          <p className="text-[#2D3B36]/50 mb-10 max-w-md mx-auto leading-relaxed">
            Bacak şişliği, aktivite ve venöz tablonuza göre size standart round-knit mi yoksa
            lipödeme özel flat-knit mi gerektiğini değerlendirin.
          </p>

          <button
            onClick={handleStart}
            className="bg-[#6B7B99] hover:bg-[#54627F] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Teste Başla
          </button>

          <div className="mt-10 flex flex-col gap-1.5 text-sm text-[#2D3B36]/40">
            <p>Bu test bir tanı veya reçete aracı değildir.</p>
            <p>
              Kompresyon ürün seçimi yalnızca bireysel ölçüm ile uzman tarafından yapılır.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-xl mx-auto">
        <KompresyonIhtiyacTestiResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const question = QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12">
        <div className="mb-6">
          <KompresyonIhtiyacTestiProgress current={currentStep} total={totalSteps} />
        </div>

        <div className="mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-[#2D3B36]/50 hover:text-[#2D3B36]/80 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri
          </button>
        </div>

        <KompresyonIhtiyacTestiQuestion
          key={question.id}
          question={question}
          selectedScore={answers[question.id]}
          onAnswer={(score) => handleAnswer(question.id, score)}
        />

        <p className="mt-8 text-xs text-[#2D3B36]/40 text-center">
          Soru {currentStep} / {totalSteps}
        </p>
      </div>
    </div>
  );
}
