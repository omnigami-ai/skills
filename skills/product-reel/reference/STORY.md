# Fernwise: the reel

20.45 s in the current portrait cut (1080 × 1920), with a 120 BPM bed.
Square (1440 × 1440) and wide (1920 × 1080) are earlier revisions. Fernwise is a fictional
plant-care iPhone app made for omnigami's examples (`cast/fernwise/`). Real
material only: the eleven studio cut-outs from `cast/fernwise/renders/cutout/`
(`assets/plants/`), screens captured from the working app with
`plans/mobile.json` (`assets/screens/`), the approved Keeper mark (`cast/fernwise/mark.svg`,
drawn from its own SVG path) and the brand's fonts (Fraunces with SOFT 100, WONK 0
and optical size 144 pinned by fontTools' instancer; Nunito), with their OFL
files in `assets/fonts/`.

**What it shows:** everything Fernwise keeps, one plant per readable 1.25 s slot: Priya's whole
shelf, then the shelf itself, its numbers, the line, the search that adds the
next one, and the name.

| Time | Section | What happens |
| --- | --- | --- |
| 0–1.85 | Open | Keeper and the name are already forming on frame 0; tagline lands by .34. Horizontal push begins at 1.55. |
| 1.75–10.50 | Plants | Seven 1.25 s slots. Photos breathe, the progress segment fills and each detail line has ≥1.02 s fully landed. |
| 10.50–12.15 | Pull / Shelf | Spike pulls into the real Shelf in .65 s. The whole card drifts 6.48 px through its 1 s reading hold. |
| 12.15–13.95 | Numbers | Real Shelf washes pale. Three numbers enter with a .12 s stagger; the panel drifts during the read. Next push begins at 13.65. |
| 13.65–16.45 | Orbit | Overlapping vertical push, eleven real photo tiles around the headline, then convergence at 15.75. Search push starts at 16.15. |
| 16.15–18.85 | Search | The actual “m”, “mo”, “mon” captures update only their field, match label and result rows at 16.55, 16.75 and 16.95. Removed rows lift and fade within their own boxes. Final result holds ≥1.08 s with 7.56 px whole-card drift. Closing push begins at 18.25. |
| 18.25–20.45 | End | The mark grows off-frame during the overlapping push; name slides and fades inside the safe area. Address settles at 19.25, holding through the 1.2 s final push. |

## The plants, in order

Every word is the app's own sample data (`cast/fernwise/app/data.js`), as the
app shows it: common name first, botanical second; care values from the
plant's own page; status words from the Shelf screen (Dot's Needs light pill is its badge, not its countdown ring) (`assets/screens/shelf@3.webp`).

| Beat | Photo | Name | Behind it (common name) | Botanical | Care line | Pill |
|---|---|---|---|---|---|---|
| 1.75 | `monty` | Monty | Swiss cheese plant | Monstera deliciosa | Water every 7 days · Bright, indirect | Due today |
| 3.00 | `pickles` | Pickles | Pancake plant | Pilea peperomioides | Water every 6 days · Bright, indirect | Due today |
| 4.25 | `fernando` | Fernando | Boston fern | Nephrolepis exaltata | Water every 3 days · Medium light | Due today |
| 5.50 | `olive` | Olive | Olive tree | Olea europaea | Water every 10 days · Full sun | In 6 days |
| 6.75 | `dot` | Dot | Polka dot plant | Hypoestes phyllostachya | Water every 4 days · Bright, indirect | Needs light |
| 8.00 | `basil` | Basil | Sweet basil | Ocimum basilicum | Water every 2 days · Sunny sill | Tomorrow |
| 9.25 | `spike` | Spike | Snake plant | Dracaena trifasciata | Water every 14 days · Any light | In 5 days |

Spike goes last because it sits in the middle of the Shelf grid (row 2,
column 2), so the pull-back lands in the centre of the screen.

## Numbers

| On screen | Source |
|---|---|
| 7 plants | Shelf screen: "7 plants · 3 due today"; `data.js` `shelf` (seven plants) |
| 148 waterings this year | You screen (`assets/screens/you@3.webp`): "148 Waterings this year"; `data.js` `user.waterings` |
| 12 day streak | You screen: "12 day streak"; `data.js` `user.streak` |

All three are the same moment: Wednesday morning before Priya waters. (After
she waters this morning's three plants the app shows a 13-day streak and 151
waterings; the reel doesn't mix the two.)

## Lines

| Line | Source |
|---|---|
| Plant care for people who forget to water. | `cast/fernwise/brand.md`, the company's one-line description |
| Keep the little ones alive. | `cast/fernwise/brand.md`, the tagline; the app's footer |
| fernwise.example | `cast/fernwise/brand.md`, web |

No dates and no prices on screen (the brand's App Store rule). No people
beyond the sample account's name in the captured screens. Fernwise is
fictional; the skill's page says so.

Style inspired by [@justinmfarrugia’s video](https://x.com/justinmfarrugia/status/2103822390870569266). An independent style study; the creator did not make or endorse this film.

The mark is Keeper's: `assets/mark.svg` and `assets/lockup.svg` are copied
from the current cast. Screens were recaptured
after the cast update. No old sprout is drawn by the film.

Historical portrait revision 2 (2026-10-15; superseded by revision 3 below): the relay outline now morphs into Keeper
at full opacity in the opening and ending. Product photos lift with a
brief overlap rather than leaving an empty frame. The orbit's surviving
Monty tile begins docking at 11.48 while the others fold, rounds into the
same circular aperture, and opens onto Monty's real search thumbnail.
Entrances use quint-out or critically damped springs. Story, claims,
captures and the approved logo path are unchanged. Only 9:16 was reviewed
and exported for this revision.


## Portrait revision 3 (2026-10-15)

This supersedes the portrait motion timings above. The story, catalogue
items, claims and original logo stay the same. `kit.motion.markReveal`
now owns the open and end; `iris` uses the actual container footprint and
bounded radius growth; `converge` folds the orbit tiles into the iris's
same cream seed at frame centre. This replaces revision 2’s thumbnail
docking; no photo-to-thumbnail landing is claimed for revision 3. Entrances use `out`/`settle`; camera moves use `inOut`.
The headline leaves 10.96–11.10 before convergence begins. The proof opens
11.64–12.20; the reverse iris closes 13.12–13.65; the address settles at
14.50 and the end pushes in gently through 15.00. Only 9:16 is revised,
reviewed and exported. Square and wide haven't had the same review yet.

The larger real Shelf and search cards use CSS rows 47–676, 16 px frame
margins and 88% of the frame height. The actual search types “mon” at
12.35, 12.433 and 12.517 s, showing the same real filtered results.


## Portrait revision 4 (2026-10-15)

This supersedes all earlier portrait timing and logo handoffs. The current
cut lasts 21.25 s: items begin at 2 s and get 1.25 s each, including
more than 1 s fully landed for the last detail line. Whole-scene pushes
replace every iris. Orbit tiles retain their photographs, aspect ratios
and rounded corners as they converge into a stack, then slide away. No
item becomes a dot or circle. Side margins are 75.6 px (7% of 1080);
containers sit inside the 192 px top/bottom safe frame (10% of 1920).
Logo moments use only the generic `kit.motion.markReveal`. The end address
settles with 1.2 s remaining. Claim sources and sample data above still apply.

Fernwise keeps the approved Keeper mark and existing real app captures.
The Shelf pull lands at 11.40 s and holds to 12.40. Search arrives at
16.40; the real “m”, “mo”, “mon” captures start at 16.80, 16.92, 17.04.
The final three results remain readable until 18.85 s.

Only 9:16 is revised, checked and exported in this round. Square and wide
are earlier revisions; do not present their old MP4s as revision 4.


### Revision 4 independent-review repairs

Old item captions and counters now clear before any new caption enters;
there is one readable counter at a time. Photos may overlap briefly during
their moving handover. The orbit headline enters as one cream-colour block
with a rise and fade, replacing the earlier word-by-word green typing. Its
stress box is narrower so every edit stays inside the ring's hole. The
converged photo stack keeps drifting and gently growing into the proof's
whole-scene push; it has no static hold and does not turn into a dot. The
end seed begins before the outgoing card clears, avoiding blank frames.
These descriptions supersede all earlier animation descriptions, including
the original storyboard above.


## Portrait revision 7 (2026-10-16)

The opening table is the current 20.45 s portrait timeline. Earlier revision
sections above are historical. Claims, sample data, supplied Keeper paths,
photos and captures are unchanged. All state changes in the portrait search
are confined to measured UI boxes; the card keeps its position when results
shrink. No whole-capture state dissolve, circular transition, riser or score
accent is used. Reading holds keep a small whole-container drift, and the
closing mark is visible alone for less than .5 s.

Only 9:16 was revised and rendered. See [NOTES-rev7.md](NOTES-rev7.md) for
validation, sound timing and review artifacts.
