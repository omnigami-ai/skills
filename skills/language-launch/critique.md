# Language launch: critique

Judge the film as a stranger seeing it in a feed, with the sound off first,
and once more as a speaker of each language it shows.

Look at:
- the key-frame sheet: `node scripts/render.mjs film --size 9:16 --times key --sheet`;
- `node scripts/render.mjs film --size 9:16 --stress`: the quick test's sheets in `out/stress/`, with the words at their longest and shortest;
- `node scripts/render.mjs film --size 9:16 --phone`: one frame a second at 360 px wide;
- strips of consecutive frames from the MP4 at every language change and at the count;
- the MP4 twice (once for the picture, once for the sound).

## Score each 1–10 (nothing ships under 8)

1. **The point:** with the sound off, a stranger says "it's in N languages now" by the count, and knows which product and which languages.
2. **Truth:** every language is the product's own, captured; each name is in its own script; nothing is translated for the film.
3. **Readability:** each language holds long enough to read the greeting and the first line; every word meant to be read is readable on the phone sheet; no script falls back to a system font.
4. **Motion:** the old name leaves before the new one rises; no line rises into the one above; each swipe is fast out with a soft settle, and the name and the phone arrive together; the row is one move; nothing pops in a single frame.
5. **Layout:** the headline balanced over the phone; after the glide, the count and the names centred; the end card centred and calm.
6. **Rhythm and sound:** each language on its beat; a sound on each arrival and each swipe; nothing harsh.
7. **Brand:** the product's ground, type, accent and mark; its own words.

## Hunt for

- **Breathing room** (a failure here caps the film at 7): an action the viewer can't follow on one viewing: a click within half a second of the camera or cursor arriving, a result gone in under a second, a caption or headline replaced before it can be read. Lengthen the film rather than compress the holds.
- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- a language name in English ("Spanish") instead of its own ("Español"); a mis-spelt or wrongly accented name;
- a capture where the product's own layout breaks in one language (a clipped button, an overflowing card): report it to the user rather than hiding it;
- a language change that redraws one screen in place (a layout shift reads as a fault), or a swipe so soft it reads as a glitch rather than a move.

For each issue write the time, what's wrong and the exact fix ("4.3 s: Español's descender shows under the headline: raise the mask's top edge"). Fix the worst three, review again, score again. After three rounds, report what remains.

With each fix, write what it must keep (the timing, sizes and moves already right) and the times to look at again; look at them, and at the cuts either side, before scoring again. If the same problem survives two fixes, stop fixing it and report it with what you tried. Never loosen a check, a size floor or the bar to get a pass.
