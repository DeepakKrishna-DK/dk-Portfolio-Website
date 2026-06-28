"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { Code2 } from "lucide-react";
import { useRef } from "react";

const VIEWPORT = { once: true, margin: "-100px" };
const easeOutExpo = [0.16, 1, 0.3, 1] as any;

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getBadge = (role: string) => {
    const lower = role.toLowerCase();
    if (lower.includes("lead")) return "Leadership";
    if (lower.includes("research")) return "Research";
    if (lower.includes("intern")) return "Internship";
    if (lower.includes("project")) return "Development";
    return "Experience";
  };

  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32 overflow-hidden flex justify-center">
      <div className="w-full max-w-5xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <span className="text-[#00F5FF] text-[11px] font-bold tracking-[0.2em] uppercase">EXPERIENCE</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            My Professional <span className="text-[#00F5FF] drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">Journey</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl text-center">
            A timeline of my roles, research, projects, and contributions in the field of cybersecurity and technology.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div ref={containerRef} className="relative mt-12">
          
          {/* Animated Scroll Line */}
          <div className="absolute top-0 bottom-0 right-[calc(100%-80px)] sm:right-[calc(100%-120px)] w-[2px] bg-white/5 origin-top">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#00F5FF] via-[#00F5FF] to-transparent shadow-[0_0_10px_#00F5FF]" 
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: i * 0.1, duration: 0.8, ease: easeOutExpo }}
                className="group relative grid grid-cols-[80px_1fr] sm:grid-cols-[120px_1fr] gap-4 sm:gap-8 items-stretch"
              >
                {/* Left: Date */}
                <div className="flex flex-col items-end text-right pt-6 pr-4 sm:pr-8 relative">
                  <div className="text-[#00F5FF] font-medium text-xs sm:text-sm group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.5)] transition-all duration-300">
                    {e.when.split("–")[0]}
                  </div>
                  {e.when.includes("–") && (
                    <div className="text-white/60 text-xs sm:text-sm group-hover:text-white/90 transition-colors duration-300">
                      – {e.when.split("–")[1]}
                    </div>
                  )}
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={VIEWPORT}
                    transition={{ delay: (i * 0.1) + 0.3, type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute top-7 right-[-6px] w-3.5 h-3.5 rounded-full bg-[#020408] border-[2px] border-[#00F5FF] group-hover:bg-[#00F5FF] group-hover:shadow-[0_0_15px_#00F5FF] transition-all duration-300 z-10"
                  />
                </div>

                {/* Right: Card */}
                <div className="card-hover p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#020408]/80 backdrop-blur-md relative overflow-hidden group-hover:-translate-y-1 group-hover:border-[#00F5FF]/40 group-hover:shadow-[0_10px_30px_rgba(0,245,255,0.1)] group-hover:bg-[#00F5FF]/5 transition-all duration-500">
                  
                  {/* Soft top glow on card */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo"></div>
                  
                  {/* Glass reflection sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none" />

                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 group-hover:text-[#00F5FF] transition-colors duration-300">
                        {e.role}
                      </h3>
                      <div className="text-[#00F5FF] font-medium text-sm mt-1">{e.org}</div>
                    </div>
                    <div className="bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-[#9D4EDD] text-[10px] sm:text-xs px-3 py-1 rounded-md font-medium shrink-0 group-hover:bg-[#7B2CBF]/20 transition-colors duration-300">
                      {getBadge(e.role)}
                    </div>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {e.bullets.join(" ")}
                  </p>

                  <div className="flex items-start gap-2">
                    <Code2 className="w-4 h-4 text-[#00F5FF] shrink-0 mt-0.5 group-hover:drop-shadow-[0_0_5px_#00F5FF] transition-all duration-300" />
                    <div className="text-sm">
                      <span className="text-[#00F5FF] font-medium">Technologies: </span>
                      <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300">{e.tools.join(", ")}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
