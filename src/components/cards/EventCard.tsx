import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { getEventPhoto } from "@/lib/photos";
import type { EventItem } from "@/types/content";

function formatDate(date: string, endDate?: string) {
  const start = new Date(`${date}T00:00:00`);
  const startLabel = start.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  if (!endDate) return startLabel;
  const end = new Date(`${endDate}T00:00:00`);
  const endLabel = end.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  return `${startLabel} – ${endLabel}`;
}

const statusLabel: Record<EventItem["status"], string> = {
  upcoming: "Upcoming",
  "registration-open": "Registration Open",
  "sold-out": "Sold Out",
  past: "Past Event",
};

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <CardMedia photo={getEventPhoto(event.category)} seed={event.slug} alt={event.title} />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <Badge variant="outline">{event.category}</Badge>
          <Badge
            className={
              event.status === "past"
                ? "bg-muted text-muted-foreground"
                : "bg-brand-emerald/10 text-brand-emerald"
            }
            variant="secondary"
          >
            {statusLabel[event.status]}
          </Badge>
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">{event.title}</h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{event.description}</p>
        <div className="mt-auto flex flex-col gap-1.5 pt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar className="size-4 shrink-0" aria-hidden />
            {formatDate(event.date, event.endDate)}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0" aria-hidden />
            {event.isVirtual ? "Online" : event.location}
          </span>
        </div>
      </div>
    </Link>
  );
}
