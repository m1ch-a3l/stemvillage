import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getProgrammes } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Programmes",
  description: "Explore STEMAide's structured STEM programmes — from STEM for Kids to Coding Bootcamp and Career Mentorship.",
  path: "/programmes",
});

export default function ProgrammesPage() {
  const programmes = getProgrammes();

  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="A programme for every stage of the STEM journey."
        description="Structured, hands-on learning paths for kids, teens, adults, schools and communities."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.slug} programme={programme} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Not sure which programme fits?"
        description="Reach out and our team will help match you or your child to the right programme."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View STEM Areas"
        secondaryHref="/stem-areas"
      />
    </>
  );
}
