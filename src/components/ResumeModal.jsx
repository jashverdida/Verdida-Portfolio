import { useEffect, useRef, useState } from 'react'

export default function ResumeModal({ open, onClose }) {
  const containerRef = useRef(null)
  const loadedRef = useRef(false)
  const [status, setStatus] = useState('idle') // idle | loading | ready | error

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open || loadedRef.current || !window.pdfjsLib) return
    let cancelled = false
    const render = async () => {
      setStatus('loading')
      try {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
        const pdf = await window.pdfjsLib.getDocument('/resume.pdf').promise
        if (cancelled) return
        const container = containerRef.current
        container.innerHTML = ''
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          if (cancelled) return
          const canvas = document.createElement('canvas')
          const viewport = page.getViewport({ scale: 2 })
          canvas.width = viewport.width
          canvas.height = viewport.height
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
          const wrap = document.createElement('div')
          wrap.className = 'pdf-page mb-4 overflow-hidden rounded-lg shadow-lg'
          wrap.appendChild(canvas)
          container.appendChild(wrap)
        }
        loadedRef.current = true
        setStatus('ready')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }
    render()
    return () => { cancelled = true }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="glass flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="font-head text-lg font-semibold">Resume Preview</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume preview"
            className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-muted transition-colors hover:bg-white/10 hover:text-main"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto bg-deep/60 p-5">
          {status === 'loading' && <p className="py-10 text-center text-sm text-muted">Loading resume...</p>}
          {status === 'error' && (
            <p className="py-10 text-center text-sm text-muted">
              Error loading resume. <a href="/resume.pdf" download className="text-accent underline">Download it here</a>
            </p>
          )}
          <div ref={containerRef} />
        </div>
        <div className="border-t border-white/10 px-6 py-4 text-right">
          <a
            href="/resume.pdf"
            download="Jashmine_Verdida_Resume"
            className="inline-block rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_24px_var(--glow)]"
          >
            <i className="fas fa-download mr-2" />
            Export Resume
          </a>
        </div>
      </div>
    </div>
  )
}
