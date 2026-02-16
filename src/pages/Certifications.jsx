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
    <section className="page certifications-page w-full overflow-x-hidden">
      <div className="certifications-hero flex flex-col w-full gap-6 mt-6 md:flex-row md:gap-8 md:mt-8">
        <div className="certifications-content flex-1 w-full min-w-0">
          <h1 className="fade-in-up text-2xl sm:text-3xl md:text-4xl">My Certifications</h1>
          <p className="fade-in-up delay-1">
            Professional certifications I've earned to validate my skills and knowledge.
          </p>

          <div className="certifications-list flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
            {certifications.map((cert, index) => (
              <article 
                key={cert.title} 
                className="certification-card fade-in-up w-full min-w-0 p-4 sm:p-5 md:p-6"
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
        <div className="certifications-badge flex-1 w-full min-w-0 flex justify-center items-center">
          <img 
            src={awsBadge} 
            alt="AWS Certified Cloud Practitioner Badge" 
            className="fade-in-right w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-auto rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
