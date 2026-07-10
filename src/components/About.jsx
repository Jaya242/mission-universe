import Section from './Section.jsx'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="The brain behind the model."
      sub="Mech eng at MNNIT Allahabad — teaching myself to ship AI systems that actually work."
    >
      <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        <div className="md:col-span-3 space-y-5">
          <p className="text-dim leading-relaxed text-lg">
            I'm Jaya — an <span className="text-white">AI/ML engineer</span> obsessed with turning raw data
            and ambitious ideas into <span className="text-white">production-grade intelligent systems</span>.
          </p>
          <p className="text-dim leading-relaxed text-lg">
            3rd-year BTech in <span className="text-white">Mechanical Engineering at MNNIT Allahabad</span>.
            Shipping AI since year two — self-taught by building. End-to-end: training, evaluation, live deployments.
          </p>
          <p className="text-dim leading-relaxed text-lg">
            I care about <span className="text-white">clean architecture, measurable outcomes</span>, and the parts of AI{' '}
            <span className="text-white">that break in production</span> —{' '}
            <span className="text-white">evaluation, grounding, retrieval, agentic workflows</span>.
            Where papers become products.
          </p>
          <p className="text-dim leading-relaxed text-lg">
            Off the keyboard, I'm either{' '}
            <span className="text-white">deep in a book</span> or{' '}
            <span className="text-white">at the gym</span> — the two things that keep my head clear enough to build.
          </p>
        </div>

        <aside className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-5">
          <div>
            <div className="eyebrow-sm text-brand-blue mb-1">Currently</div>
            <div className="font-head text-lg text-white">3rd-year BTech Mechanical</div>
            <div className="text-dim text-sm">MNNIT Allahabad · 2024–2028</div>
          </div>
          <div className="border-t border-white/10 pt-5">
            <div className="eyebrow-sm text-brand-blue mb-1">Also</div>
            <ul className="text-dim text-sm space-y-1.5">
              <li>· 400+ DSA solved on LeetCode / CodeChef</li>
              <li>· Coordinator, Taekwondo Club MNNIT</li>
              <li>· Silver Medal — Taekwondo, IIT (BHU) 2025</li>
            </ul>
          </div>
          <div className="border-t border-white/10 pt-5">
            <div className="eyebrow-sm text-brand-blue mb-1">Exploring</div>
            <div className="text-dim text-sm leading-relaxed">
              Agentic workflows, RAG, and eval automation with LangChain, sentence-transformers, and LLM APIs.
            </div>
          </div>
        </aside>
      </div>

      <FocusGrid />
    </Section>
  )
}

const focus = ['AI AGENTS', 'RAG', 'LLMS', 'DEEP LEARNING']

function FocusGrid() {
  return (
    <div className="mt-20 md:mt-28">
      <div className="eyebrow-lg text-brand-blue mb-6 flex items-center gap-3">
        <span className="text-brand-purple">◆</span> Focus areas
      </div>
      <div className="grid grid-cols-2 border-t border-l border-white/10 rounded-2xl overflow-hidden">
        {focus.map((tag, i) => (
          <div
            key={tag}
            className="relative border-b border-r border-white/10 p-8 md:p-14 min-h-[160px] md:min-h-[220px] flex items-center overflow-hidden group hover:bg-white/[0.02] transition-colors"
          >
            <span
              className="absolute -bottom-4 -right-4 hero-headline text-[80px] md:text-[140px] text-white/[0.03] select-none leading-none pointer-events-none"
              aria-hidden
            >
              {tag}
            </span>
            <span className="hero-headline text-4xl md:text-6xl lg:text-7xl leading-[0.9] text-white/85 group-hover:grad-text transition-colors relative z-10">
              {tag}
            </span>
            <span className="absolute top-4 right-5 eyebrow-sm text-brand-purple/60">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
