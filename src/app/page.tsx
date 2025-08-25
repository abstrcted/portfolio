"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import FeaturedCard from "@/components/featured-card";

type Project = {
  slug: string;
  title: string;
  year: string;
  badge?: string;
};

const projects: Project[] = [
  { slug: "uw-file-system", title: "File Management System", year: "2025", badge: "$38,000 saved annually" },
];

const slides = [
  { src: "/hero-1.jpg", alt: "Hero 1" },
  { src: "/hero-2.jpg", alt: "Hero 2" },
  { src: "/hero-3.jpg", alt: "Hero 3" },
  { src: "/hero-4.jpg", alt: "Hero 4" },
  { src: "/hero-5.jpg", alt: "Hero 5" },
];

const roles = ["UX Designer", "Product Designer", "Graphic Designer"];
const ROLE_INTERVAL_MS = 2500;

/** Logos for the Trusted by marquee (place files in /public/logos) */
const logos = [
  { src: "/321Buddy.png", alt: "321Buddy" },
  { src: "/hotdog.png", alt: "Hot Rod Dog" },
  { src: "/federal-way.png", alt: "City of Federal Way" },
  { src: "/uw-tacoma.png", alt: "University of Washington Tacoma" },
  { src: "/tsc.png", alt: "Tech Startup Club" },
  { src: "/ux.png", alt: "UX@UWT" },
  { src: "/gidlab.png", alt: "GID Lab" },
  { src: "/321Buddy.png", alt: "321Buddy" },
  { src: "/hotdog.png", alt: "Hot Rod Dog" },
  { src: "/federal-way.png", alt: "City of Federal Way" },
  { src: "/uw-tacoma.png", alt: "University of Washington Tacoma" },
  { src: "/tsc.png", alt: "Tech Startup Club" },
  { src: "/ux.png", alt: "UX@UWT" },
  { src: "/gidlab.png", alt: "GID Lab" },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);

  const [showCue, setShowCue] = useState(false);
  const [cueExpanded, setCueExpanded] = useState(false);

  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      ROLE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % slides.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 8000);
    return () => clearInterval(id);
  }, [paused]);

  const variants = useMemo(
    () => ({
      enter: (dir: 1 | -1) => ({ x: dir > 0 ? 60 : -60 }),
      center: { x: 0 },
      exit: (dir: 1 | -1) => ({ x: dir > 0 ? -60 : 60 }),
    }),
    []
  );

  const roleVariants = {
    enter: { y: 12, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -12, opacity: 0 },
  } as const;

  const goTo = (i: number) => {
    if (i === index) return;
    const total = slides.length;
    const forward = (i - index + total) % total;
    const backward = (index - i + total) % total;
    setDirection(forward <= backward ? 1 : -1);
    setIndex(i);
  };

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setShowCue(false);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setShowCue(true);
      requestAnimationFrame(() => setCueExpanded(true));
    }, 8000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (showCue && window.scrollY > 250) setShowCue(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showCue]);

  return (
    <LayoutGroup>
      <main className="container mx-auto px-6 space-y-24 py-12 md:py-16">
        {/* HERO */}
        <section className="grid grid-cols-12 gap-8 items-start">
          {/* Left column */}
          <div className="col-span-12 md:col-span-5 md:min-h-[70vh] flex flex-col justify-center">
            <motion.h1
              className="font-semibold tracking-tight leading-[0.9] [font-size:clamp(3.5rem,12vw,12rem)] text-black"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Hello!
            </motion.h1>

            <p className="mt-4 text-lg text-neutral-700" style={{ marginLeft: "12px" }}>
              I'm <span className="font-medium">Primitivo</span>, a UX Designer based in Washington.
            </p>
          </div>

          {/* Right column (image + UI) */}
          {/* NOTE: overflow-x-hidden prevents the index badge from causing horizontal scroll */}
          <div className="relative col-span-12 md:col-span-7 overflow-x-hidden">
            {/* Image box */}
            <div
              className="relative overflow-hidden rounded-2xl bg-neutral-100 transform md:scale-90 transition-transform"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="aspect-[5/4] md:aspect-[10.5/10]">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                    className="absolute inset-0 will-change-transform"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.04 }}
                  >
                    <Image
                      src={slides[index].src}
                      alt={slides[index].alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* IN-CONTAINER arrows */}
              <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={prev}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow ring-1 ring-black/5 transition"
                >
                  <ChevronLeft className="h-5 w-5 text-neutral-700" />
                </button>

                <button
                  type="button"
                  aria-label="Next image"
                  onClick={next}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border bg-white/80 backdrop-blur hover:bg-white shadow-sm hover:shadow ring-1 ring-black/5 transition"
                >
                  <ChevronRight className="h-5 w-5 text-neutral-700" />
                </button>
              </div>
            </div>

            {/* Big index number - slightly OUTSIDE top-right */}
            <div className="pointer-events-none absolute -right-3 -top-2 md:-right-1 md:-top-2 select-none text-black/90">
              <span className="text-[3.25rem] md:text-[4.5rem] font-light leading-none tracking-tight">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Dots under the image */}
            <div
              className="mt-5 flex items-center justify-center gap-5"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => goTo(i)}
                  className={clsx(
                    "h-3 w-3 rounded-full transition outline-none ring-offset-2 focus:ring-2",
                    i === index ? "bg-lime-400" : "bg-neutral-300 hover:bg-neutral-400"
                  )}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT + BRANDS */}
        <section className="space-y-12 md:space-y-16">
          {/* About me */}
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 md:col-span-12 md:col-start-1 space-y-6">
              <h3 className="text-sm uppercase tracking-widest text-neutral-500">About me</h3>
              <p className="max-w-2xl text-lg leading-relaxed text-neutral-700">
                I craft human experiences through my skills in <strong>UX, UI, branding, and product design</strong> — creating work
                that’s clean, minimal, and timeless, with just the right touch of boldness.
              </p>
              <a
                href="/about"
                className="inline-flex items-center rounded-full border border-lime-400 px-5 py-2 text-sm text-lime-700 hover:bg-lime-50 transition"
              >
                But there's more!
              </a>
            </div>
          </div>

<div className="space-y-6">
  <h4 className="text-center text-sm uppercase tracking-widest text-neutral-500">
    Trusted by
  </h4>

  {/* marquee wrapper */}
  <div className="group relative overflow-hidden">
    {/* gradient edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

    {/* track — duplicate logos for seamless loop */}
    <div
      className="marquee flex items-center gap-15 whitespace-nowrap will-change-transform py-4"
      aria-label="Trusted by logos"
    >
      {[...logos, ...logos].map((logo, i) => (
        <div
          key={`${logo.src}-${i}`}
          className="shrink-0 h-14 md:h-16 lg:h-35 w-auto opacity-90 hover:opacity-100 transition"
        >
          <Image
            src={`${logo.src}?v=4`}   // cache-bust if you replace files
            alt={logo.alt}
            width={400}
            height={160}
            className="h-full w-auto object-contain grayscale hover:grayscale-0"
            sizes="(min-width:1280px) 200px, (min-width:768px) 160px, 120px"
            unoptimized
            priority={i < 6}
          />
        </div>
      ))}
    </div>
  </div>
</div>
        </section>

        {/* FEATURED WORK */}
        <section id="work" className="space-y-10 scroll-mt-24">
          <h2 className="text-2xl font-medium">Featured work</h2>

          {/* 01 */}
          <FeaturedCard
            index={1}
            title="File Management System"
            year="2025"
            tags={["Efficiency", "Organization", "Management"]}
            imageSrc="/SETlib.jpg"
            savingsBadge="$38,000 Saved annually"
            usageBadge="IN USE BY THE UNIVERSITY OF WASHINGTON"
            client="University of Washington"
            role="Lead Designer"
            blurb={`Full redesign of the University of Washington Tacoma’s file management system.
Led design teams and directed UI/UX strategy.`}
            ctaHref="/work/uw-file-system"
          />

          <hr className="border-neutral-200/60" />

          {/* 02 */}
          <FeaturedCard
            index={2}
            title="Pneumonia Detector"
            year="2025"
            tags={["Optimization", "Machine Learning", "Pressure"]}
            imageSrc="/featured-pneumonia.jpg"
            savingsBadge="92% Prediction Rate"
            usageBadge="SECOND PLACE AT HACKATHON"
            client="Tech Startup Club"
            role="Front End Developer"
            blurb={`Convolutional neural network pneumonia screening model with 92% accuracy built within 6 hours.`}
            ctaHref="/work/pneumonia-detector"
          />

          <hr className="border-neutral-200/60" />

          {/* 03 */}
          <FeaturedCard
            index={3}
            title="The Opportunity Circle Website"
            year="2025"
            tags={["Inclusion", "Accessibility", "Empowerment"]}
            imageSrc="/oppCircle.jpg"
            client="321Buddy"
            role="Designer & Developer"
            blurb={`Led design and development of The Opportunity Circle’s web experience.`}
            ctaHref="/work/opportunity-circle"
          />

          {/* View all projects button */}
          <div className="pt-4 flex justify-center">
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-full border border-lime-400 text-lime-700 px-6 py-2 text-sm font-medium hover:bg-lime-50 transition"
            >
              View all projects
            </a>
          </div>
        </section>
      </main>

      {/* Fixed bottom-center cue */}
      <AnimatePresence>
        {showCue && (
          <motion.button
            key="view-work-cue"
            onClick={scrollToWork}
            aria-label="View my work"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-5 mx-auto z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ width: 40 }}
              animate={{ width: cueExpanded ? "auto" : 40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 rounded-full bg-lime-400 text-lime-900 shadow-sm hover:shadow px-3 py-2"
            >
              <ArrowDown className="h-5 w-5" />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: cueExpanded ? 1 : 0 }}
                transition={{ delay: 0.1, duration: 0.25 }}
                className="text-sm font-medium whitespace-nowrap"
              >
                View my work!
              </motion.span>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}