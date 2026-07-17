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
  const techList = Array.isArray(project.tech) ? project.tech : [];
  const descriptionParagraphs = Array.isArray(project.description)
    ? project.description
    : [project.description];
  const roleParagraphs = Array.isArray(project.role)
    ? project.role
    : project.role
      ? [project.role]
      : [];
  const learnedParagraphs = Array.isArray(project.learned)
    ? project.learned
    : project.learned
      ? [project.learned]
      : [];

  return (
    <section className="page project-detail w-full overflow-x-hidden">
      <Link to="/projects" className="project-back-link fade-in-up">
        &larr; Back to Projects
      </Link>

      <div className="project-detail-header fade-in-up delay-1">
        <p className="project-detail-kicker">Project Overview</p>
        <h1 className="project-detail-heading text-2xl sm:text-3xl">{project.title}</h1>
        <div className="project-detail-description">
          {descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
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
                <li key={tech.name} className="project-tech-item">
                  <div className="project-tech-item-header">
                    <span className="project-tech-name">{tech.name}</span>
                    <span className="project-tech-pct">{tech.pct}%</span>
                  </div>
                  <div
                    className="project-tech-bar"
                    role="progressbar"
                    aria-valuenow={tech.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${tech.name}: ${tech.pct}% of project`}
                  >
                    <div
                      className="project-tech-bar-fill"
                      style={{ width: `${tech.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {roleParagraphs.length > 0 && (
          <div className="project-info-block">
            <h2 className="project-info-title">My Role</h2>
            {roleParagraphs.map((paragraph, index) => (
              <p key={index} className="project-info-text">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {learnedParagraphs.length > 0 && (
          <div className="project-info-block">
            <h2 className="project-info-title">What I Learned</h2>
            {learnedParagraphs.map((paragraph, index) => (
              <p key={index} className="project-info-text">
                {paragraph}
              </p>
            ))}
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
