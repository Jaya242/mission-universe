import { useEffect, useState } from 'react'

const items = [
  { href: '#about',      label: 'About',      id: 'about' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects',   label: 'Projects',   id: 'projects' },
  { href: '#skills',     label: 'Skills',     id: 'skills' },
  { href: '#contact',    label: 'Contact',    id: 'contact' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['top', 'about', 'experience', 'projects', 'skills', 'contact']
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-bg/85 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-1.5 group">
          <span className="font-head text-base font-bold tracking-tight group-hover:text-brand-blue transition-colors">
            Jaya
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full bg-brand-blue"
            style={{ boxShadow: '0 0 8px #38BDF8' }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {items.map((it) => {
              const isActive = active === it.id
              return (
                <li key={it.href}>
                  <a
                    href={it.href}
                    className={`eyebrow-sm relative transition-colors ${
                      isActive ? 'text-white' : 'text-dim hover:text-white'
                    }`}
                  >
                    {it.label}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-1 w-1 rounded-full bg-brand-blue transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ boxShadow: '0 0 6px #38BDF8' }}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
          <a
            href="/Jaya-Arora-Resume.pdf"
            target="_blank"
            rel="noopener"
            className="eyebrow-sm inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-brand-blue/40 text-brand-blue hover:bg-brand-blue/10 transition-colors"
          >
            Resume <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
