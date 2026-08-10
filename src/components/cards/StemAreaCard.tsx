import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CardMedia } from "@/components/ui/card-media";
import { stemAreaIconMap } from "@/lib/icons";
import { getStemAreaPhoto } from "@/lib/photos";
import type { StemArea } from "@/types/content";

export function StemAreaCard({ area }: { area: StemArea }) {
  const Icon = stemAreaIconMap[area.icon];

  return (
    <Link
      href={`/stem-areas/${area.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-32 w-full overflow-hidden">
        <CardMedia photo={getStemAreaPhoto(area.slug)} seed={area.slug} alt={area.name} />
        <span className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg bg-white/90 text-brand-indigo-dark shadow">
          <Icon className="size-4.5" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-lg font-semibold text-foreground">{area.name}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{area.shortDescription}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-indigo dark:text-primary">
          Learn more
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
