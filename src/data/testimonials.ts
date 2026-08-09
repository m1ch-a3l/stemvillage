import type { Testimonial } from "@/types/content";

// Placeholder testimonials — clearly fictional archetypal personas for layout
// purposes only. Replace with real, permissioned testimonials before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter went from being intimidated by computers to building her own website in a few months. The instructors made it feel achievable, not overwhelming.",
    name: "Placeholder Parent",
    role: "Parent",
    affiliation: "Teen Coding Programme",
    category: "parent",
  },
  {
    quote:
      "The Robotics Academy was the first time I actually understood how the code I write controls something physical. It changed what I want to study.",
    name: "Placeholder Student",
    role: "Student, age 16",
    affiliation: "Robotics Academy",
    category: "student",
  },
  {
    quote:
      "STEMAide's after-school club gave us a ready-made STEM programme we didn't have the staff capacity to build ourselves. Our students look forward to it every week.",
    name: "Placeholder Teacher",
    role: "STEM Coordinator",
    affiliation: "Partner School",
    category: "teacher",
  },
  {
    quote:
      "As a school, the partnership process was straightforward and the team was flexible around our schedule and facilities. It's been a genuine addition to our offering.",
    name: "Placeholder Administrator",
    role: "Head Teacher",
    affiliation: "Partner School",
    category: "school",
  },
  {
    quote:
      "We sponsored the Robotics Challenge expecting good PR. What we got was a genuinely impressive look at the talent coming out of these programmes.",
    name: "Placeholder Partner Representative",
    role: "Corporate Sponsor",
    affiliation: "Partner Organisation",
    category: "partner",
  },
  {
    quote:
      "The mentorship programme paired me with someone in exactly the career I wanted. Those conversations shaped my university applications more than anything else did.",
    name: "Placeholder Student",
    role: "Student, age 18",
    affiliation: "Career & Mentorship Programme",
    category: "student",
  },
];

export function getTestimonials() {
  return testimonials;
}
