import type { Mentor } from "@/types/content";

// Placeholder mentor profiles — replace with real, consented mentor bios and photos.
export const mentors: Mentor[] = [
  {
    slug: "software-engineering-mentor",
    name: "Software Engineering Mentor",
    title: "Senior Software Engineer",
    focusArea: "Coding & Programming",
    bio: "Working software engineer volunteering time to mentor learners on career paths in software development. Profile to be replaced with a real, consented mentor bio.",
    image: "/images/mentors/placeholder-1.svg",
  },
  {
    slug: "robotics-engineer-mentor",
    name: "Robotics Engineer Mentor",
    title: "Robotics Engineer",
    focusArea: "Robotics & Electronics",
    bio: "Industry robotics engineer supporting the Robotics Academy with technical mentorship. Profile to be replaced with a real, consented mentor bio.",
    image: "/images/mentors/placeholder-2.svg",
  },
  {
    slug: "data-scientist-mentor",
    name: "Data Scientist Mentor",
    title: "Data Scientist",
    focusArea: "Data Science & AI",
    bio: "Data scientist mentoring learners through the AI & Machine Learning programme. Profile to be replaced with a real, consented mentor bio.",
    image: "/images/mentors/placeholder-3.svg",
  },
  {
    slug: "cybersecurity-analyst-mentor",
    name: "Cybersecurity Analyst Mentor",
    title: "Cybersecurity Analyst",
    focusArea: "Cybersecurity",
    bio: "Security professional supporting cybersecurity workshops and one-on-one mentorship. Profile to be replaced with a real, consented mentor bio.",
    image: "/images/mentors/placeholder-4.svg",
  },
];

export function getMentors() {
  return mentors;
}
