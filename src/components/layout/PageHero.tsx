import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-brand-indigo-dark py-16 sm:py-20", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:36px_36px]"
      />
      <Container className="relative flex flex-col gap-3">
        {eyebrow ? (
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-gold uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="max-w-2xl text-3xl font-bold text-balance text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-base text-white/75 sm:text-lg">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
