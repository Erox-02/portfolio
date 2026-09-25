import { useEffect } from 'react'
import Bar from './secs/bar.jsx'
import Self from './secs/self.jsx'

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}

export default function App() {
  useReveal()

  return (
    <>
      <Bar />
      <main>
        <Self />
        {/* sections  */}
      </main>
    </>
  )
}