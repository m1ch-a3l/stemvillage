import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/layout/Container";
import { EventCard } from "@/components/cards/EventCard";
import { pageMetadata } from "@/lib/seo";
import { eventCategoryPhotos } from "@/lib/photos";
import { getUpcomingEvents, getPastEvents } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Events",
  description: "Upcoming and past GoStem events — workshops, competitions, hackathons, STEM fairs and info sessions.",
  path: "/events",
});

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, competitions and community events."
        description="Open to students, schools, parents and the wider community."
        image={eventCategoryPhotos.Hackathon}
      />
      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-8">
            <h2 className="font-heading text-2xl font-bold">Upcoming Events</h2>
            {upcoming.length ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No upcoming events are scheduled right now — check back soon or subscribe to our newsletter.
              </p>
            )}
          </div>
          {past.length ? (
            <div className="flex flex-col gap-8">
              <h2 className="font-heading text-2xl font-bold">Past Events</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {past.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
