"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const gallery = [
  { src: "/photoWork.jpg", alt: "Photography 1", aspect: "aspect-[4/3]" },
  { src: "/photoWork1.jpg", alt: "Photography 2", aspect: "aspect-[4/3]" },
  { src: "/photoWork2.jpg", alt: "Photography 3", aspect: "aspect-[4/3]" },
  { src: "/hero-3.jpg", alt: "Portfolio shot 3", aspect: "aspect-[4/3]" },
  { src: "/featured-opportunity.jpg", alt: "Opportunity Circle", aspect: "aspect-[4/3]" },
  { src: "/featured-pneumonia.jpg", alt: "UHealth", aspect: "aspect-[4/3]" },
];

/** Rotating labels & images (5s) */
const ROTATE_MS = 5000;

const DAY_ROLES = ["UX Designer", "UI Designer", "Product Designer"];
const NIGHT_ROLES = ["Photographer", "Graphic Designer", "Game Developer"];

const DAY_MEDIA = [
  { src: "/hero-4.jpg", alt: "Primitivo at work" },
  { src: "/featured-uw.jpg", alt: "Case study work view" },
  { src: "/hero-2.jpg", alt: "Workspace detail" },
];
const NIGHT_MEDIA = [
  { src: "/hero-5.jpg", alt: "Photography & graphics" },
  { src: "/featured-pneumonia.jpg", alt: "Hackathon project" },
  { src: "/hero-3.jpg", alt: "Creative set" },
];

/** Motion variants */
const textVariants = {
  enter: { y: 10, opacity: 0 },
  center: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};
const imageVariants = {
  enter: { opacity: 0, scale: 0.98, filter: "blur(2px)" },
  center: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.02, filter: "blur(2px)" },
};

export default function AboutPage() {
  const [dayIdx, setDayIdx] = useState(0);
  const [nightIdx, setNightIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDayIdx((i) => (i + 1) % Math.max(DAY_ROLES.length, DAY_MEDIA.length));
      setNightIdx((i) => (i + 1) % Math.max(NIGHT_ROLES.length, NIGHT_MEDIA.length));
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const dayRole = DAY_ROLES[dayIdx % DAY_ROLES.length];
  const dayImg = DAY_MEDIA[dayIdx % DAY_MEDIA.length];

  const nightRole = NIGHT_ROLES[nightIdx % NIGHT_ROLES.length];
  const nightImg = NIGHT_MEDIA[nightIdx % NIGHT_MEDIA.length];

  // Helper: longest strings to reserve width so the header doesn't "jump"
  const LONGEST_DAY_ROLE = DAY_ROLES.reduce((a, b) => (b.length > a.length ? b : a), DAY_ROLES[0]);
  const LONGEST_NIGHT_ROLE = NIGHT_ROLES.reduce((a, b) => (b.length > a.length ? b : a), NIGHT_ROLES[0]);

  return (
    <>
      {/* Intro (extra top space so the H1 breathes under the site header) */}
      <main className="container mx-auto px-6 pt-12 md:pt-20 pb-16 space-y-16">
        <section className="max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">I’m Primitivo</h1>
          <p className="text-neutral-700">
            A designer and artist with a background in science, I approach design as more than just a
             career—it’s a lens through which I see the world. My work in UX is driven by curiosity, 
             problem-solving, and a desire to craft experiences that feel intuitive and meaningful. 
             Blending creativity with structured thinking, I bring both an analytical and artistic 
             perspective to design challenges.
          </p>
          <p className="text-neutral-700">
            Outside of design, I play pickleball, do photography, dive into video games, and can share a surprising 
            amount of Halo lore. I love learning new things and can talk for hours about space,
             science, games, art, anime, and design.
          </p>
        </section>
      </main>

      {/* Full-bleed: by day (light) */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-neutral-50 py-10 md:py-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-7 space-y-4">
              {/* Header: keep role on ONE line; allow small 'by day' to wrap if needed */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="relative text-2xl md:text-3xl font-semibold whitespace-nowrap shrink-0">
                  {/* animated label */}
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={dayRole}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0 whitespace-nowrap"
                    >
                      {dayRole}
                    </motion.span>
                  </AnimatePresence>
                  {/* invisible spacer to lock width to the longest label */}
                  <span aria-hidden className="invisible">
                    {LONGEST_DAY_ROLE}
                  </span>
                </h2>
                <span className="text-neutral-500">by day</span>
              </div>

              <p className="text-neutral-700 max-w-prose">
                I’m a designer who loves turning messy workflows into clear, human experiences.
                My work leans minimal and purposeful: fewer steps, better defaults, and interfaces that feel calm
                even when the job isn’t.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/5] rounded-xl bg-neutral-200 overflow-hidden">
                {/* Crossfade image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={dayImg.src}
                    className="absolute inset-0"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={dayImg.src}
                      alt={dayImg.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      priority={dayIdx === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed: by night (dark) */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-neutral-900 py-10 md:py-14 text-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-7 space-y-4">
              {/* Header: keep role on ONE line; allow small 'by night' to wrap if needed */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <h2 className="relative text-2xl md:text-3xl font-semibold whitespace-nowrap shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={nightRole}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0 whitespace-nowrap"
                    >
                      {nightRole}
                    </motion.span>
                  </AnimatePresence>
                  <span aria-hidden className="invisible">
                    {LONGEST_NIGHT_ROLE}
                  </span>
                </h2>
                <span className="text-neutral-400">by night</span>
              </div>

              <p className="text-neutral-200 max-w-prose">
                I’m also a photographer, graphic designer, and game developer who loves turning messy ideas into
                clear visuals and playable worlds. My work stays minimal and intentional: fewer layers, stronger
                composition, and experiences that feel calm—even when the action ramps up.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/5] rounded-xl bg-neutral-700 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={nightImg.src}
                    className="absolute inset-0"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={nightImg.src}
                      alt={nightImg.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 33vw, 100vw"
                      priority={nightIdx === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to container: Gallery */}
      <main className="container mx-auto px-6 py-16">
        <section className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.map((g, i) => (
              <div key={i} className={`relative w-full ${g.aspect} rounded-xl overflow-hidden bg-neutral-200`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
