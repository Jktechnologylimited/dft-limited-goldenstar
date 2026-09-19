import { testimonials } from "@/data/testimonials";
import { sleep } from "@/lib/delay";

export type Testimonial = { name: string; quote: string };

export async function getTestimonials(delayMs = 850): Promise<Testimonial[]> {
  await sleep(delayMs);
  return testimonials as unknown as Testimonial[];
}
