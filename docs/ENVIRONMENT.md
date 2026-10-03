# JahNoah.com environments

This branch migrates the existing React/Vite application to Astro static output. Main is unchanged. Original editorial content stays in main history and the source repositories. No generated articles, biographies or imagery are included.

## Local build
Node 22, npm ci, npm run build. Output: dist. npm run dev for local development. No server-side environment variables are needed for the present site. Public canonical URL currently remains https://jahnoah.com. Robots noindex is intentional for review; remove it in the production change.

## Test branch
`test/astro-revision` runs the build workflow and saves a dist artifact. It deliberately does not publish a public Pages origin. GitHub Pages allows one site per repository, so independent staging and production require separate deployment targets or repositories.

## Private staging
Use Cloudflare Pages with an Access application protecting both test.jahnoah.com and its pages.dev preview hostname, or a genuinely private GitHub Pages origin if the account supports it. Merely protecting test.jahnoah.com while leaving the github.io origin public does not meet the owner-only requirement. Cloudflare Access, rather than Gateway, is the application login gate. Allow only the owner's confirmed login email, with no Everyone or Bypass policy. Verify anonymous requests are denied at every origin and hostname before publishing. DNS/Cloudflare account operations are not available in this session.

## Production
After owner review, merge the revision into the actual publishing branch (currently main; no prod branch exists). Replace the previous Vite deployment workflow with the Astro build, upload-pages-artifact and deploy-pages jobs. Enable Pages Actions and configure the verified domain in GitHub and Cloudflare. Do not overwrite an existing production Pages site with the test branch. Revert the merge to roll back.

## Connections
Contact opens the visitor's mail client and does not reserve an appointment. No payments, email delivery, authentication or Forge sync are configured. Those require verified account connections and a separate service; never place secret keys in the static bundle. Published quotes link to primary sources; the Congressional App Challenge achievement was supplied by Jah Noah and still needs a winner-page link/year/game title for independent corroboration.
