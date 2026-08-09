import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { StemAreaCard } from "@/components/cards/StemAreaCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getStemAreas } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "STEM Areas",
  description: "Explore the seven STEM areas STEMAide teaches — coding, robotics, AI, data science, cybersecurity, mathematics and engineering.",
  path: "/stem-areas",
});

export default function StemAreasPage() {
  const areas = getStemAreas();

  return (
    <>
      <PageHero
        eyebrow="STEM Areas"
        title="Seven areas. One hands-on approach."
        description="Every subject we teach follows the same principle: learn by building, not by memorising."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <StemAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Find a programme built around these skills."
        primaryLabel="Explore Programmes"
        primaryHref="/programmes"
        secondaryLabel="View Workshops"
        secondaryHref="/workshops"
      />
    </>
  );
}
