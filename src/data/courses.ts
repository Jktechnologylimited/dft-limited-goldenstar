export type Course = {
  slug: string;
  title: string;
  category: "Trading" | "Business & Tech";
  priceNgn: number;
  priceUsd: number;
  description: string;
  status: "Coming Soon";
};

export const courses: Course[] = [
  {
    slug: "psychology-of-trading",
    title: "Psychology of Trading",
    category: "Trading",
    priceNgn: 52500,
    priceUsd: 35,
    description:
      "Delves into the psychological factors that impact trading behavior, emphasizing emotional control and mental resilience in achieving trading success.",
    status: "Coming Soon",
  },
  {
    slug: "money-management",
    title: "Money Management",
    category: "Trading",
    priceNgn: 20000,
    priceUsd: 20,
    description:
      "Essential techniques for managing trading capital, including risk-management strategies and setting realistic financial goals.",
    status: "Coming Soon",
  },
  {
    slug: "introduction-to-trading",
    title: "Introduction to Trading and Understanding the Financial Market",
    category: "Trading",
    priceNgn: 30000,
    priceUsd: 20,
    description:
      "A comprehensive overview of trading fundamentals and the structure of financial markets, laying the groundwork for aspiring traders.",
    status: "Coming Soon",
  },
  {
    slug: "technical-analysis-made-easy",
    title: "Technical Analysis Made Easy",
    category: "Trading",
    priceNgn: 30000,
    priceUsd: 20,
    description:
      "Demystifies technical analysis with practical tools and methods for analyzing price movements and identifying trading opportunities.",
    status: "Coming Soon",
  },
  {
    slug: "understanding-the-forex-market",
    title: "Understanding the Forex Market",
    category: "Trading",
    priceNgn: 30000,
    priceUsd: 20,
    description:
      "Covers the intricacies of the foreign exchange market, including currency trading strategies, market analysis, and the factors that influence currency values.",
    status: "Coming Soon",
  },
  {
    slug: "understanding-the-synthetic-market",
    title: "Understanding the Synthetic Market",
    category: "Trading",
    priceNgn: 30000,
    priceUsd: 20,
    description:
      "Explores synthetic markets, focusing on their unique features and how to effectively trade synthetic indices in various market scenarios.",
    status: "Coming Soon",
  },
  {
    slug: "web-design-and-development",
    title: "Web Design and Development",
    category: "Business & Tech",
    priceNgn: 120000,
    priceUsd: 80,
    description:
      "Introduces the basics of web development, empowering participants to build and maintain their own websites and strengthen their online presence.",
    status: "Coming Soon",
  },
  {
    slug: "learn-to-use-ai-effectively",
    title: "Learn to Use AI Effectively",
    category: "Business & Tech",
    priceNgn: 30000,
    priceUsd: 20,
    description:
      "Focuses on the application of artificial intelligence in trading, teaching participants to use AI tools to improve trading strategies and outcomes.",
    status: "Coming Soon",
  },
  {
    slug: "financial-consulting-course",
    title: "Financial Consulting",
    category: "Business & Tech",
    priceNgn: 30000,
    priceUsd: 20,
    description:
      "Insights into the financial consulting profession — advising clients on investment strategies, financial planning, and portfolio management.",
    status: "Coming Soon",
  },
];

export function formatNgn(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
