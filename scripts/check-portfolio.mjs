import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const url = process.argv[2] || 'http://127.0.0.1:4175';
const browser = await chromium.launch({ channel: 'chrome' });
const errors = [];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on('pageerror', error => errors.push(error.message));
  await page.addInitScript(() => {
    window.beamDraws = 0;
    for (const type of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
      const original = type.prototype.drawElements;
      type.prototype.drawElements = function (...args) { window.beamDraws++; return original.apply(this, args); };
    }
  });
  await page.goto(url);
  await page.waitForFunction(() => window.beamDraws > 5);
  await page.evaluate(() => document.fonts.ready);
  const heroText = await page.locator('.hero--section--title').evaluate(el => ({
    width: el.getBoundingClientRect().width, height: el.getBoundingClientRect().height,
    family: getComputedStyle(el).fontFamily,
  }));
  const draws = () => page.evaluate(() => window.beamDraws);
  const start = await draws();
  await page.waitForTimeout(700);
  assert.ok(await draws() > start + 5, 'visible beams still animate');
  await page.locator('#Contact').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  const offscreen = await draws();
  await page.waitForTimeout(700);
  assert.equal(await draws(), offscreen, 'offscreen WebGL rendering stops');
  await page.locator('#heroSection').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  assert.ok(await draws() > offscreen, 'beams resume when visible');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.waitForTimeout(500);
  const still = await draws();
  await page.waitForTimeout(700);
  assert.equal(await draws(), still, 'reduced motion keeps a static beam scene');
  await page.screenshot({ path: '.performance/home-after-desktop.png' });
  for (const width of [1440, 768, 375, 320]) {
    await page.setViewportSize({ width, height: 1000 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `home overflow at ${width}`);
  }
  const card = page.locator('.portfolio--card-link[href="/case-studies/7"]');
  await card.scrollIntoViewIfNeeded();
  await card.click();
  await page.waitForURL('**/case-studies/7');
  await page.getByRole('heading', { level: 1, name: 'Electricity Price Indicator' }).waitFor();
  for (const path of ['/about', '/case-studies/1', '/case-studies/2', '/case-studies/5', '/case-studies/6', '/case-studies/7']) {
    await page.goto(url + path);
    await page.locator('h1').waitFor();
    assert.equal(await page.locator('h1').count(), 1, `${path}: one title`);
    for (const img of await page.locator('img').all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(el => el.decode());
      assert.ok(await img.getAttribute('width'), `${path}: explicit image width`);
      assert.ok(await img.getAttribute('height'), `${path}: explicit image height`);
      assert.ok(await img.getAttribute('alt'), `${path}: image description`);
    }
    for (const width of [1440, 375, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path}: overflow at ${width}`);
    }
    if (path === '/case-studies/2' || path === '/case-studies/6') {
      const markers = page.locator('.case-study-evolution__stages button');
      await markers.last().focus();
      await page.keyboard.press('Enter');
      assert.equal(await page.getByRole('button', { name: 'Next design stage', exact: true }).isDisabled(), true);
      await markers.first().click();
      assert.equal(await page.getByRole('button', { name: 'Previous design stage', exact: true }).isDisabled(), true);
    }
    const enlarge = page.locator('.budgit-content__image-link').first();
    if (await enlarge.count()) {
      assert.ok((await enlarge.getAttribute('href')).startsWith('/img/'), 'full-size link kept');
      assert.ok(!(await enlarge.getAttribute('href')).includes('/optimized/'), 'original full-size asset kept');
      await page.keyboard.press('Tab');
      await enlarge.focus();
      assert.notEqual(await enlarge.evaluate(el => getComputedStyle(el).outlineStyle), 'none');
    }
    assert.equal(await page.locator('script[src*="Beams-"]').count(), 0);
    assert.ok(!await page.evaluate(() => performance.getEntriesByType('resource').some(r => /\/assets\/Beams-.*\.js/.test(r.name))), 'case-study deep links do not download Three.js');
  }
  assert.deepEqual(errors, []);
  await mkdir('.performance', { recursive: true });
  await writeFile('.performance/regression-checks.json', JSON.stringify({ status: 'passed', heroText, routes: 7, imageDimensions: true, keyboardCarousels: true, offscreenPause: true, reducedMotion: true }, null, 2));
  console.log('PASS: responsive layouts, all page images and dimensions, project navigation, keyboard carousels, full-size image links, visible beam animation, offscreen pause/resume, reduced-motion behavior, and route isolation.');
} finally { await browser.close(); }
