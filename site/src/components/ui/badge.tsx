import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-stone-100 text-stone-700",
  teal: "bg-[#E8F5F0] text-[#1A6B5A] border border-[#C5E8DC]",
  purple: "bg-[#E8F5F0] text-[#1A6B5A] border border-[#C5E8DC]",
  amber: "bg-amber-50 text-amber-700 border border-amber-200",
  green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  red: "bg-red-50 text-red-700 border border-red-200",
  stage1: "bg-emerald-100 text-emerald-800",
  stage2: "bg-amber-100 text-amber-800",
  stage3: "bg-orange-100 text-orange-800",
  stage4: "bg-red-100 text-red-800",
  free: "bg-[#E8F5F0] text-[#10473B]",
  founder: "bg-gradient-to-r from-[#FADCC8] to-[#FDF0E9] text-[#C75B3F]",
} as const;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge, variants as badgeVariants };
