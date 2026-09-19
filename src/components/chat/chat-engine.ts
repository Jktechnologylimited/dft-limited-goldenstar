import { services } from "@/data/services";
import { courses, formatNgn, formatUsd } from "@/data/courses";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";

export type RichBlock =
  | { kind: "services" }
  | { kind: "service-detail"; slug: string }
  | { kind: "courses"; category?: "Trading" | "Business & Tech" }
  | { kind: "contact" }
  | { kind: "quote-cta" };

export type EngineReply = {
  text: string;
  rich?: RichBlock;
  suggestions?: string[];
};

export type ChatMemory = {
  userName?: string;
  lastTopic?: "services" | "courses" | "fx" | "consulting" | "ai" | "webdev" | "accounts" | "general";
  turns: number;
};

export function initialMemory(): ChatMemory {
  return { turns: 0 };
}

const DEFAULT_SUGGESTIONS = [
  "What services do you offer?",
  "Show me your courses",
  "How do FX signals work?",
  "Talk to a human",
];

function pick<T>(items: T[], seed: number): T {
  return items[seed % items.length];
}

function normalize(input: string) {
  return input.trim().toLowerCase();
}

function findService(text: string) {
  return services.find((s) =>
    [s.name, s.shortName, ...s.slug.split("-")].some((token) =>
      text.includes(token.toLowerCase())
    )
  );
}

function findCourse(text: string) {
  return courses.find((c) => text.includes(c.title.toLowerCase().split(" and ")[0].slice(0, 12)));
}

function findFaq(text: string) {
  const words = text.split(/\W+/).filter((w) => w.length > 3);
  let best: { score: number; item: (typeof faqs)[number] } | null = null;
  for (const item of faqs) {
    const haystack = (item.question + " " + item.answer).toLowerCase();
    const score = words.reduce((acc, w) => (haystack.includes(w) ? acc + 1 : acc), 0);
    if (score > 0 && (!best || score > best.score)) best = { score, item };
  }
  return best && best.score >= 2 ? best.item : null;
}

type Rule = {
  id: ChatMemory["lastTopic"] | "greeting" | "identity" | "thanks" | "bye" | "risk" | "pricing" | "refund" | "human" | "name" | "fallback" | "faq";
  test: (t: string) => boolean;
  reply: (t: string, memory: ChatMemory, seed: number) => EngineReply;
};

const nameCapture = /\b(?:my name is|i am called|call me)\s+([a-z][a-z'-]{1,20})\b/i;

const rules: Rule[] = [
  {
    id: "name",
    test: (t) => nameCapture.test(t),
    reply: (t) => {
      const match = t.match(nameCapture);
      const name = match ? match[1][0].toUpperCase() + match[1].slice(1) : undefined;
      return {
        text: name
          ? `Good to meet you, ${name}. I'm here to help with anything about D.F.T Limited — our FX signals, courses, consulting or getting your account set up. What would you like to know?`
          : "Good to meet you. What would you like to know about D.F.T Limited?",
        suggestions: DEFAULT_SUGGESTIONS,
      };
    },
  },
  {
    id: "greeting",
    test: (t) => /\b(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(t) && t.length < 40,
    reply: (_t, memory, seed) => ({
      text: pick(
        [
          `Hi${memory.userName ? " " + memory.userName : ""} — welcome to D.F.T Limited. I can walk you through our FX signals, consulting, AI integration, web development or trading courses. What's on your mind?`,
          "Hello! Good to have you here. Ask me about our services, our courses, or how to get started with FX signals.",
          "Hey there — I'm the D.F.T assistant. Happy to talk services, pricing, or get you connected with our team. Where should we start?",
        ],
        seed
      ),
      suggestions: DEFAULT_SUGGESTIONS,
    }),
  },
  {
    id: "identity",
    test: (t) =>
      /\b(are you (a )?(real )?(human|person|ai|bot|robot|chatgpt|gpt)|who (are|r) you|what are you)\b/.test(t),
    reply: () => ({
      text: "I'm the D.F.T Limited assistant — built specifically to answer questions about our services, courses and signals, not a general-purpose AI model. I don't have a pulse, but I do have the full run of our services, pricing and FAQs. If I can't help with something, I'll route you straight to our team.",
      suggestions: ["What can you help with?", "Talk to a human", ...DEFAULT_SUGGESTIONS.slice(0, 2)],
    }),
  },
  {
    id: "human",
    test: (t) =>
      /\b(human|real person|agent|talk to (someone|somebody)|speak to|representative|contact (you|dft|support))\b/.test(t),
    reply: () => ({
      text: "Of course — here's the fastest way to reach the D.F.T Limited team directly. WhatsApp usually gets the quickest response.",
      rich: { kind: "contact" },
    }),
  },
  {
    id: "refund",
    test: (t) => /\b(refund|money back|cancel (my )?(order|payment|course))\b/.test(t),
    reply: () => ({
      text: "All payments for our services and courses are non-refundable — that's stated upfront in our policy, so there are no surprises later. If something's gone wrong on our end, reach out and our team will make it right.",
      suggestions: ["What's your risk policy?", "Talk to a human"],
    }),
  },
  {
    id: "risk",
    test: (t) =>
      /\b(risk|guarantee|safe|lose money|losses|profit|is trading safe|scam)\b/.test(t),
    reply: () => ({
      text: "Straight answer: trading carries real risk, and we don't promise guaranteed profits — anyone who does should raise a red flag. What we offer is disciplined analysis, transparent reporting (wins and losses alike), and sound risk-management practices. Only ever trade with money you can afford to lose.",
      suggestions: ["Tell me about FX signals", "Tell me about account management"],
    }),
  },
  {
    id: "pricing",
    test: (t) => /\b(price|pricing|cost|how much|fees?)\b/.test(t),
    reply: (t, memory) => {
      const svc = findService(t);
      if (svc) {
        return {
          text: `${svc.name} is quoted per client based on scope — the fastest way to get an exact number is a quick chat with our team. Here's what's included:`,
          rich: { kind: "service-detail", slug: svc.slug },
        };
      }
      if (memory.lastTopic === "courses" || /course/.test(t)) {
        return {
          text: `Course fees currently range from ${formatNgn(20000)} (${formatUsd(20)}) up to ${formatNgn(120000)} (${formatUsd(80)}) for our Web Design and Development track. Here's the full catalog:`,
          rich: { kind: "courses" },
        };
      }
      return {
        text: "It depends what you're after — courses range from ₦20,000 to ₦120,000, while consulting, signals, AI integration and account management are scoped to your needs. Want the course list or a quote for a service?",
        rich: { kind: "courses" },
        suggestions: ["Show me services instead", "Get a quote"],
      };
    },
  },
  {
    id: "fx",
    test: (t) => /\b(fx|forex signal|trading signal|signals?)\b/.test(t) && !/account/.test(t),
    reply: () => ({
      text: "FX Signal Provision gives you our market analysis with clear entry, stop-loss and take-profit levels — delivered on WhatsApp, Telegram or email. Here's the detail:",
      rich: { kind: "service-detail", slug: "fx-signal-provision" },
    }),
  },
  {
    id: "accounts",
    test: (t) => /\b(account management|manage my account|managed account)\b/.test(t),
    reply: () => ({
      text: "Forex Account Management is for clients who'd rather delegate execution to an experienced team, with disciplined risk controls and regular reporting. Here's how it works:",
      rich: { kind: "service-detail", slug: "forex-account-management" },
    }),
  },
  {
    id: "consulting",
    test: (t) => /\b(consult|financial advice|financial planning)\b/.test(t),
    reply: () => ({
      text: "Financial Consulting is one-on-one, built around your actual goals rather than a template. Details below:",
      rich: { kind: "service-detail", slug: "financial-consulting" },
    }),
  },
  {
    id: "ai",
    test: (t) => /\b(ai integration|artificial intelligence|automation|chatbot)\b/.test(t),
    reply: () => ({
      text: "AI Integration is about finding where automation actually saves your business time — here's what that looks like:",
      rich: { kind: "service-detail", slug: "ai-integration" },
    }),
  },
  {
    id: "webdev",
    test: (t) => /\b(website|web ?app|web development|build (me )?a site)\b/.test(t),
    reply: () => ({
      text: "We build everything from a clean brochure site to a more complex web application. Here's the rundown:",
      rich: { kind: "service-detail", slug: "web-app-development" },
    }),
  },
  {
    id: "services",
    test: (t) => /\bservices?\b/.test(t) || /\bwhat do you (do|offer)\b/.test(t) || /\bhelp with\b/.test(t) || /\bofferings?\b/.test(t),
    reply: () => ({
      text: "Here's what D.F.T Limited handles end to end:",
      rich: { kind: "services" },
      suggestions: ["Tell me about FX signals", "Tell me about AI integration"],
    }),
  },
  {
    id: "courses",
    test: (t) => /\b(course|class|learn|training|tutorial|curriculum)\b/.test(t),
    reply: (t) => {
      if (/(business|tech|web|ai)\b/.test(t)) {
        return {
          text: "Here are our Business & Tech courses:",
          rich: { kind: "courses", category: "Business & Tech" },
        };
      }
      return {
        text: "Here's the full course catalog — trading fundamentals through to web development:",
        rich: { kind: "courses" },
      };
    },
  },
  {
    id: "faq",
    test: (t) => !!findFaq(t),
    reply: (t) => {
      const item = findFaq(t)!;
      return { text: item.answer, suggestions: ["Show me services", "Show me courses"] };
    },
  },
  {
    id: "general",
    test: (t) => /\b(about|company|mission|vision|who is dft|based)\b/.test(t),
    reply: () => ({
      text: `${site.legalName} is a team of financial and technology professionals based in ${site.address}, focused on trading education, AI integration and financial consulting — helping people unlock their potential and build wealth.`,
      suggestions: ["What services do you offer?", "Show me your courses"],
    }),
  },
  {
    id: "thanks",
    test: (t) => /\b(thanks|thank you|appreciate|cheers)\b/.test(t),
    reply: (_t, memory, seed) => ({
      text: pick(
        [
          `Anytime${memory.userName ? ", " + memory.userName : ""}. Anything else I can help with?`,
          "Happy to help. Let me know if there's anything else on your mind.",
        ],
        seed
      ),
    }),
  },
  {
    id: "bye",
    test: (t) => /\b(bye|goodbye|see you|that'?s all|later)\b/.test(t),
    reply: () => ({
      text: `That's everything for now — reach us anytime on ${site.phone} or WhatsApp. Good luck out there.`,
      rich: { kind: "contact" },
    }),
  },
];

export function getReply(rawInput: string, memory: ChatMemory): { reply: EngineReply; memory: ChatMemory } {
  const text = normalize(rawInput);
  const seed = memory.turns;
  const nextMemory: ChatMemory = { ...memory, turns: memory.turns + 1 };

  const nameMatch = rawInput.match(nameCapture);
  if (nameMatch) {
    nextMemory.userName = nameMatch[1][0].toUpperCase() + nameMatch[1].slice(1);
  }

  for (const rule of rules) {
    if (rule.test(text)) {
      const reply = rule.reply(text, memory, seed);
      if (["fx"].includes(rule.id as string)) nextMemory.lastTopic = "fx";
      if (["consulting"].includes(rule.id as string)) nextMemory.lastTopic = "consulting";
      if (["ai"].includes(rule.id as string)) nextMemory.lastTopic = "ai";
      if (["webdev"].includes(rule.id as string)) nextMemory.lastTopic = "webdev";
      if (["accounts"].includes(rule.id as string)) nextMemory.lastTopic = "accounts";
      if (["services"].includes(rule.id as string)) nextMemory.lastTopic = "services";
      if (["courses"].includes(rule.id as string)) nextMemory.lastTopic = "courses";
      return { reply, memory: nextMemory };
    }
  }

  const course = findCourse(text);
  if (course) {
    return {
      reply: {
        text: `${course.title} is ${formatNgn(course.priceNgn)} (${formatUsd(course.priceUsd)}). ${course.description} It's currently marked coming soon — want me to flag your interest to the team?`,
        suggestions: ["Notify me when it's open", "Show me other courses"],
      },
      memory: { ...nextMemory, lastTopic: "courses" },
    };
  }

  return {
    reply: {
      text: "I don't have that on file yet, but our team will — the quickest way to get a real answer is WhatsApp or a quick call.",
      rich: { kind: "contact" },
      suggestions: DEFAULT_SUGGESTIONS,
    },
    memory: nextMemory,
  };
}

export const STARTER_SUGGESTIONS = DEFAULT_SUGGESTIONS;
