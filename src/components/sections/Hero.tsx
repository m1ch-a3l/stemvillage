"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, BrainCircuit, Bot, Sigma } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

const floatingBadges = [
  { label: "Coding", Icon: Code2, className: "top-6 left-2 sm:left-6" },
  { label: "Robotics", Icon: Bot, className: "top-1/3 right-0 sm:right-4" },
  { label: "AI", Icon: BrainCircuit, className: "bottom-16 left-4 sm:left-10" },
  { label: "Mathematics", Icon: Sigma, className: "bottom-2 right-6 sm:right-12" },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay },
        };

  return (
    <section className="relative overflow-hidden bg-brand-indigo-dark">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:36px_36px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-brand-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-brand-emerald/20 blur-3xl"
      />
      <Container className="relative grid gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="flex flex-col gap-6">
          <motion.span
            {...fadeUp(0)}
            className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-brand-gold uppercase"
          >
            {siteConfig.name} — STEM Education & Innovation
          </motion.span>
          <motion.h1
            {...fadeUp(0.08)}
            className="text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
          >
            {siteConfig.tagline}
          </motion.h1>
          <motion.p {...fadeUp(0.16)} className="max-w-xl text-base text-white/75 sm:text-lg">
            {siteConfig.description}
          </motion.p>
          <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-3 pt-2">
            <ButtonLink
              href="/programmes"
              size="lg"
              className="h-12 bg-brand-gold px-6 text-sm font-semibold text-brand-indigo-dark hover:bg-brand-gold/90"
            >
              Explore Our Programmes
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink
              href="/schools-partnerships"
              size="lg"
              variant="outline"
              className="h-12 border-white/30 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10"
            >
              Partner With Us
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
        >
          <div className="relative size-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-indigo to-brand-indigo-dark shadow-2xl">
            <svg viewBox="0 0 400 400" className="size-full" aria-hidden>
              <g opacity={0.35} stroke="white" strokeWidth={1.5} fill="none">
                <circle cx={200} cy={200} r={70} />
                <circle cx={200} cy={200} r={120} />
                <circle cx={200} cy={200} r={170} />
                <path d="M200,30 V80" />
                <path d="M200,370 V320" />
                <path d="M30,200 H80" />
                <path d="M370,200 H320" />
              </g>
              <g fill="#F2B705">
                <circle cx={200} cy={130} r={6} />
                <circle cx={310} cy={230} r={5} />
                <circle cx={110} cy={280} r={4.5} />
              </g>
              <g fill="#0E9F6E">
                <circle cx={90} cy={140} r={5} />
                <circle cx={280} cy={90} r={4} />
              </g>
            </svg>
          </div>
          {floatingBadges.map(({ label, Icon, className }) => (
            <div
              key={label}
              className={`absolute flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-brand-indigo-dark shadow-lg ${className}`}
            >
              <Icon className="size-3.5" aria-hidden />
              {label}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
