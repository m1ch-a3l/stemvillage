import type { Partner } from "@/types/content";

// Placeholder partner list — replace with real, confirmed partner logos and names.
export const partners: Partner[] = [
  { name: "Partner School Network", category: "School", logo: "/images/partners/placeholder-1.svg" },
  { name: "Regional University Consortium", category: "University", logo: "/images/partners/placeholder-2.svg" },
  { name: "Technology Sponsor Co.", category: "Company", logo: "/images/partners/placeholder-3.svg" },
  { name: "Education Development NGO", category: "NGO", logo: "/images/partners/placeholder-4.svg" },
  { name: "Ministry Programme Office", category: "Government", logo: "/images/partners/placeholder-5.svg" },
  { name: "Regional STEM Alliance", category: "STEM Organisation", logo: "/images/partners/placeholder-6.svg" },
];

export function getPartners() {
  return partners;
}
