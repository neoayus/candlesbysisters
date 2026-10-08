import Reveal from './Reveal'
import Button from './Button'
import { wa, igUrl } from '../config'

export default function Cta() {
  return (
    <section className="cta" id="order">
      <div className="wrap">
        <Reveal as="h2">Light one <em>tonight.</em></Reveal>
        <Reveal as="p" d={0.1}>Tell us what you're after and we'll help you choose. Orders are taken on WhatsApp and Instagram.</Reveal>
        <Reveal className="cta-row" d={0.2}>
          <Button fill icon="wa" href={wa("Hi! I'd like to place an order with Candles By Sisters.")}>Message on WhatsApp</Button>
          <Button icon="ig" href={igUrl}>DM on Instagram</Button>
        </Reveal>
      </div>
    </section>
  )
}
