# End card: style

The ask of a launch film as one shot: who it is, where to go and the one
thing to do, held to the last frame. Cut from the product film, whose
grammar comes from a measured study of three 2026 launch films (Figma
Motion, ElevenLabs' Reception, @LexnLin's Tessel). Take the grammar, never
the content.

## Format

- 4 s: two bars at 120 BPM (a beat is 0.5 s, a bar 2 s).
- 60 fps, rendered with motion blur (`--blur 4`). Choreography is timed in
  steps of 1/12 s (`F`): words land a step apart.
- Three shapes, each laid out for its frame: 16:9 (1920 × 1080), 1:1
  (1440 × 1440), 9:16 (1080 × 1920). `U` is 1% of the frame's short side.
- It reads with the sound off.

## Timeline

| Time | Step | What happens | Sound |
|---|---|---|---|
| 0–0.25 s | 0–3 | paper only: a breath after the cut (in the product film, the payoff folds into the mark here) | |
| 0.25 s | 3 | the mark is born where the name will be, fading up from 60% of its size (never a lone dot), and slides at once to its place in the lockup (aside in wide and square, up in tall), a spring (260, 24) | `pop` 0.42 |
| 0.5 s | 6 | the name slams in, growing from its left edge beside the mark (from its middle under it, in tall) so it never touches the mark, and never past 3U from the frame's edge | `pop` 0.4 |
| 1.0 s | 12 (beat 3) | the address | `pop` 0.38 |
| 1.5 s | 18 (beat 4) | the action, springing up from 90% (320, 20) | `pop` 0.42 |
| 2.0 s | 24 (bar 2) | the tagline, a word a step | |
| about 2.75 s | | all settled; held to the last frame | |

In a film, cut in on a beat after the payoff, and put a `riser` in the film's
cues ending on the shot's first frame (the riser builds for 1.6 s before its
cue). Nothing leaves before the end.

## Layout

All centred on the frame's vertical axis, the block's middle at 47% of the
height (a touch above the middle). Sizes are in `S`: U × 1.44 in wide, 1.4
in tall and 1.1 in square (the long side has the room).

- **The lockup:** in wide and square the mark, a gap of 0.24 × the name's
  size, then the name; in tall the mark centred above the name, 0.3 × the
  name's size above its capitals, so the name can take the frame's width.
  The name in the product's font at its wordmark weight (the reference: Instrument Sans 600) at up to 19.3U in wide, 14U in square and 22U in
  tall, tracking −0.045 em, smaller if the lockup would pass 86% of the
  width (90% in tall); then everything under it shrinks with it (to 75% at
  most), so the name always leads. The mark's height is 0.82 × the name's
  capital height for the pill (twice as wide as tall), about 1.2 for a
  square or round mark, and it is never wider than 60% of the name (or its
  capital height), so a short name isn't outweighed; stacked, it keeps at
  least 60% of its full size however long the name. Beside the name it is
  centred on the letters: the capitals' middle, or the lowercase middle when
  the name has no capitals.
- **The rows under it,** an even gap of 4.5S between each one's ink and the
  next (Instrument Sans' capitals and ascenders reach 0.70 of the size, its
  descenders 0.16):
  - **the address:** the product's font at 600, 5.6S (never more than 60% of the name's
    size), tracking −0.02 em, ink;
  - **the action,** fitted to the lockup's width limit (86%, 90% in tall):
    `command`, the product's mono at 500 (the reference: JetBrains Mono) at up to 4.2S on a row 7S tall in the product's panel colour (a light ink row on a light product), 1.8S of
    padding each side, radius 1.6S, as a site shows a line to type, up to 56
    characters; or `button`, the product's font at 600 at up to 3.6S, tracking −0.01 em, on
    the accent, 8S tall (smaller than the mark, so the two never read as two
    buttons), 4S of padding each side, radius 1.6S, as the site's own button,
    a few words (24 characters at most). Either is at least 2.5× as wide as it
    is tall;
  - **the tagline:** the product's font at 500, 3.3S (never more than half the name's size
    or 1.1× the action's), tracking −0.01 em, muted (`#6a6a66`).
- Words on a fill are white, or ink if the fill is light.
- Every row fits the same width as the lockup: it shrinks, never wraps or
  cuts. Floor: nothing under 28 px at 1440 px on the
  short side (1.94U).

## Type

A word slams in: from 116% size, blurred (10 → 0, in U/10 px) and at 55%
opacity to set, eased out (cubic) over 2.6 steps (0.22 s). It arrives in the
accent, holds it for 2.5 steps and cools to its colour by step 5 (0.42 s).
The name cools to ink, the address to ink, the tagline to muted.

## Colour

Paper (the product's background, or `#f1f1ed`), ink (`#0b0b0b`), muted
(`#6a6a66`) and one accent, the product's brand colour: the mark, words as
they arrive, and the button. The command row is ink, never the accent.

## The mark

The relay object of the product film: the same shape that carried the film
ends it. The product's own mark (its symbol, not the wordmark: the name is
set in type), or the placeholder pill in the accent until there is one.

## Sound

- Effects from the kit, each on its visual onset: a soft `pop` as the mark is
  born, as the name lands, with the address and with the action. No accents.
- Music: the 120 BPM bed, the full groove for the first bar, then pad and
  hats alone for the second: the outro. Product-film's last two chords.
- Mastered around −14 LUFS.

## Banned

- More than one action; an action that isn't the site's, or doesn't work as
  typed; an action cut, wrapped or ellipsed.
- An ending with only a logo; anything leaving before the last frame.
- A mark that isn't the product's, redrawn, recoloured into another brand or
  invented.
- Fades; a second accent; gradients, glows or coloured shadows.
