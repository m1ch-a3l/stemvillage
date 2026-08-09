import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getMentors } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Mentors",
  description: "Meet the STEM professionals mentoring STEMAide learners, and learn how to become a mentor yourself.",
  path: "/mentors",
});

export default function MentorsPage() {
  const mentors = getMentors();

  return (
    <>
      <PageHero
        eyebrow="Mentors"
        title="Working professionals guiding the next generation."
        description="Our mentors volunteer their time to give learners honest, practical career guidance."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((mentor) => (
              <TeamMemberCard
                key={mentor.slug}
                slug={mentor.slug}
                name={mentor.name}
                role={`${mentor.title} · ${mentor.focusArea}`}
                bio={mentor.bio}
              />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Interested in mentoring?"
        description="We're always looking for STEM professionals to join our mentorship programme."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        secondaryLabel="View Programmes"
        secondaryHref="/programmes"
      />
    </>
  );
}
