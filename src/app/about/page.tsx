"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ---- gallery below the sections (unchanged) ---- */
const gallery = [
  { src: "/photoWork.jpg", alt: "Photography 1", aspect: "aspect-[4/3]" },
  { src: "/photoWork1.JPG", alt: "Photography 2", aspect: "aspect-[4/3]" },
  { src: "/photoWork2.JPG", alt: "Photography 3", aspect: "aspect-[4/3]" },
  { src: "/photoWork3.jpg", alt: "Portfolio shot 3", aspect: "aspect-[4/3]" },
  { src: "/photoWork4.jpg", alt: "Opportunity Circle", aspect: "aspect-[4/3]" },
  { src: "/photoWork5.JPG", alt: "UHealth", aspect: "aspect-[4/3]" },
];

const ROTATE_MS = 5000;

const DAY_ROLES = ["UX Designer", "UI Designer", "Product Designer"];
const NIGHT_ROLES = ["Photographer", "Graphic Designer", "Game Developer"];

const DAY_MEDIA = [
  { src: "/hero-4.jpg", alt: "UX" },
  { src: "/ui.jpg", alt: "UI" },
  { src: "/prodDesign.jpg", alt: "Product" },
];
const NIGHT_MEDIA = [
  { src: "/photography.jpg", alt: "Photography" },
  { src: "/graphicsDesign.jpg", alt: "Graphics Design" },
  { src: "/coding.jpg", alt: "GameDev" },
];

/** Intro carousel slides */
const ABOUT_SLIDES = [
  { src: "/meirl.jpg", alt: "Me, real life" },
  { src: "/minecraftme.jpg", alt: "Me, Minecraft edition" },
  { src: "/robloxme.jpg", alt: "Me, Roblox edition" },
  { src: "/destinyme.jpg", alt: "Me, Destiny" },
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

  // intro carousel state
  const [aboutIdx, setAboutIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDayIdx((i) => (i + 1) % Math.max(DAY_ROLES.length, DAY_MEDIA.length));
      setNightIdx((i) => (i + 1) % Math.max(NIGHT_ROLES.length, NIGHT_MEDIA.length));
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextAbout();
      if (e.key === "ArrowLeft") prevAbout();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const dayRole = DAY_ROLES[dayIdx % DAY_ROLES.length];
  const dayImg = DAY_MEDIA[dayIdx % DAY_MEDIA.length];

  const nightRole = NIGHT_ROLES[nightIdx % NIGHT_ROLES.length];
  const nightImg = NIGHT_MEDIA[nightIdx % NIGHT_MEDIA.length];

  const LONGEST_DAY_ROLE = DAY_ROLES.reduce((a, b) => (b.length > a.length ? b : a), DAY_ROLES[0]);
  const LONGEST_NIGHT_ROLE = NIGHT_ROLES.reduce((a, b) => (b.length > a.length ? b : a), NIGHT_ROLES[0]);

  const nextAbout = () => setAboutIdx((i) => (i + 1) % ABOUT_SLIDES.length);
  const prevAbout = () => setAboutIdx((i) => (i - 1 + ABOUT_SLIDES.length) % ABOUT_SLIDES.length);

  return (
    <>
      {/* Intro with RIGHT-SIDE image carousel */}
      <main
        className="
          container mx-auto px-5 sm:px-6
          pt-24 sm:pt-28 md:pt-32 lg:pt-40
          pb-12 sm:pb-16 md:pb-24
        "
      >
        {/* smaller gaps on mobile, same layout on md+ */}
        <section className="grid grid-cols-12 gap-8 sm:gap-12 lg:gap-32 items-center">
          {/* Left: copy */}
          <div className="col-span-12 md:col-span-7 space-y-4 sm:space-y-6">
            <h1 className="text-3xl md:text-4xl font-semibold">I’m Primitivo</h1>
            <p className="text-neutral-700">
              A designer and artist with a background in science, I approach design as more than just a
              career, it’s a lens through which I see the world. My work in UX is driven by curiosity,
              problem-solving, and a desire to craft experiences that feel intuitive and meaningful.
              Blending creativity with structured thinking, I bring both an analytical and artistic
              perspective to design challenges.
            </p>
            <p className="text-neutral-700">
              Outside of design, I play pickleball, do photography, dive into video games, and can share a surprising
              amount of Halo lore. I love learning new things and can talk for hours about space,
              science, games, art, anime, and design.
            </p>
          </div>

          {/* Right: image carousel */}
          <div className="col-span-12 md:col-span-4">
            <div
              className="
                relative w-full
                aspect-[4/5] sm:aspect-[1/1]
                max-w-[22rem] sm:max-w-none
                mx-auto md:mx-0
                rounded-xl overflow-hidden bg-neutral-200
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={ABOUT_SLIDES[aboutIdx].src}
                  className="absolute inset-0"
                  initial={{ opacity: 0.8, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.8, scale: 1.01 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src={ABOUT_SLIDES[aboutIdx].src}
                    alt={ABOUT_SLIDES[aboutIdx].alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 90vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* arrows (smaller on mobile) */}
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between p-2 sm:p-3">
                <button
                  type="button"
                  aria-label="Previous photo"
                  className="pointer-events-auto inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur shadow hover:bg-white transition"
                  onClick={prevAbout}
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-800" />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  className="pointer-events-auto inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur shadow hover:bg-white transition"
                  onClick={nextAbout}
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-800" />
                </button>
              </div>

              {/* index chip */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 rounded-full bg-black/60 text-white text-[10px] sm:text-xs px-2 py-0.5 sm:py-1">
                {aboutIdx + 1} / {ABOUT_SLIDES.length}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Full-bleed: by day (light) */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-neutral-50 py-8 sm:py-10 md:py-14">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="col-span-12 md:col-span-7 space-y-3 sm:space-y-4">
              <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                <h2 className="relative text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap shrink-0">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={DAY_ROLES[dayIdx % DAY_ROLES.length]}
                      variants={textVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0 whitespace-nowrap"
                    >
                      {DAY_ROLES[dayIdx % DAY_ROLES.length]}
                    </motion.span>
                  </AnimatePresence>
                  <span aria-hidden className="invisible">{LONGEST_DAY_ROLE}</span>
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
              <div
                className="
                  relative w-full
                  aspect-[4/5]
                  max-w-[22rem] sm:max-w-none
                  mx-auto md:mx-0
                  rounded-xl bg-neutral-200 overflow-hidden
                "
              >
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
                      sizes="(min-width: 768px) 33vw, 90vw"
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
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-neutral-900 py-8 sm:py-10 md:py-14 text-neutral-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="col-span-12 md:col-span-7 space-y-3 sm:space-y-4">
              <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                <h2 className="relative text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap shrink-0">
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
                  <span aria-hidden className="invisible">{LONGEST_NIGHT_ROLE}</span>
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
              <div
                className="
                  relative w-full
                  aspect-[4/5]
                  max-w-[22rem] sm:max-w-none
                  mx-auto md:mx-0
                  rounded-xl bg-neutral-700 overflow-hidden
                "
              >
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
                      sizes="(min-width: 768px) 33vw, 90vw"
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
      <main className="container mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <section className="space-y-6 sm:space-y-8">
          <div className="text-left">
            <h2 className="text-2xl font-regular">Some of my photography work!</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {gallery.map((g, i) => (
              <div
                key={i}
                className={`relative w-full ${g.aspect} rounded-xl overflow-hidden bg-neutral-200`}
              >
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
