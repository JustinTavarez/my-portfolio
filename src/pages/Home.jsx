import homePhoto from "../assets/Home_Photo.jpeg";

function Home() {
  return (
    <section className="page home">
      <div className="hero">
        <div className="hero-text">
          <h1 className="fade-in-up">Hi, I'm Justin.</h1>
          <p className="fade-in-up delay-1">
          Hi there, I enjoy building applications from the ground up and constantly strive to improve my skills in Java, Git, and software design. Whether it's implementing game mechanics or building out database functionality, I love turning ideas into working code and learning something new along the way. I’m actively looking for internship opportunities where I can contribute to meaningful projects, grow alongside experienced developers, and apply what I’ve learned in the classroom and in personal projects to real-world challenges.
          </p>
          <p className="fade-in-up delay-2">
            Let’s connect and build something awesome!
          </p>

          <div className="home-actions fade-in-up delay-3">
            <a href="/projects" className="btn">
              View my projects
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img 
            src={homePhoto} 
            alt="Justin Tavarez" 
            className="fade-in-right"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
