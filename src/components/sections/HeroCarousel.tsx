"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  images: string[];
  alt: string;
  intervalMs?: number;
  controls?: boolean;
  className?: string;
  sizes?: string;
}

export function HeroCarousel({
  images,
  alt,
  intervalMs = 5000,
  controls = true,
  className,
  sizes = "(min-width: 1024px) 40vw, 90vw",
}: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (shouldReduceMotion || paused || images.length < 2) return;
    const id = setInterval(next, intervalMs);
    return () => clearInterval(id);
  }, [shouldReduceMotion, paused, next, intervalMs, images.length]);

  return (
    <div
      className={cn("relative size-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={index}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${alt} — slide ${index + 1} of ${images.length}`}
            fill
            sizes={sizes}
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-indigo-dark/60 via-transparent to-transparent"
      />

      {controls && images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute top-1/2 left-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                )}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
