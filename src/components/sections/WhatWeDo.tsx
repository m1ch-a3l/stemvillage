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

function ServiceItem({ icon: Icon, title }: (typeof services)[number]) {
  return (
    <span className="flex shrink-0 items-center gap-2 text-sm font-medium text-foreground/80">
      <Icon className="size-4 text-brand-emerald" aria-hidden />
      {title}
    </span>
  );
}

export function WhatWeDo() {
  return (
    <section className="overflow-hidden border-y border-border py-8">
      <Container className="mb-4">
        <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          What We Do
        </span>
      </Container>
      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-10 hover:[animation-play-state:paused]">
          {[...services, ...services].map((service, index) => (
            <ServiceItem key={`${service.title}-${index}`} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
