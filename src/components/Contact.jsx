function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.09 0 4.41-2.7 5.39-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z" />
    </svg>
  )
}
function PaperPlaneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Floating ambient dots */}
      <span className="absolute top-40 left-16 w-1.5 h-1.5 rounded-full bg-brand-blue/60 blur-[1px]" style={{boxShadow:'0 0 20px #38BDF8'}} />
      <span className="absolute top-1/2 left-1/3 w-1 h-1 rounded-full bg-brand-purple/60 blur-[1px]" style={{boxShadow:'0 0 16px #818cf8'}} />
      <span className="absolute bottom-32 left-24 w-1.5 h-1.5 rounded-full bg-brand-blue/50 blur-[1px]" style={{boxShadow:'0 0 20px #38BDF8'}} />
      <span className="absolute top-24 right-1/3 w-1 h-1 rounded-full bg-brand-blue/70 blur-[1px]" style={{boxShadow:'0 0 16px #38BDF8'}} />

      <div className="max-w-6xl mx-auto relative">
        {/* Section pill */}
        <div className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-brand-blue/30 bg-brand-blue/[0.05]">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" style={{ boxShadow: '0 0 8px #38BDF8' }} />
          <span className="eyebrow-sm text-brand-blue">05 · Contact</span>
        </div>

        {/* Heading + sub */}
        <h2 className="hero-headline text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          Let's build something.
        </h2>
        <p className="text-dim text-lg max-w-md leading-relaxed mt-6 mb-16">
          Open to Gen AI / ML internships and interesting projects. I reply same day.
        </p>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* LEFT: contact info */}
          <div className="space-y-6">
            {/* Email row */}
            <a href="mailto:jayaarora2402@gmail.com" className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl border border-brand-blue/25 bg-brand-blue/[0.04] flex items-center justify-center text-brand-blue group-hover:bg-brand-blue/[0.09] group-hover:border-brand-blue/50 transition-colors">
                <MailIcon />
              </div>
              <div>
                <div className="eyebrow-sm text-dim">EMAIL</div>
                <div className="font-head font-medium text-white mt-1 group-hover:text-brand-blue transition-colors">
                  jayaarora2402@gmail.com
                </div>
              </div>
            </a>

            {/* Location row */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl border border-brand-blue/25 bg-brand-blue/[0.04] flex items-center justify-center text-brand-blue">
                <PinIcon />
              </div>
              <div>
                <div className="eyebrow-sm text-dim">LOCATION</div>
                <div className="font-head font-medium text-white mt-1">Allahabad, India</div>
              </div>
            </div>

            {/* Socials row */}
            <div className="flex items-center gap-7 pt-1">
              <a
                href="https://github.com/Jaya242"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 font-head text-white/70 hover:text-white transition-colors"
              >
                <GithubIcon /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/jaya-arora-6892a93a0"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 font-head text-white/70 hover:text-white transition-colors"
              >
                <LinkedinIcon /> LinkedIn
              </a>
            </div>

            {/* Resume button */}
            <div className="pt-2">
              <a
                href="/Jaya-Arora-Resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 transition-colors font-head font-medium text-sm"
              >
                Download Resume <span className="text-xs">↗</span>
              </a>
            </div>

            {/* Currently Available card */}
            <div className="mt-6 p-5 rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.03]">
              <div className="flex items-center gap-2 font-head font-medium text-brand-blue">
                <span
                  className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"
                  style={{ boxShadow: '0 0 8px #38BDF8' }}
                />
                Currently Available
              </div>
              <p className="text-dim text-sm mt-2 leading-relaxed">
                Open to <span className="text-white">Gen AI / ML internships</span> and collaborations · starting 2026.
              </p>
            </div>
          </div>

          {/* RIGHT: form card */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:p-8 space-y-5"
          >
            <div>
              <label className="eyebrow-sm text-dim">NAME</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2.5 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-dim/60 focus:outline-none focus:border-brand-blue/60 focus:bg-white/[0.04] transition-colors"
              />
            </div>
            <div>
              <label className="eyebrow-sm text-dim">EMAIL</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2.5 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-dim/60 focus:outline-none focus:border-brand-blue/60 focus:bg-white/[0.04] transition-colors"
              />
            </div>
            <div>
              <label className="eyebrow-sm text-dim">MESSAGE</label>
              <textarea
                rows="5"
                placeholder="Hello, I'd like to..."
                className="mt-2.5 w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-dim/60 focus:outline-none focus:border-brand-blue/60 focus:bg-white/[0.04] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 bg-brand-blue text-[#04101f] font-head font-bold text-base rounded-xl py-4 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition-all"
            >
              Send Message <PaperPlaneIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
