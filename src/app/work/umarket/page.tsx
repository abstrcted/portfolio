import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UMarket — Student E-commerce",
  description:
    "A campus-focused marketplace for students: books, tech, tickets, services, and deals — fast, affordable, and built for student life.",
};

export default function UMarketPage() {
  return (
    <main className="px-6 md:px-10 lg:px-14 py-14 md:py-50">
      {/* 01 — Intro / Hero */}
      <section className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-center">
        {/* Copy */}
        <div className="col-span-12 lg:col-span-5">
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            Product & UI
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-[1.05]">
            UMarket
          </h1>
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            UMarket is an e-commerce platform built for students. It brings
            textbooks, class materials, event tickets, second-hand deals, and
            on-campus services into one place. The experience is optimized for
            tight budgets and fast pickup between classes.
          </p>

          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>• Student-ID sign in with program-based recommendations</li>
            <li>• Buy, sell, and reserve items with campus pickup lockers</li>
            <li>• Budget Mode: price caps, rental options, and alerts</li>
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
              src="/desktop4.png"
              alt="UMarket home — student marketplace overview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 02 — Three-up details */}
      <section id="details" className="mt-16 md:mt-54 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-10">
          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/desktop5.png"
                alt="Listings — textbooks, electronics, and supplies"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26vw, 100vw"
              />
            </figure>
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/desktop7.png"
                alt="Checkout — student discounts and pickup lockers"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26vw, 100vw"
              />
            </figure>
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/desktop6.png"
                alt="Profile — orders, rentals, and sell-back"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26vw, 100vw"
              />
            </figure>
          </div>

          {/* Text block */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Built around student budgets and schedules
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              The UI reduces cognitive load and favors quick decisions. Students
              can compare prices across sellers, reserve items for pickup
              between classes, and list used gear in under a minute. A clear
              progress header and sticky actions help busy users complete
              purchases without losing their place.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Price comparison with savings callouts</li>
              <li>• Filters by course code, program, and campus location</li>
              <li>• Locker pickup / meet-up scheduler with map slots</li>
              <li>• Rental timelines + reminders for due dates</li>
              <li>• Accessibility: large targets, contrast, semantic forms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03 — Video Showcase */}
      <section className="mt-20 md:mt-28 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-black">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
          <div className="mt-8 md:mt-10 relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
            <video
              className="w-full h-full"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              poster="/projects/umarket/video-poster.jpg"
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
