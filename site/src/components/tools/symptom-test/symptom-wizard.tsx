"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { QUESTIONS, calculateResult, type TestResult } from "@/data/symptom-questions";
import { ResultDisplay } from "./result-display";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { ScoreMeter } from "@/components/tools/shared/score-meter";
import { ClipboardCheck } from "lucide-react";
import styles from "@/components/tools/shared/quiz.module.css";

const ACCENT = "#1A6B5A";
const ACCENT_DARK = "#15594B";
const ACCENT_BG = "#E8F5F0";

const accentVars = {
  ["--accent" as string]: ACCENT,
  ["--accent-d" as string]: ACCENT_DARK,
  ["--accent-bg" as string]: ACCENT_BG,
} as React.CSSProperties;

export function SymptomWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);

  const totalSteps = QUESTIONS.length;

  const maxPossible = useMemo(
    () => QUESTIONS.reduce((s, q) => s + Math.max(...q.options.map((o) => o.score)), 0),
    [],
  );

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
          <LastResultBadge slug="lipodem-semptom-testi" />
          <div className={styles.introIcon}>
            <ClipboardCheck className="w-9 h-9" style={{ color: ACCENT }} />
          </div>
          <h2 className={styles.introTitle}>Lipödem Semptom Testi</h2>
          <p className={styles.introMeta}>{totalSteps} soru · yaklaşık 3 dakika</p>
          <p className={styles.introDesc}>
            Bilimsel kriterlere dayalı bu test, lipödem belirtilerinizi değerlendirir
            ve size kişiselleştirilmiş bir yol haritası sunar.
          </p>
          <p className={styles.introRef}>{totalSteps} bilimsel kriter · Anonim</p>
          <button
            className={styles.cta}
            onClick={handleStart}
            onMouseEnter={(e) => (e.currentTarget.style.background = ACCENT_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.background = ACCENT)}
          >
            Teste Başla →
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
        <ResultDisplay result={result} onRestart={handleRestart} />
      </div>
    );
  }

  // ---------- QUESTION ----------
  const question = QUESTIONS[currentStep - 1];
  const running = QUESTIONS.reduce((s, q) => s + (answers[q.id] ?? 0), 0);
  const pct = maxPossible ? (running / maxPossible) * 100 : 0;
  const tone = pct < 33 ? "low" : pct < 66 ? "mid" : "high";
  const answeredCount = Object.keys(answers).length;
  const label =
    answeredCount === 0 ? null : tone === "low" ? "Düşük uyum" : tone === "mid" ? "Orta uyum" : "Yüksek uyum";

  return (
    <div className={styles.wrap} style={accentVars}>
      <div className={styles.head}>
        <button className={styles.back} onClick={handleBack} aria-label="Geri">
          ←
        </button>
        <div className={styles.prog}>
          <div className={styles.seg}>
            {QUESTIONS.map((q, i) => (
              <i key={q.id} className={i < currentStep - 1 ? styles.on : i === currentStep - 1 ? styles.cur : ""} />
            ))}
          </div>
          <div className={styles.pcount}>
            <b>{currentStep}</b>/{totalSteps}
          </div>
        </div>
      </div>

      <ScoreMeter pct={pct} label={label} tone={answeredCount === 0 ? "none" : tone} caption="LİPÖDEM UYUMU" />

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
