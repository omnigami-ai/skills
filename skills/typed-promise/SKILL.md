---
name: typed-promise
description: Make a 6-second reveal shot for a launch video in square, wide and tall, with sound. A turn line lands, the brand's mark opens into a prompt bar that types one line and sends it, then the mark lands beside the product's name with a one-line promise and holds. Use when the user asks for a product reveal, a name or logo reveal, a "type a prompt" or "one line is all it takes" moment, or the turn after the problem, for a launch video of an AI tool, a search, a command-line tool or anything driven by one typed line.
---

# Typed promise

One shot from a launch film: the answer to the problem in one line, the
request typed into a bar, then the product's mark and name with its promise.
Six seconds, in wide, square and tall, with sound. Start from the finished
shot in `reference/` (the turn and promise of the product film's reference: Lamplit, a fictional
developer tool made for omnigami's examples).
Its motion, timing and layout stay; its words, colours and mark become the
user's.

It answers a problem. In the product film it follows the hook (the
`struck-hook` shot), cut in on the downbeat. It suits products driven by one
typed line: a prompt, a search, a command, a URL. For other products, use a
reveal without the prompt bar.

Read `style.md` before you build and `critique.md` before you judge.

## What to ask for

Read the product's site first. Ask once for what it can't answer; if the user
wants no questions or an unattended run, decide from the site.

- **The turn:** the answer to the problem in its own terms, the opposite of
  the old way in as few words ("Or one line.", "Simple. Private."). 18
  characters at most.
- **The prompt:** the one line a user really types into the product, 44
  characters at most.
- **The name** (16 characters at most) and **the promise:** what it does, for
  whom, in the site's words (52 characters at most).
- **The brand colour** and **the mark:** an SVG or image of the logo mark in
  colour, one that reads on both a dark background and white. Without one,
  keep the pill.

## Set up

Check Node 20+, ffmpeg and a local Chrome-family browser
(`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). Explain anything
missing.

```bash
mkdir typed-promise && cd typed-promise
cp -R "$SKILL_DIR/reference" reference && cp -R "$SKILL_DIR/reference" film && cp -R "$SKILL_DIR/scripts" scripts
npm init -y >/dev/null && npm i -D puppeteer-core
```

`SKILL_DIR` is this file's folder. `reference/` stays untouched, to compare
against. To read the brand from the site:
`node scripts/capture.mjs <url> capture`, then look at `capture/brand.json`
and the logo files it found.

## Adapt

Edit `film/index.html`. Only the parts labelled ADAPT change.

- **The words:** `turn`, `prompt`, `name` and `promise` in `DEFAULTS`. The
  turn and the promise end with a full stop; the prompt reads as typed (no
  full stop); the name as the product writes it.
- **The colours:** `INK` (the product's dark colour, or keep `#0b0b0b`) and
  `ACCENT` (its brand colour). `TEXT` and `QUIET` are the words on ink; keep
  them light. The accent means only "just arrived" and "the action" (the
  send button, the mark).
- **The mark:** set `MARK`. An SVG path, filled with the accent:
  `{ path: 'M…', box: [width, height] }` (the path's own viewBox). Or an
  image in `film/assets/` of the coloured mark, one that reads on both ink
  and the white bar: `{ src: 'assets/mark.svg', aspect: width / height }`.
  `null` keeps the pill. The mark is the one shape that carries through the
  shot: born under the turn, the send button, then beside the name.
- **The font,** only if the product's own font is licensed for this use: put
  the file in `film/assets/fonts/`, load it in `prepare()` and change `SANS`.
  Otherwise keep the reference's Instrument Sans and JetBrains Mono (OFL).

Keep the timing, the grid, the sizes and the layout rules.

## Check

```bash
node scripts/render.mjs film --all --stress
node scripts/render.mjs film --all --times key --sheet
node scripts/render.mjs film --all --phone
node scripts/render.mjs film --all --check
```

The first is the quick test: it fails if a word leaves the frame, overlaps
another or falls under the size floor. Then look at every sheet in
`out/stress/` and `out/`, in all three shapes: the prompt touching the send
button, a lone word on a line, a mark that doesn't read on ink. Look at a
strip where the bar closes into the mark (`--strip 2.6`, in wide and tall):
the mark never jumps. Score with `critique.md` and fix the worst problems.
Nothing ships below 8. After three rounds, report what remains.

## Render

```bash
node scripts/render.mjs film --all --video --blur 4 --music --sound --poster 5.5
```

This writes `out/16x9.mp4`, `out/1x1.mp4` and `out/9x16.mp4` (60 fps, motion
blur, the 120 BPM bed and the effects, around −14 LUFS) and a poster of each.
Leave out `--music` for effects only. Run it in the foreground and wait for
all three files.

## Deliver

Hand over the three MP4s, the posters and the key-frame sheets, with a short
check summary (quick test, repeatability, scores). For changes to the words,
`node scripts/preview.mjs film` plays every shape and edits the words in the
browser; saved edits need a new render to reach the MP4s.

## Hard rules

- Only the user's brand, mark and words; nothing from another company's film.
- A prompt the product really takes, and a promise the site makes.
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
