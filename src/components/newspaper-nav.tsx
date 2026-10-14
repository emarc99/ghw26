"use client";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export function NewspaperNav() {
  return (
    <nav
      aria-label="Sections"
      className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono-news text-[0.7rem] uppercase tracking-[0.18em] text-ink/80 sm:gap-x-6 sm:text-xs"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="border-b border-transparent pb-0.5 transition-colors hover:border-ink hover:text-ink"
        >
          {link.label}
        </a>
      ))}
      <Button
        render={<a href="#contact" />}
        variant="outline"
        size="sm"
        className="ml-1 rounded-none border-ink bg-transparent font-mono-news text-[0.7rem] uppercase tracking-[0.14em] text-ink hover:bg-ink hover:text-paper"
      >
        Get in touch
      </Button>
    </nav>
  );
}
