"use client";

import { useState, useCallback } from "react";
import { Activity, ArrowLeft } from "lucide-react";
import {
  QUESTIONS,
  calculateResult,
  type TestResult,
} from "@/data/tests/lipodem-yasam-kalitesi";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { LipodemYasamKalitesiQuestion } from "./lipodem-yasam-kalitesi-question";
import { LipodemYasamKalitesiProgress } from "./lipodem-yasam-kalitesi-progress";
import { LipodemYasamKalitesiResult } from "./lipodem-yasam-kalitesi-result";

export function LipodemYasamKalitesiWizard() {
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
          <LastResultBadge slug="lipodem-yasam-kalitesi" />
          <div className="w-20 h-20 bg-[#E8F5F0] rounded-full flex items-center justify-center mx-auto mb-8">
            <Activity className="w-10 h-10 text-[#1A6B5A]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-4">
            Lipödem Yaşam Kalitesi Testi
          </h2>
          <p className="text-[#2D3B36]/60 text-base mb-1">
            14 soru &middot; yaklaşık 3 dakika
          </p>
          <p className="text-[#2D3B36]/50 mb-8 max-w-md mx-auto leading-relaxed">
            Lipödemin günlük yaşamınıza etkisini bilimsel ölçeklere dayalı olarak
            değerlendirin. Mobilite, ağrı, beden algısı ve duygusal alanları kapsar.
          </p>

          <div className="bg-[#F0F8F4] border border-[#1A6B5A]/15 rounded-2xl px-5 py-3 mb-8 inline-flex flex-col text-left">
            <span className="text-[10px] font-bold tracking-wider text-[#1A6B5A]">
              KLİNİK REFERANS
            </span>
            <span className="text-xs text-[#2D3B36]/70 mt-0.5">
              LYMPH-ICF-LL + EQ-5D-3L uyarlaması
            </span>
          </div>

          <div>
            <button
              onClick={handleStart}
              className="bg-[#1A6B5A] hover:bg-[#15594B] text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Teste Başla
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-1.5 text-sm text-[#2D3B36]/40">
            <p>Bu test bir tanı aracı değildir.</p>
            <p>
              Yaşam kalitesi değerlendirmeniz, sağlık profesyonelinizle paylaşacağınız
              kişisel bir tablo sunar.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-xl mx-auto">
        <LipodemYasamKalitesiResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  const question = QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12">
        <div className="mb-6">
          <LipodemYasamKalitesiProgress current={currentStep} total={totalSteps} />
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

        <LipodemYasamKalitesiQuestion
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
