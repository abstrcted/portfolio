"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useCallback } from "react";
import clsx from "clsx";

// Types remain the same as your original file
export type CaseBullet = { title: string; body: string };
export type CaseSection = {
  eyebrow?: string;
  title: string;
  tocLabel?: string;
  intro?: string;
  bullets?: CaseBullet[];
  imageSrc?: string;
  imageAlt?: string;
};

type CaseProps = {
  title: string;
  subtitle?: string;
  role?: string;
  client?: string;
  toolsUsed?: string;
  liveSiteLabel?: string;
  liveSiteHref?: string;
  heroSrc?: string;
  heroAlt?: string;
  sections: CaseSection[];
};

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function Case({
  title,
  subtitle,
  role,
  client,
  toolsUsed,
  liveSiteLabel,
  liveSiteHref,
  heroSrc,
  heroAlt,
  sections,
}: CaseProps) {
  const ids = useMemo(
    () => sections.map((s, i) => (s.title ? slugify(s.title) : `section-${i}`)),
    [sections]
  );
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  // Lightbox logic (kept exactly as you had it)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = useCallback((src: string, alt?: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt || "");
    document.documentElement.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setLightboxAlt("");
    document.documentElement.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeLightbox();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxSrc, closeLightbox]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return (
    // Changed: Background matches global theme
    <main className="min-h-screen pt-24 pb-20">
      
      {/* HEADER SECTION */}
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl space-y-6">
           <Link href="/work" className="text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-black transition-colors mb-8 block">
              ← Back to Archive
           </Link>
           <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] font-medium tracking-tight text-[#111]">
              {title}
           </h1>
           {subtitle && (
              <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-2xl">
                 {subtitle}
              </p>
           )}
        </div>

        {/* Project Meta Grid - Styled like a data table */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-neutral-200 pt-8">
           {[
             { label: "Role", value: role },
             { label: "Client", value: client },
             { label: "Tools", value: toolsUsed },
           ].map((item, i) => (
             item.value && (
               <div key={i}>
                 <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">{item.label}</span>
                 <span className="block text-sm font-medium text-[#111]">{item.value}</span>
               </div>
             )
           ))}
           {liveSiteLabel && (
             <div>
                <span className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">Live Link</span>
                <a href={liveSiteHref} target="_blank" className="text-sm font-medium text-[#111] border-b border-black pb-0.5 hover:text-neutral-600 transition-colors">
                  {liveSiteLabel} ↗
                </a>
             </div>
           )}
        </div>
      </div>

      {/* HERO IMAGE */}
      {heroSrc && (
        <div className="w-full h-[60vh] md:h-[80vh] relative bg-neutral-100 mb-24 overflow-hidden">
             <Image
                src={heroSrc}
                alt={heroAlt || ""}
                fill
                className="object-cover"
                priority
              />
        </div>
      )}

      {/* CONTENT GRID */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Table of Contents (Sticky) */}
        <nav className="hidden md:block col-span-3 h-full">
           <div className="sticky top-32 space-y-4">
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-4">// Index</span>
              <ul className="space-y-1">
                {sections.map((s, i) => {
                  const id = ids[i];
                  const isActive = active === id;
                  return (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={clsx(
                          "block text-sm transition-all duration-300 border-l-2 pl-4 py-1",
                          isActive
                            ? "border-black text-black font-medium"
                            : "border-neutral-200 text-neutral-400 hover:border-neutral-300 hover:text-neutral-600"
                        )}
                      >
                        {s.tocLabel || s.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
           </div>
        </nav>

        {/* Main Content */}
        <div className="col-span-12 md:col-span-8 md:col-start-5 space-y-24">
          {sections.map((s, i) => (
            <section id={ids[i]} key={ids[i]} className="scroll-mt-32 space-y-8">
              
              {/* Section Header */}
              <div className="space-y-4">
                 {s.eyebrow && (
                    <span className="text-xs font-mono uppercase tracking-widest text-lime-600 block">
                        {s.eyebrow}
                    </span>
                 )}
                 <h2 className="text-2xl md:text-3xl font-medium text-[#111]">{s.title}</h2>
              </div>
              
              {/* Intro Text */}
              {s.intro && (
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {s.intro}
                </p>
              )}

              {/* Bullets */}
              {s.bullets && (
                <ul className="grid grid-cols-1 gap-6 border-l border-neutral-200 pl-6">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="space-y-1">
                      <strong className="block text-sm font-medium text-[#111]">{b.title}</strong>
                      <span className="text-sm text-neutral-500 leading-relaxed">{b.body}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Section Image */}
              {s.imageSrc && (
                <button
                  type="button"
                  onClick={() => openLightbox(s.imageSrc!, s.imageAlt)}
                  className="w-full relative aspect-[16/10] bg-neutral-100 overflow-hidden cursor-zoom-in group"
                >
                   <Image
                    src={s.imageSrc}
                    alt={s.imageAlt || ""}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              )}
            </section>
          ))}
        </div>
      </div>

      {/* View More Projects CTA */}
      <div className="container mx-auto px-6 mt-20 mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#111] text-white text-sm uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors"
          >
            View More Projects
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={closeLightbox}
        >
           <div className="relative w-full h-full">
              <Image
                src={lightboxSrc}
                alt={lightboxAlt}
                fill
                className="object-contain"
              />
           </div>
        </div>
      )}
    </main>
  );
}