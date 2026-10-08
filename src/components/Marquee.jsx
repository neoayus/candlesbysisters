import { marqueeWords } from '../data'

export default function Marquee() {
  const unit = marqueeWords.map((w) => <span key={w}>{w}</span>)
  return (
    <div className="marquee" aria-hidden="true">
      <div>{[0, 1, 2, 3].map((i) => <span key={i} style={{ margin: 0 }}>{unit}</span>)}</div>
    </div>
  )
}
