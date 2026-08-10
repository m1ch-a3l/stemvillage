import type { Metadata } from "next";
import Image from "next/image";
import { FileText, BookOpen, Wrench, Lightbulb } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { pageMetadata } from "@/lib/seo";
import { stemAreaPhotos, getStemAreaPhoto } from "@/lib/photos";
import { getResources, getStemAreas } from "@/lib/content";
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
  const stemAreas = getStemAreas();
  const photoForArea = (areaName: string) => {
    const area = stemAreas.find((a) => a.name === areaName);
    return area ? getStemAreaPhoto(area.slug) : undefined;
  };

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
                  className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-28 w-full overflow-hidden">
                    <CardMedia photo={photoForArea(resource.stemArea)} seed={resource.slug} alt={resource.title} />
                    <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg bg-white/90 text-brand-indigo-dark shadow">
                      <Icon className="size-4.5" aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-brand-gold-soft text-brand-indigo">
                        {resource.type}
                      </Badge>
                      <Badge variant="outline">{resource.stemArea}</Badge>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                  </div>
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
