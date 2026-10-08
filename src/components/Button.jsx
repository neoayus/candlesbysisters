import { useRef } from 'react'
import { reducedMotion } from '../hooks/useReducedMotion'

// Link styled as a button. Pulls toward the cursor on mouse devices.
export default function Button({ href, fill, icon, children }) {
  const ref = useRef(null)
  const can = !reducedMotion() && matchMedia('(hover:hover) and (pointer:fine)').matches
  const move = (e) => {
    if (!can) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28}px)`
  }
  return (
    <a ref={ref} className={`btn ${fill ? 'fill' : ''}`} href={href} target="_blank" rel="noopener noreferrer"
       onPointerMove={move} onPointerLeave={() => { if (ref.current) ref.current.style.transform = '' }}>
      <svg><use href={`#${icon}`} /></svg>{children}
    </a>
  )
}
