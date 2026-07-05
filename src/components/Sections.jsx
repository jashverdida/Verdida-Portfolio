import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionTitle } from './Chrome'
import HorizontalGallery from './HorizontalGallery'
import { useTypewriter, useCountUp } from '../hooks'
import {
  TYPING_TEXTS, HERO_BLURB, ABOUT_QUOTE, ABOUT_TEXT, COMPETENCIES,
  STATS, TIMELINE, TECH_GROUPS, PROJECTS,
} from '../data'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
}

/* ================= HERO ================= */
export function Hero({ onNavigate, onPreviewResume }) {
  const typed = useTypewriter(TYPING_TEXTS)
  return (
    <section id="hero" className="deck-section overflow-hidden">
      <div className="hero-grid-bg" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-5 pt-16 md:flex-row md:justify-between md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl text-center md:text-left"
        >
          <h3 className="text-lg font-medium text-muted">Hello, I'm</h3>
          <h1 className="font-head text-4xl font-bold tracking-tight md:text-6xl">Jashmine Verdida</h1>
          <h2 className="mt-2 h-8 font-head text-xl font-semibold text-accent md:text-2xl">
            {typed}
            <span className="typing-cursor">|</span>
          </h2>
          <div className="glass mt-4 inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-accent3" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent3" />
            </span>
            Open to Opportunities
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{HERO_BLURB}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4 md:justify-start">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_8px_32px_var(--glow)]"
            >
              View My Work
            </button>
            <button
              type="button"
              onClick={onPreviewResume}
              className="glass glow-border rounded-full px-7 py-3 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5"
            >
              <i className="fas fa-eye mr-2" />
              Preview Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative"
        >
          <div className="spin-slow absolute -inset-3 rounded-full border-2 border-dashed border-accent/40" />
          <div className="float-slow">
            <img
              src="/images/portfolio.JPG"
              alt="Jashmine Verdida Portfolio"
              className="h-52 w-52 rounded-full border-4 border-accent/60 object-cover shadow-[0_0_60px_var(--glow)] md:h-72 md:w-72"
            />
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        aria-label="Scroll to next section"
        onClick={() => onNavigate('about')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted/60 pt-1.5">
          <div className="scroll-wheel-dot h-2 w-1 rounded-full bg-accent" />
        </div>
      </button>
    </section>
  )
}

/* ================= ABOUT + STATS ================= */
function StatItem({ stat }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const value = useCountUp(stat.target, { started: inView })
  return (
    <div ref={ref} className="glass glow-border rounded-2xl p-5 text-center">
      <i className={`fas ${stat.icon} text-xl text-accent`} />
      <div className="mt-2 font-head text-3xl font-bold">
        {value}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <p className="mt-1 text-xs font-medium text-muted">{stat.label}</p>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="deck-section bg-deep">
      <div className="mx-auto w-full max-w-5xl px-5 pt-16">
        <SectionTitle title="About Me" subtitle={<i>{ABOUT_QUOTE}</i>} />
        <motion.p {...fadeUp} className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
          {ABOUT_TEXT}
        </motion.p>
        <motion.div {...fadeUp} className="mt-8">
          <h3 className="mb-4 text-center font-head text-lg font-semibold">Core Competencies</h3>
          <ul className="mx-auto grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-3">
            {COMPETENCIES.map((c) => (
              <li key={c} className="glass glow-border flex items-center gap-2.5 rounded-xl px-4 py-3 text-xs font-medium md:text-sm">
                <i className="fas fa-check-circle text-accent3" />
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((s) => <StatItem key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  )
}

/* ================= EXPERIENCE ================= */
const markerTone = {
  work: 'bg-accent text-white',
  edu: 'bg-accent2 text-white',
  org: 'bg-accent3 text-white',
}
const typeTone = {
  work: 'bg-accent/15 text-accent',
  edu: 'bg-accent2/15 text-accent2',
  org: 'bg-accent3/15 text-accent3',
}

export function Experience() {
  return (
    <section id="experience" className="deck-section">
      <div className="mx-auto w-full max-w-4xl px-5 pt-16">
        <SectionTitle title="Experience & Education" subtitle="My professional journey and academic background" />
        <div className="relative space-y-5 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-gradient-to-b before:from-accent before:via-accent2 before:to-accent3 md:space-y-6">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.12 }}
              className="relative flex gap-5 pl-1"
            >
              <div className={`z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full shadow-[0_0_16px_var(--glow)] ${markerTone[item.type]}`}>
                <i className={`fas ${item.icon} text-sm`} />
              </div>
              <div className="glass glow-border flex-1 rounded-2xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-head text-base font-semibold md:text-lg">{item.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      <i className={`fas ${item.orgIcon} mr-1.5 text-accent`} />
                      {item.org}
                    </p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{item.period}</span>
                </div>
                <ul className="mt-3 space-y-1 text-xs text-muted md:text-sm">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className={`mt-3 inline-block rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${typeTone[item.type]}`}>
                  {item.typeLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ================= TECH STACK (horizontal rail of groups) ================= */
const toneColor = {
  lang: 'text-accent',
  framework: 'text-accent2',
  db: 'text-accent3',
  tool: 'text-accent',
}

export function TechStack() {
  return (
    <section id="skills" className="deck-section bg-deep">
      <div className="mx-auto w-full max-w-5xl px-5 pt-16">
        <SectionTitle title="My Tech Stack" subtitle="Technologies and tools I work with — slide through each category" />
        <HorizontalGallery ariaLabel="Tech stack categories">
          {TECH_GROUPS.map((group) => (
            <div key={group.title} className="w-full px-1 md:px-12">
              <div className="glass glow-border mx-auto max-w-3xl rounded-3xl p-6 md:p-8">
                <div className="mb-6 flex items-center justify-center gap-4">
                  <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent/60" />
                  <h3 className="font-head text-lg font-semibold md:text-xl">
                    <i className={`fas ${group.icon} mr-2 text-accent`} />
                    {group.title}
                  </h3>
                  <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent/60" />
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {group.items.map((t) => (
                    <div
                      key={t.name}
                      className="glass flex w-24 flex-col items-center gap-2 rounded-2xl py-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_var(--glow)]"
                    >
                      <i className={`${t.icon} text-2xl ${toneColor[group.tone]}`} />
                      <span className="text-[11px] font-medium text-muted">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </HorizontalGallery>
      </div>
    </section>
  )
}

/* ================= PROJECTS (horizontal gallery) ================= */
export function Projects() {
  return (
    <section id="projects" className="deck-section">
      <div className="mx-auto w-full max-w-6xl px-5 pt-16">
        <SectionTitle title="Featured Projects" subtitle="A selection of projects I've designed and built — slide to explore" />
        <HorizontalGallery alignStart ariaLabel="Projects gallery" autoPlay slideClassName="gap-5 px-5 py-2 md:px-12">
          {PROJECTS.map((p) => (
            <article
              key={p.name}
              className="glass glow-border group flex w-[82vw] max-w-sm flex-col overflow-hidden rounded-3xl transition-transform duration-400 hover:-translate-y-1.5 hover:scale-[1.015] md:w-96"
            >
              <div className="relative flex aspect-video items-center justify-center overflow-hidden" style={{ background: p.gradient }}>
                <i className={`fas ${p.icon} text-5xl text-white/85 transition-transform duration-500 group-hover:scale-110`} />
                <span className="glass absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white">{p.year}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-head text-lg font-bold">{p.name}</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-accent/12 px-2.5 py-0.5 text-[11px] font-semibold text-accent">{t}</span>
                  ))}
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-muted md:text-[13px]">{p.desc}</p>
                <a
                  href={p.link}
                  target={p.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all duration-300 hover:gap-3"
                >
                  View Project <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </HorizontalGallery>
      </div>
    </section>
  )
}
