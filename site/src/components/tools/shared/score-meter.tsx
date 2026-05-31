/**
 * Paylaşılan canlı skor göstergesi — tek eksenli testler için.
 * Cevaplar biriktikçe yarım-daire gauge dolar, renk banda göre kayar,
 * ibre döner, etiket güncellenir. Accent'ten bağımsız, kendi renk skalası var.
 *
 * pct: 0..100 (o ana kadarki birikmiş skorun yüzdesi)
 * label: bant etiketi ("Düşük/Orta/Yüksek" vb.) — null ise "—"
 * tone: "low" | "mid" | "high" → renk
 */
export function ScoreMeter({
  pct,
  label,
  tone,
  caption = "EĞİLİM",
}: {
  pct: number;
  label: string | null;
  tone: "low" | "mid" | "high" | "none";
  caption?: string;
}) {
  const p = Math.max(0, Math.min(100, pct));
  const color =
    tone === "high" ? "#e11d48" : tone === "mid" ? "#f59e0b" : tone === "low" ? "#10b981" : "#9aa39d";
  // yarım daire: 0% sol, 100% sağ. ibre açısı -90..+90
  const angle = -90 + (p / 100) * 180;
  const dash = 251.2; // π*r, r=80
  const offset = dash - (p / 100) * dash;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ece7df",
        borderRadius: 22,
        padding: "16px 16px 12px",
        marginBottom: 14,
        boxShadow: "0 10px 28px -22px rgba(20,30,40,.4)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 10, fontWeight: 900, letterSpacing: "1.2px", color: "#9aa39d" }}>
          {caption}
        </span>
        <span style={{ fontSize: 13, fontWeight: 900, color, transition: "color .4s" }}>
          {label ?? "—"}
        </span>
      </div>
      <div style={{ position: "relative", width: 200, height: 110, margin: "0 auto" }}>
        <svg viewBox="0 0 200 110" width="200" height="110">
          <path d="M20,100 A80,80 0 0,1 180,100" fill="none" stroke="#eceae4" strokeWidth="13" strokeLinecap="round" />
          <path
            d="M20,100 A80,80 0 0,1 180,100"
            fill="none"
            stroke={color}
            strokeWidth="13"
            strokeLinecap="round"
            strokeDasharray={dash}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset .6s cubic-bezier(.34,1.2,.5,1), stroke .4s" }}
          />
          <g
            style={{ transition: "transform .6s cubic-bezier(.34,1.4,.5,1)", transformOrigin: "100px 100px" }}
            transform={`rotate(${angle} 100 100)`}
          >
            <line x1="100" y1="100" x2="100" y2="34" stroke={color} strokeWidth="3.5" strokeLinecap="round" style={{ transition: "stroke .4s" }} />
            <circle cx="100" cy="100" r="7" fill={color} style={{ transition: "fill .4s" }} />
          </g>
        </svg>
        <div
          style={{
            position: "absolute",
            bottom: 2,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 22,
            fontWeight: 900,
            color,
            fontVariantNumeric: "tabular-nums",
            transition: "color .4s",
          }}
        >
          %{Math.round(p)}
        </div>
      </div>
    </div>
  );
}
