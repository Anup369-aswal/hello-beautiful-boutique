# Hello Beautiful Boutique — Website

A premium, production-ready website for **Hello Beautiful Boutique**, a ladies' designer
boutique and custom tailoring studio in BTM 2nd Stage, Bangalore.

Built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS and a lightweight
Three.js hero animation.

---

## 1. Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm start
```

---

## 2. Project Structure

```
/app                      Pages & routing (Next.js App Router)
  layout.tsx               Root layout — fonts, SEO metadata, schema
  page.tsx                 Home page — assembles every section
  globals.css               Tailwind + custom global styles
  sitemap.ts                Generates /sitemap.xml automatically
  robots.ts                 Generates /robots.txt automatically
  privacy-policy/            Privacy policy page
  terms-and-conditions/      Terms & conditions page

/components                One reusable component per section
  Navbar.tsx, Hero.tsx, Hero3D.tsx, About.tsx, Services.tsx,
  Portfolio.tsx, WhyChooseUs.tsx, Process.tsx, Reviews.tsx,
  Instagram.tsx, FAQ.tsx, Location.tsx, Contact.tsx, Footer.tsx,
  WhatsAppButton.tsx, StickyMobileCTA.tsx, CustomCursor.tsx, Reveal.tsx

/lib
  config.ts                 ⭐ ALL editable business content lives here
  schema.ts                 Generates LocalBusiness / FAQ / Breadcrumb JSON-LD

/public/images              Placeholder photography — replace with your own
  hero/, about/, portfolio/<category>/, instagram/
```

---

## 3. Changing Business Information (no code required)

Almost everything on the site — business name, phone/WhatsApp number, address,
services, portfolio captions, FAQs, Instagram handle, review numbers — lives in
one file:

```
/lib/config.ts
```

Open it, edit the plain text/values, save, and redeploy. You do not need to touch
any component file for text changes.

---

## 4. Replacing Images

Placeholder images (generated for development) currently live at:

```
/public/images/about/atelier.jpg          → About section photo
/public/images/about/og-cover.jpg         → Social share preview image (1200×630)
/public/images/portfolio/blouses/…        → Portfolio: Blouses
/public/images/portfolio/bridal/…         → Portfolio: Bridal Wear
/public/images/portfolio/gowns/…          → Portfolio: Gowns
/public/images/portfolio/salwar/…         → Portfolio: Salwar Suits
/public/images/portfolio/partywear/…      → Portfolio: Party Wear
/public/images/portfolio/custom/…         → Portfolio: Custom Designs
/public/images/instagram/insta-01.jpg…06  → Instagram grid tiles
```

**To replace an image:** export your photograph at a similar aspect ratio, name it
exactly the same as the file you're replacing (or update the path in
`/lib/config.ts` if you rename it), and drop it into the same folder.

To add a **new** portfolio piece, add a new entry to the `portfolioItems` array in
`/lib/config.ts` and place the matching image in the right category folder.

For best performance, export photos as JPG or WebP, ideally under 300KB each.

---

## 5. Connecting Google Maps

The Location section already works out of the box using a keyless Maps query
embed. For a nicer embed tied to your exact business listing:

1. Get your **Google Place ID** at
   https://developers.google.com/maps/documentation/places/web-service/place-id
   (search for "Hello Beautiful Boutique" or your address).
2. Get a **Google Maps Embed API key** from the Google Cloud Console
   (enable the "Maps Embed API").
3. In `/lib/config.ts`, update:
   ```ts
   googleMapsEmbedSrc:
     "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:YOUR_PLACE_ID"
   ```
4. Also update `googlePlaceId` and `googleMapsUrl` in the same file with your
   real values (used for the "Get Directions" and reviews links).
5. Update `geo.latitude` / `geo.longitude` with your exact coordinates (right-click
   your shop's pin on Google Maps to copy them) — these feed the LocalBusiness SEO
   schema.

---

## 6. Connecting Google Reviews

We deliberately did **not** invent any review quotes or customer names — that
would be misleading. The Reviews section currently shows a clearly-labelled
rating summary with a "Read All Google Reviews" button linking to your Google
Business Profile.

To pull in your **live** rating and review count:

1. Enable the **Places API** in Google Cloud Console and generate an API key.
2. Use the [Place Details API](https://developers.google.com/maps/documentation/places/web-service/details)
   with your `googlePlaceId` (from step 5 above) to fetch `rating` and
   `user_ratings_total`.
3. Because this requires a server-side call (to keep your API key private), the
   simplest approach is:
   - Add a small Next.js Route Handler (e.g. `/app/api/google-rating/route.ts`)
     that calls the Places API server-side with your key from an environment
     variable, and returns just `{ rating, total }`.
   - Fetch that route from the `Reviews` component and replace the static
     `siteConfig.googleRating` values.
4. Once wired up, set `googleRating.isLiveConnected: true` in `/lib/config.ts`
   to remove the "structured to connect live" note.

To display individual review **quotes**, note that Google's API terms require
attribution and do not permit long-term caching of full review text in most
cases — a common, compliant alternative is embedding Google's own review widget
or using a review-aggregator plugin rather than hand-copying quotes.

---

## 7. Connecting Instagram

Instagram's Basic Display API was deprecated by Meta, so there are two realistic
options:

**Option A — Simple, no code (recommended for a boutique site):**
Use a widget service like [SnapWidget](https://snapwidget.com) or
[Elfsight](https://elfsight.com) — connect your Instagram Business account there,
and embed the generated `<iframe>`/script snippet in place of the `Instagram`
component's grid.

**Option B — Instagram Graph API (more control):**
1. Convert your Instagram account to a **Business** account and connect it to a
   Facebook Page.
2. Create a Meta developer app and request the `instagram_graph_user_media`
   permission.
3. Use the Graph API's `/me/media` endpoint to fetch your latest post images and
   permalinks server-side (a Route Handler, same pattern as the reviews
   integration above), and pass them into `instagramTiles` instead of the static
   array in `/lib/config.ts`.

Until either is connected, the grid uses placeholder images that link out to
your real profile at `https://www.instagram.com/hello_beautiful_designer/`.

---

## 8. Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No special build settings
   needed.
4. Add any environment variables (e.g. `GOOGLE_PLACES_API_KEY`,
   `GOOGLE_MAPS_EMBED_KEY`) if you've wired up the optional integrations above,
   under Project Settings → Environment Variables.
5. Deploy. Vercel will give you a `*.vercel.app` URL immediately.
6. Add your custom domain under Project Settings → Domains, and update
   `siteUrl` in `/lib/config.ts` to match your real domain (this feeds the SEO
   canonical URL, sitemap and Open Graph tags).

---

## 9. SEO Notes

- Title, meta description, Open Graph/Twitter tags, canonical URL and keywords
  are all set in `/app/layout.tsx` and `/lib/config.ts` (`seo` object).
- `LocalBusiness`/`ClothingStore`, `FAQPage` and `BreadcrumbList` JSON-LD
  structured data are generated automatically from `/lib/config.ts` — edit the
  content there and the schema stays in sync.
- `/sitemap.xml` and `/robots.txt` are generated automatically by
  `app/sitemap.ts` and `app/robots.ts`.
- Every image has descriptive `alt` text pulled from `/lib/config.ts` — update
  it there when you replace images.
- Local SEO keywords (Bangalore, BTM Layout, BTM 2nd Stage, Bengaluru) are
  worked naturally into headings, body copy, meta description and schema —
  avoid keyword-stuffing if you add more copy.

---

## 10. Performance & Accessibility

- Images use native lazy loading (`loading="lazy"`) below the fold.
- The Three.js hero animation is skipped entirely on mobile devices, coarse
  pointers, and when the visitor has `prefers-reduced-motion` enabled — a
  lightweight CSS fallback is shown instead.
- All animations respect `prefers-reduced-motion: reduce` globally (see
  `app/globals.css`).
- Keyboard focus is visible on interactive elements; the FAQ accordion and
  mobile nav use proper `aria-expanded`/`aria-controls` attributes.
- A "Skip to main content" link is included for keyboard/screen-reader users.

---

## 11. Content You Should Double-Check Before Launch

- `lib/config.ts` → `googlePlaceId`, `googleReviewsUrl`, `googleMapsUrl`,
  `googleMapsEmbedSrc`, and `geo` coordinates are all **placeholders** — replace
  with your real values (see Section 5).
- `faqItems` → the stitching turnaround-time answer is intentionally general;
  update it once you have a confirmed timeline.
- All portfolio and Instagram images are **placeholders** generated for
  development — replace with real boutique photography before launch (see
  Section 4).
- `siteUrl` in `lib/config.ts` should be updated to your real domain once
  live.

---

## 12. A Note on What Wasn't Built

- No CMS is included. Content is managed through `/lib/config.ts`, which is
  simple enough for non-developers to edit directly. If you outgrow this (e.g.
  you want boutique staff to update the portfolio without touching code), a
  headless CMS like Sanity or a simple Google Sheet-backed content source would
  be a reasonable next step — happy to help set one up separately.
- No live Google Reviews or Instagram feed is wired in by default, since both
  require API credentials only you can provide — see Sections 6 and 7 for exact
  steps to connect them.
- No fake reviews, awards, statistics or years-of-experience claims were added
  anywhere on the site.
