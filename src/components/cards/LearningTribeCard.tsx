import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardMedia } from "@/components/ui/card-media";
import { Badge } from "@/components/ui/badge";
import { getProgrammePhoto } from "@/lib/photos";
import type { LearningTribe } from "@/types/content";

export function LearningTribeCard({ tribe }: { tribe: LearningTribe }) {
  return (
    <Link
      href={`/programmes/${tribe.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-36 w-full overflow-hidden">
        <CardMedia
          photo={getProgrammePhoto(tribe.slug)}
          seed={tribe.slug}
          alt={tribe.name}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <Badge variant="secondary" className="w-fit bg-brand-gold-soft text-brand-indigo">
          {tribe.ageGroup}
        </Badge>
        <h3 className="font-heading text-lg font-semibold text-foreground">{tribe.name}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{tribe.motto}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-indigo dark:text-primary">
          Explore {tribe.name}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
