export default function Ping() {
  return (
    <section id="ping" className="container">
      <span className="sec-label reveal">Contact</span>

      <div className="ping-body reveal">
        <p className="mono" style={{ color: 'var(--fg-muted)' }}>
          open to Arch users and to those who workship git
        </p>
        <a href="mailto:relic.of.sky@gmail.com" className="ping-link">
          Email
        </a>
      </div>
    </section>
  )
}