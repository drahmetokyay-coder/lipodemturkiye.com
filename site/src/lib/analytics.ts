type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function trackCTA(buttonText: string, page: string, section: string) {
  trackEvent("cta_clicked", { button_text: buttonText, page, section });
}

export function trackToolStart(toolName: string) {
  trackEvent("tool_started", { tool_name: toolName });
}

export function trackToolComplete(toolName: string, score?: number, riskLevel?: string) {
  trackEvent("tool_completed", { tool_name: toolName, result_score: score, risk_level: riskLevel });
}
