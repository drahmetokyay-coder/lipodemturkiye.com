import { NextResponse } from "next/server";
import { upsertLead, isKvConfigured } from "@/lib/kv";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ALLOWED_SLUGS = new Set([
  "lipodem-semptom-testi",
  "lipodem-evre-belirleme",
  "lipodem-lenfodem-ayirici-tani",
  "agri-vas-skoru",
  "lipodem-yasam-kalitesi",
  "bel-kalca-orani-whr",
  "anti-inflamatuar-diyet-skoru",
  "kompresyon-ihtiyac-testi",
  "egzersiz-tolerans-testi",
  "cerrahi-adaylik-degerlendirmesi",
]);

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "INVALID_JSON" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "INVALID_BODY" }, { status: 400 });
  }

  const { email, testSlug, band, score, consent } = body as Record<string, unknown>;

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "INVALID_EMAIL" }, { status: 400 });
  }
  if (typeof testSlug !== "string" || !ALLOWED_SLUGS.has(testSlug)) {
    return NextResponse.json({ error: "INVALID_TEST" }, { status: 400 });
  }
  if (typeof band !== "string" || band.length === 0 || band.length > 32) {
    return NextResponse.json({ error: "INVALID_BAND" }, { status: 400 });
  }
  if (typeof score !== "number" || !Number.isFinite(score)) {
    return NextResponse.json({ error: "INVALID_SCORE" }, { status: 400 });
  }
  if (consent !== true) {
    return NextResponse.json({ error: "CONSENT_REQUIRED" }, { status: 400 });
  }

  if (!isKvConfigured()) {
    return NextResponse.json({ error: "KV_NOT_CONFIGURED" }, { status: 503 });
  }

  try {
    await upsertLead({ email, testSlug, band, score });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "STORAGE_ERROR" }, { status: 500 });
  }
}
