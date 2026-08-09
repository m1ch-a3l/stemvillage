import { cn } from "@/lib/utils";

const PALETTES = [
  ["#1B2A6B", "#2E4198"],
  ["#0E9F6E", "#0B7A56"],
  ["#F2B705", "#C99204"],
  ["#1B2A6B", "#0E9F6E"],
  ["#0F1A45", "#1B2A6B"],
];

const VARIANTS = ["circuit", "grid", "orbit"] as const;
type Variant = (typeof VARIANTS)[number];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function CircuitPattern({ id }: { id: string }) {
  return (
    <g opacity={0.5} stroke="white" strokeWidth={1.5} fill="none">
      <path d={`M0,40 H60 V90 H140`} />
      <path d={`M20,0 V25 H90 V60`} />
      <path d={`M200,0 V50 H150 V100`} />
      <path d={`M170,20 H220`} />
      <circle cx={60} cy={40} r={3.5} fill="white" stroke="none" />
      <circle cx={90} cy={25} r={3.5} fill="white" stroke="none" />
      <circle cx={150} cy={50} r={3.5} fill="white" stroke="none" />
      <circle cx={140} cy={90} r={3.5} fill="white" stroke="none" />
      <circle cx={id ? 20 : 0} cy={0} r={0} />
    </g>
  );
}

function GridPattern() {
  return (
    <g opacity={0.35} stroke="white" strokeWidth={1}>
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 40} y1={0} x2={i * 40} y2={200} />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h${i}`} x1={0} y1={i * 40} x2={220} y2={i * 40} />
      ))}
    </g>
  );
}

function OrbitPattern() {
  return (
    <g opacity={0.5} stroke="white" strokeWidth={1.5} fill="none">
      <circle cx={110} cy={100} r={30} />
      <circle cx={110} cy={100} r={60} />
      <circle cx={110} cy={100} r={90} />
      <circle cx={140} cy={70} r={4} fill="white" stroke="none" />
      <circle cx={50} cy={130} r={3} fill="white" stroke="none" />
      <circle cx={190} cy={140} r={3.5} fill="white" stroke="none" />
    </g>
  );
}

interface PlaceholderArtProps {
  seed: string;
  className?: string;
  variant?: Variant;
}

export function PlaceholderArt({ seed, className, variant }: PlaceholderArtProps) {
  const h = hash(seed);
  const palette = PALETTES[h % PALETTES.length];
  const resolvedVariant = variant ?? VARIANTS[h % VARIANTS.length];
  const gradientId = `pa-${h}`;

  return (
    <svg
      viewBox="0 0 220 200"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label=""
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="100%" stopColor={palette[1]} />
        </linearGradient>
      </defs>
      <rect width="220" height="200" fill={`url(#${gradientId})`} />
      {resolvedVariant === "circuit" ? <CircuitPattern id={gradientId} /> : null}
      {resolvedVariant === "grid" ? <GridPattern /> : null}
      {resolvedVariant === "orbit" ? <OrbitPattern /> : null}
    </svg>
  );
}
