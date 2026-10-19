"""Refresh Fennick's original wordmark/new seed and current photographs.

Build helper only; run from the repo with Pillow installed. The film loads
local SVGs through the generic markReveal callback; it needs no fontTools.
Rerun the portrait capture plans against the current cast shop afterwards.
"""
from pathlib import Path
import shutil

from PIL import Image
FILM = Path(__file__).resolve().parents[1]
CAST = FILM.parents[3] / 'cast/fennick'
ART = CAST / 'app/art'

for name in ['mark.svg', 'wordmark.svg', 'lockup.svg']:
    shutil.copyfile(CAST / name, FILM / 'assets' / name)

(FILM / 'assets/wordmark-paper.svg').write_text((CAST / 'wordmark.svg').read_text().replace('#1D1A16', '#FBF6EE'))

# Preserve the current source subject, padding to a square without stretching.
for name in ['can-yuzu', 'can-hibiscus', 'can-pear', 'cans-trio', 'box']:
    image = Image.open(ART / f'{name}.png').convert('RGBA')
    bounds = image.getchannel('A').point(lambda a: 255 if a > 16 else 0).getbbox()
    image = image.crop(bounds)
    side = max(image.size)
    square = Image.new('RGBA', (side, side))
    square.alpha_composite(image, ((side - image.width) // 2, (side - image.height) // 2))
    square.resize((1100, 1100), Image.Resampling.LANCZOS).save(
        FILM / f'assets/photos/{name}.webp', quality=95, method=6)

for name in ['brewing', 'serving']:
    image = Image.open(ART / f'{name}.jpg')
    image.thumbnail((1100, 1100), Image.Resampling.LANCZOS)
    image.save(FILM / f'assets/photos/{name}.webp', quality=95, method=6)

print('Copied original wordmark/new seed, paper lockup and seven current photographs.')
