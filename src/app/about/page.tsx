import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, Users, Quote } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { aboutMissionPhoto } from "@/lib/photos";

// Placeholder organisational history — replace with verified milestones.
const milestones = [
  { year: "2021", title: "Founded", body: "GoStem started with a single after-school coding club in Accra." },
  { year: "2022", title: "Robotics Academy launches", body: "First cohort of STEM for Kids and Robotics Academy learners graduate." },
  { year: "2023", title: "First school partnerships", body: "GoStem signs its first partner schools and launches the STEM Clubs programme." },
  { year: "2024", title: "AI programme & mentor network", body: "AI & Machine Learning programme launches; volunteer mentor network passes 20 mentors." },
  { year: "2025", title: "Community outreach expands", body: "Outreach reaches underserved regions; first Coding Bootcamp cohort graduates." },
  { year: "2026", title: "Continuing to grow", body: "Expanding programme reach and school partnerships nationwide." },
];

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description: `Learn about ${siteConfig.name}'s mission, vision and values, and the story behind our STEM education programmes.`,
  path: "/about",
});

const values = [
  { title: "Access", body: "STEM education should not depend on background or postcode — we design for reach." },
  { title: "Hands-On Learning", body: "Every programme centres on building, not just watching or listening." },
  { title: "Community", body: "Learning sticks when it happens alongside mentors, peers and family." },
  { title: "Integrity", body: "We report honestly on outcomes and never overstate our impact." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={`About Us · Est. ${siteConfig.foundedYear}`}
        title="Building the organisation behind Ghana's next STEM generation."
        description={siteConfig.description}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="relative h-56 w-full overflow-hidden rounded-xl sm:h-80">
            <Image
              src={aboutMissionPhoto}
              alt="GoStem team members collaborating"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </Container>
      </section>

      <section className="py-4 sm:py-6">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            <SectionHeader eyebrow="Who We Are" title="A STEM education and innovation organisation." />
            <p className="text-muted-foreground">
              {siteConfig.name} runs hands-on technology and science programmes for students, schools,
              organisations and communities. We started from a simple observation: STEM subjects are usually
              taught in the abstract, when what actually builds confidence and skill is building something
              real, seeing it work, and iterating when it doesn&apos;t.
            </p>
            <p className="text-muted-foreground">
              Today that means coding classes for teens, robotics labs, AI literacy sessions, school
              partnerships, and community outreach — all built around the same practical, project-based
              approach.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeader eyebrow="What We Believe" title="Technology education should build builders." />
            <p className="text-muted-foreground">
              We believe the gap between &ldquo;using technology&rdquo; and &ldquo;building technology&rdquo;
              is closing fast — and that the young people who close it early will have significantly more
              opportunity ahead of them, regardless of the career path they ultimately choose.
            </p>
            <p className="text-muted-foreground">
              That belief shapes everything from our curriculum design to how we measure success: not by
              attendance, but by what a learner can build by the end of a programme.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-brand-indigo px-8 py-12 text-center text-white sm:px-14">
            <Quote className="size-8 text-brand-gold" aria-hidden />
            <p className="font-heading text-xl leading-snug font-medium text-balance sm:text-2xl">
              &ldquo;We didn&apos;t want to teach STEM the way it was taught to us — from a textbook,
              once a term. We wanted learners building something real from their very first
              session, because that&apos;s when curiosity turns into confidence.&rdquo;
            </p>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold">Founder &amp; Executive Director</span>
              <span className="text-xs text-white/60">{siteConfig.name}, founded {siteConfig.foundedYear}</span>
            </div>
          </div>
        </Container>
      </section>

      <section id="mission" className="bg-secondary/40 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow="Mission, Vision & Values" title="What drives our work." align="center" className="mx-auto" />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Target className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-semibold">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To make quality STEM education accessible, practical and inspiring for the next generation.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Eye className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-semibold">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                A future where every young person has the skills and confidence to shape technology, not just
                consume it.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Heart className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-semibold">Our Values</h3>
              <p className="text-sm text-muted-foreground">
                Access, hands-on learning, community and integrity guide every programme decision we make.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-border p-4">
                <h4 className="text-sm font-semibold text-foreground">{value.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeader
            eyebrow="Our Journey"
            title="How we got here."
            description="Placeholder milestones — to be replaced with verified organisational history."
            align="center"
            className="mx-auto"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col gap-8 before:absolute before:top-1 before:bottom-1 before:left-[27px] before:w-px before:bg-border sm:before:left-[31px]">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative flex gap-5">
                <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-indigo font-heading text-sm font-bold text-white dark:bg-primary dark:text-primary-foreground">
                  {milestone.year}
                </span>
                <div className="flex flex-col gap-1 pt-2.5">
                  <h3 className="font-heading text-base font-semibold text-foreground">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-brand-gold-soft text-brand-indigo">
            <Users className="size-6" aria-hidden />
          </span>
          <h2 className="text-2xl font-bold sm:text-3xl">Meet the people behind the programmes.</h2>
          <p className="max-w-xl text-muted-foreground">
            Our team combines backgrounds in education, engineering and community outreach.
          </p>
          <ButtonLink href="/team" variant="outline" className="h-10 px-5 text-sm">
            Meet Our Team
          </ButtonLink>
        </Container>
      </section>

      <CTASection
        title="Careers to Explore, or a Team to Join"
        description="Interested in working with us, mentoring learners, or exploring open roles?"
        primaryLabel="View Careers"
        primaryHref="/careers"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="gold"
      />
    </>
  );
}
