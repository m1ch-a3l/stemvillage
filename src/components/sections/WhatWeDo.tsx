import { GraduationCap, Wrench, School, Users2, Globe2, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";

const services = [
  {
    icon: GraduationCap,
    title: "STEM Education",
    body: "Practical learning experiences that make STEM accessible and engaging.",
  },
  {
    icon: Wrench,
    title: "Workshops",
    body: "Hands-on technology workshops for students, schools and organisations.",
  },
  {
    icon: School,
    title: "School Partnerships",
    body: "Helping schools build stronger STEM programmes and opportunities.",
  },
  {
    icon: Users2,
    title: "Mentorship",
    body: "Connecting learners with professionals and experienced mentors.",
  },
  {
    icon: Globe2,
    title: "Community Outreach",
    body: "Bringing STEM opportunities to communities and underserved learners.",
  },
  {
    icon: Building2,
    title: "Corporate & Institutional Training",
    body: "STEM and technology programmes designed for organisations and institutions.",
  },
];

export function WhatWeDo() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeader eyebrow="What We Do" title="A full toolkit for building STEM capacity." align="center" className="mx-auto" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 rounded-xl border border-border p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10 text-brand-emerald">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
