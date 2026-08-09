import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { ButtonLink } from "@/components/ui/button-link";
import { getPartners } from "@/lib/content";

export function PartnersStrip() {
  const partners = getPartners();

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader eyebrow="Partners" title="Organisations we work with." />
          <ButtonLink href="/partners" variant="outline" className="h-10 shrink-0 px-5 text-sm">
            Become a Partner
          </ButtonLink>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 flex-col items-center justify-center gap-1 rounded-lg border border-border px-3 text-center"
            >
              <span className="text-xs font-semibold text-foreground/80">{partner.name}</span>
              <span className="text-[10px] text-muted-foreground">{partner.category}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
