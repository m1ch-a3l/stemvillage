import type { Resource } from "@/types/content";

export const resources: Resource[] = [
  {
    slug: "beginners-guide-to-python",
    title: "A Beginner's Guide to Python",
    type: "Guide",
    description: "A self-paced introduction to Python fundamentals, written for learners with no prior coding experience.",
    stemArea: "Coding & Programming",
  },
  {
    slug: "build-your-first-circuit",
    title: "Build Your First Circuit",
    type: "Tutorial",
    description: "A step-by-step walkthrough of building a basic circuit with an LED, resistor and breadboard.",
    stemArea: "Robotics & Electronics",
  },
  {
    slug: "understanding-machine-learning-models",
    title: "Understanding Machine Learning Models",
    type: "Article",
    description: "A plain-language explanation of how machine learning models learn from data.",
    stemArea: "Artificial Intelligence",
  },
  {
    slug: "data-analysis-starter-toolkit",
    title: "Data Analysis Starter Toolkit",
    type: "PDF",
    description: "A downloadable worksheet and dataset for practicing basic data cleaning and visualisation.",
    stemArea: "Data Science",
  },
  {
    slug: "password-safety-checklist",
    title: "Password & Account Safety Checklist",
    type: "PDF",
    description: "A printable checklist covering the essential habits for staying safe online.",
    stemArea: "Cybersecurity",
  },
  {
    slug: "project-ideas-for-young-engineers",
    title: "20 Project Ideas for Young Engineers",
    type: "Project Idea",
    description: "A list of beginner-to-intermediate project ideas spanning robotics, coding and electronics.",
    stemArea: "Engineering & Innovation",
  },
  {
    slug: "online-code-editor-recommendations",
    title: "Recommended Free Coding Tools",
    type: "Tool",
    description: "A curated list of free, browser-based tools for practicing coding without any local setup.",
    stemArea: "Coding & Programming",
  },
  {
    slug: "science-fair-experiment-guide",
    title: "Science Fair Experiment Guide",
    type: "Guide",
    description: "A guide to designing a testable, well-structured experiment for a school science fair.",
    stemArea: "Mathematics & Science",
  },
];

export function getResources() {
  return resources;
}

export function getResourceBySlug(slug: string) {
  return resources.find((r) => r.slug === slug);
}
