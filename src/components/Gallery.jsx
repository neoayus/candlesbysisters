import Reveal from './Reveal'
import { tiles } from '../data'

export default function Gallery() {
  return (
    <section className="gallery" aria-label="Gallery">
      <div className="wrap">
        <div className="tiles">
          {tiles.map((c, i) => (
            <Reveal key={c} className="tile" d={i * 0.06} style={{ '--c': c }}>
              <span>{i === 0 ? 'Add your best candle photo here' : 'Photo'}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
