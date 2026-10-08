import Reveal from './Reveal'
import { steps } from '../data'

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <Reveal as="span" className="eyebrow">How it's made</Reveal>
        <Reveal as="h2" d={0.1}>Slow on <em>purpose.</em></Reveal>
        <ol className="steps">
          {steps.map(([t, p], i) => (
            <Reveal as="li" key={t} d={i * 0.12}><div><h3>{t}</h3><p>{p}</p></div></Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
