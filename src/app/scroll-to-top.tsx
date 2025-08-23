"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {

    requestAnimationFrame(() => {

      const anyWin = window as any;
      if (anyWin?.lenis?.scrollTo) {
        anyWin.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    });
  }, [pathname]);

  return null;
}
