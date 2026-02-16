function Contact () {
  return (
    <section className="page contact-page w-full overflow-x-hidden">
      <h1 className="fade-in-up text-2xl sm:text-3xl">Contact Me!</h1>
      <p className="fade-in-up delay-1">
        Want to talk about an internship, project, or just connect?
      </p>

      <div className="contact-box fade-in-up delay-2 w-full mt-6 p-4 sm:p-5 md:p-6 md:px-7">
        <p className="fade-in-up delay-3">
          <strong>Email:</strong>{" "}
          <a href="mailto:jtavarez.career@gmail.com" className="contact-link email-link">
            jtavarez.career@gmail.com
          </a>
        </p>
        <p className="fade-in-up delay-4">
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/justintavarez" target="_blank" rel="noreferrer" className="contact-link github-link">
            github.com/justintavarez
          </a>
        </p>
        <p className="fade-in-up delay-5">
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/justin-tavarez-b7068534a/" target="_blank" rel="noreferrer" className="contact-link linkedin-link">
            linkedin.com/justin-tavarez
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
