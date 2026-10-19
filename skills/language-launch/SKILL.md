---
name: language-launch
description: Make a 14-second announcement video that a product now speaks more languages, on its real screens - the headline "<name> now speaks" over each language's own name, a carousel of the product's real screen, one phone per language, swiping one over as each name rolls in, each held long enough to read, then every phone flying into one row under the count, and the end card. Renders a tall (9:16) MP4 with sound. Use when the user asks for a localization, translation, "now in N languages", new languages or international launch video.
---

# Language launch

You make a 14-second film that says one thing: the product now speaks more
languages. The headline says it in the product's own type ("Fernwise now
speaks", then *English*, *Español*, *日本語*… in each language's own name),
and the proof is the product itself: its main screen, captured in each
language, one phone per language in a carousel that swipes one phone over as
each name rolls in. Then the count ("*5 languages.*"), every phone flying into
one row with its language's name under it, and the end card.

You work by **adapting a finished film**, not from a blank page:
`reference/` is a complete film for Fernwise (a fictional plant-care app
made for omnigami's examples), on its real Today screen in English,
Spanish, Japanese, German and Portuguese. Keep its motion; change its
content. The film is tall (1080 × 1920).

Read `style.md` before you start and `critique.md` before you judge.

## Before you start

1. **Check the tools:** `node -v` (20 or later), `ffmpeg -version`, and a Chrome, Chromium, Edge or Brave install (`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). If something is missing, say how to install it and stop.
2. **Ask once, in one message,** for what the user hasn't given: the product's URL (and a demo account if its screens are behind a sign-in), how to switch its language (a setting, a URL parameter, a browser locale), which languages to show (two to six, in the order to show them), and its tagline. If they want no questions, decide from the site.

## Steps

`SKILL_DIR` is the folder this file is in. Work in `language-launch-film/` in the current directory.

1. **Set up.**
   ```bash
   mkdir -p language-launch-film && cp -R "$SKILL_DIR/reference" language-launch-film/reference && cp -R "$SKILL_DIR/reference" language-launch-film/film && cp -R "$SKILL_DIR/scripts" language-launch-film/scripts
   rm -rf language-launch-film/reference/out language-launch-film/film/out
   cd language-launch-film && npm init -y >/dev/null && npm i -D puppeteer-core
   ```
   `reference/` stays untouched, for comparison. You edit `film/`.
2. **Learn the product.** `node scripts/capture.mjs <url> capture`, then look at every screenshot and read `capture/brand.json`: its name, colours, logo, type, and its own words. Then open it at phone size in each language.
3. **Pick the screen and write the story.** One screen, the one a new user sees first and that has the most of the product's own words on it (Fernwise: Today, with its greeting, its summary and three plant cards). Every language must really be in the product: never translate a screen yourself for the film, and never show a language the product doesn't have. Write the story in one sentence ("Fernwise now speaks five languages: here is its morning screen in each") and the state list to `film/STATES.md`. If the product's main screen is a desktop one, say so: the reference's phone becomes a plain window in the same place (the motion and timing stay).
4. **Capture the screen in every language.** Write `film/plans/mobile.json` in the shape of `reference/plans/mobile.json` (the format is at the top of `scripts/screens.mjs`), at 390 × 844, scale 4: one capture per language (`today-en`, `today-es` …), each with the screen scrolled to its top. The reference switches language through the address (`#/today?lang=es`); use whatever the product has, and wait for its fonts before each capture. Then:
   ```bash
   node scripts/screens.mjs film/plans/mobile.json film/assets/screens
   (printf 'window.SCREENS = '; cat film/assets/screens/screens.json; printf ';\n') > film/assets/screens/screens.js
   ```
   The film reads its captures from `screens.js` (a sandboxed preview can't fetch the JSON). Look at every capture: a language that overflows a button or a card is the product's to fix, not the film's to hide; tell the user.
5. **Adapt `film/index.html`.** It is one file with labelled sections:
   - `DEFAULTS` and `FIELDS`: the name, the verb ("now speaks"), the count ("5 languages.") and the tagline. Keep each within its field's `maxLength`.
   - `LANGS`: the languages in the order shown: the capture's code and the language's own name, in its own script (Español, 日本語, never "Spanish" or "Japanese").
   - colour and type: `GROUND` (the product's deepest brand colour, for the ground), `CREAM`, `SPROUT` (the accent: the language names), `MOSS` (the icon tile), and the product's display, italic and text faces. A script the faces don't cover (Japanese, Chinese, Korean, Arabic, Hindi…) needs an open-licence face for it (the reference bundles Noto Serif JP and Noto Sans JP, cut to the characters it uses, SIL OFL): never let the browser fall back to a system font, which the user may not have the right to show.
   - `MARK`: the product's mark as a `Path2D` from its SVG, for the end card's icon tile.
   - `T`: the beats. Add or remove a language by adding or removing a time in `T.lang` (1.75 s apart) and moving `count` and everything after it by the same amount; keep every hold.
   - `STEP`, `ROW`: the carousel's spacing (the neighbours peek in at the edges) and the final row; with more than five languages, narrow `ROW.step` and `ROW.scale` so the row fits 1000 px.
   Keep the motion code as it is: the rise, the roll, the swipe, the row, the end card.
6. **Check stills against the reference.**
   ```bash
   node scripts/compare.mjs reference film out/compare-9x16.png --size 9:16
   node scripts/render.mjs film --size 9:16 --stress
   node scripts/render.mjs film --size 9:16 --phone
   ```
   Look at every sheet the quick test writes to `out/stress/` and every phone sheet. Fix anything that fails `critique.md`, then compare again. Repeat until every score is 8 or more.
7. **Check the motion** on strips of consecutive frames from the MP4 (step 9) around every hand-off: the opening (0.2–1.4), each language (2.5, 4.25, 6.0, 7.75: the name's roll and the swipe), the count and the row (9.5–10.4), the end card (11.4–12.6). The old name must be gone before the new one rises, and nothing may rise into the line above it. Then **get a fresh judgement**: if your agent can start a sub-agent without this session's memory, give it `critique.md` and the images, nothing else, and fix the worst problems it finds.
8. **Check it's repeatable:** `node scripts/render.mjs film --size 9:16 --check` must pass.
9. **Render.**
   ```bash
   node scripts/render.mjs film --size 9:16 --video --blur 4 --music --sound --poster 4.6
   ```
   This writes `out/9x16.mp4` (1080 × 1920): 60 fps, motion blur, a synthesised 120 BPM bed and effects from omnigami's own sound kit, loudness about −14 LUFS, and a poster (`out/9x16-poster.png`). For the user's own song, use `--audio song.wav` instead of `--music`; it's fitted to the film by `song.mjs`: it starts on a bar line and, near the end, lands one hit and closes and fades (cleanest with the song's stems in a `song-stems/` folder beside it: the drums stop on that hit). A song near 120 BPM fits the film's cuts; `--from <seconds>` starts at another section of it. Run it in the foreground and wait for the file.
10. **Write `language-launch-film/README.md`:** what each file is, how to add a language, how to recapture the screens, and the render command. Also write `out/CAPTION.md`: a post under 280 characters in the product's own words, with its URL; if the product's audience reads several of the languages, a line in each is fine.
11. **Report:** the MP4, the poster, the caption, the story sentence and state list, the final scores, and the one change that would improve it most.

## Rules

- **Only languages the product really has,** captured from the product, in its own translations. Never translate for the film.
- **Each language in its own name and script,** with a face that covers it under an open licence.
- **Let each language land.** Each one holds about a second and a quarter after its swipe: long enough to read the greeting and the first line. Add a language by adding time, never by shortening the holds.
- **Keep the motion.** A name never rises into the line above; the old one leaves before the new one rises; shapes change in one move (`style.md`).
- **Keep the engine rules** (`style.md`): `seek(t)` paints from its arguments only; no clocks, no `Math.random`, no timers, no network; every file inside `film/`.
- **Only the user's brand.** No other company's name, logo or UI: the phone is the reference's unbranded photograph.

## Files

- `reference/`: the Fernwise film (`index.html`), its capture plan (`plans/mobile.json`) and captures (`assets/screens/`, with `screens.js`), the unbranded phone (`assets/art/phone.png`), fonts (Fraunces, Nunito, and Noto Serif JP and Noto Sans JP cut to the characters used; all SIL Open Font License), `kit.js`. Fernwise is a fictional company made for omnigami's examples; its translations live in `cast/fernwise/app/i18n.js`.
- `scripts/`: `capture.mjs`, `screens.mjs`, `render.mjs`, `compare.mjs`, `preview.mjs`, `music.mjs`, `song.mjs` (fits a supplied song), `sfx.mjs` (with `sounds/`), `chrome.mjs`.
- `style.md`: the grammar, the beats, the motion numbers, the banned list.
- `critique.md`: how to score and what to hunt for.

This skill's motion is omnigami's own; it isn't a study of another film.

This skill is omnigami's (https://omnigami.ai), © 2026 Auberon LLC. Use what it makes for anything,
commercial work included, and change the skill for your own use; don't redistribute or
sell the skill. Full terms: https://github.com/omnigami-ai/skills/blob/main/LICENSE.md
