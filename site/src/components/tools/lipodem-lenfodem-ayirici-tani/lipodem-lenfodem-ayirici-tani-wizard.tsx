"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import {
  QUESTIONS,
  calculateResult,
  SCALE_REFERENCE,
  type TestResult,
} from "@/data/tests/lipodem-lenfodem-ayirici-tani";
import { DifferentialResult } from "./lipodem-lenfodem-ayirici-tani-result";
import { LastResultBadge } from "@/components/tools/shared/last-result-badge";
import { GitCompare } from "lucide-react";
import styles from "./differential.module.css";

const ACCENT = "#6B7B99";
const ACCENT_DARK = "#56688A";
const LIPO_IMG = "/tests/lipodem-legs.webp";
const LENF_IMG = "/tests/lenfodem-legs.webp";
const SENS = 14; // duyarlılık: skor bu değere bölünüp -1..+1'e sıkıştırılır

const CATEGORY_ICON: Record<string, string> = {
  "Şişliğin Dağılımı": "⇄",
  "Ayakların Görünümü": "👣",
  "Stemmer İşareti": "🤏",
  "Pitting (Gode) Bulgusu": "⊙",
  "Dokunma Ağrısı / Hassasiyet": "✦",
  "Kolay Morarma": "🩹",
  "Şişliğin Başlangıcı": "⏳",
  "Diyete Cevap": "◷",
  "Aile Öyküsü": "👪",
  "Cilt Yapısı ve Enfeksiyon Öyküsü": "≋",
};

function dirOf(score: number): "lipo" | "lenf" | "mid" {
  return score > 0 ? "lipo" : score < 0 ? "lenf" : "mid";
}

export function DifferentialWizard() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<TestResult | null>(null);
  const dmA = useRef<SVGFEDisplacementMapElement>(null);
  const dmB = useRef<SVGFEDisplacementMapElement>(null);
  const rafRef = useRef<number | null>(null);

  const totalSteps = QUESTIONS.length;

  const runningTotal = QUESTIONS.reduce(
    (sum, q) => sum + (answers[q.id] ?? 0),
    0,
  );
  const m = Math.max(-1, Math.min(1, runningTotal / SENS));
  const lenfFrac = (1 - m) / 2;
  const needleLeft = 50 - m * 42;
  const verdict =
    runningTotal >= 4 ? "lipödem yönü" : runningTotal <= -4 ? "lenfödem yönü" : "denge";
  const ghostWord =
    runningTotal >= 4 ? "LİPÖDEM" : runningTotal <= -4 ? "LENFÖDEM" : "DENGE";
  const dirPct = Math.round(Math.abs(m) * 100);

  // gerçekçi sıvı morph: cevap verince iki displacement haritasını dalgalandır
  const pulseMorph = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const start = performance.now();
    const tick = (now: number) => {
      const k = Math.min(1, (now - start) / 620);
      const amp = Math.sin(k * Math.PI) * 26;
      if (dmA.current) dmA.current.setAttribute("scale", amp.toFixed(2));
      if (dmB.current) dmB.current.setAttribute("scale", (amp * 0.85).toFixed(2));
      if (k < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        dmA.current?.setAttribute("scale", "0");
        dmB.current?.setAttribute("scale", "0");
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  }, []);

  const handleAnswer = useCallback(
    (questionId: number, score: number) => {
      const nextAnswers = { ...answers, [questionId]: score };
      setAnswers(nextAnswers);
      pulseMorph();
      if (currentStep >= totalSteps) {
        setResult(calculateResult(nextAnswers));
      } else {
        window.setTimeout(() => setCurrentStep((prev) => prev + 1), 440);
      }
    },
    [answers, currentStep, totalSteps, pulseMorph],
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

  // klavye 1/2/3 + Backspace
  useEffect(() => {
    if (currentStep < 1 || result) return;
    const q = QUESTIONS[currentStep - 1];
    const onKey = (e: KeyboardEvent) => {
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= q.options.length) {
        handleAnswer(q.id, q.options[n - 1].score);
      } else if (e.key === "Backspace") {
        handleBack();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentStep, result, handleAnswer, handleBack]);

  // hidden SVG morph filters (her ekranda hazır dursun)
  const morphDefs = (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <filter id="lld-warpA" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.014" numOctaves={2} seed={7} result="n">
            <animate attributeName="baseFrequency" values="0.009 0.014;0.02 0.03;0.009 0.014" dur="7s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap ref={dmA} in="SourceGraphic" in2="n" scale={0} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="lld-warpB" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.016" numOctaves={2} seed={19} result="n">
            <animate attributeName="baseFrequency" values="0.01 0.016;0.022 0.034;0.01 0.016" dur="8s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap ref={dmB} in="SourceGraphic" in2="n" scale={0} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );

  // ---------- INTRO ----------
  if (currentStep === 0) {
    return (
      <div className={styles.wrap}>
        <div className="bg-white rounded-3xl shadow-lg border border-stone-100 p-8 md:p-12 text-center">
          <LastResultBadge slug="lipodem-lenfodem-ayirici-tani" />
          <div className="flex items-end justify-center gap-4 mb-5">
            <figure className="m-0 flex-1">
              <div className="relative w-full h-[150px]">
                <Image src={LIPO_IMG} alt="Lipödem bacak görünümü" fill className="object-contain" sizes="160px" />
              </div>
              <figcaption className="mt-1 inline-block text-[10px] font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                LİPÖDEM
              </figcaption>
            </figure>
            <div className="self-center pb-7 font-extrabold text-stone-300 text-base">vs</div>
            <figure className="m-0 flex-1">
              <div className="relative w-full h-[150px]">
                <Image src={LENF_IMG} alt="Lenfödem bacak görünümü" fill className="object-contain" sizes="160px" />
              </div>
              <figcaption className="mt-1 inline-block text-[10px] font-extrabold px-3 py-1 rounded-full bg-sky-50 text-sky-700">
                LENFÖDEM
              </figcaption>
            </figure>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#2D3B36] mb-3">
            Sizinki hangisine yakın?
          </h2>
          <p className="text-[#2D3B36]/55 mb-1 max-w-md mx-auto leading-relaxed">
            İki gerçek klinik tabloyu karşılaştırın. 10 soruda Földi ayırıcı tanı
            kriterleriyle yönünüzü görün.
          </p>
          <p className="text-xs text-[#2D3B36]/40 mb-8">
            Klinik referans: {SCALE_REFERENCE.name}
          </p>

          <button
            onClick={handleStart}
            className="text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: ACCENT }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT)}
          >
            Teste Başla →
          </button>

          <div className="mt-8 flex flex-col gap-1.5 text-sm text-[#2D3B36]/40">
            <p>Anonim · cevaplarınız cihazınızda kalır</p>
            <p>Bu test bir tanı aracı değildir.</p>
          </div>
        </div>
      </div>
    );
  }

  // ---------- RESULT ----------
  if (result) {
    return (
      <div className={styles.wrap}>
        {morphDefs}
        <DifferentialResult result={result} onRestart={handleRestart} />
      </div>
    );
  }

  // ---------- QUESTION ----------
  const question = QUESTIONS[currentStep - 1];
  const icon = CATEGORY_ICON[question.title] ?? "◆";

  return (
    <div className={styles.wrap}>
      {morphDefs}

      <div className={styles.head}>
        <button className={styles.back} onClick={handleBack} aria-label="Geri">
          ←
        </button>
        <div className={styles.prog}>
          <div className={styles.seg}>
            {QUESTIONS.map((q, i) => (
              <i
                key={q.id}
                className={i < currentStep - 1 ? styles.on : i === currentStep - 1 ? styles.cur : ""}
              />
            ))}
          </div>
          <div className={styles.pcount}>
            <b>{currentStep}</b>/{totalSteps}
          </div>
        </div>
      </div>

      <div className={styles.figzone}>
        <div className={styles.figwrap}>
          <span className={styles.ghost} style={{ color: runningTotal >= 4 ? "var(--lipo)" : runningTotal <= -4 ? "var(--lenf)" : "#000" }}>
            {ghostWord}
          </span>
          <img
            src={LIPO_IMG}
            alt=""
            style={{ opacity: 1 - lenfFrac, filter: "url(#lld-warpA)", transform: `scale(${1 + lenfFrac * 0.05})` }}
          />
          <img
            src={LENF_IMG}
            alt=""
            style={{ opacity: lenfFrac, filter: "url(#lld-warpB)", transform: `scale(${1.05 - lenfFrac * 0.05})` }}
          />
        </div>
        <div className={styles.beamlab}>
          <span className="l">◀ LİPÖDEM</span>
          <span className="m">{verdict}</span>
          <span className="r">LENFÖDEM ▶</span>
        </div>
        <div className={styles.beam}>
          <div
            className={styles.needle}
            style={{
              left: `${needleLeft}%`,
              borderColor:
                runningTotal >= 4 ? "var(--lipo)" : runningTotal <= -4 ? "var(--lenf)" : "var(--ash)",
            }}
          />
        </div>
        <div
          className={styles.dirpct}
          style={{ color: runningTotal >= 4 ? "var(--lipo-d)" : runningTotal <= -4 ? "var(--lenf-d)" : "var(--ash)" }}
        >
          {dirPct > 4 ? `%${dirPct} ${runningTotal > 0 ? "lipödem yönünde" : "lenfödem yönünde"}` : ""}
        </div>
      </div>

      <div className={`${styles.card} ${styles.cardPop}`} key={question.id}>
        <div className={styles.chip}>
          <span className="ci">{icon}</span>
          <span className="ct">{question.title.toLocaleUpperCase("tr")}</span>
          <span className="cn">· kriter {currentStep}</span>
        </div>

        <div className={styles.qtext}>
          {question.text.split(" ").map((w, i) => (
            <span key={i} className="w" style={{ animationDelay: `${i * 0.045}s` }}>
              {w + " "}
            </span>
          ))}
        </div>

        <div className={styles.opts}>
          {question.options.map((opt, i) => {
            const d = dirOf(opt.score);
            const badge = opt.score > 0 ? "＋" : opt.score < 0 ? "－" : "＝";
            const tag = opt.score > 0 ? "Lipödem" : opt.score < 0 ? "Lenfödem" : "Nötr";
            const selected = answers[question.id] === opt.score;
            return (
              <button
                key={i}
                className={`${styles.ocard} ${selected ? styles[d] : ""}`}
                style={{ animationDelay: `${0.12 + i * 0.07}s` }}
                onClick={() => handleAnswer(question.id, opt.score)}
              >
                <span className="shine" />
                <span className="obadge">{badge}</span>
                <span className="otx">{opt.label}</span>
                <span className="otag">{tag}</span>
                <span className="ochk">✓</span>
              </button>
            );
          })}
        </div>

        <div className={styles.kbHint}>
          <span className={styles.kbd}>1</span> <span className={styles.kbd}>2</span>{" "}
          <span className={styles.kbd}>3</span> tuşlarıyla da seçebilirsiniz
        </div>
      </div>
    </div>
  );
}
