---
name: app-store-preview
description: Make an iPhone App Store preview from the app's real screens, with a store-spec MP4 and a matching social promo in tall, square and wide. Use for iOS app previews, store videos or an app promo paired with a store submission; use a general product-film skill for other launch videos.
---

# App Store preview

Make one film with two cuts of the same story, from the app's real screens:

- **The store cut** (`886:1920`, 30 fps): an App Store preview prepared to Apple's published
  specifications for iPhones with large and medium displays. Only the app, full frame, with
  short captions in a pill, fingertip touches, the app's own navigation and one music bed.
- **The social cut** (`9:16`, `1:1`, `16:9`, 60 fps): the same moments for posting, on a dark
  ground in the app's own colours: numbered chapters, a two-line headline with an italic
  accent phrase, the whole app inside a phone, callout chips under the headline with a dot on
  what each names, a three-line recap and an end card.

Start from the finished film in `reference/`: Fernwise, a fictional plant
care app made for omnigami's examples (story in `reference/STORY.md`). Its
toolkit stays; its screens, words, moments and colours become the user's.

Read `style.md` before you build and `critique.md` before you judge.

**Why one film:** both cuts tell the same four or five moments, so they share the words (a
moment's caption in the store cut is its headline in the social cut), the captures, the
screen machinery and the music. A word changed once changes both cuts; the preview switches
between them like shapes; one check covers both. Each cut keeps its own timeline: the store
opens on a frosted title, the social cut on a hook.

## Start or resume

- Check Node 20+, ffmpeg (with ffprobe) and a local Chrome-family browser
  (`scripts/chrome.mjs` finds it; `CHROME_PATH` overrides). Explain anything
  missing.
- You need the app's real screens. Ask, in this order of preference: a
  build that runs in a browser or simulator you can drive with the capture
  plan (a web build, a local dev server, a demo URL); otherwise screen
  recordings or screenshots from the device at native resolution (portrait,
  1170 × 2532 or larger), with a sample account. Never capture customer data,
  and never draw an app screen.
- Ask once for what the app can't tell you: the one job people come to it
  for, which features need a subscription or sign-in, the store name, and
  (for the social cut) the rating to quote, if any. If the user wants no
  questions, use verified app and site facts. Omit ratings without a source;
  keep any unverified purchase or login requirement unresolved in the review.
- If `app-preview/film/STORY.md` exists, this is a revision: work on that
  film.

Set up a first film:

```bash
mkdir app-preview && cd app-preview
cp -R "$SKILL_DIR/reference" reference && cp -R "$SKILL_DIR/reference" film && cp -R "$SKILL_DIR/scripts" scripts
rm -rf film/assets/screens film/plans/* film/out
npm init -y >/dev/null && npm i -D puppeteer-core
```

`SKILL_DIR` is this file's folder. `reference/` stays untouched, to compare
against.

## Learn the app, then write the story

1. Use the app as a new user would. Find the one job it does, its own words
   for it (its store subtitle, its onboarding, its empty states), its
   colours and fonts, its mark and icon.
2. Write `film/STORY.md` in the shape of `reference/STORY.md`:
   - **the viewer and their goal**, in the app's terms;
   - **four or five moments**, each one real action with a visible result
     on the app's screen, in an order that makes one story (the reference:
     water the thirsty plants, add one by name, rescue a pale one, find it
     the right light);
   - for each moment: its caption (a few words; it is also the social
     headline, with the accent phrase in `*stars*`), the screens and states
     to capture, the taps, and the result that answers the caption;
   - the payoff, the end frame's line, and the subscription disclosure;
   - the times on the 120 BPM grid, 25–28 s in all (Apple allows 15–30);
   - every number on screen with its source. No prices, dates or seasons,
     in the captions or on the captured screens.
   Read it back as a stranger would: if a result doesn't answer its caption,
   change the moment.
3. Show the user the moments in a few lines and ask for one review, unless
   they asked for an unattended run. Never take silence as approval.

## Capture the real screens

1. Write `film/plans/app.json` in the shape of `reference/plans/fernwise.json`
   (the format is at the top of `scripts/screens.mjs`):
   - every state the story shows, in order, as `click`, `type`, `eval` and
     `capture` steps, each the **full screen at scale 3** (390 × 844 pt at
     3× is 1170 × 2532, so the 886 × 1920 frame never enlarges it);
   - a scroll as 11 captures at eased offsets (the reference's
     `rescue-scroll-00` … `10`), so the film plays it frame by frame;
   - close-ups at 5–6 for anything the social cut shows alone (the
     reference's `card-monty`, `ring-*`);
   - `rects`: every element a tap, a callout or the camera uses, by name,
     recorded with `{ "rects": "state" }` after each state.
   Hide the status bar's clock or anything dated with `hide` or an `eval`
   if it shows a date; 9:41 is a time and may stay.
2. Run it: `node scripts/screens.mjs film/plans/app.json film/assets/screens`
3. Look at every capture. Fix the plan until each state is right.

If the app only runs on a device, record each state with the device's
screen recording or screenshots, crop the status bar to a clean one
(9:41, full signal and battery), and write `screens.json` by hand: each
capture's file, `scale` (pixels per pt) and `rect` `[0, 0, 390, 844]` (or
the device's points), and the rects you need per state.

## Build the film

Edit `film/index.html`. Its sections are labelled KEEP and ADAPT.

- **ADAPT the words:** `DEFAULTS` and `FIELDS`. Update the HTML title and
  example-only fictional-company footer for the user’s product; retain the
  linked style credit. `cap1` … `cap4` are each
  moment's caption and headline, `cap5` the store payoff, `line` the store
  cut's opening line, `tagline` the end, `plus` and `disclosure` the
  subscription; the social cut's chapters, recap, rating, button and
  `where` line (no store badges; plain words like "Free on iPhone").
- **REPLACE the brand files:** `assets/brand/mark.svg`, `mark-cream.svg` and `icon.svg`
  become the user's own mark and icon. Remove the fictional rating row in
  `endCard` when no sourced rating is available.
- **ADAPT the colours:** the app's cream, ink and accent; `GROUND` is the
  app's darkest brand colour taken darker to the edges (style.md says why
  the social cut goes dark).
- **ADAPT the moments.** Each cut has a timeline and a screen sequence:
  - social: `TT` (times), `M_TALL` (chapters), `SEQ_T` (`[time, capture, how it arrives]`:
    `cut`, `push`, `sheet`, `fade`, or `water` with a reflow spec), `TAPS_T`, `HEADS_T`,
    `CHAPTERS_T`, `CALLOUTS_T` (each quotes the screen it points at, so it lives in code
    beside its rect);
  - store: `TS`, `M_BASE` (the caption pill's chapters, `PILL`), `SEQ_S`, `TAPS_S`; the
    paid-screen predicate in `drawPill` tags subscription footage while it is on screen.
  Use the arrival your app really uses: `push` for a screen it pushes, `sheet` for one it
  presents from below, `fade` where only a region changes, `cut` for typing.
- **ADAPT the first moment's handoff** (`tallHook`, `tallMonty`, `morph`, `waterStep`): in
  the reference the first plant's ring becomes its card's photo; the card is tapped and
  travels into its new row as the phone rises, changing on the way (container reshapes,
  photo and name travel, the old line and button leave, the new line and check arrive).
  A list reflow (`WATER0`…`WATER2`) is cut into bands from the after-capture: the header,
  the band that moves up, the slot that opens, the band below. Measure every band edge in
  your captures; a slot is open exactly as long as the card's move (`LAND`).
- **KEEP the motion contract:** one curve for every travel, measured from the reference
  video's phone rise: `snap` (expo out) over 0.85 s via `glide()`. Fades are `inOut`.
  Beats: the headline (or caption) changes, then the screen moves, then the next words
  land; one change at a time, each held to be read. Capture the app's own pressed/focused
  states (`scripts/capture-pressed.mjs` uses Chrome's forced pseudo-classes) and show the
  pressed capture for a few frames from the hit. Touches are fingertips (`tallTouch`) that
  settle onto the control, press, ripple and lift; never a desktop arrow. Marks use
  `markReveal`, faded up only once the tile has grown past a dot; the name joins within
  0.5 s (`nameInk` keeps a long name's ink hidden until it is inside the margin).
- **KEEP the whole phone in social:** the full screen in a phone, sized by `SL()` per
  shape (tall and square: words on top, phone below; wide: words left, phone right).
  Never crop a screen; nothing at its top or foot is cut. Never zoom or crop the store cut.
- **ADAPT the cues and the music**, keeping one bed for both cuts. Sounds sit on their
  visual onset; swishes only on full-width moves.
- **KEEP** the frame sizes, `fpsBySize` (social 60 fps, store 30), the store cut's
  full-frame screen, the toolkit, and `template.encode` (the store MP4's Apple spec).

Fonts: copy the app's own (with their licences) into `film/assets/fonts/`.
A canvas can't set variable-font axes, so pin any the app sets
(`python3 -m fontTools.varLib.instancer in.ttf SOFT=100 WONK=0 -o out.ttf`).

## Review

1. Sheets and phone checks for every size:
   ```bash
   node scripts/render.mjs film --all --times key --sheet
   node scripts/render.mjs film --all --phone
   ```
   Then 12-frame strips at every fast move, in the store size and in tall:
   `node scripts/render.mjs film --size 886:1920 --strip <time>` (the
   opening frost, each watering, each push, the scroll), `--size 9:16 --strip <time>`
   (the card into its row as the phone rises, a headline change, the phone
   dropping, the end card). Check every frame of a card's landing: the row must
   never be missing.
2. Score with `critique.md` and fix the worst three problems. Before
   shipping, get a fresh judgement: if your agent can start a sub-agent
   without this session's memory, give it `critique.md`, `STORY.md` and the
   images only, and fix what it finds; otherwise reread `critique.md` and
   score from the images alone. Nothing ships below 8. After four rounds,
   report what remains.
3. Repeatability and the quick test:
   `node scripts/render.mjs film --all --check --stress`.

## Render

```bash
node scripts/render.mjs film --all --video --blur 4 --music --sound --poster 5
```

This writes `out/886x1920.mp4` (the store cut at 30 fps, encoded to Apple's spec by
`template.encode`), `out/9x16.mp4`, `out/1x1.mp4` and `out/16x9.mp4` (60 fps), all with
motion blur, music and effects around −14 LUFS, and a poster for each. It takes several minutes: run it in the foreground and wait for all
four files.

## Verify Apple's specs

Run `node scripts/verify-store.mjs out/886x1920.mp4 out/store-specs.json`
for the technical checks. Check every line on the store MP4 and write the numbers into
`out/REVIEW.md`. Use [Apple's preview guidance](https://developer.apple.com/app-store/app-previews/)
and [encoding specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/app-preview-specifications/)
(checked 2026-10-15; recheck before a real submission). Technical verification
and a content review establish readiness; Apple makes the acceptance decision.
ffprobe verifies the technical rows; inspect the film for the content rows.

```bash
ffprobe -v error -show_entries format=duration,size,bit_rate:stream=codec_name,profile,level,width,height,r_frame_rate,avg_frame_rate,field_order,pix_fmt,bit_rate,sample_rate,channels -of default=nw=1 out/886x1920.mp4
```

| Rule | Must read |
|---|---|
| Size | 886 × 1920 (portrait; landscape would be 1920 × 886) |
| Length | 15–30 s |
| Frame rate | 30 fps or less |
| Video | h264, profile High, level 40 or lower, progressive, yuv420p |
| Video bit rate | about 10–12 Mbps (`bit_rate` of the video stream) |
| Audio | aac, 2 channels, 44100 or 48000 Hz, about 256 kbps |
| File | .mp4, .mov or .m4v, under 500 MB |
| Content | only the app's own UI captured at native resolution and downscaled to the accepted delivery size: no device frame, hands or people, no zoom past the capture |
| Transitions | the app's own navigation (its pushes and sheets) and list moves, dissolves, fades and cuts; nothing the app doesn't do |
| Text | captions held long enough to read (the reference holds each for its whole moment, 2.5 s or more) |
| Touches | fingertip hotspots allowed; no fingers or hands |
| Sound | one music bed for the whole preview (UI sounds allowed) |
| No | prices, dates, seasonal or timely references, other platforms, Apple marks or store badges |
| Subscriptions | every feature that needs a subscription, sign-in or purchase is tagged where it appears and named in the end frame |
| Poster frame | the frame at 5.0 s (Apple's default) is a result with its caption: check `out/886x1920-poster.png` |
| Rights | every image, font and sound is yours or licensed for marketing in all territories |

If any line fails, fix the film or the encode spec and render again. Upload
the store MP4 to the matching iPhone preview slot in App Store Connect.
The bundled Fernwise cast film is a fictional example, not a submitted app.
For a real submission, use screen footage from the shipping iOS build or
simulator and confirm it matches that build's UI and behavior.

## Deliver

1. Keep a linked style credit on every review page. For a cast example,
   label the company fictional on that page. Run `node scripts/preview.mjs film` and give its localhost address: it
   plays every size and edits the words; saved edits need a new render.
2. Write `README.md` (the files, how to preview, how to change a word, how
   to render), `out/REVIEW.md` (scores, the ffprobe numbers against the
   table) and `out/CAPTION.md` (a post under 280 characters for the social
   cut, in the app's own words). Hand over the four MP4s, the posters, the
   Apple numbers, and the one change that would most improve the film.

## Revisions

For "hold the second moment longer" or "show the search first", edit
`STORY.md` and the film; keep what was approved and the user's saved words;
recapture only the states that changed; rerun the checks and the Apple
verification; render again.

## Hard rules

- Real screens only, captured; sample data only; never draw an app screen.
- The store cut shows only the app: no device frame, hands, people, App
  Store badges or Apple marks; no prices, dates or seasons; no zoom.
- Every subscription feature is tagged and disclosed. Every number on
  screen has a source in `STORY.md`.
- `seek(t, values)` paints from its arguments only: no clocks, unseeded
  randomness, timers or network. CPU-backed canvases, reset every frame.
- Every file the film loads lives inside `film/`.

## Files

- `reference/`: Fernwise's film (`index.html`), `STORY.md`, the capture plan
  (`plans/fernwise.json`), the captured screens (`assets/screens/`), the
  mark and icon (`assets/brand/`), and the fonts with their OFL licences
  (Fraunces upright and italic pinned to SOFT 100, WONK 0; Nunito).
- `style.md`: the store cut's rules and the social cut's measured grammar.
  `critique.md`: the review.
- `scripts/`: `screens.mjs` (real screens in states), `render.mjs` (stills,
  strips, checks, MP4s, the encode spec), `preview.mjs`, `music.mjs`, `song.mjs` (fits a supplied song),
  `sfx.mjs` with the sound kit, `capture.mjs`, `chrome.mjs`, and
  `verify-store.mjs` (ffprobe verification for the store MP4).

Fernwise is a fictional company made for omnigami's examples; its app,
data, ratings and people are invented.

Social cut: [Style inspired by @wallacex227's video](https://x.com/wallacex227/status/2103245000989659422). An independent
style study: none of its words, app or assets, and @wallacex227 didn't make
or endorse it. Apple and App Store are trademarks of Apple Inc.; this skill
isn't affiliated with or endorsed by Apple.

This skill is omnigami's (https://omnigami.ai), © 2026 Auberon LLC. Use what it makes for anything,
commercial work included, and change the skill for your own use; don't redistribute or
sell the skill. Full terms: https://github.com/omnigami-ai/skills/blob/main/LICENSE.md
