const env = [
  ['os', 'Arch Linux'],
  ['wm', 'Hyprland'],
  ['bar', 'Waybar'],
  ['term', 'Kitty'],
  ['dm', 'SDDM'],
  ['wall', 'Hyprpaper'],
]

export default function Setup() {
  return (
    <section id="setup" className="setup container">
      <span className="sec-label">Setup</span>

      <ul className="setup-env">
        {env.map(([key, value]) => (
          <li key={key} className="setup-env-item">
            <span className="mono">{key}</span>
            <span className="setup-env-value">{value}</span>
          </li>
        ))}
      </ul>

      <div className="setup-shots">
        <figure className="setup-shot">
          <div className="setup-shot-frame" aria-hidden="true" />
          <figcaption className="mono"> Desktop </figcaption>
        </figure>

        <figure className="setup-shot">
          <div className="setup-shot-frame" aria-hidden="true" />
          <figcaption className="mono">sddm(clean af)</figcaption>
        </figure>
      </div>

      <p className="setup-dotfiles">
        <a className="mono" href="#">Dotfiles</a>
      </p>

    </section>
  )
}