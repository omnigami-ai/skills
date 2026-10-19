# End card: critique

Judge the shot as a stranger seeing it at the end of a film in a feed, with
the sound off first.

Look at: the key-frame sheet of every shape (`--all --times key --sheet`), the
phone sheet of every shape (`--all --phone`), the quick test's sheets
(`out/stress/`, including the button cases), a strip of the mark's birth
(`--strip 0.2`, in wide and in tall), and the MP4 twice (once for the
picture, once for the sound).

## Score each 1–10

1. **The ask:** by the last frame a stranger knows the product's name, where
   to go and the one thing to do; the action is exactly the site's (the line
   types as shown, the button says what the site's says).
2. **Hold:** a clean first frame; everything settled by about 2.8 s and still
   on screen, unchanged, to the last frame.
3. **Rhythm and motion:** the mark pops with a little overshoot and slides
   aside, the name slams in a step later, the address and the action on
   beats, the tagline on the downbeat; a sound on each; nothing stops dead.
4. **Readability:** every word readable on every phone sheet, the action
   most of all; nothing under the floor, cut, wrapped or touching, in the
   default, longest and shortest words and as a button.
5. **Layout:** each shape laid out for its frame: the block centred and
   balanced, the mark and the name one lockup (the mark neither tiny nor
   heavier than the name), even steps between the lines.
6. **Brand:** the product's own mark (or the pill, stated as a placeholder),
   its accent used only for the mark, arrivals and the button; its paper, ink
   and words.

## Hunt for

- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- an install line with a typo, a stray space, or shrunk past easy reading;
- a button with words the site doesn't use, or two actions;
- a mark that doesn't read on the paper, or a wordmark beside the name
  (the name twice);
- a long name that shrinks the lockup while the lines under it stay big;
- a jump in the mark's slide, or the name landing before the mark is in place;
- anything taken from another company's film.

For each issue write the shape, the time, what's wrong and the exact fix
("tall, 3 s: the action row runs to the frame's edge: shorten it to the
package name"). Fix the worst three, review again, score again. Nothing ships
below 8. After three rounds, report what remains instead of claiming the shot
is finished.

With each fix, write what it must keep (the timing, sizes and moves already
right) and the times to look at again; look at them, and at the cuts either
side, before scoring again. If the same problem survives two fixes, stop
fixing it and report it with what you tried. Never loosen a check, a size
floor or the bar to get a pass.
