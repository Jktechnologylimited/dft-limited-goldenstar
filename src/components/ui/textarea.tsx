import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-current placeholder:text-[var(--slate-300)]/70 outline-none transition-colors selection:bg-[var(--gold-500)]/30",
        "focus-visible:border-[var(--gold-500)]/60 focus-visible:ring-2 focus-visible:ring-[var(--gold-500)]/20",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
