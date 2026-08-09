import type { Metadata } from "next";
import { CheckCircle2, School, Building2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PartnershipForm } from "@/components/forms/PartnershipForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Schools & Partnerships",
  description: "Partner with STEMAide as a school or organisation — workshops, curriculum partnerships, sponsorship and corporate training.",
  path: "/schools-partnerships",
});

const schoolBenefits = [
  "Request STEM workshops for your students",
  "Build a full-year School STEM Programme",
  "Register groups of students for programmes",
  "Access curriculum and teacher-training support",
];

const orgBenefits = [
  "Request corporate STEM training for your team",
  "Book workshops or innovation sprints",
  "Sponsor programmes or equipment",
  "Become an official STEMAide partner",
];

export default function SchoolsPartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Schools & Partnerships"
        title="Bring STEM to your school or organisation."
        description="Whether you're a school looking to build STEM capacity, or an organisation looking to invest in the next generation, we build partnerships around your specific goals."
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-xl border border-border p-6">
            <span className="flex size-11 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
              <School className="size-5.5" aria-hidden />
            </span>
            <h2 className="font-heading text-lg font-semibold">For Schools</h2>
            <ul className="flex flex-col gap-2">
              {schoolBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-border p-6">
            <span className="flex size-11 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
              <Building2 className="size-5.5" aria-hidden />
            </span>
            <h2 className="font-heading text-lg font-semibold">For Organisations</h2>
            <ul className="flex flex-col gap-2">
              {orgBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-emerald" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-16 sm:py-20">
        <Container className="mx-auto flex max-w-2xl flex-col gap-8">
          <SectionHeader
            eyebrow="Get In Touch"
            title="Submit a partnership enquiry."
            description="Tell us a little about your school or organisation and we'll follow up to discuss options."
          />
          <PartnershipForm />
        </Container>
      </section>
    </>
  );
}
