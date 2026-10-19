// Capture the shipping cast app's own pressed/focused controls. No CSS is invented.
// Run after screens.mjs with cast/ served on port 4413; merge into its manifest.
import puppeteer from 'puppeteer-core';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { requireChrome, chromeArgs } from './chrome.mjs';
const film = process.argv[2] ? path.resolve(process.argv[2]) : fileURLToPath(new URL('../reference/', import.meta.url));
const root = path.join(film, 'assets/screens/');
const manifest = JSON.parse(await readFile(root + 'screens.json', 'utf8'));
const browser = await puppeteer.launch({ executablePath: requireChrome(), headless: true, args: ['--force-color-profile=srgb', '--hide-scrollbars', ...chromeArgs()] });
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  await page.goto(process.argv[3] || manifest.url, { waitUntil: 'networkidle0' });
  await page.waitForSelector('[data-ready]');
  await page.addStyleTag({ content: '*,*::before,*::after{transition:none!important;animation:none!important;caret-color:transparent!important}' });
  await page.evaluate(() => document.fonts.ready);
  const client = await page.createCDPSession();
  await client.send('DOM.enable'); await client.send('CSS.enable');
  const click = async (selector) => { await page.click(selector); await page.evaluate(() => new Promise(requestAnimationFrame)); };
  async function pressed(state, name, idx, selector, pseudo = 'active') {
    const { root: doc } = await client.send('DOM.getDocument');
    const { nodeId } = await client.send('DOM.querySelector', { nodeId: doc.nodeId, selector });
    if (!nodeId) throw new Error('Missing pressed control: ' + selector);
    await client.send('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: [pseudo] });
    const capture = `pressed-${state}-${name}-${idx ?? 'one'}`, file = `${capture}@3.webp`;
    await page.screenshot({ path: root + file, type: 'webp', quality: 92, fullPage: true });
    manifest.captures[capture] = { file, scale: 3, rect: [0, 0, 390, 844], source: `Native :${pseudo} on ${selector}` };
    await client.send('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: [] });
    console.log(file);
  }
  for (const [i, id] of ['monty', 'pickles', 'fernando'].entries()) {
    await pressed(i ? `today-${i}` : 'today', 'waterButtons', 0, `[data-action="water"][data-plant="${id}"]`);
    await click(`[data-action="water"][data-plant="${id}"]`);
  }
  await click('[data-tab="shelf"]'); await click('[data-action="add"]');
  await pressed('add', 'search', null, 'label.search', 'focus-within');
  await page.type('[data-field="search"]', 'mon');
  await pressed('add-search', 'results', 0, '[data-species="monstera-deliciosa"]');
  await click('[data-species="monstera-deliciosa"]');
  await pressed('add-name', 'addPlant', null, '[data-action="add-plant"]');
  await click('[data-action="add-plant"]');
  await page.evaluate(() => { location.hash = '#/rescue/dot'; });
  await page.waitForSelector('[data-action="remind"]');
  await page.evaluate(() => { const s = document.querySelector('#screen'); s.scrollTop = s.scrollHeight - s.clientHeight; });
  await pressed('rescue-scrolled', 'remind', null, '[data-action="remind"]');
  await click('[data-tab="light"]'); await click('[data-action="move-window"]');
  await pressed('light-window', 'moveBack', null, '[data-action="move-back"]');
  await writeFile(root + 'screens.json', JSON.stringify(manifest, null, 1) + '\n');
} finally { await browser.close(); }
