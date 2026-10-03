# Journal publishing and RSS

RSS is a small XML file listing published journal entries, their dates and permanent links. A reader app periodically checks it and displays new entries. Readers do not need an account on JahNoah.com or to give you an email address. RSS is separate from an email newsletter.

## Reader instructions

1. Open your preferred RSS reader and choose Add feed / Follow website.
2. Paste `https://jahnoah.com/feed.xml` after the revised site is live at that domain.
3. New journal entries appear when the reader next checks the feed. Opening raw XML in a browser is normal; it is designed for reader apps.

The private review site is access protected. Ordinary external RSS readers cannot fetch that preview feed without the site's session. The production URL above will work only after the new output is deployed to JahNoah.com.

## Author instructions

Add a Markdown file to `src/content/journal/`. Required frontmatter: title, description, date, category (`Technology`, `Yoga`, `Art`, `Field Notes`). Use `tags: [yoga, tech]` for multiple topic pages; accepted tags are yoga, art, tech. Use `draft: true` to keep unfinished work out of both journal routes and RSS. Build and deploy the static output after publishing; the feed is generated during the same build. No database or RSS subscription server is required.

Keep a published filename stable: it controls the article URL and RSS GUID. Editing an existing entry retains its GUID. RSS summaries link to the full article; it does not send emails or sync Forge automatically.

Optional provenance fields: `kind: Archived original`, `kind: Archived excerpt`, or `kind: Collected excerpts`, and `sourceUrl`. Keep original publication dates for archived posts, not import dates. For an undated excerpt use `dateType: Captured` with the actual snapshot date; the interface labels it as a capture and RSS omits its publication date. A quotation collection preserves the exact selected texts and shows their source IDs and conversation dates; it is not a newly authored essay. Do not add generated bridge paragraphs or silently repair transcription.

## Current feed

`src/pages/feed.xml.ts` filters drafts, sorts newest first, escapes XML text, supplies category and publication date, and assigns stable permalink GUIDs. `src/layouts/Base.astro` advertises the feed with `rel="alternate"`; Journal and footer provide visible links. The file is generated statically as `dist/feed.xml`.

Technical reference: https://docs.astro.build/en/recipes/rss/
