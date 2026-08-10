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

