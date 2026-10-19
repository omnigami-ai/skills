# Fennick: three teas, twice

Fennick is a fictional company made for omnigami's examples. A 20-second
reel with a 120 BPM bed. Revision 7 carries the approved portrait choreography
into native square and wide layouts. Same grammar as the Fernwise reference,
with the brand's Bricolage Grotesque, DM Sans, paper, ink and flavour colours.

| Time | Story |
| --- | --- |
| 0–2.10 | Wordmark-only reveal: original FENNICK letter outlines wipe left to right at .02–.30 s; the existing seed settles down above the K at .30–.50 s; the tagline rises at .50–.80 s and reads for 1.0 s before the outgoing push. No container. Whole-scene push into the first can. |
| 2–5.75 | Three cans, 1.25 s each, with tea and ingredients; one counter 01–03 / 03 · INGREDIENTS. Old captions clear before new captions enter. |
| 5.75–9.50 | The same three cans with tasting notes and “330 ml · No sugar added”; 01–03 / 03 · TASTING. |
| 9.50–11.15 | Pear pulls continuously into its real captured shop photograph; .65 s pull and 1 s sharp hold. |
| 11.15–12.65 | Shop washes pale; 3 tea blends, 25 calories, 330 ml count up with a .12 s stagger and readable holds. |
| 12.65–15.15 | Whole-scene push into seven orbiting source photos; cream headline rises as a block; original rectangular tiles converge and keep drifting/growing as a stack, with their photos intact. |
| 15.15–17.60 | Horizontal push to the real builder; cursor clicks at 15.58, 16.00, 16.42; actual captures reach 3/12 and hold >1 s. |
| 17.60–20 | Vertical push into the wordmark-only ending. Letters wipe at 17.72–18.10 s, seed settles at 18.10–18.42 s, address rises at 18.42–18.80 s. The complete lockup pushes in gently during the final 1.2 s. |

## rev 4b: wordmark-only identity

`markReveal`'s `shape: 'none'` still draws a fading seed/container, so this
portrait uses a film-local path with `kit.motion.out` and `settle` instead.
Both phases draw the unchanged local wordmark SVG: letter pixels below
source y=51, seed pixels above it. No separate mark, squircle, new artwork
or logo-specific contour morph is introduced. Edited company names use the
same wipe on fitted type and omit Fennick's seed. The open line is fully
landed for 1.0 s; the final address for 1.2 s. Other scenes and shapes retain
their existing choreography. Evidence and final video: `out/rev4b/`.

## Sources and claims

- `cast/fennick/brand.md` and `cast/fennick/app/data.js` are the source for
  every product name, tea, botanical, tasting note, nutrition figure,
  company description and address. “Bright citrus”, “Deep berry”, “Slow
  warmth”, “Sencha”, “Assam” and “White tea” condense those tasting notes or
  name the actual tea. The description is editorial wording of the brand's
  “Sparkling botanical tea, in cans, by subscription.”
- 3 tea blends: the three entries in `data.js` `flavours`. 25 calories:
  `perCan.kcal`. 330 ml: `perCan.size`. “No sugar added”: `perCan.sugar`.
  The reel does not imply zero total sugar.
- The first three ingredient lines are the exact `flavours[].made` values.
  Second-pass tasting lines are `flavours[].notes`, with the Yuzu line
  shortened to fit. The orbit line is the brand's own tagline.
- Cans, trio and box: existing photographic renders from
  `cast/fennick/app/art/`, subject crops from its `cutouts.js`. Square WebPs
  retain the real subject aspect ratio on transparent padding. No products
  are drawn. Source captions/briefs live in `cast/fennick/renders/`.
- Brewing and serving: existing `app/art/brewing.jpg` and `serving.jpg`.
  Their square orbit crops preserve the photographs.
- Captured UI: `plans/mobile.json` and `plans/desktop.json` against the
  working cast app, output in `assets/screens/`. Real DOM rects locate the
  can handover and the plus buttons. Screens include the shop's real $2.42
  subscription price; the film makes no separate price claim. Fennick's
  brief permits its source prices. The expanded portrait builder also shows
  its fixed sample dates: “next box Wed 11 Nov” and “First box ships Thu 15 Oct”
  (`cast/fennick/app/data.js`, `cadences` / `firstShip`). No checkout/customer data appear.
- Mark and wordmark: approved `cast/fennick/{mark,wordmark}.svg`, copied
  into `assets/`. The seal uses the master’s exact even-odd path. The
  custom capitals are packaged as `assets/fonts/fennick-wordmark.ttf`
  so the unmodified `kit.motion.markReveal` animates them as normal text.
  `plans/refresh-brand.py` builds it directly from the master outlines and
  spacing; edited brand names use fitted Bricolage instead. The shop’s
  Bricolage and DM Sans fonts and their OFL files remain in `assets/fonts/`.

The shop has no search. The last proof therefore shows a real box-building
action, preserving the reference's short “find/choose an item” slot rather
than inventing search UI. Tall uses the mobile layout; square/wide use the
desktop capture. Recapture on any local port by updating the two plans' URLs.
All film assets are inside this folder; no cast server is needed to play it.

Historical portrait revision 2 (2026-10-15; superseded by revision 3 below): the surviving Yuzu tile begins docking at
11.48 as the other tiles fold into it; its container rounds continuously
and expands onto the real Yuzu thumbnail in the box builder. The cursor
glides in from outside the card at 12.01, presses and releases the real
plus buttons at 12.35, 12.68 and 13.01, and glides out at 13.10–13.28.
Captured counts and click sounds change at those same click times. The
existing seed logo path and assets remain unchanged; the relay outline
morphs into that original mark. Only 9:16 was reviewed and exported here.

Style inspired by [@justinmfarrugia's video](https://x.com/justinmfarrugia/status/2103822390870569266).
An independent style study; the creator did not make or endorse this film.


## Portrait revision 3 (2026-10-15)

This supersedes the portrait motion timings above. The story, catalogue
items and claims stay the same. The original logo was retained in this
revision; revision 3c below replaces it. `kit.motion.markReveal`
now owns the open and end; `iris` uses the actual container footprint and
bounded radius growth; `converge` folds the orbit tiles into the iris's
same cream seed at frame centre. This replaces revision 2’s thumbnail
docking; no photo-to-thumbnail landing is claimed for revision 3. Entrances use `out`/`settle`; camera moves use `inOut`.
The headline leaves 10.96–11.10 before convergence begins. The proof opens
11.64–12.20; the reverse iris closes 13.12–13.65; the address settles at
14.50 and the end pushes in gently through 15.00. Only 9:16 is revised,
reviewed and exported. Square and wide haven't had the same review yet.

The real catalogue is recaptured with `plans/portrait-range.json` at
546 px wide: complete Hibiscus and Pear cards, the pull still landing on
Pear's source photograph. The larger 390 px builder is recaptured with
`plans/portrait.json`; the date, subscription price and cadence are the
shop's own sample state. The frame margins are 16 px; the catalogue is
88% high and builder 90.3% high. All three real plus buttons use
`kit.motion.drawCursor`, with hits at 12.54, 12.82 and 13.05 s shared by
the 1/12, 2/12 and 3/12 captures, compressed captured button pixels and
click sounds. The seed path and logo assets were unchanged in revision 3;
revision 3c replaces them below.


## Portrait revision 3c — Brewer’s seal and refreshed cans (2026-10-15)

The approved FN seal replaces the old seed everywhere, including the
header and count transition. Opening and ending use only the generic
`markReveal` container → mark → lockup move, with the exact approved
compressed capitals. Every can, trio, box and serving photograph now uses
the regenerated branding in `cast/fennick/app/art/`; the unchanged no-can
brewing photo is copied again from that source. The square cutouts use
the shop’s current `cutouts.js` measurements, preserving the real Pear
photo handover and each source image’s aspect ratio.

All four capture plans were rerun against the updated working shop:
`portrait-range`, `portrait`, `mobile` and `desktop`. Crop bounds and
card dimensions stay fixed; the DOM’s newly measured photograph bounds
are recorded alongside the captures. Only the 9:16 cut was rendered and
reviewed. All approved revision-3 timing, easing, irises, cursor clicks,
camera moves, shutter settings, music and cues are unchanged. The final
lockup settles at 14.50 and holds with the same 1.8% push through 15.00.

Evidence: `out/rev3c/` contains check/stress results, nineteen twelve-frame
logo strips, review sheets and the media audit. Current delivery:
`out/9x16.mp4`, rendered with four blur samples, music and sound.


## Portrait revision 4 (2026-10-15)

This supersedes all earlier portrait timing and logo handoffs. The current
cut lasts 20 s: items begin at 2 s and get 1.25 s each, including
more than 1 s fully landed for the last detail line. Whole-scene pushes
replace every iris. Orbit tiles retain their photographs, aspect ratios
and rounded corners as they converge into a stack, then slide away. No
item becomes a dot or circle. Side margins are 75.6 px (7% of 1080);
containers sit inside the 192 px top/bottom safe frame (10% of 1920).
Logo moments use only the generic `kit.motion.markReveal`. The end address
settles with 1.2 s remaining. Claim sources and sample data above still apply.

Fennick restores the original FENNICK wordmark converted to vector outlines with its newly
redrawn seed. Exact SVG masters are copied from `cast/fennick/`. Every can,
trio, box and lifestyle image comes from its current `app/art/`. Both
portrait capture plans were rerun against that updated working shop.
The cursor clicks the actual three plus buttons at 15.58, 16.00 and 16.42 s;
pressed captured pixels, state changes and click sounds share those times.

Only 9:16 is revised, checked and exported in this round. Square and wide
are earlier revisions; do not present their old MP4s as revision 4.


### Revision 4 independent-review repairs

Old item captions and counters now clear before any new caption enters;
there is one readable counter at a time. Photos may overlap briefly during
their moving handover. The orbit headline enters as one cream-colour block
with a rise and fade, replacing the earlier word-by-word green typing. Its
stress box is narrower so every edit stays inside the ring's hole. The
converged photo stack keeps drifting and gently growing into the proof's
whole-scene push; it has no static hold and does not turn into a dot. The
end seed begins before the outgoing card clears, avoiding blank frames.
These descriptions supersede all earlier animation descriptions, including
the original storyboard above.


## Revision 7 — square and wide (2026-10-16)

The approved 20-second portrait paint path and sound cues are preserved.
16:9 and 1:1 now follow its section times, item reading holds, wordmark and
seed reveals, overlapping pushes, rectangular photo convergence and three
box-builder clicks. Wide places the can beside its captions and the three
numbers across the frame; square stacks them.

`plans/rev7-range.json` captures one complete Pear catalogue card from the
working shop at 680 CSS px, into `assets/screens/rev7-range/`. This replaces
the unreadable full desktop catalogue in these two shapes. The real desktop
flavour picker is retained, with changes confined to its counter, quantity,
minus, reset and pressed-button rectangles. No UI is rearranged inside a card.
The source copy, claims, photos and logo are unchanged.

Deliveries and measured review: `out/rev7/16x9.mp4`, `out/rev7/1x1.mp4`,
`NOTES-rev7.md`. The older exports outside `out/rev7/` are historical.
