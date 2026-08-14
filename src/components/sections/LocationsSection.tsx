import { MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { getLocations } from "@/lib/content";

export function LocationsSection() {
  const locations = getLocations();

  return (
    <section className="bg-slate-100 py-20 sm:py-24 dark:bg-slate-900">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="Locations"
            title="Choose the campus that works best for your family."
            description="We are bringing STEM Village closer to you! Choose the campus location that works best for your family:"
          />
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {locations.map((location, index) => (
            <Reveal key={location.slug} delay={index * 0.1}>
              <div className="flex h-full flex-col gap-3 rounded-xl bg-card p-6 shadow-md ring-1 ring-foreground/10">
                <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">{location.name}</h3>
                <p className="text-sm text-muted-foreground">{location.highlights}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
