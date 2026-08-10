import { Target, Eye, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ButtonLink } from "@/components/ui/button-link";

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
    <section id="mission" className="bg-secondary/40 py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeader
          eyebrow="Who We Are"
          title="Equipping learners with the skills to build the future."
          description="GoStem is a STEM education and innovation organisation working with students, schools, and communities to make technology education practical, hands-on and genuinely accessible."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
        <div>
          <ButtonLink href="/about" variant="outline" className="h-10 px-5 text-sm">
            Learn More About Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
