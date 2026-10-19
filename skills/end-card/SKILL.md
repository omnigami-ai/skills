---
name: end-card
description: Make a 4-second end card for a launch video in square, wide and tall, with sound. The product's mark is born and slides aside for its name, then the address, the one action (a line to type, or the product's own button) and a tagline land on the beat and hold to the last frame. Use when the user asks for an end card, an outro, a closing frame, a call to action, a logo lockup or "the ask" for their product's launch video, teaser, demo or ad.
---

# End card

One shot from a launch film: the ask, held to the last frame. The product's
mark is born in the middle and slides aside (in tall, up) as its name slams
in; then the address, the one action and a tagline land on the beat, and
everything holds. Four seconds, in wide, square and tall, with sound. Start
from the finished shot in `reference/` (the ask of the product film's reference: Lamplit, a fictional developer tool
made for omnigami's examples. The ask of its own launch
film). Its motion, timing and layout stay; its words, colours and mark become
the user's.

It ends a film. In the product film it cuts in after the payoff (the
`payoff-beats` shot), on the third beat of the payoff's second bar.

Read `style.md` before you build and `critique.md` before you judge.

## What to ask for

Read the product's site first. Ask once for what it can't answer; if the user
wants no questions or an unattended run, decide from the site.

- **The name** as the product writes it, and **the address** (the domain, or
  the page to visit: `lamplit.example`, `example.com/pricing`).
- **The one action,** exactly as the site gives it: a line to type (an
  install command, a package, a prompt; 56 characters at most) or its main
  button's words ("Start free trial"; a few words, 24 characters at most).
  One action only.
- **A tagline:** a short line from the site that makes the ask easy (free,
  no card, open source). 40 characters at most.
- **The brand colour** and **the mark:** an SVG or image of the logo mark
  that reads on the paper colour. Without one, keep the pill as a
  placeholder.
- **The paper colour,** if the product has a light background of its own.

## Set up

Check Node 20+, ffmpeg and a local Chrome-family browser
(`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). Explain anything
missing.

```bash
mkdir end-card && cd end-card
cp -R "$SKILL_DIR/reference" reference && cp -R "$SKILL_DIR/reference" film && cp -R "$SKILL_DIR/scripts" scripts
npm init -y >/dev/null && npm i -D puppeteer-core
```

`SKILL_DIR` is this file's folder. `reference/` stays untouched, to compare
against. To read the brand from the site:
`node scripts/capture.mjs <url> capture`, then look at `capture/brand.json`
and the screenshots (its logo, colours, button words and install line).

## Adapt

Edit `film/index.html`. Only the parts labelled ADAPT change.

- **The words:** `name`, `url`, `action` and `tagline` in `DEFAULTS`.
  Copy the action character for character: someone will type it.
- **The action's style:** `actionStyle` in `DEFAULTS`. `'command'` sets a
  line to type in mono on an ink row, as a site shows code; `'button'` sets
  the product's own button, its words on the accent.
- **The colours:** `PAPER` (the product's light background, or keep
  `#f1f1ed`), `INK` (its text colour, or keep `#0b0b0b`), `ACCENT` (its brand
  colour) and `MUTED` (its secondary text, for the tagline). The accent means
  only the mark, words as they arrive, and the button.
- **The mark:** put it in `film/assets/` and set `MARK`: an SVG path filled
  with the accent, `{ path: 'M…', box: [width, height] }` (the path's own
  viewBox; add `rule: 'evenodd'` if the SVG has `fill-rule="evenodd"`), or an
  image, `{ src: 'assets/mark.svg', aspect: width / height }`. `height` sets
  its height against the name's capitals: the pill is 0.82; a square or round
  mark usually wants 1.2. `null` keeps the pill. Use the symbol, not a
  wordmark: the name is set in type beside it.
- **The font,** only if the product's own font is licensed for this use: put
  the file in `film/assets/fonts/`, load it in `prepare()` and change `SANS`.
  Otherwise keep the reference's Instrument Sans and JetBrains Mono (OFL).

Keep the timing, the grid, the springs, the sizes and the layout rules.

## Check

```bash
node scripts/render.mjs film --all --stress
node scripts/render.mjs film --all --times key --sheet
node scripts/render.mjs film --all --phone
node scripts/render.mjs film --all --check
```

The first is the quick test: it fails if a word leaves the frame, overlaps
another or falls under the size floor, with the words at their longest and
shortest, and with the action as a button. Then look at every sheet in
`out/stress/` and `out/`, in all three shapes: an action cut, shrunk too far
or not exactly the site's; a mark too small or too heavy beside the name; a
mark that doesn't read on the paper. Look at a strip of the mark's birth
(`--strip 0.2`, in wide and tall). Score them with `critique.md` and fix the
worst problems. Nothing ships below 8. After three rounds, report what
remains.

## Render

```bash
node scripts/render.mjs film --all --video --blur 4 --music --sound --poster 3
```

This writes `out/16x9.mp4`, `out/1x1.mp4` and `out/9x16.mp4` (60 fps, motion
blur, the 120 BPM bed and the effects, around −14 LUFS) and a poster of each.
Leave out `--music` for effects only. Run it in the foreground and wait for
all three files.

## Deliver

Hand over the three MP4s, the posters and the key-frame sheets, with a short
check summary (quick test, repeatability, scores) and where each word and the
mark came from. For changes to the words, `node scripts/preview.mjs film`
plays every shape and edits the words in the browser; saved edits need a new
render to reach the MP4s.

## Hard rules

- Only the user's brand, mark and words; nothing from another company's film.
- The action works as shown: a line to type is the real one, a button says
  what the site's button says.
- The mark is the product's own, from its site or the user, with permission
  to use it; never redrawn or invented. Without one, the pill.
- `seek(t, values)` paints from its arguments only: no clocks, unseeded
  randomness, timers or network. CPU-backed canvases, reset every frame.
- Every file the film loads lives inside `film/`.

## Files

- `reference/`: the finished shot (`index.html`), the runtime (`kit.js`) and
  the Instrument Sans and JetBrains Mono fonts with their licences, and Lamplit's mark.
- `style.md`: the grammar, with numbers. `critique.md`: the review.
- `scripts/`: `render.mjs` (stills, sheets, the quick test, checks, MP4s),
  `preview.mjs`, `capture.mjs` (brand from a URL), `music.mjs`, `song.mjs` (fits a supplied song), `sfx.mjs`
  with the sound kit, and `chrome.mjs`.

Style inspired by the grammar of three 2026 launch films: Figma's "Figma
Motion", ElevenLabs' "Reception" and @LexnLin's "Tessel". This is an
independent style study; none of them made or endorsed it.

This skill is omnigami's (https://omnigami.ai), © 2026 Auberon LLC. Use what it makes for anything,
commercial work included, and change the skill for your own use; don't redistribute or
sell the skill. Full terms: https://github.com/omnigami-ai/skills/blob/main/LICENSE.md
