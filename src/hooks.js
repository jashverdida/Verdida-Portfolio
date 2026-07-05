import { useEffect, useRef, useState } from 'react'

export function useTypewriter(texts, { typeSpeed = 95, deleteSpeed = 55, holdMs = 2000, startDelay = 900 } = {}) {
  const [text, setText] = useState('')
  useEffect(() => {
    let textIndex = 0, charIndex = 0, isDeleting = false, timer
    const tick = () => {
      const current = texts[textIndex]
      charIndex = isDeleting ? charIndex - 1 : charIndex + 1
      setText(current.substring(0, charIndex))
      let speed = isDeleting ? deleteSpeed : typeSpeed
      if (!isDeleting && charIndex === current.length) { speed = holdMs; isDeleting = true }
      else if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; speed = 400 }
      timer = setTimeout(tick, speed)
    }
    timer = setTimeout(tick, startDelay)
    return () => clearTimeout(timer)
  }, [texts, typeSpeed, deleteSpeed, holdMs, startDelay])
  return text
}

export function useCountUp(target, { duration = 1600, started = true } = {}) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!started) return
    let raf
    const t0 = performance.now()
    const step = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.floor((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, started])
  return value
}

export function useTheme() {
  const [light, setLight] = useState(() => localStorage.getItem('theme') === 'light')
  useEffect(() => {
    document.documentElement.classList.toggle('light', light)
    localStorage.setItem('theme', light ? 'light' : 'dark')
  }, [light])
  return [light, setLight]
}

// Tracks which vertical deck section is in view, for nav highlighting.
export function useActiveSection(deckRef, sectionIds) {
  const [active, setActive] = useState(sectionIds[0])
  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
      },
      { root: deck, threshold: 0.5 }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [deckRef, sectionIds])
  return active
}
