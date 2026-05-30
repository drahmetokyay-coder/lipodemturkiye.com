"use client";

import { useState, useCallback } from "react";
import {
  QUESTIONS,
  calculateResult,
  SCALE_REFERENCE,
  type TestResult,
} from "@/data/tests/lipodem-lenfodem-ayirici-tani";
import { DifferentialQuestion } from "./lipodem-lenfodem-ayirici-tani-question";
import { DifferentialProgress } from "./lipodem-lenfodem-ayirici-tani-progress";
import { DifferentialResult } from "./lipodem-lenfodem-ayirici-tani-result";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { ArrowLeft, GitCompare } from "lucide-react";

const ACCENT = "#6B7B99";
const ACCENT_DARK = "#56688A";
const ACCENT_BG = "#EEF1F7";

export function DifferentialWizard() {
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
          <LastResultBadge slug="lipodem-lenfodem-ayirici-tani" />
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
            style={{ backgroundColor: ACCENT_BG }}
          >
            <GitCompare className="w-10 h-10" style={{ color: ACCENT }} />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-4">
            Lipödem mi, Lenfödem mi? Ayırıcı Tanı
          </h2>
          <p className="text-[#2D3B36]/60 text-base mb-1">
            10 soru &middot; yaklaşık 2 dakika
          </p>
          <p className="text-[#2D3B36]/50 mb-2 max-w-md mx-auto leading-relaxed">
            Bacaklarınızdaki şişlik lipödem mi yoksa lenfödem mi? Földi ayırıcı
            tanı kriterleriyle yönünüzü görün.
          </p>
          <p className="text-xs text-[#2D3B36]/40 mb-10">
            Klinik referans: {SCALE_REFERENCE.name}
          </p>

          <button
            onClick={handleStart}
            className="text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ backgroundColor: ACCENT }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
          >
            Teste Başla
          </button>

          <div className="mt-10 flex flex-col gap-1.5 text-sm text-[#2D3B36]/40">
            <p>Bu test bir tanı aracı değildir.</p>
            <p>Kesin tanı yalnızca bir sağlık profesyoneli tarafından konulabilir.</p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-xl mx-auto">
        <DifferentialResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const question = QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12">
        <div className="mb-6">
          <DifferentialProgress current={currentStep} total={totalSteps} />
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

        <DifferentialQuestion
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
