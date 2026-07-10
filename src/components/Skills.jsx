import Section from './Section.jsx'

const nodes = [
  { x: 70,  y: 160, label: 'Python',           color: '#e6f0ff', size: 6 },
  { x: 200, y: 85,  label: 'PyTorch',          color: '#e6f0ff', size: 6 },
  { x: 200, y: 235, label: 'CNN',              color: '#38BDF8', size: 5 },
  { x: 350, y: 55,  label: 'Transformers',     color: '#38BDF8', size: 6 },
  { x: 350, y: 205, label: 'Deployment',       color: '#34D399', size: 5 },
  { x: 500, y: 135, label: 'LangChain',        color: '#818cf8', size: 7 },
  { x: 510, y: 255, label: 'LangGraph',        color: '#818cf8', size: 5 },
  { x: 640, y: 65,  label: 'Llama-3',          color: '#818cf8', size: 5 },
  { x: 660, y: 215, label: 'Vector Databases', color: '#F472B6', size: 5 },
  { x: 800, y: 145, label: 'RAG tuning',       color: '#F472B6', size: 6 }
]

const edges = [
  ['Python',           'PyTorch',            18],
  ['Python',           'CNN',               -18],
  ['PyTorch',          'Transformers',       22],
  ['CNN',              'Deployment',       -16],
  ['Transformers',     'Deployment',         0],
  ['Transformers',     'Llama-3',            22],
  ['Deployment',      'LangChain',          14],
  ['LangChain',        'LangGraph',          16],
  ['LangChain',        'Llama-3',           -18],
  ['LangChain',        'Vector Databases',   12],
  ['Vector Databases', 'RAG tuning',        -14],
  ['Llama-3',          'RAG tuning',         18]
]

const groups = [
  { title: 'Core',         glyph: '{ }', color: '#e6f0ff', items: ['Python', 'C++', 'TypeScript', 'JavaScript', 'Git · GitHub', 'Cursor · Claude Code (vibe coding)'] },
  { title: 'AI / ML',      glyph: '∇',   color: '#38BDF8', items: ['PyTorch', 'Transformers', 'CNN', 'Transfer Learning', 'Scikit-Learn', 'HuggingFace'] },
  { title: 'Vision',       glyph: '◈',   color: '#F472B6', items: ['Object Detection', 'Tracking', 'OpenCV', 'GradCAM'] },
  { title: 'LLM & Agents', glyph: '✧',   color: '#818cf8', items: ['LangChain', 'LangGraph', 'Llama-3', 'RAG tuning', 'Vector Databases', 'Claude · OpenAI APIs'] },
  { title: 'Deployment',   glyph: '⚡',   color: '#34D399', items: ['FastAPI', 'Docker', 'HuggingFace Spaces', 'Vercel', 'Streamlit', 'Gradio'] }
]

const legend = [
  { color: '#e6f0ff', label: 'Foundation' },
  { color: '#38BDF8', label: 'ML core' },
  { color: '#818cf8', label: 'LLM stack' },
  { color: '#F472B6', label: 'Retrieval' },
  { color: '#34D399', label: 'Deployment' }
]

const dust = [
  { x: 40, y: 30, r: 0.7, a: 0.5 }, { x: 120, y: 260, r: 0.6, a: 0.4 },
  { x: 250, y: 15, r: 1.1, a: 0.7 }, { x: 300, y: 280, r: 0.5, a: 0.3 },
  { x: 450, y: 25, r: 0.6, a: 0.4 }, { x: 470, y: 300, r: 0.8, a: 0.5 },
  { x: 580, y: 140, r: 0.4, a: 0.3 }, { x: 720, y: 30, r: 1.0, a: 0.6 },
  { x: 830, y: 40, r: 0.5, a: 0.4 }, { x: 730, y: 280, r: 0.6, a: 0.5 },
  { x: 150, y: 170, r: 0.4, a: 0.3 }, { x: 400, y: 130, r: 0.5, a: 0.35 },
  { x: 20, y: 220, r: 0.5, a: 0.35 }, { x: 860, y: 260, r: 0.6, a: 0.4 },
  { x: 590, y: 55, r: 0.5, a: 0.35 }, { x: 60, y: 90, r: 0.6, a: 0.45 }
]

const byLabel = Object.fromEntries(nodes.map(n => [n.label, n]))

function curvePath(a, b, off) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x, dy = b.y - a.y
  const len = Math.sqrt(dx * dx + dy * dy) || 1
  const nx = -dy / len, ny = dx / len
  const cx = mx + nx * off
  const cy = my + ny * off
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Core systems"
      title="The constellation I navigate by"
      sub="Every tool is a star. Blue pulses trace how they connect in practice."
    >
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.015] to-transparent p-4 md:p-8 overflow-hidden">
        {/* corner accents */}
        <span className="absolute top-3 left-3 eyebrow-sm text-brand-purple/70">◆ ◆ ◆</span>
        <span className="absolute top-3 right-3 eyebrow-sm text-brand-blue/70">CONSTELLATION MAP</span>
        <span className="absolute bottom-3 right-3 eyebrow-sm text-dim/70">v2 · live</span>

        <svg viewBox="0 0 870 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <defs>
            <radialGradient id="node-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"  stopColor="rgba(255,255,255,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
            <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Stardust */}
          {dust.map((d, i) => (
            <circle key={`d-${i}`} cx={d.x} cy={d.y} r={d.r} fill="#ffffff" opacity={d.a} />
          ))}

          {/* Curved edges + traveling pulses */}
          {edges.map(([a, b, off], i) => {
            const A = byLabel[a], B = byLabel[b]
            const d = curvePath(A, B, off)
            return (
              <g key={`e-${i}`}>
                <path id={`edge-${i}`} d={d} fill="none" stroke="rgba(56,189,248,0.16)" strokeWidth="1" />
                <path d={d} fill="none" stroke="rgba(148,163,184,0.05)" strokeWidth="3" />
                <circle r="2.4" fill="#38BDF8" filter="url(#soft-glow)">
                  <animateMotion dur={`${6 + (i % 4)}s`} repeatCount="indefinite" begin={`${(i * 0.5) % 4}s`}>
                    <mpath href={`#edge-${i}`} />
                  </animateMotion>
                </circle>
              </g>
            )
          })}

          {/* Nodes */}
          {nodes.map((n, i) => (
            <g key={n.label}>
              {/* Pulsing outer ring */}
              <circle cx={n.x} cy={n.y} r={n.size + 3} fill="none" stroke={n.color} strokeWidth="1.2" opacity="0.55">
                <animate attributeName="r" values={`${n.size + 3};${n.size + 14};${n.size + 3}`} dur="3.5s" repeatCount="indefinite" begin={`${(i * 0.28) % 3.5}s`} />
                <animate attributeName="opacity" values="0.55;0;0.55" dur="3.5s" repeatCount="indefinite" begin={`${(i * 0.28) % 3.5}s`} />
              </circle>
              {/* Halo */}
              <circle cx={n.x} cy={n.y} r={n.size + 16} fill="url(#node-halo)" opacity="0.6" />
              {/* Core dot + inner shading */}
              <circle cx={n.x} cy={n.y} r={n.size} fill={n.color} filter="url(#soft-glow)" />
              <circle cx={n.x} cy={n.y} r={Math.max(1, n.size - 2)} fill="#0a0f1e" opacity="0.35" />
              <circle cx={n.x} cy={n.y} r={Math.max(0.8, n.size - 3.5)} fill={n.color} />
              {/* Label */}
              <text
                x={n.x}
                y={n.y - n.size - 12}
                textAnchor="middle"
                style={{ fontSize: 12, fill: '#e2e8f0', fontWeight: 500, fontFamily: 'Inter, sans-serif', letterSpacing: 0.4 }}
              >
                {n.label}
              </text>
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 md:mt-2 pl-2">
          {legend.map((l) => (
            <div key={l.label} className="flex items-center gap-2 eyebrow-sm text-dim">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: l.color, boxShadow: `0 0 8px ${l.color}` }}
              />
              {l.label}
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mt-16">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.4)]"
            style={{ '--accent': g.color }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = g.color + '55'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            {/* Corner glow blob */}
            <div
              className="absolute -top-14 -right-14 w-32 h-32 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"
              style={{ background: g.color }}
            />
            {/* Corner sparks */}
            <div
              className="absolute bottom-3 right-3 eyebrow-sm opacity-40 group-hover:opacity-90 transition-opacity"
              style={{ color: g.color }}
            >
              ◆◆◆
            </div>

            {/* Top row: number + glyph badge */}
            <div className="flex items-center justify-between mb-5 relative z-10">
              <span className="hero-headline text-[42px] leading-none text-white/[0.07] group-hover:text-white/[0.14] transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="w-10 h-10 rounded-xl flex items-center justify-center font-head font-bold text-lg border transition-all group-hover:scale-110 group-hover:rotate-[-6deg]"
                style={{
                  borderColor: g.color + '66',
                  color: g.color,
                  background: g.color + '10',
                  boxShadow: `0 0 20px ${g.color}22`
                }}
              >
                {g.glyph}
              </span>
            </div>

            {/* Title */}
            <div className="font-head text-lg font-bold text-white relative z-10">
              {g.title}
            </div>
            <div
              className="h-[2px] mt-2.5 mb-4 rounded-full transition-all duration-500"
              style={{
                background: `linear-gradient(90deg, ${g.color}, transparent)`,
                width: '2rem'
              }}
            />

            {/* Items */}
            <ul className="space-y-2 text-sm text-dim relative z-10">
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 group-hover:text-white/90 transition-colors">
                  <span
                    className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: g.color, boxShadow: `0 0 6px ${g.color}` }}
                  />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
