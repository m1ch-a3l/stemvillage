import type { TeamMember } from "@/types/content";

export const team: TeamMember[] = [
  {
    slug: "rev-e-a-builderman",
    name: "Rev. E. A. Builderman",
    role: "Founder",
  },
  {
    slug: "michael-yeboah-adu",
    name: "Michael Yeboah Adu",
    role: "Chief Technology Coordinator/Instructor",
  },
];

export function getTeam() {
  return team;
}
