# JahNoah client

Independent TanStack Start + Vite+ static client. Shared visual components come from OJ UI; content and routes live here.

Use Node 24.11+ and pnpm 12.5.1:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm start
```

`pnpm build` compiles published journal Markdown and RSS, prerenders canonical routes, and writes `dist/`. `pnpm start` serves that directory; HOST, PORT and PUBLIC_DIR are optional settings. `/healthz` reports artifact readiness. No backend is required to serve the public site.

- [Module ownership, containers, Railway and self-hosting](docs/architecture/PORTABLE-MODULES.md)
- [Validation, baseline and review limits](docs/handoff/2026-10-15-client-pivot.md)
- [Original Astro source archive](docs/history/astro-1401924)

Edit UI in `onlyjah/oj-ui`, export a reviewed snapshot with its `scripts/export.mjs`, then run `pnpm install` and `pnpm check` here. `vendor/oj-ui.lock.json` records source revision and per-file integrity. Do not put secrets in browser-visible VITE_* build inputs.
