# Topic pages and consultation features

The main navigation contains Journal and the contact control. Home's Journal section and /Journal/ expose Yoga, Art and Tech links. Canonical topic routes are /yoga/, /art/ and /tech/. Previous /Yoga, /Arts and /Tech routes redirect to the new routes in static output.

## Tagging journal entries

Use lowercase tags in Markdown frontmatter. For example:

```yaml
tags: [yoga, tech]
```

That entry appears in both /yoga/ and /tech/, once on each page, while keeping one article URL and one RSS item. An empty tag array keeps it in the main Journal only. Category remains a descriptive editorial field; tags control topic membership. `draft: true` hides it from all lists, article routes and RSS.

## Change each page's featured area

Edit `src/data/topics.ts`. Each topic has its own headline and optional featured video, banner, booking URL and payment URL. Headline and imagery must be authored or sourced under the content policy. Banner fields: src, alt, credit, creditUrl. Video fields: id, title. It is safe to omit either.

Set `bookingUrl` to your actual scheduling page to replace the consultation email form. Set `paymentUrl` to an existing verified hosted checkout/payment link to show a payment button for that topic. Use HTTPS URLs. These fields are intentionally unset until Jah supplies the real destinations. Never fabricate a checkout, price or payout connection.

The current consultation button opens a topic-specific inquiry form addressed to mail@jahnoah.com. It collects scope, budget/currency and timezone, then opens an email draft. It does not confirm an appointment or charge a payment. Art is now an explicit service choice alongside development, speaking and yoga. A booking-provider link or paid checkout may be supplied independently for each topic.

Payments remain external to the static site: configure payout details in the actual payment provider. This scaffold neither handles bank details nor guarantees payment methods or bank transfers.
