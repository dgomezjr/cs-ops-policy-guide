# Customer Service Operations & Policy Guide — maintenance notes

A single-page tool built from `CS_Operations_Policy_Guide_v1.docx`. Same
architecture as the RSS guide, the Japan Rail tool, and the BDM escalation
reference: plain HTML/CSS/JS, no build step, deployable to GitHub Pages and
embeddable in SharePoint via iframe.

## Files

| File | What it is | Do you touch it? |
|---|---|---|
| `index.html` | Page structure + all styling | Rarely — only for layout/design changes |
| `app.js` | Sidebar rendering, search logic — identical engine to the RSS guide | Rarely — only for behavior changes |
| `data.js` | The actual guide content (27 sections, generated from the .docx) | Only when policy content changes |
| `media.js` | **Screenshot registry** — you'll use this a lot | Yes, whenever you add a screenshot |
| `images/` | Where the screenshot files themselves live | Yes, drop files here |

## On the color scheme

Same Classic Vacations brand foundation as RSS (Onyx/Pearl/Gold, identical
layout, identical interaction patterns), so this reads as a sibling tool
rather than something unrelated — but the primary accent is swapped. RSS
uses Swell (teal), a calm, process-driven color that fits pre-travel
reservations work. This guide uses Latte (warm terracotta) instead — CS
work is in-travel, people-facing, service-recovery work, and the warmer
accent fits that tone, while also giving agents an instant visual cue for
which guide they're in if they ever have both open. Everything else
(callout logic, table styling, search behavior) is identical, so anyone
trained on one guide already knows how to use the other.

## Adding screenshots (the main thing you'll do)

Every policy on the site has a "block id" — a stable short id like `17-2`
or `12-1`. You can see any block's id in the URL bar after you click into
it (it appears after the `#`).

To add one or more screenshots to a policy:

1. Save the image(s) into `images/`. Name them so you can tell them apart,
   e.g. `vcc-step1.png`, `vcc-step2.png`.
2. Open `media.js` and add an entry keyed by the block id, with an array
   of images **in the order you want them to appear**:

```js
const GUIDE_MEDIA = {
  "17-2": [
    { file: "images/vcc-step1.png", caption: "Step 1: Open the VCC request in Plex" },
    { file: "images/vcc-step2.png", caption: "Step 2: Confirm the amount matches the hotel invoice" },
    { file: "images/vcc-step3.png", caption: "Step 3: Submit and record the confirmation number" }
  ]
};
```

That's it — no HTML editing required. A policy with no entry in `media.js`
just shows no screenshots, which is fine (most won't have any). If a
filename in `media.js` doesn't match a real file in `images/`, the site
shows a small "screenshot not found" placeholder instead of breaking, so
a typo is safe and visible rather than silent.

## How the search works

Search is full-text — it checks every word of every policy, not just
titles, so a keyword, code, acronym (e.g. "VCC", "FTC", "CAD"), or system
name will surface the right policy even if it's buried mid-paragraph.
Clicking a result scrolls straight to that policy and briefly highlights it.

## Updating policy content

The content in `data.js` was generated from the Word doc. If policy
content changes going forward, the cleanest path is: give me the updated
section(s) (transcript, redline, or just the new text) and I'll rebuild
`data.js` from the source doc so formatting, callout boxes, and tables
stay consistent — rather than hand-editing the generated JSON.

## Navigation structure

The 27 guide sections + appendices are grouped into 13 categories in the
left sidebar, weighted toward how CS actually works — in-travel and
service-recovery first, rather than mirroring the doc's section order:

1. Getting Started
2. Plex & Booking Review
3. Traveler Interaction & De-escalation
4. Zendesk: Ticket Handling
5. Hotel, Transfers & Air Disruptions
6. Cancellations, Refunds & Financial Adjustments
7. Commission, Fees & VCC/Payment Support
8. Goodwill, Service Recovery & Trip Protection
9. CAD, Manual Components & Groups
10. Escalation, Supplier Contact & Handoff
11. Documentation & Remarks
12. Quick Reference & Routing
13. About This Guide

## What's new — and one honest gap worth knowing about

This build carries over everything added to the RSS guide:

**Auto-tracked "Needs review" list** — same mechanism as RSS: the sidebar
scans for callouts flagging unfinished/unvalidated content (`VALIDATION
REQUIRED`, `PARTIALLY VALIDATED`, etc.) and lists them automatically.

**The gap:** right now that panel shows nothing for this guide, not
because everything here is finalized, but because the source `.docx`
(v1) doesn't yet use that flagging convention the way RSS (v5, several
iterations in) does. The closest equivalent found was a single
`MAINTENANCE` callout on the Routing Directory reminding you to keep
contacts current — not a content-validation flag. If any of this guide's
content is still provisional, it's worth going back into the source doc
and marking those spots the same way RSS does (`VALIDATION REQUIRED` /
`PARTIALLY VALIDATED` callouts) — the site will then surface them
automatically, same as RSS. Happy to help pass through the doc for that
if useful.

**Copy-link icon** on every policy heading — copies a direct URL to that
policy.

**Back-to-top button** — appears once you've scrolled a bit.

**Cross-guide switcher** — a "RSS Operations Guide →" link sits under the
sidebar brand block. It currently points to a placeholder relative path
(`../rss-ops-guide/`) — once both guides are deployed as sibling
repos/paths, update the URL in the small inline script near the bottom of
`index.html` (`window.OTHER_GUIDE = ...`).

## Deployment

Same pattern as RSS and your other tools: push this folder to a GitHub
Pages repo, then embed the published URL in SharePoint via iframe. No
server, no build step — it's ready to publish as-is.
