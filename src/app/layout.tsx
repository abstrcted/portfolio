import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "./lenis";
import ScrollToTop from "./scroll-to-top";
import Header from "@/components/header";
import Footer from "@/components/footer"; // <--- 1. Import Footer

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"], 
});

export const metadata: Metadata = {
  title: "Primitivo's Portfolio",
  description: "Design Engineer & UX Specialist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-[#F3F3F3] text-[#111111]">
        <SmoothScroll />
        <ScrollToTop />
        
        <Header />
        
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}