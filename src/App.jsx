import { useCallback, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { LoadingScreen, CursorGlow, SectionDots, Toast } from './components/Chrome'
import { Hero, About, Experience, TechStack, Projects } from './components/Sections'
import { Achievements, AwardsWall } from './components/Achievements'
import Contact from './components/Contact'
import ResumeModal from './components/ResumeModal'
import { useTheme, useActiveSection } from './hooks'
import { SECTIONS } from './data'

const SECTION_IDS = SECTIONS.map((s) => s.id)

export default function App() {
  const deckRef = useRef(null)
  const [light, setLight] = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [resumeOpen, setResumeOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })
  const active = useActiveSection(deckRef, SECTION_IDS)

  const onDeckScroll = useCallback(() => {
    const deck = deckRef.current
    if (!deck) return
    const max = deck.scrollHeight - deck.clientHeight
    setProgress(max > 0 ? (deck.scrollTop / max) * 100 : 0)
    setScrolled(deck.scrollTop > 40)
  }, [])

  const navigate = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const showToast = useCallback((message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3500)
  }, [])

  return (
    <>
      <LoadingScreen />
      <CursorGlow />

      {/* Ambient aurora backdrop + film grain */}
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="grain" aria-hidden="true" />

      {/* Scroll progress */}
      <div
        className="fixed inset-x-0 top-0 z-50 h-[3px] bg-gradient-to-r from-accent to-accent2 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />

      <Navbar
        active={active}
        scrolled={scrolled}
        light={light}
        onToggleTheme={() => setLight(!light)}
        onNavigate={navigate}
      />
      <SectionDots active={active} onNavigate={navigate} />

      {/* The vertical deck — each child section snaps to the viewport */}
      <main ref={deckRef} onScroll={onDeckScroll} className="deck relative z-10">
        <Hero onNavigate={navigate} onPreviewResume={() => setResumeOpen(true)} />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Achievements />
        <AwardsWall />
        <Contact onToast={showToast} />
      </main>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Toast message={toast.message} show={toast.show} />
    </>
  )
}
