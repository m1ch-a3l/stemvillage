// Shared content shapes. Data currently lives in local modules under `src/data/*`
// and is read through the accessor functions in `src/lib/content.ts`. Swapping to a
// headless CMS later means changing those accessors, not these types or the
// components that consume them.

export interface StemArea {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: StemAreaIcon;
  skills: string[];
}

export type StemAreaIcon =
  | "code"
  | "robot"
  | "brain"
  | "data"
  | "shield"
  | "math"
  | "engineering";

export interface Programme {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  format: string;
  duration: string;
  stemAreas: string[];
  image: string;
  featured?: boolean;
}

export interface Workshop {
  slug: string;
  title: string;
  description: string;
  audience: string;
  deliveryModes: string[];
}

export interface EventItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  isVirtual: boolean;
  capacity: number;
  status: "upcoming" | "past" | "registration-open" | "sold-out";
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTimeMinutes: number;
  image: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Mentor {
  slug: string;
  name: string;
  title: string;
  focusArea: string;
  bio: string;
  image: string;
}

// Placeholder testimonial content — clearly fictional archetypal personas,
// structured for the organisation to replace with verified real testimonials.
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  affiliation: string;
  category: "student" | "parent" | "teacher" | "school" | "partner";
}

export interface Partner {
  name: string;
  category: "School" | "Company" | "NGO" | "University" | "Government" | "STEM Organisation";
  logo: string;
  url?: string;
}

export interface Resource {
  slug: string;
  title: string;
  type: "Guide" | "Tutorial" | "Article" | "PDF" | "Tool" | "Project Idea";
  description: string;
  stemArea: string;
}

export interface Faq {
  question: string;
  answer: string;
  category: "General" | "Programmes" | "Schools" | "Partnerships" | "Volunteering";
}

// Placeholder impact statistics — flagged for the organisation to replace with
// verified real figures once available.
export interface ImpactStat {
  label: string;
  value: string;
  description?: string;
}

export interface ImpactStory {
  title: string;
  category: "Learners" | "Schools" | "Communities" | "Projects" | "Workshops" | "Partners";
  summary: string;
  image: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  date: string;
  image: string;
}

export interface CareerOpening {
  slug: string;
  title: string;
  type: "Full-time" | "Part-time" | "Volunteer" | "Internship";
  location: string;
  summary: string;
}
