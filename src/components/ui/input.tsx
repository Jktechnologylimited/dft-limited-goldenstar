import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-current placeholder:text-[var(--slate-300)]/70 outline-none transition-colors selection:bg-[var(--gold-500)]/30",
        "focus-visible:border-[var(--gold-500)]/60 focus-visible:ring-2 focus-visible:ring-[var(--gold-500)]/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-[var(--fall-500)] aria-invalid:ring-[var(--fall-500)]/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
