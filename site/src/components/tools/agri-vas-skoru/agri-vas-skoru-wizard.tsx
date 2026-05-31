"use client";

import { useState, useCallback, useEffect } from "react";
import {
  QUESTIONS,
  calculateResult,
  SCALE_REFERENCE,
  type TestResult,
} from "@/data/tests/agri-vas-skoru";
import { VasResult } from "./agri-vas-skoru-result";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { PainFace } from "@/components/tools/shared/pain-face";
import { HeartPulse } from "lucide-react";
import styles from "@/components/tools/shared/quiz.module.css";

const ACCENT = "#C46B3D";
const ACCENT_DARK = "#A55530";
const ACCENT_BG = "#FEF3E6";

const CATEGORY_ICON: Record<string, string> = {
  "Son 24 Saatte En Şiddetli Ağrı": "🔥",
  "Ortalama Ağrı Şiddeti": "📊",
  "Dokunma / Basınç Ağrısı": "✋",
  "Ağrının Günlük Yaşama Etkisi": "🚶",
  "Uyku ve Ruh Hali Üzerine Etki": "🌙",
  "Ağrı Dağılımı": "⇄",
};

const FACE_LEVELS = [0, 0.3, 0.55, 0.78, 1]; // ölçek üzerindeki 5 yüz

const accentVars = {
  ["--accent" as string]: ACCENT,
  ["--accent-d" as string]: ACCENT_DARK,
  ["--accent-bg" as string]: ACCENT_BG,
} as React.CSSProperties;

export function VasWizard() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
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

  // klavye 1..N + Backspace
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
          <LastResultBadge slug="agri-vas-skoru" />
          <div className={styles.introIcon}>
            <HeartPulse className="w-9 h-9" style={{ color: ACCENT }} />
          </div>
          <h2 className={styles.introTitle}>Ağrı VAS Skoru</h2>
          <p className={styles.introMeta}>6 soru · yaklaşık 90 saniye</p>
          <p className={styles.introDesc}>
            Lipödemde ağrı şiddetini ve günlük yaşam üzerindeki etkisini ölçer.
            Sonucu uzmanınızla paylaşın.
          </p>
          <p className={styles.introRef}>Klinik referans: {SCALE_REFERENCE.name}</p>
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
        <VasResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  // ---------- QUESTION ----------
  const question = QUESTIONS[currentStep - 1];
  const icon = CATEGORY_ICON[question.title] ?? "◆";

  // canlı ağrı ölçeği: bu sorudaki seçili cevabın 0-10 düzeyi
  const selectedScore = answers[question.id];
  const painLevel = selectedScore === undefined ? null : Math.max(0, Math.min(1, selectedScore / 10));
  const activeFace =
    painLevel === null
      ? -1
      : FACE_LEVELS.reduce(
          (best, lv, i) => (Math.abs(lv - painLevel) < Math.abs(FACE_LEVELS[best] - painLevel) ? i : best),
          0,
        );
  const painColor =
    painLevel === null
      ? "#9aa39d"
      : painLevel < 0.5
        ? "#10b981"
        : painLevel < 0.78
          ? "#f59e0b"
          : "#e11d48";
  const painText =
    painLevel === null
      ? "—"
      : painLevel < 0.3
        ? "Hafif"
        : painLevel < 0.6
          ? "Orta"
          : painLevel < 0.85
            ? "Şiddetli"
            : "Çok şiddetli";

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

      <div className={styles.painMeter}>
        <div className={styles.painTop}>
          <span className={styles.painTitle}>AĞRI ÖLÇEĞİ</span>
          <span className={styles.painVal} style={{ color: painColor }}>
            {painText}
          </span>
        </div>
        <div className={styles.faces}>
          {FACE_LEVELS.map((lv, i) => (
            <span key={i} className={`${styles.face} ${i === activeFace ? styles.active : ""}`}>
              <PainFace level={lv} size={34} />
            </span>
          ))}
        </div>
        <div className={styles.painTrack}>
          <span
            className={styles.painDot}
            style={{
              left: `${(painLevel ?? 0) * 100}%`,
              borderColor: painColor,
              opacity: painLevel === null ? 0.5 : 1,
            }}
          />
        </div>
        <div className={styles.painScaleEnds}>
          <span>0 · Ağrı yok</span>
          <span>10 · Dayanılmaz</span>
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardPop}`} key={question.id}>
        <div className={styles.chip}>
          <span className="ci">{icon}</span>
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
                style={{ animationDelay: `${0.1 + i * 0.07}s` }}
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
