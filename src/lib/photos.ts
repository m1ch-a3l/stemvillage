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

// Workshop photos, keyed by workshop slug.
export const workshopPhotos: Record<string, string> = {
  "intro-to-coding-workshop": "/images/photos/stem-coding-programming.jpg",
  "build-a-robot-in-a-day": "/images/photos/stem-robotics-electronics.jpg",
  "ai-for-beginners-workshop": "/images/photos/stem-artificial-intelligence.jpg",
  "cybersecurity-safety-workshop": "/images/photos/stem-cybersecurity.jpg",
  "data-storytelling-workshop": "/images/photos/stem-data-science.jpg",
  "corporate-innovation-sprint": "/images/photos/workshop-corporate.jpg",
};

// Real staff photos, keyed by team member slug — add an entry once a real,
// consented photo is available. Falls back to placeholder art until then.
export const teamPhotos: Record<string, string> = {
  "rev-e-a-builderman": "/images/team/Enoch.webp",
  "michael-yeboah-adu": "/images/team/Michael.jpg",
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

// Learning Tribe photos, keyed by tribe slug — each tribe gets a distinct
// image so the listing never shows the same photo twice.
export const programmePhotos: Record<string, string> = {
  explorers: "/images/photos/stem-mathematics-science.jpg",
  innovators: "/images/photos/stem-robotics-electronics.jpg",
  "architects-builders": "/images/photos/gallery-activities/475528451_594315403517728_2407485001173510194_n.jpg",
};

export function getProgrammePhoto(slug: string): string | undefined {
  return programmePhotos[slug];
}

export function getWorkshopPhoto(slug: string): string | undefined {
  return workshopPhotos[slug];
}

export function getTeamPhoto(slug: string): string | undefined {
  return teamPhotos[slug];
}

export function getMentorPhoto(slug: string): string | undefined {
  return mentorPhotos[slug];
}
