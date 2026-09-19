import type { Metadata } from "next";

import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ChatLauncher } from "@/components/chat/chat-launcher";
import { TooltipProvider } from "@/components/ui/tooltip";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://dftlimited.example.com"),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-ink-950 font-sans text-[15px] antialiased">
        <TooltipProvider>
          <div className="relative flex min-h-screen flex-col overflow-x-clip">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <ChatLauncher />
        </TooltipProvider>
      </body>
    </html>
  );
}
