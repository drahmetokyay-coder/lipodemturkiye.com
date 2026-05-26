interface StageProgressProps {
  current: number;
  total: number;
}

export function StageProgress({ current, total }: StageProgressProps) {
  const percentage = Math.round((current / total) * 100);
  const circumference = 2 * Math.PI * 28; // r=28

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <svg className="w-16 h-16" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#E8F5F0"
            strokeWidth="4"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#1A6B5A"
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
