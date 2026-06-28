"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Zap, Copy, Check, ArrowRight, User, MessageSquare, Send, Loader2, CheckCircle2, ShieldAlert, CheckSquare, X } from "lucide-react";
import { CONTACT_DATA, PERSONAL_INFO } from "@/lib/data";

const easeOutExpo = [0.16, 1, 0.3, 1] as any;

const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } }
};

function GithubIcon({ className, style }: { className?: string, style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon({ className, style }: { className?: string, style?: any }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const VIEWPORT = { once: true, margin: "-100px" };

const HoverLink = ({ heading, subheading, href, Icon, color }: any) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["30%", "70%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-500 hover:border-[#00F5FF]/50"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -8 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.1,
          }}
          className="relative z-10 block font-display text-xl sm:text-2xl font-bold text-white transition-colors duration-500 group-hover:text-[#00F5FF]"
        >
          {heading.split("").map((l: string, i: number) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 8 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-1 block font-mono text-[11px] uppercase tracking-widest text-white/50 transition-colors duration-500 group-hover:text-white/80">
          {subheading}
        </span>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: `${color}40`,
          boxShadow: `0 0 30px ${color}20`
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0 h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-2xl bg-[#020408]/90 backdrop-blur-xl border pointer-events-none"
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </motion.div>

      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-2 text-white/50 group-hover:text-[#00F5FF] transition-colors"
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>
    </motion.a>
  );
};

const NOTIFICATION_TTL = 5000;

const Notification = ({ text, id, type, removeNotif }: { text: string; id: number; type: "success" | "error"; removeNotif: (id: number) => void }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  const isError = type === "error";

  return (
    <motion.div
      layout
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`p-4 flex items-start rounded-xl gap-3 text-sm font-medium shadow-[0_0_30px_rgba(0,0,0,0.5)] text-white bg-[#020408]/95 backdrop-blur-xl border pointer-events-auto ${isError ? "border-[#FF3B30]/50 shadow-[0_0_20px_rgba(255,59,48,0.15)]" : "border-[#00F5FF]/30 shadow-[0_0_30px_rgba(0,245,255,0.15)]"
        }`}
    >
      {isError ? (
        <ShieldAlert className="mt-0.5 w-5 h-5 text-[#FF3B30] shrink-0" />
      ) : (
        <CheckSquare className="mt-0.5 w-5 h-5 text-[#00F5FF] shrink-0" />
      )}
      <span className="leading-snug">{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5 text-white/50 hover:text-white transition-colors">
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [notifications, setNotifications] = useState<{ id: number; text: string; type: "success" | "error" }[]>([]);

  const removeNotif = (id: number) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const formUrl = CONTACT_DATA.formEndpoint;

    if (!formUrl) {
      setStatus("idle");
      setNotifications((pv) => [{ id: Math.random(), text: `System Error: Submission endpoint not configured.`, type: "error" }, ...pv]);
      return;
    }

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        setNotifications((pv) => [{ id: Math.random(), text: `Secure transmission initiated.`, type: "success" }, ...pv]);
        setTimeout(() => {
          setStatus("idle");
          setForm({ name: "", email: "", message: "" });
        }, 2000);
      } else {
        const text = await response.text();
        let errorMsg = "HTTP " + response.status;
        try {
          const data = JSON.parse(text);
          errorMsg = data.error || (data.errors && data.errors.map((err: any) => err.message).join(", ")) || JSON.stringify(data);
        } catch {
          errorMsg = text.substring(0, 50);
        }
        setStatus("idle");
        setNotifications((pv) => [{ id: Math.random(), text: `Error: ${errorMsg}`, type: "error" }, ...pv]);
      }
    } catch (error: any) {
      setStatus("idle");
      setNotifications((pv) => [{ id: Math.random(), text: `Network Error: Please try again.`, type: "error" }, ...pv]);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32 overflow-hidden">

      {/* Subtle Background Particle Grid for Contact section */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0" style={{ backgroundImage: "radial-gradient(rgba(0,245,255,0.1) 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT} transition={{ duration: 0.8, ease: easeOutExpo }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div className="section-eyebrow bg-white/5 border-white/10 text-[#00F5FF]">Contact / Hire</div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">/contact.init</span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: CTA + info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT} transition={{ duration: 0.8, ease: easeOutExpo }}
            className="flex flex-col"
          >
            {/* Available status */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF7F] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00FF7F]" style={{ boxShadow: "0 0 10px #00FF7F" }} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#00FF7F] font-bold">
                {CONTACT_DATA.availability}
              </span>
            </div>

            <h2 className="font-sans text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-md whitespace-pre-line">
              {CONTACT_DATA.heading}
            </h2>

            <p className="font-mono text-[14px] leading-relaxed text-white/70 mb-10 max-w-md">
              {CONTACT_DATA.subheading}
            </p>

            {/* Social Links with Hover Animation */}
            <div className="flex flex-col mt-4 border-t border-white/10 pt-4">
              <HoverLink heading="Email" subheading={PERSONAL_INFO.email} href={`mailto:${PERSONAL_INFO.email}`} Icon={Mail} color="#00C8FF" />
              <HoverLink heading="GitHub" subheading={`@${PERSONAL_INFO.github.split('/').pop()}`} href={PERSONAL_INFO.github} Icon={GithubIcon} color="#E8F4F8" />
              <HoverLink heading="Linkedin" subheading={`in/${PERSONAL_INFO.linkedin.split('/').pop()}`} href={PERSONAL_INFO.linkedin} Icon={LinkedinIcon} color="#0A66C2" />
            </div>
          </motion.div>

          {/* Right: Message Form */}
          <motion.div
            variants={STAGGER_CONTAINER}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="flex flex-col lg:pl-10 h-full"
          >
            <div className="card border border-white/10 bg-[#020408]/80 backdrop-blur-md p-8 sm:p-10 h-full flex flex-col rounded-3xl relative overflow-hidden group">
              {/* Subtle top glow on card */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out-expo pointer-events-none"></div>

              <motion.h3 variants={FADE_UP} className="font-sans text-3xl font-black text-white mb-8 drop-shadow-sm">Send a Message</motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div variants={FADE_UP}>
                    <label htmlFor="contact-name" className="block text-[10px] font-mono text-white/40 mb-2 font-bold uppercase tracking-widest">
                      Name
                    </label>
                    <div className="relative group/input">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within/input:text-[#00F5FF] group-focus-within/input:drop-shadow-[0_0_5px_#00F5FF] transition-all" />
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        aria-required="true"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#00F5FF]/50 focus:bg-[#00F5FF]/5 focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                  </motion.div>
                  <motion.div variants={FADE_UP}>
                    <label htmlFor="contact-email" className="block text-[10px] font-mono text-white/40 mb-2 font-bold uppercase tracking-widest">
                      Email
                    </label>
                    <div className="relative group/input">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 group-focus-within/input:text-[#00F5FF] group-focus-within/input:drop-shadow-[0_0_5px_#00F5FF] transition-all" />
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        aria-required="true"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#00F5FF]/50 focus:bg-[#00F5FF]/5 focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={FADE_UP} className="flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="block text-[10px] font-mono text-white/40 mb-2 font-bold uppercase tracking-widest">
                    Message
                  </label>
                  <div className="relative group/input flex-1 flex flex-col">
                    <MessageSquare className="absolute left-4 top-5 w-4 h-4 text-white/40 group-focus-within/input:text-[#00F5FF] group-focus-within/input:drop-shadow-[0_0_5px_#00F5FF] transition-all" />
                    <textarea
                      id="contact-message"
                      required
                      aria-required="true"
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full flex-1 min-h-[150px] pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#00F5FF]/50 focus:bg-[#00F5FF]/5 focus:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all resize-none"
                      placeholder="How can I help you?"
                    />
                  </div>
                </motion.div>

                <motion.button
                  variants={FADE_UP}
                  type="submit"
                  disabled={status !== "idle"}
                  whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                  className="btn-primary group relative overflow-hidden w-full justify-center py-4 mt-4 text-[11px] tracking-widest uppercase font-mono shadow-[0_0_15px_rgba(0,245,255,0.1)] hover:shadow-[0_0_25px_rgba(0,245,255,0.3)] transition-all duration-300"
                >
                  {/* Button Sweep Animation */}
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out-expo pointer-events-none" />

                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative z-10">
                        Transmit Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </motion.div>
                    )}
                    {status === "submitting" && (
                      <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 relative z-10">
                        <Loader2 className="w-4 h-4 animate-spin" /> Encrypting...
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 relative z-10">
                        <CheckCircle2 className="w-4 h-4" /> Transmission Complete
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>

            {/* Resume download */}
            <motion.a
              variants={FADE_UP}
              href={PERSONAL_INFO.resumeUrl}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 card-hover p-6 rounded-2xl border border-white/10 bg-white/[0.02] text-center group relative overflow-hidden flex flex-col items-center justify-center cursor-pointer hover:border-[#00F5FF]/30 hover:bg-[#00F5FF]/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F5FF]/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out-expo pointer-events-none" />
              <div className="font-sans text-xl font-black text-white group-hover:text-[#00F5FF] transition-colors mb-2 drop-shadow-sm flex items-center gap-2">
                VIEW RESUME <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-mono text-[11px] text-white/50 tracking-widest uppercase font-bold group-hover:text-white/70 transition-colors">Encrypted PDF · Size: 1.2MB</div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Slide-In Notifications */}
      <div className="flex flex-col gap-3 w-72 sm:w-80 fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
