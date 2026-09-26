import { useEffect } from 'react'
import Bar from './secs/bar.jsx'
import Self from './secs/self.jsx'
import Built from './secs/built.jsx'
import Ping from './secs/ping.jsx'

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue
        e.target.classList.add('is-in')
        io.unobserve(e.target)
      }
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Bar />
      <main>
        <Self />
        <Built />
        <Ping />
      </main>
    </>
  )
}