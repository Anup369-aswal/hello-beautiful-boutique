/**
 * ============================================================================
 * HELLO BEAUTIFUL BOUTIQUE — SITE CONFIGURATION
 * ============================================================================
 * This is the ONE file you need to edit to update almost everything on the
 * website: business details, phone/WhatsApp numbers, address, services,
 * portfolio items, reviews, FAQs and social links.
 *
 * You do NOT need to touch any component files to make these changes.
 * Just edit the values below and redeploy (see README.md).
 * ============================================================================
 */

export const siteConfig = {
  businessName: "Hello Beautiful Boutique",
  tagline: "Designed Around You.",
  shortDescription:
    "Custom designer tailoring for women in Bangalore — crafted with thoughtful design, beautiful finishing and a fit made especially for you.",

  // Used for SEO metadata + JSON-LD. Update this once your domain is live.
  siteUrl: "https://www.hellobeautifulboutique.in",

  // ---- Contact ----------------------------------------------------------
  phoneDisplay: "+91 99453 93793",
  phoneE164: "+919945393793", // digits only, used for tel: and wa.me links
  whatsappNumber: "919945393793", // country code + number, no plus, no spaces

  // ---- Address ------------------------------------------------------------
  address: {
    line1: "241, 7th Cross Road",
    line2: "Mico Layout, BTM 2nd Stage",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560076",
    country: "IN",
    full: "241, 7th Cross Road, Mico Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076"
  },

  // TODO: Replace with your exact Google Maps coordinates.
  // Get these by right-clicking your shop location on Google Maps.
  geo: {
    latitude: 12.9166, // placeholder — approximate BTM 2nd Stage coordinates
    longitude: 77.6101 // placeholder — replace with exact pin coordinates
  },

  // TODO: Replace PLACE_ID with your real Google Place ID.
  // Find it here: https://developers.google.com/maps/documentation/places/web-service/place-id
  googlePlaceId: "PLACE_ID_PLACEHOLDER",

  // TODO: Replace with your real "Write a review" / profile link from
  // Google Business Profile (Share > this link, or the "Ask for reviews" link).
  googleReviewsUrl:
    "https://search.google.com/local/writereview?placeid=PLACE_ID_PLACEHOLDER",

  // TODO: Replace with your Google Maps share link ("Share" button on your
  // Business Profile / Maps listing).
  googleMapsUrl: "https://maps.google.com/?q=Hello+Beautiful+Boutique+BTM+2nd+Stage+Bengaluru",

  // Google Maps Embed API — see README "Connecting Google Maps" for the
  // exact steps and where your API key goes.
  googleMapsEmbedSrc:
    "https://www.google.com/maps?q=241,+7th+Cross+Road,+Mico+Layout,+BTM+2nd+Stage,+Bengaluru,+Karnataka+560076&output=embed",

  instagramUrl: "https://www.instagram.com/hello_beautiful_designer/",
  instagramHandle: "@hello_beautiful_designer",

  hours: [
    { day: "Monday – Saturday", time: "10:30 AM – 8:00 PM" },
    { day: "Sunday", time: "By appointment" }
  ],

  // Placeholder rating summary. Replace with the real, current figures
  // from your Google Business Profile — never fabricate these numbers.
  googleRating: {
    score: "4.7",
    count: "98+",
    // Set to true once you have connected the real Google Places API
    // (see README). Until then this section clearly reads as a
    // structure ready to be connected, not as invented reviews.
    isLiveConnected: false
  }
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "blouse" | "bridal" | "wedding" | "gown" | "salwar" | "dress" | "party" | "alteration";
  whatsappMessage: string;
};

export const services: Service[] = [
  {
    id: "designer-blouse",
    title: "Designer Blouse Stitching",
    description:
      "Made-to-measure blouses with intricate necklines, sleeve detailing and finishing suited to your saree or lehenga.",
    icon: "blouse",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about designer blouse stitching."
  },
  {
    id: "bridal-blouse",
    title: "Bridal Blouse",
    description:
      "Statement bridal blouses designed around your wedding outfit, with careful attention to embroidery and fit.",
    icon: "bridal",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about bridal blouse stitching."
  },
  {
    id: "wedding-reception",
    title: "Wedding & Reception Wear",
    description:
      "Custom stitching for wedding functions and receptions — designed to fit your occasion and your personality.",
    icon: "wedding",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about wedding & reception wear."
  },
  {
    id: "gown-stitching",
    title: "Gown Stitching",
    description:
      "Flowing, structured or fitted gowns stitched to your measurements for engagements, parties and receptions.",
    icon: "gown",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about gown stitching."
  },
  {
    id: "salwar-suit",
    title: "Salwar Suit Stitching",
    description:
      "Classic and contemporary salwar suits, anarkalis and co-ord sets tailored to your comfort and style.",
    icon: "salwar",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about salwar suit stitching."
  },
  {
    id: "custom-dresses",
    title: "Custom Dresses",
    description:
      "Everyday and occasion dresses designed from your idea, a reference image, or a sketch you bring in.",
    icon: "dress",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about custom dress stitching."
  },
  {
    id: "party-wear",
    title: "Party Wear",
    description:
      "Festive and party-ready outfits with thoughtful detailing, cut and finishing for every celebration.",
    icon: "party",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about party wear stitching."
  },
  {
    id: "alterations",
    title: "Alterations & Perfect Fitting",
    description:
      "Precise alterations to help an existing outfit sit, move and fall exactly the way it should on you.",
    icon: "alteration",
    whatsappMessage: "Hi Hello Beautiful Boutique, I would like to enquire about alterations and fitting."
  }
];

export type PortfolioCategory =
  | "Blouses"
  | "Bridal Wear"
  | "Gowns"
  | "Salwar Suits"
  | "Party Wear"
  | "Custom Designs";

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  // Placeholder image — replace with your own photograph at the same path.
  // See README "Replacing images" for exact folder structure.
  image: string;
  alt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "blouse-01",
    category: "Blouses",
    title: "Hand-finished silk blouse",
    image: "/images/portfolio/blouses/blouse-01.jpg",
    alt: "Designer silk blouse with hand-finished neckline, stitched in Bangalore"
  },
  {
    id: "blouse-02",
    category: "Blouses",
    title: "High-neck embroidered blouse",
    image: "/images/portfolio/blouses/blouse-02.jpg",
    alt: "High-neck embroidered designer blouse"
  },
  {
    id: "bridal-01",
    category: "Bridal Wear",
    title: "Bridal blouse with dori detailing",
    image: "/images/portfolio/bridal/bridal-01.jpg",
    alt: "Bridal blouse with dori and thread detailing"
  },
  {
    id: "bridal-02",
    category: "Bridal Wear",
    title: "Reception blouse, custom fit",
    image: "/images/portfolio/bridal/bridal-02.jpg",
    alt: "Custom-fitted reception wear blouse"
  },
  {
    id: "gown-01",
    category: "Gowns",
    title: "Structured evening gown",
    image: "/images/portfolio/gowns/gown-01.jpg",
    alt: "Structured custom-stitched evening gown"
  },
  {
    id: "gown-02",
    category: "Gowns",
    title: "Flowing occasion gown",
    image: "/images/portfolio/gowns/gown-02.jpg",
    alt: "Flowing floor-length occasion gown"
  },
  {
    id: "salwar-01",
    category: "Salwar Suits",
    title: "Anarkali with fitted yoke",
    image: "/images/portfolio/salwar/salwar-01.jpg",
    alt: "Anarkali salwar suit with fitted yoke"
  },
  {
    id: "salwar-02",
    category: "Salwar Suits",
    title: "Contemporary co-ord set",
    image: "/images/portfolio/salwar/salwar-02.jpg",
    alt: "Contemporary salwar co-ord set"
  },
  {
    id: "party-01",
    category: "Party Wear",
    title: "Festive party ensemble",
    image: "/images/portfolio/partywear/party-01.jpg",
    alt: "Festive custom party wear ensemble"
  },
  {
    id: "party-02",
    category: "Party Wear",
    title: "Statement occasion wear",
    image: "/images/portfolio/partywear/party-02.jpg",
    alt: "Statement custom occasion wear"
  },
  {
    id: "custom-01",
    category: "Custom Designs",
    title: "Sketch-to-stitch custom piece",
    image: "/images/portfolio/custom/custom-01.jpg",
    alt: "Custom outfit designed from a client sketch"
  },
  {
    id: "custom-02",
    category: "Custom Designs",
    title: "Fabric-led custom design",
    image: "/images/portfolio/custom/custom-02.jpg",
    alt: "Custom outfit designed around client's own fabric"
  }
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Send us a reference photo, sketch, or simply describe what you have in mind — over WhatsApp or in person."
  },
  {
    number: "02",
    title: "Consultation & Measurements",
    description:
      "We talk through fabric, design details and take precise measurements to make sure the fit is right."
  },
  {
    number: "03",
    title: "Stitching & Fitting",
    description:
      "Your outfit is stitched with care, with a fitting session to refine the drape and silhouette."
  },
  {
    number: "04",
    title: "Final Finishing",
    description:
      "We complete the final finishing touches so the piece is ready to wear for your occasion."
  }
];

export type WhyCard = {
  title: string;
  description: string;
};

export const whyChooseUs: WhyCard[] = [
  {
    title: "Perfect Fitting",
    description: "Measurements and fitting sessions focused on how the outfit actually feels on you."
  },
  {
    title: "Custom Designs",
    description: "Every piece is designed around your idea, your occasion and your personal style."
  },
  {
    title: "Attention to Detail",
    description: "From seams to necklines, the smaller details are given the same care as the overall design."
  },
  {
    title: "Personal Consultation",
    description: "A one-on-one conversation to understand what you want, before a single stitch is made."
  },
  {
    title: "Premium Finishing",
    description: "Clean, considered finishing on the inside and outside of every garment."
  },
  {
    title: "Made For Your Occasion",
    description: "Whether it's a wedding, reception or festive evening, the design is built for that moment."
  }
];

/**
 * FAQ content. Turnaround times are intentionally left general — insert
 * your real stitching timelines below once confirmed, then update the
 * FAQ answer text and the FAQ schema will stay in sync automatically.
 */
export type FAQItem = { question: string; answer: string };

export const faqItems: FAQItem[] = [
  {
    question: "Where is Hello Beautiful Boutique located in Bangalore?",
    answer:
      "We are located at 241, 7th Cross Road, Mico Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076 — in BTM Layout, close to BTM 2nd Stage."
  },
  {
    question: "What type of blouse stitching do you provide?",
    answer:
      "We stitch designer blouses, bridal blouses and everyday blouses, with custom necklines, sleeve styles and finishing based on your saree or lehenga."
  },
  {
    question: "Do you stitch bridal blouses?",
    answer:
      "Yes. We design and stitch bridal blouses with attention to detailing, embroidery placement and a fit that works with your full bridal outfit."
  },
  {
    question: "Do you provide custom measurements?",
    answer:
      "Yes, every outfit is stitched to your own measurements, taken during an in-person consultation at our boutique."
  },
  {
    question: "Can I bring my own fabric?",
    answer:
      "Yes, you're welcome to bring your own fabric, and we'll help guide you on design and styling options for it."
  },
  {
    question: "Do you stitch gowns?",
    answer:
      "Yes, we design and stitch custom gowns for engagements, receptions and other occasions in structured or flowing styles."
  },
  {
    question: "Do you stitch salwar suits?",
    answer:
      "Yes, we stitch salwar suits, anarkalis and co-ord sets in both classic and contemporary styles."
  },
  {
    question: "How long does stitching take?",
    answer:
      "Timelines depend on the design, detailing and current bookings — please WhatsApp us with your requirement and preferred date, and we'll confirm an exact timeline."
  },
  {
    question: "How can I book an appointment?",
    answer:
      "The easiest way is to message us on WhatsApp or call us directly, and we'll help you find a convenient time to visit the boutique."
  },
  {
    question: "How can I contact Hello Beautiful Boutique?",
    answer:
      "You can reach us on WhatsApp or phone at +91 99453 93793, or visit us at our BTM 2nd Stage boutique."
  }
];

/**
 * Instagram grid. Without API credentials we cannot pull your live feed
 * automatically — see README "Connecting Instagram" for two ways to wire
 * this up to your real posts. For now, point each image at a photograph
 * of your choice and it will link out to your Instagram profile.
 */
export type InstagramTile = {
  image: string;
  alt: string;
};

export const instagramTiles: InstagramTile[] = [
  { image: "/images/instagram/insta-01.jpg", alt: "Hello Beautiful Boutique Instagram post" },
  { image: "/images/instagram/insta-02.jpg", alt: "Hello Beautiful Boutique Instagram post" },
  { image: "/images/instagram/insta-03.jpg", alt: "Hello Beautiful Boutique Instagram post" },
  { image: "/images/instagram/insta-04.jpg", alt: "Hello Beautiful Boutique Instagram post" },
  { image: "/images/instagram/insta-05.jpg", alt: "Hello Beautiful Boutique Instagram post" },
  { image: "/images/instagram/insta-06.jpg", alt: "Hello Beautiful Boutique Instagram post" }
];

export const seo = {
  title: "Ladies Designer Boutique & Blouse Stitching in Bangalore | Hello Beautiful Boutique",
  description:
    "Hello Beautiful Boutique is a designer ladies' boutique in BTM 2nd Stage, Bangalore, offering custom blouse stitching, bridal blouses, gowns, salwar suits and alterations. Book a consultation on WhatsApp.",
  keywords: [
    "ladies boutique in Bangalore",
    "designer boutique in Bangalore",
    "best ladies tailor in Bangalore",
    "blouse stitching in Bangalore",
    "designer blouse stitching Bangalore",
    "bridal blouse stitching Bangalore",
    "custom tailoring Bangalore",
    "ladies tailoring BTM Layout",
    "boutique in BTM Layout",
    "designer blouse tailor near BTM",
    "women's boutique BTM Layout",
    "custom dress stitching Bangalore"
  ]
};
