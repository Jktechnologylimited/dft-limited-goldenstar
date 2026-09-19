import type { LucideIcon } from "lucide-react";
import {
  LineChart,
  Handshake,
  BrainCircuit,
  Code2,
  ShieldCheck,
} from "lucide-react";

import type { Photo } from "@/data/photos";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  offerBody: string;
  bullets: string[];
  process: { title: string; body: string }[];
  photo: Photo;
};

export const services: Service[] = [
  {
    slug: "fx-signal-provision",
    name: "FX Signal Provision",
    shortName: "FX Signals",
    icon: LineChart,
    summary:
      "Gain access to our market analysis and trading signals to inform your trading decisions.",
    description:
      "Our analysts track the majors, gold and synthetic indices around the clock, distilling the noise into clear entries, exits and risk levels you can act on.",
    offerBody:
      "FX signals are market trade recommendations that include entry and exit points. While helpful, trading always involves risk — we're upfront about that from day one.",
    bullets: [
      "Daily analysis across major and minor currency pairs, gold and indices",
      "Clear entry, stop-loss and take-profit levels on every signal",
      "Transparent reporting, including honest breakdowns of losing trades",
      "Delivered where you already are — WhatsApp, Telegram or email",
    ],
    process: [
      { title: "Subscribe", body: "Tell us your preferred markets and risk appetite so signals match how you trade." },
      { title: "Receive", body: "Signals land with full context: reasoning, levels and timing, not just a ticker." },
      { title: "Review", body: "Weekly performance recaps keep the process transparent, wins and losses alike." },
    ],
    photo: {
      id: "1554196038-950a8ab51827",
      alt: "A client smiling while reading a signal on her phone",
    },
  },
  {
    slug: "financial-consulting",
    name: "Financial Consulting",
    shortName: "Consulting",
    icon: Handshake,
    summary: "Receive personalized financial advice tailored to your goals and aspirations.",
    description:
      "One-on-one sessions to help you set realistic financial goals and build a plan grounded in your actual circumstances, not a generic template.",
    offerBody:
      "Personalized financial advice tailored to your goals and aspirations — for individuals building wealth and businesses shaping their financial strategy.",
    bullets: [
      "Goal-setting sessions grounded in your real financial picture",
      "Investment strategy and risk-management guidance",
      "Portfolio and cash-flow planning for individuals and businesses",
      "Ongoing check-ins as your circumstances change",
    ],
    process: [
      { title: "Discovery", body: "A candid conversation about where you stand and where you want to be." },
      { title: "Strategy", body: "We map a plan suited to your goals, timeline and appetite for risk." },
      { title: "Support", body: "Continued guidance as markets and your priorities move." },
    ],
    photo: {
      id: "1758873269276-9518d0cb4a0b",
      alt: "A team smiling and collaborating around a table during a consulting session",
    },
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    shortName: "AI Integration",
    icon: BrainCircuit,
    summary: "Discover how to leverage artificial intelligence to enhance your business operations.",
    description:
      "We help businesses fold AI into the parts of their operations where it actually saves time — decision support, automation and customer-facing tools.",
    offerBody:
      "From workflow automation to AI-assisted decision-making, we help you identify where artificial intelligence creates real leverage in your business.",
    bullets: [
      "Process audits to find where automation pays off fastest",
      "AI-assisted decision-support tooling for operations and trading",
      "Custom assistants and chat experiences for customer-facing teams",
      "Practical training so your team can maintain what we build",
    ],
    process: [
      { title: "Audit", body: "We look at your workflows to find where AI creates the most leverage." },
      { title: "Build", body: "We design and implement the tools that fit, not off-the-shelf overkill." },
      { title: "Train", body: "Your team learns to run and extend what we've built." },
    ],
    photo: {
      id: "1752650735119-8929e5f7d1ec",
      alt: "A smiling woman working happily on her laptop",
    },
  },
  {
    slug: "web-app-development",
    name: "Web & App Development",
    shortName: "Web & App Dev",
    icon: Code2,
    summary:
      "Build your online presence with our website development services from simple to complex app.",
    description:
      "From a clean brochure site to a more complex web application, we build your online presence the right way the first time.",
    offerBody:
      "Basic to complex website and application development — build your online presence and enhance how customers reach you.",
    bullets: [
      "Brochure and business websites built for speed and clarity",
      "Custom web applications for more complex operational needs",
      "Ongoing maintenance and support after launch",
      "Built with modern, dependable technology from the ground up",
    ],
    process: [
      { title: "Plan", body: "We scope what the site or app actually needs to do for your business." },
      { title: "Build", body: "Design and development move together, so nothing gets lost in translation." },
      { title: "Launch", body: "We ship, then stay close for fixes and iteration." },
    ],
    photo: {
      id: "1758874573562-5bf0c1a7fc72",
      alt: "A smiling developer working happily on his laptop",
    },
  },
  {
    slug: "forex-account-management",
    name: "Forex Account Management",
    shortName: "Account Management",
    icon: ShieldCheck,
    summary: "Let our experienced team manage your Forex accounts for optimal performance.",
    description:
      "For clients who'd rather delegate execution, our team manages accounts with disciplined risk controls and regular reporting.",
    offerBody:
      "Managed Forex accounts for clients who want experienced hands on execution and risk management, with full transparency along the way.",
    bullets: [
      "Disciplined position sizing and risk management on every trade",
      "Regular, transparent performance reporting",
      "Managed by the same team behind our signals and market analysis",
      "Clear conversations about risk before any account is opened",
    ],
    process: [
      { title: "Assess", body: "We discuss your capital, goals and comfort with drawdown before anything else." },
      { title: "Manage", body: "Our team executes with disciplined, pre-agreed risk parameters." },
      { title: "Report", body: "You receive regular, honest reporting — including when trades don't work out." },
    ],
    photo: {
      id: "1752159684779-0639174cdfac",
      alt: "Happy business partners shaking hands after a deal",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
