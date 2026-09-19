import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroSignalCard } from "@/components/home/hero-signal-card";
import { Photo } from "@/components/shared/photo";
import { heroPillars } from "@/data/site";
import { photos } from "@/data/photos";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(242,194,48,0.16),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10 lg:px-8 lg:pb-28 lg:pt-24">
        <div>
          <p className="font-mono text-[13px] text-[var(--slate-300)]">
            Financial, trading &amp; technology advisory · Ibadan, Nigeria
          </p>
          <h1 className="mt-5 max-w-xl text-balance font-serif text-5xl leading-[1.08] text-white sm:text-6xl">
            Empowering your financial success
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[var(--slate-300)]">
            D.F.T Limited pairs financial expertise with AI-powered tooling — FX signals,
            personalized consulting, account management and the technology to run it all,
            built for people serious about growing their wealth.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get a free quote <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">Explore services</Link>
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {heroPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="border-white/10 pl-0 sm:border-l sm:pl-6 first:sm:border-l-0 first:sm:pl-0"
              >
                <dt className="font-display text-[15px] font-semibold text-white">{pillar.title}</dt>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-[var(--slate-300)]">{pillar.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-12 lg:mx-0 lg:ml-auto lg:pb-16">
          <Photo
            photo={photos.heroPortrait}
            width={480}
            height={560}
            priority
            className="aspect-[6/7] w-full rotate-2"
          />
          <div className="absolute -bottom-2 -left-6 w-[min(22rem,88%)] sm:-left-10">
            <HeroSignalCard />
          </div>
        </div>
      </div>
    </section>
  );
}
