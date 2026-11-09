import { readdir, readFile, mkdir, writeFile, stat } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { extname, basename } from 'node:path';
import sharp from 'sharp';

// Originals remain untouched for full-size links. The build serves resized WebP previews.
const directory = 'public/img';
const widths = [320, 640, 960, 1280, 1920];
const manifest = {};
await mkdir(`${directory}/optimized`, { recursive: true });
for (const name of (await readdir(directory)).sort()) {
  if (!/\.(png|jpe?g|webp)$/i.test(name)) continue;
  const input = await readFile(`${directory}/${name}`);
  const meta = await sharp(input).metadata();
  const rotated = [5, 6, 7, 8].includes(meta.orientation);
  const width = rotated ? meta.height : meta.width;
  const height = rotated ? meta.width : meta.height;
  const hash = createHash('sha256').update(input).update('webp-v1-q85').digest('hex').slice(0, 12);
  const stem = basename(name, extname(name)).replace(/[^a-zA-Z0-9_-]/g, '-');
  const variants = [];
  for (const size of [...new Set([...widths.filter(w => w < width), Math.min(width, 1920)])]) {
    const file = `${stem}-${hash}-${size}.webp`;
    const output = `${directory}/optimized/${file}`;
    try { await stat(output); }
    catch { await sharp(input).rotate().resize({ width: size, withoutEnlargement: true }).webp({ quality: 85, effort: 5 }).toFile(output); }
    variants.push({ src: `/img/optimized/${file}`, width: size });
  }
  manifest[`/img/${name}`] = { width, height, variants };
}
await mkdir('src/generated', { recursive: true });
await writeFile('src/generated/images.json', JSON.stringify(manifest));
console.log(`Generated responsive previews for ${Object.keys(manifest).length} images (originals preserved).`);
