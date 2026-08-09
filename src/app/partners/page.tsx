import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { pageMetadata } from "@/lib/seo";
import { getPartners } from "@/lib/content";
import type { Partner } from "@/types/content";

export const metadata: Metadata = pageMetadata({
  title: "Partners",
  description: "Schools, companies, NGOs, universities and government organisations partnering with STEMAide.",
  path: "/partners",
});

export default function PartnersPage() {
  const partners = getPartners();
  const categories = Array.from(new Set(partners.map((p) => p.category)));

  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Organisations investing in STEM education."
        description="We work alongside schools, companies, NGOs, universities and government partners to expand access to STEM education."
      />
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-6">
              <SectionHeader title={category as string} />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {partners
                  .filter((p) => p.category === category)
                  .map((partner: Partner) => (
                    <div
                      key={partner.name}
                      className="flex h-24 flex-col items-center justify-center gap-1 rounded-lg border border-border px-3 text-center"
                    >
                      <span className="text-sm font-semibold text-foreground/80">{partner.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
      <CTASection
        title="Become a partner."
        description="Sponsor a programme, host a workshop, or provide mentors — there are many ways to get involved."
        primaryLabel="Start a Conversation"
        primaryHref="/schools-partnerships"
      />
    </>
  );
}
