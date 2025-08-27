"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const roles = ["UX", "UI", "Graphics", "Web", "Branding"];
const DOT_COLOR = "bg-lime-400";

export default function Header() {
  const [roleIndex, setRoleIndex] = useState(0);
  const pathname = usePathname();
  const contactHref = pathname === "/" ? "#footer" : "/#footer";

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-14 sm:h-16 items-center">
          {/* LEFT: logo + role */}
          <div className="w-1/3 flex items-center space-x-2 sm:space-x-3">
            <Link
              href="/"
              aria-label="Go to home"
              className="inline-flex items-center font-semibold text-black text-base sm:text-lg"
            >
              Primitivo
              <span
                className={`ml-1 sm:ml-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${DOT_COLOR} inline-block`}
                aria-label="active"
              />
              {/* Animated role — vertically centered & animates in percentages */}
              <div className="ml-1 sm:ml-2 relative h-4 sm:h-5 overflow-hidden min-w-[64px] sm:min-w-[100px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={roleIndex}
                    initial={{ y: "60%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-60%", opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center text-neutral-600 leading-none text-xs sm:text-sm whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </Link>
          </div>

          {/* CENTER: nav */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>

          {/* RIGHT: Contact button */}
          <div className="w-1/3 flex justify-end">
            <Link
              href={contactHref}
              className="inline-flex items-center rounded-full border border-neutral-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-neutral-50 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
