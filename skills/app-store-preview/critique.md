# App Store preview: critique

Judge both cuts as a stranger would: the store cut as someone scrolling the
App Store with the sound off (it autoplays muted, small, in search results
and on the product page); the social cut as someone seeing it in a feed.

The bar: established beats (the words change, then the screen moves, then the next words land; one change at a time); one expo-out curve for every travel, settling slowly and softly; the whole phone in social, nothing cropped; a card that travels into its new row and changes on the way, never a crossfade; no frame where a moving card or its row is missing; no lone dot before a mark; the name joins the mark within 0.5 s.

Look at: the key-frame sheet of every size (`--all --times key --sheet`),
the phone sheet of every size (`--all --phone`), 12-frame strips at every
fast move (`--strip <t>`: the opening frost, a scroll, the phone rising, a
headline change, the phone dropping, the end card), the frame at 5.0 s of
the store cut (the poster), the MP4s twice (once for the picture, once for
the sound), the ffprobe numbers of the store MP4, and `STORY.md`'s claims.

## Score each 1–10

1. **Story:** with the sound off, could a stranger say what the app does by
   the first caption, follow each moment (its caption or headline, the
   action, the result that answers it), and know what to do at the end?
   Four or five moments that add up to one picture of the app, not a tour.
2. **Truth:** every screen is a real capture of the app, never drawn;
   every number has a source in `STORY.md`; sample data only; the callouts
   quote what is on screen.
3. **Apple compliance (store cut):** every item of SKILL.md's checklist,
   verified on the MP4: 886 × 1920, 15–30 s, ≤ 30 fps, H.264 High ≤ 4.0 at
   about 10–12 Mbps, stereo AAC 256 kbps at 44.1 or 48 kHz, under 500 MB;
   only the app's UI at its native size (no frame, hands, people, zooms);
   the app's own navigation and list moves, dissolves, fades and cuts only; no prices, dates, seasons or other
   platforms; subscription features tagged and disclosed; one music bed;
   captions held long enough to read; a strong poster frame at 5.0 s.
   Any failed item caps this score at 4.
4. **Craft:** taps land on the right control a beat before its result;
   screens arrive the way the app shows them (push, sheet, a region dissolve, a
   list reflow); scrolls move with the finger; in the social cut, headlines roll
   between beats, chips appear with a dot on the exact element, the phone rises
   fast and settles slowly without overshoot; nothing stops dead or short.
5. **Readability:** on every phone sheet, every caption, headline, label
   and callout reads; nothing meant to be read is under the floor (28 px at
   1440 px on the short side); the store captions read even at the size the
   App Store plays previews in search.
6. **Shapes:** the store cut fills 886 × 1920 with the app; the social cut
   is laid out for tall, square and wide, never cropped from one another.
7. **Rhythm and sound:** moments change on the beat; a tap sound on every
   tap; a break in the bed before each result; one bed only; about −14 LUFS.
8. **Brand and polish:** the app's own colours, fonts and words; one
   accent in the social cut; nothing clip-art, cartoonish, template-like or
   cheap; it looks like a top studio's preview.

## Hunt for

- **Breathing room** (a failure here caps the film at 7): an action the viewer can't follow on one viewing: a click within half a second of the camera or cursor arriving, a result gone in under a second, a caption or headline replaced before it can be read. Lengthen the film rather than compress the holds.
- **Type centred in its container** (pills, buttons, chips, badges, a word beside a mark): the capitals sit on the container's centre line, measured, not by eye. Words that ride high are the usual fault (textBaseline 'middle' and CSS line boxes both centre the font's em box, not the letters); draw with `kit.centreText`, and in HTML use `text-box: trim-both cap alphabetic` with equal padding. The quick test fails canvas text set with 'middle'; captured screens and HTML are checked on the stills.
- **The film's own shapes, finished:** every click has a press state on its visual onset (what's pressed sinks a few percent and lights or darkens, then comes back), and a held control shows it's held; apertures and reveals are clean circles or the product's own shapes, never blades or drawn lines; a shape that becomes another does it in one continuous move, not a chain of in-between shapes; a pulse is one thin ring that thins as it grows; nothing (a check, a label, an icon) vanishes or appears in a single frame at a hand-off: it moves, shrinks or is covered. Check each on a strip of consecutive frames from the MP4.
- in the store cut: a price, a date, a season, a device frame, a hand, a
  zoom past the capture's size, a whip or spin, an App Store badge or Apple
  mark, or a Plus feature without its tag;
- a caption or callout covering the control being tapped, or the element a
  callout points at;
- a callout dot sitting on a word, or a chip quoting something not on screen;
- a frame where a moving card, its row or its slot is missing (check every frame of each landing);
- text over text, a word cut by the frame or a rounded corner, a headline
  cut by its mask after it has settled;
- a tap with no change, or a change with no tap;
- a result that doesn't answer its caption, or a caption that claims more
  than the screen shows;
- ghosting: two screens blended in one frame outside a dissolve (a scroll
  must cut frame to frame);
- the poster frame (5.0 s) caught mid-dissolve, mid-tap or without its
  caption;
- a lone seed dot before a mark, a mark alone longer than 0.5 s, a final settled logo hold longer than 1.2 s, or a disclosure too small/brief to read;
- anything taken from the inspiring video: its words, app, motif, logo,
  music.

For each issue write the cut and size, the time, what's wrong and the exact
fix ("tall, 9.4 s: the 'Every 7 days' line crosses 'Water every': point it
at the value's right end, fx 0.95"). Fix the worst three, review again,
score again. Nothing ships below 8. After four rounds, report what remains
instead of claiming the film is finished.

With each fix, write what it must keep (the timing, sizes and moves already
right) and the times to look at again; look at them, and at the cuts either
side, before scoring again. If the same problem survives two fixes, stop
fixing it and report it with what you tried. Never loosen a check, a size
floor or the bar to get a pass.

Social cut's style inspired by @wallacex227's video
(https://x.com/wallacex227/status/2103245000989659422); they didn't make or
endorse it.
