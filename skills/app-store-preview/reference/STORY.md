# Fernwise: the story

Fernwise is a fictional company made for omnigami's examples: an iPhone app
for plant care, with sample data only (`cast/fernwise/`). Every screen in
this film is a capture of its working app (`plans/fernwise.json`, run with
`scripts/screens.mjs` against `cast/fernwise/app/` at 3×).

One film, two cuts, on one story grid: 28 s at 120 BPM (a beat 0.5 s, a bar
2 s), 30 fps.

- **The store cut** (`886:1920`): Apple's App Store preview for iPhones
  with large and medium displays. Only the app's own screens, full frame at
  their native size, with touch hotspots, short captions, dissolves and one
  music bed.
- **The social cut** (`9:16`, `1:1`, `16:9`): the same moments for posting,
  in the grammar of @wallacex227's app promo: a dark ground, numbered
  chapters, two-line headlines with one italic accent phrase, the app in a phone,
  callouts on fine leader lines, a three-line recap and an end card.

**The viewer:** someone with a few houseplants who forgets to water them.
**Their goal:** keep them alive without thinking about it. **The answer:**
Fernwise tells them who's thirsty today, how to add a plant, what to do when
one struggles, and where the light is right.

## Moments

| Time | Moment | Store cut (full screen) | Social cut (phone on moss) |
|---|---|---|---|
| 0–2 | Open | Today, frosted, under the mark and "Plant care for people who forget to water."; the frost clears at 1.6 | 01 — WATER. "Who's thirsty *today?*" Monty, Pickles and Fernando in their empty (thirsty) rings land on beats |
| 2–6 | Water | Caption "Three thirsty. *Three taps.*" Taps Water on Monty (2.5), Pickles (3.5), Fernando (4.5) → "All watered. 13-day streak." **Poster frame at 5.0** | Monty's real card alone, large; tap ring on Water (2.75); the phone rises with Today; taps Pickles (4.0), Fernando (4.5); callouts "All watered / 13-day streak", "Monty / next drink in 6 days" |
| 6–12 | Add | "Add a plant *by name.*" Add a plant → tap the search field (7.0) → "mon" typed (7.25–7.65) → 3 matches → tap Swiss cheese plant (8.75) → "Mona", every 7 days → tap Add Mona to your shelf (10.25) → "Say hello to Mona." | 02 — ADD, same headline; the same flow in the phone (taps 6.75, 8.5, 10.5); callouts "3 matches / from “mon”", "Mona / a name to start", "Every 7 days / a schedule to start" |
| 12–17 | Rescue (Plus) | "Pale leaves? *Here's the plan.*" + Fernwise Plus tag. Dot's rescue guide: three steps; swipe up (14.0); tap Remind me in a week (15.25) → "We'll remind you in a week." | 03 — RESCUE · PLUS; callouts "Step 1 / move it brighter", "Step 2 / check the soil first", then "Reminder / in a week" |
| 17–22 | Light (Plus) | "Find the *right light.*" + Fernwise Plus tag. The window spot: 12,000 lux, Direct sun, "Too much for Dot." → tap Check the plant stand (19.25) → 1,800 lux, Bright, indirect, "Good for Dot." | 04 — LIGHT · PLUS; callouts "12,000 lux / too much for Dot" → "1,800 lux / good for Dot" |
| 22–24.5 | Payoff | "Eight plants. *All watered.*" over the Shelf: 8 plants · all watered, Mona new | The phone drops away; recap "Watered." "Well lit." "*Thriving.*", a line a beat |
| 24.5–28 | End | End frame over the frosted shelf: the mark, "Fernwise", "Keep the little ones *alive.*", and "Light check, rescue guides and unlimited plants need Fernwise Plus." | End card: the app icon, "Fernwise", "Keep the little ones *alive.*", ★★★★★ 4.8 · 12.4k ratings, "Get Fernwise", "Free on iPhone" |

Every caption answers on screen: the three Water taps end on "All
watered."; three letters find the plant and the add ends on "Say hello to
Mona."; the guide's plan ends on a set reminder; the window reads too much
and the stand reads good; the shelf shows eight plants, all watered.

## Claims and numbers

Every number on screen, with its source in the cast's sample data
(`cast/fernwise/app/data.js` unless noted).

| On screen | Source |
|---|---|
| Three thirsty / 3 plants are thirsty | `due: ['monty', 'pickles', 'fernando']` |
| 13-day streak | `user.streak: 12`, plus today once every due plant is watered (`app.js`, `streak()`) |
| Next drink in about 6 days (Monty) | Monty `next: 6` |
| 3 matches for "mon" | `species`: Swiss cheese plant, Swiss cheese vine, Money tree (search matches the start of any word) |
| Mona, every 7 days | `monstera-deliciosa`: `names[0]: 'Mona'`, `every: 7` |
| 12,000 lux, Direct sun, too much for Dot | `light.spots.window`, Dot `needs: [1000, 6000]` |
| 1,800 lux, Bright, indirect, good for Dot | `light.spots.stand` |
| Pale leaves? Move it brighter, check the soil, wait a week | `rescue.dot` |
| Eight plants, all watered | 7 plants + Mona, after the three waterings |
| 4.8 · 12.4k ratings | `cast/fernwise/brand.md`, "Rating shown in the store" (fictional) |
| Free on iPhone; light check, rescue guides and unlimited plants need Fernwise Plus | `brand.md`, "Price" (the price itself is never shown) |
| Plant care for people who forget to water. · Keep the little ones alive. | `brand.md`, the company's own lines |

## Store-cut review

No prices (Plus is named, never priced), no dates or seasons (the app
speaks in relative days; the status bar's 9:41 is a time, not a date), no
device frame, hands or people in the store cut, dissolves and fades only,
main captions held at least 3.5 s (the shelf payoff is 2.5 s), Plus features tagged where they appear and
disclosed in the end frame, and the poster frame at 5.0 s is "All watered.
13-day streak." under its caption. SKILL.md has the full checklist.

Revision 3 keeps every product action and claim above. The social tall
cut now shows a full-width product viewport (16 px outer margins, ~88% H)
with eased vertical camera travel; its callouts dock below the captured
proof. The store stays full-frame, with no camera move, device or iris.
Both use the shared toolkit's press timing and real captured pressed
controls; store hotspots stay circular. The end disclosure is fully
visible by 24.91 s and holds through 28 s. Keeper grows from a seed via
`markReveal`; its name slides into the lockup at 26.3–26.8 s, followed by
exactly 1.2 s of the toolkit's slow push through the final frame. This
supersedes the old three-second static-end hold. These example screens
come from the fictional web app; a real iOS submission must capture the
shipping iOS build.

## Credit

[Style inspired by @wallacex227's video](https://x.com/wallacex227/status/2103245000989659422): its grammar only,
measured in `style.md`. None of its words, app, screens, logo or music.
@wallacex227 didn't make or endorse this film.
