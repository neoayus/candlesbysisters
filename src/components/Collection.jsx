import Reveal from './Reveal'
import { products, price } from '../data'
import { wa } from '../config'

export default function Collection() {
  return (
    <section className="collection" id="collection">
      <div className="wrap">
        <div className="head">
          <div>
            <Reveal as="span" className="eyebrow">The collection</Reveal>
            <Reveal as="h2" d={0.1} style={{ marginTop: '1rem' }}>Pick a <em>mood.</em></Reveal>
          </div>
          <Reveal as="p" d={0.2}>Every candle ships from Dehradun. Tap to ask about one, and we'll reply on WhatsApp.</Reveal>
        </div>
        <div className="cards">
          {products.map((p, i) => (
            <Reveal as="article" key={p.name} className="card" d={i * 0.1} style={{ '--t': p.tone }}>
              <div className="art"><svg viewBox="0 0 100 120"><use href="#jar" /></svg></div>
              <span className="n">0{i + 1}</span>
              <h3>{p.name}</h3>
              <p>{p.blurb}</p>
              <div className="row">
                <span>{price}</span>
                <a href={wa(`Hi! I'd like to know more about ${p.name}.`)} target="_blank" rel="noopener noreferrer">Ask →</a>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="note">Sample scents and prices shown as placeholders. Swap in your real range.</p>
      </div>
    </section>
  )
}
