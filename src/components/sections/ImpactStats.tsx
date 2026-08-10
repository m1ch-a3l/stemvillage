import { Container } from "@/components/layout/Container";
import { StatCounter } from "@/components/layout/StatCounter";
import { getImpactStats } from "@/lib/content";

export function ImpactStats() {
  const stats = getImpactStats();

  return (
    <section className="border-b border-border bg-secondary/40 py-12">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} description={stat.description} />
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Figures shown are placeholder estimates pending verified reporting data.
        </p>
      </Container>
    </section>
  );
}
