# Critique

Be a harsh motion director who didn't build this. Default: reject. Look at the
pictures; don't score from the code.

## What to look at

- `node scripts/compare.mjs reference film out/compare-1x1.png --size 1:1`, and the same with `--size 16:9` and `--size 9:16`: the reference above yours at one moment in every state (30 moments), in every shape.
- `node scripts/render.mjs film --all --stress`: the quick test's sheets in `out/stress/`, with the words at their longest and shortest.
- Strips around every fast moment, in every shape (SKILL.md step 6). This film has many; a pop or a jump hides between the stills.
- `node scripts/render.mjs film --all --phone`: one frame a second at 360 px wide.
- The first and last frames side by side (`--all --times 0,26.99`): they must match, cursor included.

Score each shape on its own; a film ships when every shape does.

## Score each 1–10

1. **One continuous take:** nothing cuts, fades or blurs in. Every scene is visibly made out of the one before it (the shape, the tile, the screen, the phone's cutout, the black circle).
2. **Timing:** every move starts on the same beat as the reference; the zoom lands on the drop; the result sits in the breakdown.
3. **Springs and camera:** shapes overshoot a little and settle; the camera glides, never snaps; nothing slides linearly or stops dead.
4. **Fit:** every word fits its shape with room to spare in every state and every shape; nothing is clipped by rounded corners or the frame; labels never overlap during a swap; nothing crowds its frame or is lost in it.
5. **Readability:** on the `--phone` sheet every word meant to be read is readable, and no text is smaller than the type table in `style.md`.
6. **Truth:** every state shows something the product really does, in its own words, with sample data.
7. **Craft:** the product's colours and mark carry the screens; icons share one stroke weight; spacing is even; the glass reads as glass.
8. **Loop:** the last frame equals the first.

## Hunt for

- **A story that doesn't hold:** with the sound off, say what happened in one sentence. If a step happens twice, a result comes before its cause, a step isn't one the product's customers really take, or the end isn't the real result (a framed picture of the product, a screen nobody needs), the film fails whatever its motion scores.
- **Breathing room** (a failure here caps the film at 7): an action the viewer can't follow on one viewing: a click within half a second of the camera or cursor arriving, a result gone in under a second, a caption or headline replaced before it can be read. Lengthen the film rather than compress the holds.
- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- a state that holds for more than a beat with nothing moving;
- a label fading instead of rising out of its mask line;
- a flood that changes half the screen in one frame (it must grow past the corners over about 0.2 s);
- the camera zoomed so far that the thing being clicked is off the frame;
- the cursor covering what it points at, or clicking where nothing responds;
- a tile or screen that shows a feature the product doesn't have, or a screen of the product drawn for the film instead of captured;
- text overlapping text as a page pushes in or the order states change;
- a zoom whose edge cuts through words: frame whole columns of the page;
- a screen that jumps size or position at a hand-off (tile → full frame, the summary row → "Box ready", page → page, full frame → phone, page → lock screen, notification → dot);
- a wide or tall frame that looks like square cropped or shrunk; the camera looking past the edge of a screen;
- another company's UI (phone maker, browser maker, the inspiring film's photos or copy).

For every mismatch write: state and time, what's wrong, and the exact fix
("order label overlaps at 20.5: start the next label 0.06 s after the last one
leaves"). Fix the five that matter most, compare again, score again. Nothing
ships below 8.

With each fix, write what it must keep (the timing, sizes and moves already
right) and the times to look at again; look at them, and at the cuts either
side, before scoring again. If the same problem survives two fixes, stop
fixing it and report it with what you tried. Never loosen a check, a size
floor or the bar to get a pass. After three rounds, report what remains
instead of claiming it is finished.
