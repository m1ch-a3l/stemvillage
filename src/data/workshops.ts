import type { Workshop } from "@/types/content";

export const workshops: Workshop[] = [
  {
    slug: "intro-to-coding-workshop",
    title: "Intro to Coding Workshop",
    description:
      "A single-day, no-experience-needed introduction to programming logic using block-based and beginner text-based tools.",
    audience: "Students, ages 10+",
    deliveryModes: ["In-person", "On-site at schools"],
  },
  {
    slug: "build-a-robot-in-a-day",
    title: "Build-a-Robot-in-a-Day",
    description:
      "Teams assemble and program a simple robot from a kit, leaving with a working build and the fundamentals of embedded programming.",
    audience: "Students, ages 12+",
    deliveryModes: ["In-person", "Lab-based"],
  },
  {
    slug: "ai-for-beginners-workshop",
    title: "AI for Beginners",
    description:
      "A practical, jargon-free walkthrough of how AI tools work and how to use them responsibly — for learners and educators alike.",
    audience: "Students, teachers, general public",
    deliveryModes: ["In-person", "Online"],
  },
  {
    slug: "cybersecurity-safety-workshop",
    title: "Cybersecurity & Digital Safety",
    description:
      "Practical guidance on staying safe online paired with an introduction to how cyberattacks and defences actually work.",
    audience: "Students, parents, schools",
    deliveryModes: ["In-person", "On-site at schools"],
  },
  {
    slug: "data-storytelling-workshop",
    title: "Data Storytelling Workshop",
    description:
      "Learners take a real dataset from spreadsheet to visual story, practicing the core skills of data analysis and communication.",
    audience: "Students, ages 14+",
    deliveryModes: ["In-person", "Online"],
  },
  {
    slug: "corporate-innovation-sprint",
    title: "Corporate Innovation Sprint",
    description:
      "A facilitated, half-day design-thinking sprint for organisations looking to apply STEM problem-solving methods to a real business challenge.",
    audience: "Corporate & institutional teams",
    deliveryModes: ["On-site", "Off-site facilitated"],
  },
];

export function getWorkshops() {
  return workshops;
}

export function getWorkshopBySlug(slug: string) {
  return workshops.find((w) => w.slug === slug);
}
