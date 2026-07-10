const BARS = 44

export default function SystemPanel() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0a0f1e]/85 backdrop-blur-sm overflow-hidden h-[160px]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 50%, #000 40%, transparent 90%)'
        }}
      />

      {/* Sweeping scan line */}
      <div
        className="absolute top-0 bottom-0 w-24 animate-panel-scan pointer-events-none mix-blend-screen"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(56,189,248,0.35), transparent)'
        }}
      />

      {/* Corner labels */}
      <div className="absolute top-3 left-4 eyebrow-sm text-brand-purple/80 flex items-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-brand-purple" /> Live signal
      </div>
      <div className="absolute top-3 right-4 eyebrow-sm text-dim/70">440 Hz · buf 128</div>

      {/* Bar equalizer */}
      <div className="absolute inset-x-5 top-9 bottom-11 flex items-center justify-between gap-[3px]">
        {Array.from({ length: BARS }).map((_, i) => (
          <div
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-brand-blue/90 via-brand-blue to-brand-purple animate-bar-wave"
            style={{
              animationDelay: `${-(i * 0.09)}s`,
              animationDuration: `${1.4 + (i % 5) * 0.15}s`
            }}
          />
        ))}
      </div>

      {/* Center neural node with rings */}
      <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen">
        <div className="relative">
          <span className="absolute -inset-6 rounded-full border border-brand-blue/60 animate-node-ring" />
          <span
            className="absolute -inset-6 rounded-full border border-brand-purple/50 animate-node-ring"
            style={{ animationDelay: '1s' }}
          />
          <span
            className="block w-3.5 h-3.5 rounded-full bg-brand-blue animate-node-pulse"
            style={{ boxShadow: '0 0 18px #38BDF8, 0 0 40px rgba(56,189,248,0.5)' }}
          />
        </div>
      </div>

      {/* Bottom-left status */}
      <div className="absolute bottom-3 left-4 eyebrow-sm text-brand-blue flex items-center gap-2">
        <span
          className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"
          style={{ boxShadow: '0 0 6px #38BDF8' }}
        />
        System active
      </div>

      {/* Bottom-right meter */}
      <div className="absolute bottom-3 right-4 eyebrow-sm text-dim flex items-center gap-2">
        <span className="text-brand-blue">●</span>
        <span>runtime</span>
        <span className="text-white/70 font-mono tracking-tight">00:12:47</span>
      </div>
    </div>
  )
}
