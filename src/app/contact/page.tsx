import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { workshopPhotos } from "@/lib/photos";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with GoStem for general enquiries, programme information, or partnership discussions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        description="Whether it's a general question, a programme enquiry, or a partnership discussion — reach out and our team will follow up."
        image={workshopPhotos["corporate-innovation-sprint"]}
      />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="flex flex-col gap-3 rounded-xl border border-border p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Mail className="size-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-foreground">General Enquiries</h3>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Mail className="size-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-foreground">Partnership Enquiries</h3>
              <a href={`mailto:${siteConfig.partnershipsEmail}`} className="text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.partnershipsEmail}
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Mail className="size-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-foreground">Programme Enquiries</h3>
              <a href={`mailto:${siteConfig.programmesEmail}`} className="text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.programmesEmail}
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <Phone className="size-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-foreground">Phone</h3>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm text-muted-foreground hover:text-foreground">
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-border p-6">
              <span className="flex size-10 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
                <MapPin className="size-5" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
            </div>
          </div>
          <div className="rounded-xl border border-border p-6 sm:p-8 lg:col-span-2">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
