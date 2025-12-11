const projects = [
  {
    title: "EXACT Scholars Web App - Fall 2025",
    tech: "Angular, Node.js, Express, MongoDB, Selenium",
    description:
      "I served as the testing lead for an Angular and Node/MongoDB application, building Selenium end-to-end test suites. I wrote installation guides, API docs, Swagger updates, and recurring project reports. I updated backend routes, models, and validation logic to improve admin workflows and data handling. I also contributed UI updates, accessibility fixes, and new frontend features aligned with GGC design.",
  },
  {
    title: "Hotel Data Automation - Fall 2025",
    tech: "Java, Selenium, SQLite",
    description:
      "I built a scraper that collected hotel prices across five cities and five hotel brands. I analyzed the data to find the ten lowest price dates for each hotel and city across several months. I used DRY patterns, solid error handling, and automation to keep long runs stable. I also wrote automated tests using the AAA structure with JUnit annotations.",
  },
  {
    title: "TO-DO App - Spring 2025",
    tech: "Vue.js 3, Vite, MVC",
    description:
      "I built a Vue 3 task manager using an MVC structure that separates data, UI, and logic. I designed a reactive TaskStore with validation and localStorage persistence. I created reusable components that emit add, complete, and delete events to the controller layer. I wrote controller logic that keeps the model and view in sync. I used the Composition API and Vite for a fast, clean workflow.",
  },
  {
    title: "Adventure Game - Fall 2024",
    tech: "Java, JavaFX",
    description:
      "I built a Minecraft-style text adventure game in Java with branching story paths driven by player choices. I added a JavaFX dashboard that tracks inventory, progress, and game stats. I followed OOP principles and used an MVC structure across the codebase.",
  },
];

function Projects() {
  return (
    <section className="page projects-page">
      <h1 className="fade-in-up">My Projects</h1>
      <p className="fade-in-up delay-1">Some things I've been building and learning from.</p>
      <p className="fade-in-up delay-2">
        Want to see more? Check out my{" "}
        <a href="https://github.com/justintavarez" target="_blank" rel="noreferrer" className="github-link">
          Github
        </a>
      </p>

      <div className="card-grid">
        {projects.map((project, index) => (
          <article 
            key={project.title} 
            className="card fade-in-up"
            style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
          >
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
