"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// --- Image Overlay with ASCII ---
function AsciiImageVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // --- ASCII Density ---
    const imageSrc = "/iv-solid.png"; 
    const fontSize = 8;               // <--- Adjust for density, lower = denser
    const charSet = " .:-=+*#%@おボヰ";
    
    const img = new window.Image();
    img.src = imageSrc;
    
    let time = 0;
    let animationFrameId: number;

    img.onload = () => {
      render();
    };

    const resize = () => {
      const parent = containerRef.current;
      if (parent) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
      }
    };
    window.addEventListener("resize", resize);
    resize();

    const offCanvas = document.createElement("canvas");
    const offCtx = offCanvas.getContext("2d");

    const render = () => {
      if (!ctx || !offCtx) return;
      
      const width = containerRef.current?.clientWidth || canvas.width;
      const height = containerRef.current?.clientHeight || canvas.height;

      ctx.clearRect(0, 0, width, height);
      
      const cols = Math.floor(width / fontSize);
      const rows = Math.floor(height / fontSize);
      
      offCanvas.width = cols;
      offCanvas.height = rows;
      
      const imgAspect = img.width / img.height;
      let drawW = cols;
      let drawH = cols / imgAspect;
      
      if (drawH > rows) {
        drawH = rows;
        drawW = rows * imgAspect;
      }
      
      const offsetX = (cols - drawW) / 2;
      const offsetY = (rows - drawH) / 2;
      
      offCtx.clearRect(0,0, cols, rows);
      offCtx.drawImage(img, offsetX, offsetY, drawW, drawH);
      
      const imgData = offCtx.getImageData(0, 0, cols, rows).data;

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      time += 0.015;

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const index = (y * cols + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          const alpha = imgData[index + 3];

          if (alpha < 20) continue;

          const brightness = (r + g + b) / 3;
          const charIndex = Math.floor((1 - (brightness / 255)) * (charSet.length - 1));
          const char = charSet[Math.max(0, charIndex)];

          // --- WIGGLE METER THE WIGGOMETER ---
          const waveX = Math.sin(y * 0.15 + time) * 0.6; 
          const waveY = Math.cos(x * 0.15 + time) * 0.6; 

          const posX = x * fontSize + (fontSize / 2) + waveX;
          const posY = y * fontSize + (fontSize / 2) + waveY;

          // Opacity adjustments
          ctx.fillStyle = `rgba(20, 20, 20, ${Math.min(1, (alpha / 255) + 0.1)})`;
          ctx.fillText(char, posX, posY);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
      <div ref={containerRef} className="w-full h-full min-h-[500px] relative flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full opacity-25 blur-[3px] pointer-events-none transition-all duration-1000">
          <Image 
            src="/iv-solid.png" 
            alt="Visual" 
            fill 
            className="object-contain" 
          />
        </div>

        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none mix-blend-multiply"
        />
      </div>
    );
}

// --- DATA & REST OF PAGE ---
const projects = [
  { 
    slug: "/work/uw-file-system", 
    title: "File Management System", 
    year: "2025", 
    badge: "$38,000 saved annually",
    client: "University of Washington",
    role: "Lead Designer",
    blurb: "Full redesign of the University of Washington Tacoma's file management system, optimizing organizational workflows.",
    imageSrc: "/SETlib.jpg" 
  },
  { 
    slug: "/work/pneumonia-detector", 
    title: "Pneumonia Detector", 
    year: "2025", 
    badge: "92% Prediction Rate",
    client: "Tech Startup Club",
    role: "Front End Dev",
    blurb: "Convolutional neural network pneumonia screening model built to analyze x-ray data with high accuracy.",
    imageSrc: "/UHealth1.png" 
  },
  { 
    slug: "/work/opportunity-circle", 
    title: "Opportunity Circle", 
    year: "2024", 
    badge: "$300,000+ raised",
    client: "321Buddy",
    role: "Designer & Developer",
    blurb: "Led design and development of an accessible web experience dedicated to uplifting community engagement.",
    imageSrc: "/oppCircle.jpg" 
  },
];

function MinimalProjectSection({ project, index }: { project: any, index: string }) {
  return (
    <div className="group border-t border-neutral-300 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs font-medium tracking-widest text-neutral-500 uppercase">
             <span>{index}</span>
             <span className="w-8 h-[1px] bg-neutral-300"></span>
             <span>{project.year}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#111]">
            {project.title}
          </h3>
          <p className="text-neutral-600 leading-relaxed text-lg max-w-md">
            {project.blurb}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 py-6 border-y border-dashed border-neutral-300">
           <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Role</span>
              <span className="text-sm font-medium">{project.role}</span>
           </div>
           <div>
              <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Client</span>
              <span className="text-sm font-medium">{project.client}</span>
           </div>
           {project.badge && (
             <div className="col-span-2">
                <span className="block text-xs uppercase tracking-wider text-neutral-400 mb-1">Impact</span>
                <span className="text-sm font-medium text-lime-700 bg-lime-50 px-2 py-1 inline-block rounded-md">
                   {project.badge}
                </span>
             </div>
           )}
        </div>

        <div>
          <Link 
            href={project.slug} 
            className="inline-flex items-center gap-2 text-sm font-medium text-[#111] hover:text-neutral-500 transition-colors"
          >
            VIEW CASE STUDY <span className="text-lg">→</span>
          </Link>
        </div>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
         <Link href={project.slug} className="block overflow-hidden rounded-sm bg-neutral-200 aspect-[4/3] relative">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
         </Link>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#111] font-sans selection:bg-[#E0E0E0]">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-center pt-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full relative z-10">
          
          {/* Left: Your Personal Content */}
          <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-[clamp(3.5rem,7vw,6rem)] leading-[0.9] tracking-tighter font-medium text-[#1A1A1A]">
                Hello, I'm <br/>
                <span className="text-lime-600">Primitivo.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-lg space-y-8"
            >
              <h2 className="text-2xl md:text-3xl leading-tight tracking-tight text-neutral-800 font-normal">
                I'm a UX designer with a background in digital design & a love for perfumes.
              </h2>
              
              <p className="text-neutral-500 text-lg leading-relaxed">
                I'm a fan of tiny details, big ideas, and uplifting communities through design.
              </p>

              <div className="pt-2">
                 <Link 
                   href="/about" 
                   className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#111] text-white text-sm font-medium transition hover:bg-neutral-800 hover:scale-105 active:scale-95"
                 >
                    There's More!
                 </Link>
              </div>
            </motion.div>
          </div>

          {/* Right: The KINETIC ASCII VISUAL */}
          <motion.div
            className="lg:col-span-6 w-full h-[50vh] lg:h-[80vh] flex items-center justify-center relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
             {/* !!! UPDATED: Use the new component name here !!! */}
             <AsciiImageVisual />
          </motion.div>
        </div>
        
        {/* Footer of Hero */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-12 border-t border-neutral-200/50">
             <div className="container mx-auto flex flex-col md:flex-row gap-8 md:gap-24 text-sm text-neutral-500 font-medium">
                 <div>
                    <span className="block text-neutral-300 text-xs uppercase tracking-wider mb-2">Current Status</span>
                    <p>Designing with <span className="text-[#111]">321Buddy</span> & <span className="text-[#111]">UX@UWT</span></p>
                 </div>
                 <div>
                    <span className="block text-neutral-300 text-xs uppercase tracking-wider mb-2">Previous Status</span>
                    <p>Designing with <span className="text-[#111]">TSC</span>, Global Innovation & Design Lab</p>
                 </div>
             </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION */}
      <section className="pb-24 pt-12 relative z-20 bg-[#F3F3F3]">
        <div className="container mx-auto px-6">
           <div className="mb-24">
               <h2 className="text-4xl tracking-tighter font-medium mb-4">Selected Work</h2>
               <div className="w-full h-[1px] bg-neutral-300"></div>
           </div>

           <div className="flex flex-col">
              {projects.map((project, i) => (
                <MinimalProjectSection key={project.slug} project={project} index={`0${i + 1}`} />
              ))}
           </div>
           
           <div className="flex justify-center pt-12">
             <Link href="/work" className="text-neutral-400 hover:text-black transition-colors text-sm uppercase tracking-widest font-medium border-b border-transparent hover:border-black pb-1">
                View Full Archive
             </Link>
           </div>
        </div>
      </section>

    </div>
  );
}