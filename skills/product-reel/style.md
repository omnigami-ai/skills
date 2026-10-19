# Product reel: style

A readable reel of everything a company makes (current portrait cuts: 20 s
Fennick, 21.25 s Fernwise): one item per readable slot, each with
its name, a detail line and its kind standing huge and pale behind it; the
last item pulls back into the real catalogue screen; the catalogue's numbers
count up; every item orbits one line; a real search types into real results;
the name and the address. Tall first, laid out again for square and wide.

Style inspired by @justinmfarrugia's video
(https://x.com/justinmfarrugia/status/2103822390870569266), measured frame by
frame (`reference/study/shop-reel/` in omnigami's repo: 1920 × 1080, 30 fps,
15.07 s, 120 BPM from the sound). Take the grammar, never the content: no
words, products, marks or screens from it. He didn't make or endorse this
skill.

## What the reference does, measured

Times in seconds from the reference; sizes as fractions of its 1080 px short
side (U = 1% of it).

| From | To | Section | Measured |
|---|---|---|---|
| 0.00 | 1.83 | Logo open | Dark field (#121212). A dot at 0.03, held to 0.37; the mark's strokes grow out of it, one after another, complete by 0.80. The wordmark is uncovered outward from the mark, 1.00–1.30 (a clip growing from the mark's edges, letters still). A small line fades in at the foot at 1.17. The mark collapses to a filled dot at 1.63. |
| 1.63 | 1.97 | Iris | The dot grows into a circle, accelerating, until it fills the frame (0.34 s); the first item is already inside it. |
| 2.00 | 6.00 | Items | 8 items, one a beat (2.0, 2.5 … 5.5). Each change is a vertical push of 6 frames (0.20 s) landing on the beat: the new item rises in from the bottom edge as the old leaves through the top, with heavy motion blur. The ghost word slides the same way and cross-fades. The name and brand roll through a masked slot; the price counts from the last item's value to this one's over about 0.4 s. A segmented bar (8 parts, 3 px, 10 px gaps) fills the current part across its beat, with "03 / 08" above its left end. |
| 6.00 | 7.25 | Pull back | All words leave (0.07 s); a white tile rounds in around the last item (6.07–6.20); the camera pulls back, front-loaded, 6.27–7.20, until the item is one tile in a dense grid of everything (about 10 × 6), the grid filling outward from it. |
| 7.25 | 9.07 | Numbers | The grid blurs and washes pale (0.25 s). Three numbers count up a beat apart (7.55, 8.05, 8.55), each rising into a mask as it counts, about 0.45 s, ease-out; thin rules between them. The mark appears small at 8.75, spins and grows until it covers the frame (0.3 s). |
| 9.07 | 11.97 | Orbit | Dark field. A ring of about 16 rounded tiles, seen in perspective, flies out from the centre (9.1–9.8) and keeps turning; far tiles darker. A three-line headline types on word by word, letters rising into a mask (9.6–11.0), held to 11.4, then out; the ring folds into the centre (11.6–11.9). |
| 11.97 | 13.63 | Search | The folded tile becomes a circle that opens onto a light field (0.25 s). A search bar types a word at about 16 letters a second (12.27–12.65); results open below it, a row every 2 frames; a highlight walks down the rows; fade to blank at 13.45. |
| 13.63 | 15.07 | End | The mark draws itself inside a faint widening ring (13.63–14.0); the wordmark is uncovered outward (14.0–14.33); the address rises in a letter at a time (14.33–14.6); held to the end. |

Measured type (wide): ghost word cap height 0.31 of the frame's height, colour
4% darker than the field; item name 7.6 U; brand above it 3.4 U, grey; price
4.2 U; header 2.6 U; counter 2.8 U; count-up numbers 15.7 U with labels 3 U;
headline 10.5 U; wordmark 13 U. Product images about 0.4 of the frame's
height, floating over a soft ellipse shadow.

## Where we improve on it

- **Type a phone can read.** The reference's secondary text (2.6–3.4 U) is
  small on a phone. Ours: nothing meant to be read under 3 U in tall and
  square, and the quick test's floor (28 px at 1440 px short side) everywhere.
- **Say what it is.** The reference never says what it sells until the end.
  Ours puts one line under the name in the open ("Plant care for people who
  forget to water.").
- **Every item is the company's own,** photographed (studio cut-outs, never
  drawn), and every screen is a real capture: the pull-back lands in the
  product's real catalogue screen and the search is the product's real search,
  typed, with its real results. The reference's grid was third-party products
  and its search box was drawn for the film.
- **The detail line is useful,** not a price for its own sake: what the item
  needs or does, with its number ticking from item to item (done as the item
  lands, so a still on the beat is true).
- **The headline sits in the ring's hole,** never over tiles.
- **Each shape is laid out for its frame,** not cropped.

## Format

- 120 BPM bed: a beat .5 s, a bar 2 s. Portrait duration follows the
  reading holds (20 / 21.25 s); earlier square/wide timing was 15 s.
- 60 fps, rendered with motion blur (`--blur 4`): the pushes need it.
- Tall first (1080 × 1920), square (1440 × 1440), wide (1920 × 1080).
- Captions only, no voice. Everything reads with the sound off.

## Revision 5 state and hold rules

- **No whole-capture crossfades for a state change.** Keep one immutable
  capture. Composite the next real capture only inside each changed element's
  measured box (counter, progress segment, stepper, checkbox or button).
  Give each element its own press-timed motion: roll a count, fill a bar,
  draw a check or reveal a pill from the press point. Unchanged pixels stay
  identical; measure consecutive uncompressed frames outside the changed
  boxes and require exactly zero changed pixels. Isolate the card from the
  independently moving cursor for this measurement, then review both together.
- **Scenes keep living.** During reading holds use one small, meaningful
  motion: hover toward the next control, ease a bar, roll a count, bring in
  a row or badge, draw a check, drift the cursor, or move the whole container
  by at most 1.5% of the frame. Keep the UI's scale fixed inside it. One
  focal motion at a time; it must support the line being read.
- **One image at each point.** Transparent product photos exchange across
  a shared mask edge rather than overlapping in a dissolve. The catalogue
  handoff uses the same rule. A statistics wash filters one captured screen
  beneath a single matte; it never blends two copies of its text.

## The sections (reference film times)

Portrait revision 4 supersedes the earlier portrait timing. Both films use
`kit.motion` for easing and cursors; revision 4b gives wordmark-only Fennick
a local mask/seed path, described below. Square/wide retain the
older choreography below and have not been rendered or reviewed in this round.

| Moment | Fennick | Fernwise | Motion / reading hold |
| --- | --- | --- | --- |
| Open | 0–2 | 0–2 | Fennick rev 4b: wordmark wipe .02–.30, seed drop .30–.50, line .50–.80, 1.0 s reading hold. Fernwise: generic `markReveal`, line settled .72, readable until 1.80. |
| Open push | 1.80–2.10 | 1.80–2.10 | Whole-scene horizontal slide, `inOut`; first item rises and fades from 2.00. |
| Items | 2–9.50 | 2–10.75 | Six / seven slots of 1.25 s. Each last detail line lands .2204 s into its slot: 1.0296 s fully readable. Overlapping `out` lifts retain each photo's own proportions. |
| Pull / catalogue | 9.50–11.15 | 10.75–12.40 | .65 s whole-container `inOut` pull; sharp catalogue holds another 1.0 s. |
| Counts | 11.15–12.65 | 12.40–13.90 | .12 s stagger; last label settled .49 s after start, held 1.01 s before the outgoing push begins. |
| Push / orbit | 12.65–14.60 | 13.90–15.85 | Vertical push .30 s, tile fly-in .40 s; headline rises/fades as a block over .30 s, then reads for 1.30 s. |
| Shape-preserving convergence | 14.75–15.15 | 16.00–16.40 | `out` travel toward centre; original tiles scale only to 68%, keep their corner ratio and keep every photo. They stack, then slide out. No circle/dot reduction. |
| Real proof | 15.15–17.60 | 16.40–18.85 | Horizontal push .30 s. Fennick's real captured selection hits at 15.58 / 16.00 / 16.42, with cursor and button press on the same frames; final 3/12 state holds >1 s. Fernwise types the real “mon” captures at 16.80 / 16.92 / 17.04. |
| End push / lockup | 17.60–20.00 | 18.85–21.25 | Vertical push .30 s; Fennick's wordmark wipe 17.72–18.10, seed 18.10–18.42, line 18.42–18.80; Fernwise uses generic `markReveal`. Address settled at 18.80 / 20.05, held 1.20 s to the final frame. |

### rev 4b: wordmark-only logos

Fernwise portrait **rev 4d** overlaps the Search/end handoff with a 0.60 s
vertical `inOut` push from 18.85 to 19.45 s. Its generic closing
`markReveal` starts at 18.85 s while still off-frame; the tile is already
large enough to read when it enters. Lockup starts at 19.55 s, just
0.28 s after the supplied mark is fully revealed. The address still lands
at 20.05 s and holds through 21.25 s with the helper's slow push.
Fennick retains the approved revision 4b path below.

Reveal the supplied wordmark itself with an `out` edge mask, then settle
its supplied accent/seed into its actual location, then bring in the line.
Fennick's seed is above its K; both letter and seed phases clip the same
unchanged logo asset. A wordmark without an accent simply omits that phase.
`markReveal(shape: 'none')` currently retains a fading container, so this
film implements the bare-wordmark path locally, without changing the
engine. No tile or unrelated dot precedes the identity. Fit the complete
logo inside the safe column, and push the entire lockup gently through its
final reading hold. Marks with a separate icon retain the generic helper.

## Revision 4 house rules (apply to every new adaptation)

- **Nothing pops in.** Every element enters with `out`/`settle`, a slide or
  rise plus fade, or a mask. Include the first frame of the seed, header,
  counter, progress track, item photo and real results in the strips.
- **Zero irises in these portrait reels; at most one in any film, ideally
  zero.** Use a beat cut, a whole-container push/slide, an edge mask or a
  match cut. A converging item keeps its image, aspect ratio and corner
  ratio. Do not use `kit.motion.converge`'s circle-producing tail for this
  handoff; use `out` on the preserved geometry, then slide the stack away.
- **One safe frame:** side margin .07 W (75.6 px at 1080), top/bottom .10 H
  (192 px at 1920). Major text blocks and captured containers use .86 W;
  centred, narrower content remains within that same frame. The item header
  centre is at .10 H; its actual cap top is just above that guide. Catalogue
  and proof cards are centred in the .10–.90 H region, preserve aspect ratio
  and are no wider than .86 W. Measure the resting bounds in the strips.
- **Read after landing:** at least .4 s per three words, and at least 1.0 s
  for every line, measured after the whole line lands. Lengthen the film
  when the range needs it. Do not force every product into one .5 s beat.
- **UI travels with its container:** no scaling the capture inside a fixed
  window/card. Fennick's press state compresses the actual captured button
  pixels only, clears the old footprint with a sampled source background,
  and clips the cursor ripple to the card's lifetime.
- **Sound:** quiet sweeps only on real large motion; no sweep for a small
  label, ordinary item change, or small camera drift. Portrait cues follow
  `P`, with reduced gains; music extends to the revised final frame.

The following table describes the earlier 15 s square/wide choreography.

| Time | Section | What it does |
|---|---|---|
| 0–1.6 | Open | On the brand's darkest colour: a plain relay dot is visible at 0; the approved Keeper f scales and fades in over the first half-second, slides left from 0.45 as the name is uncovered (0.5–0.82), the one line rises under it (0.62–0.9). |
| 1.6–2.0 | Iris | Keeper folds back into the plain relay dot (0.14 s), which opens into a circle (accelerating, `in3`) onto the first item. |
| 2.0–5.5 | Items | Seven items in the Fernwise example, one a beat. A change takes 0.22 s and lands on its beat (`1 − (1−x)^2.6`); the old item rises and fades before the new item arrives from a short distance below (travel 0.10 H tall, 0.075 H square, 0.2 H wide). The moving photos stay clear of the words. Old words leave their slot in the first half of the change, new ones rise in during the second (rows 0.03 s apart). The ghost word slides 0.12 H and cross-fades. Each item grows 3% over its second (the camera breathes). |
| 5.5–6.5 | Pull back | The words leave in 0.07 s; the real screen fades in from 5.55–5.75 while a continuous front-loaded pull (`1 − (1−x)^3.5`) to the screen's framing. The crisp cut-out sits on top until the capture is sharp at that scale, then hands over. |
| 6.5–7.0 | The screen | The real catalogue screen holds, drifting in 1.8%. |
| 7.0–8.62 | Numbers | The screen blurs (1.3 U) and washes pale (80% of the field colour); three numbers start at 7.0, 7.5 and 8.0 s and land a quarter-second later (cubic ease-out), rising into a mask over 0.22 s; labels follow 0.06 s behind. They step back as the mark arrives. |
| 8.62–9.0 | Mark | After the count words clear, Keeper spins in from 8.70 s (−126° to 0 in 0.16 s, spring scale), folds to its dot, and the camera dives into the dot until it fills the frame with the next field's colour. |
| 9.0–11.62 | Orbit | Every item on a paper tile in a perspective ring (eleven tiles in every shape, each source photo once): flies out from the centre (ease-out-expo, 0.85 s), turns 0.42 rad/s; far tiles dimmed up to 62% into the field. The line types a word every half-beat, letters 0.022 s apart rising into a mask; each word arrives in the accent and cools to the text colour in 0.45 s. Out at 11.25 (0.14 s), then the ring folds into the centre (11.3–11.62, `in3`). |
| 11.62–12.0 | Iris | The folded tile flies to the first real result thumbnail (by 11.72). A zero-radius aperture opens underneath that thumbnail, so the outside container never jumps. |
| 12.0–13.5 | Search | The real search screen, close up: the query starts at 12.25 s and types at 12 letters a second, each letter a real capture with its real results; then a slow move toward the results (12% in tall, 3% square/wide). Wide tightens its title view to the field/results over 12.0–12.25 s. Fade to the field at 13.38. |
| 13.5–15.0 | End | The relay dot becomes Keeper with a small scale-in/crossfade inside a thin ring that widens and fades; the name is uncovered out of it (13.84–14.1) as the mark slides left; the address rises a letter at a time (0.008 s apart) from 14.0, settled by 14.32; held to the last frame. |

## Type

Sizes as U, 1% of the frame's short side.

| Text | Tall | Square | Wide |
|---|---|---|---|
| Name in the lockup | 14 | 13 | 13 |
| Line under it | 4.4 | 3.8 | 3.8 |
| Ghost word | up to 24, fitted to 82% of the width, 1 line, baseline 0.66 H | up to 14, fitted to 94% of the width, 1 line, baseline 0.642 H | up to 18, fitted to the right-hand 39.5% of the width, at most 2 lines, last baseline 0.30 H |
| Small line above the name | 3.6 | 3.3 | 3.6 |
| Item name | 12 | 9 | 11 |
| Detail line | 4.2 (2 lines) | 3.9 (1 line) | 4.2 (2 lines) |
| Header (mark and name) | 3.8 | 3.3 | 3.6 |
| Pill | 3.2 | 2.9 | 3.1 |
| Counter | 3.2 | 2.8 | 3.1 |
| Count-up number / label | 17 / 4.2 | 15 / 3.5 | 19 / 3.8 |
| Orbit line | up to 9.6, 3 lines in 44% of the width | 9.5, 3 lines in 46% | 9.5, 3 lines in 28% |
| Address | 4.8 | 4.4 | 4.4 |

Every block is fitted: it shrinks, then wraps, then balances its lines, so
longer words never leave the frame. The display face carries the brand
(names, ghost words, numbers, the line); the UI face the rest. The ghost word
is drawn at 48% opacity in a darker tone of the field. It stays subordinate,
but the whole word must read: at rest the item may cover at most about 20%
of its letter area. Fit the full phrase on one line near the item's base
in tall and square; in wide, place it beside the item above the small
caption. Keep the slide and crossfade when the item changes.
For an edited label of one to three characters, cap its size at 16 U in
tall and 6 U in square so its letters stay clear below the pot or can.

## Layout by shape

- **Tall:** the item centred in the upper half (box 0.72 W, centre 0.405 H),
  the words centred under it (0.70, 0.766, 0.816 H), the counter and bar at
  0.886 H; the bottom tenth is left clear for a feed's buttons and captions.
  The catalogue screen is shown whole.
- **Square:** the same stack, tighter (item 0.46 H at 0.375 H; words at 0.69,
  0.785, 0.848 H). The screen is a rounded close-up card.
- **Wide:** the item left of centre (0.31 W), the words in a column from
  0.555 W; the ghost word shares that column above the small caption, clear
  of the item and header. Count-ups in
  three columns with rules between. The real Shelf shows a readable close-up
  of Spike’s row, then tilts up to its header and first row. Search opens
  on its title before tightening to the field and all three filtered rows.

## Colour

The brand's field colour for items, screens and the end (Fernwise: cream);
its darkest colour for the open and the orbit (moss-deep); its text colour
for names; one accent (sprout green) only for words arriving in the orbit;
the pill's dot carries the item's real status colour (due, needs light,
fine). No gradients, no glows.

## Sound

The 120 BPM bed with breaks before the first item, the pull, the dive and
the end. Effects from the kit: `pop` on the dot, `sparkle` as the mark
grows, `whoosh` + `hit` on the iris and on the dive's cut, `swish` + `tap`
on every item, `whoosh` on the pull, `chime` as the screen lands, five
`tick`s and a `pop` per count, a `tick` per word of the line, a `tick` per
typed letter, `chime` on the address.

## Banned

- Drawn products, drawn screens, invented search results: every item is a
  real photo or render, every screen a capture.
- Another company's products or marks in the grid or the orbit.
- Prices, dates or claims without a source in `STORY.md`.
- A moving item crossing the words; a headline over tiles; a still on the
  beat that shows a half-counted number.
- Repeated radial transitions, convergence that turns a photo into a dot,
  and text that leaves before its reading hold.
- An ending without the address held to the last frame.

## A three-product shop

`examples/fennick/` keeps three real photographed cans. The six beat slots
are two clearly labelled passes (“INGREDIENTS”, “TASTING”), each 01–03 / 03;
the final can holds through 5.5 s. The pull lands in the real responsive
shop: its Pear card in tall, its entire three-colour range in square/wide.
Cans, the trio, packaging and source lifestyle photographs provide seven
different orbit tiles. Fennick has no search: its 12–13.5 s proof is the
real box builder choosing one of each flavour, from 0/12 to 3/12. Source
prices can appear inside the capture; every claim is documented in STORY.md.

The film exposes the same editable field schema, but its screen drawing
uses the capture’s real page rectangle rather than assuming a 390×844
phone. Use this version for a shop with desktop and mobile capture plans.

Fernwise uses its approved Keeper mark. Fennick revision 4 restores the
original outlined FENNICK wordmark and redrawn seed from `cast/fennick/`;
all product photographs and portrait shop captures were refreshed from the
same current source. Credits and fictional-company labels remain outside
exported pixels. Earlier logo and iris descriptions are historical.

Independent-review repairs: old item text clears over .05 s before any new
caption enters over .15 s (last-row stagger .0204 s); counters have a single
visible value and unchanged pill labels stay still. Ghost advance widths
fit to .82 W to keep ink overhang inside the .86 W safe frame. The portrait
orbit headline uses .34 W for stress clearance. The stacked tiles drift
5 U left / 2 U up and grow gently throughout convergence and the proof push,
so the tail never stops. End seeds begin fading .10 s before the next
section's nominal start, while the old card is still clearing.
