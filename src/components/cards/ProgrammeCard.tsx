import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PlaceholderArt } from "@/components/ui/placeholder-art";
import { Badge } from "@/components/ui/badge";
import type { Programme } from "@/types/content";

export function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:shadow-lg"
    >
      <div className="h-36 w-full overflow-hidden">
        <PlaceholderArt
          seed={programme.slug}
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Badge variant="secondary" className="w-fit bg-brand-gold-soft text-brand-indigo">
          {programme.audience}
        </Badge>
        <h3 className="font-heading text-lg font-semibold text-foreground">{programme.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{programme.tagline}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-indigo dark:text-primary">
          Explore Programme
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
