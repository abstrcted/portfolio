import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full bg-[#111] text-[#E5E5E5] pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Grid: Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-20">
          <div className="md:col-span-8 space-y-8">
            <p className="text-xs uppercase tracking-widest text-neutral-500">
              [ Awaiting your response ]
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] font-medium tracking-tight">
              Let's build something <br />
              <span className="text-neutral-500">beautiful together.</span>
            </h2>
            <div className="pt-4">
                <a 
                  href="mailto:primitivobambao@gmail.com"
                  className="text-xl md:text-2xl border-b border-white/30 pb-1 hover:border-white hover:text-white transition-colors text-neutral-300"
                >
                    primitivobambao@gmail.com
                </a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between">
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              We remember what looks good, but we trust what works. Visual clarity and purpose are inseparable.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-12">
               <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Socials</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/primitivo-bambao/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        Behance
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Sitemap</h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                    <li><Link href="/work" className="hover:text-white transition">Work</Link></li>
                    <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                  </ul>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 uppercase tracking-wider font-mono">
           <p>© {year} Primitivo.</p>
           <p>All Systems Operational</p>
        </div>
      </div>
    </footer>
  );
}