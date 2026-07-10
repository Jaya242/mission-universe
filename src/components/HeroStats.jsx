const stats = [
  { value: '3',    label: 'Shipped AI apps' },
  { value: '1st',  label: 'Renaissance’25', trophy: true },
  { value: '400+', label: 'DSA solved' }
]

export default function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((s, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-4 py-4 text-center hover:border-brand-blue/40 hover:bg-brand-blue/[0.04] transition-colors"
        >
          <div className="font-head text-3xl font-bold text-brand-blue tracking-tight flex items-center justify-center gap-1">
            {s.value}
            {s.trophy && <span className="text-2xl">🏆</span>}
          </div>
          <div className="eyebrow-sm text-dim mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
