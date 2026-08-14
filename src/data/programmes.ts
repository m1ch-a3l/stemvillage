import type { LearningTribe } from "@/types/content";

export const learningTribes: LearningTribe[] = [
  {
    slug: "explorers",
    name: "The Explorers",
    ageGroup: "Ages 5–10",
    motto: "Unlocking Wonder, One Discovery at a Time.",
    vibe:
      "Tactile, playful, and relentlessly curious! The Explorers zone is where science feels like magic and play turns into foundational logic. We spark young minds by transforming big physical concepts into fun, hands-on games and builds.",
    whatTheyDo: [
      {
        title: "Hands-on Tinkering",
        description: "Constructing simple machines using gears, levers, and magnetic building blocks.",
      },
      {
        title: "Screen-Free Logic Games",
        description: "Navigating fun directional mazes and physical puzzles that teach algorithmic thinking.",
      },
      {
        title: "Eco-Discovery Labs",
        description: "Getting their hands dirty exploring plant life, weather patterns, and green energy in our outdoor spaces.",
      },
      {
        title: "Creative Structural Art",
        description: "Crafting paper geometry, bridge models, and towers out of everyday materials.",
      },
    ],
    keyOutcome: "Confidence, spatial reasoning, persistent curiosity, and a lifelong love for problem-solving.",
  },
  {
    slug: "innovators",
    name: "The Innovators",
    ageGroup: "Ages 11–14",
    motto: "Connecting Theoretical Knowledge to Real-World Power.",
    vibe:
      "Dynamic, inquisitive, and solution-driven! The Innovators are ready to move beyond basic concepts. They dig under the hood of technology to understand how things work, bridging the gap between imagination and execution.",
    whatTheyDo: [
      {
        title: "Robotics & Hardware",
        description: "Wiring real breadboards, experimenting with LEDs, and controlling microcontrollers using LEGO SPIKE and Arduino.",
      },
      {
        title: "App & Game Mechanics",
        description: "Building custom games and interactive animations while learning core programming principles.",
      },
      {
        title: "Applied Science & Micro-Labs",
        description: "Designing water-filtration systems, safe chemistry challenges, and stress-testing architectural loads.",
      },
      {
        title: "Digital Media & Design",
        description: "Crafting digital art, basic stop-motion animation, and data visuals.",
      },
    ],
    keyOutcome: "Critical thinking, computational logic, physical hardware fluency, and collaborative team skills.",
  },
  {
    slug: "architects-builders",
    name: "The Architects and Builders",
    ageGroup: "Ages 15+",
    motto: "Engineering the Future & Designing Real Solutions.",
    vibe:
      "High-agency, professional, and impact-focused! The Architects and Builders operate like a mini tech incubator. Here, teens master real-world tools, build digital assets, and solve practical community and global challenges.",
    whatTheyDo: [
      {
        title: "Real-World Coding Syntax",
        description: "Writing production-grade code in Python and JavaScript, mastering data structures, and web development.",
      },
      {
        title: "3D CAD & Prototyping",
        description: "Designing physical products using 3D modeling software and preparing models for 3D printing.",
      },
      {
        title: "Smart Automation & IoT",
        description: "Integrating sensors and automation to build internet-connected devices.",
      },
      {
        title: "Venture & Innovation Sprints",
        description: "Working in team hackathons to build, pitch, and prototype solutions for real local challenges.",
      },
    ],
    keyOutcome: "A professional portfolio of code and hardware projects, career readiness, mentorship, and high agency.",
  },
];

export function getLearningTribes() {
  return learningTribes;
}

export function getLearningTribeBySlug(slug: string) {
  return learningTribes.find((t) => t.slug === slug);
}
