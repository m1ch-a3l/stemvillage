import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { CardMedia } from "@/components/ui/card-media";
import { stemAreaPhotos, eventCategoryPhotos, mentorshipPhoto } from "@/lib/photos";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    body: "Explore STEM areas and programmes to find where you want to start — no experience required.",
    photo: stemAreaPhotos["coding-programming"],
  },
  {
    number: "02",
    title: "Learn by Building",
    body: "Hands-on lessons, workshops and mentorship. Every session ends with something you actually made.",
    photo: stemAreaPhotos["engineering-innovation"],
  },
  {
    number: "03",
    title: "Showcase Your Work",
    body: "Present projects at showcases, competitions and community events alongside other builders.",
    photo: eventCategoryPhotos["STEM Fair"],
  },
  {
    number: "04",
    title: "Keep Growing",
    body: "Move to the next programme, join our mentorship track, or come back as a mentor yourself.",
    photo: mentorshipPhoto,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-slate-100 py-20 sm:py-24 dark:bg-slate-900">
      <Container className="flex flex-col gap-14">
        <Reveal>
          <SectionHeader
            eyebrow="How It Works"
            title="From first step to next step."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute top-10 right-0 left-0 hidden h-px bg-border lg:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="relative flex flex-col gap-3">
              <div className="relative z-10 size-20 overflow-hidden rounded-full ring-4 ring-slate-100 dark:ring-slate-900">
                <CardMedia photo={step.photo} seed={step.number} alt={step.title} sizes="80px" />
                <span className="absolute right-0 bottom-0 flex size-7 items-center justify-center rounded-full bg-brand-indigo font-heading text-xs font-bold text-white dark:bg-primary dark:text-primary-foreground">
                  {step.number}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
