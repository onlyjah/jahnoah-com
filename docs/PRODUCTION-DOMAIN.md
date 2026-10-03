# JahNoah.com production hosting

Verified October 3, 2026: the existing production host is GitHub Pages for onlyjah/jahnoah-com. Cloudflare manages DNS. Keep this setup.

## Existing DNS — do not replace

The apex A records are 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153. www.jahnoah.com is a CNAME to onlyjah.github.io. Nameservers are chip.ns.cloudflare.com and martha.ns.cloudflare.com.

The earlier instructions pointing the domain to the ChatGPT Site provider were for a separate pending domain binding and must not be applied. No DNS changes were made in this session.

## Publishing

.github/workflows/deploy.yml deploys main through the existing github-pages environment: npm ci, Astro static build, rendered-page verification, Pages artifact upload and deploy-pages. The restored workflow retains the repository's existing custom domain configuration. Search indexing is enabled on main. The test branch remains a review candidate and does not deploy production.

The separately published ChatGPT Site is an additional copy; it is not the authoritative JahNoah.com deployment. Use GitHub main and its successful Pages workflow to track production. Verify the actual domain after each deployment.
