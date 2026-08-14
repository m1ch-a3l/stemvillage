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
        title="Building the organisation behind Ghana's next STEM generation."
        description={siteConfig.description}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative order-first h-64 w-full overflow-hidden rounded-2xl border-4 border-white shadow-lg sm:h-96 lg:order-none lg:h-full lg:min-h-[420px]">
            <Image
              src={aboutMissionPhoto}
              alt="GoStem team members collaborating"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-8">
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
            </div>
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

      <section id="mission" className="bg-slate-100 py-16 sm:py-20 dark:bg-slate-900">
        <Container className="flex flex-col gap-10">
          <SectionHeader eyebrow="Mission, Vision & Values" title="What drives our work." align="center" className="mx-auto" />
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-xl bg-card p-6 shadow-md ring-1 ring-foreground/10 transition-shadow hover:shadow-lg">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Target className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-semibold">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To make quality STEM education accessible, practical and inspiring for the next generation.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl bg-card p-6 shadow-md ring-1 ring-foreground/10 transition-shadow hover:shadow-lg">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Eye className="size-5" aria-hidden />
              </span>
              <h3 className="font-heading text-base font-semibold">Our Vision</h3>
              <p className="text-sm text-muted-foreground">
                A future where every young person has the skills and confidence to shape technology, not just
                consume it.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl bg-card p-6 shadow-md ring-1 ring-foreground/10 transition-shadow hover:shadow-lg">
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

      <section className="bg-slate-100 py-16 sm:py-20 dark:bg-slate-900">
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
        title="Want to Get Involved?"
        description="Interested in partnering with us, mentoring learners, or bringing a programme to your school?"
        primaryLabel="Explore Programmes"
        primaryHref="/programmes"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
        variant="gold"
      />
    </>
  );
}
