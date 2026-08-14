"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/Container";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { siteConfig } from "@/lib/site";
import { heroPhotos, stemAreaPhotos } from "@/lib/photos";

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
      <Image
        src={heroPhotos[3]}
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-brand-indigo-dark/95 via-brand-indigo-dark/90 to-brand-indigo-dark"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full bg-brand-gold/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-brand-emerald/20 blur-3xl"
      />

      <Container className="relative flex flex-col items-center gap-8 pt-20 text-center sm:pt-28">
        <motion.h1
          {...fadeUp(0.08)}
          className="max-w-3xl text-4xl font-bold tracking-tight text-balance text-white sm:text-5xl lg:text-6xl"
        >
          {siteConfig.tagline}
        </motion.h1>
        <motion.p {...fadeUp(0.16)} className="max-w-xl text-base text-white/75 sm:text-lg">
          {siteConfig.description}
        </motion.p>
        <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center justify-center gap-3">
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
      </Container>

      {/* Bottom-aligned staggered card row — tall / medium / short / medium / tall, full container width */}
      <motion.div
        {...fadeUp(0.32)}
        className="relative mt-10 sm:mt-14"
      >
        <Container className="flex items-end gap-3 overflow-x-auto pb-10 sm:gap-4 sm:overflow-visible sm:pb-16">
        {/* 1. Rotating photo card — medium */}
        <Link
          href="/programmes"
          className="group relative h-44 min-w-[110px] flex-1 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-56 sm:min-w-0"
        >
          <HeroCarousel
            images={heroPhotos.slice(0, 2)}
            alt="Students exploring STEM"
            controls={false}
            className="rounded-3xl border-0 shadow-none"
            sizes="200px"
          />
          <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand-indigo-dark">
            Learning Tribes
          </span>
        </Link>

        {/* 2. Photo card — medium */}
        <Link
          href="/programmes/architects-builders"
          className="group relative h-44 min-w-[110px] flex-1 overflow-hidden rounded-3xl border-4 border-white shadow-xl sm:h-56 sm:min-w-0"
        >
          <Image
            src={stemAreaPhotos["artificial-intelligence"]}
            alt="Artificial Intelligence"
            fill
            sizes="200px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="pointer-events-none absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-brand-indigo-dark">
            Tech
          </span>
        </Link>

        {/* 3. Photo + CTA card — tallest */}
        <Link
          href="/schools-partnerships"
          className="group relative flex h-56 min-w-[132px] flex-1 flex-col justify-between overflow-hidden rounded-3xl border-4 border-white bg-brand-gold p-4 shadow-2xl sm:h-72 sm:min-w-0 sm:p-5"
        >
          <Image
            src={stemAreaPhotos["robotics-electronics"]}
            alt="Robotics"
            fill
            sizes="220px"
            className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-indigo-dark/85 via-brand-indigo-dark/20 to-transparent" />
          <span className="relative ml-auto flex size-8 items-center justify-center rounded-full bg-white text-brand-indigo-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
          <span className="relative text-sm font-semibold text-white">Partner With Us</span>
        </Link>
        </Container>
      </motion.div>
    </section>
  );
}
