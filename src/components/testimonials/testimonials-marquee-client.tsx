"use client";

import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import type { Testimonial } from "@/data/get-testimonials";

function Row({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max gap-5 hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialsMarqueeClient({ testimonials }: { testimonials: Testimonial[] }) {
  const mid = Math.ceil(testimonials.length / 2);
  const first = testimonials.slice(0, mid);
  const second = testimonials.slice(mid);

  return (
    <div className="flex flex-col gap-5">
      <Row items={first} />
      <Row items={second} reverse />
    </div>
  );
}
