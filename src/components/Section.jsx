export default function Section({ id, eyebrow, title, sub, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 ${className}`}>
      {(eyebrow || title || sub) && (
        <div className="text-center mb-16">
          {eyebrow && (
            <div className="eyebrow-lg text-brand-blue mb-3">
              <span className="text-brand-purple">◆ </span>
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-head text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]">{title}</h2>
          )}
          {sub && (
            <p className="font-mono text-dim text-2xl md:text-3xl mt-6 max-w-4xl mx-auto leading-relaxed tracking-tight">{sub}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
