# Client pivot handoff — 2026-10-15

Review set: https://github.com/onlyjah/oj-ui/pull/1. Working tracker: https://github.com/onlyjah/onlyjah-com/issues/3. Architecture and extension steps: ../architecture/PORTABLE-MODULES.md.

## Result

TanStack Start with Vite+; shared OJ layouts, blocks and shadcn/Base UI primitives; site-owned content and adapters. The checked-in UI source snapshot points to `onlyjah/oj-ui` commit `a3c2f1796029e30e6c8254d22d70e13ab1137ff4`; `pnpm check:ui` verifies all 31 source/package/notice files by SHA256. No package registry credential is needed to build either client. Edit the canonical UI repository and re-export a reviewed snapshot, rather than editing vendor files.

The included static HTTP entrypoint runs without framework or application dependencies. Docker and Railway descriptors use that same entrypoint. Contracts describe optional independent services; they do not activate services or install arbitrary addons. The existing Ark Go backend and TS services remain separate units.

## Evidence

Baseline: Astro main at `14019241e7c6f43f781b23efd7ff89f3a9350d28`. Original Astro source, layout and package files are retained under `docs/history/astro-1401924`; published journal Markdown remains unchanged at its active source path.

- Original `npm run build`: passed before conversion.
- `pnpm check`: passed (UI integrity, Start static build, strict TypeScript, original Python static checks, portable host test).
- Static verification: nine journal entries, exact multi-tag topic membership, navigation, RSS XML/GUIDs/Published-vs-Captured dates, internal destinations.
- `python3 scripts/verify-content-parity.py /path/to/original/dist`: passed exact normalized main-content text on all 16 original content pages, including all nine entries. The original build was produced from the recorded baseline. Smart typography is retained with marked-smartypants.
- Canonical pages are explicitly prerendered with trailing slashes and link crawling disabled, avoiding slash/non-slash redirect output overwriting static pages. Journal paths come from the published-only generated manifest.
- `ssr.noExternal: true` ensures React and use-sync-external-store share the prerender module graph; externalized React caused a null hook dispatcher during prerender.

## Review limits and next work

Docker is unavailable in this environment: the container recipe has not been built or run. Railway inventory was read but no deployment, service, environment variable, domain or billing setting was changed. Live authentication and visual/keyboard browser regression need review before promotion. Existing dependency versions include prerelease tooling; pinning is preserved, and platform validation is still required.

This is the client/module foundation, not a completed KASH encrypted-storage backend. Encryption key lifecycle, device grants, revocation, sync conflict semantics, quotas and payment/indexing enforcement require separately reviewed server/protocol modules and integration tests. Do not infer confidentiality or storage durability guarantees from the client shell or addon descriptor.

Merge the UI source review and then the consumer reviews. Production promotion remains owner controlled. Revert the consumer PR or deploy the previous immutable asset artifact to roll back. No cloud data or local user drive files were modified.
