"use client";
import { motion, Variants } from "framer-motion";
import { Shield, GraduationCap, MapPin, Globe2, Clock, Code, Lock, Activity, Eye, Key, Server } from "lucide-react";
import { ABOUT_DATA, PERSONAL_INFO } from "@/lib/data";

const iconMap: Record<string, any> = {
  Activity, Key, Eye, Server, Lock, Code, Shield, GraduationCap, MapPin, Globe2, Clock
};

const easeOutExpo = [0.16, 1, 0.3, 1] as any;

const STAGGER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const FADE: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: easeOutExpo as any },
  },
};
const VIEWPORT = { once: true, margin: "-100px" };

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 sm:py-32 overflow-hidden flex justify-center">
      <div className="w-full max-w-6xl relative z-10">

        <div className="grid gap-12 lg:grid-cols-[400px_1fr] items-start">

          {/* Left Column: Image Card */}
          <motion.div
            variants={FADE} initial="hidden" whileInView="show" viewport={VIEWPORT}
            className="relative rounded-3xl p-1 bg-gradient-to-b from-[#00F5FF]/40 to-transparent shadow-[0_0_30px_rgba(0,245,255,0.15)] group"
          >
            {/* Soft cyan rim glow hover */}
            <div className="absolute inset-0 bg-[#00F5FF]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Continuous float animation */}
            <motion.div 
              className="relative w-full h-[600px] rounded-[22px] overflow-hidden bg-[#020408]"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              {/* Glass reflection sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none z-20" />

              {/* Background nodes for effect */}
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, transparent 60%)" }} />

              <img
                src="/port-logo.png"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top opacity-90 mix-blend-lighten scale-105 group-hover:scale-100 transition-transform duration-700 ease-out-expo"
              />

              {/* Floating Element */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#020408]/80 backdrop-blur-md border border-[#00F5FF]/20 flex items-center gap-4 group-hover:border-[#00F5FF]/50 transition-colors duration-500 z-30">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00F5FF]/10 shrink-0 group-hover:bg-[#00F5FF]/20 transition-colors duration-500">
                  <Shield className="w-5 h-5 text-[#00F5FF] group-hover:shadow-[0_0_10px_#00F5FF] transition-shadow duration-500" />
                </div>
                <div className="text-white text-xs sm:text-sm leading-relaxed">
                  Secure today, resilient tomorrow. <br />
                  <span className="text-white/70">Building a safer digital future.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="flex flex-col pt-4">

            <motion.div variants={STAGGER} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div variants={FADE} className="flex items-center gap-4 mb-6">
                <span className="text-[#00F5FF] text-[11px] font-bold tracking-[0.2em] uppercase">ABOUT ME</span>
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#00F5FF] to-transparent"></div>
              </motion.div>

              <motion.h2 variants={FADE} className="text-5xl sm:text-6xl font-black text-white leading-tight mb-6 whitespace-pre-line">
                {ABOUT_DATA.heading}
              </motion.h2>

              <motion.div variants={FADE} className="text-white/70 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl space-y-5">
                {ABOUT_DATA.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </motion.div>
            </motion.div>

            {/* 4 Info Cards */}
            <motion.div variants={STAGGER} initial="hidden" whileInView="show" viewport={VIEWPORT}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              
              {ABOUT_DATA.stats.map((info, i) => (
                <motion.div key={i} variants={FADE} className="group card-hover p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center text-center gap-2 hover:-translate-y-[6px] hover:border-[#00F5FF]/40 hover:bg-[#00F5FF]/5 hover:shadow-[0_10px_30px_rgba(0,245,255,0.1)] transition-all duration-300">
                  <div className="text-3xl sm:text-4xl font-bold text-[#00F5FF] group-hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.5)] transition-all duration-300">{info.val}</div>
                  <div className="text-white/60 text-[10px] sm:text-xs uppercase tracking-widest font-bold group-hover:text-white/90 transition-colors duration-300">{info.label}</div>
                </motion.div>
              ))}

            </motion.div>

            {/* Core Focus Areas */}
            <motion.div variants={STAGGER} initial="hidden" whileInView="show" viewport={VIEWPORT}>
              <motion.div variants={FADE} className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
                <h3 className="text-white text-sm sm:text-base font-bold tracking-wide">Core Focus Areas</h3>
              </motion.div>

              <motion.div variants={FADE} className="flex flex-wrap gap-3">
                {ABOUT_DATA.coreFocus.map((skill, i) => {
                  const IconComp = iconMap[skill.icon] || Activity;
                  return (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    key={i} 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:bg-[#00F5FF]/10 hover:border-[#00F5FF]/50 hover:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300 group cursor-default"
                  >
                    <IconComp className="w-4 h-4 text-[#00F5FF] group-hover:drop-shadow-[0_0_8px_#00F5FF] transition-all duration-300" />
                    <span className="text-white/80 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300">{skill.label}</span>
                  </motion.div>
                )})}
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
