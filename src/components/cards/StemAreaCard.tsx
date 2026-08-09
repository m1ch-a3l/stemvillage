import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { stemAreaIconMap } from "@/lib/icons";
import type { StemArea } from "@/types/content";

export function StemAreaCard({ area }: { area: StemArea }) {
  const Icon = stemAreaIconMap[area.icon];

  return (
    <Link
      href={`/stem-areas/${area.slug}`}
      className="group flex flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10 transition-shadow hover:shadow-lg"
    >
      <span className="flex size-11 items-center justify-center rounded-lg bg-brand-indigo/10 text-brand-indigo dark:bg-primary/10 dark:text-primary">
        <Icon className="size-5.5" aria-hidden />
      </span>
      <h3 className="font-heading text-lg font-semibold text-foreground">{area.name}</h3>
      <p className="flex-1 text-sm text-muted-foreground">{area.shortDescription}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-indigo dark:text-primary">
        Learn more
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
