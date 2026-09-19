import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The courses and testimonials sections below deliberately await a simulated
// fetch so their Suspense fallbacks stream in for real on every request,
// rather than being resolved once at build time and never shown again.
export const dynamic = "force-dynamic";

import { Hero } from "@/components/home/hero";
import { TickerStrip } from "@/components/home/ticker-strip";
import { WhatWeAre } from "@/components/home/what-we-are";
import { ServiceIndex } from "@/components/services/service-index";
import { MissionPillars } from "@/components/about/mission-pillars";
import { CoursesTeaser } from "@/components/courses/courses-teaser";
import { CoursesSkeleton } from "@/components/courses/courses-skeleton";
import { TestimonialsMarquee } from "@/components/testimonials/testimonials-marquee";
import { TestimonialsSkeleton } from "@/components/testimonials/testimonials-skeleton";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { SectionHeading } from "@/components/shared/section-heading";
import { CtaBand } from "@/components/shared/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <TickerStrip />
      <WhatWeAre />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          kicker="Our services"
          title="A wide range of financial and technology services"
          description="From daily market signals to the software that runs your business — one team, five disciplines."
        />
        <div className="mt-14">
          <ServiceIndex />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--ink-900)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading kicker="What we are" title="Guided by mission, vision and goal" />
          <div className="mt-12">
            <MissionPillars />
          </div>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-1.5 font-medium text-[var(--gold-300)] transition-colors hover:text-[var(--gold-500)]"
          >
            More about D.F.T Limited <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading
          kicker="Courses"
          title="Learn to trade, build and consult — at your own pace"
          description="Self-directed courses spanning trading psychology, market fundamentals and technology."
        />
        <div className="mt-12">
          <Suspense fallback={<CoursesSkeleton count={3} />}>
            <CoursesTeaser />
          </Suspense>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--ink-900)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading kicker="Clients testimonial" title="What clients say about working with us" />
        </div>
        <div className="mt-12">
          <Suspense fallback={<div className="mx-auto max-w-7xl px-6 lg:px-8"><TestimonialsSkeleton /></div>}>
            <TestimonialsMarquee />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading kicker="FAQ" title="Answers to common questions" align="center" />
        <div className="mt-12">
          <FaqAccordion limit={6} />
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--gold-300)] transition-colors hover:text-[var(--gold-500)]"
          >
            View all FAQs <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
