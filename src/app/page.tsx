import { Hero } from "@/components/sections/Hero";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { MissionSection } from "@/components/sections/MissionSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { ProgrammesGrid } from "@/components/sections/ProgrammesGrid";
import { LocationsSection } from "@/components/sections/LocationsSection";
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
      <ProgrammesGrid />
      <LocationsSection />
      <ImageTextSection
        image={heroPhotos[2]}
        imageAlt="Innovators building and wiring hardware"
        eyebrow="The Innovators"
        title="Connecting Theoretical Knowledge to Real-World Power."
        description="Dynamic, inquisitive, and solution-driven! The Innovators are ready to move beyond basic concepts. They dig under the hood of technology to understand how things work, bridging the gap between imagination and execution."
        ctaLabel="Explore The Innovators"
        ctaHref="/programmes/innovators"
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
        title="Ready to Join the Village?"
        description="Seats for our Pilot Cohort are intentionally limited to maintain small student-to-mentor ratios."
        primaryLabel="Reserve Your Student's Spot"
        primaryHref="/contact"
        secondaryLabel="Call to Schedule a Visit"
        secondaryHref="tel:+233543771181"
      />
    </>
  );
}
