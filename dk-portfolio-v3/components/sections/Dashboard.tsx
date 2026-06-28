"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Deepak has consistently displayed exceptional professionalism, visionary leadership, and advanced technical capability through his remarkable contributions to the COPS Club, delivering impactful digital solutions while successfully leading and executing major departmental initiatives and technical events.",
    name: "Dr. Vasudeva R",
    role1: "HOD, Dept. of CSE, CBIT Kolar",
    role2: "President, COPS Club",
    avatar: "V",
    avatarColor: "#00F5FF",
  },
];

const VIEWPORT = { once: true, margin: "-50px" };

export default function Dashboard() {
  const [active, setActive] = useState(0);

  return (
    <section id="dashboard" className="py-24 sm:py-32 relative px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="section-eyebrow justify-center mb-6">Testimonials</div>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
            Words of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#00F5FF]">Appreciation</span>
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 sm:p-12 md:p-16 relative max-w-4xl mx-auto text-center cursor-default group"
        >
          <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#00F5FF]/30 mb-8 mx-auto drop-shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-transform duration-500 group-hover:scale-110" />

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-mono text-white/80 text-[14px] md:text-base italic leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
              &quot;{TESTIMONIALS[active].quote}&quot;
            </p>

            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-sans text-xl font-black shrink-0 shadow-[0_0_20px_rgba(0,245,255,0.2)]"
                style={{
                  background: `${TESTIMONIALS[active].avatarColor}15`,
                  border: `2px solid ${TESTIMONIALS[active].avatarColor}60`,
                  color: TESTIMONIALS[active].avatarColor,
                }}
              >
                {TESTIMONIALS[active].avatar}
              </div>
              <div>
                <div className="font-black text-white text-base mb-1">{TESTIMONIALS[active].name}</div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/50">{TESTIMONIALS[active].role1}</div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#00F5FF]/80 mt-1">{TESTIMONIALS[active].role2}</div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          {TESTIMONIALS.length > 1 && (
            <div className="flex items-center gap-3 mt-10">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === active ? "bg-[#00F5FF] w-8 shadow-[0_0_10px_#00F5FF]" : "bg-white/20 w-3 hover:bg-white/40"}`}
                  />
                ))}
              </div>

              <div className="flex gap-3 ml-auto">
                <button
                  onClick={() => setActive((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:border-[#00F5FF]/50 hover:text-[#00F5FF] hover:bg-[#00F5FF]/10 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActive((active + 1) % TESTIMONIALS.length)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:border-[#00F5FF]/50 hover:text-[#00F5FF] hover:bg-[#00F5FF]/10 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
