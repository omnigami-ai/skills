# Product reel: critique

Judge the reel as a stranger seeing it in a feed, with the sound off first.

Look at: the key-frame sheet of every shape (`--all --times key --sheet`), the
phone sheet of every shape (`--all --phone`), 12-frame strips at every item
change, the pull-back, the dive, the orbit's fly-in and collapse, both irises
and the end (`--strip <t>`, in tall and in wide), the MP4 twice (once for
the picture, once for the sound), and `STORY.md`'s claims.

## Score each 1–10

1. **Catalogue:** with the sound off, could a stranger say who made this, what
   they make, roughly how many things, and where to find it? Each item is
   recognisable, named, and its detail line says something true and useful.
   The items vary (shape, colour, size), not six of the same.
2. **Truth:** every item is a real photo or render of the company's own
   thing; every screen is a capture of the real product; every word and number
   has a source in `STORY.md`; no prices or dates unless the brand allows
   them; no other company's products or marks.
3. **Rhythm:** an item lands on every beat, exactly; sections start on beats;
   counts land a beat apart; the line types on half-beats; the reel never
   stalls and never rushes past something meant to be read.
4. **Motion:** pushes are fast with soft landings; the pull-back is
   front-loaded and lands in the real screen without a jump (the cut-out hands
   over to the capture invisibly); irises accelerate; springs settle; nothing
   stops dead; a moving item never crosses the words.
5. **Readability:** on every shape's phone sheet, every word meant to be read
   is readable; nothing under the floor (2.4% of the short side for words,
   28 px at 1440 px for the quick test); the pale ghost word reads in full
   at rest, with at most about 20% of its letter area covered by the item.
   Check it by eye even though the quick test excludes text below 50% opacity.
6. **Shapes:** each is laid out for its frame: tall stacks, wide sits side by
   side, square in between; the screen is whole in tall and a close-up card
   elsewhere; the orbit's line sits in the ring's hole in every shape.
7. **Polish:** it looks like a top studio's work: nothing clip-art,
   cartoonish, template-like or cheap; type set with care (sizes, spacing,
   line breaks); the brand's own colours, fonts and mark.
8. **Sound:** a sound on every move; the bed's breaks before the first item,
   the pull, the dive and the end; loudness around −14 LUFS.

## Hunt for

- **Breathing room** (a failure here caps the film at 7): an action the viewer can't follow on one viewing: a click within half a second of the camera or cursor arriving, a result gone in under a second, a caption or headline replaced before it can be read. Lengthen the film rather than compress the holds.
- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- text over text, or a word cut by a frame edge or a rounded corner;
- a still on a beat showing a half-ticked number or a half-swapped word;
- a moving item crossing the words, or an item cut by its window's edge
  while at rest;
- a ghost word that reads as fragments, fights the item, or hides behind it;
- the cut-out and the capture visibly not lining up at the hand-over;
- a capture shown past its sharpness (soft text) while it holds;
- the orbit's line touching a tile; far tiles bright enough to fight the line;
- an iris that opens onto the wrong thing, or a pop at its first frame;
- a count that lands after the mark covers it;
- the address leaving early, or a last frame with only a logo;
- anything taken from the inspiring video: words, products, marks, layouts
  copied pixel for pixel.

For each issue write the shape, the time, what's wrong and the exact fix
("tall, 4.0 s: 'every 7 days' on Dot mid-tick: finish the tick by the beat").
Fix the worst three, review again, score again. Nothing ships below 8. After
four rounds, report what remains instead of claiming the reel is finished.

With each fix, write what it must keep (the timing, sizes and moves already
right) and the times to look at again; look at them, and at the cuts either
side, before scoring again. If the same problem survives two fixes, stop
fixing it and report it with what you tried. Never loosen a check, a size
floor or the bar to get a pass.
