import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { coreValues } from "@/data/values";

export function ValuesGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {coreValues.map((value) => (
        <div key={value.title} className="bg-[var(--ink-950)] p-6">
          <h3 className="font-display text-[15px] font-semibold text-[var(--gold-300)]">
            {value.title}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-[var(--slate-300)]">{value.body}</p>
        </div>
      ))}
      <Link
        href="/contact"
        className="group flex flex-col justify-between bg-[var(--gold-500)] p-6 transition-colors hover:bg-[var(--gold-300)]"
      >
        <h3 className="font-display text-[15px] font-semibold text-[var(--ink-950)]">
          See these values in practice
        </h3>
        <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--ink-950)]">
          Talk to our team
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  );
}
