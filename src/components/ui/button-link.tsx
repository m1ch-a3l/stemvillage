import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  className?: string;
  children: ReactNode;
  target?: ComponentProps<"a">["target"];
  rel?: string;
}

// Button styled as a real <a> (via Link) for navigation — Base UI's Button
// primitive needs `nativeButton={false}` whenever it renders an anchor
// instead of a native <button>; this wrapper keeps that detail in one place.
export function ButtonLink({
  href,
  children,
  variant,
  size,
  className,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      nativeButton={false}
      render={
        <Link href={href} target={target} rel={rel}>
          {children}
        </Link>
      }
    />
  );
}
