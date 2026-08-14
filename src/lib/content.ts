// Single access point for all site content. Every page reads content through
// these functions rather than importing from `src/data` directly — swapping
// local data for a real CMS/API later means changing only this file.

export { getLearningTribes, getLearningTribeBySlug } from "@/data/programmes";
export { getWorkshops, getWorkshopBySlug } from "@/data/workshops";
export { getTeam } from "@/data/team";
export { getMentors } from "@/data/mentors";
export { getTestimonials } from "@/data/testimonials";
export { getLocations } from "@/data/locations";
