const items = [
  { id: 'self', label: 'self' },
  { id: 'built', label: 'built' },
  { id: 'ping', label: 'ping' },
]

function jump(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Bar() {
  return (
    <header className="bar container">
      <a
        href="#top"
        className="bar-mark"
        onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        Erox.He/Him
      </a>
      
      <nav className="bar-nav">
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  jump(it.id)
                }}
              >
                {it.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/Erox-02" target="_blank" rel="noopener noreferrer">
              github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}