import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Sparkles, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CardMedia } from "@/components/ui/card-media";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getProgrammePhoto } from "@/lib/photos";
import { getLearningTribeBySlug, getLearningTribes } from "@/lib/content";

export function generateStaticParams() {
  return getLearningTribes().map((tribe) => ({ slug: tribe.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tribe = getLearningTribeBySlug(slug);
  if (!tribe) return {};
  return pageMetadata({
    title: tribe.name,
    description: tribe.motto,
    path: `/programmes/${tribe.slug}`,
  });
}

export default async function LearningTribeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tribe = getLearningTribeBySlug(slug);
  if (!tribe) notFound();

  return (
    <>
      <PageHero eyebrow="Learning Tribe" title={tribe.name} description={tribe.motto} />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              <CardMedia
                photo={getProgrammePhoto(tribe.slug)}
                seed={tribe.slug}
                alt={tribe.name}
                priority
              />
            </div>
            <p className="text-base text-muted-foreground">{tribe.vibe}</p>
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-lg font-semibold">What They Do</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {tribe.whatTheyDo.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-xl bg-card p-5 shadow-md ring-1 ring-foreground/10"
                  >
                    <span className="flex size-9 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                      <Sparkles className="size-4.5" aria-hidden />
                    </span>
                    <h3 className="font-heading text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="flex h-fit flex-col gap-4 rounded-xl border border-border p-6">
            <h2 className="font-heading text-base font-semibold">Tribe Details</h2>
            <dl className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Age Group</dt>
                  <dd className="text-muted-foreground">{tribe.ageGroup}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Motto</dt>
                  <dd className="text-muted-foreground">{tribe.motto}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Key Outcome</dt>
                  <dd className="text-muted-foreground">{tribe.keyOutcome}</dd>
                </div>
              </div>
            </dl>
          </aside>
        </Container>
      </section>
      <CTASection
        title={`Ready to join ${tribe.name}?`}
        primaryLabel="Enquire Now"
        primaryHref="/contact"
        secondaryLabel="View All Learning Tribes"
        secondaryHref="/programmes"
      />
    </>
  );
}
