import awsBadge from "../assets/AWS_ Badge.png";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Validated foundational knowledge of AWS Cloud, including AWS services, architecture, security, and pricing models.",
    credentialUrl: "https://www.credly.com/badges/e9ec424d-a9fc-49cd-bed7-e4965ee4a397/public_url",
  },
];

function Certifications() {
  return (
    <section className="page certifications-page">
      <div className="certifications-hero">
        <div className="certifications-content">
          <h1 className="fade-in-up">My Certifications</h1>
          <p className="fade-in-up delay-1">
            Professional certifications I've earned to validate my skills and knowledge.
          </p>

          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <article 
                key={cert.title} 
                className="certification-card fade-in-up"
                style={{ animationDelay: `${0.4 + (index * 0.2)}s` }}
              >
                <div className="certification-header">
                  <h2>{cert.title}</h2>
                  <span className="certification-issuer">{cert.issuer}</span>
                </div>
                <p className="certification-date">Earned: {cert.date}</p>
                <p className="certification-description">{cert.description}</p>
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="certification-link-btn"
                >
                  View Credential
                </a>
              </article>
            ))}
          </div>
        </div>
        <div className="certifications-badge">
          <img 
            src={awsBadge} 
            alt="AWS Certified Cloud Practitioner Badge" 
            className="fade-in-right"
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
