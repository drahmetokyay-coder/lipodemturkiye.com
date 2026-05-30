"use client";

import { useState, useCallback } from "react";
import { Apple, ArrowLeft } from "lucide-react";
import {
  QUESTIONS,
  calculateResult,
  type TestResult,
} from "@/data/tests/anti-inflamatuar-diyet-skoru";
import { AntiInflamatuarDiyetSkoruQuestion } from "./anti-inflamatuar-diyet-skoru-question";
import { AntiInflamatuarDiyetSkoruProgress } from "./anti-inflamatuar-diyet-skoru-progress";
import { AntiInflamatuarDiyetSkoruResult } from "./anti-inflamatuar-diyet-skoru-result";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";

export function AntiInflamatuarDiyetSkoruWizard() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
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
          <LastResultBadge slug="anti-inflamatuar-diyet-skoru" />
          <div className="w-20 h-20 bg-[#FEF3E6] rounded-full flex items-center justify-center mx-auto mb-8">
            <Apple className="w-10 h-10 text-[#C46B3D]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-4">
            Anti-İnflamatuar Diyet Skoru
          </h2>
          <p className="text-[#2D3B36]/60 text-base mb-1">
            10 soru &middot; yaklaşık 2 dakika
          </p>
          <p className="text-[#2D3B36]/50 mb-10 max-w-md mx-auto leading-relaxed">
            Beslenmenizin lipödemde önerilen Akdeniz / anti-inflamatuar protokole uyumunu
            değerlendirin. Diyetisyene gitmeden önce küçük bir ön bilanço.
          </p>

          <button
            onClick={handleStart}
            className="bg-[#C46B3D] hover:bg-[#A95830] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Teste Başla
          </button>

          <div className="mt-10 flex flex-col gap-1.5 text-sm text-[#2D3B36]/40">
            <p>Bu test bir tanı veya diyet planı değildir.</p>
            <p>
              Kişiselleştirilmiş beslenme yalnızca bir diyetisyen tarafından planlanabilir.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-xl mx-auto">
        <AntiInflamatuarDiyetSkoruResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const question = QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12">
        <div className="mb-6">
          <AntiInflamatuarDiyetSkoruProgress current={currentStep} total={totalSteps} />
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

        <AntiInflamatuarDiyetSkoruQuestion
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
