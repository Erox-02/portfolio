export default function Self() {
  return (
    <section id="self" className="self container">
      <div className="self-head reveal">
        <h2 className="self-title">about</h2>
        <span className="self-rule" aria-hidden="true" />
      </div>

      <div className="self-body reveal">
        <p>—</p>
        <p>—</p>
        <p>—</p>

        <p className="self-status">
          <span className="self-dot" aria-hidden="true" />
          <span className="mono">currently: —</span>
        </p>
      </div>
    </section>
  )
}