import { GraduationCap, Wrench, School, Users2, Globe2, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";

const services = [
  { icon: GraduationCap, title: "STEM Education" },
  { icon: Wrench, title: "Workshops" },
  { icon: School, title: "School Partnerships" },
  { icon: Users2, title: "Mentorship" },
  { icon: Globe2, title: "Community Outreach" },
  { icon: Building2, title: "Corporate Training" },
];

export function WhatWeDo() {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 border-y border-border py-8 sm:flex-row sm:justify-between">
          <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            What We Do
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {services.map(({ icon: Icon, title }) => (
              <span key={title} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Icon className="size-4 text-brand-emerald" aria-hidden />
                {title}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
