import type { Programme } from "@/types/content";

export const programmes: Programme[] = [
  {
    slug: "stem-for-kids",
    title: "STEM for Kids",
    tagline: "Playful, hands-on first steps into technology and science.",
    description:
      "An introductory programme for younger learners built around games, puzzles and simple builds. Learners get their first taste of coding, circuits and scientific thinking in a low-pressure, high-curiosity environment designed for ages 8-12.",
    audience: "Ages 8–12",
    format: "In-person, weekly sessions",
    duration: "8 weeks",
    stemAreas: ["coding-programming", "mathematics-science", "robotics-electronics"],
    image: "/images/programmes/stem-for-kids.svg",
    featured: true,
  },
  {
    slug: "teen-coding",
    title: "Teen Coding",
    tagline: "From first program to first real application.",
    description:
      "Teen learners move from programming fundamentals to building genuine applications — websites, simple games and tools — while developing the debugging and problem-solving habits that carry into any technical career.",
    audience: "Ages 13–17",
    format: "In-person or online, weekly sessions",
    duration: "12 weeks",
    stemAreas: ["coding-programming"],
    image: "/images/programmes/teen-coding.svg",
    featured: true,
  },
  {
    slug: "robotics-academy",
    title: "Robotics Academy",
    tagline: "Hands-on robotics experiences that turn theory into machines.",
    description:
      "Hands-on robotics experiences that introduce learners to electronics, programming, engineering and problem-solving — building from simple circuits to autonomous, sensor-driven robots learners design and program themselves.",
    audience: "Ages 12–18",
    format: "In-person, lab-based",
    duration: "10 weeks",
    stemAreas: ["robotics-electronics", "engineering-innovation"],
    image: "/images/programmes/robotics-academy.svg",
    featured: true,
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    tagline: "Demystifying the technology reshaping every industry.",
    description:
      "A structured path from 'what is a model' to building and evaluating simple machine learning projects, paired with candid discussion of AI's capabilities, limits, and responsible use.",
    audience: "Ages 15+ and working professionals",
    format: "Online, cohort-based",
    duration: "10 weeks",
    stemAreas: ["artificial-intelligence", "data-science"],
    image: "/images/programmes/ai-machine-learning.svg",
    featured: true,
  },
  {
    slug: "coding-bootcamp",
    title: "Coding Bootcamp",
    tagline: "Intensive, career-focused software development training.",
    description:
      "An intensive, immersive programme for learners ready to move quickly toward job-ready software development skills — full-stack fundamentals, project work, and a portfolio built to show employers.",
    audience: "Ages 17+ and career switchers",
    format: "In-person or online, full-time",
    duration: "16 weeks",
    stemAreas: ["coding-programming", "data-science"],
    image: "/images/programmes/coding-bootcamp.svg",
  },
  {
    slug: "stem-clubs",
    title: "STEM Clubs",
    tagline: "Ongoing, low-commitment STEM exploration at school.",
    description:
      "A lightweight, recurring after-school club format that gives schools a simple way to offer consistent STEM exposure without needing a dedicated curriculum team — we bring the activities and facilitation.",
    audience: "School-age learners",
    format: "In-school, after-school sessions",
    duration: "Ongoing, termly",
    stemAreas: ["coding-programming", "robotics-electronics", "mathematics-science"],
    image: "/images/programmes/stem-clubs.svg",
  },
  {
    slug: "school-stem-programme",
    title: "School STEM Programme",
    tagline: "A full STEM curriculum layer for partner schools.",
    description:
      "A deeper partnership for schools ready to build STEM into their core offering — curriculum support, teacher training, equipment guidance and a term-by-term programme structure tailored to the school's context.",
    audience: "Partner schools",
    format: "In-school, curriculum partnership",
    duration: "Full academic year",
    stemAreas: ["coding-programming", "robotics-electronics", "engineering-innovation"],
    image: "/images/programmes/school-stem-programme.svg",
  },
  {
    slug: "women-in-stem",
    title: "Women in STEM",
    tagline: "Building community and confidence for women in technology.",
    description:
      "A programme combining technical training with mentorship and community-building, designed to address the specific barriers that keep women underrepresented in STEM careers.",
    audience: "Women and girls, 15+",
    format: "In-person and online, cohort-based",
    duration: "12 weeks",
    stemAreas: ["coding-programming", "artificial-intelligence"],
    image: "/images/programmes/women-in-stem.svg",
  },
  {
    slug: "community-stem-outreach",
    title: "Community STEM Outreach",
    tagline: "Bringing STEM access to underserved communities.",
    description:
      "Free, community-hosted STEM sessions that bring foundational technology and science exposure to learners who wouldn't otherwise have access to it — delivered in partnership with local community organisations.",
    audience: "Underserved communities, all ages",
    format: "Community-hosted, drop-in sessions",
    duration: "Rolling",
    stemAreas: ["coding-programming", "mathematics-science"],
    image: "/images/programmes/community-stem-outreach.svg",
  },
  {
    slug: "career-mentorship",
    title: "Career & Mentorship Programme",
    tagline: "One-on-one guidance from working STEM professionals.",
    description:
      "Structured mentorship pairing learners with STEM professionals for career guidance, portfolio review and industry insight — helping the transition from learning to working feel less like a leap.",
    audience: "Ages 16+ and recent graduates",
    format: "Online, one-on-one",
    duration: "Ongoing",
    stemAreas: ["coding-programming", "data-science", "artificial-intelligence"],
    image: "/images/programmes/career-mentorship.svg",
  },
];

export function getProgrammes() {
  return programmes;
}

export function getFeaturedProgrammes() {
  return programmes.filter((p) => p.featured);
}

export function getProgrammeBySlug(slug: string) {
  return programmes.find((p) => p.slug === slug);
}
