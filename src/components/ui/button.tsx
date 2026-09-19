import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ink-950)]",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--gold-500)] text-[var(--ink-950)] hover:bg-[var(--gold-300)] shadow-[0_0_0_1px_rgba(242,194,48,0.35)]",
        outline:
          "border border-white/20 bg-transparent text-current hover:border-[var(--gold-500)]/70 hover:bg-white/5",
        ghost: "bg-transparent hover:bg-white/5",
        link: "text-[var(--gold-500)] underline-offset-4 hover:underline",
        subtle:
          "bg-white/5 text-current border border-white/10 hover:border-white/20 hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-5",
        sm: "h-9 px-4 text-[13px] has-[>svg]:px-3.5",
        lg: "h-12 px-8 text-[15px] has-[>svg]:px-6",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
