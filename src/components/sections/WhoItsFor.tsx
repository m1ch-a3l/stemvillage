import Link from "next/link";
import { ArrowRight, GraduationCap, Heart, School, Building2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { CardMedia } from "@/components/ui/card-media";
import { heroPhotos, aboutMissionPhoto, eventCategoryPhotos, workshopPhotos } from "@/lib/photos";

const pathways = [
  {
    eyebrow: "Ages 8–18+",
    title: "Students",
    body: "Browse programmes, join a workshop, and build your first project — from your first line of code to your first robot.",
    href: "/programmes",
    icon: GraduationCap,
    photo: heroPhotos[1],
  },
  {
    eyebrow: "Guardians",
    title: "Parents",
    body: "Find the right programme for your child and follow their progress through hands-on STEM learning.",
    href: "/programmes",
    icon: Heart,
    photo: aboutMissionPhoto,
  },
  {
    eyebrow: "Educators",
    title: "Schools",
    body: "Bring workshops, curriculum support, or a full-year STEM programme into your classroom.",
    href: "/schools-partnerships",
    icon: School,
    photo: eventCategoryPhotos["School Visit"],
  },
  {
    eyebrow: "Companies & NGOs",
    title: "Organisations",
    body: "Sponsor a programme, fund equipment, or run a corporate STEM workshop for your team.",
    href: "/schools-partnerships",
    icon: Building2,
    photo: workshopPhotos["corporate-innovation-sprint"],
  },
];

export function WhoItsFor() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="Who It's For"
            title="Built for everyone in the STEM ecosystem."
            description="Whichever role brought you here, there's a clear next step."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map(({ eyebrow, title, body, href, icon: Icon, photo }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Link
                href={href}
                className="group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-28 w-full overflow-hidden">
                  <CardMedia photo={photo} seed={title} alt={title} />
                  <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg bg-white/90 text-brand-indigo-dark shadow">
                    <Icon className="size-4.5" aria-hidden />
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {eyebrow}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
                  <p className="flex-1 text-sm text-muted-foreground">{body}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-indigo dark:text-primary">
                    Get started
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
