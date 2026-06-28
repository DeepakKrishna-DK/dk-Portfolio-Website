"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GitBranch, Shield, Lock, Server, Bug, ChevronLeft, ChevronRight } from "lucide-react";
import { TiltCard } from "../ui/TiltCard";
import { PROJECTS } from "@/lib/data";

const easeOutExpo = [0.16, 1, 0.3, 1] as any;

// Map specific icons to project slugs since data.ts doesn't store components
const getProjectIcon = (slug: string) => {
  if (slug === "rudras") return Shield;
  if (slug === "hylexcrypt") return Lock;
  if (slug === "vikranta-id") return Server;
  return ArrowUpRight;
};

export default function Projects() {
  const [active, setActive] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgentMatch = typeof navigator !== "undefined" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isIPadOS = typeof navigator !== "undefined" && typeof document !== "undefined" && navigator.userAgent.includes("Mac") && "ontouchend" in document;
      const isTouch = typeof window !== "undefined" && (("ontouchstart" in window) || (navigator.maxTouchPoints > 0));
      setIsMobile(userAgentMatch || isIPadOS || window.innerWidth < 1024 || (isTouch && window.innerWidth <= 1366));
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused || isModalOpen) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, isModalOpen, active]);

  const handleNext = () => setActive((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  const handlePrev = () => setActive((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <span className="text-[#00F5FF] text-[11px] font-bold tracking-[0.2em] uppercase">Security operations</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-lg mb-4">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#00F5FF]">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative h-[550px] sm:h-[550px] md:h-[500px] flex items-center justify-center perspective-[1000px] mt-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {PROJECTS.map((project, i) => {
            const Icon = getProjectIcon(project.slug);

            let diff = i - active;
            if (active === 0 && i === PROJECTS.length - 1) diff = -1;
            if (active === PROJECTS.length - 1 && i === 0) diff = 1;

            const isVisible = Math.abs(diff) <= 1 || PROJECTS.length <= 3;

            let normalizedDiff = diff;
            if (diff < -1) normalizedDiff = -2;
            if (diff > 1) normalizedDiff = 2;

            const isActive = normalizedDiff === 0;

            return (
              <motion.div
                key={project.slug}
                initial={false}
                animate={{
                  x: `${isMobile ? normalizedDiff * 85 : normalizedDiff * 60}%`,
                  scale: isActive ? 1 : (isMobile ? 0.9 : 0.85),
                  opacity: isActive ? 1 : isVisible ? (isMobile ? 0.15 : 0.4) : 0,
                  rotateY: isMobile ? normalizedDiff * -8 : normalizedDiff * -15,
                  zIndex: isActive ? 50 : 40 - Math.abs(normalizedDiff),
                }}
                transition={{ duration: isMobile ? 0.25 : 0.5, ease: "easeOut" }}
                onClick={() => {
                  if (!isActive) setActive(i);
                  else setIsModalOpen(true);
                }}
                className={`absolute w-full max-w-[320px] sm:w-[350px] md:w-[400px] h-[480px] sm:h-[500px] md:h-[500px] cursor-pointer optimize-gpu ${!isVisible && "pointer-events-none"}`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <TiltCard className="h-full w-full">
                  <div
                    className={`group relative h-full flex flex-col card rounded-3xl overflow-hidden transition-all duration-500 ease-out-expo ${!isActive ? "border border-white/5 opacity-80" : ""}`}
                    style={isActive ? {
                      boxShadow: `0 10px 40px -10px ${project.color}40, 0 0 100px 10px ${project.color}15`,
                      borderColor: `${project.color}60`,
                      borderWidth: "1px",
                      borderStyle: "solid",
                      background: "rgba(255,255,255,0.03)",
                      transform: "translateY(-10px)",
                    } : {}}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00F5FF]/5 to-transparent -translate-y-[150%] group-hover:translate-y-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none z-20" />
                    )}

                    <div className="h-28 sm:h-32 flex items-center justify-center relative shrink-0 border-b border-border/50 overflow-hidden" style={{ background: `${project.color}10` }}>
                      <Icon className="w-12 h-12 transition-transform duration-500 group-hover:scale-110" style={{ color: project.color }} />
                      <span
                        className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded shadow-sm"
                        style={{
                          color: project.color,
                          background: `${project.color}15`,
                          border: `1px solid ${project.color}30`,
                        }}
                      >
                        {project.tag}
                      </span>
                      {project.statusLabel && (
                        <span
                          className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border shadow-sm"
                          style={{
                            color: project.statusColor,
                            background: `${project.statusColor}15`,
                            borderColor: `${project.statusColor}30`,
                          }}
                        >
                          {project.statusLabel}
                        </span>
                      )}
                    </div>

                    <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10 overflow-hidden">
                      <h3 className={`font-sans font-black text-xl sm:text-2xl uppercase mb-1 drop-shadow-md transition-colors duration-300 ${isActive ? "text-[#00F5FF]" : "text-white"}`}>
                        {project.name}
                      </h3>
                      <div className="font-mono text-[10px] text-white/40 font-bold mb-4 group-hover:text-white/60 transition-colors duration-300">{project.sub}</div>
                      <p className="font-mono text-[13px] leading-relaxed text-white/70 mb-6 flex-grow overflow-y-auto scrollbar-none pr-2 group-hover:text-white/90 transition-colors duration-300">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((t) => (
                          <span key={t} className="chip border-white/10 text-white/60 bg-white/5 py-1 px-3 transition-colors duration-300 group-hover:bg-[#00F5FF]/10 group-hover:text-[#00F5FF] group-hover:border-[#00F5FF]/30 group-hover:shadow-[0_0_10px_rgba(0,245,255,0.1)]">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-4 flex">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isActive) setIsModalOpen(true);
                          }}
                          className={`btn-primary relative overflow-hidden w-full justify-center py-2.5 text-[10px] tracking-widest uppercase font-mono transition-all duration-300 ${!isActive ? "opacity-50 pointer-events-none" : "hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:scale-[1.02]"}`}
                        >
                          <span className="relative z-10 flex items-center justify-center">View Data<ArrowUpRight className="w-3 h-3 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8 relative z-50">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-white/50 hover:text-[#00F5FF] hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-[#00F5FF] shadow-[0_0_10px_#00F5FF]" : "w-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-center text-white/50 hover:text-[#00F5FF] hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Spring Modal Implementation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="bg-[#020408]/90 backdrop-blur-xl p-4 md:p-8 fixed inset-0 z-[200] grid place-items-center overflow-y-auto cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="card border border-[#00F5FF]/20 bg-[#020408] text-white p-8 sm:p-12 rounded-3xl w-full max-w-3xl shadow-[0_0_60px_rgba(0,245,255,0.15)] cursor-default relative overflow-hidden"
            >
              {(() => {
                const project = PROJECTS[active];
                const ActiveIcon = getProjectIcon(project.slug);
                return (
                  <>
                    <ActiveIcon className="text-white/5 rotate-12 w-64 h-64 absolute z-0 -top-12 -right-12 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center border border-[#00F5FF]/30 bg-[#00F5FF]/10 text-[#00F5FF] shadow-[0_0_20px_rgba(0,245,255,0.2)]">
                        <ActiveIcon className="w-8 h-8" />
                      </div>

                      <h3 className="font-sans text-3xl md:text-4xl font-black uppercase mb-1 drop-shadow-md text-[#00F5FF]">
                        {project.name}
                      </h3>
                      <div className="font-mono text-xs text-white/50 mb-6 font-bold">
                        {project.sub}
                      </div>

                      <div
                        className="inline-block px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest mb-8 font-bold"
                        style={{ backgroundColor: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                      >
                        {project.tag}
                      </div>

                      <p className="font-mono text-[15px] text-white/80 mb-10 leading-relaxed max-w-2xl">
                        {project.desc}
                        <br /><br />
                        {project.slug === "rudras" ? (
                          <span className="text-[#F69708] text-[11px] uppercase tracking-widest font-bold">
                            [Detailed analysis and case study for this operation is highly classified and currently encrypted. Initiate authorization protocols to proceed.]
                          </span>
                        ) : (
                          <span className="text-[#00F5FF] text-[11px] uppercase tracking-widest font-bold">
                            [ Status: Declassified ]<br />
                            Full architectural blueprints and source code for this operation have been made available to the public. Access the repository below for technical specifications.
                          </span>
                        )}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.stack.map((t) => (
                          <span key={t} className="chip border-[#00F5FF]/20 text-[#00F5FF] bg-[#00F5FF]/5 py-1 px-3">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="btn-outline flex-1 py-4 justify-center text-[11px] tracking-widest border-white/20 hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/5 hover:text-[#00F5FF] transition-all"
                        >
                          Close Data
                        </button>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex-1 py-4 justify-center text-[11px] tracking-widest hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:scale-[1.02] transition-all group"
                        >
                          <GitBranch className="w-4 h-4 mr-2 group-hover:-rotate-12 transition-transform" /> {project.slug === "rudras" ? "Project Status" : "Source Code"}
                        </a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
