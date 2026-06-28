"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BookOpen, Quote, Layers, Presentation, Star, Award, GitBranch, ExternalLink, Link2, Lightbulb, Search, Code, ShieldCheck, FileText } from "lucide-react";
import { PAPERS } from "@/lib/data";

const VIEWPORT = { once: true, margin: "-100px" };
const easeOutExpo = [0.16, 1, 0.3, 1] as any;

export default function Research() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="research" className="relative px-6 py-24 sm:py-32 overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <span className="text-[#00F5FF] text-[11px] font-bold tracking-[0.2em] uppercase">RESEARCH</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg">
            Research & <span className="text-[#00F5FF] drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">Publications</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl text-center">
            Exploring, innovating and publishing research that advances cybersecurity, AI security and secure systems for a better digital future.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, delay: 0.1, ease: easeOutExpo }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { label: "TOTAL PAPERS", value: "03+", icon: BookOpen, color: "#00F5FF" },
            { label: "CITATIONS", value: "120+", icon: Quote, color: "#8B5CF6" },
            { label: "RESEARCH AREAS", value: "06+", icon: Layers, color: "#00F5FF" },
            { label: "CONFERENCE PRESENTATIONS", value: "02+", icon: Presentation, color: "#8B5CF6" }
          ].map((stat, i) => (
            <div key={i} className="group card-hover rounded-2xl p-6 bg-[#020408]/80 border border-white/10 flex items-center justify-center gap-4 hover:border-white/30 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none" />
              <stat.icon className="w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ color: stat.color }} />
              <div>
                <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                <div className="text-white text-3xl font-black">{stat.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cards Row */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {PAPERS.map((p, i) => {
            const isFirst = i === 0;
            const isSecond = i === 1;
            const color = isFirst ? "#00F5FF" : (isSecond ? "#F59E0B" : "#8B5CF6");
            const statusLabel = isFirst ? "Published" : (isSecond ? "Published" : "Published");
            const StatusIcon = Star;
            
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, delay: i * 0.15, ease: easeOutExpo }}
                className="card-hover p-6 rounded-2xl bg-[#020408]/90 backdrop-blur-md relative group flex flex-col hover:-translate-y-[6px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
                style={{ 
                  borderColor: `${color}20`, 
                  boxShadow: `0 0 20px ${color}05 inset`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}60`;
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${color}30, 0 0 100px 10px ${color}10 inset`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${color}20`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${color}05 inset`;
                }}
              >
                {/* Top glowing gradient border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />

                {/* Glass sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none z-0" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 w-fit group-hover:border-white/30 transition-colors duration-300">
                      <StatusIcon className="w-3 h-3 group-hover:drop-shadow-[0_0_5px_currentColor]" style={{ color }} />
                      <span className="text-white text-[10px] uppercase font-bold tracking-widest group-hover:text-white transition-colors duration-300">Featured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}></div>
                      <span className="text-white/60 text-xs font-medium group-hover:text-white/80 transition-colors duration-300">{statusLabel}</span>
                    </div>
                  </div>
                  <Award className="w-8 h-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" style={{ color }} />
                </div>

                <h3 className="text-white text-xl font-bold mb-3 leading-snug relative z-10 transition-colors duration-300 group-hover:text-white" style={{ ["--hover-color" as any]: color }}>
                  {p.title}
                </h3>
                <div className="flex items-center gap-4 text-xs font-medium text-white/50 mb-4 relative z-10 group-hover:text-white/70 transition-colors duration-300">
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {p.venue.split("·")[1]?.trim() || p.venue}</span>
                </div>

                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1 relative z-10 group-hover:text-white/80 transition-colors duration-300">
                  {p.note}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto relative z-10">
                  {["AI Security", "Zero Trust", "Research"].slice(0, i === 0 ? 3 : 2).map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 rounded border border-white/10 bg-white/5 text-white/70 text-[10px] uppercase tracking-wider font-bold transition-colors duration-300 group-hover:border-white/30 group-hover:text-white" style={{ ["--hover-bg" as any]: `${color}10`, ["--hover-border" as any]: `${color}30` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10 relative z-10 group-hover:border-white/20 transition-colors duration-300">
                  <Link href={p.links[0]?.href || "#"} className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#00F5FF] transition-colors group/link hover:drop-shadow-[0_0_8px_#00F5FF]">
                    <BookOpen className="w-3.5 h-3.5 group-hover/link:-translate-y-[1px] transition-transform" style={{ color }} /> {p.links[0]?.label || "Read Paper"}
                  </Link>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#00F5FF] transition-colors group/link hover:drop-shadow-[0_0_8px_#00F5FF]">
                    <Quote className="w-3.5 h-3.5 group-hover/link:-translate-y-[1px] transition-transform" style={{ color }} /> Citation
                  </a>
                  <a href={p.links[1]?.href || "#"} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#00F5FF] transition-colors ml-auto group/link hover:drop-shadow-[0_0_8px_#00F5FF]">
                    <GitBranch className="w-3.5 h-3.5 group-hover/link:-translate-y-[1px] transition-transform" /> Source
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Research Roadmap */}
        <motion.div
          ref={roadmapRef}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, delay: 0.3, ease: easeOutExpo }}
          className="card-hover p-8 rounded-2xl bg-[#020408]/90 border border-white/10 group overflow-hidden relative hover:border-[#00F5FF]/30 hover:shadow-[0_10px_40px_rgba(0,245,255,0.1)] transition-all duration-500"
        >
          {/* Subtle top glow on card */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo"></div>
                  
          {/* Glass reflection sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none z-0" />

          <div className="flex items-center gap-3 mb-8 relative z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <h3 className="text-white text-sm font-bold tracking-widest uppercase">Research Roadmap</h3>
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0 z-10">
            {/* Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-10 right-10 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00F5FF] via-[#00F5FF] to-transparent shadow-[0_0_10px_#00F5FF]"
                style={{ width: lineWidth }}
              />
            </div>

            {[
              { num: "01", title: "IDEA", desc: "Identifying real-world problems and research gaps", icon: Lightbulb },
              { num: "02", title: "RESEARCH", desc: "Literature review, analysis and hypothesis formation", icon: Search },
              { num: "03", title: "DEVELOPMENT", desc: "Designing, implementing and building prototypes", icon: Code },
              { num: "04", title: "EVALUATION", desc: "Testing, validating and measuring performance", icon: ShieldCheck },
              { num: "05", title: "PUBLICATION", desc: "Publishing findings and sharing with the community", icon: FileText }
            ].map((step, i) => (
              <div key={i} className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 z-10 md:w-1/5 relative group/step">
                {/* Circle Icon */}
                <div className="w-12 h-12 rounded-full border border-white/20 bg-[#020408] flex items-center justify-center shrink-0 group-hover/step:border-[#00F5FF]/50 group-hover/step:shadow-[0_0_15px_rgba(0,245,255,0.2)] transition-all duration-300">
                  {i === 2 ? (
                    <div className="w-8 h-8 rounded-full bg-[#00F5FF] flex items-center justify-center shadow-[0_0_15px_#00F5FF] group-hover/step:scale-110 transition-transform duration-300">
                      <step.icon className="w-4 h-4 text-[#020408]" />
                    </div>
                  ) : (
                    <step.icon className="w-5 h-5 text-white/50 group-hover/step:text-[#00F5FF] group-hover/step:drop-shadow-[0_0_8px_#00F5FF] transition-all duration-300" />
                  )}
                </div>
                
                <div className="transition-transform duration-300 group-hover/step:translate-x-1 md:group-hover/step:translate-x-0 md:group-hover/step:-translate-y-1">
                  <div className="text-[#00F5FF] text-[10px] font-bold mb-1 group-hover/step:drop-shadow-[0_0_5px_#00F5FF] transition-all">{step.num}</div>
                  <div className="text-white text-xs font-bold uppercase tracking-wider mb-1 group-hover/step:text-[#00F5FF] transition-colors">{step.title}</div>
                  <div className="text-white/50 text-[10px] leading-relaxed max-w-[120px] group-hover/step:text-white/80 transition-colors">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
