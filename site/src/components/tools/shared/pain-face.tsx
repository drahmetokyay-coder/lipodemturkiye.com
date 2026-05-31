/**
 * Inline pain-scale face — lisans/atıf gerektirmez, markaya boyanır.
 * level: 0 (rahat/gülümseme) .. 1 (en şiddetli/acı). Renk yeşil→amber→kırmızı.
 */
export function PainFace({ level, size = 30 }: { level: number; size?: number }) {
  const t = Math.max(0, Math.min(1, level));
  const color =
    t < 0.5
      ? lerpColor("#10b981", "#f59e0b", t / 0.5)
      : lerpColor("#f59e0b", "#e11d48", (t - 0.5) / 0.5);

  // Ağız kontrol noktası Y:
  //  t=0 -> gülümseme: kontrol noktası ENDPOINT'lerin ALTINDA (Y büyük) -> aşağı kavis
  //  t=1 -> acı/somurtma: kontrol noktası ÜSTTE (Y küçük) -> yukarı kavis
  const mouthY = 66;
  const ctrlY = 86 - t * 40; // 0 -> 86 (gülümseme), 1 -> 46 (somurtma)
  const browLift = t * 4;

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden>
      <circle cx="50" cy="50" r="44" fill="#fff" stroke={color} strokeWidth="5" />
      <circle cx="35" cy={45 + browLift} r="5" fill={color} />
      <circle cx="65" cy={45 + browLift} r="5" fill={color} />
      {t > 0.55 && (
        <>
          <line x1="27" y1={34 + browLift} x2="43" y2={39 + browLift} stroke={color} strokeWidth="3" strokeLinecap="round" />
          <line x1="73" y1={34 + browLift} x2="57" y2={39 + browLift} stroke={color} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      <path
        d={`M30 ${mouthY} Q50 ${ctrlY} 70 ${mouthY}`}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function lerpColor(a: string, b: string, t: number): string {
  const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
  const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
  const c = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
