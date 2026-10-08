import Reveal from './Reveal'
import { reasons } from '../data'

export default function Why() {
  return (
    <section className="why">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">Why us</Reveal>
        <Reveal as="h2" d={0.1}>Made like it's <em>for family.</em></Reveal>
        <div className="list">
          {reasons.map(([t, p]) => <Reveal key={t} className="item"><h3>{t}</h3><p>{p}</p></Reveal>)}
        </div>
      </div>
    </section>
  )
}
