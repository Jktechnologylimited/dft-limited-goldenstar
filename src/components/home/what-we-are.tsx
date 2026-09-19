import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Photo } from "@/components/shared/photo";
import { photos } from "@/data/photos";

export function WhatWeAre() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_0.75fr_1fr] lg:items-center lg:gap-10">
        <Photo
          photo={photos.teamMember}
          width={480}
          height={600}
          className="aspect-[4/5] w-full max-w-xs lg:max-w-none"
        />
        <SectionHeading
          kicker="What we are"
          title="A dynamic team of financial and technology professionals"
        />
        <div>
          <p className="text-lg leading-relaxed text-white/85">
            We’re the perfect solution for people ready to unlock their potential — committed to
            enhancing your wealth through comprehensive financial education and technology,
            not empty promises.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-1.5 font-medium text-[var(--gold-300)] transition-colors hover:text-[var(--gold-500)]"
          >
            More about us <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
