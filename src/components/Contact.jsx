import Reveal from './Reveal'
import { CFG, wa, igUrl } from '../config'

export default function Contact() {
  const rows = [
    ['Based in', 'Dehradun, Uttarakhand'],
    ['WhatsApp', <a href={wa('Hi!')} target="_blank" rel="noopener noreferrer">{CFG.phoneShow}</a>],
    ['Instagram', <a href={igUrl} target="_blank" rel="noopener noreferrer">@{CFG.ig}</a>],
    ['Email', <a href={`mailto:${CFG.email}`}>{CFG.email}</a>],
    ['Hours', 'Mon to Sat, 10am to 7pm'],
  ]
  return (
    <section className="contact" id="contact">
      <div className="wrap grid">
        <div>
          <Reveal as="span" className="eyebrow">Find us</Reveal>
          <Reveal as="h2" d={0.1}>Say <em>hello.</em></Reveal>
        </div>
        <dl>
          {rows.map(([t, v], i) => <Reveal key={t} d={i * 0.08}><dt>{t}</dt><dd>{v}</dd></Reveal>)}
        </dl>
      </div>
    </section>
  )
}
