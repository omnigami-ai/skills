---
name: illustrated-ad
description: Make a 16-second illustrated ad for a physical product - its botanicals or ingredients drawn in engraved ink that draws itself stroke by stroke on warm paper, the real product (a photorealistic render) rising in front of each, a page push to the next, then every product together with a drawn fizz, the line and the call to action. Renders a tall (9:16) MP4 with sound. Use when the user asks for an illustrated ad, product ad, packaging film, drawn or engraved animation for a drink, food, cosmetic or other physical product range.
---

# Illustrated ad

You make a 16-second ad for a physical product range in the hand of its own
packaging's illustrations. For each product: its ingredients draw
themselves in engraved ink on warm paper (outlines first, from the stem out,
then the hatching), its name rises, and the product itself, a
photorealistic render, rises in front of them. The page pushes on to the
next. Then every product together, a fizz (or the product's own finishing
touch) drawing itself, the line, the call to action and the wordmark.

You work by **adapting a finished film**: `reference/` is a complete ad for
Fennick (a fictional sparkling botanical tea made for omnigami's examples):
three cans, each with its two botanicals engraved in the cans' own style.
Keep its motion; change its content. The film is tall (1080 × 1920).

Read `style.md` before you start and `critique.md` before you judge.

## Before you start

1. **Check the tools:** `node -v` (20 or later), `ffmpeg -version`, Python 3 with Pillow and NumPy, and a Chrome, Chromium, Edge or Brave install. If something is missing, say how to install it and stop.
2. **Ask once, in one message,** for what the user hasn't given: the products (two to four) and what goes into each, product photographs or renders on a plain background (or permission to make photorealistic renders from their packaging), the line, the call to action and the address. If they want no questions, decide from the site.

## Steps

`SKILL_DIR` is the folder this file is in. Work in `illustrated-ad-film/` in the current directory.

1. **Set up.**
   ```bash
   mkdir -p illustrated-ad-film && cp -R "$SKILL_DIR/reference" illustrated-ad-film/reference && cp -R "$SKILL_DIR/reference" illustrated-ad-film/film && cp -R "$SKILL_DIR/scripts" illustrated-ad-film/scripts
   rm -rf illustrated-ad-film/reference/out illustrated-ad-film/film/out
   cd illustrated-ad-film && npm init -y >/dev/null && npm i -D puppeteer-core
   ```
2. **Learn the product.** `node scripts/capture.mjs <url> capture`; look at the packaging closely: its illustration style (engraving, line, woodcut, watercolour), its colours and its type. The drawings must be in the packaging's own hand.
3. **Write the story** in one sentence ("each flavour's botanicals draw themselves, its can rises in front of them, and all three end together") and the state list to `film/STATES.md`: each product, its two ingredients, its name, and the end.
4. **Make the products.** The product as it really is: the user's photographs, cut out, or photorealistic renders made from its real packaging (never a drawing of the product). Cut each out of a flat background (`cast/tools/cutout.py` in omnigami's repo shows how; generated transparency leaves fringes) and crop it to its edges; the reference's are `assets/art/can-*.png`, 900 px tall.
5. **Make the drawings.** Each ingredient as a standalone illustration in the packaging's style: dark ink on pure white, no paper texture, no border, no text, the subject centred with margin, one hand across all of them (`assets/art/ENGRAVINGS.md` is the brief the reference's were made from). Then turn each into ink on transparent (the ink's darkness becomes its alpha, cropped, at most 900 px) as the reference's are. Look at every drawing: redo any that looks like clip-art, a cartoon or a different hand.
6. **Adapt `film/index.html`:** `DEFAULTS` and `FIELDS` (each product's name, the line, the call to action, the address), `PRODUCTS` (its render, its two drawings, its wash colour), `START` (where each drawing starts: its stem or root, as a fraction of the image), the colours and faces, and the wordmark (`assets/art/wordmark.svg`). Keep the motion code: the draw-on, the rise from the base, the push, the end.
7. **Check:** `node scripts/compare.mjs reference film out/compare-9x16.png --size 9:16`, `node scripts/render.mjs film --size 9:16 --stress` and `--phone`. Fix anything that fails `critique.md`.
8. **Check the motion** on strips of consecutive frames from the MP4: each draw-on (it must read as drawing, from the stem out, not a wipe), each product's rise, each push, the end. Then get a fresh judgement from a sub-agent with only `critique.md` and the images, if you can start one.
9. **Check it's repeatable:** `node scripts/render.mjs film --size 9:16 --check`.
10. **Render:** `node scripts/render.mjs film --size 9:16 --video --blur 4 --music --sound --poster 3.4`.
11. **Write `illustrated-ad-film/README.md`** and `out/CAPTION.md` (under 280 characters, the product's words and address).
12. **Report:** the MP4, the poster, the caption, the story and state list, the scores, and the one change that would improve it most.

## Rules

- **The real product,** photographed or rendered photorealistically from its real packaging; never drawn, never another brand's.
- **The packaging's own hand:** every drawing in one consistent style taken from the product's own illustrations.
- **Let each beat land:** each drawing finishes before its product rises; the product and its name hold before the page pushes; the words leave before the page moves.
- **Keep the motion** (`style.md`): no fades, no crossfades; things rise from a line or push.
- **Engine rules:** `seek(t)` paints from its arguments only; every file inside `film/`.
- **Only the user's brand.**

## Files

- `reference/`: the Fennick ad (`index.html`), its art (`assets/art/`: the engravings as ink on transparent, the can renders, the wordmark, and the engravings' brief), fonts (Bricolage Grotesque and DM Sans, SIL Open Font License), `kit.js`. Fennick is a fictional company made for omnigami's examples.
- `scripts/`, `style.md`, `critique.md`.

This skill's motion is omnigami's own; it isn't a study of another film.

This skill is omnigami's (https://omnigami.ai), © 2026 Auberon LLC. Use what it makes for anything,
commercial work included, and change the skill for your own use; don't redistribute or
sell the skill. Full terms: https://github.com/omnigami-ai/skills/blob/main/LICENSE.md
