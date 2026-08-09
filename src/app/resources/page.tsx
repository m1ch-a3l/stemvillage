import type { Metadata } from "next";
import { FileText, BookOpen, Wrench, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { pageMetadata } from "@/lib/seo";
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
      />
      <section className="py-16 sm:py-20">
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
