/**
 * Compresses all JPG/PNG images in /public using sharp.
 * Run once: node scripts/compress-images.mjs
 * - JPEG: quality 82, max 2400px on longest side
 * - PNG: converts to JPEG quality 82 (unless has transparency)
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const MAX_PX = 2400;
const JPEG_QUALITY = 82;
const SKIP_UNDER_KB = 150; // skip files already under 150KB

let total = 0, saved = 0, skipped = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        await compress(full);
      }
    }
  }
}

async function compress(filePath) {
  const info = await stat(filePath);
  const kb = info.size / 1024;

  if (kb < SKIP_UNDER_KB) {
    skipped++;
    return;
  }

  try {
    const image = sharp(filePath);
    const meta = await image.metadata();
    const w = meta.width ?? 0;
    const h = meta.height ?? 0;
    const longest = Math.max(w, h);

    const resized = longest > MAX_PX
      ? image.resize({ width: w > h ? MAX_PX : undefined, height: h >= w ? MAX_PX : undefined, withoutEnlargement: true })
      : image;

    const buf = await resized.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true }).toBuffer();

    const newKb = buf.length / 1024;
    if (newKb >= kb) {
      skipped++;
      return; // already optimal
    }

    await sharp(buf).toFile(filePath);

    const reduction = Math.round((1 - newKb / kb) * 100);
    const relPath = filePath.replace(PUBLIC_DIR, '');
    console.log(`✓ ${relPath.padEnd(55)} ${Math.round(kb)}KB → ${Math.round(newKb)}KB  (-${reduction}%)`);
    total++;
    saved += (kb - newKb);
  } catch (e) {
    console.error(`✗ ${filePath}: ${e.message}`);
  }
}

console.log('Comprimiendo imágenes en /public...\n');
await walk(PUBLIC_DIR);
console.log(`\n✅ ${total} imágenes comprimidas · ${skipped} ya estaban OK`);
console.log(`💾 Espacio ahorrado: ${(saved / 1024).toFixed(1)} MB`);
