import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { EventCard } from "@/components/cards/EventCard";
import { ButtonLink } from "@/components/ui/button-link";
import { getUpcomingEvents } from "@/lib/content";

export function EventsPreview() {
  const events = getUpcomingEvents().slice(0, 3);

  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Events"
            title="Upcoming events."
            description="Workshops, competitions, camps and info sessions — open to students, schools and the wider community."
          />
          <ButtonLink href="/events" variant="outline" className="h-10 shrink-0 px-5 text-sm">
            View All Events
          </ButtonLink>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Container>
    </section>
  );
}
