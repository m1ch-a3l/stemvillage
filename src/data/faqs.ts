import type { Faq } from "@/types/content";

export const faqs: Faq[] = [
  {
    question: "Who are STEMAide's programmes for?",
    answer:
      "Our programmes serve learners from age 8 through adulthood, including students, career switchers, schools, and working professionals looking to build STEM skills. Each programme lists its target audience.",
    category: "General",
  },
  {
    question: "Do learners need prior experience to join?",
    answer:
      "No. Most programmes, including STEM for Kids and Teen Coding, are designed for complete beginners. Programme pages list any prerequisites where they exist.",
    category: "Programmes",
  },
  {
    question: "Are programmes free or paid?",
    answer:
      "It varies by programme. Community outreach programmes and select workshops are free; other programmes, such as the Coding Bootcamp, have a fee. Visit our Pricing information or contact us for current details.",
    category: "Programmes",
  },
  {
    question: "How does a school start a partnership with STEMAide?",
    answer:
      "Schools can submit a partnership enquiry through our Schools & Partnerships page or attend a School Partnership Information Session. Our team will follow up to understand your school's needs and propose a programme structure.",
    category: "Schools",
  },
  {
    question: "What does a school partnership typically involve?",
    answer:
      "Partnerships range from a single workshop to a full-year School STEM Programme with curriculum support and teacher training. We tailor the scope to each school's capacity and goals.",
    category: "Schools",
  },
  {
    question: "How can an organisation partner with or sponsor STEMAide?",
    answer:
      "Organisations can sponsor programmes, fund equipment, host corporate workshops, or provide employee mentors. Reach out via our Partnerships enquiry form and our team will discuss options that fit your goals.",
    category: "Partnerships",
  },
  {
    question: "Can I volunteer or become a mentor?",
    answer:
      "Yes. We welcome STEM professionals interested in mentoring learners or supporting workshops. Use the contact form and select 'Volunteering' as your enquiry type.",
    category: "Volunteering",
  },
  {
    question: "Where are programmes held?",
    answer:
      "Most in-person programmes run from our Innovation Hub in Accra or on-site at partner schools. Several programmes also offer an online delivery option — check each programme's format details.",
    category: "General",
  },
];

export function getFaqs() {
  return faqs;
}
