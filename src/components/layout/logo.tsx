import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * The real D.F.T Limited mark (wheat sprig over a coin), supplied as
 * artwork with its background removed. Rendered inside a sized box with
 * `object-contain` so callers can request any square bounding size
 * (size-8, size-12, …) without distorting the mark's natural proportions.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block size-8", className)}>
      <Image
        src="/logo-mark.png"
        alt=""
        fill
        sizes="96px"
        className="object-contain"
        priority
      />
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-6" />
      <span className="flex flex-col leading-[0.95]">
        <span className="font-display text-[15px] font-bold tracking-wide text-white">DFT</span>
        <span className="font-display text-[10.5px] font-medium tracking-[0.16em] text-[var(--slate-300)]">
          LIMITED
        </span>
      </span>
    </span>
  );
}
