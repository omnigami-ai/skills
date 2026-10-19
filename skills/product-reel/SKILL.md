---
name: product-reel
description: Make a readable product or catalogue reel with photographed items on the beat, real shop or app screens, count-ups, an orbiting collection and a held brand/address. Use for “show everything we make”, collection showcases and short social reels of a range. Includes tall, square and wide layouts.
---

# Product reel

Make a short reel of a whole range (allow about 20–22 seconds for six or
seven items): a logo open; one item per readable slot, each
with its name, a detail line and its kind huge and pale behind it, a
segmented progress bar counting through them; the last item pulls back into
the product's real catalogue screen; the catalogue's numbers count up; every
item orbits one line; the product's real search or selection action finds
the next item; the name and the address, held to the last frame. Start from the
finished reel in `reference/` (Fernwise, a fictional plant-care app: story in
`reference/STORY.md`). Its toolkit (type fitting, the item change, the
pull-back, the counts, the orbit, the mark, the sound) stays; its
words, items, screens and mark become the user's.

Read `style.md` before you build and `critique.md` before you judge.

## Start or resume

- Check Node 20+, ffmpeg and a local Chrome-family browser
  (`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). Explain anything
  missing.
- Collect what the user gave: the product (a URL or a local app), the items
  to show (6–8: photos or renders of each, with a name, a kind and a detail
  line), the catalogue screen and the search or selection action to capture,
  the numbers worth counting, one line, the address. Read the product before asking. Ask once
  for what it can't answer. If the user wants no questions or an unattended
  run, decide from the product.
- Items must be real: the user's own product photos or renders, cut out on a
  transparent background, all from one shoot (same light, same angle, same
  scale). Never draw a product and never use another company's products. If
  the user has fewer than six items, show each one more than once with a
  different detail (`examples/fennick/` shows three cans twice each). Label the passes clearly so the counter cannot suggest six products.
- If `product-reel/` already exists with `film/STORY.md`, this is a revision:
  work on that film.

Set up a first film:

```bash
mkdir product-reel && cd product-reel
cp -R "$SKILL_DIR/reference" reference && cp -R "$SKILL_DIR/reference" film && cp -R "$SKILL_DIR/scripts" scripts
rm -rf film/assets/screens film/assets/plants film/plans
npm init -y >/dev/null && npm i -D puppeteer-core
```

`SKILL_DIR` is this file's folder. `reference/` stays untouched, to compare
against. `examples/fennick/` is a second complete reel (a drinks shop with
three products, responsive shop captures and a real box-building action) to borrow from.

## Learn the product, then write the story

1. `node scripts/capture.mjs <url> capture` for a website (or open the app):
   look at every screenshot and read `capture/brand.json`. Find the range,
   its own words, its colours, fonts and mark, the catalogue screen (a grid
   or list of every item), the search or selection action, and the numbers it states.
2. Write `film/STORY.md` in the shape of `reference/STORY.md`:
   - the sections and their times (lengthen to meet the reading holds);
   - every item: its photo, name, the word behind it (its kind or category,
     one to three words), the small line above the name, the detail line (a
     fact a buyer cares about; a number in it ticks from item to item) and the
     pill (a status or tag);
   - the catalogue screen and which item's place the pull-back lands on (put
     the item that sits in the screen's middle last);
   - the three numbers, each with its source;
   - the line in the orbit, the search word/results (or a real selection action), the address;
   - every claim with its source. Numbers come only from a source you cite.
   No prices or dates unless the brand puts them on its own screens.
3. Show the user the story in a few lines (the items in order, the screen,
   the numbers, the line) and ask for one review, unless they asked for an
   unattended run. Never take silence as approval.

## Capture the real screens

1. Write `film/plans/mobile.json` (a phone app or a phone layout) or
   `film/plans/desktop.json` in the shape of `reference/plans/mobile.json`
   (the format is at the top of `scripts/screens.mjs`):
   - the catalogue screen, whole, at scale 3 (phone) or 2 (desktop);
   - the empty search, then a `type` step that captures every letter of the
     search word (`name-01` … `name-NN`), whole, at the same scale;
   - `rects`: the catalogue's item photos (`"photos": ".tile-photo*"`), the
     search results and their thumbnails, by name.
2. Run it: `node scripts/screens.mjs film/plans/mobile.json film/assets/screens`.
3. Look at every capture. Fix the plan until each state is right. Never
   capture customer data, and never draw an imagined screen.
4. Put the item photos in `film/assets/plants/` (any folder; change the path
   in `prepare`) as WebP with transparency, about 1000 px on the long side
   (`cwebp -q 90 -alpha_q 100 -resize 1000 0 in.png -o out.webp`). Square
   photos with the item standing on the same baseline work best; tall photos
   (cans, bottles) work too.
5. Copy the brand's fonts with their licence files into `film/assets/fonts/`.
   If a variable font's look depends on axes a canvas can't set (Fraunces'
   SOFT and WONK), pin them with fontTools:
   `python3 -m fontTools.varLib.instancer in.ttf opsz=144 SOFT=100 WONK=0 -o out.ttf`
   (allowed when the licence names no Reserved Font Name).

## Build the film

Edit `film/index.html`. Its sections are labelled KEEP, ADAPT and REPLACE.

- **ADAPT the words:** `DEFAULTS` and `FIELDS`, from `STORY.md`.
- **ADAPT the colours and fonts:** the field colour (items, screens, end),
  the dark colour (open, orbit), the text colour, the one accent for arriving
  words, `SAGE` (the alternate field: a breath of the accent on the field
  colour), `TONES` (the pill's dot), `SERIF` and `SANS`.
- **ADAPT the items:** `ITEMS` (photo, pill tone, a small scale by the
  item's real size). The last one is where the pull-back starts. Update
  `template.keyTimes` to include every item at `T_ITEM(i) + 0.2`, held screens,
  all counts settled, and the final address. Otherwise stress sheets can
  miss an added item.
- **ADAPT the ghost word:** `itemLayout().ghost` gives its baseline, width,
  size and alignment per shape. Keep the pale tone and crossfade, but make
  the whole phrase readable at rest: the item covers at most about 20% of
  its letters. Tall and square use one line near the item's base; wide
  places it beside the item, above its small caption. Inspect every item
  on the sheets; the automatic stress check excludes this faint text.
- **ADAPT the screens:** `PULL` (the catalogue capture, its rects, the photo
  index the last item lands on, the close-up crop for square and wide and the
  crop for tall) and `SEARCH` (the empty and typed captures, the crop, the
  first result's thumbnail and the orbit tile that flies to it). If your
  catalogue's photos are inset differently, change the inset in `pullFrame`
  and `SEARCH.thumb` to match the product's own CSS.
- **ADAPT the orbit:** `ORBIT`, every real photo once (6–12). Include source lifestyle or packaging photographs when a small range needs variety. Keep each photo’s aspect ratio.
- **ADAPT a shop without search:** follow `examples/fennick/`: capture a real choice action as successive states and use its recorded DOM rectangles for the pointer. Never add a search UI for the film. Allow a readable final state after the real action.
- **REPLACE the mark:** `motionMark(ctx, {size, fg})` paints the brand's exact
  static path, centred on `(0, 0)`. `kit.motion.markReveal` owns the seed,
  container, scale, lockup slide, line and final push. Do not reimplement a
  contour morph or animate inside the callback. The original `drawMark`
  supports static headers and the earlier square/wide choreography.
- **KEEP the house motion in portrait:** `kit.motion.out`/`settle` for
  entrances, `inOut` for camera travel and whole-scene pushes, `drawCursor`
  for every pointer. Converging tiles keep the original photo, proportions
  and corner ratio: use `out` on their geometry, then slide the stack away.
  The shared `converge` tail produces a circle, so do not use it for this
  shape-preserving move. Prefer zero irises; never exceed one per film.
  Generic `markReveal` handles every logo, including a complete horizontal
  lockup fitted into its mark callback as in Fennick. Cap the final address
  hold at 1.2 s, with the helper's gentle push.
- **Frame the portrait proof:** use the same 7% side margin (75.6 px at
  1080) and 10% top/bottom safe area (192 px at 1920). Fit the whole captured
  card to that .86 W × .80 H region, preserving aspect ratio. Recapture a
  suitable region of the real app when necessary. Fennick's portrait plans
  show two complete catalogue cards and the real builder without stretching
  UI. Check essential captured text against the 28 px floor at a 1440 px
  short side. Move/scale the complete container, never UI inside a fixed frame.
- **KEEP** the sections and their order over the 120 BPM bed, the type
  fitting, item change, pull-back, counts, orbit and drawing. Current
  portrait times live in `P`; extend them for the number of items and words.
  Each line needs at least 1 s after landing and .4 s per three words.
  Use one 7% side margin and a 10% top/bottom safe frame. Nothing pops in.
  Use zero irises where possible, never more than one, and preserve every
  converging item's own shape and artwork. Use the generic `markReveal` for
  every logo; move the complete captured UI container on camera moves.

Write `PRODUCT.md` at the project root: the product, its colours, fonts and
mark (with licences), the items and where their photos came from, the date.

## Review, render, deliver

1. Sheets and phone checks for every shape:
   ```bash
   node scripts/render.mjs film --all --times key --sheet
   node scripts/render.mjs film --all --phone
   ```
   Then 12-frame strips at every item change, the pull-back, the scene pushes, the
   shape-preserving convergence and the end, in tall and in wide:
   `node scripts/render.mjs film --size 9:16 --strip <time>`.
2. Score with `critique.md` and fix the worst problems. Before shipping, get
   a fresh judgement. If your agent can start a sub-agent without this
   session's memory, give it `critique.md`, `STORY.md` and the images,
   nothing else, and fix what it finds. Otherwise reread `critique.md` and
   score from the images alone. Nothing ships below 8. After four rounds,
   report what remains.
3. The quick test and repeatability:
   `node scripts/render.mjs film --all --check --stress`. It must pass.
4. Render:
   ```bash
   node scripts/render.mjs film --all --video --blur 4 --music --sound --poster 2.2
   ```
   This writes `out/9x16.mp4`, `out/1x1.mp4` and `out/16x9.mp4`: 60 fps, with
   motion blur, music and effects, around −14 LUFS. It takes several minutes:
   run it in the foreground and wait for all three files before handing over.
5. Run `node scripts/preview.mjs film` and give its localhost address. It plays
   every shape and edits the words; saved edits need a new render.
6. Write `README.md` (the files, how to preview, how to change a word, how to
   render) and `out/CAPTION.md` (a post under 280 characters in the brand's
   voice, with its address). Hand over the MP4s, the posters, the caption, a
   short check summary, and the one change that would most improve the reel.
   Put the detailed scores in `out/REVIEW.md`.

## Revisions

For "swap the third item" or "slower", edit the current story and film. Keep
what was approved and the user's saved words. Recapture only the screens that
changed, rerun the checks, render again, and update `STORY.md`.

## Hard rules

- Real photos or renders of the user's own items, and real captured screens
  only; never draw a product or a screen; sample data only; only the user's
  brand.
- Every word and number on screen has a source in `STORY.md`.
- `seek(t, values)` paints from its arguments only: no clocks, unseeded
  randomness, timers or network. CPU-backed canvases (`willReadFrequently`),
  `ctx.reset()` every frame.
- Every file the film loads lives inside `film/`.

## Packaging credit

For a published example or skill page, include the linked style credit below and the fictional-company label. A user’s commissioned reel uses their own product and claims.

## Files

- `reference/`: the Fernwise reel, `STORY.md`, the capture plan, the
  captured screens, the plant cut-outs, the mark and licensed fonts.
- `examples/fennick/`: a second complete reel (Fennick, a fictional
  sparkling-tea shop: three cans, each shown twice).
- `style.md`: the grammar, measured, with numbers. `critique.md`: the review.
- `scripts/`: `screens.mjs` (real screens in states), `capture.mjs` (brand
  from a URL), `render.mjs` (stills, strips, checks, MP4s), `preview.mjs`,
  `music.mjs`, `song.mjs` (fits a supplied song), `sfx.mjs` with the sound kit, and `chrome.mjs`.

Style inspired by @justinmfarrugia's video
(https://x.com/justinmfarrugia/status/2103822390870569266). This is an
independent style study; he didn't make or endorse it. Fernwise and Fennick
are fictional companies made for omnigami's examples.


Portrait iris exports keep clean vector edges by setting the shutter to zero
for the four iris intervals in `template.shutters`. Use `--blur 4` for the
rest of the film; averaging several expanding radii would add visible rings
to an otherwise clean clip edge. No engine change is needed.

This skill is omnigami's (https://omnigami.ai), © 2026 Auberon LLC. Use what it makes for anything,
commercial work included, and change the skill for your own use; don't redistribute or
sell the skill. Full terms: https://github.com/omnigami-ai/skills/blob/main/LICENSE.md
