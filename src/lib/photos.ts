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

// Programme photos, keyed by programme slug — each programme gets a distinct
// image so the listing never shows the same photo twice.
export const programmePhotos: Record<string, string> = {
  "stem-for-kids": "/images/photos/gallery-activities/475386634_594315696851032_6012668746520625730_n.jpg",
  "teen-coding": "/images/photos/stem-coding-programming.jpg",
  "robotics-academy": "/images/photos/stem-robotics-electronics.jpg",
  "ai-machine-learning": "/images/photos/stem-artificial-intelligence.jpg",
  "coding-bootcamp": "/images/photos/event-bootcamp.jpg",
  "stem-clubs": "/images/photos/event-school-visit.jpg",
  "school-stem-programme": "/images/photos/gallery-activities/469717204_555974400685162_6541074027306864709_n.jpg",
  "women-in-stem": "/images/photos/gallery-activities/469477605_555974744018461_6866936589855080471_n.jpg",
  "community-stem-outreach": "/images/photos/event-stem-fair.jpg",
  "career-mentorship": "/images/photos/mentorship.jpg",
};

export function getProgrammePhoto(slug: string): string | undefined {
  return programmePhotos[slug];
}

export function getStemAreaPhoto(slug: string): string | undefined {
  return stemAreaPhotos[slug];
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
