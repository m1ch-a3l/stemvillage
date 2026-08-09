import type { EventItem } from "@/types/content";

export const events: EventItem[] = [
  {
    slug: "national-robotics-challenge-2026",
    title: "National Robotics Challenge 2026",
    category: "Competition",
    description: "Student teams from partner schools compete to build and program robots that complete a set of real-world-inspired tasks.",
    longDescription:
      "Teams of up to five students design, build and program a robot to complete a series of obstacle and task-based challenges. Open to all partner schools and community programme alumni. Awards for top three teams plus a Judges' Innovation Award. Mentors are available in the weeks leading up to the event for teams that need build support.",
    date: "2026-09-19",
    time: "9:00 AM – 4:00 PM",
    location: "Accra International Conference Centre",
    isVirtual: false,
    capacity: 300,
    status: "registration-open",
    image: "/images/events/robotics-challenge.svg",
  },
  {
    slug: "ai-for-beginners-webinar",
    title: "AI for Beginners: A Live Webinar",
    category: "Webinar",
    description: "A free, live introduction to how AI tools work, what they're good at, and how to use them responsibly.",
    longDescription:
      "Open to students, parents and educators. This live session covers the basic mechanics behind modern AI tools, walks through a few practical use cases, and leaves plenty of time for audience questions. A recording is shared with all registrants afterward.",
    date: "2026-08-28",
    time: "6:00 PM – 7:15 PM GMT",
    location: "Online",
    isVirtual: true,
    capacity: 500,
    status: "registration-open",
    image: "/images/events/ai-webinar.svg",
  },
  {
    slug: "coding-camp-summer-2026",
    title: "Summer Coding Camp",
    category: "Bootcamp",
    description: "A five-day intensive coding camp for teens, culminating in a demo day where every learner presents a finished project.",
    longDescription:
      "Five days of full-day, hands-on programming instruction for teens ages 13-17. No prior coding experience required. Learners work individually and in small teams, building toward a personal project they present to family and mentors on the final day.",
    date: "2026-08-17",
    endDate: "2026-08-21",
    time: "9:00 AM – 3:00 PM daily",
    location: "STEMAide Innovation Hub, Accra",
    isVirtual: false,
    capacity: 60,
    status: "registration-open",
    image: "/images/events/coding-camp.svg",
  },
  {
    slug: "stem-fair-community-2026",
    title: "Community STEM Fair",
    category: "STEM Fair",
    description: "An open-to-the-public showcase of student projects, hands-on demo stations, and STEM career conversations.",
    longDescription:
      "A family-friendly, free event featuring interactive demo stations across robotics, coding, electronics and science, student project showcases, and informal conversations with STEM professionals about their career paths.",
    date: "2026-10-10",
    time: "10:00 AM – 3:00 PM",
    location: "Efua Sutherland Children's Park, Accra",
    isVirtual: false,
    capacity: 1000,
    status: "upcoming",
    image: "/images/events/stem-fair.svg",
  },
  {
    slug: "school-stem-info-session",
    title: "School Partnership Information Session",
    category: "School Visit",
    description: "A session for school administrators interested in bringing STEMAide programmes into their school.",
    longDescription:
      "An informal session for head teachers, STEM coordinators and school administrators to learn how our school partnership programmes work, what's involved in getting started, and to ask questions directly.",
    date: "2026-09-05",
    time: "2:00 PM – 3:30 PM",
    location: "Online",
    isVirtual: true,
    capacity: 100,
    status: "registration-open",
    image: "/images/events/school-info-session.svg",
  },
  {
    slug: "regional-hackathon-2026",
    title: "Regional Youth Hackathon",
    category: "Hackathon",
    description: "A 48-hour hackathon challenging youth teams to build a technology solution to a local community problem.",
    longDescription:
      "Teams of 3-4 have 48 hours to design and prototype a technology solution addressing a real community challenge, with mentorship from industry volunteers available throughout. Final presentations are judged by a panel from partner organisations.",
    date: "2026-06-13",
    endDate: "2026-06-15",
    time: "Starts 6:00 PM Friday",
    location: "STEMAide Innovation Hub, Accra",
    isVirtual: false,
    capacity: 120,
    status: "past",
    image: "/images/events/hackathon.svg",
  },
];

export function getEvents() {
  return events;
}

export function getUpcomingEvents() {
  return events.filter((e) => e.status !== "past").sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastEvents() {
  return events.filter((e) => e.status === "past").sort((a, b) => b.date.localeCompare(a.date));
}

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}
