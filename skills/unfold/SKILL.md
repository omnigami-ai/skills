---
name: unfold
description: Make a 27-second keynote-style launch video for a product in code, as one continuous take. Every scene is made out of the one before it (a wordmark's letters drop away from its period, the dot becomes a pill, an iris opens onto the product, a grid of its screens, a zoom, a glass toolbar and slider, the product's own flow, a phone and its lock screen, a dot that floods onto the real result and back), driven by a cursor, with a screen-studio camera, cut to 120 BPM, with sound. Renders a looping tall (9:16) MP4. Use when the user asks for a launch video, keynote-style film, product video, promo or motion graphics for their product, app or website.
---

# Unfold

You make a 27-second launch film for the user's product in one continuous
take: nothing cuts or fades; each scene is built out of the one before it. A
cursor drives every change and a screen-studio camera frames it. One thing
travels the whole film, through the product's own flow in its own order, and
the film ends on the real result. In the reference a Fennick customer fills a
box of cans with one slide, checks out, gets "delivered" on their phone two
days later, and the film ends on the open box on their kitchen counter. You work by
**adapting a finished film**, not from a blank page: `reference/` is a complete
film for Fennick (a fictional sparkling-tea company made for omnigami's
examples), built frame by frame against the original and measured
(`spec.md`). Its screens are Fennick's real shop, captured; its tiles are the
product's own photographs. Keep its motion; change its content.

The film is tall (1080 × 1920). Every number in it is in design units: 1440
across the frame, 2560 down (0.75 of a pixel each). `SHAPES` in
`film/index.html` also lays out square and wide, but they haven't been
reviewed with this story: render them only if the user asks, and then check
them as carefully as tall.

Read `style.md` before you start and `critique.md` before you judge.

## Before you start

1. **Check the tools:** `node -v` (20 or later), `ffmpeg -version`, and a Chrome, Chromium, Edge or Brave install (`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). If something is missing, say how to install it and stop.
2. **Ask once, in one message,** for what the user hasn't given: the product's URL, its name as it should appear in the wordmark, its tagline, its main call to action, and anything it must or mustn't show. If they want no questions, decide from the site.

## Steps

`SKILL_DIR` is the folder this file is in. Work in `unfold-film/` in the current directory.

1. **Set up.**
   ```bash
   mkdir -p unfold-film && cp -R "$SKILL_DIR/reference" unfold-film/reference && cp -R "$SKILL_DIR/reference" unfold-film/film && cp -R "$SKILL_DIR/scripts" unfold-film/scripts
   rm -rf unfold-film/reference/out unfold-film/film/out
   cd unfold-film && npm init -y >/dev/null && npm i -D puppeteer-core
   ```
   `reference/` stays untouched, for comparison. You edit `film/`.
2. **Learn the product.** `node scripts/capture.mjs <url> capture`, then look at every screenshot and read `capture/brand.json`: its name, words, colours, logo and what it actually does. Read the pricing and signup pages too: the order flow comes from them.
3. **Map the story onto the product.** Never refuse a product and never force one into the reference's content: keep the film's moves and change what each one carries.
   - **Find the thing that travels:** the one object the film follows from the first click to the end (Fennick: the box; a booking app: the stay; a writing tool: the document; a dashboard: the report). Everything the film shows is that thing at another step.
   - **Write the story in one sentence, from the product's real flow,** before anything else, and check it: every scene is a step a real customer takes, in the product's own order, once (never the same step twice, never a result before its cause), and the film ends on the real result: what the customer actually gets, in the world (Fennick: the box on the counter), not a picture of the product framed.
   - **Swap a beat when the product doesn't have it; don't invent a feature for it.** Each beat has stand-ins:

     | Beat | Reference (Fennick) | Stand-ins |
     |---|---|---|
     | the grid | cans, photographs, a number | screens, objects, big words |
     | the slider | the box fills, 0 to 12 cans | any one control with visible states: a quantity, a filter, a date range, a setting; or a click that steps through states |
     | the flow | checkout, "Start my box", the order page | the product's own next pages: book, publish, send, invite, export |
     | the phone | the order page pulls back into the phone | the product's mobile page or app; without one, a notification or email on the lock screen alone |
     | days pass | the lock screen's date and time roll on between two notifications | skip it when the result is immediate |
     | the result | the box arrived, a photorealistic render | the real outcome: the stay, the published page live, the team using it; a render or a capture, never a framed picture of the product |

   - **Say what changed.** Write the sentence and the act list to `film/STATES.md` (a table: time, state, what it shows, words on screen), and tell the user in a line which beats you swapped and why. Don't stop to ask unless they want to approve it first.
   - **Decide in particular:** the nine tiles of the grid (the product's photographs, or big words: a number, one or two words each) and which one is the main screen you zoom into; the verb for the glass word; the one action the slider drives and the real states the screen goes through as it moves; the pages of the flow and the button that moves it on; what arrives on the phone; and the result.
4. **Capture the product's real screens.** Write `film/plans/desktop.json` and `film/plans/mobile.json` in the shape of `reference/plans/` (the format is at the top of `scripts/screens.mjs`): every state the film shows, at desktop 1440 × 1000 at scale 3 (square and wide) and phone 390 × 844 at scale 4 (tall). The reference captures the main screen in each state the slider drives (`box-00` … `box-12`), the checkout as one full page (`checkout`, scrolled in the film) and the order page (`order`). Record `rects` for the main screen's panel, the button that moves the flow on, and the checkout's "Start my box". Then:
   ```bash
   node scripts/screens.mjs film/plans/desktop.json film/assets/screens
   node scripts/screens.mjs film/plans/mobile.json film/assets/screens-mobile
   ```
   Never draw a screen of the product for the film: what the viewer reads as the product is a capture of it.
5. **Adapt `film/index.html`.** It is one file with labelled sections:
   - `DEFAULTS` and `FIELDS`: the wordmark (the film adds the period), tagline, pill label and glass word. Keep each within its field's `maxLength`.
   - `ART` and `TILE`: the nine tiles, drawn in a 1000-unit square from the product's photographs (or a number in big type), and `GRID` / `BENTO` for where they sit (`S.bento` and `S.big` in wide and tall, where the main screen's tile has the frame's shape).
   - `SCR`: the captured screens and their rects, copied from each `screens.json`; `SHOTS`, the captures the film loads.
   - `feedScreen` and `cansAt`: the main screen, a capture filling the frame (`S.feed.crop`, the part of the page each shape shows), and which captured state is on screen as the slider moves.
   - `boxReady`: the moment the slider's action completes: the summary row's old words leave and the new state and its button arrive (`SCR.m.row`, CSS px of the capture).
   - `C`: the times of the flow and the phone. `screenContent` and `page`: the product's pages in the screen (full frame in tall, in the phone in square and wide), pushed in turn; `placeButton`: the button that completes the flow, its label giving way to a spinner; `statusBar`: the phone's own bar, once the screen is in the phone.
   - `lockScreen`, `NOTES`, `noteCard`: the lock screen (`ART.wallpaper`: an ordinary photograph the owner chose, never the product's ad), the date and time rolling on, and the product's notifications in its own words; the last one becomes the dot that floods the frame.
   - `phoneBody`, `PHONE_SCREEN`: a photograph of an unbranded phone with its screen cut out, and the screen's rect in it. Use the reference's; never a phone of a real maker's design.
   - `arrival`: the real result, full frame, under an iris (`ART.arrival`, `ART.arrivalWide`).
   - `FL`, `INK`, `PAPER`, `ribbon`: the product's colours.
   - fonts: the reference bundles Fennick's (Bricolage Grotesque and DM Sans, SIL Open Font License). Use the product's own fonts if their files may be used this way; otherwise a close open-licence face.
   - `SHAPES`: each shape's layout (the table under "Shapes" in `style.md`). `squareLayout()` is the square film; `shapeLayout()` lays out wide and tall; `stage()` lays out the phone (`S.ph`), how far the checkout scrolls (`S.placeTop`), where the dot floods from (`S.flood`) and the cursor's keys from the slider on. Every scene draws from the current shape's layout (`S`): `S.feed`, `S.bar` (the toolbar and slider), `S.ph`, and the camera keys `S.camB`. The camera's zooms frame whole columns of the page: their edges fall in a gutter or margin, never through words.
   Keep the motion code as it is: every time, spring, camera key, cursor key (`CUR`, `CLICKS`, `HOLDS`, `C`), the iris, the floods and the hand-offs. Move a cursor key only when the thing it clicks has moved, in every shape.
   Keep every text size (the table under "Type" in `style.md`). If words don't fit, cut words; never shrink the type. Nothing meant to be read under 21 px on screen.
6. **Check stills against the reference.**
   ```bash
   node scripts/compare.mjs reference film out/compare-9x16.png --size 9:16
   ```
   Each renders both films at one moment inside every state, the reference above yours. Look at them properly. Then run the quick test and the phone check:
   ```bash
   node scripts/render.mjs film --size 9:16 --stress
   node scripts/render.mjs film --size 9:16 --phone
   ```
   The quick test fails if a word leaves the frame, overlaps another or falls under the size floor, with the words at their longest and at their shortest; its notes in `out/stress/report.json` about crops and overlays the film makes on purpose (the camera's zooms, the phone's small text) are not failures. Look at every sheet it writes to `out/stress/` for what it can't measure: a word clipped by a pill, a button or a rounded corner, a wordmark or headline too big or too small for its frame, a frame that looks crowded or empty. Then the phone sheets (`out/<shape>-phone.png`, one frame a second at 360 px wide): every word meant to be read must be readable (wide is smaller there by nature; judge it as a film watched sideways or on a laptop). Fix anything that fails `critique.md`, then compare again. Repeat until every score is 8 or more in every shape.
7. **Check the motion.** Look at strips around the fast moments: `node scripts/render.mjs film --size 9:16 --strip 0.5`, and also at 1.2, 2.3, 3.0, 3.6, 5.0, 5.7, 7.1, 8.35, 9.7, 11.5, 12.75, 13.3, 14.25, 14.6, 15.95, 17.0, 17.65, 18.8, 19.3, 20.85, 21.25, 21.7, 22.45, 23.95, 24.6, 25.0 and 25.35 seconds. Then **get a fresh judgement**: if your agent can start a sub-agent without this session's memory, give it `critique.md` and the images (the compare sheets, the stress and phone sheets, and the strips), nothing else, and fix the worst problems it finds; otherwise reread `critique.md` and score from the images alone, as a stranger would.
8. **Check it's repeatable:** `node scripts/render.mjs film --size 9:16 --check` must pass. Check the loop: `node scripts/render.mjs film --size 9:16 --times 0,26.99` must give two identical frames.
9. **Render.**
   ```bash
   node scripts/render.mjs film --size 9:16 --video --blur 4 --music --sound --poster 4.4
   ```
   This writes `out/9x16.mp4` (1080 × 1920): 60 fps, motion blur, a synthesised 120 BPM bed and effects from omnigami's own sound kit, loudness about −14 LUFS, and a poster (`out/9x16-poster.png`; 4.4 s is the grid of the product's things; pick another moment from your film if it reads better). For the user's own song, use `--audio song.wav` instead of `--music`; it's fitted to the film by `song.mjs`: it starts on a bar line and, near the end, lands one hit and closes and fades (cleanest with the song's stems in a `song-stems/` folder beside it: the drums stop on that hit). A song near 120 BPM fits the film's cuts (the zoom into the main screen lands at 6 s); `--from <seconds>` starts at another section of it. Run it in the foreground and wait for the file; expect several minutes.
10. **Write `unfold-film/README.md`:** what each file is, where to change a word, and the render command. Also write `out/CAPTION.md`: a post to share the film on X or LinkedIn, under 280 characters, in the product's own words, with its URL; no hashtags unless the user asks.
11. **Report:** the MP4, the poster, the caption, the act list, the final scores, and the one change that would improve it most.

## Rules

- **Only what the product does.** Every state shows a real feature in the product's own words; sample data only, no real customer data.
- **Let each result land.** The take is fast, but what a click changes stays on screen long enough to see and read before the next change (the full box holds a second before Checkout is clicked; the order page holds a second before the phone; each notification is read before the next). If the product's words need longer, cut words; never shorten a hold.
- **Keep the take.** No cuts, fades or blur-ins. If a new scene can't be made out of the last one, change the scene, not the rule.
- **Keep the motion.** Timing, springs, camera and cursor come from the reference. If content doesn't fit, shorten the words before changing a shape.
- **Keep the type size.** No text meant to be read under 28 px on screen in square, or 21 px in wide and tall. If words don't fit, cut words.
- **Each shape laid out for its frame** (if the user asks for square or wide). Never crop square into wide or tall, or shrink it into them; give the shape its own numbers in `SHAPES`, and keep the take, the times and the hand-offs the same in all three.
- **Keep the engine rules** (`style.md`): `seek(t)` paints from its arguments only; no clocks, no `Math.random`, no timers, no network; CPU-backed canvases; `ctx.reset()` every frame; every file inside `film/`.
- **Only the user's brand.** No other company's name, logo or UI: the phone is the reference's unbranded photograph, its status bar and lock screen are generic, and no maker's OS feature is named or copied.
- **A story that holds.** One thing travels the whole film; every step is real, in the product's order, once; the end is the real result.

## Files

- `reference/`: the Fennick film, tall (`index.html`), its capture plans (`plans/`) and captures (`assets/screens`, `assets/screens-mobile`), Fennick's photographs and renders, the unbranded phone and the lock-screen wallpaper (`assets/art/`), `kit.js` (springs, text fitting, seeded noise), fonts (Bricolage Grotesque and DM Sans, SIL Open Font License). Fennick is a fictional company made for omnigami's examples.
- `scripts/`: `capture.mjs` (brand from a URL), `screens.mjs` (the product's real screens, from a plan), `render.mjs` (stills, strips, the quick test, checks, MP4s), `compare.mjs` (reference against yours), `preview.mjs` (a local preview that plays every shape and edits the words), `music.mjs` (the bed), `song.mjs` (fits a supplied song) and `sfx.mjs` (effects from the kit in `sounds/`), `chrome.mjs`.
- `style.md`: the grammar, the shapes, the acts, the motion numbers, the type table, the banned list.
- `critique.md`: how to score and what to hunt for.
- `spec.md`: the measurements of the original the reference was built from.

Style inspired by [@twoclipping's video](https://x.com/twoclipping/status/2104446706741825818). This skill is an independent style study; he did not make or endorse it.

This skill is omnigami's (https://omnigami.ai), © 2026 Auberon LLC. Use what it makes for anything,
commercial work included, and change the skill for your own use; don't redistribute or
sell the skill. Full terms: https://github.com/omnigami-ai/skills/blob/main/LICENSE.md
