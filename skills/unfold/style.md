# Unfold: style

Style inspired by [@twoclipping's video](https://x.com/twoclipping/status/2104446706741825818),
a keynote-style launch film made in code with Claude Opus 5.5 from a prompt he
published in his guide. This is an independent style study. The reference
film here is our own, built and measured against it (`spec.md`), and filled
with Fennick, a fictional sparkling-tea company made for omnigami's examples:
its real shop, captured, and its own can renders and photographs.

## The grammar

- **One continuous take.** Every scene is made out of the one before it. Nothing fades, blurs in or cuts. Objects change shape instead: text rises out of a mask line, icons and letters pop from zero on a spring, bars fill, pages push, a black shape floods the whole frame and contracts into the next scene.
- **A cursor drives every change:** clicks, a drag, a scroll. Only loaders, counters and the popping glass letters move by themselves.
- **A screen-studio camera.** It zooms so each moment fills the frame (1.0 to 3.1), and the cursor scales with it (by the square root of the zoom, capped at 1.6).
- **Something on every beat:** 120 BPM, a beat every 0.5 s, 54 beats, 27 s. The zoom into the first screen lands on the drop (6.0 s); the result sits in the breakdown (22–24 s); the wordmark comes back with the beat. The last frame is the first.
- **Warm off-white canvas** (Fennick: `#F1EBE0`), a little lighter above centre. Black UI with white labels. The product's screens and photographs bring the colour (Fennick: yuzu `#F7CC33`, hibiscus `#DB3863`, pear `#8CC261`, ink `#1D1A16`).
- **Two faces:** the product's heavy display face for the wordmark and the glass word (Fennick: Bricolage Grotesque 800, a little condensed); its text face for everything else (DM Sans).
- **Glass** only over the product's own screens: a smoky ink tint, a white veil, a bright 2.5 px rim (the toolbar and slider darker, so the page under them stays quiet). Never over the off-white canvas.
- **Real screens.** What the viewer reads as the product is a capture of it, in the state the film needs; the film's own shapes (the pill, the glass, the spinner, the notifications, the delivered dot) stand on top of the captures and hand off to them exactly.
- **One story.** One thing travels the whole film, through the product's own flow in its order, each step once, and the film ends on the real result in the world (Fennick: the box on the kitchen counter), never a framed picture of the product.

## Shapes

Every film comes in square (1:1, 1440 × 1440, the measured film), wide (16:9,
1920 × 1080) and tall (9:16, 1080 × 1920), each laid out for its frame, never
cropped. The take, the times, the springs and the hand-offs are the same in
all three. The film's numbers are in square's pixels. Tall fits 1440 of them
across its width (0.75 of a pixel each) and has 2560 down; wide sits closer
(0.85 of a pixel each: 2259 × 1271), so its words read on a phone held
sideways. Each composition is laid out again for the frame; `SHAPES` in the
film holds the numbers (`squareLayout()`, `shapeLayout()`):

| | square | wide | tall |
|---|---|---|---|
| wordmark: fits, at most; tagline | 1126, 232; 34 | 1450, 280; 50 | 1126, 232; 46 |
| bento | 4 × 3 cells, the main screen 2 × 2 at the top right | the main screen a 16:9 tile in the middle, a block of four each side | the main screen a 9:16 tile in the middle, a column of four each side |
| the main screen (a capture) | the box panel, 800 × 800 CSS px of the desktop page | the desktop page under its header, 1440 × 810 | the phone page under its header, 390 × 693 |
| glass word: fits, at most | 700, 170 | 900, 200 | 700, 170 |
| toolbar and slider (centre); camera | 720, 1250; 1.3 then 1.15 | 1129, 1150; 1.08 then 1.03 | 720, 2260; 1.08 then 1.05 (inside the page's side margins) |
| phone (its screen; an unbranded photograph around it) | 86% of the frame's height | 86% of the frame's height | 84% of the frame's height; the pages fill the frame until the pull-back (15.95) |

The main screen's tile in the bento has the frame's own shape, so the zoom into it
lands exactly on its edges in every shape; in wide and tall it grows a beat
after the other tiles move, so they clear its way. In tall the phone pages fill
the frame as the phone page they are, then pull back into the phone; in square
and wide the flow plays in the phone. The cursor's keys in wide and tall are
worked out from these boxes; square's are measured. No shape's camera looks
past the edge of a screen, and no zoom cuts through a word.

## The acts (in square, at 1440 px; t = when the move starts; wide and tall lay them out per "Shapes")

| t (s) | State | What happens | What it becomes for another product |
|---|---|---|---|
| 0.00 | Wordmark | the name, a period, the tagline under it | the product's name and one line |
| 0.42 | Letters drop | the tagline drops out of its mask line; the letters drop through a line under the word, left to right (0.5–0.9), leaving the period | same |
| 1.20 | Pill | the dot stretches into a 600 × 192 black pill at centre; the label rises in (1.85) | the main call to action |
| 2.30 | Iris | click (the pill sinks a little): its label leaves upward, the pill becomes a 465 circle and a round aperture opens from its centre onto the first screen | the product's mark or hero screen |
| 3.00 | Tile | circle → rounded square 1066 (r 90, overshoots), then 444 | same |
| 3.62 | Grid | a 3 × 3 grid of 304 tiles unfolds from behind it: edges, then corners (3.78) | nine of the product's objects: its photographs, a number |
| 5.00 | Bento | reflow to 4 × 3 cells of 224; one tile takes 2 × 2 (465) | the product's main screen |
| 5.55 | Zoom | click; the camera zooms into that tile until it fills the frame (5.72–5.95) | same |
| 6.25 | Glass word | a verb pops in glass, letter by letter (0.07 s apart) over a calm band of the screen | one verb for what it does |
| 7.10 | Toolbar | the word melts into a droplet that stretches into a 4-icon glass toolbar; camera 1.3 | the screen's own actions |
| 8.30 | Slider | click the last icon: the toolbar becomes a slider panel; drag it end to end (8.65–9.75); the screen steps through its real states as it moves | one action that visibly changes the screen (Fennick: the box fills, 0 to 12 cans) |
| 9.70 | Done | the slider's action completes: the summary row's words leave upward, "Box ready" rises in, the Checkout button opens leftward from its right end | the state that lets the flow go on |
| 11.45 | Flow | click Checkout: the checkout page pushes in (11.5), holds, scrolls to "Start my box" (12.75–13.75); click it (14.25): its label leaves and a spinner rises; the order page pushes in (14.6) and holds | the product's own next pages, in order |
| 15.95 | Phone | the screen pulls back into the phone (an unbranded photograph); a status bar appears above the page | the product's mobile page, or skip to the lock screen |
| 17.00 | Lock screen | the lock screen slides down over the page: the owner's wallpaper, Thursday's date and time; the first notification grows out of a bar (17.65) | something arriving |
| 18.80 | Days pass | the date and the time roll on, digit by digit, to Saturday; the second notification arrives above the first (19.3) | skip when the result is immediate |
| 20.85 | Dot | tap the notification: it becomes a black dot (20.9), a check draws on (21.25), two ripples (21.45) | the product's flow, done |
| 21.72 | Flood | the dot floods the frame (0.2 s, past the corners), holds black | same |
| 22.45 | Result | an iris opens onto the real result, full frame, with a slow push in (Fennick: the box on the kitchen counter, a render) | what the customer actually gets |
| 23.95 | Close | the round aperture closes to black; the black contracts in one move straight into the period (24.55–25.35, its size eased in log space), the letters rise back through their line, nearest the period first (25.35), the tagline rises (25.9) | same |

## Motion

- **Springs** are closed-form (`kit.spring`). Shapes: stiffness 220–320, damping 18–24, a few percent of overshoot. The grid tiles 240/22; the bento 220/21; the letters rise back on an ease-out (0.45 s each, 0.035 s apart).
- **Two edges.** When the dot stretches into the pill, the left edge leads (420/27) and the right follows (300/25). The way back is one move, not two: the black frame shrinks straight into the period. The plan selector has a stiff leading edge (420/26) and a soft trailing one (170/18).
- **The camera** moves on critically damped springs (150/25) in log zoom, so zooms feel even. The one exception is the zoom into the tile (5.72–5.95): a cubic ease in and out, landing exactly on the tile's edges.
- **Every click has a press state** on the visual onset: what's pressed sinks to 0.95 and lights (a black button) or darkens (a light card) over 0.07 s, and comes back over 0.22 s (`press`, `sink`); a toolbar icon gets a soft disc; a held knob swells. Nothing in the film is clicked without one.
- **Apertures are round.** No blades or drawn lines: the iris is a clean circle opening or closing.
- **Text never fades.** It rises out of a mask line in 0.22–0.3 s (ease-out expo) and leaves upward in 0.1 s (ease-in cubic). The next label starts 0.06 s after the last one leaves.
- **Floods** grow past the corners in 0.2 s (ease-in), so no single frame changes half the screen.
- **The cursor** arrives fast and lands soft (ease-out, power 3.2); pressed, it shrinks to 0.86. It is hidden from the flood to the close.
- **Motion blur:** 4 sub-frames across half a frame (`--blur 4`).

## Type

Sizes in px on screen at 1440, measured against the original (`spec.md`). Where the camera is zoomed, the page size is the screen size divided by the zoom. In tall every size is 0.75 of these in pixels (the same against the short side), in wide 0.85 (it sits closer). Wide's tagline is 50, its glass word up to 200; tall's tagline is 46. The captured screens keep the product's own type; the camera's zooms bring their main words (the box's title and count, the Checkout button) to 28 px or more.

| Where | Face | Size on screen |
|---|---|---|
| wordmark | Bricolage Grotesque 800, semi-condensed | fits 1126 wide, at most 232 |
| tagline | DM Sans 400 | 34 |
| pill label | DM Sans 600 | 60 |
| glass word | Bricolage Grotesque 800, semi-condensed | fits 700 wide, at most 170 |
| tile words (a number, a line) | Bricolage 800 / DM Sans 600 | big: they read in the grid |
| slider label and value | DM Sans 500 / 600 | 44 (camera 1.15) |
| lock screen date / time | DM Sans 600 | 19 / 96 CSS px of the phone |
| notification app / title / line | DM Sans 600 / 700 / 400 | 14 / 17 / 15 CSS px of the phone (27 px or more on screen in tall) |
| the result | a photograph or render | |

Nothing a viewer is meant to read is under 28 px in square, or 21 px in wide and tall. Text inside far shots (the grid tiles, the phone's page once it is small) is texture, as in the original; keep the words on the tiles big (a number, one or two words).

## Sound

A `tap` on every press, a `pop` as each thing appears and on every popping
letter and digit, a soft `swish` on the big moves (each with its `motion`: a
shape changing is a `container`, the frame moving is a `camera`), a `tick` as
each can lands in the box, every cue on the visual onset of its move. No
impacts, risers or chimes. A 120 BPM bed in D major: a quiet start, the beat in
at 3 s, a breakdown (pads only) on the result (22–24 s), the beat back for the close.
The effects come from omnigami's own kit; `scripts/sounds/kit.json` says what
each one is for. Name them in `cues()` and use them as they are. Mastered around −14 LUFS.

## Banned

Crossfades; blur-ins; brightness "developing" (a screen never fades to black or wakes up: pages push and slide); cuts; 3D flips; particles; glows
on UI; holds over 1 s with nothing moving; glass on the canvas; any company's
UI but the product's own (no maker's phone or window chrome, no traffic lights,
no named OS features); the inspiring film's photos, copy or objects; invented
features; real customer data.

## Engine rules

- `seek(t)` paints from `t` and the field values only: no `Date`, `performance.now()`, unseeded `Math.random`, timers or network.
- A CPU-backed canvas (`getContext('2d', { willReadFrequently: true })`), and every helper canvas created the same way. Pre-paint static textures (the paper behind the phone, the blurred wallpaper) once per shape in `prepare()`, with seeded noise (`kit.rng`).
- `ctx.reset()` at the start of every frame, so no canvas state carries over.
- Every file the film loads is inside its folder; fonts load in `prepare()`.
