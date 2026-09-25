export default function Self() {
  return (
    <section id="self" className="self container">
      <div className="self-head reveal">
        <h2 className="self-title">about</h2>
        <span className="self-rule" aria-hidden="true" />
      </div>

      <div className="self-body reveal">
        <p>Heyo , i am a 15 yrs old arch'er , Interested in embedded and rust .</p>
        <p>Some time sleep deprived , sometime perfectly fine schedule but if new anime drops or submission is close , sudo pkill sleep.d </p>
        <p>This year focused on finishin luxion and surviving</p>

        <p className="self-status">
          <span className="self-dot" aria-hidden="true" />
          <span className="mono">currently: Builin luxion </span>
        </p>
      </div>
    </section>
  )
}