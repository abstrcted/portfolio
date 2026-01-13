"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const roles = ["UX Designer", "UI Engineer", "Creative", "Developer"];

export default function Header() {
  const [roleIndex, setRoleIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Changed: Removed glassmorphism, added border-b, used Sim-1 background color
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F3F3F3]/90 border-b border-neutral-200/60 backdrop-blur-sm">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT: Logo + Status Dot + Animated Role */}
        <div className="flex items-center gap-3 w-[200px]">
          <Link href="/" className="font-semibold tracking-tight text-[#111]">
            Primitivo.
          </Link>
          
          {/* Technical divider */}
          <span className="h-4 w-[1px] bg-neutral-300"></span>
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
            </span>
            
            <div className="relative h-5 overflow-hidden w-[120px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="absolute inset-0 flex items-center text-xs font-medium text-neutral-500 uppercase tracking-wide"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CENTER: Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
          <Link href="/" className={clsx("hover:text-black transition-colors", pathname === "/" && "text-black")}>Home</Link>
          <Link href="/work" className={clsx("hover:text-black transition-colors", pathname.startsWith("/work") && "text-black")}>Work</Link>
          <Link href="/about" className={clsx("hover:text-black transition-colors", pathname === "/about" && "text-black")}>About</Link>
        </nav>

        {/* RIGHT: Contact Link (Simple text, no button pill) */}
        <div className="w-[200px] flex justify-end">
            <Link 
                href="mailto:primitivobambao@gmail.com" 
                className="text-sm font-medium text-neutral-500 hover:text-black transition-colors"
            >
                Contact →
            </Link>
        </div>
      </div>
    </header>
  );
}