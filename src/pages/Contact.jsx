function Contact() {
  return (
    <section className="page">
      <h1>Contact</h1>
      <p>
        Want to talk about an internship, project, or just connect?
      </p>

      <div className="contact-box">
        <p>
          <strong>Email:</strong> <a href="mailto:justin@example.com">justin@example.com</a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
            github.com/your-github
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noreferrer">
            linkedin.com/in/your-linkedin
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
