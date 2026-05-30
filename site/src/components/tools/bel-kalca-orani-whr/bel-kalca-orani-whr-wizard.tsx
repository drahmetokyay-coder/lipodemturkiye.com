"use client";

import { useState, useCallback } from "react";
import { Ruler, ArrowLeft } from "lucide-react";
import {
  QUESTIONS,
  calculateResult,
  type TestResult,
} from "@/data/tests/bel-kalca-orani-whr";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { BelKalcaOraniWhrQuestion } from "./bel-kalca-orani-whr-question";
import { BelKalcaOraniWhrProgress } from "./bel-kalca-orani-whr-progress";
import { BelKalcaOraniWhrResult } from "./bel-kalca-orani-whr-result";

export function BelKalcaOraniWhrWizard() {
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
          <LastResultBadge slug="bel-kalca-orani-whr" />
          <div className="w-20 h-20 bg-[#F5EBDB] rounded-full flex items-center justify-center mx-auto mb-8">
            <Ruler className="w-10 h-10 text-[#8B6B3D]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-4">
            Bel-Kalça Oranı (WHR) Testi
          </h2>
          <p className="text-[#2D3B36]/60 text-base mb-1">
            3 soru &middot; 1 dakikadan az
          </p>
          <p className="text-[#2D3B36]/50 mb-8 max-w-md mx-auto leading-relaxed">
            Üst-alt vücut orantınızı ve antropometrik patern uyumunuzu lipödemin
            klasik bulgularıyla karşılaştırın. Mezurayla ölçüm idealdir; yoksa size en
            yakın aralığı seçin.
          </p>

          <div className="bg-[#FAF3E6] border border-[#8B6B3D]/15 rounded-2xl px-5 py-3 mb-8 inline-flex flex-col text-left">
            <span className="text-[10px] font-bold tracking-wider text-[#8B6B3D]">
              KLİNİK REFERANS
            </span>
            <span className="text-xs text-[#2D3B36]/70 mt-0.5">
              WHO WHR + Allen-Hines lipödem patern kriteri
            </span>
          </div>

          <div>
            <button
              onClick={handleStart}
              className="bg-[#8B6B3D] hover:bg-[#6F542E] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Teste Başla
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-1.5 text-sm text-[#2D3B36]/40">
            <p>Bu test bir tanı aracı değildir.</p>
            <p>Antropometrik ölçüm tek başına lipödem tanısı koyamaz.</p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-xl mx-auto">
        <BelKalcaOraniWhrResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const question = QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12">
        <div className="mb-6">
          <BelKalcaOraniWhrProgress current={currentStep} total={totalSteps} />
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

        <BelKalcaOraniWhrQuestion
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
