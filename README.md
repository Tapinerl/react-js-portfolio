# Elias Nikkinen's portfolio

React portfolio with case studies, an about page, and a Three.js hero animation. Built with Vite.

## Requirements

Use Node.js 22.12+ (22.x) or Node.js 24+ and npm.

## Development

```sh
npm ci
npm start
```

Open http://localhost:3000. Vite will choose another port if 3000 is occupied.

## Production

```sh
npm run build
npm run preview
```

The deployable site is written to `build/`. Preview serves it at http://localhost:4173.
Configure the host to serve `index.html` for unknown routes so direct visits to `/about` and `/case-studies/:id` work. `public/_redirects` supplies this rule for hosts that support it.

Vite targets modern browsers by default. The Three.js hero requires WebGL.

## Dependency checks

```sh
npm outdated
npm audit
```

React 18 and React Three Fiber 8 are intentionally kept together. Three.js stays on 0.160.x because the hero customizes its shader internals; upgrading it or the React/Fiber major versions requires visual regression testing.
