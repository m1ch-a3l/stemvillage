import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { ProgrammeCard } from "@/components/cards/ProgrammeCard";
import { CardMedia } from "@/components/ui/card-media";
import { stemAreaIconMap } from "@/lib/icons";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getStemAreaPhoto } from "@/lib/photos";
import { getStemAreaBySlug, getStemAreas, getProgrammes } from "@/lib/content";

export function generateStaticParams() {
  return getStemAreas().map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getStemAreaBySlug(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.name,
    description: area.shortDescription,
    path: `/stem-areas/${area.slug}`,
  });
}

export default async function StemAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getStemAreaBySlug(slug);
  if (!area) notFound();

  const Icon = stemAreaIconMap[area.icon];
  const relatedProgrammes = getProgrammes().filter((p) => p.stemAreas.includes(area.slug));

  return (
    <>
      <PageHero eyebrow="STEM Area" title={area.name} description={area.shortDescription} />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              <CardMedia photo={getStemAreaPhoto(area.slug)} seed={area.slug} alt={area.name} priority />
            </div>
            <span className="flex size-14 items-center justify-center rounded-xl bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
              <Icon className="size-7" aria-hidden />
            </span>
            <p className="text-base text-muted-foreground">{area.description}</p>
          </div>
          <aside className="flex h-fit flex-col gap-4 rounded-xl border border-border p-6">
            <h2 className="font-heading text-base font-semibold">Skills You&apos;ll Build</h2>
            <ul className="flex flex-col gap-2">
              {area.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                  {skill}
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
      {relatedProgrammes.length ? (
        <section className="bg-secondary/40 py-16 sm:py-20">
          <Container className="flex flex-col gap-8">
            <h2 className="font-heading text-2xl font-bold">Programmes in this area</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProgrammes.map((programme) => (
                <ProgrammeCard key={programme.slug} programme={programme} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
      <CTASection
        title={`Ready to explore ${area.name}?`}
        primaryLabel="View Programmes"
        primaryHref="/programmes"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
