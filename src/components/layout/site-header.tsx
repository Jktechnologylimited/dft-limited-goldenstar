"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div className="hidden border-b border-white/[0.06] bg-[var(--ink-950)] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px] text-[var(--slate-300)] lg:px-8">
          <div className="flex items-center gap-6">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-[var(--gold-300)]">
              <Phone className="size-3.5" />
              Call Us: {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-[var(--gold-300)]">
              <Mail className="size-3.5" />
              {site.email}
            </a>
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--slate-300)]/70">
            Ibadan, Nigeria · Financial &amp; Tech Advisory
          </p>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-colors duration-300",
          scrolled
            ? "border-white/10 bg-[var(--ink-950)]/90 backdrop-blur-lg"
            : "border-transparent bg-[var(--ink-950)]/40 backdrop-blur-sm"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" aria-label="D.F.T Limited home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[var(--slate-300)] transition-colors hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-500)]/40",
                        pathname === link.href && "text-white"
                      )}
                    >
                      {link.label}
                      <ChevronDown className="size-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.href} asChild>
                        <Link href={child.href}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-[var(--slate-300)] transition-colors hover:text-white",
                    pathname === link.href && "text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs">
              <SheetHeader className="border-b border-white/10">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-1 flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <React.Fragment key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-3 text-[15px] font-medium text-white/90 hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                    {"children" in link && link.children && (
                      <div className="ml-3 flex flex-col border-l border-white/10 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm text-[var(--slate-300)] hover:bg-white/5 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="border-t border-white/10 p-6">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
