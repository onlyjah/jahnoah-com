# Jah Noah / Ark connection

## Current release
Astro generates static HTML in `dist/`. React hydrates only the shadcn-style Button / Radix Dialog islands. Markdown journal entries generate article pages, archive, and RSS. No server runtime is required to serve the output.

Journal content is intentionally empty under the owner’s zero AI-generated-content policy. Read CONTENT-POLICY.md before adding content.

## Direct publication
Create a Markdown file in `src/content/journal/` with title, description, date, category (Technology, Yoga, Art, or Field Notes), and draft. Run `npm run build`. Upload `dist/` to static hosting or publish the source through the configured deployment workflow. Drafts are excluded from pages and RSS.

## Forge publication contract — proposed, not connected
A backend export endpoint should provide only Jah Noah’s approved, public publications explicitly selected for this domain. Never export private drafts or assume a logged-in visitor can request them. Contract: stable ID, slug, title, summary, Markdown body, category, publication date, author identity, rights, canonical URL, revision, and allowed destination.

Forge publish event → authenticated sync job → validate destination and permissions → fetch approved content → write Markdown snapshot → build → deploy → verify success → enqueue subscriber notification.

The worker credentials remain outside the static site. Choose the actual Forge API, author ID, build trigger, and sync runner before enabling this path. A shared OnlyJah identity uses a centrally configured OAuth/OIDC flow with PKCE and explicitly registered redirect URLs; do not copy cookies between unrelated sites or embed provider secrets in the client.

## Email
Use a confirmed subscriber list, unsubscribe support, verified sender domain, and delivery provider. Send after deployment succeeds, once per publication/revision notification policy, with an idempotency record. There is no email signup collection in this release; the dialog accurately offers RSS instead. Existing subscribers have not been contacted.

## Payments
Use owner-provided hosted checkout links with a configured merchant settlement bank account. Static pages can link to checkout. A website cannot ensure direct bank settlement on its own. Keep card processing and payment secrets outside the client, verify purchases using backend webhooks, and define offerings and prices before publishing purchase buttons.

## Outstanding setup
Domain DNS ownership, OnlyJah/Forge export API and login client, author identity, authorized source credentials, subscriber service and sender address, actual offerings and payment URLs, deployment-event worker and monitoring.

## Security and publishing
Import plain Markdown only; do not permit arbitrary executable MDX from an external source. Keep source permissions and public publication consent explicit. Handle unpublish/delete events. Preserve attribution and define canonical URL precedence across Forge and Jah Noah. Avoid duplicate emails during retries or rollback. Static public content is not suitable for gated purchases without separate backend delivery authorization.
