import type { StemArea } from "@/types/content";

export const stemAreas: StemArea[] = [
  {
    slug: "coding-programming",
    name: "Coding & Programming",
    shortDescription: "Learn computational thinking and software development.",
    description:
      "From first lines of code to full applications, learners build computational thinking skills through Python, JavaScript and web development fundamentals — practicing on real, small projects rather than abstract exercises.",
    icon: "code",
    skills: ["Computational thinking", "Python", "JavaScript", "Web development", "Version control"],
  },
  {
    slug: "robotics-electronics",
    name: "Robotics & Electronics",
    shortDescription: "Build, experiment and understand intelligent systems.",
    description:
      "Hands-on work with circuits, sensors and microcontrollers turns abstract engineering concepts into physical, testable builds — from simple circuits to programmable robots that respond to the world around them.",
    icon: "robot",
    skills: ["Circuit design", "Microcontrollers", "Sensors & actuators", "Embedded programming"],
  },
  {
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    shortDescription: "Explore machine learning, AI and emerging technologies.",
    description:
      "An introduction to how machines learn from data — covering the intuition behind machine learning models, practical tools, and the responsible-use questions every AI practitioner should be asking.",
    icon: "brain",
    skills: ["Machine learning basics", "Data & model intuition", "AI tools", "Responsible AI"],
  },
  {
    slug: "data-science",
    name: "Data Science",
    shortDescription: "Turn data into insights and solutions.",
    description:
      "Learners work with real (anonymised) datasets to practice cleaning, visualising and drawing conclusions from data — the same workflow used in research, business analytics and public policy.",
    icon: "data",
    skills: ["Data analysis", "Visualisation", "Spreadsheets & SQL basics", "Statistical thinking"],
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortDescription: "Understand digital security and responsible technology use.",
    description:
      "Practical digital-safety literacy alongside an introduction to how systems are secured — covering safe online habits, common attack patterns, and the fundamentals behind protecting information.",
    icon: "shield",
    skills: ["Digital safety", "Security fundamentals", "Privacy awareness", "Responsible disclosure"],
  },
  {
    slug: "mathematics-science",
    name: "Mathematics & Science",
    shortDescription: "Develop analytical thinking and scientific problem-solving.",
    description:
      "Applied mathematics and hands-on science experiments build the analytical foundation that every other STEM area depends on — taught through problems that connect to real technology and engineering questions.",
    icon: "math",
    skills: ["Applied mathematics", "Scientific method", "Experiment design", "Analytical reasoning"],
  },
  {
    slug: "engineering-innovation",
    name: "Engineering & Innovation",
    shortDescription: "Design, build and test solutions to real-world problems.",
    description:
      "A project-based design process — identify a real problem, prototype a solution, test it, and iterate — that mirrors how engineers and innovators actually work, culminating in a tangible build learners can showcase.",
    icon: "engineering",
    skills: ["Design thinking", "Prototyping", "Iteration & testing", "Project presentation"],
  },
];

export function getStemAreas() {
  return stemAreas;
}

export function getStemAreaBySlug(slug: string) {
  return stemAreas.find((area) => area.slug === slug);
}
