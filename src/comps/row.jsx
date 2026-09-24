export default function Row({ index, project }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <li className="row">
      <span className="row-num mono">{number}</span>

      <div className="row-main">
        <h3 className="row-title">{project.title}</h3>
        <p className="row-desc">{project.description}</p>
      </div>

      <div className="row-meta">
        <span className="row-stack mono">
          {project.stack.join(' / ')}
        </span>
        <span className="row-status mono">{project.status}</span>
        <a className="row-link mono" href={project.link}>
          LINK ↗
        </a>
      </div>
    </li>
  )
}