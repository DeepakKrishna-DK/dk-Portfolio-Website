"use client";
import { Radio, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { FOOTER_DATA, PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  const year = FOOTER_DATA.year;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-t border-white/10 px-6 py-8 bg-[#020408]/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-widest text-white/50">
        <div>© {year} {PERSONAL_INFO.name} · All rights reserved.</div>
        
        <div className="flex items-center gap-2 text-white/70">
          <Radio className="h-3 w-3 text-[#00F5FF]" />
          <span>{FOOTER_DATA.tagline}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF7F] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#00FF7F]" />
            </span>
            <span className="text-[#00FF7F]">{FOOTER_DATA.availability}</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 transition-all duration-300"
            style={{ animation: "bounce 5s infinite" }}
            aria-label="Back to top"
          >
            <ArrowUp className="w-3 h-3 text-white/70 group-hover:text-[#00F5FF] transition-colors" />
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
          60% { transform: translateY(-2px); }
        }
      `}} />
    </motion.footer>
  );
}
