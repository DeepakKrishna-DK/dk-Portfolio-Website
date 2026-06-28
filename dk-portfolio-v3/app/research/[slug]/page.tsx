import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Award, GitBranch, ExternalLink, Quote, FileText, CheckCircle2 } from "lucide-react";
import { PAPERS, PROJECTS } from "@/lib/data";

export default function ResearchPost({ params }: { params: { slug: string } }) {
  const paper = PAPERS.find((p) => p.slug === params.slug);
  if (!paper) {
    notFound();
  }

  // Attempt to find rich project data for this paper if it exists
  const richData = PROJECTS.find((p) => p.slug === params.slug);
  const color = paper.color || "#00F5FF";

  return (
    <div className="min-h-screen bg-[#020408] text-white pt-24 pb-32 selection:bg-[#00F5FF]/30">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="fixed top-0 inset-x-0 h-[500px] bg-gradient-to-b from-[#020408] to-transparent pointer-events-none z-10"></div>
      <div className="fixed -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 blur-[120px] pointer-events-none z-0 rounded-full" style={{ backgroundColor: color }}></div>

      <div className="max-w-4xl mx-auto px-6 relative z-20">
        
        {/* Navigation */}
        <Link href="/#research" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest mb-16">
          <ArrowLeft className="w-4 h-4" /> Back to Research
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 w-fit">
              <Award className="w-3.5 h-3.5" style={{ color }} />
              <span className="text-white text-[10px] uppercase font-bold tracking-widest">Published Research</span>
            </div>
            <div className="flex items-center gap-2 text-white/50 text-xs font-mono uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              {paper.venue.split("·").pop()?.trim() || "Published"}
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            {paper.title}
          </h1>

          <div className="flex flex-col gap-2 border-l-2 pl-4 py-1 mb-8" style={{ borderColor: color }}>
            <div className="text-[11px] font-mono font-bold text-white/40 uppercase tracking-widest">Authors</div>
            <div className="text-white/80 font-medium">{paper.author}</div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            {paper.links?.map((link, idx) => {
              const Icon = link.label.toLowerCase().includes("github") ? GitBranch : (link.label.toLowerCase().includes("doi") ? Quote : ExternalLink);
              return (
                <a key={idx} href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-white hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded transition-all" style={{ borderBottomColor: `${color}50` }}>
                  <Icon className="w-4 h-4" style={{ color }} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </header>

        {/* Main Content Area */}
        <article className="prose prose-invert prose-lg max-w-none">
          
          {/* Abstract */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md mb-12 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 mt-0">
              <FileText className="w-5 h-5" style={{ color }} /> Abstract
            </h2>
            <p className="text-white/70 leading-relaxed text-base m-0">
              {paper.note}
            </p>
          </div>

          {/* Rich Content (if available from Projects array) */}
          {richData && (
            <div className="space-y-16">
              
              {/* Narrative Sections */}
              <div className="grid gap-8">
                {richData.narrative?.map((section, idx) => (
                  <div key={idx} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}></div>
                    <h3 className="text-xl font-bold text-white mb-3 mt-0">{section.heading}</h3>
                    <p className="text-white/70 text-base leading-relaxed m-0">{section.body}</p>
                  </div>
                ))}
              </div>

              {/* Metrics Grid */}
              {richData.metrics && (
                <div className="mt-16">
                  <h3 className="text-xl font-bold text-white mb-6">Key Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {richData.metrics.map((m, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <div className="text-2xl font-black mb-1" style={{ color }}>{m.value}</div>
                        <div className="text-[10px] text-white/50 uppercase tracking-wider font-bold">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline */}
              {richData.timeline && (
                <div className="mt-16">
                  <h3 className="text-xl font-bold text-white mb-8">Development Timeline</h3>
                  <div className="relative border-l border-white/10 ml-3 space-y-8">
                    {richData.timeline.map((item, i) => (
                      <div key={i} className="relative pl-8">
                        <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#020408] border-2" style={{ borderColor: color }}></div>
                        <div className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">{item.date}</div>
                        <div className="text-base font-bold text-white mb-2">{item.title}</div>
                        <div className="text-sm text-white/70 leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </div>
          )}

          {!richData && (
            <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]">
              <CheckCircle2 className="w-12 h-12 text-white/20 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Full Paper Access</h3>
              <p className="text-sm text-white/50 max-w-sm">
                The full text for this research is available through the publisher or DOI link provided above.
              </p>
            </div>
          )}
        </article>

      </div>
    </div>
  );
}
