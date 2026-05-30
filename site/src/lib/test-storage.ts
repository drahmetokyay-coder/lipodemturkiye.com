export type TestSlug =
  | "lipodem-semptom-testi"
  | "lipodem-evre-belirleme"
  | "lipodem-lenfodem-ayirici-tani"
  | "agri-vas-skoru"
  | "lipodem-yasam-kalitesi"
  | "bel-kalca-orani-whr"
  | "anti-inflamatuar-diyet-skoru"
  | "kompresyon-ihtiyac-testi"
  | "egzersiz-tolerans-testi"
  | "cerrahi-adaylik-degerlendirmesi";

export interface StoredResult<TBand extends string = string> {
  slug: TestSlug;
  band: TBand;
  bandLabel: string;
  score: number;
  maxScore: number;
  percentage: number;
  takenAt: string;
}

const KEY_PREFIX = "lipodem-test-result:";
const TS_KEY = "lipodem-test-results-index";

function safe(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function saveResult<TBand extends string>(
  data: StoredResult<TBand>
): void {
  const ls = safe();
  if (!ls) return;
  try {
    ls.setItem(KEY_PREFIX + data.slug, JSON.stringify(data));
    const indexRaw = ls.getItem(TS_KEY);
    const index: string[] = indexRaw ? JSON.parse(indexRaw) : [];
    if (!index.includes(data.slug)) {
      index.push(data.slug);
      ls.setItem(TS_KEY, JSON.stringify(index));
    }
  } catch {
    // ignore quota / parse errors
  }
}

export function getLastResult<TBand extends string>(
  slug: TestSlug
): StoredResult<TBand> | null {
  const ls = safe();
  if (!ls) return null;
  try {
    const raw = ls.getItem(KEY_PREFIX + slug);
    if (!raw) return null;
    return JSON.parse(raw) as StoredResult<TBand>;
  } catch {
    return null;
  }
}

export function getAllResults(): StoredResult[] {
  const ls = safe();
  if (!ls) return [];
  try {
    const indexRaw = ls.getItem(TS_KEY);
    const slugs: string[] = indexRaw ? JSON.parse(indexRaw) : [];
    const results: StoredResult[] = [];
    for (const slug of slugs) {
      const raw = ls.getItem(KEY_PREFIX + slug);
      if (raw) {
        try {
          results.push(JSON.parse(raw) as StoredResult);
        } catch {
          // skip corrupt entry
        }
      }
    }
    return results;
  } catch {
    return [];
  }
}

export function clearResult(slug: TestSlug): void {
  const ls = safe();
  if (!ls) return;
  try {
    ls.removeItem(KEY_PREFIX + slug);
    const indexRaw = ls.getItem(TS_KEY);
    if (indexRaw) {
      const index: string[] = JSON.parse(indexRaw);
      const next = index.filter((s) => s !== slug);
      ls.setItem(TS_KEY, JSON.stringify(next));
    }
  } catch {
    // ignore
  }
}
