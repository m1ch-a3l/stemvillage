import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  image?: string;
}

export function PageHero({ eyebrow, title, description, className, image }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-brand-indigo-dark py-16 sm:py-20",
        image && "py-20 sm:py-28",
        className
      )}
    >
      {image ? (
        <>
          <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-indigo-dark via-brand-indigo-dark/80 to-brand-indigo-dark/50"
          />
        </>
      ) : null}
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
