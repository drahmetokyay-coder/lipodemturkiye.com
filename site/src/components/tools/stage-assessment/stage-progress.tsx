interface StageProgressProps {
  current: number;
  total: number;
}

export function StageProgress({ current, total }: StageProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-stone-600">
          İlerleme
        </span>
        <span className="text-sm font-semibold text-[#1A6B5A]">
          %{percentage}
        </span>
      </div>
      <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#1A6B5A] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
