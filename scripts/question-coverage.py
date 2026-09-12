#!/usr/bin/env python3
"""Regenerate leptex/question-coverage.md from the page.

Every preset question on the site is a promise that an answer exists in the
reply instructions. This lists the promises, read straight out of index.html so
the checklist cannot drift away from the page.

    python3 scripts/question-coverage.py
"""
import io
import json
import os
import re
from urllib.parse import parse_qs, urlsplit

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECTIONS = [
    ("home", "Hero", "Suggestion pills and the seasonal announcement"),
    ("grow", "Crops", "One per crop card — the whole card is the link"),
    ("ask", "Menu", "The question menu, ordered by purchase intent"),
]


def load():
    page = io.open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()
    js = io.open(os.path.join(ROOT, "assets/js/i18n.js"), encoding="utf-8").read()
    strings = json.loads(js[js.index("dict:") + 5 : js.rindex("};")].strip())

    found = {}
    for m in re.finditer(r'href="(https://leptex\.com/web/[^"]+)"[^>]*data-q="([^"]+)"', page):
        label = parse_qs(urlsplit(m.group(1).replace("&amp;", "&")).query).get("e", ["?"])[0]
        found.setdefault(label, []).append(m.group(2))
    # dict.fromkeys keeps page order while dropping the repeats
    return {k: list(dict.fromkeys(v)) for k, v in found.items()}, strings


def render(found, strings):
    out = [
        "# Question coverage",
        "",
        "Every preset question on the site is a promise that an answer exists. This file",
        "is the list of promises — generated from `index.html`, so it cannot drift.",
        "",
        "**Use it as a checklist against [`reply-instructions.md`](reply-instructions.md).**",
        "A question with no answer in the instructions is a leaking entry point: the visitor",
        "clicked it, so they care, and the assistant has nothing to say.",
        "",
    ]
    n = 0
    for label, title, note in SECTIONS:
        out += ["## `e=%s` — %s" % (label, title), "", "*%s*" % note, "",
                "| # | Question | i18n key |", "| --- | --- | --- |"]
        for key in found.get(label, []):
            n += 1
            out.append("| %d | %s | `%s` |" % (n, strings[key]["en"], key))
        out.append("")
    out += [
        "---",
        "",
        "**%d preset questions** across three sections, each in six languages." % n,
        "The `e` label travels with every one, so the dashboard shows which section of the",
        "page starts conversations and which ones end in a sale.",
        "",
        "Regenerate after editing the page:",
        "",
        "```bash",
        "python3 scripts/question-coverage.py",
        "```",
    ]
    return "\n".join(out) + "\n"


if __name__ == "__main__":
    found, strings = load()
    path = os.path.join(ROOT, "leptex/question-coverage.md")
    io.open(path, "w", encoding="utf-8").write(render(found, strings))
    print("wrote %s (%d questions)" % (path, sum(len(v) for v in found.values())))
