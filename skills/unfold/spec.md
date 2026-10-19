# Remake spec: @twoclipping's keynote film → Fennick

Reference: https://x.com/twoclipping/status/2104446706741825818 (his guide
"How I Make $10K Launch Videos for $0 with Opus 5.5"; local copy
`reference/motion/twoclipping-keynote.mp4`, not committed). Made in code by
Opus 5.5 from a prompt he published openly. Measured on stills every 0.5 s,
strips of every 2nd–6th frame around each fast moment, `tools/study/measure.py`
(frame difference and brightness per frame) and full-resolution stills.

We take the grammar only. None of his photos, prints, copy or wall footage,
and none of the phone or desktop maker's UI: our phone and window are plain
shapes, our screens are Fennick's real shop (captured), our tiles its own
photographs. Fennick is a fictional company made for omnigami's examples.

## Format
1440 × 1440, 60 fps, 27.07 s in the original; ours is 27.0 s (1620 frames,
54 beats). Loops: the last frame is the first.
120 BPM: beat period measured 0.499 s. The kick pattern puts downbeats at
about 0.07 + 2k s; the drop (first kick, low band from 9 to 245) is at 6.04 s.
The low band falls to almost nothing at 22.5–24.5 s (the breakdown) and the
beat returns at 25.5 s. Onsets fall on eighth notes (x.07, x.32, x.57, x.82).

The original is square only, and everything below is measured in square.
Our film adds wide (1920 × 1080) and tall (1080 × 1920), laid out from these
numbers for their own frames: the same take and times, other layouts and
camera framings (`style.md`, "Shapes").

Canvas `rgb(236,236,234)` in the original (ours: Fennick's warm `#F1EBE0`), a
faint lighter spot above centre. Black UI, white labels. Two faces: a wide
heavy wordmark face (Archivo, width 125, weight 800) and Geist for UI (ours:
Fennick's Bricolage Grotesque and DM Sans).

## Timeline (t = measured start of each move, in the original)

| t (s) | Original | What moves | Ours (Fennick) |
|---|---|---|---|
| 0.00 | wordmark "develop." + tagline | holds | "Fennick." + "Tea, but it fizzes." |
| 0.42–0.50 | tagline drops out of its mask line | letters fall 0.08 s | same |
| 0.55–0.85 | letters squeeze into the period, accelerating (motion blur) | 0.30 s, ease-in | same |
| 0.85–1.20 | dot alone at (1260, 727), 55 px | still | same |
| 1.20–1.42 | dot stretches left into a pill and slides to centre | 600 × 192, centre (720, 720) | same |
| 1.85–2.10 | label rises out of the pill's lower edge | | "Build your box" |
| 2.30 | click | | |
| 2.32–2.45 | pill → circle 465; six iris blades close over the label | | same |
| 2.47–2.62 | blades snap open onto a photo | | the yuzu can on its yellow |
| 3.00–3.20 | circle → rounded square 1066, r 90, overshoot | | same |
| 3.30–3.62 | shrinks to 444 | | same |
| 3.62–3.80 | grid unfolds from behind it: N, S, E, W | tiles 304, gap 17 | the three cans, three photographs, the box, "25 calories a can", the box builder |
| 3.80–4.00 | then the corners: a 3 × 3 grid 946 wide | | |
| 5.00–5.30 | reflow into a bento: middle-right tile grows to 2 × 2 top right | 4 × 3 grid, tiles 224 | the box builder's tile grows |
| 5.55 | click on it | | |
| 5.72–5.95 | camera zooms into the tile until it fills the frame; lands on the drop | 0.23 s | the box builder (a capture), full frame |
| 6.25–6.75 | glass word pops in letter by letter ("relight.") | ~700 wide at y 390 | "fill." |
| 7.10–7.35 | word melts into a droplet at the bottom | | |
| 7.30–7.80 | camera zooms in 1.0 → 1.35 toward the lower centre; the droplet stretches into a glass toolbar, 4 icons | 922 × 190 | open source, bookmark, info, filter |
| 7.95 | click the heart (fills) | | bookmark fills |
| 8.30 | click the adjust icon | | filter icon |
| 8.40–8.60 | toolbar → slider panel "Golden hour 0" | 1276 × 280, r 90 | "Fill with an even mix" 0 of 12 |
| 8.65–9.75 | drag 0 → 100, the photo relights day → golden hour | | the box fills, 0 → 12 cans: the captured states in turn |
| 10.00–10.30 | the held knob becomes a glass lens | | |
| 10.30–10.60 | it lifts into a glass orb ~700, moves to centre | | |
| 10.55–10.80 | the next photo opens inside the orb as a circle | | a lock screen: the three cans on yellow |
| 11.00–11.25 | the orb expands to fill the frame | | |
| 11.45 | date pops at top | cap 30 | "Wednesday, October 14" |
| 11.70–12.10 | glass clock digits pop one by one | cap 274 | "8:00" |
| 12.10–12.35 | home bar stretches into a glass player | 946 × 180 at y 1144 | "Box packed · Ships Thursday" |
| 12.50 | click pause | | click "Open" |
| 13.10–13.60 | pulls back into a phone; the bezel grows out of the screen edge; new wallpaper | | plain phone, a ribbon in the three flavour colours |
| 13.60–14.20 | phone moves left | | |
| 14.25–14.45 | the camera cutout stretches like liquid, pinches off | | same |
| 14.45–14.85 | flies right and grows into a black window | 800 × 520 | same |
| 14.85–15.10 | window rolls up like a blind onto a browser start page | | plain window, "fennick.example" |
| 15.20 | long-press the wallpaper on the phone | | a card of the cans lifts |
| 15.40–15.70 | drag it onto the tab; the page pushes in | | Fennick's home pushes in, its hero picture missing |
| 16.00–16.20 | drop: it becomes the landing page's hero | | it grows into the hero picture |
| 16.20–16.60 | camera frames the window (1398 wide), phone slides off | | |
| 17.20–17.50 | scroll: hero text leaves upward, hero image morphs into a product card | | (17.35) click "Build your box": the box page pushes in |
| 17.80–18.10 | nav button flies down into "Order print" | | the button flies into "Checkout · $29.00" (17.42–17.9) |
| 17.50–18.30 | camera zooms 1.0 → 1.6 onto the card | | onto the full box (1.8), held to 19.5 |
| 18.50 | click a frame colour: it paints across the frame | | (no choices: the box was filled with the slider) |
| 19.00 | click a size | | |
| 19.70 | click "Order print": loader | | "Checkout · $29.00" |
| 19.90–20.20 | camera zooms on the button (≈2.0) | | |
| 20.00 | ✓ Ordered | 798 × 114 pill | ✓ Order placed |
| 20.45 | Printing %, bar fills | | Packing 12 cans % |
| 21.00 | On its way: a van on a dotted route, "today" | 800 × 160 | Ships Thursday: a parcel on a route to a door, "Sat 17 Oct" |
| 21.45 | contracts into a circle with ✓, ripple rings | | Delivered |
| 21.70–21.88 | the circle floods the frame (overscales past the corners) | 0.18 s | same |
| 21.88–22.15 | black holds | | |
| 22.15–22.35 | contracts into a black rectangle on the wall | | onto a warm paper surface |
| 22.45–22.75 | the iris opens onto the framed print | | Fennick's photograph of a can and a glass, framed |
| 22.75–23.95 | holds, slow push in (breakdown) | | holds |
| 23.95–24.25 | iris closes on the print | | |
| 24.30–24.45 | the black frame floods the screen | | |
| 24.45–24.65 | black holds | | |
| 24.65–25.00 | contracts into a rounded rect, then the pill | 600 × 192 | same |
| 25.00–25.30 | pill → dot, moving right | | |
| 25.35–25.60 | letters spring back out of the dot (overshoot) | | |
| 25.90–26.20 | tagline rises out of its mask line | | |
| 26.20–27.00 | holds: last frame = first frame | | |

## Type at 1440 (measured)

| Where | Original | Size |
|---|---|---|
| wordmark | "develop." Archivo wide 800 | x-height 125, ascender 167 → about 232 px; 1126 wide |
| tagline | Geist 400, grey | about 30 px (we use 34) |
| pill label | Geist 600 white | cap 44 → about 60 px |
| glass word | "relight." | about 700 wide, ~150 px |
| slider panel label / value | Geist 500 | cap 32 → about 44 px |
| date | Geist 600 | cap 30 → about 42 px |
| clock | glass digits | cap 274 → about 380 px |
| player title / subtitle | Geist 600 / 400 | about 30 / 22 px (we use 34 / 28) |
| landing headline | Archivo wide 800 | ascender 70 → about 95 px |
| landing body, nav | Geist 400 | about 26–28 px |
| product title | Archivo wide 800 | about 85 px (camera 1.6) |
| product labels / sizes / price / button | Geist | 28 / 28 / 52 / 38 px (camera 1.6) |
| order pills | Geist 600 | about 40 px, "today" 34 px (camera 2.0) |

## Camera (screen-studio): [t, zoom, x, y of the world point at frame centre]
Measured in the original. World = the square at zoom 1. The reference film
uses these keys with springs of 150/25 in log zoom; it zooms the main screen
to 1.3 and 1.15 (not 1.35 and 1.18).

| t | zoom | centre |
|---|---|---|
| 0–5.72 | 1 | 720, 720 |
| 5.72–5.95 | tile fills the frame | the bento's big tile |
| 7.30 | 1.35 | 720, 900 |
| 8.40 | 1.18 | 720, 860 |
| 10.30 | 1 | 720, 720 |
| 13.10 | pull back to the phone | |
| 16.20 | 1 | the window |
| 17.50 | 1.6 | the card (ours: 17.6, 1.8, the box) |
| 19.90 | 2.0 | the button (ours: 1.95) |
| 21.70 | 1 | 720, 720 |
| 22.75–23.95 | 1 → 1.06 | the framed print |

## Keep / change
Keep: the order of the acts, every morph, the times, the camera moves, the
one black shape through the order flow, the two floods, the loop.
Change: every photo becomes Fennick's own (its can renders and photographs) or a
capture of its real shop; the words are Fennick's; none of the original's photos
or wall footage, no phone or desktop maker's UI. The scroll-to-card and its two
choices became a click to the box page and a held look at the full box: the box
was already filled with the slider.
