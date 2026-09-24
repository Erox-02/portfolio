export default function Foot() {
  return (
    <footer className="foot container">
      <div className="foot-brand">Erox</div>

      <p className="foot-tag mono">i use arch btw</p>

      <ul className="foot-links mono">
        <li><a href="#github">Git</a></li>
        <li><a href="mailto:relic.of.sky@gmail.com">EMAIL</a></li>
      </ul>

      <div className="foot-emblem" aria-hidden="true">
        {/* for later lol*/}
      </div>

      <p className="foot-copy mono"> 2010 - 2026</p>
    </footer>
  )
}