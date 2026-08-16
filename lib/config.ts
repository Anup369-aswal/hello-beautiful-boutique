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
  { label: "Gallery", href: "#gallery" },
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

/**
 * Gallery: a free-flowing showcase of real boutique work and designs,
 * separate from the categorized Portfolio grid above. Replace the
 * placeholder images with real photographs at the same file paths.
 */
export type GalleryItem = {
  id: string;
  title: string;
  image: string;
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-01",
    title: "Festive silk saree blouses",
    image: "/images/gallery/gallery-01.jpg",
    alt: "Group of women in matching festive silk saree blouses by Hello Beautiful Boutique"
  },
  {
    id: "gallery-02",
    title: "Bridal silk saree",
    image: "/images/gallery/gallery-02.jpg",
    alt: "Bride in orange-pink silk saree blouse by Hello Beautiful Boutique"
  },
  {
    id: "gallery-03",
    title: "Bridal lehenga",
    image: "/images/gallery/gallery-03.jpg",
    alt: "Bride twirling in red bridal lehenga by Hello Beautiful Boutique"
  },
  {
    id: "gallery-04",
    title: "Bridal lehenga, couple portrait",
    image: "/images/gallery/gallery-04.jpg",
    alt: "Bride and groom portrait, red bridal lehenga by Hello Beautiful Boutique"
  },
  {
    id: "gallery-05",
    title: "Kids festive wear",
    image: "/images/gallery/gallery-05.jpg",
    alt: "Child in festive gold and cream outfit by Hello Beautiful Boutique"
  },
  {
    id: "gallery-06",
    title: "Silk saree blouse detailing",
    image: "/images/gallery/gallery-06.jpg",
    alt: "Close-up of red and gold silk saree blouse embroidery by Hello Beautiful Boutique"
  },
  {
    id: "gallery-07",
    title: "Festive silk sarees",
    image: "/images/gallery/gallery-07.jpg",
    alt: "Two women in festive silk saree blouses by Hello Beautiful Boutique"
  },
  {
    id: "gallery-08",
    title: "Bridal silk saree",
    image: "/images/gallery/gallery-08.jpg",
    alt: "Bride seated in pink-orange silk saree blouse by Hello Beautiful Boutique"
  },
  {
    id: "gallery-09",
    title: "Bridal silk saree, outdoor",
    image: "/images/gallery/gallery-09.jpg",
    alt: "Bride in green and orange silk saree blouse by Hello Beautiful Boutique"
  },
  {
    id: "gallery-10",
    title: "Bridal silk saree, close portrait",
    image: "/images/gallery/gallery-10.jpg",
    alt: "Close portrait of bride in green and red silk saree blouse by Hello Beautiful Boutique"
  },
  {
    id: "gallery-11",
    title: "Couple portrait, festive wear",
    image: "/images/gallery/gallery-11.jpg",
    alt: "Couple in turquoise-pink silk saree and cream sherwani by Hello Beautiful Boutique"
  },
  {
    id: "gallery-12",
    title: "Bridal silk saree, mandap",
    image: "/images/gallery/gallery-12.jpg",
    alt: "Bride in green and orange silk saree blouse at the mandap, by Hello Beautiful Boutique"
  }
];

/**
 * Individual Google review quotes to feature on the site. Only add real
 * reviews here — copy the exact text, reviewer name and star rating from
 * your Google Business Profile. Do not invent or paraphrase reviews.
 */
export type ReviewItem = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  // Optional: how long ago, e.g. "2 weeks ago" — copy as shown on Google.
  timeAgo?: string;
};

export const featuredReviews: ReviewItem[] = [
  {
    id: "review-devanshika",
    name: "Devanshika Tripathi",
    rating: 5,
    text: "This is one place which never disappoints. I got my wedding lehenga, multiple blouses and other dresses stitched from here and the pieces came out to be exactly as I had wanted them to be. Rajni di is really good at both understanding your designs, giving practical suggestions to improve them and also giving the perfect fit and finish to each garment.",
    timeAgo: "a year ago"
  },
  {
    id: "review-sayantika",
    name: "Sayantika Dutta",
    rating: 5,
    text: "Rajni has done everything I needed for my wedding starting from blouses, dupatta, kurta sets and I couldn't ask for anyone better. Attention to detail for everything, the amount of time she has spent for crafting my each pieces is commendable. She happily fixes every single thing until it looks perfect.",
    timeAgo: "9 months ago"
  },
  {
    id: "review-mamata",
    name: "Mamata Naik",
    rating: 5,
    text: "Rajini is very professional and talented! She stitched my saree blouse perfectly and also altered my oversized lehenga to fit me beautifully. I'm extremely happy with her work — the fitting and finishing are just perfect.",
    timeAgo: "9 months ago"
  },
  {
    id: "review-madhushree",
    name: "Madhushree Kumar",
    rating: 5,
    text: "Rajni is absolutely amazing! She and her team work absolutely wonderful and I have had many of my clothes stitched from them. I have always received compliments on the clothes stitched with them! Truly visit her boutique for a beautiful experience!",
    timeAgo: "8 months ago"
  },
  {
    id: "review-sonali",
    name: "Sonali Das",
    rating: 5,
    text: "The best thing I am mostly satisfied with is the fitting is perfect and it's too comfortable to wear. Charges are budget friendly. Owner is very accommodating, gives great suggestions and delivers as per promise — she has such great and super ideas on it.",
    timeAgo: "a year ago"
  },
  {
    id: "review-evangeline",
    name: "Evangeline Priscilla",
    rating: 5,
    text: "I have had all my blouses stitched here for almost two years now. Ms. Rajini does a wonderful job. She stitches everything to perfection and just how you expect it to be. Would highly recommend.",
    timeAgo: "a year ago"
  },
  {
    id: "review-sasikala",
    name: "Sasikala Balasubramanian",
    rating: 4,
    text: "Very good work by Ms.Rajini. She had stitched Perfect fitting blouses with nice latest designs for me.",
    timeAgo: "2 years ago"
  },
  {
    id: "review-shilpa",
    name: "Shilpa C",
    rating: 5,
    text: "Very good experience with Rajani. Clothes were done very well and turned out beautiful.",
    timeAgo: "2 years ago"
  },
  {
    id: "review-dipanwita",
    name: "Dipanwita Dash",
    rating: 5,
    text: "THE BEST! The fitting is perfect in the first go. She is very accomodating, gives great suggestions and delivers as per promise.",
    timeAgo: "2 years ago"
  },
  {
    id: "review-saumya",
    name: "Saumya Sharma",
    rating: 5,
    text: "The tailor here helps you to understand the nuances of stitching and provide perfect fitting. Also good place for getting sarees etc upcycled to a dress etc.",
    timeAgo: "2 years ago"
  },
  {
    id: "review-mohi",
    name: "Mohi Shukla",
    rating: 5,
    text: "On time delivery, good work ethics and great selection of material along with as per cloth recommendations.",
    timeAgo: "2 years ago"
  },
  {
    id: "review-vaishnavi",
    name: "Vaishnavi Singh",
    rating: 5,
    text: "Best decision to come here, such a kind owner!",
    timeAgo: "2 years ago"
  },
  {
    id: "review-nalina",
    name: "Nalina Nanjaiah",
    rating: 5,
    text: "I got two silk blouses stitched and the fitting was perfect. Rajini co-ordinated so well with her team and made sure my blouse was delivered on time inspite of her own personal commitment. I was thoroughly impressed with her creativity and the blouses were stitched to perfection. Thank you for making me look beautiful! Special mention to Masterji and Jamshed who are experts in their job and truly work towards customer satisfaction.",
    timeAgo: "2 years ago"
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
  { image: "/images/instagram/insta-01.jpg", alt: "Dance costumes designed and stitched by Hello Beautiful Boutique, on stage" },
  { image: "/images/instagram/insta-02.jpg", alt: "Black and gold embellished dance costume by Hello Beautiful Boutique" },
  { image: "/images/instagram/insta-03.jpg", alt: "Close-up of hand-detailed dance costume by Hello Beautiful Boutique" },
  { image: "/images/instagram/insta-04.jpg", alt: "Custom-stitched silk saree blouse by Hello Beautiful Boutique" },
  { image: "/images/instagram/insta-05.jpg", alt: "Pastel lehenga with contrast dupatta stitched by Hello Beautiful Boutique" },
  { image: "/images/instagram/insta-06.jpg", alt: "Custom-stitched casual outfit by Hello Beautiful Boutique" }
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
