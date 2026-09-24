import Type from '../comps/type.jsx'

function jump(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Intro() {
  return (
    <section id="top" className="intro container">
      <div className="intro-right">
        <h1 className="intro-title">
          <Type text="Erox" speed={140} />
        </h1>

        <a
          className="intro-cta"
          href="#built"
          onClick={(e) => {
            e.preventDefault()
            jump('built')
          }}
        >
          explore my works 
        </a>
      </div>
    </section>
  )
}