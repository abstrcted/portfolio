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
            Brand Refresh (Ongoing Project)
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-[1.05]">
            HOT ROD DOG
          </h1>
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            A complete redesign and visual overhaul of a beloved Tacoma
            restaurant. I modernized dated graphics across menus, and in-store
            materials and developed a website. The new system keeps the spirit
            of a retro diner while tightening typography, color, and layout for
            a clean, contemporary feel.
          </p>

          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>• Brand system with diner-inspired palette and type</li>
            <li>• Menu redesign for clarity, speed, and readability</li>
            <li>• Responsive web redesign with simple, fast navigation</li>
          </ul>

          {/* Read more link */}
          <div className="mt-6">
            <a
              href="#details"
              className="text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer no-underline"
            >
              Read more
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-200">
            <Image
              src="/hotdog.jpg"
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
      <section id="details" className="mt-16 md:mt-64 max-w-[1400px] mx-auto">
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

          {/* Text block */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Retro energy, modern discipline
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              The identity borrows shapes and colors from classic roadside
              diners, then simplifies them to work across screens and print. The
              menu layout uses a clear typographic scale and spacing system so
              guests can scan categories quickly and find their favorites
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

      {/* 03 — Video Showcase */}
      <section className="mt-20 md:mt-28 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-full bg-black">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
          <div className="mt-8 md:mt-10 relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              poster="/projects/hotrod/video-poster.jpg"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-20 md:mt-58 max-w-[1400px] mx-auto text-center">
        <Link
          href="/work"
          className="inline-flex items-center rounded-full border border-neutral-800 px-25 py-4 text-base font-medium hover:bg-neutral-50 transition"
        >
          View more projects
        </Link>
      </section>

    </main>
  );
}
