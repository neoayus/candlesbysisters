import { useEffect, useRef } from 'react'
import Candles from './Candles'
import Button from './Button'
import { wa, igUrl } from '../config'
import { reducedMotion } from '../hooks/useReducedMotion'

export default function Hero() {
  const par = useRef(null)
  useEffect(() => {
    if (reducedMotion()) return
    const on = () => {
      const y = window.scrollY
      if (y < window.innerHeight * 1.2 && par.current) par.current.style.transform = `translate3d(0,${y * 0.24}px,0)`
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <section className="hero" style={{ paddingBlock: '7rem 3.5rem' }}>
      <div className="glow" aria-hidden="true" />
      <div className="candles" aria-hidden="true" ref={par}><Candles /></div>
      <div className="wrap">
        <span className="eyebrow fadeup">Hand-poured in Dehradun</span>
        <h1>
          <span className="l"><span>Light</span></span>
          <span className="l"><span><em>made</em> by</span></span>
          <span className="l"><span>hand.</span></span>
        </h1>
        <p className="sub fadeup" style={{ animationDelay: '.95s' }}>
          Small-batch candles from two sisters, Ginnie and Minnie. Poured slowly, wrapped carefully, made to be lit.
        </p>
        <div className="cta-row fadeup" style={{ animationDelay: '1.1s' }}>
          <Button fill icon="wa" href={wa("Hi! I'd like to order candles from Candles By Sisters.")}>Order on WhatsApp</Button>
          <Button icon="ig" href={igUrl}>See us on Instagram</Button>
        </div>
      </div>
      <span className="scroll" aria-hidden="true">Scroll</span>
    </section>
  )
}
