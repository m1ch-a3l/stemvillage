import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { ButtonLink } from "@/components/ui/button-link";
import { getFeaturedProgrammes } from "@/lib/content";

export function ProgrammesGrid() {
  const programmes = getFeaturedProgrammes();

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Programmes"
            title="Structured programmes for every stage."
            description="From a first introduction to coding to a full career-mentorship track — find the programme that matches where a learner is today."
          />
          <ButtonLink href="/programmes" variant="outline" className="h-10 shrink-0 px-5 text-sm">
            View All Programmes
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Container>
    </section>
  );
}
