import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects.js";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <section className="page project-detail w-full overflow-x-hidden">
        <Link to="/projects" className="project-back-link fade-in-up">
          &larr; Back to Projects
        </Link>
        <h1 className="fade-in-up delay-1 text-2xl sm:text-3xl">Project not found</h1>
        <p className="fade-in-up delay-2">
          We couldn't find that project. Head back to the{" "}
          <Link to="/projects" className="github-link">
            projects list
          </Link>
          .
        </p>
      </section>
    );
  }

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const hasLinks = project.links && (project.links.live || project.links.github);

  return (
    <section className="page project-detail w-full overflow-x-hidden">
      <Link to="/projects" className="project-back-link fade-in-up">
        &larr; Back to Projects
      </Link>

      <h1 className="fade-in-up delay-1 text-2xl sm:text-3xl">{project.title}</h1>
      <p className="project-detail-tech fade-in-up delay-1">{project.tech}</p>

      {project.video && (
        <div className="project-video-wrap fade-in-up delay-2">
          <video
            key={project.slug}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="project-video"
          />
        </div>
      )}

      <p className="project-detail-description fade-in-up delay-2">{project.description}</p>

      {hasLinks && (
        <div className="project-detail-links fade-in-up delay-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="certification-link-btn"
            >
              View Live &rarr;
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="certification-link-btn"
            >
              View Code &rarr;
            </a>
          )}
        </div>
      )}

      {hasScreenshots && (
        <div className="project-screenshots fade-in-up delay-3">
          <h2 className="project-screenshots-title">Screenshots</h2>
          <div className="project-screenshots-grid">
            {project.screenshots.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${project.title} screenshot ${index + 1}`}
                className="project-screenshot"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectDetail;
