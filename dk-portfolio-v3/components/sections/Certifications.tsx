"use client";
import { motion } from "framer-motion";
import { CERTS } from "@/lib/data";

const VIEWPORT = { once: true, margin: "-60px" };

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="section-eyebrow">Certifications & Recognition</div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">/certs.log</span>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="card-hover group flex flex-col items-center p-6 text-center cursor-default"
            >
              {/* Hex badge */}
              <div className="relative h-16 w-16 mb-4 transform transition-transform group-hover:scale-110 duration-500">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <polygon
                    points="50,4 92,28 92,72 50,96 8,72 8,28"
                    fill="none"
                    stroke={c.color}
                    strokeWidth="2.5"
                    style={{ filter: `drop-shadow(0 0 ${c.type === "award" ? "12px" : "6px"} ${c.color})` }}
                  />
                  <polygon
                    points="50,14 84,32 84,68 50,86 16,68 16,32"
                    fill={c.color}
                    fillOpacity="0.1"
                    className="transition-opacity group-hover:fill-opacity-20 duration-500"
                  />
                  {c.type === "award" && (
                    <polygon
                      points="50,14 84,32 84,68 50,86 16,68 16,32"
                      fill={c.color}
                      fillOpacity="0.05"
                    />
                  )}
                </svg>
                <div
                  className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-black tracking-wider drop-shadow-md"
                  style={{ color: c.color }}
                >
                  {c.name.length > 6 ? c.name.substring(0, 6) : c.name}
                </div>
              </div>

              <h3 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2 leading-tight">
                {c.name}
              </h3>
              <p className="font-mono text-[10px] leading-snug text-white/50">
                {c.issuer}
              </p>

              {c.type === "award" && (
                <span className="mt-3 inline-block font-mono text-[9px] uppercase tracking-[0.2em] px-3 py-1 rounded-full font-bold"
                  style={{ color: c.color, border: `1px solid ${c.color}40`, background: `${c.color}15`, boxShadow: `0 0 10px ${c.color}20` }}>
                  Award
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Education block below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 card p-8 sm:p-10"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-6 font-bold">// Education Details</div>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                C. Byregowda Institute of Technology, Kolar
              </h3>
              <p className="font-mono text-sm sm:text-base text-[#00F5FF] mb-2 font-bold">
                B.E. Computer Science & Engineering · 2023–2027
              </p>
              <p className="font-mono text-xs sm:text-sm text-white/50 leading-relaxed max-w-2xl">
                Relevant Coursework: Cryptography, Computer Networks, Operating Systems, DBMS, Web Development, Data Structures
              </p>
            </div>
            <div className="md:text-right shrink-0 bg-white/5 p-4 rounded-xl border border-white/10 md:bg-transparent md:border-none md:p-0">
              <div className="text-4xl sm:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#7B2CBF] to-[#00F5FF] drop-shadow-lg">8.1</div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-white/50 font-bold mt-1">Overall CGPA</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
