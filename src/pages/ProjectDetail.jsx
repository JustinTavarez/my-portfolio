import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../data/projects.js";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(() => {});
    }
  }, [slug]);

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
  const techList = project.tech
    ? project.tech.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <section className="page project-detail w-full overflow-x-hidden">
      <Link to="/projects" className="project-back-link fade-in-up">
        &larr; Back to Projects
      </Link>

      <div className="project-detail-header fade-in-up delay-1">
        <p className="project-detail-kicker">Project Overview</p>
        <h1 className="project-detail-heading text-2xl sm:text-3xl">{project.title}</h1>
        <p className="project-detail-description">{project.description}</p>
      </div>

      {project.video && (
        <div className="project-video-wrap fade-in-up delay-2">
          <video
            ref={videoRef}
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

      <div className="project-info fade-in-up delay-3">
        {techList.length > 0 && (
          <div className="project-info-block">
            <h2 className="project-info-title">Technologies Used</h2>
            <ul className="project-tech-list">
              {techList.map((tech) => (
                <li key={tech} className="project-tech-chip">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.role && (
          <div className="project-info-block">
            <h2 className="project-info-title">My Role</h2>
            <p className="project-info-text">{project.role}</p>
          </div>
        )}

        {project.learned && (
          <div className="project-info-block">
            <h2 className="project-info-title">What I Learned</h2>
            <p className="project-info-text">{project.learned}</p>
          </div>
        )}
      </div>

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
