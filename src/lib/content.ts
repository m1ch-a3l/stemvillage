// Single access point for all site content. Every page reads content through
// these functions rather than importing from `src/data` directly — swapping
// local data for a real CMS/API later means changing only this file.

export { getStemAreas, getStemAreaBySlug } from "@/data/stemAreas";
export { getProgrammes, getFeaturedProgrammes, getProgrammeBySlug } from "@/data/programmes";
export { getWorkshops, getWorkshopBySlug } from "@/data/workshops";
export { getEvents, getUpcomingEvents, getPastEvents, getEventBySlug } from "@/data/events";
export { getBlogPosts, getBlogPostBySlug, getBlogCategories } from "@/data/blog";
export { getTeam } from "@/data/team";
export { getMentors } from "@/data/mentors";
export { getTestimonials } from "@/data/testimonials";
export { getPartners } from "@/data/partners";
export { getResources, getResourceBySlug } from "@/data/resources";
export { getFaqs } from "@/data/faqs";
export { getImpactStats, getImpactStories } from "@/data/impact";
export { getProjects, getProjectBySlug } from "@/data/projects";
export { getCareerOpenings } from "@/data/careers";
