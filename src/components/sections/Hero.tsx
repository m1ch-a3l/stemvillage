"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, BrainCircuit, Bot, Sigma } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";
import { heroPhoto } from "@/lib/photos";

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
          <div className="relative size-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <Image
              src={heroPhoto}
              alt="Students collaborating on a technology project"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-indigo-dark/60 via-transparent to-transparent" />
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
