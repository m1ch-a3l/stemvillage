// Maps content keys to real downloaded photos in /public/images/photos.
// Source: Unsplash, free to use under the Unsplash License.

export const stemAreaPhotos: Record<string, string> = {
  "coding-programming": "/images/photos/stem-coding-programming.jpg",
  "robotics-electronics": "/images/photos/stem-robotics-electronics.jpg",
  "artificial-intelligence": "/images/photos/stem-artificial-intelligence.jpg",
  "data-science": "/images/photos/stem-data-science.jpg",
  cybersecurity: "/images/photos/stem-cybersecurity.jpg",
  "mathematics-science": "/images/photos/stem-mathematics-science.jpg",
  "engineering-innovation": "/images/photos/stem-engineering-innovation.jpg",
};

export const eventCategoryPhotos: Record<string, string> = {
  Competition: "/images/photos/stem-robotics-electronics.jpg",
  Webinar: "/images/photos/event-webinar.jpg",
  Bootcamp: "/images/photos/event-bootcamp.jpg",
  "STEM Fair": "/images/photos/event-stem-fair.jpg",
  "School Visit": "/images/photos/event-school-visit.jpg",
  Hackathon: "/images/photos/event-hackathon.jpg",
};

export const blogCategoryPhotos: Record<string, string> = {
  "STEM Education": "/images/photos/about-mission.jpg",
  Robotics: "/images/photos/stem-robotics-electronics.jpg",
  "Artificial Intelligence": "/images/photos/stem-artificial-intelligence.jpg",
  Cybersecurity: "/images/photos/stem-cybersecurity.jpg",
  Careers: "/images/photos/mentorship.jpg",
};

// Project showcase photos, keyed by project slug — thematic stand-ins since
// no photos of the specific (placeholder) projects exist.
export const projectPhotos: Record<string, string> = {
  "line-following-robot": "/images/photos/stem-robotics-electronics.jpg",
  "community-weather-dashboard": "/images/photos/stem-data-science.jpg",
  "ai-chatbot-for-study-help": "/images/photos/stem-artificial-intelligence.jpg",
  "smart-water-monitor": "/images/photos/stem-engineering-innovation.jpg",
  "personal-portfolio-sites": "/images/photos/project-web-dev.jpg",
  "science-fair-water-filtration": "/images/photos/stem-mathematics-science.jpg",
};

// Workshop photos, keyed by workshop slug.
export const workshopPhotos: Record<string, string> = {
  "intro-to-coding-workshop": "/images/photos/stem-coding-programming.jpg",
  "build-a-robot-in-a-day": "/images/photos/stem-robotics-electronics.jpg",
  "ai-for-beginners-workshop": "/images/photos/stem-artificial-intelligence.jpg",
  "cybersecurity-safety-workshop": "/images/photos/stem-cybersecurity.jpg",
  "data-storytelling-workshop": "/images/photos/stem-data-science.jpg",
  "corporate-innovation-sprint": "/images/photos/workshop-corporate.jpg",
};

// Impact story photos, keyed by story category.
export const impactCategoryPhotos: Record<string, string> = {
  Learners: "/images/photos/event-hackathon.jpg",
  Schools: "/images/photos/event-school-visit.jpg",
  Communities: "/images/photos/event-stem-fair.jpg",
  Projects: "/images/photos/stem-engineering-innovation.jpg",
};

// Stock portrait photos for placeholder team/mentor profiles — replace with
// real, consented staff and mentor photos before launch.
export const teamPhotos: Record<string, string> = {
  "founder-executive-director": "/images/photos/team-1.jpg",
  "programmes-lead": "/images/photos/team-2.jpg",
  "robotics-instructor": "/images/photos/team-3.jpg",
  "partnerships-manager": "/images/photos/team-4.jpg",
  "operations-manager": "/images/photos/team-5.jpg",
  "community-outreach-coordinator": "/images/photos/team-6.jpg",
};

export const mentorPhotos: Record<string, string> = {
  "software-engineering-mentor": "/images/photos/mentor-1.jpg",
  "robotics-engineer-mentor": "/images/photos/mentor-2.jpg",
  "data-scientist-mentor": "/images/photos/mentor-3.jpg",
  "cybersecurity-analyst-mentor": "/images/photos/mentor-4.jpg",
};

export const heroPhotos = [
  "/images/photos/hero.jpg",
  "/images/photos/hero-2.jpg",
  "/images/photos/hero-3.jpg",
  "/images/photos/hero-4.jpg",
];

export const aboutMissionPhoto = "/images/photos/about-mission.jpg";
export const mentorshipPhoto = "/images/photos/mentorship.jpg";

export function getProgrammePhoto(stemAreas: string[]): string | undefined {
  for (const area of stemAreas) {
    if (stemAreaPhotos[area]) return stemAreaPhotos[area];
  }
  return undefined;
}

export function getEventPhoto(category: string): string | undefined {
  return eventCategoryPhotos[category];
}

export function getBlogPhoto(category: string): string | undefined {
  return blogCategoryPhotos[category];
}

export function getStemAreaPhoto(slug: string): string | undefined {
  return stemAreaPhotos[slug];
}

export function getProjectPhoto(slug: string): string | undefined {
  return projectPhotos[slug];
}

export function getWorkshopPhoto(slug: string): string | undefined {
  return workshopPhotos[slug];
}

export function getImpactPhoto(category: string): string | undefined {
  return impactCategoryPhotos[category];
}

export function getTeamPhoto(slug: string): string | undefined {
  return teamPhotos[slug];
}

export function getMentorPhoto(slug: string): string | undefined {
  return mentorPhotos[slug];
}
