import { useEffect, useState } from 'react'

// Re-renders only when the threshold flags change, not on every pixel.
export function useScrollFlags() {
  const [f, setF] = useState({ solid: false, fab: false })
  useEffect(() => {
    let t = false
    const run = () => {
      const y = window.scrollY
      setF((p) => {
        const n = { solid: y > 40, fab: y > window.innerHeight * 0.7 }
        return n.solid === p.solid && n.fab === p.fab ? p : n
      })
      t = false
    }
    const on = () => { if (!t) { t = true; requestAnimationFrame(run) } }
    run()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return f
}
