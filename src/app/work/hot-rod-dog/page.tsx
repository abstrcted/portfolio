// src/app/work/hot-rod-dog/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hot Rod Dog — Redesign",
  description:
    "Complete redesign and visual overhaul of Hot Rod Dog: menus, website, and collateral. Retro diner roots, refreshed for today.",
};

export default function HotRodDogPage() {
  return (
    <main className="px-6 md:px-10 lg:px-14 py-14 md:py-45">
      {/* 01 — Intro / Hero */}
      <section className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-center">
        {/* Copy */}
        <div className="col-span-12 lg:col-span-5">
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            Brand Refresh
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-[1.05]">
            HOT ROD DOG
          </h1>
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            A complete redesign and visual overhaul of a beloved local spot.
            I modernized dated graphics across <strong>menus</strong>, the{" "}
            <strong>website</strong>, and in-store materials. The new system
            keeps the spirit of a <strong>retro diner</strong> while tightening
            typography, color, and layout for a clean, contemporary feel.
          </p>

          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>• Brand system with diner-inspired palette and type</li>
            <li>• Menu redesign for clarity, speed, and readability</li>
            <li>• Responsive web redesign with simple, fast navigation</li>
          </ul>

          <div className="mt-8">
            <Link
              href="/work"
              className="inline-flex items-center rounded-full border border-neutral-300 px-5 py-2 text-sm hover:bg-neutral-50 transition"
            >
              View all projects
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-200">
            <Image
              src="/hotdog.jpg" // TODO: replace with your asset
              alt="Hot Rod Dog brand hero — refreshed diner-style visuals"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

{/* 02 — Three-up details */}
<section className="mt-16 md:mt-64 max-w-[1400px] mx-auto">
  <div className="grid grid-cols-1 gap-10">
    {/* Images */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
        <Image
          src="/hotdog.jpg"
          alt="Menu redesign — typographic hierarchy and pricing clarity"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 26vw, 100vw"
        />
      </figure>
      <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
        <Image
          src="/hotdog.jpg"
          alt="Website home — retro cues with modern layout"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 26vw, 100vw"
        />
      </figure>
      <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
        <Image
          src="/hotdog.jpg"
          alt="In-store signage and to-go packaging"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 26vw, 100vw"
        />
      </figure>
    </div>

    {/* Text block (now below images) */}
    <div>
      <h2 className="text-xl md:text-2xl font-semibold">
        Retro energy, modern discipline
      </h2>
      <p className="mt-4 text-neutral-700 leading-relaxed">
        The identity borrows shapes and colors from classic roadside diners, then simplifies
        them to work across screens and print. The menu layout uses a clear typographic scale
        and spacing system so guests can scan categories quickly and find their favorites
        without visual noise.
      </p>
      <ul className="mt-6 space-y-2 text-neutral-700">
        <li>• Color: cherry red, cream, jet black, steel</li>
        <li>• Type: bold display + readable sans for menus</li>
        <li>• Components: buttons, badges, cards, and price rows</li>
      </ul>
    </div>
  </div>
</section>


      {/* 03 — Video Showcase (black section) */}
      <section className="mt-20 md:mt-28 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-black">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
          <div className="flex items-center justify-between gap-6 flex-wrap">
          </div>

          <div className="mt-8 md:mt-10 relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              poster="/projects/hotrod/video-poster.jpg" // optional
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              {/* Fallback */}
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}
