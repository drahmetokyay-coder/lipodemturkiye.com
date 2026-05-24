import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("bg-stone-200 animate-pulse rounded-lg", className)}
      {...props}
    />
  );
}

export { Skeleton };
