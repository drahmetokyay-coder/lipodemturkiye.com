"use client";

import { useEffect, useState } from "react";
import { Clock, RotateCcw } from "lucide-react";
import { getLastResult, type TestSlug } from "@/lib/test-storage";

interface Props {
  slug: TestSlug;
}

export function LastResultBadge({ slug }: Props) {
  const [stored, setStored] = useState<ReturnType<typeof getLastResult> | null>(null);

  useEffect(() => {
    setStored(getLastResult(slug));
  }, [slug]);

  if (!stored) return null;

  const date = new Date(stored.takenAt);
  const dateLabel = date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-6 bg-[#F0F8F4] border border-[#1A6B5A]/20 rounded-2xl p-4 flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-[#E8F5F0] flex items-center justify-center flex-shrink-0">
        <Clock className="w-4 h-4 text-[#1A6B5A]" />
      </div>
      <div className="flex-1 text-left">
        <div className="text-[10px] font-bold tracking-wider text-[#1A6B5A]">SON SONUCUNUZ</div>
        <div className="text-sm text-[#2D3B36] font-semibold mt-0.5 leading-tight">
          {stored.bandLabel}
        </div>
        <div className="text-xs text-[#5a6a64] mt-1">{dateLabel}</div>
      </div>
      <RotateCcw className="w-3.5 h-3.5 text-[#1A6B5A]/40 flex-shrink-0 mt-1" />
    </div>
  );
}
