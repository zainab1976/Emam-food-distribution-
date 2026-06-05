import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'assets', 'images', 'lanza-logo.svg');
const svg = readFileSync(svgPath);

await sharp(svg, { density: 300 })
  .resize(700, 420, { fit: 'inside' })
  .png()
  .toFile(join(root, 'LOGO.png'));

console.log('LOGO.png updated from lanza-logo.svg');
