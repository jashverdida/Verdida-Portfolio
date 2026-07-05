import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Reusable horizontal snap slider with pagination dots, edge arrows,
 * a swipe hint, and optional autoplay. Children become slides; native
 * CSS scroll-snap drives the physics so touch, trackpad, and wheel all
 * feel native.
 *
 * Arrows/dots scroll via scrollIntoView so the target position always
 * matches the CSS snap resting point (manual scrollLeft math used to
 * overshoot by the rail padding and the snap engine pulled it back,
 * making clicks appear to do nothing).
 *
 * Autoplay: advances one slide at a time, holding each slide ~0.5s
 * after its transition (AUTO_PLAY_INTERVAL_MS). Pauses while hovered,
 * for a few seconds after any touch/drag/wheel, when the gallery is
 * off-screen, and entirely under prefers-reduced-motion.
 */
const AUTO_PLAY_INTERVAL_MS = 1100 // ~0.6s transition + ~0.5s dwell per slide
const INTERACTION_RESUME_MS = 5000

export default function HorizontalGallery({
  children,
  alignStart = false,
  className = '',
  slideClassName = '',
  showHint = true,
  ariaLabel = 'gallery',
  autoPlay = false,
}) {
  const wrapRef = useRef(null)
  const railRef = useRef(null)
  const indexRef = useRef(0)
  const targetRef = useRef(null) // pending arrow/dot destination, survives mid-flight clicks
  const resumeTimerRef = useRef(null)
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [hintSeen, setHintSeen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [interacting, setInteracting] = useState(false)
  const [inView, setInView] = useState(false)

  const slides = () => Array.from(railRef.current?.children ?? [])

  const onScroll = useCallback(() => {
    const rail = railRef.current
    if (!rail) return
    const center = rail.scrollLeft + rail.clientWidth / 2
    let best = 0, bestDist = Infinity
    slides().forEach((el, i) => {
      const mid = el.offsetLeft + el.offsetWidth / 2
      const dist = Math.abs(mid - center)
      if (dist < bestDist) { bestDist = dist; best = i }
    })
    indexRef.current = best
    setIndex(best)
    if (targetRef.current === best) targetRef.current = null
    if (rail.scrollLeft > 24) setHintSeen(true)
  }, [])

  useEffect(() => {
    setCount(slides().length)
    onScroll()
  }, [children, onScroll])

  // Only autoplay while the gallery is actually on screen.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const scrollTo = useCallback((i, behavior = 'smooth') => {
    const el = slides()[i]
    if (!el) return
    setHintSeen(true)
    el.scrollIntoView({ behavior, inline: alignStart ? 'start' : 'center', block: 'nearest' })
  }, [alignStart])

  const step = useCallback((dir) => {
    const total = railRef.current?.children.length ?? 0
    const base = targetRef.current ?? indexRef.current
    const next = Math.min(Math.max(base + dir, 0), total - 1)
    if (next === base && targetRef.current !== null) return
    targetRef.current = next
    scrollTo(next)
  }, [scrollTo])

  // Pause autoplay briefly after any direct manipulation (touch, drag, wheel).
  const pauseForInteraction = useCallback(() => {
    setInteracting(true)
    clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => setInteracting(false), INTERACTION_RESUME_MS)
  }, [])
  useEffect(() => () => clearTimeout(resumeTimerRef.current), [])

  useEffect(() => {
    if (!autoPlay || !inView || hovered || interacting || count < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      scrollTo((indexRef.current + 1) % count)
    }, AUTO_PLAY_INTERVAL_MS)
    return () => clearInterval(id)
  }, [autoPlay, inView, hovered, interacting, count, scrollTo])

  const canPrev = index > 0
  const canNext = index < count - 1

  return (
    <div
      ref={wrapRef}
      className={`relative group/gallery ${className}`}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div
        ref={railRef}
        onScroll={onScroll}
        onPointerDown={pauseForInteraction}
        onWheel={pauseForInteraction}
        onTouchStart={pauseForInteraction}
        role="region"
        aria-label={ariaLabel}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { e.preventDefault(); pauseForInteraction(); step(1) }
          if (e.key === 'ArrowLeft') { e.preventDefault(); pauseForInteraction(); step(-1) }
        }}
        className={`rail ${alignStart ? 'rail-start' : ''} ${slideClassName} outline-none`}
      >
        {children}
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-page to-transparent opacity-70 md:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-page to-transparent opacity-70 md:w-16" />

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        disabled={!canPrev}
        onClick={() => { pauseForInteraction(); step(-1) }}
        className="glass absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-accent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_24px_var(--glow)] disabled:pointer-events-none disabled:opacity-0 md:flex"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        disabled={!canNext}
        onClick={() => { pauseForInteraction(); step(1) }}
        className="glass absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-accent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_24px_var(--glow)] disabled:pointer-events-none disabled:opacity-0 md:flex"
      >
        <i className="fas fa-chevron-right" />
      </button>

      {/* Pagination dots + swipe hint */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label={`${ariaLabel} pagination`}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { pauseForInteraction(); targetRef.current = i; scrollTo(i) }}
              className={`h-2 rounded-full transition-all duration-400 ${
                i === index
                  ? 'w-7 bg-accent shadow-[0_0_12px_var(--glow)]'
                  : 'w-2 bg-muted/40 hover:bg-muted'
              }`}
            />
          ))}
        </div>
        {showHint && !hintSeen && count > 1 && (
          <span className="flex items-center gap-2 text-xs font-medium tracking-wide text-muted">
            <i className="fas fa-hand-pointer md:hidden" />
            <span className="md:hidden">swipe</span>
            <span className="hidden md:inline">scroll or drag</span>
            <i className="fas fa-arrow-right nudge-x" />
          </span>
        )}
      </div>
    </div>
  )
}
