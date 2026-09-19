import { Suspense } from "react";
import type { Metadata } from "next";

import { CoursesCatalog } from "@/components/courses/courses-catalog";
import { CoursesSkeleton } from "@/components/courses/courses-skeleton";
import { CtaBand } from "@/components/shared/cta-band";
import { Photo } from "@/components/shared/photo";
import { photos } from "@/data/photos";

// CoursesCatalog awaits a simulated fetch so its Suspense fallback streams
// in for real on every request, instead of being resolved once at build
// time and never shown again.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Trading psychology, money management, technical analysis, the Forex and synthetic markets, AI, and web development — courses from D.F.T Limited.",
};

export default function CoursesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pt-24">
        <p className="font-mono text-[13px] text-[var(--slate-300)]">Our courses</p>
        <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight text-white sm:text-5xl">
          Courses that we offer
        </h1>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--slate-300)]">
          Schedule a session with one of the best — courses span trading fundamentals through to
          business and technology.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <Photo
          photo={photos.coursesBanner}
          width={1400}
          height={560}
          priority
          className="aspect-[21/8] w-full"
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28">
        <Suspense fallback={<CoursesSkeleton count={9} />}>
          <CoursesCatalog />
        </Suspense>
      </section>

      <CtaBand />
    </>
  );
}
