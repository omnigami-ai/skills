# App Store preview: style

An iPhone app's App Store preview prepared to Apple's published specifications, and a social cut of
the same story for posting. One film, two cuts, one story grid: four or five
moments, each a real action in the app with a visible result, in 25–28 s.

- **The store cut** follows Apple's rules (SKILL.md has the checklist):
  only the app's own screens, captured at their native resolution and
  shown full frame, with short captions, fingertip touches, the app's own navigation
  and one music bed.
- **The social cut** takes the grammar of @wallacex227's app promo (Strino,
  19.5 s, 9:16, 30 fps), measured frame by frame in
  `reference/study/app-promo/` at the omnigami repository root (stills every 0.5 s,
  12-frame strips at every move). Take the grammar, never the content.

## The story grid

- 120 BPM: a beat is 0.5 s, a bar 2 s. 25–28 s in all.
- The social cut runs at 60 fps, the store cut at 30 (Apple's maximum): `fpsBySize`.
- Each cut has its own timeline (the store opens on a frosted title, the social cut on a
  hook) and they share everything else: the words, the captures, the screen machinery, the
  music. The reference: social Water 0–8.85, Add –14.75, Rescue –19.0, Light –22.85,
  recap, end 25.4–28; store title 0–2, Water 2–7.9, Add –13.6, Rescue –17.6, Light –21.6,
  Shelf –24.5, end frame 24.5–28.
- Beats, as in the reference video: the words change first (the headline or the caption),
  then the screen moves, then the next words land. One change at a time; each result held
  at least a second before the next moment.
- One curve for every travel, measured from the reference's phone rise (37% of the way
  after two frames, 95% by 0.37 s, still by 0.8 s): expo out over 0.85 s (`glide`). Fades
  are sine in-out. Nothing stops short.

## The store cut

### Frame and screens

- 886 × 1920 (portrait, iPhones with large and medium displays). The app's
  390 × 844 pt screen is 2.27× in this frame: capture at 3× (1170 × 2532)
  and it is downscaled, never enlarged. Never zoom into the UI (Apple
  recommends the native resolution, not a zoom). No device frame, no hands.
- Each state is its own capture, and each arrives the way the app shows it: a pushed
  screen slides in from the right as the old one moves a third of the way left; a sheet
  rises from below over the dimmed screen; a state that changes only a region dissolves
  (0.25–0.4 s); typing cuts. A watering is the card travelling into its new row while
  the list reflows (the next card slides up, the watered group opens a slot), cut into
  bands from the real captures. A scroll is a flipbook of captures at eased offsets
  (11 frames over 0.33 s), cut frame to frame.
- Touches: a soft white fingertip disc (3.4% of the width) with a fine moss ring and a
  soft shadow. It settles onto the control 0.4 s before the tap, presses to 86% on the
  tap, sends one ring out and lifts. A swipe carries the disc with the content.

### Captions

- **The opening title** (0–2 s): the app's frosted screen (blur 26 px with the capture kept at its delivery scale, a
  cream wash at 58%), the mark (11% of the width) and one line, Fraunces
  480 at up to 9.4% of the width, three lines at most, words landing a step
  apart. The frost clears in 0.5 s and the first caption takes over: the
  viewer sees the app by 2 s.
- **Moment captions** dock in a frosted pill over the tab bar (the app's
  chrome, never its content): 94% of the width, radius 22 pt like the
  app's cards, the screen blurred 20 px under a cream glass at 78%, a 1 px
  warm border. Fraunces 480 in moss-deep at up to 6.2% of the width (two
  lines at most), the accent phrase lighter (weight 360) in moss. A Plus
  feature carries a small tag above its caption ("Fernwise Plus", Nunito
  800, sun on cream). Each caption holds its whole moment (4–6 s; the shelf payoff is 2.5 s);
  the old words fade over 0.12 s, then the new ones fade over 0.22 s;
  captions never double-expose. Glass height settles over 0.3 s.
- **The end frame** (last 3.5 s): the last screen frosts again; the mark,
  the name (Fraunces 9.4%), the tagline (Fraunces 6.6%), and the
  subscription disclosure (Nunito 600, 3.6–4.2%, ink at 88%), settled by 25.0 s and held to the end.
- Floor: nothing meant to be read under 3.2% of the width (28 px at 886).

### Rules that shape it

No prices, no dates or seasons, no other platforms, no Apple marks. A
feature that needs a subscription is tagged where it appears and named in
the end frame. Make the frame at 5.0 s (the default poster frame) a result
with its caption: here "All watered. 13-day streak."

## The social cut, measured

Measured on the reference at 1080 × 1920; shares are of the frame's width
(W) or height (H).

| Element | Reference | This skill |
|---|---|---|
| Ground | near-black green `#020a02`, a radial lift to `#0c1a08` behind the subject | the app's moss-deep, `#0e1b10` at the edges to `#22402a` behind the phone, with a fixed grain (seeded) so the gradient doesn't band |
| Chapter label | "01 — RECONHECER" at 13% H, caps 2% W tall, tracked 0.3 em; the number in the accent, the rest 60% white | "01 — WATER", Nunito 800, 2.6% of the short side, tracked 0.3 em; held for the whole chapter |
| Headline | two lines centred at 17–26% H, ~9.3% W, tight (−0.045 em); one phrase in an italic serif in the accent, a little larger | Fraunces 560 in cream at 8.8% W, tracked −0.03 em; the accent phrase Fraunces Italic 340 in sprout at 1.04× (bundled Fraunces Italic, with the same SOFT 100 and WONK 0 axes as the app) |
| Headline change | the old one rolls up into a mask under the label (6 frames); the new one rises line by line out of a mask (8 frames, 2 frames apart) | the old one rolls out over 0.3 s; then the screen moves; the new one rises line by line on the expo curve (0.75 s, 0.08 s apart) |
| The hook | 0–3 s: the question over the app's core motif (sound bars in concentric rings) | 0–2 s: the question over the three thirsty plants, real close-ups of their empty rings, one a beat, each sending out fine rings |
| Isolated control | at 3 s, the real search card alone, 2.4× its size, a ring on its button; at 3.8 s the phone rises in front of it and the card falls back | the first ring of the hook flies to its place as Monty's card photo and the card grows around it (86% W tall, 62% square, 36% wide); Water is tapped at 3.6 s; at 3.95 s the phone rises (0.9 s) and the card travels into its watered row, changing on the way, landing as the phone does |
| Phone | 47% H, centred, a dark bezel with a lighter edge, the app inside, a soft shadow | the whole phone, never cropped: 70.5% H in tall, 72% in square, 90% in wide; graphite bezel 2.9% of the screen's width, the app's own corner radius, an island, a deep soft shadow |
| Callouts | label 3.1% W bold white over a sub-label 2.2% W muted, right-aligned at 27% W beside the phone; a 3 px line in the accent from a short stub to a dot (r 10 px) with a halo on the element; two or three, 0.5 s apart | a whole phone leaves no gutter for labels, so they are chips under the headline (Nunito 800 label and 600 sub-label, 3.1% of the short side; two side by side when they share a moment; a sub-label that won't fit readably is dropped) and a sprout dot with a 2.3× halo on the element each names |
| Tap | a ring in the accent with a translucent fill around the button, concentric rings radiating | a fingertip disc that settles onto the control, presses on the beat and sends one moss ring out |
| Recap | three lines centred, ~9.7% W, one a beat (0.5 s), the last in the italic accent; rolls up and out | "Watered." "Well lit." "*Thriving.*", 10% W |
| End card | logo mark, name, line, ★ rating, a pill button in the accent with dark text, "App Store · Google Play"; 4 s, one element a beat | the app icon, "Fernwise", tagline, ★★★★★ 4.8 · 12.4k ratings, a sprout pill "Get Fernwise", "Free on iPhone"; the tile fades up as the recap rolls out, the name joins it within 0.5 s, the rest follows 0.12 s apart, held ~2 s |
| Rhythm | 120 BPM, cuts on beats, holds 0.5–1.6 s between moves | 120 BPM, the same holds |

## Palette: why the social cut goes deep moss

The grammar depends on a dark ground: the lit phone, the fine leader lines
and the one bright accent only read against it. Fernwise's own dark colour
is moss-deep (`#28452A`, its headings), so the ground is moss-deep taken
darker toward the edges, never black; the type is the app's cream
(`#F6F1E7`), and the one accent is the app's sprout (`#9CC57A`): the
headline's accent phrase, the chapter number, the leader lines, dots and
tap rings, the end card's button. The app itself stays light inside the
phone, so the cut still looks like Fernwise: cream and moss, inverted.
Terracotta, water blue and sun stay inside the app, where they mean what
the app says they mean.

The store cut needs no palette of its own: it is the app, with cream glass
and moss type over it.

## Type

- Fraunces (the app's titles and plant names) for headlines, captions, the
  recap and the name; Nunito (everything else in the app) for labels,
  callouts, the rating, the button and the disclosure. Both OFL, in
  `reference/assets/fonts/`. Fraunces is pinned to the app's settings
  (SOFT 100, WONK 0) with fontTools' instancer, because a canvas can't set
  variation axes.
- Headlines and captions fit their box (shrink, then wrap to two lines,
  balanced). Nothing meant to be read under 28 px at 1440 px on the short
  side.

## Shapes

- **Tall (9:16):** label and headline at the top, a row of chips under them, the whole
  phone below.
- **Square (1:1):** the same stack, the headline smaller (one line where it fits), the
  phone 72% of the height.
- **Wide (16:9):** label, headline and chips in a left column (42% of the width,
  left-aligned), the phone on the right at 68% of the width.
- The choreography and timeline are the same in every social shape (`SL()` holds only the
  geometry). Recap and end card are centred in every shape.

## Sound

- One bed (`template.music`) for both cuts, on the grid, with a break
  before each result (the last watering, adding Mona, the reminder, the stand's reading,
  the end).
- Effects from the kit, each on its visual onset: `tap` on taps, `tick` per typed
  letter, a soft `pop` as each check fills, on each chip or caption and on the recap and
  the marks, `swish` (with `motion` metadata) only on full-width moves (the phone rising,
  the app's sheet and pushes, the phone dropping). No chimes, hits or risers. Mastered
  around −14 LUFS.

## Banned

- In the store cut: any frame, hand, person, device, App Store badge or
  Apple mark; a price, a date, a season, another platform; zooming into the
  UI; whips, spins, flips or any transition that suggests the app does
  something it doesn't; a caption laid over the element being tapped.
- In either cut: a screen drawn by the film; a number without a source in
  `STORY.md`; a Plus feature shown without its tag; text smaller than the
  floor; a result that doesn't answer its caption.
- In the social cut: the reference's words, app, motif, logo or music;
  more than one accent; callouts that quote nothing on screen.

[Style inspired by @wallacex227's video](https://x.com/wallacex227/status/2103245000989659422). An independent
style study; @wallacex227 didn't make or endorse it.
