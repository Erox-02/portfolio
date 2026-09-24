import { useEffect, useState } from 'react'

const SES_KEY = 'erox:typed'

function prefersReduced() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Type({ text, speed = 60, delay = 0 }) {
  const [shown, setShown] = useState(() => {
    if (typeof window === 'undefined') return text.length
    if (prefersReduced()) return text.length
    if (sessionStorage.getItem(SES_KEY)) return text.length
    return 0
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (prefersReduced()) return
    if (sessionStorage.getItem(SES_KEY)) return

    let i = 0
    let interval

    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setShown(i)
        if (i >= text.length) {
          clearInterval(interval)
          sessionStorage.setItem(SES_KEY, '1')
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [text, speed, delay])

  const done = shown >= text.length

  return (
    <span className="type">
      <span className="type-sizer" aria-hidden="true">{text}</span>
      <span className="type-live">
        {text.slice(0, shown)}
        {!done && <span className="type-cursor" aria-hidden="true" />}
      </span>
    </span>
  )
}