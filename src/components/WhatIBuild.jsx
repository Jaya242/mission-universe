const rows = [
  {
    n: '01',
    title: 'LLM Fine-tuning',
    desc: 'DistilBERT fine-tunes on domain corpora (LIAR fact-checking). AdamW + linear warmup, MPS-optimized training loops.',
    leadsTo: 'Crisis-Aware Search Reranker',
    tag: 'Mission 01',
    href: '#project-crisis-reranker'
  },
  {
    n: '02',
    title: 'Grounding & Eval Automation',
    desc: 'Evaluation harnesses for LLM claim entailment. Fabrication taxonomies, sentence-level NLI, per-claim regression checks.',
    leadsTo: 'Grounding Harness',
    tag: 'Mission 02',
    href: '#project-grounding-harness'
  },
  {
    n: '03',
    title: 'RAG Pipelines',
    desc: 'sentence-transformers, FAISS / Chroma retrieval, credibility scoring, source attribution — end-to-end retrieval-augmented systems.',
    leadsTo: 'Grounding Harness',
    tag: 'Mission 02',
    href: '#project-grounding-harness'
  },
  {
    n: '04',
    title: 'Real-Time Computer Vision',
    desc: 'YOLOv8 + ByteTrack pipelines with persistent tracking and dual-line counting. Deployed live on HuggingFace Spaces.',
    leadsTo: 'Real-Time Traffic Analytics',
    tag: 'Mission 03',
    href: '#project-traffic-detector'
  },
  {
    n: '05',
    title: 'Agentic Workflows',
    desc: 'LangChain + LangGraph, tool-use, and retrieval-augmented reasoning. LLM APIs orchestrated into autonomous multi-step pipelines.',
    leadsTo: 'Coming soon',
    tag: 'Future mission',
    href: '#future-missions',
    future: true
  }
]

export default function WhatIBuild() {
  return (
    <section id="orbit" className="relative z-10 py-24 md:py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-[0.9fr_1.4fr] gap-12 md:gap-16">
        <div>
          <div className="eyebrow-lg text-brand-blue mb-5">
            <span className="text-brand-purple">◆ </span>§ 003 — What I orbit
          </div>
          <h2 className="hero-headline text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
            WHAT I<br />BUILD
          </h2>
          <p className="text-dim mt-6 max-w-sm leading-relaxed">
            The systems I've been orbiting — the shapes of AI work I care about. Each one has a shipped mission on the right.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {rows.map((r) => (
            <a
              key={r.n}
              href={r.href}
              className={`group grid grid-cols-[auto_1fr_auto] gap-6 items-start py-7 px-3 -mx-3 rounded-xl transition-all relative overflow-hidden ${
                r.future
                  ? 'bg-gradient-to-r from-brand-purple/10 via-brand-purple/5 to-transparent border border-brand-purple/25 my-2 shadow-[0_0_30px_rgba(108,99,255,0.12)]'
                  : 'hover:bg-white/[0.02]'
              }`}
            >
              {r.future && (
                <span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 60% 80% at 100% 50%, rgba(108,99,255,0.15), transparent 70%)'
                  }}
                />
              )}
              <span className={`eyebrow-sm pt-1.5 ${r.future ? 'text-brand-purple' : 'text-brand-blue/70'}`}>
                {r.n}
              </span>
              <div className="relative z-10">
                <div className={`font-head text-xl md:text-2xl font-bold transition-colors ${
                  r.future ? 'text-brand-purple' : 'text-white group-hover:text-brand-blue'
                }`}>
                  {r.title}
                  {r.future && (
                    <span className="ml-3 inline-flex items-center gap-1.5 align-middle eyebrow-sm text-brand-purple/90 px-2 py-0.5 rounded-full bg-brand-purple/10 border border-brand-purple/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                      Next
                    </span>
                  )}
                </div>
                <p className="text-dim mt-2 max-w-xl leading-relaxed">{r.desc}</p>
              </div>
              <span className={`eyebrow-sm pt-2 transition-all relative z-10 ${
                r.future
                  ? 'text-brand-purple animate-pulse'
                  : 'text-dim group-hover:text-brand-blue group-hover:translate-x-1'
              }`}>
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
