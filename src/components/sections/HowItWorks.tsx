import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    body: "Explore STEM areas and programmes to find where you want to start — no experience required.",
  },
  {
    number: "02",
    title: "Learn by Building",
    body: "Hands-on lessons, workshops and mentorship. Every session ends with something you actually made.",
  },
  {
    number: "03",
    title: "Showcase Your Work",
    body: "Present projects at showcases, competitions and community events alongside other builders.",
  },
  {
    number: "04",
    title: "Keep Growing",
    body: "Move to the next programme, join our mentorship track, or come back as a mentor yourself.",
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
            className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block"
          />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1} className="relative flex flex-col gap-3">
              <span className="relative z-10 flex size-14 items-center justify-center rounded-full bg-brand-indigo font-heading text-lg font-bold text-white shadow-md dark:bg-primary dark:text-primary-foreground">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
