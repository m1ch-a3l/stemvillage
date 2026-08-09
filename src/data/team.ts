import type { TeamMember } from "@/types/content";

// Placeholder team profiles — replace with real staff bios and photos.
export const team: TeamMember[] = [
  {
    slug: "founder-executive-director",
    name: "Founder & Executive Director",
    role: "Executive Director",
    bio: "Leads STEMAide's strategy and partnerships, with a background in education and technology. Bio to be replaced with real founder details.",
    image: "/images/team/placeholder-1.svg",
  },
  {
    slug: "programmes-lead",
    name: "Ama Boateng",
    role: "Programmes Lead",
    bio: "Oversees curriculum design and programme delivery across all age groups. Bio to be replaced with real staff details.",
    image: "/images/team/placeholder-2.svg",
  },
  {
    slug: "robotics-instructor",
    name: "Kwame Owusu",
    role: "Robotics Instructor",
    bio: "Leads the Robotics Academy and workshop curriculum. Bio to be replaced with real staff details.",
    image: "/images/team/placeholder-3.svg",
  },
  {
    slug: "partnerships-manager",
    name: "Partnerships Manager",
    role: "Partnerships Manager",
    bio: "Manages relationships with schools, corporate partners and sponsors. Bio to be replaced with real staff details.",
    image: "/images/team/placeholder-4.svg",
  },
  {
    slug: "operations-manager",
    name: "Operations Manager",
    role: "Operations Manager",
    bio: "Runs day-to-day operations across all STEMAide locations and events. Bio to be replaced with real staff details.",
    image: "/images/team/placeholder-5.svg",
  },
  {
    slug: "community-outreach-coordinator",
    name: "Community Outreach Coordinator",
    role: "Community Outreach Coordinator",
    bio: "Coordinates community programmes and outreach partnerships. Bio to be replaced with real staff details.",
    image: "/images/team/placeholder-6.svg",
  },
];

export function getTeam() {
  return team;
}
