# Language launch: style

omnigami's own grammar for one announcement: the product now speaks more
languages. The reference is Fernwise, a fictional plant-care app made for
omnigami's examples, on its real Today screen in five languages.

## The grammar

- **The headline says it; the screens prove it.** "Fernwise now speaks" in the product's display face, and under it the language's own name in its italic, in the accent colour. Below, one phone per language, side by side: the product's main screen in that language, captured.
- **One language at a time, each its own phone, each held.** A new language every 1.75 s (three and a half beats): its name rolls in (the old one leaves upward first) as the carousel swipes one phone over, fast out with a soft settle, the phone in the middle dipping a little as it goes. Its neighbours peek in at the edges, set back a shade. A whole new phone, never the same screen redrawn: languages wrap differently, and a layout shifting in place looks like a fault. Then it holds about a second and a quarter.
- **The count lands the point.** After the last language the name rolls to the count ("*5 languages.*"), and in one move every phone flies into a single row under the headline (which glides down to meet it); each language's name rises under its phone. They drop away, one after another, for the end card.
- **The end card:** the product's icon pops in on a spring, its name rises under it, then its tagline in the italic.
- **Text rises out of a mask line** and leaves through the top; a line never rises into the one above it (each line's mask ends just under the line over it).
- **The product's own ground and type:** its deepest brand colour as a soft radial ground, its cream for type, one accent for the language names.

## The frame

Tall, 1080 × 1920. The phone (an unbranded phone, photographed, its screen
cut out) shows the captured screen at 2 frame px per CSS px: 780 px wide,
its top at 640, its bottom running off the frame, so the greeting, the
summary and the first cards are large enough to read. The carousel's phones
are 860 px apart (the neighbours, at 0.9 and 46 px lower, peek in about 70 px).
The headline sits above: line one's baseline at 330, the language at 478; at
the count both glide down 300 px, over the row (phones at 0.205, 206 px apart,
their tops at 1050, the names 78 px under the screens).

## The beats (120 BPM; t = when it starts)

| t (s) | State | What happens |
|---|---|---|
| 0.25 | headline | the name and verb rise word by word (0.08 s apart) |
| 0.45 | phone | the phone rises from below (0.85 s, ease-out) |
| 1.00 | first language | its name rises; it holds to 2.5 |
| 2.5, 4.25, 6.0, 7.75 | each next language | the old name leaves (0.24 s), the new one rises 0.14 s later (0.38 s); the carousel swipes one phone over (0.6 s, ease-out power 3.4; the middle phone dips 7 %) |
| 9.5 | the count | the name rolls to the count; every phone flies into one row (0.85 s, ease-in-out; size in log space) as the headline glides down |
| 10.2 | every name | each language's name rises under its phone, 0.07 s apart |
| 11.4 | out | the headline and the names leave upward; the phones drop away, 0.04 s apart |
| 11.6 | end card | the icon pops (spring 260, 18); the name rises (11.9); the tagline (12.2); held to 14.0 |

## Type

| Where | Face | Size |
|---|---|---|
| headline line one | the display face (Fraunces, soft) | 84, smaller only if the name is long |
| the language and the count | its italic (Fraunces Italic), or an open-licence face for its script (Noto Serif JP) | 128, fitted to 940 px |
| every name, under its phone | the text face (Nunito 700, Noto Sans JP) | 32, fitted to 190 px |
| end card: name / tagline | display / italic | 132 / 58 |

Captured text keeps the product's size; at 2 px per CSS px its body text is
26 px or more.

## Motion

- **Rise:** in over 0.32–0.4 s (ease-out expo) from 1.45 × the size below; out over 0.24 s (ease-in-out) by 1.45 × the size, so even a descender clears the mask.
- **Swipe:** the row moves one phone (860 px) in 0.6 s, fast out of the blocks with a long soft settle (1 − (1 − q)^3.4); the phone in the middle dips to 0.93 at the swipe's peak and comes back. No crossfade, and never one screen redrawn in place.
- **Phones:** rise in 0.85 s (ease-out expo) from 1350 px below; into the row in 0.85 s (ease-in-out, size in log space); away 1000 px in 0.5 s each, 0.04 s apart.
- **Motion blur:** 4 sub-frames (`--blur 4`).

## Sound

A `pop` as the headline lands and as each language's name arrives, a
`swish` (with its `motion`) on each swipe and as the phones fly into the row, pops on the
count, the row of names, the icon, the name and the tagline. No impacts or
risers. A 120 BPM bed in D: pads and hats, the beat from bar 1 to the count,
pads for the end card. Mastered around −14 LUFS.

## Banned

Crossfades between languages; one screen redrawn in place in another language (its layout shifts); machine-translated or film-only text; a
language shown by its English name; a system font for a script the product's
faces don't cover; cuts; 3D; particles; another company's name, logo or UI.

## Engine rules

- `seek(t, values)` paints from its arguments only: no `Date`, `performance.now()`, unseeded `Math.random`, timers or network.
- A CPU-backed canvas (`getContext('2d', { willReadFrequently: true })`).
- `ctx.reset()` at the start of every frame, so no canvas state carries over.
- Every file the film loads is inside its folder; fonts load in `prepare()`.
