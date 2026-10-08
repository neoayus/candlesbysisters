import { useEffect, useState } from 'react'

const links = [['#story', 'The sisters'], ['#collection', 'Candles'], ['#process', 'Process'], ['#contact', 'Find us']]

export default function Nav({ solid }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])
  return (
    <>
      <header className={`nav ${solid ? 'solid' : ''}`}>
        <div className="wrap">
          <a className="logo" href="#top" aria-label="Candles By Sisters, home">Candles <b>by</b> Sisters</a>
          <nav aria-label="Primary">
            <ul className="links">{links.map(([h, t]) => <li key={h}><a href={h}>{t}</a></li>)}</ul>
          </nav>
          <button className="burger" aria-expanded={open} aria-controls="sheet"
                  aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            <i /><i />
          </button>
        </div>
      </header>
      <div className={`sheet ${open ? 'open' : ''}`} id="sheet" aria-label="Menu">
        {links.map(([h, t]) => <a key={h} className="big" href={h} onClick={() => setOpen(false)}>{t}</a>)}
        <small>Dehradun, Uttarakhand</small>
      </div>
    </>
  )
}
