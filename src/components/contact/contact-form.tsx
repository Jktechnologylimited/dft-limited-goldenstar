"use client";

import * as React from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "" });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    const subject = encodeURIComponent(`New enquiry from ${form.name} — D.F.T Limited website`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\n\n${form.message}`
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    }, 500);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--gold-500)]/30 bg-[var(--gold-500)]/[0.06] p-7">
        <CheckCircle2 className="size-6 text-[var(--gold-500)]" />
        <h3 className="font-serif text-xl text-white">Your email client is opening</h3>
        <p className="text-sm leading-relaxed text-[var(--slate-300)]">
          We’ve prepared your message for {site.email}. If nothing opened automatically, email us
          directly or reach out on WhatsApp — either way, we’ll reply as soon as we can.
        </p>
        <Button variant="subtle" size="sm" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+234…"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what you need help with…"
        />
      </div>
      <Button type="submit" size="lg" disabled={status === "sending"} className="self-start">
        {status === "sending" ? "Preparing…" : "Send message"}
        <Send className="size-4" />
      </Button>
    </form>
  );
}
