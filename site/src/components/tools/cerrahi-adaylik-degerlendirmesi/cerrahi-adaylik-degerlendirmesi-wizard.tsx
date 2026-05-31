"use client";

import { useState, useCallback, useEffect } from "react";
import {
  QUESTIONS,
  calculateResult,
  type TestResult,
} from "@/data/tests/cerrahi-adaylik-degerlendirmesi";
import { CerrahiAdaylikResult } from "./cerrahi-adaylik-degerlendirmesi-result";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { Scissors } from "lucide-react";
import styles from "@/components/tools/shared/quiz.module.css";

const ACCENT = "#1A6B5A";
const ACCENT_DARK = "#15594B";
const ACCENT_BG = "#E8F5F0";

const accentVars = {
  ["--accent" as string]: ACCENT,
  ["--accent-d" as string]: ACCENT_DARK,
  ["--accent-bg" as string]: ACCENT_BG,
} as React.CSSProperties;

export function CerrahiAdaylikWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const totalSteps = QUESTIONS.length;

  const handleAnswer = useCallback(
    (questionId: number, score: number) => {
      const nextAnswers = { ...answers, [questionId]: score };
      setAnswers(nextAnswers);
      if (currentStep >= totalSteps) {
        setResult(calculateResult(nextAnswers));
      } else {
        window.setTimeout(() => setCurrentStep((prev) => prev + 1), 420);
      }
    },
    [answers, currentStep, totalSteps],
  );

  const handleBack = useCallback(() => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    else if (currentStep === 1) setCurrentStep(0);
  }, [currentStep]);

  const handleStart = useCallback(() => setCurrentStep(1), []);
  const handleRestart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  }, []);

  useEffect(() => {
    if (currentStep < 1 || result) return;
    const q = QUESTIONS[currentStep - 1];
    const onKey = (e: KeyboardEvent) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= q.options.length) handleAnswer(q.id, q.options[n - 1].score);
      else if (e.key === "Backspace") handleBack();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentStep, result, handleAnswer, handleBack]);

  // ---------- INTRO ----------
  if (currentStep === 0) {
    return (
      <div className={styles.wrap} style={accentVars}>
        <div className={styles.introCard}>
          <LastResultBadge slug="cerrahi-adaylik-degerlendirmesi" />
          <div className={styles.introIcon}>
            <Scissors className="w-9 h-9" style={{ color: ACCENT }} />
          </div>
          <h2 className={styles.introTitle}>Cerrahi Adaylık Değerlendirmesi</h2>
          <p className={styles.introMeta}>11 soru · yaklaşık 3 dakika</p>
          <p className={styles.introDesc}>Liposuction (lipödem cerrahisi) için uygunluğunuzu ön değerlendirmeden geçirir.</p>
          <button
            className={styles.cta}
            onClick={handleStart}
            onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
          >
            Değerlendirmeye Başla →
          </button>
          <div className={styles.disc}>
            <p>Bu test bir tanı aracı değildir.</p>
            <p>Kesin tanı yalnızca bir sağlık profesyoneli tarafından konulabilir.</p>
          </div>
        </div>
      </div>
    );
  }

  // ---------- RESULT ----------
  if (result) {
    return (
      <div className="max-w-xl mx-auto">
        <CerrahiAdaylikResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  // ---------- QUESTION ----------
  const question = QUESTIONS[currentStep - 1];
  const helpText = (question as { helpText?: string }).helpText;

  return (
    <div className={styles.wrap} style={accentVars}>
      <div className={styles.head}>
        <button className={styles.back} onClick={handleBack} aria-label="Geri">
          ←
        </button>
        <div className={styles.prog}>
          <div className={styles.seg}>
            {QUESTIONS.map((q, i) => (
              <i
                key={q.id}
                className={
                  i < currentStep - 1 ? styles.on : i === currentStep - 1 ? styles.cur : ""
                }
              />
            ))}
          </div>
          <div className={styles.pcount}>
            <b>{currentStep}</b>/{totalSteps}
          </div>
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardPop}`} key={question.id}>
        <div className={styles.chip}>
          <span className="ci">◆</span>
          <span className="ct">{question.title.toLocaleUpperCase("tr")}</span>
          <span className="cn">· {currentStep}/{totalSteps}</span>
        </div>

        <div className={styles.qtext}>
          {question.text.split(" ").map((w, i) => (
            <span key={i} className="w" style={{ animationDelay: `${i * 0.04}s` }}>
              {w + " "}
            </span>
          ))}
        </div>

        {helpText ? (
          <p style={{ fontSize: 12, color: "#8a9690", lineHeight: 1.5, margin: "-6px 0 14px" }}>
            {helpText}
          </p>
        ) : null}

        <div className={styles.opts}>
          {question.options.map((opt, i) => {
            const selected = answers[question.id] === opt.score;
            return (
              <button
                key={i}
                className={`${styles.ocard} ${selected ? styles.sel : ""}`}
                style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                onClick={() => handleAnswer(question.id, opt.score)}
              >
                <span className="shine" />
                <span className="obadge">{i + 1}</span>
                <span className="otx">{opt.label}</span>
                <span className="ochk">✓</span>
              </button>
            );
          })}
        </div>

        <div className={styles.kbHint}>
          <span className={styles.kbd}>1</span>…<span className={styles.kbd}>{Math.min(9, question.options.length)}</span>{" "}
          tuşlarıyla da seçebilirsiniz
        </div>
      </div>
    </div>
  );
}
