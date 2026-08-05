import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from './Chrome'
import HorizontalGallery from './HorizontalGallery'
import { FEATURED_MILESTONES, ACHIEVEMENTS, ACHIEVEMENT_STATS, ACHIEVEMENT_FILTERS } from '../data'

const milestoneTone = {
  gold: {
    badge: 'bg-yellow-400/15 text-yellow-300 border-yellow-400/40',
    glow: 'shadow-[0_0_48px_rgba(250,204,21,0.18)]',
    gradient: 'from-yellow-500/25 via-amber-400/10 to-transparent',
    icon: 'text-yellow-300',
  },
  bronze: {
    badge: 'bg-orange-400/15 text-orange-300 border-orange-400/40',
    glow: 'shadow-[0_0_48px_rgba(251,146,60,0.18)]',
    gradient: 'from-orange-500/25 via-amber-500/10 to-transparent',
    icon: 'text-orange-300',
  },
  violet: {
    badge: 'bg-purple-400/15 text-purple-300 border-purple-400/40',
    glow: 'shadow-[0_0_48px_rgba(192,132,252,0.18)]',
    gradient: 'from-purple-500/25 via-violet-400/10 to-transparent',
    icon: 'text-purple-300',
  },
  blue: {
    badge: 'bg-sky-400/15 text-sky-300 border-sky-400/40',
    glow: 'shadow-[0_0_48px_rgba(56,189,248,0.18)]',
    gradient: 'from-sky-500/25 via-blue-400/10 to-transparent',
    icon: 'text-sky-300',
  },
  silver: {
    badge: 'bg-slate-300/15 text-slate-300 border-slate-300/40',
    glow: 'shadow-[0_0_48px_rgba(203,213,225,0.15)]',
    gradient: 'from-slate-400/25 via-slate-300/10 to-transparent',
    icon: 'text-slate-300',
  },
  green: {
    badge: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/40',
    glow: 'shadow-[0_0_48px_rgba(52,211,153,0.18)]',
    gradient: 'from-emerald-500/25 via-green-400/10 to-transparent',
    icon: 'text-emerald-300',
  },
  pink: {
    badge: 'bg-pink-400/15 text-pink-300 border-pink-400/40',
    glow: 'shadow-[0_0_48px_rgba(244,114,182,0.18)]',
    gradient: 'from-pink-500/25 via-rose-400/10 to-transparent',
    icon: 'text-pink-300',
  },
}

/* ============ FEATURED MILESTONES (horizontal slider) ============ */
export function Achievements() {
  return (
    <section id="achievements" className="deck-section bg-deep/55">
      <div className="mx-auto w-full max-w-6xl px-5 pt-16">
        <SectionTitle title="Milestones" subtitle="Signature achievements — slide through the journey" />
        <HorizontalGallery ariaLabel="Featured milestones" autoPlay>
          {FEATURED_MILESTONES.map((m) => {
            const tone = milestoneTone[m.tone]
            return (
              <div key={m.title} className="w-full px-1 md:px-14">
                <article
                  className={`glass glow-border mx-auto grid max-w-4xl gap-6 rounded-3xl p-6 transition-transform duration-500 hover:scale-[1.01] md:grid-cols-[1.1fr_1fr] md:items-center md:gap-8 md:p-8 ${tone.glow}`}
                >
                  {/* Image placeholder — swap the inner div for an <img className="h-full w-full object-cover" /> */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                    {m.image ? (
                      <img
                        src={m.image}
                        alt={m.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${tone.gradient}`} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                          <i className={`fas ${m.icon} text-5xl ${tone.icon}`} />
                          <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium tracking-wide text-muted">
                            <i className="fas fa-image mr-1.5" />
                            photo coming soon
                          </span>
                        </div>
                      </>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div>
                    <span className={`inline-block rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${tone.badge}`}>
                      {m.rank}
                    </span>
                    <h3 className="mt-4 font-head text-xl font-bold leading-snug md:text-2xl">{m.title}</h3>
                    <p className="mt-1.5 text-sm font-medium text-muted">
                      <i className="fas fa-building mr-1.5 text-accent" />
                      {m.org}
                      <span className="mx-2 text-muted/50">•</span>
                      {m.year}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{m.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {m.tags.map((t) => (
                        <span key={t} className="glass rounded-full px-3 py-1 text-[11px] font-semibold text-accent">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </HorizontalGallery>
      </div>
    </section>
  )
}

/* ============ FULL AWARDS WALL (filterable grid) ============ */
const rankTone = {
  champion: 'bg-yellow-400/15 text-yellow-300',
  best: 'bg-pink-400/15 text-pink-300',
  second: 'bg-slate-300/15 text-slate-300',
  third: 'bg-orange-400/15 text-orange-300',
  finalist: 'bg-purple-400/15 text-purple-300',
  participant: 'bg-sky-400/15 text-sky-300',
  work: 'bg-accent/15 text-accent',
  org: 'bg-accent3/15 text-accent3',
}
const chipTone = {
  gold: 'text-yellow-300 border-yellow-400/30',
  silver: 'text-slate-300 border-slate-300/30',
  globe: 'text-sky-300 border-sky-400/30',
  green: 'text-accent3 border-accent3/40',
}

export function AwardsWall() {
  const [filter, setFilter] = useState('all')
  const visible = ACHIEVEMENTS.filter((a) => filter === 'all' || a.category === filter)

  return (
    <section id="awards" className="deck-section">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-5 pt-16" style={{ maxHeight: '100svh' }}>
        <SectionTitle title="Awards & Recognition" subtitle="The full trophy cabinet — recognition for excellence, innovation, and leadership" />

        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          {ACHIEVEMENT_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 md:text-sm ${
                filter === f.value
                  ? 'bg-accent text-white shadow-[0_0_20px_var(--glow)]'
                  : 'glass text-muted hover:text-main'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
          {ACHIEVEMENT_STATS.map((s) => (
            <div key={s.label} className={`glass rounded-full border px-3.5 py-1.5 text-xs font-semibold ${chipTone[s.tone]}`}>
              <i className={`fas ${s.icon} mr-1.5`} />
              {s.label}
            </div>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pb-8 [scrollbar-width:thin]">
          <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((a) => (
              <motion.div
                key={a.title + a.year + (a.rank ?? '')}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
                className="glass glow-border relative flex flex-col rounded-2xl p-5"
              >
                {a.rank && (
                  <span className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${rankTone[a.tone]}`}>
                    {a.rank}
                  </span>
                )}
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/12 text-accent">
                  <i className={`fas ${a.icon}`} />
                </div>
                <h3 className="pr-16 font-head text-sm font-semibold leading-snug">{a.title}</h3>
                <p className="mt-1 text-xs font-medium text-accent2">{a.org}</p>
                <p className="text-[11px] text-muted">{a.year}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
