import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import { readFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const svgContent = readFileSync(resolve('icon.svg'), 'utf-8');

const sizes = [
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 167, name: 'apple-touch-icon-167x167.png' },
  { size: 152, name: 'apple-touch-icon-152x152.png' },
  { size: 192, name: 'pwa-icon-192x192.png' },
  { size: 512, name: 'pwa-icon-512x512.png' },
];

mkdirSync('public', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

for (const { size, name } of sizes) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * { margin: 0; padding: 0; }
        body { width: ${size}px; height: ${size}px; overflow: hidden; background: transparent; }
        svg { width: ${size}px; height: ${size}px; display: block; }
      </style>
    </head>
    <body>${svgContent}</body>
    </html>
  `);
  await page.screenshot({
    path: `public/${name}`,
    clip: { x: 0, y: 0, width: size, height: size },
    omitBackground: true,
  });
  console.log(`Generated public/${name} (${size}x${size})`);
}

await browser.close();
console.log('Done!');
