import { Hero } from "@/components/sections/Hero";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { MissionSection } from "@/components/sections/MissionSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { StemAreasGrid } from "@/components/sections/StemAreasGrid";
import { ProgrammesGrid } from "@/components/sections/ProgrammesGrid";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import { WhySTEMatters } from "@/components/sections/WhySTEMatters";
import { ActivitiesGallery } from "@/components/sections/ActivitiesGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { heroPhotos, mentorshipPhoto } from "@/lib/photos";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <MissionSection />
      <HowItWorks />
      <WhatWeDo />
      <StemAreasGrid />
      <ProgrammesGrid />
      <ImageTextSection
        image={heroPhotos[2]}
        imageAlt="Robotics Academy learners building a robot"
        eyebrow="Robotics Academy"
        title="Built for hands-on discovery."
        description="From a first circuit to a fully autonomous build — learners in our Robotics Academy spend more time building than listening, with mentors on hand for the moments that need a second pair of eyes."
        ctaLabel="Explore Robotics Academy"
        ctaHref="/programmes/robotics-academy"
        imageSide="right"
      />
      <WhySTEMatters />
      <ActivitiesGallery />
      <ImageTextSection
        image={mentorshipPhoto}
        imageAlt="A GoStem mentor guiding a learner"
        eyebrow="Mentorship"
        title="Guidance from people who've done it."
        description="Every learner in our Career & Mentorship track is paired with a working STEM professional — honest conversations about what a career actually looks like, not just what it takes to get one."
        ctaLabel="Meet Our Mentors"
        ctaHref="/mentors"
        imageSide="left"
        background="tint"
      />
      <Testimonials />
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
