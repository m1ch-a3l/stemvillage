// lucide-react no longer ships brand/logo icons, so these are minimal
// hand-drawn glyphs for the social platforms linked in the footer.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8.2h2.75l.41-3.19h-3.16V7.6c0-.92.26-1.55 1.58-1.55h1.68V3.2C16.24 3.14 15.29 3 14.18 3c-2.32 0-3.9 1.42-3.9 4.02v2.6H7.5v3.19h2.78V21h3.22Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x={3.5} y={3.5} width={17} height={17} rx={4.5} />
      <circle cx={12} cy={12} r={4} />
      <circle cx={17.2} cy={6.8} r={0.9} fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.5A1.72 1.72 0 1 0 5.47 7a1.72 1.72 0 0 0 0-3.5ZM20 20h-2.94v-6.1c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.21V20H9.75V8.5h2.82v1.57h.04c.39-.75 1.36-1.55 2.8-1.55C18.44 8.52 20 10.28 20 13.14V20Z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.6a2.7 2.7 0 0 0-1.9-1.9C18 5.2 12 5.2 12 5.2s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.6 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.4 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.4ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}
