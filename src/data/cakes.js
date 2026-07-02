// AUTO-GENERATED SAMPLE CATALOG for Halifax Custom Cakery — edit freely by hand.
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
    "A home-based custom cakery in Halifax, NS, baking made-to-order cakes, brownies and treats for every celebration. Browse the menu, then message us on WhatsApp or email for your exact quote — pickup only, no delivery.",
  currency: "$",
  currencyCode: "CAD",
  // TODO: replace with the real WhatsApp number (digits only, country code first, e.g. 1 for Canada) and email.
  whatsappNumber: "19025550123",
  email: "order@halifaxcustomcakery.com",
  address: "Home-based bakery in Halifax, NS — exact pickup location shared once your order is confirmed.",
  pickupOnly: true,
  hours: "Pickup times are confirmed with each order — message us to check availability for your date.",
  leadTimeNote: "A 50% non-refundable deposit confirms your order. Please book with as much notice as possible, especially for weekends, holidays and tiered/custom designs.",
};

export const pricingGuide = {
  currencyNote: "All prices in CAD. Ranges reflect Simple → Custom → Fondant designs — your exact price is confirmed when you order.",
  frostingNote:
    "We specialize in beautifully crafted whipped cream cakes. All standard prices below are for whipped cream. Buttercream frosting is available on request for an additional $5–$10, depending on cake size and design.",
  standardCakes: {
    title: "Standard Cake Prices",
    columns: ["Weight", "Simple", "Custom", "Fondant"],
    rows: [
      { weight: "1 lb", simple: "$30–$55" },
      { weight: "2 lb", simple: "$50–$90" },
      { weight: "2.5 lb", simple: "$60–$110" },
      { weight: "3 lb", simple: "$75–$125" },
      { weight: "4 lb", simple: "$90–$210" },
      { weight: "5 lb", simple: "$120–$230" },
    ],
  },
  bentoCakes: {
    title: "Bento Cakes",
    rows: [
      { label: "Simple", price: "$20–$40" },
      { label: "Customized", price: "$25–$45" },
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
      { label: "Photo / Edible Print", price: "+$5–$20" },
      { label: "Fondant Figures", price: "+$5–$50" },
      { label: "Cake Topper", price: "+$10–$25" },
      { label: "Fresh Flowers", price: "+$10–$30" },
      { label: "Gold Leaf", price: "+$5–$20" },
      { label: "Chocolate Drip", price: "+$10" },
    ],
  },
  closingNote:
    "Prices start at $30 per pound and vary depending on the design, flavour, decorations and level of customization. Every cake is freshly baked to order using premium ingredients — message us with your size, design idea and date for an exact quote.",
};

export const categories = [
  {
    "id": "theme-cakes",
    "name": "Theme Cakes",
    "tagline": "Hand-sculpted to your idea",
    "description": "Custom-designed cakes built around a character, hobby or party theme — tell us the idea and we’ll sketch a design."
  },
  {
    "id": "birthday-cakes",
    "name": "Birthday Cakes",
    "tagline": "Bright, festive & personal",
    "description": "Fresh, made-to-order birthday cakes finished with piping, drips or fondant detail in your chosen colours."
  },
  {
    "id": "wedding-cakes",
    "name": "Wedding Cakes",
    "tagline": "Tiered centrepieces",
    "description": "Elegant tiered wedding cakes finished in sugar florals, hand-piping and metallic accents."
  },
  {
    "id": "anniversary-cakes",
    "name": "Anniversary Cakes",
    "tagline": "Celebrating every year together",
    "description": "Refined celebration cakes designed for milestone anniversaries, big or small."
  },
  {
    "id": "baby-welcome-cakes",
    "name": "Baby Welcome Cakes",
    "tagline": "Baby showers & gender reveals",
    "description": "Soft, sweet designs for baby showers, gender reveals and welcome-home celebrations."
  },
  {
    "id": "fruit-cakes",
    "name": "Fruit Cakes",
    "tagline": "Real fruit, seasonal availability",
    "description": "Cakes layered with real fruit purée and fresh fruit. Availability shifts with the season — ask us what’s fresh."
  },
  {
    "id": "brownies",
    "name": "Brownies",
    "tagline": "Dense, fudgy, cut to order",
    "description": "Small-batch brownies sold by the box, in classic and specialty flavours."
  }
];

export const cakes = [
  {
    "id": "ck-001",
    "slug": "superhero-squad-theme-cake-ck-001",
    "name": "Superhero Squad Theme Cake",
    "category": "theme-cakes",
    "flavour": "Vanilla Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Superhero Squad\" theme cake in vanilla chocolate, fully customizable in colour and detail.",
    "longDescription": "Every superhero squad theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/superhero-squad-theme-cake-ck-001/700/700",
    "gallery": [
      "https://picsum.photos/seed/superhero-squad-theme-cake-ck-001-a/900/900",
      "https://picsum.photos/seed/superhero-squad-theme-cake-ck-001-b/900/900",
      "https://picsum.photos/seed/superhero-squad-theme-cake-ck-001-c/900/900"
    ]
  },
  {
    "id": "ck-002",
    "slug": "safari-adventure-theme-cake-ck-002",
    "name": "Safari Adventure Theme Cake",
    "category": "theme-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Safari Adventure\" theme cake in red velvet, fully customizable in colour and detail.",
    "longDescription": "Every safari adventure theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/safari-adventure-theme-cake-ck-002/700/700",
    "gallery": [
      "https://picsum.photos/seed/safari-adventure-theme-cake-ck-002-a/900/900",
      "https://picsum.photos/seed/safari-adventure-theme-cake-ck-002-b/900/900",
      "https://picsum.photos/seed/safari-adventure-theme-cake-ck-002-c/900/900"
    ]
  },
  {
    "id": "ck-003",
    "slug": "space-explorer-theme-cake-ck-003",
    "name": "Space Explorer Theme Cake",
    "category": "theme-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Space Explorer\" theme cake in raspberry, fully customizable in colour and detail.",
    "longDescription": "Every space explorer theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/space-explorer-theme-cake-ck-003/700/700",
    "gallery": [
      "https://picsum.photos/seed/space-explorer-theme-cake-ck-003-a/900/900",
      "https://picsum.photos/seed/space-explorer-theme-cake-ck-003-b/900/900",
      "https://picsum.photos/seed/space-explorer-theme-cake-ck-003-c/900/900"
    ]
  },
  {
    "id": "ck-004",
    "slug": "enchanted-forest-theme-cake-ck-004",
    "name": "Enchanted Forest Theme Cake",
    "category": "theme-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Enchanted Forest\" theme cake in chocolate, fully customizable in colour and detail.",
    "longDescription": "Every enchanted forest theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/enchanted-forest-theme-cake-ck-004/700/700",
    "gallery": [
      "https://picsum.photos/seed/enchanted-forest-theme-cake-ck-004-a/900/900",
      "https://picsum.photos/seed/enchanted-forest-theme-cake-ck-004-b/900/900",
      "https://picsum.photos/seed/enchanted-forest-theme-cake-ck-004-c/900/900"
    ]
  },
  {
    "id": "ck-005",
    "slug": "under-the-sea-theme-cake-ck-005",
    "name": "Under the Sea Theme Cake",
    "category": "theme-cakes",
    "flavour": "Vanilla Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": true,
    "description": "A hand-sculpted \"Under the Sea\" theme cake in vanilla velvet, fully customizable in colour and detail.",
    "longDescription": "Every under the sea theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/under-the-sea-theme-cake-ck-005/700/700",
    "gallery": [
      "https://picsum.photos/seed/under-the-sea-theme-cake-ck-005-a/900/900",
      "https://picsum.photos/seed/under-the-sea-theme-cake-ck-005-b/900/900",
      "https://picsum.photos/seed/under-the-sea-theme-cake-ck-005-c/900/900"
    ]
  },
  {
    "id": "ck-006",
    "slug": "princess-castle-theme-cake-ck-006",
    "name": "Princess Castle Theme Cake",
    "category": "theme-cakes",
    "flavour": "Vanilla Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Princess Castle\" theme cake in vanilla velvet, fully customizable in colour and detail.",
    "longDescription": "Every princess castle theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/princess-castle-theme-cake-ck-006/700/700",
    "gallery": [
      "https://picsum.photos/seed/princess-castle-theme-cake-ck-006-a/900/900",
      "https://picsum.photos/seed/princess-castle-theme-cake-ck-006-b/900/900",
      "https://picsum.photos/seed/princess-castle-theme-cake-ck-006-c/900/900"
    ]
  },
  {
    "id": "ck-007",
    "slug": "dinosaur-world-theme-cake-ck-007",
    "name": "Dinosaur World Theme Cake",
    "category": "theme-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Dinosaur World\" theme cake in red velvet, fully customizable in colour and detail.",
    "longDescription": "Every dinosaur world theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/dinosaur-world-theme-cake-ck-007/700/700",
    "gallery": [
      "https://picsum.photos/seed/dinosaur-world-theme-cake-ck-007-a/900/900",
      "https://picsum.photos/seed/dinosaur-world-theme-cake-ck-007-b/900/900",
      "https://picsum.photos/seed/dinosaur-world-theme-cake-ck-007-c/900/900"
    ]
  },
  {
    "id": "ck-008",
    "slug": "unicorn-cloud-theme-cake-ck-008",
    "name": "Unicorn Cloud Theme Cake",
    "category": "theme-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Unicorn Cloud\" theme cake in raspberry, fully customizable in colour and detail.",
    "longDescription": "Every unicorn cloud theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/unicorn-cloud-theme-cake-ck-008/700/700",
    "gallery": [
      "https://picsum.photos/seed/unicorn-cloud-theme-cake-ck-008-a/900/900",
      "https://picsum.photos/seed/unicorn-cloud-theme-cake-ck-008-b/900/900",
      "https://picsum.photos/seed/unicorn-cloud-theme-cake-ck-008-c/900/900"
    ]
  },
  {
    "id": "ck-009",
    "slug": "football-ground-theme-cake-ck-009",
    "name": "Football Ground Theme Cake",
    "category": "theme-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Football Ground\" theme cake in red velvet, fully customizable in colour and detail.",
    "longDescription": "Every football ground theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/football-ground-theme-cake-ck-009/700/700",
    "gallery": [
      "https://picsum.photos/seed/football-ground-theme-cake-ck-009-a/900/900",
      "https://picsum.photos/seed/football-ground-theme-cake-ck-009-b/900/900",
      "https://picsum.photos/seed/football-ground-theme-cake-ck-009-c/900/900"
    ]
  },
  {
    "id": "ck-010",
    "slug": "race-track-theme-cake-ck-010",
    "name": "Race Track Theme Cake",
    "category": "theme-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Race Track\" theme cake in carrot, fully customizable in colour and detail.",
    "longDescription": "Every race track theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/race-track-theme-cake-ck-010/700/700",
    "gallery": [
      "https://picsum.photos/seed/race-track-theme-cake-ck-010-a/900/900",
      "https://picsum.photos/seed/race-track-theme-cake-ck-010-b/900/900",
      "https://picsum.photos/seed/race-track-theme-cake-ck-010-c/900/900"
    ]
  },
  {
    "id": "ck-011",
    "slug": "favourite-cartoon-theme-cake-ck-011",
    "name": "Favourite Cartoon Theme Cake",
    "category": "theme-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Favourite Cartoon\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every favourite cartoon theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/favourite-cartoon-theme-cake-ck-011/700/700",
    "gallery": [
      "https://picsum.photos/seed/favourite-cartoon-theme-cake-ck-011-a/900/900",
      "https://picsum.photos/seed/favourite-cartoon-theme-cake-ck-011-b/900/900",
      "https://picsum.photos/seed/favourite-cartoon-theme-cake-ck-011-c/900/900"
    ]
  },
  {
    "id": "ck-012",
    "slug": "floral-garden-party-theme-cake-ck-012",
    "name": "Floral Garden Party Theme Cake",
    "category": "theme-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Floral Garden Party\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every floral garden party theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/floral-garden-party-theme-cake-ck-012/700/700",
    "gallery": [
      "https://picsum.photos/seed/floral-garden-party-theme-cake-ck-012-a/900/900",
      "https://picsum.photos/seed/floral-garden-party-theme-cake-ck-012-b/900/900",
      "https://picsum.photos/seed/floral-garden-party-theme-cake-ck-012-c/900/900"
    ]
  },
  {
    "id": "ck-013",
    "slug": "camping-adventure-theme-cake-ck-013",
    "name": "Camping Adventure Theme Cake",
    "category": "theme-cakes",
    "flavour": "Strawberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Camping Adventure\" theme cake in strawberry, fully customizable in colour and detail.",
    "longDescription": "Every camping adventure theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/camping-adventure-theme-cake-ck-013/700/700",
    "gallery": [
      "https://picsum.photos/seed/camping-adventure-theme-cake-ck-013-a/900/900",
      "https://picsum.photos/seed/camping-adventure-theme-cake-ck-013-b/900/900",
      "https://picsum.photos/seed/camping-adventure-theme-cake-ck-013-c/900/900"
    ]
  },
  {
    "id": "ck-014",
    "slug": "construction-site-theme-cake-ck-014",
    "name": "Construction Site Theme Cake",
    "category": "theme-cakes",
    "flavour": "Vanilla Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Construction Site\" theme cake in vanilla velvet, fully customizable in colour and detail.",
    "longDescription": "Every construction site theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/construction-site-theme-cake-ck-014/700/700",
    "gallery": [
      "https://picsum.photos/seed/construction-site-theme-cake-ck-014-a/900/900",
      "https://picsum.photos/seed/construction-site-theme-cake-ck-014-b/900/900",
      "https://picsum.photos/seed/construction-site-theme-cake-ck-014-c/900/900"
    ]
  },
  {
    "id": "ck-015",
    "slug": "confetti-pop-birthday-cake-ck-015",
    "name": "Confetti Pop Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A confetti pop birthday cake layered in red velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every confetti pop birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/confetti-pop-birthday-cake-ck-015/700/700",
    "gallery": [
      "https://picsum.photos/seed/confetti-pop-birthday-cake-ck-015-a/900/900",
      "https://picsum.photos/seed/confetti-pop-birthday-cake-ck-015-b/900/900",
      "https://picsum.photos/seed/confetti-pop-birthday-cake-ck-015-c/900/900"
    ]
  },
  {
    "id": "ck-016",
    "slug": "rainbow-drip-birthday-cake-ck-016",
    "name": "Rainbow Drip Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Vanilla Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A rainbow drip birthday cake layered in vanilla chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every rainbow drip birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/rainbow-drip-birthday-cake-ck-016/700/700",
    "gallery": [
      "https://picsum.photos/seed/rainbow-drip-birthday-cake-ck-016-a/900/900",
      "https://picsum.photos/seed/rainbow-drip-birthday-cake-ck-016-b/900/900",
      "https://picsum.photos/seed/rainbow-drip-birthday-cake-ck-016-c/900/900"
    ]
  },
  {
    "id": "ck-017",
    "slug": "golden-number-birthday-cake-ck-017",
    "name": "Golden Number Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Strawberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A golden number birthday cake layered in strawberry, finished with fresh piping the day of pickup.",
    "longDescription": "Every golden number birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/golden-number-birthday-cake-ck-017/700/700",
    "gallery": [
      "https://picsum.photos/seed/golden-number-birthday-cake-ck-017-a/900/900",
      "https://picsum.photos/seed/golden-number-birthday-cake-ck-017-b/900/900",
      "https://picsum.photos/seed/golden-number-birthday-cake-ck-017-c/900/900"
    ]
  },
  {
    "id": "ck-018",
    "slug": "balloon-bunch-birthday-cake-ck-018",
    "name": "Balloon Bunch Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Strawberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A balloon bunch birthday cake layered in strawberry, finished with fresh piping the day of pickup.",
    "longDescription": "Every balloon bunch birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/balloon-bunch-birthday-cake-ck-018/700/700",
    "gallery": [
      "https://picsum.photos/seed/balloon-bunch-birthday-cake-ck-018-a/900/900",
      "https://picsum.photos/seed/balloon-bunch-birthday-cake-ck-018-b/900/900",
      "https://picsum.photos/seed/balloon-bunch-birthday-cake-ck-018-c/900/900"
    ]
  },
  {
    "id": "ck-019",
    "slug": "sprinkle-party-birthday-cake-ck-019",
    "name": "Sprinkle Party Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A sprinkle party birthday cake layered in carrot, finished with fresh piping the day of pickup.",
    "longDescription": "Every sprinkle party birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/sprinkle-party-birthday-cake-ck-019/700/700",
    "gallery": [
      "https://picsum.photos/seed/sprinkle-party-birthday-cake-ck-019-a/900/900",
      "https://picsum.photos/seed/sprinkle-party-birthday-cake-ck-019-b/900/900",
      "https://picsum.photos/seed/sprinkle-party-birthday-cake-ck-019-c/900/900"
    ]
  },
  {
    "id": "ck-020",
    "slug": "sunshine-citrus-birthday-cake-ck-020",
    "name": "Sunshine Citrus Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Strawberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A sunshine citrus birthday cake layered in strawberry, finished with fresh piping the day of pickup.",
    "longDescription": "Every sunshine citrus birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/sunshine-citrus-birthday-cake-ck-020/700/700",
    "gallery": [
      "https://picsum.photos/seed/sunshine-citrus-birthday-cake-ck-020-a/900/900",
      "https://picsum.photos/seed/sunshine-citrus-birthday-cake-ck-020-b/900/900",
      "https://picsum.photos/seed/sunshine-citrus-birthday-cake-ck-020-c/900/900"
    ]
  },
  {
    "id": "ck-021",
    "slug": "milestone-gold-birthday-cake-ck-021",
    "name": "Milestone Gold Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Vanilla",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A milestone gold birthday cake layered in vanilla, finished with fresh piping the day of pickup.",
    "longDescription": "Every milestone gold birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/milestone-gold-birthday-cake-ck-021/700/700",
    "gallery": [
      "https://picsum.photos/seed/milestone-gold-birthday-cake-ck-021-a/900/900",
      "https://picsum.photos/seed/milestone-gold-birthday-cake-ck-021-b/900/900",
      "https://picsum.photos/seed/milestone-gold-birthday-cake-ck-021-c/900/900"
    ]
  },
  {
    "id": "ck-022",
    "slug": "star-sparkle-birthday-cake-ck-022",
    "name": "Star Sparkle Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Vanilla",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A star sparkle birthday cake layered in vanilla, finished with fresh piping the day of pickup.",
    "longDescription": "Every star sparkle birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/star-sparkle-birthday-cake-ck-022/700/700",
    "gallery": [
      "https://picsum.photos/seed/star-sparkle-birthday-cake-ck-022-a/900/900",
      "https://picsum.photos/seed/star-sparkle-birthday-cake-ck-022-b/900/900",
      "https://picsum.photos/seed/star-sparkle-birthday-cake-ck-022-c/900/900"
    ]
  },
  {
    "id": "ck-023",
    "slug": "retro-disco-birthday-cake-ck-023",
    "name": "Retro Disco Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": true,
    "description": "A retro disco birthday cake layered in carrot, finished with fresh piping the day of pickup.",
    "longDescription": "Every retro disco birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/retro-disco-birthday-cake-ck-023/700/700",
    "gallery": [
      "https://picsum.photos/seed/retro-disco-birthday-cake-ck-023-a/900/900",
      "https://picsum.photos/seed/retro-disco-birthday-cake-ck-023-b/900/900",
      "https://picsum.photos/seed/retro-disco-birthday-cake-ck-023-c/900/900"
    ]
  },
  {
    "id": "ck-024",
    "slug": "candy-shop-birthday-cake-ck-024",
    "name": "Candy Shop Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A candy shop birthday cake layered in carrot, finished with fresh piping the day of pickup.",
    "longDescription": "Every candy shop birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/candy-shop-birthday-cake-ck-024/700/700",
    "gallery": [
      "https://picsum.photos/seed/candy-shop-birthday-cake-ck-024-a/900/900",
      "https://picsum.photos/seed/candy-shop-birthday-cake-ck-024-b/900/900",
      "https://picsum.photos/seed/candy-shop-birthday-cake-ck-024-c/900/900"
    ]
  },
  {
    "id": "ck-025",
    "slug": "watercolour-bloom-birthday-cake-ck-025",
    "name": "Watercolour Bloom Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Vanilla Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A watercolour bloom birthday cake layered in vanilla velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every watercolour bloom birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/watercolour-bloom-birthday-cake-ck-025/700/700",
    "gallery": [
      "https://picsum.photos/seed/watercolour-bloom-birthday-cake-ck-025-a/900/900",
      "https://picsum.photos/seed/watercolour-bloom-birthday-cake-ck-025-b/900/900",
      "https://picsum.photos/seed/watercolour-bloom-birthday-cake-ck-025-c/900/900"
    ]
  },
  {
    "id": "ck-026",
    "slug": "marble-drip-birthday-cake-ck-026",
    "name": "Marble Drip Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A marble drip birthday cake layered in red velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every marble drip birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/marble-drip-birthday-cake-ck-026/700/700",
    "gallery": [
      "https://picsum.photos/seed/marble-drip-birthday-cake-ck-026-a/900/900",
      "https://picsum.photos/seed/marble-drip-birthday-cake-ck-026-b/900/900",
      "https://picsum.photos/seed/marble-drip-birthday-cake-ck-026-c/900/900"
    ]
  },
  {
    "id": "ck-027",
    "slug": "boho-floral-birthday-cake-ck-027",
    "name": "Boho Floral Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": true,
    "description": "A boho floral birthday cake layered in chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every boho floral birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/boho-floral-birthday-cake-ck-027/700/700",
    "gallery": [
      "https://picsum.photos/seed/boho-floral-birthday-cake-ck-027-a/900/900",
      "https://picsum.photos/seed/boho-floral-birthday-cake-ck-027-b/900/900",
      "https://picsum.photos/seed/boho-floral-birthday-cake-ck-027-c/900/900"
    ]
  },
  {
    "id": "ck-028",
    "slug": "simple-sweet-birthday-cake-ck-028",
    "name": "Simple & Sweet Birthday Cake",
    "category": "birthday-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A simple & sweet birthday cake layered in chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every simple & sweet birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/simple-sweet-birthday-cake-ck-028/700/700",
    "gallery": [
      "https://picsum.photos/seed/simple-sweet-birthday-cake-ck-028-a/900/900",
      "https://picsum.photos/seed/simple-sweet-birthday-cake-ck-028-b/900/900",
      "https://picsum.photos/seed/simple-sweet-birthday-cake-ck-028-c/900/900"
    ]
  },
  {
    "id": "ck-029",
    "slug": "ivory-rose-tier-wedding-cake-ck-029",
    "name": "Ivory Rose Tier Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Vanilla",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A ivory rose tier tiered wedding cake in vanilla, designed around your colour palette.",
    "longDescription": "Every ivory rose tier wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/ivory-rose-tier-wedding-cake-ck-029/700/700",
    "gallery": [
      "https://picsum.photos/seed/ivory-rose-tier-wedding-cake-ck-029-a/900/900",
      "https://picsum.photos/seed/ivory-rose-tier-wedding-cake-ck-029-b/900/900",
      "https://picsum.photos/seed/ivory-rose-tier-wedding-cake-ck-029-c/900/900"
    ]
  },
  {
    "id": "ck-030",
    "slug": "cascading-floral-wedding-cake-ck-030",
    "name": "Cascading Floral Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Vanilla Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "new"
    ],
    "featured": true,
    "description": "A cascading floral tiered wedding cake in vanilla velvet, designed around your colour palette.",
    "longDescription": "Every cascading floral wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/cascading-floral-wedding-cake-ck-030/700/700",
    "gallery": [
      "https://picsum.photos/seed/cascading-floral-wedding-cake-ck-030-a/900/900",
      "https://picsum.photos/seed/cascading-floral-wedding-cake-ck-030-b/900/900",
      "https://picsum.photos/seed/cascading-floral-wedding-cake-ck-030-c/900/900"
    ]
  },
  {
    "id": "ck-031",
    "slug": "marble-gold-leaf-wedding-cake-ck-031",
    "name": "Marble & Gold Leaf Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Butterscotch",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A marble & gold leaf tiered wedding cake in butterscotch, designed around your colour palette.",
    "longDescription": "Every marble & gold leaf wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/marble-gold-leaf-wedding-cake-ck-031/700/700",
    "gallery": [
      "https://picsum.photos/seed/marble-gold-leaf-wedding-cake-ck-031-a/900/900",
      "https://picsum.photos/seed/marble-gold-leaf-wedding-cake-ck-031-b/900/900",
      "https://picsum.photos/seed/marble-gold-leaf-wedding-cake-ck-031-c/900/900"
    ]
  },
  {
    "id": "ck-032",
    "slug": "blush-peony-wedding-cake-ck-032",
    "name": "Blush Peony Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Butterscotch",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A blush peony tiered wedding cake in butterscotch, designed around your colour palette.",
    "longDescription": "Every blush peony wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/blush-peony-wedding-cake-ck-032/700/700",
    "gallery": [
      "https://picsum.photos/seed/blush-peony-wedding-cake-ck-032-a/900/900",
      "https://picsum.photos/seed/blush-peony-wedding-cake-ck-032-b/900/900",
      "https://picsum.photos/seed/blush-peony-wedding-cake-ck-032-c/900/900"
    ]
  },
  {
    "id": "ck-033",
    "slug": "classic-three-tier-wedding-cake-ck-033",
    "name": "Classic Three-Tier Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Butterscotch",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A classic three-tier tiered wedding cake in butterscotch, designed around your colour palette.",
    "longDescription": "Every classic three-tier wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/classic-three-tier-wedding-cake-ck-033/700/700",
    "gallery": [
      "https://picsum.photos/seed/classic-three-tier-wedding-cake-ck-033-a/900/900",
      "https://picsum.photos/seed/classic-three-tier-wedding-cake-ck-033-b/900/900",
      "https://picsum.photos/seed/classic-three-tier-wedding-cake-ck-033-c/900/900"
    ]
  },
  {
    "id": "ck-034",
    "slug": "eternal-bloom-wedding-cake-ck-034",
    "name": "Eternal Bloom Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": true,
    "description": "A eternal bloom tiered wedding cake in red velvet, designed around your colour palette.",
    "longDescription": "Every eternal bloom wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/eternal-bloom-wedding-cake-ck-034/700/700",
    "gallery": [
      "https://picsum.photos/seed/eternal-bloom-wedding-cake-ck-034-a/900/900",
      "https://picsum.photos/seed/eternal-bloom-wedding-cake-ck-034-b/900/900",
      "https://picsum.photos/seed/eternal-bloom-wedding-cake-ck-034-c/900/900"
    ]
  },
  {
    "id": "ck-035",
    "slug": "champagne-drip-wedding-cake-ck-035",
    "name": "Champagne Drip Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Vanilla",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A champagne drip tiered wedding cake in vanilla, designed around your colour palette.",
    "longDescription": "Every champagne drip wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/champagne-drip-wedding-cake-ck-035/700/700",
    "gallery": [
      "https://picsum.photos/seed/champagne-drip-wedding-cake-ck-035-a/900/900",
      "https://picsum.photos/seed/champagne-drip-wedding-cake-ck-035-b/900/900",
      "https://picsum.photos/seed/champagne-drip-wedding-cake-ck-035-c/900/900"
    ]
  },
  {
    "id": "ck-036",
    "slug": "lace-pearl-wedding-cake-ck-036",
    "name": "Lace & Pearl Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Vanilla Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A lace & pearl tiered wedding cake in vanilla chocolate, designed around your colour palette.",
    "longDescription": "Every lace & pearl wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/lace-pearl-wedding-cake-ck-036/700/700",
    "gallery": [
      "https://picsum.photos/seed/lace-pearl-wedding-cake-ck-036-a/900/900",
      "https://picsum.photos/seed/lace-pearl-wedding-cake-ck-036-b/900/900",
      "https://picsum.photos/seed/lace-pearl-wedding-cake-ck-036-c/900/900"
    ]
  },
  {
    "id": "ck-037",
    "slug": "minimalist-elegance-wedding-cake-ck-037",
    "name": "Minimalist Elegance Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A minimalist elegance tiered wedding cake in red velvet, designed around your colour palette.",
    "longDescription": "Every minimalist elegance wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/minimalist-elegance-wedding-cake-ck-037/700/700",
    "gallery": [
      "https://picsum.photos/seed/minimalist-elegance-wedding-cake-ck-037-a/900/900",
      "https://picsum.photos/seed/minimalist-elegance-wedding-cake-ck-037-b/900/900",
      "https://picsum.photos/seed/minimalist-elegance-wedding-cake-ck-037-c/900/900"
    ]
  },
  {
    "id": "ck-038",
    "slug": "garden-romance-wedding-cake-ck-038",
    "name": "Garden Romance Wedding Cake",
    "category": "wedding-cakes",
    "flavour": "Butterscotch",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A garden romance tiered wedding cake in butterscotch, designed around your colour palette.",
    "longDescription": "Every garden romance wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/garden-romance-wedding-cake-ck-038/700/700",
    "gallery": [
      "https://picsum.photos/seed/garden-romance-wedding-cake-ck-038-a/900/900",
      "https://picsum.photos/seed/garden-romance-wedding-cake-ck-038-b/900/900",
      "https://picsum.photos/seed/garden-romance-wedding-cake-ck-038-c/900/900"
    ]
  },
  {
    "id": "ck-039",
    "slug": "golden-anniversary-anniversary-cake-ck-039",
    "name": "Golden Anniversary Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A golden anniversary celebration cake in red velvet, sized for an intimate toast or a full party.",
    "longDescription": "Every golden anniversary anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/golden-anniversary-anniversary-cake-ck-039/700/700",
    "gallery": [
      "https://picsum.photos/seed/golden-anniversary-anniversary-cake-ck-039-a/900/900",
      "https://picsum.photos/seed/golden-anniversary-anniversary-cake-ck-039-b/900/900",
      "https://picsum.photos/seed/golden-anniversary-anniversary-cake-ck-039-c/900/900"
    ]
  },
  {
    "id": "ck-040",
    "slug": "rose-gold-celebration-anniversary-cake-ck-040",
    "name": "Rose Gold Celebration Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Red Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A rose gold celebration celebration cake in red velvet, sized for an intimate toast or a full party.",
    "longDescription": "Every rose gold celebration anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/rose-gold-celebration-anniversary-cake-ck-040/700/700",
    "gallery": [
      "https://picsum.photos/seed/rose-gold-celebration-anniversary-cake-ck-040-a/900/900",
      "https://picsum.photos/seed/rose-gold-celebration-anniversary-cake-ck-040-b/900/900",
      "https://picsum.photos/seed/rose-gold-celebration-anniversary-cake-ck-040-c/900/900"
    ]
  },
  {
    "id": "ck-041",
    "slug": "elegant-two-tier-anniversary-cake-ck-041",
    "name": "Elegant Two-Tier Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A elegant two-tier celebration cake in chocolate, sized for an intimate toast or a full party.",
    "longDescription": "Every elegant two-tier anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/elegant-two-tier-anniversary-cake-ck-041/700/700",
    "gallery": [
      "https://picsum.photos/seed/elegant-two-tier-anniversary-cake-ck-041-a/900/900",
      "https://picsum.photos/seed/elegant-two-tier-anniversary-cake-ck-041-b/900/900",
      "https://picsum.photos/seed/elegant-two-tier-anniversary-cake-ck-041-c/900/900"
    ]
  },
  {
    "id": "ck-042",
    "slug": "forever-vow-anniversary-cake-ck-042",
    "name": "Forever Vow Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Butterscotch",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A forever vow celebration cake in butterscotch, sized for an intimate toast or a full party.",
    "longDescription": "Every forever vow anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/forever-vow-anniversary-cake-ck-042/700/700",
    "gallery": [
      "https://picsum.photos/seed/forever-vow-anniversary-cake-ck-042-a/900/900",
      "https://picsum.photos/seed/forever-vow-anniversary-cake-ck-042-b/900/900",
      "https://picsum.photos/seed/forever-vow-anniversary-cake-ck-042-c/900/900"
    ]
  },
  {
    "id": "ck-043",
    "slug": "candlelight-romance-anniversary-cake-ck-043",
    "name": "Candlelight Romance Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": true,
    "description": "A candlelight romance celebration cake in chocolate, sized for an intimate toast or a full party.",
    "longDescription": "Every candlelight romance anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/candlelight-romance-anniversary-cake-ck-043/700/700",
    "gallery": [
      "https://picsum.photos/seed/candlelight-romance-anniversary-cake-ck-043-a/900/900",
      "https://picsum.photos/seed/candlelight-romance-anniversary-cake-ck-043-b/900/900",
      "https://picsum.photos/seed/candlelight-romance-anniversary-cake-ck-043-c/900/900"
    ]
  },
  {
    "id": "ck-044",
    "slug": "silver-jubilee-anniversary-cake-ck-044",
    "name": "Silver Jubilee Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Vanilla Velvet",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A silver jubilee celebration cake in vanilla velvet, sized for an intimate toast or a full party.",
    "longDescription": "Every silver jubilee anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/silver-jubilee-anniversary-cake-ck-044/700/700",
    "gallery": [
      "https://picsum.photos/seed/silver-jubilee-anniversary-cake-ck-044-a/900/900",
      "https://picsum.photos/seed/silver-jubilee-anniversary-cake-ck-044-b/900/900",
      "https://picsum.photos/seed/silver-jubilee-anniversary-cake-ck-044-c/900/900"
    ]
  },
  {
    "id": "ck-045",
    "slug": "timeless-love-anniversary-cake-ck-045",
    "name": "Timeless Love Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A timeless love celebration cake in carrot, sized for an intimate toast or a full party.",
    "longDescription": "Every timeless love anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/timeless-love-anniversary-cake-ck-045/700/700",
    "gallery": [
      "https://picsum.photos/seed/timeless-love-anniversary-cake-ck-045-a/900/900",
      "https://picsum.photos/seed/timeless-love-anniversary-cake-ck-045-b/900/900",
      "https://picsum.photos/seed/timeless-love-anniversary-cake-ck-045-c/900/900"
    ]
  },
  {
    "id": "ck-046",
    "slug": "vintage-romance-anniversary-cake-ck-046",
    "name": "Vintage Romance Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A vintage romance celebration cake in carrot, sized for an intimate toast or a full party.",
    "longDescription": "Every vintage romance anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/vintage-romance-anniversary-cake-ck-046/700/700",
    "gallery": [
      "https://picsum.photos/seed/vintage-romance-anniversary-cake-ck-046-a/900/900",
      "https://picsum.photos/seed/vintage-romance-anniversary-cake-ck-046-b/900/900",
      "https://picsum.photos/seed/vintage-romance-anniversary-cake-ck-046-c/900/900"
    ]
  },
  {
    "id": "ck-047",
    "slug": "classic-monogram-anniversary-cake-ck-047",
    "name": "Classic Monogram Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Vanilla",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A classic monogram celebration cake in vanilla, sized for an intimate toast or a full party.",
    "longDescription": "Every classic monogram anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/classic-monogram-anniversary-cake-ck-047/700/700",
    "gallery": [
      "https://picsum.photos/seed/classic-monogram-anniversary-cake-ck-047-a/900/900",
      "https://picsum.photos/seed/classic-monogram-anniversary-cake-ck-047-b/900/900",
      "https://picsum.photos/seed/classic-monogram-anniversary-cake-ck-047-c/900/900"
    ]
  },
  {
    "id": "ck-048",
    "slug": "soft-blush-elegance-anniversary-cake-ck-048",
    "name": "Soft Blush Elegance Anniversary Cake",
    "category": "anniversary-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A soft blush elegance celebration cake in raspberry, sized for an intimate toast or a full party.",
    "longDescription": "Every soft blush elegance anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/soft-blush-elegance-anniversary-cake-ck-048/700/700",
    "gallery": [
      "https://picsum.photos/seed/soft-blush-elegance-anniversary-cake-ck-048-a/900/900",
      "https://picsum.photos/seed/soft-blush-elegance-anniversary-cake-ck-048-b/900/900",
      "https://picsum.photos/seed/soft-blush-elegance-anniversary-cake-ck-048-c/900/900"
    ]
  },
  {
    "id": "ck-049",
    "slug": "little-cloud-baby-welcome-cake-ck-049",
    "name": "Little Cloud Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Vanilla Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A little cloud design in vanilla chocolate, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every little cloud baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/little-cloud-baby-welcome-cake-ck-049/700/700",
    "gallery": [
      "https://picsum.photos/seed/little-cloud-baby-welcome-cake-ck-049-a/900/900",
      "https://picsum.photos/seed/little-cloud-baby-welcome-cake-ck-049-b/900/900",
      "https://picsum.photos/seed/little-cloud-baby-welcome-cake-ck-049-c/900/900"
    ]
  },
  {
    "id": "ck-050",
    "slug": "baby-bootie-baby-welcome-cake-ck-050",
    "name": "Baby Bootie Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A baby bootie design in mango, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every baby bootie baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/baby-bootie-baby-welcome-cake-ck-050/700/700",
    "gallery": [
      "https://picsum.photos/seed/baby-bootie-baby-welcome-cake-ck-050-a/900/900",
      "https://picsum.photos/seed/baby-bootie-baby-welcome-cake-ck-050-b/900/900",
      "https://picsum.photos/seed/baby-bootie-baby-welcome-cake-ck-050-c/900/900"
    ]
  },
  {
    "id": "ck-051",
    "slug": "stork-delivery-baby-welcome-cake-ck-051",
    "name": "Stork Delivery Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A stork delivery design in mango, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every stork delivery baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/stork-delivery-baby-welcome-cake-ck-051/700/700",
    "gallery": [
      "https://picsum.photos/seed/stork-delivery-baby-welcome-cake-ck-051-a/900/900",
      "https://picsum.photos/seed/stork-delivery-baby-welcome-cake-ck-051-b/900/900",
      "https://picsum.photos/seed/stork-delivery-baby-welcome-cake-ck-051-c/900/900"
    ]
  },
  {
    "id": "ck-052",
    "slug": "soft-blush-bump-baby-welcome-cake-ck-052",
    "name": "Soft Blush Bump Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Butterscotch",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A soft blush bump design in butterscotch, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every soft blush bump baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/soft-blush-bump-baby-welcome-cake-ck-052/700/700",
    "gallery": [
      "https://picsum.photos/seed/soft-blush-bump-baby-welcome-cake-ck-052-a/900/900",
      "https://picsum.photos/seed/soft-blush-bump-baby-welcome-cake-ck-052-b/900/900",
      "https://picsum.photos/seed/soft-blush-bump-baby-welcome-cake-ck-052-c/900/900"
    ]
  },
  {
    "id": "ck-053",
    "slug": "teddy-bear-hug-baby-welcome-cake-ck-053",
    "name": "Teddy Bear Hug Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A teddy bear hug design in chocolate, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every teddy bear hug baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/teddy-bear-hug-baby-welcome-cake-ck-053/700/700",
    "gallery": [
      "https://picsum.photos/seed/teddy-bear-hug-baby-welcome-cake-ck-053-a/900/900",
      "https://picsum.photos/seed/teddy-bear-hug-baby-welcome-cake-ck-053-b/900/900",
      "https://picsum.photos/seed/teddy-bear-hug-baby-welcome-cake-ck-053-c/900/900"
    ]
  },
  {
    "id": "ck-054",
    "slug": "baby-s-breath-floral-baby-welcome-cake-ck-054",
    "name": "Baby’s Breath Floral Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Chocolate",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A baby’s breath floral design in chocolate, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every baby’s breath floral baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/baby-s-breath-floral-baby-welcome-cake-ck-054/700/700",
    "gallery": [
      "https://picsum.photos/seed/baby-s-breath-floral-baby-welcome-cake-ck-054-a/900/900",
      "https://picsum.photos/seed/baby-s-breath-floral-baby-welcome-cake-ck-054-b/900/900",
      "https://picsum.photos/seed/baby-s-breath-floral-baby-welcome-cake-ck-054-c/900/900"
    ]
  },
  {
    "id": "ck-055",
    "slug": "gender-reveal-surprise-baby-welcome-cake-ck-055",
    "name": "Gender Reveal Surprise Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": true,
    "description": "A gender reveal surprise design in mango, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every gender reveal surprise baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/gender-reveal-surprise-baby-welcome-cake-ck-055/700/700",
    "gallery": [
      "https://picsum.photos/seed/gender-reveal-surprise-baby-welcome-cake-ck-055-a/900/900",
      "https://picsum.photos/seed/gender-reveal-surprise-baby-welcome-cake-ck-055-b/900/900",
      "https://picsum.photos/seed/gender-reveal-surprise-baby-welcome-cake-ck-055-c/900/900"
    ]
  },
  {
    "id": "ck-056",
    "slug": "welcome-home-baby-baby-welcome-cake-ck-056",
    "name": "Welcome Home Baby Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A welcome home baby design in raspberry, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every welcome home baby baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/welcome-home-baby-baby-welcome-cake-ck-056/700/700",
    "gallery": [
      "https://picsum.photos/seed/welcome-home-baby-baby-welcome-cake-ck-056-a/900/900",
      "https://picsum.photos/seed/welcome-home-baby-baby-welcome-cake-ck-056-b/900/900",
      "https://picsum.photos/seed/welcome-home-baby-baby-welcome-cake-ck-056-c/900/900"
    ]
  },
  {
    "id": "ck-057",
    "slug": "rock-a-bye-baby-welcome-cake-ck-057",
    "name": "Rock-a-Bye Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Strawberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A rock-a-bye design in strawberry, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every rock-a-bye baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/rock-a-bye-baby-welcome-cake-ck-057/700/700",
    "gallery": [
      "https://picsum.photos/seed/rock-a-bye-baby-welcome-cake-ck-057-a/900/900",
      "https://picsum.photos/seed/rock-a-bye-baby-welcome-cake-ck-057-b/900/900",
      "https://picsum.photos/seed/rock-a-bye-baby-welcome-cake-ck-057-c/900/900"
    ]
  },
  {
    "id": "ck-058",
    "slug": "tiny-toes-baby-welcome-cake-ck-058",
    "name": "Tiny Toes Baby Welcome Cake",
    "category": "baby-welcome-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A tiny toes design in raspberry, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every tiny toes baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/tiny-toes-baby-welcome-cake-ck-058/700/700",
    "gallery": [
      "https://picsum.photos/seed/tiny-toes-baby-welcome-cake-ck-058-a/900/900",
      "https://picsum.photos/seed/tiny-toes-baby-welcome-cake-ck-058-b/900/900",
      "https://picsum.photos/seed/tiny-toes-baby-welcome-cake-ck-058-c/900/900"
    ]
  },
  {
    "id": "ck-059",
    "slug": "fresh-strawberry-shortcake-fruit-cake-ck-059",
    "name": "Fresh Strawberry Shortcake Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A fresh strawberry shortcake made with real mango — availability depends on the season.",
    "longDescription": "Every fresh strawberry shortcake fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/fresh-strawberry-shortcake-fruit-cake-ck-059/700/700",
    "gallery": [
      "https://picsum.photos/seed/fresh-strawberry-shortcake-fruit-cake-ck-059-a/900/900",
      "https://picsum.photos/seed/fresh-strawberry-shortcake-fruit-cake-ck-059-b/900/900",
      "https://picsum.photos/seed/fresh-strawberry-shortcake-fruit-cake-ck-059-c/900/900"
    ]
  },
  {
    "id": "ck-060",
    "slug": "raspberry-ripple-fruit-cake-ck-060",
    "name": "Raspberry Ripple Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Strawberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A raspberry ripple made with real strawberry — availability depends on the season.",
    "longDescription": "Every raspberry ripple fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/raspberry-ripple-fruit-cake-ck-060/700/700",
    "gallery": [
      "https://picsum.photos/seed/raspberry-ripple-fruit-cake-ck-060-a/900/900",
      "https://picsum.photos/seed/raspberry-ripple-fruit-cake-ck-060-b/900/900",
      "https://picsum.photos/seed/raspberry-ripple-fruit-cake-ck-060-c/900/900"
    ]
  },
  {
    "id": "ck-061",
    "slug": "mango-delight-fruit-cake-ck-061",
    "name": "Mango Delight Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A mango delight made with real carrot — availability depends on the season.",
    "longDescription": "Every mango delight fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/mango-delight-fruit-cake-ck-061/700/700",
    "gallery": [
      "https://picsum.photos/seed/mango-delight-fruit-cake-ck-061-a/900/900",
      "https://picsum.photos/seed/mango-delight-fruit-cake-ck-061-b/900/900",
      "https://picsum.photos/seed/mango-delight-fruit-cake-ck-061-c/900/900"
    ]
  },
  {
    "id": "ck-062",
    "slug": "classic-carrot-spice-fruit-cake-ck-062",
    "name": "Classic Carrot Spice Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A classic carrot spice made with real mango — availability depends on the season.",
    "longDescription": "Every classic carrot spice fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/classic-carrot-spice-fruit-cake-ck-062/700/700",
    "gallery": [
      "https://picsum.photos/seed/classic-carrot-spice-fruit-cake-ck-062-a/900/900",
      "https://picsum.photos/seed/classic-carrot-spice-fruit-cake-ck-062-b/900/900",
      "https://picsum.photos/seed/classic-carrot-spice-fruit-cake-ck-062-c/900/900"
    ]
  },
  {
    "id": "ck-063",
    "slug": "strawberry-rose-fruit-cake-ck-063",
    "name": "Strawberry Rose Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": true,
    "description": "A strawberry rose made with real raspberry — availability depends on the season.",
    "longDescription": "Every strawberry rose fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/strawberry-rose-fruit-cake-ck-063/700/700",
    "gallery": [
      "https://picsum.photos/seed/strawberry-rose-fruit-cake-ck-063-a/900/900",
      "https://picsum.photos/seed/strawberry-rose-fruit-cake-ck-063-b/900/900",
      "https://picsum.photos/seed/strawberry-rose-fruit-cake-ck-063-c/900/900"
    ]
  },
  {
    "id": "ck-064",
    "slug": "mixed-berry-medley-fruit-cake-ck-064",
    "name": "Mixed Berry Medley Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A mixed berry medley made with real raspberry — availability depends on the season.",
    "longDescription": "Every mixed berry medley fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/mixed-berry-medley-fruit-cake-ck-064/700/700",
    "gallery": [
      "https://picsum.photos/seed/mixed-berry-medley-fruit-cake-ck-064-a/900/900",
      "https://picsum.photos/seed/mixed-berry-medley-fruit-cake-ck-064-b/900/900",
      "https://picsum.photos/seed/mixed-berry-medley-fruit-cake-ck-064-c/900/900"
    ]
  },
  {
    "id": "ck-065",
    "slug": "tropical-mango-cream-fruit-cake-ck-065",
    "name": "Tropical Mango Cream Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A tropical mango cream made with real mango — availability depends on the season.",
    "longDescription": "Every tropical mango cream fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/tropical-mango-cream-fruit-cake-ck-065/700/700",
    "gallery": [
      "https://picsum.photos/seed/tropical-mango-cream-fruit-cake-ck-065-a/900/900",
      "https://picsum.photos/seed/tropical-mango-cream-fruit-cake-ck-065-b/900/900",
      "https://picsum.photos/seed/tropical-mango-cream-fruit-cake-ck-065-c/900/900"
    ]
  },
  {
    "id": "ck-066",
    "slug": "carrot-walnut-fruit-cake-ck-066",
    "name": "Carrot Walnut Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Mango",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A carrot walnut made with real mango — availability depends on the season.",
    "longDescription": "Every carrot walnut fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/carrot-walnut-fruit-cake-ck-066/700/700",
    "gallery": [
      "https://picsum.photos/seed/carrot-walnut-fruit-cake-ck-066-a/900/900",
      "https://picsum.photos/seed/carrot-walnut-fruit-cake-ck-066-b/900/900",
      "https://picsum.photos/seed/carrot-walnut-fruit-cake-ck-066-c/900/900"
    ]
  },
  {
    "id": "ck-067",
    "slug": "raspberry-white-chocolate-fruit-cake-ck-067",
    "name": "Raspberry White Chocolate Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Carrot",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A raspberry white chocolate made with real carrot — availability depends on the season.",
    "longDescription": "Every raspberry white chocolate fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/raspberry-white-chocolate-fruit-cake-ck-067/700/700",
    "gallery": [
      "https://picsum.photos/seed/raspberry-white-chocolate-fruit-cake-ck-067-a/900/900",
      "https://picsum.photos/seed/raspberry-white-chocolate-fruit-cake-ck-067-b/900/900",
      "https://picsum.photos/seed/raspberry-white-chocolate-fruit-cake-ck-067-c/900/900"
    ]
  },
  {
    "id": "ck-068",
    "slug": "strawberry-mango-fusion-fruit-cake-ck-068",
    "name": "Strawberry Mango Fusion Fruit Cake",
    "category": "fruit-cakes",
    "flavour": "Raspberry",
    "unitType": "lb",
    "availableWeights": [
      "1 lb",
      "2 lb",
      "2.5 lb",
      "3 lb",
      "4 lb",
      "5 lb"
    ],
    "tags": [],
    "featured": false,
    "description": "A strawberry mango fusion made with real raspberry — availability depends on the season.",
    "longDescription": "Every strawberry mango fusion fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "https://picsum.photos/seed/strawberry-mango-fusion-fruit-cake-ck-068/700/700",
    "gallery": [
      "https://picsum.photos/seed/strawberry-mango-fusion-fruit-cake-ck-068-a/900/900",
      "https://picsum.photos/seed/strawberry-mango-fusion-fruit-cake-ck-068-b/900/900",
      "https://picsum.photos/seed/strawberry-mango-fusion-fruit-cake-ck-068-c/900/900"
    ]
  },
  {
    "id": "ck-069",
    "slug": "classic-fudge-brownies-ck-069",
    "name": "Classic Fudge Brownies",
    "category": "brownies",
    "flavour": "Classic Fudge",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": false,
    "description": "Dense, fudgy classic fudge brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Classic Fudge Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/classic-fudge-brownies-ck-069/700/700",
    "gallery": [
      "https://picsum.photos/seed/classic-fudge-brownies-ck-069-a/900/900",
      "https://picsum.photos/seed/classic-fudge-brownies-ck-069-b/900/900",
      "https://picsum.photos/seed/classic-fudge-brownies-ck-069-c/900/900"
    ]
  },
  {
    "id": "ck-070",
    "slug": "walnut-brownies-ck-070",
    "name": "Walnut Brownies",
    "category": "brownies",
    "flavour": "Walnut",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": true,
    "description": "Dense, fudgy walnut brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Walnut Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/walnut-brownies-ck-070/700/700",
    "gallery": [
      "https://picsum.photos/seed/walnut-brownies-ck-070-a/900/900",
      "https://picsum.photos/seed/walnut-brownies-ck-070-b/900/900",
      "https://picsum.photos/seed/walnut-brownies-ck-070-c/900/900"
    ]
  },
  {
    "id": "ck-071",
    "slug": "salted-caramel-brownies-ck-071",
    "name": "Salted Caramel Brownies",
    "category": "brownies",
    "flavour": "Salted Caramel",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": false,
    "description": "Dense, fudgy salted caramel brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Salted Caramel Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/salted-caramel-brownies-ck-071/700/700",
    "gallery": [
      "https://picsum.photos/seed/salted-caramel-brownies-ck-071-a/900/900",
      "https://picsum.photos/seed/salted-caramel-brownies-ck-071-b/900/900",
      "https://picsum.photos/seed/salted-caramel-brownies-ck-071-c/900/900"
    ]
  },
  {
    "id": "ck-072",
    "slug": "biscoff-brownies-ck-072",
    "name": "Biscoff Brownies",
    "category": "brownies",
    "flavour": "Biscoff",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "Dense, fudgy biscoff brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Biscoff Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/biscoff-brownies-ck-072/700/700",
    "gallery": [
      "https://picsum.photos/seed/biscoff-brownies-ck-072-a/900/900",
      "https://picsum.photos/seed/biscoff-brownies-ck-072-b/900/900",
      "https://picsum.photos/seed/biscoff-brownies-ck-072-c/900/900"
    ]
  },
  {
    "id": "ck-073",
    "slug": "nutella-swirl-brownies-ck-073",
    "name": "Nutella Swirl Brownies",
    "category": "brownies",
    "flavour": "Nutella Swirl",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": false,
    "description": "Dense, fudgy nutella swirl brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Nutella Swirl Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/nutella-swirl-brownies-ck-073/700/700",
    "gallery": [
      "https://picsum.photos/seed/nutella-swirl-brownies-ck-073-a/900/900",
      "https://picsum.photos/seed/nutella-swirl-brownies-ck-073-b/900/900",
      "https://picsum.photos/seed/nutella-swirl-brownies-ck-073-c/900/900"
    ]
  },
  {
    "id": "ck-074",
    "slug": "blondies-ck-074",
    "name": "Blondies",
    "category": "brownies",
    "flavour": "Blondie",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": true,
    "description": "Dense, fudgy blondies, baked in small batches and cut fresh to order.",
    "longDescription": "Blondies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/blondies-ck-074/700/700",
    "gallery": [
      "https://picsum.photos/seed/blondies-ck-074-a/900/900",
      "https://picsum.photos/seed/blondies-ck-074-b/900/900",
      "https://picsum.photos/seed/blondies-ck-074-c/900/900"
    ]
  },
  {
    "id": "ck-075",
    "slug": "double-chocolate-brownies-ck-075",
    "name": "Double Chocolate Brownies",
    "category": "brownies",
    "flavour": "Double Chocolate",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [
      "new"
    ],
    "featured": true,
    "description": "Dense, fudgy double chocolate brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Double Chocolate Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/double-chocolate-brownies-ck-075/700/700",
    "gallery": [
      "https://picsum.photos/seed/double-chocolate-brownies-ck-075-a/900/900",
      "https://picsum.photos/seed/double-chocolate-brownies-ck-075-b/900/900",
      "https://picsum.photos/seed/double-chocolate-brownies-ck-075-c/900/900"
    ]
  },
  {
    "id": "ck-076",
    "slug": "peanut-butter-swirl-brownies-ck-076",
    "name": "Peanut Butter Swirl Brownies",
    "category": "brownies",
    "flavour": "Peanut Butter Swirl",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": false,
    "description": "Dense, fudgy peanut butter swirl brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Peanut Butter Swirl Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "https://picsum.photos/seed/peanut-butter-swirl-brownies-ck-076/700/700",
    "gallery": [
      "https://picsum.photos/seed/peanut-butter-swirl-brownies-ck-076-a/900/900",
      "https://picsum.photos/seed/peanut-butter-swirl-brownies-ck-076-b/900/900",
      "https://picsum.photos/seed/peanut-butter-swirl-brownies-ck-076-c/900/900"
    ]
  }
];
