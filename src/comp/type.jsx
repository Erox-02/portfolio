import { useEffect, useState } from 'react'

export default function Type({ text, delay = 200, className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [index, text, delay])

  return <span className={className}>{displayText}</span>
}