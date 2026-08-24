export default function Section({ id, eyebrow, title, sub, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 ${className}`}>
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
            <p className="text-dim text-lg mt-5 max-w-2xl mx-auto leading-relaxed">{sub}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
