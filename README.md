# Lucky Farm

A reference storefront for a [Leptex](https://leptex.com) web link: a single static page whose
only job is to turn a visitor into a conversation.

[![License: MIT](https://img.shields.io/badge/License-MIT-A8322A.svg)](LICENSE)
![Dependencies: none](https://img.shields.io/badge/dependencies-none-1B1A17)
![Build step: none](https://img.shields.io/badge/build%20step-none-1B1A17)
![Languages: 6](https://img.shields.io/badge/languages-6-5F7A66)

**Live demo → <https://luckyfarm.leptex.shop>**

Lucky Farm is a fictional family farm in Redmond, WA that sells fruit for local pick-up. The site
is a complete, production-shaped example of the pattern Leptex is built around: the page carries
identity and questions, and the assistant carries answers.

One HTML file, one stylesheet, two scripts, six hand-drawn SVGs. No framework, no bundler, no
package manager, nothing to install.

---

## Table of contents

- [What makes this different](#what-makes-this-different)
- [Quick start](#quick-start)
- [How the Leptex link works](#how-the-leptex-link-works)
- [Customizing](#customizing)
- [Internationalization](#internationalization)
- [Theming](#theming)
- [Deployment](#deployment)
- [Project structure](#project-structure)
- [Configuring the assistant](#configuring-the-assistant)
- [Compliance notes](#compliance-notes)
- [License](#license)

---

## What makes this different

Most storefronts print their prices, address and opening hours into HTML and then slowly rot. This
one prints none of them.

| Not on the page | Where it lives instead |
| --- | --- |
| Prices | The conversation |
| Address | The conversation |
| Opening hours, lead time, payment | The conversation |
| "Is it ripe yet?", "do you spray?", "can I bring kids?" | The conversation |

What the page *does* carry is deliberately imperishable: who the farm is, what it grows, and a menu
of twelve questions. Every card, every crop, every pill is a door into the same chat.

Three things fall out of that:

1. **Nothing goes stale.** A page you forgot to update is worse than no page. An assistant answers
   with today's facts because it is told today's facts.
2. **The claim surface is small.** Every sentence printed on a storefront is a claim the business
   owns and has to defend. Moving them into a conversation puts them under one set of instructions
   that can be corrected in seconds. See [Compliance notes](#compliance-notes).
3. **Curiosity becomes a lead.** A visitor who wonders about anything has exactly one place to go,
   and the merchant sees what pulled them in.

The layout borrows its shape from openai.com — a centred question, an input, a row of suggestions —
and its visual language from Chinese ink-wash landscape painting. Dark by default, with a light
theme beside it.

---

## Quick start

```bash
git clone https://github.com/leptex/leptex-demo-website.git
cd leptex-demo-website
python3 -m http.server 8811
```

Open <http://localhost:8811>. That is the whole toolchain.

---

## How the Leptex link works

A Leptex web link is a **full page, not a widget**. This site links out to it and never embeds it,
so there is no script to load, no API key to leak and no visitor data leaving your domain.

Two query parameters do all the work:

| Parameter | Meaning |
| --- | --- |
| `?q=` | Pre-fills the visitor's first message. It is only pre-filled — they still press send, and can edit it first. |
| `&e=` | Labels where the link sat, so you can see which part of the site starts conversations and which ones convert. |

Because this is a one-page site, `e` names a **section** rather than a page:

| `e` | Section | Entry points |
| --- | --- | --- |
| `home` | Hero announcement, ask box, suggestion pills, closing ask box | 7 |
| `grow` | The six crops | 6 |
| `ask` | The twelve-question menu | 12 |

### The ask box is a plain form

```html
<form class="ask" data-ask action="https://leptex.com/web/YOUR_LINK_CODE"
      method="get" target="_blank" rel="noopener">
  <input type="text" name="q" data-ask-input placeholder="Ask anything about the farm">
  <input type="hidden" name="e" value="home">
  <button type="submit">↑</button>
</form>
```

`q` comes before `e` in the DOM, so the browser serialises `?q=…&e=home` and percent-encodes any
language correctly, for free. **It works with JavaScript disabled** — that is deliberate.
`site.js` adds exactly one behaviour: an empty question submits without a `?q=` at all.

---

## Customizing

### Point it at your own Leptex link

Replace every occurrence of the link code:

```bash
grep -rl 'bu8nbabMeDZu' . --include='*.html' | xargs sed -i 's/bu8nbabMeDZu/YOUR_CODE/g'
```

### The seasonal announcement

The pill above the headline is the **one line on the site that expires**. It is a single i18n key,
`herald`, plus its question `q.herald`, in `assets/js/i18n.js`. The English fallback is inlined in
`index.html`.

```jsonc
"herald":   { "en": "Hawthorn is in · and this year they are big", … },
"q.herald": { "en": "Do you still have hawthorn, and how big are they this year?", … }
```

Change both when the season turns; delete the `<a class="herald">` element to remove it entirely.

### Adding a question to the menu

```html
<a class="asks__item" href="https://leptex.com/web/YOUR_CODE?q=ENCODED&amp;e=ask" data-q="q.yourkey"
   target="_blank" rel="noopener">
  <span class="asks__q" data-i18n="l.yourkey">Your question?</span>
  <span class="asks__go" data-i18n="ui.go">Ask</span>
</a>
```

Put the English text in the `href` as a fallback for visitors without JavaScript, and the six
translations under `l.yourkey` / `q.yourkey` in `i18n.js`.

> The menu holds **twelve** cards on purpose: twelve divides evenly by 1, 2 and 3, so the responsive
> grid never leaves a half-empty row. If you change the count, keep it divisible by 3 and 2.

### Contact details

One placeholder remains, the footer email. It is marked `class="edit"`, which draws a dotted
underline so you can spot every sample value at a glance. Delete the `.edit` rule at the bottom of
`site.css` before launch.

---

## Internationalization

English, 简体中文, Español, 한국어, Tiếng Việt and 日本語. The visitor's language is detected from
`navigator.languages` on first visit and remembered in `localStorage`.

English is inlined in the HTML, so the page degrades to a complete English site if the script fails.

| Attribute | Localises |
| --- | --- |
| `data-i18n="key"` | Element text |
| `data-i18n-ph="key"` | Input placeholder |
| `data-i18n-label="key"` | `aria-label` |
| `data-q="key"` | The `?q=` question in a link — switching language rewrites the question and leaves `&e=` untouched |

**To add a language**, append an entry to `langs` in `i18n.js` and give every key a string for it.
`site.js` needs no change.

`i18n.js` contains only the keys the page actually references. Strings for removed sections are not
shipped — which is how prices and addresses stay out of the bundle as well as off the page.

---

## Theming

Dark is the default. The toggle sets `data-theme` on `<html>` and persists the choice; an inline
script in `<head>` applies it before first paint, so there is no flash.

All colour lives in two blocks at the top of `site.css`: `:root` for dark, `:root[data-theme="light"]`
for light. Both define the same token names, so changing one concept changes both themes.

To follow the operating system instead of defaulting to dark:

```js
var t = localStorage.getItem('lf.theme');
document.documentElement.setAttribute('data-theme',
  t || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
```

The six illustrations are always mounted on a paper-coloured plate (`.plate`), like scrolls hung on
a dark wall — so a single set of artwork reads correctly in both themes with no duplicate assets.

---

## Deployment

Any static host. The repository is set up for GitHub Pages:

1. **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)`
2. Point a DNS `CNAME` record at `<owner>.github.io` with the proxy **disabled** — a CDN in front
   blocks the ACME challenge and *Enforce HTTPS* will never become available
3. Wait for the certificate, then tick **Enforce HTTPS**
4. If you then enable a proxy, set its TLS mode to *Full* or *Full (strict)* — *Flexible* causes a
   redirect loop

`CNAME` in the repository root holds the custom domain. Remove it if you are not using one.

---

## Project structure

```
index.html              the entire site
404.html                dead links land in the chat, not on a GitHub error page
assets/
  css/site.css          all styles, in numbered sections from "night" to "motion"
  js/i18n.js            every string, six languages
  js/site.js            theme, language, form handling, header, scroll reveal
  img/*.svg             cherry, blueberry, hawthorn, apple, persimmon, green bean, favicon
  img/og.png            share card, rendered from the page's own type and mountains
scripts/
  question-coverage.py  regenerates leptex/question-coverage.md from index.html
leptex/                 the assistant's configuration — see below
robots.txt  sitemap.xml  CNAME
```

Colour passes WCAG AA in both themes. The two things that did not, and now do: the
muted ink that carries the *"answered by AI"* disclosure, and the text on the
coral button in dark mode — no single accent can be both bright enough to read as
text on near-black and dark enough to sit under paper-white, so the button prints
dark ink on coral instead. The brand mark stays paper-white; logotypes are exempt.

The mark is the two characters of 山水 — *mountain* over *water* — drawn rather than written, so it
reads in any language.

---

## Configuring the assistant

The page is half the product. The assistant that answers everything it refuses to
answer is the other half, and its configuration lives in [`leptex/`](leptex/):
the project brief, the reply instructions, the welcome message and suggested
questions, plus a generated checklist of all 28 preset questions to verify the
instructions against.

That directory also documents **how to write reply instructions** — a six-block
structure, the three rules that separate a conversation from an FAQ, and the
weekly maintenance this pattern trades for never going stale.

## Compliance notes

This example sells food, so the copy is written to survive scrutiny. The rules generalise to any
regulated category.

**The page states practice and provenance, never a label or a health outcome.** Three phrases are
avoided on purpose:

| Avoided | Why |
| --- | --- |
| *organic*, *certified organic* | USDA-regulated in the US; unusable without certification |
| *pesticide-free*, *no residue*, *chemical-free* | A claim about the product, not the practice. Nobody can guarantee it against spray drift from neighbouring land |
| *completely safe*, *safest*, *safer than* | Unsubstantiable on raw produce, and a comparative health claim invites both regulators and competitors |

What is safe to say is what you *do*: we grew it here, we do not spray, come and walk the rows.

Since every specific now lives in the assistant rather than the page, **the risk moved with it.**
Your Leptex reply instructions should carry the same prohibitions — an assistant that improvises
"totally safe, zero residue" is more dangerous than any headline.

> General marketing-compliance practice, not legal advice. Confirm with counsel or your state
> department of agriculture before making a certification claim.

---

## License

[MIT](LICENSE)
