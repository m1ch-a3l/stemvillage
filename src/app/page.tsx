import { Hero } from "@/components/sections/Hero";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { MissionSection } from "@/components/sections/MissionSection";
import { StemAreasGrid } from "@/components/sections/StemAreasGrid";
import { ProgrammesGrid } from "@/components/sections/ProgrammesGrid";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhySTEMatters } from "@/components/sections/WhySTEMatters";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionSection />
      <StemAreasGrid />
      <ProgrammesGrid />
      <WhatWeDo />
      <WhySTEMatters />
      <ProjectsShowcase />
      <EventsPreview />
      <Testimonials />
      <PartnersStrip />
      <BlogPreview />
      <CTASection
        title="Your STEM journey starts here."
        description="Whether you're a learner, a parent, a school or an organisation — there's a way to get involved."
        primaryLabel="Start Learning"
        primaryHref="/programmes"
        secondaryLabel="Partner With Us"
        secondaryHref="/schools-partnerships"
      />
    </>
  );
}
