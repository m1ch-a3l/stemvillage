import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { StemAreaCard } from "@/components/cards/StemAreaCard";
import { getStemAreas } from "@/lib/content";

export function StemAreasGrid() {
  const areas = getStemAreas();

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="STEM Areas"
            title="Seven areas. One consistent, hands-on approach."
            description="Every subject we teach follows the same principle: learn by building, not by memorising."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <Reveal key={area.slug} delay={(index % 3) * 0.08}>
              <StemAreaCard area={area} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
