import { useEffect, useState } from 'react'

const lines = [
  { type: 'cmd', text: '$ git clone https://github.com/Jaya242/grounding-harness' },
  { type: 'out', text: "Cloning into 'grounding-harness'..." },
  { type: 'cmd', text: '$ pip install -r requirements.txt' },
  { type: 'ok',  text: '✓ torch, sentence-transformers, faiss-cpu' },
  { type: 'ok',  text: '✓ nli cross-encoder loaded' },
  { type: 'cmd', text: '$ python eval.py --dataset arxiv --claims 25' },
  { type: 'out', text: '→ retrieving citations · sentence-level NLI ...' },
  { type: 'pass', text: 'F1 0.811 · fabrication recall 15/15 (100%)' }
]

function useClock() {
  const [s, setS] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setS((v) => v + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const mm = String(Math.floor(s / 60) % 60).padStart(2, '0')
  const ss = String(s % 60).padStart(2, '0')
  return `00:${mm}:${ss}`
}

export default function Terminal() {
  const [shown, setShown] = useState(lines.length)
  const [caret, setCaret] = useState(true)
  const clock = useClock()

  useEffect(() => {
    setShown(0)
    let i = 0
    const id = setInterval(() => {
      i++
      if (i > lines.length) { clearInterval(id); return }
      setShown(i)
    }, 700)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setCaret((c) => !c), 550)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full animate-float [perspective:1200px]">
      <div className="relative transition-transform duration-[650ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:scale-[1.015]">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-brand-blue/25 via-brand-purple/15 to-transparent blur-2xl opacity-60 pointer-events-none" />
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1e]/95 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1428] border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <div className="flex-1 text-center text-[12px] text-dim font-head tracking-wide">
            jaya@dev — zsh
          </div>
          <div className="flex items-center gap-1.5 text-[12px] font-head text-brand-blue tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" style={{ boxShadow: '0 0 6px #38BDF8' }} />
            {clock}
          </div>
        </div>

        <div className="p-5 font-mono text-[13px] leading-[1.75] min-h-[290px] text-left selection:bg-brand-blue/30">
          {lines.slice(0, shown).map((l, i) => (
            <div key={i} className={
              l.type === 'cmd'  ? 'text-white/95' :
              l.type === 'out'  ? 'text-dim' :
              l.type === 'ok'   ? 'text-[#8bd685]' :
              l.type === 'pass' ? 'text-brand-blue font-medium' : 'text-white'
            }>
              {l.type === 'pass' ? (
                <><span className="mr-2 px-1.5 py-0.5 rounded bg-[#28c840]/20 text-[#8bd685] text-[11px]">PASSED</span>{l.text}</>
              ) : l.text}
            </div>
          ))}
          {shown < lines.length && (
            <span className={caret ? 'inline-block w-2 h-4 bg-white/90 align-[-2px]' : 'inline-block w-2 h-4 align-[-2px]'} />
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0d1428] border-t border-white/5 eyebrow-sm">
          <div className="flex items-center gap-2 text-brand-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" style={{ boxShadow: '0 0 6px #38BDF8' }} />
            Running
            <span className="text-white/20 mx-1">·</span>
            <span className="text-dim">HF Space</span>
          </div>
          <div className="text-dim">
            PyTorch <span className="text-white/20 mx-1">·</span> Python 3.11
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
