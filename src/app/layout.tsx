import "./globals.css";
import type { Metadata } from "next";
import { SmoothScroll } from "./lenis";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollToTop from "./scroll-to-top";

export const metadata: Metadata = {
  title: "Primitivo — Portfolio",
  description: "Designer / Developer / Creative",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
