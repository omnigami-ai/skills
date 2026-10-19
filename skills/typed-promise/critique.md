# Typed promise: critique

Judge the shot as a stranger seeing it in a feed, with the sound off first.

Look at: the key-frame sheet of every shape (`--all --times key --sheet`),
the phone sheet of every shape (`--all --phone`), the quick test's sheets
(`out/stress/`), 12-frame strips where the bar opens (`--strip 0.85`) and
where it closes into the mark (`--strip 2.6`), in wide and in tall, and the
MP4 twice (once for the picture, once for the sound).

## Score each 1–10

1. **The turn:** it answers a problem in that problem's own terms, and reads
   in the moment it holds. The product is named within 3.5 s.
2. **The prompt:** a line the product really takes; it types on the beat,
   is whole on screen before the send, and never touches the caret or the
   send button.
3. **The mark:** one shape from birth to the lockup, never jumping; it reads
   on ink and on the white bar; it is the product's mark (or the placeholder
   pill).
4. **The lockup:** the name and the promise read at a glance and hold for a
   second and a half or more; the promise says what it does, for whom; no
   lone word on a line.
5. **Shapes and readability:** each shape is laid out for its frame; on the
   phone sheets every word reads, nothing under the floor (2.4% of the short
   side).
6. **Brand and sound:** the product's ink and accent, the accent only for
   arrivals and the action; a sound on every action (cut, birth, typing,
   send, slide, name), around −14 LUFS.

## Hunt for

- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- the prompt's last letters hidden by the send button, or cut before the
  send;
- the mark jumping, resizing or changing colour between frames;
- a light mark lost on the white bar, or a dark one lost on ink;
- a name so long the lockup shrinks below the promise's weight;
- a lone word on the promise's last line;
- a turn that could still be describing the problem;
- a first frame that isn't clean ink;
- anything taken from another company's film.

For each issue write the shape, the time, what's wrong and the exact fix
("tall, 2.45 s: the caret touches the send button: raise BOX.gap to 3").
Fix the worst three, review again, score again. Nothing ships below 8.

With each fix, write what it must keep (the timing, sizes and moves
already right) and the times to look at again; look at them, and at the
cuts either side, before scoring again. If the same problem survives two
fixes, stop fixing it and report it with what you tried. Never loosen a
check, a size floor or the bar to get a pass. After three rounds, report
what remains instead of claiming it is finished.
