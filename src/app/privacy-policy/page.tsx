import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses and protects personal information.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Last updated: August 2026" />
      <section className="py-16 sm:py-20">
        <Container className="mx-auto flex max-w-3xl flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <p className="rounded-lg border border-border bg-secondary/40 p-4 text-xs">
            This is a standard template policy pending review by qualified legal counsel before publication.
            Replace placeholder details (organisation registration information, data protection contact) with
            verified information.
          </p>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a contact,
              enrolment, or partnership enquiry form — including your name, email address, phone number, and
              any message content you submit. We also collect basic technical information (such as browser
              type and pages visited) through standard website analytics.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">2. How We Use Information</h2>
            <p>
              We use the information we collect to respond to enquiries, process programme registrations,
              communicate about programmes and events, and improve our website and services. We do not sell
              personal information to third parties.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">3. Information Sharing</h2>
            <p>
              We do not share personal information with third parties except where necessary to operate our
              services (such as email delivery providers), to comply with the law, or with your explicit
              consent.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">4. Data Retention & Security</h2>
            <p>
              We retain personal information only as long as necessary for the purposes described in this
              policy, and take reasonable technical and organisational measures to protect it against
              unauthorised access, loss or misuse.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">5. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information by
              contacting us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-indigo underline dark:text-primary">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">6. Children&apos;s Privacy</h2>
            <p>
              Several of our programmes serve minors. Where a learner is under 18, we collect and process
              their information with the consent and involvement of a parent or guardian.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. Material changes will be reflected by an updated
              &ldquo;last updated&rdquo; date on this page.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-semibold text-foreground">8. Contact Us</h2>
            <p>
              Questions about this policy can be sent to{" "}
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
