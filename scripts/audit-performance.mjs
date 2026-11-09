import { mkdir, writeFile } from 'node:fs/promises';
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';
import desktopConfig from 'lighthouse/core/config/lr-desktop-config.js';

const [url = 'http://127.0.0.1:4173/', label = 'local', mode = 'mobile'] = process.argv.slice(2);
const chrome = await launch({ chromeFlags: ['--headless=new', '--no-sandbox', '--window-size=1440,1000'] });
try {
  const result = await lighthouse(url, {
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility'],
    output: ['json', 'html'],
    logLevel: 'error',
  }, mode === 'desktop' ? desktopConfig : undefined);
  const { lhr, report, artifacts } = result;
  const prefix = `.performance/${label}-${mode}`;
  await mkdir('.performance', { recursive: true });
  await writeFile(`${prefix}.json`, report[0]);
  await writeFile(`${prefix}.html`, report[1]);
  await writeFile(`${prefix}.trace.json`, JSON.stringify(artifacts.Trace));
  const audits = lhr.audits;
  const summary = {
    url, mode, version: lhr.lighthouseVersion, fetchTime: lhr.fetchTime,
    performance: Math.round(lhr.categories.performance.score * 100),
    accessibility: Math.round(lhr.categories.accessibility.score * 100),
    metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'speed-index', 'cumulative-layout-shift', 'interactive', 'total-byte-weight', 'mainthread-work-breakdown', 'bootup-time'].map(key => [key, audits[key]?.numericValue])),
    mainThread: audits['mainthread-work-breakdown']?.details?.items,
    scripts: audits['bootup-time']?.details?.items,
    longTasks: audits['long-tasks']?.details?.items,
    requests: audits['network-requests']?.details?.items?.map(({url, transferSize, resourceSize, resourceType}) => ({url, transferSize, resourceSize, resourceType})),
    warnings: lhr.runWarnings,
  };
  await writeFile(`${prefix}.summary.json`, JSON.stringify(summary, null, 2));
  console.log(JSON.stringify({label, mode, performance:summary.performance, accessibility:summary.accessibility, metrics:summary.metrics, mainThread:summary.mainThread, warnings:summary.warnings}, null, 2));
} finally {
  await chrome.kill();
}
