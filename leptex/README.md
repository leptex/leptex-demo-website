# The other half

The page in this repository answers nothing. It shows who the farm is, what it
grows, and twenty-eight questions — and hands every one of them to a
[Leptex](https://leptex.com) assistant.

So the page is only half the product. The other half is the assistant's
configuration, which normally lives in a dashboard textarea: unversioned,
unreviewable, and impossible to clone. These files are that half, written down.

| File | Where it goes in the dashboard |
| --- | --- |
| [`project-brief.md`](project-brief.md) | Overview → project description |
| [`reply-instructions.md`](reply-instructions.md) | Web link → Reply instructions |
| [`suggested-questions.md`](suggested-questions.md) | Web link → Appearance |
| [`question-coverage.md`](question-coverage.md) | Nothing — it is the test suite |

---

## How to write reply instructions

Not a prompt. A **counter script** — what you would tell someone starting their
first shift.

### Six blocks

| Block | Answers | Usually missing |
| --- | --- | --- |
| **1 · Who you are** | Identity and tone, two sentences | — |
| **2 · Facts** | Prices, address, hours — as numbers | — |
| **3 · What you may agree to** | Things it can say yes to unprompted | **The one that converts** |
| **4 · When to take an email** | Escalation triggers | Treated as failure; it is lead capture |
| **5 · Never say** | Compliance guardrails | Essential in regulated categories |
| **6 · When you don't know** | The fallback | — |

**Block 3 is where sales are won or lost.** The instinct is to withhold
authority, and the result is an assistant that answers every question with
*"let me check with the farmer"* — a dead end dressed up as diligence. Name what
it may decide alone: *"You may agree to hold an order for up to three days. You
may agree to a different pick-up time. Over 20 lb, take an email."*

**Block 4 is a feature.** "I don't know, what's your email?" is a qualified lead.
Write the triggers and the assistant will collect reliably instead of improvising.

### Three rules

**Write answers, not topics.**

| No | Yes |
| --- | --- |
| "Feel free to discuss our pricing" | "Hawthorn is $9 for a 2 lb bag" |
| "Emphasise freshness" | "Picked the morning the customer comes" |

An assistant cannot turn *discuss our pricing* into a number. Adjectives do not
convert; numbers do.

**Every answer must leave somewhere to go.** This is the whole difference between
a conversation and an FAQ:

> ✗ "Hawthorn is $9 a bag."
> ✓ "Hawthorn is $9 a bag, and they are unusually big this year. Want me to put one aside for Saturday?"

Put the habit in the instructions: *after answering, always offer the next step —
suggest something, ask which day they are coming, or take an email.*

**Write for the worst visitor.** On a phone, impatient, not fluent in your
language, and only wants to know the price. Facts first, story later.

---

## Maintenance

Moving the facts off the page is what makes the site immortal. It is also the
debt you take on:

| How often | What |
| --- | --- |
| **Weekly** | What is ripe, how much is left, prices |
| **Each season** | The season table, and the `herald` key in `assets/js/i18n.js` |
| **Rarely** | Identity, the never-say block, escalation triggers |

Treat the weekly edit as an opening routine, like unlocking the gate. Two
minutes. Skip it and you are running a stale price list that nobody can see to
correct.

---

## Note for Leptex itself

The dashboard's **✦ Draft from my project** button currently produces prose.
It would be more useful producing the six blocks above with empty slots left
visible:

```
PRICES — [no prices found in your project. Add them.]
YOU MAY AGREE TO — [not set]
```

An empty slot tells a merchant what is missing; a fluent paragraph hides it.

And the checklist in [`question-coverage.md`](question-coverage.md) wants to be a
product feature: **diff the site's preset questions against the reply
instructions and flag the ones with no answer.** It turns *"is my assistant any
good?"* from a feeling into something you can tick off.
