import { getTestimonials } from "@/data/get-testimonials";
import { TestimonialsMarqueeClient } from "@/components/testimonials/testimonials-marquee-client";

export async function TestimonialsMarquee() {
  const testimonials = await getTestimonials(850);
  return <TestimonialsMarqueeClient testimonials={testimonials} />;
}
