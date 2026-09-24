import Type from '../comps/typ.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <h3 className="hero-title">
        <Type text="Erox" speed={100} />
      </h3>

      <p className="hero-stack mono">Rust / linux / Hadware</p>

      <p className="hero-tag">I use arch btw</p>

      <div className="hero-emblem" aria-hidden="true">
        {/* gonna add things later  */}
      </div>
    </section>
  )
}