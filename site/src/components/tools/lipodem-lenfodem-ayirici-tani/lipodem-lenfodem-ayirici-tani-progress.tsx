interface Props {
  current: number;
  total: number;
}

const ACCENT = "#6B7B99";
const ACCENT_BG = "#EEF1F7";

export function DifferentialProgress({ current, total }: Props) {
  const percentage = Math.round((current / total) * 100);
  const circumference = 2 * Math.PI * 28;

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="28" fill="none" stroke={ACCENT_BG} strokeWidth="4" />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke={ACCENT}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percentage / 100)}
            strokeLinecap="round"
            transform="rotate(-90 32 32)"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-[#2D3B36]">
            {current}/{total}
          </span>
        </div>
      </div>
    </div>
  );
}
