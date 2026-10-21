# omnigami skills

Agent Skills for Claude Code and other agents, starting with video. Each skill
teaches your agent one kind of work for your own product or project. The first
ones make videos from your real screens, words and colours: whole films and
single scenes, built in code and rendered to MP4 in wide, square and tall. Each
brings a finished example, a style guide, a critique rubric and the scripts to
check its own work. This repository is the catalogue; each skill is in its own. Watch every skill play live, and edit it, at
[omnigami.ai](https://omnigami.ai).

- **[Product film](https://omnigami.ai/skills/product-film)** ([omnigami-ai/product-film](https://github.com/omnigami-ai/product-film)): Make a 28-second launch video for a product from its real screens, in five acts (the problem, the promise, four proof steps of the product in action, the result, the ask), with a big cursor, a moving camera, captions and sound, in square, wide and tall.
- **[Cutout film](https://omnigami.ai/skills/cutout-film)** ([omnigami-ai/cutout-film](https://github.com/omnigami-ai/cutout-film), paid: $4.99 once, private to buyers): Make a 30–40 second launch film of a software product's real UI in a stepped, illustrated cutout style - 12 fps with every frame a new drawing and no motion blur, flat colour fields changed by hard cuts, the product's own screens redrawn large as vectors, an oversized leaning cursor, mock-3D cutout objects with thickness, an ink outline and a hard shadow, devices taken only from the product's own world, and room to read every beat.
- **[Device film](https://omnigami.ai/skills/device-film)** ([omnigami-ai/device-film](https://github.com/omnigami-ai/device-film), paid: $9.99 once, private to buyers): Make a 40–48 second launch film of a software product's real screens on photoreal 3D devices (a laptop and a phone), in the grammar of a premium hardware launch film - captions as their own shots centred on a light field with one word in the brand's colour, dark hardware large at strong angles that eases hard into place, a laptop that glides in and opens with its lid sweeping across the words, the real UI full frame, phones that spin into a lineup, cuts on the music's bar lines.
- **[UI morph](https://omnigami.ai/skills/ui-morph)** ([omnigami-ai/ui-morph](https://github.com/omnigami-ai/ui-morph)): Create or revise a 14-second UI-morph product film from real screens and actions, with one continuous shape, spring motion, a cursor and sound.
- **[Chat launch](https://omnigami.ai/skills/chat-launch)** ([omnigami-ai/chat-launch](https://github.com/omnigami-ai/chat-launch)): Make a 20-second chat-style launch video for a product in code, one continuous take at 130 BPM, on the product's real screens - a request typed into its own composer with a glow around it, the send flooding the screen and landing as the message, the product working one step a beat, a colour flood on the drop that bursts into its own result cards, the best one flying back into the chat, a click on its real action, and an outro where the button grows into the page and ends on the brand mark.
- **[Unfold](https://omnigami.ai/skills/unfold)** ([omnigami-ai/unfold](https://github.com/omnigami-ai/unfold)): Make a 27-second keynote-style launch video for a product in code, as one continuous take.
- **[Language launch](https://omnigami.ai/skills/language-launch)** ([omnigami-ai/language-launch](https://github.com/omnigami-ai/language-launch)): Make a 14-second announcement video that a product now speaks more languages, on its real screens - the headline "<name> now speaks" over each language's own name, a carousel of the product's real screen, one phone per language, swiping one over as each name rolls in, each held long enough to read, then every phone flying into one row under the count, and the end card.
- **[Milestone](https://omnigami.ai/skills/milestone)** ([omnigami-ai/milestone](https://github.com/omnigami-ai/milestone)): Make a 14-second milestone video for a product on its real screens - one tap on the action the product counts, that one result lifting out of the app and multiplying into thousands as a counter rolls to the number, a thank-you, and the field of results closing into the app's icon.
- **[Illustrated ad](https://omnigami.ai/skills/illustrated-ad)** ([omnigami-ai/illustrated-ad](https://github.com/omnigami-ai/illustrated-ad)): Make a 16-second illustrated ad for a physical product - its botanicals or ingredients drawn in engraved ink that draws itself stroke by stroke on warm paper, the real product (a photorealistic render) rising in front of each, a page push to the next, then every product together with a drawn fizz, the line and the call to action.
- **[What's new](https://omnigami.ai/skills/whats-new)** ([omnigami-ai/whats-new](https://github.com/omnigami-ai/whats-new)): >-
- **[Product reel](https://omnigami.ai/skills/product-reel)** ([omnigami-ai/product-reel](https://github.com/omnigami-ai/product-reel)): Make a readable product or catalogue reel with photographed items on the beat, real shop or app screens, count-ups, an orbiting collection and a held brand/address.
- **[App Store preview](https://omnigami.ai/skills/app-store-preview)** ([omnigami-ai/app-store-preview](https://github.com/omnigami-ai/app-store-preview)): Make an iPhone App Store preview from the app's real screens, with a store-spec MP4 and a matching social promo in tall, square and wide.
- **[Struck hook](https://omnigami.ai/skills/struck-hook)** ([omnigami-ai/struck-hook](https://github.com/omnigami-ai/struck-hook)): Make a 5-second opening shot for a launch video in square, wide and tall, with sound.
- **[Typed promise](https://omnigami.ai/skills/typed-promise)** ([omnigami-ai/typed-promise](https://github.com/omnigami-ai/typed-promise)): Make a 6-second reveal shot for a launch video in square, wide and tall, with sound.
- **[End card](https://omnigami.ai/skills/end-card)** ([omnigami-ai/end-card](https://github.com/omnigami-ai/end-card)): Make a 4-second end card for a launch video in square, wide and tall, with sound.
- **[Cursor camera](https://omnigami.ai/skills/cursor-camera)** ([omnigami-ai/cursor-camera](https://github.com/omnigami-ai/cursor-camera)): Make an 8-second proof shot for a launch video in square, wide and tall, with sound.

## Install

Each skill lives in its own repository, so you download only the ones you use.

In Claude Code, add this catalogue once, then install skills by name:

```
/plugin marketplace add omnigami-ai/skills
/plugin install omnigami-product-film@omnigami
```

With the skills CLI, for Claude Code and other agents, install a skill from its repository:

```bash
npx skills add omnigami-ai/product-film
```

Or copy a skill's `skills/<name>/` folder from its repository into your agent's skills folder
(for Claude Code, `~/.claude/skills/`). Then ask for what you want, for example:

```
Make a launch video for https://your-product.com
```

## You need

- Node 20 or later, ffmpeg, and Chrome, Chromium, Edge or Brave. Each skill
  checks for them first and explains how to install what's missing.
- An agent that can run commands. Claude Code with Opus 5.5 is the only one
  we test on.

A run uses your own Claude plan; nothing else is charged.

## Licence

Free to use. Use the films and anything else the skills make for anything,
commercial work included. Don't redistribute the skills. See
[LICENSE.md](LICENSE.md). The bundled fonts keep their own licence (SIL Open
Font License; see each skill's `reference/assets/fonts/`).

## Credits

UI morph, Chat launch and Unfold are styles inspired by
[@twoclipping](https://x.com/twoclipping)'s videos; @twoclipping didn't make
or endorse these skills. Their reference films show fictional companies made
for omnigami's examples, with sample data.

The product film and the single-scene skills take their grammar from three
2026 launch films: Figma's "Figma Motion", ElevenLabs' "Reception" and
@LexnLin's "Tessel". They are an independent style study; none of them made
or endorsed these skills. Their reference films show Lamplit, a fictional
developer tool made for omnigami's examples.

omnigami is not affiliated with Anthropic.
