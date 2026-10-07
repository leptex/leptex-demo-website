# Question coverage

Every preset question on the site is a promise that an answer exists. This file
is the list of promises — generated from `index.html`, so it cannot drift.

**Use it as a checklist against [`reply-instructions.md`](reply-instructions.md).**
A question with no answer in the instructions is a leaking entry point: the visitor
clicked it, so they care, and the assistant has nothing to say.

## `e=home` — Hero

*Suggestion pills and the seasonal announcement*

| # | Question | i18n key |
| --- | --- | --- |
| 1 | Do you still have hawthorn, and how big are they this year? | `q.herald` |
| 2 | What is ripe and ready today? | `q.today` |
| 3 | What are today's prices? | `q.price` |
| 4 | Where and when do I collect my order? | `q.collect` |

## `e=grow` — Crops

*One per crop card — the whole card is the link*

| # | Question | i18n key |
| --- | --- | --- |
| 5 | Are the cherries ready to pick right now? | `q.ripe.cherry` |
| 6 | Are the blueberries ready to pick right now? | `q.ripe.blueberry` |
| 7 | Are the hawthorns ready to pick right now? | `q.ripe.hawthorn` |
| 8 | How is a red-fleshed apple different from a normal one? | `q.ripe.apple` |
| 9 | Are the persimmons sweet yet, or still astringent? | `q.ripe.persimmon` |
| 10 | How should I store green beans to keep them crisp? | `q.ripe.beans` |

## `e=ask` — Menu

*The question menu, ordered by purchase intent*

| # | Question | i18n key |
| --- | --- | --- |
| 11 | How do I place an order with you? | `q.order` |
| 12 | What are today's prices? | `q.price` |
| 13 | How much do you have left right now? | `q.left` |
| 14 | Can you hold some for me until I get there? | `q.hold` |
| 15 | Can I come and pick something up today? | `q.cometoday` |
| 16 | Where and when do I collect my order? | `q.collect` |
| 17 | Which days can I pick up this week? | `q.days` |
| 18 | How do I pay, and when? | `q.pay` |
| 19 | Is there a minimum order? | `q.min` |
| 20 | Do you deliver or ship anywhere? | `a1.full` |
| 21 | Can I place a bulk order for a family gathering? | `ba3.full` |
| 22 | Can a friend pick up my order for me? | `q.friend` |
| 23 | What is ripe and ready today? | `q.today` |
| 24 | Do you spray your crops with anything at all? | `q.spray` |
| 25 | How long will it keep once I get it home? | `q.keep` |
| 26 | What do people usually do with your hawthorn? | `q.recipe` |
| 27 | Can I pick my own fruit, or do you bag it for me? | `a2.full` |
| 28 | Can I bring my children to the farm? | `q.kids` |

---

**28 preset questions** across three sections, each in six languages.
The `e` label travels with every one, so the dashboard shows which section of the
page starts conversations and which ones end in a sale.

Regenerate after editing the page:

```bash
python3 scripts/question-coverage.py
```
