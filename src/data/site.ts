export const site = {
  name: "D.F.T Limited",
  legalName: "Dannyxofficial Financial and Tech Limited",
  shortName: "DFT",
  tagline: "Empowering Your Financial Success",
  description:
    "We offer financial solutions, AI insights, and expert consulting to help businesses succeed.",
  phone: "09077648110",
  phoneHref: "tel:09077648110",
  whatsappHref: "https://wa.me/2349077648110",
  email: "info.dftlimited@gmail.com",
  address: "Ibadan, Oyo State, Nigeria",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31654.278886490152!2d3.9206600694020493!3d7.377992312614326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan%2C%20Oyo%2C%20Nigeria!5e0!3m2!1sen!2sde!4v1743917347919!5m2!1sen!2sde",
  social: {
    facebook: "https://www.facebook.com/share/15C8DJ27nn/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/d.f.t_limited?igsh=cWliazVrNGVkaHI1&utm_source=qr",
  },
  termsEffectiveDate: "April 4, 2025",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our company", href: "/about" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/terms#privacy" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const heroPillars = [
  {
    title: "Tailored Business Strategies",
    body: "We craft personalized strategies that help your business grow, optimize operations, and overcome challenges.",
  },
  {
    title: "AI-Powered Solutions",
    body: "Leverage the latest AI technology to enhance decision-making, streamline processes, and boost business efficiency.",
  },
  {
    title: "Expert Financial Consulting",
    body: "Receive expert advice on financial planning, investment strategies, and risk management to secure your financial future.",
  },
] as const;

export const tickerPairs = [
  { symbol: "EUR/USD", base: 1.0842, decimals: 4 },
  { symbol: "GBP/USD", base: 1.2671, decimals: 4 },
  { symbol: "USD/JPY", base: 149.83, decimals: 2 },
  { symbol: "XAU/USD", base: 2412.6, decimals: 2 },
  { symbol: "BTC/USD", base: 63180, decimals: 0 },
  { symbol: "USD/CAD", base: 1.3592, decimals: 4 },
  { symbol: "NGN/USD", base: 1543.2, decimals: 1 },
] as const;
