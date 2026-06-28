"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { HERO_DATA, PERSONAL_INFO } from "@/lib/data";
// Stagger constants
const STAGGER_DELAY = 0.1;
const easeOutExpo = [0.16, 1, 0.3, 1] as any;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } }
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(true);

  // Custom Typewriter Effect State
  const roles = [PERSONAL_INFO.role, PERSONAL_INFO.role1].filter(Boolean);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 80;
    const timer = setTimeout(() => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  // Mouse position for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the 3D tilt
  const springConfig = { damping: 30, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation (-5 to 5 degrees)
  const rotateX = useTransform(smoothY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [5, -5]);
  const rotateY = useTransform(smoothX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-5, 5]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
      };
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-0 px-6 sm:px-12 md:px-20 xl:px-32 bg-transparent overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
    >

      <div className="mx-auto w-full max-w-[1800px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 relative h-full min-h-[calc(100vh-6rem)]">

        {/* LEFT COLUMN: Main Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center pt-8 pb-24 lg:pb-0 z-20 mt-8 lg:mt-0 relative">

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: STAGGER_DELAY, delayChildren: 0.2 } }
            }}
            className="relative mb-10 w-full max-w-3xl"
          >
            {/* Top Tag */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00F5FF] shadow-[0_0_12px_#00F5FF] animate-pulse"></div>
                <span className="text-[#00F5FF] text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase font-bold">{HERO_DATA.availability}</span>
              </div>
              <div className="flex items-center gap-3 bg-[#D4AF37]/10 w-fit px-4 py-2 rounded-full border border-[#D4AF37]/30 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37] animate-ping"></div>
                <span className="text-[#D4AF37] text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase font-bold">{HERO_DATA.award}</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUpVariant} className="text-[3.5rem] leading-[1] sm:text-7xl lg:text-[7.5rem] font-black font-sans tracking-tight text-white mb-2 uppercase drop-shadow-2xl">
              {PERSONAL_INFO.firstName} <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">{PERSONAL_INFO.lastName}</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2 variants={fadeUpVariant} className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-8 flex flex-wrap items-center h-[48px] sm:h-[60px] lg:h-[72px]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9D4EDD] via-[#4cc9f0] to-[#00F5FF]">
                {currentText}
              </span>
              <span className="text-[#00F5FF] animate-pulse ml-2">|</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p variants={fadeUpVariant} className="text-white/70 text-sm sm:text-lg lg:text-[19px] mb-8 leading-relaxed font-sans font-medium drop-shadow-md">
              {HERO_DATA.description}
            </motion.p>

            {/* Targeting Roles */}
            <motion.div variants={fadeUpVariant} className="flex flex-col gap-3 mb-12">
              <span className="text-[10px] sm:text-xs font-mono text-white/40 uppercase tracking-[0.2em] font-bold">Targeting Roles</span>
              <div className="flex flex-wrap gap-3">
                {HERO_DATA.targetRoles.map((role, idx) => (
                  <span key={idx} className={`px-4 py-1.5 text-xs sm:text-sm font-mono font-bold ${idx % 2 === 0 ? "text-[#00F5FF] bg-[#00F5FF]/5 border border-[#00F5FF]/20" : "text-[#00FF66] bg-[#00FF66]/5 border border-[#00FF66]/20"} rounded-md`}>{role}</span>
                ))}
              </div>
            </motion.div>

            {/* Stats (Glassmorphism Cards) */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 sm:gap-8 mb-12">
              {HERO_DATA.stats.map((stat, i) => (
                <div key={i} className="group flex flex-col gap-1 bg-transparent transition-all duration-300">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#00F5FF] font-sans drop-shadow-lg">{stat.val}</span>
                  <span className="text-[8px] sm:text-[10px] text-white/50 uppercase tracking-widest font-mono font-bold leading-tight max-w-[100px] group-hover:text-white/80 transition-colors">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4 sm:gap-6">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="group relative flex items-center gap-3 bg-gradient-to-r from-[#7B2CBF] to-[#00F5FF] text-white px-8 py-4 sm:py-5 rounded-xl text-xs sm:text-sm font-sans font-bold shadow-[0_4px_20px_rgba(0,245,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-shadow overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out-expo pointer-events-none" />
                VIEW PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={PERSONAL_INFO.resumeUrl}
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-transparent border border-white/20 hover:border-[#00F5FF]/50 text-white hover:text-[#00F5FF] px-8 py-4 sm:py-5 rounded-xl text-xs sm:text-sm font-sans font-bold transition-all hover:bg-[#00F5FF]/5 hover:shadow-[0_0_15px_rgba(0,245,255,0.1)]"
              >
                <FileText className="w-4 h-4" /> VIEW RESUME
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Hero Image */}
        <div className="absolute inset-0 lg:relative lg:col-span-5 h-full min-h-[500px] lg:min-h-0 flex items-end justify-center lg:justify-end pointer-events-none z-0 overflow-hidden lg:overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: easeOutExpo }}
            className="absolute bottom-0 w-[160%] sm:w-[120%] lg:w-[150%] max-w-[950px] right-1/2 translate-x-1/2 lg:right-[-10%] lg:translate-x-0"
            style={{
              rotateX: isMobile ? 0 : rotateX,
              rotateY: isMobile ? 0 : rotateY,
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >

              <img
                src="/hero-solid.png"
                alt={`${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`}
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,245,255,0.2)] opacity-95 lg:opacity-100 mix-blend-lighten"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
                  maskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30 hidden sm:flex"
      >
        <span className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#00F5FF] to-transparent"></div>
      </motion.div>
    </section>
  );
}
