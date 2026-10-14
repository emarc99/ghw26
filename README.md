# Emmanuel Aroso — The Daily Portfolio

Newspaper-styled personal portfolio for **Emmanuel Aroso**, built for [MLH Global Hack Week](https://www.mlh.com/events/global-hack-week-open-source-90/challenges) Challenge 1 (mini app with Cursor).

Stack: **Next.js**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4317](http://127.0.0.1:4317).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve production build (default Next port unless you pass flags)
npm run lint    # ESLint
```

## Edit your copy (placeholders)

Several lines are marked as placeholders so the page stays honest until you fill in real details. Update them in `src/app/page.tsx`:

| What | Where |
|------|--------|
| About / focus / availability | `#about` section copy and “Dateline” list |
| Work items | `workItems` array (especially the “Edit me” stub) |
| Skills list | `skills` array |
| GitHub / LinkedIn URLs | `#contact` `ContactLine` entries |

Email currently uses `emmanueladedejiaroso@gmail.com` (from the repo author). Change the `mailto:` links if you prefer another address.

## Design notes

Broadsheet layout on purpose: masthead with the name as the hero brand, hairline rules, date line, multi-column sections (About / Work / Skills / Contact), newsprint paper texture, Libre Baskerville + Newsreader + IBM Plex Mono.
