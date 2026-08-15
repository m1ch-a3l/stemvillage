// Shared content shapes. Data currently lives in local modules under `src/data/*`
// and is read through the accessor functions in `src/lib/content.ts`. Swapping to a
// headless CMS later means changing those accessors, not these types or the
// components that consume them.

export interface LearningTribe {
  slug: string;
  name: string;
  ageGroup: string;
  motto: string;
  vibe: string;
  whatTheyDo: { title: string; description: string }[];
  keyOutcome: string;
}

export interface Location {
  slug: string;
  name: string;
  highlights: string;
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
  bio?: string;
  linkedin?: string;
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

