import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { LearningTribeCard } from "@/components/cards/LearningTribeCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { heroPhotos } from "@/lib/photos";
import { getLearningTribes } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Learning Tribes",
  description: "Explore STEM Village's three Learning Tribes — Explorers, Innovators, and Architects and Builders — each a custom-built pathway for a different age group.",
  path: "/programmes",
});

export default function ProgrammesPage() {
  const tribes = getLearningTribes();

  return (
    <>
      <PageHero
        eyebrow="Our Learning Tribes"
        title="A custom-built pathway for every age."
        description="Whether your child is taking their first steps in logic or prototyping real-world software, we have a custom-built pathway for them."
        image={heroPhotos[3]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tribes.map((tribe) => (
              <LearningTribeCard key={tribe.slug} tribe={tribe} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Not sure which tribe fits?"
        description="Reach out and our team will help match your child to the right Learning Tribe."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="View Workshops"
        secondaryHref="/workshops"
      />
    </>
  );
}
