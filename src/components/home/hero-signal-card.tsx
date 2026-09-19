"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";

import { useLivePrices } from "@/components/home/use-live-prices";
import { cn } from "@/lib/utils";

const INSIGHTS = [
  "Momentum building on XAU/USD into the London session",
  "GBP/USD volatility easing after this week's data",
  "EUR/USD holding range — watching for a breakout",
  "BTC/USD liquidity thickening above key support",
];

export function HeroSignalCard() {
  const prices = useLivePrices(2600).slice(0, 4);
  const [insightIndex, setInsightIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setInsightIndex((i) => (i + 1) % INSIGHTS.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-[var(--ink-800)] p-5 shadow-2xl">
      <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--gold-500)]/70 to-transparent" />

      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--slate-300)]">
          Live signal feed
        </p>
        <span className="flex items-center gap-1.5 text-[11px] text-[var(--rise-500)]">
          <span className="size-1.5 animate-pulse rounded-full bg-[var(--rise-500)]" />
          Streaming
        </span>
      </div>

      <div className="mt-4 flex flex-col divide-y divide-white/[0.06]">
        {prices.map((p) => (
          <div key={p.symbol} className="flex items-center justify-between py-2.5">
            <span className="text-sm text-white/80">{p.symbol}</span>
            <div className="flex items-center gap-2 font-mono">
              <span
                key={p.price}
                className={cn(
                  "text-[15px] font-medium text-white",
                  p.direction === "up" && "animate-rise-flash",
                  p.direction === "down" && "animate-fall-flash"
                )}
              >
                {p.price}
              </span>
              <span
                className={cn(
                  "text-xs",
                  p.direction === "up" && "text-[var(--rise-500)]",
                  p.direction === "down" && "text-[var(--fall-500)]",
                  !p.direction && "text-[var(--slate-300)]/30"
                )}
              >
                {p.direction === "up" ? "▲" : p.direction === "down" ? "▼" : "—"}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-xl border border-[var(--gold-500)]/25 bg-[var(--gold-500)]/[0.06] p-3">
        <Sparkles className="mt-0.5 size-3.5 shrink-0 text-[var(--gold-500)]" />
        <p key={insightIndex} className="text-[12.5px] leading-snug text-[var(--gold-300)]">
          {INSIGHTS[insightIndex]}
        </p>
      </div>

      <p className="mt-3 text-center text-[10.5px] text-[var(--slate-300)]/50">
        Illustrative feed for demonstration — not live market data
      </p>
    </div>
  );
}
