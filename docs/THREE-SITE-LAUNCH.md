# Three-site launch preparation — 2026-10-03

Jah requested OJCom, JNCom and JNLol launch tonight (America/New_York) with review before JahNoah production promotion. This record distinguishes prepared source from activated domains.

| Site | Candidate | Current result | Launch connection |
|---|---|---|---|
| OnlyJah.com | onlyjah/onlyjah-com: dev/reconcile-cloud-rebuild, c512478fa3e43fc69efc24a874812c7efbac1598 | Existing CI runs 37114154282 and 37114117587 succeeded. Public readiness records 62 tests/85 static pages. Not modified by this revision. | Use existing verified static hosting contract. Verify production public provider settings, quotation approvals and domain target; do not reuse development secrets or assume account acceptance. |
| JahNoah.com | onlyjah/jahnoah-com: test/astro-revision | Astro static; 10 pages including About video and two source-excerpt journal entries. Private review URL remains https://jahnoah.jahknower.chatgpt.site. | Owner review, domain/DNS connection, remove review noindex in production. Main unchanged. |
| JahNoah.lol | onlyjah/jahnoah-lol: test/launch | Astro static creative playground, music/video/source notes. Replaces demo template only on test candidate. | Owner review, independent static host, domain/DNS connection, remove review noindex in production. Main unchanged. |

## Domain and test access
No callable Cloudflare account connection is available in this session. DNS/access operations have not been performed. Cloudflare Access must protect the custom test host and any alternate provider-origin/preview host before owner-only staging is claimed. Record an explicit owner login identity; do not infer it from an inbox address. A public GitHub Pages origin is not made private by protecting only test.jahnoah.com. GitHub supports one Pages site per repository, so use separate staging/production targets or an appropriate private origin.

## Tonight's sequence
1. Review JahNoah.com and the JahNoah.lol branch/artifact. Recheck each candidate SHA immediately before promotion.
2. Connect the actual Cloudflare zone and hosting projects. Inspect current DNS records and deployments before mutation.
3. Verify staging anonymous denial and owner access at all hostnames; then inspect mobile/keyboard/video/contact behavior. The local checks do not establish browser acceptance.
4. Promote the reviewed static output. Remove review noindex only in production. Canonicals must match their respective domains. Keep production and test deployment workflows separate.
5. Verify DNS, certificates, root and direct routes, assets, 404, external labels, PDF downloads, RSS and rollback revisions.

## Features beyond the static launch
No new auth, payments, newsletters or Forge synchronization were activated for JahNoah.com/.lol. OnlyJah's own implemented data features have their own acceptance and environment requirements. Do not infer working commerce from a link or billing label, and do not grant rights to make tests pass. Live account acceptance, cross-domain SSO, checkout and uploads remain outside the static launch evidence.

## Updated JahNoah.lol scope
Jah subsequently requested three rooms: Bloom, Orbit and Canopy, with lightweight perspective motion, shadcn-style controls, actual SoundCloud/YouTube media, licensed NASA imagery, NPS nature recordings and room-tagged journal entries. Left Behind lyrics were supplied and applied with explicit corrections; see LYRICS-REVIEW.md. This supersedes the earlier five-page playground: current output contains ten pages. Build and internal destination checks pass; browser/mobile/player acceptance still requires review. No public domain activation occurred.
