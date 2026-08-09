import { Quote } from "lucide-react";
import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
      <Quote className="size-6 text-brand-gold" aria-hidden />
      <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col">
        <span className="text-sm font-semibold text-foreground">{testimonial.name}</span>
        <span className="text-xs text-muted-foreground">
          {testimonial.role} · {testimonial.affiliation}
        </span>
      </figcaption>
    </figure>
  );
}
