"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);

  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        type="button"
        className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-stone-900 hover:bg-stone-50 transition-colors duration-150"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        {title}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-stone-500 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 pb-4 text-sm text-stone-600">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

function Accordion({ children, className }: AccordionProps) {
  return (
    <div
      className={cn(
        "divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}

export { Accordion, AccordionItem };
