"use client";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data";
import { Shield, ShieldAlert, Wrench, Network, Lock, Cloud, Terminal, Code2, Cpu, Zap, Target, Search, Server } from "lucide-react";

const VIEWPORT = { once: true, margin: "-100px" };
const easeOutExpo = [0.16, 1, 0.3, 1] as any;

const GROUP_META: Record<string, { icon: any, color: string }> = {
  "Defensive / SOC":    { icon: Shield, color: "#00F5FF" },
  "Offensive Security": { icon: ShieldAlert, color: "#FF6B35" },
  "Security Tools":     { icon: Wrench, color: "#8B5CF6" },
  "Network & Infra":    { icon: Network, color: "#00FF7F" },
  "Cryptography":       { icon: Lock, color: "#D4AF37" },
  "Cloud & Programming":{ icon: Cloud, color: "#00C8FF" },
};

const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes("python") || s.includes("rust") || s.includes("java") || s.includes("bash")) return Terminal;
  if (s.includes("soc") || s.includes("siem") || s.includes("splunk") || s.includes("monitor")) return ActivityIcon;
  if (s.includes("threat") || s.includes("hunting") || s.includes("mitre") || s.includes("cve")) return Target;
  if (s.includes("vapt") || s.includes("hacking") || s.includes("escalation") || s.includes("owasp")) return ShieldAlert;
  if (s.includes("forensics") || s.includes("analysis") || s.includes("log") || s.includes("triage")) return Search;
  if (s.includes("aws") || s.includes("azure") || s.includes("docker")) return Cloud;
  if (s.includes("crypto") || s.includes("aes") || s.includes("rsa") || s.includes("argon") || s.includes("stego")) return Lock;
  if (s.includes("network") || s.includes("tcp") || s.includes("dns") || s.includes("firewall") || s.includes("zero trust")) return Network;
  if (s.includes("linux") || s.includes("windows")) return Server;
  if (s.includes("metasploit") || s.includes("burp") || s.includes("nmap") || s.includes("wireshark")) return Wrench;
  return Code2;
};

// Fallback for activity
const ActivityIcon = Zap;

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32 overflow-hidden flex justify-center">
      <div className="w-full max-w-6xl relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <span className="text-[#00F5FF] text-[11px] font-bold tracking-[0.2em] uppercase">SKILLS</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F5FF] shadow-[0_0_8px_#00F5FF]"></div>
            <div className="h-[1px] w-6 bg-[#00F5FF]/50"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
            Technologies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#00F5FF]">Expertise</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl text-center">
            A comprehensive toolkit of technologies, frameworks, and methodologies I use to build secure, scalable, and intelligent solutions.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILL_GROUPS).map(([groupName, skills], index) => {
            const meta = GROUP_META[groupName] || { icon: Code2, color: "#00F5FF" };
            const Icon = meta.icon;
            
            return (
              <motion.div
                key={groupName}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: index * 0.1, duration: 0.6, ease: easeOutExpo }}
                className="group relative rounded-2xl p-6 bg-[#020408]/80 backdrop-blur-md border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                style={{ "--hover-color": meta.color } as React.CSSProperties}
              >
                {/* Glowing Corner Effects */}
                <div 
                  className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ backgroundImage: `linear-gradient(to right, ${meta.color}, transparent)`, boxShadow: `0 0 20px ${meta.color}` }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ backgroundImage: `linear-gradient(to left, ${meta.color}, transparent)`, boxShadow: `0 0 20px ${meta.color}` }}
                />

                {/* Glass reflection sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none" />

                {/* Background glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: meta.color }}
                />

                {/* Group Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div 
                    className="w-10 h-10 rounded-lg border flex items-center justify-center bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors duration-300"
                    style={{ borderColor: `${meta.color}50` }}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" style={{ color: meta.color }} />
                  </div>
                  <h3 className="text-white font-bold tracking-wide uppercase text-sm group-hover:text-white transition-colors">{groupName}</h3>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {skills.map(skill => {
                    const SkillIcon = getSkillIcon(skill);
                    return (
                      <div 
                        key={skill}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/30 sm:hover:-translate-y-[2px] hover:shadow-lg active:scale-95 cursor-default"
                        style={{ boxShadow: "0 0 0 rgba(0,0,0,0)", ["--hover-shadow" as any]: `0 4px 15px ${meta.color}30` }}
                        onMouseEnter={(e) => {
                          if (window.innerWidth >= 1024) {
                            e.currentTarget.style.boxShadow = `0 4px 15px ${meta.color}30`;
                            e.currentTarget.style.borderColor = `${meta.color}50`;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (window.innerWidth >= 1024) {
                            e.currentTarget.style.boxShadow = "none";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                          }
                        }}
                      >
                        <SkillIcon className="w-3.5 h-3.5" style={{ color: meta.color }} />
                        <span className="text-white/80 text-xs font-medium">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
