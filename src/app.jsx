import Nav from './comps/nav.jsx'
import Hero from './secs/hero.jsx'
import Foot from './secs/foot.jsx'
import Now from './secs/now.jsx'
import Work from './secs/work.jsx'
import Abt from './secs/abt.jsx'
import Setup from './secs/setup.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Now />
        <Setup />
        <Abt />
        {/*  secs*/}
      </main>
      <Foot />
    </>
  )
}