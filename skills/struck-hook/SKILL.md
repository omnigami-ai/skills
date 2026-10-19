---
name: struck-hook
description: Make a 5-second opening shot for a launch video in square, wide and tall, with sound. The old way in three huge lines that slam in on the beat, then every line struck through in the brand colour and held. Use when the user asks for a hook, an opener, a "the old way" or "before" moment, a problem statement, or kinetic type that crosses out the old way, for their product's launch video, teaser or ad.
---

# Struck hook

One shot from a launch film: the problem in three huge lines that land on the
beat, then every line struck through, a line a step, and held. Five seconds,
in wide, square and tall, with sound. Start from the finished shot in
`reference/` (the opening of the product film's reference: Lamplit, a fictional
developer tool made for omnigami's examples). Its motion, timing
and layout stay; its words and colours become the user's.

It opens a film. In the product film the turn follows it on the next
downbeat (the `typed-promise` shot).

Read `style.md` before you build and `critique.md` before you judge.

## What to ask for

Read the product's site first. Ask once for what it can't answer; if the user
wants no questions or an unattended run, decide from the site.

- **The three lines:** the old way the product replaces, then what it costs
  the viewer (money, time, effort), in the site's own terms. Each line is a
  few words: 18 characters at most for each. All
  three are the old way, because all three get struck out. A number needs a
  source you can name.
- **The brand colour,** for the strike and for words as they arrive.
- **The paper colour,** if the product has a light background of its own.

## Set up

Check Node 20+, ffmpeg and a local Chrome-family browser
(`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). Explain anything
missing.

```bash
mkdir struck-hook && cd struck-hook
cp -R "$SKILL_DIR/reference" reference && cp -R "$SKILL_DIR/reference" film && cp -R "$SKILL_DIR/scripts" scripts
npm init -y >/dev/null && npm i -D puppeteer-core
```

`SKILL_DIR` is this file's folder. `reference/` stays untouched, to compare
against. To read the brand from the site:
`node scripts/capture.mjs <url> capture`, then look at `capture/brand.json`.

## Adapt

Edit `film/index.html`. Only the parts labelled ADAPT change.

- **The words:** `hook1`, `hook2`, `hook3` in `DEFAULTS`. Write them in
  sentence case with a full stop ("Install an app."). Never write a line the
  viewer wants to keep: it gets struck too. Shorten a line before you let it
  shrink all three.
- **The colours:** `PAPER` (the product's own background: light or dark),
  `INK` (its text colour on that background) and `ACCENT` (its brand colour).
  The accent means only "just arrived" and "the problem".
- **The font,** only if the product's own font is licensed for this use: put
  the file in `film/assets/fonts/`, load it in `prepare()` and change `SANS`.
  Otherwise keep the reference's Instrument Sans (OFL).

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
`out/stress/` and `out/`, in all three shapes: words cut, words that run
together, a line too long to stay huge. Score them with `critique.md` and
fix the worst problems. Nothing ships below 8. After three rounds, report
what remains.

## Render

```bash
node scripts/render.mjs film --all --video --blur 4 --music --sound --poster 4.5
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

- Only the user's brand and words; nothing from another company's film.
- Numbers on screen only from a source you can name.
- `seek(t, values)` paints from its arguments only: no clocks, unseeded
  randomness, timers or network. CPU-backed canvases, reset every frame.
- Every file the film loads lives inside `film/`.

## Files

- `reference/`: the finished shot (`index.html`), the runtime (`kit.js`) and
  the Instrument Sans font with its licence.
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
