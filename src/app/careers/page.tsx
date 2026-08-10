import type { Metadata } from "next";
import { Briefcase, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/seo";
import { stemAreaPhotos } from "@/lib/photos";
import { getCareerOpenings } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Careers",
  description: "Open roles, internships and volunteer opportunities at GoStem.",
  path: "/careers",
});

export default function CareersPage() {
  const openings = getCareerOpenings();

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help build the future of STEM education."
        description="We're always interested in hearing from educators, engineers and organisers who care about making STEM accessible."
        image={stemAreaPhotos["engineering-innovation"]}
      />
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-5">
          {openings.map((opening) => (
            <div
              key={opening.slug}
              className="flex flex-col gap-3 rounded-xl border border-border p-6 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-base font-semibold text-foreground">{opening.title}</h3>
                <p className="text-sm text-muted-foreground">{opening.summary}</p>
                <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="size-3.5" aria-hidden />
                    {opening.type}
                  </span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" aria-hidden />
                    {opening.location}
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="w-fit shrink-0 bg-brand-gold-soft text-brand-indigo">
                {opening.type}
              </Badge>
            </div>
          ))}
          <div className="mt-4 flex flex-col items-center gap-4 rounded-xl bg-secondary/40 p-8 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t see the right role? We still want to hear from you.
            </p>
            <ButtonLink href="/contact" variant="outline" className="h-10 px-5 text-sm">
              Get in Touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
