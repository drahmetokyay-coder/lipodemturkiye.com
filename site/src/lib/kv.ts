import { kv } from "@vercel/kv";

export interface LeadRecord {
  email: string;
  consent: boolean;
  consentAt: string;
  results: Array<{
    testSlug: string;
    band: string;
    score: number;
    takenAt: string;
  }>;
}

export function isKvConfigured(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
  );
}

function keyFor(email: string): string {
  return `lead:${email.trim().toLowerCase()}`;
}

export async function upsertLead(input: {
  email: string;
  testSlug: string;
  band: string;
  score: number;
}): Promise<void> {
  if (!isKvConfigured()) {
    throw new Error("KV_NOT_CONFIGURED");
  }

  const key = keyFor(input.email);
  const now = new Date().toISOString();
  const existing = (await kv.get<LeadRecord>(key)) ?? null;

  const next: LeadRecord = existing
    ? {
        ...existing,
        results: [
          ...existing.results,
          { testSlug: input.testSlug, band: input.band, score: input.score, takenAt: now },
        ],
      }
    : {
        email: input.email.trim().toLowerCase(),
        consent: true,
        consentAt: now,
        results: [
          { testSlug: input.testSlug, band: input.band, score: input.score, takenAt: now },
        ],
      };

  await kv.set(key, next);
}
