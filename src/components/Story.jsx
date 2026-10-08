import Reveal from './Reveal'

export default function Story() {
  return (
    <section className="story" id="story">
      <div className="wrap grid">
        <div>
          <Reveal as="span" className="eyebrow">The sisters</Reveal>
          <Reveal as="h2" d={0.1}>Two sisters, <em>one</em> small flame.</Reveal>
          <Reveal as="p" d={0.2}>Candles By Sisters began at a kitchen table in Dehradun with Ginnie, Minnie and a pot of wax. It is still run the same way: two people, every candle poured by hand.</Reveal>
          <Reveal as="p" d={0.3}>No factory, no shortcuts. Just scents we love, jars we'd keep ourselves, and a promise that what reaches you is made with care.</Reveal>
          <Reveal as="p" d={0.4}><i>Placeholder story. Replace with your real one.</i></Reveal>
        </div>
        <div className="sisters">
          <Reveal className="sis g" d={0.15}><div><b>Ginnie</b><small>Co-founder</small></div></Reveal>
          <Reveal className="sis m" d={0.3}><div><b>Minnie</b><small>Co-founder</small></div></Reveal>
        </div>
      </div>
    </section>
  )
}
