import { wa, igUrl } from '../config'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <p className="big" aria-hidden="true">Candles by Sisters</p>
        <div className="row">
          <span>© {new Date().getFullYear()} Candles By Sisters · Dehradun</span>
          <a href={igUrl} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={wa('Hi!')} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
