/**
 * ========================================
 * HELLO BEAUTIFUL BOUTIQUE - SITE CONFIGURATION
 * ========================================
 * This is the ONE file you need to edit to update almost everything on the
 * website: business details, phone/WhatsApp numbers, address, services,
 * portfolio items, reviews, FAQs and social links.
 *
 * You do NOT need to touch any component files to make these changes.
 * Just edit the values below and redeploy (see README.md).
 * ========================================
 */

export const siteConfig = {
  businessName: "Hello Beautiful Boutique",
  tagline: "Designed Around You.",
  shortDescription:
    "Custom designer tailoring for women in Bangalore - crafted with thoughtful design, beautiful finishing, and attention to detail.",

  // Used for SEO metadata + JSON-LD. Update this once your domain is live.
  siteUri: "https://www.hellobeautifulboutique.in",

  businessDetails: {
    phone: "+91 XXXXXXXXXX", // Update with your actual phone
    whatsapp: "+91 XXXXXXXXXX", // Update with your actual WhatsApp
    email: "hello@hellobeautifulboutique.in",
    address: "Bangalore, India",
  },

  services: [
    {
      id: "service-1",
      title: "Custom Blouses",
      description:
        "Bespoke designer blouses tailored to your exact specifications and style preferences.",
    },
    {
      id: "service-2",
      title: "Designer Sarees",
      description:
        "Beautifully crafted sarees with attention to draping, fit, and embroidery details.",
    },
    {
      id: "service-3",
      title: "Bridal Collections",
      description:
        "Stunning bridal wear designed for your special day with personalized touches.",
    },
    {
      id: "service-4",
      title: "Consultation",
      description:
        "One-on-one styling consultation to help you choose designs that suit your body type and preferences.",
    },
  ],

  reviews: [
    {
      id: "review-1",
      name: "Priya Sharma",
      text: "The attention to detail is incredible. My blouse fit perfectly and the embroidery work was beyond expectations!",
      rating: 5,
    },
    {
      id: "review-2",
      name: "Anjali Patel",
      text: "Hello Beautiful Boutique transformed my vision into reality. I felt like a queen in my custom saree!",
      rating: 5,
    },
    {
      id: "review-3",
      name: "Deepika Gupta",
      text: "The craftsmanship is exceptional. Every stitch shows the care and skill that goes into each piece.",
      rating: 5,
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "How long does a custom blouse take?",
      answer:
        "Typically 2-3 weeks depending on complexity and current orders. We'll confirm the timeline when you place your order.",
    },
    {
      id: "faq-2",
      question: "Do you offer virtual consultations?",
      answer:
        "Yes! We offer WhatsApp and video consultations to discuss your design ideas and preferences.",
    },
    {
      id: "faq-3",
      question: "What fabrics do you work with?",
      answer:
        "We work with premium silk, cotton, linen, and blended fabrics. We can source specific materials based on your requirements.",
    },
    {
      id: "faq-4",
      question: "Can I request custom embroidery designs?",
      answer:
        "Absolutely! We specialize in custom embroidery work. Share your inspiration and we'll create something beautiful for you.",
    },
  ],

  socialLinks: {
    instagram: "https://instagram.com/hellobeautifulboutique",
    facebook: "https://facebook.com/hellobeautifulboutique",
    whatsapp: "https://wa.me/XXXXXXXXXXXXX", // Update with your WhatsApp number
    pinterest: "https://pinterest.com/hellobeautifulboutique",
  },
};

// Portfolio Items - 17 Hand Embroidered Blouses
export interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

export const portfolioItems: PortfolioItem[] = [
  // Purple Blouses (4)
  {
    id: "blouse-purple-001",
    title: "Royal Purple Hand Embroidered Blouse",
    image: "/images/portfolio/blouses/blouse-purple-001.png",
    alt: "Royal purple silk blouse with gold embroidery and beaded neckline",
  },
  {
    id: "blouse-purple-002",
    title: "Purple Silk Blouse with Detailed Embroidery",
    image: "/images/portfolio/blouses/blouse-purple-002.png",
    alt: "Sophisticated purple blouse featuring intricate gold thread work",
  },
  {
    id: "blouse-purple-003",
    title: "Deep Purple Designer Choli",
    image: "/images/portfolio/blouses/blouse-purple-003.png",
    alt: "Traditional choli with hand-stitched embellishments",
  },
  {
    id: "blouse-purple-004",
    title: "Lavender Purple Embroidered Blouse",
    image: "/images/portfolio/blouses/blouse-purple-004.png",
    alt: "Delicate lavender blouse with ornate gold borders",
  },

  // Pink Blouses (3)
  {
    id: "blouse-pink-001",
    title: "Mauve Pink Ruched Blouse",
    image: "/images/portfolio/blouses/blouse-pink-001.png",
    alt: "Elegant pink blouse with ruched sleeves and gold embroidery",
  },
  {
    id: "blouse-pink-002",
    title: "Dusty Pink Designer Choli",
    image: "/images/portfolio/blouses/blouse-pink-002.png",
    alt: "Soft pink traditional blouse with delicate beadwork",
  },
  {
    id: "blouse-pink-003",
    title: "Coral Pink Embellished Blouse",
    image: "/images/portfolio/blouses/blouse-pink-003.png",
    alt: "Vibrant coral pink blouse with gold thread embroidery",
  },

  // Red Blouses (2)
  {
    id: "blouse-red-001",
    title: "Crimson Red Silk Blouse",
    image: "/images/portfolio/blouses/blouse-red-001.png",
    alt: "Rich red blouse with ornate gold embroidery and beaded border",
  },
  {
    id: "blouse-red-002",
    title: "Deep Red Embroidered Choli",
    image: "/images/portfolio/blouses/blouse-red-002.png",
    alt: "Luxurious red blouse with detailed floral embroidery",
  },

  // Magenta Blouses (2)
  {
    id: "blouse-magenta-001",
    title: "Bright Magenta Ruched Blouse",
    image: "/images/portfolio/blouses/blouse-magenta-001.png",
    alt: "Vibrant magenta blouse with gathered sleeves and embellishments",
  },
  {
    id: "blouse-magenta-002",
    title: "Hot Pink Designer Blouse",
    image: "/images/portfolio/blouses/blouse-magenta-002.png",
    alt: "Bold hot pink blouse with ornate gold and multicolor embroidery",
  },

  // Blue Blouses (4)
  {
    id: "blouse-blue-001",
    title: "Royal Blue Silk Blouse",
    image: "/images/portfolio/blouses/blouse-blue-001.png",
    alt: "Luxurious royal blue blouse with intricate gold embroidery",
  },
  {
    id: "blouse-blue-002",
    title: "Deep Blue Embroidered Choli",
    image: "/images/portfolio/blouses/blouse-blue-002.png",
    alt: "Elegant navy blue blouse with detailed gold and crystal embellishments",
  },
  {
    id: "blouse-blue-003",
    title: "Sapphire Blue Designer Blouse",
    image: "/images/portfolio/blouses/blouse-blue-003.png",
    alt: "Stunning sapphire blue with beaded neckline and sleeves",
  },
  {
    id: "blouse-blue-004",
    title: "Azure Blue Silk Blouse",
    image: "/images/portfolio/blouses/blouse-blue-004.png",
    alt: "Bright azure blue with ornate gold thread embroidery",
  },

  // Navy Blouses (2)
  {
    id: "blouse-navy-001",
    title: "Navy Blue Embroidered Choli",
    image: "/images/portfolio/blouses/blouse-navy-001.png",
    alt: "Classic navy blue blouse with traditional gold embroidery and coral trim",
  },
  {
    id: "blouse-navy-002",
    title: "Dark Navy Designer Blouse",
    image: "/images/portfolio/blouses/blouse-navy-002.png",
    alt: "Sophisticated navy blouse with multicolor beaded embellishments",
  },
];
