import Section from './Section.jsx'

const projects = [
  {
    id: 'project-crisis-reranker',
    tag: 'Mission 01',
    date: 'Jun 2026',
    title: 'Crisis-Aware Search Reranker',
    subtitle: 'Fake-news-filtered search with LLM summary',
    blurb: '7-component RAG/reranker: DistilBERT credibility, freshness decay, composite ranker with dynamic crisis-mode weight-flipping, LLM crisis detector, RAG summary with source attribution. Fine-tuned DistilBERT on LIAR fact-checking (69.71% val accuracy on ~6,500 samples).',
    metric: '69.71% val acc · 80-article eval corpus',
    tech: ['PyTorch', 'DistilBERT', 'LangChain', 'Gradio', 'HF Spaces'],
    source: 'https://github.com/Jaya242/crisis-search-reranker',
    demo: '#',
    accent: 'from-brand-purple/40 to-brand-pink/30'
  },
  {
    id: 'project-grounding-harness',
    tag: 'Mission 02',
    date: 'Jul 2026',
    title: 'Grounding Harness',
    subtitle: 'Hallucination evaluation for LLM citations',
    blurb: 'Evaluation harness that verifies whether each claim in an LLM answer is entailed by its cited source — turning "hallucination-free" into a single trackable number. Designed a 5-type fabrication taxonomy across hand-labeled arXiv claims.',
    metric: 'F1 0.811 · 100% fabrication recall',
    tech: ['PyTorch', 'sentence-transformers', 'NLI cross-encoder', 'FAISS', 'HuggingFace', 'arXiv API'],
    source: 'https://github.com/Jaya242/grounding-harness',
    demo: '#',
    accent: 'from-brand-blue/40 to-brand-purple/30',
    image: '/grounding-harness.png'
  },
  {
    id: 'project-traffic-detector',
    tag: 'Mission 03',
    date: 'May 2026',
    title: 'Real-Time Traffic Analytics Pipeline',
    subtitle: 'YOLOv8 + ByteTrack live vehicle detection',
    blurb: 'YOLOv8-nano + ByteTrack pipeline for real-time vehicle detection with persistent IDs across 2,208 frames and a dual-line crossing counter. Designed the eval pipeline against a manually annotated ground truth.',
    metric: '96.2% accuracy · 100% recall',
    tech: ['YOLOv8', 'ByteTrack', 'OpenCV', 'PyTorch', 'Gradio', 'HF Spaces'],
    source: 'https://github.com/Jaya242/traffic_detector',
    demo: '#',
    accent: 'from-brand-pink/40 to-brand-blue/30',
    image: '/traffic-detection.png'
  }
]

const futureMissions = [
  {
    tag: 'Mission 04',
    title: 'Instagram GPT',
    hint: 'Semantic search over saved reels · Chrome ext + FastAPI'
  },
  {
    tag: 'Mission 05',
    title: 'Agentic RAG playground',
    hint: 'Tool-use + multi-hop retrieval — spec in progress'
  },
  {
    tag: 'Mission 06',
    title: 'Model card + eval dashboard',
    hint: 'Portable eval snapshots for every model I ship'
  }
]

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Missions"
      title="Exploration missions"
      sub="Three shipped AI apps — live on HuggingFace Spaces, open on GitHub."
    >
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <article
            key={i}
            id={p.id}
            className="scroll-mt-28 grid md:grid-cols-[1fr_1.5fr] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent hover:-translate-y-1.5 hover:border-brand-blue/40 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] transition-all"
          >
            <div className={`min-h-[220px] flex items-center justify-center bg-gradient-to-br ${p.accent} relative overflow-hidden`}>
              {p.image ? (
                <>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 eyebrow-sm text-white/90 backdrop-blur-md bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                    {p.tag} · {p.date}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="eyebrow-sm text-brand-blue mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                      Live inference
                    </div>
                    <div className="font-head text-lg font-bold text-white/95 tracking-tight">{p.title}</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 opacity-40" style={{background:'repeating-linear-gradient(115deg, rgba(255,255,255,0.04) 0 6px, transparent 6px 24px)'}} />
                  <div className="text-center relative z-10 px-6">
                    <div className="eyebrow-sm text-white/70">{p.tag}</div>
                    <div className="mt-1 eyebrow-sm text-white/50">{p.date}</div>
                    <div className="mt-4 font-head text-2xl font-bold text-white/95 tracking-tight">{p.title}</div>
                  </div>
                </>
              )}
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="eyebrow text-brand-blue">{p.subtitle}</div>
                <div className="eyebrow-sm text-brand-blue/80 px-2.5 py-1 rounded-full border border-brand-blue/30 bg-brand-blue/5">
                  ● {p.metric}
                </div>
              </div>
              <h3 className="font-head text-2xl md:text-3xl font-bold mt-3">{p.title}</h3>
              <p className="text-dim mt-3 leading-relaxed">{p.blurb}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <span key={t} className="eyebrow-sm px-3 py-1 rounded-full border border-white/15 text-dim">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 mt-6">
                <a href={p.source} target="_blank" rel="noopener" className="eyebrow-sm border-b border-white/30 hover:border-brand-blue hover:text-brand-blue transition pb-0.5">View source</a>
                <a href={p.demo} className="eyebrow-sm border-b border-white/30 hover:border-brand-blue hover:text-brand-blue transition pb-0.5">Live demo →</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Future missions — coming soon */}
      <div id="future-missions" className="scroll-mt-28 mt-16">
        <div className="eyebrow-lg text-brand-purple mb-6 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
          Future missions
          <span className="eyebrow-sm text-dim">/ coming soon</span>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {futureMissions.map((m, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-dashed border-white/15 bg-white/[0.015] p-6 min-h-[180px] hover:border-brand-purple/40 transition-colors group"
            >
              <div className="absolute top-4 right-4 eyebrow-sm text-brand-purple/70">Coming soon</div>
              <div className="eyebrow-sm text-dim">{m.tag}</div>
              <div className="font-head text-xl font-bold mt-3 text-white/80 group-hover:text-white transition-colors">
                {m.title}
              </div>
              <div className="text-dim text-sm mt-2 leading-relaxed">{m.hint}</div>
              <div className="absolute bottom-5 right-6 eyebrow-sm text-brand-purple/50">◆</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
