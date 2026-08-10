import type { ImpactStat, ImpactStory } from "@/types/content";

// Placeholder impact statistics — flagged for the organisation to replace with
// verified, real figures once available. Do not present these as audited data.
export const impactStats: ImpactStat[] = [
  { label: "Learners Reached", value: "1,000+", description: "Across every programme delivered so far." },
  { label: "STEM Workshops", value: "50+", description: "From single-day sessions to full bootcamps." },
  { label: "School Partnerships", value: "20+", description: "Public and private schools, nationwide." },
  { label: "STEM Programmes", value: "10+", description: "Spanning coding, robotics, AI and more." },
  { label: "Volunteer Mentors", value: "40+", description: "Working STEM professionals giving their time." },
  { label: "Communities Reached", value: "15+", description: "Including underserved and first-access areas." },
];

export const impactStories: ImpactStory[] = [
  {
    title: "Robotics Academy graduates build competition-ready robots",
    category: "Learners",
    summary:
      "Placeholder story — Robotics Academy learners regularly go on to compete in regional robotics challenges within a year of joining the programme.",
    image: "/images/impact/learners.svg",
  },
  {
    title: "Partner schools report stronger STEM engagement",
    category: "Schools",
    summary:
      "Placeholder story — partner schools describe measurable increases in student interest in STEM subjects after a year-long programme partnership.",
    image: "/images/impact/schools.svg",
  },
  {
    title: "Community outreach sessions reach first-time learners",
    category: "Communities",
    summary:
      "Placeholder story — community STEM sessions have introduced coding and robotics to learners with no prior access to technology education.",
    image: "/images/impact/communities.svg",
  },
  {
    title: "Student-built projects solve real local problems",
    category: "Projects",
    summary:
      "Placeholder story — hackathon and bootcamp projects have tackled challenges from local water monitoring to community information access.",
    image: "/images/impact/projects.svg",
  },
];

export function getImpactStats() {
  return impactStats;
}

export function getImpactStories() {
  return impactStories;
}
