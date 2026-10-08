import Sprite from './components/Sprite'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Collection from './components/Collection'
import Process from './components/Process'
import Why from './components/Why'
import Gallery from './components/Gallery'
import Cta from './components/Cta'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollFlags } from './hooks/useScrollY'
import { wa } from './config'

export default function App() {
  const { solid, fab } = useScrollFlags()
  return (
    <>
      <Sprite />
      <Nav solid={solid} />
      <main id="top">
        <Hero />
        <Marquee />
        <Story />
        <Collection />
        <Process />
        <Why />
        <Gallery />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <a className={`fab ${fab ? 'show' : ''}`} href={wa('Hi! I found you on your website.')}
         target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg><use href="#wa" /></svg>
      </a>
    </>
  )
}
