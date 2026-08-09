import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button-link";
import { pageMetadata, eventJsonLd } from "@/lib/seo";
import { getEventPhoto } from "@/lib/photos";
import { getEventBySlug, getEvents } from "@/lib/content";

export function generateStaticParams() {
  return getEvents().map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};
  return pageMetadata({
    title: event.title,
    description: event.description,
    path: `/events/${event.slug}`,
  });
}

function formatDate(date: string, endDate?: string) {
  const opts: Intl.DateTimeFormatOptions = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
  const start = new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", opts);
  if (!endDate) return start;
  const end = new Date(`${endDate}T00:00:00`).toLocaleDateString("en-GB", opts);
  return `${start} – ${end}`;
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const isPast = event.status === "past";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(event)) }}
      />
      <PageHero eyebrow={event.category} title={event.title} description={event.description} />
      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="relative h-56 w-full overflow-hidden rounded-xl">
              <CardMedia photo={getEventPhoto(event.category)} seed={event.slug} alt={event.title} priority />
            </div>
            <p className="text-base text-muted-foreground">{event.longDescription}</p>
          </div>
          <aside className="flex h-fit flex-col gap-5 rounded-xl border border-border p-6">
            <Badge variant={isPast ? "secondary" : "default"} className={isPast ? "" : "bg-brand-emerald text-white"}>
              {isPast ? "Past Event" : "Registration Open"}
            </Badge>
            <dl className="flex flex-col gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Date</dt>
                  <dd className="text-muted-foreground">{formatDate(event.date, event.endDate)}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Time</dt>
                  <dd className="text-muted-foreground">{event.time}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Location</dt>
                  <dd className="text-muted-foreground">{event.isVirtual ? "Online" : event.location}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-0.5 size-4 shrink-0 text-brand-indigo dark:text-primary" aria-hidden />
                <div>
                  <dt className="font-medium text-foreground">Capacity</dt>
                  <dd className="text-muted-foreground">{event.capacity} attendees</dd>
                </div>
              </div>
            </dl>
            {!isPast ? (
              <ButtonLink href="/contact" className="h-11 bg-brand-indigo text-white hover:bg-brand-indigo/90">
                Register Interest
              </ButtonLink>
            ) : null}
          </aside>
        </Container>
      </section>
    </>
  );
}
