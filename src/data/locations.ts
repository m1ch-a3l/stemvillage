import type { Location } from "@/types/content";

export const locations: Location[] = [
  {
    slug: "aburi-skills-campus",
    name: "Aburi Skills Campus",
    highlights:
      "Ideal for families in the eastern corridor. Features spacious lab setups for active robotics and physical experimentation.",
  },
  {
    slug: "pokuase-tpmi-skills-campus",
    name: "Pokuase TPMI Skills Campus",
    highlights:
      "Perfectly accessible for families in the Greater Accra Region. Features outdoor eco-labs and quiet, focused coding spaces. Practical soft skills tutorials and interactive exercises.",
  },
];

export function getLocations() {
  return locations;
}
