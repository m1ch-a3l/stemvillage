// Placeholder organisation identity — replace with real branding when available.
export const siteConfig = {
  name: "STEM Village",
  legalName: "STEM Village Foundation",
  foundedYear: 2021,
  tagline: "Where Curiosity Meets Innovation and Future Leaders Are Built.",
  description:
    "At STEM Village, we turn screen time into build time and curiosity into capability. Our after-school pilot program creates a vibrant ecosystem where young minds don't just learn about the future, they design, engineer, and lead it.",
  url: "https://www.stemvillage.org",
  email: "hello@stemvillage.org",
  partnershipsEmail: "partnerships@stemvillage.org",
  programmesEmail: "programmes@stemvillage.org",
  phone: "+233 54 377 1181",
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
      { label: "Workshops", href: "/workshops" },
    ],
  },
] as const;

export const footerLinks = {
  organisation: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Our Team", href: "/team" },
  ],
  programmes: [
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
