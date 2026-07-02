// One-off generator used to seed src/data/cakes.js.
// Not part of the app build — safe to delete after editing the data by hand.
import fs from 'fs';

const categories = [
  {
    id: 'theme-cakes',
    name: 'Theme Cakes',
    tagline: 'Hand-sculpted to your idea',
    description: 'Custom-designed cakes built around a character, hobby or party theme — tell us the idea and we\u2019ll sketch a design.',
  },
  {
    id: 'birthday-cakes',
    name: 'Birthday Cakes',
    tagline: 'Bright, festive & personal',
    description: 'Fresh, made-to-order birthday cakes finished with piping, drips or fondant detail in your chosen colours.',
  },
  {
    id: 'wedding-cakes',
    name: 'Wedding Cakes',
    tagline: 'Tiered centrepieces',
    description: 'Elegant tiered wedding cakes finished in sugar florals, hand-piping and metallic accents.',
  },
  {
    id: 'anniversary-cakes',
    name: 'Anniversary Cakes',
    tagline: 'Celebrating every year together',
    description: 'Refined celebration cakes designed for milestone anniversaries, big or small.',
  },
  {
    id: 'baby-welcome-cakes',
    name: 'Baby Welcome Cakes',
    tagline: 'Baby showers & gender reveals',
    description: 'Soft, sweet designs for baby showers, gender reveals and welcome-home celebrations.',
  },
  {
    id: 'fruit-cakes',
    name: 'Fruit Cakes',
    tagline: 'Real fruit, seasonal availability',
    description: 'Cakes layered with real fruit purée and fresh fruit. Availability shifts with the season — ask us what\u2019s fresh.',
  },
  {
    id: 'brownies',
    name: 'Brownies',
    tagline: 'Dense, fudgy, cut to order',
    description: 'Small-batch brownies sold by the box, in classic and specialty flavours.',
  },
];

const catIndex = Object.fromEntries(categories.map((c) => [c.id, c]));

// Real flavours from the client's flavour sheet.
const classicFlavours = ['Vanilla', 'Chocolate', 'Red Velvet', 'Butterscotch', 'Vanilla Chocolate', 'Vanilla Velvet'];
const fruitFlavours = ['Strawberry', 'Raspberry', 'Mango', 'Carrot'];
const allCakeFlavours = [...classicFlavours, ...fruitFlavours];

const LB_WEIGHTS = ['1 lb', '2 lb', '2.5 lb', '3 lb', '4 lb', '5 lb'];
const BOX_SIZES = ['Box of 6', 'Box of 12', 'Box of 24'];

const designsByCategory = {
  'theme-cakes': [
    'Superhero Squad', 'Safari Adventure', 'Space Explorer', 'Enchanted Forest', 'Under the Sea',
    'Princess Castle', 'Dinosaur World', 'Unicorn Cloud', 'Football Ground', 'Race Track',
    'Favourite Cartoon', 'Floral Garden Party', 'Camping Adventure', 'Construction Site',
  ],
  'birthday-cakes': [
    'Confetti Pop', 'Rainbow Drip', 'Golden Number', 'Balloon Bunch', 'Sprinkle Party',
    'Sunshine Citrus', 'Milestone Gold', 'Star Sparkle', 'Retro Disco', 'Candy Shop',
    'Watercolour Bloom', 'Marble Drip', 'Boho Floral', 'Simple & Sweet',
  ],
  'wedding-cakes': [
    'Ivory Rose Tier', 'Cascading Floral', 'Marble & Gold Leaf', 'Blush Peony', 'Classic Three-Tier',
    'Eternal Bloom', 'Champagne Drip', 'Lace & Pearl', 'Minimalist Elegance', 'Garden Romance',
  ],
  'anniversary-cakes': [
    'Golden Anniversary', 'Rose Gold Celebration', 'Elegant Two-Tier', 'Forever Vow', 'Candlelight Romance',
    'Silver Jubilee', 'Timeless Love', 'Vintage Romance', 'Classic Monogram', 'Soft Blush Elegance',
  ],
  'baby-welcome-cakes': [
    'Little Cloud', 'Baby Bootie', 'Stork Delivery', 'Soft Blush Bump', 'Teddy Bear Hug',
    'Baby\u2019s Breath Floral', 'Gender Reveal Surprise', 'Welcome Home Baby', 'Rock-a-Bye', 'Tiny Toes',
  ],
  'fruit-cakes': [
    'Fresh Strawberry Shortcake', 'Raspberry Ripple', 'Mango Delight', 'Classic Carrot Spice',
    'Strawberry Rose', 'Mixed Berry Medley', 'Tropical Mango Cream', 'Carrot Walnut',
    'Raspberry White Chocolate', 'Strawberry Mango Fusion',
  ],
  brownies: [
    'Classic Fudge Brownies', 'Walnut Brownies', 'Salted Caramel Brownies', 'Biscoff Brownies',
    'Nutella Swirl Brownies', 'Blondies', 'Double Chocolate Brownies', 'Peanut Butter Swirl Brownies',
  ],
};

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function seededRand(seed) {
  let s = seed;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}
function pick(arr, rand) {
  return arr[Math.floor(rand() * arr.length)];
}

const descByCategory = {
  'theme-cakes': (design, flavour) => `A hand-sculpted "${design}" theme cake in ${flavour.toLowerCase()}, fully customizable in colour and detail.`,
  'birthday-cakes': (design, flavour) => `A ${design.toLowerCase()} birthday cake layered in ${flavour.toLowerCase()}, finished with fresh piping the day of pickup.`,
  'wedding-cakes': (design, flavour) => `A ${design.toLowerCase()} tiered wedding cake in ${flavour.toLowerCase()}, designed around your colour palette.`,
  'anniversary-cakes': (design, flavour) => `A ${design.toLowerCase()} celebration cake in ${flavour.toLowerCase()}, sized for an intimate toast or a full party.`,
  'baby-welcome-cakes': (design, flavour) => `A ${design.toLowerCase()} design in ${flavour.toLowerCase()}, perfect for a shower or welcome-home celebration.`,
  'fruit-cakes': (design, flavour) => `A ${design.toLowerCase()} made with real ${flavour.toLowerCase()} \u2014 availability depends on the season.`,
  brownies: (design) => `Dense, fudgy ${design.toLowerCase()}, baked in small batches and cut fresh to order.`,
};

const longDescByCategory = {
  default: (name) => `Every ${name.toLowerCase()} is homemade to order using premium ingredients \u2014 nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we\u2019ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.`,
  brownies: (name) => `${name} are baked fresh in small batches. Sold by the box \u2014 message us your preferred quantity and flavour and we\u2019ll confirm pricing and pickup timing.`,
};

let cakes = [];
let counter = 1;

for (const cat of categories) {
  const rand = seededRand(counter * 23 + 7);
  const designs = designsByCategory[cat.id];
  const isBrownie = cat.id === 'brownies';
  const isFruit = cat.id === 'fruit-cakes';

  designs.forEach((design) => {
    const flavour = isBrownie
      ? design.replace(' Brownies', '').replace('Blondies', 'Blondie')
      : isFruit
        ? pick(fruitFlavours, rand)
        : pick(allCakeFlavours, rand);

    const name = isBrownie ? design : `${design} ${catIndex[cat.id].name.replace(' Cakes', '')} Cake`.replace(/\s+/g, ' ').trim();

    const id = `ck-${String(counter).padStart(3, '0')}`;
    const slug = slugify(`${name}-${id}`);

    cakes.push({
      id,
      slug,
      name,
      category: cat.id,
      flavour,
      unitType: isBrownie ? 'box' : 'lb',
      availableWeights: isBrownie ? BOX_SIZES : LB_WEIGHTS,
      tags: rand() > 0.82 ? ['bestseller'] : rand() > 0.9 ? ['new'] : [],
      featured: rand() > 0.85,
      description: descByCategory[cat.id](design, flavour),
      longDescription: (longDescByCategory[cat.id] || longDescByCategory.default)(name),
      image: `https://picsum.photos/seed/${slug}/700/700`,
      gallery: [
        `https://picsum.photos/seed/${slug}-a/900/900`,
        `https://picsum.photos/seed/${slug}-b/900/900`,
        `https://picsum.photos/seed/${slug}-c/900/900`,
      ],
    });
    counter++;
  });
}

const output = `// AUTO-GENERATED SAMPLE CATALOG for Halifax Custom Cakery — edit freely by hand.
// This is the single source of truth for all site content. Swap this file's
// contents for a CMS/API response later without touching any component code —
// every component reads from the exported shapes below.
//
// NOTE ON PRICING: individual cakes intentionally carry no fixed price — this
// business quotes every cake based on size, flavour, and level of
// customization (see pricingGuide below, sourced from the owner's pricing
// sheet). Customers get an exact quote over WhatsApp or email.

export const siteConfig = {
  name: "Halifax Custom Cakery",
  shortName: "Halifax Custom Cakery",
  tagline: "Baked with Love. Designed for Memories.",
  description:
    "A home-based custom cakery in Halifax, NS, baking made-to-order cakes, brownies and treats for every celebration. Browse the menu, then message us on WhatsApp or email for your exact quote \u2014 pickup only, no delivery.",
  currency: "$",
  currencyCode: "CAD",
  // TODO: replace with the real WhatsApp number (digits only, country code first, e.g. 1 for Canada) and email.
  whatsappNumber: "19025550123",
  email: "orders@halifaxcustomcakery.com",
  address: "Home-based bakery in Halifax, NS \u2014 exact pickup location shared once your order is confirmed.",
  pickupOnly: true,
  hours: "Pickup times are confirmed with each order \u2014 message us to check availability for your date.",
  leadTimeNote: "A 50% non-refundable deposit confirms your order. Please book with as much notice as possible, especially for weekends, holidays and tiered/custom designs.",
};

export const pricingGuide = {
  currencyNote: "All prices in CAD. Ranges reflect Simple \u2192 Custom \u2192 Fondant designs \u2014 your exact price is confirmed when you order.",
  frostingNote:
    "We specialize in beautifully crafted whipped cream cakes. All standard prices below are for whipped cream. Buttercream frosting is available on request for an additional $5\u2013$10, depending on cake size and design.",
  standardCakes: {
    title: "Standard Cake Prices",
    columns: ["Weight", "Simple", "Custom", "Fondant"],
    rows: [
      { weight: "1 lb", simple: "$30\u2013$55" },
      { weight: "2 lb", simple: "$50\u2013$90" },
      { weight: "2.5 lb", simple: "$60\u2013$110" },
      { weight: "3 lb", simple: "$75\u2013$125" },
      { weight: "4 lb", simple: "$90\u2013$210" },
      { weight: "5 lb", simple: "$120\u2013$230" },
    ],
  },
  bentoCakes: {
    title: "Bento Cakes",
    rows: [
      { label: "Simple", price: "$20\u2013$40" },
      { label: "Customized", price: "$25\u2013$45" },
    ],
  },
  individualDesserts: [
    {
      title: "Cupcakes",
      perEach: [
        { label: "Classic Cupcake", price: "$4.00" },
        { label: "Premium Cupcake", price: "$4.50" },
        { label: "Custom Theme Cupcake", price: "$5.00" },
        { label: "Fondant Cupcake", price: "$6.00" },
      ],
      boxes: [
        { label: "6 Classic Cupcakes", price: "$22" },
        { label: "12 Classic Cupcakes", price: "$42" },
        { label: "6 Custom Cupcakes", price: "$28" },
        { label: "12 Custom Cupcakes", price: "$54" },
      ],
    },
    {
      title: "Cake Pops",
      perEach: [
        { label: "Classic Cake Pop", price: "$4.00" },
        { label: "Custom Cake Pop", price: "$4.50" },
        { label: "Premium Cake Pop", price: "$5.00" },
      ],
      boxes: [
        { label: "6 Cake Pops", price: "$24" },
        { label: "12 Cake Pops", price: "$45" },
        { label: "24 Cake Pops", price: "$85" },
      ],
    },
    {
      title: "Cakesicles",
      perEach: [
        { label: "Classic Cakesicle", price: "$5.00" },
        { label: "Custom Cakesicle", price: "$5.50" },
        { label: "Premium Cakesicle", price: "$6.00" },
      ],
      boxes: [
        { label: "6 Cakesicles", price: "$30" },
        { label: "12 Cakesicles", price: "$58" },
        { label: "24 Cakesicles", price: "$110" },
      ],
    },
    {
      title: "Cut Cakes",
      perEach: [
        { label: "Classic Cut Cake", price: "$6.00" },
        { label: "Premium Cut Cake", price: "$7.00" },
        { label: "Special Theme Cut Cake", price: "$8.00" },
      ],
      boxes: [
        { label: "4 Pieces", price: "$24" },
        { label: "6 Pieces", price: "$36" },
        { label: "8 Pieces", price: "$48" },
        { label: "12 Pieces", price: "$70" },
      ],
    },
  ],
  addOns: {
    title: "Add-ons",
    rows: [
      { label: "Photo / Edible Print", price: "+$5\u2013$20" },
      { label: "Fondant Figures", price: "+$5\u2013$50" },
      { label: "Cake Topper", price: "+$10\u2013$25" },
      { label: "Fresh Flowers", price: "+$10\u2013$30" },
      { label: "Gold Leaf", price: "+$5\u2013$20" },
      { label: "Chocolate Drip", price: "+$10" },
    ],
  },
  closingNote:
    "Prices start at $30 per pound and vary depending on the design, flavour, decorations and level of customization. Every cake is freshly baked to order using premium ingredients \u2014 message us with your size, design idea and date for an exact quote.",
};

export const categories = ${JSON.stringify(categories, null, 2)};

export const cakes = ${JSON.stringify(cakes, null, 2)};
`;

fs.writeFileSync(new URL('../src/data/cakes.js', import.meta.url), output);
console.log(`Generated ${cakes.length} items across ${categories.length} categories.`);
