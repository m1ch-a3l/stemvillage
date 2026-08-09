import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using ${siteConfig.name}'s website and programmes.`,
  path: "/terms-conditions",
});

export default function TermsConditionsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" description="Last updated: August 2026" />
      <section className="py-16 sm:py-20">
        <Container className="mx-auto flex max-w-3xl flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <p className="rounded-lg border border-border bg-secondary/40 p-4 text-xs">
            This is a standard template terms document pending review by qualified legal counsel before
            publication.
          </p>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing this website or enrolling in a {siteConfig.name} programme, you agree to be bound
              by these terms and conditions. If you do not agree, please do not use our website or services.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">2. Use of the Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in a way that does not infringe the
              rights of, or restrict or inhibit the use and enjoyment of, this site by any third party.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">3. Programme Enrolment</h2>
            <p>
              Enrolment in any programme is subject to availability and any applicable eligibility criteria
              described on the relevant programme page. Where fees apply, payment terms will be communicated
              separately at the time of enrolment.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos and curriculum materials — is the
              property of {siteConfig.legalName} unless otherwise stated, and may not be reproduced without
              permission.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              {siteConfig.legalName} will not be liable for any indirect, incidental or consequential damages
              arising from the use of this website or participation in our programmes, to the fullest extent
              permitted by law.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">6. Changes to These Terms</h2>
            <p>
              We may revise these terms at any time. Continued use of the website after changes are posted
              constitutes acceptance of the revised terms.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">7. Governing Law</h2>
            <p>These terms are governed by the laws of Ghana.</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">8. Contact Us</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-indigo underline dark:text-primary">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
