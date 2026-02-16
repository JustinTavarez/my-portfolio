import homePhoto from "../assets/Justin_Pic.jpeg";

function Home() {
  return (
    <section className="page home w-full overflow-x-hidden">
      <div className="hero flex flex-col w-full gap-6 mt-6 md:flex-row md:gap-8 md:mt-8">
        <div className="hero-text flex-1 w-full min-w-0">
          <h1 className="fade-in-up text-2xl sm:text-3xl md:text-4xl">Hi, I'm Justin.</h1>
          <p className="fade-in-up delay-1">
          I enjoy building applications from the ground up and constantly strive to improve my skills in Java, Git, and software design. Whether it's implementing game mechanics or building out database functionality, I love turning ideas into working code and learning something new along the way. I’m actively looking for internship opportunities where I can contribute to meaningful projects, grow alongside experienced developers, and apply what I’ve learned in the classroom and in personal projects to real-world challenges.
          </p>
          <p className="fade-in-up delay-2">
            Let’s connect and build something awesome!
          </p>

          <div className="home-actions fade-in-up delay-3 flex flex-wrap gap-2 sm:gap-4">
            <a href="/projects" className="btn">
              View my projects
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-photo flex-1 w-full min-w-0 flex justify-center">
          <img 
            src={homePhoto} 
            alt="Justin Tavarez" 
            className="fade-in-right w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
