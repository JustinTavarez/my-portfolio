const skills = {
  "Languages & Frameworks": [
    "Java",
    "JavaScript",
    "React",
    "Vue.js",
    "Node.js",
  ],
  "Cloud & Data": ["AWS (Cloud Practitioner)", "S3", "EC2", "RDS basics", "MongoDB", "SQLite"],
  "Testing & Tools": ["Selenium WebDriver", "JUnit", "Mockito", "Git/GitHub", "VS Code"],
};

function Skills() {
  return (
    <section className="page">
      <h1>Skills</h1>
      <p>What I’m comfortable working with right now.</p>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-column">
            <h2>{category}</h2>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
