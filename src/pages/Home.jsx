import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

function Home() {
  return (
    <section className="page home">
      <h1>Hi, I’m Justin.</h1>
      <p>
        I’m an Information Technology student focused on software development,
        cloud, and testing. I like building real projects with React, Java, and AWS.
      </p>
      <p>
        Right now I’m working on personal projects and growing skills in backend,
        testing, and cloud architecture.
      </p>


      <div className="home-actions">
        <a href="/projects" className="btn">
          View my projects
        </a>
        <a href="/contact" className="btn btn-secondary">
          Get in touch
        </a>
      </div>
    </section>
  );
}

export default Home;
