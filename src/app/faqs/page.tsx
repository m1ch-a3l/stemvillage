import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { heroPhotos } from "@/lib/photos";
import { getFaqs } from "@/lib/content";
import type { Faq } from "@/types/content";

export const metadata: Metadata = pageMetadata({
  title: "FAQs",
  description: "Frequently asked questions about GoStem programmes, schools, partnerships and volunteering.",
  path: "/faqs",
});

export default function FaqsPage() {
  const faqs = getFaqs();
  const categories = Array.from(new Set(faqs.map((f) => f.category))) as Faq["category"][];

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions."
        description="Answers to common questions about our programmes, schools, partnerships and volunteering."
        image={heroPhotos[0]}
      />
      <section className="py-16 sm:py-20">
        <Container className="mx-auto flex max-w-3xl flex-col gap-12">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-4">
              <h2 className="font-heading text-xl font-bold text-foreground">{category}</h2>
              <Accordion>
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq, index) => (
                    <AccordionItem key={faq.question} value={`${category}-${index}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          ))}
        </Container>
      </section>
      <CTASection
        title="Still have a question?"
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
