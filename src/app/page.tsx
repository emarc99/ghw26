import type { ReactNode } from "react";
import { NewspaperNav } from "@/components/newspaper-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

/** Fixed edition date for the broadsheet masthead (stable for static build). */
const EDITION_DATE = "Wednesday, October 14, 2026";
const EDITION_ISO = "2026-10-14";

const skills = [
  "TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Problem solving",
  "Technical writing",
];

const workItems = [
  {
    kicker: "Featured",
    title: "This broadsheet portfolio",
    dek: "A single-page personal site built for MLH Global Hack Week Challenge 1 — newspaper layout, real sections, no fake résumé padding.",
    meta: "2026 · Next.js",
  },
  {
    kicker: "Open source",
    title: "Hacktoberfest & GHW contributions",
    dek: "Participating in Global Hack Week: Open Source — shipping small, reviewable projects and learning in public.",
    meta: "Ongoing · Community",
  },
  {
    kicker: "Edit me",
    title: "Your next project title",
    dek: "Replace this stub with a real project: what you built, who it helped, and a link. Marked as placeholder in the README.",
    meta: "Placeholder · Update soon",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>

      {/* Hero / front page — one composition */}
      <header className="relative flex min-h-[100svh] flex-col px-4 pb-10 pt-5 sm:px-8 sm:pt-6 lg:px-12">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">
          {/* Dateline strip */}
          <div className="animate-fade-up flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-ink/80 pb-2 font-mono-news text-[0.65rem] uppercase tracking-[0.16em] text-ink/70 sm:text-[0.7rem]">
            <span>Vol. I · No. 1 · Global Hack Week</span>
            <time dateTime={EDITION_ISO}>{EDITION_DATE}</time>
            <div className="flex flex-wrap items-center gap-3">
              <span className="hidden text-scarlet sm:inline">Special edition</span>
              <ThemeToggle />
            </div>
          </div>

          {/* Masthead — brand as hero */}
          <div className="animate-masthead flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-14">
            <p className="mb-3 font-mono-news text-[0.65rem] uppercase tracking-[0.35em] text-ink/60 sm:text-xs">
              The Daily Portfolio
            </p>
            <h1 className="font-display text-[clamp(2.75rem,12vw,7.5rem)] leading-[0.9] font-bold tracking-tight text-ink">
              Emmanuel
              <span className="block">Aroso</span>
            </h1>
            <div className="animate-rule hairline-thick mt-5 w-full max-w-xl" />
            <p className="mt-2 font-mono-news text-[0.65rem] uppercase tracking-[0.28em] text-ink/55">
              Builder · Learner · Open source
            </p>
          </div>

          {/* Headline + lede + CTA */}
          <div className="animate-fade-up-delay mx-auto max-w-2xl border-t border-ink pt-6 text-center">
            <h2 className="font-display text-2xl leading-snug font-bold tracking-tight text-ink sm:text-3xl md:text-4xl">
              Shipping small apps, learning in public, one column at a time.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
              A personal broadsheet for projects, skills, and how to reach me —
              printed in ink and paper, built with Next.js for MLH Global Hack
              Week.
            </p>
            <div className="animate-fade-up-delay-2 mt-7 flex flex-col items-center gap-5">
              <NewspaperNav />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 sm:px-8 lg:px-12">
        <div className="hairline-thick mb-10" />

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-8 border-b border-ink/40 pb-12"
        >
          <SectionKicker>Section A</SectionKicker>
          <h2
            id="about-heading"
            className="font-display mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            About the subject
          </h2>
          <div className="hairline mt-4 mb-6 max-w-xs" />
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <article className="md:col-span-7">
              <p className="drop-cap font-body text-lg leading-[1.65] text-ink/90">
                Emmanuel Aroso is a developer who likes clear interfaces, careful
                craft, and finishing things people can actually use. This page is
                his front page: a place to collect work, list skills, and make it
                easy to get in touch.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-ink/75">
                Bio details below are light placeholders so the layout stays
                honest — swap them for your own story, school, city, or focus
                areas whenever you are ready. See the README for what to edit.
              </p>
            </article>
            <aside className="border-t border-ink/30 pt-4 font-body text-sm leading-relaxed text-ink/70 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <p className="font-mono-news text-[0.65rem] uppercase tracking-[0.2em] text-scarlet">
                Dateline
              </p>
              <ul className="mt-3 space-y-3">
                <li>
                  <span className="font-semibold text-ink">Focus — </span>
                  Web apps, open source, and hands-on hackathon builds.
                </li>
                <li>
                  <span className="font-semibold text-ink">Currently — </span>
                  {/* PLACEHOLDER: update location / status */}
                  Building during MLH Global Hack Week: Open Source.
                </li>
                <li>
                  <span className="font-semibold text-ink">Available for — </span>
                  {/* PLACEHOLDER: update collaboration interests */}
                  Collaborations, mentorship chats, and interesting bugs.
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Work */}
        <section
          id="work"
          aria-labelledby="work-heading"
          className="scroll-mt-8 border-b border-ink/40 py-12"
        >
          <SectionKicker>Section B</SectionKicker>
          <h2
            id="work-heading"
            className="font-display mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Dispatches from the desk
          </h2>
          <p className="mt-2 max-w-xl font-body text-base text-ink/70">
            Selected work and stubs. Replace placeholders with real project
            names and links.
          </p>
          <div className="hairline mt-4 mb-8" />
          <div className="grid gap-0 md:grid-cols-3">
            {workItems.map((item, i) => (
              <article
                key={item.title}
                className={`border-ink/25 py-6 md:px-5 md:py-0 ${
                  i > 0 ? "border-t md:border-t-0 md:border-l" : ""
                }`}
              >
                <p className="font-mono-news text-[0.65rem] uppercase tracking-[0.2em] text-scarlet">
                  {item.kicker}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-ink/75">
                  {item.dek}
                </p>
                <p className="mt-4 font-mono-news text-[0.65rem] uppercase tracking-[0.14em] text-ink/50">
                  {item.meta}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="scroll-mt-8 border-b border-ink/40 py-12"
        >
          <SectionKicker>Section C</SectionKicker>
          <h2
            id="skills-heading"
            className="font-display mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            The toolbox
          </h2>
          <div className="hairline mt-4 mb-6 max-w-xs" />
          <ul className="columns-1 gap-x-12 sm:columns-2 md:columns-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="break-inside-avoid border-b border-ink/20 py-2.5 font-body text-base text-ink"
              >
                <span className="mr-2 font-mono-news text-xs text-scarlet">▸</span>
                {skill}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-body text-sm italic text-ink/55">
            {/* PLACEHOLDER note */}
            Add or remove skills in <code className="font-mono-news text-xs">src/app/page.tsx</code>.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-8 py-12"
        >
          <SectionKicker>Section D</SectionKicker>
          <h2
            id="contact-heading"
            className="font-display mt-1 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Letters to the editor
          </h2>
          <div className="hairline mt-4 mb-6 max-w-xs" />
          <div className="grid gap-8 md:grid-cols-2">
            <p className="font-body text-lg leading-relaxed text-ink/85">
              Want to collaborate, ask a question, or share a bug worth fixing?
              Reach out — the newsroom is open.
            </p>
            <div className="space-y-4 border-t border-ink/30 pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-8">
              <ContactLine
                label="Email"
                href="mailto:emmanueladedejiaroso@gmail.com"
                value="emmanueladedejiaroso@gmail.com"
              />
              <ContactLine
                label="GitHub"
                href="https://github.com/"
                value="github.com/… — update username"
                placeholder
              />
              <ContactLine
                label="LinkedIn"
                href="https://linkedin.com/"
                value="linkedin.com/in/… — update profile"
                placeholder
              />
              <Button
                render={<a href="mailto:emmanueladedejiaroso@gmail.com" />}
                className="mt-2 rounded-none border border-ink bg-ink px-5 font-mono-news text-xs uppercase tracking-[0.16em] text-paper hover:bg-transparent hover:text-ink"
              >
                Send a letter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink px-4 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center font-mono-news text-[0.65rem] uppercase tracking-[0.16em] text-ink/55 sm:flex-row sm:text-left">
          <p>© 2026 Emmanuel Aroso · All rights reserved</p>
          <p>Printed for MLH Global Hack Week · Challenge 1</p>
        </div>
      </footer>
    </div>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono-news text-[0.65rem] uppercase tracking-[0.28em] text-scarlet">
      {children}
    </p>
  );
}

function ContactLine({
  label,
  href,
  value,
  placeholder,
}: {
  label: string;
  href: string;
  value: string;
  placeholder?: boolean;
}) {
  return (
    <div>
      <p className="font-mono-news text-[0.65rem] uppercase tracking-[0.2em] text-ink/50">
        {label}
        {placeholder ? (
          <span className="ml-2 text-scarlet">placeholder</span>
        ) : null}
      </p>
      <a
        href={href}
        className="mt-1 inline-block font-body text-base text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {value}
      </a>
    </div>
  );
}
