import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Clients' },
  { href: '#numbers', label: 'Numbers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={classNames(
      'fixed top-0 inset-x-0 z-50 transition-all',
      scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/10' : 'bg-transparent'
    )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-widest text-white/90 hover:text-white transition">
          UNKAR <span className="text-white">MEDIA</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition relative">
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 transition-all group-hover:w-full" />
              </span>
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_0_rgba(56,189,248,0.25)] transition">
            Start a Project
          </a>
        </div>

        <button className="md:hidden text-white/80 hover:text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-6 bg-black/60 backdrop-blur-xl border-b border-white/10">
          <div className="flex flex-col gap-3 pt-2">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 hover:text-white py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-white bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_0_rgba(56,189,248,0.25)] transition">
              Start a Project
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
