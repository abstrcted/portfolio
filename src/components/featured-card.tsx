"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

type FeaturedProps = {
  index: number;                  // 1-based index (01, 02…)
  title: string;
  year: string;
  tags: string[];                 // top-right stacked words
  imageSrc: string;
  imageAlt?: string;
  savingsBadge?: string;          // "$38,000 Saved annually"
  usageBadge?: string;            // "IN USE BY THE UNIVERSITY OF WASHINGTON"
  client: string;                 // "University of Washington"
  role: string;                   // "Lead Designer"
  blurb: string;                  // multi-line description
  ctaHref: string;                // /work/slug
};

export default function FeaturedCard(props: FeaturedProps) {
  const {
    index,
    title,
    year,
    tags,
    imageSrc,
    imageAlt = title,
    savingsBadge,
    usageBadge,
    client,
    role,
    blurb,
    ctaHref,
  } = props;

  return (
    <section className="space-y-8">
      {/* IMAGE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative rounded-[1.5rem] bg-neutral-200/80 overflow-hidden"
      >
        {/* aspect to keep it tall/wide like your mock */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />

          {/* CENTER TITLE */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="px-4 py-2 bg-black/50 rounded-lg">
              <h3 className="text-xl md:text-3xl lg:text-4xl font-medium tracking-wide text-white drop-shadow">
                {title}
              </h3>
            </div>
          </div>

          {/* TOP-LEFT BIG INDEX */}
          <div className="absolute left-6 top-6 select-none">
            <span className="block text-white/90 text-[2.5rem] md:text-[3.25rem] font-bold -rotate-90 origin-left">
              {String(index).padStart(2, "0")}
            </span>
          </div>

          {/* TOP-RIGHT YEAR + TAG STACK */}
          <div className="absolute right-6 top-6 text-right">
            <div className="text-xs md:text-sm font-semibold text-white/90">{year}</div>
            <div className="mt-4 text-[0.65rem] md:text-xs font-mono tracking-wider text-white/85 leading-4">
              {tags.map((t) => (
                <div key={t} className="uppercase">{t}</div>
              ))}
            </div>
          </div>

          {/* BOTTOM-LEFT GREEN BADGE */}
          {savingsBadge && (
            <div className="absolute left-6 bottom-6">
              <span className="inline-flex items-center rounded-[0.5rem] bg-lime-400 text-lime-900 text-xs md:text-sm px-3 py-1 font-mono">
                {savingsBadge}
              </span>
            </div>
          )}

          {/* BOTTOM-RIGHT USAGE PILL */}
          {usageBadge && (
            <div className="absolute right-6 bottom-6">
              <span className="inline-flex items-center rounded-full border border-white/70 bg-white/10 text-white/95 backdrop-blur px-4 py-1 text-[0.65rem] md:text-xs font-mono">
                {usageBadge}
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* BELOW-CARD DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* LEFT: client + role */}
        <div className="md:col-span-3">
          <p className="font-semibold">{client}</p>
          <p className="mt-1">{role}</p>
        </div>

        {/* MIDDLE: blurb */}
        <div className="md:col-span-7">
          <p className="max-w-[55ch] leading-relaxed">{blurb}</p>
        </div>

        {/* RIGHT: CTA */}
        <div className="md:col-span-2 md:justify-self-end">
          <Link
            href={ctaHref}
            className={clsx(
              "inline-flex items-center gap-2 rounded-full",
              "bg-lime-400 text-lime-900 px-4 py-2 text-sm font-medium",
              "shadow-[0_1px_0_rgba(0,0,0,.06)] hover:shadow transition"
            )}
          >
            Full Project
            <span className="inline-block h-2 w-2 rounded-full bg-lime-900/50" />
          </Link>
        </div>
      </div>
    </section>
  );
}
