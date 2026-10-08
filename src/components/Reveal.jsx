import { useEffect, useRef, useState } from 'react'
import { reducedMotion } from '../hooks/useReducedMotion'

// Fades and slides content in once when it scrolls into view.
export default function Reveal({ as: Tag = 'div', d = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    if (reducedMotion() || !('IntersectionObserver' in window)) return setSeen(true)
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect() }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${seen ? 'in' : ''} ${className}`} style={{ '--d': `${d}s`, ...style }} {...rest}>
      {children}
    </Tag>
  )
}
