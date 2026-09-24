export default function Now() {
  return (
    <section id="now" className="now container">
      <span className="sec-label">Current</span>

      <ul className="now-list">
        <li className="now-item">
          <span className="mono">Readin</span>
          <span className="now-value">—</span>
        </li>
        <li className="now-item">
          <span className="mono">Buildin</span>
          <span className="now-value">—</span>
        </li>
      </ul>
    </section>
  )
}