import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { LearningTribeCard } from "@/components/cards/LearningTribeCard";
import { ButtonLink } from "@/components/ui/button-link";
import { getLearningTribes } from "@/lib/content";

export function ProgrammesGrid() {
  const tribes = getLearningTribes();

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Our Learning Tribes"
            title="A custom-built pathway for every age."
            description="Whether your child is taking their first steps in logic or prototyping real-world software, we have a custom-built pathway for them."
          />
          <ButtonLink href="/programmes" variant="outline" className="h-10 shrink-0 px-5 text-sm">
            View All Learning Tribes
          </ButtonLink>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tribes.map((tribe, index) => (
            <Reveal key={tribe.slug} delay={index * 0.08}>
              <LearningTribeCard tribe={tribe} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
