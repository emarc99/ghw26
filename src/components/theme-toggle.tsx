"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

const emptySubscribe = () => () => {};

/**
 * Day / Night edition switch for the broadsheet masthead.
 * Persists via next-themes → localStorage (`daily-portfolio-theme`).
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";
  const label = !mounted ? "Edition" : isDark ? "Night edition" : "Day edition";
  const nextLabel = isDark ? "Switch to day edition" : "Switch to night edition";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      aria-label={nextLabel}
      title={nextLabel}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-none border-ink/70 bg-transparent px-2.5 font-mono-news text-[0.65rem] uppercase tracking-[0.16em] text-ink/80 hover:bg-ink hover:text-paper disabled:opacity-60 sm:text-[0.7rem]"
    >
      {label}
      <span aria-hidden className="ml-1.5 text-scarlet">
        {mounted ? (isDark ? "●" : "○") : "·"}
      </span>
    </Button>
  );
}
