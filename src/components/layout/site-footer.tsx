"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/layout/logo";
import { FacebookIcon, InstagramIcon } from "@/components/layout/social-icons";
import { site } from "@/data/site";

export function SiteFooter() {
  const [email, setEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);

  function onSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-white/10 bg-[var(--ink-900)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-[var(--slate-300)]">
            {site.legalName} — empowering individuals to unlock their potential and build
            wealth through financial education and technology solutions.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="D.F.T Limited on Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-[var(--slate-300)] transition-colors hover:border-[var(--gold-500)]/60 hover:text-[var(--gold-300)]"
            >
              <FacebookIcon />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="D.F.T Limited on Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-[var(--slate-300)] transition-colors hover:border-[var(--gold-500)]/60 hover:text-[var(--gold-300)]"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--slate-300)]">
            <li><Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link href="/terms#privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-white">Support</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-[var(--slate-300)]">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-white">Stay in the loop</h3>
          <p className="mt-4 text-sm text-[var(--slate-300)]">
            Subscribe to get the latest articles and resources from D.F.T Limited.
          </p>
          <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
            <Input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <Button type="submit" size="icon" aria-label="Subscribe">
              <Send className="size-4" />
            </Button>
          </form>
          <p className="mt-2 h-4 text-xs text-[var(--gold-300)]" aria-live="polite">
            {subscribed ? "Thanks — you're on the list." : ""}
          </p>

          <div className="mt-2 flex flex-col gap-2 text-sm text-[var(--slate-300)]">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="size-4 text-[var(--gold-500)]" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-white">
              <Phone className="size-4 text-[var(--gold-500)]" /> {site.phone}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-[var(--gold-500)]" /> {site.address}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[var(--slate-300)]/80 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} D.F.T Limited. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Trading involves risk. Past performance is not indicative of future results.
            <br className="sm:hidden" /> Photography by{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/20 underline-offset-2 hover:text-white"
            >
              Unsplash
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
