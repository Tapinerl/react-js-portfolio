import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const [url = 'http://127.0.0.1:4173/', label = 'before'] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: 1365, height: 900 } });
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Performance.enable');
  await cdp.send('Profiler.enable');
  await cdp.send('Profiler.start');
  await page.goto(url);
  await page.waitForTimeout(6000);
  const { profile } = await cdp.send('Profiler.stop');
  await mkdir('.performance', { recursive: true });
  await writeFile(`.performance/${label}.cpuprofile`, JSON.stringify(profile));
  const totals = new Map();
  profile.samples.forEach((id, i) => totals.set(id, (totals.get(id) || 0) + profile.timeDeltas[i] / 1000));
  const top = profile.nodes.map(node => ({ ...node.callFrame, selfMs: totals.get(node.id) || 0 })).sort((a, b) => b.selfMs - a.selfMs).slice(0, 20);
  const measure = async () => {
    const before = (await cdp.send('Performance.getMetrics')).metrics;
    await page.waitForTimeout(5000);
    const after = (await cdp.send('Performance.getMetrics')).metrics;
    return Object.fromEntries(['TaskDuration', 'ScriptDuration', 'LayoutDuration', 'RecalcStyleDuration'].map(name => [name, after.find(m => m.name === name).value - before.find(m => m.name === name).value]));
  };
  const hero = await measure();
  await page.locator('#Contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  const offscreen = await measure();
  const result = { url, top, hero, offscreen, graphics: await page.evaluate(() => {
    const canvas = document.querySelector('canvas');
    const gl = canvas?.getContext('webgl2');
    const debug = gl?.getExtension('WEBGL_debug_renderer_info');
    return debug ? gl.getParameter(debug.UNMASKED_RENDERER_WEBGL) : 'unavailable';
  }) };
  await writeFile(`.performance/${label}.profile-summary.json`, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
} finally { await browser.close(); }
