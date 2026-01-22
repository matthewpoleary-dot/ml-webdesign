export interface PortfolioItem {
  id: string;
  title: string;
  url: string;
  summary: string;
  highlights: string[];
  tags: string[];
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "driving-school",
    title: "The Driving School Dublin",
    url: "https://thedrivingschooldublin.com/",
    summary: "A lead-generation website for a local driving school, designed to convert visitors into bookings.",
    highlights: [
      "Local service business",
      "Lead generation",
      "Clear CTAs",
      "Mobile-first layout",
      "Fast loading times",
    ],
    tags: ["Lead Gen", "Local Business", "Mobile-First"],
    description: "Built a conversion-focused website for a Dublin driving school. The site prioritizes mobile users with a clean, easy-to-navigate layout. Key features include prominent booking CTAs, a streamlined contact form, and fast page loads to reduce bounce rates.",
  },
  {
    id: "grinds-website",
    title: "Grinds Website",
    url: "https://grinds-website.vercel.app/",
    summary: "A personal brand landing page for a tutor, focused on clear pricing and easy contact.",
    highlights: [
      "Personal brand",
      "Conversion-focused landing",
      "Clear structure",
      "Contact/pricing clarity",
      "Trust-building elements",
    ],
    tags: ["Landing Page", "Personal Brand", "Education"],
    description: "Created a focused landing page for a private tutor. The design emphasizes clear pricing, subject offerings, and multiple contact options. The page is built to convert visitors quickly with a strong value proposition and minimal friction in the booking process.",
  },
];

