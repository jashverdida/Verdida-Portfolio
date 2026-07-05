import { useEffect, useState } from 'react'
import { SECTIONS } from '../data'

export function LoadingScreen() {
  const [phase, setPhase] = useState('loading') // loading -> fading -> gone
  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fading'), 1400)
    const t2 = setTimeout(() => setPhase('gone'), 2000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])
  if (phase === 'gone') return null
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-deep transition-opacity duration-600 ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-64 text-center">
        <div className="font-head text-3xl font-bold">
          Jashmine<span className="text-accent">.Dev</span>
        </div>
        <div className="mt-5 h-1 overflow-hidden rounded-full bg-card">
          <div className="loading-fill h-full rounded-full bg-gradient-to-r from-accent to-accent2" />
        </div>
        <p className="mt-4 text-sm text-muted">Building something great...</p>
      </div>
    </div>
  )
}

export function CursorGlow() {
  const [pos, setPos] = useState(null)
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    let raf
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }))
    }
    document.addEventListener('mousemove', onMove)
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])
  if (!pos) return null
  return <div className="cursor-glow" style={{ transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)` }} />
}

/** Right-edge vertical dot rail — the spatial map of the deck. */
export function SectionDots({ active, onNavigate }) {
  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex lg:right-6">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          type="button"
          aria-label={`Go to ${s.label}`}
          onClick={() => onNavigate(s.id)}
          className="group relative flex h-4 w-4 items-center justify-center"
        >
          <span
            className={`rounded-full transition-all duration-400 ${
              active === s.id
                ? 'h-4 w-4 border-2 border-accent bg-accent/20 shadow-[0_0_12px_var(--glow)]'
                : 'h-2 w-2 bg-muted/50 group-hover:bg-accent/70'
            }`}
          />
          <span className="glass pointer-events-none absolute right-7 whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-medium text-main opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {s.label}
          </span>
        </button>
      ))}
    </div>
  )
}

export function Toast({ message, show }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`glass fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-400 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <i className="fas fa-check-circle text-accent3" />
      <span>{message}</span>
    </div>
  )
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 text-center md:mb-10">
      <h2 className="gradient-text font-head text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm text-muted md:text-base">{subtitle}</p>}
    </div>
  )
}
