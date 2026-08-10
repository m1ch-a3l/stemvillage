// Placeholder organisation identity — replace with real branding when available.
export const siteConfig = {
  name: "StemVillage",
  legalName: "StemVillage Foundation",
  foundedYear: 2021,
  tagline: "Go Further in STEM.",
  description:
    "StemVillage equips young people, learners and communities across Ghana and beyond with the knowledge, skills and opportunities to explore technology, solve problems and build the future.",
  url: "https://www.stemvillage.org",
  email: "hello@stemvillage.org",
  partnershipsEmail: "partnerships@stemvillage.org",
  programmesEmail: "programmes@stemvillage.org",
  phone: "+233 20 000 0000",
  location: "Accra, Ghana",
  socials: {
    facebook: "https://facebook.com/stemvillage",
    instagram: "https://instagram.com/stemvillage",
    linkedin: "https://linkedin.com/company/stemvillage",
    youtube: "https://youtube.com/@stemvillage",
    x: "https://x.com/stemvillage",
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
] as const;

export const footerLinks = {
  organisation: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Team", href: "/team" },
  ],
  programmes: [
    { label: "STEM Education", href: "/stem-areas" },
    { label: "Workshops", href: "/workshops" },
    { label: "Schools & Partnerships", href: "/schools-partnerships" },
    { label: "Mentors", href: "/mentors" },
    { label: "Community Outreach", href: "/programmes#community-outreach" },
  ],
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "Facebook", href: siteConfig.socials.facebook },
    { label: "Instagram", href: siteConfig.socials.instagram },
    { label: "LinkedIn", href: siteConfig.socials.linkedin },
    { label: "YouTube", href: siteConfig.socials.youtube },
  ],
} as const;
