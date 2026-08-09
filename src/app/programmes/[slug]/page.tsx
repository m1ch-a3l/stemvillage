import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Users, MonitorSmartphone } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CardMedia } from "@/components/ui/card-media";
import { StemAreaCard } from "@/components/cards/StemAreaCard";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getProgrammePhoto } from "@/lib/photos";
import { getProgrammeBySlug, getProgrammes, getStemAreas } from "@/lib/content";

export function generateStaticParams() {
  return getProgrammes().map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) return {};
  return pageMetadata({
    title: programme.title,
    description: programme.tagline,
    path: `/programmes/${programme.slug}`,
  });
}

export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const programme = getProgrammeBySlug(slug);
  if (!programme) notFound();

  const areas = getStemAreas().filter((area) => programme.stemAreas.includes(area.slug));

  return (
    <>
      <PageHero eyebrow="Programme" title={programme.title} description={programme.tagline} />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              <CardMedia
                photo={getProgrammePhoto(programme.stemAreas)}
                seed={programme.slug}
                alt={programme.title}
                priority
              />
            </div>
            <p className="text-base text-muted-foreground">{programme.description}</p>
            {areas.length ? (
              <div className="flex flex-col gap-4">
                <h2 className="font-heading text-lg font-semibold">STEM Areas Covered</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {areas.map((area) => (
                    <StemAreaCard key={area.slug} area={area} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <aside className="flex h-fit flex-col gap-4 rounded-xl border border-border p-6">
            <h2 className="font-heading text-base font-semibold">Programme Details</h2>
            <dl className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Audience</dt>
                  <dd className="text-muted-foreground">{programme.audience}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MonitorSmartphone className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Format</dt>
                  <dd className="text-muted-foreground">{programme.format}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Duration</dt>
                  <dd className="text-muted-foreground">{programme.duration}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Enrolment</dt>
                  <dd className="text-muted-foreground">Contact us to check current availability.</dd>
                </div>
              </div>
            </dl>
          </aside>
        </Container>
      </section>
      <CTASection
        title={`Ready to join ${programme.title}?`}
        primaryLabel="Enquire Now"
        primaryHref="/contact"
        secondaryLabel="View All Programmes"
        secondaryHref="/programmes"
      />
    </>
  );
}
