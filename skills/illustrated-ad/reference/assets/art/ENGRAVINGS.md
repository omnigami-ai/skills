# Fennick botanical engravings

Generated 2026-10-17 with an image model. Fennick is a fictional
sparkling botanical tea company made for omnigami's examples.

## Art direction

Original standalone botanical copperplate illustrations in the hand of
the fine engravings on `../renders/trio-studio.png`: naturalistic plant
anatomy, tapered fine contours, form-following parallel hatching, restrained
crosshatching, and stippled textures. One specimen per image; no lettering,
labels, signature, border, props, ground shadow, or can packaging.
The source can SVGs and `../brand.md` informed the subjects and style.

All eight assets were inspected individually. Yuzu was revised to neutralize
its first brown-tinted cross-section and open up the margins; hibiscus was
revised to give the flower and leaves more space. All required subject
parts are visible. Bubbles use circular contours, curved hatch crescents,
and stippling rather than flat filled discs.

## Files

| Asset | Contents | Actual native pixels |
| --- | --- | --- |
| `yuzu.png` | Branch, intact fruit, separate halved fruit showing segments, leaves, thorn | 1774 × 887 |
| `fennel.png` | Ribbed bulb, rootlets, feathery fronds, mature compound umbel seed head | 887 × 1774 |
| `hibiscus.png` | Open flower, closed bud, two leaves | 1774 × 887 |
| `blackcurrant.png` | Sprig, two hanging berry racemes, lobed leaves | 887 × 1774 |
| `pear.png` | One pear, short branch, two leaves | 887 × 1774 |
| `ginger.png` | Branching rhizome with one visible fibrous cut face | 1774 × 887 |
| `tea.png` | Tea sprig, mature leaves, tender tip bud and young leaves | 887 × 1774 |
| `bubbles.png` | Loose rising column of varied circles with engraved rim shading | 887 × 1774 |

The generator returned 1254 × 1254 for square requests, so the selected
finals use landscape or portrait 2:1 canvases. Each selected native output
is 1774 px on its long side; none has been upscaled.

## Pixel check and finishing status

Dimensions pass the brief's minimum of 1600 px on the long side. The saved
files are currently exact copies of the selected generated outputs.
Despite repeated pure-white / neutral-black instructions, the generator
left background values of 253–255 and occasional tinted strokes.
Exact #FFFFFF background cleanup and neutral grayscale conversion are
pending the user's authorization to use local image processing. Do not
treat these raw copies as pixel-exact black-on-white production assets yet.

No builds were run and no commit was created. Project changes are
restricted to this directory.

## Prompts

The prompts below are the actual imagegen prompt strings. All calls used
`transparent_background: false`; the film brief asks for opaque white.

### yuzu.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 12% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution square PNG, 2048 x 2048 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: a yuzu branch with exactly two yuzu fruits, one intact attached fruit and one half fruit adjacent to it with its cut face turned toward the viewer, clearly showing citrus segments and a few seeds. Characteristic irregular bumpy yuzu rind, oval pointed veined citrus leaves, and one visibly sharp thorn on the small woody branch. The intact fruit and cut half dominate the lower-middle of the composition; the branch and leaves provide a light rising silhouette. Botanical anatomy is plausible; the cut half is separate from the branch.
```

### yuzu.png — monochrome and margin revision

Reference: the initial generated yuzu image.

```text
Revise this botanical engraving into a final production asset. Preserve the naturalistic yuzu branch composition, two fruits (one intact, one half showing segments), leaves, thorn, and exquisite fine copperplate hatching and stippling. Make ONLY the following corrections:
1. Make all marks achromatic BLACK INK, removing the brown/olive tint from the fruit cross-section and any other areas. Use no coloured pixels.
2. Replace the entire background and every white interstice between the ink strokes with perfectly uniform PURE WHITE (#FFFFFF), no noise, no grain, no paper texture, no light gray or ivory tint.
3. Reduce the specimen's scale and center it so that it fits entirely within the central 72% of the image width and height, with at least 14% completely blank white margin on each edge. Keep all naturalistic detail and all botanical parts.
4. Deliver a high-resolution square PNG at 2048 x 2048 actual pixels, not a 1254 px preview.
No text, no frame, no border, no signature. This is a standalone black-ink botanical copperplate asset for an animation mask.
```

### yuzu.png — selected landscape revision

Reference: the preceding yuzu revision.

```text
Transform the reference into a WIDE LANDSCAPE 2:1 illustration canvas. Keep the engraving itself unchanged, centered at a smaller scale, and surround it with generous perfectly flat pure white (#FFFFFF) negative space. The canvas must be twice as wide as it is tall, requested 2048 x 1024 actual pixels. The complete yuzu specimen must have 15% blank margin above and below as well as generous blank left and right margins. Preserve the entire branch, thorn, leaves, whole fruit and half fruit. Preserve the fine, neutral black copperplate hatching and stippling. No colour, background texture, off-white tint, frame, text, or other objects.
```

### fennel.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution TALL PORTRAIT 1:2 PNG, 1024 x 2048 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: one entire fennel plant specimen, a plump ribbed fennel bulb at the bottom with a few delicate short rootlets, gracefully rising stems carrying abundant botanically accurate hair-fine feathery fennel fronds and one mature compound umbel seed head at the top with tiny elongated ribbed seeds. The seed head, airy fronds, and bulb are all unmistakable and share one connected plant. Elegant asymmetrical silhouette. Leave completely empty pure white space surrounding every fine frond. The entire specimen occupies only the central 65% of image height and 60% of image width; ensure substantial margins above the umbel and below the roots.
```

### hibiscus.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution WIDE LANDSCAPE 2:1 PNG, 2048 x 1024 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: one graceful hibiscus botanical specimen with exactly one fully open hibiscus flower in three-quarter frontal view, one closed tapered flower bud, and exactly two serrated, veined hibiscus leaves on a short branching stem. Five broad overlapping delicately crumpled petals with exquisite fine radiating engraved veins and folds, a long projecting staminal column with tiny anthers and stigma, botanically plausible calyx and bud. The flower is the visual focus. Keep the flower bright and airy, using fine separated curved ink lines for the petal forms rather than gray wash.
```

### hibiscus.png — selected margin revision

Reference: the initial generated hibiscus image.

```text
Correct the composition of this finished hibiscus engraving only. Preserve exactly its fine black copperplate linework, open five-petalled flower, long staminal column, one closed bud, two serrated leaves, and short branch. Add generous absolutely plain pure-white space around the entire illustration, without cropping or changing any botanical part. Reduce the complete illustration until its height is no more than 65% of the canvas height and its width is no more than 65% of the canvas width. Center it, so there is at least 17.5% blank white margin on every side. Keep the canvas WIDE LANDSCAPE 2:1, requested 2048 x 1024 pixels, minimum 1600 pixels on the long side. Neutral BLACK ink on perfectly flat PURE WHITE #FFFFFF, with no paper texture, grain, color cast, shadow, border, label, signature or text.
```

### blackcurrant.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution TALL PORTRAIT 1:2 PNG, 1024 x 2048 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: one blackcurrant sprig, a gracefully curved short woody twig bearing two hanging racemes of round blackcurrant berries with the characteristic small dried star-shaped calyx at each berry tip, and three natural lobed, finely serrated, palmate-veined blackcurrant leaves. Engrave the round berry forms with closely spaced curved hatching and stippling, leaving slender white highlights; never solid black circles. Natural uneven berry sizes and a few stem junctions. Delicate deep-green-to-black tonal impression created entirely in BLACK INK, never color. The entire specimen occupies only the central 65% of image height and 60% of image width, with substantial completely empty white margins.
```

### pear.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution TALL PORTRAIT 1:2 PNG, 1024 x 2048 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: exactly one pear attached to a short elegantly angled woody branch with exactly two pear leaves. Natural elongated pear shape with narrow neck and rounded lower body, a curved stalk, subtle irregular skin, tiny lenticel dots, and the small calyx at the base. The two leaves have fine serrated margins and exquisite engraved veins, one face-on and one gently turning. Model the pear's volume with delicate sparse contour-following hatching and stippled lenticels, preserving plenty of white space on the fruit. No cut fruit, no extra fruit, no ground, no fallen leaves. The entire specimen occupies only the central 65% of image height and 60% of image width, with substantial completely empty white margins.
```

### ginger.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution WIDE LANDSCAPE 2:1 PNG, 2048 x 1024 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: exactly one ginger root rhizome in a graceful branching horizontal composition. Natural knobbly jointed fingers, subtly ringed papery skin, slightly irregular organic silhouette, and one freshly cut circular-to-oval face at the near end exposing the finely fibrous interior. This cross-section must be immediately legible with fine radial fibers and a clean rim, not a hollow opening. Naturalistic botanical engraving with fine wrapping contours and hatching, light stippling, no soil, no roots scattered around, no separate slices, no leaves. The complete rhizome occupies only 65% of the image width and 60% of its height; substantial perfectly white empty space on all four sides. No cast shadow or ground line.
```

### tea.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution TALL PORTRAIT 1:2 PNG, 1024 x 2048 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: one slender Camellia sinensis tea sprig: a natural gently curved stem with five alternating elliptical pointed tea leaves with finely serrated edges and clear midribs and fine lateral veins. At the tip a tender tightly folded pointed terminal leaf bud with two small young leaves immediately beneath it; mature leaves lower on the stem. No open flower, no flower bud, no berries. Balanced botanically plausible tea shoot. Exquisite fine curved hatching and subtle stippling, all black ink on pure white. A single light airy specimen centered, occupying at most 65% of image height and 60% of image width, with completely blank pure-white margins.
```

### bubbles.png — initial generation

```text
Use case: ads-marketing.
Asset type: a single standalone black-ink engraved illustration for Fennick's botanical sparkling-tea film. This is original illustration, not a can, package, advertisement layout, photograph, or sheet of multiple illustrations.
Style/medium: exquisite 19th-century botanical copperplate engraving, precise naturalistic morphology, fine tapered black contours, very fine curved parallel hatching following the form, restrained crosshatching only in deepest recesses, delicate stippling for texture. The same elegant hand as the botanical engravings on the Fennick cans: detailed and dimensional, airy enough for each ink stroke to read. Main contours approximately 2-3 px and fine hatching approximately 1 px at 2048 px wide. No heavy cartoon outlines, no broad solid black fills, no smooth gray wash, no gradient shading. All perceived gray comes from black ink marks separated by white.
Background/color: perfectly uniform opaque pure white RGB 255,255,255, edge to edge. Black ink only, with neutral antialiasing. No cream, paper grain, noise, vignette, cast shadow, border, plate edge, labels, lettering, signature, logo, or watermark.
Composition: one cohesive centered specimen, fully visible, with generous clean margins at least 15% on all four sides. Organic graceful asymmetry. All required botanical parts clearly legible. Nothing cropped. No extraneous props or scattered debris.
Output: one high-resolution TALL PORTRAIT 1:2 PNG, 1024 x 2048 pixels, at least 1600 px on the long side. Final production art, top botanical-engraver studio polish.

Subject: engraved rising bubbles for the fizz. A loose, airy, gently meandering vertical column of approximately fifteen separated circular bubbles of naturally varied sizes, from tiny rings to several larger spheres. Each bubble is a near-perfect circle, with a delicate fine black circular contour and a very small crescent of sparse curved parallel hatching and fine stippling on its lower-right rim; the interior stays overwhelmingly pure white, like transparent bubbles rendered by a botanical copperplate engraver. Keep line weights and tiny hatch marks consistent with the botanical subjects. Organic irregular spacing and slight lateral drift, no regular grid. Plenty of blank white between bubbles. The column occupies only the central 40% of image width and 65% of image height. The top and bottom bubbles are complete and well away from every edge. No filled black discs, no shiny 3D render, no cartoon glare marks, no starbursts, no splashes, no vessel, no waterline, no plant parts.
```

## Selected generated originals

These remain unchanged in the generator's default output directory.

- `yuzu.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-3b3e56a5-5481-43fb-b1c6-773e3b7746c0.png`
- `fennel.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-2ac5cfa7-725b-46cc-bdd3-67a012c5bae7.png`
- `hibiscus.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-6492c5bc-f4b7-42e6-9aab-de6bce4fe5ad.png`
- `blackcurrant.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-90c54f4a-2582-46f1-a8a4-3c9f62a65bb7.png`
- `pear.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-8e37f718-4c2e-4829-a813-cbaa18e7514d.png`
- `ginger.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-80bcd584-6c66-40f6-96ce-4aaa5d67dc62.png`
- `tea.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-4b3b6dff-e264-4a13-a6cd-81dde164315a.png`
- `bubbles.png`: `/Users/forrest/.codex/generated_images/01a14b5e-f38c-7fd3-ae9a-3912218e9368/exec-2b3eb7eb-379b-4f7a-b17f-85aa2b12f480.png`
