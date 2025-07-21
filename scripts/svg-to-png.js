// scripts/svg-to-png.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, '../src/assets');

function convertSvgToPng(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      convertSvgToPng(fullPath);
    } else if (file.endsWith('.svg')) {
      const pngPath = fullPath.replace(/\.svg$/, '.png');
      sharp(fullPath)
        .png()
        .toFile(pngPath)
        .then(() => console.log(`Converted: ${file} -> ${path.basename(pngPath)}`))
        .catch(err => console.error(`Error converting ${file}:`, err));
    }
  });
}

convertSvgToPng(assetsDir);