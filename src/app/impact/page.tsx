import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { StatCounter } from "@/components/layout/StatCounter";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getImpactPhoto, aboutMissionPhoto } from "@/lib/photos";
import { getImpactStats, getImpactStories } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Impact",
  description: "GoStem's impact across learners, schools, communities and projects.",
  path: "/impact",
});

export default function ImpactPage() {
  const stats = getImpactStats();
  const stories = getImpactStories();

  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Measuring what matters."
        description="A look at the reach of our programmes so far — and our commitment to reporting on it honestly as we grow."
        image={aboutMissionPhoto}
      />
      <section className="border-b border-border bg-secondary/40 py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} label={stat.label} description={stat.description} />
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            Figures shown are placeholder estimates pending verified reporting data — not audited statistics.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Stories"
            title="Impact across learners, schools and communities."
            description="Representative, placeholder impact narratives — to be replaced with verified stories as we formalise our reporting."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {stories.map((story) => (
              <div key={story.title} className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 sm:flex-row">
                <div className="relative h-40 w-full overflow-hidden sm:h-auto sm:w-48 sm:shrink-0">
                  <CardMedia photo={getImpactPhoto(story.category)} seed={story.title} alt={story.title} />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <Badge variant="secondary" className="w-fit bg-brand-gold-soft text-brand-indigo">
                    {story.category}
                  </Badge>
                  <h3 className="font-heading text-base font-semibold text-foreground">{story.title}</h3>
                  <p className="text-sm text-muted-foreground">{story.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <CTASection
        title="Help us grow this impact."
        description="Every partnership, donation or volunteer hour extends what we can offer learners."
        primaryLabel="Get Involved"
        primaryHref="/contact"
        secondaryLabel="Become a Partner"
        secondaryHref="/schools-partnerships"
      />
    </>
  );
}
