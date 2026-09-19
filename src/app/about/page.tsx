import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { MissionPillars } from "@/components/about/mission-pillars";
import { ValuesGrid } from "@/components/about/values-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { Photo } from "@/components/shared/photo";
import { Button } from "@/components/ui/button";
import { offerings } from "@/data/values";
import { photos } from "@/data/photos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "D.F.T Limited is a dynamic team of financial and technology professionals committed to empowering individuals to unlock their potential and enhance their wealth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <p className="font-mono text-[13px] text-[var(--slate-300)]">About us</p>
        <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight text-white sm:text-5xl">
          We are a dynamic team of innovative and educational professionals
        </h1>
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--slate-300)]">
          At D.F.T Limited, we’re committed to empowering individuals to unlock their potential
          and enhance their wealth through comprehensive financial education and technology
          solutions.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/contact">Contact us</Link>
        </Button>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <Photo
          photo={photos.aboutBanner}
          width={1400}
          height={640}
          priority
          className="aspect-[21/9] w-full"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <MissionPillars />
      </section>

      <section className="border-t border-white/10 bg-[var(--ink-900)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            kicker="Our core values"
            title="Principles that shape every client experience"
            description="We're guided by principles that define our identity, influence our decisions, and shape the experiences we create for our clients."
          />
          <div className="mt-12">
            <ValuesGrid />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeading kicker="What we offer" title="A comprehensive range of services" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {offerings.map((offer) => (
            <div key={offer.title} className="bg-[var(--ink-950)] p-6">
              <h3 className="font-display text-[15px] font-semibold text-white">{offer.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--slate-300)]">{offer.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[var(--ink-900)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-3 lg:px-8 lg:py-28">
          <div>
            <Photo
              photo={photos.aboutCommitment}
              width={440}
              height={320}
              className="aspect-[4/3] w-full"
            />
            <h3 className="mt-5 font-serif text-xl text-white">Our commitment to you</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--slate-300)]">
              Education is a lifelong journey. Our team stays close to the market so you get the
              most relevant, up-to-date guidance — with a focus on practical skills over
              theory.
            </p>
          </div>
          <div>
            <Photo
              photo={photos.aboutCommunity}
              width={440}
              height={320}
              className="aspect-[4/3] w-full"
            />
            <h3 className="mt-5 font-serif text-xl text-white">Join our community</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--slate-300)]">
              Choosing D.F.T Limited means joining a vibrant community of learners and
              achievers — one that encourages collaboration and shared growth.
            </p>
          </div>
          <div>
            <Photo
              photo={photos.aboutJourney}
              width={440}
              height={320}
              className="aspect-[4/3] w-full"
            />
            <h3 className="mt-5 font-serif text-xl text-white">Start your journey today</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--slate-300)]">
              Ready to unlock your potential? Explore our courses, sign up for personalized
              tutoring, or reach out for financial consulting.
            </p>
            <Link
              href="/courses"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--gold-300)] hover:text-[var(--gold-500)]"
            >
              Explore courses <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
