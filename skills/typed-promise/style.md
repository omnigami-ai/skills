# Typed promise: style

The turn and the promise of the product film (`product-film`, bars
2–3), as a shot of its own. The answer to the problem lands on the cut; the
product's mark is born under it, opens into a prompt bar and types one line;
the line is sent, the bar closes back into the mark, and the mark takes its
place beside the name, with the promise under them. Then a hold. One shape,
the mark, carries through every seam.

The grammar comes from a measured study of three 2026 launch films (Figma
Motion, ElevenLabs' Reception, @LexnLin's Tessel). Take the grammar, never
the content.

## Format

- 6 s on a 120 BPM grid: a beat is 0.5 s, a bar 2 s.
- 60 fps, rendered with motion blur (`--blur 4`). Choreography is timed in
  steps of 1/12 s (`F` in the film).
- The grid starts one frame (1/60 s) in, so the first frame is clean ink.
  Every time below is on the grid; add 1/60 s for the clip's own clock.
- Three shapes, each laid out for its frame: 16:9 (1920 × 1080), 1:1
  (1440 × 1440), 9:16 (1080 × 1920).

## Timeline

| Time | Grid | What happens |
|---|---|---|
| 0.0 s | bar 0, beat 0 | The cut into ink: the turn lands, a word a step |
| 0.5 s | beat 1 | The mark is born under the turn |
| 0.75 s | beat 1.5 | The turn leaves: it fades and rises over 2.5 steps |
| 0.875 s | beat 1.75 | The bar opens out of the mark and rises to the middle |
| 1.04 s | + 2 steps | The prompt types in |
| 2.0 s | bar 1, beat 0 | The prompt is whole; the caret blinks |
| 2.5 s | bar 1, beat 1 | Send: the mark presses; the words clear |
| 2.625 s | beat 1.25 | The bar closes back into the mark, in the middle |
| 2.875 s | + 3 steps | The mark slides to its place beside the name |
| 3.04 s | + 2 steps | The name slams in |
| 3.29 s | + 5 steps | The promise lands, a word a step |
| about 4.3–6.0 s | | Hold: the mark, the name and the promise, still |

Key times (settled): 0.67 s (the turn), 2.45 s (the whole prompt), 4.75 and
5.9 s (the lockup). Poster: 5.5 s.

## The turn

- The product's font at 700 (the reference: Instrument Sans), tracking −0.03 em, its light text colour, centred, its baseline 3% of the short
  side above the middle. Up to 11% of the short side, fitted to 84% of the
  width.
- Words slam in a step apart: from 116% scale, soft (a blur of 1% of the
  short side) and at 55% opacity, to set in 2.6 steps (0.22 s), easing out
  (cubic). New words arrive in the accent for 2.5 steps, then cool to white
  over 2.5 more.
- It leaves on beat 1.5: opacity to 0 and up 4% of the short side, in 2.5
  steps, easing out (cubic).

## The mark and the bar

- The mark (the reference's: Lamplit's flame; with no mark, a pill 6.4% of the
  short side tall, twice as wide, in the accent) is born 9% of the short side
  below the middle at 60% of its size, fading up over 0.2 s as it grows on a
  spring (stiffness 420, damping 22): never a lone dot. A narrower mark stands
  taller so it keeps the pill's weight: √(2 ÷ its width-to-height ratio)
  times, up to 1.4 × for a square one.
- The bar opens out of it on a spring (300, 24), up to 108%, its width
  leading its height (the height follows the square of the spring), so it
  slides out from behind the mark: white, a one-line bar 12.5% of the short
  side tall, its corners half that. As it
  opens it rises from where the mark was born to the middle. The mark rides
  to its right end as the send button, at 86% size, inset 3.5% from the end
  (as from the top).
- The bar is as wide as the words need: a 3.4% pad, the prompt, 4.4% kept
  for the caret, the button and its inset. Never narrower than 56%
  of the short side.
- On the send the mark presses to 88% for 2 steps; the words clear half a
  step later, fading in 1.5 steps where they stand; 1.5 steps after the press
  the empty bar closes back into the mark on the same spring, staying in the
  middle.
- The mark slides from the middle to its place in the lockup on a spring
  (260, 24), growing from the turn's size to 82% of the name's cap height
  (times the same factor for a narrower mark).
  It never jumps: one shape from the first beat to the last frame.

## The prompt

- The product's mono at 500 (the reference: JetBrains Mono), ink on the light bar, up to 4.6% of the short side. One
  line when it fits at 3.7% or more (wide); otherwise two even lines (square
  and tall), split at the space that makes the longer line shortest, line
  height 1.32 ×, so it stays readable on a phone. A two-line bar grows by one
  line height.
- Typed from 2 steps after the bar starts to open: 3 letters a step (36 a
  second), faster for a long prompt, so the last letter lands a step before
  the beat before the send (the reference's 40 letters: 46 a second). Each
  letter arrives in the accent and cools to ink over 5 steps.
- The caret: the accent, 0.32% of the short side wide and 1.1 × the type
  tall; it appears once the bar is 60% open, steady while typing, blinking
  (half a second on, half off) once the prompt is whole, gone on the send.
  The words and the caret never leave the bar.

## The lockup

- The name: the product's font at its wordmark's weight (the reference: Instrument Sans 600, lowercase), tracking −0.04 em, light, up to 13% of the short
  side, smaller if the mark, a gap of 24% of the size and the name would pass
  86% of the width. Centred as a group with the mark. It slams in 2 steps
  after the mark starts to slide.
- The promise: the product's font at 500, tracking −0.01 em, its muted text colour (the reference: `#8D93A8`),
  4.4% of the short side (× 1.15 in tall), centred, wrapped at 86% of the
  width into even lines, breaking after a comma where it can and never
  leaving a lone last word, line height 1.3 ×, its first
  baseline 9.5% of the short side below the name's. When a long name had to
  shrink, the promise shrinks with it, so the name stays about twice its
  size (a quarter smaller at most), and so does that drop. It lands 5 steps
  after the mark starts to slide, a word a step, each further line 3 steps
  later.
- The name and the promise stay centred as a group: a second line of promise
  lifts both by half a line.

## Colour

Ink (`#0b0b0b`, or the product's dark colour), white words and one accent:
the product's brand colour (`#2f5bff` in the reference). The accent means two
things here: just arrived (words, letters), and the action (the mark as the
send button and beside the name).

## Sound

- Effects from the kit: `hit` (0.8) on the cut; `pop` as the mark is born;
  a soft `swish` (0.4) as the bar opens; a `tick` each step while typing;
  `click` on the send; `swish` (0.6) as the mark slides to the name; `pop`
  (0.7) as the name lands.
- Music (`--music`): the 120 BPM bed with kick (0.75), hats (0.55), bass
  (0.7) and pad (0.55) from the cut, an impact on the cut, then pad (0.8) and
  hats (0.3) under the hold, to a 0.3 s fade.
- Mastered around −14 LUFS.

## Shapes

- Wide: the prompt on one line at 4.6% in a long bar; the promise on one
  line.
- Square and tall: the prompt on two even lines, so it stays at 4.6% of the
  short side instead of shrinking to about 3%; the promise wraps into two
  even lines.
- Every shape keeps one centred group; in tall the ink above and below stays
  empty.

## Words

- The turn: the answer to the problem in its own terms, the opposite of the
  old way in as few words, 18 characters at most. Never a line that answers
  something the problem didn't say.
- The prompt: a line a user really types into the product, 44 characters at
  most.
- The name, as the product writes it, 16 characters at most; the promise:
  what it does, for whom, in the site's words, 52 characters at most.

## In a film

In the product film this shot is bars 2–3, after the hook. There the
send comes a beat sooner and, instead of the hold, the mark floods the frame
in the accent on the last beat of bar 3 to carry the cut into the first
proof.

## Changes from the product film

The motion is the product film's. For the shot to stand alone and read: the
one-frame lead (a clean first frame); the send a beat later, so the whole
prompt is on screen before it goes (in the product film the last letters
never appear); the bar closes in the middle and the mark grows smoothly into
the lockup (no jump between the two); the bar sliding out sideways; the
words clearing on the send instead of vanishing as the bar closes; room for
the caret before the send button; two-line prompts in square and tall; even
wraps; the lockup fitted to the width for long names; and the hold instead
of the flood.

## Banned

- Fades between the parts: the turn lands on the cut and the mark carries
  every seam.
- A prompt the product doesn't take, or a promise the site doesn't make.
- A second mark, or the mark jumping between places.
- More than one accent; gradients or glows.
