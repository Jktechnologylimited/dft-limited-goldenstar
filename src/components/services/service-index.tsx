"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Photo } from "@/components/shared/photo";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceIndex() {
  const [activeSlug, setActiveSlug] = React.useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug)!;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      <div className="flex flex-col">
        {services.map((service) => {
          const isActive = service.slug === activeSlug;
          return (
            <button
              key={service.slug}
              onClick={() => setActiveSlug(service.slug)}
              onMouseEnter={() => setActiveSlug(service.slug)}
              className={cn(
                "group flex items-center gap-4 border-b border-white/10 py-5 text-left transition-colors first:pt-0",
                isActive ? "text-white" : "text-[var(--slate-300)] hover:text-white/80"
              )}
            >
              <service.icon
                className={cn(
                  "size-5 shrink-0 transition-colors",
                  isActive ? "text-[var(--gold-500)]" : "text-[var(--slate-300)] group-hover:text-[var(--gold-300)]"
                )}
              />
              <span className="font-display text-lg font-medium sm:text-xl">{service.name}</span>
              <ArrowRight
                className={cn(
                  "ml-auto size-4 shrink-0 transition-all",
                  isActive ? "translate-x-0 opacity-100 text-[var(--gold-500)]" : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                )}
              />
            </button>
          );
        })}
      </div>

      <div
        key={active.slug}
        className="animate-in fade-in-0 slide-in-from-bottom-2 rounded-2xl border border-white/10 bg-white/[0.03] p-7 duration-300 sm:p-9"
      >
        <Photo
          photo={active.photo}
          width={800}
          height={420}
          className="aspect-[16/9] w-full"
        />
        <active.icon className="mt-6 size-8 text-[var(--gold-500)]" />
        <h3 className="mt-5 font-serif text-2xl text-white">{active.name}</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--slate-300)]">{active.description}</p>

        <ul className="mt-6 flex flex-col gap-3">
          {active.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm text-white/85">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--gold-500)]" />
              {bullet}
            </li>
          ))}
        </ul>

        <Link
          href={`/services/${active.slug}`}
          className="mt-7 inline-flex items-center gap-1.5 font-medium text-[var(--gold-300)] transition-colors hover:text-[var(--gold-500)]"
        >
          Learn more about {active.shortName} <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
