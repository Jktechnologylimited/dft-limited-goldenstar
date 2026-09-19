import Link from "next/link";
import { Mail, MessageCircle, Phone, ArrowRight } from "lucide-react";

import { services } from "@/data/services";
import { courses, formatNgn, formatUsd } from "@/data/courses";
import { site } from "@/data/site";
import type { RichBlock } from "@/components/chat/chat-engine";
import { cn } from "@/lib/utils";

export function ChatRichBlock({ block }: { block: RichBlock }) {
  switch (block.kind) {
    case "services":
      return <ServicesBlock />;
    case "service-detail":
      return <ServiceDetailBlock slug={block.slug} />;
    case "courses":
      return <CoursesBlock category={block.category} />;
    case "contact":
      return <ContactBlock />;
    case "quote-cta":
      return <QuoteCtaBlock />;
    default:
      return null;
  }
}

function BlockShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-[var(--ink-950)]/60">
      {children}
    </div>
  );
}

function ServicesBlock() {
  return (
    <BlockShell>
      <ul className="divide-y divide-white/[0.06]">
        {services.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/services/${s.slug}`}
              className="flex items-center gap-3 px-3.5 py-3 text-sm transition-colors hover:bg-white/[0.04]"
            >
              <s.icon className="size-4 shrink-0 text-[var(--gold-500)]" />
              <span className="flex-1 text-[13px] leading-snug text-white/90">{s.name}</span>
              <ArrowRight className="size-3.5 shrink-0 text-[var(--slate-300)]" />
            </Link>
          </li>
        ))}
      </ul>
    </BlockShell>
  );
}

function ServiceDetailBlock({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return (
    <BlockShell>
      <div className="p-3.5">
        <div className="flex items-center gap-2 text-[13px] font-medium text-white">
          <service.icon className="size-4 text-[var(--gold-500)]" />
          {service.name}
        </div>
        <ul className="mt-2.5 flex flex-col gap-1.5">
          {service.bullets.slice(0, 3).map((b) => (
            <li key={b} className="flex gap-2 text-[12.5px] leading-snug text-[var(--slate-300)]">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[var(--gold-500)]" />
              {b}
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${service.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-[12.5px] font-medium text-[var(--gold-300)] hover:text-[var(--gold-500)]"
        >
          Full details <ArrowRight className="size-3" />
        </Link>
      </div>
    </BlockShell>
  );
}

function CoursesBlock({ category }: { category?: "Trading" | "Business & Tech" }) {
  const list = (category ? courses.filter((c) => c.category === category) : courses).slice(0, 6);
  return (
    <BlockShell>
      <ul className="divide-y divide-white/[0.06]">
        {list.map((c) => (
          <li key={c.slug} className="flex items-center gap-3 px-3.5 py-2.5">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-medium text-white/90">{c.title}</p>
              <p className="font-mono text-[11px] text-[var(--slate-300)]">
                {formatNgn(c.priceNgn)} · {formatUsd(c.priceUsd)}
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-[var(--gold-500)]/30 bg-[var(--gold-500)]/10 px-2 py-0.5 text-[10px] font-medium text-[var(--gold-300)]">
              Soon
            </span>
          </li>
        ))}
      </ul>
      <Link
        href="/courses"
        className="flex items-center justify-center gap-1 border-t border-white/[0.06] py-2.5 text-[12.5px] font-medium text-[var(--gold-300)] hover:text-[var(--gold-500)]"
      >
        View all courses <ArrowRight className="size-3" />
      </Link>
    </BlockShell>
  );
}

function ContactBlock() {
  const items = [
    { href: site.whatsappHref, label: "WhatsApp", icon: MessageCircle, external: true },
    { href: site.phoneHref, label: site.phone, icon: Phone, external: false },
    { href: `mailto:${site.email}`, label: "Email us", icon: Mail, external: false },
  ];
  return (
    <BlockShell>
      <div className="flex flex-col divide-y divide-white/[0.06]">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className={cn(
              "flex items-center gap-2.5 px-3.5 py-2.5 text-[12.5px] font-medium text-white/90 transition-colors hover:bg-white/[0.04]"
            )}
          >
            <item.icon className="size-4 text-[var(--gold-500)]" />
            {item.label}
          </a>
        ))}
      </div>
    </BlockShell>
  );
}

function QuoteCtaBlock() {
  return (
    <BlockShell>
      <Link
        href="/contact"
        className="flex items-center justify-between px-3.5 py-3 text-[12.5px] font-medium text-white/90 hover:bg-white/[0.04]"
      >
        Get a personalized quote
        <ArrowRight className="size-3.5 text-[var(--gold-500)]" />
      </Link>
    </BlockShell>
  );
}
