// Maps content keys to real downloaded photos in /public/images/photos.
// Source: Unsplash, free to use under the Unsplash License. Cards/pages
// fall back to the abstract PlaceholderArt when a key has no photo mapped
// (e.g. specific project showcase items, team/mentor profiles).

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

export const heroPhoto = "/images/photos/hero.jpg";
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
