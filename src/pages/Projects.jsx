import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <section className="page projects-page w-full overflow-x-hidden">
      <h1 className="fade-in-up text-2xl sm:text-3xl">My Projects</h1>
      <p className="fade-in-up delay-1">Some things I've been building and learning from.</p>
      <p className="fade-in-up delay-2">
        Want to see more? Check out my{" "}
        <a href="https://github.com/justintavarez" target="_blank" rel="noreferrer" className="github-link">
          Github
        </a>
      </p>

      <div className="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-8">
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="card project-card fade-in-up w-full min-w-0 p-4 sm:p-5 md:p-6"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <h2>{project.title}</h2>
            <p className="project-card-summary">{project.summary}</p>
            <span className="project-card-cta">Learn more &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
