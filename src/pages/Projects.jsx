const projects = [
  {
    title: "EXACT Scholars Web App",
    tech: "Angular, Node.js, Express, MongoDB, Selenium",
    description:
      "Testing and documentation lead for a full-stack web app used by students and faculty.",
  },
  {
    title: "Hotel Data Automation",
    tech: "Java, Selenium, SQLite",
    description:
      "Scrapes hotel prices, stores them in SQLite, and helps analyze price trends.",
  },
  {
    title: "Vue Task Manager Demo",
    tech: "Vue.js 3, Vite, MVC",
    description:
      "Simple task manager that separates model, view, and controller for clean structure.",
  },
];

function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <p>Some things I’ve been building and learning from.</p>

      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h2>{project.title}</h2>
            <p className="card-tech">{project.tech}</p>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
