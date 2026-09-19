"use client";

import * as React from "react";

import { tickerPairs } from "@/data/site";

export type LivePrice = {
  symbol: string;
  price: string;
  direction: "up" | "down" | null;
};

function format(value: number, decimals: number) {
  return value.toFixed(decimals);
}

export function useLivePrices(intervalMs = 2200) {
  const [prices, setPrices] = React.useState<LivePrice[]>(() =>
    tickerPairs.map((p) => ({ symbol: p.symbol, price: format(p.base, p.decimals), direction: null }))
  );
  const valuesRef = React.useRef<number[]>(tickerPairs.map((p) => p.base));

  React.useEffect(() => {
    const id = setInterval(() => {
      const index = Math.floor(Math.random() * tickerPairs.length);
      const pair = tickerPairs[index];
      const current = valuesRef.current[index];
      const magnitude = pair.base * (0.00012 + Math.random() * 0.00045);
      const delta = Math.random() > 0.5 ? magnitude : -magnitude;
      const next = current + delta;
      valuesRef.current[index] = next;

      setPrices((prev) =>
        prev.map((p, i) =>
          i === index
            ? { symbol: p.symbol, price: format(next, pair.decimals), direction: delta > 0 ? "up" : "down" }
            : p
        )
      );
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs]);

  return prices;
}
