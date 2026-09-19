import type { Metadata } from "next";

import { ServiceIndex } from "@/components/services/service-index";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "FX signal provision, financial consulting, AI integration, web & app development and Forex account management — from D.F.T Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <p className="font-mono text-[13px] text-[var(--slate-300)]">Our services</p>
        <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight text-white sm:text-5xl">
          What we do
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--slate-300)]">
          We provide a wide range of creative and financial services — entrust your project to
          our best team of professionals.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <ServiceIndex />
      </section>

      <CtaBand />
    </>
  );
}
