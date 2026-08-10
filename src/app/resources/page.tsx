import type { Metadata } from "next";
import Image from "next/image";
import { FileText, BookOpen, Wrench, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { pageMetadata } from "@/lib/seo";
import { stemAreaPhotos } from "@/lib/photos";
import { getResources } from "@/lib/content";
import type { Resource } from "@/types/content";

export const metadata: Metadata = pageMetadata({
  title: "Resources",
  description: "Free STEM guides, tutorials, articles and project ideas for learners, parents and teachers.",
  path: "/resources",
});

const typeIcon: Record<Resource["type"], typeof FileText> = {
  Guide: BookOpen,
  Tutorial: BookOpen,
  Article: FileText,
  PDF: FileText,
  Tool: Wrench,
  "Project Idea": Lightbulb,
};

export default function ResourcesPage() {
  const resources = getResources();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Free STEM learning resources."
        description="Guides, tutorials, tools and project ideas — a growing library for learners, parents and teachers to use anytime."
        image={stemAreaPhotos["mathematics-science"]}
      />
      <section className="py-16 sm:pt-20 sm:pb-8">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-72">
            <Image
              src={stemAreaPhotos["coding-programming"]}
              alt="Learner working through a STEM resource"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeader
              eyebrow="Built for self-paced learning"
              title="Resources built to be used, not just downloaded."
            />
            <p className="text-muted-foreground">
              Every guide and project idea here is written the same way we teach in our
              programmes — practical first, theory second. Free to use, no account required.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8 sm:pt-8 sm:pb-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = typeIcon[resource.type];
              return (
                <div
                  key={resource.slug}
                  className="flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-brand-gold-soft text-brand-indigo">
                      {resource.type}
                    </Badge>
                    <Badge variant="outline">{resource.stemArea}</Badge>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            More resources are added regularly — check back or subscribe to our newsletter for updates.
          </p>
        </Container>
      </section>
    </>
  );
}
