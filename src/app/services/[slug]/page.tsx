import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { getServiceBySlug, services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/shared/cta-band";
import { Photo } from "@/components/shared/photo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const other = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--slate-300)] hover:text-white"
        >
          <ArrowLeft className="size-3.5" /> All services
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <service.icon className="size-8 text-[var(--gold-500)]" />
          <h1 className="font-serif text-4xl text-white sm:text-5xl">{service.name}</h1>
        </div>
        <p className="mt-6 text-[17px] leading-relaxed text-[var(--slate-300)]">
          {service.description}
        </p>

        <Photo
          photo={service.photo}
          width={1000}
          height={520}
          priority
          className="mt-8 aspect-[16/9] w-full"
        />

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
          <h2 className="font-display text-[15px] font-semibold text-white">What’s included</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-[var(--slate-300)]">{service.offerBody}</p>
          <ul className="mt-5 flex flex-col gap-3">
            {service.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-white/85">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--gold-500)]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="font-display text-[15px] font-semibold text-white">How it works</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-3">
            {service.process.map((step, i) => (
              <div key={step.title} className="border-t border-[var(--gold-500)]/40 pt-4">
                <p className="font-mono text-xs text-[var(--gold-300)]">0{i + 1}</p>
                <h3 className="mt-1.5 text-[15px] font-medium text-white">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--slate-300)]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              Get a quote for {service.shortName} <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/services">Compare other services</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--ink-900)]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="font-serif text-2xl text-white">Other services</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {other.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-[var(--gold-500)]/30"
              >
                <s.icon className="size-6 text-[var(--gold-500)]" />
                <h3 className="mt-4 font-display text-[15px] font-semibold text-white">{s.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--slate-300)]">{s.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-[12.5px] font-medium text-[var(--gold-300)] group-hover:text-[var(--gold-500)]">
                  Learn more <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
