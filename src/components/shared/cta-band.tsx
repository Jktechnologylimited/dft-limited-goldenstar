import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function CtaBand() {
  return (
    <section className="border-t border-white/10 bg-[var(--ink-900)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 lg:flex-row lg:items-center lg:px-8 lg:py-20">
        <div className="max-w-xl">
          <h2 className="text-balance font-serif text-3xl leading-tight text-white sm:text-4xl">
            Entrust your project to our best team of professionals
          </h2>
          <p className="mt-3 text-[15px] text-[var(--slate-300)]">
            For immediate support, call {site.phone} — or send us a message and we&apos;ll get
            right back to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact us <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
