import type { Metadata } from "next";

import { FaqAccordion } from "@/components/faq/faq-accordion";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about D.F.T Limited's services, courses and policies.",
};

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <p className="text-center font-mono text-[13px] text-[var(--slate-300)]">FAQ</p>
        <h1 className="mt-4 text-balance text-center font-serif text-4xl leading-tight text-white sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-center text-[16px] leading-relaxed text-[var(--slate-300)]">
          Everything you need to know about working with D.F.T Limited. Can&apos;t find your
          answer? Reach out directly.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 lg:px-8 lg:pb-28">
        <FaqAccordion />
      </section>

      <CtaBand />
    </>
  );
}
