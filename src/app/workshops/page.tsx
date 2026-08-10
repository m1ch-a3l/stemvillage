import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getWorkshopPhoto } from "@/lib/photos";
import { getWorkshops } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Workshops",
  description: "Hands-on technology workshops for students, schools and organisations — single-day and short-format STEM sessions.",
  path: "/workshops",
});

export default function WorkshopsPage() {
  const workshops = getWorkshops();

  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title="Short-format, hands-on STEM sessions."
        description="Single-day and half-day workshops for students, schools and organisations — no long-term commitment required."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {workshops.map((workshop) => (
              <div
                key={workshop.slug}
                className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
              >
                <div className="relative h-32 w-full overflow-hidden">
                  <CardMedia photo={getWorkshopPhoto(workshop.slug)} seed={workshop.slug} alt={workshop.title} />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                    <Layers className="size-4.5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-base font-semibold text-foreground">{workshop.title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground">{workshop.description}</p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Badge variant="outline">{workshop.audience}</Badge>
                    {workshop.deliveryModes.map((mode) => (
                      <Badge key={mode} variant="secondary" className="bg-brand-gold-soft text-brand-indigo">
                        {mode}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection
        title="Bring a workshop to your school or organisation."
        primaryLabel="Request a Workshop"
        primaryHref="/contact"
        secondaryLabel="View Schools & Partnerships"
        secondaryHref="/schools-partnerships"
      />
    </>
  );
}
