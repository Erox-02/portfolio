import projects from '../data/projects.js'

export default function Built() {
  return (
    <section id="built" className="container">
      <span className="sec-label reveal">built</span>

      <div className="work-list">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="row reveal"
            style={{ '--i': i }}
          >
            <span className="row-num mono">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="row-main">
              <h3 className="row-title">{p.title}</h3>
              <p className="row-desc">{p.description}</p>
              <span className="row-stack mono">{p.stack.join(' · ')}</span>
            </div>

            <div className="row-meta">
              <span className="row-status mono">{p.status}</span>
              <span className="row-link mono">view </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}