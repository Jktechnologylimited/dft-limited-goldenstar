"use client";

import { useLivePrices } from "@/components/home/use-live-prices";
import { cn } from "@/lib/utils";

export function TickerStrip() {
  const prices = useLivePrices();
  const doubled = [...prices, ...prices];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[var(--ink-900)] py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--ink-900)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--ink-900)] to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((p, i) => (
          <div key={`${p.symbol}-${i}`} className="flex shrink-0 items-center gap-2.5 font-mono text-[13px]">
            <span className="text-[var(--slate-300)]">{p.symbol}</span>
            <span
              key={p.price}
              className={cn(
                "font-medium text-white",
                p.direction === "up" && "animate-rise-flash",
                p.direction === "down" && "animate-fall-flash"
              )}
            >
              {p.price}
            </span>
            <span
              className={cn(
                "text-[10px]",
                p.direction === "up" && "text-[var(--rise-500)]",
                p.direction === "down" && "text-[var(--fall-500)]",
                !p.direction && "text-[var(--slate-300)]/40"
              )}
            >
              {p.direction === "up" ? "▲" : p.direction === "down" ? "▼" : "•"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
