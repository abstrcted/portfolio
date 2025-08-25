// src/app/work/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Project = {
  title: string;
  kind: string;
  href: string;
  src: string;
  alt: string;
  span?: string;   // col-span/row-span classes
  aspect?: string; // fallback aspect ratio
};

const projects: Project[] = [
  {
    title: "File Organization System",
    kind: "UX & UI",
    href: "/work/uw-file-system",
    src: "/mock1ALL.jpg",
    alt: "Large flower at night",
    span: "lg:col-span-8 lg:row-span-2", // big feature on left
    aspect: "aspect-[15.14/9]",
  },
  {
    title: "The Opportunity Circle",
    kind: "Web Design",
    href: "/work/opportunity-circle",
    src: "/oppCircle.jpg",
    alt: "3D watch render",
    span: "lg:col-span-4", // stacked right column
    aspect: "aspect-[5/3]",
  },
  {
    title: "UHealth",
    kind: "UX & UI",
    href: "/work/pneumonia-detector",
    src: "/mock2.jpg",
    alt: "Floating peppers on red",
    span: "lg:col-span-4",
    aspect: "aspect-[5/3]",
  },
  {
    title: "City of Federal Way Parks Program",
    kind: "UX",
    href: "/work/federal-way-mobile-rec",
    src: "/audio.jpg",
    alt: "Group in store",
    span: "lg:col-span-4",
    aspect: "aspect-[5/3]",
  },
  {
    title: "Hot Rod Dog Redesign",
    kind: "Brand Design",
    href: "/work/hot-rod-dog",
    src: "/hotdog.jpg",
    alt: "Cone lamp render",
    span: "lg:col-span-4",
    aspect: "aspect-[5/3]",
  },
  {
    title: "UMarket",
    kind: "UX / UI",
    href: "/work/umarket",
    src: "/mock3.jpg",
    alt: "Tile interface",
    span: "lg:col-span-4",
    aspect: "aspect-[5/3]",
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <Link
      href={p.href}
      className={clsx(
        "group relative w-full overflow-hidden rounded-2xl bg-neutral-200",
        "transition-transform duration-300 hover:scale-[1.02]",
        p.span,
        p.aspect ?? "aspect-[4/3]"
      )}
    >
      {/* Image */}
      <Image
        src={p.src}
        alt={p.alt}
        fill
        sizes="(min-width:1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 flex items-baseline gap-2">
        <h3 className="text-white font-semibold">{p.title}</h3>
        <span className="text-neutral-300 text-sm">· {p.kind}</span>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <main className="px-8 md:px-12 py-14 md:py-20">
      {/* Header */}
      <header className="mb-8 md:mb-12 max-w-[1800px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-medium">All of my projects</h1>
      </header>

      {/* Grid */}
      <section
        className={clsx(
          "grid lg:grid-cols-12 auto-rows-[320px]",
          "gap-y-12 gap-x-16",                // larger gutters
          "max-w-[1800px] mx-auto"             // wider layout
        )}
      >
        {projects.map((p) => (
          <ProjectCard key={p.href} p={p} />
        ))}
      </section>
    </main>
  );
}
