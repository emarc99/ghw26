# Challenge 2 — Benchmark Cursor’s Models

[Challenge page](https://www.mlh.com/events/global-hack-week-open-source-90/challenges/01a11d25-134c-17e5-e22c-8af278534580)

For: Emmanuel Aroso · MLH Global Hack Week: Hacktoberfest

## Identical prompt (all three runs)

```text
Write a TypeScript function that reverses a string without using Array.reverse() or String.prototype.split(). Include: (1) the complete function, (2) one sentence explaining how it works, (3) a tiny usage example with input "Cursor" and the expected output.
```

## Models tested

| # | Model (Cursor picker name) | Screenshot |
|---|----------------------------|------------|
| 1 | **Composer 2.5** | [challenge-2-model-1.webp](./media/challenge-2-model-1.webp) |
| 2 | **Grok 4.7** | [challenge-2-model-2.webp](./media/challenge-2-model-2.webp) |
| 3 | **Claude Sonnet 5.5** | [challenge-2-model-3.webp](./media/challenge-2-model-3.webp) |

All three produced a correct reverse-from-end loop and the expected `"rosruC"` example.

---

## Pros / cons

### Composer 2.5
- **Pros:** Clear, complete answer; used `charAt(i)` (reads well for beginners); included a ready-to-run `console.log` example; stayed within the asked shape.
- **Cons:** Slightly more verbose API choice than bracket indexing; no extra edge-case notes (Unicode / emoji).

### Grok 4.7
- **Pros:** Most compact of the three; correct idiomatic loop with `input[i]`; met every requirement with almost no fluff.
- **Cons:** Example was a bare expression (no `console.log`); least pedagogical framing — fine for speed, thinner if you want teaching detail.

### Claude Sonnet 5.5
- **Pros:** Best structure (labeled “How it works” / “Usage”); correct code + runnable example; **only model** to call out UTF-16 / emoji pitfalls and suggest a safer iteration pattern.
- **Cons:** Went beyond the one-sentence ask (extra Unicode note) — helpful, but slightly overshot the “keep it brief” intent of the prompt.

**Quick takeaway:** For a short coding drill, **Grok 4.7** was snappiest, **Composer 2.5** was the cleanest “copy-paste teaching” answer, and **Claude Sonnet 5.5** added the most engineering depth.

---

## Paste-ready MLH submission text

Copy everything below into the MLH form (description field). Upload any one screenshot, or all three if the form allows multiple.

```text
Prompt (identical ×3): Write a TypeScript function that reverses a string without using Array.reverse() or String.prototype.split(). Include the complete function, one sentence explaining how it works, and a tiny usage example with input "Cursor".

Models:
1) Composer 2.5 — Pros: clear beginner-friendly answer with charAt + console.log example. Cons: no Unicode/emoji edge-case note.
2) Grok 4.7 — Pros: most concise correct solution; met every requirement with minimal fluff. Cons: bare call example (no console.log); least explanatory framing.
3) Claude Sonnet 5.5 — Pros: best structure; only model to warn about UTF-16/emoji and suggest safer iteration. Cons: slightly overshot the “one sentence” brevity ask.

All three returned correct code and "rosruC". Screenshot(s) attached show each model’s response to the same prompt.
```

---

## How Emmanuel submits

1. Open the [Challenge 2 page](https://www.mlh.com/events/global-hack-week-open-source-90/challenges/01a11d25-134c-17e5-e22c-8af278534580).
2. Paste the **Paste-ready MLH submission text** above.
3. Attach screenshot(s) from this folder:
   - `media/challenge-2-model-1.webp` (Composer 2.5)
   - `media/challenge-2-model-2.webp` (Grok 4.7)
   - `media/challenge-2-model-3.webp` (Claude Sonnet 5.5)
4. Submit.
