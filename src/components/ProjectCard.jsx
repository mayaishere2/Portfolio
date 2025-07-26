export default function ProjectCard({ title, description, tech, links }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      {tech?.length ? (
        <div className="badge-list">
          {tech.map((t) => (
            <span className="badge" key={t}>
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.6rem' }}>
        {links?.demo && (
          <a href={links.demo} target="_blank" rel="noreferrer">
          Live&nbsp;Demo
          </a>
        )}
        {links?.code && (
          <a href={links.code} target="_blank" rel="noreferrer">
            Code
          </a>
        )}
      </div>
    </div>
  )
}
