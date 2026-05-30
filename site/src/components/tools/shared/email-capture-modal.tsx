"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, Loader2, Download, AlertCircle } from "lucide-react";
import type { TestSlug } from "@/lib/test-storage";

interface PdfPayload {
  testTitle: string;
  bandLabel: string;
  scoreLine: string;
  percentage: number;
  clinicalInterpretation: string;
  steps: string[];
  flagNotes?: string[];
  filename?: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  testSlug: TestSlug;
  band: string;
  score: number;
  pdfPayload: PdfPayload;
}

type State = "idle" | "submitting" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EmailCaptureModal({ open, onClose, testSlug, band, score, pdfPayload }: Props) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open, onClose]);

  if (!open) return null;

  const valid = EMAIL_RE.test(email) && consent;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!valid) return;
    setState("submitting");
    setErrorMessage(null);

    try {
      const leadResp = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, testSlug, band, score, consent: true }),
      });

      if (!leadResp.ok) {
        const body = await leadResp.json().catch(() => ({}));
        if (body?.error === "KV_NOT_CONFIGURED") {
          setErrorMessage(
            "Hizmet şu an kullanılamıyor. Sonucu 'Tarayıcıdan yazdır' ile alabilirsiniz."
          );
        } else {
          setErrorMessage("Bir hata oluştu, lütfen tekrar deneyin.");
        }
        setState("error");
        return;
      }

      const pdfResp = await fetch("/api/result-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pdfPayload),
      });

      if (!pdfResp.ok) {
        setErrorMessage("PDF üretilirken sorun oluştu.");
        setState("error");
        return;
      }

      const blob = await pdfResp.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = (pdfPayload.filename ?? "lipodem-test-sonuc") + ".pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);

      onClose();
      setEmail("");
      setConsent(false);
      setState("idle");
    } catch {
      setErrorMessage("Bağlantı sorunu, lütfen tekrar deneyin.");
      setState("error");
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ec-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Kapat"
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-100 transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7">
          <div className="w-12 h-12 rounded-2xl bg-[#E8F5F0] flex items-center justify-center mb-4">
            <Download className="w-5 h-5 text-[#1A6B5A]" />
          </div>
          <h2 id="ec-title" className="text-xl font-bold text-[#2D3B36] leading-tight">
            Sonucunuzu PDF olarak alın
          </h2>
          <p className="text-sm text-[#5a6a64] mt-2 leading-relaxed">
            E-postanız sonuçlarınızı saklamamıza ve ileride faydalı bilgilendirme göndermemize yardımcı olur.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="ec-email" className="block text-xs font-semibold text-[#2D3B36] mb-1.5">
                E-posta adresiniz
              </label>
              <input
                ref={inputRef}
                id="ec-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ad@email.com"
                className="w-full px-4 py-3 border border-stone-300 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1A6B5A]/40 focus:border-[#1A6B5A]"
                required
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer text-[13px] text-[#5a6a64] leading-relaxed">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-[#1A6B5A] flex-shrink-0"
                required
              />
              <span>
                <Link href="/gizlilik-politikasi" target="_blank" className="text-[#1A6B5A] font-semibold underline">
                  Gizlilik politikasını
                </Link>{" "}
                okudum; sonucumu ve bilgilendirici e-postalar almayı onaylıyorum.
              </span>
            </label>

            {errorMessage && (
              <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-700">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-xl border border-stone-300 text-[#2D3B36] font-semibold text-sm hover:bg-stone-50 transition"
              >
                İptal
              </button>
              <button
                type="submit"
                disabled={!valid || state === "submitting"}
                className="flex-1 px-4 py-3 rounded-xl bg-[#1A6B5A] text-white font-semibold text-sm hover:bg-[#15594B] disabled:opacity-50 disabled:cursor-not-allowed transition inline-flex items-center justify-center gap-2"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Hazırlanıyor
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    PDF&apos;i indir
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
