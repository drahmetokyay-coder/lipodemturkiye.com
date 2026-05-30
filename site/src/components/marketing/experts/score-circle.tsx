type ScoreCircleProps = {
  /** 0-100 arası uzman skoru */
  score: number
  /** Halka rengi (marka/kategori tonu) */
  color: string
  /** Görsel boyut çapı (px) */
  size?: number
}

/**
 * ID kart üzerindeki 100 üzerinden skor göstergesi.
 * conic-gradient ile çizilen halka + ortada "{score}" ve "/100".
 */
export function ScoreCircle({ score, color, size = 64 }: ScoreCircleProps) {
  const deg = Math.max(0, Math.min(100, score)) * 3.6

  return (
    <div
      className="relative shrink-0 rounded-full shadow-[0_4px_12px_-4px_rgba(22,56,50,0.35)] transition-transform duration-500 ease-out group-hover:scale-110"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(${color} ${deg}deg, #ECEAE6 ${deg}deg 360deg)`,
      }}
      role="img"
      aria-label={`Uzman skoru: 100 üzerinden ${score}`}
    >
      <div className="absolute inset-[3px] rounded-full bg-white flex flex-col items-center justify-center leading-none">
        <span
          className="font-display font-bold"
          style={{ color, fontSize: size * 0.3 }}
        >
          {score}
        </span>
        <span
          className="text-[#9AA8A2] font-semibold tracking-wide mt-[1px]"
          style={{ fontSize: size * 0.14 }}
        >
          /100
        </span>
      </div>
    </div>
  )
}
