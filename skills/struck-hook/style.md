# Struck hook: style

The opening of the product film (`product-film`, its hook, bars 0–1),
as a shot of its own. The old way in three huge lines, landing on the beat;
then every line struck through in the accent, a line a step; then a hold.
Crossing out all of it reads as one decision: not this any more.

The grammar comes from a measured study of three 2026 launch films (Figma
Motion, ElevenLabs' Reception, @LexnLin's Tessel). Take the grammar, never
the content.

## Format

- 5 s on a 120 BPM grid: a beat is 0.5 s, a bar 2 s.
- 60 fps, rendered with motion blur (`--blur 4`). Choreography is timed in
  steps of 1/12 s (`F` in the film).
- The grid starts one frame (1/60 s) in, so the first frame is clean paper.
  Every time below is on the grid; add 1/60 s for the clip's own clock.
- Three shapes, each laid out for its frame: 16:9 (1920 × 1080), 1:1
  (1440 × 1440), 9:16 (1080 × 1920).

## Timeline

| Time | Grid | What happens |
|---|---|---|
| 0.0 s | bar 0, beat 0 | Line 1 slams in, a word a step |
| 1.0 s | bar 0, beat 2 | Line 2 |
| 2.0 s | bar 1, beat 0 | Line 3 |
| 3.0 s | bar 1, beat 2 | The strike: line 1, then lines 2 and 3 a step apart, each drawn in 3 steps |
| 3.42 s | | All three struck |
| 3.42–5.0 s | | Hold: the struck lines, still |

Key times (settled): 0.75, 1.75, 2.75, 3.75 and 4.75 s. Poster: 4.5 s.

## Type

- The product's font at 700 (the reference: Instrument Sans), tracking −0.03 em, in its text colour.
- One size for all three lines: up to 15.5% of the frame's short side (20%
  in wide, where the width would otherwise go unused), the widest line fitted
  between the side margins: 11.2% of the short side in wide, 8% in square and
  tall. Each line stays on one line; a long line makes
  all three smaller, never wraps.
- Leading 1.02 × the size. The block is centred vertically on its cap
  heights (at 42% of the height in tall, clear of the buttons and captions
  that feeds lay over a tall video), so each line lands in its final place
  and nothing shifts.
- The lines are left-aligned and the block they make is centred in the
  frame, set by the widest line before any line lands, so nothing shifts.
- An empty field drops its line; the others close up, still centred.
- The slam: each word from 116% scale, soft (a blur of 1% of the short side)
  and at 55% opacity, to set in 2.6 steps (0.22 s), easing out (cubic). Words
  land a step apart.
- New words arrive in the accent for 2.5 steps, then cool to ink over 2.5
  more (settled 0.42 s after landing).

## The strike

- A bar in the accent, 8.5% of the type size thick, its top 46% of the cap
  height above the baseline (through the lower-case letters), from 0.6% of
  the short side before the line to 0.6% after it.
- Drawn left to right in 3 steps (0.25 s), easing out (cubic); each line a
  step after the one above.
- Every line is struck. Never leave one standing among struck ones.

## Colour

Paper (the product's light background, or `#f1f1ed`), ink (`#0b0b0b`) and
one accent: the product's brand colour (`#2f5bff` in the reference). The
accent means two things here: just arrived, and the problem (the strike).

## Sound

- Effects from the kit: `click` as each line lands; `swish` (gain 0.7) on
  the strike.
- Music (`--music`): the 120 BPM bed, pad (0.7) and hats (0.35) under the
  lines; the hats drop out on the last beat of bar 1 (3.5 s) and the pad
  (0.8) holds the struck lines to a 0.3 s fade.
- Mastered around −14 LUFS.

## Shapes

- Wide: the block sits centred, the type up to 20% of the height; long lines
  reach the 11.2% margins.
- Square and tall: the lines fill the width between 8% margins. In tall the
  block sits a little above the middle (42%), and the paper above and below
  stays empty; that calm is the frame, don't fill it.

## Words

- Three lines, each a few words (18 characters at most for each
  the others), sentence case with a full stop: the tool or method the
  product replaces, then what it costs (Lamplit's: "Cron on a box."
  "Retries by hand." "Pages at 3 a.m.").
- Only the old way. A line the viewer wants to keep (the product's own
  benefit) would be struck too.
- A number on screen needs a source you can name.

## In a film

In the product film this shot is bars 0–1; the turn cuts in on the
downbeat of bar 2, and the music takes a breath (drums out) on
the beat before it. To join them, end the shot at 4 s instead of holding.

## Changes from the product film

The motion and timing are the product film's. For the shot to stand alone:
the one-frame lead (a clean first frame), the hold to 5 s, the block centred
in the frame and up to 20% of the height in wide (the product film hangs it
from the left margin at 15.5%), the tall block at 42% of the height, and
empty lines dropped.

## Banned

- Fades, or lines that slide in: lines slam in on beats and stay.
- A fourth line; a line that wraps; type shrunk below the floor to fit a
  long line (shorten the words instead).
- More than one accent; gradients or glows.
