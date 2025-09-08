// src/app/work/uhealth/page.tsx
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UHealth — Rapid Pneumonia Screening",
  description:
    "Deep learning tool for chest X-ray classification built in six hours at UHackathon. Achieved up to 95% accuracy across respiratory diseases with an MLOps pipeline for ongoing training and deployment.",
};

export default function UHealthPage() {
  return (
    <main className="px-6 md:px-10 lg:px-14 py-14 md:py-45">
      {/* 01 — Intro / Hero */}
      <section className="max-w-[1400px] mx-auto grid grid-cols-12 gap-8 items-center">
        {/* Copy */}
        <div className="col-span-12 lg:col-span-5">
          <p className="text-sm uppercase tracking-widest text-neutral-500">
            UHackathon • 2nd Place
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-[1.05]">
            UHEALTH
          </h1>
          <p className="mt-6 text-lg text-neutral-700 leading-relaxed">
            UHealth is a deep learning prototype that predicts pneumonia from chest x-rays.
            Built under a six-hour hackathon deadline, the project combined model
            development, interface design, and deployment best practices into an
            easy-to-understand project.
          </p>

          <ul className="mt-6 space-y-2 text-neutral-700">
            <li>• Convolutional Neural Network with 92% accuracy (pneumonia vs. normal)</li>
            <li>• Extended ResNetv2 to 4 respiratory diseases with 95% accuracy</li>
            <li>• Cleaned and augmented 10k+ image dataset for robust training</li>
            <li>• 2nd place in Tacoma's largest hackathon ever</li>
          </ul>

          <div className="mt-8 flex items-center gap-3">
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
              src="/featured-pneumonia.jpg"
              alt="UHealth hero — chest X-ray classification interface"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* 02 — Three-up details + text */}
      <section className="mt-16 md:mt-64 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-10">
          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/hackathon.jpg"
                alt="Upload flow — drag-and-drop with clear states"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26vw, 100vw"
              />
            </figure>
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/hero-3.jpg"
                alt="Result view — confidence ring with low/medium/high bands"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26vw, 100vw"
              />
            </figure>
            <figure className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200">
              <Image
                src="/hero-4.jpg"
                alt="Demo context — judges testing UHealth at UHackathon"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 26vw, 100vw"
              />
            </figure>
          </div>

          {/* Text block */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              From hackathon demo to deployable system
            </h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              The project began as a binary pneumonia detector but scaled to a
              multi-disease classifier with a 95% accuracy rate. An automated
              MLOps pipeline enables ongoing retraining and seamless deployment,
              demonstrating how even a short-term prototype can lay groundwork
              for a production-ready tool.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-700">
              <li>• Result speed: 3–5 seconds on mid-range laptop hardware</li>
              <li>• Automated CI/CD ensures model freshness and reproducibility</li>
              <li>• Judges cited UX clarity as a key strength — 2nd place overall</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
