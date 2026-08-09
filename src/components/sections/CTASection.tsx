import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "indigo" | "gold";
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "indigo",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20",
        variant === "indigo"
          ? "bg-brand-indigo text-white"
          : "bg-brand-gold text-brand-indigo-dark",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.08]",
          "bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:32px_32px]"
        )}
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold text-balance sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-xl text-base sm:text-lg",
              variant === "indigo" ? "text-white/80" : "text-brand-indigo-dark/80"
            )}
          >
            {description}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <ButtonLink
            size="lg"
            href={primaryHref}
            className={cn(
              "h-11 px-6 text-sm",
              variant === "indigo"
                ? "bg-brand-gold text-brand-indigo-dark hover:bg-brand-gold/90"
                : "bg-brand-indigo text-white hover:bg-brand-indigo/90"
            )}
          >
            {primaryLabel}
          </ButtonLink>
          {secondaryLabel && secondaryHref ? (
            <ButtonLink
              size="lg"
              variant="outline"
              href={secondaryHref}
              className={cn(
                "h-11 border-current bg-transparent px-6 text-sm hover:bg-white/10",
                variant === "indigo" ? "text-white" : "text-brand-indigo-dark hover:bg-brand-indigo-dark/10"
              )}
            >
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
