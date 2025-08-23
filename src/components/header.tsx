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

  const roleVariants = {
    enter: { y: 8, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exit: { y: -8, opacity: 0 },
  } as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center">
          {/* LEFT: logo and animated text */}
          <div className="w-1/3 flex items-center space-x-3">
            <Link
              href="/"
              aria-label="Go to home"
              className="inline-flex items-center font-semibold text-black text-lg"
            >
              Primitivo
              <span
                className={`ml-2 w-2 h-2 rounded-full ${DOT_COLOR} inline-block`}
                aria-label="active"
              />
              <div className="ml-2 relative h-5 overflow-hidden min-w-[100px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    variants={roleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="block text-neutral-600 leading-none"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </Link>
          </div>

          {/* CENTER: nav */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-8 text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </nav>

          {/* RIGHT: Contact button */}
          <div className="w-1/3 flex justify-end">
            <Link
              href={contactHref}
              className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-50 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
