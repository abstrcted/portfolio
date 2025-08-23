"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

// Put your hero images in /public. Use any names you want; just update the paths below.
const slides = [
  { src: "/hero-1.jpg", alt: "Hero image 1" },
  { src: "/hero-2.jpg", alt: "Hero image 2" },
  { src: "/hero-3.jpg", alt: "Hero image 3" },
  { src: "/hero-4.jpg", alt: "Hero image 4" },
  { src: "/hero-5.jpg", alt: "Hero image 5" },
];

export default function LandingHero() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    const next = (i + slides.length) % slides.length;
    setIndex(next);
  }, []);

  // (Optional) auto-advance every 8s; comment out to disable
  useEffect(() => {
    const id = setInterval(() => goTo(index + 1), 8000);
    return () => clearInterval(id);
  }, [index, goTo]);

  return (
    <main className="container py-14 md:py-20">
      <section className="grid grid-cols-12 gap-8 items-center">
        {/* Left: text */}
        <div className="col-span-12 md:col-span-5">
          <motion.h1
            className="[font-size:clamp(2.5rem,4vw+1rem,5rem)] font-semibold tracking-tight"
            initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Primitivo.
          </motion.h1>

          <p className="mt-6 text-lg opacity-80">
            Designer <span className="opacity-40">//</span> Developer{" "}
            <span className="opacity-40">//</span> Creative
          </p>

          {/* Dots */}
          <div className="mt-6 flex items-center gap-5">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Show slide ${i + 1}`}
                className={clsx(
                  "h-3 w-3 rounded-full transition",
                  i === index ? "bg-lime-400" : "bg-neutral-300 hover:bg-neutral-400"
                )}
                onClick={() => goTo(i)}
              />
            ))}

            {/* Optional arrow controls */}
            <button
              aria-label="Previous"
              onClick={() => goTo(index - 1)}
              className="ml-4 text-neutral-400 hover:text-neutral-700"
            >
              ←
            </button>
            <button
              aria-label="Next"
              onClick={() => goTo(index + 1)}
              className="text-lime-500 hover:text-lime-600"
            >
              →
            </button>
          </div>
        </div>

        {/* Right: image with animated swap */}
        <div className="col-span-12 md:col-span-7">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
            <div className="aspect-[3/4] md:aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.2 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[index].src}
                    alt={slides[index].alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Large index number like '01' */}
              <div className="pointer-events-none absolute left-[-1rem] bottom-[-1rem] select-none opacity-90">
                <span className="text-[6rem] md:text-[8rem] font-light leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
