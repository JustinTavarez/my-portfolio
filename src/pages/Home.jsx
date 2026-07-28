import homePhoto from "../assets/Justin_Pic.jpeg";

function Home() {
  return (
    <section className="page home w-full overflow-x-hidden">
      <div className="hero flex flex-col w-full gap-6 mt-6 md:flex-row md:gap-8 md:mt-8">
        <div className="hero-text flex-1 w-full min-w-0">
          <h1 className="fade-in-up text-2xl sm:text-3xl md:text-4xl">
            Hello{" "}
            <span className="wave" role="img" aria-label="waving hand">
              👋
            </span>
            , I'm Justin!
          </h1>
          <div className="hero-intro fade-in-up delay-1">
            <p className="hero-lead">
              An aspiring Software developer with a B.S. in Information Technology,
              concentrating in Software Development. I design and build
              applications from the ground up,turning ideas into reliable,
              user-focused software.
            </p>
            <p>
              My experience spans from Java applications, full-stack web projects, database
              design, and team collaboration with Git and Agile workflows. I've
              shipped everything from educational web apps to AI-powered tools
              and desktop software.
            </p>
            <p>
              I'm always sharpening my craft and learning new technologies. Take
              a look at my projects, and feel free to reach out if you'd like to
              connect.
            </p>
          </div>

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
