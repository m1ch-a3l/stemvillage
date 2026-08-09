import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { getTestimonials } from "@/lib/content";

export function Testimonials() {
  const testimonials = getTestimonials();

  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Voices"
          title="What our community says."
          description="Placeholder testimonials representative of learner, parent and partner feedback — replace with real, permissioned quotes before launch."
          align="center"
          className="mx-auto"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
