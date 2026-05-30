import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export interface ResultPdfPayload {
  testTitle: string;
  bandLabel: string;
  bandColor?: { r: number; g: number; b: number };
  scoreLine: string;
  percentage: number;
  clinicalInterpretation: string;
  steps: string[];
  flagNotes?: string[];
  takenAt: string;
}

const BRAND_TEAL = rgb(0.102, 0.42, 0.353);
const SOFT_DARK = rgb(0.102, 0.141, 0.129);
const MUTED = rgb(0.39, 0.42, 0.4);
const SOFT_BG = rgb(0.98, 0.97, 0.95);

export async function buildResultPdf(p: ResultPdfPayload): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const page = doc.addPage([595.28, 841.89]); // A4
  const { width, height } = page.getSize();

  const fontReg = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;
  let y = height - margin;

  // Header band
  page.drawRectangle({
    x: 0,
    y: height - 90,
    width,
    height: 90,
    color: BRAND_TEAL,
  });

  page.drawText("LIPODEM TURKIYE", {
    x: margin,
    y: height - 38,
    size: 11,
    font: fontBold,
    color: rgb(1, 1, 1),
  });
  page.drawText("Test Sonuc Raporu", {
    x: margin,
    y: height - 60,
    size: 18,
    font: fontBold,
    color: rgb(1, 1, 1),
  });
  page.drawText(p.takenAt, {
    x: width - margin - 110,
    y: height - 38,
    size: 10,
    font: fontReg,
    color: rgb(1, 1, 1),
  });

  y = height - 130;

  // Test title
  page.drawText(strip(p.testTitle), {
    x: margin,
    y,
    size: 22,
    font: fontBold,
    color: SOFT_DARK,
  });
  y -= 28;

  // Band card
  const bandH = 72;
  page.drawRectangle({
    x: margin,
    y: y - bandH,
    width: width - margin * 2,
    height: bandH,
    color: SOFT_BG,
    borderColor: BRAND_TEAL,
    borderWidth: 0.6,
  });
  page.drawText("SONUC BANDI", {
    x: margin + 16,
    y: y - 22,
    size: 8,
    font: fontBold,
    color: BRAND_TEAL,
  });
  page.drawText(strip(p.bandLabel), {
    x: margin + 16,
    y: y - 44,
    size: 18,
    font: fontBold,
    color: SOFT_DARK,
  });
  page.drawText(p.scoreLine, {
    x: margin + 16,
    y: y - 62,
    size: 11,
    font: fontReg,
    color: MUTED,
  });

  // Right-side big percentage
  page.drawText(`${p.percentage}%`, {
    x: width - margin - 70,
    y: y - 48,
    size: 26,
    font: fontBold,
    color: BRAND_TEAL,
  });

  y -= bandH + 24;

  // Clinical interpretation
  page.drawText("KLINIK YORUM", {
    x: margin,
    y,
    size: 8,
    font: fontBold,
    color: BRAND_TEAL,
  });
  y -= 14;
  y = drawWrapped(page, strip(p.clinicalInterpretation), {
    x: margin,
    y,
    maxWidth: width - margin * 2,
    font: fontReg,
    size: 11,
    color: SOFT_DARK,
    lineHeight: 16,
  });
  y -= 16;

  // Flag notes
  if (p.flagNotes && p.flagNotes.length) {
    for (const note of p.flagNotes) {
      page.drawRectangle({
        x: margin,
        y: y - 26,
        width: width - margin * 2,
        height: 26,
        color: rgb(0.996, 0.953, 0.902),
      });
      page.drawText(strip(note), {
        x: margin + 12,
        y: y - 18,
        size: 10,
        font: fontReg,
        color: rgb(0.545, 0.353, 0.169),
      });
      y -= 32;
    }
  }

  y -= 8;
  page.drawText("SONRAKI ADIMLAR", {
    x: margin,
    y,
    size: 8,
    font: fontBold,
    color: BRAND_TEAL,
  });
  y -= 14;

  for (const step of p.steps) {
    page.drawCircle({ x: margin + 4, y: y + 4, size: 2.2, color: BRAND_TEAL });
    y = drawWrapped(page, strip(step), {
      x: margin + 16,
      y,
      maxWidth: width - margin * 2 - 16,
      font: fontReg,
      size: 11,
      color: SOFT_DARK,
      lineHeight: 15,
    });
    y -= 6;
  }

  // Footer
  const footY = 56;
  page.drawLine({
    start: { x: margin, y: footY + 28 },
    end: { x: width - margin, y: footY + 28 },
    thickness: 0.5,
    color: MUTED,
  });
  page.drawText("Bu test bir tani araci degildir. Kesin tani yalnizca bir saglik profesyoneli tarafindan konulabilir.", {
    x: margin,
    y: footY + 12,
    size: 8,
    font: fontReg,
    color: MUTED,
  });
  page.drawText("lipodemturkiye.com", {
    x: margin,
    y: footY,
    size: 9,
    font: fontBold,
    color: BRAND_TEAL,
  });

  return await doc.save();
}

function strip(s: string): string {
  // pdf-lib StandardFonts only support WinAnsi. Strip Turkish diacritics safely.
  return s
    .replace(/[İI]/g, "I")
    .replace(/ı/g, "i")
    .replace(/Ş/g, "S").replace(/ş/g, "s")
    .replace(/Ğ/g, "G").replace(/ğ/g, "g")
    .replace(/Ç/g, "C").replace(/ç/g, "c")
    .replace(/Ü/g, "U").replace(/ü/g, "u")
    .replace(/Ö/g, "O").replace(/ö/g, "o")
    .replace(/â/g, "a").replace(/Â/g, "A")
    .replace(/î/g, "i").replace(/Î/g, "I")
    .replace(/û/g, "u").replace(/Û/g, "U");
}

function drawWrapped(
  page: ReturnType<PDFDocument["addPage"]>,
  text: string,
  o: {
    x: number;
    y: number;
    maxWidth: number;
    font: Awaited<ReturnType<PDFDocument["embedFont"]>>;
    size: number;
    color: ReturnType<typeof rgb>;
    lineHeight: number;
  }
): number {
  const words = text.split(/\s+/);
  let line = "";
  let y = o.y;
  for (const w of words) {
    const test = line ? line + " " + w : w;
    if (o.font.widthOfTextAtSize(test, o.size) > o.maxWidth) {
      page.drawText(line, { x: o.x, y, size: o.size, font: o.font, color: o.color });
      y -= o.lineHeight;
      line = w;
    } else {
      line = test;
    }
  }
  if (line) {
    page.drawText(line, { x: o.x, y, size: o.size, font: o.font, color: o.color });
    y -= o.lineHeight;
  }
  return y;
}
