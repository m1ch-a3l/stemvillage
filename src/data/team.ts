import type { TeamMember } from "@/types/content";

export const team: TeamMember[] = [
  {
    slug: "rev-e-a-builderman",
    name: "Rev. E. A. Builderman",
    role: "Founder",
    linkedin: "#"
  },
  {
    slug: "michael-yeboah-adu",
    name: "Michael Yeboah Adu",
    role: "Chief Technology Coordinator/Instructor",
    linkedin: "https://www.linkedin.com/in/michael-adu-34283b13a/"
  },
];

export function getTeam() {
  return team;
}
