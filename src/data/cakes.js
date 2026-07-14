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
  whatsappNumber: "902-9066656",
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
    "image": "/images/Theme_Cake/theme_cake_01.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_07.jpg",
      "/images/Theme_Cake/theme_cake_28.jpg"
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
    "tags": [],
    "featured": true,
    "description": "A hand-sculpted \"Safari Adventure\" theme cake in red velvet, fully customizable in colour and detail.",
    "longDescription": "Every safari adventure theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_02.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_21.jpg",
      "/images/Theme_Cake/theme_cake_04.jpg"
    ]
  },
  {
    "id": "ck-003",
    "slug": "space-explorer-theme-cake-ck-003",
    "name": "Space Explorer Theme Cake",
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
    "description": "A hand-sculpted \"Space Explorer\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every space explorer theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_03.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_26.jpg",
      "/images/Theme_Cake/theme_cake_25.jpg"
    ]
  },
  {
    "id": "ck-004",
    "slug": "enchanted-forest-theme-cake-ck-004",
    "name": "Enchanted Forest Theme Cake",
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
    "description": "A hand-sculpted \"Enchanted Forest\" theme cake in vanilla velvet, fully customizable in colour and detail.",
    "longDescription": "Every enchanted forest theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_04.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_08.jpg",
      "/images/Theme_Cake/theme_cake_01.jpg"
    ]
  },
  {
    "id": "ck-005",
    "slug": "under-the-sea-theme-cake-ck-005",
    "name": "Under the Sea Theme Cake",
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
    "description": "A hand-sculpted \"Under the Sea\" theme cake in vanilla chocolate, fully customizable in colour and detail.",
    "longDescription": "Every under the sea theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_05.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_11.jpg",
      "/images/Theme_Cake/theme_cake_15.jpg"
    ]
  },
  {
    "id": "ck-006",
    "slug": "princess-castle-theme-cake-ck-006",
    "name": "Princess Castle Theme Cake",
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
    "description": "A hand-sculpted \"Princess Castle\" theme cake in red velvet, fully customizable in colour and detail.",
    "longDescription": "Every princess castle theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_06.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_27.jpg",
      "/images/Theme_Cake/theme_cake_18.jpg"
    ]
  },
  {
    "id": "ck-007",
    "slug": "dinosaur-world-theme-cake-ck-007",
    "name": "Dinosaur World Theme Cake",
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
    "description": "A hand-sculpted \"Dinosaur World\" theme cake in strawberry, fully customizable in colour and detail.",
    "longDescription": "Every dinosaur world theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_07.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_07.jpg",
      "/images/Theme_Cake/theme_cake_22.jpg"
    ]
  },
  {
    "id": "ck-008",
    "slug": "unicorn-cloud-theme-cake-ck-008",
    "name": "Unicorn Cloud Theme Cake",
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
    "description": "A hand-sculpted \"Unicorn Cloud\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every unicorn cloud theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_08.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_19.jpg",
      "/images/Theme_Cake/theme_cake_06.jpg"
    ]
  },
  {
    "id": "ck-009",
    "slug": "football-ground-theme-cake-ck-009",
    "name": "Football Ground Theme Cake",
    "category": "theme-cakes",
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
    "featured": true,
    "description": "A hand-sculpted \"Football Ground\" theme cake in butterscotch, fully customizable in colour and detail.",
    "longDescription": "Every football ground theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_09.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_15.jpg",
      "/images/Theme_Cake/theme_cake_09.jpg"
    ]
  },
  {
    "id": "ck-010",
    "slug": "race-track-theme-cake-ck-010",
    "name": "Race Track Theme Cake",
    "category": "theme-cakes",
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
    "featured": true,
    "description": "A hand-sculpted \"Race Track\" theme cake in butterscotch, fully customizable in colour and detail.",
    "longDescription": "Every race track theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_10.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_04.jpg",
      "/images/Theme_Cake/theme_cake_11.jpg"
    ]
  },
  {
    "id": "ck-011",
    "slug": "favourite-cartoon-theme-cake-ck-011",
    "name": "Favourite Cartoon Theme Cake",
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
    "tags": [],
    "featured": false,
    "description": "A hand-sculpted \"Favourite Cartoon\" theme cake in chocolate, fully customizable in colour and detail.",
    "longDescription": "Every favourite cartoon theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_11.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_25.jpg",
      "/images/Theme_Cake/theme_cake_23.jpg"
    ]
  },
  {
    "id": "ck-012",
    "slug": "floral-garden-party-theme-cake-ck-012",
    "name": "Floral Garden Party Theme Cake",
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
    "description": "A hand-sculpted \"Floral Garden Party\" theme cake in red velvet, fully customizable in colour and detail.",
    "longDescription": "Every floral garden party theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_12.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_28.jpg",
      "/images/Theme_Cake/theme_cake_01.jpg"
    ]
  },
  {
    "id": "ck-013",
    "slug": "camping-adventure-theme-cake-ck-013",
    "name": "Camping Adventure Theme Cake",
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
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Camping Adventure\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every camping adventure theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_13.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_17.jpg",
      "/images/Theme_Cake/theme_cake_18.jpg"
    ]
  },
  {
    "id": "ck-014",
    "slug": "construction-site-theme-cake-ck-014",
    "name": "Construction Site Theme Cake",
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
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Construction Site\" theme cake in carrot, fully customizable in colour and detail.",
    "longDescription": "Every construction site theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_14.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_18.jpg",
      "/images/Theme_Cake/theme_cake_11.jpg"
    ]
  },
  {
    "id": "ck-015",
    "slug": "superhero-squad-theme-cake-ck-015",
    "name": "Superhero Squad Theme Cake",
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
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Superhero Squad\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every superhero squad theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_15.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_06.jpg",
      "/images/Theme_Cake/theme_cake_13.jpg"
    ]
  },
  {
    "id": "ck-016",
    "slug": "safari-adventure-theme-cake-ck-016",
    "name": "Safari Adventure Theme Cake",
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
    "description": "A hand-sculpted \"Safari Adventure\" theme cake in chocolate, fully customizable in colour and detail.",
    "longDescription": "Every safari adventure theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_16.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_11.jpg",
      "/images/Theme_Cake/theme_cake_14.jpg"
    ]
  },
  {
    "id": "ck-017",
    "slug": "space-explorer-theme-cake-ck-017",
    "name": "Space Explorer Theme Cake",
    "category": "theme-cakes",
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
    "description": "A hand-sculpted \"Space Explorer\" theme cake in butterscotch, fully customizable in colour and detail.",
    "longDescription": "Every space explorer theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_17.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_12.jpg",
      "/images/Theme_Cake/theme_cake_18.jpg"
    ]
  },
  {
    "id": "ck-018",
    "slug": "enchanted-forest-theme-cake-ck-018",
    "name": "Enchanted Forest Theme Cake",
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
    "featured": true,
    "description": "A hand-sculpted \"Enchanted Forest\" theme cake in raspberry, fully customizable in colour and detail.",
    "longDescription": "Every enchanted forest theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_18.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_23.jpg",
      "/images/Theme_Cake/theme_cake_29.jpg"
    ]
  },
  {
    "id": "ck-019",
    "slug": "under-the-sea-theme-cake-ck-019",
    "name": "Under the Sea Theme Cake",
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
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Under the Sea\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every under the sea theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_19.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_23.jpg",
      "/images/Theme_Cake/theme_cake_23.jpg"
    ]
  },
  {
    "id": "ck-020",
    "slug": "princess-castle-theme-cake-ck-020",
    "name": "Princess Castle Theme Cake",
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
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Princess Castle\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every princess castle theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_20.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_09.jpg",
      "/images/Theme_Cake/theme_cake_24.jpg"
    ]
  },
  {
    "id": "ck-021",
    "slug": "dinosaur-world-theme-cake-ck-021",
    "name": "Dinosaur World Theme Cake",
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
    "description": "A hand-sculpted \"Dinosaur World\" theme cake in strawberry, fully customizable in colour and detail.",
    "longDescription": "Every dinosaur world theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_21.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_28.jpg",
      "/images/Theme_Cake/theme_cake_04.jpg"
    ]
  },
  {
    "id": "ck-022",
    "slug": "unicorn-cloud-theme-cake-ck-022",
    "name": "Unicorn Cloud Theme Cake",
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
    "description": "A hand-sculpted \"Unicorn Cloud\" theme cake in strawberry, fully customizable in colour and detail.",
    "longDescription": "Every unicorn cloud theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_22.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_01.jpg",
      "/images/Theme_Cake/theme_cake_04.jpg"
    ]
  },
  {
    "id": "ck-023",
    "slug": "football-ground-theme-cake-ck-023",
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
    "image": "/images/Theme_Cake/theme_cake_23.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_26.jpg",
      "/images/Theme_Cake/theme_cake_03.jpg"
    ]
  },
  {
    "id": "ck-024",
    "slug": "race-track-theme-cake-ck-024",
    "name": "Race Track Theme Cake",
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
    "description": "A hand-sculpted \"Race Track\" theme cake in strawberry, fully customizable in colour and detail.",
    "longDescription": "Every race track theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_24.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_24.jpg",
      "/images/Theme_Cake/theme_cake_12.jpg"
    ]
  },
  {
    "id": "ck-025",
    "slug": "favourite-cartoon-theme-cake-ck-025",
    "name": "Favourite Cartoon Theme Cake",
    "category": "theme-cakes",
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
      "new"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Favourite Cartoon\" theme cake in butterscotch, fully customizable in colour and detail.",
    "longDescription": "Every favourite cartoon theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_25.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_06.jpg",
      "/images/Theme_Cake/theme_cake_11.jpg"
    ]
  },
  {
    "id": "ck-026",
    "slug": "floral-garden-party-theme-cake-ck-026",
    "name": "Floral Garden Party Theme Cake",
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
    "featured": false,
    "description": "A hand-sculpted \"Floral Garden Party\" theme cake in vanilla velvet, fully customizable in colour and detail.",
    "longDescription": "Every floral garden party theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_26.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_10.jpg",
      "/images/Theme_Cake/theme_cake_10.jpg"
    ]
  },
  {
    "id": "ck-027",
    "slug": "camping-adventure-theme-cake-ck-027",
    "name": "Camping Adventure Theme Cake",
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
    "featured": false,
    "description": "A hand-sculpted \"Camping Adventure\" theme cake in vanilla velvet, fully customizable in colour and detail.",
    "longDescription": "Every camping adventure theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_27.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_18.jpg",
      "/images/Theme_Cake/theme_cake_18.jpg"
    ]
  },
  {
    "id": "ck-028",
    "slug": "construction-site-theme-cake-ck-028",
    "name": "Construction Site Theme Cake",
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
    "featured": true,
    "description": "A hand-sculpted \"Construction Site\" theme cake in mango, fully customizable in colour and detail.",
    "longDescription": "Every construction site theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_28.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_09.jpg",
      "/images/Theme_Cake/theme_cake_16.jpg"
    ]
  },
  {
    "id": "ck-029",
    "slug": "superhero-squad-theme-cake-ck-029",
    "name": "Superhero Squad Theme Cake",
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
      "bestseller"
    ],
    "featured": false,
    "description": "A hand-sculpted \"Superhero Squad\" theme cake in raspberry, fully customizable in colour and detail.",
    "longDescription": "Every superhero squad theme cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Theme_Cake/theme_cake_29.jpg",
    "gallery": [
      "/images/Theme_Cake/theme_cake_22.jpg",
      "/images/Theme_Cake/theme_cake_22.jpg"
    ]
  },
  {
    "id": "ck-030",
    "slug": "confetti-pop-birthday-cake-ck-030",
    "name": "Confetti Pop Birthday Cake",
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
    "description": "A confetti pop birthday cake layered in vanilla, finished with fresh piping the day of pickup.",
    "longDescription": "Every confetti pop birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_1.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_15.jpg",
      "/images/Birthday Cakes/birthday_cakes_12.jpg"
    ]
  },
  {
    "id": "ck-031",
    "slug": "rainbow-drip-birthday-cake-ck-031",
    "name": "Rainbow Drip Birthday Cake",
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
    "description": "A rainbow drip birthday cake layered in chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every rainbow drip birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_10.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_9.jpg",
      "/images/Birthday Cakes/birthday_cakes_17.jpg"
    ]
  },
  {
    "id": "ck-032",
    "slug": "golden-number-birthday-cake-ck-032",
    "name": "Golden Number Birthday Cake",
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
    "description": "A golden number birthday cake layered in vanilla velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every golden number birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_11.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_17.jpg",
      "/images/Birthday Cakes/birthday_cakes_11.jpg"
    ]
  },
  {
    "id": "ck-033",
    "slug": "balloon-bunch-birthday-cake-ck-033",
    "name": "Balloon Bunch Birthday Cake",
    "category": "birthday-cakes",
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
    "description": "A balloon bunch birthday cake layered in raspberry, finished with fresh piping the day of pickup.",
    "longDescription": "Every balloon bunch birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_12.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_11.jpg",
      "/images/Birthday Cakes/birthday_cakes_2.jpg"
    ]
  },
  {
    "id": "ck-034",
    "slug": "sprinkle-party-birthday-cake-ck-034",
    "name": "Sprinkle Party Birthday Cake",
    "category": "birthday-cakes",
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
    "description": "A sprinkle party birthday cake layered in mango, finished with fresh piping the day of pickup.",
    "longDescription": "Every sprinkle party birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_13.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_16.jpg",
      "/images/Birthday Cakes/birthday_cakes_12.jpg"
    ]
  },
  {
    "id": "ck-035",
    "slug": "sunshine-citrus-birthday-cake-ck-035",
    "name": "Sunshine Citrus Birthday Cake",
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
    "description": "A sunshine citrus birthday cake layered in red velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every sunshine citrus birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_14.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_5.jpg",
      "/images/Birthday Cakes/birthday_cakes_19.jpg"
    ]
  },
  {
    "id": "ck-036",
    "slug": "milestone-gold-birthday-cake-ck-036",
    "name": "Milestone Gold Birthday Cake",
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
    "description": "A milestone gold birthday cake layered in chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every milestone gold birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_15.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_16.jpg",
      "/images/Birthday Cakes/birthday_cakes_7.jpg"
    ]
  },
  {
    "id": "ck-037",
    "slug": "star-sparkle-birthday-cake-ck-037",
    "name": "Star Sparkle Birthday Cake",
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
    "description": "A star sparkle birthday cake layered in carrot, finished with fresh piping the day of pickup.",
    "longDescription": "Every star sparkle birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_16.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_5.jpg",
      "/images/Birthday Cakes/birthday_cakes_5.jpg"
    ]
  },
  {
    "id": "ck-038",
    "slug": "retro-disco-birthday-cake-ck-038",
    "name": "Retro Disco Birthday Cake",
    "category": "birthday-cakes",
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
    "description": "A retro disco birthday cake layered in mango, finished with fresh piping the day of pickup.",
    "longDescription": "Every retro disco birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_17.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_10.jpg",
      "/images/Birthday Cakes/birthday_cakes_19.jpg"
    ]
  },
  {
    "id": "ck-039",
    "slug": "candy-shop-birthday-cake-ck-039",
    "name": "Candy Shop Birthday Cake",
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
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A candy shop birthday cake layered in chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every candy shop birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_18.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_7.jpg",
      "/images/Birthday Cakes/birthday_cakes_4.jpg"
    ]
  },
  {
    "id": "ck-040",
    "slug": "watercolour-bloom-birthday-cake-ck-040",
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
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A watercolour bloom birthday cake layered in vanilla velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every watercolour bloom birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_19.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_2.jpg",
      "/images/Birthday Cakes/birthday_cakes_9.jpg"
    ]
  },
  {
    "id": "ck-041",
    "slug": "marble-drip-birthday-cake-ck-041",
    "name": "Marble Drip Birthday Cake",
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
    "description": "A marble drip birthday cake layered in vanilla, finished with fresh piping the day of pickup.",
    "longDescription": "Every marble drip birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_2.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_10.jpg",
      "/images/Birthday Cakes/birthday_cakes_14.jpg"
    ]
  },
  {
    "id": "ck-042",
    "slug": "boho-floral-birthday-cake-ck-042",
    "name": "Boho Floral Birthday Cake",
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
    "tags": [],
    "featured": false,
    "description": "A boho floral birthday cake layered in vanilla chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every boho floral birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_3.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_3.jpg",
      "/images/Birthday Cakes/birthday_cakes_7.jpg"
    ]
  },
  {
    "id": "ck-043",
    "slug": "simple-sweet-birthday-cake-ck-043",
    "name": "Simple & Sweet Birthday Cake",
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
    "description": "A simple & sweet birthday cake layered in vanilla, finished with fresh piping the day of pickup.",
    "longDescription": "Every simple & sweet birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_4.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_3.jpg",
      "/images/Birthday Cakes/birthday_cakes_12.jpg"
    ]
  },
  {
    "id": "ck-044",
    "slug": "confetti-pop-birthday-cake-ck-044",
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
    "image": "/images/Birthday Cakes/birthday_cakes_5.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_8.jpg",
      "/images/Birthday Cakes/birthday_cakes_17.jpg"
    ]
  },
  {
    "id": "ck-045",
    "slug": "rainbow-drip-birthday-cake-ck-045",
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
    "tags": [],
    "featured": false,
    "description": "A rainbow drip birthday cake layered in vanilla chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every rainbow drip birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_6.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_3.jpg",
      "/images/Birthday Cakes/birthday_cakes_15.jpg"
    ]
  },
  {
    "id": "ck-046",
    "slug": "golden-number-birthday-cake-ck-046",
    "name": "Golden Number Birthday Cake",
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
    "description": "A golden number birthday cake layered in vanilla, finished with fresh piping the day of pickup.",
    "longDescription": "Every golden number birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_7.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_14.jpg",
      "/images/Birthday Cakes/birthday_cakes_4.jpg"
    ]
  },
  {
    "id": "ck-047",
    "slug": "balloon-bunch-birthday-cake-ck-047",
    "name": "Balloon Bunch Birthday Cake",
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
    "description": "A balloon bunch birthday cake layered in red velvet, finished with fresh piping the day of pickup.",
    "longDescription": "Every balloon bunch birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_8.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_11.jpg",
      "/images/Birthday Cakes/birthday_cakes_5.jpg"
    ]
  },
  {
    "id": "ck-048",
    "slug": "sprinkle-party-birthday-cake-ck-048",
    "name": "Sprinkle Party Birthday Cake",
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
    "tags": [],
    "featured": false,
    "description": "A sprinkle party birthday cake layered in vanilla chocolate, finished with fresh piping the day of pickup.",
    "longDescription": "Every sprinkle party birthday cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Birthday Cakes/birthday_cakes_9.jpg",
    "gallery": [
      "/images/Birthday Cakes/birthday_cakes_18.jpg",
      "/images/Birthday Cakes/birthday_cakes_9.jpg"
    ]
  },
  {
    "id": "ck-049",
    "slug": "ivory-rose-tier-wedding-cake-ck-049",
    "name": "Ivory Rose Tier Wedding Cake",
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
    "description": "A ivory rose tier tiered wedding cake in vanilla chocolate, designed around your colour palette.",
    "longDescription": "Every ivory rose tier wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_1.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_8.jpg",
      "/images/Wedding Cakes/wedding_cakes_7.jpg"
    ]
  },
  {
    "id": "ck-050",
    "slug": "cascading-floral-wedding-cake-ck-050",
    "name": "Cascading Floral Wedding Cake",
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
    "description": "A cascading floral tiered wedding cake in butterscotch, designed around your colour palette.",
    "longDescription": "Every cascading floral wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_10.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_9.jpg",
      "/images/Wedding Cakes/wedding_cakes_11.jpg"
    ]
  },
  {
    "id": "ck-051",
    "slug": "marble-gold-leaf-wedding-cake-ck-051",
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
    "image": "/images/Wedding Cakes/wedding_cakes_11.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_10.jpg",
      "/images/Wedding Cakes/wedding_cakes_14.jpg"
    ]
  },
  {
    "id": "ck-052",
    "slug": "blush-peony-wedding-cake-ck-052",
    "name": "Blush Peony Wedding Cake",
    "category": "wedding-cakes",
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
    "description": "A blush peony tiered wedding cake in mango, designed around your colour palette.",
    "longDescription": "Every blush peony wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_12.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_3.jpg",
      "/images/Wedding Cakes/wedding_cakes_8.jpg"
    ]
  },
  {
    "id": "ck-053",
    "slug": "classic-three-tier-wedding-cake-ck-053",
    "name": "Classic Three-Tier Wedding Cake",
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
    "tags": [
      "new"
    ],
    "featured": false,
    "description": "A classic three-tier tiered wedding cake in vanilla, designed around your colour palette.",
    "longDescription": "Every classic three-tier wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_13.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_5.jpg",
      "/images/Wedding Cakes/wedding_cakes_8.jpg"
    ]
  },
  {
    "id": "ck-054",
    "slug": "eternal-bloom-wedding-cake-ck-054",
    "name": "Eternal Bloom Wedding Cake",
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
      "new"
    ],
    "featured": false,
    "description": "A eternal bloom tiered wedding cake in butterscotch, designed around your colour palette.",
    "longDescription": "Every eternal bloom wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_14.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_6.jpg",
      "/images/Wedding Cakes/wedding_cakes_6.jpg"
    ]
  },
  {
    "id": "ck-055",
    "slug": "champagne-drip-wedding-cake-ck-055",
    "name": "Champagne Drip Wedding Cake",
    "category": "wedding-cakes",
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
    "description": "A champagne drip tiered wedding cake in chocolate, designed around your colour palette.",
    "longDescription": "Every champagne drip wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_2.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_11.jpg",
      "/images/Wedding Cakes/wedding_cakes_7.jpg"
    ]
  },
  {
    "id": "ck-056",
    "slug": "lace-pearl-wedding-cake-ck-056",
    "name": "Lace & Pearl Wedding Cake",
    "category": "wedding-cakes",
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
    "description": "A lace & pearl tiered wedding cake in strawberry, designed around your colour palette.",
    "longDescription": "Every lace & pearl wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_3.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_12.jpg",
      "/images/Wedding Cakes/wedding_cakes_2.jpg"
    ]
  },
  {
    "id": "ck-057",
    "slug": "minimalist-elegance-wedding-cake-ck-057",
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
    "image": "/images/Wedding Cakes/wedding_cakes_4.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_13.jpg",
      "/images/Wedding Cakes/wedding_cakes_9.jpg"
    ]
  },
  {
    "id": "ck-058",
    "slug": "garden-romance-wedding-cake-ck-058",
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
    "image": "/images/Wedding Cakes/wedding_cakes_5.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_5.jpg",
      "/images/Wedding Cakes/wedding_cakes_6.jpg"
    ]
  },
  {
    "id": "ck-059",
    "slug": "ivory-rose-tier-wedding-cake-ck-059",
    "name": "Ivory Rose Tier Wedding Cake",
    "category": "wedding-cakes",
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
      "new"
    ],
    "featured": false,
    "description": "A ivory rose tier tiered wedding cake in chocolate, designed around your colour palette.",
    "longDescription": "Every ivory rose tier wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_6.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_6.jpg",
      "/images/Wedding Cakes/wedding_cakes_9.jpg"
    ]
  },
  {
    "id": "ck-060",
    "slug": "cascading-floral-wedding-cake-ck-060",
    "name": "Cascading Floral Wedding Cake",
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
    "featured": true,
    "description": "A cascading floral tiered wedding cake in vanilla, designed around your colour palette.",
    "longDescription": "Every cascading floral wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_7.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_6.jpg",
      "/images/Wedding Cakes/wedding_cakes_11.jpg"
    ]
  },
  {
    "id": "ck-061",
    "slug": "marble-gold-leaf-wedding-cake-ck-061",
    "name": "Marble & Gold Leaf Wedding Cake",
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
    "tags": [
      "bestseller"
    ],
    "featured": false,
    "description": "A marble & gold leaf tiered wedding cake in vanilla chocolate, designed around your colour palette.",
    "longDescription": "Every marble & gold leaf wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_8.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_11.jpg",
      "/images/Wedding Cakes/wedding_cakes_11.jpg"
    ]
  },
  {
    "id": "ck-062",
    "slug": "blush-peony-wedding-cake-ck-062",
    "name": "Blush Peony Wedding Cake",
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
    "tags": [],
    "featured": false,
    "description": "A blush peony tiered wedding cake in vanilla velvet, designed around your colour palette.",
    "longDescription": "Every blush peony wedding cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Wedding Cakes/wedding_cakes_9.jpg",
    "gallery": [
      "/images/Wedding Cakes/wedding_cakes_9.jpg",
      "/images/Wedding Cakes/wedding_cakes_11.jpg"
    ]
  },
  {
    "id": "ck-063",
    "slug": "golden-anniversary-anniversary-cake-ck-063",
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
    "image": "/images/Anniversary Cakes/anniversary_cakes_1.jpg",
    "gallery": [
      "/images/Anniversary Cakes/anniversary_cakes_4.jpg",
      "/images/Anniversary Cakes/anniversary_cakes_2.jpg"
    ]
  },
  {
    "id": "ck-064",
    "slug": "rose-gold-celebration-anniversary-cake-ck-064",
    "name": "Rose Gold Celebration Anniversary Cake",
    "category": "anniversary-cakes",
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
    "description": "A rose gold celebration celebration cake in strawberry, sized for an intimate toast or a full party.",
    "longDescription": "Every rose gold celebration anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Anniversary Cakes/anniversary_cakes_2.jpg",
    "gallery": [
      "/images/Anniversary Cakes/anniversary_cakes_6.jpg",
      "/images/Anniversary Cakes/anniversary_cakes_1.jpg"
    ]
  },
  {
    "id": "ck-065",
    "slug": "elegant-two-tier-anniversary-cake-ck-065",
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
    "image": "/images/Anniversary Cakes/anniversary_cakes_3.jpg",
    "gallery": [
      "/images/Anniversary Cakes/anniversary_cakes_5.jpg",
      "/images/Anniversary Cakes/anniversary_cakes_2.jpg"
    ]
  },
  {
    "id": "ck-066",
    "slug": "forever-vow-anniversary-cake-ck-066",
    "name": "Forever Vow Anniversary Cake",
    "category": "anniversary-cakes",
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
    "description": "A forever vow celebration cake in mango, sized for an intimate toast or a full party.",
    "longDescription": "Every forever vow anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Anniversary Cakes/anniversary_cakes_4.jpg",
    "gallery": [
      "/images/Anniversary Cakes/anniversary_cakes_4.jpg",
      "/images/Anniversary Cakes/anniversary_cakes_5.jpg"
    ]
  },
  {
    "id": "ck-067",
    "slug": "candlelight-romance-anniversary-cake-ck-067",
    "name": "Candlelight Romance Anniversary Cake",
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
    "description": "A candlelight romance celebration cake in red velvet, sized for an intimate toast or a full party.",
    "longDescription": "Every candlelight romance anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Anniversary Cakes/anniversary_cakes_5.jpg",
    "gallery": [
      "/images/Anniversary Cakes/anniversary_cakes_4.jpg",
      "/images/Anniversary Cakes/anniversary_cakes_6.jpg"
    ]
  },
  {
    "id": "ck-068",
    "slug": "silver-jubilee-anniversary-cake-ck-068",
    "name": "Silver Jubilee Anniversary Cake",
    "category": "anniversary-cakes",
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
    "description": "A silver jubilee celebration cake in strawberry, sized for an intimate toast or a full party.",
    "longDescription": "Every silver jubilee anniversary cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Anniversary Cakes/anniversary_cakes_6.jpg",
    "gallery": [
      "/images/Anniversary Cakes/anniversary_cakes_1.jpg",
      "/images/Anniversary Cakes/anniversary_cakes_2.jpg"
    ]
  },
  {
    "id": "ck-069",
    "slug": "little-cloud-baby-welcome-cake-ck-069",
    "name": "Little Cloud Baby Welcome Cake",
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
    "description": "A little cloud design in raspberry, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every little cloud baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Baby Welcoming Cakes/baby_welcoming_cake-000.jpg",
    "gallery": [
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-000.jpg",
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-004.jpg"
    ]
  },
  {
    "id": "ck-070",
    "slug": "baby-bootie-baby-welcome-cake-ck-070",
    "name": "Baby Bootie Baby Welcome Cake",
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
    "description": "A baby bootie design in raspberry, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every baby bootie baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Baby Welcoming Cakes/baby_welcoming_cake-001.jpg",
    "gallery": [
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-002.jpg",
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-001.jpg"
    ]
  },
  {
    "id": "ck-071",
    "slug": "stork-delivery-baby-welcome-cake-ck-071",
    "name": "Stork Delivery Baby Welcome Cake",
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
    "description": "A stork delivery design in butterscotch, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every stork delivery baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Baby Welcoming Cakes/baby_welcoming_cake-002.jpg",
    "gallery": [
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-004.jpg",
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-002.jpg"
    ]
  },
  {
    "id": "ck-072",
    "slug": "soft-blush-bump-baby-welcome-cake-ck-072",
    "name": "Soft Blush Bump Baby Welcome Cake",
    "category": "baby-welcome-cakes",
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
      "bestseller"
    ],
    "featured": false,
    "description": "A soft blush bump design in carrot, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every soft blush bump baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Baby Welcoming Cakes/baby_welcoming_cake-003.jpg",
    "gallery": [
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-004.jpg",
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-000.jpg"
    ]
  },
  {
    "id": "ck-073",
    "slug": "teddy-bear-hug-baby-welcome-cake-ck-073",
    "name": "Teddy Bear Hug Baby Welcome Cake",
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
    "description": "A teddy bear hug design in strawberry, perfect for a shower or welcome-home celebration.",
    "longDescription": "Every teddy bear hug baby welcome cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Baby Welcoming Cakes/baby_welcoming_cake-004.jpg",
    "gallery": [
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-002.jpg",
      "/images/Baby Welcoming Cakes/baby_welcoming_cake-000.jpg"
    ]
  },
  {
    "id": "ck-074",
    "slug": "fresh-strawberry-shortcake-fruit-cake-ck-074",
    "name": "Fresh Strawberry Shortcake Fruit Cake",
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
    "description": "A fresh strawberry shortcake made with real raspberry — availability depends on the season.",
    "longDescription": "Every fresh strawberry shortcake fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_1.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_7.jpg",
      "/images/Fruit Cakes/fruit_cakes_2.jpg"
    ]
  },
  {
    "id": "ck-075",
    "slug": "raspberry-ripple-fruit-cake-ck-075",
    "name": "Raspberry Ripple Fruit Cake",
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
    "description": "A raspberry ripple made with real mango — availability depends on the season.",
    "longDescription": "Every raspberry ripple fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_2.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_4.jpg",
      "/images/Fruit Cakes/fruit_cakes_1.jpg"
    ]
  },
  {
    "id": "ck-076",
    "slug": "mango-delight-fruit-cake-ck-076",
    "name": "Mango Delight Fruit Cake",
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
    "description": "A mango delight made with real raspberry — availability depends on the season.",
    "longDescription": "Every mango delight fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_3.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_7.jpg",
      "/images/Fruit Cakes/fruit_cakes_7.jpg"
    ]
  },
  {
    "id": "ck-077",
    "slug": "classic-carrot-spice-fruit-cake-ck-077",
    "name": "Classic Carrot Spice Fruit Cake",
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
      "bestseller"
    ],
    "featured": false,
    "description": "A classic carrot spice made with real carrot — availability depends on the season.",
    "longDescription": "Every classic carrot spice fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_4.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_7.jpg",
      "/images/Fruit Cakes/fruit_cakes_3.jpg"
    ]
  },
  {
    "id": "ck-078",
    "slug": "strawberry-rose-fruit-cake-ck-078",
    "name": "Strawberry Rose Fruit Cake",
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
    "description": "A strawberry rose made with real strawberry — availability depends on the season.",
    "longDescription": "Every strawberry rose fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_5.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_1.jpg",
      "/images/Fruit Cakes/fruit_cakes_3.jpg"
    ]
  },
  {
    "id": "ck-079",
    "slug": "mixed-berry-medley-fruit-cake-ck-079",
    "name": "Mixed Berry Medley Fruit Cake",
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
    "description": "A mixed berry medley made with real carrot — availability depends on the season.",
    "longDescription": "Every mixed berry medley fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_6.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_4.jpg",
      "/images/Fruit Cakes/fruit_cakes_7.jpg"
    ]
  },
  {
    "id": "ck-080",
    "slug": "tropical-mango-cream-fruit-cake-ck-080",
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
    "tags": [],
    "featured": false,
    "description": "A tropical mango cream made with real mango — availability depends on the season.",
    "longDescription": "Every tropical mango cream fruit cake is homemade to order using premium ingredients — nothing is pre-made or frozen. Share your preferred size, colours and any reference photos when you message us, and we’ll confirm the design and exact price together. Whipped cream frosting is standard; buttercream is available on request.",
    "image": "/images/Fruit Cakes/fruit_cakes_7.jpg",
    "gallery": [
      "/images/Fruit Cakes/fruit_cakes_4.jpg",
      "/images/Fruit Cakes/fruit_cakes_6.jpg"
    ]
  },
  {
    "id": "ck-081",
    "slug": "classic-fudge-brownies-ck-081",
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
    "image": "/images/Brownies/brownie-000.jpg",
    "gallery": [
      "/images/Brownies/brownie-007.jpg",
      "/images/Brownies/brownie-002.jpg"
    ]
  },
  {
    "id": "ck-082",
    "slug": "walnut-brownies-ck-082",
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
    "featured": false,
    "description": "Dense, fudgy walnut brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Walnut Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "/images/Brownies/brownie-001.jpg",
    "gallery": [
      "/images/Brownies/brownie-000.jpg",
      "/images/Brownies/brownie-007.jpg"
    ]
  },
  {
    "id": "ck-083",
    "slug": "salted-caramel-brownies-ck-083",
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
    "image": "/images/Brownies/brownie-002.jpg",
    "gallery": [
      "/images/Brownies/brownie-001.jpg",
      "/images/Brownies/brownie-002.jpg"
    ]
  },
  {
    "id": "ck-084",
    "slug": "biscoff-brownies-ck-084",
    "name": "Biscoff Brownies",
    "category": "brownies",
    "flavour": "Biscoff",
    "unitType": "box",
    "availableWeights": [
      "Box of 6",
      "Box of 12",
      "Box of 24"
    ],
    "tags": [],
    "featured": false,
    "description": "Dense, fudgy biscoff brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Biscoff Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "/images/Brownies/brownie-003.jpg",
    "gallery": [
      "/images/Brownies/brownie-008.jpg",
      "/images/Brownies/brownie-003.jpg"
    ]
  },
  {
    "id": "ck-085",
    "slug": "nutella-swirl-brownies-ck-085",
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
    "featured": true,
    "description": "Dense, fudgy nutella swirl brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Nutella Swirl Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "/images/Brownies/brownie-004.jpg",
    "gallery": [
      "/images/Brownies/brownie-004.jpg",
      "/images/Brownies/brownie-008.jpg"
    ]
  },
  {
    "id": "ck-086",
    "slug": "blondies-ck-086",
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
    "featured": false,
    "description": "Dense, fudgy blondies, baked in small batches and cut fresh to order.",
    "longDescription": "Blondies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "/images/Brownies/brownie-005.jpg",
    "gallery": [
      "/images/Brownies/brownie-007.jpg",
      "/images/Brownies/brownie-008.jpg"
    ]
  },
  {
    "id": "ck-087",
    "slug": "double-chocolate-brownies-ck-087",
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
      "bestseller"
    ],
    "featured": true,
    "description": "Dense, fudgy double chocolate brownies, baked in small batches and cut fresh to order.",
    "longDescription": "Double Chocolate Brownies are baked fresh in small batches. Sold by the box — message us your preferred quantity and flavour and we’ll confirm pricing and pickup timing.",
    "image": "/images/Brownies/brownie-006.jpg",
    "gallery": [
      "/images/Brownies/brownie-001.jpg",
      "/images/Brownies/brownie-008.jpg"
    ]
  },
  {
    "id": "ck-088",
    "slug": "peanut-butter-swirl-brownies-ck-088",
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
    "image": "/images/Brownies/brownie-007.jpg",
    "gallery": [
      "/images/Brownies/brownie-007.jpg",
      "/images/Brownies/brownie-004.jpg"
    ]
  },
  {
    "id": "ck-089",
    "slug": "classic-fudge-brownies-ck-089",
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
    "image": "/images/Brownies/brownie-008.jpg",
    "gallery": [
      "/images/Brownies/brownie-008.jpg",
      "/images/Brownies/brownie-003.jpg"
    ]
  }
];
