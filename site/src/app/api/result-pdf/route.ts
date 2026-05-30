import { NextResponse } from "next/server";
import { buildResultPdf } from "@/lib/pdf-generator";

export const runtime = "nodejs";

interface Payload {
  testTitle: string;
  bandLabel: string;
  scoreLine: string;
  percentage: number;
  clinicalInterpretation: string;
  steps: string[];
  flagNotes?: string[];
  filename?: string;
}

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

  const p = body as Partial<Payload>;
  if (
    typeof p.testTitle !== "string" ||
    typeof p.bandLabel !== "string" ||
    typeof p.scoreLine !== "string" ||
    typeof p.percentage !== "number" ||
    typeof p.clinicalInterpretation !== "string" ||
    !Array.isArray(p.steps) ||
    !p.steps.every((s) => typeof s === "string")
  ) {
    return NextResponse.json({ error: "INVALID_PAYLOAD" }, { status: 400 });
  }

  const takenAt = new Date().toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  try {
    const bytes = await buildResultPdf({
      testTitle: p.testTitle,
      bandLabel: p.bandLabel,
      scoreLine: p.scoreLine,
      percentage: Math.max(0, Math.min(100, Math.round(p.percentage))),
      clinicalInterpretation: p.clinicalInterpretation,
      steps: p.steps,
      flagNotes: Array.isArray(p.flagNotes) ? p.flagNotes : [],
      takenAt,
    });

    const filename = (p.filename ?? "lipodem-test-sonuc") + ".pdf";

    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "PDF_GENERATION_FAILED" }, { status: 500 });
  }
}
