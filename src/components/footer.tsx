import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // Add id + scroll offset so fixed header doesn’t cover it
    <footer id="footer" className="relative w-full mt-24 scroll-mt-24">
      {/* Full-bleed background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-white">
        <div className="grid grid-cols-12 gap-8">
          {/* Left: headline + email + socials */}
          <div className="col-span-12 md:col-span-7">
            <p className="text-sm opacity-80">{"Let's create together!"}</p>

            <a
              href="mailto:primitivobambao@gmail.com"
              className="mt-2 block [font-size:clamp(1.75rem,5vw,3.5rem)] font-semibold tracking-tight"
            >
              primitivobambao@gmail.com
            </a>

            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-90">
              <li><Link href="https://www.behance.net/primitivobambao" target="_blank">Behance</Link></li>
              <li><Link href="https://www.instagram.com/lumikhae/" target="_blank">Instagram</Link></li>
              <li><Link href="https://www.linkedin.com/in/primitivo-bambao/" target="_blank">LinkedIn</Link></li>
            </ul>
          </div>

          {/* Right: quick links + blurb */}
          <div className="col-span-12 md:col-span-5 grid md:grid-cols-1 gap-8 md:pl-48">

            <p className="text-sm leading-relaxed opacity-90">
              We remember what looks good, but we trust what works. The most
              compelling brands are those where visual clarity and purpose are
              inseparable. That’s where true beauty begins.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/30 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex gap-10 text-sm">
            {/* keep this as a mailto (no dead /contact link) */}
            <a href="mailto:primitivobambao@gmail.com" className="hover:opacity-90">
              Contact me!
            </a>
          </div>
          <p className="text-xs opacity-70">© Primitivo {year}</p>
        </div>
      </div>
    </footer>
  );
}
