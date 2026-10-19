# Illustrated ad: style

omnigami's own grammar for an illustrated ad: the product's ingredients in
the hand of its packaging, drawn as we watch, and the real product in front.

## The grammar

- **It draws itself.** Each drawing is revealed in an order worked out from the image: mostly distance from where the hand would start (the stem, the root), the dark outlines a little before the light hatching, and a soft noise so it reads as strokes, not a wipe. A narrow soft edge (5 % of the order) is the pen.
- **The real product rises in front.** Once its two drawings are done, the product (a photorealistic render) rises up out of a line at its own base on a soft spring, the drawings open out a little to frame it (straight off, settling softly: ease-out over 0.55 s, never an ease-in), and a wash of the product's colour grows behind it from the middle.
- **The page pushes on.** The words leave upward first, then the page moves left, fast out of the blocks with a long soft settle, as the next slides in from the right; its drawings start as it arrives.
- **The end:** the last product's words and drawings push away while its product stays and steps aside as the others come back in; a finishing touch (the fizz) draws itself up behind them; the line, the call to action as a pill, the address and the wordmark rise.
- **Warm paper:** the brand's paper colour, a fine seeded grain, a little lighter in the middle.

## The beats (each product page is 4 s; t from its start)

| t (s) | What happens |
|---|---|
| 0.0–1.7 | the first drawing draws itself |
| 0.45–2.15 | the second |
| 1.0 | the product's name rises; its line under it (1.15) |
| 2.35 | the product rises (spring 170, 22); the drawings open out; the wash grows |
| 3.39 | the words leave |
| 3.75–4.35 | the page pushes on (ease-out, power 3.2) |

The end (16 s film): the products together (12.05–12.85), the fizz draws
itself (12.55–13.8), the line (12.95), the call to action (13.6), the address
and the wordmark after it; held to 16.

## Type

| Where | Face | Size |
|---|---|---|
| product name | the brand's display (Bricolage 800, semi-condensed) | 96, fitted to 940 |
| its line | text (DM Sans 500), muted | 36 |
| the line at the end | display | 104, fitted to 960 |
| call to action / address | text 600 / 500 | 42 / 38 |

## Sound

Soft `tick`s as the pen draws (quiet, irregular), a `pop` as each name
rises, a `swish` and a `pop` as each product rises and lands, `swish`es on
the pushes and as the products come together, `pop`s for the line and the
call to action. No impacts or risers. A 120 BPM bed in D. About −14 LUFS.

## Banned

Drawing the product itself; a drawing style that isn't the packaging's;
fades, crossfades, blur-ins; a product that crosses its own words as it
rises; words still on screen as the page moves; cuts; 3D; particles; another
company's name, logo or product.

## Engine rules

- `seek(t, values)` paints from its arguments only: no `Date`, `performance.now()`, unseeded `Math.random`, timers or network.
- CPU-backed canvases (`getContext('2d', { willReadFrequently: true })`) for the frame and every helper (each drawing's reveal, the paper).
- `ctx.reset()` at the start of every frame.
- Every file the film loads is inside its folder; fonts load in `prepare()`.
