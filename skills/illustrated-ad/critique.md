# Illustrated ad: critique

Judge the film as a stranger seeing it in a feed, with the sound off first.

Look at: the key-frame sheet (`--times key --sheet`), the quick test's sheets (`--stress`), the phone sheet (`--phone`), strips of consecutive frames from the MP4 at each draw-on, each product's rise, each push and the end, and the MP4 twice.

## Score each 1–10 (nothing ships under 8)

1. **The point:** with the sound off, a stranger can say what the products are, what's in each, and what to do next.
2. **Truth:** the products are the real ones (photographs or photorealistic renders of the real packaging); the ingredients are what's really in them.
3. **Craft:** the drawings look made by one skilled hand, in the packaging's own style; nothing clip-art or cartoonish; the draw-on reads as drawing, not a wipe.
4. **Readability:** every name read before it leaves; nothing under 28 px on the phone sheet.
5. **Motion:** each drawing finishes before its product rises; the products rise from their base; the pushes fast out with a soft settle; nothing pops in a single frame.
6. **Rhythm and sound:** the pen, the rises and the pushes on beats; nothing harsh.
7. **Brand:** the brand's paper, colours, type and wordmark.

## Hunt for

- **Breathing room** (a failure here caps the film at 7): an action the viewer can't follow on one viewing: a click within half a second of the camera or cursor arriving, a result gone in under a second, a caption or headline replaced before it can be read. Lengthen the film rather than compress the holds.
- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- a drawing that reveals as a straight wipe or a fade rather than strokes;
- a cut-out product with a fringe or a halo from its old background;
- a wide drawing running off the frame.

For each issue write the time, what's wrong and the exact fix. Fix the worst three, review again, score again. After three rounds, report what remains.

With each fix, write what it must keep (the timing, sizes and moves already right) and the times to look at again; look at them, and at the cuts either side, before scoring again. If the same problem survives two fixes, stop fixing it and report it with what you tried. Never loosen a check, a size floor or the bar to get a pass.
