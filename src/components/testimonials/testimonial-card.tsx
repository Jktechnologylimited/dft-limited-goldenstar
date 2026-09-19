import { Quote } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import type { Testimonial } from "@/data/get-testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[22rem] shrink-0 flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Quote className="size-5 text-[var(--gold-500)]/70" />
      <p className="flex-1 text-[13.5px] leading-relaxed text-white/80">{testimonial.quote}</p>
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <Avatar>
          <AvatarFallback>{initials(testimonial.name)}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium text-white">{testimonial.name}</p>
      </div>
    </div>
  );
}
