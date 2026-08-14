import Image from "next/image";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/layout/Reveal";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

interface ImageTextSectionProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSide?: "left" | "right";
  background?: "default" | "tint";
}

export function ImageTextSection({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  imageSide = "left",
  background = "default",
}: ImageTextSectionProps) {
  return (
    <section className={cn("py-20 sm:py-24", background === "tint" && "bg-slate-100 dark:bg-slate-900")}>
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <Reveal
          direction="none"
          className={cn(
            "relative h-64 w-full overflow-hidden rounded-2xl border-4 border-white shadow-lg sm:h-96",
            imageSide === "right" && "lg:order-last"
          )}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <SectionHeader eyebrow={eyebrow} title={title} />
          <p className="text-muted-foreground">{description}</p>
          <div>
            <ButtonLink href={ctaHref} className="h-11 bg-brand-indigo px-6 text-sm text-white hover:bg-brand-indigo/90">
              {ctaLabel}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
