"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { NAV_ITEMS, PERSONAL_INFO } from "@/lib/data";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const y = window.scrollY + 120;
      if (!isHome) return;
      const sections = NAV_ITEMS.filter(n => !n.isPage).map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= y) { setActive(sections[i].id); break; }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLink = (n: any) => {
    const { id, label, isPage, path } = n;
    const href = isPage ? path : (isHome ? `#${id}` : `/#${id}`);
    const isActive = isPage ? pathname === path : (isHome && active === id);

    return (
      <a
        key={id}
        href={href}
        onClick={() => setMobileOpen(false)}
        className={`relative font-sans text-[13px] font-semibold tracking-wider uppercase transition-all duration-300 flex flex-col items-center justify-center h-full group ${isActive ? "text-[#00F5FF] drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]" : "text-white/70 hover:text-[#00F5FF] hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.5)] hover:-translate-y-[2px]"
          }`}
      >
        <span className="mb-4 mt-4 relative z-10">{label}</span>
        {/* Soft underline animation via CSS for non-active links */}
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#00F5FF] transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-50"></span>

        {isActive && (
          <motion.div
            layoutId="nav-indicator"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute bottom-0 flex flex-col items-center"
          >
            <div className="w-1 h-1 rounded-full bg-[#00F5FF] mb-[2px]" style={{ boxShadow: "0 0 10px #00F5FF" }} />
            <div className="w-10 h-[2px] bg-[#00F5FF]" style={{ boxShadow: "0 0 10px #00F5FF" }} />
          </motion.div>
        )}
      </a>
    );
  };

  return (
    <>
      {/* Desktop top bar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-expo ${scrolled
          ? "bg-[#020408]/70 backdrop-blur-[12px] border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-0"
          : "bg-transparent border-b border-transparent shadow-none py-2"
          }`}
      >
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 xl:px-12 h-20 transition-all duration-500 ease-out-expo">
          {/* Logo & Name */}
          <a href={isHome ? "#home" : "/"} className="flex items-center gap-4 group h-full">
            {/* Logo Image */}
            <div className="w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border-[2px] border-[#00F5FF] shadow-[0_0_15px_rgba(0,245,255,0.3)] transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_0_25px_rgba(0,245,255,0.6)] bg-[#040C14] relative">
              <div className="absolute inset-0 bg-[#00F5FF]/10 animate-pulse pointer-events-none mix-blend-overlay"></div>
              <img src="/port-logo.png" alt="DK Logo" className="w-full h-full object-cover scale-110" />
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-white/10 hidden sm:block mx-1 transition-colors duration-300 group-hover:bg-[#00F5FF]/30" />

            {/* Text */}
            <div className="flex flex-col justify-center">
              <span className="font-sans text-lg font-medium text-white tracking-[0.2em] leading-tight group-hover:text-[#00F5FF] group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.5)] transition-all duration-300 uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-sans text-[10px] text-[#00F5FF] tracking-[0.25em] mt-0.5 font-bold opacity-80 group-hover:opacity-100 transition-opacity uppercase">
                {PERSONAL_INFO.role1}
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            {NAV_ITEMS.map((n) => navLink(n))}
          </nav>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-[#00F5FF] hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(0,245,255,0.2)] transition-all duration-300">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-[#00F5FF] hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(0,245,255,0.2)] transition-all duration-300">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-white/70 hover:text-[#00F5FF] hover:border-[#00F5FF]/50 hover:bg-[#00F5FF]/10 hover:-translate-y-[2px] hover:shadow-[0_4px_15px_rgba(0,245,255,0.2)] transition-all duration-300">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md border border-border text-muted hover:text-primary hover:border-primary/40 transition-colors ml-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-[#020408]/95 backdrop-blur-xl border-l border-border flex flex-col pt-28 px-8 gap-5 shadow-2xl"
          >
            {NAV_ITEMS.map((n: any) => {
              const href = n.isPage ? n.path : (isHome ? `#${n.id}` : `/#${n.id}`);
              const isActive = n.isPage ? pathname === n.path : (isHome && active === n.id);

              return (
                <a
                  key={n.id}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-colors py-4 border-b border-white/5 flex items-center justify-between ${isActive ? "text-primary" : "text-white/70 hover:text-white"
                    }`}
                >
                  {n.label}
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00C8FF]" />
                  )}
                </a>
              );
            })}

            <div className="flex items-center gap-4 mt-8">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/20 text-white hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/20 text-white hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-12 h-12 flex items-center justify-center rounded-lg border border-white/20 text-white hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
