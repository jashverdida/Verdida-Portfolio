import { useEffect, useRef, useState } from 'react'

export default function ResumeModal({ open, onClose }) {
  const containerRef = useRef(null)
  const pdfRef = useRef(null) // cached parsed document — pages re-render on every open
  const seqRef = useRef(0) // render generation; bumping it cancels in-flight loops
  const prevRunRef = useRef(Promise.resolve()) // serializes loops so they never share the container
  const [status, setStatus] = useState('idle') // idle | loading | ready | error

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    const mySeq = ++seqRef.current
    const stale = () => seqRef.current !== mySeq
    const render = async () => {
      // Wait out any previous loop so two runs never interleave on the container.
      await prevRunRef.current.catch(() => {})
      if (stale()) return
      setStatus('loading')
      try {
        if (!window.pdfjsLib) throw new Error('pdf.js not available')
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'
        if (!pdfRef.current) {
          pdfRef.current = await window.pdfjsLib.getDocument('/resume.pdf').promise
        }
        const pdf = pdfRef.current
        if (stale()) return
        const container = containerRef.current
        if (!container) return
        container.innerHTML = ''
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          if (stale()) return
          const canvas = document.createElement('canvas')
          const viewport = page.getViewport({ scale: 2 })
          canvas.width = viewport.width
          canvas.height = viewport.height
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
          if (stale()) return
          const wrap = document.createElement('div')
          wrap.className = 'pdf-page mb-4 overflow-hidden rounded-lg shadow-lg'
          wrap.appendChild(canvas)
          container.appendChild(wrap)
        }
        setStatus('ready')
      } catch {
        if (!stale()) { pdfRef.current = null; setStatus('error') }
      }
    }
    prevRunRef.current = render()
    return () => { seqRef.current++ } // invalidate this run on close/unmount
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
