import { useState } from 'react'
import { NAV_LINKS } from '../data'

export default function Navbar({ active, scrolled, light, onToggleTheme, onNavigate }) {
  const [open, setOpen] = useState(false)

  const go = (e, href) => {
    e.preventDefault()
    setOpen(false)
    onNavigate(href.slice(1))
  }

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#hero" onClick={(e) => go(e, '#hero')} className="font-head text-xl font-bold tracking-tight">
            Jashmine.<span className="text-accent">Dev</span>
          </a>

          <div className="flex items-center gap-3">
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active === l.href.slice(1)
                        ? 'bg-accent/15 text-accent'
                        : 'text-muted hover:text-main'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle light/dark theme"
              className="glass glow-border flex h-9 w-9 items-center justify-center rounded-full text-accent transition-transform duration-300 hover:rotate-12"
            >
              <i className={`fas ${light ? 'fa-moon' : 'fa-sun'}`} />
            </button>

            <a
              href="#contact"
              onClick={(e) => go(e, '#contact')}
              className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_24px_var(--glow)] sm:inline-block"
            >
              Contact Me
            </a>

            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span className={`h-0.5 w-6 rounded bg-main transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-6 rounded bg-main transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-6 rounded bg-main transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        aria-hidden={!open}
        className={`glass fixed inset-0 z-30 flex items-center justify-center transition-all duration-400 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="space-y-6 text-center">
          {[...NAV_LINKS, { href: '#contact', label: 'Contact', icon: 'fa-envelope' }].map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
              className={`transition-all duration-400 ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            >
              <a href={l.href} onClick={(e) => go(e, l.href)} className="font-head text-2xl font-semibold text-main hover:text-accent">
                <i className={`fas ${l.icon} mr-3 text-accent`} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
