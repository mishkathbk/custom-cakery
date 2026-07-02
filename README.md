# Halifax Custom Cakery — Website

A static, mobile-first Next.js showcase site. Visitors browse the menu and
order directly via **WhatsApp or email** — there's no cart or checkout, and
no fixed prices on individual cakes (see "Pricing" below).

## Stack

- **Next.js 16** (App Router, static export — `output: 'export'`)
- **Tailwind CSS** for styling / design tokens
- **Framer Motion** for animation (page-load, scroll reveals, swipeable gallery)
- **Lenis** for smooth scrolling
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

To build the static site (outputs to `out/`, deployable to any static host —
Netlify, Vercel, GitHub Pages, S3, etc.):

```bash
npm run build
```

> Note: the first build needs internet access once, to download the Google
> Fonts (Fraunces, Manrope, Space Mono) that `next/font/google` self-hosts
> into the build. After that they're bundled locally — no runtime font
> requests.

## Where everything lives

```
src/
  data/cakes.js          ← THE single data file: siteConfig, pricingGuide, categories, cakes
  lib/utils.js             ← WhatsApp/email quote-request link builders
  app/
    layout.js               ← fonts, header/footer/smooth-scroll shell
    page.js                  ← homepage (assembles the section components)
    menu/page.js               ← full menu with search + category filter
    cake/[slug]/page.js        ← one static page per cake (generateStaticParams)
    pricing/page.js            ← full pricing guide (from the owner's price sheet)
    about/page.js               ← About Us copy + contact
    terms/page.js                ← Terms & Conditions
  components/               ← one component per section, all independent
```

Every section of every page is its own component — open `Hero.jsx`, change
only the hero, nothing else moves.

## Pricing — how it works on this site

Per the client's direction, **individual cakes never show a fixed price**.
Price depends on size, flavour, design and customization, so:

- Cake cards and detail pages show a **"See pricing guide"** link instead of
  a price, plus a size/quantity selector (informational only).
- `/pricing` renders the full price guide from the owner's price sheet:
  standard cake prices by weight (Simple → Custom → Fondant), bento cakes,
  cupcakes, cake pops, cakesicles, cut cakes, add-ons, and the frosting note
  (whipped cream is standard; buttercream costs $5–$10 more).
- When a customer taps **Order on WhatsApp / Email**, the pre-filled message
  asks the business to confirm the exact price for that size and design —
  it never states a price on the customer's behalf.

All of this content lives in the `pricingGuide` export in `src/data/cakes.js`
— edit the numbers there and the `/pricing` page updates automatically.

## Pickup only

This is a home-based bakery with **pickup only — no delivery**. That's
called out in the hero badges, the cake detail order panel, the footer, and
the Terms & Conditions page. If delivery is ever added, update
`siteConfig.pickupOnly` and the relevant copy in `OrderPanel.jsx`,
`Hero.jsx`, `Footer.jsx` and `terms/page.js`.

## Editing the catalog (`src/data/cakes.js`)

This file exports:

- `siteConfig` — business name, tagline, WhatsApp number, email, address,
  pickup/lead-time notes. **Update `whatsappNumber` and `email` before
  launch** — every order link is built from these two fields (they're
  currently placeholders).
- `pricingGuide` — every table shown on `/pricing`.
- `categories` — the 7 categories requested: Theme Cakes, Birthday Cakes,
  Wedding Cakes, Anniversary Cakes, Baby Welcome Cakes, Fruit Cakes,
  Brownies.
- `cakes` — the 76 sample menu items. Each item looks like:

```js
{
  id: 'ck-001',
  slug: 'superhero-squad-theme-cake-ck-001',
  name: 'Superhero Squad Theme Cake',
  category: 'theme-cakes',        // must match a categories[].id
  flavour: 'Chocolate',
  unitType: 'lb',                 // 'lb' for cakes, 'box' for brownies
  availableWeights: ['1 lb', '2 lb', '2.5 lb', '3 lb', '4 lb', '5 lb'],
  tags: ['bestseller'],           // optional: 'bestseller' | 'new'
  featured: true,                 // show on homepage "Fan favourites"
  description: 'short one-liner shown on the card',
  longDescription: 'longer paragraph shown on the detail page',
  image: 'https://picsum.photos/seed/.../700/700',   // replace with real photos
  gallery: ['...', '...', '...'],
}
```

Add, remove, or edit items directly in this array — the homepage featured
strip, `/menu`, individual `/cake/[slug]` pages, and related items all read
from this same array.

**Sample images:** every `image`/`gallery` URL currently points to
[Picsum](https://picsum.photos) placeholder photography (seeded so each item
gets a consistent placeholder, and each detail page gets 4 different angles
to demo the swipeable gallery). Swap these for real product photography
before launch.

There's also `scripts/gen-data.mjs`, the script originally used to generate
the sample catalog. It's not imported by the app and is safe to delete.

## The cake detail page

`/cake/[slug]` shows a swipeable image gallery on the left (drag/swipe on
touch, arrow buttons + dot indicators on desktop) and details + the order
panel on the right, per the requested layout. Weight/quantity selection is
informational — it's included in the pre-filled WhatsApp/email message so
the business can quote the right price.

## Going dynamic later

Because every component reads from `src/data/cakes.js` and nowhere else,
switching to a CMS or database later is mostly a one-file change: replace
the contents of `cakes.js` with a `fetch`/API call that returns the same
shapes, and every page keeps working. At that point you'd also switch
`output: 'export'` off in `next.config.js` if you need server rendering, and
add a cart/checkout flow whenever the client is ready for it.

## Mobile-first notes

- Bottom-safe floating WhatsApp button, hamburger nav, horizontally
  scrollable category chips, and a 2-column mobile grid (up to 4 on desktop)
  were all built mobile-first since most traffic is expected on phones.
- Animations respect `prefers-reduced-motion`.
