# Portfolio performance investigation — November 9, 2026

The optimizations are implemented locally and production-built. They have **not been deployed to eliasnikkinen.com**. Netlify must build this source with `npm run build` before the public site can be re-audited.

## Measurement method

- Lighthouse 13.6.0, Chrome 156, default simulated mobile throttling and Lighthouse's desktop configuration.
- Before and after are production builds on the same Windows machine, served over localhost with gzip for text assets. This avoids development-server overhead and approximates Netlify's transfer compression.
- The unchanged baseline was copied to `%LOCALAPPDATA%/Temp/portfolio-perf-baseline` before editing application code. It includes the previously added Electricity Price Indicator card; the current deployed site has four cards and does not yet include that project.
- The browser reported an AMD Radeon RX 7600 graphics renderer. These scores are machine-dependent, not guarantees for every device.
- Raw JSON reports, HTML reports, traces, CPU profiles, screenshots and regression output are in the git-ignored `.performance/` directory. The audited pages use normal motion preferences: animations were not disabled to obtain the scores.

## Results

| Metric | Mobile before | Mobile after | Desktop before | Desktop after |
| --- | ---: | ---: | ---: | ---: |
| Performance | 69 | **95** | 98 | **100** |
| Accessibility | 100 | 100 | 100 | 100 |
| First contentful paint | 2.73 s | **0.75 s** | 0.41 s | **0.37 s** |
| Largest contentful paint | 3.55 s | **0.75 s** | 0.76 s | **0.37 s** |
| Total blocking time | 677 ms | **263 ms** | 109 ms | **0 ms** |
| Speed index | 2.73 s | **0.98 s** | 0.89 s | **0.53 s** |
| Cumulative layout shift | 0 | **0** | 0.0044 | **0** |
| Transferred bytes | 14.79 MB | **0.53 MB** | 14.79 MB | **0.53 MB** |
| Main-thread work during the audit | 2.63 s | **2.53 s** | 0.74 s | **0.55 s** |

An intermediate optimized mobile run scored 97 with 204 ms TBT, showing the normal variation between runs. The table uses the final run, rather than selecting the best result. Byte units above are decimal MB.

The live deployed site was also inspected and mobile-audited: 69 performance, 705 ms TBT, 3.64 s main-thread work, and 13.36 MB transferred. Its four original PNG thumbnails account for 13.02 MB. The reported November 9 results (54 mobile / 65 desktop, 21.2 s mobile TBT) were **not reproduced on this machine**. That much longer blocking time cannot be conclusively attributed without the original trace and matching device environment; these local measurements must not be presented as a reproduction of it.

## Findings and changes

### 1. Main-thread and animation work

The CPU profile's largest sampled JavaScript cost was Three.js's first-use shader-program diagnostic function, which reads program/shader logs and forces synchronization with the GPU driver. The initial scene previously compiled on its first visible render. The animation also ran continuously with `frameloop="always"`, even with the hero completely offscreen.

- Prepare the unchanged physical shader with `compileAsync`, using `KHR_parallel_shader_compile` when supported, and render after preparation completes.
- Keep development shader diagnostics enabled; omit synchronous diagnostic reads in production.
- Pause WebGL rendering through the existing renderer's demand mode when offscreen or when the document is hidden. Resume when visible.
- Respect reduced motion and dispose of owned geometry/material resources on unmount.
- Retain beam geometry, noise shader, colors, lighting, speed and device-pixel-ratio settings. No feature was replaced with a static image or lower-resolution approximation.

Measured over a five-second offscreen interval, main-thread task time fell from **474 ms to 0.6 ms**, and script time from **126 ms to 0 ms**. Visible animation still performs its work; the overall mobile main-thread figure does not drop as dramatically as transfer size or TBT because the animated scene remains enabled throughout the audit. The large WebGL dependency remains necessary and can still be expensive on weak GPUs or software renderers.

### 2. Images

All homepage thumbnails were eager-loaded originals, mostly 2500×2000 PNG files displayed at a fraction of that size. They had no responsive sources or intrinsic dimensions. The About portrait alone was 5.55 MB. Large case-study images used original files even for small gallery previews.

- Add a deterministic build-time Sharp pipeline for all 53 raster assets, generating content-hashed WebP previews at 320, 640, 960, 1280 and 1920 px, without upscaling.
- Cache existing generated files by source hash. Regenerate when an original changes.
- Serve previews through a shared `ResponsiveImage` with `srcset`, `sizes`, async decoding, lazy loading and explicit width/height.
- Keep above-the-fold case-study hero images eager and high priority.
- Preserve every original file and full-size enlargement URL; resizing and compression affect previews only.
- Keep the lamp homepage thumbnail's existing 5:4 crop and all case-study image scaling conventions.

The four deployed homepage thumbnails total **13,024,748 bytes** as originals and **398,194 bytes** as 960 px WebP previews, a **96.9% reduction** even before lazy loading. The mobile image-delivery audit reported no remaining image savings in the final run. The final desktop audit still estimates about 44 KB of potential image savings; quality was retained rather than pursuing every last byte.

Generated previews and `src/generated/images.json` are intentionally ignored by git. Both `npm start` and `npm run build` generate them automatically. Add or replace originals in `public/img` and run either command; there is no manual manifest-maintenance step.

### 3. JavaScript and CSS delivery

Previously, the homepage, About page, every case study and Three.js/React Three Fiber shipped in one **1,058.86 KB** JavaScript entry file (**292.98 KB gzip**).

- Split About, the case-study router and each individual case study with `React.lazy`/`Suspense`.
- Load the WebGL renderer separately, preserving the animated hero with a transparent loading fallback.
- Preserve accessible route-loading status text and existing navigation, section reveals and interactions.

The entry is now **227.55 KB / 72.01 KB gzip** (78.5% smaller uncompressed). The optional renderer is a separate **794.21 KB / 211.54 KB gzip** chunk. Homepage visitors still receive it to see the animation; direct About/case-study visitors do not download it. Initial CSS fell from **55.18 KB to 29.52 KB**, with case-study styles loaded with their routes.

The renderer still triggers Vite's large-chunk warning. It is an explicitly deferred dependency, not a hidden removal of the visual effect. The remaining roughly 111 KB of Lighthouse-estimated unused JavaScript is largely associated with the preserved renderer and supporting library APIs.

### 4. Fonts and caching

The external Google Fonts stylesheet was render-blocking (300 ms estimated savings in the baseline mobile audit). The site now self-hosts the same DM Sans variable font and Krona One WOFF2 files, including Latin and Latin Extended subsets, with their OFL licenses. Latin subsets are preloaded, and `font-display: swap` is retained. No font family or weight was substituted.

Netlify `_headers` gives hashed scripts and image previews immutable year-long caching, and local fonts week-long caching. The existing SPA `_redirects` rule remains intact.

## Verification

- Production build and `git diff --check` pass. No standalone lint/type-check scripts existed in this JavaScript repository.
- All seven pages load their images with descriptive alt text and explicit dimensions. No horizontal page overflow at 320–1440 px.
- Homepage project links, keyboard-operated carousels and original full-size image links work. Keyboard focus remains visible.
- Instrumented WebGL draws confirm visible animation, offscreen stopping/resuming and no continuous drawing with reduced motion.
- Computed hero title, description, action row and navigation coordinates, dimensions and font settings match exactly before/after at 1440 px and 375 px.
- Normal-motion screenshots confirm that the blue beam effect remains present. The existing CSS continues to hide it for reduced-motion users.

Still verify real low-end phones, Safari, browser zoom, screen-reader behavior and the actual Netlify deployment. Local scores cannot establish Netlify cache headers or device-specific GPU behavior after deployment.

## Reproduce

```sh
npm ci
npm run build
npm run perf:serve
```

In a second terminal, with Chrome installed:

```sh
npm run perf:audit -- http://127.0.0.1:4173/ after mobile
npm run perf:audit -- http://127.0.0.1:4173/ after desktop
npm run perf:profile -- http://127.0.0.1:4173/ after
npm run perf:check -- http://127.0.0.1:4173
```

Run audits sequentially without concurrent browser tests, image encoding or other heavy workloads. After Netlify deploys the changes, repeat the audits against `https://eliasnikkinen.com/`.
