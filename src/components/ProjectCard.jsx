function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-technologies">
        <strong>Technologies:</strong> {project.technologies.join(", ")}
      </p>
      <a href={project.link} target="_blank" rel="noreferrer">
        View on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
