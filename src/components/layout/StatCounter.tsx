"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  description?: string;
}

function parseValue(value: string) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, prefix, digits, suffix] = match;
  return { prefix, number: Number(digits.replace(/,/g, "")), suffix };
}

export function StatCounter({ value, label, description }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(shouldReduceMotion ? number : 0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, number, {
      duration: shouldReduceMotion ? 0 : 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, number, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-1 text-center"
    >
      <span className="font-heading text-4xl font-bold text-brand-indigo sm:text-5xl dark:text-primary">
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm font-medium text-foreground sm:text-base">{label}</span>
      {description ? (
        <span className="text-xs text-muted-foreground">{description}</span>
      ) : null}
    </motion.div>
  );
}
