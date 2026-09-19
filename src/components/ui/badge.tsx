import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "border-[var(--gold-500)]/40 bg-[var(--gold-500)]/10 text-[var(--gold-300)]",
        outline: "border-white/15 bg-transparent text-[var(--slate-300)]",
        rise: "border-[var(--rise-500)]/40 bg-[var(--rise-500)]/10 text-[var(--rise-500)]",
        fall: "border-[var(--fall-500)]/40 bg-[var(--fall-500)]/10 text-[var(--fall-500)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
