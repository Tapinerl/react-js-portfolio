import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { gzipSync } from 'node:zlib';

// Serve immutable baseline/current builds with compressed responses, like Netlify.
const root = resolve(process.argv[2] || 'build');
const port = Number(process.argv[3] || 4173);
const types = {'.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpeg':'image/jpeg', '.jpg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.pdf':'application/pdf'};
const cache = new Map();
createServer(async (req, res) => {
  try {
    let path = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    try { if (!(await stat(path)).isFile()) path = resolve(root, 'index.html'); }
    catch { path = resolve(root, 'index.html'); }
    const compress = /\.(?:html|js|css|json|svg)$/.test(path) && req.headers['accept-encoding']?.includes('gzip');
    const key = path + (await stat(path)).mtimeMs + Boolean(compress);
    if (!cache.has(key)) { const data = await readFile(path); cache.set(key, compress ? gzipSync(data) : data); }
    res.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', ...(compress ? {'Content-Encoding':'gzip'} : {}) });
    res.end(cache.get(key));
  } catch { res.writeHead(500).end(); }
}).listen(port, '127.0.0.1', () => console.log(`Serving ${root} on http://127.0.0.1:${port}`));
