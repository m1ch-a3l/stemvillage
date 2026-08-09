import type { CareerOpening } from "@/types/content";

export const careerOpenings: CareerOpening[] = [
  {
    slug: "stem-programme-instructor",
    title: "STEM Programme Instructor",
    type: "Full-time",
    location: "Accra, Ghana",
    summary: "Deliver programme curriculum across coding, robotics and electronics for learners ages 8-18.",
  },
  {
    slug: "school-partnerships-coordinator",
    title: "School Partnerships Coordinator",
    type: "Full-time",
    location: "Accra, Ghana",
    summary: "Manage relationships with partner schools and support new partnership onboarding.",
  },
  {
    slug: "volunteer-mentor",
    title: "Volunteer Mentor",
    type: "Volunteer",
    location: "Remote / Accra, Ghana",
    summary: "Provide career mentorship to learners in our Career & Mentorship Programme.",
  },
  {
    slug: "curriculum-design-intern",
    title: "Curriculum Design Intern",
    type: "Internship",
    location: "Accra, Ghana",
    summary: "Support the Programmes team in developing and refining hands-on STEM curriculum materials.",
  },
];

export function getCareerOpenings() {
  return careerOpenings;
}
