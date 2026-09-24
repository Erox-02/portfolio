import projects from '../data/projects.js'
import Row from '../comps/row.jsx'

export default function Work() {
  return (
    <section id="work" className="work container">
      <span className="sec-label">Selected Work</span>

      <ul className="work-list">
        {projects.map((project, i) => (
          <Row key={project.title} index={i} project={project} />
        ))}
      </ul>
    </section>
  )
}