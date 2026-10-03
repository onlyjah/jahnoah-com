# Private implementation handoff — not website copy

Owner requests: operate remotely while traveling; appropriate compensation; multiple payment methods; simple booking; guidance on human-authored blogs and OnlyJah connection.

## Current working contact path
Hiring buttons open a short form that composes a draft to the public email from the owner’s website/résumé: mail@jahnoah.com. The visitor sends it through their mail application. No account required. Inquiry includes service, name, email, project/event details, optional budget and currency, optional timezone/location. It does not confirm an appointment or collect money.

## Decisions the owner must supply
- Minimum acceptable project/engagement amount, consultation price if any, preferred currency, and rate model.
- Deposit or milestone policy, revision limits, cancellation expectations, and whether event travel is offered and reimbursed separately.
- Booking calendar URL, appointment duration, timezone handling, and actual availability.
- Confirm which connected Stripe account to use and its settlement/payout settings. Session inventory found a live account named Jah Noah Simpson; no account-specific action was taken because selection is still needed.
- Approved product names/descriptions and actual hosted payment links. No invented prices or products.

## Payment direction
Keep the site static. Hosted checkout links suit approved fixed offerings; customer-specific invoices suit scoped custom work. Enable eligible payment methods through the merchant dashboard rather than promising every payment method to every visitor. Payment availability depends on merchant configuration, customer geography, currency, and transaction eligibility.

Source: https://docs.stripe.com/payment-links — reviewed 3 October 2026.

Require backend webhook verification for automated fulfillment and payment status. Never unlock paid material or mark an engagement funded because a browser visited a success page. Payout availability and fees must be checked separately; payment collection is not immediate bank settlement. Do not expose bank details or payment secrets in public source.

Before agreeing to work, establish deliverables, timeline, currency, fee, deposit/milestones, and which additional work requires a revised agreement. These are discussion prompts, not generated public terms or legal text. No rate was chosen on the owner’s behalf.

## Blogs — author stays the author
1. Capture an actual question, experiment, or project in the owner’s words.
2. Keep source notes, dated screenshots, links, and code evidence beside the draft.
3. Write the experience and conclusion personally; use research/workflow support without generating prose.
4. Review claims, credits, consent, and what should stay private.
5. Explicitly approve the publication and selected destinations in Forge.
6. Preview the static page before release. Keep corrections/version history.

## OnlyJah → JahNoah
Private Forge original → human publish approval → public, destination-scoped export → authenticated build job → validated Markdown → Astro build → deployment verification → opt-in subscriber email.

Needed: real Forge API/export contract, author ID, destination grant, authenticated sync job, deployment trigger, subscriber list, verified sender, email delivery service, idempotency ledger, and unpublish propagation. None is claimed connected. Keep API service credentials outside the browser. A central OnlyJah identity needs registered redirect URLs and server-enforced scopes; public reading stays open.

## Authorship boundaries
All narrative website copy now comes from selected owner repository/résumé excerpts. Art and journal stay empty. New interface labels implement the requested scaffold. Sourced example photos stay labeled and credited until replaced with owner photos. These private technical notes do not constitute publication content.
