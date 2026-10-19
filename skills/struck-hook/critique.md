# Struck hook: critique

Judge the shot as a stranger seeing it in a feed, with the sound off first.

Look at: the key-frame sheet of every shape (`--all --times key --sheet`),
the phone sheet of every shape (`--all --phone`), the quick test's sheets
(`out/stress/`), a 12-frame strip at the strike (`--strip 3.0`, in wide and
in tall), and the MP4 twice (once for the picture, once for the sound).

## Score each 1–10

1. **The problem:** from the three lines alone, a stranger can say what the
   old way is and what it costs. Every line belongs to the old way, so
   striking all of them reads as one decision.
2. **Type:** huge, one size, each line on one line between the margins;
   even leading; the block balanced in the frame.
3. **Rhythm:** lines land on beats 0, 2 and 4; the strike starts on beat 2 of
   bar 1, a line a step; the hold is long enough to read the struck lines.
4. **Motion:** words slam and set without wobble; arrivals cool to ink; the
   strike crosses left to right through the lower-case letters.
5. **Shapes and readability:** each shape is laid out for its frame; on the
   phone sheets every word reads, nothing under the floor (2.4% of the short
   side).
6. **Brand and sound:** the product's paper, ink and accent, the accent only
   for arrivals and the strike; a click per line, a swish on the strike,
   around −14 LUFS.

## Hunt for

- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- a word cut by the frame's edge, or two words that run together;
- a line left unstruck, or a struck line the viewer still wants;
- a strike that misses the letters, or stops short of the full stop;
- a long line that made all three too small to slam (shorten it);
- a first frame that isn't clean paper;
- a number with no source;
- anything taken from another company's film.

For each issue write the shape, the time, what's wrong and the exact fix
("tall, 3.75 s: line 2 crowds the edge: shorten it to 'Up to $5k.'"). Fix
the worst three, review again, score again. Nothing ships below 8.

With each fix, write what it must keep (the timing, sizes and moves
already right) and the times to look at again; look at them, and at the
cuts either side, before scoring again. If the same problem survives two
fixes, stop fixing it and report it with what you tried. Never loosen a
check, a size floor or the bar to get a pass. After three rounds, report
what remains instead of claiming it is finished.
