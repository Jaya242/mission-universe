import { useEffect, useState } from 'react'
import Terminal from './Terminal.jsx'
import HeroStats from './HeroStats.jsx'
import SystemPanel from './SystemPanel.jsx'

const STACKS = [
  'Python · PyTorch · HuggingFace',
  'LangChain · RAG · YOLOv8',
  'Computer Vision · OpenCV · FastAPI',
  'Docker · LLM Eval · Agentic Workflows',
  'Cursor · Claude · Vibe Coding'
]

function TechMarquee() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')
  const [caret, setCaret] = useState(true)

  useEffect(() => {
    const current = STACKS[idx]
    if (phase === 'typing') {
      if (text.length < current.length) {
        const id = setTimeout(() => setText(current.slice(0, text.length + 1)), 85)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => setPhase('deleting'), 2200)
      return () => clearTimeout(id)
    }
    if (phase === 'deleting') {
      if (text.length > 0) {
        const id = setTimeout(() => setText(current.slice(0, text.length - 1)), 40)
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => {
        setIdx((i) => (i + 1) % STACKS.length)
        setPhase('typing')
      }, 300)
      return () => clearTimeout(id)
    }
  }, [text, phase, idx])

  useEffect(() => {
    const id = setInterval(() => setCaret((c) => !c), 550)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="font-head text-xl md:text-2xl font-medium text-dim tracking-tight min-h-[2rem]">
      {text}
      <span className={caret ? 'inline-block w-[3px] h-6 md:h-7 bg-brand-blue align-[-4px] ml-1' : 'inline-block w-[3px] h-6 md:h-7 align-[-4px] ml-1'} />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center px-6 md:px-12 pt-36 pb-24">
      <div className="max-w-[1320px] mx-auto w-full grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-24 items-center">
        {/* LEFT */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/[0.06] mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" style={{ boxShadow: '0 0 8px #38BDF8' }} />
            <span className="eyebrow-sm text-brand-blue">Available for Gen AI / ML internships · 2026</span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <div
                role="img"
                aria-label="Jaya Arora"
                className="w-14 h-14 rounded-full border-2 border-brand-blue/40 shadow-[0_0_24px_rgba(56,189,248,0.35)] bg-bg2"
                style={{
                  backgroundImage: 'url(/jaya.jpg)',
                  backgroundSize: '88%',
                  backgroundPosition: 'center 22%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#28c840] border-2 border-bg" />
            </div>
            <div className="font-head text-lg md:text-xl text-white">
              Hi, I'm Jaya <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite]">👋</span>
            </div>
          </div>

          <h1 className="hero-headline leading-[1.08] text-[44px] sm:text-[58px] md:text-[72px] lg:text-[84px] xl:text-[92px]">
            I build AI that<br />
            <span className="grad-text">sees, understands<br />and reasons.</span>
          </h1>

          <div className="mt-8">
            <TechMarquee />
          </div>

          <p className="mt-8 max-w-md text-dim text-base md:text-lg leading-relaxed">
            RAG pipelines · real-time systems,{' '}
            <span className="text-white font-medium">production since Year 2.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3 items-center">
            <a
              href="#projects"
              className="eyebrow inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-blue text-[#04101f] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(56,189,248,0.4)] transition-all"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="eyebrow inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all"
            >
              Get in Touch
            </a>
            <a
              href="/Jaya-Arora-Resume.pdf"
              target="_blank"
              rel="noopener"
              className="eyebrow inline-flex items-center gap-2 px-4 py-3.5 text-dim hover:text-white transition-colors"
            >
              ↓ Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-2 text-dim font-head text-sm">
            <a href="https://github.com/Jaya242" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/jaya-arora-6892a93a0" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z"/></svg>
              LinkedIn
            </a>
            <span className="text-white/10">|</span>
            <a href="mailto:jayaarora2402@gmail.com" className="hover:text-white transition-colors">
              jayaarora2402@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">
          <Terminal />
          <HeroStats />
          <SystemPanel />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dim eyebrow-sm">
        <span>Scroll</span>
        <div className="w-4 h-6 rounded-full border border-white/25 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-white/60 animate-[scroll_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  )
}
