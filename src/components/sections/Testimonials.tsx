import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { CardMedia } from "@/components/ui/card-media";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { eventCategoryPhotos } from "@/lib/photos";
import { getTestimonials } from "@/lib/content";

export function Testimonials() {
  const testimonials = getTestimonials();
  const [first, second, third, fourth, fifth, sixth] = testimonials.slice(0, 6);

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow="Voices"
            title="What our community says."
            description="Placeholder testimonials representative of learner, parent and partner feedback — replace with real, permissioned quotes before launch."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0}>
            <TestimonialCard testimonial={first} />
          </Reveal>
          <Reveal delay={0.08}>
            <TestimonialCard testimonial={second} />
          </Reveal>
          <Reveal delay={0.16} className="relative hidden h-full min-h-[220px] overflow-hidden rounded-xl sm:block">
            <CardMedia
              photo={eventCategoryPhotos["STEM Fair"]}
              seed="testimonials-feature"
              alt="Learners and families at a GoStem community event"
            />
          </Reveal>
          <Reveal delay={0.24}>
            <TestimonialCard testimonial={third} />
          </Reveal>
          <Reveal delay={0.32}>
            <TestimonialCard testimonial={fourth} />
          </Reveal>
          <Reveal delay={0.4}>
            <TestimonialCard testimonial={fifth} />
          </Reveal>
        </div>
        <Reveal delay={0.4} className="sm:hidden">
          <TestimonialCard testimonial={sixth} />
        </Reveal>
      </Container>
    </section>
  );
}
