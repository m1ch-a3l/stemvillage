import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "line-following-robot",
    name: "Line-Following Robot",
    category: "Robotics",
    description: "A sensor-driven robot built by Robotics Academy learners that autonomously follows a marked path.",
    date: "2026-05",
    image: "/images/projects/line-following-robot.svg",
  },
  {
    slug: "community-weather-dashboard",
    name: "Community Weather Dashboard",
    category: "Data Science",
    description: "A student-built dashboard visualising local weather data to help farmers plan planting schedules.",
    date: "2026-04",
    image: "/images/projects/weather-dashboard.svg",
  },
  {
    slug: "ai-chatbot-for-study-help",
    name: "AI Study Help Chatbot",
    category: "Artificial Intelligence",
    description: "A bootcamp team's prototype chatbot designed to answer common exam-prep questions for secondary students.",
    date: "2026-03",
    image: "/images/projects/ai-chatbot.svg",
  },
  {
    slug: "smart-water-monitor",
    name: "Smart Water Monitoring System",
    category: "Engineering",
    description: "A hackathon-built IoT sensor system that tracks water tank levels and alerts households before they run dry.",
    date: "2026-06",
    image: "/images/projects/water-monitor.svg",
  },
  {
    slug: "personal-portfolio-sites",
    name: "Teen Coding Portfolio Sites",
    category: "Web Development",
    description: "Personal portfolio websites built and deployed by Teen Coding learners as their capstone project.",
    date: "2026-02",
    image: "/images/projects/portfolio-sites.svg",
  },
  {
    slug: "science-fair-water-filtration",
    name: "Low-Cost Water Filtration Experiment",
    category: "Science",
    description: "A science-fair project testing low-cost household water filtration methods, built by STEM Club members.",
    date: "2026-01",
    image: "/images/projects/water-filtration.svg",
  },
];

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
