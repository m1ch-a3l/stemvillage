// Placeholder organisation identity — replace with real branding when available.
export const siteConfig = {
  name: "STEMAide",
  legalName: "STEMAide Foundation",
  tagline: "Inspiring the Next Generation of STEM Innovators.",
  description:
    "STEMAide equips young people, learners and communities across Ghana and beyond with the knowledge, skills and opportunities to explore technology, solve problems and build the future.",
  url: "https://www.stemaide.org",
  email: "hello@stemaide.org",
  partnershipsEmail: "partnerships@stemaide.org",
  programmesEmail: "programmes@stemaide.org",
  phone: "+233 20 000 0000",
  location: "Accra, Ghana",
  socials: {
    facebook: "https://facebook.com/stemaide",
    instagram: "https://instagram.com/stemaide",
    linkedin: "https://linkedin.com/company/stemaide",
    youtube: "https://youtube.com/@stemaide",
    x: "https://x.com/stemaide",
  },
} as const;

export const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "All Programmes", href: "/programmes" },
      { label: "STEM Areas", href: "/stem-areas" },
      { label: "Workshops", href: "/workshops" },
    ],
  },
  { label: "STEM Areas", href: "/stem-areas" },
  { label: "Impact", href: "/impact" },
  { label: "Events", href: "/events" },
  { label: "Insights", href: "/blog" },
] as const;

export const footerLinks = {
  organisation: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Team", href: "/team" },
    { label: "Impact", href: "/impact" },
    { label: "Careers", href: "/careers" },
  ],
  programmes: [
    { label: "STEM Education", href: "/stem-areas" },
    { label: "Workshops", href: "/workshops" },
    { label: "Schools & Partnerships", href: "/schools-partnerships" },
    { label: "Mentors", href: "/mentors" },
    { label: "Community Outreach", href: "/programmes#community-outreach" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "STEM Insights", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "FAQs", href: "/faqs" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "Facebook", href: siteConfig.socials.facebook },
    { label: "Instagram", href: siteConfig.socials.instagram },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
    { label: "YouTube", href: siteConfig.socials.youtube },
  ],
} as const;
