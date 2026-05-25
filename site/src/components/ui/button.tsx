import * as React from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

const variants = {
  primary:
    "bg-[#1A6B5A] text-white hover:bg-[#15594A] active:bg-[#10473B] shadow-sm",
  secondary:
    "bg-[#1A6B5A] text-white hover:bg-[#15594A] active:bg-[#10473B] shadow-sm",
  ghost:
    "bg-transparent text-stone-700 hover:bg-stone-100 active:bg-stone-200",
  "cta-gradient":
    "bg-gradient-to-r from-[#1A6B5A] to-[#2D8B73] text-white hover:from-[#15594A] hover:to-[#1A6B5A] shadow-md hover:shadow-lg",
  premium:
    "bg-gradient-to-r from-[#1A6B5A] to-[#10473B] text-white hover:from-[#15594A] hover:to-[#0B352C] shadow-md",
  founder:
    "bg-gradient-to-r from-[#E8916D] to-[#C75B3F] text-white hover:from-[#C75B3F] hover:to-[#A84A33] shadow-md",
  destructive:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 shadow-sm",
} as const;

const sizes = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
  xl: "h-14 px-8 text-lg gap-2.5",
} as const;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B5A] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading && <Spinner size="sm" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, variants as buttonVariants };
