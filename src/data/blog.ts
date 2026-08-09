import type { BlogPost } from "@/types/content";

export const blogPosts: BlogPost[] = [
  {
    slug: "why-stem-education-matters-for-africas-future",
    title: "Why STEM Education Matters for Africa's Technological Future",
    excerpt:
      "As digital transformation accelerates across the continent, STEM literacy is becoming the foundation for economic opportunity — here's why that matters now.",
    content: [
      "Across Ghana and the wider region, digital transformation is reshaping how businesses operate, how services are delivered, and how young people build careers. The organisations and economies best positioned to benefit are the ones with a workforce fluent in the underlying technology — not just able to use it, but able to build with it.",
      "That fluency doesn't start in university. It starts with early, hands-on exposure to computational thinking, problem-solving and the confidence that comes from building something that works. STEM education, done well, gives young people a head start on a future that will demand these skills regardless of the career path they eventually choose.",
      "This is the thinking behind our programme design: practical, project-based learning that treats every learner as a builder, not just a student.",
    ],
    category: "STEM Education",
    author: "Ama Boateng",
    authorRole: "Programmes Lead",
    date: "2026-07-14",
    readTimeMinutes: 5,
    image: "/images/blog/stem-education-africa.svg",
  },
  {
    slug: "getting-started-with-robotics-a-beginners-guide",
    title: "Getting Started with Robotics: A Beginner's Guide",
    excerpt:
      "New to robotics? Here's a practical starting point covering the core concepts, tools, and first projects worth trying.",
    content: [
      "Robotics can look intimidating from the outside — wires, sensors, code, all working together. But the core loop behind almost every robot is simple: sense the environment, decide what to do, and act.",
      "A good first project doesn't need to be complicated. A robot that follows a line, or backs away from an obstacle, teaches the same fundamentals as far more advanced builds — just at a manageable scale.",
      "Start with a kit that includes a microcontroller, a couple of sensors, and clear documentation. Resist the urge to build the most advanced project you can imagine on day one. Build something small, get it working, then add one feature at a time.",
    ],
    category: "Robotics",
    author: "Kwame Owusu",
    authorRole: "Robotics Instructor",
    date: "2026-06-30",
    readTimeMinutes: 6,
    image: "/images/blog/robotics-beginners-guide.svg",
  },
  {
    slug: "demystifying-artificial-intelligence-for-young-learners",
    title: "Demystifying Artificial Intelligence for Young Learners",
    excerpt:
      "AI doesn't have to be a black box. Here's how we introduce the concepts behind machine learning in a way that builds real understanding.",
    content: [
      "One of the most common misconceptions about AI is that it 'thinks' the way people do. In reality, most AI systems are pattern-matching machines — they learn to recognise patterns in large amounts of data and use those patterns to make predictions.",
      "When we introduce AI to learners, we start with that distinction, using simple, visual examples: showing a model hundreds of pictures of cats and dogs and watching it learn to tell them apart. That concrete starting point makes the more abstract ideas — training, bias, evaluation — much easier to grasp later.",
      "Just as important as the technical concepts is the conversation about responsible use: what these tools are good at, where they fail, and why human judgment still matters.",
    ],
    category: "Artificial Intelligence",
    author: "Nana Yeboah",
    authorRole: "AI Programme Coordinator",
    date: "2026-06-02",
    readTimeMinutes: 7,
    image: "/images/blog/ai-young-learners.svg",
  },
  {
    slug: "cybersecurity-basics-every-student-should-know",
    title: "Cybersecurity Basics Every Student Should Know",
    excerpt:
      "Digital safety habits worth teaching early — practical, non-technical guidance for students, parents and teachers.",
    content: [
      "Most cybersecurity incidents don't come from sophisticated attacks — they come from simple, avoidable mistakes: reused passwords, unverified links, and oversharing on public accounts.",
      "Teaching digital safety early builds habits that last: using a password manager, thinking twice before clicking a link in an unexpected message, and understanding what information is safe to share online.",
      "We weave these fundamentals into our programmes from the start, alongside the more technical side of how security actually works — because understanding the 'why' makes the habits stick.",
    ],
    category: "Cybersecurity",
    author: "Efua Mensah",
    authorRole: "Cybersecurity Instructor",
    date: "2026-05-18",
    readTimeMinutes: 4,
    image: "/images/blog/cybersecurity-basics.svg",
  },
  {
    slug: "from-classroom-to-career-a-mentorship-story",
    title: "From Classroom to Career: What Good Mentorship Looks Like",
    excerpt:
      "Mentorship is one of the highest-leverage things we offer learners — here's what makes it work.",
    content: [
      "Technical skills open doors, but mentorship is often what helps someone walk through them. A good mentor doesn't just answer technical questions — they help a mentee see a realistic path from where they are to where they want to be.",
      "Our mentorship programme pairs learners with working STEM professionals for regular, structured conversations: career guidance, portfolio feedback, and honest perspective on what a given career path actually involves day-to-day.",
      "The relationships that work best are consistent, not occasional — which is why we build mentorship as an ongoing programme rather than a one-off event.",
    ],
    category: "Careers",
    author: "Kojo Asante",
    authorRole: "Mentorship Programme Manager",
    date: "2026-04-22",
    readTimeMinutes: 5,
    image: "/images/blog/mentorship-story.svg",
  },
  {
    slug: "how-schools-can-build-a-sustainable-stem-programme",
    title: "How Schools Can Build a Sustainable STEM Programme",
    excerpt:
      "Practical guidance for school leaders looking to build STEM into their curriculum without overextending limited resources.",
    content: [
      "The schools that build the most sustainable STEM programmes tend to start smaller than they expect to — a single after-school club or a termly workshop series — rather than attempting a full curriculum overhaul on day one.",
      "From there, the key ingredients are consistency, a designated staff champion, and a clear plan for equipment and facilitation that doesn't depend entirely on one person's availability.",
      "Our school partnership programme is designed around exactly this: a structured, phased approach that grows with the school's capacity rather than outpacing it.",
    ],
    category: "STEM Education",
    author: "Ama Boateng",
    authorRole: "Programmes Lead",
    date: "2026-03-11",
    readTimeMinutes: 6,
    image: "/images/blog/schools-stem-programme.svg",
  },
];

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogCategories() {
  return Array.from(new Set(blogPosts.map((p) => p.category)));
}
