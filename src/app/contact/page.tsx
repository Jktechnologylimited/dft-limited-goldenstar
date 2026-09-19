import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with D.F.T Limited — Ibadan, Nigeria.",
};

const contactPoints = [
  { icon: MapPin, label: "Address", value: site.address, href: undefined },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: site.whatsappHref },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
      <p className="font-mono text-[13px] text-[var(--slate-300)]">Contact us</p>
      <h1 className="mt-4 max-w-2xl text-balance font-serif text-4xl leading-tight text-white sm:text-5xl">
        Don&apos;t hesitate to reach out
      </h1>
      <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[var(--slate-300)]">
        We’re professionals ready to help with any kind of information you need — send a message
        or reach us directly below.
      </p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="flex flex-col gap-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactPoints.map((point) => {
              const inner = (
                <>
                  <point.icon className="size-5 text-[var(--gold-500)]" />
                  <div>
                    <p className="text-xs text-[var(--slate-300)]">{point.label}</p>
                    <p className="mt-0.5 text-sm font-medium text-white">{point.value}</p>
                  </div>
                </>
              );
              const className =
                "flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[var(--gold-500)]/30";

              return point.href ? (
                <a
                  key={point.label}
                  href={point.href}
                  target={point.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <div key={point.label} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={site.mapEmbedUrl}
              width="100%"
              height="280"
              style={{ border: 0, filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="D.F.T Limited location — Ibadan, Nigeria"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
          <h2 className="font-serif text-2xl text-white">Send a message</h2>
          <p className="mt-2 text-sm text-[var(--slate-300)]">
            Fill this out and we’ll prepare an email to our team — or use WhatsApp for a faster
            reply.
          </p>
          <div className="mt-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
