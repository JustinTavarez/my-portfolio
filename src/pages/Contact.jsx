const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: "jtavarez.career@gmail.com",
    href: "mailto:jtavarez.career@gmail.com",
    description: "Best way to reach me about roles or projects.",
    external: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/justintavarez",
    href: "https://github.com/justintavarez",
    description: "Code, commits, and what I’ve been building.",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/justin-tavarez",
    href: "https://www.linkedin.com/in/justin-tavarez-b7068534a/",
    description: "Connect and see my professional background.",
    external: true,
  },
];

function ContactIcon({ type }) {
  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-method-icon">
        <path
          fill="currentColor"
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
        />
      </svg>
    );
  }

  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-method-icon">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="contact-method-icon">
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.34 18.34H5.67v-8.59h2.67v8.59zM7 8.57a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm11.34 9.77h-2.67v-4.18c0-1-.36-1.68-1.25-1.68-.68 0-1.09.46-1.27.9-.07.16-.08.39-.08.61v4.35H10.4s.04-7.06 0-7.79h2.67v1.1c.35-.55.98-1.33 2.4-1.33 1.75 0 3.06 1.14 3.06 3.6v4.42z"
      />
    </svg>
  );
}

function Contact() {
  return (
    <section className="page contact-page w-full overflow-x-hidden">
      <div className="contact-hero">
        <p className="contact-eyebrow fade-in-up">Get in touch</p>
        <h1 className="fade-in-up delay-1 text-2xl sm:text-3xl md:text-4xl">
          Let’s connect!
        </h1>
        <p className="contact-intro fade-in-up delay-2">
          Reach out anytime. 
          I’m always open to new opportunities and conversations!
        </p>
      </div>

      <div className="contact-methods">
        {contactMethods.map((method, index) => (
          <a
            key={method.id}
            href={method.href}
            className="contact-method fade-in-up"
            style={{ animationDelay: `${0.7 + index * 0.15}s` }}
            {...(method.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <span className={`contact-method-icon-wrap contact-method-icon-wrap--${method.id}`}>
              <ContactIcon type={method.id} />
            </span>
            <span className="contact-method-body">
              <span className="contact-method-label">{method.label}</span>
              <span className="contact-method-value">{method.value}</span>
              <span className="contact-method-desc">{method.description}</span>
            </span>
            <span className="contact-method-arrow" aria-hidden="true">
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;
