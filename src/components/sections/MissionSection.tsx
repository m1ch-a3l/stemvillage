import Image from "next/image";
import { Target, Eye, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { aboutMissionPhoto } from "@/lib/photos";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To make quality STEM education accessible, practical and inspiring for the next generation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A future where every young person, regardless of background, has the skills and confidence to shape technology rather than just consume it.",
  },
  {
    icon: Heart,
    title: "Our Values",
    body: "Access, hands-on learning, community, and integrity — every programme is built to be practical, inclusive and honest about outcomes.",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="bg-slate-100 py-20 sm:py-24 dark:bg-slate-900">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal direction="none" className="relative order-first h-64 w-full overflow-hidden rounded-2xl border-4 border-white shadow-lg sm:h-80 lg:order-none">
            <Image
              src={aboutMissionPhoto}
              alt="GoStem learners and mentors collaborating"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <SectionHeader
              eyebrow="Who We Are"
              title="Equipping learners with the skills to build the future."
              description="STEM Village is a STEM education and innovation organisation working with students, schools, and communities to make technology education practical, hands-on and genuinely accessible."
            />
            <div>
              <ButtonLink href="/about" variant="outline" className="h-10 px-5 text-sm">
                Learn More About Us
              </ButtonLink>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <div className="flex h-full flex-col gap-3 rounded-xl bg-card p-6 shadow-md ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
